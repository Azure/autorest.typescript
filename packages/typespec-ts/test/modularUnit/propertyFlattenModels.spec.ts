import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";

import { assert } from "chai";

describe("Flatten Property model", () => {
  it("Flatten transitions are not supported so consecutive transitions will be ignored", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
            model ChildModel {
              description: string;
              age: int32;
            }

            model NestedFlattenModel {
              name: string;

              @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
              properties: ChildFlattenModel;
            }
            model ChildFlattenModel {
              summary: string;

              @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
              properties: ChildModel;
            }

            op foo(body: NestedFlattenModel): NestedFlattenModel;
            `,
        {
          needArmTemplate: true,
          withVersionedApiVersion: true,
          needTCGC: true,
          mustEmptyDiagnostic: true
        }
      );
    } catch (e: any) {
      assert.strictEqual(
        e[0].message,
        'The property "properties" in "NestedFlattenModel" has multiple consecutive flatten operations. Flatten transitions are not supported so consecutive transitions will be ignored.'
      );
    }
  });
});
