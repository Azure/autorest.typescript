import { assert } from "chai";
import { emitModelsFromCadl, emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Doc generation testing", () => {
  describe("input/output models", () => {
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
    xit("should generate header description with custom name", async () => {
      const parameters = await emitParameterFromCadl(
        `
        op test(@doc("test header") @header("x-my-header") MyHeader: string): string;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
  
        export interface TestHeaders {
            /** test header */
            "x-my-header": string;
        }
        
        export interface TestHeaderParam {
            headers: RawHttpHeadersInput & TestHeaders;
        }
        
       export type TestParameters = TestHeaderParam & RequestParameters;
      `
      );
    });
    it("should generate contentType description", async () => {
      const parameters = await emitParameterFromCadl(
        `
        op test(@doc("content type") @header contentType: "application/octet-stream"): string;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface TestMediaTypesParam {
          /** content type */
          contentType: "application/octet-stream";
      }
      
      export type TestParameters = TestMediaTypesParam & RequestParameters;
      `
      );
    });
    // issue tracked https://github.com/Azure/autorest.typescript/issues/1525
    xit("should generate apiVersion description with 'api-version'", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @doc("The ApiVersion query parameter.")
        model ApiVersionParameter {
          @query
          @doc("The API version to use for this operation.")
          "api-version": string;
        }
        op test(...ApiVersionParameter): string;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface TestQueryParamProperties {
          /** The API version to use for this operation. */
          "api-version": string;
      }
      
      export interface TestQueryParam {
          queryParameters: TestQueryParamProperties;
      }
      
      export type TestParameters = TestQueryParam & RequestParameters;
      `
      );
    });
  });
});
