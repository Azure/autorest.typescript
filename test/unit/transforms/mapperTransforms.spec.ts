import { assert } from "chai";
import {
  transformMapper,
  getMapperClassName
} from "../../../src/transforms/mapperTransforms";
import {
  NumberSchema,
  SchemaType,
  StringSchema,
  ConstantSchema,
  Schema,
  ConstantValue,
  DateSchema,
  DateTimeSchema,
  UnixTimeSchema,
  ChoiceSchema,
  SealedChoiceSchema,
  BooleanSchema,
  CharSchema,
  ByteArraySchema,
  ObjectSchema,
  Property,
  ArraySchema,
  ChoiceValue
} from "@autorest/codemodel";
import {
  BaseMapper,
  EnumMapper,
  MapperType,
  CompositeMapper,
  Mapper
} from "@azure/core-http";

const numberSchemaName = "mockNumberSchema";
const getNumberSchema = (name = "", options: any = {}) =>
  new NumberSchema(
    name || numberSchemaName,
    "Number Schema for testing",
    SchemaType.Integer,
    32,
    options
  );

const getDateSchema = (name: string, options: any = {}) =>
  new DateSchema(name, "Date Schema for testing", options);

const getDateTimeSchema = (name: string, options: any = {}) =>
  new DateTimeSchema(name, "DateTime Schema for testing", options);

const getUnixTimeSchema = (name: string, options: any = {}) =>
  new UnixTimeSchema(name, "UnixTime Schema for testing", options);

const stringSchemaName = "mockStringSchema";
const getStringSchema = (name = "", options: any = {}) =>
  new StringSchema(
    name || stringSchemaName,
    "String schema for testing",
    options
  );

const getConstantSchema = (
  name: string,
  valueType: Schema,
  value: ConstantValue
) =>
  new ConstantSchema(name, "", {
    valueType,
    value
  });

const getBooleanSchema = (name: string, options: any = {}) =>
  new BooleanSchema(name, "");

const getCharSchema = (name: string, options: any = {}) =>
  new CharSchema(name, "");

const getChoiceSchema = (name: string, options: any = {}) =>
  new ChoiceSchema(name, "", options);

const getSealedChoiceSchema = (name: string, options: any = {}) =>
  new SealedChoiceSchema(name, "", options);

const getByteArraySchema = (name: string, options: any = {}) =>
  new ByteArraySchema(name, "", options);

const getObjectSchema = (name: string, options: any = {}) =>
  new ObjectSchema(name, "", options);

describe("transformObjectMapper", () => {
  it("Gets a mapper for a simple Object Schema", () => {
    const objectName = "mockObjectName";
    const stringPropName = "stringProp";
    const stringSchema = getStringSchema("stringSchema");
    const schema = getObjectSchema(objectName, {
      properties: [
        new Property(stringPropName, "", stringSchema, {
          required: true,
          serializedName: "string-prop"
        })
      ]
    });

    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        className: getMapperClassName(schema),
        name: MapperType.Composite,
        modelProperties: {
          stringProp: {
            serializedName: "string-prop",
            required: true,
            type: {
              name: "String"
            }
          }
        }
      }
    } as CompositeMapper);
  });

  it("Gets a mapper for a Object Schema with a constant property", () => {
    const objectName = "mockObjectName";
    const propName = "constantProp";
    const constantValue = "TheValue!";
    const constantSchema = getConstantSchema(
      "mockConstant",
      getStringSchema("constString"),
      new ConstantValue(constantValue)
    );
    const schema = getObjectSchema(objectName, {
      properties: [
        new Property(propName, "", constantSchema, {
          serializedName: "constant-prop"
        })
      ]
    });

    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.Composite,
        className: "MockObjectName",
        modelProperties: {
          constantProp: {
            serializedName: "constant-prop",
            defaultValue: constantValue,
            isConstant: true,
            type: {
              name: "String"
            }
          }
        }
      }
    } as CompositeMapper);
  });

  it("Gets a mapper for a Object Schema with a choice property", () => {
    const objectName = "mockObjectName";
    const propName = "choiceProp";
    const choices = [
      new ChoiceValue("", "", "one"),
      new ChoiceValue("", "", "2"),
      new ChoiceValue("", "", "three")
    ];
    const choiceSchema = getChoiceSchema("mockChoice", {
      choiceType: SchemaType.String,
      choices
    });
    const schema = getObjectSchema(objectName, {
      properties: [
        new Property(propName, "", choiceSchema, {
          serializedName: "choice-prop"
        })
      ]
    });

    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.Composite,
        className: getMapperClassName(schema),
        modelProperties: {
          choiceProp: {
            serializedName: "choice-prop",
            type: {
              name: "String"
            }
          } as Mapper
        }
      }
    } as CompositeMapper);
  });

  it("Gets mapper for complex schema", () => {
    const fish = new ObjectSchema("fish", "");
    const properties = [
      new Property("fishtype", "", new StringSchema("Fish-Type", ""), {
        serializedName: "fishtype"
      }),
      new Property("species", "", new StringSchema("Fish-Species", "")),
      new Property(
        "length",
        "",
        new NumberSchema("typeForlength", "", SchemaType.Number, 32),
        { serializedName: "length" }
      ),
      new Property("siblings", "", new ArraySchema("Fish-siblings", "", fish), {
        serializedName: "siblings"
      })
    ];
    fish.properties = properties;

    const mapper = transformMapper({ schema: fish });

    assert.deepEqual(mapper, {
      type: {
        className: getMapperClassName(fish),
        modelProperties: {
          fishtype: {
            serializedName: "fishtype",
            type: { name: "String" }
          },
          length: {
            serializedName: "length",
            type: {
              name: "Number"
            }
          },
          siblings: {
            serializedName: "siblings",
            type: {
              element: {
                type: {
                  className: "Fish",
                  name: "Composite"
                }
              },
              name: "Sequence"
            }
          },
          species: {
            serializedName: "species",
            type: {
              name: "String"
            }
          }
        },
        name: "Composite"
      }
    });
  });

  it("Gets a mapper for a Object Schema with an Object property", () => {
    const parentObjectName = "mockObjectParentName";
    const propName = "objectProp";
    const childObjectProp = "childObjectProp";
    const childObject = getObjectSchema("mockChildObject", {
      properties: [new Property(childObjectProp, "", getStringSchema("foo"))]
    });
    const schema = getObjectSchema(parentObjectName, {
      properties: [
        new Property(propName, "", childObject, {
          serializedName: "object-prop"
        })
      ]
    });

    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        className: getMapperClassName(schema),
        name: MapperType.Composite,
        modelProperties: {
          objectProp: {
            serializedName: "object-prop",
            type: {
              name: "Composite",
              className: "MockChildObject"
            }
          } as CompositeMapper
        }
      }
    } as CompositeMapper);
  });
});

describe("transformPrimitiveMapper", () => {
  it("Gets a mapper for a ByteArray Schema", () => {
    const byteArrayName = "mockByteArray";
    const schema = getByteArraySchema(byteArrayName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.ByteArray
      }
    });
  });

  it("Gets a mapper for a ByteArray Schema with base64url format", () => {
    const byteArrayName = "mockByteArray";
    const schema = getByteArraySchema(byteArrayName, { format: "base64url" });
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.Base64Url
      }
    });
  });
});

describe("transformPrimitiveMapper", () => {
  it("Gets a mapper for a Boolean Schema", () => {
    const booleanSchemaName = "mockBoolean";
    const schema = getBooleanSchema(booleanSchemaName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.Boolean
      }
    } as BaseMapper);
  });

  it("Gets a mapper for a Char Schema", () => {
    const charSchemaName = "mockChar";
    const schema = getCharSchema(charSchemaName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.String
      }
    } as BaseMapper);
  });
});

describe("transformChoiceMapper", () => {
  it("Gets a mapper for a Choice schema", () => {
    const choiceSchemaName = "mockChoice";
    const choices = [
      new ChoiceValue("", "", "red color"),
      new ChoiceValue("", "", "green-color"),
      new ChoiceValue("", "", "blue_color")
    ];
    const schema = getChoiceSchema(choiceSchemaName, {
      choiceType: SchemaType.String,
      choices
    });
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.String
      }
    } as Mapper);
  });

  it("Gets a mapper for a SealedChoice schema", () => {
    const choiceSchemaName = "mockSealedChoice";
    const choices = [
      new ChoiceValue("", "", 1),
      new ChoiceValue("", "", 2),
      new ChoiceValue("", "", 3),
      new ChoiceValue("", "", 4)
    ];
    const schema = getSealedChoiceSchema(choiceSchemaName, {
      choiceType: SchemaType.String,
      choices
    });
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.Enum,
        allowedValues: choices.map(choice => choice.value)
      }
    } as EnumMapper);
  });

  it("Gets a mapper for a SealedChoice schema, as a string mapper if skipEnumValidation is true", () => {
    const choiceSchemaName = "mockSealedChoice";
    const choices = [
      new ChoiceValue("", "", 1),
      new ChoiceValue("", "", 2),
      new ChoiceValue("", "", 3),
      new ChoiceValue("", "", 4)
    ];
    const schema = getSealedChoiceSchema(choiceSchemaName, {
      choiceType: SchemaType.String,
      choices
    });
    const mapper = transformMapper({
      schema,
      options: { skipEnumValidation: true }
    });

    assert.deepEqual(mapper, {
      type: {
        name: MapperType.String
      }
    } as BaseMapper);
  });
});

describe("transformDateMapper", () => {
  it("Gets a mapper for a Date", () => {
    const dateSchemaName = "mockDate";
    const schema = getDateSchema(dateSchemaName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: { name: "Date" }
    });
  });

  it("Gets a mapper for a DateTime", () => {
    const dateSchemaName = "mockDateTime";
    const schema = getDateTimeSchema(dateSchemaName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: { name: "DateTime" }
    });
  });

  it("Gets a mapper for a UnixTime", () => {
    const dateSchemaName = "mockDateTime";
    const schema = getUnixTimeSchema(dateSchemaName);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: { name: "UnixTime" }
    });
  });
});

describe("transformConstantMapper", () => {
  it("Gets a mapper for a string constant", () => {
    const constantName = "stringConstant";
    const testValue = "testValue";
    const valueType = getStringSchema();
    const value = new ConstantValue(testValue);
    const schema = getConstantSchema(constantName, valueType, value);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: "String"
      },
      defaultValue: testValue,
      isConstant: true
    });
  });

  it("Gets a mapper for a numeric constant", () => {
    const constantName = "numberConstant";
    const testValue = 3;
    const valueType = getNumberSchema();
    const value = new ConstantValue(testValue);
    const schema = getConstantSchema(constantName, valueType, value);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: "Number"
      },
      defaultValue: testValue,
      isConstant: true
    });
  });

  it("Gets a mapper for a date constant", () => {
    const constantName = "dateConstant";
    const testValue = new Date(2019, 12, 9);
    const valueType = getDateSchema("", testValue);
    const value = new ConstantValue(testValue);
    const schema = getConstantSchema(constantName, valueType, value);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: "Date"
      },
      defaultValue: testValue,
      isConstant: true
    });
  });

  it("Gets a mapper for a dateTime constant", () => {
    const constantName = "dateTimeConstant";
    const testValue = new Date(2019, 12, 9, 4, 44);
    const valueType = getDateTimeSchema("", testValue);
    const value = new ConstantValue(testValue);
    const schema = getConstantSchema(constantName, valueType, value);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: "DateTime"
      },
      defaultValue: testValue,
      isConstant: true
    });
  });

  it("Gets a mapper for a dateTime constant", () => {
    const constantName = "dateTimeConstant";
    const testValue = new Date(2019, 12, 9, 4, 44).getTime();
    const valueType = getUnixTimeSchema("", testValue);
    const value = new ConstantValue(testValue);
    const schema = getConstantSchema(constantName, valueType, value);
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: {
        name: "UnixTime"
      },
      defaultValue: testValue,
      isConstant: true
    });
  });
});

describe("transformStringMapper", () => {
  it("Gets a mapper for a simple string schema", () => {
    const schema = getStringSchema();
    const mapper = transformMapper({ schema });

    assert.deepEqual(mapper, {
      type: { name: "String" }
    });
  });

  it("Gets a mapper for a string schema with constraints", () => {
    const constraints = { maxLength: 1, minLength: 2, pattern: /[a-zA-Z0-9]+/ };
    const schema = getStringSchema(undefined, constraints);
    const mapper = transformMapper({ schema, options: { required: true } });

    assert.deepEqual(mapper, {
      type: { name: "String" },
      required: true,
      constraints: {
        MaxLength: constraints.maxLength,
        MinLength: constraints.minLength,
        Pattern: constraints.pattern
      }
    } as BaseMapper);
  });
});

describe("transformNumberMapper", () => {
  it("Gets a mapper from a non required NumberSchema", () => {
    const mapper = transformMapper({ schema: getNumberSchema() });
    assert.deepEqual(mapper, {
      type: { name: "Number" }
    });
  });

  it("Gets a mapper from a NumberSchema with constrains", () => {
    const mapper = transformMapper({ schema: getNumberSchema() });
    assert.deepEqual(mapper, {
      type: { name: "Number" }
    });
  });

  it("Gets a mapper from a required NumberSchema", () => {
    const constraints = { maximum: 2, minimum: 1, multipleOf: 2 };
    const mapper = transformMapper({
      schema: getNumberSchema(undefined, constraints)
    });
    assert.deepEqual(mapper, {
      type: { name: "Number" },
      constraints: {
        InclusiveMaximum: constraints.maximum,
        InclusiveMinimum: constraints.minimum,
        MultipleOf: constraints.multipleOf
      }
    });
  });
});

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
        new StringSchema("typeOfFieldOne", "String representing field one"),
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
    const mapper = transformMapper({
      schema: refColorSchema
    }) as CompositeMapper;
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(mapper.type.name, MapperType.Composite);
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

    // Constant props are not required
    assert.strictEqual(
      !!colorConstantProp.required,
      false,
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
    const mapper = transformMapper({ schema: basicSchema }) as CompositeMapper;
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(
      mapper.type.name,
      MapperType.Composite,
      "unexpected mapper type"
    );
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
    const mapper = transformMapper({ schema: errorSchema }) as CompositeMapper;
    const modelPropertiesKeys = Object.keys(mapper.type.modelProperties || {});

    assert.strictEqual(
      mapper.type.name,
      MapperType.Composite,
      `Expected  ${MapperType.Composite} but got ${mapper.type.name}`
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
