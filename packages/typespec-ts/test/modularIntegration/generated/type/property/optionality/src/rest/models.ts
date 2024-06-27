// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface StringProperty {
  /** Property */
  property?: string;
}

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface BytesProperty {
  /** Property */
  property?: string;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property?: Date | string;
}

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property?: string;
}

/** Model with collection bytes properties */
export interface CollectionsByteProperty {
  /** Property */
  property?: string[];
}

/** Model with collection models properties */
export interface CollectionsModelProperty {
  /** Property */
  property?: Array<StringProperty>;
}

/** Model with string literal property */
export interface StringLiteralProperty {
  /** Property */
  property?: "hello";
}

/** Model with int literal property */
export interface IntLiteralProperty {
  /** Property */
  property?: 1;
}

/** Model with float literal property */
export interface FloatLiteralProperty {
  /** Property */
  property?: 1.25;
}

/** Model with boolean literal property */
export interface BooleanLiteralProperty {
  /** Property */
  property?: true;
}

/** Model with union of string literal property */
export interface UnionStringLiteralProperty {
  /** Property */
  property?: "hello" | "world";
}

/** Model with union of int literal property */
export interface UnionIntLiteralProperty {
  /** Property */
  property?: 1 | 2;
}

/** Model with union of float literal property */
export interface UnionFloatLiteralProperty {
  /** Property */
  property?: 1.25 | 2.375;
}

/** Model with required and optional properties */
export interface RequiredAndOptionalProperty {
  /** optional string property */
  optionalProperty?: string;
  /** required int property */
  requiredProperty: number;
}
