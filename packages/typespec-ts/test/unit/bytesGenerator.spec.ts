import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
describe("bytes request", () => {
  describe("application/octet-stream", () => {
    it("bytes as request body - should be treated as raw binary payload", async () => {
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
      await assertEqualContent(
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

    // TODO: need to confirm with tsp team
    it.skip("bytes in model - should be treated as base64 string?");
  });
  describe("application/json or no content type specified", () => {
    describe("application/json", () => {
      it("bytes as request body should be treated as base64 string", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
                  @post op read(@body body: bytes): {};
                  `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `import { RequestParameters } from "@azure-rest/core-client";
                  
                  export interface ReadBodyParam {
                    body: string;
                  }
                  
                  export type ReadParameters = ReadBodyParam & RequestParameters;
                  `
        );
      });

      it("bytes in model - should be treated as base64 string");
    });
    describe("no content-type", () => {
      it("bytes as request body should be treated as base64 string", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
                  @post op read(@body body: bytes): {};
                  `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `import { RequestParameters } from "@azure-rest/core-client";
                  
                  export interface ReadBodyParam {
                    body: string;
                  }
                  
                  export type ReadParameters = ReadBodyParam & RequestParameters;
                  `
        );
      });

      it("bytes in model - should be treated as base64 string");
    });
  });
  describe("multipart/form-data", () => {
    // TODO: need to confirm with tsp team
    it("bytes as request body - should not be allowed?");

    it.only("bytes in request body model with encode should be treated as binary + file", async () => {
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
      await assertEqualContent(
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
                | NodeJS.ReadableStream
                | File;
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

    it.only(
      "bytes in general model with encode should be treated as base64 string"
    );

    it("bytes in request body model without encode should be treated as binary + file", async () => {
      const parameters = await emitParameterFromTypeSpec(
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
      await assertEqualContent(
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
                | NodeJS.ReadableStream
                | File;
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

    it("bytes[] in request body model should be treated as array of binary/file", async () => {
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
      await assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
          
            export interface UploadFilesBodyParam {
              body: {
                files: Array<
                  string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File
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

    it.only(
      "bytes[] in general model with encode should be treated as base64 string"
    );
  });
  describe("other content-types", () => {
    it("bytes request should respect @header contentType and use binary format when not json or text", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
            @post op read(@header contentType: "image/png", @body body: bytes): {};
            `
      );
      assert.ok(parameters);
      await assertEqualContent(
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
  });

  // TODO: we need more discussions about current behavior
  // This case is not finalized yet and some validations would be added in tcgc
  it.skip("multiple contentTypes mixed json and others", async () => {
    const parameters = await emitParameterFromTypeSpec(
      `
        @post op read(@header contentType: "image/png" | "application/json", @body body: bytes): {};
        `
    );
    assert.ok(parameters);
    await assertEqualContent(
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
