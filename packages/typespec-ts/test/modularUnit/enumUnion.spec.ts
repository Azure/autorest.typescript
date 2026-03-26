import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";

import { assert } from "chai";

describe("model type", () => {
  describe("enum member name with leading digits", () => {
    it("should rename numeric enum member using enum type name prefix and report a warning", async () => {
      try {
        await emitModularModelsFromTypeSpec(
          `
            union ExtensibleNum {
              One: 1,
              \`2\`: 2,
            }
            model Test {
              num: ExtensibleNum;
            }
            op read(@body body: Test): void;
            `,
          {
            mustEmptyDiagnostic: true,
            "experimental-extensible-enums": true
          }
        );
      } catch (e: any) {
        assert.strictEqual(
          e[0].message,
          "Enum member name 2 is not a valid TypeScript identifier. It has been renamed to ExtensibleNum2 using the enum type name ExtensibleNum as prefix."
        );
      }
    });
  });
});
