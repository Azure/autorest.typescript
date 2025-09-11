// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";
import { getPackageName } from "./utils.js";

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
  const name = getPackageName(model);

  const content: Record<string, any> = {
    extends: "../../../tsconfig.browser.base.json",
    compilerOptions: {
      paths: {
        [name]: ["./dist/browser/index.d.ts"],
        [`${name}/*`]: ["./dist/browser/*"],
        "$internal/*": ["./dist/browser/*"]
      }
    }
  };

  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(content, null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
