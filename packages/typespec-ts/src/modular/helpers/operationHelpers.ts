import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { NoTarget, Program } from "@typespec/compiler";
import { PagingHelpers, PollingHelpers } from "../static-helpers-metadata.js";
import {
  getNullableValidType,
  isSpreadBodyParameter,
  isTypeNullable
} from "./typeHelpers.js";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo,
  isBinaryPayload,
  ServiceOperation
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
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { buildModelDeserializer } from "../serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "../serialization/buildSerializerFunction.js";
import { refkey } from "../../framework/refkey.js";
import { reportDiagnostic } from "../../lib.js";
import { resolveReference } from "../../framework/reference.js";
import { useDependencies } from "../../framework/hooks/useDependencies.js";
import { useSdkTypes } from "../../framework/hooks/sdkTypes.js";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import {
  getTypeExpression,
  normalizeModelPropertyName
} from "../type-expressions/get-type-expression.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  isReadOnly,
  SdkBodyParameter,
  SdkClientType,
  SdkConstantType,
  SdkHttpOperation,
  SdkHttpParameter,
  SdkLroPagingServiceMethod,
  SdkLroServiceMethod,
  SdkMethod,
  SdkModelPropertyType,
  SdkModelType,
  SdkPagingServiceMethod,
  SdkServiceParameter,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

export function getSendPrivateFunction(
  dpgContext: SdkContext,
  client: SdkClientType<SdkHttpOperation>,
  method: [string[], ServiceOperation],
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
  const optionalParamName = getOptionalParamsName(parameters);
  const hasQueryApiVersion = operation.operation.parameters.some(
    (p) => p.isApiVersionParam && p.onClient && p.kind === "query"
  );
  const hasClientApiVersion = client.initialization.properties.some(
    (p) => p.isApiVersionParam && p.onClient && p.kind === "method"
  );
  const statements: string[] = [];
  if (hasClientApiVersion && !hasQueryApiVersion) {
    statements.push(
      `context.pipeline.removePolicy({ name: "ClientApiVersionPolicy"});`
    );
  }

  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      dpgContext,
      operation,
      optionalParamName
    )}).${operationMethod}({...${resolveReference(dependencies.operationOptionsToRequestParameters)}(${optionalParamName}), ${getRequestParameters(
      dpgContext,
      operation,
      optionalParamName
    )}});`
  );

  return {
    ...functionStatement,
    statements
  };
}

export function getDeserializePrivateFunction(
  context: SdkContext,
  operation: ServiceOperation
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
  const restResponse = operation.operation.responses[0];
  let returnType;
  if (isLroOnly && operation.operation.verb.toLowerCase() !== "patch") {
    returnType = buildLroReturnType(context, operation);
  } else if (response.type && restResponse) {
    returnType = {
      name: (restResponse as any).name ?? "",
      type: getTypeExpression(context, restResponse.type!)
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
    `${getExceptionThrowStatement(context, operation)}`,
    "}"
  );
  const deserializedType = isLroOnly
    ? operation?.lroMetadata?.finalResponse?.result
    : restResponse
      ? restResponse.type
      : response.type;
  const lroSubPath = isLroOnly
    ? operation?.lroMetadata?.finalResponse?.resultPath
    : undefined;

  const deserializePrefix = "result.body";

  const deserializedRoot = `${deserializePrefix}${lroSubPath ? "." + lroSubPath : ""}`;
  if (isLroOnly && lroSubPath) {
    statements.push(
      `if(${deserializedRoot.split(".").join("?.")} === undefined) {
        throw ${createRestErrorReference}(\`Expected a result in the response at position "${deserializedRoot}"\`, result);
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
  } else {
    statements.push("return;");
  }

  return {
    ...functionStatement,
    statements
  };
}

interface ExceptionThrowDetail {
  start: number;
  end?: number;
  deserializer: string;
}

interface OperationExceptionDetails {
  customized: ExceptionThrowDetail[];
  defaultDeserializer?: string;
}

function getExceptionDetails(
  context: SdkContext,
  operation: ServiceOperation
): OperationExceptionDetails {
  const customized: ExceptionThrowDetail[] = [];
  let defaultDeserializer: string | undefined;
  for (const exception of operation.operation.exceptions) {
    if (!exception.type) {
      continue;
    }
    const statusCode = exception.statusCodes;
    const deserializeFunctionName = buildModelDeserializer(
      context,
      exception.type,
      false,
      true
    );
    if (
      !deserializeFunctionName ||
      typeof deserializeFunctionName !== "string"
    ) {
      continue;
    }
    if (statusCode === "*") {
      defaultDeserializer = deserializeFunctionName;
    } else if (typeof statusCode === "number") {
      customized.push({
        start: statusCode,
        deserializer: deserializeFunctionName
      });
    } else {
      customized.push({
        start: statusCode.start,
        end: statusCode.end,
        deserializer: deserializeFunctionName
      });
    }
  }
  return { customized, defaultDeserializer };
}

function getExceptionThrowStatement(
  context: SdkContext,
  operation: ServiceOperation
) {
  const statements = [];
  const createRestErrorReference = resolveReference(
    useDependencies().createRestError
  );
  const { customized, defaultDeserializer } = getExceptionDetails(
    context,
    operation
  );
  if (customized.length > 0) {
    statements.push(`const error = ${createRestErrorReference}(result);`);
    statements.push(`const statusCode = Number.parseInt(result.status);`);
    const stats: string[] = customized.map((exception) => {
      if (exception.end) {
        return `if(statusCode >= ${exception.start} && statusCode <= ${exception.end}) {
              error.details = ${exception.deserializer}(result.body);
          }`;
      } else {
        return `if(statusCode === ${exception.start}) {
             error.details = ${exception.deserializer}(result.body);
          }`;
      }
    });
    statements.push(stats.join("\nelse "));
    if (defaultDeserializer) {
      statements.push(`else {
        error.details = ${defaultDeserializer}(result.body);
      }`);
    }
    statements.push("throw error;");
  } else {
    if (defaultDeserializer) {
      statements.push(`const error = ${createRestErrorReference}(result);
      error.details = ${defaultDeserializer}(result.body);`);
      statements.push("throw error;");
    } else {
      statements.push(`throw ${createRestErrorReference}(result);`);
    }
  }
  return statements.join("\n");
}

function getOptionalParamsName(
  parameters: OptionalKind<ParameterDeclarationStructure>[]
) {
  return (
    parameters.filter((p) => p.type?.toString().endsWith("OptionalParams"))[0]
      ?.name ?? "options"
  );
}

function getOperationSignatureParameters(
  context: SdkContext,
  method: [string[], ServiceOperation],
  clientType: string
): OptionalKind<ParameterDeclarationStructure>[] {
  const operationMethod = method[1];
  const methodParameters = operationMethod.parameters;
  const operationParameters: any[] = [...operationMethod.operation.parameters];
  if (operationMethod.operation.bodyParam) {
    operationParameters.push(operationMethod.operation.bodyParam);
  }

  const optionsType = getOperationOptionsName(method, true);
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();

  methodParameters
    .filter((p) => {
      const correspondingMethodParams = operationParameters.filter(
        (param) => {
          return (
            (param.correspondingMethodParams as any[]).includes(p)
          );
        }
      );
      const corresponseParam = (correspondingMethodParams.length === 1 &&
        correspondingMethodParams[0]?.kind !== "cookie");
      const res =
        p.onClient === false &&
        p.type.kind !== "constant" &&
        corresponseParam &&
        p.clientDefaultValue === undefined &&
        !p.optional &&
        !(
          p.isGeneratedName &&
          (p.name === "contentType" || p.name === "accept")
        ); // skip tcgc generated contentType and accept header parameter
      return res;
    })
    .map((p) => {
      return {
        name: p.name,
        type: getTypeExpression(context, p.type)
      };
    })
    .forEach((p) => {
      parameters.set(p.name, p);
    });

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
  method: [string[], ServiceOperation],
  clientType: string
): OptionalKind<FunctionDeclarationStructure> & { propertyName?: string } {
  const operation = method[1];
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, method, clientType);
  const optionalParamName = getOptionalParamsName(parameters);
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
      clientType,
      optionalParamName
    );
  } else if (isLroAndPagingOperation(operation)) {
    // Case 3: both paging + lro operation is not supported yet so handle them as normal operation and customization may be needed
    // https://github.com/Azure/autorest.typescript/issues/2313
  }

  // TODO: Support operation overloads
  const response = operation.response;
  let returnType = { name: "", type: "void" };
  if (response.type) {
    const type = response.type;
    returnType = {
      name: (type as any).name ?? "",
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
    propertyName: normalizeName(operation.name, NameType.Property),
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
  clientType: string,
  optionalParamName: string = "options"
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
    propertyName: normalizeName(operation.name, NameType.Property),
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
  const allowedFinalLocation = [
    "azure-async-operation",
    "location",
    "original-uri",
    "operation-location"
  ];
  const resourceLocationConfig =
    lroMetadata?.finalStateVia &&
      allowedFinalLocation.includes(lroMetadata?.finalStateVia)
      ? `resourceLocationConfig: "${lroMetadata?.finalStateVia}"`
      : "";
  const statements: string[] = [];
  statements.push(`

  return ${getLongRunningPollerReference}(context, _${name}Deserialize, ${getExpectedStatuses(
    operation
  )}, {
    updateIntervalInMs: ${optionalParamName}?.updateIntervalInMs,
    abortSignal: ${optionalParamName}?.abortSignal,
    getInitialResponse: () => _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")}),
    ${resourceLocationConfig}
  }) as ${pollerLikeReference}<${operationStateReference}<${returnType.type
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
  if (response.type && response.type.kind === "array") {
    const type = response.type;
    returnType = {
      name: (type.valueType as any).name ?? "",
      type: getTypeExpression(context, type.valueType)
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
    propertyName: normalizeName(operation.name, NameType.Property),
    parameters,
    returnType: `${pagedAsyncIterableIteratorReference}<${returnType.type}>`
  };

  const statements: string[] = [];
  const options = [];
  // TODO: follow up on https://github.com/Azure/typespec-azure/issues/2103
  const nextLinkName = operation.nextLinkPath;
  const itemName = operation.response.resultPath;
  if (itemName) {
    options.push(`itemName: "${itemName}"`);
  }
  if (nextLinkName) {
    options.push(`nextLinkName: "${nextLinkName}"`);
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

export function getOperationOptionsName(
  method: [string[], ServiceOperation],
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
  operation: ServiceOperation,
  optionalParamName: string = "options"
): string {
  if (!operation.operation.parameters) {
    return "";
  }
  const operationParameters = operation.operation.parameters.filter(
    (p) => (!p.onClient || p.isApiVersionParam) && !isContentType(p)
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
      // skip tcgc generated contentType and accept non constant type header parameter
      if (
        param.isGeneratedName &&
        !isConstant(param.type) &&
        (param.name === "contentType" || param.name === "accept")
      ) {
        continue;
      }
      parametersImplementation[param.kind].push({
        paramMap: getParameterMap(dpgContext, param, optionalParamName),
        param
      });
    }
  }

  let paramStr = "";

  if (contentTypeParameter) {
    paramStr = `${getContentTypeValue(contentTypeParameter, optionalParamName)},`;
  }

  if (parametersImplementation.header.length) {
    paramStr = `${paramStr}\nheaders: {${parametersImplementation.header
      .map((i) =>
        buildHeaderParameter(
          dpgContext.program,
          i.paramMap,
          i.param,
          optionalParamName
        )
      )
      .join(",\n")}, ...${optionalParamName}.requestOptions?.headers },`;
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
  param: SdkServiceParameter,
  optionalParamName: string = "options"
): string {
  const paramName = param.name;
  if (!param.optional && isTypeNullable(param.type) === true) {
    reportDiagnostic(program, {
      code: "nullable-required-header",
      target: NoTarget
    });
    return paramMap;
  }
  const conditions = [];
  if (param.optional) {
    conditions.push(`${optionalParamName}?.${paramName} !== undefined`);
  }
  if (isTypeNullable(param.type) === true) {
    conditions.push(`${optionalParamName}?.${paramName} !== null`);
  }
  return conditions.length > 0
    ? `...(${conditions.join(" && ")} ? {${paramMap}} : {})`
    : paramMap;
}

function buildBodyParameter(
  context: SdkContext,
  bodyParameter: SdkBodyParameter | undefined,
  optionalParamName: string = "options"
) {
  if (!bodyParameter || !bodyParameter.type) {
    return "";
  }
  const serializerFunctionName = buildModelSerializer(
    context,
    getNullableValidType(bodyParameter.type),
    false,
    true
  );

  const bodyParamName = normalizeName(bodyParameter.name, NameType.Parameter);
  const bodyNameExpression = bodyParameter.optional
    ? `${optionalParamName}["${bodyParamName}"]`
    : bodyParamName;
  const nullOrUndefinedPrefix = getPropertySerializationPrefix(
    context,
    bodyParameter,
    bodyParameter.optional ? optionalParamName : undefined
  );
  // if a model being used in both spread and non spread operation, we should only leverage the deserializer in non spread operation
  if (serializerFunctionName && !isSpreadBodyParameter(bodyParameter)) {
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
  return `\nbody: ${serializedBody.startsWith(nullOrUndefinedPrefix) ? "" : nullOrUndefinedPrefix}${serializedBody},`;
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
  param: SdkServiceParameter,
  optionalParamName: string = "options"
): string {
  if (isConstant(param.type)) {
    return `"${param.name}": ${getConstantValue(param.type)}`;
  }

  if (hasCollectionFormatInfo(param.kind, (param as any).collectionFormat)) {
    return getCollectionFormat(context, param, optionalParamName);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(context, param, optionalParamName);
  }

  if (isRequired(param)) {
    return getRequired(context, param);
  }

  throw new Error(`Parameter ${param.name} is not supported`);
}

function getCollectionFormat(
  context: SdkContext,
  param: SdkServiceParameter,
  optionalParamName: string = "options"
) {
  const serializedName = getPropertySerializedName(param);
  const format = (param as any).collectionFormat;
  const collectionInfo = getCollectionFormatHelper(param.kind, format ?? "");
  if (!collectionInfo) {
    throw "Has collection format info but without helper function detected";
  }
  const isMulti = format.toLowerCase() === "multi";
  const additionalParam = isMulti ? `, "${serializedName}"` : "";
  if (!param.optional) {
    return `"${serializedName}": ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      param.name,
      true,
      getEncodeForType(param.type)
    )}${additionalParam})`;
  }
  return `"${serializedName}": ${optionalParamName}?.${param.name
    } !== undefined ? ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      `${optionalParamName}?.${param.name}`,
      false,
      getEncodeForType(param.type)
    )}${additionalParam}): undefined`;
}

function isContentType(param: SdkServiceParameter): boolean {
  return (
    param.kind === "header" &&
    param.serializedName.toLowerCase() === "content-type"
  );
}

function getContentTypeValue(
  param: SdkServiceParameter,
  optionalParamName: string = "options"
) {
  const defaultValue = param.clientDefaultValue;
  // allow customers to customize the content type if it's guessed by tcgc.
  if (isConstant(param.type)) {
    return `contentType: ${getConstantValue(param.type)}`;
  }
  if (defaultValue) {
    return `contentType: ${optionalParamName}.${param.name} as any ?? "${defaultValue}"`;
  } else {
    return `contentType: ${!param.optional
      ? "contentType"
      : `${optionalParamName}.` + param.name + " as any"
      }`;
  }
}

function isRequired(param: SdkModelPropertyType) {
  return !param.optional;
}

function getRequired(context: SdkContext, param: SdkModelPropertyType) {
  const serializedName = getPropertySerializedName(param);
  const clientValue = `${param.onClient ? "context." : ""}${param.name}`;
  if (param.type.kind === "model") {
    const propertiesStr = getRequestModelMapping(
      context,
      { ...param.type, optional: param.optional },
      clientValue
    );
    return `"${serializedName}": { ${propertiesStr.join(",")} }`;
  }
  return `"${serializedName}": ${serializeRequestValue(
    context,
    param.type,
    clientValue,
    true,
    getEncodeForType(param.type)
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

function getOptional(
  context: SdkContext,
  param: SdkHttpParameter,
  optionalParamName: string
) {
  const serializedName = getPropertySerializedName(param);
  const paramName = `${param.onClient ? "context." : `${optionalParamName}?.`}${param.name}`;
  if (param.type.kind === "model") {
    const propertiesStr = getRequestModelMapping(
      context,
      { ...param.type, optional: param.optional },
      paramName + "?."
    );
    const serializeContent = `{${propertiesStr.join(",")}}`;
    return `"${serializedName}": ${serializeContent}`;
  }
  return `"${serializedName}": ${serializeRequestValue(
    context,
    param.type,
    paramName,
    false,
    getEncodeForType(param.type)
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
  operation: ServiceOperation,
  optionalParamName: string = "options"
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
        getDefaultValue(param) as string,
        optionalParamName
      )}`;
    }
  }

  return pathParams;
}

function getPathParamExpr(
  param: SdkServiceParameter,
  defaultValue?: string,
  optionalParamName: string = "options"
) {
  if (isConstant(param.type)) {
    return getConstantValue(param.type);
  }
  const paramName = param.onClient
    ? `context.${param.name}`
    : param.optional
      ? `${optionalParamName}["${param.name}"]`
      : param.name;
  const value = defaultValue
    ? typeof defaultValue === "string"
      ? `${paramName} ?? "${defaultValue}"`
      : `${paramName} ?? ${defaultValue}`
    : paramName;
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

export function getSerializationExpression(
  context: SdkContext,
  property: SdkModelPropertyType,
  propertyPath: string
): string {
  const dot = propertyPath.endsWith("?") ? "." : "";
  const propertyPathWithDot = `${propertyPath ? `${propertyPath}${dot}` : `${dot}`}`;
  const nullOrUndefinedPrefix = getPropertySerializationPrefix(
    context,
    property,
    propertyPath
  );

  const propertyFullName = getPropertyFullName(
    context,
    property,
    propertyPathWithDot
  );
  const serializeFunctionName = buildModelSerializer(
    context,
    getNullableValidType(property.type),
    false,
    true
  );
  if (serializeFunctionName) {
    return `${nullOrUndefinedPrefix}${serializeFunctionName}(${propertyFullName})`;
  } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
    return `${nullOrUndefinedPrefix}${propertyFullName}`;
  } else {
    return serializeRequestValue(
      context,
      property.type,
      propertyFullName,
      !property.optional,
      getEncodeForType(property.type)
    );
  }
}

export function getRequestModelProperties(
  context: SdkContext,
  modelPropertyType: SdkModelType & { optional?: boolean },
  propertyPath: string = "body"
): Array<[string, string]> {
  const props: [string, string][] = [];
  const allParents = getAllAncestors(modelPropertyType);
  const properties: SdkModelPropertyType[] =
    getAllProperties(modelPropertyType, allParents) ?? [];
  if (properties.length <= 0) {
    return [];
  }
  for (const property of properties) {
    if (property.kind === "property" && isReadOnly(property)) {
      continue;
    }

    props.push([
      getPropertySerializedName(property)!,
      getSerializationExpression(context, property, propertyPath)
    ]);
  }

  return props;
}

/**
 *
 * This function helps translating an HLC request to RLC request,
 * extracting properties from body and headers and building the RLC response object
 */
export function getRequestModelMapping(
  context: SdkContext,
  modelPropertyType: SdkModelType & { optional?: boolean },
  propertyPath: string = "body"
): string[] {
  return getRequestModelProperties(
    context,
    modelPropertyType,
    propertyPath
  ).map(([name, value]) => `"${name}": ${value}`);
}

function getPropertySerializedName(property: SdkModelPropertyType) {
  return property.kind !== "credential" &&
    property.kind !== "method" &&
    property.kind !== "endpoint"
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
    const restValue = `${propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${serializedName}"]`;

    const nullOrUndefinedPrefix =
      property.optional || isTypeNullable(property.type)
        ? `!${restValue}? ${restValue}: `
        : "";
    const deserializeFunctionName = buildModelDeserializer(
      context,
      getNullableValidType(property.type),
      false,
      true
    );
    const propertyName = normalizeModelPropertyName(context, property);
    if (deserializeFunctionName) {
      props.push(
        `${propertyName}: ${nullOrUndefinedPrefix}${deserializeFunctionName}(${restValue})`
      );
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(`${propertyName}: ${nullOrUndefinedPrefix}${restValue}`);
    } else {
      const deserializeValue = deserializeResponseValue(
        context,
        property.type,
        `${propertyPath}${dot}["${serializedName}"]`,
        getEncodeForType(property.type)
      );
      props.push(
        `${propertyName}: ${deserializeValue === `${propertyPath}${dot}["${serializedName}"]` ? "" : nullOrUndefinedPrefix}${deserializeValue}`
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
          return `${nullOrUndefinedPrefix}${clientValue}.toISOString()`;
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
          getNullableValidType(type.valueType),
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
      // TODO https://github.com/Azure/typespec-azure/issues/1999
      if (format !== "binary" && format !== "bytes") {
        const uint8ArrayToStringReference = resolveReference(
          dependencies.uint8ArrayToString
        );
        return required
          ? `${getNullableCheck(
            clientValue,
            type
          )} ${uint8ArrayToStringReference}(${clientValue}, "${getEncodingFormat({ format }) ?? "base64"
          }")`
          : `${nullOrUndefinedPrefix} ${uint8ArrayToStringReference}(${clientValue}, "${getEncodingFormat({ format }) ?? "base64"
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
    case "model": // this is to build serialization logic for spread model types
      return `{${getRequestModelMapping(context, type, "").join(",")}}`;
    case "nullable":
      return serializeRequestValue(
        context,
        type.type,
        clientValue,
        false,
        getEncodeForType(type.type)
      );
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
        ? buildModelDeserializer(
          context,
          getNullableValidType(type.valueType),
          false,
          true
        )
        : undefined;
      if (deserializeFunctionName) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeFunctionName}(p)})`;
      } else if (
        type.valueType &&
        isAzureCoreErrorType(context.program, type.valueType.__raw)
      ) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
      } else if (type.valueType) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeResponseValue(context, type.valueType, "p", getEncodeForType(type.valueType))}})`;
      } else {
        return restValue;
      }
    }
    case "bytes":
      if (format !== "binary" && format !== "bytes") {
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
          ? buildModelDeserializer(
            context,
            getNullableValidType(type),
            false,
            true
          )
          : undefined;
        if (deserializeFunctionName) {
          return `${deserializeFunctionName}(${restValue})`;
        } else {
          return `${restValue} as any`;
        }
      } else {
        return `${restValue} as any`;
      }
    case "model": // generate deserialize logic for spread model types
      return `{${getResponseMapping(context, type, "").join(",")}}`;
    case "nullable":
      return deserializeResponseValue(
        context,
        type.type,
        restValue,
        getEncodeForType(type.type)
      );
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
    type.properties
      ?.filter((p) => {
        return p.kind === "property";
      })
      .forEach((p) => {
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
  context: SdkContext,
  property: SdkServiceParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  const propertyFullName = getPropertyFullName(context, property, propertyPath);
  if (property.optional || isTypeNullable(property.type)) {
    return `!${propertyFullName}? ${propertyFullName}:`;
  }

  return "";
}

export function getPropertyFullName(
  context: SdkContext,
  property: SdkServiceParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  const normalizedPropertyName = normalizeModelPropertyName(context, property)
    .replace(/^"/g, "")
    .replace(/"$/g, "");
  let fullName = normalizedPropertyName;
  if (propertyPath === "" && property.optional) {
    fullName = `options?.${normalizedPropertyName}`;
  } else if (propertyPath) {
    fullName = `${propertyPath}["${normalizedPropertyName}"]`;
  }
  return fullName;
}

/**
 * Get an expression representing an array of expected status codes for the operation
 * @param operation The operation
 */
export function getExpectedStatuses(operation: ServiceOperation): string {
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
