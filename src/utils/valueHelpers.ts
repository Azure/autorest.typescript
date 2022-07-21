// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaType, AllSchemaTypes, ChoiceSchema, ConstantSchema } from "@autorest/codemodel";
import { isNil, isEmpty } from "lodash";
import { MapperType, SequenceMapperType } from "@azure/core-http";
import { NameType, normalizeName } from "./nameUtils";
import { ExampleValue } from "@autorest/testmodeler/dist/src/core/model";

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
  Sequence = "Sequence",
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
  quotedStrings = true,
  mapperType?: MapperType
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
    case SchemaType.SealedChoice:
    case MapperTypes.Enum:
      const valueString = !!value ? value.toString() : "";
      return quotedStrings ? `"${valueString}"` : `${valueString}`;
    case MapperTypes.Sequence:
      if (mapperType) {
        return getStringForValue(
          value,
          (mapperType as SequenceMapperType).element.type.name
        );
      }
    default:
      throw new Error(`Unexpected value type: ${valueType}`);
  }
}

/**
 * Get the returned value from ExampleValue model mainly used when sample generation
 * @param exampleValue 
 * @returns 
 */
export function getParameterAssignment(exampleValue: ExampleValue, isRLCSample: boolean = false) {
  let schemaType = exampleValue.schema.type;
  const rawValue = exampleValue.rawValue;
  let retValue = rawValue;
  switch (schemaType) {
    case SchemaType.Constant:
      const contentSchema = exampleValue.schema as ConstantSchema;
      schemaType = contentSchema.valueType.type;
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      const choiceSchema = exampleValue.schema as ChoiceSchema;
      schemaType = choiceSchema.choiceType.type;
      break;
  }
  if (rawValue === null) {
    switch (schemaType) {
      case SchemaType.Object:
      case SchemaType.Any:
      case SchemaType.Dictionary:
      case SchemaType.AnyObject:
        retValue = `{}`;
        break;
      case SchemaType.Array:
        retValue = `[]`;
        break;
      default:
        retValue = undefined;
    }
    return retValue;
  }
  switch (schemaType) {
    case SchemaType.String:
    case SchemaType.Char:
    case SchemaType.Time:
    case SchemaType.Uuid:
    case SchemaType.Uri:
    case SchemaType.Credential:
    case SchemaType.Duration:
      retValue = `"${rawValue
        ?.toString()
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")}"`;
      break;
    case SchemaType.Boolean:
      (retValue = rawValue), toString();
      break;
    case SchemaType.Object:
    case SchemaType.Dictionary:
      const values = [];
      for (const prop in exampleValue.properties) {
        const property = exampleValue.properties[prop];
        if (property === undefined || property === null) {
          continue;
        }
        let propName;
        if (isRLCSample) {
          propName = prop;
        } else {
          const initPropName = property.language?.default?.name
            ? property.language?.default?.name
            : prop;
          propName = normalizeName(initPropName, NameType.Property, true);
        }
        let propRetValue: string;
        if (propName.indexOf("/") > -1 || propName.match(/^\d/)) {
          propRetValue = `"${propName}": ` + getParameterAssignment(property);
        } else {
          propRetValue = `${propName}: ` + getParameterAssignment(property);
        }
        values.push(propRetValue);
      }
      if (values.length > 0) {
        retValue = `{${values.join(", ")}}`;
      } else {
        retValue = "{}";
      }
      break;
    case SchemaType.Array:
      const valuesArr = [];
      for (const element of <ExampleValue[]>exampleValue.elements) {
        let propRetValueArr = getParameterAssignment(element);
        valuesArr.push(propRetValueArr);
      }
      if (valuesArr.length > 0) {
        retValue = `[${valuesArr.join(", ")}]`;
      } else {
        retValue = "[]";
      }
      break;
    case SchemaType.Date:
    case SchemaType.DateTime:
      retValue = `new Date("${rawValue}")`;
      break;
    case SchemaType.Any:
    case SchemaType.AnyObject:
      retValue = `${JSON.stringify(rawValue)}`;
      break;
    case SchemaType.ByteArray:
      retValue = isRLCSample ? `"${rawValue}"` : `Buffer.from("${rawValue}")`;
      break;
    default:
      break;
  }
  return retValue;
}
