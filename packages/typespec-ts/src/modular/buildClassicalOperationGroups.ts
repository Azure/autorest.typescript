import { Client, ModularCodeModel } from "./modularCodeModel.js";
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
      for (
        let layer = 0;
        layer < operationGroup.namespaceHierarchies.length;
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
        getClassicalOperation(classicFile, client, operationGroup, subfolder);
        classicFile.fixMissingImports();
        classicOperationFiles.set(classicOperationFileName, classicFile);
      }
    }
  }
  return classicOperationFiles;
}
