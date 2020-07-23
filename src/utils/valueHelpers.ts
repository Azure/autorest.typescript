// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaType, AllSchemaTypes } from "@azure-tools/codemodel";
import { isNil, isEmpty } from "lodash";

export enum MapperTypes {
  Base64Url = "Base64Url",
  Boolean = "Boolean",
  ByteArray = "ByteArray",
  Date = "Date",
  DateTime = "DateTime",
  DateTimeRfc1123 = "DateTimeRfc1123",
  Enum = "Enum",
  Object = "Object",
  Stream = "Stream",
  String = "String",
  TimeSpan = "TimeSpan",
  UnixTime = "UnixTime",
  Uuid = "Uuid",
  Number = "Number",
  any = "any"
}

/**
 * Gets the string representation of a value to be used during code generation
 * @param value value to get
 * @param valueType Types of the value
 * @param quotedStrings whether or not we should enclose value in quotes
 */
export function getStringForValue(
  value: any,
  valueType: AllSchemaTypes | MapperTypes | string,
  quotedStrings = true
): string {
  switch (valueType) {
    case SchemaType.ByteArray:
    case MapperTypes.ByteArray:
      // TODO: Encode defaultValue for non-empty array in a platform agnostic way
      // previous autorest version doesn't seem to support non-empty here
      const byteArrayValue = isNil(value) || isEmpty(value) ? 0 : `"${value}"`;
      return `new Uint8Array(${byteArrayValue})`;
    case SchemaType.Number:
    case MapperTypes.Number:
    case SchemaType.Integer:
    case SchemaType.Boolean:
    case MapperTypes.Boolean:
      return value;
    case SchemaType.Uuid:
    case MapperTypes.Uuid:
    case SchemaType.Date:
    case MapperTypes.Date:
    case SchemaType.DateTime:
    case MapperTypes.DateTime:
    case SchemaType.Duration:
    case SchemaType.String:
    case MapperTypes.String:
    case MapperTypes.TimeSpan:
    case SchemaType.Choice:
    case MapperTypes.Enum:
      const valueString = !!value ? value.toString() : "";
      return quotedStrings ? `"${valueString}"` : `${valueString}`;
    default:
      throw new Error(`Unexpected value type: ${valueType}`);
  }
}
