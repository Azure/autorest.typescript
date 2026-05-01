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
import {
  SourceFileSymbol,
  StaticHelperMetadata
} from "../load-static-helpers.js";
import path from "path/posix";
import { normalizePath } from "@typespec/compiler";
import { generateLocallyUniqueName } from "../../modular/helpers/namingHelpers.js";

export interface DeclarationInfo {
  name: string;
  sourceFile: SourceFile;
  alias?: string;
}

export interface BinderOptions {
  staticHelpers?: Map<string, StaticHelperMetadata>;
  dependencies?: Record<string, ReferenceableSymbol>;
  /** When true, use #platform/ subpath imports for static helpers with platform variants.
   *  Should be true for warp (azureSdkForJs) packages; false for tshy packages. */
  useSubpathImports?: boolean;
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
  resolveAllReferences(sourceRoot: string, testRoot?: string): void;
}

const PLACEHOLDER_PREFIX = "__PLACEHOLDER_";

class BinderImp implements Binder {
  private declarations = new Map<unknown, DeclarationInfo>();
  private references = new Map<unknown, Set<SourceFile>>();
  private imports = new Map<SourceFile, ImportDeclarationStructure[]>();
  private symbolsBySourceFile = new Map<SourceFile, Set<string>>();
  private project: Project;
  private dependencies: Record<string, ReferenceableSymbol>;
  private staticHelpers: Map<string, StaticHelperMetadata>;
  private useSubpathImports: boolean;

  constructor(project: Project, options: BinderOptions = {}) {
    this.project = project;

    provideDependencies(options.dependencies);
    this.staticHelpers = options.staticHelpers ?? new Map();
    this.dependencies = useDependencies();
    this.useSubpathImports = options.useSubpathImports ?? false;
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
    return generateLocallyUniqueName(name, existingNamesInFile);
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

    // Also check actual imports already added to the source file (e.g., manual imports)
    const actualImports = sourceFile
      .getImportDeclarations()
      .flatMap((imp) => imp.getNamedImports())
      .map(
        (namedImp) => namedImp.getAliasNode()?.getText() ?? namedImp.getName()
      );

    const existingDeclarations =
      this.symbolsBySourceFile.get(sourceFile) ?? new Set<string>();
    return generateLocallyUniqueName(
      name,
      new Set([...existingImports, ...actualImports, ...existingDeclarations])
    );
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
    return `${PLACEHOLDER_PREFIX}${String(refkey)}__`;
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
      const relative = fileWhereImportIsAdded
        .getRelativePathTo(fileWhereImportPointsTo)
        .replace(".ts", ".js");
      moduleSpecifier =
        relative.startsWith(".") || relative.startsWith("/")
          ? relative
          : `./${relative}`;
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
   * Returns the #platform/ subpath import specifier for a static helper file
   * that has a polyfill variant (-browser.mts or -react-native.mts sibling),
   * or undefined if subpath imports are disabled or no variant exists.
   * e.g. "src/static-helpers/serialization/get-binary-response.ts"
   *   -> "#platform/static-helpers/serialization/get-binary-response.js"
   */
  private getPlatformImportSpecifier(
    declarationSourceFile: SourceFile
  ): string | undefined {
    if (!this.useSubpathImports) return undefined;
    const filePath = declarationSourceFile.getFilePath();
    const srcIndex = filePath.indexOf("/src/");
    if (srcIndex === -1) return undefined;
    // Check if a -browser.mts or -react-native.mts sibling exists
    const basePath = filePath.replace(/\.ts$/, "");
    const hasBrowserVariant = this.project.getSourceFile(
      basePath + "-browser.mts"
    );
    const hasReactNativeVariant = this.project.getSourceFile(
      basePath + "-react-native.mts"
    );
    if (!hasBrowserVariant && !hasReactNativeVariant) return undefined;
    const relativePath = filePath.substring(srcIndex + "/src/".length);
    return "#platform/" + relativePath.replace(/\.ts$/, ".js");
  }

  /**
   * Applies all tracked imports to their respective source files.
   */
  resolveAllReferences(sourceRoot: string, testRoot?: string): void {
    this.project.getSourceFiles().map((file) => {
      this.resolveDeclarationReferences(file);
      this.resolveDependencyReferences(file);
      const importStructures = this.imports.get(file);
      if (importStructures) {
        // Sort imports in place by module specifier to ensure consistent ordering
        importStructures.sort((a, b) =>
          a.moduleSpecifier < b.moduleSpecifier ? -1 : 1
        );
        for (const importStructure of importStructures) {
          file.addImportDeclaration(importStructure);
        }
      }
    });

    this.cleanUnreferencedHelpers(sourceRoot, testRoot);
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

    for (const [declarationKey, declaration] of [
      ...this.declarations,
      ...this.staticHelpers
    ]) {
      const placeholderKey = this.serializePlaceholder(declarationKey);
      const occurences = countPlaceholderOccurrences(file, placeholderKey);
      if (!occurences) {
        continue;
      }

      let name = declaration.name;
      let declarationSourceFile: SourceFile;

      if ("sourceFile" in declaration) {
        declarationSourceFile = declaration.sourceFile;
      } else {
        declarationSourceFile = declaration[SourceFileSymbol]!;
      }

      if (file !== declarationSourceFile) {
        this.trackReference(declarationKey, file);
        // Use #platform/ subpath import specifier for static helpers in warp packages
        const platformSpecifier = this.getPlatformImportSpecifier(
          declarationSourceFile
        );
        const importTarget = platformSpecifier ?? declarationSourceFile;
        const importDec = this.addImport(file, importTarget, name);
        name = importDec.alias ?? name;
      }
      replacePlaceholder(file, placeholderKey, name);
    }
  }

  private trackReference(refkey: unknown, sourceFile: SourceFile): void {
    if (!this.references.has(refkey)) {
      this.references.set(refkey, new Set());
    }

    this.references.get(refkey)!.add(sourceFile);
  }

  private cleanUnreferencedHelpers(sourceRoot: string, testRoot?: string) {
    const usedHelperNames: string[] = [];
    for (const helper of this.staticHelpers.values()) {
      const sourceFile = helper[SourceFileSymbol];
      if (!sourceFile) {
        // This should be unreachable
        throw new Error(
          `Static helper ${helper.name} does not have a source file. Make sure that loadStaticHelpers has been correctly initialized in index.ts`
        );
      }
      const referencedHelper = this.references.get(refkey(helper));

      if (referencedHelper?.size) {
        usedHelperNames.push(sourceFile.getBaseNameWithoutExtension());
      }
    }

    // Also keep files that are imported by any used helper file
    const helperFiles = this.project.getSourceFiles(
      normalizePath(path.join(sourceRoot, "static-helpers/**/*.*ts"))
    );
    const usedFiles = helperFiles.filter(
      (file) => !isFileUnused(file, usedHelperNames)
    );
    for (const usedFile of usedFiles) {
      for (const importDecl of usedFile.getImportDeclarations()) {
        const resolved = importDecl.getModuleSpecifierSourceFile();
        if (resolved) {
          const importedName = resolved.getBaseNameWithoutExtension();
          if (!usedHelperNames.includes(importedName)) {
            usedHelperNames.push(importedName);
          }
        }
      }
    }

    helperFiles
      .filter((file) => isFileUnused(file, usedHelperNames))
      .forEach((helperFile) => helperFile.delete());

    if (!testRoot) {
      return;
    }
    this.project
      //normalizae the final path to adapt to different systems
      .getSourceFiles(
        normalizePath(path.join(testRoot, "test/generated/util/**/*.*ts"))
      )
      .filter((file) => isFileUnused(file, usedHelperNames))
      .forEach((helperFile) => helperFile.delete());
  }
}

// Provide the binder context to be used globally
export function provideBinder(
  project: Project,
  options: BinderOptions = {}
): Binder {
  const binder = new BinderImp(project, options);
  provideContext("binder", binder);
  return binder;
}

function isFileUnused(file: SourceFile, usedHelperNames: string[]) {
  const name = file.getBaseNameWithoutExtension();
  // A file is used if it matches a used helper name exactly,
  // or is a platform-specific variant (e.g. "foo-browser" for helper "foo")
  return !usedHelperNames.some(
    (s) => name === s || name === `${s}-browser` || name === `${s}-react-native`
  );
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
  return sourceFile.getFullText().includes(PLACEHOLDER_PREFIX);
}
