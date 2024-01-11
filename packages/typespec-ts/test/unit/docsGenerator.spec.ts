import { assert } from "chai";
import {
  emitClientDefinitionFromTypeSpec,
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Doc generation testing", () => {
  describe("docs in models.ts & outputModels.ts", () => {
    it("should generate model-level and property-level docs in input model", async () => {
      const models = await emitModelsFromTypeSpec(`
        @doc("A simple model with doc")  
        model SimpleModel {
            @doc("A test property.")
            prop: string;
        }
        op read(): { @body body: SimpleModel };
        `);
      assert.ok(models);
      await assertEqualContent(
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

  describe("docs in parameters.ts", () => {
    it("should generate body description", async () => {
      const parameters = await emitParameterFromTypeSpec(
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
      await assertEqualContent(
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
    it("shouldn't generate type description as body property description", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        @doc("Body type details")
        model UserDetailsParameter {
          username: string;
        }
        op createOrUpdateUser(@body username: UserDetailsParameter): OkResponse;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        import { UserDetailsParameter } from "./models";

        export interface CreateOrUpdateUserBodyParam {
          body: UserDetailsParameter;
        }

        export type CreateOrUpdateUserParameters = CreateOrUpdateUserBodyParam & RequestParameters;
      `
      );
    });
    it("should generate query description", async () => {
      const parameters = await emitParameterFromTypeSpec(
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
      await assertEqualContent(
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
    it("should generate header description with custom name", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        op test(@doc("test header") @header("x-my-header") MyHeader: string): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
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
      const parameters = await emitParameterFromTypeSpec(
        `
        #suppress "@typespec/http/content-type-ignored" "for test"
        op test(@doc("content type") @header contentType: "application/octet-stream"): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
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
  });

  describe("docs in clientDefinitions.ts", () => {
    it("should generate operation description", async () => {
      const clientDef = await emitClientDefinitionFromTypeSpec(
        `
        @summary("This is a summary")
        @doc("This is the longer description")
        op read(): {};
        `
      );
      assert.ok(clientDef);
      await assertEqualContent(
        clientDef?.content!,
        `
        import { ReadParameters } from "./parameters";
        import { Read200Response } from "./responses";
        import { Client, StreamableMethod } from "@azure-rest/core-client";
  
        export interface Read {
            /** This is the longer description */
            get(options?: ReadParameters): StreamableMethod<Read200Response>;
        }
  
        export interface Routes {
            /** Resource for '/' has methods for the following verbs: get */
            (path: "/"): Read;
        }
        
        export type testClient = Client & {
                path: Routes;
        };
      `
      );
    });
  });
});
