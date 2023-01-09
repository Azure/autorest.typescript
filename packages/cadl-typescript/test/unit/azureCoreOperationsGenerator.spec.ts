import {
  emitParameterFromCadl,
  emitResponsesFromCadl
} from "./util/emitUtil.js";

describe("cadl-azure-core: operation templates", () => {
  it.skip("ResourceCreateWithServiceProvidedName", async () => {
    const { parameters, responses } = await compileResourceOperation(
      `@test op create is Azure.Core.ResourceCreateWithServiceProvidedName<TestModel, Customizations>;`
    );
    console.log(parameters);
    console.log(responses);
  });

  it.only("ResourceCreateWithServiceProvidedName", async () => {
    const content = `
    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model TestModel {
      @key
      @segment("test")
      name: string;
      value: int32;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomParameters {
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @header
      "x-ms-foobar": string;

      @query
      nameHint: string;

      customBodyParam: string;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomResponseProperties {
      #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @header
      "x-ms-response-id": int32;
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @doc("A timestamp when this job or item was created (in unix epochs).")
      @visibility("read")
      created_at?: int32;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model Customizations {
      parameters: CustomParameters;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomizationsNoBody {
      parameters: OmitProperties<CustomParameters, "customBodyParam">;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"

    @doc("""
Creates a new file entity by uploading data from a local machine. Uploaded
files can, for example, be used for training or evaluating fine-tuned models.
""")
  UploadFile is ResourceCreateWithServiceProvidedName<
    File,
    {
      response: File
    }
  >;
    `;
    const parameters = await emitParameterFromCadl(content, true);
    const responses = await emitResponsesFromCadl(content, true);
    console.log(parameters);
    console.log(responses);
  });
});

async function compileResourceOperation(code: string) {
  const content = `
    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model TestModel {
      @key
      @segment("test")
      name: string;
      value: int32;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomParameters {
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @header
      "x-ms-foobar": string;

      @query
      nameHint: string;

      customBodyParam: string;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomResponseProperties {
      #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @header
      "x-ms-response-id": int32;
      #suppress "@azure-tools/cadl-azure-core/casing-style" "for test"
      @doc("A timestamp when this job or item was created (in unix epochs).")
      @visibility("read")
      created_at?: int32;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model Customizations {
      parameters: CustomParameters;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    model CustomizationsNoBody {
      parameters: OmitProperties<CustomParameters, "customBodyParam">;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/cadl-azure-core/documentation-required" "for test"
    ${code}
    `;
  const parameters = await emitParameterFromCadl(content, true);
  const responses = await emitResponsesFromCadl(content, true);

  return { parameters, responses };
}
