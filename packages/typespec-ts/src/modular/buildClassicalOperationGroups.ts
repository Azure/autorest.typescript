import { NameType } from "@azure-tools/rlc-common";
import { SourceFile } from "ts-morph";
import { importLroCoreDependencies } from "./buildLroFiles.js";
import { importModels, importPagingDependencies } from "./buildOperations.js";
import { getClassicalOperation } from "./helpers/classicalOperationHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import {
  Client,
  ModularCodeModel,
  OperationGroup
} from "./modularCodeModel.js";
import { SdkContext } from "../utils/interfaces.js";

export function buildClassicOperationFiles(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client
) {
  const classicOperationFiles: Map<string, SourceFile> = new Map<
    string,
    SourceFile
  >();
  for (const operationGroup of client.operationGroups) {
    if (operationGroup.namespaceHierarchies.length > 0) {
      const classicOperationFileName =
        operationGroup.namespaceHierarchies.length > 0
          ? `${getClassicalLayerPrefix(
              operationGroup,
              NameType.File,
              "/",
              operationGroup.namespaceHierarchies.length - 1
            )}/index`
          : // When the program has no operation groups defined all operations are put
            // into a nameless operation group. We'll call this operations.
            "index";

      const subfolder = client.subfolder;
      const srcPath = codeModel.modularOptions.sourceRoot;
      const classicFile =
        classicOperationFiles.get(classicOperationFileName) ??
        codeModel.project.createSourceFile(
          `${srcPath}/${
            subfolder && subfolder !== "" ? subfolder + "/" : ""
          }classic/${classicOperationFileName}.ts`
        );
      getClassicalOperation(dpgContext, client, classicFile, operationGroup);

      // Import models used from ./models.ts
      // We SHOULD keep this because otherwise ts-morph will "helpfully" try to import models from the rest layer when we call fixMissingImports().
      importModels(
        srcPath,
        classicFile,
        codeModel.project,
        subfolder,
        operationGroup.namespaceHierarchies.length
      );
      importApis(classicFile, client, codeModel, operationGroup);
      // We need to import the paging helpers and types explicitly because ts-morph may not be able to find them.
      importPagingDependencies(
        srcPath,
        classicFile,
        codeModel.project,
        subfolder,
        operationGroup.namespaceHierarchies.length
      );
      importLroCoreDependencies(classicFile);
      classicFile.fixMissingImports();
      classicFile.fixUnusedIdentifiers();
      classicOperationFiles.set(classicOperationFileName, classicFile);
    }
  }
  for (const operationGroup of client.operationGroups) {
    if (operationGroup.namespaceHierarchies.length > 0) {
      for (
        let layer = 0;
        layer < operationGroup.namespaceHierarchies.length - 1;
        layer++
      ) {
        const classicOperationFileName =
          operationGroup.namespaceHierarchies.length > 0
            ? `${getClassicalLayerPrefix(
                operationGroup,
                NameType.File,
                "/",
                layer
              )}/index`
            : // When the program has no operation groups defined all operations are put
              // into a nameless operation group. We'll call this operations.
              "index";

        const subfolder = client.subfolder;
        const srcPath = codeModel.modularOptions.sourceRoot;
        const classicFile =
          classicOperationFiles.get(classicOperationFileName) ??
          codeModel.project.createSourceFile(
            `${srcPath}/${
              subfolder && subfolder !== "" ? subfolder + "/" : ""
            }classic/${classicOperationFileName}.ts`
          );
        getClassicalOperation(
          dpgContext,
          client,
          classicFile,
          operationGroup,
          layer
        );

        // Import models used from ./models.ts
        // We SHOULD keep this because otherwise ts-morph will "helpfully" try to import models from the rest layer when we call fixMissingImports().
        importModels(srcPath, classicFile, codeModel.project, subfolder, layer);
        importApis(classicFile, client, codeModel, operationGroup, layer);
        // We need to import the paging helpers and types explicitly because ts-morph may not be able to find them.
        importPagingDependencies(
          srcPath,
          classicFile,
          codeModel.project,
          subfolder,
          operationGroup.namespaceHierarchies.length
        );
        importLroCoreDependencies(classicFile);

        classicFile.fixMissingImports();
        classicFile.fixUnusedIdentifiers();
        classicOperationFiles.set(classicOperationFileName, classicFile);
      }
    }
  }
  return classicOperationFiles;
}

function importApis(
  classicFile: SourceFile,
  client: Client,
  modularCodeModel: ModularCodeModel,
  operationGroup: OperationGroup,
  layer: number = operationGroup.namespaceHierarchies.length - 1
) {
  const classicOperationFileName =
    operationGroup.namespaceHierarchies.length > 0
      ? `${getClassicalLayerPrefix(
          operationGroup,
          NameType.File,
          "/",
          layer
        )}/index`
      : // When the program has no operation groups defined all operations are put
        // into a nameless operation group. We'll call this operations.
        "index";

  const subfolder = client.subfolder;
  const srcPath = modularCodeModel.modularOptions.sourceRoot;
  const apiFile = modularCodeModel.project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${classicOperationFileName}.ts`
  );

  if (!apiFile) {
    return;
  }

  const exported = [...apiFile.getExportedDeclarations().keys()].filter((e) => {
    return !e.startsWith("_");
  });

  const existApiImport = classicFile.getImportDeclarations().filter((i) => {
    return i
      .getModuleSpecifierValue()
      .includes(`../api/${classicOperationFileName}`);
  })[0];
  if (exported.length > 0 && !existApiImport) {
    classicFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(
        operationGroup.namespaceHierarchies.length + 1
      )}api/${classicOperationFileName}.js`,
      namedImports: exported
    });
  }
}
