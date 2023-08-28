import { assert } from "chai";
import { emitModularDeserializeUtilsFromTypeSpec } from "../util/emitUtil.js";

describe.only("modular special union deserialization", () => {
  it("shouldn't generate operation util if there's no special union variant", async () => {
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(`
      model WidgetData0 {
        fooProp: string;
      }
      
      model WidgetData1 {
        barProp: string;
      }
      
      model Widget {
        @key id: string;
        weight: int32;
        color: "red" | "blue";
      }
      
      model Widget1 extends Widget {
        data: WidgetData0 | WidgetData1
      }

      @error
      model Error {
        code: int32;
        message: string;
      }

      interface WidgetService {
        @get @route("customGet") customGet(): Widget1;
      }
      `);
    assert.ok(operationUtil === undefined);
  });
});

