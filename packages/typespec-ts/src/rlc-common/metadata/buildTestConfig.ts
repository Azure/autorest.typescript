// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";
import { getPackageName } from "./utils.js";

const highLevelTsTestConfig: Record<string, any> = {
  references: [
    {
      path: "./tsconfig.test.node.json"
    },
    {
      path: "./tsconfig.browser.config.json"
    }
  ],
  compilerOptions: {
    composite: true
  },
  files: []
};

function shouldGenerateTestConfig(model: RLCModel): boolean {
  const isAzureSdkForJs = model.options?.azureSdkForJs ?? false;
  return !(
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false ||
    isAzureSdkForJs !== true
  );
}

export function buildTestBrowserTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  const browserFilePath = "tsconfig.browser.config.json";
  const project = new Project();
  const name = getPackageName(model);

  const browserContent: Record<string, any> = {
    extends: "../../../tsconfig.browser.base.json",
    compilerOptions: {
      paths: {
        [name]: ["./dist/browser/index.d.ts"],
        [`${name}/*`]: ["./dist/browser/*"],
        "$internal/*": ["./dist/browser/*"]
      }
    }
  };

  const browserConfigFile = project.createSourceFile(
    browserFilePath,
    JSON.stringify(browserContent, null, 2),
    {
      overwrite: true
    }
  );

  return {
    path: browserFilePath,
    content: browserConfigFile.getFullText()
  };
}

export function buildTestNodeTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  const testNodeFilePath = "tsconfig.test.node.json";
  const project = new Project();
  const name = getPackageName(model);

  const testNodeContent: Record<string, any> = {
    extends: "../../../tsconfig.test.node.base.json",
    compilerOptions: {
      paths: {
        [name]: ["./src/index.ts"],
        [`${name}/*`]: ["./src/*"],
        "$internal/*": ["./src/*"]
      }
    }
  };

  const testNodeConfigFile = project.createSourceFile(
    testNodeFilePath,
    JSON.stringify(testNodeContent, null, 2),
    {
      overwrite: true
    }
  );

  return {
    path: testNodeFilePath,
    content: testNodeConfigFile.getFullText()
  };
}

export function buildTestMainTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  const testFilePath = "tsconfig.test.json";

  return {
    path: testFilePath,
    content: JSON.stringify(highLevelTsTestConfig, null, 2)
  };
}
