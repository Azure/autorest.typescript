import {
  getStringForValue,
  MapperTypes
} from "../../../src/utils/valueHelpers";
import {
  BooleanSchema,
  SchemaType,
  NumberSchema,
  StringSchema,
  ByteArraySchema
} from "@autorest/codemodel";
import { assert } from "chai";

describe("ValueHelpers", () => {
  describe("getStringForValue", () => {
    it("converts a string value to a quoted string", () => {
      assert.strictEqual(
        getStringForValue(
          "red",
          new StringSchema("ColorString", "A color string.").type
        ),
        `"red"`
      );

      assert.strictEqual(getStringForValue("red", MapperTypes.String), `"red"`);
    });

    it("converts a string value to a non-quoted string", () => {
      assert.strictEqual(
        getStringForValue(
          "red",
          new StringSchema("ColorString", "A color string.").type,
          false
        ),
        "red"
      );

      assert.strictEqual(
        getStringForValue("red", MapperTypes.String, false),
        "red"
      );
    });

    it("converts a numeric value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(
          1,
          new NumberSchema("Número", "El número.", SchemaType.Number, 32).type
        ),
        1 as any
      );

      assert.strictEqual(getStringForValue(1, MapperTypes.Number), 1 as any);
    });

    it("converts a boolean value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(true, new BooleanSchema("Truth", "The truth.").type),
        true as any
      );

      assert.strictEqual(
        getStringForValue(true, MapperTypes.Boolean),
        true as any
      );
    });

    it("converts a string value to a ByteArray", () => {
      assert.strictEqual(
        getStringForValue(
          "Hello",
          new ByteArraySchema("ByteArray", "One Array").type
        ),
        `new Uint8Array("Hello")`
      );

      assert.strictEqual(
        getStringForValue("Hello", MapperTypes.ByteArray),
        `new Uint8Array("Hello")`
      );
    });

    it("converts an empty value to a ByteArray", () => {
      assert.strictEqual(
        getStringForValue(
          "",
          new ByteArraySchema("ByteArray", "One Array").type
        ),
        `new Uint8Array(0)`
      );

      assert.strictEqual(
        getStringForValue("", MapperTypes.ByteArray),
        `new Uint8Array(0)`
      );
    });
  });
});
