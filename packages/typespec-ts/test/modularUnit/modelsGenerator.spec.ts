import { assert } from "chai";
import { emitModularModelsFromTypeSpec, emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

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

describe("modular encode test for property type datetime", () => {
  it("should handle property type utcDateTime", async () => {
    const tspContent = `
    model Foo {
      prop1: plainDate;
      prop2: plainTime;
      prop3: utcDateTime;
      prop4: offsetDateTime;
    }
    op read(@body body: Foo): { @body body: Foo };
    `
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    assertEqualContent(
      modelFile?.getFullText()!,
      `
      export interface Foo {
        prop1: Date;
        prop2: Date;
        prop3: Date;
        prop4: Date;
      }`
    );
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,`
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
      } from "@azure-rest/core-client";
      
      export function _readSend(
        context: Client,
        prop1: Date,
        prop2: Date,
        prop3: Date,
        prop4: Date,
        options: ReadOptions = { requestOptions: {} }
      ): StreamableMethod<Read200Response> {
        return context
          .path("/")
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              prop1: prop1.toDateString(),
              prop2: prop2.toTimeString(),
              prop3: prop3.toISOString(),
              prop4: prop4.toUTCString(),
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
          prop4: new Date(result.body["prop4"]),
        };
      }
      
      export async function read(
        context: Client,
        prop1: Date,
        prop2: Date,
        prop3: Date,
        prop4: Date,
        options: ReadOptions = { requestOptions: {} }
      ): Promise<Foo> {
        const result = await _readSend(context, prop1, prop2, prop3, prop4, options);
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
    op read(): { @body body: Pet };
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
});
