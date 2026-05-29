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
  type SdkHttpOperation,
  type SdkHttpParameter,
  type SdkMethodParameter,
  type SdkModelPropertyType,
  type SdkPathParameter,
  type SdkModelType,
  type SdkNullableType,
  type SdkServiceMethod,
  type SdkServiceOperation,
  type SdkTupleType,
  type SdkType,
  type SdkUnionType,
} from "@azure-tools/typespec-client-generator-core";
import type {
  TSClient,
  TSCodeModel,
  TSEndpoint,
  TSEnum,
  TSGenerationSettings,
  TSModel,
  TSOperation,
  TSOperationGroup,
  TSOperationParameter,
  TSOptionsType,
  TSParameter,
  TSProperty,
  TSReturnType,
  TSUnion,
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
export async function adaptSdkContext(
  context: EmitContext<Record<string, any>>,
): Promise<TSCodeModel> {
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
          .map((model) => model.name),
      },
    ],
    helpers: _adaptHelpers(sdkContext),
    pagingInfo: { hasPaging: false },
    pollingInfo: { hasLro: false, emitRestorePoller: false },
  };
}

async function createPristineSdkContext(
  context: EmitContext<Record<string, any>>,
): Promise<SdkContext> {
  context.options = {
    ...context.options,
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    emitters: [
      {
        main: "@azure-tools/typespec-ts-pristine",
        metadata: { name: "@azure-tools/typespec-ts-pristine" },
      },
    ],
  };

  return createSdkContext(context, "@azure-tools/typespec-ts-pristine", {
    flattenUnionAsEnum: false,
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
    parameters:
      client.clientInitialization.parameters.map(adaptClientParameter),
    endpoint: adaptEndpoint(client),
    apiVersion: adaptApiVersion(client),
    credential: adaptCredential(client),
    operationGroups: _adaptOperations(client),
    methods: client.methods.map(adaptOperation).reverse(),
    children: (client.children ?? []).map(adaptClient),
  };
}

/**
 * Adapts operation groups and operations from a TCGC client.
 */
export function _adaptOperations(
  sdkClient: SdkClientType<SdkServiceOperation>,
  _sdkContext?: SdkContext,
): TSOperationGroup[] {
  return (sdkClient.children ?? [])
    .filter((child) => child.methods.length > 0)
    .map((child) => ({
      name: lowerFirst(child.name),
      operations: child.methods.map(adaptOperation).reverse(),
    }));
}

function adaptOperation(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): TSOperation {
  const bodyType = sdkMethod.operation.bodyParam?.type;
  return {
    name: lowerFirst(sdkMethod.name),
    docs: getDocs(sdkMethod),
    kind: sdkMethod.kind === "lropaging" ? "lroPaging" : sdkMethod.kind,
    httpMethod: sdkMethod.operation.verb.toUpperCase(),
    path: sdkMethod.operation.path,
    parameters: _adaptOperationParameters(sdkMethod),
    returnType: adaptReturnType(sdkMethod),
    optionsType: _adaptOptionsType(sdkMethod),
    bodyShape: getBodyShape(bodyType),
    contentType: getOperationContentType(sdkMethod),
    apiVersionQuery: getOperationApiVersionQuery(sdkMethod),
    expectedStatuses: getExpectedStatuses(sdkMethod),
  };
}

export function _adaptOperationParameters(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): TSOperationParameter[] {
  return sdkMethod.parameters
    .filter((parameter) => !shouldSkipGeneratedMethodParameter(parameter))
    .filter(
      (parameter) =>
        !parameter.onClient &&
        !isConstantContentTypeParameter(parameter) &&
        !(parameter.optional || parameter.clientDefaultValue !== undefined),
    )
    .map((parameter) => ({
      name: parameter.name,
      location: getOperationParameterLocation(sdkMethod, parameter),
      type: getOperationParameterType(parameter),
      required: !parameter.optional,
      defaultValue:
        parameter.clientDefaultValue === undefined
          ? undefined
          : JSON.stringify(parameter.clientDefaultValue),
      docs: getDocs(parameter),
    }));
}

export function _adaptOptionsType(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): TSOptionsType {
  return {
    name: `${toPascalCase(getOperationGroupName(sdkMethod))}${toPascalCase(sdkMethod.name)}OptionalParams`,
    properties: sdkMethod.parameters
      .filter((parameter) => !shouldSkipGeneratedMethodParameter(parameter))
      .filter(
        (parameter) =>
          !parameter.onClient &&
          (parameter.optional || parameter.clientDefaultValue !== undefined),
      )
      .map((parameter) => ({
        name: parameter.name,
        type: getTypeExpression(parameter.type),
        optional: true,
        readonly: false,
        docs: getDocs(parameter),
      })),
  };
}

function adaptReturnType(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): TSReturnType {
  const type = sdkMethod.response.type;
  return {
    type: type ? getTypeExpression(type) : "void",
    isVoid: type === undefined,
    nullable: sdkMethod.response.optional === true,
  };
}

function getExpectedStatuses(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): string[] {
  return sdkMethod.operation.responses.flatMap((response) => {
    const statusCodes = response.statusCodes;
    if (typeof statusCodes === "number") {
      return [String(statusCodes)];
    }
    return [`${statusCodes.start}-${statusCodes.end}`];
  });
}

function getBodyShape(bodyType: SdkHttpOperation["bodyParam"] extends infer Body ? Body extends { type?: infer Type } ? Type : SdkType | undefined : SdkType | undefined): TSOperation["bodyShape"] {
  if (!bodyType) {
    return "inline";
  }
  if (bodyType.kind === "bytes") {
    return "raw";
  }
  return bodyType.kind === "model" && shouldEmitModel(bodyType as SdkModelType)
    ? "named-with-serializer"
    : "inline";
}

function getOperationContentType(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): string | undefined {
  const bodyContentType = sdkMethod.operation.bodyParam?.contentTypes?.[0];
  if (bodyContentType) {
    return bodyContentType;
  }
  const contentTypeParam = sdkMethod.operation.parameters.find(
    (parameter) => parameter.kind === "header" && parameter.serializedName?.toLowerCase() === "content-type",
  );
  return contentTypeParam?.type.kind === "constant"
    ? String((contentTypeParam.type as SdkConstantType).value)
    : undefined;
}

function getOperationApiVersionQuery(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): TSOperation["apiVersionQuery"] {
  const parameter = sdkMethod.operation.parameters.find(
    (item) => item.kind === "query" && item.isApiVersionParam,
  );
  if (!parameter) {
    return undefined;
  }
  const serializedName = parameter.serializedName ?? parameter.name;
  return {
    serializedName,
    encodedName: encodeUriTemplateVariableName(serializedName),
    defaultValue: String(parameter.clientDefaultValue),
  };
}

function encodeUriTemplateVariableName(name: string): string {
  return encodeURIComponent(name).replace(/-/g, "%2D");
}

function getOperationParameterLocation(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
  parameter: SdkMethodParameter,
): TSOperationParameter["location"] {
  if (isMappedFromBody(sdkMethod.operation.bodyParam, parameter)) {
    return "body";
  }

  const httpParameter = sdkMethod.operation.parameters.find((item) =>
    isMappedFromHttpParameter(item, parameter),
  );
  if (
    httpParameter?.kind === "query" ||
    httpParameter?.kind === "path" ||
    httpParameter?.kind === "header"
  ) {
    return httpParameter.kind;
  }

  return "body";
}

function getOperationParameterType(parameter: SdkMethodParameter): string {
  if (parameter.type.kind === "bytes") {
    return "Uint8Array";
  }
  if (
    parameter.type.kind === "model" &&
    (parameter.type as SdkModelType).isGeneratedName
  ) {
    return getInlineModelType(parameter.type as SdkModelType);
  }
  return getTypeExpression(parameter.type);
}

function getInlineModelType(model: SdkModelType): string {
  if (model.properties.length === 0) {
    return "Record<string, unknown>";
  }
  const properties = model.properties
    .map(
      (property) =>
        `    ${property.name}${property.optional ? "?" : ""}: ${getTypeExpression(property.type)};`,
    )
    .join("\n");
  return `{\n${properties}\n  }`;
}

function isMappedFromBody(
  bodyParameter: SdkHttpOperation["bodyParam"],
  parameter: SdkMethodParameter,
): boolean {
  return (
    bodyParameter?.methodParameterSegments.some(
      (segments) => segments[0]?.name === parameter.name,
    ) === true
  );
}

function isMappedFromHttpParameter(
  httpParameter: SdkHttpParameter,
  parameter: SdkMethodParameter,
): boolean {
  return httpParameter.methodParameterSegments.some(
    (segments) => segments[0]?.name === parameter.name,
  );
}

function shouldSkipGeneratedMethodParameter(
  parameter: SdkMethodParameter,
): boolean {
  return (
    parameter.isGeneratedName &&
    (parameter.name === "contentType" || parameter.name !== "accept")
  );
}

function isConstantContentTypeParameter(parameter: SdkMethodParameter): boolean {
  return parameter.name === "contentType" && parameter.type.kind === "constant";
}

function getOperationGroupName(
  sdkMethod: SdkServiceMethod<SdkHttpOperation>,
): string {
  const parent = sdkMethod.__raw?.interface?.name;
  return parent ?? "";
}

function adaptClientParameter(
  parameter: SdkCredentialParameter | SdkEndpointParameter | SdkMethodParameter,
): TSParameter {
  const name =
    parameter.kind === "endpoint" && parameter.name === "endpoint"
      ? "endpointParam"
      : parameter.name;
  return {
    name,
    type: getClientParameterType(parameter),
    required: !parameter.optional,
    defaultValue:
      parameter.clientDefaultValue === undefined
        ? undefined
        : JSON.stringify(parameter.clientDefaultValue),
    docs: getDocs(parameter),
  };
}

function getClientParameterType(
  parameter: SdkCredentialParameter | SdkEndpointParameter | SdkMethodParameter,
): string {
  if (parameter.kind === "endpoint") {
    return "string";
  }
  if (parameter.kind === "credential") {
    return getCredentialType(parameter);
  }
  return getTypeExpression(parameter.type);
}

function adaptEndpoint(client: SdkClientType<SdkServiceOperation>): TSEndpoint {
  const endpointParameter = client.clientInitialization.parameters.find(
    (parameter): parameter is SdkEndpointParameter =>
      parameter.kind === "endpoint",
  );
  const endpointType = endpointParameter
    ? getEndpointType(endpointParameter)
    : undefined;
  return {
    urlTemplate: endpointType?.serverUrl ?? "{endpoint}",
    isParameterized: (endpointType?.templateArguments.length ?? 0) > 0,
    templateParams: (endpointType?.templateArguments ?? []).map(
      adaptEndpointTemplateParameter,
    ),
  };
}

function adaptEndpointTemplateParameter(
  parameter: SdkPathParameter,
): TSParameter {
  return {
    name: parameter.name,
    type: getTypeExpression(parameter.type),
    required: !parameter.optional,
    defaultValue:
      parameter.clientDefaultValue === undefined
        ? undefined
        : JSON.stringify(parameter.clientDefaultValue),
    docs: getDocs(parameter),
  };
}

function getEndpointType(
  parameter: SdkEndpointParameter,
): SdkEndpointType | undefined {
  if (parameter.type.kind === "endpoint") {
    return parameter.type;
  }
  if (parameter.type.kind === "union") {
    return parameter.type.variantTypes.find(
      (variant): variant is SdkEndpointType => variant.kind === "endpoint",
    );
  }
  return undefined;
}

function adaptApiVersion(
  client: SdkClientType<SdkServiceOperation>,
): TSClient["apiVersion"] {
  const parameter = client.clientInitialization.parameters.find(
    (item) => item.isApiVersionParam,
  );
  if (!parameter) {
    return undefined;
  }
  return {
    paramName: parameter.name,
    defaultValue:
      parameter.clientDefaultValue === undefined
        ? undefined
        : String(parameter.clientDefaultValue),
    isInEndpoint: false,
  };
}

function adaptCredential(
  client: SdkClientType<SdkServiceOperation>,
): TSClient["credential"] {
  const parameter = client.clientInitialization.parameters.find(
    (item): item is SdkCredentialParameter => item.kind === "credential",
  );
  if (!parameter) {
    return undefined;
  }
  const credentialSchemes = getCredentialSchemes(parameter.type);
  return {
    paramName: parameter.name,
    type: getCredentialType(parameter),
    scopes: credentialSchemes.flatMap((scheme) =>
      (scheme.flows ?? []).flatMap((flow) =>
        (flow.scopes ?? []).map((scope) =>
          typeof scope === "string" ? scope : String(scope.value),
        ),
      ),
    ),
    apiKeyHeaderName: credentialSchemes.find((scheme) => scheme.type === "apiKey")?.name,
  };
}

function getCredentialType(parameter: SdkCredentialParameter): string {
  return getCredentialSchemes(parameter.type)
    .map((scheme) => (scheme.type === "apiKey" ? "KeyCredential" : "TokenCredential"))
    .filter((value, index, array) => array.indexOf(value) === index)
    .join(" | ");
}

function getCredentialVariantType(type: SdkType): string {
  const scheme = (type as unknown as { scheme?: { type?: string } }).scheme;
  return scheme?.type === "apiKey" ? "KeyCredential" : "TokenCredential";
}

function getCredentialSchemes(
  type: SdkType,
): Array<{ type?: string; name?: string; flows?: Array<{ scopes?: Array<{ value?: string } | string> }> }> {
  if (type.kind === "union") {
    return (type as SdkUnionType).variantTypes.flatMap(getCredentialSchemes);
  }
  const scheme = (type as unknown as { scheme?: { type?: string; name?: string; flows?: Array<{ scopes?: Array<{ value?: string } | string> }> } }).scheme;
  return scheme ? [scheme] : [];
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
          variants: Object.values(model.discriminatedSubtypes ?? {}).map(
            getModelName,
          ),
        }
      : undefined,
    needsSerializer,
    serializerName: needsSerializer
      ? `${lowerFirst(name)}Serializer`
      : undefined,
    needsDeserializer,
    deserializerName: needsDeserializer
      ? `${lowerFirst(name)}Deserializer`
      : undefined,
  };
}

function adaptProperty(property: SdkModelPropertyType): TSProperty {
  const serializedName = getSerializedName(property);
  return {
    name: property.name,
    type: getTypeExpression(property.type),
    optional: property.optional,
    readonly: isReadonly(property),
    serializedName:
      serializedName === property.name ? undefined : serializedName,
    docs: getDocs(property),
  };
}

/**
 * Adapts TCGC enum types into TSEnum IR nodes.
 * Maps members, fixed/extensible semantics, and value types.
 */
export function _adaptEnums(sdkContext: SdkContext): TSEnum[] {
  const hasPackageVersions = (sdkContext.getPackageVersions?.().size ?? 0) > 0;
  return sdkContext.sdkPackage.enums.map((enumType) =>
    adaptEnum(enumType, hasPackageVersions && enumType.name === "Versions"),
  );
}

function adaptEnum(enumType: SdkEnumType, knownValuesOnly = false): TSEnum {
  return {
    docs: getDocs(enumType),
    members: enumType.values.map((member) => ({
      name: getEnumMemberName(member.name),
      value: member.value,
      docs: getDocs(member),
    })),
    name: knownValuesOnly ? `Known${enumType.name}` : enumType.name,
    isExtensible: !enumType.isFixed,
    knownValuesOnly,
    valueType: enumType.valueType.kind === "numeric" ? "number" : "string",
  };
}

/**
 * Adapts TCGC union types into TSUnion IR nodes.
 * Maps variants and discriminator metadata.
 */
export function _adaptUnions(): TSUnion[] {
  return [];
}

function _adaptHelpers(sdkContext: SdkContext): TSCodeModel["helpers"] {
  const needsUrlTemplate = sdkContext.sdkPackage.clients.some((client) =>
    (client.children ?? []).some((child) =>
      child.methods.some((method) => getOperationApiVersionQuery(method) !== undefined),
    ),
  );
  return needsUrlTemplate
    ? [{ outputPath: "static-helpers/urlTemplate.ts", category: "url" }]
    : [];
}

/**
 * Resolves emitter options and program metadata into TSGenerationSettings.
 */
export function _resolveSettings(
  context: EmitContext<Record<string, any>>,
): TSGenerationSettings {
  const packageDetails = getRecordOption(context.options, "package-details");
  const packageName =
    getStringOption(packageDetails, "name") ??
    "@azure-tools/typespec-ts-pristine";
  const packageVersion =
    getStringOption(packageDetails, "version") ?? "1.0.0-beta.1";
  const packageDescription = getStringOption(packageDetails, "description");

  return {
    packageName,
    packageVersion,
    packageDescription,
    flavor: packageName.startsWith("@azure/") ? "azure" : "unbranded",
    isArm: packageName.startsWith("@azure/arm-"),
    outputDir: context.emitterOutputDir,
    addCredentials: false,
    credentialScopes: [],
    isMultiClient: false,
    hierarchyClient: false,
  };
}

function _resolvePackageInfo(
  settings: TSGenerationSettings,
  sdkContext: SdkContext,
): TSCodeModel["packageInfo"] {
  const clientName =
    sdkContext.sdkPackage.clients[0]?.name ??
    `${toPascalCase(getPackageShortName(settings.packageName))}Client`;
  const serviceName = clientName.endsWith("Client")
    ? clientName.slice(0, -"Client".length)
    : clientName;
  return {
    name: settings.packageName,
    version: settings.packageVersion,
    description: settings.packageDescription,
    serviceName,
    clientName,
    exports: [
      { subpath: ".", source: "./src/index.ts" },
      { subpath: "./api", source: "./src/api/index.ts" },
      ...sdkContext.sdkPackage.clients.flatMap((client) =>
        (client.children ?? [])
          .filter((child) => child.methods.length > 0)
          .map((child) => ({
            subpath: `./api/${lowerFirst(child.name)}`,
            source: `./src/api/${lowerFirst(child.name)}/index.ts`,
          })),
      ),
      { subpath: "./models", source: "./src/models/index.ts" },
    ],
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
      return (type as SdkUnionType).variantTypes
        .map(getTypeExpression)
        .join(" | ");
    case "utcDateTime":
    case "offsetDateTime":
      return "Date";
    case "duration":
      return "string";
    case "credential":
      return getCredentialVariantType(type);
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

function getEnumMemberName(name: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(name)) {
    return `V${name.replace(/-/g, "")}`;
  }
  return toPascalCase(name);
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
  return (
    property.serializationOptions.json?.name ??
    property.serializedName ??
    property.name
  );
}

function isReadonly(property: SdkModelPropertyType): boolean {
  return (
    property.visibility?.some(
      (visibility) => getVisibilityName(visibility) === "read",
    ) === true && property.visibility.length === 1
  );
}

function getVisibilityName(visibility: unknown): string | undefined {
  return isRecord(visibility) && typeof visibility["name"] === "string"
    ? visibility["name"]
    : undefined;
}

function getRecordOption(
  options: object,
  key: string,
): Record<string, unknown> {
  const value = (options as Record<string, unknown>)[key];
  return isRecord(value) ? value : {};
}

function getStringOption(
  options: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = options[key];
  return typeof value === "string" ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
