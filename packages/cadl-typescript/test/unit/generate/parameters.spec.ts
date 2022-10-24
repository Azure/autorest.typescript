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

    it("contentTypes has binary data", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @route("/uploadFileViaBody")
        @post op uploadFileViaBody(
          @header contentType: "application/octet-stream",
          @body body: bytes
        ): void;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface UploadFileViaBodyBodyParam {
          /** Value may contain any sequence of octets */
          body:
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream;
        }
        
        export interface UploadFileViaBodyMediaTypesParam {
          contentType: "application/octet-stream";
        }
        
        export type UploadFileViaBodyParameters = UploadFileViaBodyMediaTypesParam &
        UploadFileViaBodyBodyParam &
          RequestParameters;
        `
      );
    });

    it.only("contentTypes has multiple form data", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @route("/uploadFile")
        @post op uploadFile(
        @header contentType: "multipart/form-data",
        @body body: {
          name: string;
          file: bytes;
        }
      ): void;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface FormdataUploadFileFormBody {
        file:
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream;
        name: string;
      }

      export interface UploadFileBodyParam {
        body: FormdataUploadFileFormBody;
      }
      
      export interface UploadFileMediaTypesParam {
        contentType: "multipart/form-data";
      }
      
      export type UploadFileParameters = UploadFileMediaTypesParam &
        UploadFileBodyParam &
        RequestParameters;
        `
      );
    });

    it.skip("contentTypes has array data defined in form body", async () => {
      const parameters = await emitParameterFromCadl(
        `
        @route("/uploadFile")
        @post op uploadFile(
        @header contentType: "multipart/form-data",
        @body body: {
          name: string;
          file: bytes;
        }
      ): void;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        `
      );
    });
  });
});
