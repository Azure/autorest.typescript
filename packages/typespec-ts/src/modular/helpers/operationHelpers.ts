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
  SerializationHelpers,
  UrlTemplateHelpers,
  XmlHelpers
} from "../static-helpers-metadata.js";
import {
  getNullableValidType,
  isSpreadBodyParameter,
  isTypeNullable
} from "./typeHelpers.js";
import {
  getClassicalLayerPrefix,
  getOperationName,
  generateLocallyUniqueName
} from "./namingHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo,
  isBinaryPayload,
  isXmlPayload,
  isMultipartPayload,
  hasDualFormatSupport,
  ServiceOperation,
  getCollectionFormatParseHelper,
  getCollectionFormatFromArrayEncoding,
  KnownCollectionFormat
} from "../../utils/operationUtil.js";
import {
  getPropertyWithOverrides,
  isNormalUnion,
  isSpecialHandledUnion,
  ModelOverrideOptions
} from "../serialization/serializeUtils.js";
import {
  getDocsFromDescription,
  getFixmeForMultilineDocs
} from "./docsHelpers.js";
import { AzurePollingDependencies } from "../external-dependencies.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  buildModelDeserializer,
  buildPropertyDeserializer
} from "../serialization/buildDeserializerFunction.js";
import {
  buildModelSerializer,
  buildPropertySerializer
} from "../serialization/buildSerializerFunction.js";
import {
  buildXmlModelSerializer,
  buildXmlModelDeserializer,
  hasXmlSerialization
} from "../serialization/buildXmlSerializerFunction.js";
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
  isHttpMetadata,
  isReadOnly,
  SdkBodyParameter,
  SdkConstantType,
  SdkEnumType,
  SdkHttpOperation,
  SdkHttpParameter,
  SdkLroPagingServiceMethod,
  SdkLroServiceMethod,
  SdkMethod,
  SdkMethodParameter,
  SdkModelPropertyType,
  SdkModelType,
  SdkPagingServiceMethod,
  SdkServiceResponseHeader,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { isHeader, isMetadata } from "@typespec/http";
import { useContext } from "../../contextManager.js";
import { isExtensibleEnum } from "../type-expressions/get-enum-expression.js";
import { emitInlineModel } from "../type-expressions/get-model-expression.js";

export function getSendPrivateFunction(
  dpgContext: SdkContext,
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
  const statements: string[] = [];
  let pathStr = `"${operationPath}"`;
  const urlTemplateParams = [
    ...getPathParameters(operation),
    ...getQueryParameters(dpgContext, operation)
  ];
  if (urlTemplateParams.length > 0) {
    // Generate a unique local variable name that doesn't conflict with parameter names
    const paramNames = new Set(parameters.map((p) => p.name));
    const pathVarName = generateLocallyUniqueName("path", paramNames);
    statements.push(`const ${pathVarName} = ${resolveReference(UrlTemplateHelpers.parseTemplate)}("${operation.operation.uriTemplate}", {
        ${urlTemplateParams.join(",\n")}
        },{
      allowReserved: ${optionalParamName}?.requestOptions?.skipUrlEncoding
    });`);
    pathStr = pathVarName;
  }

  statements.push(
    `return context.path(${pathStr}).${operationMethod}({...${resolveReference(dependencies.operationOptionsToRequestParameters)}(${optionalParamName}), ${getHeaderAndBodyParameters(
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
  const isLroOnly = isLroOnlyOperation(operation);
  const isLroAndPaging = isLroAndPagingOperation(operation);

  // TODO: Support operation overloads
  // TODO: Support multiple responses
  const response = operation.response;
  const restResponse = operation.operation.responses[0];
  let returnType;
  if (isLroOnly || isLroAndPaging) {
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
  const deserializedType =
    isLroOnly || isLroAndPaging
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
    const contentTypes = operation.operation.responses[0]?.contentTypes ?? [];
    const isXml = isXmlPayload(contentTypes);
    const isDualFormat = hasDualFormatSupport(contentTypes);
    const isMultipart = isMultipartPayload(contentTypes);
    const useXmlDeserialization =
      isXml &&
      deserializedType.kind === "model" &&
      hasXmlSerialization(deserializedType);

    // Workaround for multipart response: cast return value as any due to lack of multipart response handling in core
    const multipartCastSuffix = isMultipart ? " as any" : "";

    // For dual-format responses, check content-type header at runtime
    if (
      isDualFormat &&
      deserializedType.kind === "model" &&
      hasXmlSerialization(deserializedType)
    ) {
      const xmlDeserializerName = buildXmlModelDeserializer(
        context,
        deserializedType,
        {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        }
      ) as string | undefined;
      const jsonDeserializerName = buildModelDeserializer(
        context,
        deserializedType,
        {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        }
      );

      if (xmlDeserializerName && jsonDeserializerName) {
        const isXmlContentTypeRef = resolveReference(
          XmlHelpers.isXmlContentType
        );
        statements.push(
          `const responseContentType = result.headers?.["content-type"] ?? "";
          if (${isXmlContentTypeRef}(responseContentType)) {
            return ${xmlDeserializerName}(${deserializedRoot});
          }
          return ${jsonDeserializerName}(${deserializedRoot});`
        );
      } else {
        // Fall back to JSON deserializer
        const deserializeFunctionName = buildModelDeserializer(
          context,
          deserializedType,
          {
            nameOnly: true,
            skipDiscriminatedUnionSuffix: false
          }
        );
        if (deserializeFunctionName) {
          statements.push(
            `return ${deserializeFunctionName}(${deserializedRoot})`
          );
        }
      }
    } else if (useXmlDeserialization) {
      // XML-only response
      const xmlDeserializerName = buildXmlModelDeserializer(
        context,
        deserializedType,
        {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        }
      ) as string | undefined;

      if (xmlDeserializerName) {
        statements.push(`return ${xmlDeserializerName}(${deserializedRoot})`);
      } else {
        // Fall back to JSON deserializer if XML deserializer is not available
        const deserializeFunctionName = buildModelDeserializer(
          context,
          deserializedType,
          {
            nameOnly: true,
            skipDiscriminatedUnionSuffix: false
          }
        );
        if (deserializeFunctionName) {
          statements.push(
            `return ${deserializeFunctionName}(${deserializedRoot})`
          );
        } else {
          statements.push(`return ${deserializedRoot}`);
        }
      }
    } else {
      // JSON response (default) - also handles multipart responses
      const deserializeFunctionName = buildModelDeserializer(
        context,
        deserializedType,
        {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        }
      );
      if (deserializeFunctionName) {
        statements.push(
          `return ${deserializeFunctionName}(${deserializedRoot})${multipartCastSuffix}`
        );
      } else if (
        isAzureCoreErrorType(context.program, deserializedType.__raw)
      ) {
        statements.push(`return ${deserializedRoot}${multipartCastSuffix}`);
      } else {
        statements.push(
          `return ${deserializeResponseValue(
            context,
            deserializedType,
            deserializedRoot,
            true,
            isBinaryPayload(context, response.type!.__raw!, contentTypes)
              ? "binary"
              : getEncodeForType(deserializedType)
          )}${multipartCastSuffix}`
        );
      }
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
      {
        nameOnly: true,
        skipDiscriminatedUnionSuffix: false
      }
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
            param.methodParameterSegments.length === 1 &&
            param.methodParameterSegments[0]?.length === 1 &&
            param.methodParameterSegments[0]?.[0] === p
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
): FunctionDeclarationStructure & {
  propertyName?: string;
  isLro?: boolean;
  lroFinalReturnType?: string;
} {
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
    // Case 3: both paging + lro operation
    return getLroAndPagingOperationFunction(
      context,
      [method[0], operation],
      clientType,
      optionalParamName
    );
  }

  // TODO: Support operation overloads
  const response = operation.response;
  const responseHeaders = getResponseHeaders(operation.operation.responses);
  const hasHeaderOnlyResponse = !response.type && responseHeaders.length > 0;
  const isResponseHeadersEnabled =
    context.rlcOptions?.includeHeadersInResponse === true;

  let returnType = { name: "", type: "void" };
  if (response.type) {
    const type = response.type;

    // If feature flag enabled, we'll append the response headers to the operation response type.
    if (
      type.kind === "model" &&
      responseHeaders.length > 0 &&
      isResponseHeadersEnabled
    ) {
      // Build a composite type that includes both model and additional header properties
      returnType = {
        name: (type as any).name ?? "",
        type: `${buildCompositeResponseType(context, type, responseHeaders)}`
      };
    } else {
      returnType = {
        name: (type as any).name ?? "",
        type: getTypeExpression(context, type!)
      };
    }
  } else if (hasHeaderOnlyResponse && isResponseHeadersEnabled) {
    // Here we handle returning headers when the operation return type is void
    returnType = {
      name: "",
      type: `${buildHeaderOnlyResponseType(context, responseHeaders)}`
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

  // Generate unique local variable names that don't conflict with parameter names
  const paramNames = new Set(parameters.map((p) => p.name));
  const resultVarName = generateLocallyUniqueName("result", paramNames);

  const parameterList = parameters.map((p) => p.name).join(", ");
  // Special case for binary-only bodies: use helper to call streaming methods so that Core doesn't poison the response body by
  // doing a UTF-8 decode on the raw bytes.
  if (response?.type?.kind === "bytes" && response.type.encode === "bytes") {
    const streamableMethodVarName = generateLocallyUniqueName(
      "streamableMethod",
      paramNames
    );
    statements.push(
      `const ${streamableMethodVarName} = _${name}Send(${parameterList});`
    );
    statements.push(
      `const ${resultVarName} = await ${resolveReference(SerializationHelpers.getBinaryResponse)}(${streamableMethodVarName});`
    );
  } else {
    statements.push(
      `const ${resultVarName} = await _${name}Send(${parameterList});`
    );
  }

  // If the response has headers and the feature flag to include headers in response is enabled, build the headers object and include it in the return value
  if (responseHeaders.length > 0 && isResponseHeadersEnabled) {
    const headersVarName = generateLocallyUniqueName("headers", paramNames);
    statements.push(
      `const ${headersVarName} = ${buildHeaderOnlyResponseValue(context, responseHeaders)};`
    );

    // If there is no body payload just return the headers
    if (hasHeaderOnlyResponse) {
      statements.push(`return {...${headersVarName} };`);
    } else {
      const payloadVarName = generateLocallyUniqueName("payload", paramNames);
      statements.push(
        `const ${payloadVarName} = await _${name}Deserialize(${resultVarName});`
      );
      statements.push(`return { ...${payloadVarName}, ...${headersVarName} };`);
    }
  } else {
    statements.push(`return _${name}Deserialize(${resultVarName});`);
  }

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
): FunctionDeclarationStructure & {
  propertyName?: string;
  isLro?: boolean;
  lroFinalReturnType?: string;
} {
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
    isLro: true,
    lroFinalReturnType: returnType.type,
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
      ? `resourceLocationConfig: "${lroMetadata?.finalStateVia}",`
      : "";
  const apiVersion = getApiVersionExpression(context, operation);
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
    ${apiVersion ? `apiVersion: ${apiVersion}` : ""}
  }) as ${pollerLikeReference}<${operationStateReference}<${
    returnType.type
  }>, ${returnType.type}>;
  `);

  return {
    ...functionStatement,
    statements
  } as FunctionDeclarationStructure & { propertyName?: string };
}

function getLroAndPagingOperationFunction(
  context: SdkContext,
  method: [string[], SdkLroPagingServiceMethod<SdkHttpOperation>],
  clientType: string,
  optionalParamName: string = "options"
): FunctionDeclarationStructure & { propertyName?: string } {
  const operation = method[1];
  const parameters = getOperationSignatureParameters(
    context,
    method,
    clientType
  );
  const { name, fixme = [] } = getOperationName(operation);

  const returnType = buildLroPagingReturnType(context, operation);

  // Get apiVersion expression for both LRO poller and paging options
  const apiVersion = getApiVersionExpression(context, operation);

  // Build paging options from metadata
  const pagingOptions = [
    operation.response.resultSegments &&
      `itemName: "${operation.response.resultSegments.map((p) => p.name).join(".")}"`,
    operation.pagingMetadata.nextLinkSegments &&
      `nextLinkName: "${operation.pagingMetadata.nextLinkSegments.map((p) => p.name).join(".")}"`,
    operation.pagingMetadata.nextLinkVerb !== "GET" &&
      `nextLinkMethod: "${operation.pagingMetadata.nextLinkVerb}"`,
    apiVersion && `apiVersion: ${apiVersion}`
  ].filter(Boolean);

  // Build LRO resource location config
  const allowedLocations = [
    "azure-async-operation",
    "location",
    "original-uri",
    "operation-location"
  ];
  const resourceLocationConfig =
    operation.lroMetadata?.finalStateVia &&
    allowedLocations.includes(operation.lroMetadata.finalStateVia)
      ? `resourceLocationConfig: "${operation.lroMetadata.finalStateVia}",`
      : "";

  // Resolve references
  const refs = {
    pagedIterator: resolveReference(PagingHelpers.PagedAsyncIterableIterator),
    buildPaging: resolveReference(PagingHelpers.BuildPagedAsyncIterator),
    getLroPoller: resolveReference(PollingHelpers.GetLongRunningPoller),
    pollerLike: resolveReference(AzurePollingDependencies.PollerLike),
    operationState: resolveReference(AzurePollingDependencies.OperationState),
    pathResponse: resolveReference(useDependencies().PathUncheckedResponse)
  };

  const expectedStatuses = getExpectedStatuses(operation);
  const paramList = parameters.map((p) => p.name).join(", ");
  const pagingOptionsStr =
    pagingOptions.length > 0 ? `,\n    {${pagingOptions.join(", ")}}` : "";

  return {
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
    returnType: `${refs.pagedIterator}<${returnType.type}>`,
    statements: [
      `
  const initialPagingPoller = ${refs.getLroPoller}(context,
    async (result: ${refs.pathResponse}) => result,
    ${expectedStatuses}, {
    updateIntervalInMs: ${optionalParamName}?.updateIntervalInMs,
    abortSignal: ${optionalParamName}?.abortSignal,
    getInitialResponse: () => _${name}Send(${paramList}),
    ${resourceLocationConfig}
    ${apiVersion ? `apiVersion: ${apiVersion}` : ""}
  }) as ${refs.pollerLike}<${refs.operationState}<${refs.pathResponse}>, ${refs.pathResponse}>;
  
  return ${refs.buildPaging}(
    context,
    async () => await initialPagingPoller,
    _${name}Deserialize,
    ${expectedStatuses}${pagingOptionsStr}
  );
  `
    ]
  };
}

function buildLroReturnType(
  context: SdkContext,
  operation:
    | SdkLroServiceMethod<SdkHttpOperation>
    | SdkLroPagingServiceMethod<SdkHttpOperation>
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

function buildLroPagingReturnType(
  context: SdkContext,
  operation: SdkLroPagingServiceMethod<SdkHttpOperation>
) {
  if (operation.response.type?.kind === "array") {
    return {
      name: (operation.response.type.valueType as any).name ?? "",
      type: getTypeExpression(context, operation.response.type.valueType)
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

  // Check for nextLinkVerb from TCGC pagingMetadata (supports @Legacy.nextLinkVerb decorator)
  const nextLinkMethod = operation.pagingMetadata.nextLinkVerb;

  const apiVersion = getApiVersionExpression(context, operation);

  if (itemName) {
    options.push(`itemName: "${itemName}"`);
  }
  if (nextLinkName) {
    options.push(`nextLinkName: "${nextLinkName}"`);
  }
  if (nextLinkMethod && nextLinkMethod !== "GET") {
    options.push(`nextLinkMethod: "${nextLinkMethod}"`);
  }
  if (apiVersion) {
    options.push(`apiVersion: ${apiVersion}`);
  }
  statements.push(
    `return ${buildPagedAsyncIteratorReference}(
      context, 
      () => _${name}Send(${parameters.map((p) => p.name).join(", ")}), 
      _${name}Deserialize,
      ${getExpectedStatuses(operation)}${options.length > 0 ? `,\n      {${options.join(", ")}}` : ""}
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
      // Check if this parameter still exists in the corresponding method params (after override)
      if (
        param.methodParameterSegments &&
        param.methodParameterSegments.length > 0
      ) {
        parametersImplementation[param.kind].push({
          paramMap: getParameterMap(dpgContext, param, optionalParamName),
          param
        });
      }
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

  const contentTypes = bodyParameter.contentTypes;
  const isXml = isXmlPayload(contentTypes);
  const isDualFormat = hasDualFormatSupport(contentTypes);
  const bodyType = getNullableValidType(bodyParameter.type);

  // Check if XML serialization is needed and available
  const useXmlSerialization =
    isXml && bodyType.kind === "model" && hasXmlSerialization(bodyType);

  let serializerFunctionName: string | undefined;

  if (useXmlSerialization) {
    // Use XML serializer
    serializerFunctionName = buildXmlModelSerializer(context, bodyType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }) as string | undefined;
  } else {
    // Use JSON serializer (default)
    serializerFunctionName = buildModelSerializer(context, bodyType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }) as string | undefined;
  }

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

  // For dual-format operations, check the contentType option at runtime
  if (
    isDualFormat &&
    bodyType.kind === "model" &&
    hasXmlSerialization(bodyType)
  ) {
    const xmlSerializerName = buildXmlModelSerializer(context, bodyType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }) as string | undefined;
    const jsonSerializerName = buildModelSerializer(context, bodyType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }) as string | undefined;

    if (xmlSerializerName && jsonSerializerName) {
      const isXmlContentTypeRef = resolveReference(XmlHelpers.isXmlContentType);
      return `\nbody: ${nullOrUndefinedPrefix}(${isXmlContentTypeRef}(${optionalParamName}?.contentType ?? "application/json") ? ${xmlSerializerName}(${bodyNameExpression}) : ${jsonSerializerName}(${bodyNameExpression})),`;
    }
  }

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
      : getEncodeForType(bodyParameter.type),
    undefined,
    true
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
  param: SdkHttpParameter,
  optionalParamName: string = "options"
): string {
  // Use lowercase for header names since HTTP headers are case-insensitive
  const serializedName =
    param.kind === "header"
      ? getHeaderSerializedName(param)
      : getPropertySerializedName(param);

  if (isConstant(param.type)) {
    return `"${serializedName}": ${getConstantValue(param.type)}`;
  }

  // Special case for api-version parameters with default values
  if (param.isApiVersionParam && param.clientDefaultValue) {
    // For multi-service, use only the default value (don't reference context.apiVersion)
    if (context.rlcOptions?.isMultiService) {
      return `"${serializedName}": "${param.clientDefaultValue}"`;
    }
    return `"${serializedName}": ${param.onClient ? "context." : ""}${param.name} ?? "${param.clientDefaultValue}"`;
  }

  if (hasCollectionFormatInfo(param.kind, (param as any).collectionFormat)) {
    return getCollectionFormatForParam(
      context,
      param,
      optionalParamName,
      serializedName
    );
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(context, param, optionalParamName, serializedName);
  }

  if (isRequired(param)) {
    return getRequired(context, param, serializedName);
  }

  reportDiagnostic(context.program, {
    code: "unsupported-parameter-type",
    format: {
      paramName: param.name,
      paramKind: param.kind
    },
    target: param.__raw || NoTarget
  });

  // Return a fallback value to allow the emitter to continue
  return `"${param.name}": undefined`;
}

function getCollectionFormatForParam(
  context: SdkContext,
  param: SdkHttpParameter,
  optionalParamName: string = "options",
  serializedName: string
) {
  const format = (param as any).collectionFormat;
  return `"${serializedName}": ${serializeRequestValue(
    context,
    param.type,
    param.optional ? `${optionalParamName}?.${param.name}` : param.name,
    !param.optional,
    format,
    serializedName,
    true
  )}`;
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
    return `contentType: ${
      !param.optional
        ? "contentType"
        : `${optionalParamName}.` + param.name + " as any"
    }`;
  }
}

function isRequired(param: SdkHttpParameter) {
  return !param.optional;
}

function getRequired(
  context: SdkContext,
  param: SdkHttpParameter,
  serializedName: string
) {
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
    getEncodeForType(param.type),
    serializedName,
    true
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

function isOptional(param: SdkHttpParameter) {
  return Boolean(param.optional);
}

function getOptional(
  context: SdkContext,
  param: SdkHttpParameter,
  optionalParamName: string,
  serializedName: string
) {
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
    getEncodeForType(param.type),
    serializedName,
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
  for (const param of operation.operation.parameters) {
    if (param.kind === "path") {
      const methodParam = param.methodParameterSegments[0]?.[0];
      if (methodParam) {
        pathParams.push(
          `"${param.serializedName}": ${getPathParamExpr(methodParam, getDefaultValue(param) as string, optionalParamName)}`
        );
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
      // Check if this parameter still exists in the corresponding method params (after override)
      if (
        param.methodParameterSegments &&
        param.methodParameterSegments.length > 0
      ) {
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
  param: SdkMethodParameter | SdkModelPropertyType,
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

/**
 * Determines the appropriate encoding format for a model property, especially for arrays with collection format encoding.
 * For example, returns "csv" for comma-delimited arrays or the property's type encoding for regular properties.
 */
function getEncodeForModelProperty(
  context: SdkContext,
  property: SdkModelPropertyType
): string | undefined {
  if (property.encode && property.type.kind === "array") {
    // Only arrays of string type or string-based enum type can have collectionFormat encoding
    if (!isStringEncodableArrayValueType(property.type.valueType)) {
      reportDiagnostic(context.program, {
        code: "un-supported-array-encoding",
        format: {
          arrayName: property.name,
          arrayType: property.type.valueType.kind
        },
        target: NoTarget
      });
      return getEncodeForType(property.type);
    }

    const collectionFormat = getCollectionFormatFromArrayEncoding(
      property.encode
    );
    if (
      collectionFormat &&
      hasCollectionFormatInfo(property.kind, collectionFormat)
    ) {
      return collectionFormat;
    }
  }
  return getEncodeForType(property.type);
}

/**
 * Checks if an array value type is string-encodable for collection format encoding.
 * This includes both string type and string-based enum types.
 */
function isStringEncodableArrayValueType(valueType: SdkType): boolean {
  // Direct string type
  if (valueType.kind === "string") {
    return true;
  }
  // String-based enum type
  if (
    valueType.kind === "enum" &&
    (valueType as SdkEnumType).valueType.kind === "string"
  ) {
    return true;
  }
  return false;
}

function getSerializationExpressionForFlatten(
  context: SdkContext,
  property: SdkModelPropertyType,
  propertyPath: string
): string {
  const serializeFunctionName = buildPropertySerializer(context, property, {
    nameOnly: true,
    skipDiscriminatedUnionSuffix: false
  });
  if (!serializeFunctionName) {
    return property.optional ? `undefined` : `{}`;
  }
  const validProps = getAllProperties(
    context,
    property.type,
    getAllAncestors(property.type)
  ).filter(
    (p) =>
      p.kind === "property" &&
      !isReadOnly(p) &&
      !isMetadata(context.program, p.__raw!)
  );
  const optionalPrefix = property.optional
    ? `${resolveReference(SerializationHelpers.areAllPropsUndefined)}(${propertyPath}, [${validProps
        .map((p) => `"${p.name}"`)
        .join(", ")}]) ? undefined : `
    : "";
  return `${optionalPrefix}${serializeFunctionName}(${propertyPath})`;
}

export function getSerializationExpression(
  context: SdkContext,
  property: SdkModelPropertyType,
  propertyPath: string,
  enableFlatten: boolean = true
): string {
  if (property.flatten && property.type.kind === "model" && enableFlatten) {
    return getSerializationExpressionForFlatten(context, property, "item");
  }
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
    {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }
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
      getEncodeForModelProperty(context, property),
      getPropertySerializedName(property),
      propertyPath === "" ? true : false
    );
  }
}

export function getRequestModelProperties(
  context: SdkContext,
  modelPropertyType: SdkModelType & { optional?: boolean },
  propertyPath: string = "body",
  overrides?: ModelOverrideOptions,
  enableFlatten: boolean = true
): Array<[string, string]> {
  const props: [string, string][] = [];
  const allParents = getAllAncestors(modelPropertyType);
  const properties: SdkModelPropertyType[] =
    getAllProperties(context, modelPropertyType, allParents) ?? [];
  if (properties.length <= 0) {
    return [];
  }
  for (const prop of properties) {
    if (prop.kind === "property" && isReadOnly(prop)) {
      continue;
    }
    if (isMetadata(context.program, prop.__raw!)) {
      continue;
    }
    const property = getPropertyWithOverrides(prop, overrides);
    props.push([
      getPropertySerializedName(property)!,
      getSerializationExpression(context, property, propertyPath, enableFlatten)
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
  propertyPath: string = "body",
  overrides?: ModelOverrideOptions,
  enableFlatten: boolean = true
): string[] {
  return getRequestModelProperties(
    context,
    modelPropertyType,
    propertyPath,
    overrides,
    enableFlatten
  ).map(([name, value]) => `"${name}": ${value}`);
}

export function getPropertySerializedName(
  property: SdkHttpParameter | SdkModelPropertyType
) {
  return (
    (property.kind === "property"
      ? property.serializationOptions.json?.name
      : property.serializedName) ?? property.name
  );
}

/**
 * Get the serialized name for a header parameter, normalized to lowercase.
 * HTTP headers are case-insensitive, so we normalize to lowercase for consistency.
 */
function getHeaderSerializedName(param: SdkHttpParameter) {
  return getPropertySerializedName(param).toLowerCase();
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
export function getResponseMapping(
  context: SdkContext,
  type: SdkType,
  propertyPath: string = "result.body",
  overrides?: ModelOverrideOptions,
  enableFlatten: boolean = true
) {
  const allParents = type.kind === "model" ? getAllAncestors(type) : [];
  const properties =
    type.kind === "model" ? getAllProperties(context, type, allParents) : [];
  const props: string[] = [];
  for (const prop of properties) {
    if (isMetadata(context.program, prop.__raw!)) {
      continue;
    }
    const property = getPropertyWithOverrides(prop, overrides);
    const dot = propertyPath.endsWith("?") ? "." : "";
    const serializedName = getPropertySerializedName(property);
    const restValue = `${
      propertyPath ? `${propertyPath}${dot}` : `${dot}`
    }["${serializedName}"]`;

    const nullOrUndefinedPrefix =
      property.optional || isTypeNullable(property.type)
        ? `!${restValue}? ${restValue}: `
        : "";
    const flattenContext =
      useContext("sdkTypes").flattenProperties.get(property);
    const isSupportedFlatten = flattenContext && enableFlatten;
    const deserializeFunctionName = isSupportedFlatten
      ? buildPropertyDeserializer(context, property, {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        })
      : buildModelDeserializer(context, getNullableValidType(property.type), {
          nameOnly: true,
          skipDiscriminatedUnionSuffix: false
        });
    const propertyName = normalizeModelPropertyName(context, property);
    if (deserializeFunctionName) {
      if (isSupportedFlatten) {
        props.push(
          `...${nullOrUndefinedPrefix}${deserializeFunctionName}(${restValue})`
        );
      } else {
        props.push(
          `${propertyName}: ${nullOrUndefinedPrefix}${deserializeFunctionName}(${restValue})`
        );
      }
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(`${propertyName}: ${nullOrUndefinedPrefix}${restValue}`);
    } else {
      const deserializeValue = deserializeResponseValue(
        context,
        property.type,
        `${propertyPath}${dot}["${serializedName}"]`,
        !property.optional,
        getEncodeForModelProperty(context, property)
      );
      props.push(`${propertyName}: ${deserializeValue}`);
    }
  }
  return props;
}

/**
 * Converts JavaScript values to their serialized wire format for HTTP requests.
 */
export function serializeRequestValue(
  context: SdkContext,
  type: SdkType,
  clientValue: string,
  required: boolean,
  format?: string,
  serializedName?: string,
  isTopLevel: boolean = false
): string {
  const getSdkType = useSdkTypes();
  const dependencies = useDependencies();
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || getOptionalForType(type) || !required
      ? `!${clientValue}? ${clientValue}: `
      : "";
  switch (type.kind) {
    case "plainDate":
      // plainDate always uses ISO8601 format (YYYY-MM-DD)
      return `${nullOrUndefinedPrefix}${clientValue}.toISOString().split('T')[0]`;
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
      if (type.valueType) {
        const prefix = nullOrUndefinedPrefix + clientValue;
        const elementNullOrUndefinedPrefix =
          isTypeNullable(type.valueType) || getOptionalForType(type.valueType)
            ? "!p ? p : "
            : "";
        const serializeFunctionName = buildModelSerializer(
          context,
          getNullableValidType(type.valueType),
          {
            nameOnly: true,
            skipDiscriminatedUnionSuffix: false
          }
        );
        if (serializeFunctionName) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeFunctionName}(p)})`;
        } else if (
          isAzureCoreErrorType(context.program, type.valueType.__raw)
        ) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
        } else {
          const serializedValue = `${clientValue}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeRequestValue(context, type.valueType, "p", true, getEncodeForType(type.valueType))}})`;
          if (format) {
            const formatHelper = getCollectionFormatHelper(format);
            if (formatHelper) {
              if (format?.toLowerCase() === KnownCollectionFormat.Multi) {
                return `${nullOrUndefinedPrefix}${formatHelper}(${serializedValue}, "${serializedName}")`;
              }
              return `${nullOrUndefinedPrefix}${formatHelper}(${serializedValue})`;
            }
          }
          return `${nullOrUndefinedPrefix}${serializedValue}`;
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
    case "model": // this is to build serialization logic for spread model types
      return `{${getRequestModelMapping(context, type, "").join(",")}}`;
    case "constant":
      if (isTopLevel) {
        return `${nullOrUndefinedPrefix}${getConstantValue(type)}`;
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
 * Wrapper of deserializeResponseValue, this is used to handle the special cases for response header deserialization, since response header only supports primitive types, we will have a simpler deserialization logic comparing to response body, and we also need to handle the null/undefined cases differently since if a header is missing, the value will be undefined instead of null.
 * Note: that this has been added to isolate these changes behind the feature flag. Once the feature flag is removed, we can consider merging this back to deserializeResponseValue if the special handling logic is not needed anymore.
 */
export function deserializeResponseHeadersValue(
  context: SdkContext,
  type: SdkType,
  restValue: string,
  required: boolean,
  format?: string,
  recursionDepth: number = 0
) {
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || getOptionalForType(type) || !required
      ? `${restValue} === undefined || ${restValue} === null ? ${restValue}: `
      : "";

  switch (type.kind) {
    case "constant":
      return `${restValue} as any`;
    case "boolean":
      return `${nullOrUndefinedPrefix} ${restValue}.trim().toLowerCase() === "true"`;
    case "int16":
    case "int32":
    case "int64":
    case "uint16":
    case "uint32":
    case "uint64":
    case "float":
    case "decimal":
    case "decimal128":
    case "float32":
    case "float64":
    case "int8":
    case "integer":
    case "numeric":
    case "safeint":
    case "uint8":
      return `${nullOrUndefinedPrefix} Number(${restValue})`;
    case "enum":
      if (isNormalUnion(type)) {
        return `${restValue}`;
      } else if (isSpecialHandledUnion(type)) {
        const deserializeFunctionName = type
          ? buildModelDeserializer(context, getNullableValidType(type), {
              nameOnly: true,
              skipDiscriminatedUnionSuffix: false
            })
          : undefined;
        if (deserializeFunctionName) {
          return `${deserializeFunctionName}(${restValue})`;
        } else {
          return `${restValue} as any`;
        }
      } else {
        return `${restValue} as any`;
      }
    default: {
      const val = deserializeResponseValue(
        context,
        type,
        restValue,
        true,
        format,
        recursionDepth
      );
      return `${nullOrUndefinedPrefix} ${val}`;
    }
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
  required: boolean,
  format?: string,
  recursionDepth: number = 0
): string {
  const dependencies = useDependencies();
  const stringToUint8ArrayReference = resolveReference(
    dependencies.stringToUint8Array
  );
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || getOptionalForType(type) || !required
      ? `!${restValue}? ${restValue}: `
      : "";
  switch (type.kind) {
    case "plainDate":
      // plainDate deserializes from YYYY-MM-DD string to Date
      return `${nullOrUndefinedPrefix} new Date(${restValue})`;
    case "utcDateTime":
      return `${nullOrUndefinedPrefix} new Date(${type.encode === "unixTimestamp" ? `${restValue} * 1000` : restValue})`;
    case "array": {
      const prefix = nullOrUndefinedPrefix + restValue;
      const varName = recursionDepth > 0 ? `p${recursionDepth}` : "p";
      let elementNullOrUndefinedPrefix = "";
      if (
        type.valueType &&
        (isTypeNullable(type.valueType) || getOptionalForType(type.valueType))
      ) {
        elementNullOrUndefinedPrefix = `!${varName} ? ${varName} :`;
      }
      const deserializeFunctionName = type.valueType
        ? buildModelDeserializer(
            context,
            getNullableValidType(type.valueType),
            {
              nameOnly: true,
              skipDiscriminatedUnionSuffix: false
            }
          )
        : undefined;
      if (deserializeFunctionName) {
        return `${prefix}.map((${varName}: any) => { return ${elementNullOrUndefinedPrefix}${deserializeFunctionName}(${varName})})`;
      } else if (
        type.valueType &&
        isAzureCoreErrorType(context.program, type.valueType.__raw)
      ) {
        return `${prefix}.map((${varName}: any) => { return ${elementNullOrUndefinedPrefix}${varName}})`;
      } else if (type.valueType) {
        if (format) {
          const parseHelper = getCollectionFormatParseHelper(format);
          if (parseHelper) {
            // We shouldn't check for an empty string here since an empty string should be parsed as an empty array
            const optionalPrefixForString =
              isTypeNullable(type) || getOptionalForType(type) || !required
                ? `${restValue} === null || ${restValue} === undefined ? ${restValue}: `
                : "";
            if (
              type.valueType.kind === "enum" &&
              !isExtensibleEnum(context, type.valueType)
            ) {
              // Special handling for non-extensible enums to cast the result to the correct type
              return `${optionalPrefixForString}${parseHelper}(${restValue}) as ${getTypeExpression(context, type)}`;
            } else {
              return `${optionalPrefixForString}${parseHelper}(${restValue})`;
            }
          }
        }
        return `${prefix}.map((${varName}: any) => { return ${elementNullOrUndefinedPrefix}${deserializeResponseValue(context, type.valueType, varName, true, getEncodeForType(type.valueType), recursionDepth + 1)}})`;
      } else {
        return restValue;
      }
    }
    case "dict": {
      const keyVar = recursionDepth > 0 ? `k${recursionDepth}` : "k";
      const valueVar = recursionDepth > 0 ? `p${recursionDepth}` : "p";
      let elementNullOrUndefinedPrefix = "";
      if (
        type.valueType &&
        (isTypeNullable(type.valueType) || getOptionalForType(type.valueType))
      ) {
        elementNullOrUndefinedPrefix = `!${valueVar} ? ${valueVar} :`;
      }
      const deserializeFunctionName = type.valueType
        ? buildModelDeserializer(
            context,
            getNullableValidType(type.valueType),
            {
              nameOnly: true,
              skipDiscriminatedUnionSuffix: false
            }
          )
        : undefined;
      if (deserializeFunctionName) {
        return `${nullOrUndefinedPrefix}Object.fromEntries(Object.entries(${restValue}).map(([${keyVar}, ${valueVar}]: [string, any]) => [${keyVar}, ${elementNullOrUndefinedPrefix}${deserializeFunctionName}(${valueVar})]))`;
      } else if (
        type.valueType &&
        isAzureCoreErrorType(context.program, type.valueType.__raw)
      ) {
        return `${nullOrUndefinedPrefix}Object.fromEntries(Object.entries(${restValue}).map(([${keyVar}, ${valueVar}]: [string, any]) => [${keyVar}, ${elementNullOrUndefinedPrefix}${valueVar}]))`;
      } else if (type.valueType) {
        return `${nullOrUndefinedPrefix}Object.fromEntries(Object.entries(${restValue}).map(([${keyVar}, ${valueVar}]: [string, any]) => [${keyVar}, ${elementNullOrUndefinedPrefix}${deserializeResponseValue(context, type.valueType, valueVar, true, getEncodeForType(type.valueType), recursionDepth + 1)}]))`;
      } else {
        return restValue;
      }
    }
    case "bytes":
      if (format !== "binary" && format !== "bytes") {
        return `${nullOrUndefinedPrefix}typeof ${restValue} === 'string'
        ? ${stringToUint8ArrayReference}(${restValue}, "${format ?? "base64"}")
        : ${restValue}`;
      }
      return restValue;
    case "union":
      if (isNormalUnion(type)) {
        return `${restValue}`;
      } else if (isSpecialHandledUnion(type)) {
        const deserializeFunctionName = type
          ? buildModelDeserializer(context, getNullableValidType(type), {
              nameOnly: true,
              skipDiscriminatedUnionSuffix: false
            })
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
        false,
        getEncodeForType(type.type),
        recursionDepth + 1
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
  context: SdkContext,
  type: SdkType,
  parents?: SdkType[]
): SdkModelPropertyType[] {
  const propertiesMap: Map<string, SdkModelPropertyType> = new Map();
  if (!type) {
    return [];
  }
  parents?.forEach((p) => {
    getAllProperties(context, p).forEach((prop) => {
      propertiesMap.set(prop.name, prop);
    });
  });
  if (type.kind === "model" && type.properties) {
    type.properties
      .filter((p) => {
        return p.kind === "property" && !isHttpMetadata(context, p);
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
    return `!${propertyFullName}? ${propertyFullName}:`;
  }

  return "";
}

export function getPropertyFullName(
  context: SdkContext,
  property: SdkHttpParameter | SdkModelPropertyType,
  propertyPath?: string
) {
  const normalizedPropertyName =
    propertyPath === ""
      ? normalizeName(property.name, NameType.Parameter, true)
      : normalizeModelPropertyName(context, property)
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
  let statusCodes = operation.operation.responses.map((x) => x.statusCodes);
  // LROs may call the same path but with GET to get the operation status.
  if (
    (isLroOnlyOperation(operation) || isLroAndPagingOperation(operation)) &&
    operation.operation.verb !== "get"
  ) {
    // DELETE: Add 200, 202 for polling
    // POST/PUT/PATCH: Add 200, 201, 202 for polling
    const verb = operation.operation.verb.toLowerCase();
    if (verb === "delete") {
      statusCodes = Array.from(new Set([...statusCodes, 200, 202]));
    } else {
      statusCodes = Array.from(new Set([...statusCodes, 200, 201, 202]));
    }
  }

  return `[${statusCodes.map((x) => `"${x}"`).join(", ")}]`;
}

/**
 * Gets the apiVersion expression with default value fallback for query parameters.
 * @param dpgContext - The SDK context
 * @param operation - The operation to get the apiVersion parameter from
 * @returns The apiVersion expression string, or undefined if no apiVersion query param exists
 */
function getApiVersionExpression(
  dpgContext: SdkContext,
  operation: ServiceOperation
): string | undefined {
  const queryApiVersionParam = operation.operation.parameters.find(
    (p) => p.kind === "query" && p.isApiVersionParam
  );
  if (!queryApiVersionParam) {
    return undefined;
  }
  // For multi-service, use only the default value (don't reference context.apiVersion)
  if (dpgContext.rlcOptions?.isMultiService) {
    return queryApiVersionParam.clientDefaultValue
      ? `"${queryApiVersionParam.clientDefaultValue}"`
      : undefined;
  }
  const paramAccess = `${queryApiVersionParam.onClient ? "context." : ""}${queryApiVersionParam.name}`;
  const defaultValueSuffix = queryApiVersionParam.clientDefaultValue
    ? ` ?? "${queryApiVersionParam.clientDefaultValue}"`
    : "";
  return `${paramAccess}${defaultValueSuffix}`;
}

/**
 * Extracts and deduplicates all response headers from operation responses.
 * @param responses - The operation responses
 * @returns Array of unique response headers
 */
export function getResponseHeaders(
  responses: SdkHttpOperation["responses"]
): SdkServiceResponseHeader[] {
  const headerMap = new Map<string, SdkServiceResponseHeader>();
  for (const response of responses ?? []) {
    for (const header of response.headers ?? []) {
      const key = header.serializedName ?? header.name;
      if (!headerMap.has(key)) {
        headerMap.set(key, header);
      }
    }
  }
  return Array.from(headerMap.values());
}

/**
 * Builds a composite return type for operations that return both a model and additional headers.
 * Combines model properties and header properties into an inline object type.
 * @param context - The SDK context
 * @param modelType - The model type
 * @param headers - The response headers that are NOT in the model
 * @returns The composite type expression as a string (e.g., "{ name: string; email: string; requestId: string }")
 */
function buildCompositeResponseType(
  context: SdkContext,
  modelType: SdkModelType,
  headers: SdkServiceResponseHeader[]
): string {
  const allParents = getAllAncestors(modelType);
  const modelProps: (SdkModelPropertyType | SdkServiceResponseHeader)[] =
    getAllProperties(context, modelType, allParents);

  // Collect header property names already in the model to avoid duplicates
  const modelHeaderNames = new Set<string>();
  for (const property of modelProps) {
    if (isHeader(context.program, property.__raw!)) {
      modelHeaderNames.add(property.name.toLowerCase());
    }
  }

  // Add only additional host response header properties not already in model
  for (const header of headers) {
    if (modelHeaderNames.has(header.name.toLowerCase())) {
      continue;
    }
    modelProps.push(header);
  }

  return emitInlineModel(context, modelProps);
}

/**
 * Builds an inline type string for header-only responses.
 * @param context - The SDK context
 * @param headers - The response headers
 * @returns The inline type expression as a string (e.g., "{ requestId: string; optionalHeader?: string }")
 */
function buildHeaderOnlyResponseType(
  context: SdkContext,
  headers: SdkServiceResponseHeader[]
): string {
  const properties: string[] = [];

  for (const header of headers) {
    const headerName = normalizeModelPropertyName(context, header);
    const headerType = getTypeExpression(context, header.type);
    const isOptional = header.optional ? "?" : "";
    properties.push(`${headerName}${isOptional}: ${headerType}`);
  }

  return `{ ${properties.join("; ")} }`;
}

/**
 * Builds the object literal expression for a header-only response.
 * Handles type conversions for headers (string to boolean, Date, number, Uint8Array).
 * @param operation - The service operation
 * @param headers - The response headers
 * @returns JavaScript expression string for the header-only response object
 */
function buildHeaderOnlyResponseValue(
  context: SdkContext,
  headers: SdkServiceResponseHeader[]
): string {
  const props = headers.map((header) => {
    const headerName = (header.serializedName ?? header.name).toLowerCase();
    const key = normalizeModelPropertyName(context, header);
    const value = deserializeResponseHeadersValue(
      context,
      header.type,
      `result.headers[${JSON.stringify(headerName)}]`,
      !header.optional,
      getEncodeForType(header.type),
      0
    );

    return `${key}: ${value}`;
  });

  return `{ ${props.join(", ")} }`;
}
