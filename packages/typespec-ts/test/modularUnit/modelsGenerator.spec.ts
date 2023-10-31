import { assert } from "chai";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { VerifyPropertyConfig, assertEqualContent } from "../util/testUtil.js";

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
  assertEqualContent(
    modelsFile?.getFullText()!,
    `
  ${additionalImports}

  export interface InputOutputModel {
      prop: ${inputType};
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
    await verifyModularPropertyType(
      tspType,
      typeScriptType,
      {
        additionalTypeSpecDefinition: tspTypeDefinition
      }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Date;
        prop2: Date;
        prop3: Date;
        prop4: string;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
        prop: Date,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return;
      }
      
      export async function read(
        context: Client,
        prop: Date,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: new Date(result.body["prop1"]),
          prop2: result.body["prop2"],
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Date;
        prop2: string;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: new Date(result.body["prop1"]),
          prop2: result.body["prop2"],
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Date;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: new Date(result.body["prop1"]),
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: string;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: result.body["prop1"],
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: string;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: result.body["prop1"],
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: number;
        prop2: number;
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
        }
      
        return {
          prop1: result.body["prop1"],
          prop2: result.body["prop2"],
        };
      }
      
      export async function read(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Uint8Array;
      }`
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
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Uint8Array;
      }`
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
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Uint8Array;
      }`
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
      } from "@azure-rest/core-client";
      import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
      
      export function _readSend(
        context: Client,
        body: Foo,
        options: ReadOptions = { requestOptions: {} }
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
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
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
    assertEqualContent(
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
      
      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
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

      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Pet {
        /** the discriminator possible values cat, dog */
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
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptions = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
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
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Pet {
        /** the discriminator possible values cat, dog */
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
      }`
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
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        options: ReadOptions = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<Pet> {
        if (result.status !== "200") {
          throw result.body;
        }
      
        return {
          kind: result.body["kind"],
          name: result.body["name"],
          weight: result.body["weight"]
        };
      }
      
      export async function read(
        context: Client,
        options: ReadOptions = { requestOptions: {} }
      ): Promise<Pet> {
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
    assertEqualContent(
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

      export async function _readDeserialize(result: Read200Response): Promise<Cat> {
        if (result.status !== "200") {
          throw result.body;
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
        options: ReadOptions = { requestOptions: {} }
      ): Promise<Cat> {
        const result = await _readSend(context, options);
        return _readDeserialize(result);
      }
      `
    );
  });
});
