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

/** Full inline warp config template with polyfillSuffix on browser/react-native targets. */
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
    moduleType: commonjs
`;

/**
 * Builds a self-contained warp.config.yml file.
 *
 * Always emits a full inline config with all exports and targets.
 * We intentionally do NOT use `extends: warp.base.config.yml` because
 * warp replaces targets entirely (no per-name merge), so we'd have to
 * redefine every target anyway to include polyfillSuffix. A standalone
 * config is simpler and avoids a hidden dependency on the base file.
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
