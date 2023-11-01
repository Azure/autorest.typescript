import { assert } from "chai";
import { emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { Diagnostic } from "@typespec/compiler";

describe("operations", () => {
  it("required & optional & nullable headers", async () => {
    const tspContent = `
      model Bar {
        prop1: string;
        prop2: int64;
      }
      @encode(BytesKnownEncoding.base64url)
      scalar base64urlBytes extends bytes;
      op read(
        @header requiredHeader: string, 
        @header optionalHeader?: string,  
        @header nullableOptionalHeader?: string | null,
        @header bytesHeader: bytes,
        @header @encode(BytesKnownEncoding.base64) value: bytes,
        @header({
          format: "csv",
        })
        csvArrayHeader: base64urlBytes[],
        @header utcDateHeader: utcDateTime,
        @header optionalDateHeader?: utcDateTime,
        @header nullableDateHeader?: utcDateTime | null,
        ...Bar): OkResponse;
        `;

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    // console.log(operationFiles?.[0]?.getFullText()!);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import { StreamableMethod, operationOptionsToRequestParameters } from "@azure-rest/core-client";
      import { uint8ArrayToString } from "@azure/core-util";
      
      export function _readSend(
        context: Client, 
        requiredHeader: string,
        bytesHeader: Uint8Array,
        value: Uint8Array,
        csvArrayHeader: Uint8Array[],
        utcDateHeader: Date, 
        body: Bar, 
        options: ReadOptions = { requestOptions: {} }): StreamableMethod<Read200Response> {
          return context.path("/", ).post({...operationOptionsToRequestParameters(options), 
            headers: {
              "required-header": requiredHeader,
              ...(options?.optionalHeader !== undefined
                ? { "optional-header": options?.optionalHeader }
                : {}),
              ...(options?.nullableOptionalHeader !== undefined && options?.nullableOptionalHeader !== null
                ? { "nullable-optional-header": options?.nullableOptionalHeader }
                : {}),
              "bytes-header": uint8ArrayToString(bytesHeader, "base64"),
              value: uint8ArrayToString(value, "base64"),
              "csv-array-header": buildCsvCollection(
                (csvArrayHeader ?? []).map((p) => uint8ArrayToString(p, "base64url"))
              ),
              "utc-date-header": utcDateHeader.toUTCString(),
              ...(options?.optionalDateHeader !== undefined
                ? {
                    "optional-date-header":
                      options?.optionalDateHeader?.toUTCString(),
                  }
                : {}),
              ...(options?.nullableDateHeader !== undefined && options?.nullableDateHeader !== null
                ? {
                    "nullable-date-header":
                      options?.nullableDateHeader?.toUTCString(),
                  }
                : {}),
            },
          body: {"prop1": body["prop1"], "prop2": body["prop2"]},});
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<void> {
          if(result.status !== "200"){
          throw result.body
          }
      
          return;
      }
      
      export async function read(
        context: Client, 
        requiredHeader: string,
        bytesHeader: Uint8Array,
        value: Uint8Array,
        csvArrayHeader: Uint8Array[],
        utcDateHeader: Date, 
        body: Bar, 
        options: ReadOptions = { requestOptions: {} }): Promise<void> {
          const result = await _readSend(context, requiredHeader, bytesHeader, value, csvArrayHeader, utcDateHeader, body, options);
          return _readDeserialize(result);
      }`,
      true
    );
  });

  it("required nullable header would report diagnostic", async () => {
    try {
      const tspContent = `
      op read( @header nullableRequiredHeader: string | null): OkResponse;
      `;

      await emitModularOperationsFromTypeSpec(tspContent, true);
      assert.fail("Should throw diagnostic warnings");
    } catch (e) {
      const diagnostics = e as Diagnostic[];
      assert.equal(diagnostics.length, 1);
      assert.equal(
        diagnostics[0]?.code,
        "@azure-tools/typespec-ts/nullable-required-header"
      );
      assert.equal(diagnostics[0]?.severity, "warning");
    }
  });

  it("should generate code for required nullable header", async () => {
    const tspContent = `
      op read( @header nullableRequiredHeader: string | null): OkResponse;
      `;
    const operationFiles = await emitModularOperationsFromTypeSpec(
      tspContent,
      false
    );
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    console.log(operationFiles?.[0]?.getFullText()!);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
    import { TestingContext as Client } from "../rest/index.js";
    import { StreamableMethod, operationOptionsToRequestParameters } from "@azure-rest/core-client";

    export function _readSend(context: Client, nullableRequiredHeader: (string | null), options: ReadOptions = { requestOptions: {} }): StreamableMethod<Read200Response> {
        return context.path("/", ).get({...operationOptionsToRequestParameters(options), 
        headers: {"nullable-required-header": nullableRequiredHeader},});
    }

    export async function _readDeserialize(result: Read200Response): Promise<void> {
        if(result.status !== "200"){
        throw result.body
        }

        return;
    }

    export async function read(context: Client, nullableRequiredHeader: (string | null), options: ReadOptions = { requestOptions: {} }): Promise<void> {
        const result = await _readSend(context, nullableRequiredHeader, options);
        return _readDeserialize(result);
    }
    `
    );
  });
});
