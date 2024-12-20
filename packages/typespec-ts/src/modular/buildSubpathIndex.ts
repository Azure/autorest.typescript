import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { ModularEmitterOptions } from "./interfaces.js";

import { join } from "path";
import { SdkContext } from "../utils/interfaces.js";
import { getModularClientOptions } from "../utils/clientUtils.js";

export interface buildSubpathIndexFileOptions {
  exportIndex?: boolean;
  interfaceOnly?: boolean;
}

export function buildSubpathIndexFile(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  subpath: string,
  client?: SdkClientType<SdkServiceOperation>,
  options: buildSubpathIndexFileOptions = {}
) {
  const subfolder = client
    ? (getModularClientOptions(context, client).subfolder ?? "")
    : "";
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  // Skip to export these files because they are used internally.
  const skipFiles = ["pagingHelpers.ts", "pollingHelpers.ts"];
  const apiFilePattern = join(srcPath, subfolder, subpath);
  const apiFiles = emitterOptions.project.getSourceFiles().filter((file) => {
    return file
      .getFilePath()
      .replace(/\\/g, "/")
      .startsWith(apiFilePattern.replace(/\\/g, "/"));
  });
  if (apiFiles.length === 0) {
    return;
  }
  const indexFile = emitterOptions.project.createSourceFile(
    `${srcPath}/${subfolder}/${subpath}/index.ts`
  );
  for (const file of apiFiles) {
    const filePath = file.getFilePath();
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

    let namedExports: string[] = [...file.getExportedDeclarations().entries()]
      .filter((exDeclaration) => {
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
            (exDeclaration[0].endsWith("Serializer") ||
              exDeclaration[0].endsWith("Deserializer"))
          ) {
            return false;
          }

          return true;
        });
      })
      .map((exDeclaration) => {
        return exDeclaration[0];
      });
    // Skip to export PagedResult and BuildPagedAsyncIteratorOptions
    if (filePath.endsWith("pagingTypes.ts")) {
      namedExports = namedExports.filter(
        (ex) => !["PagedResult", "BuildPagedAsyncIteratorOptions"].includes(ex)
      );
    }
    indexFile.addExportDeclaration({
      moduleSpecifier: `.${filePath
        .replace(indexFile.getDirectoryPath(), "")
        .replace(/\\/g, "/")
        .replace(".ts", "")}.js`,
      namedExports
    });
  }
}
