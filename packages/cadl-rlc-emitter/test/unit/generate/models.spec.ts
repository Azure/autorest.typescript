import { buildSchemaTypes } from "@azure-tools/rlc-codegen";
import { TestHost } from "@cadl-lang/compiler/testing";
import { assert } from "chai";
import { transformSchemas } from "../../../src/transform/transformSchemas.js";
import { createOpenAPITestHost } from "../testUtil.js";

type VerifyPropertyConfig = {
  additionalCadlDefinition?: string;
  outputType?: string;
  additionalInputContent?: string;
  additionalOutputContent?: string;
};

describe("Input/output model type", () => {
  let testHost: TestHost;

  beforeEach(async () => {
    testHost = await createOpenAPITestHost();
  });

  async function generateInputOutputModelsFromCadl(cadlContent: string) {
    testHost.addCadlFile(
      "main.cadl",
      `
    import "@cadl-lang/rest";
    using Cadl.Rest; 
    using Cadl.Http;
    ${cadlContent}
    `
    );
    await testHost.compile("./");
    const rlcSchemas = transformSchemas(testHost.program);
    return buildSchemaTypes({
      schemas: rlcSchemas,
      srcPath: "",
      paths: {},
      libraryName: "test"
    });
  }

  function assertEqualContent(actual: string, expected: string) {
    assert.strictEqual(actual.replace(/\s/g, ""), expected.replace(/\s/g, ""));
  }

  it("shouldn't generate models if there is no operations", async () => {
    const schemaOutput = await generateInputOutputModelsFromCadl(`
    model Test {
      prop: string;
    }
    `);
    assert.ok(schemaOutput);
    const { inputModelFile, outputModelFile } = schemaOutput!;
    // both are undefined
    assert.ok(!inputModelFile);
    assert.ok(!outputModelFile);
  });

  async function verifyPropertyType(
    cadlType: string,
    inputType: string,
    options?: VerifyPropertyConfig
  ) {
    const defaultOption: VerifyPropertyConfig = {
      additionalCadlDefinition: "",
      outputType: inputType,
      additionalInputContent: "",
      additionalOutputContent: ""
    };
    const {
      additionalCadlDefinition,
      outputType,
      additionalInputContent,
      additionalOutputContent
    } = {
      ...defaultOption,
      ...options
    };
    const schemaOutput = await generateInputOutputModelsFromCadl(`
    ${additionalCadlDefinition}
    model InputOutputModel {
      prop: ${cadlType};
    }
    @route("/models")
    @get
    op getModel(@body input: InputOutputModel): InputOutputModel;`);
    assert.ok(schemaOutput);
    const { inputModelFile, outputModelFile } = schemaOutput!;
    assert.strictEqual(inputModelFile?.path, "models.ts");
    assertEqualContent(
      inputModelFile?.content!,
      `
    export interface InputOutputModel {
        prop: ${inputType};
    }
    ${additionalInputContent}`
    );

    assert.strictEqual(outputModelFile?.path, "outputModels.ts");
    assertEqualContent(
      outputModelFile?.content!,
      `
    export interface InputOutputModelOutput {
      prop: ${outputType};
    }
    ${additionalOutputContent}`
    );
  }

  describe("number generation", () => {
    it("should handle int32 -> number", async () => {
      await verifyPropertyType("int32", "number");
    });
    it("should handle int64 -> number", async () => {
      await verifyPropertyType("int64", "number");
    });
    it("should handle safeint -> number", async () => {
      await verifyPropertyType("safeint", "number");
    });
    it("should handle float32 -> number", async () => {
      await verifyPropertyType("float32", "number");
    });
    it("should handle float64 -> number", async () => {
      await verifyPropertyType("float64", "number");
    });
  });
  describe("string generation", () => {
    // TODO: how to handle extensible enum is not fanilized this could be changed in future
    // issue tracked https://github.com/Azure/autorest.typescript/issues/1524
    xit("should handle extensible_enum -> string", async () => {
      // When extensible_enum is comsumed as body property it should be string only
      const cadlTypeDefinition = `
      @knownValues(TranslationLanguageValues)
      model TranslationLanguage is string;
      enum TranslationLanguageValues {
        English,
        Chinese,
      }`;
      const cadlType = "TranslationLanguage";
      // TODO: ensure this trick is working
      const typeScriptType = `"English" | "Chinese" | string & {}`;
      await verifyPropertyType(cadlType, typeScriptType, {
        additionalCadlDefinition: cadlTypeDefinition
      });
    });

    // TODO: Is enum convered to string literals only? Do we need to generate enum instaed?
    it("should handle enum -> string_literals", async () => {
      const cadlTypeDefinition = `
      enum TranslationLanguageValues {
        English,
        Chinese,
      }`;
      const cadlType = "TranslationLanguageValues";
      const typeScriptType = `"English" | "Chinese"`;
      await verifyPropertyType(cadlType, typeScriptType, {
        additionalCadlDefinition: cadlTypeDefinition
      });
    });

    it("should handle type_literals:string -> string_literals", async () => {
      const cadlType = `"English" | "Chinese"`;
      const typeScriptType = `"English" | "Chinese"`;
      await verifyPropertyType(cadlType, typeScriptType);
    });

    // Error thrown issue tracked here https://github.com/Azure/autorest.typescript/issues/1524
    xit("should handle type_literals:boolean -> boolean_literals", async () => {
      const cadlType = `true`;
      const typeScriptType = `true`;
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle string -> string", async () => {
      const cadlType = "string";
      const typeScriptType = "string";
      await verifyPropertyType(cadlType, typeScriptType);
    });
  });

  describe("array basic generation", () => {
    it("should handle string[] -> string[]", async () => {
      const cadlType = "string[]";
      const typeScriptType = "string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle int32[] -> number[]", async () => {
      const cadlType = "int32[]";
      const typeScriptType = "number[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle float32[] -> number[]", async () => {
      const cadlType = "float32[]";
      const typeScriptType = "number[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle boolean[] -> boolean[]", async () => {
      const cadlType = "boolean[]";
      const typeScriptType = "boolean[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle bytes[] -> string[]", async () => {
      const cadlType = "bytes[]";
      const typeScriptType = "string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });
  });
  describe("array models generation", () => {});
  describe("object generation", () => {
    it("should handle basic model -> type/interface", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }`;
      const cadlType = "SimpleModel";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop1:string;
          prop2:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop1:string;
          prop2:number;
        }`
      });
    });

    it("should handle nested model -> type/interface", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      model NestedModel {
        ...SimpleModel;
      }
      `;
      const cadlType = "NestedModel";
      const inputModelName = "NestedModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop1:string;
          prop2:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop1:string;
          prop2:number;
        }`
      });
    });

    // Error thrown issue tracked here https://github.com/Azure/autorest.typescript/issues/1524
    xit("should handle anonymous model -> effictive type/interface", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const cadlType = "{...SimpleModel}";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop1:string;
          prop2:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop1:string;
          prop2:number;
        }`
      });
    });

    // The output is unexpected, the kind should be `string` but now `"Pet" | "cat" | "dog"`
    // Issue tracked here https://github.com/Azure/autorest.typescript/issues/1524
    xit("should handle inheritance model -> multiple types/interfaces", async () => {
      const schemaOutput = await generateInputOutputModelsFromCadl(`
      @discriminator("kind")
      model Pet {
        name: string;
        weight?: float32;
      }
      model Cat extends Pet {
        kind: "cat";
        meow: int32;
      }
      model Dog extends Pet {
        kind: "dog";
        bark: string;
      }
      op read(): { @body body: Pet };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(!inputModelFile?.content);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      assertEqualContent(
        outputModelFile?.content!,
        `
        export interface PetOutput {
          name: string;
          weight?: number;
          kind: string;
        }
        export interface CatOutput extends PetOutput {
          kind: "cat";
          meow: number;
        }
        export interface DogOutput extends PetOutput {
          kind: "dog";
          bark: string;
        }`
      );
    });
  });
  describe("bytes generation as property", () => {
    it("should handle bytes -> string", async () => {
      await verifyPropertyType("bytes", "string");
    });
  });
  describe("duration generation", () => {
    it("should handle duration -> string", async () => {
      await verifyPropertyType("duration", "string");
    });
  });
  // Unexpected output
  // Issue tracked here https://github.com/Azure/autorest.typescript/issues/1524
  describe("datetime generation", () => {
    xit("should handle plainDate -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("plainDate", inputType, {
        outputType
      });
    });
    xit("should handle plainTime -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("plainTime", inputType, {
        outputType
      });
    });
    xit("should handle zonedDateTime -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("zonedDateTime", inputType, {
        outputType
      });
    });
  });
  // Error thrown
  // Issue tracked here https://github.com/Azure/autorest.typescript/issues/1524
  describe("record generation", () => {
    xit("should handle Record<int32> -> string", async () => {
      await verifyPropertyType("Record<int32>", "string");
    });
    xit("should handle Record<boolean> -> string", async () => {
      await verifyPropertyType("Record<boolean>", "string");
    });
    xit("should handle Record<string> -> string", async () => {
      await verifyPropertyType("Record<string>", "string");
    });
  });
  describe("property definition correctness", () => {
    // TODO: the behavior isn't finalized
    // Issue track here https://github.com/Azure/autorest.typescript/issues/1524
    xit("should handle @visibility(read) -> readonly ", async () => {
      const cadlDefinition = `
      model SimpleModel {
        @visibility("read")
        prop: int32;
      }
      `;
      const cadlType = `SimpleModel`;
      const inputModelName = "SimpleModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop:number;
        }`
      });
    });

    it("should handle optional parameter -> with question mark ", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop?: int32;
      }
      `;
      const cadlType = `SimpleModel`;
      const inputModelName = cadlType;
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop?:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop?:number;
        }`
      });
    });

    // TODO: the behavior isn't finalized
    it("should handle optional parameter with defaul value -> general type ", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop?: int32 = 0;
      }
      `;
      const cadlType = `SimpleModel`;
      const inputModelName = cadlType;
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop?:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          prop?:number;
        }`
      });
    });
  });
});
