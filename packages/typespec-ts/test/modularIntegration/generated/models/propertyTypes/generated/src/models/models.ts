// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Model with a union of float literal as property. */
export interface UnionFloatLiteralProperty {
  /** Property */
  property: 42.42 | 43.43;
}

/** Model with a union of int literal as property. */
export interface UnionIntLiteralProperty {
  /** Property */
  property: 42 | 43;
}

/** Model with a union of string literal as property. */
export interface UnionStringLiteralProperty {
  /** Property */
  property: "hello" | "world";
}

/** Model with a boolean literal property. */
export interface BooleanLiteralProperty {
  /** Property */
  property: true;
}

/** Model with a float literal property. */
export interface FloatLiteralProperty {
  /** Property */
  property: 42.42;
}

/** Model with a int literal property. */
export interface IntLiteralProperty {
  /** Property */
  property: 42;
}

/** Model with a string literal property. */
export interface StringLiteralProperty {
  /** Property */
  property: "hello";
}

/** Model with a property unknown, and the data is an array. */
export interface UnknownArrayProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is a dictionnary. */
export interface UnknownDictProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is a int32. */
export interface UnknownIntProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is a string. */
export interface UnknownStringProperty {
  /** Property */
  property: unknown;
}

/** Model with a property never. (This property should not be included). */
export interface NeverProperty {}

/** Model with dictionary string properties */
export interface DictionaryStringProperty {
  /** Property */
  property: Record<string, string>;
}

/** Model with collection model properties */
export interface CollectionsModelProperty {
  /** Property */
  property: InnerModel[];
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModel {
  /** Required string property */
  property: string;
}

/** Model with collection int properties */
export interface CollectionsIntProperty {
  /** Property */
  property: number[];
}

/** Model with collection string properties */
export interface CollectionsStringProperty {
  /** Property */
  property: string[];
}

/** Model with model properties */
export interface ModelProperty {
  /** Property */
  property: InnerModel;
}

/** Model with extensible enum properties */
export interface ExtensibleEnumProperty {
  /** Property */
  property: InnerEnum;
}

/** Enum that will be used as a property for model EnumProperty. Non-extensible. */
/** "ValueOne", "ValueTwo" */
export type InnerEnum = string;

/** Model with enum properties */
export interface EnumProperty {
  /** Property */
  property: FixedInnerEnum;
}

/** Enum that will be used as a property for model EnumProperty. Non-extensible. */
/** */
export type FixedInnerEnum = "ValueOne" | "ValueTwo";

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property: string;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property: Date;
}

/** Model with a decimal128 property */
export interface Decimal128Property {
  /** Property */
  property: number;
}

/** Model with a decimal property */
export interface DecimalProperty {
  /** Property */
  property: number;
}

/** Model with a float property */
export interface FloatProperty {
  /** Property */
  property: number;
}

/** Model with a int property */
export interface IntProperty {
  /** Property */
  property: number;
}

/** Model with a bytes property */
export interface BytesProperty {
  /** Property */
  property: Uint8Array;
}

/** Model with a string property */
export interface StringProperty {
  /** Property */
  property: string;
}

/** Model with a boolean property */
export interface BooleanProperty {
  /** Property */
  property: boolean;
}
