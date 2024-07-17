import {
  SourceFile,
  ImportDeclarationStructure,
  StructureKind,
  ImportSpecifierStructure,
  SyntaxKind,
  InterfaceDeclaration
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

type PlacehoderResolver = (alias: string) => void;

class BinderImp implements Binder {
  private referencedDeclarations = new Map<
    SourceFile,
    Map<unknown, DeclarationInfo>
  >();
  private declarations = new Map<unknown, DeclarationInfo>();
  private imports = new Map<SourceFile, ImportDeclarationStructure[]>();
  private symbolsBySourceFile = new Map<SourceFile, Set<string>>();
  private placeholders = new Map<SourceFile, Map<string, PlacehoderResolver>>();

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

    // Reference Doesn't Exist Yet. Need to handle this.
    if (!declarationInfo) return undefined;

    const referencedDeclaration = { ...declarationInfo };

    if (declarationInfo.sourceFile !== currentSourceFile) {
      // Add placeholder
      const placeholderKey = `${declarationInfo.sourceFile.getFilePath()}:${
        declarationInfo.name
      }`;

      if (!this.placeholders.has(currentSourceFile)) {
        this.placeholders.set(currentSourceFile, new Map());
      }

      const currentPlaceholders = this.placeholders.get(currentSourceFile)!;
      if (!currentPlaceholders.has(placeholderKey)) {
        currentPlaceholders.set(placeholderKey, (alias: string) => {
          console.log("I want to replace a placeholder with ", alias);
          referencedDeclaration.alias = alias;
        });
      }

      referencedDeclaration.alias = JSON.stringify(placeholderKey);
    }

    this.referencedDeclarations
      .get(currentSourceFile)!
      .set(refkey, referencedDeclaration);

    return referencedDeclaration;
  }

  private addImport(
    currentSourceFile: SourceFile,
    targetSourceFile: SourceFile,
    name: string
  ): ImportSpecifierStructure {
    const importAlias = this.generateLocallyUniqueImportName(
      name,
      currentSourceFile
    );

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
    let importSpecifier = namedImports.find((n) => n.name === importAlias);
    if (!importSpecifier) {
      importSpecifier = {
        name: name,
        alias: importAlias,
        kind: StructureKind.ImportSpecifier
      };
      namedImports.push(importSpecifier);
    }

    importStructure.namedImports = namedImports; // Reassign to ensure the changes are applied
    this.imports.set(currentSourceFile, importStructures);
    return importSpecifier;
  }

  applyImports() {
    for (const [sourceFile, placeholdersInFile] of this.placeholders) {
      for (const [key, resolver] of placeholdersInFile) {
        const [filePath, name] = key.split(":");
        const targetSourceFile = sourceFile
          .getProject()
          .getSourceFile(filePath!);
        if (!targetSourceFile) return;

        const importDec = this.addImport(sourceFile, targetSourceFile, name!);
        replacePlaceholder(sourceFile, key, importDec.alias!);
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
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.InterfaceDeclaration) {
      const interfaceDecl = node as InterfaceDeclaration;
      interfaceDecl.getProperties().forEach((property) => {
        const typeNode = property.getTypeNode();
        if (typeNode && typeNode.getText().includes(placeholder)) {
          const updatedType = typeNode
            .getText()
            .replace(JSON.stringify(placeholder), value);
          typeNode.replaceWithText(updatedType);
        }
      });
    }
  });
}
