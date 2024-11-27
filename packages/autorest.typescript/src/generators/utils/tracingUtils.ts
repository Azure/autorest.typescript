import { SourceFile } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";
import { getImportModuleName } from "@azure-tools/rlc-common";

/**
 * Adds the required imports to have operations tracing
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addTracingOperationImports(
  sourceFile: SourceFile,
  traverseToRoot = ".."
) {
  const { tracingInfo, moduleKind } = getAutorestOptions();
  if (tracingInfo) {
    sourceFile.addImportDeclarations([
      {
        namedImports: ["tracingClient"],
        moduleSpecifier: getImportModuleName(`${traverseToRoot}/tracing`, moduleKind)
      }
    ]);
  }
}
