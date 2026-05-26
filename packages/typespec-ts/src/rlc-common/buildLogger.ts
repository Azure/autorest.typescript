// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "./interfaces.js";
import { Project } from "ts-morph";
import * as path from "path";

export function buildLogger(model: RLCModel) {
  if (!model.options) {
    return undefined;
  }
  // Disable logger for non-Azure packages
  if (model.options.flavor !== "azure") {
    return undefined;
  }
  const project = new Project();
  const { srcPath, rlcSourceDir } = model;
  const { packageDetails } = model.options;
  const filePath = path.join(
    model.options.sourceFrom == "Swagger"
      ? srcPath.substring(
          0,
          srcPath.includes("generated") && !srcPath.includes("src")
            ? srcPath.lastIndexOf("generated") + 10
            : srcPath.lastIndexOf("src") + 4
        )
      : rlcSourceDir!,
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
