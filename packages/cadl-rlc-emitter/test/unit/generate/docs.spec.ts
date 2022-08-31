import { assert } from "chai";
import { emitModelsFromCadl, emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

// function assertEqualContentLocal(actual: string, expected: string) {
//   assert.strictEqual(actual, expected);
// }

describe("Doc generation testing", () => {
  describe("input/output models", () => {
    // issue tracked https://github.com/Azure/autorest.typescript/issues/1525
    it("should generate model-level and property-level docs in input model", async () => {
      const models = await emitModelsFromCadl(`
        @doc("A simple model with doc")  
        model SimpleModel {
            @doc("A test property.")
            prop: string;
          }
          op read(): { @body body: SimpleModel };
          `);
      assert.ok(models);
      assertEqualContent(
        models!.outputModelFile!.content,
        `
      /** A simple model with doc */
      export interface SimpleModelOutput {
        /** A test property. */
        prop: string;
      }
      `
      );
    });
  });

  describe("descriptions in parameters.ts", () => {
    it("should generate body description", async () => {
      const parameters = await emitParameterFromCadl(
        `
        model UserDetailsParameter {
          @body
          @doc("Details about username.")
          username: string;
        }
        op createOrUpdateUser(...UserDetailsParameter): OkResponse;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface CreateOrUpdateUserBodyParam {
          /** Details about username. */
          body: string;
        }

        export type CreateOrUpdateUserParameters = CreateOrUpdateUserBodyParam & RequestParameters;
      `
      );
    });
    it("should generate query description", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @doc("The filter query parameter.")
        model FilterParameter {
          @query
          @doc("Input your filter condition.")
          filter: string;
        }
        op list(...FilterParameter): OkResponse;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        export interface ListQueryParamProperties {
            /** Input your filter condition. */
            filter: string;
        }
        export interface ListQueryParam {
            queryParameters: ListQueryParamProperties;
        }
        export type ListParameters = ListQueryParam & RequestParameters;
      `
      );
    });
    it("should generate header description", async () => {});
    it("should generate contentType description", async () => {});
    it("should generate apiVersion description", async () => {});
  });
});
