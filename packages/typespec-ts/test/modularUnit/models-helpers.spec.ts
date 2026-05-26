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

async function emitModels(body: string): Promise<string[]> {
  const host = await rlcEmitterFor(buildAzureTypeSpec(body), {
    withRawContent: true
  });
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

  return project
    .getSourceFiles(`${sourceRoot}/models/**/*.ts`)
    .map((file) => file.getFullText());
}

function expectResolvedHelpers(
  modelTexts: string[],
  expectedDeclaration: RegExp
): void {
  expect(modelTexts.length).toBeGreaterThan(0);

  for (const text of modelTexts) {
    expect(text).not.toMatch(PLACEHOLDER_PATTERN);
  }

  expect(modelTexts.join("\n")).toMatch(expectedDeclaration);
}

describe("models-helpers (Strategy B regression lock)", () => {
  it("emits array-of-model helpers from IR without placeholders", async () => {
    const modelTexts = await emitModels(`
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

    expectResolvedHelpers(
      modelTexts,
      /export function itemArrayDeserializer\(/
    );
  });

  it("emits dict-of-model helpers from IR without placeholders", async () => {
    const modelTexts = await emitModels(`
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

    expectResolvedHelpers(
      modelTexts,
      /export function widgetRecordDeserializer\(/
    );
  });

  it("emits named nullable aliases from IR without placeholders", async () => {
    const modelTexts = await emitModels(`
      union Prompt {
        string,
        string[],
        null,
      }

      @route("/prompts")
      @get
      op getPrompt(): Prompt;
    `);

    expectResolvedHelpers(
      modelTexts,
      /export type Prompt = \(string \| \(string\)\[\]\) \| null;/
    );
  });

  it("emits paged array-of-model helpers from IR without placeholders", async () => {
    const modelTexts = await emitModels(`
      model Entry {
        id: string;
      }

      model EntryPage {
        @pageItems items: Entry[];

        @nextLink
        nextLink?: string;
      }

      @route("/entries")
      @get
      @list
      op listEntries(): EntryPage;
    `);

    expectResolvedHelpers(
      modelTexts,
      /export function entryArrayDeserializer\(/
    );
  });
});
