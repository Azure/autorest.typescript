import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";

import { assert } from "chai";

describe("array encoding model property", () => {
  it("array encoding on array of non-string types should report diagnostic", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
          model Test {
              @encode(ArrayEncoding.commaDelimited)
              nums: int32[];
          }
          op read(@body body: Test): void;
        `,
        {
          mustEmptyDiagnostic: true
        }
      );
    } catch (e: any) {
      assert.equal(
        e[0]?.code,
        "@azure-tools/typespec-ts/un-supported-array-encoding"
      );
      assert.strictEqual(
        e[0]?.message,
        'The array property "nums" of int32 type is not supported for encoding and will be ignored.'
      );
    }
  });
});
