import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Parameters.ts", () => {
  describe("query parameters", () => {
    describe("apiVersion in query", () => {
      it("should generate apiVersion if there's no client level apiVersion", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
          model ApiVersionParameter {
            @query
            "api-version": string;
          }
          op test(...ApiVersionParameter): string;
          `,
          false,
          true
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `
            import { RequestParameters } from "@azure-rest/core-client";
            
            export interface TestQueryParamProperties {
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
    describe("other parameters in query", () => {
      it("should generate user-custom-query ", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
            model CustomParameter {
              @query
              "user-custom-query": string;
            }
            op test(...CustomParameter): string;
            `
        );
        assert.ok(parameters);
        await assertEqualContent(
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

      it("should generate offsetDateTime as string", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
          model QueryParameter {
            @query
            executionTo?: offsetDateTime;
          }
          op test(...QueryParameter): string;
          `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `
            import { RequestParameters } from "@azure-rest/core-client";
            
            export interface TestQueryParamProperties {
              executionTo?: string;
            }
  
            export interface TestQueryParam {
              queryParameters?: TestQueryParamProperties;
            }
            
            export type TestParameters = TestQueryParam & RequestParameters;
            `
        );
      });
    });
  });

  describe("header parameters", () => {
    it("should generate offsetDateTime as string", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        model QueryParameter {
          @header
          executionTo?: offsetDateTime;
        }
        op test(...QueryParameter): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        ` import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
          import { RequestParameters } from "@azure-rest/core-client";
          
          export interface TestHeaders {
            "execution-to"?: string;
          }

          export interface TestHeaderParam {
            headers?: RawHttpHeadersInput & TestHeaders;
          }
          
          export type TestParameters = TestHeaderParam & RequestParameters;
          `
      );
    });
  });

  describe("array as request body", () => {
    it("unknown array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: unknown[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:unknown[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });
    it("string array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: string[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:string[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("int32 array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: int32[]): void ;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:number[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("int64 array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: int64[]): void ;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:number[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("float32 array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: float32[]): void ;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:number[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("boolean array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: boolean[]): void ;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:boolean[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("bytes array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: bytes[]): void ;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:string[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("plainDate array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: plainDate[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body: Date[] | string[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("datetime array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body: utcDateTime[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body: Date[] | string[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("duration array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      @post op read(@body body:  duration[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          body:string[];
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("SimpleModel array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @post op read(@body body: SimpleModel[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        import { SimpleModel } from "./models";

        export interface ReadBodyParam {
          body:Array<SimpleModel>;
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });

    it("InnerModel array request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      model InnerModel {
        property: string;
        children?: InnerModel[];
      }
      @post op read(@body body: InnerModel[]): void;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        import { InnerModel } from "./models";

        export interface ReadBodyParam {
          body:Array<InnerModel>;
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });
  });

  describe("dictionary as request body", () => {
    it("Simple model dictionary request generation", async () => {
      const parameters = await emitParameterFromTypeSpec(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @post op read(@body body: Record<SimpleModel>): SimpleModel;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        import { SimpleModel } from "./models";

        export interface ReadBodyParam {
          body: Record<string, SimpleModel>;
        }  

        export type ReadParameters = ReadBodyParam & RequestParameters;
      `
      );
    });
  });
});
