import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("anomymousModel", () => {
  describe("model in property", async () => {
    it("with simple types", async () => {
      const tspContent = `
        model Foo {
            bar: {
                baz: string;
            }
        }

        model Foz {
            baz: {
                bas: string;
            }
        }
        @route("/models")
        @get
        op getModel(@body input: Foo): Foz;
    `;
      const modelFile = await emitModularModelsFromTypeSpec(tspContent);
      //   console.log(modelFile?.getFullText());
      assertEqualContent(
        modelFile?.getFullText()!,
        `
      export interface Foo {
        bar: { baz: string };
      }
      
      export interface Foz {
        baz: { bas: string };
      }
      `
      );
    });
  });
});
