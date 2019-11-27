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
      return value.toString();
    case SchemaType.Boolean:
      return value.toString();
    default:
      throw new Error(`Unexpected value type: ${valueType.type}`);
  }
}
