import { assert } from "chai";

import { transformChoice } from "../../../src/transforms/transforms";

import {
  SchemaType,
  ObjectSchema,
  StringSchema,
  NumberSchema,
  Property,
  ConstantSchema,
  ConstantValue,
  ChoiceSchema,
  ChoiceValue
} from "@autorest/codemodel";
import {
  transformProperty,
  transformObject
} from "../../../src/transforms/objectTransforms";
import * as sinon from "sinon";
import * as autorestSession from "../../../src/autorestSession";

const appleSchema = new ObjectSchema("Apple", "An apple.", {
  properties: [
    new Property(
      "color",
      "The apple's color.",
      new StringSchema("typeForColor", "An apple's color")
    ),
    new Property(
      "diameter",
      "The apple's diameter in centimeters.",
      new NumberSchema(
        "typeForDiameter",
        "Diameter in centimeters.",
        SchemaType.Integer,
        32
      )
    ),
    new Property(
      "constValue",
      "A constant value.",
      new ConstantSchema("typeForConst", "", {
        value: new ConstantValue("Worm"),
        valueType: new StringSchema("wormConst", "")
      })
    )
  ]
});

describe("Transforms", () => {
  beforeEach(() => {
    sinon.replace(autorestSession, "getAutorestOptions", () => ({
      srcPath: ".",
      packageDetails: {
        name: "test",
        nameWithoutScope: "test",
        version: "1.0.0"
      },
      licenseHeader: false,
      hideClients: true,
      azureArm: false,
      ignoreNullableOnOptional: false,
      useCoreV2: true,
      allowInsecureConnection: true
    }));
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Property to PropertyDetails", () => {
    it("retains basic details", () => {
      const property = transformProperty(
        new Property(
          "color",
          "The color",
          new StringSchema("Color", "A color."),
          { required: true, readOnly: false }
        )
      );

      assert.strictEqual(property.name, "color");
      assert.strictEqual(property.description, "The color");
      assert.strictEqual(property.type, "string");
      assert.strictEqual(property.required, true);
      assert.strictEqual(property.readOnly, false);
    });
  });

  describe("ObjectSchema to ModelDetails", () => {
    it("retains basic details and contains properties", () => {
      const model = transformObject(appleSchema, []);
      assert.strictEqual(model.name, "Apple");
      assert.strictEqual(model.properties.length, 3);
      assert.strictEqual(model.properties[0].name, "color");
      assert.strictEqual(model.properties[1].name, "diameter");
      assert.strictEqual(model.properties[2].name, "constValue");
    });
  });

  describe("ChoiceSchema to UnionDetails", () => {
    it("converts a choice with string values", () => {
      const colorUnion = transformChoice(
        new ChoiceSchema("Color", "A color.", {
          choices: [
            new ChoiceValue("Red", "Red", "red"),
            new ChoiceValue("Green", "Green", "green"),
            new ChoiceValue("Blue", "Blue", "blue")
          ],
          choiceType: new StringSchema("ColorString", "A color string.")
        })
      );

      assert.strictEqual(colorUnion.name, "Color");
      assert.strictEqual(colorUnion.description, "Defines values for Color.");
      assert.deepEqual(
        colorUnion.properties.map(p => p.value),
        [`red`, `green`, `blue`]
      );
    });
  });
});
