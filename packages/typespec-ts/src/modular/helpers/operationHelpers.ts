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
  Imports as RuntimeImports,
  NameType,
  OperationResponse,
  getResponseBaseName,
  getResponseTypeName,
  normalizeName
} from "@azure-tools/rlc-common";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getFixmeForMultilineDocs,
  getDocsFromDescription
} from "./docsHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo
} from "../../utils/operationUtil.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { Program, NoTarget } from "@typespec/compiler";
import { reportDiagnostic } from "../../lib.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";

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
  dpgContext: SdkContext,
  operation: Operation,
  clientType: string,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): OptionalKind<FunctionDeclarationStructure> {
  const parameters = getOperationSignatureParameters(operation, clientType);
  const { name } = getOperationName(operation);
  const returnType = `StreamableMethod<${getRLCResponseType(
    operation.rlcResponse
  )}>`;

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType
  };

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();

  const statements: string[] = [];
  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      operation
    )}).${operationMethod}({...operationOptionsToRequestParameters(options), ${getRequestParameters(
      dpgContext,
      operation,
      importSet,
      runtimeImports
    )}}) ${operation.isOverload ? `as ${returnType}` : ``} ;`
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
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
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
          .map((s) => `result.status !== "${s}"`)
          .join(" || ")}){`,
        "throw result.body",
        "}"
      );
    }
  }

  if (response?.type?.type === "any" || response.isBinaryPayload) {
    statements.push(`return result.body`);
  } else if (getAllProperties(response?.type).length > 0) {
    statements.push(
      `return {`,
      getResponseMapping(
        getAllProperties(response.type) ?? [],
        "result.body",
        importSet,
        runtimeImports
      ).join(","),
      `}`
    );
  } else if (returnType.type === "void") {
    statements.push(`return;`);
  } else {
    statements.push(
      `return ${deserializeResponseValue(
        response.type,
        "result.body",
        importSet,
        runtimeImports,
        response.type.nullable !== undefined ? !response.type.nullable : false,
        response.type.format
      )}`
    );
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
    parameters.set(
      operation.bodyParameter?.clientName,
      buildType(
        operation.bodyParameter.clientName,
        operation.bodyParameter.type,
        operation.bodyParameter.type.format
      )
    );
  }
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
    ? buildType(response.type.name, response.type, response.type.format)
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
  const prefix =
    includeGroupName && operation.name.indexOf("_") === -1
      ? getClassicalLayerPrefix(operation, NameType.Interface)
      : "";
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
  dpgContext: SdkContext,
  operation: Operation,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
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
        paramMap: getParameterMap(param, importSet, runtimeImports),
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
    paramStr = `${paramStr}${buildBodyParameter(
      operation.bodyParameter,
      importSet,
      runtimeImports
    )}`;
  }
  return paramStr;
}

// Specially handle the type for headers because we only allow string/number/boolean values
function buildHeaderParameter(
  program: Program,
  paramMap: string,
  param: Parameter
): string {
  if (!param.optional && param.type.nullable === true) {
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
  if (param.type.nullable === true) {
    conditions.push(`options?.${param.clientName} !== null`);
  }
  return conditions.length > 0
    ? `...(${conditions.join(" && ")} ? {${paramMap}} : {})`
    : paramMap;
}

function buildBodyParameter(
  bodyParameter: BodyParameter | undefined,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (!bodyParameter) {
    return "";
  }

  if (bodyParameter.type.type === "model") {
    const bodyParts: string[] = getRequestModelMapping(
      bodyParameter.type,
      bodyParameter.clientName,
      importSet,
      runtimeImports
    );

    if (bodyParameter && bodyParts.length > 0) {
      return `\nbody: {${bodyParts.join(",\n")}},`;
    }
  }

  if (bodyParameter.type.type === "list") {
    if (bodyParameter.type.elementType?.type === "model") {
      const bodyParts = getRequestModelMapping(
        bodyParameter.type.elementType,
        "p",
        importSet,
        runtimeImports
      );
      return `\nbody: (${bodyParameter.clientName} ?? []).map((p) => { return {
        ${bodyParts.join(", ")}
      };}),`;
    }
    return `\nbody: ${bodyParameter.clientName},`;
  }

  if (
    bodyParameter.type.type === "byte-array" &&
    !bodyParameter.isBinaryPayload
  ) {
    const specifier = getImportSpecifier("coreUtil", runtimeImports);
    const coreUtilSet = importSet.get(specifier);
    if (!coreUtilSet) {
      importSet.set(specifier, new Set<string>().add("uint8ArrayToString"));
    } else {
      coreUtilSet.add("uint8ArrayToString");
    }
    return bodyParameter.optional
      ? `body: typeof ${bodyParameter.clientName} === 'string'
    ? uint8ArrayToString(${bodyParameter.clientName}, "${getEncodingFormat(
          bodyParameter.type
        )}")
    : ${bodyParameter.clientName}`
      : `body: uint8ArrayToString(${
          bodyParameter.clientName
        }, "${getEncodingFormat(bodyParameter.type)}")`;
  } else if (bodyParameter.isBinaryPayload) {
    return `\nbody: ${bodyParameter.clientName},`;
  }

  return "";
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
function getParameterMap(
  param: Parameter | Property,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): string {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(param as Parameter, importSet, runtimeImports);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(param, importSet, runtimeImports);
  }

  if (isRequired(param)) {
    return getRequired(param, importSet, runtimeImports);
  }

  throw new Error(`Parameter ${param.clientName} is not supported`);
}

function getCollectionFormat(
  param: Parameter,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
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
      importSet,
      runtimeImports,
      true,
      param.format
    )}${additionalParam})`;
  }
  return `"${param.restApiName}": options?.${
    param.clientName
  } !== undefined ? ${collectionInfo}(${serializeRequestValue(
    param.type,
    "options?." + param.clientName,
    importSet,
    runtimeImports,
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

function getRequired(
  param: RequiredType,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": {${getRequestModelMapping(
      param.type,
      param.clientName,
      importSet,
      runtimeImports
    ).join(",")}}`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    param.type,
    param.clientName,
    importSet,
    runtimeImports,
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

function getOptional(
  param: OptionalType,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": {${getRequestModelMapping(
      param.type,
      "options?." + param.clientName + "?",
      importSet,
      runtimeImports
    ).join(", ")}}`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    param.type,
    `options?.${param.clientName}`,
    importSet,
    runtimeImports,
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
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (getAllProperties(modelPropertyType).length <= 0) {
    return [];
  }
  const props: string[] = [];
  const properties: Property[] = getAllProperties(modelPropertyType) ?? [];
  for (const property of properties) {
    if (property.readonly) {
      continue;
    }
    const propertyFullName = `${propertyPath}.${property.clientName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.isCoreErrorType) {
        definition = `"${property.restApiName}": ${getNullableCheck(
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
        definition = `"${property.restApiName}": ${
          !property.optional
            ? `${propertyFullName} as any`
            : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
        }`;
      } else {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } {${getRequestModelMapping(
          property.type,
          `${propertyPath}.${property.clientName}${
            property.optional ? "?" : ""
          }`,
          importSet,
          runtimeImports
        )}}`;
      }

      props.push(definition);
    } else if (
      (property.restApiName === "message" ||
        property.restApiName === "messages") &&
      (property.type.name === "ChatMessage" ||
        property.type.elementType?.name === "ChatMessage")
    ) {
      const definition = `"${property.restApiName}": ${
        !property.optional
          ? `${propertyFullName} as any`
          : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
      }`;
      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const clientValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.clientName}"]`;
      props.push(
        `"${property.restApiName}": ${serializeRequestValue(
          property.type,
          clientValue,
          importSet,
          runtimeImports,
          !property.optional,
          property.format
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
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
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
          getAllProperties(property.type) ?? [],
          `${propertyPath}.${property.restApiName}${
            property.optional ? "?" : ""
          }`,
          importSet,
          runtimeImports
        )}}`;
      }

      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.restApiName}"]`;
      if (
        (property.restApiName === "message" ||
          property.restApiName === "messages") &&
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
            runtimeImports,
            property.optional !== undefined ? !property.optional : false,
            property.format
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
  runtimeImports: RuntimeImports,
  required: boolean,
  format?: string
): string {
  const coreSpecifier = getImportSpecifier("coreUtil", runtimeImports);
  const coreUtilSet = importSet.get(coreSpecifier);
  switch (type.type) {
    case "datetime":
      return required
        ? type.nullable
          ? `${restValue} === null ? null : new Date(${restValue})`
          : `new Date(${restValue})`
        : `${restValue} !== undefined? new Date(${restValue}): undefined`;
    case "combined":
      return `${restValue} as any`;
    case "list": {
      const prefix =
        required && !type.nullable
          ? `${restValue}`
          : `!${restValue} ? ${restValue} : ${restValue}`;
      if (type.elementType?.type === "model") {
        return `${prefix}.map(p => ({${getResponseMapping(
          getAllProperties(type.elementType) ?? [],
          "p",
          importSet,
          runtimeImports
        )}}))`;
      } else if (needsDeserialize(type.elementType)) {
        return `${prefix}.map(p => ${deserializeResponseValue(
          type.elementType!,
          "p",
          importSet,
          runtimeImports,
          required,
          type.elementType?.format
        )})`;
      } else {
        return restValue;
      }
    }
    case "byte-array":
      if (format !== "binary") {
        if (!coreUtilSet) {
          importSet.set(
            coreSpecifier,
            new Set<string>().add("stringToUint8Array")
          );
        } else {
          coreUtilSet.add("stringToUint8Array");
        }
        return `typeof ${restValue} === 'string'
        ? stringToUint8Array(${restValue}, "${format ?? "base64"}")
        : ${restValue}`;
      }
      return restValue;
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
  clientValue: string,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports,
  required: boolean,
  format?: string
): string {
  const utilSpecifier = getImportSpecifier("coreUtil", runtimeImports);
  const coreUtilSet = importSet.get(utilSpecifier);
  switch (type.type) {
    case "datetime":
      switch (type.format ?? format) {
        case "date":
          return `${clientValue}${required ? "" : "?"}.toDateString()`;
        case "time":
          return `${clientValue}${required ? "" : "?"}.toTimeString()`;
        case "rfc7231":
        case "headerDefault":
          return `${clientValue}${required ? "" : "?"}.toUTCString()`;
        case "unixTimestamp":
          return `${clientValue}${required ? "" : "?"}.getTime()`;
        case "rfc3339":
        default:
          return `${clientValue}${required ? "" : "?"}.toISOString()`;
      }
    case "list": {
      const prefix =
        required && !type.nullable
          ? `${clientValue}`
          : `!${clientValue} ? ${clientValue} : ${clientValue}`;
      if (type.elementType?.type === "model") {
        return `${prefix}.map(p => ({${getRequestModelMapping(
          type.elementType,
          "p",
          importSet,
          runtimeImports
        )}}))`;
      } else if (needsDeserialize(type.elementType)) {
        return `${prefix}.map(p => ${serializeRequestValue(
          type.elementType!,
          "p",
          importSet,
          runtimeImports,
          required,
          type.elementType?.format
        )})`;
      } else {
        return clientValue;
      }
    }
    case "byte-array":
      if (format !== "binary") {
        if (!coreUtilSet) {
          importSet.set(
            utilSpecifier,
            new Set<string>().add("uint8ArrayToString")
          );
        } else {
          coreUtilSet.add("uint8ArrayToString");
        }
        return required
          ? `uint8ArrayToString(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }")`
          : `${clientValue} !== undefined ? uint8ArrayToString(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }"): undefined`;
      }
      return clientValue;
    default:
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

function getAllProperties(type: Type): Property[] {
  const propertiesMap: Map<string, Property> = new Map();
  if (!type) {
    return [];
  }
  type.parents?.forEach((p) => {
    getAllProperties(p).forEach((prop) => {
      propertiesMap.set(prop.clientName, prop);
    });
  });
  type.properties?.forEach((p) => {
    propertiesMap.set(p.clientName, p);
  });
  return [...propertiesMap.values()];
}
