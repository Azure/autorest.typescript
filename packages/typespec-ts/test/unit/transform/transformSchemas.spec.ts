import { ObjectSchema } from "@azure-tools/rlc-common";
import { emitSchemasFromTypeSpec } from "../../util/emitUtil.js";
import { assert } from "chai";

describe("#transformSchemas", () => {
  async function verifyFirstProperty(tspType: string) {
    const schemaOutput = await emitSchemasFromTypeSpec(`
      model Test {
          prop: ${tspType};
      }
      @route("/models")
      @get
      op getModel(@body input: Test): Test;
    `);
    assert.isNotNull(schemaOutput);
    const first = schemaOutput?.[0] as ObjectSchema;
    assert.deepEqual(first.usage, ["input", "output"]);
    assert.strictEqual(first.name, "Test");
    assert.strictEqual(first.type, "object");
    return first.properties![`"prop"`];
  }
  describe("verify general property", () => {
    it("generate string type", async () => {
      const property = await verifyFirstProperty("string");
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "string",
        description: undefined,
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate number type", async () => {
      const property = await verifyFirstProperty("int32");
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "number",
        format: "int32",
        description: undefined,
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate boolean type", async () => {
      const property = await verifyFirstProperty("boolean");
      assert.isNotNull(property);
      assert.strictEqual(property!.type, "boolean");
    });

    it("generate date type", async () => {
      const property = await verifyFirstProperty("utcDateTime");
      assert.isNotNull(property);
      assert.strictEqual(property!.type, "string");
      assert.strictEqual(property!.typeName, "Date | string");
      assert.strictEqual(property!.outputTypeName, "string");
    });

    it("generate string array", async () => {
      const property = await verifyFirstProperty(`string[]`);
      assert.isNotNull(property);
      // console.log(property);
      assert.deepEqual(property, {
        type: "array",
        items: {
          type: "string",
          description: "A sequence of textual characters."
        },
        description: undefined,
        typeName: "string[]",
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("generate string literal array", async () => {
      const property = await verifyFirstProperty(`"sss"[]`);
      assert.isNotNull(property);
      // console.log(property);
      assert.deepEqual(property, {
        type: "array",
        items: {
          type: `"sss"`,
          isConstant: true
        },
        description: undefined,
        typeName: `"sss"[]`,
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("generate string literal record", async () => {
      const property = await verifyFirstProperty(`Record<"sss">`);
      assert.isNotNull(property);
      // console.log(property);
      assert.deepEqual(property, {
        type: "dictionary",
        outputTypeName: "Record<string, undefined>",
        outputValueTypeName: "undefined",
        valueTypeName: undefined,
        additionalProperties: {
          type: `"sss"`,
          isConstant: true
        },
        description: undefined,
        typeName: "Record<string, undefined>",
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("generate string literal", async () => {
      const property = await verifyFirstProperty(`"foo"`);
      assert.isNotNull(property);
      assert.strictEqual(property!.type, `"foo"`);
      assert.isUndefined(property!.typeName);
      assert.isUndefined(property!.outputTypeName);
      assert.strictEqual(property!.isConstant, true);
    });

    it("generate number literal", async () => {
      const property = await verifyFirstProperty(`1`);
      assert.isNotNull(property);
      assert.strictEqual(property!.type, `1`);
      assert.isUndefined(property!.typeName);
      assert.isUndefined(property!.outputTypeName);
      assert.strictEqual(property!.isConstant, true);
    });

    it("generate boolean literal", async () => {
      const property = await verifyFirstProperty(`true`);
      assert.isNotNull(property);
      assert.strictEqual(property!.type, `true`);
      assert.isUndefined(property!.typeName);
      assert.isUndefined(property!.outputTypeName);
      assert.strictEqual(property!.isConstant, true);
    });

    it("generate literal union", async () => {
      const property = await verifyFirstProperty(`true | "test" | 1`);
      assert.isNotNull(property);
      assert.strictEqual(property!.type, `union`);
      assert.strictEqual(property!.typeName, 'true | "test" | 1');
      assert.strictEqual(property!.outputTypeName, 'true | "test" | 1');
      assert.isUndefined(property!.isConstant);
      assert.strictEqual(property!.enum!.length, 3);
      assert.strictEqual(property!.enum![0].type, "true");
      assert.strictEqual(property!.enum![0].isConstant, true);
    });

    it("generate string literal union", async () => {
      const property = await verifyFirstProperty(`"a" | "test"`);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        enum: [
          { type: '"a"', isConstant: true },
          { type: '"test"', isConstant: true }
        ],
        type: "union",
        typeName: '"a" | "test"',
        outputTypeName: '"a" | "test"',
        required: true,
        usage: ["input", "output"],
        description: undefined
      } as any);
    });

    it("generate primitive union", async () => {
      const property = await verifyFirstProperty(
        `string | int32 | boolean | utcDateTime`
      );
      assert.isNotNull(property);
      // console.log(property);
      assert.deepEqual(property, {
        enum: [
          {
            type: "string",
            description: "A sequence of textual characters."
          },
          { type: "number", format: "int32" },
          { type: "boolean", description: undefined },
          {
            type: "string",
            format: undefined,
            description: undefined,
            typeName: "Date | string",
            outputTypeName: "string"
          }
        ],
        type: "union",
        typeName: "string | number | boolean | Date | string",
        outputTypeName: "string | number | boolean | string",
        required: true,
        usage: ["input", "output"],
        description: undefined
      } as any);
    });

    it("generate fixed enum", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
        @fixed
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          English,
          @doc("Chinese descriptions")
          Chinese,
        }
        model Test {
            prop: TranslationLanguageValues;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      // console.log(first, property, property?.enum);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: '"English" | "Chinese"',
        description: undefined,
        enum: [
          {
            "description": "English descriptions",
            "isConstant": true,
            "type": "\"English\""
          },
          {
            "description": "Chinese descriptions",
            "isConstant": true,
            "type": "\"Chinese\""
          }
        ],
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate extensible enum", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          English,
          @doc("Chinese descriptions")
          Chinese,
        }
        model Test {
            prop: TranslationLanguageValues;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: '"English" | "Chinese"',
        name: "string",
        typeName: "string",
        description: "Possible values: \"English\", \"Chinese\"",
        enum: [
          {
            "description": "English descriptions",
            "isConstant": true,
            "type": "\"English\""
          },
          {
            "description": "Chinese descriptions",
            "isConstant": true,
            "type": "\"Chinese\""
          }
        ],
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate enum member", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        @doc("Translation Language Values")
        enum TranslationLanguageValues {
          @doc("English descriptions")
          English,
          @doc("Chinese descriptions")
          Chinese,
        }
        model Test {
            prop: TranslationLanguageValues.English;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: '"English"',
        description: undefined,
        isConstant: true,
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate union model", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        model A {
          foo: string;
        }
        model B {
          bar: string;
        }
        model Test {
            prop: A | B;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      // console.log(first, property, property?.enum);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "union",
        outputTypeName: "AOutput | BOutput",
        typeName: "A | B",
        description: undefined,
        enum: [
          {
            name: "A",
            type: "object",
            description: "",
            typeName: "A",
            properties: {
              '"foo"': {
                description: undefined,
                required: true,
                type: "string",
                usage: ["input", "output"]
              }
            },
            outputTypeName: "AOutput",
            usage: ["input", "output"]
          },
          {
            name: "B",
            type: "object",
            description: "",
            typeName: "B",
            properties: {
              '"bar"': {
                description: undefined,
                required: true,
                type: "string",
                usage: ["input", "output"]
              }
            },
            outputTypeName: "BOutput",
            usage: ["input", "output"]
          }
        ],
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate array model", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        model A {
          foo: string;
        }
        model Test {
            prop: A[];
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      // console.log(first, property, property?.enum);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "array",
        outputTypeName: "Array<AOutput>",
        typeName: "Array<A>",
        description: undefined,
        items: {
          name: "A",
          type: "object",
          description: "",
          typeName: "A",
          properties: {},
          outputTypeName: "AOutput",
          usage: ["input", "output"]
        },
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate record model", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        model A {
          foo: string;
        }
        model Test {
            prop: Record<A>;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      // console.log(first, property, property?.enum);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "dictionary",
        outputTypeName: "Record<string, AOutput>",
        outputValueTypeName: "AOutput",
        typeName: "Record<string, A>",
        valueTypeName: "A",
        description: undefined,
        additionalProperties: {
          name: "A",
          type: "object",
          description: "",
          typeName: "A",
          properties: {},
          outputTypeName: "AOutput",
          usage: ["input", "output"]
        },
        required: true,
        usage: ["input", "output"]
      } as any);
    });

    it("generate record <union model>", async () => {
      const schemaOutput = await emitSchemasFromTypeSpec(
        `
        model A {
          foo: string;
        }
        model B {
          baz: string;
        }
        model Test {
            prop: Record<A | B>;
        }
        @route("/models")
        @get
        op getModel(@body input: Test): Test;
      `,
        true
      );
      assert.isNotNull(schemaOutput);
      const first = schemaOutput?.[0] as ObjectSchema;
      const property = first.properties![`"prop"`];
      // console.log(first, property, (property as any)?.additionalProperties);
      assert.isNotNull(property);
      assert.deepEqual(property, {
        type: "dictionary",
        outputTypeName: "Record<string, AOutput | BOutput>",
        typeName: "Record<string, A | B>",
        description: undefined,
        additionalProperties: {
          enum: [
            {
              name: "A",
              type: "object",
              description: "",
              typeName: "A",
              properties: {
                '"foo"': {
                  type: "string",
                  description: undefined,
                  required: true,
                  usage: ["input", "output"]
                }
              },
              outputTypeName: "AOutput",
              usage: ["input", "output"]
            },
            {
              name: "B",
              type: "object",
              description: "",
              typeName: "B",
              properties: {
                '"baz"': {
                  type: "string",
                  description: undefined,
                  required: true,
                  usage: ["input", "output"]
                }
              },
              outputTypeName: "BOutput",
              usage: ["input", "output"]
            }
          ],
          type: "union",
          typeName: "A | B",
          outputTypeName: "AOutput | BOutput"
        },
        required: true,
        usage: ["input", "output"]
      } as any);
    });
  });

  describe("verify anonymous model", () => {
    it("empty anonymous model", async () => {
      const property = await verifyFirstProperty("{}");
      // console.log(property);
      assert.deepEqual(property, {
        name: "",
        type: "unknown",
        description: undefined,
        typeName: "Record<string, unknown>",
        outputTypeName: "Record<string, any>",
        properties: {},
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("with simple types", async () => {
      const property = await verifyFirstProperty(`
      {
        /** Description for name */
        name: string;
    
        /** Description for arguments */
        arguments: string;
      }`);
      // console.log(property);
      assert.deepEqual(property, {
        name: "",
        type: "object",
        description: undefined,
        typeName: '{"name": string;"arguments": string;}',
        outputTypeName: '{"name": string;"arguments": string;}',
        properties: {
          '"name"': {
            type: "string",
            description: "Description for name",
            required: true,
            usage: ["input", "output"]
          },
          '"arguments"': {
            type: "string",
            description: "Description for arguments",
            required: true,
            usage: ["input", "output"]
          }
        },
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("with nested anonymous", async () => {
      const property = await verifyFirstProperty(`
      {
        name:  { foo: { bar: string; } };
      }`);
      // console.log(property);
      assert.deepEqual(property, {
        name: "",
        type: "object",
        description: undefined,
        typeName: '{"name": {"foo": {"bar": string;};};}',
        outputTypeName: '{"name": {"foo": {"bar": string;};};}',
        properties: {
          '"name"': {
            name: "",
            type: "object",
            description: undefined,
            typeName: '{"foo": {"bar": string;};}',
            outputTypeName: '{"foo": {"bar": string;};}',
            required: true,
            usage: ["input", "output"],
            properties: {
              '"foo"': {
                name: "",
                type: "object",
                description: undefined,
                typeName: '{"bar": string;}',
                outputTypeName: '{"bar": string;}',
                required: true,
                usage: ["input", "output"],
                properties: {
                  '"bar"': {
                    type: "string",
                    description: undefined,
                    required: true,
                    usage: ["input", "output"]
                  }
                }
              }
            }
          }
        },
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("with other models", async () => {
      const property = await verifyFirstProperty(`
      {
        name: Test;
      }`);
      // console.log(property);
      assert.deepEqual(property, {
        name: "",
        type: "object",
        description: undefined,
        typeName: '{"name": Test;}',
        outputTypeName: '{"name": TestOutput;}',
        properties: {
          '"name"': {
            name: "Test",
            type: "object",
            description: undefined,
            typeName: "Test",
            outputTypeName: "TestOutput",
            properties: {},
            usage: ["input", "output"],
            required: true
          }
        },
        usage: ["input", "output"],
        required: true
      } as any);
    });

    it("anonymous model array", async () => {
      const property = await verifyFirstProperty(`
      {
        /** Description for name */
        name: string;
      }[]`);
      // console.log(property);
      assert.deepEqual(property, {
        type: "array",
        description: undefined,
        typeName: '{"name": string;}[]',
        outputTypeName: '{"name": string;}[]',
        usage: ["input", "output"],
        required: true,
        items: {
          name: "",
          type: "object",
          description: "",
          typeName: '{"name": string;}',
          outputTypeName: '{"name": string;}',
          properties: {
            '"name"': {
              type: "string",
              description: "Description for name",
              required: true,
              usage: ["input", "output"]
            }
          },
          usage: ["input", "output"]
        }
      } as any);
    });

    it("anonymous model record", async () => {
      const property = await verifyFirstProperty(`
      Record<{
        /** Description for name */
        name: string;
      }>`);
      // console.log(property);
      assert.deepEqual(property, {
        type: "dictionary",
        description: undefined,
        typeName: 'Record<string, {"name": string;}>',
        valueTypeName: "",
        outputTypeName: 'Record<string, {"name": string;}>',
        outputValueTypeName: '{"name": string;}',
        usage: ["input", "output"],
        required: true,
        additionalProperties: {
          name: "",
          type: "object",
          description: "",
          typeName: '{"name": string;}',
          outputTypeName: '{"name": string;}',
          properties: {
            '"name"': {
              type: "string",
              description: "Description for name",
              required: true,
              usage: ["input", "output"]
            }
          },
          usage: ["input", "output"]
        }
      } as any);
    });

    it("anonymous model union", async () => {
      const property = await verifyFirstProperty(`
      {
        /** Description for name */
        name: string;
      } | null`);
      // console.log(property);
      assert.deepEqual(property, {
        type: "union",
        typeName: '{"name": string;} | null',
        outputTypeName: '{"name": string;} | null',
        required: true,
        usage: ["input", "output"],
        description: undefined,
        enum: [
          {
            name: "",
            type: "object",
            description: "",
            typeName: '{"name": string;}',
            outputTypeName: '{"name": string;}',
            properties: {
              '"name"': {
                type: "string",
                description: "Description for name",
                required: true,
                usage: ["input", "output"]
              }
            },
            usage: ["input", "output"]
          },
          { type: "null" }
        ]
      } as any);
    });
  });
});
