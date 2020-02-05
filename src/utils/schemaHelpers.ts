// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TypeDetails, PropertyKind } from "../models/modelDetails";

import {
  Schema,
  SchemaType,
  ConstantSchema,
  ObjectSchema,
  ArraySchema,
  DictionarySchema
} from "@azure-tools/codemodel";
import { getStringForValue } from "./valueHelpers";
import { getLanguageMetadata } from "./languageHelpers";
import { normalizeName, NameType } from "./nameUtils";

/**
 * Helper function which given a schema returns type information for useful for generating Typescript code
 * @param schema schema to extract type information from
 */
export function getTypeForSchema(schema: Schema): TypeDetails {
  let typeName: string = "";
  let defaultValue: string = "";
  let kind: PropertyKind = PropertyKind.Primitive;

  switch (schema.type) {
    case SchemaType.Array:
      const arraySchema = schema as ArraySchema;
      const itemsType = getTypeForSchema(arraySchema.elementType);
      const itemsName = getElementTypeName(itemsType);
      kind = itemsType.kind;
      typeName = `${itemsName}[]`;
      break;
    case SchemaType.Boolean:
      typeName = "boolean";
      break;
    case SchemaType.ByteArray:
      typeName = "Uint8Array";
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      const { name: choiceName } = getLanguageMetadata(schema.language);
      typeName = choiceName;
      kind = PropertyKind.Enum;
      break;
    case SchemaType.Constant:
      const constantSchema = schema as ConstantSchema;
      const constantType = getTypeForSchema(constantSchema.valueType);
      typeName = constantType.typeName;
      kind = constantType.kind;
      defaultValue = getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType.type,
        false
      );
      break;
    case SchemaType.DateTime:
    case SchemaType.Date:
    case SchemaType.UnixTime:
      typeName = "Date";
      break;
    case SchemaType.Duration:
      typeName = "string";
      break;
    case SchemaType.Dictionary:
      const dictionarySchema = schema as DictionarySchema;
      const elementType = getTypeForSchema(dictionarySchema.elementType);
      const elementTypeName = getElementTypeName(elementType);
      typeName = `{[propertyName: string]: ${elementTypeName}}`;
      break;
    case SchemaType.Number:
    case SchemaType.Integer:
      typeName = "number";
      break;

    case SchemaType.Object:
      const objSchema = schema as ObjectSchema;
      const { name } = getLanguageMetadata(schema.language);

      // Polymorphic objects with children will get a union type as type
      // since they can take different shapes
      const isUnionType =
        !!(objSchema.discriminator || objSchema.discriminatorValue) &&
        !!objSchema.children &&
        !!objSchema.children.immediate.length;

      typeName = isUnionType ? `${name}Union` : name;
      kind = PropertyKind.Composite;
      break;
    case SchemaType.String:
      typeName = "string";
      break;
    default:
      throw new Error(`Handling of ${schema.type} hasn't been implemented yet`);
  }

  return {
    typeName,
    kind,
    isConstant: schema.type === SchemaType.Constant,
    ...(defaultValue && { defaultValue })
  };
}

function getElementTypeName(elementType: TypeDetails) {
  return elementType.kind === PropertyKind.Primitive
    ? elementType.typeName
    : normalizeName(elementType.typeName, NameType.Interface);
}
