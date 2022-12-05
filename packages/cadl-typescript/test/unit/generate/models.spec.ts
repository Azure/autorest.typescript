import { assert } from "chai";
import { emitModelsFromCadl, emitParameterFromCadl } from "../emitUtil.js";
import { assertEqualContent } from "../testUtil.js";

type VerifyPropertyConfig = {
  additionalCadlDefinition?: string;
  outputType?: string;
  additionalInputContent?: string;
  additionalOutputContent?: string;
};

describe("Input/output model type", () => {
  it("shouldn't generate models if there is no operations", async () => {
    const schemaOutput = await emitModelsFromCadl(`
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
    const schemaOutput = await emitModelsFromCadl(`
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
    it("should handle extensible_enum as property -> string", async () => {
      // When extensible_enum is comsumed as body property it should be string only
      const schemaOutput = await emitModelsFromCadl(`
      @knownValues(TranslationLanguageValues)
      @doc("Extensible enum model description")
      model TranslationLanguage is string;
      enum TranslationLanguageValues {
        English,
        Chinese,
      }
      model InputOutputModel {
        @doc("Property description")
        prop: TranslationLanguage;
      }
      @route("/models")
      @get
      op getModel(@body input: InputOutputModel): InputOutputModel;
      `);
      assert.ok(schemaOutput);
      const { inputModelFile, outputModelFile } = schemaOutput!;
      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface InputOutputModel {
        /**
         * Property description
         *
         * Possible values: English, Chinese
         */
        prop: string;
      }`
      );
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface InputOutputModelOutput {
        /**
         * Property description
         *
         * Possible values: English, Chinese
         */
        prop: string;
      }`
      );
    });
    it("should handle extensible_enum as body -> string", async () => {
      // When extensible_enum is comsumed as body property it should be string only
      const schemaOutput = await emitParameterFromCadl(`
      @knownValues(TranslationLanguageValues)
      model TranslationLanguage is string;
      enum TranslationLanguageValues {
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
      assertEqualContent(
        schemaOutput?.content!,
        `
      import { RequestParameters } from "@azure-rest/core-client";
      
      export interface GetModelBodyParam {
        /** Possible values: English, Chinese */
        body: string;
      }
      
      export type GetModelParameters = GetModelBodyParam & RequestParameters;`
      );
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

    it("should handle type_literals:boolean -> boolean_literals", async () => {
      const cadlType = `true`;
      const typeScriptType = `true`;
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle string -> string", async () => {
      const cadlType = "string";
      const typeScriptType = "string";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle never -> never", async () => {
      const cadlType = "never";
      const typeScriptType = "never";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle unknown -> unknown", async () => {
      const cadlType = "unknown";
      const typeScriptType = "unknown";
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

    it("should handle plainDate[] -> input 'Date[] | string[]' output type 'string[]'", async () => {
      const cadlType = "plainDate[]";
      const inputType = "Date[] | string[]";
      const outputType = "string[]";
      await verifyPropertyType(cadlType, inputType, { outputType });
    });

    it("should handle true[] -> true[]", async () => {
      const cadlType = "true[]";
      const typeScriptType = "true[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle 32[] -> 32[]", async () => {
      const cadlType = "32[]";
      const typeScriptType = "32[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle 'job'[] -> 'job'[]", async () => {
      const cadlType = `"job"[]`;
      const typeScriptType = `"job"[]`;
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle unknown[] -> unknown[]", async () => {
      const cadlType = "unknown[]";
      const typeScriptType = "unknown[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });
  });
  describe("array models generation", () => {
    it("should handle SimpleModel[] -> Array<SimpleModel>", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const cadlType = "SimpleModel[]";
      const inputModelName = "Array<SimpleModel>";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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

    it("should handle enum array", async () => {
      const cadlDefinition = `
      enum DiskEncryptionTarget {
        OsDisk: "osdisk",
        TemporaryDisk: "temporarydisk",
      }
      `;
      const cadlType = "DiskEncryptionTarget[]";
      const typeScriptType = `("osdisk" | "temporarydisk")[]`;
      const inputModelName = typeScriptType;
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: typeScriptType,
      });
    });
  });
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

    it.skip("should handle anonymous model -> effective type/interface", async () => {
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

    describe("inheritance & polymorphism", () => {
      it("should handle inheritance model -> multiple types/interfaces", async () => {
        const schemaOutput = await emitModelsFromCadl(`
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
          export interface PetOutputParent {
            name: string;
            weight?: number;
            "kind": "Pet" | "cat" | "dog";
          }
  
          export interface CatOutput extends PetOutputParent {
            kind: "cat";
            meow: number;
          }
  
          export interface DogOutput extends PetOutputParent {
            kind: "dog";
            bark: string;
          }
  
          export type PetOutput = CatOutput | DogOutput;`
        );
      });

      it("should handle multiple inheritance model -> multiple types/interfaces", async () => {
        const schemaOutput = await emitModelsFromCadl(`
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
        assertEqualContent(
          outputModelFile?.content!,
          `
        /** This is base model for polymorphic multiple levels inheritance with a discriminator. */
        export interface FishOutputParent {
          age: number;
          kind: "Fish" | "shark" | "salmon";
        }
        
        /** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
        export interface SharkOutputParent extends FishOutputParent {
          kind: "shark";
          sharktype: "Shark" | "saw" | "goblin";
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
        export type FishOutput = SharkOutput | SalmonOutput;
        /** The second level model in polymorphic multiple levels inheritance and it defines a new discriminator. */
        export type SharkOutput = SawSharkOutput | GoblinSharkOutput;
        `
        );
      });

      it("should handle basic model with special words -> type/interface", async () => {
        const cadlDefinition = `
        model SimpleModel {
          "model.kind": "derived";
          "derived.name": string;
        }`;
        const cadlType = "SimpleModel";
        const inputModelName = "SimpleModel";
        await verifyPropertyType(cadlType, inputModelName, {
          additionalCadlDefinition: cadlDefinition,
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
        const cadlDefinition = `
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
        const cadlType = "DerivedModel";
        const inputModelName = "DerivedModel";
        await verifyPropertyType(cadlType, inputModelName, {
          additionalCadlDefinition: cadlDefinition,
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
            "model.kind": "BaseModel" | "derived";
          }
  
          /** This is a base model has discriminator name containing dot. */
          export type BaseModel = ${inputModelName};
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
            "model.kind": "BaseModel" | "derived";
          }
  
          /** This is a base model has discriminator name containing dot. */
          export type BaseModelOutput = ${inputModelName}Output;
          `
        });
      });
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
    it("should handle zonedDateTime -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("zonedDateTime", inputType, {
        outputType
      });
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
  });

  describe("Record Model generation", () => {
    it("should handle Record<SimpleModel> -> Record<string, SimpleModel>", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: string;
        prop2: int32;
      }
      `;
      const cadlType = "Record<SimpleModel>";
      const inputModelName = "Record<string, SimpleModel>";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
      const cadlDefinition = `
      model SimpleModel {
        @visibility("read")
        prop: int32;
        prop1: int32;
      }
      `;
      const cadlType = `SimpleModel`;
      const inputModelName = "SimpleModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
