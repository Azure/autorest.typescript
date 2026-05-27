import { describe, it, expect } from "vitest";

import { buildTsLintConfig } from "../../src/metadata/buildTsConfig.js";

describe("tsconfig builders", () => {
  it("builds config/tsconfig.lint.json", () => {
    const result = buildTsLintConfig();
    expect(result.path).toEqual("config/tsconfig.lint.json");
    expect(JSON.parse(result.content)).toEqual({
      extends: "../../../../tsconfig.json",
      include: ["../src", "../test"]
    });
  });
});
