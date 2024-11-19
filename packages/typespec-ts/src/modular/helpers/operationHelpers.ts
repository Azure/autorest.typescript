import {
  BodyParameter,
  Client,
  ModularCodeModel,
  Operation,
  Parameter,
  Property,
  Type
} from "../modularCodeModel.js";
import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { NoTarget, Program } from "@typespec/compiler";
import { PagingHelpers, PollingHelpers } from "../static-helpers-metadata.js";
import { getType, isTypeNullable } from "./typeHelpers.js";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo
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

export function getSendPrivateFunction(
  dpgContext: SdkContext,
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> {
  const parameters = getOperationSignatureParameters(
    dpgContext,
    operation,
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

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();
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
  operation: Operation
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
  const response = operation.responses[0]!;
  let returnType;
  if (isLroOnly && operation.method.toLowerCase() !== "patch") {
    returnType = buildLroReturnType(context, operation);
  } else if (response?.type?.type) {
    returnType = {
      name: response.type.name,
      type: getTypeExpression(context, response.type.tcgcType!)
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
    ? operation?.lroMetadata?.finalResult
    : response.type;
  const hasLroSubPath = operation?.lroMetadata?.finalResultPath !== undefined;

  const deserializePrefix = "result.body";

  const deserializedRoot = hasLroSubPath
    ? `${deserializePrefix}.${operation?.lroMetadata?.finalResultPath}`
    : `${deserializePrefix}`;
  if (isLroOnly && hasLroSubPath) {
    statements.push(
      `if(${deserializedRoot.split(".").join("?.")} === undefined) {
        throw createRestError(\`Expected a result in the response at position "${deserializedRoot}"\`, result);
      }
      `
    );
  }

  if (deserializedType?.tcgcType) {
    const deserializeFunctionName = buildModelDeserializer(
      context,
      deserializedType.tcgcType,
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
          response.isBinaryPayload ? "binary" : deserializedType.format
        )}`
      );
    }
  } else if (returnType.type === "void") {
    statements.push("return;");
  } else if (deserializedType) {
    statements.push(
      `return ${deserializeResponseValue(
        context,
        deserializedType,
        deserializedRoot,
        response.isBinaryPayload ? "binary" : deserializedType.format
      )}`
    );
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
  operation: Operation,
  clientType: string
): OptionalKind<ParameterDeclarationStructure>[] {
  const optionsType = getOperationOptionsName(operation, true);
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();

  operation.parameters
    .filter(
      (p) =>
        p.implementation === "Method" &&
        p.type.type !== "constant" &&
        p.clientDefaultValue === undefined &&
        !p.optional
    )
    .map((p) => {
      return {
        name: p.clientName,
        type: getTypeExpression(context, p.tcgcType ?? p.type.tcgcType!)
      };
    })
    .forEach((p) => {
      parameters.set(p.name, p);
    });

  if (operation.bodyParameter && operation.bodyParameter.optional === false) {
    parameters.set(operation.bodyParameter?.clientName, {
      hasQuestionToken: operation.bodyParameter.optional,
      ...{
        name: operation.bodyParameter.clientName,
        type: getTypeExpression(context, operation.bodyParameter.type.tcgcType!)
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
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> & { propertyName?: string } {
  if (isPagingOnlyOperation(operation)) {
    // Case 1: paging-only operation
    return getPagingOnlyOperationFunction(context, operation, clientType);
  } else if (isLroOnlyOperation(operation)) {
    // Case 2: lro-only operation
    return getLroOnlyOperationFunction(context, operation, clientType);
  } else if (isLroAndPagingOperation(operation)) {
    // Case 3: both paging + lro operation is not supported yet so handle them as normal operation and customization may be needed
    // https://github.com/Azure/autorest.typescript/issues/2313
  }

  if (operation.name === "floatSeconds") {
    operation;
  }
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, operation, clientType);
  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType = { name: "", type: "void" };
  if (response.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = {
      name: type.name ?? "",
      type: getTypeExpression(context, type.tcgcType!)
    };
  }
  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.description),
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
  operation: Operation,
  clientType: string
) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, operation, clientType);
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
      ...getDocsFromDescription(operation.description),
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
  const resourceLocationConfig = operation.lroMetadata?.finalStateVia
    ? `resourceLocationConfig: "${operation.lroMetadata?.finalStateVia}"`
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

function buildLroReturnType(context: SdkContext, operation: Operation) {
  const metadata = operation.lroMetadata;
  if (metadata !== undefined && metadata.finalResult !== undefined) {
    const type = metadata.finalResult;
    return {
      name: type.name,
      type: getTypeExpression(context, type.tcgcType!)
    };
  }
  return { name: "", type: "void" };
}

function getPagingOnlyOperationFunction(
  context: SdkContext,
  operation: Operation,
  clientType: string
) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(context, operation, clientType);

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType = { name: "", type: "void" };
  if (response.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = {
      name: type.name ?? "",
      type: getTypeExpression(context, type.tcgcType!)
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
      ...getDocsFromDescription(operation.description),
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
  if (operation.itemName) {
    options.push(`itemName: "${operation.itemName}"`);
  }
  if (operation.continuationTokenName) {
    options.push(`nextLinkName: "${operation.continuationTokenName}"`);
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

function extractPagingType(type: Type, itemName?: string): Type | undefined {
  if (!itemName) {
    return undefined;
  }
  const allProperties = [
    ...(type.properties ?? []),
    ...(type.parents ?? []).flatMap((p) => p.properties ?? [])
  ];
  const prop = allProperties
    .filter((prop) => prop.restApiName === itemName)
    .map((prop) => prop.type);
  if (prop.length === 0) {
    return undefined;
  }
  return prop[0]?.type === "list" && prop[0].elementType
    ? prop[0].elementType
    : undefined;
}
export function getOperationOptionsName(
  operation: Operation,
  includeGroupName = false
) {
  const prefix =
    includeGroupName && operation.name.indexOf("_") === -1
      ? getClassicalLayerPrefix(operation, NameType.Interface)
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
  operation: Operation
): string {
  if (!operation.parameters) {
    return "";
  }
  const operationParameters = operation.parameters.filter(
    (p) => p.implementation !== "Client" && !isContentType(p)
  );

  const contentTypeParameter = operation.parameters.find(isContentType);

  const parametersImplementation: Record<
    "header" | "query" | "body",
    { paramMap: string; param: Parameter }[]
  > = {
    header: [],
    query: [],
    body: []
  };

  for (const param of operationParameters) {
    if (
      param.location === "header" ||
      param.location === "query" ||
      param.location === "body"
    ) {
      parametersImplementation[param.location].push({
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
    operation.bodyParameter === undefined &&
    parametersImplementation.body.length
  ) {
    paramStr = `${paramStr}\nbody: {${parametersImplementation.body
      .map((i) => i.paramMap)
      .join(",\n")}}`;
  } else if (operation.bodyParameter !== undefined) {
    paramStr = `${paramStr}${buildBodyParameter(dpgContext, operation.bodyParameter)}`;
  }
  return paramStr;
}

// Specially handle the type for headers because we only allow string/number/boolean values
function buildHeaderParameter(
  program: Program,
  paramMap: string,
  param: Parameter
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
    conditions.push(`options?.${param.clientName} !== undefined`);
  }
  if (isTypeNullable(param.type) === true) {
    conditions.push(`options?.${param.clientName} !== null`);
  }
  return conditions.length > 0
    ? `...(${conditions.join(" && ")} ? {${paramMap}} : {})`
    : paramMap;
}

function buildBodyParameter(
  context: SdkContext,
  bodyParameter: BodyParameter | undefined
) {
  if (!bodyParameter || !bodyParameter.type.tcgcType) {
    return "";
  }
  const serializerFunctionName = buildModelSerializer(
    context,
    bodyParameter.type.tcgcType!,
    false,
    true
  );

  const bodyNameExpression = bodyParameter.optional
    ? `options["${bodyParameter.clientName}"]`
    : bodyParameter.clientName;
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
    bodyParameter.isBinaryPayload ? "binary" : bodyParameter.format
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
  param: Parameter | Property
): string {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(context, param as Parameter);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(context, param);
  }

  if (isRequired(param)) {
    return getRequired(context, param);
  }

  throw new Error(`Parameter ${param.clientName} is not supported`);
}

function getCollectionFormat(context: SdkContext, param: Parameter) {
  const collectionInfo = getCollectionFormatHelper(
    param.location,
    param.format ?? ""
  );
  if (!collectionInfo) {
    throw "Has collection format info but without helper function detected";
  }
  const isMulti = (param.format ?? "").toLowerCase() === "multi";
  const additionalParam = isMulti ? `, "${param.restApiName}"` : "";
  if (!param.optional) {
    return `"${param.restApiName}": ${collectionInfo}(${serializeRequestValue(
      context,
      param.type,
      param.clientName,
      true,
      param.format
    )}${additionalParam})`;
  }
  return `"${param.restApiName}": options?.${
    param.clientName
  } !== undefined ? ${collectionInfo}(${serializeRequestValue(
    context,
    param.type,
    "options?." + param.clientName,
    false,
    param.format
  )}${additionalParam}): undefined`;
}

function isContentType(param: Parameter): boolean {
  return (
    param.location === "header" &&
    param.restApiName.toLowerCase() === "content-type"
  );
}

function getContentTypeValue(param: Parameter | Property) {
  const defaultValue =
    param.clientDefaultValue ?? param.type.clientDefaultValue;

  if (defaultValue) {
    return `contentType: options.${param.clientName} as any ?? "${defaultValue}"`;
  } else {
    return `contentType: ${
      !param.optional
        ? "contentType"
        : "options." + param.clientName + " as any"
    }`;
  }
}

type RequiredType = (Parameter | Property) & {
  type: { optional: false | undefined; value: string };
};

function isRequired(param: Parameter | Property): param is RequiredType {
  return !param.optional;
}

function getRequired(context: SdkContext, param: RequiredType) {
  if (param.type.type === "model") {
    const { propertiesStr } = getRequestModelMapping(
      context,
      param.type,
      param.clientName
    );
    return `"${param.restApiName}": { ${propertiesStr.join(",")} }`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    context,
    param.type,
    param.clientName,
    true,
    param.format === undefined &&
      (param as Parameter).location === "header" &&
      param.type.type === "datetime"
      ? "headerDefault"
      : param.format
  )}`;
}

type ConstantType = (Parameter | Property) & {
  type: { type: "constant"; value: string };
};

function getConstantValue(param: ConstantType) {
  const defaultValue =
    param.clientDefaultValue ??
    param.type.clientDefaultValue ??
    param.type.value;

  if (!defaultValue) {
    throw new Error(
      `Constant ${param.clientName} does not have a default value`
    );
  }

  return `"${param.restApiName}": ${getType(param.type).name}`;
}

function isConstant(param: Parameter | Property): param is ConstantType {
  return param.type.type === "constant";
}

type OptionalType = (Parameter | Property) & {
  type: { optional: true };
};

function isOptional(param: Parameter | Property): param is OptionalType {
  return Boolean(param.optional);
}

function getOptional(context: SdkContext, param: OptionalType) {
  if (param.type.type === "model") {
    const { propertiesStr, directAssignment } = getRequestModelMapping(
      context,
      param.type,
      "options?." + param.clientName + "?."
    );
    const serializeContent =
      directAssignment === true
        ? propertiesStr.join(",")
        : `{${propertiesStr.join(",")}}`;
    return `"${param.restApiName}": ${serializeContent}`;
  }
  if (
    param.restApiName === "api-version" &&
    (param as any).location === "query"
  ) {
    return `"${param.restApiName}": ${
      param.clientDefaultValue
        ? `options?.${param.clientName} ?? "${param.clientDefaultValue}"`
        : `options?.${param.clientName}`
    }`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    context,
    param.type,
    `options?.${param.clientName}`,
    false,
    param.format === undefined &&
      (param as Parameter).location === "header" &&
      param.type.type === "datetime"
      ? "headerDefault"
      : param.format
  )}`;
}

/**
 * Builds the assignment for when a property or parameter has a default value
 */
function getDefaultValue(param: Parameter | Property) {
  return param.clientDefaultValue ?? param.type.clientDefaultValue;
}

/**
 * Extracts the path parameters
 */
function getPathParameters(dpgContext: SdkContext, operation: Operation) {
  if (!operation.parameters) {
    return "";
  }

  let pathParams = "";
  for (const param of operation.parameters) {
    if (param.location === "path") {
      // Path parameters cannot be optional
      if (param.optional) {
        reportDiagnostic(dpgContext.program, {
          code: "optional-path-param",
          target: NoTarget,
          format: {
            paramName: param.clientName
          }
        });
      }
      pathParams += `${pathParams !== "" ? "," : ""} ${getPathParamExpr(
        param,
        getDefaultValue(param)
      )}`;
    }
  }

  return pathParams;
}

function getPathParamExpr(param: Parameter, defaultValue?: string) {
  const value = defaultValue
    ? typeof defaultValue === "string"
      ? `options[${param.clientName}] ?? "${defaultValue}"`
      : `options[${param.clientName}] ?? ${defaultValue}`
    : param.clientName;
  if (param.skipUrlEncoding === true) {
    return `{value: ${value}, allowReserved: true}`;
  }
  return value;
}

function getNullableCheck(name: string, type: Type) {
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
  modelPropertyType: Type,
  propertyPath: string = "body"
): RequestModelMappingResult {
  const props: string[] = [];
  const allParents = getAllAncestors(modelPropertyType);
  const properties: Property[] =
    getAllProperties(modelPropertyType, allParents) ?? [];
  if (properties.length <= 0) {
    return { propertiesStr: [] };
  }
  for (const property of properties) {
    if (property.readonly) {
      continue;
    }
    const dot = propertyPath.endsWith("?") ? "." : "";

    const propertyPathWithDot = `${propertyPath ? `${propertyPath}${dot}` : `${dot}`}`;
    const nullOrUndefinedPrefix = getPropertySerializationPrefix(
      property,
      propertyPath
    );

    const propertyFullName = getPropertyFullName(property, propertyPathWithDot);
    const serializeFunctionName = buildModelSerializer(
      context,
      property.type.tcgcType!,
      false,
      true
    );
    if (serializeFunctionName) {
      props.push(
        `"${property.restApiName}": ${nullOrUndefinedPrefix}${serializeFunctionName}(${propertyFullName})`
      );
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(
        `"${property.restApiName}": ${nullOrUndefinedPrefix}${propertyFullName}`
      );
    } else {
      const serializedValue = serializeRequestValue(
        context,
        property.type,
        propertyFullName,
        !property.optional,
        property.format
      );
      props.push(`"${property.restApiName}": ${serializedValue}`);
    }
  }

  return { propertiesStr: props };
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
export function getResponseMapping(
  context: SdkContext,
  type: Type,
  propertyPath: string = "result.body"
) {
  const allParents = getAllAncestors(type);
  const properties = getAllProperties(type, allParents) ?? [];
  const props: string[] = [];
  for (const property of properties) {
    const dot = propertyPath.endsWith("?") ? "." : "";

    const restValue = `${
      propertyPath ? `${propertyPath}${dot}` : `${dot}`
    }["${property.restApiName}"]`;
    const nullOrUndefinedPrefix =
      property.optional || isTypeNullable(property.type)
        ? `!${restValue}? ${restValue}: `
        : "";
    const deserializeFunctionName = buildModelDeserializer(
      context,
      property.type.tcgcType!,
      false,
      true
    );
    if (deserializeFunctionName) {
      props.push(
        `"${property.clientName}": ${nullOrUndefinedPrefix}${deserializeFunctionName}(${restValue})`
      );
    } else if (isAzureCoreErrorType(context.program, property.type.__raw)) {
      props.push(
        `"${property.clientName}": ${nullOrUndefinedPrefix}${restValue}`
      );
    } else {
      const deserializeValue = deserializeResponseValue(
        context,
        property.type,
        `${propertyPath}${dot}["${property.restApiName}"]`,
        property.format
      );
      props.push(
        `"${property.clientName}": ${deserializeValue === `${propertyPath}${dot}["${property.restApiName}"]` ? "" : nullOrUndefinedPrefix}${deserializeValue}`
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
  type: Type,
  clientValue: string,
  required: boolean,
  format?: string
): string {
  const getSdkType = useSdkTypes();
  const dependencies = useDependencies();
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || type.optional || !required
      ? `!${clientValue}? ${clientValue}: `
      : "";
  switch (type.type) {
    case "datetime":
      switch (type.format ?? format) {
        case "rfc7231":
        case "headerDefault":
          return `${nullOrUndefinedPrefix}${clientValue}.toUTCString()`;
        case "unixTimestamp":
          return `${nullOrUndefinedPrefix}((${clientValue}.getTime() / 1000) | 0)`;
        case "rfc3339":
        default:
          return `${getNullableCheck(clientValue, type)} ${clientValue}${
            required ? "" : "?"
          }.toISOString()`;
      }
    case "list": {
      const prefix = nullOrUndefinedPrefix + clientValue;
      if (type.elementType) {
        const elementNullOrUndefinedPrefix =
          isTypeNullable(type.elementType) || type.elementType.optional
            ? "!p ? p : "
            : "";
        const serializeFunctionName = buildModelSerializer(
          context,
          type.elementType.tcgcType!,
          false,
          true
        );
        if (serializeFunctionName) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeFunctionName}(p)})`;
        } else if (
          isAzureCoreErrorType(context.program, type.elementType.__raw)
        ) {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
        } else {
          return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${serializeRequestValue(context, type.elementType, "p", true, type.elementType?.format)}})`;
        }
      }
      return clientValue;
    }
    case "byte-array":
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
    case "combined":
      if (isNormalUnion(type)) {
        return `${clientValue}`;
      } else if (isSpecialHandledUnion(type)) {
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
  type: Type,
  restValue: string,
  format?: string
): string {
  const dependencies = useDependencies();
  const stringToUint8ArrayReference = resolveReference(
    dependencies.stringToUint8Array
  );
  const nullOrUndefinedPrefix =
    isTypeNullable(type) || type.optional
      ? `!${restValue}? ${restValue}: `
      : "";
  switch (type.type) {
    case "datetime":
      return `${nullOrUndefinedPrefix} new Date(${type.format === "unixTimestamp" ? `${restValue} * 1000` : restValue})`;
    case "list": {
      const prefix = nullOrUndefinedPrefix + restValue;
      let elementNullOrUndefinedPrefix = "";
      if (
        type.elementType &&
        (isTypeNullable(type.elementType) || type.elementType.optional)
      ) {
        elementNullOrUndefinedPrefix = "!p ? p :";
      }
      const deserializeFunctionName = type.elementType
        ? buildModelDeserializer(
            context,
            type.elementType.tcgcType!,
            false,
            true
          )
        : undefined;
      if (deserializeFunctionName) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeFunctionName}(p)})`;
      } else if (
        type.elementType &&
        isAzureCoreErrorType(context.program, type.elementType.__raw)
      ) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}p})`;
      } else if (type.elementType) {
        return `${prefix}.map((p: any) => { return ${elementNullOrUndefinedPrefix}${deserializeResponseValue(context, type.elementType, "p", type.format)}})`;
      } else {
        return restValue;
      }
    }
    case "byte-array":
      if (format !== "binary") {
        return `typeof ${restValue} === 'string'
        ? ${stringToUint8ArrayReference}(${restValue}, "${format ?? "base64"}")
        : ${restValue}`;
      }
      return restValue;
    case "combined":
      if (isNormalUnion(type)) {
        return `${restValue}`;
      } else if (isSpecialHandledUnion(type)) {
        const deserializeFunctionName = type
          ? buildModelDeserializer(context, type.tcgcType!, false, true)
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

export function isLroAndPagingOperation(op: Operation): boolean {
  return op.discriminator === "lropaging";
}

export function isLroOnlyOperation(op: Operation): boolean {
  return op.discriminator === "lro";
}

export function hasPagingOnlyOperation(
  client: Client,
  needRLC?: boolean
): boolean;
export function hasPagingOnlyOperation(
  codeModel: ModularCodeModel,
  needRLC?: boolean
): boolean;
export function hasPagingOnlyOperation(
  clientOrCodeModel: Client | ModularCodeModel,
  needRLC: boolean = false
): boolean {
  let clients: Client[] = [];
  if ((clientOrCodeModel as any)?.operationGroups) {
    clients = [clientOrCodeModel as Client];
  } else if ((clientOrCodeModel as any)?.clients) {
    clients = (clientOrCodeModel as ModularCodeModel).clients;
  }
  return clients.some(
    (c) =>
      (needRLC ? c.rlcHelperDetails.hasPaging : false) ||
      (c.operationGroups ?? []).some((og) =>
        (og.operations ?? []).some(isPagingOnlyOperation)
      )
  );
}

export function isPagingOnlyOperation(op: Operation): boolean {
  return op.discriminator === "paging";
}

export function getAllProperties(type: Type, parents?: Type[]): Property[] {
  const propertiesMap: Map<string, Property> = new Map();
  if (!type) {
    return [];
  }
  parents?.forEach((p) => {
    getAllProperties(p).forEach((prop) => {
      propertiesMap.set(prop.clientName, prop);
    });
  });
  type.properties?.forEach((p) => {
    propertiesMap.set(p.clientName, p);
  });
  return [...propertiesMap.values()];
}

export function getAllAncestors(type: Type): Type[] {
  const ancestors: Type[] = [];
  type?.parents?.forEach((p) => {
    ancestors.push(p);
    ancestors.push(...getAllAncestors(p));
  });
  return ancestors;
}

export function getPropertySerializationPrefix(
  modularType: Property | Parameter,
  propertyPath?: string
) {
  const propertyFullName = getPropertyFullName(modularType, propertyPath);
  if (modularType.optional || isTypeNullable(modularType.type)) {
    return `!${propertyFullName} ? ${propertyFullName} :`;
  }

  return "";
}

export function getPropertyFullName(
  modularType: Property | Parameter,
  propertyPath?: string
) {
  let fullName = `${modularType.clientName}`;
  if (propertyPath) {
    fullName = `${propertyPath}["${modularType.clientName}"]`;
  }
  return fullName;
}

/**
 * Get an expression representing an array of expected status codes for the operation
 * @param operation The operation
 */
export function getExpectedStatuses(operation: Operation): string {
  const statusCodes = operation.responses.flatMap((x) =>
    x.statusCodes.filter((s) => s !== "default")
  );
  // LROs may call the same path but with GET to get the operation status.
  if (
    isLroOnlyOperation(operation) &&
    operation.method !== "GET" &&
    !statusCodes.includes(200)
  ) {
    statusCodes.push(200);
  }

  return `[${statusCodes.map((x) => `"${x}"`).join(", ")}]`;
}
