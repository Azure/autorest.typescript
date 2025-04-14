import { SourceFile } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

/**
 * Adds the required imports to have operations tracing
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addTracingOperationImports(
  sourceFile: SourceFile,
  traverseToRoot = ".."
) {
  const { tracingInfo, isTestPackage } = getAutorestOptions();
  if (tracingInfo) {
    sourceFile.addImportDeclarations([
      {
        namedImports: ["tracingClient"],
        moduleSpecifier: isTestPackage ? `${traverseToRoot}/tracing` : `${traverseToRoot}/tracing..js`
      }
    ]);
  }
}
