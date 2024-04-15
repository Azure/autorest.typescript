import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
describe("bytes", () => {
  describe("application/octet-stream", () => {
    it("@encode('binary') - should be treated as raw binary payload", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
            @route("/uploadFileViaBody")
            @post op uploadFileViaBody(
              @header contentType: "application/octet-stream",
              @encode("binary")
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

    it("without encode - should be treated as raw binary payload", async () => {
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

    // TODO: need to figure out the behavior
    it.skip("@encode('base64') - should be treated as string?", async () => {});
    it.skip("bytes in model - should be treated as base64 string?");
  });
  describe("application/json or no content type specified", () => {
    it("@encode('base64') - should be treated as base64 string", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
            @post op read(@header contentType: "application/json", @encode("base64") @body body: bytes): {};
          `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `import { RequestParameters } from "@azure-rest/core-client";
           
          export interface ReadBodyParam {
            body: string;
          }

          export interface ReadMediaTypesParam {
            contentType: "application/json";
          }
          
          export type ReadParameters = ReadMediaTypesParam & ReadBodyParam & RequestParameters;
          `
      );
    });
    it("without encode - should be treated as base64 string", async () => {
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
    it("bytes & bytes[] in model - should be treated as base64 string", async () => {
      const tsp = `
        model Model {
          field: bytes;
          fields: bytes[];
          @encode("base64")
          encodedField: bytes;
        }
        @post op read(@body body: Model): {};
      `;
      const models = await emitModelsFromTypeSpec(tsp);
      await assertEqualContent(
        models?.inputModelFile?.content!,
        `export interface Model {
            field: string;
            fields: string[];
            encodedField: string;
          }`
      );
      const parameters = await emitParameterFromTypeSpec(tsp);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `import { RequestParameters } from "@azure-rest/core-client";
          import { Model } from "./models.js";
                  
          export interface ReadBodyParam {
            body: Model;
          }
          
          export type ReadParameters = ReadBodyParam & RequestParameters;
          `
      );
    });
  });
  describe("multipart/form-data", () => {
    describe("anonymous model", () => {
      it("bytes/bytes[] in request body + encode - should be treated as binary + file", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
              @route("/uploadFile")
              @post op uploadFile(
              @header contentType: "multipart/form-data",
              @body body: {
                name: string;
                @encode("binary")
                file: bytes;
                files: bytes[];
              }
            ): void;
              `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `
            import { RequestParameters, type FormDataPayload } from "@azure-rest/core-client";
            
            export interface UploadFileBodyParam {
              /**
               * This payload is a multipart/form-data body, represented as an array of parts. Each part is an object with a name property
               * and a body property. A file name and a MIME type can be optionally provided for parts that represent file uploads.
               *
               * Alternatively, instead of an array of parts, an instance of FormData can also be passed as the body here.
               */
              body: FormDataPayload<{
                name: string;
                file:
                  | string
                  | Uint8Array
                  | ReadableStream<Uint8Array>
                  | NodeJS.ReadableStream
                  | File;
                files:
                  (| string
                  | Uint8Array
                  | ReadableStream<Uint8Array>
                  | NodeJS.ReadableStream
                  | File)[];
              }>;
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

      it("bytes/bytes[] in request body + without encode - should be treated as binary + file", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
              @route("/uploadFile")
              @post op uploadFile(
              @header contentType: "multipart/form-data",
              @body body: {
                name: string;
                file: bytes;
                files: bytes[];
              }
            ): void;
              `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `
            import { RequestParameters, type FormDataPayload } from "@azure-rest/core-client";
            
            export interface UploadFileBodyParam {
              /**
               * This payload is a multipart/form-data body, represented as an array of parts. Each part is an object with a name property
               * and a body property. A file name and a MIME type can be optionally provided for parts that represent file uploads.
               *
               * Alternatively, instead of an array of parts, an instance of FormData can also be passed as the body here.
               */
              body: FormDataPayload<{
                name: string;
                file:
                  | string
                  | Uint8Array
                  | ReadableStream<Uint8Array>
                  | NodeJS.ReadableStream
                  | File;
                files:
                  (| string
                  | Uint8Array
                  | ReadableStream<Uint8Array>
                  | NodeJS.ReadableStream
                  | File)[];
              }>;
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

      it("bytes/bytes[] in general model - should be treated as base64 string", async () => {
        const parameters = await emitParameterFromTypeSpec(
          `
              @route("/uploadFile")
              @post op uploadFile(
              @header contentType: "multipart/form-data",
              @body body: {
                name: string;
                file: {
                  foo: bytes;
                  foos: bytes[];
                };
              }
            ): void;
              `
        );
        assert.ok(parameters);
        await assertEqualContent(
          parameters?.content!,
          `
            import { RequestParameters, type FormDataPayload } from "@azure-rest/core-client";
            
            export interface UploadFileBodyParam {
              /**
               * This payload is a multipart/form-data body, represented as an array of parts. Each part is an object with a name property
               * and a body property. A file name and a MIME type can be optionally provided for parts that represent file uploads.
               *
               * Alternatively, instead of an array of parts, an instance of FormData can also be passed as the body here.
               */
              body: FormDataPayload<{ 
                name: string;
                file: { foo: string; foos: string[] } 
              }>;
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
    });

    describe("named model", () => {
      it("bytes/bytes[]/union in request body - should be treated as binary + file", async () => {
        const models = await emitModelsFromTypeSpec(
          `
          model Foo {
            name: string;
            @encode("binary")
            encodeBytes: bytes;
            withouEncode: bytes;
            files: bytes[];
            unionBytes: bytes | int32;
          }
          @route("/uploadFile")
          @post op uploadFile(
          @header contentType: "multipart/form-data",
          @body body: Foo;
          ): void;
          `
        );
        assert.ok(models.inputModelFile);
        await assertEqualContent(
          models.inputModelFile?.content!,
          `
          export interface Foo {
            "name": string;
            /** Value may contain any sequence of octets */
            "encodeBytes": string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
            /** Value may contain any sequence of octets */
            "withouEncode": string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
            /** Value may contain any sequence of octets */
            "files": (string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File)[];
            /** Value may contain any sequence of octets */
            "unionBytes": string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File | number;
        }`
        );
      });

      it("bytes/bytes[]/union in general model- should be treated as base64 string", async () => {
        const models = await emitModelsFromTypeSpec(
          `
          model Bar {
            name: string;
            encodeBytes: bytes;
            withouEncode: bytes;
            files: bytes[];
            unionBytes: bytes | int32;
          }
          model Foo {
            name: string;
            bar: Bar;
          }
          @route("/uploadFile")
          @post op uploadFile(
          @header contentType: "multipart/form-data",
          @body body: Foo;
          ): void;
              `
        );
        assert.ok(models);
        await assertEqualContent(
          models?.inputModelFile?.content!,
          `
          export interface Foo {
            "name": string;
            "bar": Bar;
          }
          
          export interface Bar {
              "name": string;
              "encodeBytes": string;
              "withouEncode": string;
              "files": string[];
              "unionBytes": string | number;
          }`
        );
      });
    });
    // TODO: need to figure out the behavior
    it.skip("bytes as request body - should not be allowed?");
  });
  describe("mixed content-types", () => {
    it("non-binary content types mixing - should not be treated as binary", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        union SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        @post op read(@header contentType: SchemaContentTypeValues, @body body: bytes): {};
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      import { SchemaContentTypeValues } from "./models.js";

      export interface ReadBodyParam {
        body: string;
      }

      export interface ReadMediaTypesParam {
        contentType: SchemaContentTypeValues;
      }

      export type ReadParameters = ReadMediaTypesParam & ReadBodyParam & RequestParameters;
      `
      );
    });
    it("binary content types mixing - should be treated as binary", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        union SchemaContentTypeValues {
          mp3: "audio/mpeg3",
          image: "image/jpeg",
        }
        @post op read(@header contentType: SchemaContentTypeValues, @body body: bytes): {};
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      import { SchemaContentTypeValues } from "./models.js";

      export interface ReadBodyParam {
        /** Value may contain any sequence of octets */
        body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
      }

      export interface ReadMediaTypesParam {
        contentType: SchemaContentTypeValues;
      }

      export type ReadParameters = ReadMediaTypesParam & ReadBodyParam & RequestParameters;
      `
      );
    });
    // TODO: we need more discussions about current behavior
    // This case is not finalized yet and some validations would be added in tcgc
    it.skip("mixed non-binary and binary content types - should report errors?", async () => {
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
});
