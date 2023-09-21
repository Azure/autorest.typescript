import { assert } from "chai";
import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("model type", () => {
  it("string enum", async () => {
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
      export interface Test {
        color: "red" | "blue";
      }`
    );
  });

  it.only("nullable string", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      model Test {
        content: string | null;
      }
      op read(@body body: Test): void;
      `);
    assert.ok(modelFile);
    assertEqualContent(
      modelFile!.getFullText()!,
      `
      export interface Test {
        content: string | null;
      }`
    );
  });
});
