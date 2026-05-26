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
   *   -> "#platform/static-helpers/serialization/get-binary-response"
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
    return "#platform/" + relativePath.replace(/\.ts$/, "");
  }

  /**
   * Applies all tracked imports to their respective source files.
   */
  resolveAllReferences(sourceRoot: string, testRoot?: string): void {
    // Pre-compute placeholder -> declaration/dependency maps
    const declarationByPlaceholder = new Map<
      string,
      [unknown, DeclarationInfo | StaticHelperMetadata]
    >();
    for (const [key, value] of this.declarations) {
      declarationByPlaceholder.set(this.serializePlaceholder(key), [
        key,
        value
      ]);
    }
    for (const [key, value] of this.staticHelpers) {
      declarationByPlaceholder.set(this.serializePlaceholder(key), [
        key,
        value
      ]);
    }
    const dependencyByPlaceholder = new Map<string, ReferenceableSymbol>();
    for (const dependency of Object.values(this.dependencies)) {
      dependencyByPlaceholder.set(
        this.serializePlaceholder(refkey(dependency)),
        dependency
      );
    }

    this.project.getSourceFiles().map((file) => {
      // Scan each file's text once to find placeholders that are actually
      // present, then build one placeholder -> replacement map per file and
      // apply it in a single pass.
      const presentPlaceholders = collectPlaceholders(file);
      if (presentPlaceholders.size > 0) {
        const replacementMap = new Map<string, string>();
        this.resolveDeclarationReferences(
          file,
          declarationByPlaceholder,
          presentPlaceholders,
          replacementMap
        );
        this.resolveDependencyReferences(
          file,
          dependencyByPlaceholder,
          presentPlaceholders,
          replacementMap
        );
        if (replacementMap.size > 0) {
          applyReplacements(file, replacementMap);
        }
      }
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

  /**
   * Resolves placeholders that refer to external dependencies by registering
   * the matching imports and recording the local names in `replacementMap`.
   * @param file - The source file currently being processed.
   * @param dependencyByPlaceholder - Map from placeholder string to its dependency descriptor.
   * @param presentPlaceholders - The set of placeholders actually present in the file's text.
   * @param replacementMap - The per-file map that receives placeholder -> local-name entries.
   */
  private resolveDependencyReferences(
    file: SourceFile,
    dependencyByPlaceholder: Map<string, ReferenceableSymbol>,
    presentPlaceholders: Set<string>,
    replacementMap: Map<string, string>
  ) {
    for (const [placeholder, dependency] of dependencyByPlaceholder) {
      if (!presentPlaceholders.has(placeholder)) {
        continue;
      }
      const { name, module } = dependency;
      const importDec = this.addImport(file, module, name);
      const uniqueName = importDec.alias ?? name;
      replacementMap.set(placeholder, uniqueName);
    }
  }

  /**
   * Resolves placeholders that refer to in-project declarations, registering
   * cross-file imports as needed and recording the local names in
   * `replacementMap`.
   * @param file - The source file currently being processed.
   * @param declarationByPlaceholder - Map from placeholder string to its declaration key and metadata.
   * @param presentPlaceholders - The set of placeholders actually present in the file's text.
   * @param replacementMap - The per-file map that receives placeholder -> local-name entries.
   */
  private resolveDeclarationReferences(
    file: SourceFile,
    declarationByPlaceholder: Map<
      string,
      [unknown, DeclarationInfo | StaticHelperMetadata]
    >,
    presentPlaceholders: Set<string>,
    replacementMap: Map<string, string>
  ) {
    for (const [
      placeholderKey,
      [declarationKey, declaration]
    ] of declarationByPlaceholder) {
      if (!presentPlaceholders.has(placeholderKey)) {
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
      replacementMap.set(placeholderKey, name);
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
 * Replaces every placeholder in a source file in one bulk text.replace
 * followed by a single replaceWithText call.
 * @param sourceFile - The source file to mutate.
 * @param replacementMap - A map from each placeholder string to its replacement value.
 */
function applyReplacements(
  sourceFile: SourceFile,
  replacementMap: Map<string, string>
): void {
  if (replacementMap.size === 0) {
    return;
  }
  const text = sourceFile.getFullText();
  const placeholderRegex = new RegExp(
    `${escapeRegExp(PLACEHOLDER_PREFIX)}.+?__`,
    "g"
  );
  let changed = false;
  const updatedText = text.replace(placeholderRegex, (match) => {
    const replacement = replacementMap.get(match);
    if (replacement === undefined) {
      return match;
    }
    changed = true;
    return replacement;
  });
  if (changed) {
    sourceFile.replaceWithText(updatedText);
  }
}

/**
 * Returns the set of distinct `__PLACEHOLDER_<refkey>__` strings present in
 * the file, after a single text scan.
 * @param sourceFile - The source file to scan.
 * @returns The set of placeholder strings found in the file's text.
 */
function collectPlaceholders(sourceFile: SourceFile): Set<string> {
  const result = new Set<string>();
  const text = sourceFile.getFullText();
  if (!text.includes(PLACEHOLDER_PREFIX)) {
    return result;
  }
  // Refkeys are alphanumeric (see refkey.ts), so `.+?` safely stops at `__`.
  const placeholderRegex = new RegExp(
    `${escapeRegExp(PLACEHOLDER_PREFIX)}.+?__`,
    "g"
  );
  let match: RegExpExecArray | null;
  while ((match = placeholderRegex.exec(text)) !== null) {
    result.add(match[0]);
  }
  return result;
}

/**
 * Escapes special characters in a string to be used in a regular expression.
 * @param string - The input string.
 * @returns The escaped string.
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
