import { ObjectSchema } from "@azure-tools/rlc-common";
import { emitSchemasFromTypeSpec } from "../../util/emitUtil.js";
import { assert } from "chai";

describe("#transformSchemas", () => {
  describe("verify first property", () => {
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
    it("generate string type", async () => {
      const property = await verifyFirstProperty("string");
      assert.isNotNull(property);
      assert.strictEqual(property!.type, "string");
    });

    it("generate number type", async () => {
      const property = await verifyFirstProperty("int32");
      assert.isNotNull(property);
      assert.strictEqual(property!.type, "number");
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
    });
  });
});
