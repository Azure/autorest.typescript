import { SourceFile } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";

/**
 * Adds the required imports to have operations tracing
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addTracingOperationImports(
  { enableTracing, srcPath }: ClientDetails,
  sourceFile: SourceFile,
  traverseToRoot = ".."
) {
  if (enableTracing) {
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
