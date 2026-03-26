import { assertEqualContent } from "../util/testUtil.js";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assert } from "chai";

describe("inheritance & polymorphism", () => {
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
});

describe("unknown-as-any option", () => {
  it("should emit 'any' for unknown type by default", async () => {
    const tspContent = `
    model TestModel {
      prop: unknown;
    }
    op read(@body body: TestModel): TestModel;
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /**
       * This file contains only generated model types and their (de)serializers.
       * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
       */
      /* eslint-disable @typescript-eslint/naming-convention */
      /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
      /** model interface TestModel */
      export interface TestModel {
        prop: any;
      }
      
      export function testModelSerializer(item: TestModel): any {
        return { prop: item["prop"] };
      }
      
      export function testModelDeserializer(item: any): TestModel {
        return {
          prop: item["prop"],
        };
      }
      `
    );
  });

  it("should emit 'Record<string, unknown>' for unknown type when unknown-as-any is false", async () => {
    const tspContent = `
    model TestModel {
      prop: unknown;
    }
    op read(@body body: TestModel): TestModel;
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      "unknown-as-any": false
    });
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /**
       * This file contains only generated model types and their (de)serializers.
       * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
       */
      /* eslint-disable @typescript-eslint/naming-convention */
      /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
      /** model interface TestModel */
      export interface TestModel {
        prop: Record<string, unknown>;
      }
      
      export function testModelSerializer(item: TestModel): any {
        return { prop: item["prop"] };
      }
      
      export function testModelDeserializer(item: any): TestModel {
        return {
          prop: item["prop"],
        };
      }
      `
    );
  });

  it("should emit 'any' for unknown type when unknown-as-any is explicitly true", async () => {
    const tspContent = `
    model TestModel {
      prop: unknown;
    }
    op read(@body body: TestModel): TestModel;
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      "unknown-as-any": true
    });
    assert.ok(modelFile);
    await assertEqualContent(
      modelFile?.getFullText()!,
      `
      /**
       * This file contains only generated model types and their (de)serializers.
       * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
       */
      /* eslint-disable @typescript-eslint/naming-convention */
      /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
      /** model interface TestModel */
      export interface TestModel {
        prop: any;
      }
      
      export function testModelSerializer(item: TestModel): any {
        return { prop: item["prop"] };
      }
      
      export function testModelDeserializer(item: any): TestModel {
        return {
          prop: item["prop"],
        };
      }
      `
    );
  });
});
