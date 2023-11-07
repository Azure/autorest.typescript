// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "./interfaces.js";
import { Project } from "ts-morph";
import * as path from "path";

export function buildLogger(model: RLCModel) {
  if (!model.options) {
    return undefined;
  }
  const project = new Project();
  const { srcPath } = model;
  const { packageDetails } = model.options;
  const filePath = path.join(
    srcPath.substring(0, srcPath.lastIndexOf("src") + 4),
    `logger.ts`
  );
  const loggerFile = project.createSourceFile("logger.ts", undefined, {
    overwrite: true
  });
  loggerFile.addImportDeclaration({
    namedImports: ["createClientLogger"],
    moduleSpecifier: `@azure/logger`
  });
  loggerFile.addStatements(
    `export const logger = createClientLogger("${
      packageDetails!.nameWithoutScope ?? packageDetails?.name ?? ""
    }")`
  );
  return { path: filePath, content: loggerFile.getFullText() };
}
