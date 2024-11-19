import { ObjectSchema } from "@azure-tools/rlc-common";
import { assert } from "chai";
import { getModelInlineSigniture } from "../../../src/utils/modelUtils.js";
import { emitSchemasFromTypeSpec } from "../../util/emitUtil.js";

describe("utils testing", () => {
  describe("#getModelInlineSigniture", () => {
    it("anonymous model with null and complex model", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(`
            model Test {
                prop: {
                  index: safeint;
                  text: string;
                  logprobs: null | {
                    tokens: string[];
                    token_logprobs: float64[];
                    top_logprobs: Record<safeint>[];
                    text_offset: safeint[];
                  }
                }[];
            }
            @route("/models")
            @get
            op getModel(@body input: Test): Test;
          `);
      const first = schemaOutput?.[0] as ObjectSchema;
      const res = `{"prop": {"index": number;"text": string;"logprobs": null | {"tokens": string[];"token_logprobs": number[];"top_logprobs": (Record<string, number>)[];"text_offset": number[];};}[];}`;
      assert.strictEqual(getModelInlineSigniture(first), res);
    });
  });
});
