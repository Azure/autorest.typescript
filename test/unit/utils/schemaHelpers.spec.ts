import { assert } from "chai";
import {
  StringSchema,
  NumberSchema,
  SchemaType,
  ConstantSchema,
  ConstantValue,
  BooleanSchema,
  ChoiceSchema,
  ChoiceValue,
  ArraySchema,
  DictionarySchema,
  DateSchema,
  DateTimeSchema,
  UnixTimeSchema,
  DurationSchema,
  ObjectSchema,
  Property
} from "@autorest/codemodel";
import { getTypeForSchema } from "../../../src/utils/schemaHelpers";
import { PropertyKind } from "../../../src/models/modelDetails";

describe("SchemaHelpers", () => {
  describe("getTypeForSchema", () => {
    it("converts StringSchema to string", () => {
      const typeDetails = getTypeForSchema(
        new StringSchema("StringType", "This is a string.")
      );

      assert.deepStrictEqual(typeDetails, {
        typeName: "string",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });
    });

    it("converts BooleanSchema to boolean", () => {
      const typeDetails = getTypeForSchema(
        new BooleanSchema("BooleanType", "This is a boolean.")
      );

      assert.deepStrictEqual(typeDetails, {
        typeName: "boolean",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
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

      assert.deepStrictEqual(typeDetails, {
        typeName: "number",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
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

      assert.deepStrictEqual(typeDetails, {
        typeName: "number",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
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

      assert.deepStrictEqual(typeDetails, {
        typeName: "number",
        isConstant: true,
        nullable: false,
        kind: PropertyKind.Primitive,
        defaultValue: 311,
        usedModels: []
      });
    });

    it("converts a Choice schema", () => {
      const choices = [
        new ChoiceValue("", "", "red color"),
        new ChoiceValue("", "", "green-color"),
        new ChoiceValue("", "", "blue_color")
      ];
      let typeDetails = getTypeForSchema(
        new ChoiceSchema("ChoiceSchema", "This is a choice", {
          choices,
          choiceType: SchemaType.String as any
        })
      );
      assert.deepStrictEqual(typeDetails, {
        typeName: "ChoiceSchema",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Enum,
        usedModels: ["ChoiceSchema"],
        defaultValue: undefined
      });
    });

    it("converts an Array schema", () => {
      let typeDetails = getTypeForSchema(
        new ArraySchema(
          "ArraySchema",
          "This is an Array",
          new StringSchema("StringSchema", "")
        )
      );
      assert.deepStrictEqual(typeDetails, {
        typeName: "string[]",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });
    });

    it("converts a Dictionary schema", () => {
      let typeDetails = getTypeForSchema(
        new DictionarySchema(
          "DictionarySchema",
          "This is a choice",
          new StringSchema("StringSchema", "")
        )
      );
      assert.deepStrictEqual(typeDetails, {
        typeName: "{[propertyName: string]: string}",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Dictionary,
        usedModels: [],
        defaultValue: undefined
      });
    });

    it("converts a Date schema", () => {
      let typeDetails = getTypeForSchema(new DateSchema("DateSchema", ""));
      assert.deepStrictEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });

      typeDetails = getTypeForSchema(new DateTimeSchema("DateTimeSchema", ""));
      assert.deepStrictEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });

      typeDetails = getTypeForSchema(new UnixTimeSchema("UnixTimeSchema", ""));
      assert.deepStrictEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });
    });

    it("converts a Duration schema", () => {
      const typeDetails = getTypeForSchema(
        new DurationSchema("DurationSchema", "")
      );
      assert.deepStrictEqual(typeDetails, {
        typeName: "string",
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Primitive,
        usedModels: [],
        defaultValue: undefined
      });
    });

    it("converts a basic Object schema", () => {
      const typeDetails = getTypeForSchema(
        new ObjectSchema("ObjectSchema", "")
      );
      const typeName = "ObjectSchema";
      assert.deepStrictEqual(typeDetails, {
        typeName,
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Composite,
        usedModels: [typeName],
        defaultValue: undefined
      });
    });

    it("converts an Object schema with polymorphism", () => {
      const discriminatorProperty = new Property(
        "fishtype",
        "",
        new StringSchema("string", "")
      );
      const parent = new ObjectSchema("Parent", "", {
        properties: [discriminatorProperty],
        discriminator: { property: discriminatorProperty }
      });

      const child = new ObjectSchema("ObjectSchema", "", {
        parents: { all: [parent], immediate: [parent] },
        discriminatorValue: "ChildSchema"
      });

      parent.children = { all: [child], immediate: [child] };

      const typeDetails = getTypeForSchema(parent);

      const typeName = "ParentUnion";
      assert.deepStrictEqual(typeDetails, {
        typeName,
        isConstant: false,
        nullable: false,
        kind: PropertyKind.Composite,
        usedModels: [typeName],
        defaultValue: undefined
      });
    });
  });
});
