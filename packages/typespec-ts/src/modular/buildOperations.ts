import { Project, SourceFile } from "ts-morph";
import { buildType } from "./helpers/typeHelpers.js";
import {
  getOperationFunction,
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
      buildOperationOptions(o, operationGroupFile);
      const operationDeclaration = getOperationFunction(o);
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
