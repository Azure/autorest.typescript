import { readdir, stat, readFile } from "fs/promises";
import * as path from "path";
import {
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  Project,
  SourceFile,
  TypeAliasDeclaration
} from "ts-morph";
import { refkey } from "./refkey.js";
import { resolveProjectRoot } from "../utils/resolve-project-root.js";
import { isAzurePackage } from "@azure-tools/rlc-common";
import { ModularEmitterOptions } from "../modular/interfaces.js";
import { NoTarget, Program } from "@typespec/compiler";
import { reportDiagnostic } from "../lib.js";
export const SourceFileSymbol = Symbol("SourceFile");
export interface StaticHelperMetadata {
  name: string;
  kind: "function" | "interface" | "typeAlias" | "class" | "enum";
  location: string;
  [SourceFileSymbol]?: SourceFile;
}

export function isStaticHelperMetadata(
  metadata: any
): metadata is StaticHelperMetadata {
  return Boolean(
    metadata &&
      metadata.name &&
      metadata.kind &&
      metadata.location &&
      metadata[SourceFileSymbol]
  );
}

export type StaticHelpers = Record<string, StaticHelperMetadata>;

const DEFAULT_SOURCES_STATIC_HELPERS_PATH = "static/static-helpers";
const DEFAULT_SOURCES_TESTING_HELPERS_PATH = "static/test-helpers";

export interface LoadStaticHelpersOptions
  extends Partial<ModularEmitterOptions> {
  helpersAssetDirectory?: string;
  sourcesDir?: string;
  rootDir?: string;
  program?: Program;
}

interface FileMetadata {
  source: string;
  target: string;
}

export async function loadStaticHelpers(
  project: Project,
  helpers: StaticHelpers,
  options: LoadStaticHelpersOptions = {}
): Promise<Map<string, StaticHelperMetadata>> {
  const helpersMap = new Map<string, StaticHelperMetadata>();
  // Load static helpers used in sources code
  const defaultStaticHelpersPath = path.join(
    resolveProjectRoot(),
    DEFAULT_SOURCES_STATIC_HELPERS_PATH
  );
  const filesInSources  = await traverseDirectory(
    options.helpersAssetDirectory ?? defaultStaticHelpersPath,
    options.program
  );
  await loadFiles(filesInSources, options.sourcesDir ?? "");
  // Load static helpers used in testing code
  const defaultTestingHelpersPath = path.join(
    resolveProjectRoot(),
    DEFAULT_SOURCES_TESTING_HELPERS_PATH
  );
  const filesInTestings = await traverseDirectory(
    defaultTestingHelpersPath,
    options.program,
    [],
    "",
    "test/generated/util"
  );
  await loadFiles(filesInTestings, options.rootDir ?? "");
  return assertAllHelpersLoadedPresent(helpersMap);

  async function loadFiles(files: FileMetadata[], generateDir: string) {
    for (const file of files) {
      const targetPath = path.join(generateDir, file.target);
      const contents = await readFile(file.source, "utf-8");
      const addedFile = project.createSourceFile(targetPath, contents, {
        overwrite: true
      });
      addedFile.getImportDeclarations().map((i) => {
        if (!isAzurePackage({ options: options.options })) {
          if (
            i
              .getModuleSpecifier()
              .getFullText()
              .includes("@azure/core-rest-pipeline")
          ) {
            i.setModuleSpecifier("@typespec/ts-http-runtime");
          }
          if (
            i
              .getModuleSpecifier()
              .getFullText()
              .includes("@azure-rest/core-client")
          ) {
            i.setModuleSpecifier("@typespec/ts-http-runtime");
          }
        }
      });

      for (const entry of Object.values(helpers)) {
        if (!addedFile.getFilePath().endsWith(entry.location)) {
          continue;
        }

        const declaration = getDeclarationByMetadata(addedFile, entry);
        if (!declaration) {
          throw new Error(
            `Declaration ${
              entry.name
            } not found in file ${addedFile.getFilePath()}\n This is an Emitter bug, make sure that the map of static helpers passed to loadStaticHelpers matches what is in the file.`
          );
        }

        entry[SourceFileSymbol] = addedFile;
        helpersMap.set(refkey(entry), entry);
      }
    }
  }
}

function assertAllHelpersLoadedPresent(
  helpers: Map<string, StaticHelperMetadata>
) {
  const missingHelpers = [];
  for (const helper of helpers.values()) {
    if (!helper[SourceFileSymbol]) {
      missingHelpers.push(helper);
    }
  }

  if (missingHelpers.length > 0) {
    const missingHelpersString = missingHelpers
      .map((helper) => `${helper.name} - ${helper.location}`)
      .join("\n");

    throw new Error(
      `The following helpers were not found in the project, make sure they are defined in the expected static helper file: ${missingHelpersString}`
    );
  }

  return helpers;
}

function getDeclarationByMetadata(
  file: SourceFile,
  declaration: StaticHelperMetadata
):
  | ClassDeclaration
  | FunctionDeclaration
  | TypeAliasDeclaration
  | InterfaceDeclaration
  | EnumDeclaration
  | undefined {
  switch (declaration.kind) {
    case "class":
      return file.getClass(declaration.name);
    case "function":
      return file.getFunction(declaration.name);
    case "interface":
      return file.getInterface(declaration.name);
    case "typeAlias":
      return file.getTypeAlias(declaration.name);
    case "enum":
      return file.getEnum(declaration.name);
    default:
      throw new Error(
        `invalid helper kind ${declaration.kind}\nAll helpers provided to loadStaticHelpers are of kind: function, interface, typeAlias, class`
      );
  }
}

async function traverseDirectory(
  directory: string,
  program?: Program,
  result: { source: string; target: string }[] = [],
  relativePath: string = "",
  targetBaseDir: string = "static-helpers"
): Promise<{ source: string; target: string }[]> {
  try {
    const files = await readdir(directory);

    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(directory, file);
        const fileStat = await stat(filePath);

        if (fileStat.isDirectory()) {
          await traverseDirectory(
            filePath,
            program,
            result,
            path.join(relativePath, file),
            targetBaseDir
          );
        } else if (
          fileStat.isFile() &&
          !file.endsWith(".d.ts") &&
          file.endsWith(".ts")
        ) {
          const target = path.join(targetBaseDir, relativePath, file);
          result.push({ source: filePath, target });
        }
      })
    );

    return result;
  } catch (error) {
    if (program) {
      reportDiagnostic(program, {
        code: "directory-traversal-error",
        format: { directory, error: String(error) },
        target: NoTarget
      });
    }
    throw error;
  }
}
