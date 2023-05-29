import { Project, SourceFile } from "ts-morph";
import { buildType } from "./helpers/typeHelpers.js";
import {
  getOperationFunction,
  getSendPrivateFunction,
  getDeserializePrivateFunction,
  getOperationOptionsName
} from "./helpers/operationHelpers.js";
import { Client, Operation } from "./modularCodeModel.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  client: Client,
  project: Project,
  srcPath: string = "src",
  subfolder: string = "",
  needUnexpectedHelper: boolean = true
) {
  for (const operationGroup of client.operationGroups) {
    const fileName = operationGroup.className
      ? `${operationGroup.className}`
      : // When the program has no operation groups defined all operations are put
        // into a nameless operation group. We'll call this operations.
        "operations";

    const operationGroupFile = project.createSourceFile(
      `${srcPath}/src/api/${
        subfolder && subfolder !== "" ? subfolder + "/" : ""
      }${fileName}.ts`
    );

    const namedImports: string[] = [];
    let clientType = "Client";
    let needSubClient = false;
    if (subfolder && subfolder !== "") {
      namedImports.push(`Client`);
      clientType = `Client.${client.name}Context`;
      if (needUnexpectedHelper) {
        namedImports.push("UnexpectedHelper");
      }
      needSubClient = true;
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `../../rest/${subfolder}/index.js`,
          namedImports
        }
      ]);
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: "../../common/interfaces.js",
          namedImports: ["OperationRawReturnType"]
        }
      ]);
    } else {
      if (needUnexpectedHelper) {
        namedImports.push("isUnexpected");
      }
      namedImports.push(`${client.name}Context as Client`);
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `../rest/index.js`,
          namedImports
        }
      ]);
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: "../common/interfaces.js",
          namedImports: ["OperationRawReturnType"]
        }
      ]);
    }
    operationGroup.operations.forEach((o) => {
      buildOperationOptions(o, operationGroupFile);
      const operationDeclaration = getOperationFunction(
        o,
        clientType,
        needSubClient,
        needUnexpectedHelper
      );
      const sendOperationDeclaration = getSendPrivateFunction(o, clientType);
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        o,
        needSubClient,
        needUnexpectedHelper
      );
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration,
        operationDeclaration
      ]);
    });

    operationGroupFile.addImportDeclarations([
      {
        moduleSpecifier: "@azure-rest/core-client",
        namedImports: ["StreamableMethod"]
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
 * This function generates the interfaces for each operation options
 */
export function buildOperationOptions(
  operation: Operation,
  sourceFile: SourceFile
) {
  const optionalParameters = operation.parameters
    .filter((p) => p.implementation === "Method")
    .filter((p) => p.optional || p.clientDefaultValue);
  const optionalBodyParams = (
    operation.bodyParameter?.type.properties ?? []
  ).filter((p) => p.optional);
  const options = [...optionalBodyParams, ...optionalParameters];

  const name = getOperationOptionsName(operation);

  sourceFile.addInterface({
    name,
    isExported: true,
    extends: ["RequestOptions"],
    properties: options.map((p) => {
      return {
        docs: [p.description],
        hasQuestionToken: true,
        ...buildType(p.clientName, p.type)
      };
    })
  });
}
