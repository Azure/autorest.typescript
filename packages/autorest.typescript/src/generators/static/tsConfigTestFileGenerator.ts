// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateTestTsConfig(project: Project) {
  const { packageDetails } = getAutorestOptions();

  const highLevelTsBrowserConfig: Record<string, any> = {
    extends: "../../../../eng/tsconfigs/test.browser.json",
    compilerOptions: {
      paths: {
        [packageDetails.name]: ["../src/index.ts"],
        [`${packageDetails.name}/*`]: ["../src/*"],
        "$internal/*": ["../src/*"]
      }
    }
  };

  project.createSourceFile(
    "config/tsconfig.test.browser.json",
    JSON.stringify(highLevelTsBrowserConfig, null, 2),
    {
      overwrite: true
    }
  );

  const testNodeTsConfig: Record<string, any> = {
    extends: "../../../../eng/tsconfigs/test.node.json",
    compilerOptions: {
      paths: {
        [packageDetails.name]: ["../src/index.ts"],
        [`${packageDetails.name}/*`]: ["../src/*"],
        "$internal/*": ["../src/*"]
      }
    }
  };

  project.createSourceFile(
    "config/tsconfig.test.node.json",
    JSON.stringify(testNodeTsConfig, null, 2),
    {
      overwrite: true
    }
  );
}

