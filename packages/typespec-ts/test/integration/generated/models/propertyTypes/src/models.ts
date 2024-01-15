// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Model with a boolean property */
export interface BooleanProperty {
  /** Property */
  property: boolean;
}

/** Model with a string property */
export interface StringProperty {
  /** Property */
  property: string;
}

/** Model with a bytes property */
export interface BytesProperty {
  /** Property */
  property: string;
}

/** Model with a int property */
export interface IntProperty {
  /** Property */
  property: number;
}

/** Model with a float property */
export interface FloatProperty {
  /** Property */
  property: number;
}

/** Model with a decimal property */
export interface DecimalProperty {
  /**
   * Property
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  property: number;
}

/** Model with a decimal128 property */
export interface Decimal128Property {
  /**
   * Property
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  property: number;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property: Date | string;
}

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property: string;
}

/** Model with enum properties */
export interface EnumProperty {
  /** Property */
  property: "ValueOne" | "ValueTwo";
}

/** Model with extensible enum properties */
export interface ExtensibleEnumProperty {
  /**
   * Property
   *
   * Possible values: "ValueOne", "ValueTwo"
   */
  property: string;
}

/** Model with model properties */
export interface ModelProperty {
  /** Property */
  property: InnerModel;
}

/** Inner model. Will be a property type for ModelWithModelProperties */
export interface InnerModel {
  /** Required string property */
  property: string;
}

/** Model with collection string properties */
export interface CollectionsStringProperty {
  /** Property */
  property: string[];
}

/** Model with collection int properties */
export interface CollectionsIntProperty {
  /** Property */
  property: number[];
}

/** Model with collection model properties */
export interface CollectionsModelProperty {
  /** Property */
  property: Array<InnerModel>;
}

/** Model with dictionary string properties */
export interface DictionaryStringProperty {
  /** Property */
  property: Record<string, string>;
}

/** Model with a property never. (This property should not be included). */
export interface NeverProperty {}

/** Model with a property unknown, and the data is a string. */
export interface UnknownStringProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is a int32. */
export interface UnknownIntProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is a dictionnary. */
export interface UnknownDictProperty {
  /** Property */
  property: unknown;
}

/** Model with a property unknown, and the data is an array. */
export interface UnknownArrayProperty {
  /** Property */
  property: unknown;
}

/** Model with a string literal property. */
export interface StringLiteralProperty {
  /** Property */
  property: "hello";
}

/** Model with a int literal property. */
export interface IntLiteralProperty {
  /** Property */
  property: 42;
}

/** Model with a float literal property. */
export interface FloatLiteralProperty {
  /** Property */
  property: 42.42;
}

/** Model with a boolean literal property. */
export interface BooleanLiteralProperty {
  /** Property */
  property: true;
}

/** Model with a union of string literal as property. */
export interface UnionStringLiteralProperty {
  /** Property */
  property: "hello" | "world";
}

/** Model with a union of int literal as property. */
export interface UnionIntLiteralProperty {
  /** Property */
  property: 42 | 43;
}

/** Model with a union of float literal as property. */
export interface UnionFloatLiteralProperty {
  /** Property */
  property: 42.42 | 43.43;
}
