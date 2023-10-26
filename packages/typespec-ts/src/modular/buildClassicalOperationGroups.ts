import {
  Client,
  ModularCodeModel,
  OperationGroup
} from "./modularCodeModel.js";
import { NameType } from "@azure-tools/rlc-common";
import { getClassicalOperation } from "./helpers/classicalOperationHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { SourceFile } from "ts-morph";

export function buildClassicOperationFiles(
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
      getClassicalOperation(classicFile, client, operationGroup);
      importApis(classicFile, client, codeModel, operationGroup);
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
        getClassicalOperation(classicFile, client, operationGroup, layer);
        importApis(classicFile, client, codeModel, operationGroup, layer);
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

  if (exported.length > 0) {
    classicFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(
        operationGroup.namespaceHierarchies.length + 1
      )}api/${classicOperationFileName}.js`,
      namedImports: exported
    });
  }
}
