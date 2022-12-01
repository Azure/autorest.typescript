// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "./helpers/nameUtils.js";
import { RLCModel } from "./interfaces.js";
import { Project } from "ts-morph";
import * as path from "path";

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
    const relativePath = "." + srcPath.substring(srcPath.indexOf("/src/") + 4);
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
    const content = indexFile.getFullText();
    const filePath = path.join(srcPath.substring(0, srcPath.indexOf("/src/") + 5), `index.ts`);
    return { path: filePath, content };
  }
}
