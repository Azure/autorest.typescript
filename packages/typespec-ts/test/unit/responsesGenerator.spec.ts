import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitResponsesFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Responses.ts", () => {
  describe("property name generation", () => {
    it("should generate property name with custom name", async () => {
      const responses = await emitResponsesFromTypeSpec(`
        model SimpleModel {}
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @statusCode _: 204;
            @doc("The location for monitoring the operation state.")
            @header("Operation-Location")
            operationLocation: ResourceLocation<SimpleModel>;
        }
        op read(): LongRunningStatusLocation;
    `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
    import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import type { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
      );
    });

    it("should generate property name without custom name", async () => {
      const responses = await emitResponsesFromTypeSpec(`
        model SimpleModel {}
        @doc("Metadata for long running operation status monitor locations")
        model LongRunningStatusLocation {
            @statusCode _: 204;
            @doc("The location for monitoring the operation state.")
            @header
            operationLocation: ResourceLocation<SimpleModel>;
        }
        op read(): LongRunningStatusLocation;
    `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
    import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
    import type { HttpResponse } from "@azure-rest/core-client";
    
    export interface Read204Headers {
      /** The location for monitoring the operation state. */
      "operation-location": string;
    }
    
    /** Metadata for long running operation status monitor locations */
    export interface Read204Response extends HttpResponse {
      status: "204";
      headers: RawHttpHeaders & Read204Headers;
    }`
      );
    });
  });

  describe("statusCode generation", () => {
    it("should generate property name with custom name", async () => {
      const responses = await emitResponsesFromTypeSpec(`
      @doc("Error")
      @error
      model Error {
        code: int32;
        message: string;
      }
      model Key {
        key: string;
      }
      op read(): Key | Error;
    `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
      import type { HttpResponse } from "@azure-rest/core-client";
      import type { KeyOutput, ErrorModelOutput } from "./outputModels.js";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: KeyOutput;
      }
      
      export interface ReadDefaultResponse extends HttpResponse {
        status: string;
        body: ErrorModelOutput;
      }
      `
      );
    });
  });

  describe("body generation", () => {
    it("void as response body should be omitted", async () => {
      const parameters = await emitResponsesFromTypeSpec(`
      @post op read(): {@body body: void; @statusCode _: 204; };
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import type { HttpResponse } from "@azure-rest/core-client";
    
        /** There is no content to send for this request, but the headers may be useful. */
        export interface Read204Response extends HttpResponse {
          status: "204";
        }
      `
      );
    });

    it("unknown array response generation", async () => {
      const parameters = await emitResponsesFromTypeSpec(`
      @post op read():  unknown[];
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import type { HttpResponse } from "@azure-rest/core-client";
    
        /** The request has succeeded. */
        export interface Read200Response extends HttpResponse {
          status: "200";
          body: any[];
        }
      `
      );
    });

    it("Record<SimpleModel> response generation", async () => {
      const parameters = await emitResponsesFromTypeSpec(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @post op read(@body body: SimpleModel[]): Record<SimpleModel>;
      `);
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import type { HttpResponse } from "@azure-rest/core-client";
        import type { SimpleModelOutput } from "./outputModels.js";
    
        /** The request has succeeded. */
        export interface Read200Response extends HttpResponse {
          status: "200";
          body: Record<string, SimpleModelOutput>;
        }
      `
      );
    });

    it("should generate Record<unknown> as body property", async () => {
      const responses = await emitResponsesFromTypeSpec(`
        op read(): Record<unknown>;
    `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
    import type { HttpResponse } from "@azure-rest/core-client";
    
    /** The request has succeeded. */
    export interface Read200Response extends HttpResponse {
      status: "200";
      body: Record<string, any>;
    }
    `
      );
    });
    it("@header contentType not json or text should set format to binary(finally unit8array)", async () => {
      const responses = await emitResponsesFromTypeSpec(`
      @get op read(): {@header contentType: "image/png", @body body: bytes};
      `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
      import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
      import type { HttpResponse } from "@azure-rest/core-client";
      
      export interface Read200Headers {
        "content-type": "image/png";
      }

      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        /** Value may contain any sequence of octets */
        body: Uint8Array;
        headers: RawHttpHeaders & Read200Headers;
      }
      `
      );
    });
    it("@header contentType text/plain should keep format to byte(finally string)", async () => {
      const responses = await emitResponsesFromTypeSpec(`
      @get op read(): {@header contentType: "text/plain", @body body: bytes};
      `);
      assert.ok(responses);
      await assertEqualContent(
        responses!.content,
        `
      import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
      import type { HttpResponse } from "@azure-rest/core-client";
       
      export interface Read200Headers {
        "content-type": "text/plain";
      }
      
       /** The request has succeeded. */
       export interface Read200Response extends HttpResponse {
         status: "200";
         body: string;
         headers: RawHttpHeaders & Read200Headers;
       }
      `
      );
    });

    it("should handle int/decimal/decimal128/int8 with encode `string` in response headers", async () => {
      const responses = await emitResponsesFromTypeSpec(
        `
      alias SimpleModel = {
        @header
        @encode("string")
        x: int32;
        @header
        @encode(string)
        y: int32;
        @header
        @encode(DateTimeKnownEncoding.rfc3339)
        value: utcDateTime;
        @header
        @encode(DurationKnownEncoding.ISO8601)
        input: duration;
        @header
        @encode(DurationKnownEncoding.seconds, float)
        z: duration;
      };
      @route("/decimal/prop/encode")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        {
          needTCGC: false
        }
      );
      assert.ok(responses);
      await assertEqualContent(
        responses?.content!,
        `
        import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
        import type { HttpResponse } from "@azure-rest/core-client";

        export interface GetModel200Headers {
            "x": string;
            "y": string;
            "value": string;
            "input": string;
            "z": number;
        }

        /** The request has succeeded. */
        export interface GetModel200Response extends HttpResponse {
            status: "200";
            headers: RawHttpHeaders & GetModel200Headers;
        }
        `
      );
    });
  });

  it("core error response", async () => {
    const parameters = await emitResponsesFromTypeSpec(
      `
      #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for testing"
      #suppress "@azure-tools/typespec-azure-core/use-standard-names" "for testing"
      @doc("testing")
      @get op read(): Azure.Core.Foundations.ErrorResponse;
      `,
      {
        needAzureCore: true
      }
    );
    assert.ok(parameters);
    await assertEqualContent(
      parameters?.content!,
      `
        import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
        import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
    
        export interface ReadDefaultHeaders {
          /** String error code indicating what went wrong. */
          "x-ms-error-code"?: string; 
        }

        export interface ReadDefaultResponse extends HttpResponse {
          status: string;
          body: ErrorResponse;
          headers: RawHttpHeaders & ReadDefaultHeaders;
        }
      `
    );
  });

  it("error response not in core", async () => {
    const tsp = `
      model Error {
        type: string;
        message: string;
        param: string | null;
        code: string | null;
      }
      
      @error
      model ErrorResponse {
        error: Error;
      }

      #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for testing"
      #suppress "@azure-tools/typespec-azure-core/use-standard-names" "for testing"
      @doc("testing")
      @get op read(): ErrorResponse;
    `;
    const parameters = await emitResponsesFromTypeSpec(tsp);
    const models = await emitModelsFromTypeSpec(tsp);
    assert.ok(parameters);
    await assertEqualContent(
      models?.outputModelFile?.content!,
      `
      export interface ErrorResponseOutput {
        error: ErrorModelOutput;
      }
      
      export interface ErrorModelOutput {
        type: string;
        message: string;
        param: string | null;
        code: string | null;
      } `
    );
    await assertEqualContent(
      parameters?.content!,
      `
        import type { HttpResponse } from "@azure-rest/core-client";
        import type { ErrorResponseOutput } from "./outputModels.js";

        export interface ReadDefaultResponse extends HttpResponse {
          status: string;
          body: ErrorResponseOutput;
        }
      `
    );
  });
});

describe("headers generation", () => {
  it("merges headers from multiple responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      model Key {
        key: string;
      }
      @get op read():
          | { @body body: Key, @header foo: string }
          | {@header contentType: "image/png", @body body: bytes, @header bar: string };
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
      import type { HttpResponse } from "@azure-rest/core-client";
      import type { KeyOutput } from "./outputModels.js";
      
      export interface Read200Headers {
        foo: string;
        bar: string;
        "content-type": "image/png";
      }
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        /** Value may contain any sequence of octets */
        body: KeyOutput | Uint8Array;
        headers: RawHttpHeaders & Read200Headers;
      }
      `
    );
  });
});

describe("Array generation", () => {
  it("verify string array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): string[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
    );
  });

  it("verify int32 array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): int32[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
    );
  });

  it("verify int64 array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): int64[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
    );
  });

  it("verify float32 array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): float32[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: number[];
      }
      `
    );
  });

  it("verify boolean array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): boolean[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: boolean[];
      }
      `
    );
  });

  it("verify bytes array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): bytes[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
    );
  });

  it("verify plainDate array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): plainDate[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
    );
  });

  it("verify datetime array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): utcDateTime[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
    );
  });

  it("verify duration array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      @get op read(): duration[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      
      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: string[];
      }
      `
    );
  });

  it("verify SimpleModel array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      @get op read(): SimpleModel[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      import type { SimpleModelOutput } from "./outputModels.js";

      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: Array<SimpleModelOutput>;
      }
      `
    );
  });

  it("verify InnerModel array from responses", async () => {
    const responses = await emitResponsesFromTypeSpec(`
      model InnerModel {
        property: string;
        children?: InnerModel[];
      }
      @get op read(): InnerModel[];
      `);
    assert.ok(responses);
    await assertEqualContent(
      responses!.content,
      `
      import type { HttpResponse } from "@azure-rest/core-client";
      import type { InnerModelOutput } from "./outputModels.js";

      /** The request has succeeded. */
      export interface Read200Response extends HttpResponse {
        status: "200";
        body: Array<InnerModelOutput>;
      }
      `
    );
  });
});

