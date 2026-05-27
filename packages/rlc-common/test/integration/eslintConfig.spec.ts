import { describe, it, expect } from "vitest";

import { buildEsLintConfig } from "../../src/metadata/buildESLintConfig.js";
import { createMockModel } from "./mockHelper.js";

describe("eslint.config", () => {
  it("generates typed lint parserOptions for esm azure packages", () => {
    const model = createMockModel({
      flavor: "azure",
      moduleKind: "esm"
    });

    const result = buildEsLintConfig(model);
    expect(result?.content).includes("...azsdkEslint.config([");
    expect(result?.content).includes("projectService: false");
    expect(result?.content).includes('project: "./config/tsconfig.lint.json"');
  });
});
