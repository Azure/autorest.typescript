import { Project, SourceFile } from "ts-morph";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { buildType } from "./helpers/typeHelpers.js";
import {
  getOperationFunction,
  getSendPrivateFunction,
  getDeserializePrivateFunction,
  getOperationOptionsName
} from "./helpers/operationHelpers.js";
import { Client, ModularCodeModel, Operation } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { SdkContext } from "../utils/interfaces.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client,
  needUnexpectedHelper: boolean = true
) {
  const operationFiles = [];
  for (const operationGroup of client.operationGroups) {
    const importSet: Map<string, Set<string>> = new Map<string, Set<string>>();
    const operationFileName =
      operationGroup.className && operationGroup.namespaceHierarchies.length > 0
        ? `${operationGroup.namespaceHierarchies
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/index`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";

    const subfolder = client.subfolder;
    const srcPath = codeModel.modularOptions.sourceRoot;
    const operationGroupFile = codeModel.project.createSourceFile(
      `${srcPath}/${
        subfolder && subfolder !== "" ? subfolder + "/" : ""
      }api/${operationFileName}.ts`
    );

    // Import models used from ./models.ts
    // We SHOULD keep this because otherwise ts-morph will "helpfully" try to import models from the rest layer when we call fixMissingImports().
    importModels(
      srcPath,
      operationGroupFile,
      codeModel.project,
      subfolder,
      operationGroup.namespaceHierarchies.length
    );

    const namedImports: string[] = [];
    let clientType = "Client";
    if (isRLCMultiEndpoint(dpgContext)) {
      namedImports.push(`Client`);
      clientType = `Client.${client.rlcClientName}`;
      if (needUnexpectedHelper) {
        namedImports.push("UnexpectedHelper");
      }
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `../${"../".repeat(
            operationGroup.namespaceHierarchies.length
          )}rest/${subfolder}/index.js`,
          namedImports
        }
      ]);
    } else {
      if (needUnexpectedHelper) {
        namedImports.push("isUnexpected");
      }
      const rlcClientName = client.rlcClientName;
      namedImports.push(`${rlcClientName} as Client`);
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `${
            subfolder && subfolder !== "" ? "../" : ""
          }${"../".repeat(
            operationGroup.namespaceHierarchies.length + 1
          )}rest/index.js`,
          namedImports
        }
      ]);
    }
    operationGroup.operations.forEach((o) => {
      const operationDeclaration = getOperationFunction(o, clientType);
      const sendOperationDeclaration = getSendPrivateFunction(
        o,
        clientType,
        importSet
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        o,
        isRLCMultiEndpoint(dpgContext),
        needUnexpectedHelper,
        importSet
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
        namedImports: [
          "StreamableMethod",
          "operationOptionsToRequestParameters"
        ]
      }
    ]);
    if (importSet.size > 0) {
      for (const [moduleName, imports] of importSet.entries()) {
        operationGroupFile.addImportDeclarations([
          {
            moduleSpecifier: moduleName,
            namedImports: [...imports.values()]
          }
        ]);
      }
    }
    operationGroupFile.fixMissingImports();
    // have to fixUnusedIdentifiers after everything get generated.
    operationGroupFile.fixUnusedIdentifiers();
    operationFiles.push(operationGroupFile);
  }
  return operationFiles;
}

export function importModels(
  srcPath: string,
  sourceFile: SourceFile,
  project: Project,
  subfolder: string = "",
  importLayer: number = 0
) {
  const hasModelsImport = sourceFile.getImportDeclarations().some((i) => {
    return i.getModuleSpecifierValue().endsWith(`models/models.js`);
  });
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }models/models.ts`
  );
  const models: string[] = [];

  for (const entry of modelsFile?.getExportedDeclarations().entries() ?? []) {
    models.push(entry[0]);
  }

  if (models.length > 0 && !hasModelsImport) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(importLayer + 1)}models/models.js`,
      namedImports: models
    });
  }

  // Import all models and then let ts-morph clean up the unused ones
  // we can't fixUnusedIdentifiers here because the operaiton files are still being generated.
  // sourceFile.fixUnusedIdentifiers();
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
  const options = [...optionalParameters];

  const name = getOperationOptionsName(operation, true);

  sourceFile.addInterface({
    name,
    isExported: true,
    extends: ["OperationOptions"],
    properties: options.map((p) => {
      return {
        docs: getDocsFromDescription(p.description),
        hasQuestionToken: true,
        ...buildType(p.clientName, p.type, p.format)
      };
    })
  });
}
