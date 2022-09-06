import { assert } from "chai";
import { emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Parameters.ts", () => {
  it("should't generate apiVersion ", async () => {
    const parameters = await emitParameterFromCadl(
      `
          model ApiVersionParameter {
            @query
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
        
        export type TestParameters =  RequestParameters;
        `
    );
  });

  it("should generate user-custom-query ", async () => {
    const parameters = await emitParameterFromCadl(
      `
          model CustomParameter {
            @query
            "user-custom-query": string;
          }
          op test(...CustomParameter): string;
          `
    );
    assert.ok(parameters);
    assertEqualContent(
      parameters?.content!,
      `
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface TestQueryParamProperties {
            "user-custom-query": string;
        }
        
        export interface TestQueryParam {
            queryParameters: TestQueryParamProperties;
        }
        
        export type TestParameters = TestQueryParam & RequestParameters;
        `
    );
  });
});
