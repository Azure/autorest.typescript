import { assert } from "chai";
import { emitModelsFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Doc generation testing", () => {
  describe("input/output models", () => {
    it("should generate model-level and property-level docs", async () => {
      const models = await emitModelsFromCadl(`
        @doc("A simple model with doc")  
        model SimpleModel {
            @doc("A test property.")
            prop: string;
          }
          op read(): { @body body: SimpleModel };
          `);
      assert.ok(models);
      assertEqualContent(
        models!.outputModelFile!.content,
        `
      /** A simple model with doc */
      export interface SimpleModelOutput {
        /** A test property. */
        prop: string;
      }
      `
      );
    });
  });
});
