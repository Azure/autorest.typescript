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

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const SourceFileSymbol = Symbol("SourceFile");
export interface StaticHelperMetadata {
  name: string;
  kind: "function" | "interface" | "typeAlias" | "class";
  location: string;
  [SourceFileSymbol]?: SourceFile;
}

export interface ExtendedStaticHelperSymbol extends StaticHelperMetadata {
  sourceFile: SourceFile;
}

export type StaticHelpers = Record<string, StaticHelperMetadata>;

const DEFAULT_STATIC_HELPERS_PATH = path.resolve(
  __dirname,
  "src/assets/static-helpers"
);

export interface LoadStaticHelpersOptions {
  helpersAssetDirectory?: string;
}

export async function loadStaticHelpers(
  project: Project,
  helpers: StaticHelpers,
  options: LoadStaticHelpersOptions = {}
): Promise<Map<string, StaticHelperMetadata>> {
  const helpersMap = new Map<string, StaticHelperMetadata>();
  const files = await traverseDirectory(
    options.helpersAssetDirectory ?? DEFAULT_STATIC_HELPERS_PATH
  );

  for (const file of files) {
    const contents = await readFile(file.source, "utf-8");
    const addedFile = project.createSourceFile(file.target, contents);

    for (const [key, entry] of Object.entries(helpers)) {
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
      helpersMap.set(key, entry);
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

const _targetStaticHelpersBaseDir = path.join("src", "static-files");
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
        } else if (fileStat.isFile() && file.endsWith(".ts")) {
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
