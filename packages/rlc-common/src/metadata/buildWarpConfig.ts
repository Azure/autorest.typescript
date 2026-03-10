// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";
import { isAzureMonorepoPackage } from "../helpers/packageUtil.js";

export interface WarpConfigOptions {
  /** Source-level exports, e.g. { ".": "./src/index.ts", "./models": "./src/models/index.ts" } */
  exports?: Record<string, string>;
}

export const WarpConfigTemplate = `# warp.config.yml — build configuration

exports:
{{exports}}

targets:
  - name: browser
    tsconfig: "../../../tsconfig.src.browser.json"
    polyfillSuffix: "-browser"

  - name: react-native
    tsconfig: "../../../tsconfig.src.react-native.json"
    polyfillSuffix: "-react-native"

  - name: esm
    condition: import
    tsconfig: "../../../tsconfig.src.esm.json"

  - name: commonjs
    condition: require
    tsconfig: "../../../tsconfig.src.cjs.json"
`;

/**
 * Builds a warp.config.yml file for Azure SDK monorepo packages.
 * Only generated when azureSdkForJs is true.
 */
export function buildWarpConfig(
  model: RLCModel,
  { exports }: WarpConfigOptions = {}
) {
  if (!isAzureMonorepoPackage(model)) {
    return;
  }

  if (model.options?.moduleKind !== "esm") {
    return;
  }

  const allExports: Record<string, string> = {
    "./package.json": "./package.json",
    ".": "./src/index.ts",
    ...exports
  };

  const exportsContent = Object.entries(allExports)
    .map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`)
    .join("\n");

  const content = WarpConfigTemplate.replace("{{exports}}", exportsContent);

  return {
    path: "warp.config.yml",
    content
  };
}
