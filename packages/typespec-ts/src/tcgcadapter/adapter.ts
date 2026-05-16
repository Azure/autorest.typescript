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
import {
  getMethodHierarchiesMap,
  type ServiceOperation
} from "../utils/operationUtil.js";
import {
  getOperationFunction,
  getPropertySerializedName,
  isLroAndPagingOperation,
  isLroOnlyOperation,
  isPagingOnlyOperation
} from "../modular/helpers/operationHelpers.js";
import { isTypeNullable } from "../modular/helpers/typeHelpers.js";
import { isExtensibleEnum } from "../modular/type-expressions/get-enum-expression.js";
import { isOrExtendsHttpFile } from "@typespec/http";
import { isAzureCoreErrorType } from "../utils/modelUtils.js";

import type {
  TSApiVersionConfig,
  TSClient,
  TSClientParameter,
  TSCodeModel,
  TSCredentialConfig,
  TSEndpointConfig,
  TSEnum,
  TSGenerationSettings,
  TSMethod,
  TSMethodKind,
  TSModel,
  TSOperationGroup,
  TSProperty,
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
  const methods = adaptMethods(client, sdkContext);
  const operationGroups = adaptOperationGroups(client, sdkContext);

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

export function adaptMethods(
  client: SdkClientType<SdkServiceOperation>,
  sdkContext: SdkContext
): TSMethod[] {
  const methodMap = getMethodHierarchiesMap(sdkContext, client);
  const methods: TSMethod[] = [];

  for (const [prefixKey, operations] of methodMap) {
    if (prefixKey !== "") {
      continue;
    }

    for (const operation of operations) {
      methods.push(adaptMethod(operation, sdkContext));
    }
  }

  return methods;
}

function adaptMethod(
  operation: ServiceOperation,
  sdkContext: SdkContext
): TSMethod {
  const declaration = getOperationFunction(
    sdkContext,
    [[], operation],
    "Client"
  );
  const methodName =
    declaration.propertyName ?? declaration.name ?? operation.name;
  const description =
    getDocsFromDescription(operation.doc).join("\n") || undefined;

  return {
    id: `method:${methodName}`,
    name: methodName,
    originalName: operation.oriName,
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
    )
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
    httpLocation
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
  sdkContext: SdkContext
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
      methods: operations.map((operation) => adaptMethod(operation, sdkContext))
    });
  }

  return groups;
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
    .filter((unionType): unionType is SdkUnionType => unionType.kind === "union")
    .filter((unionType) => shouldAdaptUnion(unionType))
    .map((unionType) => adaptUnion(unionType, sdkContext));
}

function adaptModel(model: SdkModelType, sdkContext: SdkContext): TSModel {
  return {
    id: `model:${model.name}`,
    name: model.name,
    docs: getDocsFromDescription(model.doc),
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
    docs: getDocsFromDescription(enumType.doc),
    members: enumType.values.map((member) => ({
      name: member.name,
      value: member.value
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
    docs: getDocsFromDescription(unionType.doc),
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
