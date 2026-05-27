import { describe, it, expect } from "vitest";

import { buildVitestConfig } from "../../src/metadata/buildVitestConfig.js";

import { createMockModel } from "./mockHelper.js";

describe("vitest.config", () => {
  describe("azure monorepo", () => {
    it("vitest.config.ts", () => {
      const model = createMockModel({
        withTests: true,
        isMonorepo: true
      });

      const result = buildVitestConfig(model, "node");
      expect(result?.content).includes(
        `// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.`
      );
      expect(result?.content).includes(
        `import viteConfig from "../../../vitest.shared.config.ts";`
      );
    });

    it("vitest.browser.config.ts", () => {
      const model = createMockModel({
        withTests: true,
        isMonorepo: true
      });

      const result = buildVitestConfig(model, "browser");
      expect(result?.content).includes(
        `// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.`
      );
      expect(result?.content).includes(
        `export { default } from "../../../eng/vitestconfigs/browser.config.ts";`
      );
    });
  });
});
