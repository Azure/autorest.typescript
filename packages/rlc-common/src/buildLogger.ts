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
  const filePath = path.join(srcPath, "logger.ts");
  const loggerFile = project.createSourceFile("logger.ts", undefined, {
    overwrite: true
  });
  loggerFile.addImportDeclaration({
    namedImports: ["createClientLogger"],
    moduleSpecifier: `@azure/logger`
  });
  loggerFile.addStatements(
    `export const logger = createClientLogger("${packageDetails?.nameWithoutScope}")`
  );
  return { path: filePath, content: loggerFile.getFullText() };
}
