// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

export function buildTsTestBrowserConfig(model: RLCModel) {
  const isAzureSdkForJs = model.options?.azureSdkForJs ?? false;
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false ||
    isAzureSdkForJs !== true
  ) {
    return;
  }

  const filePath = "tsconfig.browser.config.json";
  const project = new Project();

  const content = {
    extends: "./.tshy/build.json",
    include: ["src/**/*.ts", "src/**/*.mts", "test/**/*.spec.ts"],
    exclude: ["test/**/node/**/*.ts"],
    compilerOptions: {
      outDir: "./dist-test/browser",
      rootDir: ".",
      skipLibCheck: true
    }
  };

  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(content),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
