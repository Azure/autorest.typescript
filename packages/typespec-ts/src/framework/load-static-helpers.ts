import { readdir, stat, readFile } from "fs/promises";
import * as path from "path";
import {
  ClassDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  Project,
  SourceFile,
  TypeAliasDeclaration
} from "ts-morph";
import { refkey } from "./refkey.js";
import { resolveProjectRoot } from "../utils/resolve-project-root.js";
import { isAzurePackage } from "@azure-tools/rlc-common";
import { ModularEmitterOptions } from "../modular/modularCodeModel.js";
export const SourceFileSymbol = Symbol("SourceFile");
export interface StaticHelperMetadata {
  name: string;
  kind: "function" | "interface" | "typeAlias" | "class";
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

const DEFAULT_STATIC_HELPERS_PATH = "static/static-helpers";

export interface LoadStaticHelpersOptions
  extends Partial<ModularEmitterOptions> {
  helpersAssetDirectory?: string;
  sourcesDir?: string;
}

export async function loadStaticHelpers(
  project: Project,
  helpers: StaticHelpers,
  options: LoadStaticHelpersOptions = {}
): Promise<Map<string, StaticHelperMetadata>> {
  const sourcesDir = options.sourcesDir ?? "";
  const helpersMap = new Map<string, StaticHelperMetadata>();
  const defaultStaticHelpersPath = path.join(
    resolveProjectRoot(),
    DEFAULT_STATIC_HELPERS_PATH
  );
  const files = await traverseDirectory(
    options.helpersAssetDirectory ?? defaultStaticHelpersPath
  );

  for (const file of files) {
    const targetPath = path.join(sourcesDir, file.target);
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

  return assertAllHelpersLoadedPresent(helpersMap);
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
    default:
      throw new Error(
        `invalid helper kind ${declaration.kind}\nAll helpers provided to loadStaticHelpers are of kind: function, interface, typeAlias, class`
      );
  }
}

const _targetStaticHelpersBaseDir = "static-helpers";
async function traverseDirectory(
  directory: string,
  result: { source: string; target: string }[] = [],
  relativePath: string = ""
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
            result,
            path.join(relativePath, file)
          );
        } else if (
          fileStat.isFile() &&
          !file.endsWith(".d.ts") &&
          file.endsWith(".ts")
        ) {
          const target = path.join(
            _targetStaticHelpersBaseDir,
            relativePath,
            file
          );
          result.push({ source: filePath, target });
        }
      })
    );

    return result;
  } catch (error) {
    console.error(`Error traversing directory ${directory}:`, error);
    throw error;
  }
}
