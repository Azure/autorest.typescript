// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "./helpers/nameUtils.js";
import { RLCModel } from "./interfaces.js";
import { Project } from "ts-morph";
import * as path from "path";
import { getRelativePartFromSrcPath } from "./helpers/pathUtils.js";
import { getImportModuleName } from "./helpers/nameConstructors.js";

const batchOutputFolder: [string, string, string][] = [];

export function buildTopLevelIndex(model: RLCModel) {
  if (!model.options) {
    return undefined;
  }
  const project = new Project();
  const { srcPath } = model;
  const { multiClient } = model.options;
  const batch = model.options.batch;
  if (srcPath) {
    const clientName = model.libraryName;
    const moduleName = normalizeName(clientName, NameType.File);
    const relativePath =
      "./" +
      getRelativePartFromSrcPath(srcPath, model.options.isModularLibrary);
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
        isTypeOnly: true,
        namespaceImport: item[1],
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `${item[0]}`,
            esModulesName: `${item[0]}/index.js`
          },
          model
        )
      });
      allModules.push(item[1]);
    });
    indexFile.addExportDeclaration({
      namedExports: [...allModules]
    });
    const content = indexFile.getFullText();
    const filePath = path.join(
      srcPath.substring(0, srcPath.lastIndexOf("src") + 4),
      model.options.isModularLibrary ? "rest" : "",
      `index.ts`
    );
    return { path: filePath, content };
  }
}
