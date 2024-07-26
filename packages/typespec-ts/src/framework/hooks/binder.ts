import {
  SourceFile,
  ImportDeclarationStructure,
  StructureKind,
  ImportSpecifierStructure,
  Project
} from "ts-morph";
import { provideContext, useContext } from "../../contextManager.js";
import { ReferenceableSymbol } from "../dependency.js";
import { provideDependencies, useDependencies } from "./useDependencies.js";
import { refkey } from "../refkey.js";

export interface DeclarationInfo {
  name: string;
  sourceFile: SourceFile;
  alias?: string;
}

export interface BinderOptions {
  dependencies?: Record<string, ReferenceableSymbol>;
}

export interface Binder {
  /**
   * Tracks a new declaration.
   * @param refkey - A unique reference key for the declaration.
   * @param name - The name of the declaration.
   * @param sourceFile - The source file where the declaration is made.
   * @returns The tracked declaration name.
   */
  trackDeclaration(
    refkey: unknown,
    name: string,
    sourceFile: SourceFile
  ): string;
  resolveReference(refkey: unknown): string;
  resolveAllReferences(): void;
}

class BinderImp implements Binder {
  private declarations = new Map<unknown, DeclarationInfo>();
  private imports = new Map<SourceFile, ImportDeclarationStructure[]>();
  private symbolsBySourceFile = new Map<SourceFile, Set<string>>();
  private project: Project;
  private dependencies: Record<string, ReferenceableSymbol>;

  constructor(project: Project, options: BinderOptions = {}) {
    this.project = project;

    provideDependencies(options.dependencies);
    this.dependencies = useDependencies();
  }

  trackDeclaration(
    refkey: unknown,
    name: string,
    sourceFile: SourceFile
  ): string {
    const uniqueName = this.generateLocallyUniqueDeclarationName(
      name,
      sourceFile
    );
    const declarationInfo: DeclarationInfo = { name: uniqueName, sourceFile };
    this.declarations.set(refkey, declarationInfo);

    // Ensure symbolsBySourceFile has an entry for this sourceFile
    if (!this.symbolsBySourceFile.has(sourceFile)) {
      this.symbolsBySourceFile.set(sourceFile, new Set());
    }
    this.symbolsBySourceFile.get(sourceFile)!.add(uniqueName);

    return uniqueName;
  }

  /**
   * Generates a locally unique name for a declaration within a source file.
   * @param name - The base name of the declaration.
   * @param sourceFile - The source file where the declaration is made.
   * @returns A unique name for the declaration within the file.
   */
  private generateLocallyUniqueDeclarationName(
    name: string,
    sourceFile: SourceFile
  ): string {
    const existingNamesInFile =
      this.symbolsBySourceFile.get(sourceFile) ?? new Set<string>();
    return this.generateLocallyUniqueName(name, existingNamesInFile);
  }

  /**
   * Generates a locally unique name for an import within a source file.
   * @param name - The base name of the import.
   * @param sourceFile - The source file where the import is made.
   * @returns A unique name for the import within the file.
   */
  private generateLocallyUniqueImportName(
    name: string,
    sourceFile: SourceFile
  ): string {
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

  /**
   * Generates a locally unique name within a set of existing names.
   * @param name - The base name.
   * @param existingNames - A set of names already in use.
   * @returns A unique name not present in the existing names set.
   */
  private generateLocallyUniqueName(
    name: string,
    existingNames: Set<string>
  ): string {
    let uniqueName = name;
    let counter = 1;
    while (existingNames.has(uniqueName)) {
      uniqueName = `${name}_${counter}`;
      counter++;
    }
    return uniqueName;
  }

  /**
   * Resolves a reference to a declaration.
   *  If a declaration is not ready yet, a placeholder is added to the source file.
   *  Placeholders will be resolved when the imports are applied.
   * @param refkey - The reference key for the declaration.
   * @param currentSourceFile - The current source file where the reference is being resolved.
   * @returns The declaration information if resolved, or a placeholder if not found.
   */
  resolveReference(refkey: unknown): string {
    return this.serializePlaceholder(refkey);
  }

  /**
   * Serializes a placeholder reference key to a string.
   * @param refkey - The reference key.
   * @returns The serialized placeholder string.
   */
  private serializePlaceholder(refkey: unknown): string {
    return `"<PLACEHOLDER:${String(refkey)}>"`;
  }

  /**
   * Adds an import declaration to a source file.
   * @param fileWhereImportIsAdded - The source file where the import is added.
   * @param fileWhereImportPointsTo - The source file being imported.
   * @param name - The name of the import.
   * @returns The import specifier structure.
   */
  private addImport(
    fileWhereImportIsAdded: SourceFile,
    fileWhereImportPointsTo: SourceFile | string,
    name: string
  ): ImportSpecifierStructure {
    const importAlias = this.generateLocallyUniqueImportName(
      name,
      fileWhereImportIsAdded
    );
    let moduleSpecifier = "";
    if (typeof fileWhereImportPointsTo === "string") {
      moduleSpecifier = fileWhereImportPointsTo;
    } else {
      moduleSpecifier =
        fileWhereImportIsAdded.getRelativePathAsModuleSpecifierTo(
          fileWhereImportPointsTo
        );
    }

    const importStructures = this.imports.get(fileWhereImportIsAdded) || [];

    let importStructure = importStructures.find(
      (imp) => imp.moduleSpecifier === moduleSpecifier
    );

    if (!importStructure) {
      importStructure = {
        kind: StructureKind.ImportDeclaration,
        moduleSpecifier,
        namedImports: []
      };
      importStructures.push(importStructure);
    }

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

    importStructure.namedImports = namedImports;
    this.imports.set(fileWhereImportIsAdded, importStructures);
    return importSpecifier;
  }

  /**
   * Applies all tracked imports to their respective source files.
   */
  resolveAllReferences(): void {
    for (const file of this.project.getSourceFiles()) {
      this.resolveDeclarationReferences(file);
      this.resolveDependencyReferences(file);
    }

    for (const [sourceFile, importStructures] of this.imports) {
      for (const importStructure of importStructures) {
        sourceFile.addImportDeclaration(importStructure);
      }
    }
  }

  private resolveDependencyReferences(file: SourceFile) {
    if (!hasAnyPlaceholders(file)) {
      return;
    }
    for (const dependency of Object.values(this.dependencies)) {
      const placeholder = this.serializePlaceholder(refkey(dependency));
      const { name, module } = dependency;
      const occurences = countPlaceholderOccurrences(file, placeholder);
      if (occurences > 0) {
        const importDec = this.addImport(file, module, name);
        const uniqueName = importDec.alias ?? name;
        replacePlaceholder(file, placeholder, uniqueName);
      }
    }
  }

  private resolveDeclarationReferences(file: SourceFile) {
    if (!hasAnyPlaceholders(file)) {
      return;
    }
    for (const [declarationKey, declaration] of this.declarations) {
      const placeholderKey = this.serializePlaceholder(declarationKey);
      let name = declaration.name;
      if (file !== declaration.sourceFile) {
        const importDec = this.addImport(
          file,
          declaration.sourceFile,
          declaration.name
        );
        name = importDec.alias ?? declaration.name;
      }
      replacePlaceholder(file, placeholderKey, name);
    }
  }
}

// Provide the binder context to be used globally
export function provideBinder(
  project: Project,
  options: BinderOptions = {}
): void {
  return provideContext("binder", new BinderImp(project, options));
}

/**
 * Hook to use the binder context.
 * @returns The binder instance.
 */
export function useBinder(): Binder {
  return useContext("binder");
}

/**
 * Replaces all instances of a placeholder in a source file with a given value.
 * @param sourceFile - The source file where the replacement occurs.
 * @param placeholder - The placeholder string to replace.
 * @param value - The value to replace the placeholder with.
 */
function replacePlaceholder(
  sourceFile: SourceFile,
  placeholder: string,
  value: string
): void {
  const fileText = sourceFile.getFullText();
  const regex = new RegExp(escapeRegExp(placeholder), "g");
  const updatedText = fileText.replace(regex, value);
  sourceFile.replaceWithText(updatedText);
}

function countPlaceholderOccurrences(
  sourceFile: SourceFile,
  placeholder: string
): number {
  return sourceFile.getFullText().split(placeholder).length - 1;
}

/**
 * Escapes special characters in a string to be used in a regular expression.
 * @param string - The input string.
 * @returns The escaped string.
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasAnyPlaceholders(sourceFile: SourceFile): boolean {
  return sourceFile.getFullText().includes(`<PLACEHOLDER:`);
}
