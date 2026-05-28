// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TCGC Adapter — Phase 1 of the emitter pipeline.
 *
 * This is the ONLY module that imports from @azure-tools/typespec-client-generator-core.
 * Its job is to consume the TCGC SdkContext and produce a TSCodeModel — our
 * language-specific intermediate representation.
 *
 * Downstream modules (codemodel, codegen) MUST NOT import TCGC types.
 * If you need data from TCGC in the renderer, add it to the code model here.
 *
 * Pattern: same as typespec-rust's `tcgcadapter/` and autorest.go's `TypeAdapter`.
 */

import type { EmitContext } from "@typespec/compiler";
import {
  createSdkContext,
  UsageFlags,
  type SdkArrayType,
  type SdkBuiltInType,
  type SdkClientType,
  type SdkConstantType,
  type SdkContext,
  type SdkCredentialParameter,
  type SdkDictionaryType,
  type SdkEndpointParameter,
  type SdkEndpointType,
  type SdkEnumType,
  type SdkMethodParameter,
  type SdkModelPropertyType,
  type SdkPathParameter,
  type SdkModelType,
  type SdkNullableType,
  type SdkServiceOperation,
  type SdkTupleType,
  type SdkType,
  type SdkUnionType
} from "@azure-tools/typespec-client-generator-core";
import type {
  TSClient,
  TSCodeModel,
  TSEndpoint,
  TSEnum,
  TSGenerationSettings,
  TSModel,
  TSParameter,
  TSProperty,
  TSUnion
} from "../codemodel/index.js";

/**
 * Adapts a TypeSpec emit context into a fully-resolved TSCodeModel.
 *
 * Internally calls createSdkContext() to get TCGC's language-neutral model,
 * then maps every TCGC construct into our TypeScript-specific IR types.
 *
 * @param context - TypeSpec emit context
 * @returns Complete code model ready for rendering
 */
export async function adaptSdkContext(context: EmitContext<Record<string, any>>): Promise<TSCodeModel> {
  const sdkContext = await createPristineSdkContext(context);

  const models = _adaptModels(sdkContext);

  const settings = _resolveSettings(context);
  return {
    settings,
    packageInfo: _resolvePackageInfo(settings, sdkContext),
    clients: _adaptClients(sdkContext),
    models,
    enums: _adaptEnums(sdkContext),
    unions: [],
    serializers: [
      {
        contentType: "application/json",
        models: models
          .filter((model) => model.needsSerializer || model.needsDeserializer)
          .map((model) => model.name)
      }
    ],
    helpers: [],
    pagingInfo: { hasPaging: false },
    pollingInfo: { hasLro: false, emitRestorePoller: false }
  };
}

async function createPristineSdkContext(context: EmitContext<Record<string, any>>): Promise<SdkContext> {
  context.options = {
    ...context.options,
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    emitters: [
      {
        main: "@azure-tools/typespec-ts-pristine",
        metadata: { name: "@azure-tools/typespec-ts-pristine" }
      }
    ]
  };

  return createSdkContext(context, "@azure-tools/typespec-ts-pristine", {
    flattenUnionAsEnum: false
  });
}

/**
 * Adapts TCGC clients into TSClient IR nodes.
 * Maps client hierarchy, parameters, methods, and operation groups.
 */
export function _adaptClients(sdkContext: SdkContext): TSClient[] {
  return sdkContext.sdkPackage.clients.map(adaptClient);
}

function adaptClient(client: SdkClientType<SdkServiceOperation>): TSClient {
  return {
    name: client.name,
    docs: getDocs(client),
    parameters: client.clientInitialization.parameters.map(adaptClientParameter),
    endpoint: adaptEndpoint(client),
    apiVersion: adaptApiVersion(client),
    operationGroups: getClientOperationGroupNames(client).map((name) => ({ name, operations: [] })),
    methods: [],
    children: (client.children ?? []).map(adaptClient)
  };
}

function adaptClientParameter(
  parameter: SdkCredentialParameter | SdkEndpointParameter | SdkMethodParameter
): TSParameter {
  const name = parameter.kind === "endpoint" && parameter.name === "endpoint" ? "endpointParam" : parameter.name;
  return {
    name,
    type: getClientParameterType(parameter),
    required: !parameter.optional,
    defaultValue: parameter.clientDefaultValue === undefined ? undefined : JSON.stringify(parameter.clientDefaultValue),
    docs: getDocs(parameter)
  };
}

function getClientParameterType(
  parameter: SdkCredentialParameter | SdkEndpointParameter | SdkMethodParameter
): string {
  if (parameter.kind === "endpoint") {
    return "string";
  }
  return getTypeExpression(parameter.type);
}

function adaptEndpoint(client: SdkClientType<SdkServiceOperation>): TSEndpoint {
  const endpointParameter = client.clientInitialization.parameters.find(
    (parameter): parameter is SdkEndpointParameter => parameter.kind === "endpoint"
  );
  const endpointType = endpointParameter ? getEndpointType(endpointParameter) : undefined;
  return {
    urlTemplate: endpointType?.serverUrl ?? "{endpoint}",
    isParameterized: (endpointType?.templateArguments.length ?? 0) > 0,
    templateParams: (endpointType?.templateArguments ?? []).map(adaptEndpointTemplateParameter)
  };
}

function adaptEndpointTemplateParameter(parameter: SdkPathParameter): TSParameter {
  return {
    name: parameter.name,
    type: getTypeExpression(parameter.type),
    required: !parameter.optional,
    defaultValue: parameter.clientDefaultValue === undefined ? undefined : JSON.stringify(parameter.clientDefaultValue),
    docs: getDocs(parameter)
  };
}

function getEndpointType(parameter: SdkEndpointParameter): SdkEndpointType | undefined {
  if (parameter.type.kind === "endpoint") {
    return parameter.type;
  }
  if (parameter.type.kind === "union") {
    return parameter.type.variantTypes.find((variant): variant is SdkEndpointType => variant.kind === "endpoint");
  }
  return undefined;
}

function adaptApiVersion(client: SdkClientType<SdkServiceOperation>): TSClient["apiVersion"] {
  const parameter = client.clientInitialization.parameters.find((item) => item.isApiVersionParam);
  if (!parameter) {
    return undefined;
  }
  return {
    paramName: parameter.name,
    defaultValue: parameter.clientDefaultValue === undefined ? undefined : String(parameter.clientDefaultValue),
    isInEndpoint: false
  };
}

function getClientOperationGroupNames(client: SdkClientType<SdkServiceOperation>): string[] {
  return (client.children ?? [])
    .filter((child) => child.methods.length > 0)
    .map((child) => lowerFirst(child.name));
}

/**
 * Adapts TCGC model types into TSModel IR nodes.
 * Maps properties, inheritance, discriminators, and additional properties.
 */
export function _adaptModels(sdkContext: SdkContext): TSModel[] {
  return sdkContext.sdkPackage.models.filter(shouldEmitModel).map(adaptModel);
}

function adaptModel(model: SdkModelType): TSModel {
  const name = getModelName(model);
  const needsSerializer = hasUsage(model, UsageFlags.Input);
  const needsDeserializer = hasUsage(model, UsageFlags.Output);
  return {
    name,
    docs: getDocs(model),
    properties: model.properties.map(adaptProperty),
    baseModel: model.baseModel ? getModelName(model.baseModel) : undefined,
    additionalPropertiesType: model.additionalProperties
      ? getTypeExpression(model.additionalProperties)
      : undefined,
    discriminator: model.discriminatorProperty
      ? {
          propertyName: model.discriminatorProperty.name,
          value: model.discriminatorValue,
          variants: Object.values(model.discriminatedSubtypes ?? {}).map(getModelName)
        }
      : undefined,
    needsSerializer,
    serializerName: needsSerializer ? `${lowerFirst(name)}Serializer` : undefined,
    needsDeserializer,
    deserializerName: needsDeserializer ? `${lowerFirst(name)}Deserializer` : undefined
  };
}

function adaptProperty(property: SdkModelPropertyType): TSProperty {
  const serializedName = getSerializedName(property);
  return {
    name: property.name,
    type: getTypeExpression(property.type),
    optional: property.optional,
    readonly: isReadonly(property),
    serializedName: serializedName === property.name ? undefined : serializedName,
    docs: getDocs(property)
  };
}

/**
 * Adapts TCGC enum types into TSEnum IR nodes.
 * Maps members, fixed/extensible semantics, and value types.
 */
export function _adaptEnums(sdkContext: SdkContext): TSEnum[] {
  return sdkContext.sdkPackage.enums.map(adaptEnum);
}

function adaptEnum(enumType: SdkEnumType): TSEnum {
  return {
    name: enumType.name,
    docs: getDocs(enumType),
    members: enumType.values.map((member) => ({ name: member.name, value: member.value })),
    isExtensible: !enumType.isFixed,
    valueType: enumType.valueType.kind === "numeric" ? "number" : "string"
  };
}

/**
 * Adapts TCGC union types into TSUnion IR nodes.
 * Maps variants and discriminator metadata.
 */
export function _adaptUnions(): TSUnion[] {
  return [];
}

/**
 * Resolves emitter options and program metadata into TSGenerationSettings.
 */
export function _resolveSettings(context: EmitContext<Record<string, any>>): TSGenerationSettings {
  const packageDetails = getRecordOption(context.options, "package-details");
  const packageName = getStringOption(packageDetails, "name") ?? "@azure-tools/typespec-ts-pristine";
  const packageVersion = getStringOption(packageDetails, "version") ?? "1.0.0-beta.1";

  return {
    packageName,
    packageVersion,
    flavor: packageName.startsWith("@azure/") ? "azure" : "unbranded",
    isArm: packageName.startsWith("@azure/arm-"),
    outputDir: context.emitterOutputDir,
    addCredentials: false,
    credentialScopes: [],
    isMultiClient: false,
    hierarchyClient: false
  };
}

function _resolvePackageInfo(settings: TSGenerationSettings, sdkContext: SdkContext): TSCodeModel["packageInfo"] {
  const clientName = sdkContext.sdkPackage.clients[0]?.name ?? `${toPascalCase(getPackageShortName(settings.packageName))}Client`;
  const serviceName = clientName.endsWith("Client") ? clientName.slice(0, -"Client".length) : clientName;
  return {
    name: settings.packageName,
    version: settings.packageVersion,
    serviceName,
    clientName,
    exports: [
      { subpath: ".", source: "./src/index.ts" },
      { subpath: "./models", source: "./src/models/index.ts" }
    ]
  };
}

function getTypeExpression(type: SdkType): string {
  switch (type.kind) {
    case "array":
      return `${wrapArrayElementType(getTypeExpression((type as SdkArrayType).valueType))}[]`;
    case "tuple":
      return `[${(type as SdkTupleType).valueTypes.map(getTypeExpression).join(", ")}]`;
    case "dict":
      return `Record<string, ${getTypeExpression((type as SdkDictionaryType).valueType)}>`;
    case "nullable":
      return `${getTypeExpression((type as SdkNullableType).type)} | null`;
    case "enum":
      return type.name;
    case "model":
      return getModelName(type as SdkModelType);
    case "enumvalue":
      return JSON.stringify(type.value);
    case "constant":
      return JSON.stringify((type as SdkConstantType).value);
    case "union":
      return (type as SdkUnionType).variantTypes.map(getTypeExpression).join(" | ");
    case "utcDateTime":
    case "offsetDateTime":
      return "Date";
    case "duration":
      return "string";
    default:
      return getBuiltInTypeExpression(type as SdkBuiltInType);
  }
}

function getBuiltInTypeExpression(type: SdkBuiltInType): string {
  switch (type.kind) {
    case "boolean":
      return "boolean";
    case "bytes":
      return "Uint8Array";
    case "numeric":
    case "integer":
    case "safeint":
    case "int8":
    case "int16":
    case "int32":
    case "int64":
    case "uint8":
    case "uint16":
    case "uint32":
    case "uint64":
    case "float":
    case "float32":
    case "float64":
      return "number";
    case "plainDate":
    case "plainTime":
    case "url":
    case "string":
      return "string";
    case "unknown":
      return "unknown";
    default:
      return "any";
  }
}

function shouldEmitModel(model: SdkModelType): boolean {
  return (
    !hasUsage(model, UsageFlags.Spread) &&
    (hasUsage(model, UsageFlags.Input) || hasUsage(model, UsageFlags.Output))
  );
}

function hasUsage(model: SdkModelType, usage: UsageFlags): boolean {
  return (model.usage & usage) === usage;
}

function getModelName(model: SdkModelType): string {
  return `${model.isGeneratedName ? "_" : ""}${model.name}`;
}

function lowerFirst(name: string): string {
  const prefix = name.startsWith("_") ? "_" : "";
  const body = prefix ? name.slice(1) : name;
  return `${prefix}${body.charAt(0).toLowerCase()}${body.slice(1)}`;
}

function wrapArrayElementType(type: string): string {
  return type.includes(" | ") ? `(${type})` : type;
}

function getPackageShortName(packageName: string): string {
  return packageName.split("/").at(-1) ?? packageName;
}

function toPascalCase(value: string): string {
  return value
    .split(/[^A-Za-z0-9]+/)
    .filter((part) => part.length > 0)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function getDocs(type: { doc?: string; summary?: string }): string[] {
  const docs = type.doc ?? type.summary;
  return docs ? docs.split(/\r?\n/) : [];
}

function getSerializedName(property: SdkModelPropertyType): string {
  return property.serializationOptions.json?.name ?? property.serializedName ?? property.name;
}

function isReadonly(property: SdkModelPropertyType): boolean {
  return (
    property.visibility?.some((visibility) => getVisibilityName(visibility) === "read") === true &&
    property.visibility.length === 1
  );
}

function getVisibilityName(visibility: unknown): string | undefined {
  return isRecord(visibility) && typeof visibility["name"] === "string" ? visibility["name"] : undefined;
}

function getRecordOption(options: object, key: string): Record<string, unknown> {
  const value = (options as Record<string, unknown>)[key];
  return isRecord(value) ? value : {};
}

function getStringOption(options: Record<string, unknown>, key: string): string | undefined {
  const value = options[key];
  return typeof value === "string" ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
