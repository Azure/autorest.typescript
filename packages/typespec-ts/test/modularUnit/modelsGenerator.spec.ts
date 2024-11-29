import { assertEqualContent } from "../util/testUtil.js";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";

import { Diagnostic } from "@typespec/compiler";
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

describe("spread record", () => {
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
});
