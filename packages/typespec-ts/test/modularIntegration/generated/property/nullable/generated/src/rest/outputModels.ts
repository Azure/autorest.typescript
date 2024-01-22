// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Template type for testing models with nullable property. Pass in the type of the property you are looking for */
export interface StringPropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Template type for testing models with nullable property. Pass in the type of the property you are looking for */
export interface BytesPropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Model with a datetime property */
export interface DatetimePropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Model with a duration property */
export interface DurationPropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Model with collection bytes properties */
export interface CollectionsBytePropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string[] | null;
}

/** Model with collection models properties */
export interface CollectionsModelPropertyOutput {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: Array<InnerModelOutput> | null;
}

/** Inner model used in collections model property */
export interface InnerModelOutput {
  /** Inner model property */
  property: string;
}
