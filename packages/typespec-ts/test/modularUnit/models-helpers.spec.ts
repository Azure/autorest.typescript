/**
 * Regression test for B8: array/dict serializer helper refkeys must be registered
 * by src/codegen/models.ts so the binder can resolve them.
 *
 * Before the fix (commit e8b5a8022), emitModelFiles only walked codeModel.models/enums/unions
 * and skipped array/dict helper types, leaving __PLACEHOLDER_*__ tokens in the emitted file.
 */
import { describe, expect, it } from "vitest";
import { Project } from "ts-morph";
import { useContext } from "../../src/contextManager.js";
import { useBinder } from "../../src/framework/hooks/binder.js";
import { adaptToCodeModel } from "../../src/tcgcadapter/adapter.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { emitModelFiles } from "../../src/codegen/models.js";
import { renameClientName } from "../../src/index.js";
import { createDpgContextTestHelper, rlcEmitterFor } from "../util/testUtil.js";

const PLACEHOLDER_PATTERN = /__PLACEHOLDER_/;

function buildAzureTypeSpec(body: string): string {
  return `
    import "@typespec/http";
    import "@typespec/rest";
    import "@typespec/versioning";
    import "@azure-tools/typespec-client-generator-core";
    import "@azure-tools/typespec-azure-core";

    using Http;
    using Rest;
    using Versioning;
    using Azure.ClientGenerator.Core;
    using Azure.Core;
    using Azure.Core.Traits;

    @service(#{ title: "Azure TypeScript Testing" })
    namespace Azure.TypeScript.Testing {
      ${body}
    }
  `;
}

describe("models-helpers (B8 regression lock)", () => {
  /**
   * Regression: array-of-complex-model serializer helpers must resolve cleanly.
   * If emitModelFiles doesn't emit the array helper declarations, the binder
   * leaves __PLACEHOLDER_*serializer__ / __PLACEHOLDER_*deserializer__ tokens.
   */
  it("registers array serializer/deserializer refkeys — no placeholders after resolve", async () => {
    const typeSpec = buildAzureTypeSpec(`
      model Item {
        id: string;
        value: int32;
      }

      model ItemCollection {
        items: Item[];
      }

      @route("/items")
      @get
      op listItems(): ItemCollection;
    `);

    const host = await rlcEmitterFor(typeSpec, { withRawContent: true });
    const sdkContext = await createDpgContextTestHelper(host.program, false, {
      isModularLibrary: true
    });
    sdkContext.rlcOptions!.isModularLibrary = true;

    const emitterOptions = transformModularEmitterOptions(sdkContext, "", {
      casing: "camel"
    });
    for (const client of sdkContext.sdkPackage.clients) {
      await renameClientName(client, emitterOptions);
    }

    const codeModel = adaptToCodeModel({ sdkContext, emitterOptions });
    const project = useContext("outputProject") as Project;
    const binder = useBinder();
    const sourceRoot = codeModel.settings.sourceRoot;

    emitModelFiles(project, codeModel, sdkContext);
    binder.resolveAllReferences(sourceRoot);

    const modelsFiles = project.getSourceFiles(`${sourceRoot}/models/**/*.ts`);
    expect(modelsFiles.length).toBeGreaterThan(0);

    for (const file of modelsFiles) {
      const text = file.getFullText();
      expect(
        PLACEHOLDER_PATTERN.test(text),
        `Found unresolved __PLACEHOLDER__ in ${file.getFilePath()}:\n${text}`
      ).toBe(false);
    }
  });

  /**
   * Regression: dict-of-complex-model serializer helpers must resolve cleanly.
   */
  it("registers dict serializer/deserializer refkeys — no placeholders after resolve", async () => {
    const typeSpec = buildAzureTypeSpec(`
      model Widget {
        name: string;
        weight: float32;
      }

      model WidgetMap {
        byName: Record<Widget>;
      }

      @route("/widgets")
      @get
      op getWidgets(): WidgetMap;
    `);

    const host = await rlcEmitterFor(typeSpec, { withRawContent: true });
    const sdkContext = await createDpgContextTestHelper(host.program, false, {
      isModularLibrary: true
    });
    sdkContext.rlcOptions!.isModularLibrary = true;

    const emitterOptions = transformModularEmitterOptions(sdkContext, "", {
      casing: "camel"
    });
    for (const client of sdkContext.sdkPackage.clients) {
      await renameClientName(client, emitterOptions);
    }

    const codeModel = adaptToCodeModel({ sdkContext, emitterOptions });
    const project = useContext("outputProject") as Project;
    const binder = useBinder();
    const sourceRoot = codeModel.settings.sourceRoot;

    emitModelFiles(project, codeModel, sdkContext);
    binder.resolveAllReferences(sourceRoot);

    const modelsFiles = project.getSourceFiles(`${sourceRoot}/models/**/*.ts`);
    expect(modelsFiles.length).toBeGreaterThan(0);

    for (const file of modelsFiles) {
      const text = file.getFullText();
      expect(
        PLACEHOLDER_PATTERN.test(text),
        `Found unresolved __PLACEHOLDER__ in ${file.getFilePath()}:\n${text}`
      ).toBe(false);
    }
  });
});
