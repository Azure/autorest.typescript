// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import { uint8ArrayToString } from "@azure/core-util";

/** Template type for testing models with specific properties. Pass in the type of the property you are looking for */
export interface UnionEnumValueProperty {
  /** Property */
  property: "value2";
}

export function unionEnumValuePropertySerializer(
  item: UnionEnumValueProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Type of ExtendedEnum */
export type ExtendedEnum = "value2";

/** Model with a union of float literal as property. */
export interface UnionFloatLiteralProperty {
  /** Property */
  property: 43.125 | 46.875;
}

export function unionFloatLiteralPropertySerializer(
  item: UnionFloatLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a union of int literal as property. */
export interface UnionIntLiteralProperty {
  /** Property */
  property: 42 | 43;
}

export function unionIntLiteralPropertySerializer(
  item: UnionIntLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a union of string literal as property. */
export interface UnionStringLiteralProperty {
  /** Property */
  property: "hello" | "world";
}

export function unionStringLiteralPropertySerializer(
  item: UnionStringLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a boolean literal property. */
export interface BooleanLiteralProperty {
  /** Property */
  property: true;
}

export function booleanLiteralPropertySerializer(
  item: BooleanLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a float literal property. */
export interface FloatLiteralProperty {
  /** Property */
  property: 43.125;
}

export function floatLiteralPropertySerializer(
  item: FloatLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a int literal property. */
export interface IntLiteralProperty {
  /** Property */
  property: 42;
}

export function intLiteralPropertySerializer(
  item: IntLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a string literal property. */
export interface StringLiteralProperty {
  /** Property */
  property: "hello";
}

export function stringLiteralPropertySerializer(
  item: StringLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a property unknown, and the data is an array. */
export interface UnknownArrayProperty {
  /** Property */
  property: any;
}

export function unknownArrayPropertySerializer(
  item: UnknownArrayProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a property unknown, and the data is a dictionnary. */
export interface UnknownDictProperty {
  /** Property */
  property: any;
}

export function unknownDictPropertySerializer(
  item: UnknownDictProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a property unknown, and the data is a int32. */
export interface UnknownIntProperty {
  /** Property */
  property: any;
}

export function unknownIntPropertySerializer(
  item: UnknownIntProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a property unknown, and the data is a string. */
export interface UnknownStringProperty {
  /** Property */
  property: any;
}

export function unknownStringPropertySerializer(
  item: UnknownStringProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a property never. (This property should not be included). */
export interface NeverProperty {}

export function neverPropertySerializer(item: NeverProperty) {
  return item as any;
}

/** Model with dictionary string properties */
export interface DictionaryStringProperty {
  /** Property */
  property: Record<string, string>;
}

export function dictionaryStringPropertySerializer(
  item: DictionaryStringProperty,
): Record<string, unknown> {
  return {
    property: serializeRecord(item.property as any) as any,
  };
}

/** Model with collection model properties */
export interface CollectionsModelProperty {
  /** Property */
  property: InnerModel[];
}

export function collectionsModelPropertySerializer(
  item: CollectionsModelProperty,
): Record<string, unknown> {
  return {
    property: item["property"].map(innerModelSerializer),
  };
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModel {
  /** Required string property */
  property: string;
}

export function innerModelSerializer(
  item: InnerModel,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with collection int properties */
export interface CollectionsIntProperty {
  /** Property */
  property: number[];
}

export function collectionsIntPropertySerializer(
  item: CollectionsIntProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with collection string properties */
export interface CollectionsStringProperty {
  /** Property */
  property: string[];
}

export function collectionsStringPropertySerializer(
  item: CollectionsStringProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with model properties */
export interface ModelProperty {
  /** Property */
  property: InnerModel;
}

export function modelPropertySerializer(
  item: ModelProperty,
): Record<string, unknown> {
  return {
    property: innerModelSerializer(item.property),
  };
}

/** Model with extensible enum properties */
export interface ExtensibleEnumProperty {
  /** Property */
  property: InnerEnum;
}

export function extensibleEnumPropertySerializer(
  item: ExtensibleEnumProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Enum that will be used as a property for model EnumProperty. Extensible. */
export type InnerEnum = "ValueOne" | "ValueTwo";

/** Model with enum properties */
export interface EnumProperty {
  /** Property */
  property: FixedInnerEnum;
}

export function enumPropertySerializer(
  item: EnumProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Enum that will be used as a property for model EnumProperty. Non-extensible. */
export type FixedInnerEnum = "ValueOne" | "ValueTwo";

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property: string;
}

export function durationPropertySerializer(
  item: DurationProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property: Date;
}

export function datetimePropertySerializer(
  item: DatetimeProperty,
): Record<string, unknown> {
  return {
    property: item["property"].toISOString(),
  };
}

/** Model with a decimal128 property */
export interface Decimal128Property {
  /** Property */
  property: number;
}

export function decimal128PropertySerializer(
  item: Decimal128Property,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a decimal property */
export interface DecimalProperty {
  /** Property */
  property: number;
}

export function decimalPropertySerializer(
  item: DecimalProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a float property */
export interface FloatProperty {
  /** Property */
  property: number;
}

export function floatPropertySerializer(
  item: FloatProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a int property */
export interface IntProperty {
  /** Property */
  property: number;
}

export function intPropertySerializer(
  item: IntProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a bytes property */
export interface BytesProperty {
  /** Property */
  property: Uint8Array;
}

export function bytesPropertySerializer(
  item: BytesProperty,
): Record<string, unknown> {
  return {
    property: uint8ArrayToString(item["property"], "base64"),
  };
}

/** Model with a string property */
export interface StringProperty {
  /** Property */
  property: string;
}

export function stringPropertySerializer(
  item: StringProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a boolean property */
export interface BooleanProperty {
  /** Property */
  property: boolean;
}

export function booleanPropertySerializer(
  item: BooleanProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}
