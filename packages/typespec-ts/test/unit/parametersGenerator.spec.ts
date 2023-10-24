import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Parameters.ts", () => {
  describe("query parameters", () => {
    describe("apiVersion in query", () => {
      it("should't generate apiVersion if there's a client level apiVersion", async () => {
        const parameters = await emitParameterFromTypeSpec(
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
        assertEqualContent(
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
        assertEqualContent(
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
      assertEqualContent(
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

  describe("binary request", () => {
    it("bytes request with application/json will be treated as string", async () => {
      const parameters = await emitParameterFromTypeSpec(
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
      const parameters = await emitParameterFromTypeSpec(
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
      const parameters = await emitParameterFromTypeSpec(
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
      const parameters = await emitParameterFromTypeSpec(
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

    it("contentTypes has multiple form data", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        @route("/uploadFile")
        @post op uploadFile(
        @header contentType: "multipart/form-data",
        @body body: {
          name: string;
          @encode("binary")
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
      
      export interface UploadFileBodyParam {
        body: {
          name: string;
          file:
            | string
            | Uint8Array
            | ReadableStream<Uint8Array>
            | NodeJS.ReadableStream;
        };
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

    it("contentTypes has array data defined in form body", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        @encode("binary")
        scalar BinaryBytes extends bytes;

        @route("/uploadFiles")
        @post op uploadFiles(
        @header contentType: "multipart/form-data",
        @body body: {
          files: BinaryBytes[];
        }
      ): void;
        `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
        import { RequestParameters } from "@azure-rest/core-client";
      
        export interface UploadFilesBodyParam {
          body: {
            files: Array<
              string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream
            >;
          };
        }
        
        export interface UploadFilesMediaTypesParam {
          contentType: "multipart/form-data";
        }
        
        export type UploadFilesParameters = UploadFilesMediaTypesParam &
          UploadFilesBodyParam &
          RequestParameters;
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
      assertEqualContent(
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
