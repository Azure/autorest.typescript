import { assert } from "chai";
import {
  emitModelsFromTypeSpec,
  emitParameterFromTypeSpec,
  emitResponsesFromTypeSpec
} from "../util/emitUtil.js";
import { VerifyPropertyConfig, assertEqualContent } from "../util/testUtil.js";
import { Diagnostic } from "@typespec/compiler";

describe("Input/output model type", () => {
  it("shouldn't generate models if there is no operations", async () => {
    const schemaOutput = await emitModelsFromTypeSpec(`
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
    tspType: string,
    inputType: string,
    options?: VerifyPropertyConfig,
    needAzureCore: boolean = false,
    additionalImports: string = ""
  ) {
    const defaultOption: VerifyPropertyConfig = {
      additionalTypeSpecDefinition: "",
      outputType: inputType,
      additionalInputContent: "",
      additionalOutputContent: ""
    };
    const {
      additionalTypeSpecDefinition,
      outputType,
      additionalInputContent,
      additionalOutputContent
    } = {
      ...defaultOption,
      ...options
    };
    const schemaOutput = await emitModelsFromTypeSpec(
      `
    ${additionalTypeSpecDefinition}
    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model InputOutputModel {
      prop: ${tspType};
    }
  
    #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    @route("/models")
    @get
    op getModel(@body input: InputOutputModel): InputOutputModel;`,
      needAzureCore
    );
    assert.ok(schemaOutput);
    const { inputModelFile, outputModelFile } = schemaOutput!;
    // console.log(inputModelFile?.content);
    assert.strictEqual(inputModelFile?.path, "models.ts");
    await assertEqualContent(
      inputModelFile?.content!,
      `
    ${additionalImports}
  
    export interface InputOutputModel {
        prop: ${inputType};
    }
    ${additionalInputContent}`
    );

    assert.strictEqual(outputModelFile?.path, "outputModels.ts");
    await assertEqualContent(
      outputModelFile?.content!,
      `
    ${additionalImports}
  
    export interface InputOutputModelOutput {
      prop: ${outputType};
    }
    ${additionalOutputContent}`
    );
  }

  describe("null generation", async () => {
    it("should generate null only", async () => {
      const tspType = "null";
      const typeScriptType = "null";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should generate nullable union", async () => {
      const tspType = "string | null";
      const typeScriptType = "string | null";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should generate nullable array", async () => {
      const tspDefinition = `
      alias nullableArray = int32 | null;`;
      const tspType = "nullableArray[]";
      const typeScriptType = "(number | null)[]";
      await verifyPropertyType(tspType, typeScriptType, {
        additionalTypeSpecDefinition: tspDefinition
      });
    });

    it("should generate nullable boolean dictionary", async () => {
      const tspType = "Record<boolean | null>";
      const typeScriptType = "Record<string, boolean | null>";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should generate nullable model", async () => {
      const tspDefinition = `
      model SimpleModel {
        color: "red" | "blue";
      }
      `;
      const tspType = "SimpleModel | null";
      const typeScriptType = "SimpleModel | null";
      await verifyPropertyType(tspType, typeScriptType, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: "SimpleModelOutput | null",
        additionalInputContent: `
        export interface SimpleModel {
          color: "red" | "blue";
        }
          `,
        additionalOutputContent: `
        export interface SimpleModelOutput {
          color: "red" | "blue";
        }
          `
      });
    });

    it("should generate nullable literal dictionary", async () => {
      const tspType = 'Record<"test" | null>';
      const typeScriptType = 'Record<string, "test" | null>';
      await verifyPropertyType(tspType, typeScriptType);
    });
  });

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
    it("should handle extensible_enum as property -> string", async () => {
      // When extensible_enum is comsumed as body property it should be string only
      const schemaOutput = await emitModelsFromTypeSpec(`
      @doc("Extensible enum model description")
      enum TranslationLanguageValues {
        #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
        English,
        #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
        Chinese,
      }
      model InputOutputModel {
        @doc("Property description")
        prop: TranslationLanguageValues;
      }
      @route("/models")
      @get
      op getModel(@body input: InputOutputModel): InputOutputModel;
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface InputOutputModel {
        /**
         * Property description
         *
         * Possible values: "English", "Chinese"
         */
        prop: string;
      }`
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface InputOutputModelOutput {
        /**
         * Property description
         *
         * Possible values: "English", "Chinese"
         */
        prop: string;
      }`
      );
    });
    it("should handle extensible_enum as body -> string", async () => {
      // When extensible_enum is comsumed as body property it should be string only
      const schemaOutput = await emitParameterFromTypeSpec(`
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      enum TranslationLanguage {
        English,
        Chinese,
      }
      model InputOutputModel {
        prop: TranslationLanguage;
      }
      @route("/models")
      @get
      op getModel(@body input: TranslationLanguage): InputOutputModel;
      `);
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface GetModelBodyParam {
        /** Possible values: "English", "Chinese" */
        body: string;
      }
      
      export type GetModelParameters = GetModelBodyParam & RequestParameters;`
      );
    });

    describe("fixed enum", () => {
      it("should handle enum -> string_literals", async () => {
        const tspTypeDefinition = `
        #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
        @fixed
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          English,
          @doc("Chinese descriptions")
          Chinese,
        }`;
        const tspType = "TranslationLanguageValues";
        const typeScriptType = `"English" | "Chinese"`;
        await verifyPropertyType(
          tspType,
          typeScriptType,
          {
            additionalTypeSpecDefinition: tspTypeDefinition
          },
          true
        );
      });

      it("with enum value is xx.xx", async () => {
        const tspTypeDefinition = `
        #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
        @fixed
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          \`English.Class\`,
          @doc("Chinese descriptions")
          \`Chinese.Class\`,
        }`;
        const tspType = "TranslationLanguageValues";
        const typeScriptType = `"English.Class" | "Chinese.Class"`;
        await verifyPropertyType(
          tspType,
          typeScriptType,
          {
            additionalTypeSpecDefinition: tspTypeDefinition
          },
          true
        );
      });

      it("should handle enum member", async () => {
        const tspTypeDefinition = `
        #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
        @fixed
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          English,
          @doc("Chinese descriptions")
          Chinese,
        }`;
        const tspType = "TranslationLanguageValues.English";
        const typeScriptType = `"English"`;
        await verifyPropertyType(
          tspType,
          typeScriptType,
          {
            additionalTypeSpecDefinition: tspTypeDefinition
          },
          true
        );
      });
    });

    it("should handle type_literals:string -> string_literals", async () => {
      const tspType = `"English" | "Chinese"`;
      const typeScriptType = `"English" | "Chinese"`;
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle type_literals:boolean -> boolean_literals", async () => {
      const tspType = `true`;
      const typeScriptType = `true`;
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle string -> string", async () => {
      const tspType = "string";
      const typeScriptType = "string";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle never, its property will be ignored both in Input and Ouput model", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop1: never;
        prop2: never;
      }`;
      const tspType = "SimpleModel";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {}`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {}`
      });
    });
  });

  describe("decimal generation", () => {
    it("should handle decimal -> number", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
      model SimpleModel {
        prop: decimal;
      }
      @route("/decimal/prop")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true,
        false,
        false // disable diagnostics
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        /**
         * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
         * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
         * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
         * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
         * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
         *
        */
        prop: number;
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        /**
         * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
         * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
         * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
         * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
         * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
         *
        */
        prop: number;
      }
      `
      );
    });

    it("should report decimal-to-number diagnostic warning for decimal -> number", async () => {
      try {
        await emitModelsFromTypeSpec(
          `
      model SimpleModel {
        prop: decimal;
      }
      @route("/decimal/prop")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
          false,
          true,
          false,
          true // throw exception for diagnostics
        );
      } catch (err: any) {
        assert.strictEqual(err.length, 1);
        assert.strictEqual(
          err[0].code,
          "@azure-tools/typespec-ts/decimal-to-number"
        );
        assert.strictEqual(
          err[0].message,
          "Please note the decimal type will be converted to number. If you strongly care about precision you can use @encode to encode it as a string for the property - prop."
        );
      }
    });

    it("should handle decimal128 -> number", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
      model SimpleModel {
        prop: decimal128;
      }
      @route("/decimal128/prop")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true,
        false,
        false // disable diagnostics
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        /**
         * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
         * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
         * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
         * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
         * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
         *
        */
        prop: number;
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        /**
         * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
         * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
         * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
         * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
         * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
         *
        */
        prop: number;
      }
      `
      );
    });

    // TODO: pending with typespec definition https://github.com/microsoft/typespec/issues/2762
    it.skip("should handle decimal/decimal128 with encode `string`", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
      model SimpleModel {
        @encode("string")
        prop1: decimal;
        @encode("string")
        prop2: decimal128;
      }
      @route("/decimal/prop/encode")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "prop1": string;
        "prop2": string;
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "prop1": string;
        "prop2": string;
      }
      `
      );
    });
  });

  describe("array basic generation", () => {
    it("should handle string[] -> string[]", async () => {
      const tspType = "string[]";
      const typeScriptType = "string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle int32[] -> number[]", async () => {
      const tspType = "int32[]";
      const typeScriptType = "number[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle float32[] -> number[]", async () => {
      const tspType = "float32[]";
      const typeScriptType = "number[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle boolean[] -> boolean[]", async () => {
      const tspType = "boolean[]";
      const typeScriptType = "boolean[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle bytes[] -> string[]", async () => {
      const tspType = "bytes[]";
      const typeScriptType = "string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle plainDate[] -> input 'Date[] | string[]' output type 'string[]'", async () => {
      const tspType = "plainDate[]";
      const inputType = "Date[] | string[]";
      const outputType = "string[]";
      await verifyPropertyType(tspType, inputType, { outputType });
    });

    it("should handle true[] -> true[]", async () => {
      const tspType = "true[]";
      const typeScriptType = "true[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle 32[] -> 32[]", async () => {
      const tspType = "32[]";
      const typeScriptType = "32[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle 'job'[] -> 'job'[]", async () => {
      const tspType = `"job"[]`;
      const typeScriptType = `"job"[]`;
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle unknown[] -> input 'unknown[]' output type 'any[]'", async () => {
      const tspType = "unknown[]";
      const inputType = "unknown[]";
      const outputType = "any[]";
      await verifyPropertyType(tspType, inputType, { outputType });
    });

    it("should handle unknown -> input 'unknown' output type 'any'", async () => {
      const tspType = "unknown";
      const inputType = "unknown";
      const outputType = "any";
      await verifyPropertyType(tspType, inputType, { outputType });
    });
  });
  describe("array models generation", () => {
    it("should handle SimpleModel[] -> Array<SimpleModel>", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const tspType = "SimpleModel[]";
      const inputModelName = "Array<SimpleModel>";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `Array<SimpleModelOutput>`,
        additionalInputContent: `
        export interface SimpleModel {
          prop1:string;
          prop2:number;
        }`,
        additionalOutputContent: `
        export interface SimpleModelOutput {
          prop1:string;
          prop2:number;
        }`
      });
    });

    it("should handle fixed enum array", async () => {
      const tspDefinition = `
      #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      @fixed
      enum DiskEncryptionTarget {
        OsDisk: "osdisk",
        TemporaryDisk: "temporarydisk",
      }
      `;
      const tspType = "DiskEncryptionTarget[]";
      const typeScriptType = `("osdisk" | "temporarydisk")[]`;
      const inputModelName = typeScriptType;
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: typeScriptType
        },
        true
      );
    });

    it("should handle extensible enum array", async () => {
      const tspDefinition = `
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      enum DiskEncryptionTarget {
        OsDisk: "osdisk",
        TemporaryDisk: "temporarydisk",
      }
      `;
      const tspType = "DiskEncryptionTarget[]";
      const typeScriptType = `string[]`;
      const inputModelName = typeScriptType;
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: typeScriptType
        },
        true
      );
    });
  });
  describe("object generation", () => {
    it("should handle basic model -> type/interface", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }`;
      const tspType = "SimpleModel";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
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
      const tspDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      model NestedModel {
        ...SimpleModel;
      }
      `;
      const tspType = "NestedModel";
      const inputModelName = "NestedModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
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

    it("should handle anonymous model -> effective type/interface", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const tspType = "{...SimpleModel}";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
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

    describe("inheritance & polymorphism", () => {
      it("should handle inheritance model -> multiple types/interfaces", async () => {
        const schemaOutput = await emitModelsFromTypeSpec(`
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
        await assertEqualContent(
          outputModelFile?.content!,
          `
          export interface PetOutputParent {
            name: string;
            weight?: number;
            kind: string;
          }
  
          export interface CatOutput extends PetOutputParent {
            kind: "cat";
            meow: number;
          }
  
          export interface DogOutput extends PetOutputParent {
            kind: "dog";
            bark: string;
          }
  
          export type PetOutput = PetOutputParent | CatOutput | DogOutput;`
        );
      });

      it("should handle multiple inheritance model -> multiple types/interfaces", async () => {
        const schemaOutput = await emitModelsFromTypeSpec(`
        @doc("This is base model for polymorphic multiple levels inheritance with a discriminator.")
        @discriminator("kind")
        model Fish {
          age: int32;
        }
  
        @doc("The second level model in polymorphic multiple levels inheritance and it defines a new discriminator.")
        @discriminator("sharktype")
        model Shark extends Fish {
          kind: "shark";
        }
  
        @doc("The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances.")
        model Salmon extends Fish {
          kind: "salmon";
          friends?: Fish[];
          hate?: Record<Fish>;
          partner?: Fish;
        }
  
        @doc("The third level model SawShark in polymorphic multiple levels inheritance.")
        @discriminator("sharktype")
        model SawShark extends Shark {
          sharktype: "saw";
        }
  
        @doc("The third level model GoblinShark in polymorphic multiple levels inheritance.")
        model GoblinShark extends Shark {
          sharktype: "goblin";
        }
        op read(): { @body body: Fish };
        `);
        assert.ok(schemaOutput);
        const { inputModelFile, outputModelFile } = schemaOutput!;
        assert.ok(!inputModelFile?.content);
        assert.strictEqual(outputModelFile?.path, "outputModels.ts");
        await assertEqualContent(
          outputModelFile?.content!,
          `
        /** This is base model for polymorphic multiple levels inheritance with a discriminator. */
        export interface FishOutputParent {
          age: number;
          kind: string;
        }
        
        /** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
        export interface SharkOutputParent extends FishOutputParent {
          kind: "shark";
          sharktype: string;
        }
        
        /** The third level model SawShark in polymorphic multiple levels inheritance. */
        export interface SawSharkOutput extends SharkOutputParent {
          sharktype: "saw";
        }
        
        /** The third level model GoblinShark in polymorphic multiple levels inheritance. */
        export interface GoblinSharkOutput extends SharkOutputParent {
          sharktype: "goblin";
        }
        
        /** The second level model in polymorphic multiple levels inheritance which contains references to other polymorphic instances. */
        export interface SalmonOutput extends FishOutputParent {
          kind: "salmon";
          friends?: Array<FishOutput>;
          hate?: Record<string, FishOutput>;
          partner?: FishOutput;
        }
        
        /** This is base model for polymorphic multiple levels inheritance with a discriminator. */
        export type FishOutput = FishOutputParent | SharkOutput | SalmonOutput;
        /** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
        export type SharkOutput = SharkOutputParent | SawSharkOutput | GoblinSharkOutput;
        `
        );
      });

      it("should handle basic model with special words -> type/interface", async () => {
        const tspDefinition = `
        model SimpleModel {
          "model.kind": "derived";
          "derived.name": string;
        }`;
        const tspType = "SimpleModel";
        const inputModelName = "SimpleModel";
        await verifyPropertyType(tspType, inputModelName, {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `${inputModelName}Output`,
          additionalInputContent: `
          export interface ${inputModelName} {
            "model.kind": "derived";
            "derived.name": string;
          }`,
          additionalOutputContent: `
          export interface ${inputModelName}Output {
            "model.kind": "derived";
            "derived.name": string;
          }`
        });
      });

      it("should handle inheritance model with special words -> type/interface", async () => {
        const tspDefinition = `
        @doc("This is a base model has discriminator name containing dot.")
        @discriminator("model.kind")
        model BaseModel {}
  
        @doc("This is a model has property names of special words or characters.")
        @discriminator("model.kind")
        model DerivedModel extends BaseModel {
          "model.kind": "derived";
          "derived.name": string;
          for: string;
        }`;
        const tspType = "DerivedModel";
        const inputModelName = "DerivedModel";
        await verifyPropertyType(tspType, inputModelName, {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `${inputModelName}Output`,
          additionalInputContent: `
          /** This is a model has property names of special words or characters. */
          export interface ${inputModelName} extends BaseModelParent {
            "model.kind": "derived";
            "derived.name": string;
            for: string; 
          }
          
          /** This is a base model has discriminator name containing dot. */
          export interface BaseModelParent {
            "model.kind": string;
          }
  
          /** This is a base model has discriminator name containing dot. */
          export type BaseModel = BaseModelParent | ${inputModelName};
          `,
          additionalOutputContent: `
          /** This is a model has property names of special words or characters. */
          export interface ${inputModelName}Output extends BaseModelOutputParent {
            "model.kind": "derived";
            "derived.name": string;
            for: string; 
          }
          
          /** This is a base model has discriminator name containing dot. */
          export interface BaseModelOutputParent {
            "model.kind": string;
          }
  
          /** This is a base model has discriminator name containing dot. */
          export type BaseModelOutput = BaseModelOutputParent | ${inputModelName}Output;
          `
        });
      });

      describe("enum and enum member as discriminator", () => {
        describe("is string", () => {
          const typespec = (hasDiscriminator: boolean) => `
          enum A {
            AA,
            BB,
          }
          ${hasDiscriminator ? '@discriminator("a")' : ""}
          model B {
            a: A,
          } 
          model C extends B {
            a: A.AA,
          }
          op read(): { @body body: C };
          `;
          it("with @discriminator", async () => {
            const schemaOutput = await emitModelsFromTypeSpec(typespec(true));
            assert.ok(schemaOutput);
            const { inputModelFile, outputModelFile } = schemaOutput!;
            assert.ok(!inputModelFile?.content);
            assert.strictEqual(outputModelFile?.path, "outputModels.ts");
            await assertEqualContent(
              outputModelFile?.content!,
              `
            export interface COutput extends BOutputParent {
              a: "AA";
            }

            export interface BOutputParent {
              a: string;
            }

            export type BOutput = BOutputParent | COutput;`
            );
          });

          it("without @discriminator", async () => {
            const schemaOutput = await emitModelsFromTypeSpec(typespec(false));
            assert.ok(schemaOutput);
            const { inputModelFile, outputModelFile } = schemaOutput!;
            assert.ok(!inputModelFile?.content);
            assert.strictEqual(outputModelFile?.path, "outputModels.ts");
            await assertEqualContent(
              outputModelFile?.content!,
              `
            export interface COutput extends BOutput {
              a: "AA";
            }
    
            export interface BOutput {
              /** Possible values: "AA", "BB" */
              a: string;
            }`
            );
          });
        });

        describe("is number", () => {
          const typespec = (hasDiscriminator: boolean) => `
          enum A {
            AA: 1.1,
            BB: 2.2,
          }
          ${hasDiscriminator ? '@discriminator("a")' : ""}
          model B {
            a: A,
          }
          model C extends B {
            a: A.AA,
          }
          op read(): { @body body: C };
          `;

          it("without @discriminator", async () => {
            const schemaOutput = await emitModelsFromTypeSpec(typespec(false));
            assert.ok(schemaOutput);
            const { inputModelFile, outputModelFile } = schemaOutput!;
            assert.ok(!inputModelFile?.content);
            assert.strictEqual(outputModelFile?.path, "outputModels.ts");
            await assertEqualContent(
              outputModelFile?.content!,
              `
            export interface COutput extends BOutput {
              a: 1.1;
            }
    
            export interface BOutput {
              /** Possible values: 1.1, 2.2 */
              a: string;
            }`
            );
          });
        });
      });
    });
  });
  describe("additional properties generation", () => {
    it("should handle model additional properties from record of unknown", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<unknown> {}
      model VegetableBeans extends Record<unknown> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, unknown> {}
        
        export interface VegetableBeans extends Record<string, unknown> {}
        `
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, any> {}
        
        export interface VegetableBeansOutput extends Record<string, any> {}
        `
      );
    });

    it("should handle model additional properties from record of boolean", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<boolean> {}
      model VegetableBeans extends Record<boolean> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, boolean> {}
        
        export interface VegetableBeans extends Record<string, boolean> {}
        `
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, boolean> {}
        
        export interface VegetableBeansOutput extends Record<string, boolean> {}
        `
      );
    });

    it("should handle model additional properties from record of float32", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<float32> {}
      model VegetableBeans extends Record<float32> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, number> {}
        
        export interface VegetableBeans extends Record<string, number> {}
        `
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, number> {}
        
        export interface VegetableBeansOutput extends Record<string, number> {}
        `
      );
    });

    it("should handle model additional properties from record of int64", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<int64> {}
      model VegetableBeans extends Record<int64> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, number> {}
        
        export interface VegetableBeans extends Record<string, number> {}
        `
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, number> {}
        
        export interface VegetableBeansOutput extends Record<string, number> {}
        `
      );
    });

    it("should handle model additional properties from record of string", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<string> {}
      model VegetableBeans extends Record<string> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, string> {}
        
        export interface VegetableBeans extends Record<string, string> {}
        `
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, string> {}
        
        export interface VegetableBeansOutput extends Record<string, string> {}
        `
      );
    });

    it("should handle model additional properties extends from record of object", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<Carrots> {
        testProp: Carrots
      }
      model VegetableBeans extends Record<Beans> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      model Carrots {
        color: string,
        id: string
      }
      model Beans {
        expiry: string,
        id: string
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, Carrots> {
          testProp: Carrots;
        }

        export interface Carrots {
          color: string;
          id: string;
        }
        
        export interface VegetableBeans extends Record<string, Beans> {}
        
        export interface Beans {
          expiry: string;
          id: string;
        }`
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, CarrotsOutput> {
          testProp: CarrotsOutput;
        }

        export interface CarrotsOutput {
          color: string;
          id: string;
        }
        
        export interface VegetableBeansOutput extends Record<string, BeansOutput> {}
        
        export interface BeansOutput {
          expiry: string;
          id: string;
        }`
      );
    });

    it("should handle model additional properties is from record of object", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot is Record<Carrots> {
        testProp: Carrots
      }
      model VegetableBeans is Record<Beans> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      model Carrots {
        color: string,
        id: string
      }
      model Beans {
        expiry: string,
        id: string
      }
      op post(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }

        export interface VegetableCarrot extends Record<string, Carrots> {
          testProp: Carrots;
        }

        export interface Carrots {
          color: string;
          id: string;
        }
        
        export interface VegetableBeans extends Record<string, Beans> {}

        export interface Beans {
          expiry: string;
          id: string;
        }`
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }

        export interface VegetableCarrotOutput extends Record<string, CarrotsOutput> {
          testProp: CarrotsOutput;
        }
        
        export interface CarrotsOutput {
          color: string;
          id: string;
        }

        export interface VegetableBeansOutput extends Record<string, BeansOutput> {}

        export interface BeansOutput {
          expiry: string;
          id: string;
        }`
      );
    });

    it("should handle model additional properties from record of object array", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model VegetableCarrot extends Record<Carrots[]> {}
      model VegetableBeans extends Record<Beans[]> {}
      
      model Vegetables {
        carrots: VegetableCarrot,
        beans: VegetableBeans
      }
      model Carrots {
        color: string,
        id: string
      }
      model Beans {
        expiry: string,
        id: string
      }
      op read(@body body: Vegetables): { @body body: Vegetables };
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface Vegetables {
          carrots: VegetableCarrot;
          beans: VegetableBeans;
        }
        
        export interface VegetableCarrot extends Record<string, Array<Carrots>> {}

        export interface Carrots {
          color: string;
          id: string;
        }
        
        export interface VegetableBeans extends Record<string, Array<Beans>> {}
        
        export interface Beans {
          expiry: string;
          id: string;
        }`
      );

      assert.ok(outputModelFile);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface VegetablesOutput {
          carrots: VegetableCarrotOutput;
          beans: VegetableBeansOutput;
        }
        
        export interface VegetableCarrotOutput extends Record<string, Array<CarrotsOutput>> {}

        export interface CarrotsOutput {
          color: string;
          id: string;
        }
        
        export interface VegetableBeansOutput extends Record<string, Array<BeansOutput>> {}
        
        export interface BeansOutput {
          expiry: string;
          id: string;
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
    const buildParameterDef = (type: string) => {
      return `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface GetModelQueryParamProperties {
        "input": ${type};
      }

      export interface GetModelQueryParam {
        queryParameters: GetModelQueryParamProperties;
      }
      
      export type GetModelParameters = GetModelQueryParam & RequestParameters;
      `;
    };

    describe("as input and output model property", () => {
      it("should handle duration without encode", async () => {
        await verifyPropertyType("duration", "string");
      });

      it("should handle duration with encode `seconds`", async () => {
        const schemaOutput = await emitModelsFromTypeSpec(
          `
        model SimpleModel {
          @encode("seconds", float64)
          prop: duration;
        }
        @route("/duration/prop/seconds")
        @get
        op getModel(...SimpleModel): SimpleModel;
        `,
          false,
          true
        );
        assert.ok(schemaOutput);
        const { inputModelFile, outputModelFile } = schemaOutput!;
        await assertEqualContent(
          inputModelFile?.content!,
          `
        export interface SimpleModel { 
          "prop": number;
        }
        `
        );
        await assertEqualContent(
          outputModelFile?.content!,
          `
        export interface SimpleModelOutput { 
          "prop": number;
        }
        `
        );
      });

      it("should handle duration with encode `iso8601`", async () => {
        const schemaOutput = await emitModelsFromTypeSpec(
          `
        model SimpleModel {
          @encode("ISO8601")
          prop: duration;
        }
        @route("/duration/prop/iso8601")
        @get
        op getModel(...SimpleModel): SimpleModel;
        `,
          false,
          true
        );
        assert.ok(schemaOutput);
        const { inputModelFile, outputModelFile } = schemaOutput!;
        await assertEqualContent(
          inputModelFile?.content!,
          `
        export interface SimpleModel { 
          "prop": string;
        }
        `
        );
        await assertEqualContent(
          outputModelFile?.content!,
          `
        export interface SimpleModelOutput { 
          "prop": string;
        }
        `
        );
      });

      it("should handle duration in type with encode `float32`", async () => {
        const schemaOutput = await emitModelsFromTypeSpec(
          `
        @encode(DurationKnownEncoding.seconds, float32)
        scalar Float32Duration extends duration;
        model SimpleModel {
          prop: Float32Duration[];
        }
        @route("/duration/prop/iso8601")
        @get
        op getModel(...SimpleModel): SimpleModel;
        `,
          false,
          true
        );
        assert.ok(schemaOutput);
        const { inputModelFile, outputModelFile } = schemaOutput!;
        await assertEqualContent(
          inputModelFile?.content!,
          `
        export interface SimpleModel { 
          "prop": number[];
        }
        `
        );
        await assertEqualContent(
          outputModelFile?.content!,
          `
        export interface SimpleModelOutput { 
          "prop": number[];
        }
        `
        );
      });
    });

    describe("as query parameter", () => {
      it("should handle duration without encode", async () => {
        const schemaOutput = await emitParameterFromTypeSpec(`
        @route("/duration/query/default")
        @get
        op getModel(@query input: duration): NoContentResponse;
        `);
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.content!,
          buildParameterDef("string")
        );
      });

      it("should handle duration with encode `seconds`", async () => {
        const schemaOutput = await emitParameterFromTypeSpec(
          `
        @route("/duration/query/seconds")
        @get
        op getModel(
          @query
          @encode("seconds", float64)
          input: duration): NoContentResponse;
        `,
          false,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.content!,
          buildParameterDef("number")
        );
      });

      it("should handle duration with encode `iso8601`", async () => {
        const schemaOutput = await emitParameterFromTypeSpec(
          `
        @route("/duration/query/iso8601")
        @get
        op getModel(
          @query
          @encode("iso8601")
          input: duration): NoContentResponse;
        `,
          false,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.content!,
          buildParameterDef("string")
        );
      });
    });
  });
  describe("datetime generation", () => {
    it("should handle plainDate -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("plainDate", inputType, {
        outputType
      });
    });
    it("should handle plainTime -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("plainTime", inputType, {
        outputType
      });
    });
    it("should handle utcDateTime -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("utcDateTime", inputType, {
        outputType
      });
    });

    it("should handle offsetDateTime> string in output model &  `Date | string` in input model", async () => {
      const inputType = "string";
      const outputType = "string";
      await verifyPropertyType("offsetDateTime ", inputType, {
        outputType
      });
    });

    it("should handle datetime with encode `unixTimestamp`", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
      model SimpleModel {
        @encode("unixTimestamp", int32)
        createdAt: utcDateTime;
      }
      @route("/datetime/prop/unixTimestamp")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "createdAt": number;
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "createdAt": number;
      }
      `
      );
    });

    it("should handle datetime with encode `rfc3339`", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
        model SimpleModel {
          @encode("rfc3339")
          createdAt: offsetDateTime;
        }
        @route("/datetime/prop/rfc3339")
        @get
        op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "createdAt": string;
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "createdAt": string;
      }
      `
      );
    });

    it("should handle datetime array with encode `unixTimestamp`", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(
        `
      @encode(DateTimeKnownEncoding.unixTimestamp, int64)
      scalar unixTimestampDatetime extends utcDateTime;
      model SimpleModel {
        createdAt: unixTimestampDatetime[];
      }
      @route("/datetime/prop/unixTimestamp")
      @get
      op getModel(...SimpleModel): SimpleModel;
      `,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "createdAt": number[];
      }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "createdAt": number[];
      }
      `
      );
    });
  });
  describe("record generation", () => {
    it("should handle Record<int32> -> Record<string, number>", async () => {
      await verifyPropertyType("Record<int32>", "Record<string, number>");
    });
    it("should handle Record<boolean> -> Record<string, boolean>", async () => {
      await verifyPropertyType("Record<boolean>", "Record<string, boolean>");
    });
    it("should handle Record<string> -> Record<string, string>", async () => {
      await verifyPropertyType("Record<string>", "Record<string, string>");
    });
    it("should handle Record<unknown> -> input 'Record<unknown>' output type 'Record<any>'", async () => {
      const tspType = "Record<unknown>";
      const inputType = "Record<string, unknown>";
      const outputType = "Record<string, any>";
      await verifyPropertyType(tspType, inputType, { outputType });
    });

    it("should handle record of empty object Record<{}> -> Record<string, Record<string, unknown>>", async () => {
      const tspType = "Record<{}>";
      const inputType = "Record<string, Record<string, unknown>>";
      const outputType = "Record<string, Record<string, any>>";
      await verifyPropertyType(tspType, inputType, { outputType });
    });

    it("should handle record of record of empty object Record<Record<{}>> -> Record<string, Record<string, Record<string, unknown>>>", async () => {
      const tspType = "Record<Record<{}>>";
      const inputType =
        "Record<string, Record<string, Record<string, unknown>>>";
      const outputType = "Record<string, Record<string, Record<string, any>>>";
      await verifyPropertyType(tspType, inputType, { outputType });
    });

    it("should handle record of record of unknown Record<Record<unknown>> -> input Record<string, Record<string, unknown>>, output Record<string, Record<string, any>>", async () => {
      const tspType = "Record<Record<unknown>>";
      const inputType = "Record<string, Record<string, unknown>>";
      const outputType = "Record<string, Record<string, any>>";
      await verifyPropertyType(tspType, inputType, { outputType });
    });
  });

  describe("Record Model generation", () => {
    it("should handle Record<SimpleModel> -> Record<string, SimpleModel>", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const tspType = "Record<SimpleModel>";
      const inputModelName = "Record<string, SimpleModel>";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `Record<string, SimpleModelOutput>`,
        additionalInputContent: `
        export interface SimpleModel {
          prop1:string;
          prop2:number;
        }`,
        additionalOutputContent: `
        export interface SimpleModelOutput {
          prop1:string;
          prop2:number;
        }`
      });
    });
  });

  describe("property definition correctness", () => {
    it("should handle @visibility(read) -> readonly ", async () => {
      const tspDefinition = `
      model SimpleModel {
        @visibility("read")
        prop: int32;
        prop1: int32;
      }
      `;
      const tspType = `SimpleModel`;
      const inputModelName = "SimpleModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          prop1:number;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          readonly prop:number;
          prop1:number;
        }`
      });
    });

    it("should handle optional parameter -> with question mark ", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop?: int32;
      }
      `;
      const tspType = `SimpleModel`;
      const inputModelName = tspType;
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
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

    it("should handle nullable optional/required parameter", async () => {
      const tspDefinition = `
      model SimpleModel {
        foo?: string | null;
        bar: string | null;
        baz: string;
      }
      `;
      const tspType = `SimpleModel`;
      const inputModelName = tspType;
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          foo?: string | null;
          bar: string | null;
          baz: string;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          foo?: string | null;
          bar: string | null;
          baz: string;
        }`
      });
    });

    it("should handle optional parameter with defaul value -> general type ", async () => {
      const tspDefinition = `
      model SimpleModel {
        prop?: int32 = 0;
      }
      `;
      const tspType = `SimpleModel`;
      const inputModelName = tspType;
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
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
  describe("union expression", () => {
    it("should handle string | integer -> string | number", async () => {
      const tspType = "string | integer";
      const typeScriptType = "string | number";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle int32 | string -> number | string", async () => {
      const tspType = "int32 | string";
      const typeScriptType = "number | string";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle float32[] | string[] -> number[] | string[]", async () => {
      const tspType = "float32[] | string[]";
      const typeScriptType = "number[] | string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle boolean[] | string[] -> boolean[] | string[]", async () => {
      const tspType = "boolean[] | string[]";
      const typeScriptType = "boolean[] | string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle true[] | string[] -> true[] | string[]", async () => {
      const tspType = "true[] | string[]";
      const typeScriptType = "true[] | string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle 32[] | string[] -> 32[] | string[]", async () => {
      const tspType = "32[] | string[]";
      const typeScriptType = "32[] | string[]";
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle 'job'[] | string[] -> 'job'[] | string[]", async () => {
      const tspType = `"job"[] | string[]`;
      const typeScriptType = `"job"[] | string[]`;
      await verifyPropertyType(tspType, typeScriptType);
    });

    it("should handle Model1[] | Model2[] -> Array<Model1> | Array<Model2>", async () => {
      const tspDefinition = `
      @doc("This is a base model.")
      model BaseModel {
        name: string;
      }
      
      @doc("The first one of the unioned model type.")
      model Model1 extends BaseModel {
        prop1: int32;
      }
      
      @doc("The second one of the unioned model type.")
      model Model2 extends BaseModel {
        prop2: int32;
      }
      
      union MyNamedUnion {
        one: Model1,
        two: Model2,
      }
      `;
      const tspType = "Model1[] | Model2[]";
      const inputModelName = "Array<Model1> | Array<Model2>";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `Array<Model1Output> | Array<Model2Output>`,
        additionalInputContent: `
        /** The first one of the unioned model type. */
        export interface Model1 extends BaseModel {
          prop1: number;
        }
        
        /** This is a base model. */
        export interface BaseModel {
          name: string;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2 extends BaseModel {
          prop2: number;
        }`,
        additionalOutputContent: `
        /** The first one of the unioned model type. */
        export interface Model1Output extends BaseModelOutput {
          prop1: number;
        }
        
        /** This is a base model. */
        export interface BaseModelOutput {
          name: string;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2Output extends BaseModelOutput {
          prop2: number;
        }`
      });
    });
  });

  describe("Named union", () => {
    it("union variants are models", async () => {
      const tspDefinition = `
      @doc("This is a base model.")
      model BaseModel {
        name: string;
      }
      
      @doc("The first one of the unioned model type.")
      model Model1 extends BaseModel {
        prop1: int32;
      }
      
      @doc("The second one of the unioned model type.")
      model Model2 extends BaseModel {
        prop2: int32;
      }
      
      union MyNamedUnion {
        one: Model1,
        two: Model2,
      }
      `;
      const tspType = "MyNamedUnion";
      const inputModelName = "MyNamedUnion";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `MyNamedUnionOutput`,
        additionalInputContent: `
        /** The first one of the unioned model type. */
        export interface Model1 extends BaseModel {
          prop1: number;
        }
        
        /** This is a base model. */
        export interface BaseModel {
          name: string;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2 extends BaseModel {
          prop2: number;
        }
       
        /** Alias for MyNamedUnion */
        export type MyNamedUnion = Model1 | Model2;`,
        additionalOutputContent: `
        /** The first one of the unioned model type. */
        export interface Model1Output extends BaseModelOutput {
          prop1: number;
        }
        
        /** This is a base model. */
        export interface BaseModelOutput {
          name: string;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2Output extends BaseModelOutput {
          prop2: number;
        }
       
        /** Alias for MyNamedUnionOutput */
        export type MyNamedUnionOutput = Model1Output | Model2Output;`
      });
    });

    it("union variants are mixed with nullable/primitive/model", async () => {
      const tspDefinition = `
      @doc("The first one of the unioned model type.")
      model Model1 {
        prop1: int32;
      }

      alias A = "X" | "Y";
      
      union MyNamedUnion {
        one: Model1,
        two: "foo",
        three: null,
        four: 1,
        five: A,
        six: Model1[],
      }
      `;
      const tspType = "MyNamedUnion";
      const inputModelName = "MyNamedUnion";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `MyNamedUnionOutput`,
        additionalInputContent: `
        /** The first one of the unioned model type. */
        export interface Model1 {
          prop1: number;
        }

        /** Alias for MyNamedUnion */
        export type MyNamedUnion = Model1 | "foo" | null | 1 | "X" | "Y" | Array<Model1>;`,
        additionalOutputContent: `
        /** The first one of the unioned model type. */
        export interface Model1Output {
          prop1: number;
        }

        /** Alias for MyNamedUnionOutput */
        export type MyNamedUnionOutput = Model1Output | "foo" | null | 1 | "X" | "Y" | Array<Model1Output>;`
      });
    });

    it("union variants are pure primitive types", async () => {
      const tspDefinition = `
      union MyNamedUnion {
        one: string,
        two: int32,
      }
      `;
      const tspType = "MyNamedUnion | null";
      const inputModelName = "MyNamedUnion | null";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `MyNamedUnionOutput | null`,
        additionalInputContent: `
        /** Alias for MyNamedUnion */
        export type MyNamedUnion = string | number;`,
        additionalOutputContent: `
        /** Alias for MyNamedUnionOutput */
        export type MyNamedUnionOutput = string | number;`
      });
    });

    it("union variants are pure constants", async () => {
      const tspDefinition = `
      union StringExtensibleNamedUnion {
        OptionB: "b",
        "c",
        foo: 1,
      }
      `;
      const tspType = "StringExtensibleNamedUnion";
      const inputModelName = "StringExtensibleNamedUnion";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `StringExtensibleNamedUnionOutput`,
        additionalInputContent: `
        /** Alias for StringExtensibleNamedUnion */
        export type StringExtensibleNamedUnion = "b" | "c" | 1;`,
        additionalOutputContent: `
        /** Alias for StringExtensibleNamedUnionOutput */
        export type StringExtensibleNamedUnionOutput = "b" | "c" | 1;`
      });
    });
  });

  describe("'is' keyword generation", () => {
    it("should handle A is B, only A is referenced", async () => {
      const tspDefinition = `
      model B {
        "prop": string;
      }
      model A is B{
        "prop1": string;
      }`;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {
          "prop": string;
          "prop1": string;
        }`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {
          "prop": string;
          "prop1": string;
        }`
      });
    });

    it("should handle A is B, both A and B are referenced", async () => {
      const schemaOutput = await emitModelsFromTypeSpec(`
      model B {
        "prop": string;
      }
      model A is B{
        "prop1": string;
      }

      @route("/models")
      @get
      op getModel(@body input: A): B;`);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile?.content);
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
      export interface A {
        "prop": string;
        "prop1": string;
    }
      `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
      export interface BOutput {
        "prop": string;
    }
      `
      );
    });

    it("should handle A is B, B is string", async () => {
      const tspDefinition = `
      scalar MyStr extends string;`;
      const tspType = "MyStr";
      const inputModelName = "string";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `${inputModelName}`
      });
    });
  });

  describe("@projectedName", () => {
    it("should generate projected json name for property", async () => {
      const tspDefinition = `
      @doc("This is a Foo model.")
      model FooModel {
        @projectedName("json", "xJson")
        @projectedName("javascript", "MadeForTS")
        @projectedName("client", "NotToUseMeAsName") // Should be ignored
        x: int32;

        y: string;
      }
      `;
      const tspType = "FooModel";
      const inputModelName = "FooModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `FooModelOutput`,
        additionalInputContent: `
        /** This is a Foo model. */
        export interface FooModel {
          xJson: number;
          y: string;
        }`,
        additionalOutputContent: `
        /** This is a Foo model. */
        export interface FooModelOutput {
          xJson: number;
          y: string;
        }`
      });
    });

    it("should generate augmented projected json name for property", async () => {
      const tspDefinition = `
      @doc("This is a Foo model.")
      model FooModel {
        x: int32;
      }

      @@projectedName(FooModel.x, "client", "NotToUseMeAsName"); // Should be ignored
      @@projectedName(FooModel.x, "javascript", "MadeForTS");
      @@projectedName(FooModel.x, "json", "xJson");
      `;
      const tspType = "FooModel";
      const inputModelName = "FooModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `FooModelOutput`,
        additionalInputContent: `
        /** This is a Foo model. */
        export interface FooModel {
          xJson: number;
        }`,
        additionalOutputContent: `
        /** This is a Foo model. */
        export interface FooModelOutput {
          xJson: number;
        }`
      });
    });

    it("should generate friendly name over projected model name", async () => {
      const tspDefinition = `
      @projectedName("javascript", "CustomProjectedModelTS")
      @projectedName("json", "CustomProjectedModel")
      @friendlyName("CustomFriendlyModel")
      @doc("This is a Foo model.")
      model FooModel {
        x: int32;
      }
      `;
      const tspType = "FooModel";
      const inputModelName = "CustomFriendlyModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `CustomFriendlyModelOutput`,
        additionalInputContent: `
        /** This is a Foo model. */
        export interface CustomFriendlyModel {
          x: number;
        }`,
        additionalOutputContent: `
        /** This is a Foo model. */
        export interface CustomFriendlyModelOutput {
          x: number;
        }`
      });
    });

    it("should ignore projected javascript model name", async () => {
      const tspDefinition = `
      @projectedName("javascript", "CustomProjectedModelTS")
      @doc("This is a Foo model.")
      model FooModel {
        x: int32;
      }
      `;
      const tspType = "FooModel";
      const inputModelName = "FooModel";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `FooModelOutput`,
        additionalInputContent: `
        /** This is a Foo model. */
        export interface FooModel {
          x: number;
        }`,
        additionalOutputContent: `
        /** This is a Foo model. */
        export interface FooModelOutput {
          x: number;
        }`
      });
    });

    it("should generate projected operation name for parameter", async () => {
      const parameters = await emitParameterFromTypeSpec(
        `
        @projectedName("json", "testRunOperation")
        op test(): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
          import { RequestParameters } from "@azure-rest/core-client";
          
          export type TestRunOperationParameters =  RequestParameters;
          `
      );
    });

    it("should generate projected operation name for response", async () => {
      const parameters = await emitResponsesFromTypeSpec(
        `
        @projectedName("json", "testRunOperation")
        op test(): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { HttpResponse } from "@azure-rest/core-client";
          
        /** The request has succeeded. */
        export interface TestRunOperation200Response extends HttpResponse {
          status: "200";
         body: string;
        }
          `
      );
    });

    it("should not generate projected javascript name in RLC", async () => {
      const parameters = await emitResponsesFromTypeSpec(
        `
        @projectedName("javascript", "testRunOperation")
        op test(): string;
        `
      );
      assert.ok(parameters);
      await assertEqualContent(
        parameters?.content!,
        `
        import { HttpResponse } from "@azure-rest/core-client";
          
        /** The request has succeeded. */
        export interface Test200Response extends HttpResponse {
          status: "200";
         body: string;
        }
          `
      );
    });
  });

  describe("@friendlyName for model", () => {
    it("should generate friendly name", async () => {
      const tspDefinition = `
      @friendlyName("MyNameIsA")
      model A { }
      `;
      const tspType = "A";
      const inputModelName = "MyNameIsA";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `MyNameIsAOutput`,
        additionalInputContent: `
        export interface MyNameIsA {}
        `,
        additionalOutputContent: `
        export interface MyNameIsAOutput {}
        `
      });
    });

    it("should generate templated friendly name", async () => {
      const tspDefinition = `
      @friendlyName("{name}Model", Base)
      model Base { }

      @friendlyName("Templated{name}", T)
      model Templated<T> {
        prop: T;
      }

      model X is Templated<Base>{};
      `;
      const tspType = "X";
      const inputModelName = "TemplatedBase";
      await verifyPropertyType(tspType, inputModelName, {
        additionalTypeSpecDefinition: tspDefinition,
        outputType: `TemplatedBaseOutput`,
        additionalInputContent: `
        export interface TemplatedBase {
           prop: BaseModel;
        }

        export interface BaseModel {}
        `,
        additionalOutputContent: `
        export interface TemplatedBaseOutput {
          prop: BaseModelOutput;
        }

        export interface BaseModelOutput {}
        `
      });
    });
  });

  describe("core error model", () => {
    it("Azure.Core.Foundations.ErrorResponse -> ErrorResponse", async () => {
      const tspDefinition = `
      @doc("testing")
      model A {
        @doc("testing")
        errors?: Azure.Core.Foundations.ErrorResponse;
       }
      `;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `AOutput`,
          additionalInputContent: `
        /** testing */
        export interface A{
          /** testing */
          errors?: ErrorResponse;
        }
        `,
          additionalOutputContent: `
          /** testing */
          export interface AOutput{
            /** testing */
            errors?: ErrorResponse;
          }
          `
        },
        true,
        `import { ErrorResponse } from "@azure-rest/core-client"`
      );
    });

    it("Azure.Core.Foundations.InnerError -> InnerError", async () => {
      const tspDefinition = `
      @doc("testing")
      model A {
        @doc("testing")
        errors?: Azure.Core.Foundations.InnerError;
       }
      `;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `AOutput`,
          additionalInputContent: `
        /** testing */
        export interface A{
          /** testing */
          errors?: InnerError;
        }
        `,
          additionalOutputContent: `
          /** testing */
          export interface AOutput{
            /** testing */
            errors?: InnerError;
          }
          `
        },
        true,
        `import { InnerError } from "@azure-rest/core-client"`
      );
    });

    it("Azure.Core.Foundations.Error -> ErrorModel", async () => {
      const tspDefinition = `
      @doc("testing")
      model A {
        @doc("testing")
        errors?: Azure.Core.Foundations.Error;
       }
      `;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `AOutput`,
          additionalInputContent: `
        /** testing */
        export interface A{
          /** testing */
          errors?: ErrorModel;
        }
        `,
          additionalOutputContent: `
          /** testing */
          export interface AOutput{
            /** testing */
            errors?: ErrorModel;
          }
          `
        },
        true,
        `import { ErrorModel } from "@azure-rest/core-client"`
      );
    });

    it("Azure.Core.Foundations.Error[] -> Array<ErrorModel>", async () => {
      const tspDefinition = `
      @doc("testing")
      model A {
        @doc("testing")
        errors?: Azure.Core.Foundations.Error[];
       }
      `;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `AOutput`,
          additionalInputContent: `
        /** testing */
        export interface A{
          /** testing */
          errors?: Array<ErrorModel>;
        }
        `,
          additionalOutputContent: `
          /** testing */
          export interface AOutput{
            /** testing */
            errors?: Array<ErrorModel>;
          }
          `
        },
        true,
        `import { ErrorModel } from "@azure-rest/core-client"`
      );
    });

    it("Record<Azure.Core.Foundations.Error> -> Record<ErrorModel>", async () => {
      const tspDefinition = `
      @doc("testing")
      model A {
        @doc("testing")
        errors?: Record<Azure.Core.Foundations.Error>;
       }
      `;
      const tspType = "A";
      const inputModelName = "A";
      await verifyPropertyType(
        tspType,
        inputModelName,
        {
          additionalTypeSpecDefinition: tspDefinition,
          outputType: `AOutput`,
          additionalInputContent: `
        /** testing */
        export interface A{
          /** testing */
          errors?: Record<string, ErrorModel>
        }
        `,
          additionalOutputContent: `
          /** testing */
          export interface AOutput{
            /** testing */
            errors?: Record<string, ErrorModel>
          }
          `
        },
        true,
        `import { ErrorModel } from "@azure-rest/core-client"`
      );
    });
  });

  describe("operation templates", () => {
    it("should generate models correctly for operation with service traits templates", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@typespec/versioning";
      import "@azure-tools/typespec-azure-core";
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using TypeSpec.Versioning;
      using Azure.Core;
      using Azure.Core.Traits;
      using Azure.Core.Foundations;
      
      @service({
        title: "Defender EASM",
      })
      @doc("Contoso Resource Provider management API.")
      @useDependency(Versions.v1_0_Preview_1)
      namespace Microsoft.ContosoProviderHub;
      alias ServiceTraits = NoRepeatableRequests &
        NoConditionalRequests &
        NoClientRequestId;
      
      alias Operations = Azure.Core.ResourceOperations<ServiceTraits>;
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      @discriminator("kind")
      model DataConnectionData {
        @doc("The name of data connection")
        name?: string;
      
        @doc("The day to update the data connection on. (1-7 for weekly, 1-31 for monthly)")
        frequencyOffset?: int32;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model LogAnalyticsDataConnectionData extends DataConnectionData {
        @doc("The kind of DataConnectionData")
        kind: "logAnalytics";
      
        @doc("logAnalyticsProperty1 property")
        logAnalyticsProperty1: int64;
      
        @doc("logAnalyticsProperty2 propery")
        logAnalyticsProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model AzureDataExplorerDataConnectionData extends DataConnectionData {
        @doc("The kind of DataConnectionData")
        kind: "azureDataExplorer";
      
        azureDataExplorerProperty1: int32;
        azureDataExplorerProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      @discriminator("kind")
      @resource("dataConnections")
      model DataConnection {
        @doc("The system generated unique id for the resource.")
        id?: string;
      
        @doc("The caller provided unique name for the resource.")
        @key("dataConnectionName")
        @visibility("read")
        name: string;
      
        @doc("The name that can be used for display purposes.")
        displayName?: string;
      
        @doc("The date the data connection was created.")
        @visibility("read")
        createdDate?: utcDateTime;
      
        @doc("The day to update the data connection on.")
        frequencyOffset?: int32;
      
        @doc("The date the data connection was last updated.")
        @visibility("read")
        updatedDate?: utcDateTime;
      
        @doc("The date the data connection was last updated by user.")
        @visibility("read")
        userUpdatedAt?: utcDateTime;
      
        @doc("An indicator of whether the data connection is active.")
        active?: boolean;
      
        @doc("A message that specifies details about data connection if inactive.")
        @visibility("read")
        inactiveMessage?: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model LogAnalyticsDataConnection extends DataConnection {
        @doc("The kind of DataConnection")
        kind: "logAnalytics";
      
        @doc("logAnalyticsProperty1 property")
        logAnalyticsProperty1: int64;
      
        @doc("logAnalyticsProperty2 property")
        logAnalyticsProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model AzureDataExplorerDataConnection extends DataConnection {
        @doc("The kind of DataConnection")
        kind: "azureDataExplorer";
      
        azureDataExplorerProperty1: int32;
        azureDataExplorerProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model ValidateResult {
        @doc("This is the top-level error object whose code matches the x-ms-error-code response header.")
        error?: Error;
      }
      
      interface DataConnections {
        @doc("Validate a data connection with a given dataConnectionName.")
        @action("validate")
        validateDataConnection is Operations.ResourceCollectionAction<
          DataConnection,
          DataConnectionData,
          ValidateResult
        >;
      }
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        true,
        true,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      // console.log(inputModelFile?.content);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface DataConnectionDataParent {
          /** The name of data connection */
          name?: string;
          /** The day to update the data connection on. (1-7 for weekly, 1-31 for monthly) */ 
          frequencyOffset?: number;
          kind: string;
        }
        export interface LogAnalyticsDataConnectionData
          extends DataConnectionDataParent {
          /** The kind of DataConnectionData */ 
          kind: "logAnalytics";
          /** logAnalyticsProperty1 property */ 
          logAnalyticsProperty1: number;
          /** logAnalyticsProperty2 propery */ 
          logAnalyticsProperty2: string;
        }
        export interface AzureDataExplorerDataConnectionData
          extends DataConnectionDataParent {
          /** The kind of DataConnectionData */ 
          kind: "azureDataExplorer";
          azureDataExplorerProperty1: number;
          azureDataExplorerProperty2: string;
        }
        export type DataConnectionData =
          | DataConnectionDataParent
          | LogAnalyticsDataConnectionData
          | AzureDataExplorerDataConnectionData;
        `,
        true
      );

      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        import { ErrorModel } from "@azure-rest/core-client";
        export interface ValidateResultOutput {
          /** This is the top-level error object whose code matches the x-ms-error-code response header. */ 
          error?: ErrorModel;
        }
        `,
        true
      );
    });

    it("should generate models correctly for operation with foundation templates", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@typespec/versioning";
      import "@azure-tools/typespec-azure-core";
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using TypeSpec.Versioning;
      using Azure.Core;
      using Azure.Core.Traits;
      using Azure.Core.Foundations;
      
      @service({
        title: "Defender EASM",
      })
      @doc("Contoso Resource Provider management API.")
      @useDependency(Versions.v1_0_Preview_1)
      namespace Microsoft.ContosoProviderHub;
      alias ServiceTraits = NoRepeatableRequests &
        NoConditionalRequests &
        NoClientRequestId;
      
      alias Operations = Azure.Core.ResourceOperations<ServiceTraits>;
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      @discriminator("kind")
      model DataConnectionData {
        @doc("The name of data connection")
        name?: string;
      
        @doc("The day to update the data connection on. (1-7 for weekly, 1-31 for monthly)")
        frequencyOffset?: int32;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model LogAnalyticsDataConnectionData extends DataConnectionData {
        @doc("The kind of DataConnectionData")
        kind: "logAnalytics";
      
        @doc("logAnalyticsProperty1 property")
        logAnalyticsProperty1: int64;
      
        @doc("logAnalyticsProperty2 propery")
        logAnalyticsProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model AzureDataExplorerDataConnectionData extends DataConnectionData {
        @doc("The kind of DataConnectionData")
        kind: "azureDataExplorer";
      
        azureDataExplorerProperty1: int32;
        azureDataExplorerProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      @discriminator("kind")
      @resource("dataConnections")
      model DataConnection {
        @doc("The system generated unique id for the resource.")
        id?: string;
      
        @doc("The caller provided unique name for the resource.")
        @key("dataConnectionName")
        @visibility("read")
        name: string;
      
        @doc("The name that can be used for display purposes.")
        displayName?: string;
      
        @doc("The date the data connection was created.")
        @visibility("read")
        createdDate?: utcDateTime;
      
        @doc("The day to update the data connection on.")
        frequencyOffset?: int32;
      
        @doc("The date the data connection was last updated.")
        @visibility("read")
        updatedDate?: utcDateTime;
      
        @doc("The date the data connection was last updated by user.")
        @visibility("read")
        userUpdatedAt?: utcDateTime;
      
        @doc("An indicator of whether the data connection is active.")
        active?: boolean;
      
        @doc("A message that specifies details about data connection if inactive.")
        @visibility("read")
        inactiveMessage?: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model LogAnalyticsDataConnection extends DataConnection {
        @doc("The kind of DataConnection")
        kind: "logAnalytics";
      
        @doc("logAnalyticsProperty1 property")
        logAnalyticsProperty1: int64;
      
        @doc("logAnalyticsProperty2 property")
        logAnalyticsProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model AzureDataExplorerDataConnection extends DataConnection {
        @doc("The kind of DataConnection")
        kind: "azureDataExplorer";
      
        azureDataExplorerProperty1: int32;
        azureDataExplorerProperty2: string;
      }
      
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "Documentation will be added next preview version"
      model ValidateResult {
        @doc("This is the top-level error object whose code matches the x-ms-error-code response header.")
        error?: Error;
      }
      
      interface DataConnections {
        #suppress "@azure-tools/typespec-azure-core/use-standard-operations"
        @doc("Create or replace a data connection with a given dataConnectionName.")
        @createsOrReplacesResource(DataConnection)
        @put
        createOrReplaceDataConnection is Foundations.ResourceOperation<
          DataConnection,
          DataConnectionData,
          DataConnection
        >;
      }
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        true,
        true,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      // console.log(inputModelFile?.content);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        export interface DataConnectionDataParent {
          /** The name of data connection */
          name?: string;
          /** The day to update the data connection on. (1-7 for weekly, 1-31 for monthly) */ 
          frequencyOffset?: number;
          kind: string;
        }
        export interface LogAnalyticsDataConnectionData
          extends DataConnectionDataParent {
          /** The kind of DataConnectionData */ 
          kind: "logAnalytics";
          /** logAnalyticsProperty1 property */ 
          logAnalyticsProperty1: number;
          /** logAnalyticsProperty2 propery */ 
          logAnalyticsProperty2: string;
        }
        export interface AzureDataExplorerDataConnectionData
          extends DataConnectionDataParent {
          /** The kind of DataConnectionData */ 
          kind: "azureDataExplorer";
          azureDataExplorerProperty1: number;
          azureDataExplorerProperty2: string;
        }
        export type DataConnectionData =
          | DataConnectionDataParent
          | LogAnalyticsDataConnectionData
          | AzureDataExplorerDataConnectionData;
        `,
        true
      );

      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        outputModelFile?.content!,
        `
        export interface DataConnectionOutputParent {
          /** The system generated unique id for the resource. */ 
          id?: string;
          /** The caller provided unique name for the resource. */ 
          readonly name: string;
          /** The name that can be used for display purposes. */ 
          displayName?: string;
          /** The date the data connection was created. */ 
          readonly createdDate?: string;
          /** The day to update the data connection on. */ 
          frequencyOffset?: number;
          /** The date the data connection was last updated. */ 
          readonly updatedDate?: string;
          /** The date the data connection was last updated by user. */ 
          readonly userUpdatedAt?: string;
          /** An indicator of whether the data connection is active. */ 
          active?: boolean;
          /** A message that specifies details about data connection if inactive. */ 
          readonly inactiveMessage?: string;       
          kind: string;
        }
        export interface LogAnalyticsDataConnectionOutput
          extends DataConnectionOutputParent {
          /** The kind of DataConnection */ 
          kind: "logAnalytics";
          /** logAnalyticsProperty1 property */ 
          logAnalyticsProperty1: number;
          /** logAnalyticsProperty2 property */ 
          logAnalyticsProperty2: string;
        }
        export interface AzureDataExplorerDataConnectionOutput
          extends DataConnectionOutputParent {
          /** The kind of DataConnection */ 
          kind: "azureDataExplorer";
          azureDataExplorerProperty1: number;
          azureDataExplorerProperty2: string;
        }
        export type DataConnectionOutput =
          | DataConnectionOutputParent
          | LogAnalyticsDataConnectionOutput
          | AzureDataExplorerDataConnectionOutput;
        `,
        true
      );
    });
  });

  describe("should generate models for header parameters", () => {
    it("union variants with string literals being used in contentType headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      union SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("Content-Type") contentType: SchemaContentTypeValues,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        false,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(outputModelFile);
      assert.ok(inputModelFile?.content);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        /** Alias for SchemaContentTypeValues */
        export type SchemaContentTypeValues =
          | "application/json; serialization=Avro"
          | "application/json; serialization=json"
          | "text/plain; charset=utf-8"
          | "text/vnd.ms.protobuf";
        `
      );
    });

    it("named union with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      union SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("test-header") testHeader: SchemaContentTypeValues,
        @body body: string,
      ): { @header("test-header") testHeader: SchemaContentTypeValues };
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        false,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.ok(inputModelFile?.content);
      assert.ok(outputModelFile?.content);
      assert.strictEqual(inputModelFile?.path, "models.ts");
      assert.strictEqual(outputModelFile?.path, "outputModels.ts");
      await assertEqualContent(
        inputModelFile?.content!,
        `
        /** Alias for SchemaContentTypeValues */
        export type SchemaContentTypeValues =
          | "application/json; serialization=Avro"
          | "application/json; serialization=json"
          | "text/plain; charset=utf-8"
          | "text/vnd.ms.protobuf";
        `
      );
      await assertEqualContent(
        outputModelFile?.content!,
        `
        /** Alias for SchemaContentTypeValuesOutput */
        export type SchemaContentTypeValuesOutput =
          | "application/json; serialization=Avro"
          | "application/json; serialization=json"
          | "text/plain; charset=utf-8"
          | "text/vnd.ms.protobuf";
        `
      );

      const paramOutput = await emitParameterFromTypeSpec(
        tspDefinition,
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.path, "parameters.ts");
      await assertEqualContent(
        paramOutput?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
        import { SchemaContentTypeValues } from "./models";
        
        export interface GetHeaders {
          "test-header": SchemaContentTypeValues;
        }
        
        export interface GetBodyParam {
          body: string;
        }
        
        export interface GetHeaderParam {
          headers: RawHttpHeadersInput & GetHeaders;
        }
        
        export type GetParameters = GetHeaderParam & GetBodyParam & RequestParameters;
        `
      );
      const responseOutput = await emitResponsesFromTypeSpec(
        tspDefinition,
        false,
        true
      );
      assert.ok(responseOutput);
      assert.strictEqual(responseOutput?.path, "responses.ts");
      await assertEqualContent(
        responseOutput?.content!,
        `
        import { RawHttpHeaders } from "@azure/core-rest-pipeline";
        import { HttpResponse } from "@azure-rest/core-client";
        import { SchemaContentTypeValuesOutput } from "./outputModels";
        
        export interface Get204Headers {
          "test-header": SchemaContentTypeValuesOutput;
        }
        
        /** There is no content to send for this request, but the headers may be useful. */
        export interface Get204Response extends HttpResponse {
          status: "204";
          headers: RawHttpHeaders & Get204Headers;
        }
        `
      );
    });

    it("anonymous union with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      op get(
        @header("test-header") testHeader: "A" | "B",
        @body body: string,
      ): { @header("test-header") testHeader: "A" | "B" };
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        false,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(inputModelFile);
      assert.isUndefined(outputModelFile);
      const paramOutput = await emitParameterFromTypeSpec(
        tspDefinition,
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.path, "parameters.ts");
      await assertEqualContent(
        paramOutput?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface GetHeaders {
          "test-header": "A" | "B";
        }
        
        export interface GetBodyParam {
          body: string;
        }
        
        export interface GetHeaderParam {
          headers: RawHttpHeadersInput & GetHeaders;
        }
        
        export type GetParameters = GetHeaderParam & GetBodyParam & RequestParameters;
        `
      );
      const responseOutput = await emitResponsesFromTypeSpec(
        tspDefinition,
        false,
        true
      );
      assert.ok(responseOutput);
      assert.strictEqual(responseOutput?.path, "responses.ts");
      await assertEqualContent(
        responseOutput?.content!,
        `
        import { RawHttpHeaders } from "@azure/core-rest-pipeline";
        import { HttpResponse } from "@azure-rest/core-client";
        
        export interface Get204Headers {
          "test-header": "A" | "B";
        }
        
        /** There is no content to send for this request, but the headers may be useful. */
        export interface Get204Response extends HttpResponse {
          status: "204";
          headers: RawHttpHeaders & Get204Headers;
        }
        `
      );
    });

    it("extensible enums with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      
      enum SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("test-header") testHeader: SchemaContentTypeValues,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        false,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(outputModelFile);
      assert.isUndefined(inputModelFile);
    });

    it("fixed enums with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-azure-core";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using Azure.Core;
      
      @fixed
      enum SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("test-header") testHeader: SchemaContentTypeValues,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        true,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(outputModelFile);
      assert.isUndefined(inputModelFile);
      const paramOutput = await emitParameterFromTypeSpec(
        tspDefinition,
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.path, "parameters.ts");
      await assertEqualContent(
        paramOutput?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface GetHeaders {
          "test-header":
            | "application/json; serialization=Avro"
            | "application/json; serialization=json"
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
        }
        
        export interface GetBodyParam {
          body: string;
        }
        
        export interface GetHeaderParam {
          headers: RawHttpHeadersInput & GetHeaders;
        }
        
        export type GetParameters = GetHeaderParam & GetBodyParam & RequestParameters;
        `
      );
    });

    it("fixed enums with string literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-azure-core";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using Azure.Core;
      
      @fixed
      enum SchemaContentTypeValues {
        avro: "application/json; serialization=Avro",
        json: "application/json; serialization=json",
        custom: "text/plain; charset=utf-8",
        protobuf: "text/vnd.ms.protobuf",
      }
      
      op get(
        @header("test-header") testHeader: SchemaContentTypeValues,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        true,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(outputModelFile);
      assert.isUndefined(inputModelFile);
      const paramOutput = await emitParameterFromTypeSpec(
        tspDefinition,
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.path, "parameters.ts");
      await assertEqualContent(
        paramOutput?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface GetHeaders {
          "test-header":
            | "application/json; serialization=Avro"
            | "application/json; serialization=json"
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
        }
        
        export interface GetBodyParam {
          body: string;
        }
        
        export interface GetHeaderParam {
          headers: RawHttpHeadersInput & GetHeaders;
        }
        
        export type GetParameters = GetHeaderParam & GetBodyParam & RequestParameters;
        `
      );
    });

    it("fixed enums with number literals being used in regular headers", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-azure-core";

      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using Azure.Core;
      
      @fixed
      enum EnumTest  {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
      }
      
      op get(
        @header("test-header") testHeader: EnumTest,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModelsFromTypeSpec(
        tspDefinition,
        true,
        false,
        true
      );
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assert.isUndefined(outputModelFile);
      assert.isUndefined(inputModelFile);
      const paramOutput = await emitParameterFromTypeSpec(
        tspDefinition,
        false,
        false,
        false,
        true
      );
      assert.ok(paramOutput);
      assert.strictEqual(paramOutput?.path, "parameters.ts");
      await assertEqualContent(
        paramOutput?.content!,
        `
        import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
        import { RequestParameters } from "@azure-rest/core-client";
        
        export interface GetHeaders {
          "test-header": 1 | 2 | 3 | 4;
        }
        
        export interface GetBodyParam {
          body: string;
        }
        
        export interface GetHeaderParam {
          headers: RawHttpHeadersInput & GetHeaders;
        }
        
        export type GetParameters = GetHeaderParam & GetBodyParam & RequestParameters;
        `
      );
    });

    it("unable to serialized type header would report diagnostic", async () => {
      try {
        const tspContent = `
        import "@typespec/http";
        import "@typespec/rest";
  
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        model SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;

        const schemaOutput = await emitModelsFromTypeSpec(
          tspContent,
          false,
          false,
          true,
          true
        );
        assert.ok(schemaOutput);
        const { inputModelFile, outputModelFile } = schemaOutput!;
        assert.ok(inputModelFile);
        assert.isUndefined(outputModelFile);
        const paramOutput = await emitParameterFromTypeSpec(
          tspContent,
          false,
          false,
          false,
          true,
          true
        );
        assert.ok(paramOutput);
        assert.fail("Should throw diagnostic warnings");
      } catch (e) {
        const diagnostics = e as Diagnostic[];
        assert.equal(diagnostics.length, 1);
        assert.equal(
          diagnostics[0]?.code,
          "@azure-tools/typespec-ts/unable-serialized-type"
        );
        assert.equal(diagnostics[0]?.severity, "warning");
      }
    });
  });
});
