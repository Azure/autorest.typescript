import { assertEqualContent } from "../util/testUtil.js";
import { emitModularModelsFromTypeSpec } from "../util/emitUtil.js";
import { assert } from "chai";

describe("nullable optional properties", () => {
  it("should not generate null for optional nullable properties in Azure services by default", async () => {
    const tspContent = `
    model TestModel {
      // Optional nullable property - should not have | null in Azure services
      optionalNullableBoolean?: boolean | null;
      // Required nullable property - should have | null
      requiredNullableBoolean: boolean | null;
      // Optional non-nullable property - should not have | null
      optionalBoolean?: boolean;
      // Required non-nullable property - should not have | null
      requiredBoolean: boolean;
    }
    op test(): { @body body: TestModel };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      flavor: "azure"
    });
    assert.ok(modelFile);
    const interfaceText = modelFile.getInterfaceOrThrow("TestModel").getText();
    await assertEqualContent(
      interfaceText,
      `
      export interface TestModel {
        optionalNullableBoolean?: boolean;
        requiredNullableBoolean: boolean | null;
        optionalBoolean?: boolean;
        requiredBoolean: boolean;
      }
      `
    );
  });

  it("should generate null for optional nullable properties when ignore-nullable-on-optional is false", async () => {
    const tspContent = `
    model TestModel {
      // Optional nullable property - should have | null when option is false
      optionalNullableBoolean?: boolean | null;
      // Required nullable property - should have | null
      requiredNullableBoolean: boolean | null;
    }
    op test(): { @body body: TestModel };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      flavor: "azure",
      ignoreNullableOnOptional: false
    });
    assert.ok(modelFile);
    const interfaceText = modelFile.getInterfaceOrThrow("TestModel").getText();
    await assertEqualContent(
      interfaceText,
      `
      export interface TestModel {
        optionalNullableBoolean?: boolean | null;
        requiredNullableBoolean: boolean | null;
      }
      `
    );
  });

  it("should generate null for optional nullable properties in non-Azure services by default", async () => {
    const tspContent = `
    model TestModel {
      // Optional nullable property - should have | null for non-Azure services
      optionalNullableBoolean?: boolean | null;
      // Required nullable property - should have | null
      requiredNullableBoolean: boolean | null;
    }
    op test(): { @body body: TestModel };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      flavor: undefined // Explicitly set to non-Azure
    });
    assert.ok(modelFile);
    const interfaceText = modelFile.getInterfaceOrThrow("TestModel").getText();
    await assertEqualContent(
      interfaceText,
      `
      export interface TestModel {
        optionalNullableBoolean?: boolean | null;
        requiredNullableBoolean: boolean | null;
      }
      `
    );
  });

  it("should handle complex types with nullable optional properties", async () => {
    const tspContent = `
    model ComplexModel {
      // Optional nullable string
      optionalNullableString?: string | null;
      // Optional nullable array
      optionalNullableArray?: string[] | null;
      // Optional nullable object
      optionalNullableObject?: Record<string> | null;
    }
    op test(): { @body body: ComplexModel };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      flavor: "azure"
    });
    assert.ok(modelFile);
    const interfaceText = modelFile.getInterfaceOrThrow("ComplexModel").getText();
    await assertEqualContent(
      interfaceText,
      `
      export interface ComplexModel {
        optionalNullableString?: string;
        optionalNullableArray?: string[];
        optionalNullableObject?: Record<string, string>;
      }
      `
    );
  });

  it("should explicitly use ignore-nullable-on-optional option when set to true", async () => {
    const tspContent = `
    model TestModel {
      // Optional nullable property - should not have | null when option is true
      optionalNullableBoolean?: boolean | null;
      // Required nullable property - should have | null
      requiredNullableBoolean: boolean | null;
    }
    op test(): { @body body: TestModel };
    `;
    const modelFile = await emitModularModelsFromTypeSpec(tspContent, {
      ignoreNullableOnOptional: true
    });
    assert.ok(modelFile);
    const interfaceText = modelFile.getInterfaceOrThrow("TestModel").getText();
    await assertEqualContent(
      interfaceText,
      `
      export interface TestModel {
        optionalNullableBoolean?: boolean;
        requiredNullableBoolean: boolean | null;
      }
      `
    );
  });
});
