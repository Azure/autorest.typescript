// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "./interfaces.js";
import * as path from "path";

export function buildVersionedIndexFile(model: RLCModel, versions: string[]) {
  const project = new Project();
  const { srcPath } = model;
  const filePath = path.join(srcPath, `index.ts`);
  const indexFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  for (const version of versions) {
    indexFile.addImportDeclaration({
      moduleSpecifier: `./${version}`,
      namespaceImport: version
    });
    indexFile.addExportDeclaration({
      namedExports: [version]
    });
  }

  return {
    path: filePath,
    content: indexFile.getFullText()
  };
}
