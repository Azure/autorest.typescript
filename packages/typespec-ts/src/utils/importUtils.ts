import { SourceFile } from "ts-morph";

export function importSettings(
  importSet: Map<string, Set<string>>,
  sourceFile: SourceFile
) {
  if (importSet.size > 0) {
    for (const [moduleName, imports] of importSet.entries()) {
      sourceFile.addImportDeclarations([
        {
          moduleSpecifier: moduleName,
          namedImports: [...imports.values()]
        }
      ]);
    }
  }
}
