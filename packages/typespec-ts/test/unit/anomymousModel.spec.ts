import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("anonymous model", () => {
  describe("model property in request & response", () => {
    it("input only", async () => {
      const tsp = `
      model Foo {
          bar: {
              baz: string;
          }
      }
      @route("/models")
      @get
      op getModel(@body input: Foo): void;
      `;
      const models = await emitModelsFromTypeSpec(tsp);
      assert.ok(models);
      const { inputModelFile } = models!;
      assert.strictEqual(inputModelFile?.path, "models.ts");
      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface Foo {
        bar: { baz: string };
      }
      `
      );
    });

    it("output only", async () => {
      const tsp = `
      model Foo {
          bar: {
              baz: string;
          }
      }
      @route("/models")
      @get
      op getModel(): Foo;
      `;
      const models = await emitModelsFromTypeSpec(tsp);
      assert.ok(models);
      const { outputModelFile } = models!;
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface FooOutput {
        bar: { baz: string };
      }
      `
      );
    });

    it("output & input", async () => {
      const tsp = `
      model Foo {
          bar: {
              baz: string;
          }
      }
      @route("/models")
      @get
      op getModel(@body input: Foo): Foo;
      `;
      const models = await emitModelsFromTypeSpec(tsp);
      assert.ok(models);
      const { inputModelFile, outputModelFile } = models!;
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface FooOutput {
        bar: { baz: string };
      }
      `
      );

      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface Foo {
        bar: { baz: string };
      }
      `
      );
    });

    it("with empty properties", async () => {});

    it("nested anonymous model", async () => {});

    it("with complex types and models", async () => {});

    it("with azure core references", async () => {});
  });

  describe("request & response body", () => {
    it("request body", async () => {
      const schemaOutput = await emitParameterFromTypeSpec(`
      @route("/models")
      @get
      op getModel(@body input: {
        baz: string;
      }): void;
      `);
      assert.ok(schemaOutput);
      //   console.log(schemaOutput);
      assertEqualContent(
        schemaOutput?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface GetModelBodyParam {
            body: { baz: string;};
        };
        
        export type GetModelParameters = GetModelBodyParam & RequestParameters;
        `
      );
    });
  });
});
