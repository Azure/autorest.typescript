import {
  RLCModel,
  buildSchemaObjectMap,
  mockParameterTypeValue
} from "@azure-tools/rlc-common";
import { emitSchemasFromTypeSpec } from "../../util/emitUtil.js";
import { assert } from "chai";

describe("Integration test for mocking sample", () => {
  describe("request body", () => {
    it("string", async () => {
      const schemaMap = await emitSchemasFromTypeSpec(`
        op getModel(@body input: string): void;
      `);
      const mockStr = mockParameterTypeValue(
        "string",
        "input",
        buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
      );
      assert.strictEqual(mockStr, `'{Your input}'`);
    });

    it("boolean", async () => {
      const schemaMap = await emitSchemasFromTypeSpec(`
        op getModel(@body input: boolean): void;
      `);
      const mockStr = mockParameterTypeValue(
        "boolean",
        "prop",
        buildSchemaObjectMap({ schemas: schemaMap } as RLCModel),
        new Set()
      );
      assert.strictEqual(mockStr, `true`);
    });

    it("string[]", async () => {
      const schemaMap = await emitSchemasFromTypeSpec(`
        op getModel(@body input: string[]): void;
      `);
      const mockStr = mockParameterTypeValue(
        "string[]",
        "prop",
        buildSchemaObjectMap({ schemas: schemaMap } as RLCModel),
        new Set()
      );
      assert.strictEqual(mockStr, `['{Your prop}']`);
    });

    it("simple model", async () => {
      const schemaMap = await emitSchemasFromTypeSpec(`
      model Test {
        prop: string;
      }
      @route("/models")
      @get
      op getModel(@body input: Test): Test;
      `);
      const mockStr = mockParameterTypeValue(
        "Test",
        "input",
        buildSchemaObjectMap({ schemas: schemaMap } as RLCModel),
        new Set()
      );
      assert.strictEqual(mockStr, `{"prop": '{Your prop}'}`);
    });

    describe("complex model", () => {
      it("self-referenced model", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model A {
          foo: B[];
        }
        model B {
          bar: A;
        }
        model Test {
          selfReferenced: B;
        }
        op getModel(@body input: Test): void;
        `,
          true
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        // console.log(mockStr);
        assert.deepEqual(
          mockStr,
          `{"selfReferenced": {"bar": {"foo": [{} as any /**FIXME */]}}}`
        );
      });

      it("primitives", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model Test {
          // primitives
          stringLiteral: "string literal";
          booleanLiteral: true;
          numberLiteral: 1;
          offsetDate: offsetDateTime;
          nullable: null;
          nullableString: string | null;
          unknownValue: unknown;
        }
        op getModel(@body input: Test): void;
        `
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        // console.log(mockStr);
        const res = {
          stringLiteral: "string literal",
          booleanLiteral: true,
          numberLiteral: 1,
          offsetDate: "{Your offsetDate}",
          nullable: null,
          nullableString: "{Your nullableString}",
          unknownValue: "Unknown Type"
        };
        assert.isNotNull(mockStr);
        assert.deepEqual(JSON.parse(mockStr!), res);
      });

      it("date", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model Test {
          date: utcDateTime;
        }
        op getModel(@body input: Test): void;
        `
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        assert.deepEqual(mockStr, `{"date": new Date()}`);
      });

      it("enum", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        @fixed
        enum FixedEnum {
          English,
          Chinese,
        }

        @doc("Translation Language Values")
        enum ExtensibleEnum {
          English,
          Chinese,
        }
        model Test {
          fixedEnum: FixedEnum;
          extensibleEnum: ExtensibleEnum;
        }
        op getModel(@body input: Test): void;
        `,
          true
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        const res = {
          fixedEnum: "English",
          extensibleEnum: "{Your extensibleEnum}"
        };
        assert.deepEqual(JSON.parse(mockStr!), res);
      });

      it("array", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model A {
          foo: string;
        }
        model B {
          bar: string;
        }
        model Test {
          objectArray: A[];
          complexArray: (A | B | string)[];
          simpleArray: string[];
          recordArray: Record<string>[];
        }
        op getModel(@body input: Test): void;
        `,
          true
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        const res = {
          simpleArray: ["{Your simpleArray}"],
          objectArray: [{ foo: "{Your foo}" }],
          complexArray: [{ foo: "{Your foo}" }],
          recordArray: [{ key: "{Your recordArray}" }]
        };
        // console.log(mockStr);
        assert.deepEqual(JSON.parse(mockStr!), res);
      });

      it("union", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model A {
          foo: string;
        }
        model B {
          bar: string;
        }
        model Test {
          modelUnion: A | B;
          stringUnion: "string1" | "string2";
          complexUnion: "string1" | 1 | true | A;
          unionOfUnion: (A | B) | (1 | 2);
        }
        op getModel(@body input: Test): void;
        `,
          true
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        const res = {
          modelUnion: { foo: "{Your foo}" },
          stringUnion: "string1",
          complexUnion: "string1",
          unionOfUnion: { foo: "{Your foo}" }
        };
        // console.log(mockStr);
        assert.deepEqual(JSON.parse(mockStr!), res);
      });

      it("record", async () => {
        const schemaMap = await emitSchemasFromTypeSpec(
          `
        model A {
          foo: string;
        }
        model B {
          bar: string;
        }
        model Test {
          pro: B;
          simpleRecord: Record<string>;
          objectRecord: Record<A>;
          complexRecord: Record<B | A | string>;
          recordOfRecord: Record<Record<string>>;
        }
        op getModel(@body input: Test): void;
        `,
          true
        );
        const mockStr = mockParameterTypeValue(
          "Test",
          "input",
          buildSchemaObjectMap({ schemas: schemaMap } as RLCModel)
        );
        assert.isNotNull(mockStr);
        const res = {
          pro: { bar: "{Your bar}" },
          simpleRecord: { key: "{Your simpleRecord}" },
          objectRecord: { key: { foo: "{Your foo}" } },
          complexRecord: { key: { bar: "{Your bar}" } },
          recordOfRecord: { key: { key: "{Your recordOfRecord}" } }
        };
        // console.log(mockStr);
        assert.deepEqual(JSON.parse(mockStr!), res);
      });
    });
  });
});
