import { assert } from "chai";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";

describe("anonymous model", () => {
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
        await assertEqualContent(
          modelFile?.getInterface("Bar")?.getText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`,
          true
        );

        const serializer = modelFile?.getFunction("barSerializer")?.getText();
        await assertEqualContent(
          serializer!,
          `
          export function barSerializer(item: Bar): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
            }
          };`,
          true
        );

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
          PathUncheckedResponse,
          createRestError,
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
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
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
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];\n  if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
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
          options: ReadOptionalParams = { requestOptions: {} }
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
        await assertEqualContent(
          modelFile?.getInterface("Bar")?.getFullText()!,
          `
          /** model interface Bar */
          export interface Bar {
            prop1: string;
            prop2: number;
          }`,
          true
        );

        await assertEqualContent(
          modelFile?.getFunction("barSerializer")?.getFullText()!,
          `
          export function barSerializer(item: Bar): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
            }
          }`,
          true
        );
        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          { needOptions: true }
        );
        assert.ok(optionFile);
        await assertEqualContent(
          optionFile?.getFullText()!,
          `
        import { OperationOptions  } from "@azure-rest/core-client";
        
        /** Optional parameters. */
        export interface ReadOptionalParams extends OperationOptions  {
          prop3?: Date;
          prop5?: Bar;
        }`
        );
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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          prop1: string,
          prop2: number,
          prop4: string,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
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
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
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
          options: ReadOptionalParams = { requestOptions: {} }
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
        await assertEqualContent(
          modelFile?.getInterface("Bar")?.getFullText()!,
          `
          /** model interface Bar */
          export interface Bar {
            prop1: string;
            prop2: number;
          }`,
          true
        );

        const serializer = modelFile?.getFunction("barSerializer")?.getText();
        await assertEqualContent(
          serializer!,
          `
          export function barSerializer(item: Bar): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
            }
          };`,
          true
        );

        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          { needOptions: true }
        );
        assert.ok(optionFile);
        await assertEqualContent(
          optionFile?.getFullText()!,
          `
        import { OperationOptions  } from "@azure-rest/core-client";
        
        /** Optional parameters. */
        export interface ReadOptionalParams extends OperationOptions  {
          prop3?: Date;
          prop5?: Bar;
        }`
        );
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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";

        export function _readSend(
          context: Client,
          pathParam: string,
          prop1: string,
          prop4: string,
          queryParam: string,
          prop2: number,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
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
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
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
          options: ReadOptionalParams = { requestOptions: {} }
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
      op read(@path pathParam: string, @query queryParam: string, @body body: Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        await assertEqualContent(
          modelFile?.getInterface("Bar")?.getFullText()!,
          `
        /** model interface Bar */
        export interface Bar {
          prop1: string;
          prop2: number;
        }`,
          true
        );

        await assertEqualContent(
          modelFile?.getInterface("Foo")?.getFullText()!,
          `
        /** model interface Foo */
        export interface Foo {
          prop1: string;
          prop2: number;
          prop3: Date;
          prop4: string;
          prop5: Bar;
        }`
        );

        await assertEqualContent(
          modelFile?.getFunction("barSerializer")?.getText()!,
          `
          export function barSerializer(item: Bar): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
            }
          };`,
          true
        );

        await assertEqualContent(
          modelFile?.getFunction("fooSerializer")?.getText()!,
          `
          export function fooSerializer(item: Foo): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
              prop3: item["prop3"].toISOString(),
              prop4: item["prop4"],
              prop5: barSerializer(item["prop5"]),
            }
          };`,
          true
        );

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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          body: Foo,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: fooSerializer(body),
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
          pathParam: string,
          queryParam: string,
          body: Foo,
          options: ReadOptionalParams = { requestOptions: {} }
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

      it("should not flatten if body is empty anonymous model({})", async () => {
        const tspContent = `
      op read(@path pathParam: string, @query queryParam: string, @body body: {}): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        await assertEqualContent(modelFile?.getFullText()!, 
        `
        /** model interface _ReadRequest */
        export interface _ReadRequest {}
        
        export function _readRequestSerializer(item: _ReadRequest): any {
          return item;
        }
        `);
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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          body: Record<string, any>,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: _readRequestSerializer(body),
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
          pathParam: string,
          queryParam: string,
          body: Record<string, any>,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(context, pathParam, queryParam, body, options);
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should flatten non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, @body test: {
        prop1: string;
        prop2: Bar;
      }): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        await assertEqualContent(
          modelFile?.getInterface("Bar")?.getFullText()!,
          `
          /** model interface Bar */
          export interface Bar {
            prop1: string;
            prop2: number;
          }`,
          true
        );
        await assertEqualContent(
          modelFile?.getFunction("barSerializer")?.getFullText()!,
          `
          export function barSerializer(item: Bar): any {
            return {
              prop1: item["prop1"],
              prop2: item["prop2"],
            }
          }`,
          true
        );
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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          pathParam: string,
          queryParam: string,
          test: { prop1: string; prop2: Bar },
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/{pathParam}", pathParam)
            .post({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { queryParam: queryParam },
              body: _readRequestSerializer(test),
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
          pathParam: string,
          queryParam: string,
          test: { prop1: string; prop2: Bar },
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(
            context,
            pathParam,
            queryParam,
            test,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });
    });

    describe("happens as a property in body", async () => {
      it("should generate empty anonymous model({}) as Record<string, any>", async () => {
        const tspContent = `
        model Test {
          color: {};
        }
        op read(@body body: Test): void;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        await assertEqualContent(
          modelFile!.getInterface("Test")?.getFullText()!,
          `
        /** model interface Test */
        export interface Test {
          color: Record<string, any>;
        }`,
        );

        const serializer = modelFile?.getFunction("testSerializer")?.getText();
        await assertEqualContent(
          serializer!,
          `
          export function testSerializer(item: Test): any {
            return { color: _testColorSerializer(item["color"]) };
          };`,
          true
        );

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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          body: Test,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .post({
              ...operationOptionsToRequestParameters(options),
              body: testSerializer(body),
            });
        }
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["204"];
          if(!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return;
        }
        export async function read(
          context: Client,
          body: Test,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(context, body, options);
          return _readDeserialize(result);
        }`,
          true
        );
      });

      it("should generate non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
        model Test {
          color: {
            foo?: string;
          };
        }
        op read(@bodyRoot body: Test): void;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        await assertEqualContent(
          modelFile!.getInterface("Test")?.getFullText()!,
          `
        /** model interface Test */
        export interface Test {
          color: { foo?: string };
        }`,
        true
        );

        const serializer = modelFile?.getFunction("testSerializer")?.getText();
        await assertEqualContent(
          serializer!,
          `
          export function testSerializer(item: Test): any {
            return { color: _testColorSerializer(item["color"]) };
          };`,
          true
        );

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
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          body: Test,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .post({
              ...operationOptionsToRequestParameters(options),
              body: testSerializer(body),
            });
        }
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["204"];
          if(!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return;
        }
        export async function read(
          context: Client,
          body: Test,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _readSend(context, body, options);
          return _readDeserialize(result);
        }`,
          true
        );
      });
    });
  });

  describe("in response", async () => {
    describe("happens at body parameter", async () => {
      async function verifyReturnTypeAsEmpty(
        operationDetail: string,
        returnType: string,
        deserializer?: string
      ) {
        await assertEqualContent(
          operationDetail,
          `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        export async function _readDeserialize(result: PathUncheckedResponse): Promise<${returnType}> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return ${deserializer ?? normalizeName(returnType, NameType.Operation)}Deserializer(result.body);
        }
        export async function read(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
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
      it("should map empty anonymous model({}) => Record<string, any>", async () => {
        const tspContent = `
        op read(): { @body _: {}; };
        `;
        // No models.ts file generated
        const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelsFile);
        await assertEqualContent(modelsFile?.getFullText()!, `
        /** model interface _ReadResponse */
        export interface _ReadResponse {}
        
        export function _readResponseDeserializer(item: any): _ReadResponse {
          return item;
        }
        `);
        const operationFiles =
          await emitModularOperationsFromTypeSpec(tspContent);
        assert.equal(operationFiles?.length, 1);
        // Generate the operations.ts file with empty model
        await verifyReturnTypeAsEmpty(
          operationFiles?.[0]?.getFullText()!,
          "Record<string, any>",
          "_readResponse"
        );
      });

      it("should map empty named model(PublishResult {}) => PublishResult", async () => {
        const tspContent = `
        model PublishResult {
        }
        op read(): {@body _: PublishResult};
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        await assertEqualContent(
          modelFile?.getFullText()!,
          `
          /** model interface PublishResult */
          export interface PublishResult {}
          
          export function publishResultDeserializer(item: any): PublishResult {
            return item;
          }
        `
        );
        const operationFiles =
          await emitModularOperationsFromTypeSpec(tspContent);
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        // Model name referred in operations.ts
        await verifyReturnTypeAsEmpty(
          operationFiles?.[0]?.getFullText()!,
          "PublishResult"
        );
      });

      it("should return non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
        op read(): { foo?: {bar: string | null}};
        `;
        // No models.ts file generated
        const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelsFile);
        await assertEqualContent(modelsFile?.getFullText()!, `
        /** model interface _ReadResponse */
        export interface _ReadResponse {
          foo?: {
            bar: string | null;
          };
        }
        
        export function _readResponseDeserializer(item: any): _ReadResponse {
          return {
            foo: !item["foo"] ? item["foo"] : _readResponseFooDeserializer(item["foo"]),
          };
        }
        
        /** model interface _ReadResponseFoo */
        export interface _ReadResponseFoo {
          bar: string | null;
        }
        
        export function _readResponseFooDeserializer(item: any): _ReadResponseFoo {
          return {
            bar: item["bar"],
          };
        } 
        `);
        const operationFiles =
          await emitModularOperationsFromTypeSpec(tspContent);
        assert.equal(operationFiles?.length, 1);
        // Generate the operations.ts file with empty model
        await assertEqualContent(
          operationFiles?.[0]!.getFullText()!,
          `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _readSend(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        export async function _readDeserialize(
          result: PathUncheckedResponse
        ): Promise<{ foo?: { bar: string | null } }> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return _readResponseDeserializer(result.body);
        }
        export async function read(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<{ foo?: { bar: string | null } }> {
          const result = await _readSend(
            context,
            options
          );
          return _readDeserialize(result);
        }`,
          true
        );
      });
    });
    describe("happens as a property in response body", async () => {
      it("should map empty anonymous  model({}) => Record<string, any> & empty named model(A {}) => Record<string, any>", async () => {
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
        await assertEqualContent(
          modelFile?.getFullText()!,
          `
         /** model interface ReturnBody */
         export interface ReturnBody {
           emptyAnomyous: Record<string, any>;
           emptyAnomyousArray: Record<string, any>[];
           emptyAnomyousDict: Record<string, Record<string, any>>;
           emptyModel: EmptyModel;
           emptyModelArray: EmptyModel[];
           emptyModelDict: Record<string, EmptyModel>;
         }
         
         export function returnBodyDeserializer(item: any): ReturnBody {
           return {
             emptyAnomyous: _returnBodyEmptyAnomyousDeserializer(item["emptyAnomyous"]),
             emptyAnomyousArray: returnBodyEmptyAnomyousArrayArrayDeserializer(
               item["emptyAnomyousArray"],
             ),
             emptyAnomyousDict: returnBodyEmptyAnomyousDictRecordDeserializer(
               item["emptyAnomyousDict"],
             ),
             emptyModel: emptyModelDeserializer(item["emptyModel"]),
             emptyModelArray: emptyModelArrayDeserializer(item["emptyModelArray"]),
             emptyModelDict: emptyModelRecordDeserializer(item["emptyModelDict"]),
           };
         }
         
         /** model interface _ReturnBodyEmptyAnomyous */
         export interface _ReturnBodyEmptyAnomyous {}
         
         export function _returnBodyEmptyAnomyousDeserializer(
           item: any,
         ): _ReturnBodyEmptyAnomyous {
           return item;
         }
         
         /** model interface _ReturnBodyEmptyAnomyousArray */
         export interface _ReturnBodyEmptyAnomyousArray {}
         
         export function _returnBodyEmptyAnomyousArrayDeserializer(
           item: any,
         ): _ReturnBodyEmptyAnomyousArray {
           return item;
         }
         
         export function returnBodyEmptyAnomyousArrayArrayDeserializer(
           result: Array<_ReturnBodyEmptyAnomyousArray>,
         ): any[] {
           return result.map((item) => {
             return _returnBodyEmptyAnomyousArrayDeserializer(item);
           });
         }
         
         /** model interface _ReturnBodyEmptyAnomyousDict */
         export interface _ReturnBodyEmptyAnomyousDict {}
         
         export function _returnBodyEmptyAnomyousDictDeserializer(
           item: any,
         ): _ReturnBodyEmptyAnomyousDict {
           return item;
         }
         
         export function returnBodyEmptyAnomyousDictRecordDeserializer(
           item: Record<string, any>,
         ): Record<string, _ReturnBodyEmptyAnomyousDict> {
           const result: Record<string, any> = {};
           Object.keys(item).map((key) => {
             result[key] = !item[key]
               ? item[key]
               : _returnBodyEmptyAnomyousDictDeserializer(item[key]);
           });
           return result;
         }
         
         /** model interface EmptyModel */
         export interface EmptyModel {}
        
         export function emptyModelDeserializer(item: any): EmptyModel {
           return item;
         }
         
         export function emptyModelArrayDeserializer(result: Array<EmptyModel>): any[] {
           return result.map((item) => {
             return emptyModelDeserializer(item);
           });
         }
         
         export function emptyModelRecordDeserializer(
           item: Record<string, any>,
         ): Record<string, EmptyModel> {
           const result: Record<string, any> = {};
           Object.keys(item).map((key) => {
             result[key] = !item[key] ? item[key] : emptyModelDeserializer(item[key]);
           });
           return result;
         }
          `
        );
        const operationFiles =
          await emitModularOperationsFromTypeSpec(tspContent);
        assert.equal(operationFiles?.length, 1);
        await assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        
        export function _readSend(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }

        export async function _readDeserialize(
          result: PathUncheckedResponse
        ): Promise<ReturnBody> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }

          return returnBodyDeserializer(result.body);
        }

        export async function read(
          context: Client,
          options: ReadOptionalParams = { requestOptions: {} }
        ): Promise<ReturnBody> {
          const result = await _readSend(context, options);
          return _readDeserialize(result);
        }`
        );
      });

      it("should map non-empty anonymous model({ ... }) => { ... }", async () => {
        const tspContent = `
        model SimpleModel {
          test: string;
        }
        model Foz {
          baz: {
            foo: int32[];
            bas: string;
            @encodedName("application/json", "test")
            bar?: SimpleModel[];
            nonemptyAnomyous: { a: string };
            nonemptyAnomyousArray: { b?: Record<string> }[];
            nonemptyAnomyousDict: Record<{ c: int32[]; }>;
          }
        }
        op read(): Foz;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        await assertEqualContent(
          modelFile?.getFullText()!,
          `
           /** model interface Foz */
           export interface Foz {
             baz: {
               foo: number[];
               bas: string;
               bar?: SimpleModel[];
               nonemptyAnomyous: {
                 a: string;
               };
               nonemptyAnomyousArray: {
                 b?: Record<string, string>;
               }[];
               nonemptyAnomyousDict: Record<
                 string,
                 {
                   c: number[];
                 }
               >;
             };
           }
           
           export function fozDeserializer(item: any): Foz {
             return {
               baz: _fozBazDeserializer(item["baz"]),
             };
           }
           
           /** model interface _FozBaz */
           export interface _FozBaz {
             foo: number[];
             bas: string;
             bar?: SimpleModel[];
             nonemptyAnomyous: {
               a: string;
             };
             nonemptyAnomyousArray: {
               b?: Record<string, string>;
             }[];
             nonemptyAnomyousDict: Record<
               string,
               {
                 c: number[];
               }
             >;
           }
           
           export function _fozBazDeserializer(item: any): _FozBaz {
             return {
               foo: item["foo"].map((p: any) => {
                 return p;
               }),
               bas: item["bas"],
               bar: !item["test"]
                 ? item["test"]
                 : simpleModelArrayDeserializer(item["test"]),
               nonemptyAnomyous: _fozBazNonemptyAnomyousDeserializer(
                 item["nonemptyAnomyous"],
               ),
               nonemptyAnomyousArray: fozBazNonemptyAnomyousArrayArrayDeserializer(
                 item["nonemptyAnomyousArray"],
               ),
               nonemptyAnomyousDict: fozBazNonemptyAnomyousDictRecordDeserializer(
                 item["nonemptyAnomyousDict"],
               ),
             };
           }
           
           /** model interface SimpleModel */
           export interface SimpleModel {
             test: string;
           }
           
           export function simpleModelDeserializer(item: any): SimpleModel {
             return {
               test: item["test"],
             };
           }
           
           export function simpleModelArrayDeserializer(
             result: Array<SimpleModel>,
           ): any[] {
             return result.map((item) => {
               return simpleModelDeserializer(item);
             });
           }
           
           /** model interface _FozBazNonemptyAnomyous */
           export interface _FozBazNonemptyAnomyous {
             a: string;
           }
           
           export function _fozBazNonemptyAnomyousDeserializer(
             item: any,
           ): _FozBazNonemptyAnomyous {
             return {
               a: item["a"],
             };
           }
           
           /** model interface _FozBazNonemptyAnomyousArray */
           export interface _FozBazNonemptyAnomyousArray {
             b?: Record<string, string>;
           }
           
           export function _fozBazNonemptyAnomyousArrayDeserializer(
             item: any,
           ): _FozBazNonemptyAnomyousArray {
             return {
               b: item["b"],
             };
           }
           
           export function fozBazNonemptyAnomyousArrayArrayDeserializer(
             result: Array<_FozBazNonemptyAnomyousArray>,
           ): any[] {
             return result.map((item) => {
               return _fozBazNonemptyAnomyousArrayDeserializer(item);
             });
           }
           
           /** model interface _FozBazNonemptyAnomyousDict */
           export interface _FozBazNonemptyAnomyousDict {
             c: number[];
           }
           
           export function _fozBazNonemptyAnomyousDictDeserializer(
             item: any,
           ): _FozBazNonemptyAnomyousDict {
             return {
               c: item["c"].map((p: any) => {
                 return p;
               }),
             };
           }
        
           export function fozBazNonemptyAnomyousDictRecordDeserializer(
             item: Record<string, any>,
           ): Record<string, _FozBazNonemptyAnomyousDict> {
             const result: Record<string, any> = {};
             Object.keys(item).map((key) => {
              result[key] = !item[key]
                ? item[key]
                : _fozBazNonemptyAnomyousDictDeserializer(item[key]);
             });
             return result;
           }
          `
        );

        const operationFiles =
          await emitModularOperationsFromTypeSpec(tspContent);
        assert.equal(operationFiles?.length, 1);
        await assertEqualContent(
          operationFiles?.[0]?.getFullText()!,
          `
          import { TestingContext as Client } from "./index.js";
          import {
            StreamableMethod,
            PathUncheckedResponse,
            createRestError,
            operationOptionsToRequestParameters,
          } from "@azure-rest/core-client";
          
          export function _readSend(
            context: Client,
            options: ReadOptionalParams = { requestOptions: {} }
          ): StreamableMethod {
            return context
              .path("/")
              .get({ ...operationOptionsToRequestParameters(options) });
          }
          
          export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foz> {
            const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
              throw createRestError(result);
            }

            return fozDeserializer(result.body);
          }
          
          export async function read(
            context: Client,
            options: ReadOptionalParams = { requestOptions: {} }
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
