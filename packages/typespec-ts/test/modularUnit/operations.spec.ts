import { assert } from "chai";
import { emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { Diagnostic } from "@typespec/compiler";

describe("operations", () => {
  describe("void parameter/return type", () => {
    it("void request body should be omitted", async () => {
      const tspContent = `
        op read(@body param: void): void;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
          return context.path("/", ).post({...operationOptionsToRequestParameters(options)})  ;
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["204"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, options);
            return _readDeserialize(result);
        }`
      );
    });

    it("void response body should be omitted", async () => {
      const tspContent = `
        op read(): { @body _: void;};
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
          return context.path("/", ).get({...operationOptionsToRequestParameters(options)})  ;
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, options);
            return _readDeserialize(result);
        }`
      );
    });

    it.skip("should throw exception if property type as void", async () => {
      try {
        const tspContent = `
        model Foo {
          param: void;
        }
        op read(...Foo): {};
          `;

        await emitModularOperationsFromTypeSpec(tspContent);
        assert.fail("Should throw diagnostic errors");
      } catch (e: any) {
        assert.equal(e[0]?.code, "@azure-tools/typespec-ts/invalid-schema");
        assert.equal(
          e[0]?.message,
          "Couldn't get schema for type Intrinsic with property param"
        );
        assert.equal(e[0]?.target?.name, "void");
      }
    });
  });
  describe("nullable header", () => {
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

      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        false
      );
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";
        import { buildCsvCollection } from "../static-helpers/serialization/build-csv-collection.js";
        import { uint8ArrayToString } from "@azure/core-util";
        export function _readSend(
          context: Client, 
          requiredHeader: string,
          bytesHeader: Uint8Array,
          value: Uint8Array,
          csvArrayHeader: Uint8Array[],
          utcDateHeader: Date, 
          prop1: string,
          prop2: number,
          options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
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
                  csvArrayHeader.map((p) => uint8ArrayToString(p, "base64url"))
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
            body: { prop1: prop1, prop2: prop2 },
          });
        }
        
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
            const expectedStatuses = ["200"];
            if(!expectedStatuses.includes(result.status)){
              throw createRestError(result);
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
          prop1: string,
          prop2: number,
          options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, requiredHeader, bytesHeader, value, csvArrayHeader, utcDateHeader, prop1, prop2, options);
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
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
      import { TestingContext as Client } from "./index.js";
      import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";
  
      export function _readSend(context: Client, nullableRequiredHeader: (string | null), options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
          return context.path("/", ).get({...operationOptionsToRequestParameters(options), 
          headers: {"nullable-required-header": nullableRequiredHeader},});
      }
  
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
  
          return;
      }
  
      export async function read(context: Client, nullableRequiredHeader: (string | null), options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
          const result = await _readSend(context, nullableRequiredHeader, options);
          return _readDeserialize(result);
      }
      `
      );
    });
  });

  // TODO: need to fix the tests
  describe("array as body", () => {
    it("should generate required model array as request body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        op read(@body bars?: Bar[]): OkResponse;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, bars?: Bar[], options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
           return context.path("/").post({
              ...operationOptionsToRequestParameters(options),
              body: (bars ?? []).map((p) => {
                    return { prop1: p["prop1"], prop2: p["prop2"],};
                  }),
           });
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, bars?: Bar[], options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, bars, options);
            return _readDeserialize(result);
        }`
      );
    });
    it.skip("should handle `undefined` for named model array as request body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        op read(@body bars: Bar[]): OkResponse;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
           return context.path("/").post({
              ...operationOptionsToRequestParameters(options),
              body: bars.map((p: any) => {
                    return {
                      prop1: p["prop1"],
                      prop2: p["prop2"],
                    };
                  }),
           });
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, bars, options);
            return _readDeserialize(result);
        }`
      );
    });
    it.skip("should handle `null` for anonymous model array as request body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        op read(): { a: Bar}[] | null;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
           return context.path("/").post({
              ...operationOptionsToRequestParameters(options),
              body: bars.map((p: any) => {
                    return {
                      prop1: p["prop1"],
                      prop2: p["prop2"],
                    };
                  }),
           });
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, bars, options);
            return _readDeserialize(result);
        }`
      );
    });
    it.skip("should handle `null` for named array as response body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        op read(@body bars?: Bar[]): Bar[] | null;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, createRestError } from "@azure-rest/core-client";

        export function _readSend(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): StreamableMethod {
           return context.path("/").post({
              ...operationOptionsToRequestParameters(options),
              body: bars.map((p: any) => {
                    return {
                      prop1: p["prop1"],
                      prop2: p["prop2"],
                    };
                  }),
           });
        }

        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
          }
      
          return;
        }
        
        export async function read(context: Client, bars: Bar[], options: ReadOptionalParams = { requestOptions: {} }): Promise<void> {
            const result = await _readSend(context, bars, options);
            return _readDeserialize(result);
        }`
      );
    });
  });

  describe("array in body", () => {
    it("should handle `undefined`/`null` for array in request body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        model Foo {
          optionalBars?: Bar[];
          requiredBars: Bar[];
          nullableBars?: Bar[] | null;
          nullableRequiredBars: Bar[] | null;
        }
        op read(@body body: Foo): OkResponse;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          PathUncheckedResponse,
          createRestError
        } from "@azure-rest/core-client";
        
        export function _readSend(
          context: Client,
          body: Foo,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .post({
              ...operationOptionsToRequestParameters(options),
              body: {
                optionalBars:
                  body["optionalBars"] === undefined
                    ? body["optionalBars"]
                    : body["optionalBars"].map(barSerializer),
                requiredBars: body["requiredBars"].map(barSerializer),
                nullableBars:
                  body["nullableBars"] === undefined || body["nullableBars"] === null
                    ? body["nullableBars"]
                    : body["nullableBars"].map(barSerializer),
                nullableRequiredBars:
                  body["nullableRequiredBars"] === null
                    ? body["nullableRequiredBars"]
                    : body["nullableRequiredBars"].map(barSerializer),
              },
            });
        }
        
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
        
          return;
        }
        
        export async function read(
          context: Client,
          body: Foo,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(context, body, options);
          return _readDeserialize(result);
        }`,
        true
      );
    });
    it("should handle `undefined`/`null` for array in response body", async () => {
      const tspContent = `
        model Bar {
          prop1: string;
          prop2: int64;
        }
        model Foo {
          optionalBars?: Bar[];
          requiredBars: Bar[];
          nullableBars?: Bar[] | null;
          nullableRequiredBars: Bar[] | null;
        }
        op read(): Foo;
          `;

      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          PathUncheckedResponse,
          createRestError
        } from "@azure-rest/core-client";
        
        export function _readSend(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return {
            optionalBars:
              result.body["optionalBars"] === undefined
                ? result.body["optionalBars"]
                : result.body["optionalBars"].map((p: any) => {
                             return { prop1: p["prop1"], prop2: p["prop2"] };
                           }),
            requiredBars: result.body["requiredBars"].map((p: any) => {
                   return { prop1: p["prop1"], prop2: p["prop2"] };
                 }),
            nullableBars:
              result.body["nullableBars"] === undefined ||
              result.body["nullableBars"] === null
                ? result.body["nullableBars"]
                : result.body["nullableBars"].map((p: any) => {
                             return { prop1: p["prop1"], prop2: p["prop2"] };
                           }),
            nullableRequiredBars:
              result.body["nullableRequiredBars"] === null
                ? result.body["nullableRequiredBars"]
                : result.body["nullableRequiredBars"].map((p: any) => {
                             return { prop1: p["prop1"], prop2: p["prop2"] };
                           }),
          };
        }
        
        export async function read(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<Foo> {
          const result = await _readSend(context, options);
          return _readDeserialize(result);
        }`,
        true
      );
    });
  });

  describe("paging operations", () => {
    it("should generate paging if @items defined", async () => {
      const tspContent = `
        @error
        model Error {
          code: int32;
          message: string;
        }

        @pagedResult
        model Bar {
          @items
          lists: string[];
        }
        @post
        op test(): Error | Bar;
          `;
      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        true,
        true,
        true
      );

      assert.ok(operationFiles);

      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";
         import {
         PagedAsyncIterableIterator,
         buildPagedAsyncIterator,
        } from "../static-helpers/pagingHelpers.js";

        export function _testSend(context: Client, options: TestOptionalParams = { requestOptions: {} }): StreamableMethod {
            return context.path("/", ).post({...operationOptionsToRequestParameters(options), })  ;  
        }

        export async function _testDeserialize(result: PathUncheckedResponse): Promise<_Bar> {
            const expectedStatuses = ["200"];
            if(!expectedStatuses.includes(result.status)){
              throw createRestError(result);
            }
            return {
              "lists": result.body["lists"]
            }
        }

        export function test(context: Client, options: TestOptionalParams = { requestOptions: {} }): PagedAsyncIterableIterator<string> {
            return buildPagedAsyncIterator(
                    context,
                    () => _testSend(context, options),
                    _testDeserialize,
                    ["200"],
                    {itemName: "lists"}
                    );
        }`,
        true
      );
    });

    it("should generate paging if no @items defined", async () => {
      const tspContent = `
        @error
        model Error {
          code: int32;
          message: string;
        }

        @pagedResult
        model Bar {
          lists: string[];
        }
        @post
        op test(): Error | Bar;
          `;

      try {
        await emitModularOperationsFromTypeSpec(tspContent, true, true, true);
        assert.fail("Should throw diagnostic warnings");
      } catch (e) {
        const diagnostics = e as Diagnostic[];
        assert.equal(diagnostics.length, 1);
        assert.equal(
          diagnostics[0]?.code,
          "@azure-tools/typespec-ts/no-paging-items-defined"
        );
        assert.equal(diagnostics[0]?.severity, "warning");
      }
      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        false,
        true,
        true
      );
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";

        export function _testSend(context: Client, options: TestOptionalParams = { requestOptions: {} }): StreamableMethod {
            return context.path("/", ).post({...operationOptionsToRequestParameters(options), })  ; 
        }

        export async function _testDeserialize(result: PathUncheckedResponse): Promise<Bar> {
            const expectedStatuses = ["200"];
            if(!expectedStatuses.includes(result.status)){
            throw createRestError(result);
            }
            return {
            "lists": result.body["lists"]
            }
        }

        export async function test(context: Client, options: TestOptionalParams = { requestOptions: {} }): Promise<Bar> {
            const result = await _testSend(context, options);
            return _testDeserialize(result);
        }`,
        true
      );
    });

    it("should generate paging if have extend model", async () => {
      const tspContent = `
        @error
        model Error {
          code: int32;
          message: string;
        }

        @pagedResult
        model Bar {
          @items
          lists: string[];
          @nextLink
          nextLink: string;
        }

        model Child extends Bar {
          message: string
        }

        @post
        op test(): Error | Child;
          `;

      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        true,
        true,
        true
      );
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import { StreamableMethod, operationOptionsToRequestParameters, PathUncheckedResponse, createRestError } from "@azure-rest/core-client";
         import {
         PagedAsyncIterableIterator,
         buildPagedAsyncIterator,
        } from "../static-helpers/pagingHelpers.js";

        export function _testSend(context: Client, options: TestOptionalParams = { requestOptions: {} }): StreamableMethod {
            return context.path("/", ).post({...operationOptionsToRequestParameters(options), })  ;  
        }

        export async function _testDeserialize(result: PathUncheckedResponse): Promise<_Child> {
            const expectedStatuses = ["200"];
            if(!expectedStatuses.includes(result.status)){
              throw createRestError(result);
            }
            return {
              "lists": result.body["lists"],
              nextLink: result.body["nextLink"],
              message: result.body["message"]
            }
        }

        export function test(context: Client, options: TestOptionalParams = { requestOptions: {} }): PagedAsyncIterableIterator<string> {
            return buildPagedAsyncIterator(
                    context,
                    () => _testSend(context, options),
                    _testDeserialize,
                    ["200"],
                    {itemName: "lists", nextLinkName: "nextLink"}
                    );
        }`,
        true
      );
    });
  });
});
