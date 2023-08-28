import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { toPascalCase } from "../../utils/casingUtils.js";
import {
  BodyParameter,
  ModularCodeModel,
  Operation,
  Parameter,
  Property,
  Type
} from "../modularCodeModel.js";
import { buildType } from "./typeHelpers.js";
import {
  NameType,
  OperationResponse,
  getResponseBaseName,
  getResponseTypeName,
  normalizeName
} from "@azure-tools/rlc-common";
import { getOperationName } from "./namingHelpers.js";
import {
  getFixmeForMultilineDocs,
  getDocsFromDescription
} from "./docsHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo
} from "../../utils/operationUtil.js";

function getRLCResponseType(rlcResponse?: OperationResponse) {
  if (!rlcResponse?.responses) {
    return;
  }
  return rlcResponse?.responses
    .map((resp) => {
      const baseResponseName = getResponseBaseName(
        rlcResponse.operationGroup,
        rlcResponse.operationName,
        resp.statusCode
      );
      // Get the information to build the Response Interface
      return resp.predefinedName ?? getResponseTypeName(baseResponseName);
    })
    .join(" | ");
}

export function getSendPrivateFunction(
  operation: Operation,
  clientType: string,
  importSet: Map<string, Set<string>>
): OptionalKind<FunctionDeclarationStructure> {
  const parameters = getOperationSignatureParameters(operation, clientType);
  const { name } = getOperationName(operation);

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType: `StreamableMethod<${getRLCResponseType(operation.rlcResponse)}>`
  };

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();

  const statements: string[] = [];
  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      operation
    )}).${operationMethod}({...operationOptionsToRequestParameters(options), ${getRequestParameters(
      operation,
      importSet
    )}});`
  );

  return {
    ...functionStatement,
    statements
  };
}

export function getDeserializePrivateFunction(
  operation: Operation,
  needSubClient: boolean,
  needUnexpectedHelper: boolean,
  importSet: Map<string, Set<string>>
): OptionalKind<FunctionDeclarationStructure> {
  const { name } = getOperationName(operation);

  const parameters: OptionalKind<ParameterDeclarationStructure>[] = [
    {
      name: "result",
      type: getRLCResponseType(operation.rlcResponse)
    }
  ];

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType;
  if (response?.type?.type) {
    returnType = buildType(response.type.name, response.type);
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
  if (needUnexpectedHelper) {
    statements.push(
      `if(${needSubClient ? "UnexpectedHelper." : ""}isUnexpected(result)){`,
      "throw result.body",
      "}"
    );
  } else {
    const validStatus = [
      ...new Set(
        operation.responses
          .flatMap((r) => r.statusCodes)
          .filter((s) => s !== "default")
      )
    ];

    if (validStatus.length > 0) {
      statements.push(
        `if(${validStatus
          .map((s) => `"${s}" !== result.status`)
          .join(" || ")}){`,
        "throw result.body",
        "}"
      );
    }
  }

  if (response?.type?.type === "any") {
    statements.push(`return result.body`);
  } else if (response?.type?.elementType) {
    statements.push(
      `return ${deserializeResponseValue(
        response.type,
        "result.body",
        importSet,
        response.type.nullable !== undefined ? !response.type.nullable : false
      )}`
    );
  } else if (response?.type?.properties) {
    statements.push(
      `return {`,
      getResponseMapping(
        response.type.properties ?? [],
        "result.body",
        importSet
      ).join(","),
      `}`
    );
  } else if (returnType.type === "void") {
    statements.push(`return;`);
  } else {
    statements.push(`return result.body;`);
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
  const optionsType = getOperationOptionsName(operation);
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();
  if (operation.bodyParameter?.type.type === "model") {
    (operation.bodyParameter?.type.properties ?? [])
      .filter((p) => !p.optional)
      .filter((p) => !p.readonly)
      .map((p) => buildType(p.clientName, p.type))
      .forEach((p) => parameters.set(p.name, p));
  } else if (operation.bodyParameter?.type.type === "list") {
    const bodyArray = operation.bodyParameter;
    parameters.set(
      bodyArray.clientName,
      buildType(bodyArray.clientName, bodyArray.type)
    );
  } else if (operation.bodyParameter?.type.type === "byte-array") {
    parameters.set(
      operation.bodyParameter.clientName,
      buildType(
        operation.bodyParameter.clientName,
        operation.bodyParameter.type
      )
    );
  }

  operation.parameters
    .filter(
      (p) =>
        p.implementation === "Method" &&
        p.type.type !== "constant" &&
        p.clientDefaultValue === undefined &&
        !p.optional
    )
    .map((p) => buildType(p.clientName, p.type))
    .forEach((p) => {
      parameters.set(p.name, p);
    });

  // Add context as the first parameter
  const contextParam = { name: "context", type: clientType };

  // Add the options parameter
  const optionsParam = {
    name: "options",
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
): OptionalKind<FunctionDeclarationStructure> {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  const returnType = response?.type?.type
    ? buildType(response.type.name, response.type)
    : { name: "", type: "void" };

  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    docs: [
      ...getDocsFromDescription(operation.description),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: true,
    isExported: true,
    name: normalizeName(operation.name, NameType.Operation, true),
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

export function getOperationOptionsName(
  operation: Operation,
  includeGroupName = false
) {
  const prefix = includeGroupName ? toPascalCase(operation.groupName) : "";
  const optionName = `${prefix}${toPascalCase(operation.name)}Options`;
  if (operation.bodyParameter?.type.name === optionName) {
    return optionName.replace(/Options$/, "RequestOptions");
  }
  return optionName;
}

/**
 * This function build the request parameters that we will provide to the
 * RLC internally. This will translate High Level parameters into the RLC ones.
 * Figuring out what goes in headers, body, path and qsp.
 */
function getRequestParameters(
  operation: Operation,
  importSet: Map<string, Set<string>>
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
    string[]
  > = {
    header: [],
    query: [],
    body: []
  };

  for (const param of operationParameters) {
    if (param.location === "header" || param.location === "query") {
      parametersImplementation[param.location].push(
        getParameterMap(param, importSet)
      );
    }
  }

  let paramStr = "";

  if (contentTypeParameter) {
    paramStr = `${getContentTypeValue(contentTypeParameter)},`;
  }

  if (parametersImplementation.header.length) {
    paramStr = `${paramStr}\nheaders: {${parametersImplementation.header.join(
      ",\n"
    )}},`;
  }

  if (parametersImplementation.query.length) {
    paramStr = `${paramStr}\nqueryParameters: {${parametersImplementation.query.join(
      ",\n"
    )}},`;
  }

  paramStr = `${paramStr}${buildBodyParameter(
    operation.bodyParameter,
    importSet
  )}`;

  return paramStr;
}

function buildBodyParameter(
  bodyParameter: BodyParameter | undefined,
  importSet: Map<string, Set<string>>
) {
  if (!bodyParameter) {
    return "";
  }

  if (bodyParameter.type.type === "model") {
    const bodyParts: string[] = [];
    for (const param of bodyParameter?.type.properties?.filter(
      (p) => !p.readonly
    ) ?? []) {
      if (param.type.type === "model" && isRequired(param)) {
        bodyParts.push(
          `"${param.restApiName}": {${getRequestModelMapping(
            param.type,
            param.clientName,
            importSet
          ).join(",\n")}}`
        );
      } else {
        bodyParts.push(getParameterMap(param, importSet));
      }
    }

    if (bodyParameter && bodyParameter.type.properties) {
      return `\nbody: {${bodyParts.join(",\n")}},`;
    }
  }

  if (bodyParameter.type.type === "list") {
    if (bodyParameter.type.elementType?.type === "model") {
      const bodyParts = getRequestModelMapping(
        bodyParameter.type.elementType,
        "p",
        importSet
      );
      return `\nbody: (${bodyParameter.clientName} ?? []).map((p) => { return {
        ${bodyParts.join(", ")}
      };}),`;
    }
    return `\nbody: ${bodyParameter.clientName},`;
  }

  if (bodyParameter.type.type === "byte-array") {
    return `\nbody: ${bodyParameter.clientName},`;
  }

  return "";
}

/**
 * This function helps with renames, translating client names to rest api names
 */
function getParameterMap(
  param: Parameter | Property,
  importSet: Map<string, Set<string>>
): string {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(param as Parameter);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(param, importSet);
  }

  if (isRequired(param)) {
    return getRequired(param, importSet);
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
    return `"${param.restApiName}": ${collectionInfo}(${param.clientName}${additionalParam})`;
  }
  return `"${param.restApiName}": options?.${param.clientName} !== undefined ? ${collectionInfo}(options?.${param.clientName}${additionalParam}): undefined`;
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

  if (!defaultValue) {
    throw new Error(
      `Constant ${param.clientName} does not have a default value`
    );
  }

  if (defaultValue) {
    return `contentType: options.${param.clientName} as any ?? "${defaultValue}"`;
  } else {
    return `contentType: options.${param.clientName}`;
  }
}

type RequiredType = (Parameter | Property) & {
  type: { optional: false | undefined; value: string };
};

function isRequired(param: Parameter | Property): param is RequiredType {
  return !param.optional;
}

function getRequired(param: RequiredType, importSet: Map<string, Set<string>>) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": ${getRequestModelMapping(
      param.type,
      param.clientName,
      importSet
    ).join(",")}`;
  }
  return `"${param.restApiName}": ${param.clientName}`;
}

type ConstantType = (Parameter | Property) & {
  type: { type: "constant"; value: string };
};

function getConstantValue(param: ConstantType) {
  const defaultValue =
    param.clientDefaultValue ?? param.type.clientDefaultValue;

  if (!defaultValue) {
    throw new Error(
      `Constant ${param.clientName} does not have a default value`
    );
  }

  return `"${param.restApiName}": "${defaultValue}"`;
}

function isConstant(param: Parameter | Property): param is ConstantType {
  return (
    param.type.type === "constant" && param.clientDefaultValue !== undefined
  );
}

type OptionalType = (Parameter | Property) & {
  type: { optional: true };
};

function isOptional(param: Parameter | Property): param is OptionalType {
  return Boolean(param.optional);
}

function getOptional(param: OptionalType, importSet: Map<string, Set<string>>) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": {${getRequestModelMapping(
      param.type,
      "options?." + param.clientName + "?",
      importSet
    ).join(", ")}}`;
  }
  return `"${param.restApiName}": options?.${param.clientName}`;
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
  if (!type.nullable) {
    return "";
  }

  return `${name} === null ? null :`;
}

/**
 *
 * This function helps translating an HLC request to RLC request,
 * extracting properties from body and headers and building the RLC response object
 */
function getRequestModelMapping(
  modelPropertyType: Type,
  propertyPath: string = "body",
  importSet: Map<string, Set<string>>
) {
  if (!modelPropertyType.properties || !modelPropertyType.properties) {
    return [];
  }
  const props: string[] = [];
  const properties: Property[] = modelPropertyType.properties;
  for (const property of properties) {
    if (property.readonly) {
      continue;
    }
    const propertyFullName = `${propertyPath}.${property.restApiName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.isCoreErrorType) {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } {${getRequestModelMapping(
          property.type,
          `${propertyPath}.${property.restApiName}${
            property.optional ? "?" : ""
          }`,
          importSet
        )}}`;
      }

      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.clientName}"]`;
      props.push(
        `"${property.restApiName}": ${serializeRequestValue(
          property.type,
          restValue,
          importSet
        )}`
      );
    }
  }

  return props;
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
export function getResponseMapping(
  properties: Property[],
  propertyPath: string = "result.body",
  importSet: Map<string, Set<string>>
) {
  const props: string[] = [];
  for (const property of properties) {
    // TODO: Do we need to also add headers in the result type?
    const propertyFullName = `${propertyPath}.${property.restApiName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.isCoreErrorType) {
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else if (
        (property.restApiName === "message" ||
          property.restApiName === "messages") &&
        (property.type.name === "ChatMessage" ||
          property.type.elementType?.name === "ChatMessage")
      ) {
        definition = `"${property.clientName}": ${
          !property.optional
            ? `${propertyFullName} as any`
            : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
        }`;
      } else {
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } {${getResponseMapping(
          property.type.properties ?? [],
          `${propertyPath}.${property.restApiName}${
            property.optional ? "?" : ""
          }`,
          importSet
        )}}`;
      }

      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.restApiName}"]`;
      if (
        property.restApiName === "messages" &&
        (property.type.name === "ChatMessage" ||
          property.type.elementType?.name === "ChatMessage")
      ) {
        props.push(
          `"${property.clientName}": ${
            !property.optional
              ? `${propertyFullName} as any`
              : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
          }`
        );
      } else {
        props.push(
          `"${property.clientName}": ${deserializeResponseValue(
            property.type,
            restValue,
            importSet,
            property.optional !== undefined ? !property.optional : false
          )}`
        );
      }
    }
  }

  return props;
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
function deserializeResponseValue(
  type: Type,
  restValue: string,
  importSet: Map<string, Set<string>>,
  required: boolean
): string {
  const coreUtilSet = importSet.get("@azure/core-util");
  switch (type.type) {
    case "datetime":
      return required
        ? `new Date(${restValue})`
        : `${restValue} !== undefined? new Date(${restValue}): undefined`;
    case "combined":
      return `${restValue} as any`;
    case "list":
      if (type.elementType?.type === "model") {
        return `(${restValue} ?? []).map(p => ({${getResponseMapping(
          type.elementType?.properties ?? [],
          "p",
          importSet
        )}}))`;
      } else if (
        type.elementType?.properties?.some((p) => needsDeserialize(p.type))
      ) {
        return `(${restValue} ?? []).map(p => ${deserializeResponseValue(
          type.elementType!,
          "p",
          importSet,
          required
        )})`;
      } else {
        return restValue;
      }
    case "byte-array":
      if (!coreUtilSet) {
        importSet.set(
          "@azure/core-util",
          new Set<string>().add("stringToUint8Array")
        );
      } else {
        coreUtilSet.add("stringToUint8Array");
      }
      return `typeof ${restValue} === 'string'
      ? stringToUint8Array(${restValue}, "${type.format ?? "base64"}")
      : ${restValue}`;
    default:
      return restValue;
  }
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
function serializeRequestValue(
  type: Type,
  restValue: string,
  importSet: Map<string, Set<string>>
): string {
  const coreUtilSet = importSet.get("@azure/core-util");
  switch (type.type) {
    case "datetime":
      return `${restValue} !== undefined ? new Date(${restValue}): undefined`;
    case "list":
      if (type.elementType?.type === "model") {
        return `(${restValue} ?? []).map(p => ({${getRequestModelMapping(
          type.elementType,
          "p",
          importSet
        )}}))`;
      } else if (
        type.elementType?.properties?.some((p) => needsDeserialize(p.type))
      ) {
        return `(${restValue} ?? []).map(p => ${serializeRequestValue(
          type.elementType!,
          "p",
          importSet
        )})`;
      } else {
        return restValue;
      }
    case "byte-array":
      if (!coreUtilSet) {
        importSet.set(
          "@azure/core-util",
          new Set<string>().add("uint8ArrayToString")
        );
      } else {
        coreUtilSet.add("uint8ArrayToString");
      }
      return `${restValue} !== undefined ? uint8ArrayToString(${restValue}, "${
        type.format ?? "base64"
      }"): undefined`;
    default:
      return restValue;
  }
}

function needsDeserialize(type?: Type) {
  return type?.type === "datetime" || type?.type === "model";
}

export function hasLROOperation(codeModel: ModularCodeModel) {
  return (codeModel.clients ?? []).some((c) =>
    (c.operationGroups ?? []).some((og) =>
      (og.operations ?? []).some(
        (op) => op.discriminator === "lro" || op.discriminator === "lropaging"
      )
    )
  );
}

export function hasPagingOperation(codeModel: ModularCodeModel) {
  return (codeModel.clients ?? []).some((c) =>
    (c.operationGroups ?? []).some((og) =>
      (og.operations ?? []).some(
        (op) =>
          op.discriminator === "paging" || op.discriminator === "lropaging"
      )
    )
  );
}
