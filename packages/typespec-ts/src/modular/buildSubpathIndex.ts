import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { ModularEmitterOptions } from "./interfaces.js";

import { join } from "path";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { useContext } from "../contextManager.js";
import { Node, SourceFile } from "ts-morph";

export interface buildSubpathIndexFileOptions {
  exportIndex?: boolean;
  interfaceOnly?: boolean;
  recursive?: boolean;
}

export function buildSubpathIndexFile(
  emitterOptions: ModularEmitterOptions,
  subpath: string,
  clientMap?: [string[], SdkClientType<SdkServiceOperation>],
  options: buildSubpathIndexFileOptions = {}
) {
  const project = useContext("outputProject");
  const subfolder = clientMap
    ? (getModularClientOptions(clientMap).subfolder ?? "")
    : "";
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  // Skip to export these files because they are used internally.
  const skipFiles = ["pagingHelpers.ts", "pollingHelpers.ts"];
  let folders = [];
  if (options.recursive) {
    folders = project
      .getDirectories()
      .filter((dir) => {
        const formattedDir = dir.getPath().replace(/\\/g, "/");
        const targetPath = join(srcPath, subfolder, subpath).replace(
          /\\/g,
          "/"
        );
        return (
          formattedDir.startsWith(targetPath) &&
          !project.getSourceFile(`${formattedDir}/index.ts`)
        );
      })
      .map((dir) => {
        return dir.getPath().replace(/\\/g, "/");
      });
  } else {
    folders = [join(srcPath, subfolder, subpath).replace(/\\/g, "/")];
  }
  for (const folder of folders) {
    const apiFilePattern =
      subpath === "models" ? join(folder, "models.ts") : folder;
    const apiFiles = project.getSourceFiles().filter((file) => {
      if (subpath === "api" && options.recursive) {
        return (
          file.getDirectoryPath().replace(/\\/g, "/") ===
          apiFilePattern.replace(/\\/g, "/")
        );
      }
      return file
        .getFilePath()
        .replace(/\\/g, "/")
        .startsWith(
          apiFilePattern.replace(/\\/g, "/") +
            (apiFilePattern.endsWith("models.ts") ? "" : "/")
        );
    });
    if (apiFiles.length === 0) {
      continue;
    }
    const indexFile = project.createSourceFile(`${folder}/index.ts`);
    for (const file of apiFiles) {
      const filePath = file.getFilePath();
      const serializerOrDeserializerRegex =
        /.*(Serializer|Deserializer)(_\d+)?$/;
      if (!options.exportIndex && filePath.endsWith("index.ts")) {
        continue;
      }
      // Skip to export these files because they are used internally.
      if (skipFiles.some((skipFile) => filePath.endsWith(skipFile))) {
        continue;
      }
      if (filePath === indexFile.getFilePath()) {
        continue;
      }

      let filteredDeclarations = [
        ...file.getExportedDeclarations().entries()
      ].filter((exDeclaration) => {
        if (exDeclaration[0].startsWith("_")) {
          return false;
        }
        return exDeclaration[1].some((ex) => {
          if (
            options.interfaceOnly &&
            ex.getKindName() !== "InterfaceDeclaration"
          ) {
            return false;
          }

          // skip exporting serializers for models
          if (
            subpath === "models" &&
            ex.getKindName() === "FunctionDeclaration" &&
            serializerOrDeserializerRegex.test(exDeclaration[0])
          ) {
            return false;
          }

          return true;
        });
      });
      // Skip to export PagedResult and BuildPagedAsyncIteratorOptions
      if (filePath.endsWith("pagingTypes.ts")) {
        filteredDeclarations = filteredDeclarations.filter(
          ([name]) =>
            !["PagedResult", "BuildPagedAsyncIteratorOptions"].includes(name)
        );
      }
      if (filteredDeclarations.length > 0) {
        const moduleSpecifier = `.${filePath
          .replace(indexFile.getDirectoryPath(), "")
          .replace(/\\/g, "/")
          .replace(".ts", "")}.js`;
        partitionAndEmitExports(
          indexFile,
          moduleSpecifier,
          filteredDeclarations
        );
      }
    }
  }
}

export function isTypeOnlyNode(node: Node): boolean {
  const kind = node.getKindName();
  return kind === "InterfaceDeclaration" || kind === "TypeAliasDeclaration";
}

/**
 * Partition declaration entries into type-only and value exports in a single pass,
 * then emit both export declarations on the index file.
 */
export function partitionAndEmitExports(
  indexFile: SourceFile,
  moduleSpecifier: string,
  entries: [string, Node[]][],
  mapName: (name: string) => string = (n) => n
): void {
  const typeOnlyExports: string[] = [];
  const valueExports: string[] = [];
  for (const [name, decls] of entries) {
    const mapped = mapName(name);
    if (decls.every(isTypeOnlyNode)) {
      typeOnlyExports.push(mapped);
    } else {
      valueExports.push(mapped);
    }
  }
  if (typeOnlyExports.length > 0) {
    indexFile.addExportDeclaration({
      isTypeOnly: true,
      moduleSpecifier,
      namedExports: typeOnlyExports
    });
  }
  if (valueExports.length > 0) {
    indexFile.addExportDeclaration({
      moduleSpecifier,
      namedExports: valueExports
    });
  }
}
