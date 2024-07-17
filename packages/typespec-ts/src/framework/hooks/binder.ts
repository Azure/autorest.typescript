import {
  SourceFile,
  ImportDeclarationStructure,
  StructureKind,
  ImportSpecifierStructure
} from "ts-morph";
import { provideContext, useContext } from "../../contextManager.js";

export interface DeclarationInfo {
  name: string;
  sourceFile: SourceFile;
  alias?: string;
}

export interface Binder {
  trackDeclaration(
    refkey: unknown,
    name: string,
    sourceFile: SourceFile
  ): DeclarationInfo;
  resolveReference(
    refkey: unknown,
    currentSourceFile: SourceFile
  ): DeclarationInfo | undefined;
  applyImports(): void;
}

class BinderImp implements Binder {
  private declarations = new Map<unknown, DeclarationInfo>();
  private imports = new Map<SourceFile, ImportDeclarationStructure[]>();
  private symbolsBySourceFile = new Map<SourceFile, Set<string>>();

  trackDeclaration(refkey: unknown, name: string, sourceFile: SourceFile) {
    const uniqueName = this.generateLocallyUniqueName(name, sourceFile);
    const declarationInfo = { name: uniqueName, sourceFile };
    this.declarations.set(refkey, declarationInfo);

    if (!this.symbolsBySourceFile.has(sourceFile)) {
      this.symbolsBySourceFile.set(sourceFile, new Set());
    }

    this.symbolsBySourceFile.get(sourceFile)!.add(uniqueName);

    return declarationInfo;
  }

  private generateLocallyUniqueName(name: string, sourceFile: SourceFile) {
    const existingNamesInFile =
      this.symbolsBySourceFile.get(sourceFile) ?? new Set<string>();

    let uniqueName = name;
    let counter = 1;

    while (existingNamesInFile.has(uniqueName)) {
      uniqueName = `${name}_${counter}`;
      counter++;
    }

    return uniqueName;
  }

  resolveReference(
    refkey: unknown,
    currentSourceFile: SourceFile
  ): DeclarationInfo | undefined {
    const declarationInfo = this.declarations.get(refkey);
    if (!declarationInfo) return undefined;

    if (declarationInfo.sourceFile !== currentSourceFile) {
      this.addImport(
        currentSourceFile,
        declarationInfo.sourceFile,
        declarationInfo.name
      );
    }

    return declarationInfo;
  }

  private addImport(
    currentSourceFile: SourceFile,
    targetSourceFile: SourceFile,
    name: string
  ): ImportSpecifierStructure {
    // Calculate the path for the import
    const relativePath =
      currentSourceFile.getRelativePathAsModuleSpecifierTo(targetSourceFile);

    // Gather the currently tracked imports
    const importStructures = this.imports.get(currentSourceFile) || [];

    // Check if an import for the current path already exists in the file
    let importStructure = importStructures.find(
      (imp) => imp.moduleSpecifier === relativePath
    );

    // If it doesn't exist add a new import structure
    if (!importStructure) {
      importStructure = {
        kind: StructureKind.ImportDeclaration,
        moduleSpecifier: relativePath,
        namedImports: []
      };
      importStructures.push(importStructure);
    }

    // Add the named import if it doesn't exist to avoid double imports
    const namedImports =
      importStructure.namedImports as ImportSpecifierStructure[];
    let importSpecifier = namedImports.find((n) => n.name === name);
    if (!importSpecifier) {
      importSpecifier = { name, kind: StructureKind.ImportSpecifier };
      namedImports.push(importSpecifier);
    }

    // TODO: Handle coflict resolution

    importStructure.namedImports = namedImports; // Reassign to ensure the changes are applied
    this.imports.set(currentSourceFile, importStructures);
    return importSpecifier;
  }

  applyImports() {
    this.imports.forEach((importStructures, sourceFile) => {
      importStructures.forEach((importStructure) => {
        sourceFile.addImportDeclaration(importStructure);
      });
    });
  }
}

provideContext("binder", new BinderImp());

export function useBinder(): Binder {
  return useContext("binder");
}
