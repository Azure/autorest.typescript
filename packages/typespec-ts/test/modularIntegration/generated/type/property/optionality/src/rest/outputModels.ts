// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface StringPropertyOutput {
  /** Property */
  property?: string;
}

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface BytesPropertyOutput {
  /** Property */
  property?: string;
}

/** Model with a datetime property */
export interface DatetimePropertyOutput {
  /** Property */
  property?: string;
}

/** Model with a duration property */
export interface DurationPropertyOutput {
  /** Property */
  property?: string;
}

/** Model with collection bytes properties */
export interface CollectionsBytePropertyOutput {
  /** Property */
  property?: string[];
}

/** Model with collection models properties */
export interface CollectionsModelPropertyOutput {
  /** Property */
  property?: Array<StringPropertyOutput>;
}

/** Model with string literal property */
export interface StringLiteralPropertyOutput {
  /** Property */
  property?: "hello";
}

/** Model with int literal property */
export interface IntLiteralPropertyOutput {
  /** Property */
  property?: 1;
}

/** Model with float literal property */
export interface FloatLiteralPropertyOutput {
  /** Property */
  property?: 1.25;
}

/** Model with boolean literal property */
export interface BooleanLiteralPropertyOutput {
  /** Property */
  property?: true;
}

/** Model with union of string literal property */
export interface UnionStringLiteralPropertyOutput {
  /** Property */
  property?: "hello" | "world";
}

/** Model with union of int literal property */
export interface UnionIntLiteralPropertyOutput {
  /** Property */
  property?: 1 | 2;
}

/** Model with union of float literal property */
export interface UnionFloatLiteralPropertyOutput {
  /** Property */
  property?: 1.25 | 2.375;
}

/** Model with required and optional properties */
export interface RequiredAndOptionalPropertyOutput {
  /** optional string property */
  optionalProperty?: string;
  /** required int property */
  requiredProperty: number;
}
