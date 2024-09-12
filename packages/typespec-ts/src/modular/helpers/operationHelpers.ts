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
import {
  SdkContext,
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { buildType, getType, isTypeNullable } from "./typeHelpers.js";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo
} from "../../utils/operationUtil.js";
import {
  getDeserializeFunctionName,
  isNormalUnion,
  isPolymorphicUnion,
  isSpecialHandledUnion,
  isSpecialUnionVariant
} from "../serialization/serializeUtils.js";
import {
  getDocsFromDescription,
  getFixmeForMultilineDocs
} from "./docsHelpers.js";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";

import { AzurePollingDependencies } from "../external-dependencies.js";
import { NameType } from "@azure-tools/rlc-common";
import { buildModelDeserializer } from "../serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "../serialization/buildSerializerFunction.js";
import { refkey } from "../../framework/refkey.js";
import { reportDiagnostic } from "../../lib.js";
import { resolveReference } from "../../framework/reference.js";
import { useDependencies } from "../../framework/hooks/useDependencies.js";
import { useSdkTypes } from "../../framework/hooks/sdkTypes.js";

export function getSendPrivateFunction(
  dpgContext: SdkContext,
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> {
  const parameters = getOperationSignatureParameters(operation, clientType);
  const { name } = getOperationName(operation);

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType: "StreamableMethod"
  };

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();
  const optionalParamName = parameters.filter((p) =>
    p.type?.toString().endsWith("OptionalParams")
  )[0]?.name;

  const statements: string[] = [];
  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      operation
    )}).${operationMethod}({...operationOptionsToRequestParameters(${optionalParamName}), ${getRequestParameters(
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
    returnType = buildLroReturnType(operation);
  } else if (response?.type?.type) {
    returnType = buildType(
      response.type.name,
      response.type,
      response.type.format
    );
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

  const allParents = deserializedType ? getAllAncestors(deserializedType) : [];
  const properties = deserializedType
    ? getAllProperties(deserializedType, allParents)
    : [];
  if (
    deserializedType?.type === "any" ||
    deserializedType?.type === "dict" ||
    (deserializedType?.type === "model" &&
      allParents.some((p) => p.type === "dict")) ||
    response.isBinaryPayload
  ) {
    // TODO: Fix this any cast when implementing handling dict.
    statements.push(`return ${deserializedRoot} as any`);
  } else if (
    deserializedType &&
    properties.length > 0 &&
    !deserializedType.aliasType
  ) {
    const deserializeFunctionName =
      buildModelDeserializer(
        context,
        deserializedType.tcgcType!,
        false,
        true
      ) ?? "";
    statements.push(`return ${deserializeFunctionName}(${deserializedRoot})`);
  } else if (returnType.type === "void" || deserializedType === undefined) {
    statements.push(`return;`);
  } else {
    if (
      deserializedType.type === "model" &&
      deserializedType.tcgcType?.kind === "dict"
    ) {
      deserializedType;
    }
    const deserializeFunctionName =
      buildModelDeserializer(
        context,
        deserializedType.tcgcType!,
        false,
        true
      ) ?? "";
    statements.push(`return ${deserializeFunctionName}(${deserializedRoot})`);
  }
  return {
    ...functionStatement,
    statements
  };
}

function getOperationSignatureParameters(
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
    .map((p) => buildType(p.clientName, p.type, p.format))
    .forEach((p) => {
      parameters.set(p.name, p);
    });

  if (operation.bodyParameter) {
    parameters.set(operation.bodyParameter?.clientName, {
      hasQuestionToken: operation.bodyParameter.optional,
      ...buildType(
        operation.bodyParameter.clientName,
        operation.bodyParameter.type,
        operation.bodyParameter.type.format
      )
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
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> & { propertyName?: string } {
  if (isPagingOnlyOperation(operation)) {
    // Case 1: paging-only operation
    return getPagingOnlyOperationFunction(operation, clientType);
  } else if (isLroOnlyOperation(operation)) {
    // Case 2: lro-only operation
    return getLroOnlyOperationFunction(operation, clientType);
  } else if (isLroAndPagingOperation(operation)) {
    // Case 3: both paging + lro operation is not supported yet so handle them as normal operation and customization may be needed
    // https://github.com/Azure/autorest.typescript/issues/2313
  }

  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);
  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType = { name: "", type: "void" };
  if (response.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = buildType(type.name, type, type.format);
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

function getLroOnlyOperationFunction(operation: Operation, clientType: string) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);
  const returnType = buildLroReturnType(operation);
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

  const statements: string[] = [];
  statements.push(`

  return ${getLongRunningPollerReference}(context, _${name}Deserialize, ${getExpectedStatuses(
    operation
  )}, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")})
  }) as ${pollerLikeReference}<${operationStateReference}<${
    returnType.type
  }>, ${returnType.type}>;
  `);

  return {
    ...functionStatement,
    statements
  };
}

function buildLroReturnType(operation: Operation) {
  const metadata = operation.lroMetadata;
  if (metadata !== undefined && metadata.finalResult !== undefined) {
    const type = metadata.finalResult;
    return buildType(type.name, type, type.format);
  }
  return { name: "", type: "void" };
}

function getPagingOnlyOperationFunction(
  operation: Operation,
  clientType: string
) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType = { name: "", type: "void" };
  if (response.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = buildType(type.name, type, type.format);
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
        paramMap: getParameterMap(param),
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

  const serializerFunctionName =
    buildModelSerializer(context, bodyParameter.type.tcgcType!, false, true) ??
    "";
  if (serializerFunctionName === "chatRequestMessageUnionSerializer") {
    bodyParameter;
  }
  const nullOrUndefinedPrefix = getPropertySerializationPrefix(bodyParameter);
  return `\nbody: ${nullOrUndefinedPrefix}${serializerFunctionName}(${bodyParameter.clientName}),`;
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
export function getParameterMap(param: Parameter | Property): string {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(param as Parameter);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(param);
  }

  if (isRequired(param)) {
    return getRequired(param);
  }

  throw new Error(`Parameter ${param.clientName} is not supported`);
}

function getCollectionFormat(param: Parameter) {
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
      param.type,
      param.clientName,
      true,
      [param.type],
      param.format
    )}${additionalParam})`;
  }
  return `"${param.restApiName}": options?.${
    param.clientName
  } !== undefined ? ${collectionInfo}(${serializeRequestValue(
    param.type,
    "options?." + param.clientName,
    false,
    [param.type],
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

function getRequired(param: RequiredType) {
  if (param.type.type === "model") {
    const { propertiesStr } = getRequestModelMapping(
      param.type,
      param.clientName,
      [param.type]
    );
    return `"${param.restApiName}": { ${propertiesStr.join(",")} }`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    param.type,
    param.clientName,
    true,
    [param.type],
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

function getOptional(param: OptionalType) {
  if (param.type.type === "model") {
    const { propertiesStr, directAssignment } = getRequestModelMapping(
      param.type,
      "options?." + param.clientName + "?",
      [param.type]
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
    param.type,
    `options?.${param.clientName}`,
    false,
    [param.type],
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
  return (param.clientDefaultValue ?? param.type.clientDefaultValue) !==
    undefined
    ? `${param.optional ? "??" : ""} "${
        param.clientDefaultValue ?? param.type.clientDefaultValue
      }"`
    : "";
}

/**
 * Extracts the path parameters
 */
function getPathParameters(operation: Operation) {
  if (!operation.parameters) {
    return "";
  }

  let pathParams = "";
  for (const param of operation.parameters) {
    if (param.location === "path") {
      if (!param.optional) {
        pathParams += `${pathParams !== "" ? "," : ""} ${param.clientName}`;
        continue;
      }

      const defaultValue = getDefaultValue(param);

      pathParams += `${pathParams !== "" ? "," : ""} options.${
        param.clientName
      }`;

      if (defaultValue) {
        pathParams += ` ?? "${defaultValue}"`;
      }
    }
  }

  return pathParams;
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
  modelPropertyType: Type,
  propertyPath: string = "body",
  typeStack: Type[] = []
): RequestModelMappingResult {
  const props: string[] = [];
  const allParents = getAllAncestors(modelPropertyType);
  const properties: Property[] =
    getAllProperties(modelPropertyType, allParents) ?? [];
  if (properties.length <= 0) {
    return { propertiesStr: [] };
  }

  let serializerName = modelPropertyType.name
    ? `${toCamelCase(modelPropertyType.name)}Serializer`
    : undefined;

  if (isSpecialHandledUnion(modelPropertyType)) {
    serializerName =
      serializerName ??
      getDeserializeFunctionName(modelPropertyType, "serialize");
    const definition = `${serializerName}(${propertyPath.replace(/\?$/, "")})`;
    props.push(definition);
    return { propertiesStr: props, directAssignment: true };
  }
  for (const property of properties) {
    if (property.readonly) {
      continue;
    }
    const nullOrUndefinedPrefix = getPropertySerializationPrefix(
      property,
      propertyPath
    );

    const propertyFullName = getPropertyFullName(property, propertyPath);
    if (property.type.type === "model") {
      let definition;
      if (property.type.coreTypeInfo === "ErrorType") {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else if (typeStack.includes(property.type)) {
        const isSpecialModel = isSpecialUnionVariant(property.type);
        definition = `"${property.restApiName}": ${
          !property.optional
            ? `${propertyFullName}${isSpecialModel ? " as any" : ""}`
            : `!${propertyFullName} ? undefined : ${propertyFullName}${
                isSpecialModel ? " as any" : ""
              }`
        }`;
      } else if (isPolymorphicUnion(property.type)) {
        const serializeFunctionName = property.type.name
          ? `${toCamelCase(property.type.name)}Serializer`
          : getDeserializeFunctionName(property.type, "serialize");
        definition = `"${property.restApiName}": ${nullOrUndefinedPrefix}${serializeFunctionName}(${propertyFullName})`;
      } else {
        if (property.type.name) {
          serializerName = `${toCamelCase(property.type.name)}Serializer`;
          definition = `"${property.restApiName}": ${nullOrUndefinedPrefix}${serializerName}(${propertyPath}.${property.clientName})`;
        } else {
          const { propertiesStr, directAssignment } = getRequestModelMapping(
            property.type,
            `${propertyPath}.${property.clientName}${
              property.optional ? "?" : ""
            }`,
            [...typeStack, property.type]
          );

          const serializeContent =
            directAssignment === true
              ? propertiesStr.join(",")
              : `{${propertiesStr.join(",")}}`;
          definition = `"${property.restApiName}": ${getNullableCheck(
            propertyFullName,
            property.type
          )} ${
            !property.optional ? "" : `!${propertyFullName} ? undefined :`
          } ${serializeContent}`;
        }
      }

      props.push(definition);
    } else if (typeStack.includes(property.type)) {
      const isSpecialModel = isSpecialUnionVariant(property.type);
      const definition = `"${property.restApiName}": ${
        !property.optional
          ? `${propertyFullName}${isSpecialModel ? " as any" : ""}`
          : `!${propertyFullName} ? undefined : ${propertyFullName}${
              isSpecialModel ? " as any" : ""
            }`
      }`;
      props.push(definition);
    } else if (property.type.type === "dict") {
      const modelName = property.type.elementType?.name;
      serializerName = modelName ? `${toCamelCase(modelName)}Serializer` : "";
      // definition = `"${property.restApiName}": ${nullOrUndefinedPrefix}${serializerName}(${propertyPath}.${property.clientName})`;
      const statement = `"${property.restApiName}": ${nullOrUndefinedPrefix} serializeRecord(${propertyFullName} as any, ${serializerName}) as any`;
      // addImportToSpecifier(
      //   "serializerHelpers",
      //   runtimeImports,
      //   "serializeRecord"
      // );

      // TODO: Add import for serializer
      // addImportToSpecifier("modularModel", runtimeImports, serializerName);

      props.push(statement);
    } else if (modelPropertyType.type === "enum") {
      props.push(
        `"${property.restApiName}": ${nullOrUndefinedPrefix}${propertyPath}.${property.clientName}`
      );
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const clientValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.clientName}"]`;
      props.push(
        `"${property.restApiName}": ${serializeRequestValue(
          property.type,
          clientValue,
          !property.optional,
          [...typeStack, property.type],
          property.format
        )}`
      );
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
  propertyPath: string = "result.body",
  typeStack: Type[] = []
) {
  const allParents = getAllAncestors(type);
  const properties = getAllProperties(type, allParents) ?? [];
  if (typeStack.length <= 0) {
    typeStack.push(type);
  }
  const props: string[] = [];
  for (const property of properties) {
    // TODO: Do we need to also add headers in the result type?
    const propertyFullName = `${propertyPath}.${property.restApiName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.coreTypeInfo === "ErrorType") {
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else if (typeStack.includes(property.type)) {
        const isSpecialModel = isSpecialUnionVariant(property.type);
        definition = `"${property.clientName}": ${
          !property.optional
            ? `${propertyFullName}${isSpecialModel ? " as any" : ""}`
            : `!${propertyFullName} ? undefined : ${propertyFullName}${
                isSpecialModel ? " as any" : ""
              }`
        }`;
      } else if (isSpecialHandledUnion(property.type)) {
        const nullOrUndefinedPrefix = getPropertySerializationPrefix(
          property,
          propertyPath
        );
        if (
          property.type.type === "model" &&
          property.type.tcgcType?.kind === "dict"
        ) {
          property;
        }
        const deserializeFunctionName =
          buildModelDeserializer(
            context,
            property.type.tcgcType!,
            false,
            true
          ) ?? "";
        definition = `"${property.clientName}": ${nullOrUndefinedPrefix}${deserializeFunctionName}(${propertyFullName})`;
      } else {
        if (
          property.type.type === "model" &&
          property.type.tcgcType?.kind === "dict"
        ) {
          property;
        }
        const deserializeFunctionName =
          buildModelDeserializer(
            context,
            property.type.tcgcType!,
            false,
            true
          ) ?? "";
        const propertyRootPath = `${propertyPath}.${property.restApiName}`;
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${deserializeFunctionName}(${propertyRootPath})`;
      }

      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.restApiName}"]`;
      if (typeStack.includes(property.type)) {
        const isSpecialModel = isSpecialUnionVariant(property.type);
        props.push(
          `"${property.clientName}": ${
            !property.optional
              ? `${propertyFullName}${isSpecialModel ? " as any" : ""}`
              : `!${propertyFullName} ? undefined : ${propertyFullName}${
                  isSpecialModel ? " as any" : ""
                }`
          }`
        );
      } else {
        const deserializeFunctionName =
          buildModelDeserializer(
            context,
            property.type.tcgcType!,
            false,
            true
          ) ?? "";
        props.push(
          `"${property.clientName}": ${deserializeFunctionName}(${restValue})`
        );
      }
    }
  }

  typeStack.pop();
  return props;
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
export function serializeRequestValue(
  type: Type,
  clientValue: string,
  required: boolean,
  typeStack: Type[] = [],
  format?: string
): string {
  const getSdkType = useSdkTypes();
  const dependencies = useDependencies();
  const requiredPrefix =
    required === false ? `${clientValue} === undefined` : "";
  const nullablePrefix = isTypeNullable(type) ? `${clientValue} === null` : "";
  const requiredOrNullablePrefix =
    requiredPrefix !== "" && nullablePrefix !== ""
      ? `(${requiredPrefix} || ${nullablePrefix})`
      : `${requiredPrefix}${nullablePrefix}`;
  switch (type.type) {
    case "datetime":
      switch (type.format ?? format) {
        case "rfc7231":
        case "headerDefault":
          return `${clientValue}${required ? "" : "?"}.toUTCString()`;
        case "unixTimestamp":
          return `${clientValue}${required ? "" : "?"}.getTime()`;
        case "rfc3339":
        default:
          return `${getNullableCheck(clientValue, type)} ${clientValue}${
            required ? "" : "?"
          }.toISOString()`;
      }
    case "list": {
      const prefix =
        required && !isTypeNullable(type)
          ? `${clientValue}`
          : `${requiredOrNullablePrefix}? ${clientValue}: ${clientValue}`;
      if (type.elementType?.type === "model" && !type.elementType.aliasType) {
        const elementNullOrUndefinedPrefix =
          isTypeNullable(type.elementType) || type.elementType.optional
            ? "!p ? p :"
            : "";
        if (!type.elementType.name) {
          // If it is an anonymous model we need to serialize inline
          const { propertiesStr } = getRequestModelMapping(
            type.elementType,
            "p",
            [...typeStack, type.elementType]
          );

          return `${prefix}.map(p => { return ${elementNullOrUndefinedPrefix}{${propertiesStr}}})`;
        } else {
          const sdkModel = getSdkType(type.elementType.__raw!);
          const serializerRefkey = refkey(sdkModel, "serializer");
          const serializerReference = resolveReference(serializerRefkey);
          // When it is not anonymous we can hand it off to the serializer function
          return `${prefix}.map(${serializerReference})`;
        }
      } else if (
        needsDeserialize(type.elementType) &&
        !type.elementType?.aliasType
      ) {
        return `${prefix}.map(p => ${serializeRequestValue(
          type.elementType!,
          "p",
          true,
          [...typeStack, type.elementType!],
          type.elementType?.format
        )})`;
      } else if (
        type.elementType?.type === "model" &&
        isPolymorphicUnion(type.elementType)
      ) {
        let nullOrUndefinedPrefix = "";
        if (isTypeNullable(type.elementType)) {
          nullOrUndefinedPrefix = `!p ? p :`;
        }
        const serializeFunctionName = type.elementType?.name
          ? `${toCamelCase(type.elementType.name)}Serializer`
          : getDeserializeFunctionName(type.elementType, "serialize");
        return `${prefix}.map(p => ${nullOrUndefinedPrefix}${serializeFunctionName}(p))`;
      } else {
        return clientValue;
      }
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
          : `${clientValue} !== undefined ? ${uint8ArrayToStringReference}(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }"): undefined`;
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

function needsDeserialize(type?: Type) {
  return (
    type?.type === "datetime" ||
    type?.type === "model" ||
    type?.type === "list" ||
    type?.type === "byte-array"
  );
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
    fullName = `${propertyPath}.${modularType.clientName}`;
  }
  return fullName;
}

export function isDiscriminatedUnion(type?: SdkType): type is SdkModelType {
  if (!type) {
    return false;
  }

  return Boolean(
    type.kind === "model" &&
      type.discriminatorProperty &&
      type.discriminatedSubtypes
  );
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
