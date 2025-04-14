import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";

import { assert } from "chai";

describe("model type", () => {
  describe("number | numeric literal | nullable", () => {
    it("number enum and not ignore warnings", async () => {
      try {
        await emitModularModelsFromTypeSpec(
          `
            model Test {
              color: 1 | 2;
            }
            op read(@body body: Test): void;
            `,
          {
            mustEmptyDiagnostic: true
          }
        );
      } catch (e: any) {
        assert.strictEqual(
          e[0].message,
          'Enum member name 1 is normalized to _1 with "_" prefix.'
        );
      }
    });
  });
});
