// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel } from "../interfaces.js";

const nodeConfig = `import viteConfig from "../../../vitest.shared.config.ts";

export default viteConfig;
`;

const browserConfig = `export { default } from "../../../eng/vitestconfigs/browser.config.ts";
`;

export function buildVitestConfig(
  model: RLCModel,
  platform: "browser" | "node"
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
  }
}
