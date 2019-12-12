import { getStringForValue } from "../../../src/utils/valueHelpers";
import {
  BooleanSchema,
  SchemaType,
  NumberSchema,
  StringSchema
} from "@azure-tools/codemodel";
import * as assert from "assert";

describe("ValueHelpers", () => {
  describe("getStringForValue", () => {
    it("converts a string value to a quoted string", () => {
      assert.strictEqual(
        getStringForValue(
          "red",
          new StringSchema("ColorString", "A color string.")
        ),
        `"red"`
      );
    });

    it("converts a string value to a non-quoted string", () => {
      assert.strictEqual(
        getStringForValue(
          "red",
          new StringSchema("ColorString", "A color string."),
          false
        ),
        "red"
      );
    });

    it("converts a numeric value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(
          1,
          new NumberSchema("Número", "El número.", SchemaType.Number, 32)
        ),
        `1`
      );
    });

    it("converts a boolean value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(true, new BooleanSchema("Truth", "The truth.")),
        `true`
      );
    });
  });
});
