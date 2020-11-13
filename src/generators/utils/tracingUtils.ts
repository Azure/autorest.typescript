import { SourceFile } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";

/**
 * Adds the required imports to have operations tracing
 * @param param0 clientDetails
 * @param sourceFile File to add imports to
 */
export function addTracingOperationImports(
  { tracing }: ClientDetails,
  sourceFile: SourceFile,
  traverseToRoot = ".."
) {
  if (tracing) {
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
