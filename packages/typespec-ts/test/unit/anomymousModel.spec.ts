import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec,
  emitSchemasFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("anonymous model", () => {
  describe("model property in request & response", () => {
    it.only("with simple property types", async () => {
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
      const schemas = await emitSchemasFromTypeSpec(tsp);
      console.log(models, schemas, (schemas[0]! as any).properties);
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
