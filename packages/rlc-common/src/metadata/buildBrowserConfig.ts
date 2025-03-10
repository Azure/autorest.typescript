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
    extends: ["./tsconfig.test.json", "../../../tsconfig.browser.base.json"]
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
