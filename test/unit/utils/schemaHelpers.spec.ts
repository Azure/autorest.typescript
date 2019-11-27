import * as assert from "assert";
import {
  StringSchema,
  NumberSchema,
  SchemaType,
  ConstantSchema,
  ConstantValue
} from "@azure-tools/codemodel";
import { getTypeForSchema } from "../../../src/utils/schemaHelpers";

describe("SchemaHelpers", () => {
  describe("getTypeForSchema", () => {
    it("converts StringSchema to string", () => {
      const typeDetails = getTypeForSchema(
        new StringSchema("StringType", "This is a string.")
      );

      assert.deepEqual(typeDetails, {
        typeName: "string",
        isConstant: false,
        defaultValue: undefined
      });
    });

    it("converts NumberSchema of Number type to number", () => {
      let typeDetails = getTypeForSchema(
        new NumberSchema(
          "NumberType",
          "This is a number.",
          SchemaType.Integer,
          32
        )
      );

      assert.deepEqual(typeDetails, {
        typeName: "number",
        isConstant: false,
        defaultValue: undefined
      });
    });

    it("converts NumberSchema of Integer type to number", () => {
      let typeDetails = getTypeForSchema(
        new NumberSchema(
          "NumberType",
          "This is a number.",
          SchemaType.Number,
          32
        )
      );

      assert.deepEqual(typeDetails, {
        typeName: "number",
        isConstant: false,
        defaultValue: undefined
      });
    });

    it("converts ConstantSchema to the underlying type", () => {
      let typeDetails = getTypeForSchema(
        new ConstantSchema("ConstantNumber", "This is a constant number", {
          value: new ConstantValue(311),
          valueType: new NumberSchema(
            "NumberType",
            "This is a number.",
            SchemaType.Number,
            32
          )
        })
      );

      assert.deepEqual(typeDetails, {
        typeName: "number",
        isConstant: true,
        defaultValue: 311
      });
    });
  });
});
