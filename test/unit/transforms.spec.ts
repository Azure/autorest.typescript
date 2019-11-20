import * as assert from "assert";

import {
  transformObject,
  transformProperty,
  transformChoice,
  getTypeForSchema,
  getStringForValue,
} from "../../src/transforms";

import {
  CodeModel,
  SchemaType,
  ObjectSchema,
  StringSchema,
  NumberSchema,
  Property,
  ConstantSchema,
  ConstantValue,
  ChoiceSchema,
  ChoiceValue,
  BooleanSchema
} from "@azure-tools/codemodel";

const appleSchema = new ObjectSchema("Apple", "An apple.", {
  properties: [
    new Property("color", "The apple's color.",
                 new StringSchema("typeForColor", "An apple's color")),
    new Property("diameter", "The apple's diameter in centimeters.",
                 new NumberSchema("typeForDiameter", "Diameter in centimeters.", SchemaType.Integer, 32)),
    new Property("constValue", "A constant value.",
                 new ConstantSchema("typeForConst", "", { value: new ConstantValue("Worm"),
                                                          valueType: new StringSchema("wormConst", "") })),
  ]
});

const fakeCodeModel: CodeModel = new CodeModel("FakeModel", false, {
  schemas: {
    objects: [
      appleSchema
    ]
  }
});

describe.only("Transforms", () => {
  describe("Schema to PropertyTypeDetails", () => {
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
        new NumberSchema("NumberType", "This is a number.", SchemaType.Integer, 32)
      );

      assert.deepEqual(typeDetails, {
        typeName: "number",
        isConstant: false,
        defaultValue: undefined
      });
    });

    it("converts NumberSchema of Integer type to number", () => {
      let typeDetails = getTypeForSchema(
        new NumberSchema("NumberType", "This is a number.", SchemaType.Number, 32)
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
          valueType: new NumberSchema("NumberType", "This is a number.", SchemaType.Number, 32)
        })
      );

      assert.deepEqual(typeDetails, {
        typeName: "number",
        isConstant: true,
        defaultValue: 311
      });
    });
  });

  describe("Property to PropertyDetails", () => {
    it("retains basic details", () => {
      const property = transformProperty(
        new Property(
          "color",
          "The color",
          new StringSchema("Color", "A color."),
          { required: true, readOnly: false }));

      assert.strictEqual(property.name, "color");
      assert.strictEqual(property.description, "The color");
      assert.strictEqual(property.type, "string");
      assert.strictEqual(property.required, true);
      assert.strictEqual(property.readOnly, false);
    });
  });

  describe("ObjectSchema to ModelDetails", () => {
    it("retains basic details and contains properties", () => {
      const model = transformObject(appleSchema)
      assert.strictEqual(model.name, "Apple");
      assert.strictEqual(model.properties.length, 3);
      assert.strictEqual(model.properties[0].name, "color");
      assert.strictEqual(model.properties[1].name, "diameter");
      assert.strictEqual(model.properties[2].name, "constValue");
    });
  });

  describe("ChoiceSchema to UnionDetails", () => {
    it("converts a choice with string values", () => {
      const colorUnion =
        transformChoice(new ChoiceSchema("Color", "A color.", {
          choices: [
            new ChoiceValue("Red", "Red", "red"),
            new ChoiceValue("Green", "Green", "green"),
            new ChoiceValue("Blue", "Blue", "blue"),
          ],
          choiceType: new StringSchema("ColorString", "A color string."),
        }));

      assert.strictEqual(colorUnion.name, "Color");
      assert.strictEqual(colorUnion.description, "Defines values for Color.");
      assert.deepEqual(colorUnion.values, [`"red"`, `"green"`, `"blue"`]);
    });
  });

  describe("Value to string", () => {
    it("converts a string value to a quoted string", () => {
      assert.strictEqual(
        getStringForValue(
          "red",
          new StringSchema("ColorString", "A color string.")),
        `"red"`);
    });

    it("converts a numeric value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(
          1,
          new NumberSchema("Número", "El número.", SchemaType.Number, 32)),
        `1`);
    });

    it("converts a boolean value to a plain string", () => {
      assert.strictEqual(
        getStringForValue(
          true,
          new BooleanSchema("Truth", "The truth.")),
        `true`);
    });
  });
});
