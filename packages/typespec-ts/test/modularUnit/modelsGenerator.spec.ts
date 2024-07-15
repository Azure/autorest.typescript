import { assert } from "chai";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { VerifyPropertyConfig, assertEqualContent } from "../util/testUtil.js";
import { Diagnostic } from "@typespec/compiler";

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
    needAzureCore
  );
  assert.ok(modelsFile);
  await assertEqualContent(
    modelsFile?.getFullText()!,
    `
    import { InputOutputModel as InputOutputModelRest } from "../rest/index.js"
  ${additionalImports}

  export interface InputOutputModel {
      prop: ${inputType};
  }
    
  export function inputOutputModelSerializer(item: InputOutputModel): InputOutputModelRest {
    return {
      prop: item["prop"]
    }
  }
  ${additionalInputContent}`
  );
}

describe("modular model type", () => {
  it("shouldn't generate models if there is no operations", async () => {
    const schemaOutput = await emitModularModelsFromTypeSpec(`
      model Test {
        prop: string;
      }
      `);
    assert.ok(!schemaOutput);
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
      export interface Foo {
        prop1: Date;
        prop2: Date;
        prop3: Date;
        prop4: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): FooRest {
        return {
          prop1: item["prop1"].toDateString(),
          prop2: item["prop2"].toTimeString(),
          prop3: item["prop3"].toISOString(),
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"].toDateString(),
              prop2: body["prop2"].toTimeString(),
              prop3: body["prop3"].toISOString(),
              prop4: body["prop4"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: new Date(result.body["prop1"]),
          prop2: new Date(result.body["prop2"]),
          prop3: new Date(result.body["prop3"]),
          prop4: result.body["prop4"],
        };
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        prop: Date,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({
            ...operationOptionsToRequestParameters(options),
            headers: {
              prop: prop.toUTCString(),
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<void> {
        if (result.status !== "200") {
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
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): FooRest {
        return {
          prop1: item["prop1"].toISOString(),
          prop2: item["prop2"],
        };
      }`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"].toISOString(),
              prop2: body["prop2"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: new Date(result.body["prop1"]),
          prop2: result.body["prop2"],
        };
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
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): FooRest {
        return {
          prop1: item["prop1"].toUTCString(),
          prop2: item["prop2"],
        };
      }`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"].toUTCString(),
              prop2: body["prop2"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: new Date(result.body["prop1"]),
          prop2: result.body["prop2"],
        };
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
      export interface Foo {
        prop1: Date;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): FooRest {
        return {
          prop1: item["prop1"].getTime(),
        };
      }`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"].getTime()
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: new Date(result.body["prop1"]),
        };
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: result.body["prop1"],
        };
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: result.body["prop1"],
        };
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: body["prop1"], 
              prop2: body["prop2"],
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1: result.body["prop1"],
          prop2: result.body["prop2"],
        };
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
      export interface Foo {
        prop1: Uint8Array;
      }`
    );

    const serializer = modelFile?.getFunction("fooSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function fooSerializer(item: Foo): FooRest {
        return {
          prop1: uint8ArrayToString(item["prop1"], "base64"),
        }
      };`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: uint8ArrayToString(body["prop1"], "base64"),
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1:
            typeof result.body["prop1"] === "string"
              ? stringToUint8Array(result.body["prop1"], "base64")
              : result.body["prop1"],
        };
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
      export interface Foo {
        prop1: Uint8Array;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: uint8ArrayToString(body["prop1"], "base64"),
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1:
            typeof result.body["prop1"] === "string"
              ? stringToUint8Array(result.body["prop1"], "base64")
              : result.body["prop1"],
        };
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
      export interface Foo {
        prop1: Uint8Array;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: uint8ArrayToString(body["prop1"], "base64url"),
            },
          });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        return {
          prop1:
            typeof result.body["prop1"] === "string"
              ? stringToUint8Array(result.body["prop1"], "base64url")
              : result.body["prop1"],
        };
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
      export interface Pet {
        name: string;
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }

      export interface Dog extends Pet {
        kind: "dog";
        bark: string;
      }`
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
      export interface Pet {
        name: string;
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
        
        return {
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
      export interface Animal {
        name: string;
      }

      export interface Pet extends Animal {
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";

      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }

      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw createRestError(result);
        }

        return {
          weight: result.body["weight"],
          name: result.body["name"],
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
      export interface Pet {
        /** the discriminator possible values: cat, dog */
        kind: string;
        name: string;
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }

      export interface Dog extends Pet {
        kind: "dog";
        bark: string;
      }
      
      /** Alias for PetUnion */
      export type PetUnion = Cat | Dog | Pet;`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw createRestError(result);
        }

        return {
          kind: result.body["kind"],
          name: result.body["name"],
          weight: result.body["weight"],
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
      export interface Pet {
        /** the discriminator possible values: cat, dog */
        kind: string;
        name: string;
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }

      export interface Dog extends Pet {
        kind: "dog";
        bark: string;
      }
      
      /** Alias for PetUnion */
      export type PetUnion = Cat | Dog | Pet;`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<PetUnion> {
        if (result.status !== "200") {
          throw createRestError(result);
        }

        return result.body;
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Pet {
        /** the discriminator possible values: cat, dog */
        kind: string;
        name: string;
        weight?: number;
      }

      export interface Cat extends Pet {
        kind: "cat";
        meow: number;
      }

      export interface Dog extends Pet {
        kind: "dog";
        /** the discriminator possible values: gold */
        type: string;
        bark: string;
      }
      
      export interface Gold extends Dog {
        type: "gold";
        friends: PetUnion[];
      }

      /** Alias for PetUnion */
      export type PetUnion = Cat | DogUnion | Pet;
      /** Alias for DogUnion */
      export type DogUnion = Gold | Dog;
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<PetUnion> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
      
        return result.body;
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        name: string;
        weight?: number;
        bar: Bar;
      }
      
      export interface Bar {
        foo: Foo;
      }
      `
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Foo> {
        if (result.status !== "200") {
          throw createRestError(result);
        }
      
        return {
          name: result.body["name"],
          weight: result.body["weight"],
          bar: { foo: result.body.bar.foo },
        };
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError
      } from "@azure-rest/core-client";

      export function _readSend(
        context: Client,
        options: ReadOptionalParams = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }

      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
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
        false,
        true
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
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.length, 1);
      await assertEqualContent(
        paramOutput?.[0]?.getFullText()!,
        `
        import { DemoServiceContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          createRestError,
        } from "@azure-rest/core-client";
        
        export function _getSend(
          context: Client,
          contentType: SchemaContentTypeValues,
          body: string,
          options: GetOptionalParams = { requestOptions: {} }
        ): StreamableMethod<Get204Response> {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                contentType: contentType,
                body: body
              });
        }
        
        export async function _getDeserialize(result: Get204Response): Promise<void> {
          if (result.status !== "204") {
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
        false,
        true
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
        false,
        true
      );
      assert.isUndefined(schemaOutput);

      const paramOutput = await emitModularOperationsFromTypeSpec(
        tspDefinition,
        true,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.length, 1);
      const operationContent = paramOutput?.[0]?.getFullText()!;
      await assertEqualContent(
        operationContent,
        `
        import { DemoServiceContext as Client } from "../rest/index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          createRestError,
        } from "@azure-rest/core-client";
        export function _getSend(
          context: Client,
          testHeader: "A" | "B",
          body: string,
          options: GetOptionalParams = { requestOptions: {} },
        ): StreamableMethod<Get204Response> {
          return context
            .path("/")
            .post({
              ...operationOptionsToRequestParameters(options),
              headers: { "test-header": testHeader },
              body: body
            });
        }
        export async function _getDeserialize(result: Get204Response): Promise<void> {
          if (result.status !== "204") {
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
      export interface A {
        prop1: string;
        prop2: string;
      }`
    );

    const serializer = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function aSerializer(item: A): ARest {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`
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
      export interface B {
        prop1: string;
        prop2: string;
      }
      `
    );

    const serializerB = modelFile?.getFunction("bSerializer")?.getText();
    await assertEqualContent(
      serializerB!,
      `
      export function bSerializer(item: B): BRest {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`
    );

    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      export interface A extends B {}`
    );

    const serializerA = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializerA!,
      `
      export function aSerializer(item: A): ARest {
        return {
          prop1: item["prop1"],
          prop2: item["prop2"],
        };
      }`
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
      export interface A {
        readonly exactVersion?: string;
      }
      
      export function aSerializer(item: A) {
        return item as any;
      }
      `
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
      export interface A {
        exactVersion?: string;
      }`
    );

    const serializer = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function aSerializer(item: A): ARest {
        return {
          exactVersion: item["exactVersion"],
        };
      }`
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
      false,
      false,
      false,
      true
    );
    assert.ok(modelFile);
    assert.isTrue(modelFile?.getFilePath()?.endsWith("/models/models.ts"));
    await assertEqualContent(
      modelFile!.getInterface("Vegetables")?.getFullText()!,
      `
      export interface Vegetables extends Record<string, number | string>{
        carrots: number;
        beans: number;
      }
      `
    );

    const serializer = modelFile
      ?.getFunction("vegetablesSerializer")
      ?.getText();
    await assertEqualContent(
      serializer!,
      `
      export function vegetablesSerializer(item: Vegetables): VegetablesRest {
        return {
          ...item,
          carrots: item["carrots"],
          beans: item["beans"],
        };
      }`
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
      false,
      false,
      false,
      true
    );
    assert.ok(modelFile);
    assert.isTrue(modelFile?.getFilePath()?.endsWith("/models/models.ts"));
    await assertEqualContent(
      modelFile!.getInterface("A")?.getFullText()!,
      `
      export interface A extends Base, Record<string, number> {
        prop: number;
      }
      `
    );

    const serializerA = modelFile?.getFunction("aSerializer")?.getText();
    await assertEqualContent(
      serializerA!,
      `
      export function aSerializer(item: A): ARest {
        return {
          ...item,
          foo: item["foo"],
          prop: item["prop"],
        };
      }`
    );

    await assertEqualContent(
      modelFile!.getInterface("Base")?.getFullText()!,
      `
      export interface Base {
        foo: number;
      }
      `
    );

    const serializerBase = modelFile?.getFunction("baseSerializer")?.getText();
    await assertEqualContent(
      serializerBase!,
      `
      export function baseSerializer(item: Base): BaseRest {
        return {
          foo: item["foo"],
        };
      }
      `
    );
  });
});
