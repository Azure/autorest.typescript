import { assert } from "chai";
import { emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

describe("Parameters.ts", () => {
  describe("skip apiVersion", () => {
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
  });

  describe("query parameters generaiton", () => {
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

  describe("binary request generation", () => {
    it("bytes request with application/json will be treated as string", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @post op read(@body body: bytes): {};
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `import { RequestParameters } from "@azure-rest/core-client";
        
        export interface ReadBodyParam {
          body: string;
        }
        
        export type ReadParameters = ReadBodyParam & RequestParameters;
        `
      );
    });

    it("bytes request should respect @header contentType and use binary format when not json or text", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @post op read(@header contentType: "image/png", @body body: bytes): {};
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          /** Value may contain any sequence of octets */
          body: 
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream;
        }
        
        export interface ReadMediaTypesParam {
          contentType: "image/png";
        }
        
        export type ReadParameters = ReadMediaTypesParam &
          ReadBodyParam &
          RequestParameters;
        `
      );
    });

    // TODO: we need more discussions about current behavior
    // issue tracked https://github.com/Azure/autorest.typescript/issues/1486
    it("multiple contentTypes defined @header", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @post op read(@header contentType: "image/png" | "application/json", @body body: bytes): {};
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";

        export interface ReadBodyParam {
          /** Value may contain any sequence of octets */
          body: 
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream;
        }
        
        export interface ReadMediaTypesParam {
          contentType: "image/png" | "application/json";
        }
        
        export type ReadParameters = ReadMediaTypesParam &
          ReadBodyParam &
          RequestParameters;
        `
      );
    });
  });

  describe("Array generation", () => {
    it("string array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): string[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("int32 array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): int32[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("int64 array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): int64[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("float32 array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): float32[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("boolean array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): boolean[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("bytes array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): bytes[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("plainDate array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): plainDate[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("datetime array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): zonedDateTime[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });
    
    it("duration array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      @post op read(): duration[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("SimpleModel array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @post op read(): SimpleModel[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });

    it("InnerModel array request generation", async () => {
      const parameters = await emitParameterFromCadl(`
      model InnerModel {
        property: string;
        children?: InnerModel[];
      }
      @post op read(): InnerModel[];
      `);
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
          
        export type ReadParameters =  RequestParameters;
      `
      );
    });
  });
});
