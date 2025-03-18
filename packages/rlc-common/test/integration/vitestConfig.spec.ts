import { expect } from "chai";
import { buildVitestBrowserConfig } from "../../src/metadata/buildVitestConfig.js";
import "mocha";
import { createMockModel } from "./mockHelper.js";

describe("vitest.config", () => {
  describe("azure monorepo", () => {
    it("vitest.browser.config.ts", () => {
      const model = createMockModel({
        withTests: true,
        isMonorepo: true
      });

      const result = buildVitestBrowserConfig(model);
      expect(result?.content).includes(
        `include: ["dist-test/browser/test/**/*.spec.js"]`
      );
    });
  });
});
