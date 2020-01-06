// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
    case SchemaType.ByteArray:
    case SchemaType.Date:
    case SchemaType.DateTime:
    case SchemaType.Duration:
      return value.toString();
    default:
      throw new Error(`Unexpected value type: ${valueType.type}`);
  }
}
