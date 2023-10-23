import { assert } from "chai";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("anonymous  model", () => {
  describe("in request", async () => {
    describe("happens at body parameter", async () => {
      it("should flatten alias if spread in the payload with required parameters", async () => {
        const tspContent = `
      alias Foo = {
        prop1: string;
        prop2: int64;
        prop3: utcDateTime;
        prop4: offsetDateTime;
        prop5: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          prop1: string,
          prop2: number,
          prop3: Date,
          prop4: string,
          prop5: Bar,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: {
                prop1: prop1,
                prop2: prop2,
                prop3: prop3.toISOString(),
                prop4: prop4,
                prop5: { prop1: prop5["prop1"], prop2: prop5["prop2"] },
              },
            });
        }
        export async function _readDeserialize(result: Read200Response): Promise<void> {
          if (result.status !== "200") {
            throw result.body;
          }
          return;
        }
        export async function read(
          context: Client,
          pathParam: string,
          queryParam: string,
          prop1: string,
          prop2: number,
          prop3: Date,
          prop4: string,
          prop5: Bar,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(
            context,
            pathParam,
            queryParam,
            prop1,
            prop2,
            prop3,
            prop4,
            prop5,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should flatten alias if spread in the payload with optional parameters", async () => {
        const tspContent = `
      alias Foo = {
        prop1: string;
        prop2: int64;
        prop3?: utcDateTime;
        prop4: offsetDateTime;
        prop5?: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          true
        );
        assert.ok(optionFile);
        assertEqualContent(
          optionFile?.getFullText()!,
          `
        import { OperationOptions } from "@azure-rest/core-client";
        
        export interface ReadOptions extends OperationOptions {
          prop3?: Date;
          prop5?: Bar;
        }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          prop1: string,
          prop2: number,
          prop4: string,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: {
                prop1: prop1,
                prop2: prop2,
                prop3: options?.prop3?.toISOString(),
                prop4: prop4,
                prop5: {
                  prop1: options?.prop5?.["prop1"],
                  prop2: options?.prop5?.["prop2"],
                },
              },
            });
        }
        export async function _readDeserialize(result: Read200Response): Promise<void> {
          if (result.status !== "200") {
            throw result.body;
          }
          return;
        }
        export async function read(
          context: Client,
          pathParam: string,
          queryParam: string,
          prop1: string,
          prop2: number,
          prop4: string,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(
            context,
            pathParam,
            queryParam,
            prop1,
            prop2,
            prop4,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should flatten alias if spread in the payload with optional parameters with orders", async () => {
        const tspContent = `
      alias Foo = {
        @path
        prop1: string;
        prop2: int64;
        prop3?: utcDateTime;
        @query
        prop4: offsetDateTime;
        prop5?: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, ...Foo, @query queryParam: string): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          true
        );
        assert.ok(optionFile);
        assertEqualContent(
          optionFile?.getFullText()!,
          `
        import { OperationOptions } from "@azure-rest/core-client";
        
        export interface ReadOptions extends OperationOptions {
          prop3?: Date;
          prop5?: Bar;
        }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          prop1: string,
          prop4: string,
          queryParam: string,
          prop2: number,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/{pathParam}/{prop1}", pathParam, prop1)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { prop4: prop4, queryParam: queryParam },
              body: {
                prop2: prop2,
                prop3: options?.prop3?.toISOString(),
                prop5: {
                  prop1: options?.prop5?.["prop1"],
                  prop2: options?.prop5?.["prop2"],
                },
              },
            });
        }
        export async function _readDeserialize(result: Read200Response): Promise<void> {
          if (result.status !== "200") {
            throw result.body;
          }
          return;
        }
        export async function read(
          context: Client,
          pathParam: string,
          prop1: string,
          prop4: string,
          queryParam: string,
          prop2: number,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(
            context,
            pathParam,
            prop1,
            prop4,
            queryParam,
            prop2,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should not flatten model if spread in the payload with required parameters", async () => {
        const tspContent = `
      model Foo {
        prop1: string;
        prop2: int64;
        prop3: utcDateTime;
        prop4: offsetDateTime;
        prop5: Bar;
      }
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
        export interface Foo {
          prop1: string;
          prop2: number;
          prop3: Date;
          prop4: string;
          prop5: Bar;
        }
  
        export interface Bar {
          prop1: string;
          prop2: number;
        }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          body: Foo,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: {
                prop1: body["prop1"],
                prop2: body["prop2"],
                prop3: body["prop3"].toISOString(),
                prop4: body["prop4"],
                prop5: { prop1: body.prop5["prop1"], prop2: body.prop5["prop2"] },
              },
            });
        }
        export async function _readDeserialize(result: Read200Response): Promise<void> {
          if (result.status !== "200") {
            throw result.body;
          }
          return;
        }
        export async function read(
          context: Client,
          pathParam: string,
          queryParam: string,
          body: Foo,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(
            context,
            pathParam,
            queryParam,
            body,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should flatten empty anonymous  model({})", async () => {});

      it("should flatten non-empty anonymous  model({ ... })", async () => {});
    });

    describe("happens as a property in body", async () => {});
  });

  describe("in response", async () => {
    describe("happens at body parameter", async () => {
      function verifyReturnTypeAsEmpty(
        operationDetail: string,
        returnType: string
      ) {
        assertEqualContent(
          operationDetail,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        export async function _readDeserialize(result: Read200Response): Promise<${returnType}> {
          if (result.status !== "200") {
            throw result.body;
          }
          return result.body;
        }
        export async function read(
          context: Client,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<${returnType}> {
          const result = await _readSend(
            context,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      }
      it("should map empty anonymous model({}) => {}", async () => {
        const tspContent = `
        op read(): {};
        `;
        // No models.ts file generated
        assert.isUndefined(await emitModularModelsFromTypeSpec(tspContent));
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        // Generate the operations.ts file with empty model
        verifyReturnTypeAsEmpty(operationFiles?.[0]?.getFullText()!, "{}");
      });

      it("should map empty named model(A {}) => A {}", async () => {
        const tspContent = `
        model PublishResult {
        }
        op read(): PublishResult;
        `;
        // Empty models generated in models.ts
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
        export interface PublishResult {}
        `
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        // Model name referred in operations.ts
        verifyReturnTypeAsEmpty(
          operationFiles?.[0]?.getFullText()!,
          "PublishResult"
        );
      });

      it("should return non-empty anonymous  model({ ... })", async () => {});
    });
    describe("happens as a property in response body", async () => {
      it("should map empty anonymous  model({}) => {} & empty named model(A {}) => A {}", async () => {
        const tspContent = `
        model EmptyModel {
        }
        model ReturnBody {
          emptyAnomyous: {};
          emptyAnomyousArray: {}[];
          emptyAnomyousDict: Record<{}>;
          emptyModel: EmptyModel;
          emptyModelArray: EmptyModel[];
          emptyModelDict: Record<EmptyModel>;
        }
        op read(): ReturnBody;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        console.log(modelFile?.getFullText());
        assertEqualContent(
          modelFile?.getFullText()!,
          `
        export interface ReturnBody {
          emptyAnomyous: {};
          emptyAnomyousArray: {}[];
          emptyAnomyousDict: Record<string, {}>;
          emptyModel: EmptyModel;
          emptyModelArray: EmptyModel[];
          emptyModelDict: Record<string, EmptyModel>;
        }

        export interface EmptyModel {}
        `
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";

        export function _readSend(
          context: Client,
          options: ReadOptions = { requestOptions: {} }
        ): StreamableMethod<Read200Response> {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }

        export async function _readDeserialize(
          result: Read200Response
        ): Promise<ReturnBody> {
          if (result.status !== "200") {
            throw result.body;
          }

          return {
            emptyAnomyous: {},
            emptyAnomyousArray: (result.body["emptyAnomyousArray"] ?? []).map(
              () => ({})
            ),
            emptyAnomyousDict: result.body["emptyAnomyousDict"],
            emptyModel: {},
            emptyModelArray: (result.body["emptyModelArray"] ?? []).map(() => ({})),
            emptyModelDict: result.body["emptyModelDict"],
          };
        }

        export async function read(
          context: Client,
          options: ReadOptions = { requestOptions: {} }
        ): Promise<ReturnBody> {
          const result = await _readSend(context, options);
          return _readDeserialize(result);
        }`
        );
      });

      it("should map non-empty anonymous  model({ ... }) => { ... }", async () => {
        const tspContent = `
        model SimpleModel {
          test: string;
        }
        model Foz {
          baz: {
            foo: int32[];
            bas: string;
            @projectedName("json", "test")
            bar?: SimpleModel[];
          }
        }
        op read(): Foz;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        console.log(modelFile?.getFullText());
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Foz {
            baz: { foo: number[]; bas: string; bar?: SimpleModel[] };
          }
          
          export interface SimpleModel {
            test: string;
          }
        `
        );

        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
          import { TestingContext as Client } from "../rest/index.js";
          import {
            StreamableMethod,
            operationOptionsToRequestParameters,
          } from "@azure-rest/core-client";
          
          export function _readSend(
            context: Client,
            options: ReadOptions = { requestOptions: {} }
          ): StreamableMethod<Read200Response> {
            return context
              .path("/")
              .get({ ...operationOptionsToRequestParameters(options) });
          }
          
          export async function _readDeserialize(result: Read200Response): Promise<Foz> {
            if (result.status !== "200") {
              throw result.body;
            }
          
            return {
              baz: {
                foo: result.body.baz["foo"],
                bas: result.body.baz["bas"],
                bar: (result.body.baz["test"] ?? []).map((p) => ({ test: p["test"] })),
              },
            };
          }
          
          export async function read(
            context: Client,
            options: ReadOptions = { requestOptions: {} }
          ): Promise<Foz> {
            const result = await _readSend(context, options);
            return _readDeserialize(result);
          }
        `
        );
      });
    });
  });
});
