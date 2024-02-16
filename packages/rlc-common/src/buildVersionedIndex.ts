// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel, VersionedBuilderOptions } from "./interfaces.js";
import * as path from "path";

export function buildVersionedIndexFile(
  model: RLCModel,
  options?: VersionedBuilderOptions
) {
  if (!options || !options.versions || options.versions.length === 0) {
    return;
  }
  const project = new Project();
  const { srcPath } = model;
  const filePath = path.join(srcPath, `index.ts`);
  const indexFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  for (const version of options.versions) {
    const moduleName = sanitizeForImportAlias(version);
    indexFile.addImportDeclaration({
      moduleSpecifier: `./${version}`,
      namespaceImport: moduleName
    });
    indexFile.addExportDeclaration({
      namedExports: [moduleName]
    });
  }

  return {
    path: filePath,
    content: indexFile.getFullText()
  };
}

function sanitizeForImportAlias(str: string): string {
  // Remove invalid start characters
  let sanitized = str;

  // Prepend 'v' if the string doesn't start with a valid character
  if (!sanitized.match(/^[a-zA-Z_$]/)) {
    sanitized = "v" + sanitized;
  }

  // Replace invalid characters within the string
  sanitized = sanitized.replace(/[^a-zA-Z_$0-9]/g, "_");

  return sanitized;
}
