// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

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

export function generateTestTsConfig(project: Project) {
  const { packageDetails } = getAutorestOptions();
  const highLevelTsBrowserConfig: Record<string, any> = {
    extends: "../../../tsconfig.browser.base.json",
    compilerOptions: {
      paths: {
        [packageDetails.name]: ["./dist/browser/index.d.ts"],
        [`${packageDetails.name}/*`]: ["./dist/browser/*"],
        "$internal/*": ["./dist/browser/*"]
      }
    }
  };

  project.createSourceFile(
    "tsconfig.browser.config.json",
    JSON.stringify(highLevelTsBrowserConfig),
    {
      overwrite: true
    }
  );

  // Also generate the test node tsconfig that points to source files for tests
  const testNodeTsConfig: Record<string, any> = {
    extends: "../../../tsconfig.test.node.base.json",
    compilerOptions: {
      paths: {
        [packageDetails.name]: ["./src/index.ts"],
        [`${packageDetails.name}/*`]: ["./src/*"],
        "$internal/*": ["./src/*"]
      }
    }
  };

  project.createSourceFile(
    "tsconfig.test.node.json",
    JSON.stringify(testNodeTsConfig),
    {
      overwrite: true
    }
  );

  project.createSourceFile(
    "tsconfig.test.json",
    JSON.stringify(highLevelTsTestConfig, null, 2),
    {
      overwrite: true
    }
  );
}
