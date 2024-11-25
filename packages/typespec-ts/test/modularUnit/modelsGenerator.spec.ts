import { VerifyPropertyConfig, assertEqualContent } from "../util/testUtil.js";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";

import { Diagnostic } from "@typespec/compiler";
import { assert } from "chai";

async function verifyModularPropertyType(
  tspType: string,
  inputType: string,
  options?: VerifyPropertyConfig,
  needAzureCore: boolean = false,
  additionalImports: string = ""
) {
  const defaultOption: VerifyPropertyConfig = {
    additionalTypeSpecDefinition: "",
    outputType: inputType,
    additionalInputContent: "",
    additionalOutputContent: ""
  };
  const { additionalTypeSpecDefinition, additionalInputContent } = {
    ...defaultOption,
    ...options
  };
  const modelsFile = await emitModularModelsFromTypeSpec(
    `
  ${additionalTypeSpecDefinition}
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
  model InputOutputModel {
    prop: ${tspType};
  }

  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
  @route("/models")
  @get
  op getModel(@body input: InputOutputModel): InputOutputModel;`,
    { needAzureCore }
  );
  assert.ok(modelsFile);
  await assertEqualContent(
    modelsFile?.getFullText()!,
    `
  ${additionalImports}
  /** model interface InputOutputModel */
  export interface InputOutputModel {
      prop: ${inputType};
  }
    
  export function inputOutputModelSerializer(item: InputOutputModel): any {
    return { prop: item["prop"] };
  }
    
  export function inputOutputModelDeserializer(item: any): InputOutputModel {
    return {
      prop: item["prop"],
    };
  }
  ${additionalInputContent}`
  );
}

describe("modular model type", () => {
  it("should not generate models if there is no operations", async () => {
    const schemaOutput = await emitModularModelsFromTypeSpec(`
      model Test {
        prop: string;
      }
      `);
    assert.isUndefined(schemaOutput);
  });
});

describe("model property type", () => {
  it("should handle type_literals:boolean -> boolean_literals", async () => {
    const tspType = `true`;
    const typeScriptType = `true`;
    await verifyModularPropertyType(tspType, typeScriptType);
  });

  it("should handle type_literals:number -> number_literals", async () => {
    const tspType = `1`;
    const typeScriptType = `1`;
    await verifyModularPropertyType(tspType, typeScriptType);
  });

  it("should handle type_literals:string -> string_literals", async () => {
    const tspType = `"foo"`;
    const typeScriptType = `"foo"`;
    await verifyModularPropertyType(tspType, typeScriptType);
  });

  it("should handle enum member", async () => {
    const tspTypeDefinition = `
    @doc("Translation Language Values")
    enum TranslationLanguageValues {
      @doc("English descriptions")
      English: "English",
      @doc("Chinese descriptions")
      Chinese: "Chinese",
    }`;
    const tspType = "TranslationLanguageValues.English";
    const typeScriptType = `"English"`;
    await verifyModularPropertyType(tspType, typeScriptType, {
      additionalTypeSpecDefinition: tspTypeDefinition,
      additionalInputContent: `
      /** Translation Language Values */
      export type TranslationLanguageValues = "English" | "Chinese";
      `
    });
  });


  it("should handle boolean literal type", async () => {
    const tspContent = `
    @doc("The configuration for a streaming chat completion request.")
    model StreamingChatCompletionOptions {
      @doc("Indicates whether the completion is a streaming or non-streaming completion.")
      stream: true;
    }
    @route("/createStreaming")
    @post op createStreaming(
      ...StreamingChatCompletionOptions
    ): void;
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
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
      } from "@azure-rest/core-client";
      export function _createStreamingSend(
        context: Client,
        options: CreateStreamingOptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/createStreaming")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: { stream: true },
          });
      }
      export async function _createStreamingDeserialize(
        result: PathUncheckedResponse,
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return;
      }
      export async function createStreaming(
        context: Client,
        options: CreateStreamingOptionalParams = { requestOptions: {} },
      ): Promise<void> {
        const result = await _createStreamingSend(context, options);
        return _createStreamingDeserialize(result);
      }
      `,
      true
    );
  });
});

describe("modular encode test for property type datetime", () => {
  it("should handle property type plainDate, plainTime, utcDateTime, offsetDatetime with default encoding", async () => {
    const tspContent = `
    model Foo {
      prop1: plainDate;
      prop2: plainTime;
      prop3: utcDateTime;
      prop4: offsetDateTime;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: string;
        prop2: string;
        prop3: Date;
        prop4: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
          prop3: item["prop3"].toISOString(),
          prop4: item["prop4"],
        };
      }`
    );
    const deserializer = modelFile?.getFunction("fooDeserializer")?.getText();
    await assertEqualContent(
      deserializer!,
      `
      export function fooDeserializer(item: any): Foo {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
          prop3: new Date(item["prop3"]),
          prop4: item["prop4"],
        };
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle header parameter type utcDateTime with default encoding", async () => {
    const tspContent = `
    op read(@header prop: utcDateTime): OkResponse;
    `;
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
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
        prop: Date,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/")
          .get({
            ...operationOptionsToRequestParameters(options),
            headers: {
              prop: prop.toUTCString(),
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
        prop: Date,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _readSend(context, prop, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type utcDateTime, offsetDateTime with rfc3339 encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(DateTimeKnownEncoding.rfc3339)
      prop1: utcDateTime;
      @encode(DateTimeKnownEncoding.rfc3339)
      prop2: offsetDateTime;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: item["prop1"].toISOString(),
          prop2: item["prop2"],
        };
      }`,
      true
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type utcDateTime, offsetDateTime with rfc7231 encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(DateTimeKnownEncoding.rfc7231)
      prop1: utcDateTime;
      @encode(DateTimeKnownEncoding.rfc7231)
      prop2: offsetDateTime;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: item["prop1"].toUTCString(),
          prop2: item["prop2"],
        };
      }`,
      true
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type utcDateTime with unixTimestamp encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(DateTimeKnownEncoding.unixTimestamp, int64)
      prop1: utcDateTime;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Date;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: (item["prop1"].getTime() / 1000) | 0,
        };
      }`,
      true
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });
});

describe("modular encode test for property type duration", () => {
  it("should handle property type duration with default encoding", async () => {
    const tspContent = `
    model Foo {
      prop1: duration;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: string;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type duration with ISO8601 encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(DurationKnownEncoding.ISO8601)
      prop1: duration;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: string;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod, 
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type duration with seconds encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(DurationKnownEncoding.seconds, float32)
      prop1: duration;
      @encode(DurationKnownEncoding.seconds, int64)
      prop2: duration;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: number;
        prop2: number;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });
});

describe("modular encode test for property type bytes", () => {
  it("should handle property type bytes with default encoding", async () => {
    const tspContent = `
    model Foo {
      prop1: bytes;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Uint8Array;
      }`,
      true
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: uint8ArrayToString(item["prop1"], "base64"),
        }
      }`,
      true
    );

    const deserializer = modelFile?.getFunction("fooDeserializer")?.getText();
    await assertEqualContent(
      deserializer!,
      `
      export function fooDeserializer(item: any): Foo {
        return {
          prop1:
            typeof item["prop1"] === "string"
              ? stringToUint8Array(item["prop1"], "base64")
              : item["prop1"],
        };
      }`,
      true
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type bytes with base64 encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(BytesKnownEncoding.base64)
      prop1: bytes;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Uint8Array;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: uint8ArrayToString(item["prop1"], "base64"),
        }
      }`,
      true
    );

    const deserializer = modelFile?.getFunction("fooDeserializer")?.getText();
    await assertEqualContent(
      deserializer!,
      `
      export function fooDeserializer(item: any): Foo {
        return {
          prop1:
            typeof item["prop1"] === "string"
              ? stringToUint8Array(item["prop1"], "base64")
              : item["prop1"],
        };
      }`,
      true
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body)
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });

  it("should handle property type bytes with base64url encoding", async () => {
    const tspContent = `
    model Foo {
      @encode(BytesKnownEncoding.base64url)
      prop1: bytes;
    }
    op read(@body body: Foo): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getInterface("Foo")?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        prop1: Uint8Array;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): any {
        return {
          prop1: uint8ArrayToString(item["prop1"], "base64url"),
        }
      }`,
      true
    );

    const deserializer = modelFile?.getFunction("fooDeserializer")?.getText();
    await assertEqualContent(
      deserializer!,
      `
      export function fooDeserializer(item: any): Foo {
        return {
          prop1:
            typeof item["prop1"] === "string"
              ? stringToUint8Array(item["prop1"], "base64url")
              : item["prop1"],
        };
      }`,
      true
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooSerializer, fooDeserializer } from "../models/models.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
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
            body: fooSerializer(body),
          });
      }
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, body, options);
        return _readDeserialize(result);
      }`,
      true
    );
  });
});

describe("inheritance & polymorphism", () => {
  it("should handle inheritance model", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
    model Pet {
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    model Dog extends Pet {
      kind: "dog";
      bark: string;
    }
    op read(): { @body body: Cat | Dog };
    `);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Cat */
      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }
      
      export function catDeserializer(item: any): Cat {
        return {
          name: item["name"],
          weight: item["weight"],
          kind: item["kind"],
          meow: item["meow"],
        };
      }

      /** model interface Pet */
      export interface Pet {
        name: string;
        weight?: number;
      }
      
      export function petDeserializer(item: any): Pet {
        return {
          name: item["name"],
          weight: item["weight"],
        };
      }

      /** model interface Dog */
      export interface Dog extends Pet {
        kind: "dog";
        bark: string;
      }
      
      export function dogDeserializer(item: any): Dog {
        return {
          name: item["name"],
          weight: item["weight"],
          kind: item["kind"],
          bark: item["bark"],
        };
      }
      
      /** Alias for _ReadResponse */
      export type _ReadResponse = Cat | Dog;
      
      export function _readResponseDeserializer(item: any): _ReadResponse {
        return item;
      }
      `
    );
  });

  it("should handle inheritance model in operations", async () => {
    const tspContent = `
    model Pet {
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    model Dog extends Pet {
      kind: "dog";
      bark: string;
    }
    op read(): { @body body: Cat };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Cat */
      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }
      
      export function catDeserializer(item: any): Cat {
        return {
          name: item["name"],
          weight: item["weight"],
          kind: item["kind"],
          meow: item["meow"],
        };
      }
      
      /** model interface Pet */
       export interface Pet {
         name: string;
         weight?: number;
       }
      
      export function petDeserializer(item: any): Pet {
        return {
          name: item["name"],
          weight: item["weight"],
        };
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Cat, catDeserializer } from "../models/models.js";
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
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Cat> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        
        return catDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Cat> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }      
      `
    );
  });

  it("should handle multi level inheritance model in operations", async () => {
    const tspContent = `
    model Animal {
      name: string;
    }
    model Pet extends Animal {
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    op read(): { @body body: Cat };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Cat */
      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }

      export function catDeserializer(item: any): Cat {
        return {
          weight: item["weight"],
          name: item["name"],
          kind: item["kind"],
          meow: item["meow"],
        };
      }
      
      /** model interface Pet */
      export interface Pet extends Animal {
        weight?: number;
      }
           
      export function petDeserializer(item: any): Pet {
        return {
          name: item["name"],
          weight: item["weight"],
        };
      }
      
      /** model interface Animal */
      export interface Animal {
        name: string;
      } 

      export function animalDeserializer(item: any): Animal {
        return {
          name: item["name"],
        };
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Cat, catDeserializer } from "../models/models.js";
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

      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Cat> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return catDeserializer(result.body);
      }

      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Cat> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }
      `
    );
  });

  // TODO: Pending on https://github.com/Azure/typespec-azure/issues/1605 to be fixed
  it("should handle inheritance model with discriminator in operations", async () => {
    const tspContent = `
    @discriminator("kind")
    model Pet {
      kind: string;
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    model Dog extends Pet {
      kind: "dog";
      bark: string;
    }
    op read(): { @body body: Cat };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Cat */
      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }
           
      export function catDeserializer(item: any): Cat {
        return {
          kind: item["kind"],
          name: item["name"],
          weight: item["weight"],
          meow: item["meow"],
        };
      }
      
      /** model interface Pet */
      export interface Pet {
        kind: string;
        name: string;
        weight?: number;
      }
      
      export function petDeserializer(item: any): Pet {
        return {
          kind: item["kind"],
          name: item["name"],
          weight: item["weight"],
        };
      }
      
      /** Alias for PetUnion */
      export type PetUnion = Cat | Pet;
            
      export function petUnionDeserializer(item: any): PetUnion {
        switch (item.kind) {
          case "cat":
            return catDeserializer(item as Cat);
      
          default:
            return petDeserializer(item);
        }
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Cat, catDeserializer } from "../models/models.js";
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
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Cat> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return catDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Cat> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }      
      `
    );
  });

  it("should handle base model with discriminator in operations", async () => {
    const tspContent = `
    @discriminator("kind")
    model Pet {
      kind: string;
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    model Dog extends Pet {
      kind: "dog";
      bark: string;
    }
    op read(): { @body body: Pet };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Pet */
      export interface Pet {
        kind: string;
        name: string;
        weight?: number;
      }
      
      export function petDeserializer(item: any): Pet {
        return {
          kind: item["kind"],
          name: item["name"],
          weight: item["weight"],
        };
      }

      /** Alias for PetUnion */
      export type PetUnion = Cat | Dog | Pet;
      
      export function petUnionDeserializer(item: any): PetUnion {
        switch (item.kind) {
          case "cat":
            return catDeserializer(item as Cat);
      
          case "dog":
            return dogDeserializer(item as Dog);
      
          default:
            return petDeserializer(item);
        }
      }
      
      /** model interface Cat */      
      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }
      
      export function catDeserializer(item: any): Cat {
        return {
          kind: item["kind"],
          name: item["name"],
          weight: item["weight"],
          meow: item["meow"],
        };
      }
      
      /** model interface Dog */
      export interface Dog extends Pet {
        kind: "dog";
        bark: string;
      }

      export function dogDeserializer(item: any): Dog {
        return {
          kind: item["kind"],
          name: item["name"],
          weight: item["weight"],
          bark: item["bark"],
        };
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { petUnionDeserializer, PetUnion } from "../models/models.js";
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
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<PetUnion> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return petUnionDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<PetUnion> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }      
      `
    );
  });

  it("should handle circular in model properties with inheritance", async () => {
    const tspContent = `
    @discriminator("kind")
    model Pet {
      kind: string;
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    @discriminator("type")
    model Dog extends Pet {
      kind: "dog";
      type: string;
      bark: string;
    }
    model Gold extends Dog {
      type: "gold";
      friends: Pet[];
    }
    op read(): { @body body: Pet };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
       /** model interface Pet */
       export interface Pet {
         kind: string;
         name: string;
         weight?: number;
       }
       
       export function petDeserializer(item: any): Pet {
         return {
           kind: item["kind"],
           name: item["name"],
           weight: item["weight"],
         };
       }
       
       /** Alias for PetUnion */
       export type PetUnion = Cat | DogUnion | Pet;
       
       export function petUnionDeserializer(item: any): PetUnion {
         switch (item.kind) {
           case "cat":
             return catDeserializer(item as Cat);
       
           case "dog":
             return dogUnionDeserializer(item as DogUnion);
       
           default:
             return petDeserializer(item);
         }
       }
       
       /** model interface Cat */
       export interface Cat extends Pet {
         kind: "cat";
         meow: number;
       }
       
       export function catDeserializer(item: any): Cat {
         return {
           kind: item["kind"],
           name: item["name"],
           weight: item["weight"],
           meow: item["meow"],
         };
       }
       
       /** model interface Dog */
       export interface Dog extends Pet {
         kind: "dog";
         type: string;
         bark: string;
       }
       
       export function dogDeserializer(item: any): Dog {
         return {
           kind: item["kind"],
           name: item["name"],
           weight: item["weight"],
           type: item["type"],
           bark: item["bark"],
         };
       }
       
       /** Alias for DogUnion */
       export type DogUnion = Gold | Dog;
       
       export function dogUnionDeserializer(item: any): DogUnion {
         switch (item.type) {
           case "gold":
             return goldDeserializer(item as Gold);
       
           default:
             return dogDeserializer(item);
         }
       }
       
       /** model interface Gold */
       export interface Gold extends Dog {
         type: "gold";
         friends: PetUnion[];
       }
       
       export function goldDeserializer(item: any): Gold {
         return {
           kind: item["kind"],
           type: item["type"],
           bark: item["bark"],
           name: item["name"],
           weight: item["weight"],
           friends: petUnionArrayDeserializer(item["friends"]),
         };
       }
       
       export function petUnionArrayDeserializer(result: Array<PetUnion>): any[] {
         return result.map((item) => {
           return petUnionDeserializer(item);
         });
       }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
       import { TestingContext as Client } from "./index.js";
       import { petUnionDeserializer, PetUnion } from "../models/models.js";
       import {
         StreamableMethod,
         PathUncheckedResponse,
         createRestError,
         operationOptionsToRequestParameters,
       } from "@azure-rest/core-client";
       
       export function _readSend(
         context: Client,
         options: ReadOptionalParams = { requestOptions: {} },
       ): StreamableMethod {
         return context
           .path("/")
           .get({ ...operationOptionsToRequestParameters(options) });
       }
       
       export async function _readDeserialize(
         result: PathUncheckedResponse,
       ): Promise<PetUnion> {
         const expectedStatuses = ["200"];
         if (!expectedStatuses.includes(result.status)) {
           throw createRestError(result);
         }
       
         return petUnionDeserializer(result.body);
       }
       
       export async function read(
         context: Client,
         options: ReadOptionalParams = { requestOptions: {} },
       ): Promise<PetUnion> {
         const result = await _readSend(context, options);
         return _readDeserialize(result);
       }
      `
    );
  });

  it("should handle circular in model properties with combination", async () => {
    const tspContent = `
    model Foo {
      name: string;
      weight?: float32;
      bar: Bar;
    }
    model Bar {
      foo: Foo;
    }
    op read(): { @body body: Foo };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /** model interface Foo */
      export interface Foo {
        name: string;
        weight?: number;
        bar: Bar;
      }
      
      export function fooDeserializer(item: any): Foo {
        return {
          name: item["name"],
          weight: item["weight"],
          bar: barDeserializer(item["bar"]),
        };
      }
      
      /** model interface Bar */
      export interface Bar {
        foo: Foo;
      }
      
      export function barDeserializer(item: any): Bar {
        return {
          foo: fooDeserializer(item["foo"]),
        };
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import { Foo, fooDeserializer } from "../models/models.js";
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
      
      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Foo> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
      
        return fooDeserializer(result.body);
      }
      
      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }
      `
    );
  });
  /**
   * TODO: This test is skipped because typespec has some issues. https://github.com/microsoft/typespec/issues/2411
   */
  it.skip("should handle multiple parents inheritance model in operations", async () => {
    const tspContent = `
    model Creature {
      life: int64;
    }
    model Animal {
      name: string;
    }
    model Pet extends Animal, Creature {
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    op read(): { @body body: Cat };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Creature {
        life: number;
      }

      export interface Animal {
        name: string;
      }

      export interface Pet extends Animal, Creature {
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
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
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }

      export async function _readDeserialize(result: PathUncheckedResponse): Promise<Cat> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return {
          life: result.body["life"],
          name: result.body["name"],
          weight: result.body["weight"],
          kind: result.body["kind"],
          meow: result.body["meow"],
        };
      }

      export async function read(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): Promise<Cat> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }
      `
    );
  });

  describe("should generate models for header parameters", () => {
    it("union variants with string literals being used in contentType headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      union SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("Content-Type") contentType: SchemaContentTypeValues,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModularModelsFromTypeSpec(
        tspDefinition,
        {
          needOptions: false,
          withRawContent: true
        }
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** Type of SchemaContentTypeValues */
        export type SchemaContentTypeValues =
          | "application/json; serialization=Avro"
          | "application/json; serialization=json"
          | "text/plain; charset=utf-8"
          | "text/vnd.ms.protobuf";
        `
      );
      const paramOutput = await emitModularOperationsFromTypeSpec(
        tspDefinition,
        {
          mustEmptyDiagnostic: false,
          needNamespaces: false,
          needAzureCore: false,
          withRawContent: true,
        }
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.length, 1);
      await assertEqualContent(
        paramOutput?.[0]?.getFullText()!,
        `
        import { DemoServiceContext as Client } from "./index.js";
        import { SchemaContentTypeValues } from "../models/models.js";
        import {
          StreamableMethod,
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        
        export function _getSend(
          context: Client,
          contentType: SchemaContentTypeValues,
          body: string,
          options: GetOptionalParams = { requestOptions: {} }
        ): StreamableMethod {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                contentType: contentType,
                body: body
              });
        }
        
        export async function _getDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["204"];
          if(!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
        
          return;
        }
        
        export async function get(
          context: Client,
          contentType: SchemaContentTypeValues,
          body: string,
          options: GetOptionalParams = { requestOptions: {} }
        ): Promise<void> {
          const result = await _getSend(context, contentType, body, options);
          return _getDeserialize(result);
        }
        `,
        true
      );
    });

    it("named union with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      union SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("test-header") testHeader: SchemaContentTypeValues,
        @body body: string,
      ): { @header("test-header") testHeader: SchemaContentTypeValues; @statusCode _: 204; };
      `;
      const schemaOutput = await emitModularModelsFromTypeSpec(
        tspDefinition,
        {
          needOptions: false,
          withRawContent: true
        }
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** Type of SchemaContentTypeValues */
        export type SchemaContentTypeValues =
          | "application/json; serialization=Avro"
          | "application/json; serialization=json"
          | "text/plain; charset=utf-8"
          | "text/vnd.ms.protobuf";
        `
      );
    });

    it("anonymous union with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      op get(
        @header("test-header") testHeader: "A" | "B",
        @body body: string,
      ): { @header("test-header") testHeader: "A" | "B"; @statusCode _: 204; };
      `;
      const schemaOutput = await emitModularModelsFromTypeSpec(
        tspDefinition,
        {
          needOptions: false,
          withRawContent: true
        }
      );
      assert.isUndefined(schemaOutput);

      const paramOutput = await emitModularOperationsFromTypeSpec(
        tspDefinition,
        {
          mustEmptyDiagnostic: true,
          needNamespaces: false,
          needAzureCore: false,
          withRawContent: true,
        }
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.length, 1);
      const operationContent = paramOutput?.[0]?.getFullText()!;
      await assertEqualContent(
        operationContent,
        `
        import { DemoServiceContext as Client } from "./index.js";
        import {
          StreamableMethod,
          PathUncheckedResponse,
          createRestError,
          operationOptionsToRequestParameters,
        } from "@azure-rest/core-client";
        export function _getSend(
          context: Client,
          testHeader: "A" | "B",
          body: string,
          options: GetOptionalParams = { requestOptions: {} },
        ): StreamableMethod {
          return context
            .path("/")
            .post({
              ...operationOptionsToRequestParameters(options),
              headers: { "test-header": testHeader },
              body: body
            });
        }
        export async function _getDeserialize(result: PathUncheckedResponse): Promise<void> {
          const expectedStatuses = ["204"];
          if(!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return;
        }
        export async function get(
          context: Client,
          testHeader: "A" | "B",
          body: string,
          options: GetOptionalParams = { requestOptions: {} },
        ): Promise<void> {
          const result = await _getSend(context, testHeader, body, options);
          return _getDeserialize(result);
        }
        `,
        true
      );
    });
  });
});

describe("`is`", () => {
  it("should generate correct name and properties if A is B<Template>", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
    model B<Parameter> {
      prop1: string;
      prop2: Parameter;
    }
    model A is B<string> {
      @query
      name: string;
    };
      op read(@bodyRoot body: A): void;
      `);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      /** model interface A */
      export interface A {
        prop1: string;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function aSerializer(item: A): any {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`,
      true
    );
  });
});

describe("`extends`", () => {
  it("should generate correct name and properties if A extends B", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      model B {
        prop1: string;
        prop2: string;
      }
      model A extends B {
        @query
        name: string;
      };
      op read(@bodyRoot body: A): void;
      `);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile!.getInterface("B")?.getFullText()!,
      `
      /** model interface B */
      export interface B {
        prop1: string;
        prop2: string;
      }
      `,
      true
    );

    const serializerB = modelFile?.getFunction("bSerializer")?.getText();
    await assertEqualContent(
      serializerB!,
      `
      export function bSerializer(item: B): any {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`,
      true
    );

    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      /** model interface A */
      export interface A extends B {}`
    );

    const serializerA = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializerA!,
      `
      export function aSerializer(item: A): any {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`,
      true
    );
  });
});

describe("visibility", () => {
  it("should generate readonly for @visibility('read')", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      model A  {
        @visibility("read")
        exactVersion?: string;
      };
      op read(@body body: A): void;
      `);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile!.getFullText()!,
      `
      /** model interface A */
      export interface A {
        readonly exactVersion?: string;
      }
      
      export function aSerializer(item: A): any {
        return item;
      }
      `,
      true
    );
  });

  it("should not generate readonly for @visibility('read', 'create')", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      model A  {
        @visibility("read", "create")
        exactVersion?: string;
      };
      op read(@body body: A): void;
      `);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      /** model interface A */
      export interface A {
        exactVersion?: string;
      }`,
      true
    );

    const serializer = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function aSerializer(item: A): any {
        return {
          exactVersion: item["exactVersion"],
        };
      }`,
      true
    );
  });
});

describe("spread record", () => {
  it("should handle model additional properties from spread record of int64 | string in compatibleMode", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(
      `
    
    model Vegetables {
      ...Record<int64 | string>;
      carrots: int64;
      beans: int64;
    }
    op post(@body body: Vegetables): { @body body: Vegetables };
    `,
      {
        compatibilityMode: true
      }
    );
    assert.ok(modelFile);
    assert.isTrue(modelFile?.getFilePath()?.endsWith("/models/models.ts"));
    await assertEqualContent(
      modelFile!.getInterface("Vegetables")?.getFullText()!,
      `
      /** model interface Vegetables */
      export interface Vegetables extends Record<string, number | string>{
        carrots: number;
        beans: number;
      }
      `,
      true
    );

    const serializer = modelFile
      ?.getFunction("vegetablesSerializer")
      ?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function vegetablesSerializer(item: Vegetables): any {
        return {
          ...item,
          carrots: item["carrots"],
          beans: item["beans"],
        };
      }`,
      true
    );
  });

  it("should fail to handle model additional properties from spread record of int64 | string in non compatible mode", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
      model Vegetables {
        ...Record<int64 | string>;
        carrots: int64;
        beans: int64;
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `
      );
      assert.fail("Should throw diagnostic warnings");
    } catch (e) {
      const diagnostics = e as Diagnostic[];
      assert.equal(diagnostics.length, 1);
      assert.equal(
        diagnostics[0]?.code,
        "@azure-tools/typespec-ts/compatible-additional-properties"
      );
      assert.equal(diagnostics[0]?.severity, "warning");
    }
  });

  it("should handle model extends with additional properties", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(
      `
      model Base {
        foo: int32;
      }
      model A extends Base{
        ...Record<int32>;
        prop: int32
      }
      op post(@body body: A): { @body body: A };
    `,
      {
        compatibilityMode: true
      }
    );
    assert.ok(modelFile);
    assert.isTrue(modelFile?.getFilePath()?.endsWith("/models/models.ts"));
    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      /** model interface A */
      export interface A extends Base, Record<string, number> {
        prop: number;
      }
      `,
      true
    );

    const serializerA = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializerA!,
      `
      export function aSerializer(item: A): any {
        return {
          ...item,
          foo: item["foo"],
          prop: item["prop"],
        };
      }`,
      true
    );

    await assertEqualContent(
      modelFile!.getInterface("Base")?.getFullText()!,
      `
      /** model interface Base */
      export interface Base {
        foo: number;
      }
      `
    );

    const serializerBase = modelFile?.getFunction("baseSerializer")?.getText();
    await assertEqualContent(
      serializerBase!,
      `
      export function baseSerializer(item: Base): any {
        return {
          foo: item["foo"],
        };
      }
      `,
      true
    );
  });
});
