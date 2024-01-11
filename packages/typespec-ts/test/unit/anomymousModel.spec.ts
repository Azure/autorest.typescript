import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec,
  emitResponsesFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("anonymous model", () => {
  describe("model property in request & response", () => {
    it("input only", async () => {
      const tsp = `
      model Bar {
        bas: string;
      }
      model EmptyObj {

      }
      model Foo {
          bar: {
            baz: string;
            arr: string[];
            obj: { foo: string; };
            record: Record<string>;
            unionObj: string | int32 | "foo";
            unionOfAnonymousObj: { foo: string; } | { bar: string; };
            unionOfOtherModel: Bar | null;
            emptyObj: {};
            referOtherModel: Bar;
            namedEmptyObj: EmptyObj;
            recordOfEmptyObj: Record<{}>;
            recordOfOtherModel: Record<Bar>;
            recordOfRecordOfEmptyObj: Record<Record<{}>>;
            recordOfAnonymousObj: Record<{ foo: string; }>;
            arrayOfEmptyObj: {}[];
            arrayOfSimpleAnonymousObj: { foo: string; }[];
            arrayOfOtherModel: Bar[];
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
      await assertEqualContent(
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
          unionOfOtherModel: Bar | null;
          emptyObj: Record<string, unknown>;
          referOtherModel: Bar;
          namedEmptyObj: EmptyObj;
          recordOfEmptyObj: Record<string, Record<string, unknown>>;
          recordOfOtherModel: Record<string, Bar>;
          recordOfRecordOfEmptyObj: Record<string, Record<string, Record<string, unknown>>>;
          recordOfAnonymousObj: Record<string, { foo: string; }>;
          arrayOfEmptyObj: Record<string, unknown>[];
          arrayOfSimpleAnonymousObj: { foo: string; }[];
          arrayOfOtherModel: Array<Bar>;
        };
      }

      export interface Bar {
        bas: string;
      }

      export interface EmptyObj {}
      `
      );
    });

    it("output only", async () => {
      const tsp = `
      model Bar {
        bas: string;
      }

      model EmptyObj {

      }
      model Foo {
          bar: {
            baz: string;
            arr: string[];
            obj: { foo: string; };
            record: Record<string>;
            unionObj: string | int32 | "foo";
            unionOfAnonymousObj: { foo: string; } | { bar: string; };
            unionOfOtherModel: Bar | null;
            emptyObj: {};
            referOtherModel: Bar;
            namedEmptyObj: EmptyObj;
            recordOfEmptyObj: Record<{}>;
            recordOfOtherModel: Record<Bar>;
            recordOfRecordOfEmptyObj: Record<Record<{}>>;
            recordOfAnonymousObj: Record<{ foo: string; }>;
            arrayOfEmptyObj: {}[];
            arrayOfSimpleAnonymousObj: { foo: string; }[];
            arrayOfOtherModel: Bar[];
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
      // console.log(outputModelFile?.content);
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface FooOutput {
          bar: {
              baz: string;
              arr: string[];
              obj: { foo: string };
              record: Record<string, string>;
              unionObj: string | number | "foo";
              unionOfAnonymousObj: { foo: string } | { bar: string };
              unionOfOtherModel: BarOutput | null;
              emptyObj: Record<string, any>;
              referOtherModel: BarOutput;
              namedEmptyObj: EmptyObjOutput;
              recordOfEmptyObj: Record<string, Record<string, any>>;
              recordOfOtherModel: Record<string, BarOutput>;
              recordOfRecordOfEmptyObj: Record<string, Record<string, Record<string, any>>>;
              recordOfAnonymousObj: Record<string, { foo: string }>;
              arrayOfEmptyObj: Record<string, any>[];
              arrayOfSimpleAnonymousObj: { foo: string }[];
              arrayOfOtherModel: Array<BarOutput>;
          };
      }

      export interface BarOutput {
        bas: string;
      }

      export interface EmptyObjOutput {}
      `
      );
    });

    it("output & input", async () => {
      const tsp = `
      model Bar {
        bas: string;
      }
      model Foo {
          bar: {
            baz: string;
            arr: string[];
            obj: { foo: string; };
            record: Record<string>;
            unionObj: string | int32 | "foo";
            unionOfAnonymousObj: { foo: string; } | { bar: string; };
            unionOfOtherModel: Bar | null;
            emptyObj: {};
            referOtherModel: Bar;
            recordOfEmptyObj: Record<{}>;
            recordOfOtherModel: Record<Bar>;
            recordOfRecordOfEmptyObj: Record<Record<{}>>;
            recordOfAnonymousObj: Record<{ foo: string; }>;
            arrayOfEmptyObj: {}[];
            arrayOfSimpleAnonymousObj: { foo: string; }[];
            arrayOfOtherModel: Bar[];
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
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface FooOutput {
          bar: {
              baz: string;
              arr: string[];
              obj: { foo: string };
              record: Record<string, string>;
              unionObj: string | number | "foo";
              unionOfAnonymousObj: { foo: string } | { bar: string };
              unionOfOtherModel: BarOutput | null;
              emptyObj: Record<string, any>;
              referOtherModel: BarOutput;
              recordOfEmptyObj: Record<string, Record<string, any>>;
              recordOfOtherModel: Record<string, BarOutput>;
              recordOfRecordOfEmptyObj: Record<string, Record<string, Record<string, any>>>;
              recordOfAnonymousObj: Record<string, { foo: string }>;
              arrayOfEmptyObj: Record<string, any>[];
              arrayOfSimpleAnonymousObj: { foo: string }[];
              arrayOfOtherModel: Array<BarOutput>;
          };
      }

      export interface BarOutput {
        bas: string;
      }
      `
      );

      await assertEqualContent(
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
          unionOfOtherModel: Bar | null;
          emptyObj: Record<string, unknown>;
          referOtherModel: Bar;
          recordOfEmptyObj: Record<string, Record<string, unknown>>;
          recordOfOtherModel: Record<string, Bar>;
          recordOfRecordOfEmptyObj: Record<string, Record<string, Record<string, unknown>>>;
          recordOfAnonymousObj: Record<string, { foo: string; }>;
          arrayOfEmptyObj: Record<string, unknown>[];
          arrayOfSimpleAnonymousObj: { foo: string; }[];
          arrayOfOtherModel: Array<Bar>;
        };
      }

      export interface Bar {
        bas: string;
      }
      `
      );
    });
  });

  describe("request & response body", () => {
    it("request body", async () => {
      const schemaOutput = await emitParameterFromTypeSpec(`
      model Bar {
        bas: string;
      }

      @route("/models")
      @get
      op getModel(@body input: {
        bar: Bar;
        baz: string;
        arr: string[];
        obj: { foo: string; };
      }): void;
      `);
      assert.ok(schemaOutput);
      // console.log(schemaOutput);
      await assertEqualContent(
        schemaOutput?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        import { Bar } from "./models";
        
        export interface GetModelBodyParam {
          body: { bar: Bar; baz: string; arr: string[]; obj: { foo: string } };
        };
        
        export type GetModelParameters = GetModelBodyParam & RequestParameters;
        `
      );
    });

    it("response body", async () => {
      const tsp = `
      model Bar {
        bas: string;
      }

      @route("/models")
      @get
      op getModel(): {
        bar: Bar;
        baz: string;
        arr: string[];
        obj: { foo: string; };
      };
      `;
      const schemaOutput = await emitResponsesFromTypeSpec(tsp);
      const models = await emitModelsFromTypeSpec(tsp);
      assert.ok(models);
      const { outputModelFile } = models!;
      assert.ok(outputModelFile);
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface BarOutput {
        bas: string;
      }
      `
      );
      // console.log(schemaOutput);
      await assertEqualContent(
        schemaOutput?.content!,
        `
        import { HttpResponse } from "@azure-rest/core-client";
        import { BarOutput } from "./outputModels";
        
        /** The request has succeeded. */
        export interface GetModel200Response extends HttpResponse {
          status: "200";
          body: { bar: BarOutput; baz: string; arr: string[]; obj: { foo: string } };
        };
        `
      );
    });
  });
});
