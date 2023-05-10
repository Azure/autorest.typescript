import { assert } from "chai";
import { emitModelsFromCadl, emitParameterFromCadl } from "./util/emitUtil.js";
import { assertEqualContent } from "./util/testUtil.js";

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
    options?: VerifyPropertyConfig,
    needAzureCore: boolean = false
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
    const schemaOutput = await emitModelsFromCadl(
      `
    ${additionalCadlDefinition}
    #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
    model InputOutputModel {
      prop: ${cadlType};
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

  describe("null generation", async () => {
    it("should generate null only", async () => {
      const cadlType = "null";
      const typeScriptType = "null";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should generate nullable union", async () => {
      const cadlType = "string | null";
      const typeScriptType = "string | null";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should generate nullable array", async () => {
      const cadlDefinition = `
      alias nullableArray = int32 | null;`;
      const cadlType = "nullableArray[]";
      const typeScriptType = "(number | null)[]";
      await verifyPropertyType(cadlType, typeScriptType, {
        additionalCadlDefinition: cadlDefinition
      });
    });

    it("should generate nullable boolean dictionary", async () => {
      const cadlType = "Record<boolean | null>";
      const typeScriptType = "Record<string, boolean | null>";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should generate nullable model", async () => {
      const cadlDefinition = `
      model SimpleModel {
        color: "red" | "blue";
      }
      `;
      const cadlType = "SimpleModel | null";
      const typeScriptType = "SimpleModel | null";
      await verifyPropertyType(cadlType, typeScriptType, {
        additionalCadlDefinition: cadlDefinition,
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
      const cadlType = 'Record<"test" | null>';
      const typeScriptType = 'Record<string, "test" | null>';
      await verifyPropertyType(cadlType, typeScriptType);
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
      const schemaOutput = await emitModelsFromCadl(`
      @doc("Extensible enum model description")
      enum TranslationLanguageValues {
        English,
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
      #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
      @fixed
      enum TranslationLanguageValues {
        English,
        Chinese,
      }`;
      const cadlType = "TranslationLanguageValues";
      const typeScriptType = `"English" | "Chinese"`;
      await verifyPropertyType(
        cadlType,
        typeScriptType,
        {
          additionalCadlDefinition: cadlTypeDefinition
        },
        true
      );
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

    it("should handle never, its property will be ignored both in Input and Ouput model", async () => {
      const cadlDefinition = `
      model SimpleModel {
        prop1: never;
        prop2: never;
      }`;
      const cadlType = "SimpleModel";
      const inputModelName = "SimpleModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}Output`,
        additionalInputContent: `
        export interface ${inputModelName} {}`,
        additionalOutputContent: `
        export interface ${inputModelName}Output {}`
      });
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

    it("should handle unknown[] -> input 'unknown[]' output type 'any[]'", async () => {
      const cadlType = "unknown[]";
      const inputType = "unknown[]";
      const outputType = "any[]";
      await verifyPropertyType(cadlType, inputType, { outputType });
    });

    it("should handle unknown -> input 'unknown' output type 'any'", async () => {
      const cadlType = "unknown";
      const inputType = "unknown";
      const outputType = "any";
      await verifyPropertyType(cadlType, inputType, { outputType });
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

    it("should handle fixed enum array", async () => {
      const cadlDefinition = `
      #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      @fixed
      enum DiskEncryptionTarget {
        OsDisk: "osdisk",
        TemporaryDisk: "temporarydisk",
      }
      `;
      const cadlType = "DiskEncryptionTarget[]";
      const typeScriptType = `("osdisk" | "temporarydisk")[]`;
      const inputModelName = typeScriptType;
      await verifyPropertyType(
        cadlType,
        inputModelName,
        {
          additionalCadlDefinition: cadlDefinition,
          outputType: typeScriptType
        },
        true
      );
    });

    it("should handle extensible enum array", async () => {
      const cadlDefinition = `
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      enum DiskEncryptionTarget {
        OsDisk: "osdisk",
        TemporaryDisk: "temporarydisk",
      }
      `;
      const cadlType = "DiskEncryptionTarget[]";
      const typeScriptType = `string[]`;
      const inputModelName = typeScriptType;
      await verifyPropertyType(
        cadlType,
        inputModelName,
        {
          additionalCadlDefinition: cadlDefinition,
          outputType: typeScriptType
        },
        true
      );
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
        const schemaOutput = await emitModelsFromCadl(
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
        assertEqualContent(
          inputModelFile?.content!,
          `
        export interface SimpleModel { 
          "prop": number;
        }
        `
        );
        assertEqualContent(
          outputModelFile?.content!,
          `
        export interface SimpleModelOutput { 
          "prop": number;
        }
        `
        );
      });

      it("should handle duration with encode `iso8601`", async () => {
        const schemaOutput = await emitModelsFromCadl(
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
        assertEqualContent(
          inputModelFile?.content!,
          `
        export interface SimpleModel { 
          "prop": string;
        }
        `
        );
        assertEqualContent(
          outputModelFile?.content!,
          `
        export interface SimpleModelOutput { 
          "prop": string;
        }
        `
        );
      });
    });

    describe("as query parameter", () => {
      it("should handle duration without encode", async () => {
        const schemaOutput = await emitParameterFromCadl(`
        @route("/duration/query/default")
        @get
        op getModel(@query input: duration): NoContentResponse;
        `);
        assert.ok(schemaOutput);
        assertEqualContent(schemaOutput?.content!, buildParameterDef("string"));
      });

      it("should handle duration with encode `seconds`", async () => {
        const schemaOutput = await emitParameterFromCadl(
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
        assertEqualContent(schemaOutput?.content!, buildParameterDef("number"));
      });

      it("should handle duration with encode `iso8601`", async () => {
        const schemaOutput = await emitParameterFromCadl(
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
        assertEqualContent(schemaOutput?.content!, buildParameterDef("string"));
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

    it("should handle offsetDateTime  -> string in output model &  `Date | string` in input model", async () => {
      const inputType = "Date | string";
      const outputType = "string";
      await verifyPropertyType("offsetDateTime ", inputType, {
        outputType
      });
    });

    it("should handle datetime with encode `unixTimestamp`", async () => {
      const schemaOutput = await emitModelsFromCadl(
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
      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "createdAt": number;
      }
      `
      );
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "createdAt": number;
      }
      `
      );
    });

    it("should handle datetime with encode `rfc3339`", async () => {
      const schemaOutput = await emitModelsFromCadl(
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
      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface SimpleModel { 
        "createdAt": Date | string;
      }
      `
      );
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface SimpleModelOutput { 
        "createdAt": string;
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
      const cadlType = "Record<unknown>";
      const inputType = "Record<string, unknown>";
      const outputType = "Record<string, any>";
      await verifyPropertyType(cadlType, inputType, { outputType });
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

    it("should handle nullable optional/required parameter", async () => {
      const cadlDefinition = `
      model SimpleModel {
        foo?: string | null;
        bar: string | null;
        baz: string;
      }
      `;
      const cadlType = `SimpleModel`;
      const inputModelName = cadlType;
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
  describe("Union basic generation", () => {
    it("should handle string | integer -> string | number", async () => {
      const cadlType = "string | integer";
      const typeScriptType = "string | number";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle int32 | string -> number | string", async () => {
      const cadlType = "int32 | string";
      const typeScriptType = "number | string";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle float32[] | string[] -> number[] | string[]", async () => {
      const cadlType = "float32[] | string[]";
      const typeScriptType = "number[] | string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle boolean[] | string[] -> boolean[] | string[]", async () => {
      const cadlType = "boolean[] | string[]";
      const typeScriptType = "boolean[] | string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle true[] | string[] -> true[] | string[]", async () => {
      const cadlType = "true[] | string[]";
      const typeScriptType = "true[] | string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle 32[] | string[] -> 32[] | string[]", async () => {
      const cadlType = "32[] | string[]";
      const typeScriptType = "32[] | string[]";
      await verifyPropertyType(cadlType, typeScriptType);
    });

    it("should handle 'job'[] | string[] -> 'job'[] | string[]", async () => {
      const cadlType = `"job"[] | string[]`;
      const typeScriptType = `"job"[] | string[]`;
      await verifyPropertyType(cadlType, typeScriptType);
    });
  });

  describe("Union Models generation", () => {
    it("should handle named unions", async () => {
      const cadlDefinition = `
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
      const cadlType = "MyNamedUnion";
      const inputModelName = "MyNamedUnion";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
       
       export type MyNamedUnionOutput = Model1Output | Model2Output;`
      });
    });

    it("should handle named unions with null variant", async () => {
      const cadlDefinition = `
      @doc("The first one of the unioned model type.")
      model Model1 {
        prop1: int32;
      }
      
      @doc("The second one of the unioned model type.")
      model Model2 {
        prop2: int32;
      }
      
      union MyNamedUnion {
        one: Model1,
        two: Model2,
        three: null
      }
      `;
      const cadlType = "MyNamedUnion";
      const inputModelName = "MyNamedUnion";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `MyNamedUnionOutput`,
        additionalInputContent: `
        /** The first one of the unioned model type. */
        export interface Model1 {
          prop1: number;
        }
      
        /** The second one of the unioned model type. */
        export interface Model2 {
          prop2: number;
        }
       
        export type MyNamedUnion = Model1 | Model2 | null;`,
        additionalOutputContent: `
        /** The first one of the unioned model type. */
        export interface Model1Output {
          prop1: number;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2Output {
          prop2: number;
        }
       
       export type MyNamedUnionOutput = Model1Output | Model2Output | null;`
      });
    });

    it("should handle nullable named unions", async () => {
      const cadlDefinition = `
      @doc("The first one of the unioned model type.")
      model Model1 {
        prop1: int32;
      }
      
      @doc("The second one of the unioned model type.")
      model Model2 {
        prop2: int32;
      }
      
      union MyNamedUnion {
        one: Model1,
        two: Model2,
      }
      `;
      const cadlType = "MyNamedUnion | null";
      const inputModelName = "MyNamedUnion | null";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `MyNamedUnionOutput | null`,
        additionalInputContent: `
        /** The first one of the unioned model type. */
        export interface Model1 {
          prop1: number;
        }
      
        /** The second one of the unioned model type. */
        export interface Model2 {
          prop2: number;
        }
       
        export type MyNamedUnion = Model1 | Model2;`,
        additionalOutputContent: `
        /** The first one of the unioned model type. */
        export interface Model1Output {
          prop1: number;
        }
        
        /** The second one of the unioned model type. */
        export interface Model2Output {
          prop2: number;
        }
       
       export type MyNamedUnionOutput = Model1Output | Model2Output;`
      });
    });
  });

  describe("'is' keyword generation", () => {
    it("should handle A is B, only A is referenced", async () => {
      const cadlDefinition = `
      model B {
        "prop": string;
      }
      model A is B{
        "prop1": string;
      }`;
      const cadlType = "A";
      const inputModelName = "A";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
      const schemaOutput = await emitModelsFromCadl(`
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
      assertEqualContent(
        inputModelFile?.content!,
        `
      export interface A {
        "prop": string;
        "prop1": string;
    }
      `
      );
      assertEqualContent(
        outputModelFile?.content!,
        `
      export interface BOutput {
        "prop": string;
    }
      `
      );
    });

    it("should handle A is B, B is string", async () => {
      const cadlDefinition = `
      scalar MyStr extends string;`;
      const cadlType = "MyStr";
      const inputModelName = "string";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `${inputModelName}`
      });
    });
  });

  describe("@projectedName", () => {
    it("should generate projected json name for property", async () => {
      const cadlDefinition = `
      @doc("This is a Foo model.")
      model FooModel {
        @projectedName("json", "xJson")
        @projectedName("javascript", "MadeForTS")
        @projectedName("client", "NotToUseMeAsName") // Should be ignored
        x: int32;

        y: string;
      }
      `;
      const cadlType = "FooModel";
      const inputModelName = "FooModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
      const cadlDefinition = `
      @doc("This is a Foo model.")
      model FooModel {
        x: int32;
      }

      @@projectedName(FooModel.x, "client", "NotToUseMeAsName") // Should be ignored
      @@projectedName(FooModel.x, "javascript", "MadeForTS")
      @@projectedName(FooModel.x, "json", "xJson")
      `;
      const cadlType = "FooModel";
      const inputModelName = "FooModel";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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

    it("should generate projected model name over friendly name", async () => {
      const cadlDefinition = `
      @projectedName("javascript", "CustomProjectedModelTS")
      @projectedName("json", "CustomProjectedModel")
      @friendlyName("CustomFriendlyModel")
      @doc("This is a Foo model.")
      model FooModel {
        x: int32;
      }
      `;
      const cadlType = "FooModel";
      const inputModelName = "CustomProjectedModelTS";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
        outputType: `CustomProjectedModelTSOutput`,
        additionalInputContent: `
        /** This is a Foo model. */
        export interface CustomProjectedModelTS {
          x: number;
        }`,
        additionalOutputContent: `
        /** This is a Foo model. */
        export interface CustomProjectedModelTSOutput {
          x: number;
        }`
      });
    });
  });

  describe("@friendlyName for model", () => {
    it("should generate friendly name", async () => {
      const cadlDefinition = `
      @friendlyName("MyNameIsA")
      model A { }
      `;
      const cadlType = "A";
      const inputModelName = "MyNameIsA";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
      const cadlDefinition = `
      @friendlyName("{name}Model", Base)
      model Base { }

      @friendlyName("Templated{name}", T)
      model Templated<T> {
        prop: T;
      }

      model X is Templated<Base>{};
      `;
      const cadlType = "X";
      const inputModelName = "TemplatedBase";
      await verifyPropertyType(cadlType, inputModelName, {
        additionalCadlDefinition: cadlDefinition,
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
});
