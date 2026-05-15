// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TCGC Adapter — transforms TCGC's language-neutral SDK model into
 * the TypeScript-specific code model (TSCodeModel).
 *
 * This is the TypeScript equivalent of:
 * - Go's `tcgcadapter/adapter.ts` → `tcgcToGoCodeModel()`
 * - Rust's `tcgcadapter/adapter.ts` → `tcgcToCrate()`
 *
 * This is the ONLY layer that imports TCGC types. The code model and
 * codegen layers have zero TCGC knowledge.
 *
 * The adapter receives all dependencies explicitly — no global hooks.
 */

import type {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { InitializedByFlags } from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import type { SdkContext } from "../utils/interfaces.js";
import type { ModularEmitterOptions } from "../modular/interfaces.js";
import {
  getClientName,
  getClassicalClientName
} from "../modular/helpers/namingHelpers.js";
import { getDocsFromDescription } from "../modular/helpers/docsHelpers.js";
import { getTypeExpression } from "../modular/type-expressions/get-type-expression.js";
import {
  getModularClientOptions,
  getClientHierarchyMap
} from "../utils/clientUtils.js";
import {
  getClientParameters,
  getClientParameterName,
  buildGetClientCredentialParam
} from "../modular/helpers/clientHelpers.js";
import { getApiVersionEnum, buildEnumTypes } from "../modular/emitModels.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { getOperationFunction } from "../modular/helpers/operationHelpers.js";

import type {
  TSCodeModel,
  TSClient,
  TSEndpointConfig,
  TSCredentialConfig,
  TSClientParameter,
  TSApiVersionConfig,
  TSMethod,
  TSMethodKind,
  TSOperationGroup,
  TSGenerationSettings
} from "../codemodel/index.js";

// ─── Type alias for TCGC parameter union ──────────────────────────────

// Used internally by parameter adapters

// ─── Adapter Input ────────────────────────────────────────────────────

export interface AdapterInput {
  sdkContext: SdkContext;
  emitterOptions: ModularEmitterOptions;
}

// ─── Main Adapter ─────────────────────────────────────────────────────

/**
 * Transform TCGC SDK model into a TypeScript code model.
 *
 * This is the single entry point for all TCGC interpretation.
 * After this function returns, no TCGC types should be needed.
 */
export function adaptToCodeModel(input: AdapterInput): TSCodeModel {
  const { sdkContext, emitterOptions } = input;

  const settings = adaptSettings(sdkContext, emitterOptions);
  const clientMaps = getClientHierarchyMap(sdkContext);
  const clients = clientMaps.map((clientMap) =>
    adaptClient(sdkContext, clientMap, emitterOptions, settings)
  );

  return { clients, settings };
}

/**
 * Adapt a single client from a client map entry.
 * Used when the emitter iterates clients individually.
 */
export function adaptSingleClient(
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  sdkContext: SdkContext,
  emitterOptions: ModularEmitterOptions
): TSClient {
  const settings = adaptSettings(sdkContext, emitterOptions);
  return adaptClient(sdkContext, clientMap, emitterOptions, settings);
}

// ─── Settings Adapter ─────────────────────────────────────────────────

export function adaptSettings(
  sdkContext: SdkContext,
  emitterOptions: ModularEmitterOptions
): TSGenerationSettings {
  return {
    flavor: sdkContext.rlcOptions?.flavor === "azure" ? "azure" : "unbranded",
    isArm: !!sdkContext.arm,
    sourceRoot: emitterOptions.modularOptions.sourceRoot,
    packageName:
      emitterOptions.options.packageDetails?.nameWithoutScope ??
      emitterOptions.options.packageDetails?.name,
    packageVersion: emitterOptions.options.packageDetails?.version,
    addCredentials: !!emitterOptions.options.addCredentials,
    credentialScopes: emitterOptions.options.credentialScopes,
    credentialKeyHeaderName: emitterOptions.options.credentialKeyHeaderName,
    customHttpAuthHeaderName: emitterOptions.options.customHttpAuthHeaderName,
    customHttpAuthSharedKeyPrefix:
      emitterOptions.options.customHttpAuthSharedKeyPrefix,
    compatibilityLro: sdkContext.rlcOptions?.compatibilityLro,
    isMultiService: sdkContext.rlcOptions?.isMultiService,
    hierarchyClient: sdkContext.rlcOptions?.hierarchyClient
  };
}

// ─── Client Adapter ───────────────────────────────────────────────────

function adaptClient(
  sdkContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions,
  settings: TSGenerationSettings
): TSClient {
  const [hierarchy, client] = clientMap;
  const name = getClassicalClientName(client);
  const modularName = getClientName(client);
  const { rlcClientName } = getModularClientOptions(clientMap);

  const parameters = adaptClientParameters(sdkContext, client);
  const endpoint = adaptEndpoint(sdkContext, client, settings);
  const credential = adaptCredential(client, emitterOptions);
  const apiVersion = adaptApiVersion(sdkContext, client);
  const methods = adaptMethods(sdkContext, client, clientMap);
  const operationGroups = adaptOperationGroups(sdkContext, client, clientMap);

  const hasParentInitializedChildren = !!(
    client.children &&
    client.children.some(
      (c) => c.clientInitialization.initializedBy & InitializedByFlags.Parent
    )
  );

  const children: TSClient[] = [];
  if (client.children) {
    for (const childClient of client.children) {
      if (
        childClient.clientInitialization.initializedBy &
        InitializedByFlags.Parent
      ) {
        // Minimal child client representation for accessor generation
        const childName = getClassicalClientName(childClient);
        const childParams = adaptClientParameters(sdkContext, childClient);
        children.push({
          id: `client:${childName}`,
          name: childName,
          modularName: getClientName(childClient),
          contextTypeName: rlcClientName,
          docs: getDocsFromDescription(childClient.doc),
          path: [...hierarchy, childClient.name],
          endpoint: adaptEndpoint(sdkContext, childClient, settings),
          credential: adaptCredential(childClient, emitterOptions),
          parameters: childParams,
          methods: [],
          operationGroups: [],
          children: [],
          hasParentInitializedChildren: false
        });
      }
    }
  }

  return {
    id: `client:${name}`,
    name,
    modularName,
    contextTypeName: rlcClientName,
    docs: getDocsFromDescription(client.doc),
    path: hierarchy,
    endpoint,
    credential,
    parameters,
    apiVersion,
    methods,
    operationGroups,
    children,
    hasParentInitializedChildren
  };
}

// ─── Parameter Adapter ────────────────────────────────────────────────

function adaptClientParameters(
  sdkContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>
): TSClientParameter[] {
  const allParams = getClientParameters(client, sdkContext, {
    onClientOnly: false
  });

  return allParams.map((p) => ({
    name: getClientParameterName(p),
    type: getTypeExpression(sdkContext, p.type),
    required: !p.optional && !p.clientDefaultValue,
    hasDefaultValue: !!(
      p.clientDefaultValue ||
      p.__raw?.defaultValue ||
      p.type.kind === "constant"
    ),
    defaultValue: p.clientDefaultValue,
    docs: getDocsFromDescription(p.doc),
    isApiVersion: !!p.isApiVersionParam,
    isEndpoint:
      (p.kind === "endpoint" && p.type.kind !== "union") ||
      (p.kind === "endpoint" &&
        p.type.kind === "union" &&
        p.type.variantTypes.some((v) => v.kind === "endpoint")),
    isCredential: p.kind === "credential"
  }));
}

// ─── Endpoint Adapter ─────────────────────────────────────────────────

function adaptEndpoint(
  sdkContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  settings: TSGenerationSettings
): TSEndpointConfig {
  const endpointParam = getClientParameters(client, sdkContext, {
    onClientOnly: true,
    skipEndpointTemplate: true,
    skipArmSpecific: true
  }).find((x) => x.kind === "endpoint" || x.kind === "path");

  if (!endpointParam) {
    return {
      isParameterized: false,
      templateParameters: [],
      useArmCloudEndpoint: settings.isArm
    };
  }

  if (
    endpointParam.type.kind === "union" &&
    endpointParam.type.variantTypes[0]?.kind === "endpoint"
  ) {
    const templateArgs = endpointParam.type.variantTypes[0].templateArguments;
    return {
      isParameterized: true,
      serverUrl: endpointParam.type.variantTypes[0].serverUrl,
      templateParameters: templateArgs.map((tp) => ({
        name: getClientParameterName(tp),
        clientDefaultValue: tp.clientDefaultValue,
        isOptional: !!tp.optional,
        tcgcName: tp.name
      })),
      useArmCloudEndpoint: settings.isArm
    };
  }

  if (endpointParam.type.kind === "endpoint") {
    const firstArg = endpointParam.type.templateArguments[0];
    return {
      isParameterized: false,
      serverUrl: endpointParam.type.serverUrl,
      templateParameters: firstArg
        ? [
            {
              name: getClientParameterName(firstArg),
              clientDefaultValue: firstArg.clientDefaultValue,
              isOptional: !!firstArg.optional,
              tcgcName: firstArg.name
            }
          ]
        : [],
      useArmCloudEndpoint: settings.isArm
    };
  }

  return {
    isParameterized: false,
    templateParameters: [],
    useArmCloudEndpoint: settings.isArm
  };
}

// ─── Credential Adapter ───────────────────────────────────────────────

function adaptCredential(
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
): TSCredentialConfig {
  const credParam = buildGetClientCredentialParam(client, emitterOptions);
  return {
    hasCredentials: credParam !== "undefined",
    parameterName: credParam
  };
}

// ─── API Version Adapter ──────────────────────────────────────────────

function adaptApiVersion(
  sdkContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>
): TSApiVersionConfig | undefined {
  const params = getClientParameters(client, sdkContext);
  const apiVersionParam = params.find((x) => x.isApiVersionParam);
  if (!apiVersionParam) return undefined;

  const paramName = getClientParameterName(apiVersionParam);

  // Check if api version is in endpoint template
  const endpointParam = getClientParameters(client, sdkContext, {
    onClientOnly: false,
    requiredOnly: true,
    skipEndpointTemplate: true
  }).find((x) => x.kind === "endpoint");

  let isInEndpointTemplate = false;
  if (endpointParam) {
    const templateArgs =
      endpointParam.type.kind === "endpoint"
        ? endpointParam.type.templateArguments
        : endpointParam.type.kind === "union"
          ? endpointParam.type.variantTypes[0]?.templateArguments
          : [];
    isInEndpointTemplate = !!(
      templateArgs && templateArgs.find((p) => p.isApiVersionParam)
    );
  }

  // Get known values enum name
  let knownValuesEnumName: string | undefined;
  const apiVersionEnum = getApiVersionEnum(sdkContext);
  if (apiVersionEnum) {
    const [_, knownValuesEnum] = buildEnumTypes(
      sdkContext,
      apiVersionEnum,
      true
    );
    knownValuesEnumName = knownValuesEnum.name;
  }

  return {
    parameterName: paramName,
    isInEndpointTemplate,
    clientDefaultValue: apiVersionParam.clientDefaultValue,
    knownValuesEnumName
  };
}

// ─── Method Adapter ───────────────────────────────────────────────────

function adaptMethods(
  sdkContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  clientMap: [string[], SdkClientType<SdkServiceOperation>]
): TSMethod[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const methods: TSMethod[] = [];

  for (const [prefixKey, operations] of methodMap) {
    if (prefixKey !== "") continue; // Only top-level methods here
    for (const op of operations) {
      methods.push(adaptMethod(sdkContext, op, clientMap));
    }
  }

  return methods;
}

function adaptMethod(
  sdkContext: SdkContext,
  operation: any,
  clientMap: [string[], SdkClientType<SdkServiceOperation>]
): TSMethod {
  const { rlcClientName } = getModularClientOptions(clientMap);

  // Use getOperationFunction to get the full declaration
  // (Option A: we call this helper which internally resolves references)
  const prefixes = [""];
  const declaration = getOperationFunction(
    sdkContext,
    [prefixes, operation],
    rlcClientName
  );
  const methodName = declaration.propertyName ?? declaration.name ?? "FIXME";
  const params = (declaration.parameters ?? [])
    .filter((p) => p.name !== "context")
    .map((p) => ({
      name: p.name,
      type: p.type?.toString() ?? "any",
      optional: !!p.hasQuestionToken,
      docs: [] as string[]
    }));

  let kind: TSMethodKind = "basic";
  if (declaration.isLro && declaration.isLroPaging) {
    kind = "lroPaging";
  } else if (declaration.isLro) {
    kind = "lro";
  } else if (
    String(declaration.returnType ?? "").includes("PagedAsyncIterableIterator")
  ) {
    kind = "paging";
  }

  return {
    id: `method:${methodName}`,
    name: methodName,
    oriName: operation.oriName,
    kind,
    parameters: params,
    returnType: String(declaration.returnType ?? "void"),
    docs: (declaration.docs ?? []).map(String),
    route: {
      path: operation.operation?.path ?? "",
      method: operation.operation?.verb ?? "get"
    },
    lro: declaration.isLro
      ? { finalReturnType: declaration.lroFinalReturnType ?? "void" }
      : undefined,
    paging: declaration.isLroPaging
      ? {
          itemType: declaration.lropagingFinalReturnType ?? "void"
        }
      : undefined
  };
}

// ─── Operation Group Adapter ──────────────────────────────────────────

function adaptOperationGroups(
  sdkContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  clientMap: [string[], SdkClientType<SdkServiceOperation>]
): TSOperationGroup[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const groups: TSOperationGroup[] = [];

  for (const [prefixKey, operations] of methodMap) {
    if (prefixKey === "") continue;
    const prefixes = prefixKey.split("/");
    const groupName = normalizeName(prefixes[0] ?? "", NameType.Interface);

    // Check if group already exists
    let group = groups.find((g) => g.name === groupName);
    if (!group) {
      group = { name: groupName, prefixes, methods: [] };
      groups.push(group);
    }

    for (const op of operations) {
      group.methods.push(adaptMethod(sdkContext, op, clientMap));
    }
  }

  return groups;
}
