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

    const modelOptionsFile = project.createSourceFile(
      `${srcPath}/src/models/options.ts`
    );
    operationGroup.operations.forEach((o) => {
      buildOperationOptions(o, modelOptionsFile);
      const operationDeclaration = getOperationFunction(o);
      const sendOperationDeclaration = getSendPrivateFunction(o);
      const deserializeOperationDeclaration = getDeserializePrivateFunction(o);
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration,
        operationDeclaration
      ]);
    });

    operationGroupFile.addImportDeclarations([
      {
        moduleSpecifier: "../rest/index.js",
        namedImports: [`${client.name}Context as Client`, "isUnexpected"]
      }
    ]);

    operationGroupFile.addImportDeclarations([
      {
        moduleSpecifier: "@azure-rest/core-client",
        namedImports: [
          "StreamableMethod",
          "operationOptionsToRequestParameters"
        ]
      }
    ]);
    modelOptionsFile.addImportDeclarations([
      {
        moduleSpecifier: "@azure-rest/core-client",
        namedImports: ["OperationOptions"]
      }
    ]);

    modelOptionsFile.fixMissingImports();
    modelOptionsFile
      .getImportDeclarations()
      .filter((id) => {
        return (
          id.isModuleSpecifierRelative() &&
          !id.getModuleSpecifierValue().endsWith(".js")
        );
      })
      .map((id) => {
        id.setModuleSpecifier(id.getModuleSpecifierValue() + ".js");
        return id;
      });

    operationGroupFile.fixMissingImports();
  }
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
    extends: ["OperationOptions"],
    properties: options.map((p) => {
      return {
        docs: [p.description],
        hasQuestionToken: true,
        ...buildType(p.clientName, p.type)
      };
    })
  });
}
