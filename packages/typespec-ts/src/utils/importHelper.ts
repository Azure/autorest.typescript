import { dirname, relative, resolve } from "path";
import { useContext } from "../contextManager.js";
import { SourceFile } from "ts-morph";

/**
 * Adds a named import to a TypeScript source file if it does not already exist.
 * Utilizes a global symbol map context to resolve module paths and ensure the import is correctly referenced.
 *
 * @param {string} symbol The name of the export to import.
 * @param {SourceFile} currentFile The ts-morph SourceFile object where the import will be added.
 */
export function addImportBySymbol(symbol: string, currentFile: SourceFile) {
  // Retrieve the global map of symbols to their source files.
  const symbolMap = useContext("symbolMap");

  // Attempt to resolve the file path for the given symbol.
  const modulePath = symbolMap.get(symbol)?.getFilePath();
  if (!modulePath) {
    return;
  }

  // Resolve absolute path and compute a relative path from the current file to the module.
  const moduleAbsolutePath = resolve(modulePath);
  const relativeImportPath = getRelativeImportPath(
    currentFile.getFilePath(),
    moduleAbsolutePath
  )
    .replace(/\\/g, "/")
    .replace(/\.ts$/, ".js");

  // Check if the import declaration already exists and if it includes the symbol.
  const existing = currentFile.getImportDeclaration(
    (i) => i.getModuleSpecifierValue() === relativeImportPath
  );

  if (existing) {
    const sameImport = existing
      .getNamedImports()
      .some((i) => i.getName() === symbol);

    if (!sameImport) {
      existing.addNamedImport(symbol);
    }
  } else {
    currentFile.addImportDeclaration({
      moduleSpecifier: relativeImportPath,
      namedImports: [symbol]
    });
  }
}

/**
 * Computes a relative import path suitable for TypeScript imports given two file paths.
 * Ensures the returned path starts with './' if necessary to be recognized as a relative module.
 *
 * @param {string} from The file path to import from.
 * @param {string} to The file path to import to.
 * @returns {string} The relative path adjusted for import syntax.
 */
function getRelativeImportPath(from: string, to: string) {
  const relativePath = relative(dirname(from), to);
  // Adjust the path format to TypeScript module syntax
  return relativePath.startsWith(".") ? relativePath : "./" + relativePath;
}
