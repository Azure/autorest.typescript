import * as assert from "assert";
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
} from "@azure-tools/codemodel";
import { getTypeForSchema } from "../../../src/utils/schemaHelpers";
import { PropertyKind } from "../../../src/models/modelDetails";

describe("SchemaHelpers", () => {
  describe("getTypeForSchema", () => {
    it("converts StringSchema to string", () => {
      const typeDetails = getTypeForSchema(
        new StringSchema("StringType", "This is a string.")
      );

      assert.deepEqual(typeDetails, {
        typeName: "string",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
      });
    });

    it("converts BooleanSchena to boolean", () => {
      const typeDetails = getTypeForSchema(
        new BooleanSchema("BooleanType", "This is a boolean.")
      );

      assert.deepEqual(typeDetails, {
        typeName: "boolean",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
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
        kind: PropertyKind.Primitive,
        usedModels: []
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
        kind: PropertyKind.Primitive,
        usedModels: []
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
        kind: PropertyKind.Primitive,
        defaultValue: 311,
        usedModels: []
      });
    });

    it("converts a Cohice schema", () => {
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
      assert.deepEqual(typeDetails, {
        typeName: "ChoiceSchema",
        isConstant: false,
        kind: PropertyKind.Enum,
        usedModels: ["ChoiceSchema"]
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
      assert.deepEqual(typeDetails, {
        typeName: "string[]",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
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
      assert.deepEqual(typeDetails, {
        typeName: "{[propertyName: string]: string}",
        isConstant: false,
        kind: PropertyKind.Dictionary,
        usedModels: []
      });
    });

    it("converts a Date schema", () => {
      let typeDetails = getTypeForSchema(new DateSchema("DateSchema", ""));
      assert.deepEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
      });

      typeDetails = getTypeForSchema(new DateTimeSchema("DateTimeSchema", ""));
      assert.deepEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
      });

      typeDetails = getTypeForSchema(new UnixTimeSchema("UnixTimeSchema", ""));
      assert.deepEqual(typeDetails, {
        typeName: "Date",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
      });
    });

    it("converts a Duration schema", () => {
      const typeDetails = getTypeForSchema(
        new DurationSchema("DurationSchema", "")
      );
      assert.deepEqual(typeDetails, {
        typeName: "string",
        isConstant: false,
        kind: PropertyKind.Primitive,
        usedModels: []
      });
    });

    it("converts a basic Object schema", () => {
      const typeDetails = getTypeForSchema(
        new ObjectSchema("ObjectSchema", "")
      );
      const typeName = "ObjectSchema";
      assert.deepEqual(typeDetails, {
        typeName,
        isConstant: false,
        kind: PropertyKind.Composite,
        usedModels: [typeName]
      });
    });

    it("converts an Object schema whith plymorphism", () => {
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
      assert.deepEqual(typeDetails, {
        typeName,
        isConstant: false,
        kind: PropertyKind.Composite,
        usedModels: [typeName]
      });
    });
  });
});
