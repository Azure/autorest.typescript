// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";

export interface WarpConfigOptions {
  /** Source-level exports, e.g. { ".": "./src/index.ts", "./models": "./src/models/index.ts" } */
  exports?: Record<string, string>;
}

/** Default exports included in every warp config. */
const BASE_EXPORTS: Record<string, string> = {
  "./package.json": "./package.json",
  ".": "./src/index.ts"
};

/** Full inline warp config template. */
export const WarpConfigTemplate = `# warp.config.yml — build configuration

exports:
{{exports}}

targets:
  - name: browser
    tsconfig: "./config/tsconfig.src.browser.json"

  - name: react-native
    tsconfig: "./config/tsconfig.src.react-native.json"

  - name: esm
    condition: import
    tsconfig: "./config/tsconfig.src.esm.json"

  - name: commonjs
    condition: require
    tsconfig: "./config/tsconfig.src.cjs.json"
    moduleType: commonjs
`;

/**
 * Builds a self-contained warp.config.yml file.
 *
 * Emits a full inline config with all exports and targets.
 * Polyfill resolution (browser/react-native file substitution) is handled
 * via package.json `imports` subpath imports (#platform/*).
 */
export function buildWarpConfig(
  model: RLCModel,
  { exports }: WarpConfigOptions = {}
) {
  if (model.options?.moduleKind !== "esm") {
    return;
  }

  const allExports: Record<string, string> = {
    ...BASE_EXPORTS,
    ...exports
  };

  const exportsContent = Object.entries(allExports)
    .map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`)
    .join("\n");

  const content = WarpConfigTemplate.replace("{{exports}}", exportsContent);

  return { path: "warp.config.yml", content };
}
