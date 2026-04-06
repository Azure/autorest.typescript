// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";
import { isAzureMonorepoPackage } from "../helpers/packageUtil.js";

export interface WarpConfigOptions {
  /** Source-level exports, e.g. { ".": "./src/index.ts", "./models": "./src/models/index.ts" } */
  exports?: Record<string, string>;
}

/** Exports already provided by warp.base.config.yml in the azure-sdk-for-js monorepo root. */
const BASE_EXPORTS: Record<string, string> = {
  "./package.json": "./package.json",
  ".": "./src/index.ts"
};

/** Full inline template for standalone (non-monorepo) packages. */
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
 * Builds a warp.config.yml file.
 *
 * - Azure monorepo packages get an `extends`-based config that inherits
 *   shared targets and base exports from `warp.base.config.yml`.
 * - Non-Azure packages get a full inline config with all targets.
 */
export function buildWarpConfig(
  model: RLCModel,
  { exports }: WarpConfigOptions = {}
) {
  if (model.options?.moduleKind !== "esm") {
    return;
  }

  if (isAzureMonorepoPackage(model)) {
    return buildExtendsConfig(exports);
  }

  return buildInlineConfig(exports);
}

/**
 * Generates an extends-based warp config for Azure SDK monorepo packages.
 * Only emits custom exports beyond what the base config provides.
 */
function buildExtendsConfig(exports?: Record<string, string>): {
  path: string;
  content: string;
} {
  const customExports = exports
    ? Object.fromEntries(
        Object.entries(exports).filter(
          ([key, value]) =>
            !(key in BASE_EXPORTS && BASE_EXPORTS[key] === value)
        )
      )
    : undefined;

  let content = "extends: ../../../warp.base.config.yml\n";

  if (customExports && Object.keys(customExports).length > 0) {
    const exportsYaml = Object.entries(customExports)
      .map(
        ([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`
      )
      .join("\n");
    content += `exports:\n${exportsYaml}\n`;
  }

  return { path: "warp.config.yml", content };
}

/** Generates a full inline warp config for non-monorepo packages. */
function buildInlineConfig(exports?: Record<string, string>): {
  path: string;
  content: string;
} {
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
