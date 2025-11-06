import { expect } from "chai";
import { buildVitestConfig } from "../../src/metadata/buildVitestConfig.js";
import "mocha";
import { createMockModel } from "./mockHelper.js";

describe("vitest.config", () => {
  describe("azure monorepo", () => {
    it("vitest.browser.config.ts", () => {
      const model = createMockModel({
        withTests: true,
        isMonorepo: true
      });

      const result = buildVitestConfig(model, "browser");
      expect(result?.content).includes(
        `export default viteConfig;`
      );
    });
  });
});
