import { ValueSchema, SchemaType } from "@azure-tools/codemodel";

export function getStringForValue(
  value: any,
  valueType: ValueSchema,
  quotedStrings = true
): string {
  switch (valueType.type) {
    case SchemaType.String:
      return quotedStrings ? `"${value}"` : `${value}`;
    case SchemaType.Number:
    case SchemaType.Integer:
    case SchemaType.Boolean:
    default:
      return value.toString();
  }
}
