import { assert } from "chai";
import {
  emitParameterFromTypeSpec,
  emitResponsesFromTypeSpec
} from "../util/emitUtil.js";

describe("typespec-azure-core: operation templates", () => {
  it("ResourceCreateWithServiceProvidedName", async () => {
    const { parameters, responses } = await compileResourceOperation(
      `@test op create is Azure.Core.StandardResourceOperations.ResourceCreateWithServiceProvidedName<TestModel, Customizations>;`
    );
    assert.ok(parameters);
    assert.ok(responses);
  });
});

async function compileResourceOperation(code: string) {
  const content = `
    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model TestModel {
      @key
      @visibility(Lifecycle.Read)
      @segment("test")
      name: string;
      value: int32;
    }

    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model CustomParameters {
      #suppress "@azure-tools/typespec-azure-core/casing-style" "for test"
      @header
      "x-ms-foobar": string;

      @query
      nameHint: string;

      customBodyParam: string;
    }

    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model CustomResponseProperties {
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      #suppress "@azure-tools/typespec-azure-core/casing-style" "for test"
      @header
      "x-ms-response-id": int32;
      #suppress "@azure-tools/typespec-azure-core/casing-style" "for test"
      @doc("A timestamp when this job or item was created (in unix epochs).")
      @visibility(Lifecycle.Read)
      created_at?: int32;
    }

    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model Customizations {
      parameters: CustomParameters;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model CustomizationsNoBody {
      parameters: OmitProperties<CustomParameters, "customBodyParam">;
      response: CustomResponseProperties;
    }

    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    ${code}
    `;
  const parameters = await emitParameterFromTypeSpec(content, { needAzureCore: true });
  const responses = await emitResponsesFromTypeSpec(content, { needAzureCore: true });

  return { parameters, responses };
}
