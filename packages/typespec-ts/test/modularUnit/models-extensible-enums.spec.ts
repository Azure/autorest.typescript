import { describe, expect, it } from "vitest";
import { Project } from "ts-morph";
import { useContext } from "../../src/contextManager.js";
import { useBinder } from "../../src/framework/hooks/binder.js";
import { adaptToCodeModel } from "../../src/tcgcadapter/adapter.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { emitModelFiles } from "../../src/codegen/models.js";
import { renameClientName } from "../../src/index.js";
import { createDpgContextTestHelper, rlcEmitterFor } from "../util/testUtil.js";

async function emitModels(body: string): Promise<string> {
  const typeSpec = `
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
  emitModelFiles(project, codeModel, sdkContext);
  useBinder().resolveAllReferences(codeModel.settings.sourceRoot);

  return project
    .getSourceFiles(`${codeModel.settings.sourceRoot}/models/**/*.ts`)
    .map((file) => file.getFullText())
    .join("\n");
}

describe("models extensible enums", () => {
  it("emits KnownXxx declarations from enum IR", async () => {
    const modelsText = await emitModels(`
      union PetKind {
        dog: "dog",
        cat: "cat",
        string,
      }

      model PetEnvelope {
        kind: PetKind;
      }

      @route("/pets")
      @get
      op getPet(): PetEnvelope;
    `);

    expect(modelsText).toContain("export enum KnownPetKind");
    expect(modelsText).toContain("export type PetKind = string;");
  });
});
