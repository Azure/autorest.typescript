// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "./helpers/nameUtils.js";
import { RLCModel } from "./interfaces.js";
import { Project } from "ts-morph";

const batchOutputFolder: [string, string, string][] = [];

export function buildTopLevelIndex(model: RLCModel) {
  if (!model.options) {
    return undefined;
  }
  const project = new Project();
  const { srcPath } = model;
  const { multiClient, batch } = model.options;
  if (srcPath) {
    const clientName = model.libraryName;
    const moduleName = normalizeName(clientName, NameType.File);
    const relativePath = srcPath.replace("/src", "");
    batchOutputFolder.push([relativePath, clientName, moduleName]);
  }
  if (
    multiClient &&
    batch &&
    batch.length > 1 &&
    batchOutputFolder.length === batch.length
  ) {
    const indexFile = project.createSourceFile("index.ts", undefined, {
      overwrite: true
    });
    const allModules: string[] = [];
    batchOutputFolder.forEach((item) => {
      indexFile.addImportDeclaration({
        namespaceImport: item[1],
        moduleSpecifier: `${item[0]}`
      });
      allModules.push(item[1]);
    });
    indexFile.addExportDeclaration({
      namedExports: [...allModules]
    });
    // TODO handle multi-client path issue in cald
    return { path: "", content: indexFile.getFullText() };
  }
}
