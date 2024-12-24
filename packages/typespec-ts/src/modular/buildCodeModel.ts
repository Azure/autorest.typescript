import {
  Enum,
  EnumMember,
  IntrinsicScalarName,
  Model,
  ModelProperty,
  Namespace,
  NoTarget,
  Operation,
  Program,
  Scalar,
  Type,
  Union,
  UsageFlags,
  getDiscriminator,
  getDoc,
  getEncode,
  getFriendlyName,
  getMaxItems,
  getMaxLength,
  getMaxValue,
  getMinItems,
  getMinLength,
  getMinValue,
  getPattern,
  getPropertyType,
  getSummary,
  getVisibility,
  isErrorModel,
  isNeverType,
  isNullType,
  isNumericType,
  isStringType,
  isTemplateDeclarationOrInstance,
  isType,
  isVoidType,
  listServices
} from "@typespec/compiler";
import {
  Header,
  Client as HrlcClient,
  Operation as HrlcOperation,
  Type as HrlcType,
  ModularCodeModel,
  OperationGroup,
  Parameter,
  Property,
  Response
} from "./modularCodeModel.js";
import {
  HttpAuth,
  HttpOperation,
  HttpOperationParameter,
  HttpOperationResponse,
  HttpOperationResponseContent,
  HttpServer,
  getAuthentication,
  getServers,
  isSharedRoute
} from "@typespec/http";
import {
  NameType,
  RLCModel,
  buildRuntimeImports,
  isAzurePackage,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  SdkBuiltInType,
  SdkClient,
  SdkType,
  getAllModels,
  getClientNamespaceString,
  getClientType,
  getDefaultApiVersion,
  getHttpOperationWithCache,
  getLibraryName,
  getSdkUnion,
  getWireName,
  isApiVersion,
  listClients,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import {
  buildCoreTypeInfo,
  getBodyType,
  getDefaultApiVersionString,
  getEffectiveSchemaType,
  isAzureCoreErrorType,
  isBodyRequired,
  isSchemaProperty
} from "../utils/modelUtils.js";
import { camelToSnakeCase, toCamelCase } from "../utils/casingUtils.js";
import {
  extractPagedMetadataNested,
  getOperationGroupName,
  getOperationName,
  isBinaryPayload,
  isIgnoredHeaderParam,
  isLongRunningOperation,
  parseItemName,
  parseNextLinkName
} from "../utils/operationUtil.js";
import {
  getLroMetadata,
  getPagedResult,
  LroMetadata
} from "@azure-tools/typespec-azure-core";

import { Project } from "ts-morph";
import { SdkContext } from "../utils/interfaces.js";
import { getAddedOnVersions } from "@typespec/versioning";
import { getModelNamespaceName } from "../utils/namespaceUtils.js";
import { getSupportedHttpAuth } from "../utils/credentialUtils.js";
import { getType as getTypeName } from "./helpers/typeHelpers.js";
import { reportDiagnostic } from "../lib.js";
import { useContext } from "../contextManager.js";
import { normalizeModelName } from "./emitModels.js";

interface HttpServerParameter {
  type: "endpointPath";
  name: string;
  param: ModelProperty;
}

interface CredentialType {
  kind: "Credential";
  scheme: HttpAuth;
}

interface CredentialTypeUnion {
  kind: "CredentialTypeUnion";
  types: CredentialType[];
}

type EmitterType = Type | CredentialType | CredentialTypeUnion;

let CASING: "camel" | "snake" = "snake";

export interface EmitterOptions {
  "basic-setup-py"?: boolean;
  "package-version"?: string;
  "package-name"?: string;
  "output-dir"?: string;
  "package-mode"?: string;
  debug?: boolean;
}

function applyCasing(
  name: string,
  options: { casing: "snake" | "camel" } = { casing: "snake" }
): string {
  if (options.casing === "camel") {
    return toCamelCase(name);
  }

  return camelToSnakeCase(name);
}

const typesMap = new Map<EmitterType, HrlcType>();
const simpleTypesMap = new Map<string, HrlcType>();
const endpointPathParameters: Record<string, any>[] = [];
let methodApiVersionParam: Parameter | undefined = undefined;
let serverApiVersionParam: Parameter | undefined = undefined;

function isSimpleType(
  program: Program,
  type: EmitterType | undefined
): boolean {
  // these decorators can only work for simple type(int/string/float, etc)
  if (type && (type.kind === "Scalar" || type.kind === "ModelProperty")) {
    const funcs = [
      getMinValue,
      getMaxValue,
      getMinLength,
      getMaxLength,
      getPattern,
      getEncode
    ];
    for (const func of funcs) {
      if (func(program, type)) {
        return true;
      }
    }
  }
  return false;
}

function getDocStr(program: Program, target: Type): string {
  return getDoc(program, target) ?? "";
}

function isDiscriminator(
  context: SdkContext,
  type: Model,
  propertyName: string
): boolean {
  const discriminator = getDiscriminator(context.program, type);
  if (discriminator && discriminator.propertyName === propertyName) {
    return true;
  }
  return false;
}

function handleDiscriminator(
  context: SdkContext,
  type: Model,
  usage: UsageFlags
) {
  const discriminator = getDiscriminator(context.program, type);
  if (discriminator) {
    const discriminatorValues: string[] = [];
    const aliases: string[] = [];
    const discriminatedSubtypes: Type[] = [];
    let discriminatorTcgcType = undefined;
    for (const childModel of type.derivedModels) {
      const modelType = getType(context, childModel, { usage });
      aliases.push(modelType.name);
      for (const property of modelType.properties) {
        if (property.restApiName === discriminator.propertyName) {
          modelType.discriminatorValue = property.type.value;
          discriminatorValues.push(modelType.discriminatorValue);
          discriminatorTcgcType = getClientType(context, property.type);
        }
      }
      discriminatedSubtypes.push(modelType);
    }
    const discriminatorInfo = {
      description:
        discriminatorValues.length > 0
          ? `the discriminator possible values: ${discriminatorValues.join(
              ", "
            )}`
          : "discriminator property",
      type: { type: "string", tcgcType: discriminatorTcgcType },
      restApiName: discriminator.propertyName,
      clientName: discriminator.propertyName,
      name: discriminator.propertyName,
      isPolymorphic: true,
      isDiscriminator: true,
      aliases,
      discriminatedSubtypes
    };
    return discriminatorInfo;
  }
  return undefined;
}

function processModelProperties(
  context: SdkContext,
  newValue: any,
  model: Model,
  usage: UsageFlags
) {
  // need to do properties after insertion to avoid infinite recursion
  const discriminatorInfo = handleDiscriminator(context, model, usage);
  let hasDiscriminator = false;
  for (const property of model.properties.values()) {
    if (!isSchemaProperty(context.program, property)) {
      continue;
    }
    if (isNeverType(property.type)) {
      continue;
    }
    if (newValue.properties === undefined || newValue.properties === null) {
      newValue.properties = [];
    }
    let newProperty = emitProperty(context, property, usage);
    if (isDiscriminator(context, model, property.name)) {
      hasDiscriminator = true;
      newProperty = {
        ...newProperty,
        ...discriminatorInfo,
        type: newProperty["type"],
        tcgcType: getClientType(context, property)
      };
    }
    newValue.properties.push(newProperty);
  }
  if (discriminatorInfo) {
    if (!hasDiscriminator) {
      newValue.properties.push({ ...discriminatorInfo });
    }
    // we don't need to add the discriminator info if it's an anonymous model
    // because it's impossible to have a anonymous model as the polymorphic base in typespec
    // the only possibility is the anonymous model is an alias for an union type which has already been taken care of in the combined types.
    if (newValue.name) {
      newValue.name = normalizeName(newValue.name, NameType.Interface);
      discriminatorInfo?.aliases.push(`${newValue.name}`);
      newValue.alias = `${newValue.name.replace(/Union$/g, "")}`;
      newValue.name = `${newValue.name}`;
      newValue.aliasType = discriminatorInfo?.aliases.join(" | ");
      newValue.types = discriminatorInfo?.discriminatedSubtypes;
      newValue.isPolymorphicBaseModel = true;
      newValue.discriminator = discriminatorInfo.restApiName;
    }
  }
}

function isEmptyAnonymousModel(type: EmitterType): boolean {
  // object, {}, all will be treated as empty model
  return (
    type.kind === "Model" &&
    type.name === "" &&
    type.properties.size === 0 &&
    !type.baseModel &&
    type.derivedModels.length === 0 &&
    !type.indexer
  );
}

interface EmitTypeOptions {
  disableEffectiveModel?: boolean;
  usage?: UsageFlags;
}

export function getType(
  context: SdkContext,
  type: EmitterType,
  options: EmitTypeOptions = {}
): any {
  const modularMetatree = useContext("modularMetaTree");

  // don't cache simple type(string, int, etc) since decorators may change the result
  const enableCache = !isSimpleType(context.program, type);
  const effectiveModel =
    !options.disableEffectiveModel &&
    (type.kind === "Model" || type.kind === "Union")
      ? getEffectiveSchemaType(context.program, type)
      : type;
  if (enableCache) {
    const cached = typesMap.get(effectiveModel);
    if (cached) {
      return cached;
    }
  }
  let newValue: any = { __raw: type };

  if (isEmptyAnonymousModel(type)) {
    // do not generate model for empty model, treat it as any
    newValue = { type: "any" };
  } else {
    newValue = emitType(context, type, options);
  }
  if (type.kind === "ModelProperty" || type.kind === "Scalar") {
    newValue = applyEncoding(context.program, type, newValue);
  }

  if (isTypespecType(type)) {
    newValue.tcgcType = getClientType(context, effectiveModel as any);
    newValue.name = !newValue.tcgcType.isGeneratedName
      ? normalizeModelName(context, newValue.tcgcType)
      : newValue.name;
    newValue.__raw = type;
    modularMetatree.set(type, newValue);
  }

  if (enableCache) {
    if (!options.disableEffectiveModel) {
      if (newValue.__raw === undefined) {
        newValue.__raw = type;
      }
      typesMap.set(effectiveModel, newValue);
    }
    if (type.kind === "Union") {
      for (const t of type.variants.values()) {
        if (t.type.kind === "Model") {
          processModelProperties(context, newValue, t.type, options.usage!);
        }
      }
    }
    if (type.kind === "Model") {
      // need to do properties after insertion to avoid infinite recursion
      processModelProperties(context, newValue, type, options.usage!);
      if (newValue.type === "dict") {
        newValue = { ...emitModel(context, type, options), ...newValue };
        typesMap.set(effectiveModel, newValue);
      }
    }
  } else {
    const { __raw, tcgcType, ...keyableValue } = newValue;
    const key = JSON.stringify(keyableValue);
    const value = simpleTypesMap.get(key);
    if (value) {
      newValue = value;
    } else {
      simpleTypesMap.set(key, newValue);
    }
  }
  if (
    type.kind === "Model" &&
    newValue.tcgcType.additionalProperties &&
    !context.rlcOptions?.compatibilityMode
  ) {
    reportDiagnostic(context.program, {
      code: "compatible-additional-properties",
      format: {
        modelName: type?.name ?? ""
      },
      target: type
    });
  }

  typesMap.set(effectiveModel, newValue);
  return newValue;
}

function isTypespecType(type: EmitterType): type is Type {
  return type.kind !== "Credential" && type.kind !== "CredentialTypeUnion";
}

// To pass the yaml dump
function getAddedOnVersion(p: Program, t: Type): string | undefined {
  return getAddedOnVersions(p, t)?.[0]?.value;
}

type ParamBase = {
  optional: boolean;
  description: string;
  addedOn: string | undefined;
  clientName: string;
  restApiName: string;
  inOverload: boolean;
  format?: string;
  tcgcType: SdkType;
};
function emitParamBase(
  context: SdkContext,
  parameter: ModelProperty | Type
): ParamBase {
  let optional: boolean;
  let name: string;
  let restApiName: string;
  let description: string = "";
  let addedOn: string | undefined;
  let format: string | undefined;

  const program = context.program;

  if (parameter.kind === "ModelProperty") {
    optional = parameter.optional;
    name = normalizeName(
      getLibraryName(context, parameter),
      NameType.Parameter,
      true
    );
    restApiName = getWireName(context, parameter);
    description = getDocStr(program, parameter);
    addedOn = getAddedOnVersion(program, parameter);
    const newParameter = applyEncoding(program, parameter, parameter);
    format = newParameter.format;
  } else {
    optional = false;
    name = "body";
    restApiName = "body";
  }

  return {
    optional,
    description,
    addedOn,
    clientName: applyCasing(name, { casing: CASING }),
    restApiName,
    inOverload: false,
    format,
    tcgcType: getClientType(context, parameter)
  };
}

type BodyParameter = ParamBase & {
  contentTypes: string[];
  type: Type;
  location: "body";
  // defaultContentType: string;
  isBinaryPayload: boolean;
};

function emitBodyParameter(
  context: SdkContext,
  httpOperation: HttpOperation
): BodyParameter | undefined {
  const params = httpOperation.parameters;
  const body = params.body!;
  if (body.bodyKind === "single") {
    const base = emitParamBase(context, body.parameter ?? body.type);
    let contentTypes = body.contentTypes;
    if (contentTypes.length === 0) {
      contentTypes = ["application/json"];
    }
    const type = getType(context, getBodyType(httpOperation)!, {
      disableEffectiveModel: true,
      usage: UsageFlags.Input
    });

    return {
      contentTypes,
      type,
      location: "body",
      ...base,
      isBinaryPayload: isBinaryPayload(context, body.type, contentTypes),
      optional: !isBodyRequired(httpOperation.parameters)
    };
  }
  return undefined;
}

function emitParameter(
  context: SdkContext,
  parameter: HttpOperationParameter | HttpServerParameter,
  implementation: string
): Parameter | undefined {
  if (parameter.type === "cookie") {
    // TODO: support cookie parameters, https://github.com/Azure/autorest.typescript/issues/2898
    reportDiagnostic(context.program, {
      code: "parameter-type-not-supported",
      format: {
        paramType: parameter.type,
        paramName: parameter.name
      },
      target: NoTarget
    });
    return undefined;
  }
  const base = emitParamBase(context, parameter.param);
  let type = getType(context, parameter.param.type, {
    usage: UsageFlags.Input
  });
  let clientDefaultValue = undefined;
  if (
    parameter.name.toLowerCase() === "content-type" &&
    type["type"] === "constant"
  ) {
    /// We don't want constant types for content types, so we make sure if it's
    /// a constant, we make it not constant
    clientDefaultValue = type["value"];
    type = {
      ...type["valueType"],
      tcgcType:
        base.tcgcType.kind === "constant"
          ? base.tcgcType.valueType
          : base.tcgcType
    };
  }
  const paramMap = {
    restApiName: parameter.name,
    location: parameter.type,
    type: base.format ? { ...type, format: base.format } : type,
    implementation: implementation,
    skipUrlEncoding:
      parameter.type === "endpointPath" ||
      (parameter.type === "path" && parameter.allowReserved),
    format: (parameter as any).format ?? base.format,
    tcgcType: base.tcgcType
  };

  if (paramMap.type.type === "constant") {
    clientDefaultValue = paramMap.type.value;
  }

  if (
    isApiVersion(context, parameter as HttpOperationParameter) &&
    (paramMap.location === "query" || paramMap.location === "endpointPath")
  ) {
    const defaultApiVersion = getDefaultApiVersion(
      context,
      getServiceNamespace(context.program)
    );
    paramMap.implementation = implementation;
    (paramMap as any).in_docstring = false;
    if (defaultApiVersion) {
      clientDefaultValue = defaultApiVersion.value;
    }
    if (!clientDefaultValue) {
      clientDefaultValue = getDefaultApiVersionString(context);
    }
    if (clientDefaultValue !== undefined) {
      (paramMap as any).optional = true;
    }
  }

  if (
    clientDefaultValue === undefined &&
    paramMap.location === "endpointPath" &&
    parameter.param.defaultValue?.valueKind === "StringValue"
  ) {
    // For endpoint path params, treat the default value as a client default.
    clientDefaultValue = parameter.param.defaultValue.value;
  }

  return { clientDefaultValue, ...base, ...paramMap };
}

function emitFlattenedParameter(
  bodyParameter: Record<string, any>,
  property: any
): Record<string, any> {
  return {
    checkClientInput: false,
    clientDefaultValue: null,
    clientName: property.clientName,
    delimiter: null,
    description: property.description,
    implementation: "Method",
    inDocstring: true,
    inFlattenedBody: true,
    inOverload: false,
    inOverriden: false,
    isApiVersion: bodyParameter["isApiVersion"],
    location: "other",
    optional: property["optional"],
    restApiName: null,
    skipUrlEncoding: false,
    type: property["type"],
    defaultToUnsetSentinel: true
  };
}

function emitResponseHeaders(
  context: SdkContext,
  headers?: Record<string, ModelProperty>
): Header[] {
  const retval: Header[] = [];
  if (!headers) {
    return retval;
  }
  for (const [key, value] of Object.entries(headers)) {
    retval.push({
      type: getType(context, value.type, { usage: UsageFlags.Output }),
      restApiName: key
    });
  }
  return retval;
}

function emitResponse(
  context: SdkContext,
  operation: Operation,
  response: HttpOperationResponse,
  innerResponse: HttpOperationResponseContent
): Response {
  let type = undefined;
  if (
    innerResponse.body?.type &&
    !isAzureCoreErrorType(context.program, innerResponse.body?.type)
  ) {
    // temporary logic. It can be removed after compiler optimize the response
    const candidate = [
      "ResourceOkResponse",
      "ResourceCreatedResponse",
      "AcceptedResponse"
    ];
    const originType = innerResponse.body.type as Model;
    if (
      innerResponse.body.type.kind === "Model" &&
      candidate.find((e) => e === originType.name)
    ) {
      const modelType = getEffectiveSchemaType(context.program, originType);
      type = getType(context, modelType, { usage: UsageFlags.Output });
    } else if (isLroResponse()) {
      const metadata = getLroMetadata(context.program, operation);
      type =
        metadata?.finalResult === "void" || metadata?.finalResult === undefined
          ? undefined
          : getType(context, metadata.finalResult);
    } else {
      type = isVoidType(innerResponse.body.type)
        ? undefined
        : getType(context, innerResponse.body.type, {
            usage: UsageFlags.Output
          });
    }
  }
  const statusCodes: (number | "default")[] = [];
  if (response.statusCode === "*") {
    statusCodes.push("default");
  } else {
    statusCodes.push(parseInt(response.statusCode));
  }
  return {
    headers: emitResponseHeaders(context, innerResponse.headers),
    statusCodes: statusCodes ?? [],
    addedOn: getAddedOnVersion(context.program, response.type),
    discriminator: "basic",
    type: type,
    isBinaryPayload: innerResponse.body?.type
      ? isBinaryPayload(
          context,
          innerResponse.body?.type,
          innerResponse.body?.contentTypes![0] ?? "application/json"
        )
      : false
  };

  function isLroResponse() {
    return (
      typeof response.statusCodes === "number" &&
      ["200", "201", "202"]?.includes(`${response.statusCodes}`) &&
      !!getLroMetadata(context.program, operation)
    );
  }
}

function emitOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel,
  hierarchies: string[]
): HrlcOperation {
  const isAzureFlavor = isAzurePackage(rlcModels);
  const emittedOperation = emitBasicOperation(
    context,
    operation,
    operationGroupName,
    rlcModels,
    hierarchies
  );
  // Skip to extract paging and lro information for non-branded clients.
  if (!isAzureFlavor) {
    return emittedOperation;
  }
  const lro = isLongRunningOperation(
    context.program,
    getHttpOperationWithCache(context, operation)
  );
  const pagingMetadata = getPagedResult(context.program, operation);
  // Disable the paging feature if no itemsSegments is found.
  const paging =
    pagingMetadata &&
    pagingMetadata.itemsSegments &&
    pagingMetadata.itemsSegments.length > 0;
  if (
    pagingMetadata &&
    (!pagingMetadata.itemsSegments || pagingMetadata.itemsSegments.length === 0)
  ) {
    reportDiagnostic(context.program, {
      code: "no-paging-items-defined",
      format: {
        operationName: operation.name
      },
      target: operation
    });
  }

  emitExtraInfoForOperation(emittedOperation);
  return emittedOperation;

  function emitExtraInfoForOperation(emittedOperation: HrlcOperation) {
    if (lro) {
      addLroInformation(context, operation, emittedOperation);
    }
    if (paging) {
      addPagingInformation(context, operation, emittedOperation);
    }
    if (lro && paging) {
      emittedOperation["discriminator"] = "lropaging";
    }
  }
}

function addLroInformation(
  context: SdkContext,
  operation: Operation,
  emittedOperation: HrlcOperation
) {
  emittedOperation["discriminator"] = "lro";
  const metadata = getLroMetadata(context.program, operation);
  emittedOperation["lroMetadata"] = {
    finalResult:
      metadata?.finalResult === "void" || metadata?.finalResult === undefined
        ? undefined
        : getType(context, metadata.finalResult),
    finalStateVia: getFinalStateVia(context, operation, metadata),
    finalResultPath: metadata?.finalResultPath
  };
}

function getFinalStateVia(
  context: SdkContext,
  operation: Operation,
  metadata?: LroMetadata
) {
  if (!metadata) {
    return undefined;
  }
  switch (metadata.finalStateVia) {
    case "azure-async-operation":
    case "location":
    case "operation-location":
    case "original-uri":
      return metadata.finalStateVia;
    default:
      reportDiagnostic(context.program, {
        code: "un-supported-finalStateVia",
        format: {
          finalStateVia: metadata.finalStateVia!
        },
        target: operation
      });
      return undefined;
  }
}

function addPagingInformation(
  context: SdkContext,
  operation: Operation,
  emittedOperation: Record<string, any>
) {
  emittedOperation["discriminator"] = "paging";
  const pagedResult = getPagedResult(context.program, operation);
  if (pagedResult === undefined) {
    throw Error(
      "Trying to add paging information, but not paging metadata for this operation"
    );
  }
  emittedOperation["itemName"] = parseItemName(pagedResult);
  emittedOperation["continuationTokenName"] = parseNextLinkName(pagedResult);
}

function emitBasicOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel,
  hierarchies: string[]
): HrlcOperation {
  // Set up parameters for operation
  const parameters: any[] = [];
  if (endpointPathParameters) {
    for (const param of endpointPathParameters) {
      parameters.push(param);
    }
  }
  const httpOperation = getHttpOperationWithCache(context, operation);
  const sourceOperation =
    operation.sourceOperation &&
    !isTemplateDeclarationOrInstance(operation.sourceOperation)
      ? operation.sourceOperation
      : operation;
  const sourceOperationGroupName = getOperationGroupName(
    context,
    sourceOperation
  );
  const sourceOperationName = getOperationName(context, sourceOperation);
  const sourceRoutePath = getHttpOperationWithCache(context, operation).path;
  const rlcResponses = rlcModels.responses?.filter((op) => {
    return (
      (sourceOperationGroupName === "" ||
        op.operationGroup === sourceOperationGroupName) &&
      op.operationName === sourceOperationName &&
      op.path === sourceRoutePath
    );
  });

  const namespaceHierarchies =
    context.rlcOptions?.hierarchyClient === true ? hierarchies : [];

  if (
    namespaceHierarchies.length === 0 &&
    context.rlcOptions?.hierarchyClient === false &&
    operationGroupName !== ""
  ) {
    namespaceHierarchies.push(operationGroupName);
  }

  for (const param of httpOperation.parameters.parameters) {
    if (isIgnoredHeaderParam(param)) {
      continue;
    }
    const emittedParam = emitParameter(context, param, "Method");
    if (emittedParam === undefined) {
      continue;
    }
    if (isApiVersion(context, param)) {
      emittedParam.isApiVersion = true;
      methodApiVersionParam = emittedParam;
    }
    parameters.push(emittedParam);
  }

  // Set up responses for operation
  const responses: Response[] = [];
  const exceptions: Response[] = [];
  const isOverload = isSharedRoute(context.program, operation);
  for (const response of httpOperation.responses) {
    for (const innerResponse of response.responses) {
      const emittedResponse: Response = emitResponse(
        context,
        operation,
        response,
        innerResponse
      );
      if (isErrorModel(context.program, response.type)) {
        // * is valid status code in typespec but invalid for autorest.python
        if (response.statusCode === "*") {
          exceptions.push(emittedResponse);
        }
      } else {
        responses.push(emittedResponse);
      }
    }
  }

  let bodyParameter: any | undefined;
  if (
    httpOperation.parameters.body === undefined ||
    isVoidType(httpOperation.parameters.body.type)
  ) {
    bodyParameter = undefined;
  } else {
    bodyParameter = emitBodyParameter(context, httpOperation);
    // Flatten the body parameter if it is an anonymous model
    const originalBodyType = httpOperation.parameters.body.type;

    if (
      bodyParameter.type.type === "model" &&
      originalBodyType.kind === "Model" &&
      originalBodyType.name === "" &&
      [...originalBodyType.properties.keys()].every(
        (k) =>
          operation.parameters.properties.has(k) &&
          (operation.parameters.properties.get(k) ===
            (originalBodyType as Model).properties.get(k) ||
            operation.parameters.properties.get(k) ===
              (originalBodyType as Model).properties.get(k)?.sourceProperty)
      )
    ) {
      for (const param of bodyParameter.type.properties) {
        param.implementation = "Method";
        param.location = param.location ?? "body";
        parameters.push(param);
      }
      bodyParameter = undefined;
    } else if (
      bodyParameter.type.type === "model" &&
      bodyParameter.type.base === "json"
    ) {
      bodyParameter["propertyToParameterName"] = {};
      if (!isOverload) {
        bodyParameter.defaultToUnsetSentinel = true;
      }
      for (const property of bodyParameter.type.properties) {
        bodyParameter["propertyToParameterName"][property["restApiName"]] =
          property["clientName"];
        parameters.push(emitFlattenedParameter(bodyParameter, property));
      }
    }
  }

  const name = applyCasing(getLibraryName(context, operation), {
    casing: CASING
  });

  /** handle name collision between operation name and parameter signature */
  if (bodyParameter) {
    bodyParameter.clientName =
      bodyParameter.clientName === name
        ? bodyParameter.clientName + "Parameter"
        : bodyParameter.clientName;
  }
  parameters
    .filter((param) => {
      return param.clientName === name && !param.isReadOnly && param.required;
    })
    .forEach((param) => {
      param.clientName = param.clientName + "Parameter";
    });
  return {
    name,
    description: getDocStr(context.program, operation),
    summary: getSummary(context.program, operation) ?? "",
    url: httpOperation.path,
    method: httpOperation.verb.toUpperCase(),
    parameters: parameters,
    bodyParameter: bodyParameter,
    responses: responses ?? [],
    exceptions: exceptions ?? [],
    groupName: operationGroupName,
    addedOn: getAddedOnVersion(context.program, operation),
    discriminator: "basic",
    isOverload,
    overloads: [],
    apiVersions: [getAddedOnVersion(context.program, operation)],
    rlcResponse: rlcResponses?.[0],
    namespaceHierarchies
  };
}

function isReadOnly(program: Program, type: ModelProperty): boolean {
  // https://microsoft.github.io/typespec/standard-library/http/operations#automatic-visibility
  // Only "read" should be readOnly
  const visibility = getVisibility(program, type);
  if (visibility) {
    return visibility.includes("read") && visibility.length === 1;
  } else {
    return false;
  }
}

function emitProperty(
  context: SdkContext,
  property: ModelProperty,
  usage: UsageFlags
): Record<string, any> {
  const newProperty = applyEncoding(context.program, property, property);
  let clientDefaultValue = undefined;
  const propertyDefaultKind = property.default?.kind;
  if (
    property.default &&
    (propertyDefaultKind === "Number" ||
      propertyDefaultKind === "String" ||
      propertyDefaultKind === "Boolean")
  ) {
    clientDefaultValue = property.default.value;
  }

  if (propertyDefaultKind === "EnumMember") {
    clientDefaultValue = property.default.value ?? property.default.name;
  }

  // const [clientName, jsonName] = getPropertyNames(context, property);
  const clientName = getLibraryName(context, property);
  const jsonName = getWireName(context, property);

  if (property.model) {
    getType(context, property.model, { usage });
  }
  const type = getType(context, property.type, { usage });
  return {
    clientName: context.rlcOptions?.ignorePropertyNameNormalize
      ? clientName
      : normalizeName(clientName, NameType.Property),
    restApiName: jsonName,
    type: newProperty.format ? { ...type, format: newProperty.format } : type,
    optional: property.optional,
    description: getDocStr(context.program, property),
    addedOn: getAddedOnVersion(context.program, property),
    readonly: isReadOnly(context.program, property),
    clientDefaultValue: clientDefaultValue,
    format: newProperty.format
  };
}

function getName(program: Program, type: Model): string {
  const friendlyName = getFriendlyName(program, type);
  if (friendlyName) {
    return friendlyName;
  } else {
    if (
      type.templateMapper &&
      type.templateMapper.args &&
      type.name !== "" &&
      type.templateMapper.args.length > 0
    ) {
      return (
        type.name +
        (type.templateMapper.args.filter((it) => isType(it)) as Type[])
          .map((it) => (it.kind === "Model" ? it.name : ""))
          .join("")
      );
    } else {
      return type.name;
    }
  }
}

export function emitModel(
  context: SdkContext,
  type: Model,
  options: EmitTypeOptions = {}
): Record<string, any> {
  // Now we know it's a defined model
  const properties: Record<string, any>[] = [];
  let baseModel = undefined;
  if (type.baseModel) {
    baseModel = getType(context, type.baseModel, options);
  }
  const effectiveName = !options.disableEffectiveModel
    ? getEffectiveSchemaType(context.program, type).name
    : undefined;
  const overridedModelName = normalizeName(
    getLibraryName(context, type) ?? getFriendlyName(context.program, type),
    NameType.Interface,
    true
  );
  const fullNamespaceName =
    getModelNamespaceName(context, type.namespace!)
      .map((nsName) => {
        return normalizeName(nsName, NameType.Interface);
      })
      .join("") +
    (effectiveName ? effectiveName : getName(context.program, type));
  let modelName =
    overridedModelName !== type.name
      ? overridedModelName
      : context.rlcOptions?.enableModelNamespace
        ? fullNamespaceName
        : effectiveName
          ? effectiveName
          : getName(context.program, type);
  if (
    !overridedModelName &&
    type.templateMapper &&
    type.templateMapper.args &&
    type.templateMapper.args.length > 0 &&
    getPagedResult(context.program, type)
  ) {
    modelName =
      (type.templateMapper.args.filter((it) => isType(it)) as Type[])
        .map((it) => {
          switch (it.kind) {
            case "Model":
              return it.name;
            case "String":
              return it.value;
            default:
              return "";
          }
        })
        .join("") + "List";
  }

  const page = extractPagedMetadataNested(context.program, type);
  const isPaging = page && page.itemsSegments && page.itemsSegments.length > 0;
  return {
    type: "model",
    name: `${isPaging ? "_" : ""}${modelName}`,
    description: getDocStr(context.program, type),
    parents: baseModel ? [baseModel] : [],
    discriminatedSubtypes: [],
    properties: properties,
    addedOn: getAddedOnVersion(context.program, type),
    snakeCaseName: modelName
      ? applyCasing(modelName, { casing: CASING })
      : modelName,
    base: modelName === "" ? "json" : "dpg",
    coreTypeInfo: buildCoreTypeInfo(context.program, type),
    usage: options.usage
  };
}

function intOrFloat(value: number): string {
  return value.toString().indexOf(".") === -1 ? "integer" : "float";
}

function enumName(name: string): string {
  return name;
}

function emitEnum(context: SdkContext, type: Enum): Record<string, any> {
  const program = context.program;
  const enumValues = [];
  for (const m of type.members.values()) {
    enumValues.push({
      name: enumName(m.name),
      value: m.value ?? m.name,
      description: getDocStr(program, m)
    });
  }

  if (enumValues.length === 0) {
    throw new Error(`Expecting enum values but got none`);
  }
  const name = normalizeName(
    getLibraryName(context, type) ? getLibraryName(context, type) : type.name,
    NameType.Interface
  );
  return {
    type: "enum",
    name,
    description:
      getDocStr(program, type) === ""
        ? `Type of ${name}`
        : getDocStr(program, type),
    valueType: { type: enumMemberType(type.members.values().next().value!) },
    values: enumValues,
    isFixed: true,
    coreTypeInfo: buildCoreTypeInfo(program, type)
  };
}

function enumMemberType(member: EnumMember) {
  if (typeof member.value === "number") {
    return "number";
  }
  return "string";
}

function constantType(value: any, valueType: string): Record<string, any> {
  return { type: "constant", value: value, valueType: { type: valueType } };
}

function emitCredential(auth: HttpAuth): Record<string, any> {
  let credential_type: any = {};
  if (auth.type === "oauth2") {
    credential_type = {
      type: "OAuth2",
      policy: {
        type: "BearerTokenCredentialPolicy",
        credentialScopes: []
      }
    };
    for (const flow of auth.flows) {
      for (const scope of flow.scopes) {
        credential_type.policy.credentialScopes.push(scope.value);
      }
      credential_type.policy.credentialScopes.push();
    }
  } else if (auth.type === "apiKey") {
    credential_type = {
      type: "Key",
      policy: {
        type: "AzureKeyCredentialPolicy",
        key: auth.name
      }
    };
  } else if (auth.type === "http") {
    credential_type = {
      type: "Key",
      policy: {
        type: "AzureKeyCredentialPolicy",
        key: "Authorization"
      }
    };
  }
  return credential_type;
}

function emitCredentialUnion(cred_types: CredentialTypeUnion) {
  const result: any = {};
  // Export as CombinedType, which is already a Union Type in autorest codegen
  result.type = "combined";
  result.types = [];
  for (const cred_type of cred_types.types) {
    result.types.push(emitCredential(cred_type.scheme));
  }

  return result;
}

function emitStdScalar(
  program: Program,
  scalar: Scalar & { name: IntrinsicScalarName }
): Record<string, any> {
  const newScalar = applyEncoding(program, scalar, scalar);
  switch (scalar.name) {
    case "bytes":
      return { type: "byte-array", format: newScalar.format };
    case "int8":
    case "int16":
    case "int32":
    case "int64":
    case "safeint":
    case "uint8":
    case "uint16":
    case "uint32":
    case "uint64":
    case "integer":
      return { type: "integer" };
    case "float32":
    case "float64":
    case "float":
      return { type: "float" };
    case "url":
    case "string":
      return { type: "string" };
    case "boolean":
      return { type: "boolean" };
    case "plainDate":
      return { type: "string", format: newScalar.format ?? "date" };
    case "utcDateTime":
      return { type: "datetime", format: newScalar.format };
    case "plainTime":
      return { type: "string", format: newScalar.format ?? "time" };
    case "offsetDateTime":
      return { type: "string" };
    case "duration":
      return { type: "duration", format: newScalar.format };
    case "numeric":
      return {}; // Waiting on design for more precise type https://github.com/microsoft/cadl/issues/1260
    case "decimal":
    case "decimal128":
      reportDiagnostic(program, {
        code: "decimal-to-number",
        format: {
          propertyName: newScalar?.name ?? ""
        },
        target: NoTarget
      });
      return { type: "integer", format: newScalar.format };
    default:
      return {};
  }
}

function applyEncoding(
  program: Program,
  typespecType: Scalar | ModelProperty,
  target: any = {}
) {
  const encodeData = getEncode(program, typespecType);
  if (encodeData) {
    const newTarget = { ...target };
    const newType = emitScalar(program, encodeData.type);
    // newTarget["type"] = newType["type"];
    // If the target already has a format it takes priority. (e.g. int32)
    newTarget["format"] = mergeFormatAndEncoding(
      newTarget.format,
      encodeData.encoding,
      newType["format"]
    );
    return newTarget;
  }
  return target;
}

function mergeFormatAndEncoding(
  format: string | undefined,
  encoding: string | undefined,
  encodeAsFormat: string | undefined
): string | undefined {
  switch (format) {
    case undefined:
      return encodeAsFormat ?? encoding ?? format;
    case "date-time":
      return encoding;
    case "duration":
    default:
      return encodeAsFormat ?? encoding ?? format;
  }
}

function applyIntrinsicDecorators(
  program: Program,
  type: Scalar | ModelProperty,
  result: any
): Record<string, any> {
  let newResult = { ...result };
  const docStr = getDoc(program, type);
  const isString = isStringType(program, getPropertyType(type));
  const isNumeric = isNumericType(program, getPropertyType(type));

  if (!result.description && docStr) {
    newResult.description = docStr;
  }

  newResult = applyEncoding(program, type, newResult);

  const pattern = getPattern(program, type);
  if (isString && !result.pattern && pattern) {
    newResult.pattern = pattern;
  }

  const minLength = getMinLength(program, type);
  if (isString && !result.minLength && minLength !== undefined) {
    newResult.minLength = minLength;
  }

  const maxLength = getMaxLength(program, type);
  if (isString && !result.maxLength && maxLength !== undefined) {
    newResult.maxLength = maxLength;
  }

  const minValue = getMinValue(program, type);
  if (isNumeric && !result.minimum && minValue !== undefined) {
    newResult.minimum = minValue;
  }

  const maxValue = getMaxValue(program, type);
  if (isNumeric && !result.maximum && maxValue !== undefined) {
    newResult.maximum = maxValue;
  }

  const minItems = getMinItems(program, type);
  if (!result.minItems && minItems !== undefined) {
    newResult.minItems = minItems;
  }

  const maxItems = getMaxItems(program, type);
  if (!result.maxItems && maxItems !== undefined) {
    newResult.maxItems = maxItems;
  }
  return newResult;
}

function emitScalar(program: Program, scalar: Scalar): Record<string, any> {
  let result: Record<string, any> = {};
  const isStd = program.checker.isStdType(scalar);
  if (isStd) {
    result = emitStdScalar(program, scalar);
  } else if (scalar.baseScalar) {
    result = emitScalar(program, scalar.baseScalar);
  }
  return applyIntrinsicDecorators(program, scalar, result);
}

function emitListOrDict(
  context: SdkContext,
  type: Model,
  usage: UsageFlags
): Record<string, any> | undefined {
  if (type.indexer !== undefined) {
    if (!isNeverType(type.indexer.key)) {
      const name = type.indexer.key.name;
      if (name === "string") {
        return {
          type: "dict",
          name: type.name,
          elementType: getType(context, type.indexer.value!, { usage })
        };
      } else if (name === "integer") {
        return {
          type: "list",
          elementType: getType(context, type.indexer.value!, { usage })
        };
      }
    }
  }
  return undefined;
}

function mapTypeSpecType(
  context: SdkContext,
  type: Type,
  usage: UsageFlags
): any {
  switch (type.kind) {
    case "Number":
      return constantType(type.value, intOrFloat(type.value));
    case "String":
      return constantType(type.value, "string");
    case "Boolean":
      return constantType(type.value, "boolean");
    case "Model":
      return emitListOrDict(context, type, usage);
  }
}

function emitUnion(
  context: SdkContext,
  type: Union,
  usage: UsageFlags
): Record<string, any> {
  let sdkType = getSdkUnion(context, type);
  const isNull = sdkType.kind === "nullable";
  if (sdkType.kind === "nullable") {
    sdkType = sdkType.type;
  }
  const nonNullOptions = getNonNullOptions(type);
  if (sdkType === undefined) {
    throw Error("Should not have an empty union");
  }
  if (sdkType.kind === "union") {
    const unionName = getLibraryName(context, type)
      ? getLibraryName(context, type)
      : type.name;
    const discriminatorPropertyName = getDiscriminator(
      context.program,
      type
    )?.propertyName;
    const variantTypes = sdkType.variantTypes.map((x) => {
      const valueType = getType(context, x.__raw!, { usage });
      if (valueType.properties && discriminatorPropertyName) {
        valueType.discriminatorValue = valueType.properties.filter(
          (p: Property) => p.clientName === discriminatorPropertyName
        )[0].type.value;
      }
      return valueType;
    });
    const unionTypeName = unionName
      ? normalizeName(unionName, NameType.Interface)
      : undefined;
    return {
      nullable: isNull,
      name: unionTypeName,
      description: `Type of ${unionTypeName}`,
      internal: true,
      type: "combined",
      types: variantTypes,
      xmlMetadata: {},
      usage,
      discriminator: discriminatorPropertyName,
      alias:
        unionName === "" || unionName === undefined ? undefined : unionName,
      aliasType:
        unionName === "" || unionName === undefined
          ? undefined
          : variantTypes.map((x) => getTypeName(x).name).join(" | "),
      tcgcType: sdkType
    };
  } else if (sdkType.kind === "enum") {
    let typeName = getLibraryName(context, type)
      ? getLibraryName(context, type)
      : sdkType.isGeneratedName
        ? type.name
        : sdkType.name;
    typeName = typeName
      ? normalizeName(typeName, NameType.Interface)
      : undefined;
    return {
      name: typeName,
      nullable: isNull,
      description: sdkType.doc || `Type of ${typeName}`,
      internal: true,
      type: sdkType.kind,
      valueType: emitSimpleType(sdkType.valueType),
      values: sdkType.values.map((x) => emitEnumMember(context, x)),
      isFixed: sdkType.isFixed,
      isNonExhaustive: context.rlcOptions?.experimentalExtensibleEnums ?? false,
      xmlMetadata: {},
      usage
    };
  } else if (nonNullOptions.length === 1 && nonNullOptions[0]) {
    return {
      ...emitType(context, nonNullOptions[0], { usage }),
      nullable: isNull
    };
  } else {
    return {
      ...emitType(context, sdkType.__raw!, { usage }),
      nullable: isNull
    };
  }
}

function getNonNullOptions(type: Union) {
  return [...type.variants.values()]
    .map((x) => x.type)
    .filter((t) => !isNullType(t));
}

function emitEnumMember(context: SdkContext, member: any): Record<string, any> {
  const value = member.value ?? member.name;
  return {
    type: "constant",
    valueType: {
      type: enumMemberType(member)
    },
    value,
    name: member.name ? enumName(member.name) : undefined,
    description: getDoc(context.program, member),
    isConstant: true
  };
}

function emitSimpleType(type: SdkBuiltInType): Record<string, any> {
  return {
    nullable: isNullType(type.__raw!),
    type: type.kind === "string" ? "string" : "number", // TODO: handle other types
    doc: "",
    apiVersions: [],
    sdkDefaultValue: undefined,
    format: undefined
  };
}

function emitType(
  context: SdkContext,
  type: EmitterType,
  options: EmitTypeOptions = {}
): Record<string, any> {
  if (type.kind === "Credential") {
    return emitCredential(type.scheme);
  }
  if (type.kind === "CredentialTypeUnion") {
    return emitCredentialUnion(type);
  }
  const builtinType = mapTypeSpecType(context, type, options.usage!);
  if (builtinType !== undefined) {
    // add in description elements for types derived from primitive types (SecureString, etc.)
    const doc = getDoc(context.program, type);
    if (doc) {
      builtinType.description = doc;
    }
    return builtinType;
  }

  switch (type.kind) {
    case "Intrinsic":
      return { type: type.name };
    case "Model":
      return emitModel(context, type, options);
    case "Scalar":
      return emitScalar(context.program, type);
    case "Union":
      return emitUnion(context, type, options.usage!);
    case "UnionVariant":
      return emitType(context, type.type, options);
    case "Enum":
      return emitEnum(context, type);
    case "EnumMember":
      return emitEnumMember(context, type);
    case "ModelProperty":
      return emitType(context, type.type, options);
    default:
      throw Error(`Not supported ${type.kind}`);
  }
}

function emitOperationGroups(
  context: SdkContext,
  client: SdkClient,
  rlcModels: RLCModel
): OperationGroup[] {
  const operationGroups: OperationGroup[] = [];
  const groupMapping: Map<string, OperationGroup> = new Map<
    string,
    OperationGroup
  >();
  const clientOperations: HrlcOperation[] = [];
  for (const operation of listOperationsInOperationGroup(context, client)) {
    clientOperations.push(emitOperation(context, operation, "", rlcModels, []));
  }
  if (clientOperations.length > 0) {
    addHierarchyOperationGroup(clientOperations, groupMapping);
  }
  for (const operationGroup of listOperationGroups(context, client, true)) {
    const operations: HrlcOperation[] = [];
    const overrideName = getLibraryName(context, operationGroup.type);
    const name =
      context.rlcOptions?.hierarchyClient ||
      context.rlcOptions?.enableOperationGroup
        ? (overrideName ?? operationGroup.type.name)
        : "";
    const hierarchies =
      context.rlcOptions?.hierarchyClient ||
      context.rlcOptions?.enableOperationGroup
        ? operationGroup.groupPath.split(".")
        : [];
    if (hierarchies[0]?.endsWith("Client")) {
      hierarchies.shift();
    }
    for (const operation of listOperationsInOperationGroup(
      context,
      operationGroup
    )) {
      operations.push(
        emitOperation(context, operation, name, rlcModels, hierarchies)
      );
    }
    if (operations.length > 0) {
      addHierarchyOperationGroup(operations, groupMapping);
    }
  }

  groupMapping.forEach((value) => {
    operationGroups.push(value);
  });
  if (
    context.rlcOptions?.hierarchyClient === false &&
    context.rlcOptions?.enableOperationGroup
  ) {
    appendOperationGroupPrefix(operationGroups);
  }
  return operationGroups;
}

function addHierarchyOperationGroup(
  operations: HrlcOperation[],
  groupMapping: Map<string, OperationGroup>
): OperationGroup[] {
  if (operations.length > 0) {
    operations.forEach((op) => {
      const groupName = op.namespaceHierarchies.join("") ?? "";
      if (!groupMapping.has(groupName)) {
        groupMapping.set(groupName, {
          className: groupName,
          propertyName: groupName,
          operations: [op],
          namespaceHierarchies: op.namespaceHierarchies
        });
      } else {
        groupMapping.get(groupName)!.operations.push(op);
      }
    });
    return [...groupMapping.values()];
  }
  return [];
}

function appendOperationGroupPrefix(operationGroups: OperationGroup[]) {
  if (operationGroups.length < 2) {
    return;
  }
  // Append operation group prefix
  operationGroups.forEach((g) =>
    g.operations.forEach((op) => {
      op.oriName = op.name;
      op.name = `${g.propertyName}_${op.name}`;
    })
  );
}

function getServerHelper(
  program: Program,
  namespace: Namespace
): HttpServer | undefined {
  const servers = getServers(program, namespace);
  if (servers === undefined) {
    return undefined;
  }
  return servers[0];
}

function emitServerParams(
  context: SdkContext,
  namespace: Namespace
): Parameter[] {
  const server = getServerHelper(context.program, namespace);
  if (server === undefined || server.parameters.size === 0) {
    return [
      {
        optional: false,
        description: "Service host",
        clientName: "endpointParam",
        clientDefaultValue: null,
        restApiName: "endpoint",
        location: "endpointPath",
        type: { type: "string" },
        implementation: "Client",
        inOverload: false
      }
    ];
  }
  if (server.parameters) {
    const params: Parameter[] = [];
    for (const param of server.parameters.values()) {
      const serverParameter: HttpServerParameter = {
        type: "endpointPath",
        name: param.name,
        param: param
      };
      const emittedParameter = emitParameter(
        context,
        serverParameter,
        "Client"
      );
      if (emittedParameter === undefined) {
        continue;
      }
      endpointPathParameters.push(emittedParameter);
      if (isApiVersion(context, serverParameter as any)) {
        emittedParameter.isApiVersion = true;
        serverApiVersionParam = emittedParameter;
        emittedParameter.isApiVersion = true;
      }
      params.push(emittedParameter);
    }
    return params;
  } else {
    return [
      {
        optional: false,
        description: "Service host",
        clientName: "endpointParam",
        clientDefaultValue: server.url,
        restApiName: "endpoint",
        location: "path",
        type: { type: "string" },
        implementation: "Client",
        inOverload: false
      }
    ];
  }
}

function emitCredentialParam(
  context: SdkContext,
  namespace: Namespace
): Parameter | undefined {
  const auth = getAuthentication(context.program, namespace);
  if (auth) {
    const credential_types: CredentialType[] = [];
    for (const scheme of getSupportedHttpAuth(context.program, auth)) {
      const type: CredentialType = {
        kind: "Credential",
        scheme: scheme
      };
      credential_types.push(type);
    }

    if (
      credential_types.length > 0 &&
      context.rlcOptions?.addCredentials !== false
    ) {
      let type: EmitterType;
      if (credential_types.length === 1 && credential_types[0]) {
        type = credential_types[0];
      } else {
        type = {
          kind: "CredentialTypeUnion",
          types: credential_types
        };
      }
      return {
        type: getType(context, type, { usage: UsageFlags.Input }),
        optional: false,
        description: "Credential needed for the client to connect to Azure.",
        clientName: "credential",
        location: "other",
        restApiName: "credential",
        implementation: "Client",
        skipUrlEncoding: true,
        inOverload: false
      };
    }
  }
  return undefined;
}

function emitGlobalParameters(
  context: SdkContext,
  namespace: Namespace
): Parameter[] {
  const clientParameters = emitServerParams(context, namespace);
  const credentialParam = emitCredentialParam(context, namespace);
  if (credentialParam) {
    clientParameters.push(credentialParam);
  }
  return clientParameters;
}

function getMethodApiVersionParameter(): Parameter | void {
  if (methodApiVersionParam) {
    return {
      ...methodApiVersionParam,
      isApiVersion: true
    };
  }
}

function emitClients(
  context: SdkContext,
  rlcModelsMap: Map<string, RLCModel>
): HrlcClient[] {
  const program = context.program;
  const clients = listClients(context);
  const retval: HrlcClient[] = [];
  methodApiVersionParam = undefined;
  for (const client of clients) {
    const sdkPackageClient = context.sdkPackage.clients.find((p) => {
      return p.name === client.name;
    });

    if (!sdkPackageClient) {
      throw new Error(`Client ${client.name} not found in the SDK package`);
    }

    const clientName = client.name.replace("Client", "");
    const server = getServerHelper(program, client.service);
    const rlcModels = rlcModelsMap.get(client.service.name);
    if (!rlcModels) {
      continue;
    }
    const emittedClient: HrlcClient = {
      name: clientName.split(".").at(-1) ?? "",
      description: getDocStr(program, client.type),
      parameters: emitGlobalParameters(context, client.service),
      operationGroups: emitOperationGroups(context, client, rlcModels),
      tcgcClient: sdkPackageClient,
      url: server ? server.url : "",
      apiVersions: [],
      rlcClientName: `${client.name.replace("Client", "")}Context`,
      subfolder: "",
      rlcHelperDetails:
        rlcModels && rlcModels.helperDetails ? rlcModels.helperDetails : {}
    };
    const methodApiVersionParam = getMethodApiVersionParameter();
    if (
      methodApiVersionParam &&
      !serverApiVersionParam &&
      context.hasApiVersionInClient
    ) {
      // prompt method-level api version to client level only when there is no client one defined
      emittedClient.parameters.push(methodApiVersionParam);
      // if we have client level api version, we need to remove it from all operations
      emittedClient.operationGroups.map((opGroup) => {
        opGroup.operations.map((op) => {
          op.parameters = op.parameters.filter((param) => {
            return !param.isApiVersion;
          });
          return op;
        });
        return opGroup;
      });
    }
    retval.push(emittedClient);
  }
  return retval;
}

function getServiceNamespace(program: Program): Namespace {
  return listServices(program)[0]!.type;
}

function getNamespace(context: SdkContext, clientName: string): string {
  // We get client namespaces from the client name. If there's a dot, we add that to the namespace
  const submodule = clientName.split(".").slice(0, -1).join(".").toLowerCase();
  if (!submodule) {
    return getClientNamespaceString(context)!.toLowerCase();
  }
  return submodule;
}

function getNamespaces(context: SdkContext): Set<string> {
  const namespaces = new Set<string>();
  for (const client of listClients(context)) {
    namespaces.add(getNamespace(context, client.name));
  }
  return namespaces;
}

export function emitCodeModel(
  dpgContext: SdkContext,
  rlcModelsMap: Map<string, RLCModel>,
  modularSourcesRoot: string,
  project: Project,
  options: { casing: "snake" | "camel" } = { casing: "snake" }
): ModularCodeModel {
  CASING = options.casing ?? CASING;
  const clientNamespaceString =
    getClientNamespaceString(dpgContext)?.toLowerCase();
  // Get types
  const codeModel: ModularCodeModel = {
    options: dpgContext.rlcOptions ?? {},
    modularOptions: {
      sourceRoot: modularSourcesRoot,
      compatibilityMode: !!dpgContext.rlcOptions?.compatibilityMode,
      experimentalExtensibleEnums:
        !!dpgContext.rlcOptions?.experimentalExtensibleEnums
    },
    namespace: clientNamespaceString,
    clients: [],
    types: [],
    project,
    runtimeImports: buildRuntimeImports(dpgContext.rlcOptions?.flavor)
  };

  typesMap.clear();
  simpleTypesMap.clear();
  const allModels = getAllModels(dpgContext);
  for (const model of allModels) {
    getType(dpgContext, model.__raw!, { usage: model.usage as UsageFlags });
  }
  for (const namespace of getNamespaces(dpgContext)) {
    if (namespace === clientNamespaceString) {
      codeModel.clients = emitClients(dpgContext, rlcModelsMap);
      codeModel.clients.length > 1 &&
        codeModel.clients.map((client) => {
          client["subfolder"] = normalizeName(
            client.name.replace("Client", ""),
            NameType.File
          );
        });
    }
  }

  codeModel["types"] = [
    { type: "string" },
    ...typesMap.values(),
    ...simpleTypesMap.values()
  ];
  return codeModel;
}
