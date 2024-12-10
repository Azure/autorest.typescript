import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { NoTarget, Program } from "@typespec/compiler";
import { PagingHelpers, PollingHelpers } from "../static-helpers-metadata.js";
import { isTypeNullable } from "./typeHelpers.js";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo,
  isBinaryPayload
} from "../../utils/operationUtil.js";
import {
  isNormalUnion,
  isSpecialHandledUnion
} from "../serialization/serializeUtils.js";
import {
  getDocsFromDescription,
  getFixmeForMultilineDocs
} from "./docsHelpers.js";
import { toPascalCase } from "../../utils/casingUtils.js";

import { AzurePollingDependencies } from "../external-dependencies.js";
import { NameType } from "@azure-tools/rlc-common";
import { buildModelDeserializer } from "../serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "../serialization/buildSerializerFunction.js";
import { refkey } from "../../framework/refkey.js";
import { reportDiagnostic } from "../../lib.js";
import { resolveReference } from "../../framework/reference.js";
import { useDependencies } from "../../framework/hooks/useDependencies.js";
import { useSdkTypes } from "../../framework/hooks/sdkTypes.js";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import { getTypeExpression } from "../type-expressions/get-type-expression.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  isReadOnly,
  SdkBodyParameter,
  SdkConstantType,
  SdkHttpOperation,
  SdkHttpParameter,
  SdkLroPagingServiceMethod,
  SdkLroServiceMethod,
  SdkMethod,
  SdkModelPropertyType,
  SdkModelType,
  SdkPagingServiceMethod,
  SdkServiceMethod,
  SdkServiceParameter,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

export function getSendPrivateFunction(
  dpgContext: SdkContext,
  method: [string[], SdkServiceMethod<SdkHttpOperation>],
  clientType: string
): OptionalKind<FunctionDeclarationStructure> {
  const operation = method[1];
  const parameters = getOperationSignatureParameters(
    dpgContext,
    method,
    clientType
  );
  const { name } = getOperationName(operation);
  const dependencies = useDependencies();

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType: resolveReference(dependencies.StreamableMethod)
  };

  const operationPath = operation.operation.path;
  const operationMethod = operation.operation.verb.toLowerCase();
  const optionalParamName = parameters.filter((p) =>
    p.type?.toString().endsWith("OptionalParams")
  )[0]?.name;

  const statements: string[] = [];
  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      dpgContext,
      operation
    )}).${operationMethod}({...${resolveReference(dependencies.operationOptionsToRequestParameters)}(${optionalParamName}), ${getRequestParameters(
      dpgContext,
      operation
    )}});`
  );

  return {
    ...functionStatement,
    statements
  };
}

export function getDeserializePrivateFunction(
  context: SdkContext,
  operation: SdkServiceMethod<SdkHttpOperation>
): OptionalKind<FunctionDeclarationStructure> {
  const { name } = getOperationName(operation);
  const dependencies = useDependencies();
  const PathUncheckedResponseReference = resolveReference(
    dependencies.PathUncheckedResponse
  );
  const parameters: OptionalKind<ParameterDeclarationStructure>[] = [
    {
      name: "result",
      type: PathUncheckedResponseReference
    }
  ];
  // TODO: Support LRO + paging operation
  // https://github.com/Azure/autorest.typescript/issues/2313
  const isLroOnly = isLroOnlyOperation(operation);

  // TODO: Support operation overloads
  // TODO: Support multiple responses
  const response = operation.response;
  let returnType;
  if (isLroOnly && operation.operation.verb.toLowerCase() !== "patch") {
    returnType = buildLroReturnType(context, operation);
  } else if (response?.type) {
    returnType = {
      name: (response.type as any).name ?? "",
      type: getTypeExpression(context, response.type!)
    };
  } else {
    returnType = { name: "", type: "void" };
  }

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: true,
    isExported: true,
    name: `_${name}Deserialize`,
    parameters,
    returnType: `Promise<${returnType.type}>`
  };
  const statements: string[] = [];
  const createRestErrorReference = resolveReference(
    dependencies.createRestError
  );

  statements.push(
    `const expectedStatuses = ${getExpectedStatuses(operation)};`
  );
  statements.push(
    `if(!expectedStatuses.includes(result.status)){`,
    `throw ${createRestErrorReference}(result);`,
    "}"
  );
  const deserializedType = isLroOnly
    ? operation?.lroMetadata?.finalResponse?.result
    : response.type;
  const lroSubPath = isLroOnly
    ? operation?.lroMetadata?.finalResponse?.resultPath
    : undefined;

  const deserializePrefix = "result.body";

  const deserializedRoot = `${deserializePrefix}${lroSubPath ? "." + lroSubPath : ""}`;
  if (isLroOnly && lroSubPath) {
    statements.push(
      `if(${deserializedRoot.split(".").join("?.")} === undefined) {
        throw createRestError(\`Expected a result in the response at position "${deserializedRoot}"\`, result);
      }
      `
    );
  }

  if (deserializedType) {
    const contentTypes = operation.operation.responses[0]?.contentTypes;
    const deserializeFunctionName = buildModelDeserializer(
      context,
      deserializedType,
      false,
      true
    );
    if (deserializeFunctionName) {
      statements.push(`return ${deserializeFunctionName}(${deserializedRoot})`);
    } else if (isAzureCoreErrorType(context.program, deserializedType.__raw)) {
      statements.push(`return ${deserializedRoot}`);
    } else {
      statements.push(
        `return ${deserializeResponseValue(
          context,
          deserializedType,
          deserializedRoot,
          isBinaryPayload(context, response.type!.__raw!, contentTypes!)
            ? "binary"
            : getEncodeForType(deserializedType)
        )}`
      );
    }
  } else if (returnType.type === "void") {
    statements.push("return;");
    // } else if (deserializedType) {
    //   statements.push(
    //     `return ${deserializeResponseValue(
    //       context,
    //       deserializedType,
    //       deserializedRoot,
    //       response.isBinaryPayload ? "binary" : deserializedType.format
    //     )}`
    //   );
  } else {
    statements.push("return;");
  }

  return {
    ...functionStatement,
    statements
  };
}

function getOperationSignatureParameters(
  context: SdkContext,
  method: [string[], SdkServiceMethod<SdkHttpOperation>],
  clientType: string
): OptionalKind<ParameterDeclarationStructure>[] {
  const operation = method[1];
  const optionsType = getOperationOptionsName(method, true);
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();

  operation.parameters
    .filter(
      (p) =>
        p.onClient === false &&
        p.type.kind !== "constant" &&
        p.clientDefaultValue === undefined &&
        !p.optional
    )
    .map((p) => {
      return {
        name: p.name,
        type: getTypeExpression(context, p.type)
      };
    })
    .forEach((p) => {
      parameters.set(p.name, p);
    });

  const bodyParameter = operation.operation.bodyParam;
  if (bodyParameter && bodyParameter.optional === false) {
    parameters.set(bodyParameter?.name, {
      hasQuestionToken: bodyParameter.optional,
      ...{
        name: bodyParameter.name,
        type: getTypeExpression(context, bodyParameter.type)
      }
    });
  }
  // Add context as the first parameter
  const contextParam = { name: "context", type: clientType };

  // Add the options parameter
  const optionsParam = {
    name: parameters.has("options") ? "optionalParams" : "options",
    type: optionsType,
    initializer: "{ requestOptions: {} }"
  };

  const finalParameters = [contextParam, ...parameters.values(), optionsParam];

  return finalParameters;
}

/**
 * This operation builds and returns the function declaration for an operation.
 */
export function getOperationFunction(
  context: SdkContext,
  method: [string[], SdkServiceMethod<SdkHttpOperation>],
  clientType: string
): OptionalKind<FunctionDeclarationStructure> & { propertyName?: string } {
  const operation = method[1];
  if (isPagingOnlyOperation(operation)) {
    // Case 1: paging-only operation
    return getPagingOnlyOperationFunction(
      context,
      [method[0], operation],
      clientType
    );
  } else if (isLroOnlyOperation(operation)) {
    // Case 2: lro-only operation
    return getLroOnlyOperationFunction(
      context,
      [method[0], operation],
      clientType
    );
  } else if (isLroAndPagingOperation(operation)) {
    // Case 3: both paging + lro operation is not supported yet so handle them as normal operation and customization may be needed
    // https://github.com/Azure/autorest.typescript/issues/2313
  }

  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, method, clientType);
  // TODO: Support operation overloads
  const response = operation.response;
  let returnType = { name: "", type: "void" };
  if (response.type && response.type.kind === "model") {
    const type = response.type;
    returnType = {
      name: type.name ?? "",
      type: getTypeExpression(context, type!)
    };
  }
  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.doc),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: true,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `Promise<${returnType.type}>`
  };

  const statements: string[] = [];
  statements.push(
    `const result = await _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")});`
  );
  statements.push(`return _${name}Deserialize(result);`);

  return {
    ...functionStatement,
    statements
  };
}

function getLroOnlyOperationFunction(
  context: SdkContext,
  method: [string[], SdkLroServiceMethod<SdkHttpOperation>],
  clientType: string
) {
  const operation = method[1];
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, method, clientType);
  const returnType = buildLroReturnType(context, operation);
  const { name, fixme = [] } = getOperationName(operation);
  const pollerLikeReference = resolveReference(
    AzurePollingDependencies.PollerLike
  );
  const operationStateReference = resolveReference(
    AzurePollingDependencies.OperationState
  );
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.doc),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: false,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `${pollerLikeReference}<${operationStateReference}<${returnType.type}>, ${returnType.type}>`
  };

  const getLongRunningPollerReference = resolveReference(
    PollingHelpers.GetLongRunningPoller
  );
  const lroMetadata =
    operation.kind === "lro" || operation.kind === "lropaging"
      ? operation.lroMetadata
      : undefined;
  const resourceLocationConfig = lroMetadata?.finalStateVia
    ? `resourceLocationConfig: "${lroMetadata?.finalStateVia}"`
    : "";
  const statements: string[] = [];
  statements.push(`

  return ${getLongRunningPollerReference}(context, _${name}Deserialize, ${getExpectedStatuses(
    operation
  )}, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")}),
    ${resourceLocationConfig}
  }) as ${pollerLikeReference}<${operationStateReference}<${
    returnType.type
  }>, ${returnType.type}>;
  `);

  return {
    ...functionStatement,
    statements
  };
}

function buildLroReturnType(
  context: SdkContext,
  operation: SdkLroServiceMethod<SdkHttpOperation>
) {
  const metadata = operation.lroMetadata;
  if (metadata !== undefined && metadata.finalResponse !== undefined) {
    const type = metadata.finalResponse.result;
    return {
      name: type.name,
      type: getTypeExpression(context, type)
    };
  }
  return { name: "", type: "void" };
}

function getPagingOnlyOperationFunction(
  context: SdkContext,
  method: [string[], SdkPagingServiceMethod<SdkHttpOperation>],
  clientType: string
) {
  const operation = method[1];
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, method, clientType);

  // TODO: Support operation overloads
  const response = operation.response;
  let returnType = { name: "", type: "void" };
  if (response.type && response.type.kind === "model") {
    const type = response.type;
    returnType = {
      name: type.name ?? "",
      type: getTypeExpression(context, type!)
    };
  }
  const { name, fixme = [] } = getOperationName(operation);
  const pagedAsyncIterableIteratorReference = resolveReference(
    PagingHelpers.PagedAsyncIterableIterator
  );
  const buildPagedAsyncIteratorReference = resolveReference(
    PagingHelpers.BuildPagedAsyncIterator
  );
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.doc),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: false,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `${pagedAsyncIterableIteratorReference}<${returnType.type}>`
  };

  const statements: string[] = [];
  const options = [];
  if (operation.__raw_paged_metadata?.itemsProperty) {
    options.push(`itemName: "${operation.__raw_paged_metadata.itemsPath}"`);
  }
  if (operation.nextLinkPath) {
    options.push(`nextLinkName: "${operation.nextLinkPath}"`);
  }
  statements.push(
    `return ${buildPagedAsyncIteratorReference}(
      context, 
      () => _${name}Send(${parameters.map((p) => p.name).join(", ")}), 
      _${name}Deserialize,
      ${getExpectedStatuses(operation)},
      ${options.length > 0 ? `{${options.join(", ")}}` : ``}
      );`
  );

  return {
    ...functionStatement,
    statements
  };
}

// function extractPagingType(type: Type, itemName?: string): Type | undefined {
//   if (!itemName) {
//     return undefined;
//   }
//   const allProperties = [
//     ...(type.properties ?? []),
//     ...(type.parents ?? []).flatMap((p) => p.properties ?? [])
//   ];
//   const prop = allProperties
//     .filter((prop) => prop.restApiName === itemName)
//     .map((prop) => prop.type);
//   if (prop.length === 0) {
//     return undefined;
//   }
//   return prop[0]?.type === "list" && prop[0].elementType
//     ? prop[0].elementType
//     : undefined;
// }
export function getOperationOptionsName(
  method: [string[], SdkServiceMethod<SdkHttpOperation>],
  includeGroupName = false
) {
  const prefixes = method[0];
  const operation = method[1];
  const prefix =
    includeGroupName && operation.name.indexOf("_") === -1
      ? getClassicalLayerPrefix(prefixes, NameType.Interface)
      : "";
  const optionName = `${prefix}${toPascalCase(operation.name)}OptionalParams`;
  return optionName;
}

/**
 * This function build the request parameters that we will provide to the
 * RLC internally. This will translate High Level parameters into the RLC ones.
 * Figuring out what goes in headers, body, path and qsp.
 */
function getRequestParameters(
  dpgContext: SdkContext,
  operation: SdkServiceMethod<SdkHttpOperation>
): string {
  if (!operation.operation.parameters) {
    return "";
  }
  const operationParameters = operation.operation.parameters.filter(
    (p) => !p.onClient && !isContentType(p)
  );

  const contentTypeParameter =
    operation.operation.parameters.find(isContentType);

  const parametersImplementation: Record<
    "header" | "query" | "body",
    { paramMap: string; param: SdkServiceParameter }[]
  > = {
    header: [],
    query: [],
    body: []
  };

  for (const param of operationParameters) {
    if (param.kind === "header" || param.kind === "query") {
      parametersImplementation[param.kind].push({
        paramMap: getParameterMap(dpgContext, param),
        param
      });
    }
  }

  let paramStr = "";

  if (contentTypeParameter) {
    paramStr = `${getContentTypeValue(contentTypeParameter)},`;
  }

  if (parametersImplementation.header.length) {
    paramStr = `${paramStr}\nheaders: {${parametersImplementation.header
      .map((i) => buildHeaderParameter(dpgContext.program, i.paramMap, i.param))
      .join(",\n")}},`;
  }

  if (parametersImplementation.query.length) {
    paramStr = `${paramStr}\nqueryParameters: {${parametersImplementation.query
      .map((i) => i.paramMap)
      .join(",\n")}},`;
  }
  if (
    operation.operation.bodyParam === undefined &&
    parametersImplementation.body.length
  ) {
    paramStr = `${paramStr}\nbody: {${parametersImplementation.body
      .map((i) => i.paramMap)
      .join(",\n")}}`;
  } else if (operation.operation.bodyParam !== undefined) {
    paramStr = `${paramStr}${buildBodyParameter(dpgContext, operation.operation.bodyParam)}`;
  }
  return paramStr;
}

// Specially handle the type for headers because we only allow string/number/boolean values
function buildHeaderParameter(
  program: Program,
  paramMap: string,
  param: SdkServiceParameter
): string {
  if (!param.optional && isTypeNullable(param.type) === true) {
    reportDiagnostic(program, {
      code: "nullable-required-header",
      target: NoTarget
    });
    return paramMap;
  }
  const conditions = [];
  if (param.optional) {
    conditions.push(`options?.${param.name} !== undefined`);
  }
  if (isTypeNullable(param.type) === true) {
    conditions.push(`options?.${param.name} !== null`);
  }
  return conditions.length > 0
    ? `...(${conditions.join(" && ")} ? {${paramMap}} : {})`
    : paramMap;
}

function buildBodyParameter(
  context: SdkContext,
  bodyParameter: SdkBodyParameter | undefined
) {
  if (!bodyParameter || !bodyParameter.type) {
    return "";
  }
  const serializerFunctionName = buildModelSerializer(
    context,
    bodyParameter.type!,
    false,
    true
  );

  const bodyNameExpression = bodyParameter.optional
    ? `options["${bodyParameter.name}"]`
    : bodyParameter.name;
  const nullOrUndefinedPrefix = getPropertySerializationPrefix(
    bodyParameter,
    bodyParameter.optional ? "options" : undefined
  );
  if (serializerFunctionName) {
    return `\nbody: ${nullOrUndefinedPrefix}${serializerFunctionName}(${bodyNameExpression}),`;
  } else if (isAzureCoreErrorType(context.program, bodyParameter.type.__raw)) {
    return `\nbody: ${nullOrUndefinedPrefix}${bodyNameExpression},`;
  }
  const serializedBody = serializeRequestValue(
    context,
    bodyParameter.type,
    bodyNameExpression,
    !bodyParameter.optional,
    isBinaryPayload(context, bodyParameter.__raw!, bodyParameter.contentTypes)
      ? "binary"
      : getEncodeForType(bodyParameter.type)
  );
  return `\nbody: ${serializedBody === bodyNameExpression ? "" : nullOrUndefinedPrefix}${serializedBody},`;
}

function getEncodingFormat(type: { format?: string }) {
  const supportedFormats = ["base64url", "base64", "byte"];

  if (!supportedFormats.includes(type.format ?? "")) {
    return "base64";
  }

  return type.format;
}

/**
 * This function helps with renames, translating client names to rest api names
 */
export function getParameterMap(
  context: SdkContext,
  param: SdkServiceParameter
): string {
  if (isConstant(param.type)) {
    return `"${param.name}": ${getConstantValue(param.type)}`;
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(context, param);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(context, param);
  }

  if (isRequired(param)) {
    return getRequired(context, param);
  }

  throw new Error(`Parameter ${param.name} is not supported`);
}

function getCollectionFormat(context: SdkContext, param: SdkServiceParameter) {
  const serializedName = getPropertySerializedName(param);
  const collectionInfo = getCollectionFormatHelper(
    param.kind,
    getEncodeForType(param) ?? ""
  );
  if (!collectionInfo) {
    throw "Has collection format info but without helper function detected";
  }
  const isMulti = (getEncodeForType(param) ?? "").toLowerCase() === "multi";
  const additionalParam = isMulti ? `, "${serializedName}"` : "";
  if (!param.optional) {
    return `"${serializedName}": ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      param.name,
      true,
      getEncodeForType(param)
    )}${additionalParam})`;
  }
  return `"${serializedName}": options?.${
    param.name
  } !== undefined ? ${collectionInfo}(${serializeRequestValue(
    context,
    param.type,
    "options?." + param.name,
    false,
    getEncodeForType(param)
  )}${additionalParam}): undefined`;
}

function isContentType(param: SdkServiceParameter): boolean {
  return param.kind === "header" && param.name.toLowerCase() === "content-type";
}

function getContentTypeValue(param: SdkServiceParameter) {
  const defaultValue = param.clientDefaultValue;

  if (defaultValue) {
    return `contentType: options.${param.name} as any ?? "${defaultValue}"`;
  } else {
    return `contentType: ${
      !param.optional ? "contentType" : "options." + param.name + " as any"
    }`;
  }
}

function isRequired(param: SdkModelPropertyType) {
  return !param.optional;
}

function getRequired(context: SdkContext, param: SdkModelPropertyType) {
  const serializedName = getPropertySerializedName(param);
  if (param.type.kind === "model") {
    const { propertiesStr } = getRequestModelMapping(
      context,
      { ...param.type, optional: param.optional },
      param.name
    );
    return `"${serializedName}": { ${propertiesStr.join(",")} }`;
  }
  return `"${serializedName}": ${serializeRequestValue(
    context,
    param.type,
    param.name,
    true,
    getEncodeForType(param)
  )}`;
}

function getConstantValue(param: SdkConstantType) {
  if (typeof param.value === "string") {
    return `"${param.value}"`;
  }
  return `${param.value}`;
}

function isConstant(param: SdkType): param is SdkConstantType {
  return param.kind === "constant";
}

function isOptional(param: SdkModelPropertyType) {
  return Boolean(param.optional);
}

function getOptional(context: SdkContext, param: SdkHttpParameter) {
  const serializedName = getPropertySerializedName(param);
  if (param.type.kind === "model") {
    const { propertiesStr, directAssignment } = getRequestModelMapping(
      context,
      { ...param.type, optional: param.optional },
      "options?." + param.name + "?."
    );
    const serializeContent =
      directAssignment === true
        ? propertiesStr.join(",")
        : `{${propertiesStr.join(",")}}`;
    return `"${serializedName}": ${serializeContent}`;
  }
  if (serializedName === "api-version" && (param as any).location === "query") {
    return `"${serializedName}": ${
      param.clientDefaultValue
        ? `options?.${param.name} ?? "${param.clientDefaultValue}"`
        : `options?.${param.name}`
    }`;
  }
  return `"${serializedName}": ${serializeRequestValue(
    context,
    param.type,
    `options?.${param.name}`,
    false,
    getEncodeForType(param)
  )}`;
}

/**
 * Get the encode for SDK type
 */
function getEncodeForType(
  type: SdkType | SdkHttpParameter | SdkModelPropertyType
) {
  return (type as any).encode;
}

/**
 * Get the optionality for SDK type
 */
function getOptionalForType(
  type: SdkType | SdkHttpParameter | SdkModelPropertyType
) {
  return (type as any).optional;
}

/**
 * Builds the assignment for when a property or parameter has a default value
 */
function getDefaultValue(param: SdkServiceParameter) {
  return param.clientDefaultValue;
}

/**
 * Extracts the path parameters
 */
function getPathParameters(
  dpgContext: SdkContext,
  operation: SdkServiceMethod<SdkHttpOperation>
) {
  if (!operation.operation.parameters) {
    return "";
  }

  let pathParams = "";
  for (const param of operation.operation.parameters) {
    if (param.kind === "path") {
      // Path parameters cannot be optional
      if (param.optional) {
        reportDiagnostic(dpgContext.program, {
          code: "optional-path-param",
          target: NoTarget,
          format: {
            paramName: param
          }
        });
      }
      pathParams += `${pathParams !== "" ? "," : ""} ${getPathParamExpr(
        param,
        getDefaultValue(param) as string
      )}`;
    }
  }

  return pathParams;
}

function getPathParamExpr(param: SdkServiceParameter, defaultValue?: string) {
  const value = defaultValue
    ? typeof defaultValue === "string"
      ? `options[${param.name}] ?? "${defaultValue}"`
      : `options[${param.name}] ?? ${defaultValue}`
    : param.onClient
      ? `context.${param.name}`
      : param.name;
  // TODO allowReserved is not supported in Query and Header parameter yet.
  if (param.kind === "path" && param.allowReserved === true) {
    return `{value: ${value}, allowReserved: true}`;
  }
  return value;
}

function getNullableCheck(name: string, type: SdkType) {
  if (!isTypeNullable(type)) {
    return "";
  }

  return `${name} === null ? null :`;
}

/**
 *
 * This function helps translating an HLC request to RLC request,
 * extracting properties from body and headers and building the RLC response object
 */
interface RequestModelMappingResult {
  propertiesStr: string[];
  directAssignment?: boolean;
}
export function getRequestModelMapping(
  context: SdkContext,
  modelPropertyType: SdkModelType & { optional?: boolean },
  propertyPath: string = "body"
): RequestModelMappingResult {
  const props: string[] = [];
  const allParents = getAllAncestors(modelPropertyType);
  const properties: SdkModelPropertyType[] =
    getAllProperties(modelPropertyType, allParents) ?? [];
  if (properties.length <= 0) {
    return { propertiesStr: [] };
  }
  for (const property of properties) {
    if (property.kind === "property" && isReadOnly(property)) {
      continue;
    }
    const dot = propertyPath.endsWith("?") ? "." : "";
    const serializedName = getPropertySerializedName(property);
    const propertyPathWithDot = `${propertyPath ? `${propertyPath}${dot}` : `${dot}`}`;
    const nullOrUndefinedPrefix = getPropertySerializationPrefix(
      property,
      propertyPath
    );

    const propertyFullName = getPropertyFullName(property, propertyPathWithDot);
    const serializeFunctionName = buildModelSerializer(
      context,
      property.type!,
      false,
      true
    );
    if (serializeFunctionName) {
      props.push(
        `"${serializedName}": ${nullOrUndefinedPrefix}${serializeFunctionName}(${propertyFullName})`
      );
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(
        `"${serializedName}": ${nullOrUndefinedPrefix}${propertyFullName}`
      );
    } else {
      const serializedValue = serializeRequestValue(
        context,
        property.type,
        propertyFullName,
        !property.optional,
        getEncodeForType(property)
      );
      props.push(`"${serializedName}": ${serializedValue}`);
    }
  }

  return { propertiesStr: props };
}

function getPropertySerializedName(property: SdkModelPropertyType) {
  return property.kind !== "credential" && property.kind !== "method"
    ? property.serializedName
    : property.name;
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
export function getResponseMapping(
  context: SdkContext,
  type: SdkType,
  propertyPath: string = "result.body"
) {
  const allParents = type.kind === "model" ? getAllAncestors(type) : [];
  const properties =
    type.kind === "model" ? getAllProperties(type, allParents) : [];
  const props: string[] = [];
  for (const property of properties) {
    const dot = propertyPath.endsWith("?") ? "." : "";
    const serializedName = getPropertySerializedName(property);
    const restValue = `${
      propertyPath ? `${propertyPath}${dot}` : `${dot}`
    }["${serializedName}"]`;

    const nullOrUndefinedPrefix =
      property.optional || isTypeNullable(property.type)
        ? `!${restValue}? ${restValue}: `
        : "";
    const deserializeFunctionName = buildModelDeserializer(
      context,
      property.type!,
      false,
      true
    );
    if (deserializeFunctionName) {
      props.push(
        `"${property.name}": ${nullOrUndefinedPrefix}${deserializeFunctionName}(${restValue})`
      );
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(`"${property.name}": ${nullOrUndefinedPrefix}${restValue}`);
    } else {
      const deserializeValue = deserializeResponseValue(
        context,
        property.type,
        `${propertyPath}${dot}["${serializedName}"]`,
        getEncodeForType(property)
      );
      props.push(
        `"${property.name}": ${deserializeValue === `${propertyPath}${dot}["${serializedName}"]` ? "" : nullOrUndefinedPrefix}${deserializeValue}`
      );
    }
  }
  return props;
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
export function serializeRequestValue(
  context: SdkContext,
  type: SdkType,
  clientValue: string,
  required: boolean,
  format?: string
): string {
  const getSdkType = useSdkTypes();
  const dependencies = useDependencies();
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || getOptionalForType(type) || !required
      ? `!${clientValue}? ${clientValue}: `
      : "";
  switch (type.kind) {
    case "utcDateTime":
      switch (type.encode ?? format) {
        case "rfc7231":
          return `${nullOrUndefinedPrefix}${clientValue}.toUTCString()`;
        case "unixTimestamp":
          return `${nullOrUndefinedPrefix}((${clientValue}.getTime() / 1000) | 0)`;
        case "rfc3339":
        default:
          return `${getNullableCheck(clientValue, type)} ${clientValue}${
            required ? "" : "?"
          }.toISOString()`;
      }
    case "array": {
      const prefix = nullOrUndefinedPrefix + clientValue;
      if (type.valueType) {
        const elementNullOrUndefinedPrefix =
          isTypeNullable(type.valueType) || getOptionalForType(type.valueType)
            ? "!p ? p : "
            : "";
        const serializeFunctionName = buildModelSerializer(
          context,
          type.valueType,
          false,
          true
        );
        if (serializeFunctionName) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeFunctionName}(p)})`;
        } else if (
          isAzureCoreErrorType(context.program, type.valueType.__raw)
        ) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
        } else {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeRequestValue(context, type.valueType, "p", true, getEncodeForType(type.valueType))}})`;
        }
      }
      return clientValue;
    }
    case "bytes":
      if (format !== "binary") {
        const uint8ArrayToStringReference = resolveReference(
          dependencies.uint8ArrayToString
        );
        return required
          ? `${getNullableCheck(
              clientValue,
              type
            )} ${uint8ArrayToStringReference}(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }")`
          : `${nullOrUndefinedPrefix} ${uint8ArrayToStringReference}(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }")`;
      }
      return clientValue;
    case "union":
      if (isNormalUnion(type)) {
        return `${clientValue}`;
      } else if (
        isSpecialHandledUnion({
          ...type,
          isNonExhaustive:
            context.rlcOptions?.experimentalExtensibleEnums ?? false
        })
      ) {
        const sdkType = getSdkType(type.__raw!);
        const serializerRefkey = refkey(sdkType, "serializer");
        const serializeFunctionName = resolveReference(serializerRefkey);
        return `${serializeFunctionName}(${clientValue})`;
      } else {
        return `${clientValue} as any`;
      }
    default:
      if (clientValue === "constructorParam") {
        return `${clientValue} as any`;
      }
      return clientValue;
  }
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
export function deserializeResponseValue(
  context: SdkContext,
  type: SdkType,
  restValue: string,
  format?: string
): string {
  const dependencies = useDependencies();
  const stringToUint8ArrayReference = resolveReference(
    dependencies.stringToUint8Array
  );
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || getOptionalForType(type)
      ? `!${restValue}? ${restValue}: `
      : "";
  switch (type.kind) {
    case "utcDateTime":
      return `${nullOrUndefinedPrefix} new Date(${type.encode === "unixTimestamp" ? `${restValue} * 1000` : restValue})`;
    case "array": {
      const prefix = nullOrUndefinedPrefix + restValue;
      let elementNullOrUndefinedPrefix = "";
      if (
        type.valueType &&
        (isTypeNullable(type.valueType) || getOptionalForType(type.valueType))
      ) {
        elementNullOrUndefinedPrefix = "!p ? p :";
      }
      const deserializeFunctionName = type.valueType
        ? buildModelDeserializer(context, type.valueType!, false, true)
        : undefined;
      if (deserializeFunctionName) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeFunctionName}(p)})`;
      } else if (
        type.valueType &&
        isAzureCoreErrorType(context.program, type.valueType.__raw)
      ) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
      } else if (type.valueType) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeResponseValue(context, type.valueType, "p", getEncodeForType(type))}})`;
      } else {
        return restValue;
      }
    }
    case "bytes":
      if (format !== "binary") {
        return `typeof ${restValue} === 'string'
        ? ${stringToUint8ArrayReference}(${restValue}, "${format ?? "base64"}")
        : ${restValue}`;
      }
      return restValue;
    case "union":
      if (isNormalUnion(type)) {
        return `${restValue}`;
      } else if (isSpecialHandledUnion(type)) {
        const deserializeFunctionName = type
          ? buildModelDeserializer(context, type!, false, true)
          : undefined;
        if (deserializeFunctionName) {
          return `${deserializeFunctionName}(${restValue})`;
        } else {
          return `${restValue} as any`;
        }
      } else {
        return `${restValue} as any`;
      }
    default:
      return restValue;
  }
}

export function isLroAndPagingOperation(
  op: SdkMethod<SdkHttpOperation>
): op is SdkLroPagingServiceMethod<SdkHttpOperation> {
  return op.kind === "lropaging";
}

export function isLroOnlyOperation(
  op: SdkMethod<SdkHttpOperation>
): op is SdkLroServiceMethod<SdkHttpOperation> {
  return op.kind === "lro";
}

export function isPagingOnlyOperation(
  op: SdkMethod<SdkHttpOperation>
): op is SdkPagingServiceMethod<SdkHttpOperation> {
  return op.kind === "paging";
}

export function getAllProperties(
  type: SdkType,
  parents?: SdkType[]
): SdkModelPropertyType[] {
  const propertiesMap: Map<string, SdkModelPropertyType> = new Map();
  if (!type) {
    return [];
  }
  parents?.forEach((p) => {
    getAllProperties(p).forEach((prop) => {
      propertiesMap.set(prop.name, prop);
    });
  });
  type.kind === "model" &&
    type.properties?.forEach((p) => {
      propertiesMap.set(p.name, p);
    });
  return [...propertiesMap.values()];
}

export function getAllAncestors(type: SdkType): SdkType[] {
  const ancestors: SdkType[] = [];
  if (type.kind === "model" && type.baseModel) {
    ancestors.push(type.baseModel);
    ancestors.push(...getAllAncestors(type.baseModel));
  }
  return ancestors;
}

export function getPropertySerializationPrefix(
  modularType: SdkServiceParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  const propertyFullName = getPropertyFullName(modularType, propertyPath);
  if (modularType.optional || isTypeNullable(modularType.type)) {
    return `!${propertyFullName} ? ${propertyFullName} :`;
  }

  return "";
}

export function getPropertyFullName(
  modularType: SdkServiceParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  let fullName = `${modularType.name}`;
  if (propertyPath) {
    fullName = `${propertyPath}["${modularType.name}"]`;
  }
  return fullName;
}

/**
 * Get an expression representing an array of expected status codes for the operation
 * @param operation The operation
 */
export function getExpectedStatuses(
  operation: SdkServiceMethod<SdkHttpOperation>
): string {
  const statusCodes = operation.operation.responses.map((x) => x.statusCodes);
  // LROs may call the same path but with GET to get the operation status.
  if (
    isLroOnlyOperation(operation) &&
    operation.operation.verb !== "get" &&
    !statusCodes.includes(200)
  ) {
    statusCodes.push(200);
  }

  return `[${statusCodes.map((x) => `"${x}"`).join(", ")}]`;
}
