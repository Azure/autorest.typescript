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
            arr: string[];
            obj: { foo: string; };
            record: Record<string>;
            unionObj: string | int32 | "foo";
            unionOfAnonymousObj: { foo: string; } | { bar: string; };
            emptyObj: {};
            recordOfEmptyObj: Record<{}>;
            recordOfRecordOfEmptyObj: Record<Record<{}>>;
            recordOfAnonymousObj: Record<{ foo: string; }>;
            arrayOfEmptyObj: {}[];
            arrayOfSimpleAnonymousObj: { foo: string; }[];
          };
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
        bar: {
          baz: string;
          arr: string[];
          obj: { foo: string; };
          record: Record<string, string>;
          unionObj: string | number | "foo";
          unionOfAnonymousObj: { foo: string; } | { bar: string; };
          emptyObj: {};
          recordOfEmptyObj: Record<string, {}>;
          recordOfRecordOfEmptyObj: Record<string, Record<string, {}>>;
          recordOfAnonymousObj: Record<string, { foo: string; }>;
          arrayOfEmptyObj: {}[];
          arrayOfSimpleAnonymousObj: { foo: string; }[];
        };
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
  });

  describe("request & response body", () => {
    it("request body", async () => {
      const schemaOutput = await emitParameterFromTypeSpec(`
      @route("/models")
      @get
      op getModel(@body input: {
        baz: string;
        arr: string[];
        obj: { foo: string; };
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
