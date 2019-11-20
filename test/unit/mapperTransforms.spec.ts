import * as assert from "assert";
import { transformMapper } from "../../src/mapperTransforms";
import {
  ObjectSchema,
  Property,
  StringSchema,
  ConstantSchema,
  NumberSchema,
  ConstantValue,
  SchemaType
} from "@azure-tools/codemodel";
import { MapperType, Mapper } from "@azure/core-http";
import { stringLiteral } from "babel-types";

const basicSchema = new ObjectSchema("basic", "A Basic Schema for testing", {
  properties: [
    new Property(
      "id",
      "An Id Property",
      new NumberSchema("typeOfId", "Id of the schema", SchemaType.Integer, 32)
    ),
    new Property(
      "name",
      "A name property",
      new StringSchema("typeForName", "String representing the name")
    ),
    new Property(
      "color",
      "A color property",
      new StringSchema("typeForColor", "String representing the color")
    )
  ]
});

const refColorSchema = new ObjectSchema(
  "RefColorConstant",
  "A Basic Schema for testing",
  {
    properties: [
      new Property(
        "ColorConstant",
        "A constant value.",
        new ConstantSchema("ColorConstant", "", {
          value: new ConstantValue("green-color"),
          valueType: new StringSchema("colorConstant", "")
        }),
        { required: true }
      ),
      new Property(
        "field1",
        "A field number 1",
        new StringSchema("typeOfFieldOne", "Strring representing field one"),
        { required: false }
      )
    ]
  }
);

const errorSchema = new ObjectSchema("Error", "Test Error schema", {
  properties: [
    new Property(
      "status",
      "An error status Property",
      new NumberSchema(
        "typeOfStatus",
        "Number representing the error status",
        SchemaType.Integer,
        32
      )
    ),
    new Property(
      "message",
      "Error Message",
      new StringSchema("typeOfError", "String representing the error message")
    )
  ]
});

describe("Mapper Transforms", () => {
  it("should generate a Color mapper", () => {
    const mapper = transformMapper(refColorSchema);
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(mapper.serializedName, "RefColorConstant");
    assert.strictEqual(mapper.type.name, MapperType.Composite);
    assert.strictEqual(mapper.type.className, "RefColorConstant");
    assert.strictEqual(modelPropertiesKeys.length, 2);

    assert.ok(
      modelPropertiesKeys.includes("colorConstant"),
      "Model properies do not include 'colorConstant'"
    );
    assert.ok(
      modelPropertiesKeys.includes("field1"),
      "Model properies do not include 'field1'"
    );

    const colorConstantProp =
      (mapper.type.modelProperties || {}).colorConstant ||
      ({ type: {} } as Mapper);
    assert.strictEqual(
      colorConstantProp.required,
      true,
      `Unexpected prop required value ${JSON.stringify(colorConstantProp)}`
    );
    assert.strictEqual(colorConstantProp.isConstant, true),
      "Unexpected isConstant value";
    assert.strictEqual(
      colorConstantProp.serializedName,
      "ColorConstant",
      "Unexpected serializedName"
    );
    assert.strictEqual(
      colorConstantProp.defaultValue,
      "green-color",
      "Unexpected default value"
    );
    assert.strictEqual(
      colorConstantProp.type.name,
      MapperType.String,
      "Unexpected type"
    );
  });

  it("should generate a Basic mapper", () => {
    const mapper = transformMapper(basicSchema);
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(
      mapper.serializedName,
      "basic",
      "Unexpected serialized name"
    );
    assert.strictEqual(
      mapper.type.name,
      MapperType.Composite,
      "unexpected mapper type"
    );
    assert.strictEqual(mapper.type.className, "Basic", "Unexpected class name");
    assert.strictEqual(
      modelPropertiesKeys.length,
      3,
      "Unexpected property count"
    );
    assert.ok(
      modelPropertiesKeys.includes("id"),
      "Model properies do not include 'id'"
    );
    assert.ok(
      modelPropertiesKeys.includes("name"),
      "Model properies do not include 'name'"
    );
    assert.ok(
      modelPropertiesKeys.includes("color"),
      "Model properies do not include 'color'"
    );
  });

  it("should generate an Error mapper", () => {
    const mapper = transformMapper(errorSchema);
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(
      mapper.serializedName,
      "Error",
      `Expected  "Error" but got ${mapper.serializedName}`
    );
    assert.strictEqual(
      mapper.type.name,
      MapperType.Composite,
      `Expected  ${MapperType.Composite} but got ${mapper.type.name}`
    );
    assert.strictEqual(
      mapper.type.className,
      "ErrorModel",
      `Expected  ErrorModel but got ${mapper.type.className}`
    );
    assert.strictEqual(
      modelPropertiesKeys.length,
      2,
      `Expected property count of 2 but got ${modelPropertiesKeys.length}`
    );
    assert.ok(
      modelPropertiesKeys.includes("status"),
      "ErrorModel properies do not include 'status'"
    );
    assert.ok(
      modelPropertiesKeys.includes("message"),
      "ErrorModel properies do not include 'message'"
    );
  });
});
