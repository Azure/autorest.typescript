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
  const { tracingInfo } = getAutorestOptions();
  if (tracingInfo) {
    sourceFile.addImportDeclarations([
      {
        namedImports: ["CanonicalCode"],
        moduleSpecifier: "@opentelemetry/api"
      },
      {
        namedImports: ["createSpan"],
        moduleSpecifier: `${traverseToRoot}/tracing`
      }
    ]);
  }
}
