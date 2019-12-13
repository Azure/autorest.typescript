import { PropertyTypeDetails } from "../models/modelDetails";

import { Schema, SchemaType, ConstantSchema } from "@azure-tools/codemodel";
import { getStringForValue } from "./valueHelpers";
import { getLanguageMetadata } from "./languageHelpers";

export function getTypeForSchema(schema: Schema): PropertyTypeDetails {
  let typeName: string = "";
  let defaultValue: string = "";

  switch (schema.type) {
    case SchemaType.String:
      typeName = "string";
      break;
    case SchemaType.Number:
    case SchemaType.Integer:
      typeName = "number";
      break;
    case SchemaType.Constant:
      const constantSchema = schema as ConstantSchema;
      const constantType = getTypeForSchema(constantSchema.valueType);
      typeName = constantType.typeName;
      defaultValue = getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType,
        false
      );
      break;
    case SchemaType.ByteArray:
      typeName = "Uint8Array";
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
    case SchemaType.Object:
      const { name } = getLanguageMetadata(schema.language);
      typeName = name;
      break;
    default:
      typeName = "any";
      break;
  }

  return {
    typeName,
    isConstant: schema.type === SchemaType.Constant,
    ...(defaultValue && { defaultValue })
  };
}
