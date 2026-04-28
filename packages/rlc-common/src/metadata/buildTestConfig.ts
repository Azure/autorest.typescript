// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";
import { getPackageName } from "./utils.js";

function shouldGenerateTestConfig(model: RLCModel): boolean {
  const isAzureSdkForJs = model.options?.azureSdkForJs ?? false;
  return !(
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false ||
    isAzureSdkForJs !== true
  );
}

/**
 * Builds config/tsconfig.test.browser.json — extends eng/tsconfigs/test.browser.json
 */
export function buildTestBrowserTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  const name = getPackageName(model);

  return {
    path: "config/tsconfig.test.browser.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/test.browser.json",
        compilerOptions: {
          paths: {
            [name]: ["../src/index.ts"],
            [`${name}/*`]: ["../src/*"],
            "$internal/*": ["../src/*"]
          }
        }
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.test.node.json — extends eng/tsconfigs/test.node.json
 */
export function buildTestNodeTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  const name = getPackageName(model);

  return {
    path: "config/tsconfig.test.node.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/test.node.json",
        compilerOptions: {
          paths: {
            [name]: ["../src/index.ts"],
            [`${name}/*`]: ["../src/*"],
            "$internal/*": ["../src/*"]
          }
        }
      },
      null,
      2
    )
  };
}

// ─── Backward-compatible export for autorest.typescript (maintenance mode) ───

/** @deprecated Kept for autorest.typescript compat. */
export function buildTestMainTsConfig(model: RLCModel) {
  if (!shouldGenerateTestConfig(model)) {
    return;
  }

  return {
    path: "tsconfig.test.json",
    content: JSON.stringify(
      {
        references: [
          { path: "./tsconfig.test.node.json" },
          { path: "./tsconfig.browser.config.json" }
        ],
        compilerOptions: { composite: true },
        files: []
      },
      null,
      2
    )
  };
}
