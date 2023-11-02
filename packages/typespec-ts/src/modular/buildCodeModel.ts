import { getPagedResult, isFixed } from "@azure-tools/typespec-azure-core";
import {
  Enum,
  getDoc,
  getFriendlyName,
  getMaxLength,
  getMaxValue,
  getMinLength,
  getMinValue,
  getPattern,
  getSummary,
  getVisibility,
  ignoreDiagnostics,
  isErrorModel,
  isNeverType,
  Model,
  ModelProperty,
  Namespace,
  Program,
  getEffectiveModelType,
  getDiscriminator,
  Operation,
  isKey,
  Scalar,
  IntrinsicScalarName,
  isStringType,
  getPropertyType,
  isNumericType,
  getMinItems,
  getMaxItems,
  listServices,
  Union,
  Type,
  IntrinsicType,
  getProjectedName,
  isNullType,
  getEncode,
  isTemplateDeclarationOrInstance
} from "@typespec/compiler";
import {
  getAuthentication,
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  getServers,
  HttpAuth,
  HttpOperationParameter,
  HttpOperationResponse,
  HttpOperationResponseContent,
  HttpServer,
  isStatusCode,
  HttpOperation,
  getHttpOperation
} from "@typespec/http";
import { getAddedOnVersions } from "@typespec/versioning";
import {
  SdkClient,
  listClients,
  listOperationGroups,
  listOperationsInOperationGroup,
  isApiVersion,
  getDefaultApiVersion,
  getClientNamespaceString,
  getSdkUnion,
  getAllModels,
  SdkBuiltInType,
  getSdkBuiltInType,
  getClientType,
  SdkEnumValueType
} from "@azure-tools/typespec-client-generator-core";
import { getResourceOperation } from "@typespec/rest";
import {
  ModularCodeModel,
  Client as HrlcClient,
  Parameter,
  Operation as HrlcOperation,
  OperationGroup,
  Response,
  Type as HrlcType,
  Header
} from "./modularCodeModel.js";
import {
  getEnrichedDefaultApiVersion,
  isAzureCoreErrorType
} from "../utils/modelUtils.js";
import { camelToSnakeCase, toCamelCase } from "../utils/casingUtils.js";
import {
  RLCModel,
  getClientName,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  getOperationGroupName,
  getOperationName,
  isBinaryPayload,
  isIgnoredHeaderParam,
  isLongRunningOperation
} from "../utils/operationUtil.js";
import { SdkContext } from "../utils/interfaces.js";
import { Project } from "ts-morph";
import {
  getModelNamespaceName,
  getOperationNamespaceInterfaceName
} from "../utils/namespaceUtils.js";

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
let apiVersionParam: Parameter | undefined = undefined;

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

function handleDiscriminator(context: SdkContext, type: Model) {
  const discriminator = getDiscriminator(context.program, type);
  if (discriminator) {
    const discriminatorValues: string[] = [];
    for (const childModel of type.derivedModels) {
      const modelType = getType(context, childModel);
      for (const property of modelType.properties) {
        if (property.restApiName === discriminator.propertyName) {
          modelType.discriminatorValue = property.type.value;
          discriminatorValues.push(modelType.discriminatorValue);
        }
      }
    }
    // it is not included in properties of typespec but needed by python codegen
    if (discriminatorValues.length > 0) {
      const discriminatorInfo = {
        description: `the discriminator possible values ${discriminatorValues.join(
          ", "
        )}`,
        isPolymorphic: true,
        isDiscriminator: true
      };
      return discriminatorInfo;
    }
  }
  return undefined;
}

function isSchemaProperty(program: Program, property: ModelProperty): boolean {
  const headerInfo = getHeaderFieldName(program, property);
  const queryInfo = getQueryParamName(program, property);
  const pathInfo = getPathParamName(program, property);
  const statusCodeinfo = isStatusCode(program, property);
  return !(headerInfo || queryInfo || pathInfo || statusCodeinfo);
}

function getEffectiveSchemaType(program: Program, type: Model | Union): Model {
  function isSchemaProperty(property: ModelProperty): boolean {
    const headerInfo = getHeaderFieldName(program, property);
    const queryInfo = getQueryParamName(program, property);
    const pathInfo = getPathParamName(program, property);
    const statusCodeinfo = isStatusCode(program, property);
    return !(headerInfo || queryInfo || pathInfo || statusCodeinfo);
  }

  let effective: Model;
  if (type.kind === "Union") {
    const nonNullOptions = [...type.variants.values()]
      .map((x) => x.type)
      .filter((t) => !isNullType(t));
    if (nonNullOptions.length === 1 && nonNullOptions[0]?.kind === "Model") {
      effective = getEffectiveModelType(program, nonNullOptions[0]);
    }
    return type as any;
  } else {
    effective = getEffectiveModelType(program, type, isSchemaProperty);
  }

  if (effective.name) {
    return effective;
  }
  return type as Model;
}

function processModelProperties(
  context: SdkContext,
  newValue: any,
  model: Model
) {
  // need to do properties after insertion to avoid infinite recursion
  for (const property of model.properties.values()) {
    if (!isSchemaProperty(context.program, property)) {
      continue;
    }
    if (newValue.properties === undefined || newValue.properties === null) {
      newValue.properties = [];
    }
    let newProperty = emitProperty(context, property);
    if (isDiscriminator(context, model, property.name)) {
      newProperty = { ...newProperty, ...handleDiscriminator(context, model) };
    }
    newValue.properties.push(newProperty);
  }
  // need to do discriminator outside `emitModel` to avoid infinite recursion
  // handleDiscriminator(context, model, newValue);
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

function getType(
  context: SdkContext,
  type: EmitterType,
  options: { disableEffectiveModel?: boolean } = {}
): any {
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
  let newValue: any;
  if (isEmptyAnonymousModel(type)) {
    // do not generate model for empty model, treat it as any
    newValue = { type: "any" };
  } else {
    newValue = emitType(context, type);
  }
  if (type.kind === "ModelProperty" || type.kind === "Scalar") {
    newValue = applyEncoding(context.program, type, newValue);
  }

  if (enableCache) {
    if (!options.disableEffectiveModel) {
      typesMap.set(effectiveModel, newValue);
    }
    if (type.kind === "Union") {
      for (const t of type.variants.values()) {
        if (t.type.kind === "Model") {
          processModelProperties(context, newValue, t.type);
        }
      }
    }
    if (type.kind === "Model") {
      // need to do properties after insertion to avoid infinite recursion
      processModelProperties(context, newValue, type);
    }
  } else {
    const key = JSON.stringify(newValue);
    const value = simpleTypesMap.get(key);
    if (value) {
      newValue = value;
    } else {
      simpleTypesMap.set(key, newValue);
    }
  }

  return newValue;
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
  inOverload: boolean;
  format?: string;
};
function emitParamBase(
  program: Program,
  parameter: ModelProperty | Type
): ParamBase {
  let optional: boolean;
  let name: string;
  let description: string = "";
  let addedOn: string | undefined;
  let format: string | undefined;

  if (parameter.kind === "ModelProperty") {
    const newParameter = applyEncoding(program, parameter, parameter);
    optional = parameter.optional;
    name = parameter.name;
    description = getDocStr(program, parameter);
    addedOn = getAddedOnVersion(program, parameter);
    format = newParameter.format;
  } else {
    optional = false;
    name = "body";
  }

  return {
    optional,
    description,
    addedOn,
    clientName: applyCasing(name, { casing: CASING }),
    inOverload: false,
    format
  };
}

type BodyParameter = ParamBase & {
  contentTypes: string[];
  type: Type;
  restApiName: string;
  location: "body";
  defaultContentType: string;
  isBinaryPayload: boolean;
};

function getBodyType(program: Program, route: HttpOperation): Type {
  let bodyModel = route.parameters.body?.type;
  if (bodyModel && bodyModel.kind === "Model" && route.operation) {
    const resourceType = getResourceOperation(
      program,
      route.operation
    )?.resourceType;
    if (resourceType && route.responses && route.responses.length > 0) {
      const resp = route.responses[0];
      if (resp && resp.responses && resp.responses.length > 0) {
        const responseBody = resp.responses[0]?.body;
        if (responseBody?.type?.kind === "Model") {
          const bodyTypeInResponse = getEffectiveSchemaType(
            program,
            responseBody.type
          );
          // response body type is reosurce type, and request body type (if templated) contains resource type
          if (
            bodyTypeInResponse === resourceType &&
            bodyModel.templateMapper &&
            bodyModel.templateMapper.args &&
            bodyModel.templateMapper.args.some((it) => {
              return it.kind === "Model" || it.kind === "Union"
                ? it === bodyTypeInResponse
                : false;
            })
          ) {
            bodyModel = resourceType;
          }
        }
      }
    }
    if (resourceType && bodyModel.name === "") {
      bodyModel = resourceType;
    }
  }
  return bodyModel!;
}

function emitBodyParameter(
  context: SdkContext,
  httpOperation: HttpOperation
): BodyParameter {
  const params = httpOperation.parameters;
  const body = params.body!;
  const base = emitParamBase(context.program, body.parameter ?? body.type);
  let contentTypes = body.contentTypes;
  if (contentTypes.length === 0) {
    contentTypes = ["application/json"];
  }
  if (contentTypes.length !== 1) {
    throw Error("Currently only one kind of content-type!");
  }
  const type = getType(context, getBodyType(context.program, httpOperation), {
    disableEffectiveModel: true
  });

  const defaultContentType =
    body.parameter?.default ?? contentTypes.includes("application/json")
      ? "application/json"
      : contentTypes[0]!;
  return {
    contentTypes,
    type,
    restApiName: body.parameter?.name ?? "body",
    location: "body",
    ...base,
    defaultContentType,
    isBinaryPayload: isBinaryPayload(context, body.type, defaultContentType)
  };
}

function emitParameter(
  context: SdkContext,
  parameter: HttpOperationParameter | HttpServerParameter,
  implementation: string
): Parameter {
  const base = emitParamBase(context.program, parameter.param);
  let type = getType(context, parameter.param.type);
  let clientDefaultValue = undefined;
  if (
    parameter.name.toLowerCase() === "content-type" &&
    type["type"] === "constant"
  ) {
    /// We don't want constant types for content types, so we make sure if it's
    /// a constant, we make it not constant
    clientDefaultValue = type["value"];
    type = type["valueType"];
  }
  const paramMap: any = {
    restApiName: parameter.name,
    location: parameter.type,
    type: base.format ? { ...type, format: base.format } : type,
    implementation: implementation,
    skipUrlEncoding: parameter.type === "endpointPath",
    format: (parameter as any).format ?? base.format
  };

  if (paramMap.type.type === "constant") {
    clientDefaultValue = paramMap.type.value;
  }

  if (isApiVersion(context, parameter as HttpOperationParameter)) {
    const defaultApiVersion = getDefaultApiVersion(
      context,
      getServiceNamespace(context.program)
    );
    paramMap.type = defaultApiVersion
      ? getConstantType(defaultApiVersion.value)
      : { type: "string" };
    paramMap.implementation = "Client";
    paramMap.in_docstring = false;
    if (defaultApiVersion) {
      clientDefaultValue = defaultApiVersion.value;
    }
    if (!clientDefaultValue) {
      clientDefaultValue = getEnrichedDefaultApiVersion(
        context.program,
        context
      );
    }
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

function getConstantType(key: string): HrlcType {
  const cache = simpleTypesMap.get(key);
  if (cache) {
    return cache;
  }
  const type: HrlcType = {
    apiVersions: [],
    clientDefaultValue: null,
    type: "constant",
    value: key,
    valueType: { type: "string" },
    xmlMetadata: {}
  };
  simpleTypesMap.set(key, type);
  return type;
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
      type: getType(context, value.type),
      restApiName: key
    });
  }
  return retval;
}

function emitResponse(
  context: SdkContext,
  response: HttpOperationResponse,
  innerResponse: HttpOperationResponseContent
): Response {
  let type = undefined;
  if (
    innerResponse.body?.type &&
    !isAzureCoreErrorType(innerResponse.body?.type)
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
      type = getType(context, modelType);
    } else {
      type = getType(context, innerResponse.body.type);
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
}

function emitOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel
): HrlcOperation {
  const lro = isLongRunningOperation(
    context.program,
    ignoreDiagnostics(getHttpOperation(context.program, operation))
  );
  const paging = getPagedResult(context.program, operation);
  if (lro && paging) {
    return emitLroPagingOperation(
      context,
      operation,
      operationGroupName,
      rlcModels
    );
  } else if (paging) {
    return emitPagingOperation(
      context,
      operation,
      operationGroupName,
      rlcModels
    );
  } else if (lro) {
    return emitLroOperation(context, operation, operationGroupName, rlcModels);
  }
  return emitBasicOperation(context, operation, operationGroupName, rlcModels);
}

function addLroInformation(emittedOperation: HrlcOperation) {
  emittedOperation["discriminator"] = "lro";
}

function addPagingInformation(
  program: Program,
  operation: Operation,
  emittedOperation: Record<string, any>
) {
  emittedOperation["discriminator"] = "paging";
  const pagedResult = getPagedResult(program, operation);
  if (pagedResult === undefined) {
    throw Error(
      "Trying to add paging information, but not paging metadata for this operation"
    );
  }
  emittedOperation["itemName"] = pagedResult.itemsPath;
  emittedOperation["continuationTokenName"] = pagedResult.nextLinkPath;
}

function emitLroPagingOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel
): HrlcOperation {
  const emittedOperation = emitBasicOperation(
    context,
    operation,
    operationGroupName,
    rlcModels
  );
  addLroInformation(emittedOperation);
  addPagingInformation(context.program, operation, emittedOperation);
  emittedOperation["discriminator"] = "lropaging";
  return emittedOperation;
}

function emitLroOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel
): HrlcOperation {
  const emittedOperation = emitBasicOperation(
    context,
    operation,
    operationGroupName,
    rlcModels
  );
  addLroInformation(emittedOperation);
  return emittedOperation;
}

function emitPagingOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel
): HrlcOperation {
  const emittedOperation = emitBasicOperation(
    context,
    operation,
    operationGroupName,
    rlcModels
  );
  addPagingInformation(context.program, operation, emittedOperation);
  return emittedOperation;
}

function emitBasicOperation(
  context: SdkContext,
  operation: Operation,
  operationGroupName: string,
  rlcModels: RLCModel
): HrlcOperation {
  // Set up parameters for operation
  const parameters: any[] = [];
  if (endpointPathParameters) {
    for (const param of endpointPathParameters) {
      parameters.push(param);
    }
  }
  const httpOperation = ignoreDiagnostics(
    getHttpOperation(context.program, operation)
  );
  const sourceOperation =
    operation.sourceOperation &&
    !isTemplateDeclarationOrInstance(operation.sourceOperation)
      ? operation.sourceOperation
      : operation;
  const sourceOperationGroupName = getOperationGroupName(
    context,
    sourceOperation
  );
  const sourceOperationName = getOperationName(
    context.program,
    sourceOperation
  );
  const sourceRoutePath = ignoreDiagnostics(
    getHttpOperation(context.program, operation)
  ).path;
  const rlcResponses = rlcModels.responses?.filter((op) => {
    return (
      (sourceOperationGroupName === "" ||
        op.operationGroup === sourceOperationGroupName) &&
      op.operationName === sourceOperationName &&
      op.path === sourceRoutePath
    );
  });

  const namespaceHierarchies =
    context.rlcOptions?.hierarchyClient === true
      ? getOperationNamespaceInterfaceName(context, operation)
      : [];

  if (
    namespaceHierarchies.length === 0 &&
    context.rlcOptions?.hierarchyClient === false &&
    operationGroupName !== "" &&
    namespaceHierarchies[0] !== operationGroupName
  ) {
    namespaceHierarchies.push(operationGroupName);
  }

  for (const param of httpOperation.parameters.parameters) {
    if (isIgnoredHeaderParam(param)) {
      continue;
    }
    const emittedParam = emitParameter(context, param, "Method");
    if (isApiVersion(context, param) && apiVersionParam === undefined) {
      apiVersionParam = emittedParam;
    }
    parameters.push(emittedParam);
  }

  // Set up responses for operation
  const responses: Response[] = [];
  const exceptions: Response[] = [];
  const isOverload: boolean = false;
  for (const response of httpOperation.responses) {
    for (const innerResponse of response.responses) {
      const emittedResponse: Response = emitResponse(
        context,
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
  if (httpOperation.parameters.body === undefined) {
    bodyParameter = undefined;
  } else {
    bodyParameter = emitBodyParameter(context, httpOperation);
    // Flatten the body parameter if it is an anonymous model
    if (
      bodyParameter.type.type === "model" &&
      bodyParameter.type.name === "" &&
      bodyParameter.type.properties.length > 0
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

  const name = applyCasing(operation.name, { casing: CASING });

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
    name: normalizeName(name, NameType.Operation, true),
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
    isOverload: false,
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
    return visibility.includes("read");
  } else {
    return false;
  }
}

function emitProperty(
  context: SdkContext,
  property: ModelProperty
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
  const clientName = property.name;
  const jsonName =
    getProjectedName(context.program, property, "json") ?? property.name;

  if (property.model) {
    getType(context, property.model);
  }
  const type = getType(context, property.type);
  return {
    clientName: applyCasing(clientName, { casing: CASING }),
    restApiName: jsonName,
    type: newProperty.format ? { ...type, format: newProperty.format } : type,
    optional: property.optional,
    description: getDocStr(context.program, property),
    addedOn: getAddedOnVersion(context.program, property),
    readonly:
      isReadOnly(context.program, property) || isKey(context.program, property),
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
      type.templateMapper.args.length > 0
    ) {
      return (
        type.name +
        type.templateMapper.args
          .map((it) => (it.kind === "Model" ? it.name : ""))
          .join("")
      );
    } else {
      return type.name;
    }
  }
}

function emitModel(context: SdkContext, type: Model): Record<string, any> {
  // Now we know it's a defined model
  const properties: Record<string, any>[] = [];
  let baseModel = undefined;
  if (type.baseModel) {
    baseModel = getType(context, type.baseModel);
  }
  const effectiveName = getEffectiveSchemaType(context.program, type).name;
  const overridedModelName =
    getProjectedName(context.program, type, "javascript") ??
    getProjectedName(context.program, type, "client") ??
    getFriendlyName(context.program, type);
  const fullNamespaceName =
    getModelNamespaceName(context, type.namespace!)
      .map((nsName) => {
        return normalizeName(nsName, NameType.Interface);
      })
      .join("") +
    (effectiveName ? effectiveName : getName(context.program, type));
  let modelName =
    overridedModelName ??
    (context.rlcOptions?.enableModelNamespace
      ? fullNamespaceName
      : effectiveName
      ? effectiveName
      : getName(context.program, type));
  if (
    !overridedModelName &&
    type.templateMapper &&
    type.templateMapper.args &&
    type.templateMapper.args.length > 0 &&
    getPagedResult(context.program, type)
  ) {
    modelName =
      type.templateMapper.args
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

  return {
    type: "model",
    name: modelName,
    description: getDocStr(context.program, type),
    parents: baseModel ? [baseModel] : [],
    discriminatedSubtypes: {},
    properties: properties,
    addedOn: getAddedOnVersion(context.program, type),
    snakeCaseName: modelName
      ? applyCasing(modelName, { casing: CASING })
      : modelName,
    base: modelName === "" ? "json" : "dpg",
    isCoreErrorType: isAzureCoreErrorType(type)
  };
}

function intOrFloat(value: number): string {
  return value.toString().indexOf(".") === -1 ? "integer" : "float";
}

function enumName(name: string): string {
  if (name.toUpperCase() === name) {
    return name;
  }
  return applyCasing(name, { casing: CASING }).toUpperCase();
}

function emitEnum(program: Program, type: Enum): Record<string, any> {
  const enumValues = [];
  for (const m of type.members.values()) {
    enumValues.push({
      name: enumName(m.name),
      value: m.value ?? m.name,
      description: getDocStr(program, m)
    });
  }

  return {
    type: "enum",
    name: type.name,
    description: getDocStr(program, type),
    valueType: { type: enumMemberType(type.members.values().next().value) },
    values: enumValues,
    isFixed: isFixed(program, type)
  };
}

function enumMemberType(member: SdkEnumValueType) {
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
      return { type: "datetime", format: newScalar.format ?? "date" };
    case "utcDateTime":
      return { type: "datetime", format: newScalar.format };
    case "plainTime":
      return { type: "datetime", format: newScalar.format ?? "time" };
    case "offsetDateTime":
      return { type: "string" };
    case "duration":
      return { type: "duration", format: newScalar.format };
    case "numeric":
      return {}; // Waiting on design for more precise type https://github.com/microsoft/cadl/issues/1260
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
  encoding: string,
  encodeAsFormat: string | undefined
): string {
  switch (format) {
    case undefined:
      return encodeAsFormat ?? encoding;
    case "date-time":
      return encoding;
    case "duration":
    default:
      return encodeAsFormat ?? encoding;
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
  type: Model
): Record<string, any> | undefined {
  if (type.indexer !== undefined) {
    if (!isNeverType(type.indexer.key)) {
      const name = type.indexer.key.name;
      if (name === "string") {
        return {
          type: "dict",
          elementType: getType(context, type.indexer.value!)
        };
      } else if (name === "integer") {
        return {
          type: "list",
          elementType: getType(context, type.indexer.value!)
        };
      }
    }
  }
  return undefined;
}

function mapTypeSpecType(context: SdkContext, type: Type): any {
  switch (type.kind) {
    case "Number":
      return constantType(type.value, intOrFloat(type.value));
    case "String":
      return constantType(type.value, "string");
    case "Boolean":
      return constantType(type.value, "boolean");
    case "Model":
      return emitListOrDict(context, type);
  }
}

function emitUnion(context: SdkContext, type: Union): Record<string, any> {
  const sdkType = getSdkUnion(context, type);
  const nonNullOptions = getNonNullOptions(type);
  if (sdkType === undefined) {
    throw Error("Should not have an empty union");
  }
  if (sdkType.kind === "union") {
    const unionName = type.name;
    return {
      nullable: sdkType.nullable,
      name: unionName,
      description: `Type of ${unionName}`,
      internal: true,
      type: "combined",
      types: sdkType.values.map((x) => getType(context, x.__raw!)),
      xmlMetadata: {}
    };
  } else if (sdkType.kind === "enum") {
    return {
      name: sdkType.name,
      nullable: sdkType.nullable,
      description: sdkType.description || `Type of ${sdkType.name}`,
      internal: true,
      type: sdkType.kind,
      valueType: emitSimpleType(context, sdkType.valueType as SdkBuiltInType),
      values: sdkType.values.map((x) => emitEnumMember(context, x)),
      isFixed: sdkType.isFixed,
      xmlMetadata: {}
    };
  } else if (
    isStringOrNumberKind(context.program, sdkType.kind) &&
    isStringOrNumberKind(context.program, nonNullOptions[0]?.kind)
  ) {
    return {
      name: undefined, // string/number union will be mapped as fixed enum without name
      nullable: sdkType.nullable,
      internal: true,
      type: "enum",
      valueType: emitSimpleType(context, sdkType as SdkBuiltInType),
      values: nonNullOptions
        .map((x) => getClientType(context, x))
        .map((x) => emitEnumMember(context, x)),
      isFixed: true,
      xmlMetadata: {}
    };
  } else {
    return { ...emitType(context, sdkType.__raw!), nullable: sdkType.nullable };
  }
}

function isStringOrNumberKind(program: Program, kind?: string): boolean {
  if (!kind) {
    return false;
  }
  kind = kind.toLowerCase();
  try {
    const type = emitStdScalar(program, { name: kind } as any);
    kind = type["type"] ?? kind;
  } catch (e: any) {
    // ignore
  }
  return ["string", "number", "integer", "float"].includes(kind!);
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

function emitSimpleType(
  context: SdkContext,
  type: Scalar | IntrinsicType | SdkBuiltInType
): Record<string, any> {
  let sdkType: SdkBuiltInType;
  if (type.kind === "Scalar" || type.kind === "Intrinsic") {
    sdkType = getSdkBuiltInType(context, type);
  } else {
    sdkType = type;
  }

  return {
    nullable: sdkType.nullable,
    type: "number", // TODO: switch to kind
    doc: "",
    apiVersions: [],
    sdkDefaultValue: undefined,
    format: undefined
  };
}

function emitType(context: SdkContext, type: EmitterType): Record<string, any> {
  if (type.kind === "Credential") {
    return emitCredential(type.scheme);
  }
  if (type.kind === "CredentialTypeUnion") {
    return emitCredentialUnion(type);
  }
  const builtinType = mapTypeSpecType(context, type);
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
      return emitModel(context, type);
    case "Scalar":
      return emitScalar(context.program, type);
    case "Union":
      return emitUnion(context, type);
    case "UnionVariant":
      return {};
    case "Enum":
      return emitEnum(context.program, type);
    case "EnumMember":
      return emitEnumMember(context, type);
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
  for (const operationGroup of listOperationGroups(context, client)) {
    const operations: HrlcOperation[] = [];
    const name = operationGroup.type.name;
    for (const operation of listOperationsInOperationGroup(
      context,
      operationGroup
    )) {
      operations.push(emitOperation(context, operation, name, rlcModels));
    }
    if (operations.length > 0) {
      addHierarchyOperationGroup(operations, groupMapping);
    }
  }
  const clientOperations: HrlcOperation[] = [];
  for (const operation of listOperationsInOperationGroup(context, client)) {
    clientOperations.push(emitOperation(context, operation, "", rlcModels));
  }
  if (clientOperations.length > 0) {
    addHierarchyOperationGroup(clientOperations, groupMapping);
  }

  groupMapping.forEach((value) => {
    operationGroups.push(value);
  });
  if (
    context.rlcOptions?.hierarchyClient === false &&
    context.rlcOptions?.enableOperationGroup
  ) {
    resolveConflictIfExist(operationGroups);
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

function resolveConflictIfExist(operationGroups: OperationGroup[]) {
  if (operationGroups.length < 2) {
    return;
  }

  const nameSet = new Set<string>();
  const hasConflict = operationGroups.some((g) =>
    g.operations.some((op) => {
      if (nameSet.has(op.name)) {
        return true;
      } else {
        nameSet.add(op.name);
        return false;
      }
    })
  );
  if (!hasConflict) {
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
  if (server === undefined) {
    return [
      {
        optional: false,
        description: "Service host",
        clientName: "endpoint",
        clientDefaultValue: null,
        restApiName: "$host",
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
      endpointPathParameters.push(emittedParameter);
      if (
        isApiVersion(context, serverParameter as any) &&
        apiVersionParam == undefined
      ) {
        apiVersionParam = emittedParameter;
        continue;
      }
      params.push(emittedParameter);
    }
    return params;
  } else {
    return [
      {
        optional: false,
        description: "Service host",
        clientName: "endpoint",
        clientDefaultValue: server.url,
        restApiName: "$host",
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
    for (const option of auth.options) {
      for (const scheme of option.schemes) {
        const type: CredentialType = {
          kind: "Credential",
          scheme: scheme
        };
        credential_types.push(type);
      }
    }
    if (credential_types.length > 0) {
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
        type: getType(context, type),
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

function getApiVersionParameter(context: SdkContext): Parameter | void {
  const version = getDefaultApiVersion(
    context,
    getServiceNamespace(context.program)
  );
  if (apiVersionParam) {
    return { ...apiVersionParam, isApiVersion: true };
  } else if (version !== undefined) {
    return {
      clientName: "api_version",
      clientDefaultValue: version.value,
      description: "Api Version",
      implementation: "Client",
      location: "query",
      restApiName: "api-version",
      skipUrlEncoding: false,
      optional: false,
      inDocstring: true,
      inOverload: false,
      inOverriden: false,
      type: getConstantType(version.value),
      isApiVersion: true
    };
  }
}

function emitClients(
  context: SdkContext,
  namespace: string,
  rlcModelsMap: Map<string, RLCModel>
): HrlcClient[] {
  const program = context.program;
  const clients = listClients(context);
  const retval: HrlcClient[] = [];
  for (const client of clients) {
    const clientName = client.name.replace("Client", "");
    if (getNamespace(context, client.name) !== namespace) {
      continue;
    }
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
      url: server ? server.url : "",
      apiVersions: [],
      rlcClientName: rlcModels ? getClientName(rlcModels) : client.name,
      subfolder: ""
    };
    const emittedApiVersionParam = getApiVersionParameter(context);
    if (emittedApiVersionParam) {
      emittedClient.parameters.push(emittedApiVersionParam);
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
    modularOptions: { sourceRoot: modularSourcesRoot },
    namespace: clientNamespaceString,
    subnamespaceToClients: {},
    clients: [],
    types: [],
    project
  };

  typesMap.clear();
  simpleTypesMap.clear();
  const allModels = getAllModels(dpgContext);
  for (const model of allModels) {
    getType(dpgContext, model.__raw!);
  }

  for (const namespace of getNamespaces(dpgContext)) {
    if (namespace === clientNamespaceString) {
      codeModel.clients = emitClients(dpgContext, namespace, rlcModelsMap);
      codeModel.clients.length > 1 &&
        codeModel.clients.map((client) => {
          client["subfolder"] = normalizeName(
            client.name.replace("Client", ""),
            NameType.File
          );
        });
    } else {
      codeModel["subnamespaceToClients"][namespace] = emitClients(
        dpgContext,
        namespace,
        rlcModelsMap
      );
      codeModel["subnamespaceToClients"][namespace].length > 1 &&
        (codeModel["subnamespaceToClients"][namespace] as HrlcClient[]).map(
          (client) => {
            client["subfolder"] = normalizeName(client.name, NameType.File);
          }
        );
    }
  }

  codeModel["types"] = [
    { type: "string" },
    ...typesMap.values(),
    ...simpleTypesMap.values()
  ];
  return codeModel;
}
