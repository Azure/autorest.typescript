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
  private referencedDeclarations = new Map<
    SourceFile,
    Map<unknown, DeclarationInfo>
  >();
  private declarations = new Map<unknown, DeclarationInfo>();
  private imports = new Map<SourceFile, ImportDeclarationStructure[]>();
  private symbolsBySourceFile = new Map<SourceFile, Set<string>>();
  private placeholders = new Map<unknown, Map<string, Set<SourceFile>>>();

  trackDeclaration(refkey: unknown, name: string, sourceFile: SourceFile) {
    const uniqueName = this.generateLocallyUniqueDeclarationName(
      name,
      sourceFile
    );
    const declarationInfo = { name: uniqueName, sourceFile };
    this.declarations.set(refkey, declarationInfo);

    if (!this.symbolsBySourceFile.has(sourceFile)) {
      this.symbolsBySourceFile.set(sourceFile, new Set());
    }

    this.symbolsBySourceFile.get(sourceFile)!.add(uniqueName);

    return declarationInfo;
  }

  private generateLocallyUniqueDeclarationName(
    name: string,
    sourceFile: SourceFile
  ) {
    const existingNamesInFile =
      this.symbolsBySourceFile.get(sourceFile) ?? new Set<string>();

    return this.generateLocallyUniqueName(name, existingNamesInFile);
  }

  private generateLocallyUniqueImportName(
    name: string,
    sourceFile: SourceFile
  ) {
    const existingImports = (this.imports.get(sourceFile) ?? [])
      .flatMap((i) => i.namedImports as ImportSpecifierStructure[])
      .map((i) => i.alias ?? i.name);

    const existingDeclarations =
      this.symbolsBySourceFile.get(sourceFile) ?? new Set<string>();

    return this.generateLocallyUniqueName(
      name,
      new Set([...existingImports, ...existingDeclarations])
    );
  }

  private generateLocallyUniqueName(name: string, existingNames: Set<string>) {
    let uniqueName = name;
    let counter = 1;

    while (existingNames.has(uniqueName)) {
      uniqueName = `${name}_${counter}`;
      counter++;
    }

    return uniqueName;
  }

  resolveReference(
    refkey: unknown,
    currentSourceFile: SourceFile
  ): DeclarationInfo | undefined {
    if (!this.referencedDeclarations.has(currentSourceFile)) {
      this.referencedDeclarations.set(currentSourceFile, new Map());
    }

    if (this.referencedDeclarations.get(currentSourceFile)!.has(refkey)) {
      return this.referencedDeclarations.get(currentSourceFile)!.get(refkey)!;
    }

    const declarationInfo = this.declarations.get(refkey);
    const placeholderKey = `PLACEHOLDER:${refkey}`;

    if (!this.placeholders.has(refkey)) {
      this.placeholders.set(refkey, new Map());
    }

    // Reference Doesn't Exist Yet. Need to handle this.
    if (!declarationInfo) {
      if (!this.placeholders.get(refkey)!.has(placeholderKey)) {
        this.placeholders.get(refkey)!.set(placeholderKey, new Set());
      }

      this.placeholders
        .get(refkey)!
        .get(placeholderKey)!
        .add(currentSourceFile);

      return { alias: placeholderKey } as any;
    }

    const referencedDeclaration = { ...declarationInfo };

    if (declarationInfo.sourceFile !== currentSourceFile) {
      if (!this.placeholders.get(refkey)!.has(placeholderKey)) {
        this.placeholders.get(refkey)!.set(placeholderKey, new Set());
      }
      this.placeholders
        .get(refkey)!
        .get(placeholderKey)!
        .add(currentSourceFile);

      referencedDeclaration.alias = placeholderKey;
    }

    this.referencedDeclarations
      .get(currentSourceFile)!
      .set(refkey, referencedDeclaration);

    return referencedDeclaration;
  }

  private addImport(
    fileWhereImportIsAdded: SourceFile,
    fileWhereImportPointsto: SourceFile,
    name: string
  ): ImportSpecifierStructure {
    const importAlias = this.generateLocallyUniqueImportName(
      name,
      fileWhereImportIsAdded
    );

    // Calculate the path for the import
    const relativePath =
      fileWhereImportIsAdded.getRelativePathAsModuleSpecifierTo(
        fileWhereImportPointsto
      );

    // Gather the currently tracked imports
    const importStructures = this.imports.get(fileWhereImportIsAdded) || [];

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
    let importSpecifier = namedImports.find((n) => n.name === importAlias);
    if (!importSpecifier) {
      importSpecifier = {
        name: name,
        alias: name === importAlias ? undefined : importAlias,
        kind: StructureKind.ImportSpecifier
      };
      namedImports.push(importSpecifier);
    }

    importStructure.namedImports = namedImports; // Reassign to ensure the changes are applied
    this.imports.set(fileWhereImportIsAdded, importStructures);
    return importSpecifier;
  }

  applyImports() {
    for (const [refkey, placeholder] of this.placeholders) {
      const declaration = this.declarations.get(refkey);
      if (!declaration) {
        throw new Error(`Declaration not found for ${placeholder}`);
      }

      const { sourceFile: fileWhereDeclarationIs } = declaration;

      for (const [
        placeholderKey,
        filesWhereImportIsAdded
      ] of placeholder.entries()) {
        for (const fileWhereImportIsAdded of filesWhereImportIsAdded) {
          let name = declaration.alias ?? declaration.name;
          if (fileWhereDeclarationIs !== fileWhereImportIsAdded) {
            const importDec = this.addImport(
              fileWhereImportIsAdded,
              fileWhereDeclarationIs,
              declaration.name
            );
            name = importDec.alias ?? declaration.name;
          }
          replacePlaceholder(fileWhereImportIsAdded, placeholderKey, name);
        }
      }
    }
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

function replacePlaceholder(
  sourceFile: SourceFile,
  placeholder: string,
  value: string
) {
  // Find and replace the placeholder in the interface
  const fileText = sourceFile.getFullText();
  const regex = new RegExp(placeholder, "g");
  const updatedText = fileText.replace(regex, value);
  sourceFile.replaceWithText(updatedText);
}
