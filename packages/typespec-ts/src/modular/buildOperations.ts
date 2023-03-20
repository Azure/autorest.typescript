import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure,
  Project,
  SourceFile
} from "ts-morph";
import { toPascalCase } from "../casingUtils.js";
import { getType } from "./helpers/getType.js";
import {
  Client,
  Operation,
  Parameter,
  Property,
  Type
} from "./modularCodeModel.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  client: Client,
  project: Project,
  srcPath: string = "src"
) {
  for (const operationGroup of client.operationGroups) {
    const fileName = operationGroup.className
      ? `${operationGroup.className}`
      : // When the program has no operation groups defined all operations are put
        // into a nameless operation group. We'll call this operations.
        "operations";

    const operationGroupFile = project.createSourceFile(
      `${srcPath}/src/api/${fileName}.ts`
    );

    operationGroup.operations.forEach((o) => {
      const optionsName = buildOperationOptions(o, operationGroupFile);
      const operationDeclaration = getOperationFunction(o, optionsName);
      operationGroupFile.addFunction(operationDeclaration);
    });

    operationGroupFile.addImportDeclarations([
      {
        moduleSpecifier: "../rest/index.js",
        namedImports: [`${client.name}Context as Client`, "isUnexpected"]
      }
    ]);

    // Import models used from ./models.ts
    importModels(operationGroupFile, project);
    operationGroupFile.fixMissingImports();
  }
}

function importModels(sourceFile: SourceFile, project: Project) {
  const modelsFile = project.getSourceFile("models.ts");
  const models: string[] = [];

  for (const entry of modelsFile?.getExportedDeclarations().entries() ?? []) {
    models.push(entry[0]);
  }

  sourceFile.addImportDeclaration({
    moduleSpecifier: "./models.js",
    namedImports: models
  });

  // Import all models and then let ts-morph clean up the unused ones
  sourceFile.fixUnusedIdentifiers();
}

/**
 * This operation builds and returns the function declaration for an operation.
 */
export function getOperationFunction(
  operation: Operation,
  optionsType: string
): OptionalKind<FunctionDeclarationStructure> {
  // Extract required parameters
  let parameters: OptionalKind<ParameterDeclarationStructure>[] = (
    operation.bodyParameter?.type.properties ?? []
  )
    .filter((p) => !p.optional)
    .map((p) => buildParameterType(p.clientName, p.type));

  parameters = parameters.concat(
    operation.parameters
      .filter(
        (p) =>
          p.implementation === "Method" &&
          p.type.type !== "constant" &&
          !p.optional
      )
      .map((p) => buildParameterType(p.clientName, p.type))
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
      ? buildParameterType(response.type.name, response.type)
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
    (p) => p.implementation !== "Client"
  );

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

  for (const param of operation.bodyParameter?.type.properties?.filter(
    (p) => !p.readonly
  ) ?? []) {
    parametersImplementation.body.push(getParameterMap(param));
  }

  let paramStr = "";

  if (parametersImplementation.header.length) {
    paramStr = `${paramStr}\nheaders: {${parametersImplementation.header.join(
      "\n"
    )}...options.requestOptions?.headers},`;
  }

  if (parametersImplementation.query.length) {
    paramStr = `${paramStr}\nqueryParameters: {${parametersImplementation.query.join(
      "\n"
    )}},`;
  }

  if (operation.bodyParameter && operation.bodyParameter.type.properties) {
    paramStr = `${paramStr}\nbody: {${parametersImplementation.body.join(
      "\n"
    )}},`;
  }

  return paramStr;
}

/**
 * This function helps with renames, translating client names to rest api names
 */
function getParameterMap(param: Parameter | Property) {
  const defaultValue = getDefaultValue(param);

  if (param.optional || (param.type.type === "constant" && !defaultValue)) {
    return `...(options.${param.clientName} && {"${
      param.restApiName
    }": ${`options.${param.clientName}})`},`;
  }

  return `"${param.restApiName}": ${
    param.optional
      ? `options.${param.clientName} ${defaultValue}`
      : param.type.type === "constant"
      ? `${defaultValue}`
      : param.clientName
  },`;
}

/**
 * This function generates the interfaces for each operation options
 */
export function buildOperationOptions(
  operation: Operation,
  sourceFile: SourceFile
) {
  const optionalParameters = operation.parameters.filter((p) => p.optional);
  const optionalBodyParams = (
    operation.bodyParameter?.type.properties ?? []
  ).filter((p) => p.optional);
  const options = [...optionalBodyParams, ...optionalParameters];

  const name = toPascalCase(`${operation.groupName}${operation.name}Options`);

  sourceFile.addInterface({
    name,
    isExported: true,
    extends: ["RequestOptions"],
    properties: options.map((p) => {
      return {
        docs: [p.description],
        hasQuestionToken: true,
        ...buildParameterType(p.clientName, p.type)
      };
    })
  });

  return name;
}

function buildParameterType(
  clientName: string | undefined,
  type: Type | undefined
) {
  if (!type) {
    throw new Error("Type should be defined");
  }

  let typeMetadata = getType(type);
  let typeName = typeMetadata.name;
  if (typeMetadata.modifier === "Array") {
    typeName = `${typeName}[]`;
  }
  return { name: clientName ?? "", type: typeName };
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
