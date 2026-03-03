// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";
import { isAzureMonorepoPackage } from "../helpers/packageUtil.js";

export interface WarpConfigOptions {
  /** Source-level exports, e.g. { ".": "./src/index.ts", "./models": "./src/models/index.ts" } */
  exports?: Record<string, string>;
}

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

  const lines: string[] = [];
  lines.push("# warp.config.yml — build configuration");
  lines.push("");
  lines.push("exports:");
  for (const [key, value] of Object.entries(allExports)) {
    lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(value)}`);
  }
  lines.push("");
  lines.push("targets:");
  lines.push("  - name: browser");
  lines.push('    tsconfig: "../../../tsconfig.src.browser.json"');
  lines.push('    polyfillSuffix: "-browser"');
  lines.push("");
  lines.push("  - name: react-native");
  lines.push('    tsconfig: "../../../tsconfig.src.react-native.json"');
  lines.push('    polyfillSuffix: "-react-native"');
  lines.push("");
  lines.push("  - name: esm");
  lines.push("    condition: import");
  lines.push('    tsconfig: "../../../tsconfig.src.esm.json"');
  lines.push("");
  lines.push("  - name: commonjs");
  lines.push("    condition: require");
  lines.push('    tsconfig: "../../../tsconfig.src.cjs.json"');
  lines.push("");

  return {
    path: "warp.config.yml",
    content: lines.join("\n")
  };
}
