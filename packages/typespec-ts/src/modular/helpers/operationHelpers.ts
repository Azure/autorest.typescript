import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { toPascalCase } from "../../casingUtils.js";
import {
  BodyParameter,
  Operation,
  Parameter,
  Property,
  Type
} from "../modularCodeModel.js";
import { buildType } from "./typeHelpers.js";

/**
 * This operation builds and returns the function declaration for an operation.
 */
export function getOperationFunction(
  operation: Operation
): OptionalKind<FunctionDeclarationStructure> {
  const optionsType = getOperationOptionsName(operation);
  // Extract required parameters
  let parameters: OptionalKind<ParameterDeclarationStructure>[] = [];

  if (operation.bodyParameter?.type.type === "model") {
    parameters = (operation.bodyParameter?.type.properties ?? [])
      .filter((p) => !p.optional)
      .map((p) => buildType(p.clientName, p.type));
  } else if (operation.bodyParameter?.type.type === "list") {
    const bodyArray = operation.bodyParameter;
    parameters.push(buildType(bodyArray.clientName, bodyArray.type));
  }

  parameters = parameters.concat(
    operation.parameters
      .filter(
        (p) =>
          p.implementation === "Method" &&
          p.type.type !== "constant" &&
          p.clientDefaultValue === undefined &&
          !p.optional
      )
      .map((p) => buildType(p.clientName, p.type))
  );

  // Add context as the first parameter
  parameters.unshift({ name: "context", type: "Client" });

  // Add the options parameter
  parameters.push({
    name: "options",
    type: optionsType,
    initializer: "{ requestOptions: {} }"
  });

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  const returnType =
    response?.type?.type === "model"
      ? buildType(response.type.name, response.type)
      : { name: "", type: "void" };

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    docs: [operation.description],
    isAsync: true,
    isExported: true,
    name: operation.name,
    parameters,
    returnType: `Promise<${returnType.type}>`
  };

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();

  const statements: string[] = [];
  statements.push(
    `const result = await context.path("${operationPath}", ${getPathParameters(
      operation
    )}).${operationMethod}({${getRequestParameters(operation)}});`
  );

  statements.push(`if(isUnexpected(result)){`, "throw result.body", "}");

  if (!response?.type?.properties) {
    statements.push(`return;`);
  } else {
    statements.push(
      `return {`,
      getResponseMapping(response.type.properties ?? []).join(","),
      `}`
    );
  }
  return {
    ...functionStatement,
    statements
  };
}

export function getOperationOptionsName(operation: Operation) {
  return `${toPascalCase(operation.groupName)}${toPascalCase(
    operation.name
  )}Options`;
}

/**
 * This function build the request parameters that we will provide to the
 * RLC internally. This will translate High Level parameters into the RLC ones.
 * Figuring out what goes in headers, body, path and qsp.
 */
function getRequestParameters(operation: Operation): string {
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
      parametersImplementation[param.location].push(getParameterMap(param));
    }
  }

  let paramStr = "";

  if (contentTypeParameter) {
    paramStr = `${getContentTypeValue(contentTypeParameter)},`;
  }

  if (parametersImplementation.header.length) {
    paramStr = `${paramStr}\nheaders: {${parametersImplementation.header.join(
      ",\n"
    )}, ...options.requestOptions?.headers},`;
  }

  if (parametersImplementation.query.length) {
    paramStr = `${paramStr}\nqueryParameters: {${parametersImplementation.query.join(
      ",\n"
    )}},`;
  }

  paramStr = `${paramStr}${buildBodyParameter(operation.bodyParameter)}`;

  return paramStr;
}

function buildBodyParameter(bodyParameter: BodyParameter | undefined) {
  if (!bodyParameter) {
    return "";
  }

  if (bodyParameter.type.type === "model") {
    const bodyParts: string[] = [];
    for (const param of bodyParameter?.type.properties?.filter(
      (p) => !p.readonly
    ) ?? []) {
      bodyParts.push(getParameterMap(param));
    }

    if (bodyParameter && bodyParameter.type.properties) {
      return `\nbody: {${bodyParts.join(",\n")}},`;
    }
  }

  if (bodyParameter.type.type === "list") {
    return `\nbody: ${bodyParameter.clientName},`;
  }

  return "";
}

/**
 * This function helps with renames, translating client names to rest api names
 */
function getParameterMap(param: Parameter | Property) {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (isOptionalWithouDefault(param)) {
    return getOptionalWithoutDefault(param);
  }

  if (isOptionalWithDefault(param)) {
    return getOptionalWithDefault(param);
  }

  if (isRequired(param)) {
    return getRequired(param);
  }

  throw new Error(`Parameter ${param.clientName} is not supported`);
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
    return `contentType: (options.${param.clientName} as any) ?? "${defaultValue}"`;
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

function getRequired(param: RequiredType) {
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

type OptionalWithoutDefaultType = (Parameter | Property) & {
  type: { optional: true; clientDefaultValue: never };
};
function isOptionalWithouDefault(
  param: Parameter | Property
): param is OptionalWithoutDefaultType {
  return Boolean(param.optional && !param.clientDefaultValue);
}
function getOptionalWithoutDefault(param: OptionalWithoutDefaultType) {
  return `...(options.${param.clientName} && {"${param.restApiName}": options.${param.clientName}})`;
}

type OptionalWithDefaultType = (Parameter | Property) & {
  type: { optional: true; clientDefaultValue: string };
};
function isOptionalWithDefault(
  param: Parameter | Property
): param is OptionalWithDefaultType {
  return Boolean(param.clientDefaultValue);
}

function getOptionalWithDefault(param: OptionalWithDefaultType) {
  return `"${param.restApiName}": options.${
    param.clientName
  } ?? ${getQuotedValue(param)}`;
}

function getQuotedValue(param: OptionalWithDefaultType) {
  if (param.type.type === "string") {
    return `"${param.clientDefaultValue}"`;
  } else {
    return param.clientDefaultValue;
  }
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
        pathParams = `${pathParams} ${param.clientName},`;
        continue;
      }

      const defaultValue = getDefaultValue(param);

      pathParams = `${pathParams}, options.${param.clientName}`;

      if (defaultValue) {
        pathParams = ` ?? "${defaultValue}"`;
      }
      pathParams = `${pathParams},`;
    }
  }

  return pathParams;
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
function getResponseMapping(
  properties: Property[],
  propertyPath: string = "result.body"
) {
  const props: string[] = [];
  for (const property of properties) {
    // TODO: Do we need to also add headers in the result type?
    if (property.type.type === "model") {
      props.push(
        `"${property.restApiName}": ${
          !property.optional
            ? ""
            : `!${propertyPath}.${property.clientName} ? undefined :`
        } {${getResponseMapping(
          property.type.properties ?? [],
          `${propertyPath}.${property.restApiName}${
            property.optional ? "?" : ""
          }`
        )}}`
      );
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.restApiName}"]`;
      props.push(
        `"${property.clientName}": ${deserializeResponseValue(
          property.type,
          restValue
        )}`
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
function deserializeResponseValue(type: Type, restValue: string): string {
  switch (type.type) {
    case "datetime":
      return `new Date(${restValue} ?? "")`;
    case "list":
      if (type.elementType?.type === "model") {
        return `(${restValue} ?? []).map(p => ({${getResponseMapping(
          type.elementType?.properties ?? [],
          "p"
        )}}))`;
      } else if (
        type.elementType?.properties?.some((p) => needsDeserialize(p.type))
      ) {
        return `(${restValue} ?? []).map(p => ${deserializeResponseValue(
          type.elementType!,
          "p"
        )})`;
      } else {
        return restValue;
      }

    default:
      return restValue;
  }
}

function needsDeserialize(type?: Type) {
  return type?.type === "datetime" || type?.type === "model";
}
