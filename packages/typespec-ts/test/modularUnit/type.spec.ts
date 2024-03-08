import { assert } from "chai";
import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("model type", () => {
  describe("string | string literal | nullable", () => {
    it("string enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          color: "red" | "blue";
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: "red" | "blue";
        }`
      );
    });

    it("string enum member", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        enum Color {
          Red: "red",
          Blue: "blue"
        }
        model Test {
          color: Color.Red;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: "red";
        }`
      );
    });

    it("nullable string literal", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: "red" | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: "red" | null;
        }`
      );
    });

    it("nullable string", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: string | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: string | null;
        }`
      );
    });
  });

  describe("number | numeric literal | nullable", () => {
    it("number enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          color: 1 | 2;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: 1 | 2;
        }`
      );
    });

    it("number enum member", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        enum Color {
          Color1: 1,
          Color2: 2
        }
        model Test {
          color: Color.Color1;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: 1;
        }`
      );
    });

    describe("flavor", () => {
      describe("azure", () => {
        it.only("enum would be interpreted as extensible enum in azure", async () => {
          const modelFile = await emitModularModelsFromTypeSpec(
            `
            enum Color {
              Color1: 1,
              Color2: 2
            }
            model Test {
              color: Color | null;
            }
            op read(@body body: Test): void;
            `,
            undefined,
            undefined,
            undefined,
            "azure"
          );
          assert.ok(modelFile);
          await assertEqualContent(
            modelFile!.getFullText()!,
            `
            export interface Test {
              color: Color | null;
            }
    
            /** Type of Color */
            /** "1", "2" */
            export type Color = string;
            `
          );
        });

        it("nullable @fixed enum would be intepreted as azure enum which is fixed", async () => {
          const modelFile = await emitModularModelsFromTypeSpec(
            `
            @fixed
            enum Color {
              Color1: 1,
              Color2: 2
            }
            model Test {
              color: Color | null;
            }
            op read(@body body: Test): void;
            `,
            undefined,
            undefined,
            true,
            "azure"
          );
          assert.ok(modelFile);
          await assertEqualContent(
            modelFile!.getFullText()!,
            `
            export interface Test {
              color: Color | null;
            }
    
            /** Type of Color */
            /** */
            export type Color = "1" | "2";
            `
          );
        });
      });
      describe("un-branded", () => {
        it.only("enum would be interpreted as fixed enum in un-branded environment", async () => {
          const modelFile = await emitModularModelsFromTypeSpec(
            `
            enum Color {
              Color1: 1,
              Color2: 2
            }
            model Test {
              color: Color | null;
            }
            op read(@body body: Test): void;
            `,
            undefined,
            undefined,
            undefined,
            undefined // un-branded
          );
          assert.ok(modelFile);
          await assertEqualContent(
            modelFile!.getFullText()!,
            `
            export interface Test {
              color: Color | null;
            }
    
            /** Type of Color */
            /** */
            export type Color = "1" | "2";
            `
          );
        });

        it("nullable @fixed enum would be intepreted as un-branded enum which is fixed", async () => {
          const modelFile = await emitModularModelsFromTypeSpec(
            `
            @fixed
            enum Color {
              Color1: 1,
              Color2: 2
            }
            model Test {
              color: Color | null;
            }
            op read(@body body: Test): void;
            `,
            undefined,
            undefined,
            true,
            undefined // un-branded
          );
          assert.ok(modelFile);
          await assertEqualContent(
            modelFile!.getFullText()!,
            `
            export interface Test {
              color: Color | null;
            }
    
            /** Type of Color */
            /** */
            export type Color = "1" | "2";
            `
          );
        });
      });
    });

    it.skip("union of enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
      enum LR {
        left,
        right,
      }
      enum UD {
        up,
        down,
      }

      model Test {
        color: LR | UD;
      }
      op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: "left" | "right" | "up" | "down";
        }
        `
      );
    });

    it("nullable numeric literal", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: 1 | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: 1 | null;
        }`
      );
    });

    it("nullable number", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: int32 | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: number | null;
        }`
      );
    });
  });
});
