// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";

const nodeConfig = `
import viteConfig from "../../../vitest.shared.config.ts";

export default viteConfig;`;

const browserConfig = `
import viteConfig from "../../../vitest.browser.shared.config.ts";

export default viteConfig;`;

const esmConfig = `
import { mergeConfig } from "vitest/config";
import vitestConfig from "./vitest.config.ts";
import vitestEsmConfig from "../../../vitest.esm.shared.config.ts";

export default mergeConfig(
  vitestConfig,
  vitestEsmConfig
);`;

export function buildVitestConfig(
  model: RLCModel,
  platform: "browser" | "node" | "esm"
) {
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false
  ) {
    return;
  }
  switch (platform) {
    case "browser":
      return {
        path: "vitest.browser.config.ts",
        content: browserConfig
      };
    case "node":
      return {
        path: "vitest.config.ts",
        content: nodeConfig
      };
    case "esm":
      return {
        path: "vitest.esm.config.ts",
        content: esmConfig
      };
  }
}
