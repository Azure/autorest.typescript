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

/** Model with required and optional properties */
export interface RequiredAndOptionalPropertyOutput {
  /** optional string property */
  optionalProperty?: string;
  /** required int property */
  requiredProperty: number;
}
