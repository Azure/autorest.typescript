// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Model with a boolean property */
export interface BooleanPropertyOutput {
  /** Property */
  property: boolean;
}

/** Model with a string property */
export interface StringPropertyOutput {
  /** Property */
  property: string;
}

/** Model with a bytes property */
export interface BytesPropertyOutput {
  /** Property */
  property: string;
}

/** Model with a int property */
export interface IntPropertyOutput {
  /** Property */
  property: number;
}

/** Model with a float property */
export interface FloatPropertyOutput {
  /** Property */
  property: number;
}

/** Model with a decimal property */
export interface DecimalPropertyOutput {
  /** Property */
  property: number;
}

/** Model with a decimal128 property */
export interface Decimal128PropertyOutput {
  /** Property */
  property: number;
}

/** Model with a datetime property */
export interface DatetimePropertyOutput {
  /** Property */
  property: string;
}

/** Model with a duration property */
export interface DurationPropertyOutput {
  /** Property */
  property: string;
}

/** Model with enum properties */
export interface EnumPropertyOutput {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with extensible enum properties */
export interface ExtensibleEnumPropertyOutput {
  /**
   * Property
   *
   * Possible values: ValueOne, ValueTwo
   */
  property: string;
}

/** Model with model properties */
export interface ModelPropertyOutput {
  /** Property */
  property: InnerModelOutput;
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModelOutput {
  /** Required string property */
  property: string;
}

/** Model with collection string properties */
export interface CollectionsStringPropertyOutput {
  /** Property */
  property: string[];
}

/** Model with collection int properties */
export interface CollectionsIntPropertyOutput {
  /** Property */
  property: number[];
}

/** Model with collection model properties */
export interface CollectionsModelPropertyOutput {
  /** Property */
  property: Array<InnerModelOutput>;
}

/** Model with dictionary string properties */
export interface DictionaryStringPropertyOutput {
  /** Property */
  property: Record<string, string>;
}

/** Model with a property never. (This property should not be included). */
export interface NeverPropertyOutput {}

/** Model with a property unknown, and the data is a string. */
export interface UnknownStringPropertyOutput {
  /** Property */
  property: any;
}

/** Model with a property unknown, and the data is a int32. */
export interface UnknownIntPropertyOutput {
  /** Property */
  property: any;
}

/** Model with a property unknown, and the data is a dictionnary. */
export interface UnknownDictPropertyOutput {
  /** Property */
  property: any;
}

/** Model with a property unknown, and the data is an array. */
export interface UnknownArrayPropertyOutput {
  /** Property */
  property: any;
}

/** Model with a string literal property. */
export interface StringLiteralPropertyOutput {
  /** Property */
  property: "hello";
}

/** Model with a int literal property. */
export interface IntLiteralPropertyOutput {
  /** Property */
  property: 42;
}

/** Model with a float literal property. */
export interface FloatLiteralPropertyOutput {
  /** Property */
  property: 42.42;
}

/** Model with a boolean literal property. */
export interface BooleanLiteralPropertyOutput {
  /** Property */
  property: true;
}

/** Model with a union of string literal as property. */
export interface UnionStringLiteralPropertyOutput {
  /** Property */
  property: "hello" | "world";
}

/** Model with a union of int literal as property. */
export interface UnionIntLiteralPropertyOutput {
  /** Property */
  property: 42 | 43;
}

/** Model with a union of float literal as property. */
export interface UnionFloatLiteralPropertyOutput {
  /** Property */
  property: 42.42 | 43.43;
}
