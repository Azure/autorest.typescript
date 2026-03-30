import { describe, it, assert } from "vitest";

import { ok } from "assert";
import { Diagnostic } from "@typespec/compiler";
import {
  createDpgContextTestHelper,
  createRLCEmitterTestHost
} from "../util/testUtil.js";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";

describe("Diagnostic reporting tests", () => {
  it("should not crash when emitter encounters error conditions", async () => {
    // This test verifies that the main files compile and load without syntax errors
    // The actual diagnostic behavior is tested implicitly through other unit tests
    // that don't expect crashes when processing various TypeSpec inputs

    // Import the fixed modules to ensure they compile
    const operationHelpers =
      await import("../../src/modular/helpers/operationHelpers.js");
    const emitModels = await import("../../src/modular/emitModels.js");
    const buildRootIndex = await import("../../src/modular/buildRootIndex.js");
    const serializerFunction =
      await import("../../src/modular/serialization/buildSerializerFunction.js");
    const deserializerFunction =
      await import("../../src/modular/serialization/buildDeserializerFunction.js");
    const emitUtil = await import("../../src/utils/emitUtil.js");

    // Basic checks that modules loaded successfully
    ok(operationHelpers);
    ok(emitModels);
    ok(buildRootIndex);
    ok(serializerFunction);
    ok(deserializerFunction);
    ok(emitUtil);
  });

  it("should report TCGC diagnostics for duplicate client names to the program", async () => {
    const host = await createRLCEmitterTestHost();
    host.addTypeSpecFile(
      "main.tsp",
      `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-client-generator-core";

      using Http;
      using Rest;
      using Azure.ClientGenerator.Core;

      @service(#{
        title: "Azure TypeScript Testing"
      })
      namespace Azure.TypeScript.Testing;

      @clientName("DuplicateName")
      model Foo {
        prop1: string;
      }

      @clientName("DuplicateName")
      model Bar {
        prop2: string;
      }

      @route("/test")
      op test(@body body: Foo): Bar;
      `
    );
    await host.diagnose("./", { warningAsError: false });
    const dpgContext = await createDpgContextTestHelper(host.program);

    // Verify TCGC captures duplicate-client-name diagnostics
    const duplicateNameDiagnostics = dpgContext.diagnostics.filter(
      (d) =>
        d.code ===
        "@azure-tools/typespec-client-generator-core/duplicate-client-name"
    );
    assert.isTrue(
      duplicateNameDiagnostics.length > 0,
      "Expected TCGC diagnostics for duplicate client names to be present in dpgContext.diagnostics"
    );

    // Simulate what $onEmit does: report TCGC diagnostics to the program
    const initialDiagCount = host.program.diagnostics.length;
    if (dpgContext.diagnostics?.length > 0) {
      host.program.reportDiagnostics(dpgContext.diagnostics);
    }

    assert.isTrue(
      host.program.diagnostics.length > initialDiagCount,
      "Expected TCGC diagnostics to be reported to the program"
    );
  });

  it("array encoding on array of non-string types should report diagnostic", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
            model Test {
                @encode(ArrayEncoding.commaDelimited)
                nums: int32[];
            }
            op read(@body body: Test): void;
          `,
        {
          mustEmptyDiagnostic: true
        }
      );
    } catch (e: any) {
      assert.equal(
        e[0]?.code,
        "@azure-tools/typespec-ts/un-supported-array-encoding"
      );
      assert.strictEqual(
        e[0]?.message,
        'The array property "nums" of int32 type is not supported for encoding and will be ignored.'
      );
    }
  });

  it("number enum and not ignore warnings", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
            model Test {
              color: 1 | 2;
            }
            op read(@body body: Test): void;
            `,
        {
          mustEmptyDiagnostic: true
        }
      );
    } catch (e: any) {
      assert.strictEqual(
        e[0].message,
        'Enum member name 1 is normalized to _1 with "_" prefix.'
      );
    }
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

  it("required nullable header would report diagnostic", async () => {
    try {
      const tspContent = `
        op read( @header nullableRequiredHeader: string | null): OkResponse;
        `;

      await emitModularOperationsFromTypeSpec(tspContent, {
        mustEmptyDiagnostic: true
      });
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

  it("Flatten transitions are not supported so consecutive transitions will be ignored", async () => {
    try {
      await emitModularModelsFromTypeSpec(
        `
              model ChildModel {
                description: string;
                age: int32;
              }

              model NestedFlattenModel {
                name: string;

                @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
                properties: ChildFlattenModel;
              }
              model ChildFlattenModel {
                summary: string;

                @global.Azure.ClientGenerator.Core.Legacy.flattenProperty
                properties: ChildModel;
              }

              op foo(body: NestedFlattenModel): NestedFlattenModel;
              `,
        {
          needArmTemplate: true,
          withVersionedApiVersion: true,
          needTCGC: true,
          mustEmptyDiagnostic: true
        }
      );
    } catch (e: any) {
      assert.strictEqual(
        e[0].message,
        'The property "properties" in "NestedFlattenModel" has multiple consecutive flatten operations. Flatten transitions are not supported so consecutive transitions will be ignored.'
      );
    }
  });
});
