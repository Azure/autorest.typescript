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
  SdkBodyParameter,
  SdkClientType,
  SdkEnumType,
  SdkHttpParameter,
  SdkMethodParameter,
  SdkModelPropertyType,
  SdkModelType,
  SdkServiceOperation,
  SdkType,
  SdkUnionType
} from "@azure-tools/typespec-client-generator-core";
import {
  InitializedByFlags,
  UsageFlags,
  isReadOnly
} from "@azure-tools/typespec-client-generator-core";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import type { SdkContext } from "../utils/interfaces.js";
import type { ModularEmitterOptions } from "../modular/interfaces.js";
import {
  getClientName,
  getClassicalClientName,
  getOperationName
} from "../modular/helpers/namingHelpers.js";
import {
  getDocsFromDescription,
  getDocsWithTags
} from "../modular/helpers/docsHelpers.js";
import { getTypeExpression } from "../modular/type-expressions/get-type-expression.js";
import {
  getModularClientOptions,
  getClientHierarchyMap,
  isRLCMultiEndpoint
} from "../utils/clientUtils.js";
import {
  getClientParameters,
  getClientParameterName,
  buildGetClientCredentialParam
} from "../modular/helpers/clientHelpers.js";
import {
  getApiVersionEnum,
  buildEnumTypes,
  getModelNamespaces
} from "../modular/emitModels.js";
import {
  getMethodHierarchiesMap,
  hasDualFormatSupport,
  isTenantLevelOperation,
  type ServiceOperation
} from "../utils/operationUtil.js";
import {
  checkWrapNonModelReturn,
  getDeserializeExceptionHeadersPrivateFunction,
  getDeserializeHeadersPrivateFunction,
  getDeserializePrivateFunction,
  getExpectedStatuses,
  getOperationFunction,
  getOperationOptionsName,
  getOperationResponseTypeName,
  getPropertySerializedName,
  getSendPrivateFunction,
  isLroAndPagingOperation,
  isLroOnlyOperation,
  isPagingOnlyOperation
} from "../modular/helpers/operationHelpers.js";
import { isTypeNullable } from "../modular/helpers/typeHelpers.js";
import { isExtensibleEnum } from "../modular/type-expressions/get-enum-expression.js";
import { getDeprecationDetails } from "@typespec/compiler";
import { isOrExtendsHttpFile } from "@typespec/http";
import { isAzureCoreErrorType } from "../utils/modelUtils.js";
import { refkey } from "../framework/refkey.js";

import type {
  TSApiOptions,
  TSApiOptionsInterface,
  TSApiOptionsProperty,
  TSApiVersionConfig,
  TSClient,
  TSClientParameter,
  TSCodeModel,
  TSCredentialConfig,
  TSEndpointConfig,
  TSEnum,
  TSFunctionDeclaration,
  TSGenerationSettings,
  TSLroConfig,
  TSLroDeserializer,
  TSMethod,
  TSMethodKind,
  TSModel,
  TSOperationGroup,
  TSProperty,
  TSResponseTypeAlias,
  TSTypeReference,
  TSUnion,
  TSUnionVariant
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
  const models = adaptModels(sdkContext);
  const enums = adaptEnums(sdkContext);
  const unions = adaptUnions(sdkContext);

  return { clients, models, enums, unions, settings };
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
  const usesNamespacedContextType = isRLCMultiEndpoint(sdkContext);
  const operationClientType = usesNamespacedContextType
    ? `Client.${rlcClientName}`
    : "Client";
  const methods = adaptMethods(client, sdkContext, operationClientType);
  const operationGroups = adaptOperationGroups(
    client,
    sdkContext,
    operationClientType
  );
  const apiOptions = adaptApiOptions(client, sdkContext);
  const lroConfig = adaptLroConfig(client, sdkContext);

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
          apiOptions: [],
          children: [],
          hasParentInitializedChildren: false,
          allowOptionalSubscriptionId: shouldAllowOptionalSubscriptionId(
            childClient,
            sdkContext,
            childParams
          ),
          usesNamespacedContextType
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
    apiOptions,
    lroConfig,
    children,
    hasParentInitializedChildren,
    allowOptionalSubscriptionId: shouldAllowOptionalSubscriptionId(
      client,
      sdkContext,
      parameters
    ),
    usesNamespacedContextType
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
  const endpointParam = getClientParameters(client, sdkContext, {
    onClientOnly: true,
    skipEndpointTemplate: true,
    skipArmSpecific: true
  }).find(
    (parameter) => parameter.kind === "endpoint" || parameter.kind === "path"
  );
  const endpointParamName = endpointParam
    ? getClientParameterName(endpointParam)
    : undefined;

  return allParams.map((p) => {
    const hasEndpointTemplateDefaultValue =
      p.type.kind === "endpoint" &&
      !!(
        p.type.templateArguments[0]?.clientDefaultValue ||
        p.type.templateArguments[0]?.__raw?.defaultValue ||
        p.type.templateArguments[0]?.type?.kind === "constant"
      );
    const hasDefaultValue = !!(
      p.clientDefaultValue ||
      p.__raw?.defaultValue ||
      p.type.kind === "constant" ||
      hasEndpointTemplateDefaultValue
    );

    return {
      name: getClientParameterName(p),
      type: getTypeExpression(sdkContext, p.type),
      required: !p.optional && !hasDefaultValue,
      hasDefaultValue,
      defaultValue: p.clientDefaultValue,
      docs: getTaggedDocs(sdkContext, p),
      isApiVersion: !!p.isApiVersionParam,
      isEndpoint:
        getClientParameterName(p) === endpointParamName ||
        (p.kind === "endpoint" && p.type.kind !== "union") ||
        (p.kind === "endpoint" &&
          p.type.kind === "union" &&
          p.type.variantTypes.some((v) => v.kind === "endpoint")),
      isCredential: p.kind === "credential"
    };
  });
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

// ─── API Options / LRO Adapter ─────────────────────────────────────────

function adaptApiOptions(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext
): TSApiOptions[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);

  return [...methodMap.entries()].map(([prefixKey, operations]) => {
    const prefixes = getGroupPrefixes(prefixKey);
    return {
      prefixes,
      interfaces: operations.map((operation) =>
        adaptApiOptionsInterface(operation, prefixes, sdkContext)
      )
    };
  });
}

function adaptApiOptionsInterface(
  operation: ServiceOperation,
  prefixes: string[],
  sdkContext: SdkContext
): TSApiOptionsInterface {
  return {
    name: getOperationOptionsName([prefixes, operation], true),
    refKey: refkey(operation, "operationOptions"),
    properties: adaptApiOptionsProperties(operation, sdkContext)
  };
}

function adaptApiOptionsProperties(
  operation: ServiceOperation,
  sdkContext: SdkContext
): TSApiOptionsProperty[] {
  const properties: TSApiOptionsProperty[] = [];

  if (isLroOnlyOperation(operation) || isLroAndPagingOperation(operation)) {
    properties.push({
      name: "updateIntervalInMs",
      type: "number",
      docs: ["Delay to wait until next poll, in milliseconds."]
    });
  }

  const bodyContentTypes = operation.operation.bodyParam?.contentTypes ?? [];
  if (hasDualFormatSupport(bodyContentTypes)) {
    properties.push({
      name: "contentType",
      type: "string",
      docs: [
        'The content type for the request body. Defaults to "application/json". Use "application/xml" for XML serialization.'
      ]
    });
  }

  for (const parameter of operation.parameters) {
    if (
      parameter.onClient ||
      !(parameter.optional || parameter.clientDefaultValue)
    ) {
      continue;
    }

    if (
      parameter.isGeneratedName &&
      (parameter.name === "contentType" || parameter.name !== "accept")
    ) {
      continue;
    }

    properties.push({
      name: normalizeName(parameter.name, NameType.Parameter),
      type: getTypeExpression(sdkContext, parameter.type, { isOptional: true }),
      docs: getTaggedDocs(sdkContext, parameter)
    });
  }

  return properties;
}

function adaptLroConfig(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext
): TSLroConfig | undefined {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const deserializers: TSLroDeserializer[] = [];
  const existingNames = new Set<string>();

  for (const [prefixKey, operations] of methodMap) {
    const prefixes = getGroupPrefixes(prefixKey);
    const operationFileName = getOperationFileName(prefixes);

    for (const operation of operations.filter((candidate) =>
      isLroOnlyOperation(candidate)
    )) {
      const { name } = getOperationName(operation);
      const exportName = `_${name}Deserialize`;
      const localName = existingNames.has(exportName)
        ? `_${name}Deserialize${normalizeName(
            operationFileName.split("/").slice(0, -1).join("_"),
            NameType.Interface
          )}`
        : exportName;

      existingNames.add(exportName);
      deserializers.push({
        moduleSpecifier: `./api/${operationFileName}.js`,
        exportName,
        localName,
        path: `${operation.operation.verb.toUpperCase()} ${operation.operation.path}`,
        expectedStatusesExpression: getExpectedStatuses(operation)
      });
    }
  }

  if (deserializers.length === 0) {
    return undefined;
  }

  return {
    clientName: getClassicalClientName(client),
    deserializers
  };
}

function getGroupPrefixes(prefixKey: string): string[] {
  return prefixKey === "" ? [] : prefixKey.split("/");
}

function getOperationFileName(prefixes: string[]): string {
  if (prefixes.length === 0) {
    return "operations";
  }

  return `${prefixes
    .map((prefix) => normalizeName(prefix, NameType.File))
    .join("/")}/operations`;
}

// ─── Method Adapter ───────────────────────────────────────────────────

export function adaptMethods(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext,
  clientType: string = "Client"
): TSMethod[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const methods: TSMethod[] = [];

  for (const [prefixKey, operations] of methodMap) {
    if (prefixKey !== "") {
      continue;
    }

    for (const operation of operations) {
      methods.push(adaptMethod(operation, sdkContext, [], clientType));
    }
  }

  return methods;
}

function adaptMethod(
  operation: ServiceOperation,
  sdkContext: SdkContext,
  prefixes: string[] = [],
  clientType: string = "Client"
): TSMethod {
  const operationRef = [prefixes, operation] as [string[], ServiceOperation];
  const declaration = getOperationFunction(
    sdkContext,
    operationRef,
    clientType
  );
  const sendDeclaration = getSendPrivateFunction(
    sdkContext,
    operationRef,
    clientType
  );
  const deserializeDeclaration = getDeserializePrivateFunction(
    sdkContext,
    operationRef
  );
  const deserializeHeadersDeclaration = getDeserializeHeadersPrivateFunction(
    sdkContext,
    operation
  );
  const deserializeExceptionHeadersDeclaration =
    getDeserializeExceptionHeadersPrivateFunction(sdkContext, operation);
  const methodName =
    declaration.propertyName ?? declaration.name ?? operation.name;
  const description =
    getDocsFromDescription(operation.doc).join("\n") || undefined;

  const parameterDocs = getMethodFunctionParameterDocs(operation, sdkContext);
  const deprecation = getDeprecationMessage(sdkContext, operation);

  return {
    id: `method:${methodName}`,
    name: methodName,
    originalName: operation.oriName,
    apiRefKey: refkey(operation, "api"),
    kind: adaptMethodKind(operation),
    description,
    httpMethod: operation.operation.verb.toUpperCase(),
    route: {
      pathTemplate: operation.operation.path,
      verb: operation.operation.verb.toUpperCase()
    },
    parameters: adaptMethodParameters(operation, sdkContext),
    returnType: adaptMethodReturnType(
      operation,
      sdkContext,
      declaration.returnType?.toString()
    ),
    responseTypeAlias: adaptResponseTypeAlias(operation, sdkContext, prefixes),
    apiFunction: adaptFunctionDeclaration(declaration, {
      deprecation,
      parameterDocs
    }),
    sendFunction: adaptFunctionDeclaration(sendDeclaration),
    deserializeFunction: adaptFunctionDeclaration(deserializeDeclaration),
    deserializeHeadersFunction: deserializeHeadersDeclaration
      ? adaptFunctionDeclaration(deserializeHeadersDeclaration)
      : undefined,
    deserializeExceptionHeadersFunction: deserializeExceptionHeadersDeclaration
      ? adaptFunctionDeclaration(deserializeExceptionHeadersDeclaration)
      : undefined,
    compatibilityLroReturnType: declaration.lroFinalReturnType,
    compatibilityLroPagingReturnType: declaration.lropagingFinalReturnType
  };
}

function adaptResponseTypeAlias(
  operation: ServiceOperation,
  sdkContext: SdkContext,
  prefixes: string[]
): TSResponseTypeAlias | undefined {
  const { shouldWrap, isBinary } = checkWrapNonModelReturn(
    sdkContext,
    operation
  );
  if (!shouldWrap) {
    return undefined;
  }

  const isHeadAsBoolean =
    !operation.response.type &&
    operation.operation.verb.toLowerCase() === "head";

  return {
    name: getOperationResponseTypeName([prefixes, operation]),
    refKey: refkey(operation, "response"),
    kind: isBinary ? "binary" : isHeadAsBoolean ? "headAsBoolean" : "body",
    bodyType:
      isBinary || isHeadAsBoolean
        ? isHeadAsBoolean
          ? "boolean"
          : undefined
        : getTypeExpression(sdkContext, operation.response.type!)
  };
}

function adaptMethodKind(operation: ServiceOperation): TSMethodKind {
  if (isLroAndPagingOperation(operation)) {
    return "lroPaging";
  }

  if (isLroOnlyOperation(operation)) {
    return "lro";
  }

  if (isPagingOnlyOperation(operation)) {
    return "paging";
  }

  return "basic";
}

function adaptMethodParameters(
  operation: ServiceOperation,
  sdkContext: SdkContext
): TSMethod["parameters"] {
  const parameters: TSMethod["parameters"] = [];
  const seen = new Set<string>();

  for (const parameter of operation.parameters) {
    const httpLocation = getOperationParameterLocation(operation, parameter);
    if (!httpLocation || !shouldIncludeOperationParameter(parameter)) {
      continue;
    }

    parameters.push(adaptMethodParameter(parameter, httpLocation, sdkContext));
    seen.add(parameter.name);
  }

  const bodyParameter = operation.operation.bodyParam;
  if (
    bodyParameter &&
    shouldIncludeOperationParameter(bodyParameter) &&
    !seen.has(bodyParameter.name)
  ) {
    parameters.push(adaptMethodParameter(bodyParameter, "body", sdkContext));
  }

  return parameters;
}

function adaptMethodParameter(
  parameter: SdkMethodParameter | SdkBodyParameter,
  httpLocation: TSMethod["parameters"][number]["httpLocation"],
  sdkContext: SdkContext
): TSMethod["parameters"][number] {
  const defaultValue =
    parameter.clientDefaultValue ??
    (parameter as { __raw?: { defaultValue?: unknown } }).__raw?.defaultValue;

  return {
    name: parameter.name,
    type: getTypeExpression(sdkContext, parameter.type),
    optional: !!parameter.optional || defaultValue !== undefined,
    defaultValue,
    httpLocation,
    docs: getTaggedDocs(sdkContext, parameter)
  };
}

function getOperationParameterLocation(
  operation: ServiceOperation,
  parameter: SdkMethodParameter | SdkBodyParameter
): TSMethod["parameters"][number]["httpLocation"] | undefined {
  if (operation.operation.bodyParam === parameter) {
    return "body";
  }

  const httpParameter = operation.operation.parameters.find((candidate) =>
    isDirectMethodParameter(candidate, parameter)
  );

  if (!httpParameter) {
    return undefined;
  }

  if (
    httpParameter.kind === "query" ||
    httpParameter.kind === "header" ||
    httpParameter.kind === "path"
  ) {
    return httpParameter.kind;
  }

  return undefined;
}

function isDirectMethodParameter(
  httpParameter: SdkHttpParameter,
  parameter: SdkMethodParameter | SdkBodyParameter
): boolean {
  return (
    httpParameter.methodParameterSegments.length === 1 &&
    httpParameter.methodParameterSegments[0]?.length === 1 &&
    httpParameter.methodParameterSegments[0]?.[0] === parameter
  );
}

function shouldIncludeOperationParameter(
  parameter: SdkMethodParameter | SdkBodyParameter
): boolean {
  return !(
    parameter.onClient ||
    parameter.type.kind === "constant" ||
    (parameter.isGeneratedName &&
      (parameter.name === "contentType" || parameter.name === "accept"))
  );
}

function adaptMethodReturnType(
  operation: ServiceOperation,
  sdkContext: SdkContext,
  declarationReturnType: string | undefined
): TSMethod["returnType"] {
  const logicalReturnType = getLogicalReturnType(operation);

  return {
    type: String(declarationReturnType ?? "Promise<void>"),
    nullable: logicalReturnType ? isTypeNullable(logicalReturnType) : false,
    isVoid:
      !logicalReturnType && !isHeadAsBooleanOperation(operation, sdkContext)
  };
}

function getLogicalReturnType(operation: ServiceOperation) {
  if (isLroOnlyOperation(operation)) {
    return operation.lroMetadata?.finalResponse?.result;
  }

  return operation.response.type;
}

function isHeadAsBooleanOperation(
  operation: ServiceOperation,
  sdkContext: SdkContext
): boolean {
  if (operation.operation.verb.toLowerCase() !== "head") {
    return false;
  }

  return (
    (operation.response.type as { kind?: string } | undefined)?.kind ===
      "boolean" || !!sdkContext.rlcOptions?.headAsBoolean
  );
}

// ─── Operation Group Adapter ──────────────────────────────────────────

export function adaptOperationGroups(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext,
  clientType: string = "Client"
): TSOperationGroup[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const groups: TSOperationGroup[] = [];

  for (const [prefixKey, operations] of methodMap) {
    if (prefixKey === "") {
      continue;
    }

    const prefixes = prefixKey.split("/");
    const groupName = normalizeName(
      prefixes[prefixes.length - 1] ?? "",
      NameType.Interface
    );

    groups.push({
      name: groupName,
      prefixes,
      methods: operations.map((operation) =>
        adaptMethod(operation, sdkContext, prefixes, clientType)
      )
    });
  }

  return groups;
}

function getDeprecationMessage(
  sdkContext: SdkContext,
  target: { deprecation?: string; __raw?: unknown }
): string | undefined {
  if (target.deprecation && target.deprecation.trim().length > 0) {
    return target.deprecation;
  }

  if (!target.__raw) {
    return undefined;
  }

  return getDeprecationDetails(sdkContext.program, target.__raw as any)
    ?.message;
}

function getTaggedDocs(
  sdkContext: SdkContext,
  target: { doc?: string; deprecation?: string; __raw?: unknown },
  extraDocs: string[] = []
): string[] {
  return getDocsWithTags(target.doc, {
    deprecation: getDeprecationMessage(sdkContext, target),
    extraDocs
  });
}

function getMethodFunctionParameterDocs(
  operation: ServiceOperation,
  sdkContext: SdkContext
): Map<string, string[]> {
  const parameterDocs = new Map<string, string[]>();
  const parameters: Array<SdkMethodParameter | SdkBodyParameter> = [
    ...operation.parameters
  ];
  if (operation.operation.bodyParam) {
    parameters.push(operation.operation.bodyParam);
  }

  for (const parameter of parameters) {
    const docs = getTaggedDocs(sdkContext, parameter);
    if (docs.length > 0) {
      parameterDocs.set(parameter.name, docs);
    }
  }

  return parameterDocs;
}

function adaptFunctionDeclaration(
  declaration: any,
  options: {
    deprecation?: string;
    parameterDocs?: Map<string, string[]>;
  } = {}
): TSFunctionDeclaration {
  const params = (declaration.parameters ?? []).map((parameter: any) => {
    const paramType =
      typeof parameter.type === "string"
        ? parameter.type
        : parameter.type?.toString?.();
    const paramInitializer =
      typeof parameter.initializer === "string"
        ? parameter.initializer
        : typeof parameter.initializer === "function"
          ? undefined
          : parameter.initializer?.toString?.();
    const docs = [
      ...(Array.isArray(parameter.docs)
        ? parameter.docs.filter((d: any) => typeof d === "string")
        : []),
      ...(options.parameterDocs?.get(parameter.name ?? "") ?? [])
    ];
    return {
      name: parameter.name ?? "",
      type: paramType,
      initializer: paramInitializer,
      hasQuestionToken: parameter.hasQuestionToken,
      docs: docs.length > 0 ? docs : undefined
    };
  });

  const returnTypeValue =
    typeof declaration.returnType === "string"
      ? declaration.returnType
      : declaration.returnType?.toString?.();

  const docsValue = [
    ...(Array.isArray(declaration.docs)
      ? declaration.docs.filter((d: any) => typeof d === "string")
      : []),
    ...(options.deprecation ? [`@deprecated ${options.deprecation}`] : []),
    ...[...(options.parameterDocs?.entries() ?? [])].flatMap(([name, docs]) => {
      const deprecation = docs.find((doc) => doc.startsWith("@deprecated "));
      return deprecation
        ? [
            `@param ${name} Deprecated: ${deprecation.replace(/^@deprecated\s+/, "")}`
          ]
        : [];
    })
  ];

  const statementsValue =
    typeof declaration.statements === "string"
      ? declaration.statements
      : Array.isArray(declaration.statements)
        ? (declaration.statements as any[])
            .filter((s: any) => typeof s === "string")
            .join("\n")
        : undefined;

  return {
    name: declaration.name ?? "",
    docs: docsValue.length > 0 ? docsValue : undefined,
    isAsync: declaration.isAsync,
    isExported: declaration.isExported,
    propertyName: declaration.propertyName,
    returnType: returnTypeValue,
    parameters: params,
    statements: statementsValue
  };
}

function shouldAllowOptionalSubscriptionId(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext,
  parameters: TSClientParameter[]
): boolean {
  return (
    !!sdkContext.arm &&
    parameters.some(
      (parameter) => parameter.name.toLowerCase() === "subscriptionid"
    ) &&
    hasTenantLevelOperations(client, sdkContext)
  );
}

function hasTenantLevelOperations(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext
): boolean {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);

  for (const [, operations] of methodMap) {
    for (const operation of operations) {
      if (isTenantLevelOperation(operation, client)) {
        return true;
      }
    }
  }

  return false;
}

// ─── Model / Enum / Union Adapters ──────────────────────────────────────

export function adaptModels(sdkContext: SdkContext): TSModel[] {
  return sdkContext.sdkPackage.models
    .filter((model) => shouldAdaptModel(sdkContext, model))
    .map((model) => adaptModel(model, sdkContext));
}

export function adaptEnums(sdkContext: SdkContext): TSEnum[] {
  return sdkContext.sdkPackage.enums
    .filter((enumType) => shouldAdaptEnum(sdkContext, enumType))
    .map((enumType) => adaptEnum(enumType, sdkContext));
}

export function adaptUnions(sdkContext: SdkContext): TSUnion[] {
  return sdkContext.sdkPackage.unions
    .filter(
      (unionType): unionType is SdkUnionType => unionType.kind === "union"
    )
    .filter((unionType) => shouldAdaptUnion(unionType))
    .map((unionType) => adaptUnion(unionType, sdkContext));
}

function adaptModel(model: SdkModelType, sdkContext: SdkContext): TSModel {
  return {
    id: `model:${model.name}`,
    name: model.name,
    namespace: getModelNamespaces(sdkContext, model),
    docs: getTaggedDocs(sdkContext, model),
    properties: model.properties.map((property) =>
      adaptModelProperty(property, sdkContext)
    ),
    baseType: model.baseModel
      ? adaptTypeReference(sdkContext, model.baseModel)
      : undefined,
    additionalPropertiesType: model.additionalProperties
      ? adaptTypeReference(sdkContext, model.additionalProperties)
      : undefined,
    discriminator: adaptModelDiscriminator(model, sdkContext)
  };
}

function adaptModelProperty(
  property: SdkModelPropertyType,
  sdkContext: SdkContext
): TSProperty {
  return {
    name: adaptPropertyName(property, sdkContext),
    type: adaptTypeReference(sdkContext, property.type),
    docs: getTaggedDocs(sdkContext, property),
    optional: property.optional,
    readonly: isReadOnly(property),
    serializedName: getPropertySerializedName(property),
    isDiscriminator: property.discriminator,
    isFlattened: property.flatten
  };
}

function adaptModelDiscriminator(
  model: SdkModelType,
  sdkContext: SdkContext
): TSModel["discriminator"] {
  const discriminatorProperty =
    model.discriminatorProperty ?? model.baseModel?.discriminatorProperty;
  if (
    !discriminatorProperty &&
    !model.discriminatorValue &&
    !model.discriminatedSubtypes
  ) {
    return undefined;
  }

  return {
    propertyName: discriminatorProperty
      ? adaptPropertyName(discriminatorProperty, sdkContext)
      : "discriminator",
    serializedName: discriminatorProperty
      ? getPropertySerializedName(discriminatorProperty)
      : undefined,
    value: model.discriminatorValue,
    derivedTypes: Object.values(model.discriminatedSubtypes ?? {}).map(
      (subtype) => adaptTypeReference(sdkContext, subtype)
    )
  };
}

function adaptEnum(enumType: SdkEnumType, sdkContext: SdkContext): TSEnum {
  return {
    id: `enum:${enumType.name}`,
    name: enumType.name,
    namespace: getModelNamespaces(sdkContext, enumType),
    docs: getTaggedDocs(sdkContext, enumType),
    members: enumType.values.map((member) => ({
      name: member.name,
      value: member.value,
      docs: getTaggedDocs(sdkContext, member)
    })),
    isFixed: enumType.isFixed,
    isExtensible: !enumType.isFixed,
    valueType: adaptTypeReference(sdkContext, enumType.valueType)
  };
}

function adaptUnion(unionType: SdkUnionType, sdkContext: SdkContext): TSUnion {
  return {
    id: `union:${unionType.name}`,
    name: unionType.name,
    namespace: getModelNamespaces(sdkContext, unionType),
    docs: getTaggedDocs(sdkContext, unionType),
    variants: adaptUnionVariants(unionType, sdkContext),
    discriminator: unionType.discriminatedOptions
      ? {
          propertyName:
            unionType.discriminatedOptions.discriminatorPropertyName,
          envelope: unionType.discriminatedOptions.envelope,
          envelopePropertyName:
            unionType.discriminatedOptions.envelopePropertyName
        }
      : undefined
  };
}

function adaptUnionVariants(
  unionType: SdkUnionType,
  sdkContext: SdkContext
): TSUnionVariant[] {
  const rawVariantNames = getRawUnionVariantNames(unionType);

  return unionType.variantTypes.map((variant, index) => ({
    name: rawVariantNames[index],
    type: adaptTypeReference(sdkContext, variant)
  }));
}

function getRawUnionVariantNames(
  unionType: SdkUnionType
): Array<string | undefined> {
  const rawUnion = unionType.__raw;
  if (!rawUnion || !("variants" in rawUnion)) {
    return [];
  }

  return [...rawUnion.variants.keys()].map((name) =>
    typeof name === "string" ? name : undefined
  );
}

function adaptTypeReference(
  sdkContext: SdkContext,
  type: SdkType
): TSTypeReference {
  switch (type.kind) {
    case "model":
    case "enum":
    case "union":
      return type.name;
    case "array":
      return `Array<${adaptTypeReference(sdkContext, type.valueType)}>`;
    case "dict":
      return `Record<string, ${adaptTypeReference(sdkContext, type.valueType)}>`;
    case "nullable":
      return `${adaptTypeReference(sdkContext, type.type)} | null`;
    case "constant":
    case "enumvalue":
      return JSON.stringify(type.value);
    default:
      if ("name" in type && typeof type.name === "string") {
        return type.name;
      }
      return getTypeExpression(sdkContext, type);
  }
}

function adaptPropertyName(
  property: SdkModelPropertyType,
  sdkContext: SdkContext
): string {
  return sdkContext.rlcOptions?.ignorePropertyNameNormalize
    ? property.name
    : normalizeName(property.name, NameType.Property);
}

function shouldAdaptModel(
  sdkContext: SdkContext,
  model: SdkModelType
): boolean {
  if (isAzureCoreErrorType(sdkContext.program, model.__raw)) {
    return false;
  }

  if (isOrExtendsHttpFile(sdkContext.program, model.__raw!)) {
    return false;
  }

  if (!model.name && model.isGeneratedName) {
    return false;
  }

  return hasModelUsage(model.usage);
}

function hasModelUsage(usage: UsageFlags | undefined): boolean {
  if (!usage) {
    return false;
  }

  return (
    (usage & UsageFlags.Input) === UsageFlags.Input ||
    (usage & UsageFlags.Output) === UsageFlags.Output ||
    (usage & UsageFlags.Exception) === UsageFlags.Exception
  );
}

function shouldAdaptEnum(
  sdkContext: SdkContext,
  enumType: SdkEnumType
): boolean {
  if (!enumType.usage) {
    return false;
  }

  const apiVersionEnumOnly = enumType.usage === UsageFlags.ApiVersionEnum;
  if (apiVersionEnumOnly && sdkContext.rlcOptions?.isMultiService) {
    return false;
  }

  if (enumType.name.startsWith("_")) {
    return false;
  }

  return (
    apiVersionEnumOnly ||
    hasModelUsage(enumType.usage) ||
    isExtensibleEnum(sdkContext, enumType)
  );
}

function shouldAdaptUnion(unionType: SdkUnionType): boolean {
  return !!unionType.name;
}
