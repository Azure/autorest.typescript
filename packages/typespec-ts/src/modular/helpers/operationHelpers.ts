import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure,
  StructureKind
} from "ts-morph";
import { NoTarget, Program } from "@typespec/compiler";
import {
  PagingHelpers,
  PollingHelpers,
  UrlTemplateHelpers
} from "../static-helpers-metadata.js";
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
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { isMetadata } from "@typespec/http";

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
    (p) => p.onClient && p.kind === "query" && p.isApiVersionParam
  );
  const hasClientApiVersion = client.clientInitialization.parameters.some(
    (p) => p.isApiVersionParam && p.onClient && p.kind === "method"
  );
  const statements: string[] = [];
  let pathStr = `"${operationPath}"`;
  const pathParams = getPathParameters(operation);
  const queryParams = getQueryParameters(dpgContext, operation);
  const allParams = [...pathParams, ...queryParams];

  // Remove duplicates and empty params
  const seen = new Set();
  const urlTemplateParams = allParams.filter((param) => {
    if (!param || param.trim() === "") return false;

    // Extract parameter name from the param string (e.g., "subscriptionId": ... or subscriptionId: ... -> subscriptionId)
    const match = param.match(/^"?([^":\s]+)"?\s*:/);
    if (match) {
      const paramName = match[1];
      if (seen.has(paramName)) {
        return false; // Skip duplicates
      }
      seen.add(paramName);
    }
    return true;
  });

  if (urlTemplateParams.length > 0) {
    statements.push(`const path = ${resolveReference(UrlTemplateHelpers.parseTemplate)}("${operation.operation.uriTemplate}", {
        ${urlTemplateParams.join(",\n        ")}
        }, {
      allowReserved: ${optionalParamName}?.requestOptions?.skipUrlEncoding
    });`);
    pathStr = "path";
  }
  if (hasClientApiVersion && !hasQueryApiVersion) {
    statements.push(
      `context.pipeline.removePolicy({ name: "ClientApiVersionPolicy"});`
    );
  }

  const headerAndBodyParams = getHeaderAndBodyParameters(
    dpgContext,
    operation,
    optionalParamName
  );
  const returnStatement = headerAndBodyParams
    ? `return context.path(${pathStr}).${operationMethod}({...${resolveReference(dependencies.operationOptionsToRequestParameters)}(${optionalParamName}), ${headerAndBodyParams}});`
    : `return context.path(${pathStr}).${operationMethod}({...${resolveReference(dependencies.operationOptionsToRequestParameters)}(${optionalParamName})});`;

  statements.push(returnStatement);

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
  const lroSubSegments = isLroOnly
    ? operation?.lroMetadata?.finalResponse?.resultSegments
    : undefined;

  let lroSubPath;
  if (lroSubSegments && lroSubSegments.length > 0) {
    lroSubPath = lroSubSegments
      .map((property) => {
        return property.name;
      })
      .join(".");
  }

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
      statements.push(
        `return ${deserializeFunctionName}(${deserializedRoot});`
      );
    } else if (isAzureCoreErrorType(context.program, deserializedType.__raw)) {
      statements.push(`return ${deserializedRoot};`);
    } else {
      statements.push(
        `return ${deserializeResponseValue(
          context,
          deserializedType,
          deserializedRoot,
          isBinaryPayload(context, response.type!.__raw!, contentTypes!)
            ? "binary"
            : getEncodeForType(deserializedType)
        )};`
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
    parameters.filter((p) =>
      p.type?.toString().endsWith("operationOptions__")
    )[0]?.name ?? "options"
  );
}

function getOperationSignatureParameters(
  context: SdkContext,
  method: [string[], ServiceOperation],
  clientType: string
): OptionalKind<ParameterDeclarationStructure>[] {
  const operation = method[1];
  const optionsType = resolveReference(refkey(method[1], "operationOptions"));
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();

  operation.parameters
    .filter(
      (p) =>
        p.onClient === false &&
        p.type.kind !== "constant" &&
        operation.operation.parameters.filter((param) => {
          return (
            param.correspondingMethodParams.length === 1 &&
            param.correspondingMethodParams[0] === p
          );
        })[0]?.kind !== "cookie" &&
        p.clientDefaultValue === undefined &&
        !p.optional &&
        !(
          p.isGeneratedName &&
          (p.name === "contentType" || p.name === "accept")
        ) // skip tcgc generated contentType and accept header parameter
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
): FunctionDeclarationStructure & { propertyName?: string } {
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
    kind: StructureKind.Function,
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
  } as FunctionDeclarationStructure & { propertyName?: string };
}

function getLroOnlyOperationFunction(
  context: SdkContext,
  method: [string[], SdkLroServiceMethod<SdkHttpOperation>],
  clientType: string,
  optionalParamName: string = "options"
): FunctionDeclarationStructure & { propertyName?: string } {
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
    kind: StructureKind.Function,
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
  } as FunctionDeclarationStructure & { propertyName?: string };
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
): FunctionDeclarationStructure & { propertyName?: string } {
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
    kind: StructureKind.Function,
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
  const nextLinkSegments = operation.pagingMetadata.nextLinkSegments;
  const nextLinkName = nextLinkSegments
    ?.map((property) => {
      return property.name;
    })
    .join(".");
  const itemSegments = operation.response.resultSegments;
  const itemName = itemSegments
    ?.map((property) => {
      return property.name;
    })
    .join(".");
  if (itemName) {
    options.push(`itemName: "${itemName}"`);
  }
  if (nextLinkName) {
    options.push(`nextLinkName: "${nextLinkName}"`);
  }
  const paramList = parameters.map((p) => p.name).join(", ");
  statements.push(
    `return ${buildPagedAsyncIteratorReference}(
      context,
      () => _${name}Send(${paramList}),
      _${name}Deserialize,
      ${getExpectedStatuses(operation)},
      ${options.length > 0 ? `{${options.join(", ")}}` : `{}`}
    );`
  );

  return {
    ...functionStatement,
    statements
  } as FunctionDeclarationStructure & { propertyName?: string };
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
  const optionName = `${prefix}${normalizeName(operation.name, NameType.Interface)}OptionalParams`;
  return optionName;
}

/**
 * This function build the request parameters that we will provide to the
 * RLC internally. This will translate High Level parameters into the RLC ones.
 * Figuring out what goes in headers, body, path and qsp.
 */
function getHeaderAndBodyParameters(
  dpgContext: SdkContext,
  operation: ServiceOperation,
  optionalParamName: string = "options"
): string {
  if (!operation.operation.parameters) {
    return "";
  }
  const operationParameters = operation.operation.parameters.filter(
    (p) => !isContentType(p)
  );

  const contentTypeParameter =
    operation.operation.parameters.find(isContentType);

  const parametersImplementation: Record<
    "header" | "body",
    { paramMap: string; param: SdkHttpParameter }[]
  > = {
    header: [],
    body: []
  };

  for (const param of operationParameters) {
    if (param.kind === "header") {
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

  const parts: string[] = [];

  if (contentTypeParameter) {
    parts.push(getContentTypeValue(contentTypeParameter, optionalParamName));
  }

  if (parametersImplementation.header.length) {
    const headersContent = parametersImplementation.header
      .map((i) =>
        buildHeaderParameter(
          dpgContext.program,
          i.paramMap,
          i.param,
          optionalParamName
        )
      )
      .join(",\n");
    parts.push(
      `headers: {${headersContent}, ...${optionalParamName}.requestOptions?.headers}`
    );
  }

  if (
    operation.operation.bodyParam === undefined &&
    parametersImplementation.body.length
  ) {
    parts.push(
      `body: {${parametersImplementation.body
        .map((i) => i.paramMap)
        .join(",\n")}}`
    );
  } else if (operation.operation.bodyParam !== undefined) {
    const bodyParam = buildBodyParameter(
      dpgContext,
      operation.operation.bodyParam,
      optionalParamName
    );
    if (bodyParam) {
      // Remove leading \n and trailing comma from body parameter
      const cleanBodyParam = bodyParam.replace(/^\n/, "").replace(/,$/, "");
      parts.push(cleanBodyParam);
    }
  }

  const result = parts.filter((p) => p && p.trim()).join(", ");
  return result;
}

// Specially handle the type for headers because we only allow string/number/boolean values
function buildHeaderParameter(
  program: Program,
  paramMap: string,
  param: SdkHttpParameter,
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

  const bodyParamName = normalizeName(
    bodyParameter.name,
    NameType.Parameter,
    true
  );
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
    if (nullOrUndefinedPrefix) {
      return `\nbody: ${nullOrUndefinedPrefix}${serializerFunctionName}(${bodyNameExpression}) : ${bodyNameExpression},`;
    } else {
      return `\nbody: ${serializerFunctionName}(${bodyNameExpression}),`;
    }
  } else if (isAzureCoreErrorType(context.program, bodyParameter.type.__raw)) {
    return `\nbody: ${nullOrUndefinedPrefix ? `${nullOrUndefinedPrefix}${bodyNameExpression} : ${bodyNameExpression}` : bodyNameExpression},`;
  }
  const serializedBody = serializeRequestValue(
    context,
    bodyParameter.type,
    bodyNameExpression,
    !bodyParameter.optional,
    isBinaryPayload(context, bodyParameter.__raw!, bodyParameter.contentTypes)
      ? "binary"
      : getEncodeForType(bodyParameter.type),
    true
  );
  return `\nbody: ${serializedBody},`;
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
  param: SdkHttpParameter,
  optionalParamName: string = "options"
): string {
  if (isConstant(param.type)) {
    const propName = isValidIdentifier(param.name)
      ? param.name
      : `"${param.name}"`;
    return `${propName}: ${getConstantValue(param.type)}`;
  }

  if (hasCollectionFormatInfo(param.kind, (param as any).collectionFormat)) {
    return getCollectionFormat(context, param, optionalParamName);
  }

  // if the parameter is optional
  if (param.optional) {
    return getOptional(context, param, optionalParamName);
  }

  // if the parameter is required
  if (!param.optional) {
    return getRequiredForHttpParam(context, param);
  }

  throw new Error(`Parameter ${param.name} is not supported`);
}

function getCollectionFormat(
  context: SdkContext,
  param: SdkHttpParameter,
  optionalParamName: string = "options"
) {
  const serializedName = getPropertySerializedName(param);
  const propName = isValidIdentifier(serializedName)
    ? serializedName
    : `"${serializedName}"`;
  const format = (param as any).collectionFormat;
  const collectionInfo = getCollectionFormatHelper(param.kind, format ?? "");
  if (!collectionInfo) {
    throw "Has collection format info but without helper function detected";
  }
  const isMulti = format.toLowerCase() === "multi";
  const additionalParam = isMulti ? `, "${serializedName}"` : "";
  if (!param.optional) {
    return `${propName}: ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      param.name,
      true,
      getEncodeForType(param.type),
      true
    )}${additionalParam})`;
  }
  return `${propName}: ${optionalParamName}?.${param.name
    } !== undefined ? ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      `${optionalParamName}?.${param.name}`,
      false,
      getEncodeForType(param.type),
      true
    )}${additionalParam}): undefined`;
}

function isContentType(param: SdkHttpParameter): boolean {
  return (
    param.kind === "header" &&
    param.serializedName.toLowerCase() === "content-type"
  );
}

function getContentTypeValue(
  param: SdkHttpParameter,
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

function getRequiredForHttpParam(context: SdkContext, param: SdkHttpParameter) {
  const serializedName = getPropertySerializedName(param);
  const clientValue = `${param.onClient ? "context." : ""}${param.name}`;
  const propName = isValidIdentifier(serializedName)
    ? serializedName
    : `"${serializedName}"`;
  return `${propName}: ${serializeRequestValue(
    context,
    param.type,
    clientValue,
    true,
    getEncodeForType(param.type),
    true
  )}`;
}

function isValidIdentifier(name: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
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

function getOptional(
  context: SdkContext,
  param: SdkHttpParameter,
  optionalParamName: string
) {
  const serializedName = getPropertySerializedName(param);
  const propName = isValidIdentifier(serializedName)
    ? serializedName
    : `"${serializedName}"`;
  const paramName = `${param.onClient ? "context." : `${optionalParamName}?.`}${param.name}`;
  if (param.type.kind === "model") {
    const propertiesStr = getRequestModelMapping(
      context,
      { ...param.type, optional: param.optional },
      paramName + "?."
    );
    const serializeContent = `{${propertiesStr.join(",")}}`;
    return `${propName}: ${serializeContent}`;
  }
  return `${propName}: ${serializeRequestValue(
    context,
    param.type,
    paramName,
    false,
    getEncodeForType(param.type),
    true
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
function getDefaultValue(param: SdkHttpParameter) {
  return param.clientDefaultValue;
}

/**
 * Extracts the path parameters
 */
function getPathParameters(
  operation: ServiceOperation,
  optionalParamName: string = "options"
) {
  if (!operation.operation.parameters) {
    return [];
  }

  const pathParams: string[] = [];
  const seenParams = new Set<string>();

  for (const param of operation.operation.parameters) {
    if (param.kind === "path" && !seenParams.has(param.serializedName)) {
      seenParams.add(param.serializedName);
      const correspondingParam = param.correspondingMethodParams[0]!;
      if (correspondingParam.kind === "property") {
        const expr = getPathParamExpr(
          correspondingParam,
          getDefaultValue(param) as string,
          optionalParamName
        );
        pathParams.push(`"${param.serializedName}": ${expr}`);
      } else {
        // For method parameters, handle them differently
        const paramValue = correspondingParam.onClient
          ? `context.${correspondingParam.name}`
          : param.optional
            ? `${optionalParamName}?.["${correspondingParam.name}"]`
            : correspondingParam.name;
        pathParams.push(`"${param.serializedName}": ${paramValue}`);
      }
    }
  }

  return pathParams;
}

/**
 * Extract the query parameters
 */
function getQueryParameters(
  dpgContext: SdkContext,
  operation: ServiceOperation
): string[] {
  if (!operation.parameters) {
    return [];
  }
  const operationParameters = operation.operation.parameters.filter(
    (p) => !isContentType(p)
  );
  const parametersImplementation: Record<
    "query",
    { paramMap: string; param: SdkHttpParameter }[]
  > = {
    query: []
  };

  for (const param of operationParameters) {
    if (param.kind === "query") {
      parametersImplementation[param.kind].push({
        paramMap: getParameterMap(dpgContext, {
          ...param,
          // TODO: remember to remove this hack once compiler gives us a name
          // https://github.com/microsoft/typespec/issues/6743
          serializedName: getUriTemplateQueryParamName(param.serializedName)
        }),
        param
      });
    }
  }

  const paramStr: string[] = parametersImplementation.query.map(
    (i) => i.paramMap
  );

  return paramStr;
}

function getUriTemplateQueryParamName(name: string) {
  return `${escapeUriTemplateParamName(name)}`;
}
function escapeUriTemplateParamName(name: string) {
  return encodeURIComponent(name).replace(/[:-]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function getPathParamExpr(
  param: SdkModelPropertyType,
  defaultValue?: string,
  optionalParamName: string = "options"
) {
  if (isConstant(param.type)) {
    return getConstantValue(param.type);
  }
  const paramName = param.onClient
    ? `context.${param.name}`
    : `${optionalParamName}?.["${param.name}"]`;
  return defaultValue
    ? typeof defaultValue === "string"
      ? `${paramName} ?? "${defaultValue}"`
      : `${paramName} ?? ${defaultValue}`
    : paramName;
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
    if (nullOrUndefinedPrefix) {
      return `${nullOrUndefinedPrefix}${serializeFunctionName}(${propertyFullName}) : ${propertyFullName}`;
    }
    return `${serializeFunctionName}(${propertyFullName})`;
  } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
    if (nullOrUndefinedPrefix) {
      return `${nullOrUndefinedPrefix}${propertyFullName} : ${propertyFullName}`;
    }
    return `${propertyFullName}`;
  } else {
    return serializeRequestValue(
      context,
      property.type,
      propertyFullName,
      !property.optional,
      getEncodeForType(property.type),
      propertyPath === "" ? true : false
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
    if (isMetadata(context.program, property.__raw!)) {
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

function getPropertySerializedName(
  property: SdkModelPropertyType | SdkHttpParameter
) {
  if (property.kind === "property") {
    // For model properties, use the new serialization options
    return (
      property.serializationOptions?.xml?.name ||
      property.serializationOptions?.json?.name ||
      property.name
    );
  }
  // For HTTP parameters, they all have serializedName
  return (property as any).serializedName || property.name;
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
    if (isMetadata(context.program, property.__raw!)) {
      continue;
    }
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
  format?: string,
  isTopLevel: boolean = false
): string {
  const getSdkType = useSdkTypes();
  const dependencies = useDependencies();
  const hasNullCheck =
    isTypeNullable(type) || getOptionalForType(type) || !required;

  const wrapWithNullCheck = (expression: string): string => {
    if (hasNullCheck) {
      return `${clientValue} ? ${expression} : ${clientValue}`;
    }
    return expression;
  };

  const getArrayElementExpression = (
    context: SdkContext,
    valueType: SdkType | undefined
  ): string => {
    if (!valueType) return "p";

    const elementNullOrUndefinedPrefix =
      isTypeNullable(valueType) || getOptionalForType(valueType)
        ? "!p ? p : "
        : "";
    const serializeFunctionName = buildModelSerializer(
      context,
      getNullableValidType(valueType),
      false,
      true
    );
    if (serializeFunctionName) {
      return `${elementNullOrUndefinedPrefix}${serializeFunctionName}(p)`;
    } else if (isAzureCoreErrorType(context.program, valueType.__raw)) {
      return `${elementNullOrUndefinedPrefix}p`;
    } else {
      return `${elementNullOrUndefinedPrefix}${serializeRequestValue(context, valueType, "p", true, getEncodeForType(valueType))}`;
    }
  };

  switch (type.kind) {
    case "utcDateTime":
      switch (type.encode ?? format) {
        case "rfc7231":
          return wrapWithNullCheck(`${clientValue}.toUTCString()`);
        case "unixTimestamp":
          return wrapWithNullCheck(`((${clientValue}.getTime() / 1000) | 0)`);
        case "rfc3339":
        default:
          return wrapWithNullCheck(`${clientValue}.toISOString()`);
      }
    case "array": {
      if (hasNullCheck) {
        const arrayExpression = `${clientValue}.map((p: any) => { return ${getArrayElementExpression(context, type.valueType)}})`;
        return `${clientValue} ? ${arrayExpression} : ${clientValue}`;
      } else {
        return `${clientValue}.map((p: any) => { return ${getArrayElementExpression(context, type.valueType)}})`;
      }
    }
    case "bytes":
      // TODO https://github.com/Azure/typespec-azure/issues/1999
      if (format !== "binary" && format !== "bytes") {
        const uint8ArrayToStringReference = resolveReference(
          dependencies.uint8ArrayToString
        );
        const bytesExpression = `${uint8ArrayToStringReference}(${clientValue}, "${getEncodingFormat({ format }) ?? "base64"}")`;
        if (required) {
          return `${getNullableCheck(clientValue, type)} ${bytesExpression}`;
        } else {
          return wrapWithNullCheck(bytesExpression);
        }
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
    case "constant":
      if (isTopLevel) {
        return wrapWithNullCheck(getConstantValue(type));
      }
      return clientValue;
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
  if (type.kind === "model" && type.properties) {
    type.properties
      .filter((p) => {
        return p.kind === "property";
      })
      .forEach((p) => {
        propertiesMap.set(p.name, p);
      });
  }

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
  property: SdkHttpParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  const propertyFullName = getPropertyFullName(context, property, propertyPath);
  if (property.optional || isTypeNullable(property.type)) {
    return `${propertyFullName} ? `;
  }

  return "";
}

export function getPropertyFullName(
  context: SdkContext,
  property: SdkHttpParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  let normalizedPropertyName: string;

  if (property.kind === "property") {
    // For model properties, use the existing function
    normalizedPropertyName = normalizeModelPropertyName(context, property)
      .replace(/^"/g, "")
      .replace(/"$/g, "");
  } else {
    // For HTTP parameters, normalize the name directly
    const normalizedPropName = normalizeName(property.name, NameType.Property);
    normalizedPropertyName = context.rlcOptions?.ignorePropertyNameNormalize
      ? property.name
      : normalizedPropName;
  }

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
  let statusCodes = operation.operation.responses.map((x) => x.statusCodes);
  // LROs may call the same path but with GET to get the operation status.
  if (isLroOnlyOperation(operation) && operation.operation.verb !== "get") {
    statusCodes = Array.from(new Set([...statusCodes, 200, 202]));
  }

  return `[${statusCodes.map((x) => `"${x}"`).join(", ")}]`;
}
