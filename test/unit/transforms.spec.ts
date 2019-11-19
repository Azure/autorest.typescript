import * as assert from "assert";
import { transformObject, transformProperty } from "../../src/transforms"

import {
  CodeModel,
  Schema,
  SchemaType,
  ObjectSchema,
  StringSchema,
  NumberSchema,
  Property,
  ConstantSchema,
  ConstantValue
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
});
