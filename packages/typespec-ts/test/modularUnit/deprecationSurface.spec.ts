import { describe, expect, it } from "vitest";
import { Project } from "ts-morph";

import { renameClientName } from "../../src/index.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { adaptToCodeModel } from "../../src/tcgcadapter/adapter.js";
import { provideBinder } from "../../src/framework/hooks/binder.js";
import { emitApiOptions } from "../../src/codegen/apiOptions.js";
import { emitClassicalClient } from "../../src/codegen/classicalClient.js";
import { emitClientContext } from "../../src/codegen/clients.js";
import { emitOperations } from "../../src/codegen/operations.js";
import { createDpgContextTestHelper, rlcEmitterFor } from "../util/testUtil.js";
import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";

function buildCodegenTypeSpec(
  body: string,
  namespaceDecorators: string = ""
): string {
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

    ${namespaceDecorators}
    @service(#{
      title: "Azure TypeScript Testing"
    })
    namespace Azure.TypeScript.Testing {
      ${body}
    }
  `;
}

async function emitCodegenOutputs(
  body: string,
  namespaceDecorators: string = ""
) {
  const host = await rlcEmitterFor(
    buildCodegenTypeSpec(body, namespaceDecorators),
    { withRawContent: true }
  );
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
  const client = codeModel.clients[0]!;
  const project = new Project({ useInMemoryFileSystem: true });
  provideBinder(project);

  return {
    operations: emitOperations(
      project,
      client,
      codeModel.settings
    )[0]!.getFullText(),
    options: emitApiOptions(
      project,
      client,
      codeModel.settings
    )[0]!.getFullText(),
    clientContext: emitClientContext(
      project,
      client,
      codeModel.settings
    )!.getFullText(),
    classical: emitClassicalClient(
      project,
      client,
      codeModel.settings
    ).getFullText()
  };
}

describe("@deprecated surfacing", () => {
  it("emits deprecation tags in modular codegen outputs", async () => {
    const outputs = await emitCodegenOutputs(
      `
        #deprecated "Use WidgetV2 instead."
        model Widget {
          name: string;
        }

        @route("/widgets")
        #deprecated "Use listWidgetsV2 instead."
        op listWidgets(
          #deprecated "Use search instead."
          @query filter: string,
          #deprecated "Use options.includeDetails instead."
          @query includeDetails?: string,
        ): Widget;
      `,
      `
        @server("{endpoint}", "Widgets", {
          #deprecated "Use the default endpoint instead."
          endpoint: url
        })
      `
    );

    expect(outputs.operations).toContain(
      "@deprecated Use listWidgetsV2 instead."
    );
    expect(outputs.operations).toContain(
      "@param filter Deprecated: Use search instead."
    );
    expect(outputs.options).toContain(
      "@deprecated Use options.includeDetails instead."
    );
    expect(outputs.classical).toContain(
      "@deprecated Use listWidgetsV2 instead."
    );
  });

  it("emits deprecation tags in generated model files", async () => {
    const modelFile = await emitModularModelsFromTypeSpec(`
      #deprecated "Use WidgetV2 instead."
      model Widget {
        #deprecated "Use displayName instead."
        name: string;
        mode: Mode;
      }

      #deprecated "Use KnownModeV2 instead."
      enum Mode {
        #deprecated "Use current instead."
        legacy: "legacy",
        current: "current"
      }

      #suppress "deprecated" "Test fixture uses deprecated model types."
      op read(): Widget;
    `);

    const text = modelFile!.getFullText();
    expect(text).toContain("@deprecated Use WidgetV2 instead.");
    expect(text).toContain("@deprecated Use displayName instead.");
    expect(text).toContain("@deprecated Use KnownModeV2 instead.");
  });
});
