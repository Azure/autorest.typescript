import { assert } from "chai";
import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("model type", () => {
  it.only("string enum", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      model Test {
        color: "red" | "blue";
      }
      op read(@body body: Test): void;
      `);
    assert.ok(modelFile);
    assertEqualContent(
      modelFile!.getFullText()!,
      `
      /** Type of ColorType */
      export type ColorType = "red" | "blue";
      export interface Test {
        color: ColorType;
      }`
    );
  });
});
