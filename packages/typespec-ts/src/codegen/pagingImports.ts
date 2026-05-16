import { SourceFile } from "ts-morph";

const pagedAsyncIterableIteratorName = "PagedAsyncIterableIterator";

export function dedupePagedAsyncIterableIteratorImports(
  file: SourceFile
): void {
  const hasPagingHelpersImport = file
    .getImportDeclarations()
    .some(
      (declaration) =>
        declaration
          .getModuleSpecifierValue()
          ?.includes("static-helpers/pagingHelpers.js") &&
        declaration
          .getNamedImports()
          .some(
            (namedImport) =>
              namedImport.getName() === pagedAsyncIterableIteratorName
          )
    );

  if (!hasPagingHelpersImport) {
    return;
  }

  for (const declaration of file.getImportDeclarations()) {
    if (!declaration.getModuleSpecifierValue()?.endsWith("index.js")) {
      continue;
    }

    for (const namedImport of declaration.getNamedImports()) {
      if (namedImport.getName() === pagedAsyncIterableIteratorName) {
        namedImport.remove();
      }
    }

    if (
      declaration.getNamedImports().length === 0 &&
      !declaration.getDefaultImport() &&
      !declaration.getNamespaceImport()
    ) {
      declaration.remove();
    }
  }
}
