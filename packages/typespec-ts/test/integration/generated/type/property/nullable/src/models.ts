// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Template type for testing models with nullable property. Pass in the type of the property you are looking for */
export interface StringProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Template type for testing models with nullable property. Pass in the type of the property you are looking for */
export interface BytesProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: Date | string | null;
}

/** Model with a duration property */
export interface DurationProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string | null;
}

/** Model with collection bytes properties */
export interface CollectionsByteProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: string[] | null;
}

/** Model with collection models properties */
export interface CollectionsModelProperty {
  /** Required property */
  requiredProperty: string;
  /** Property */
  nullableProperty: Array<InnerModel> | null;
}

/** Inner model used in collections model property */
export interface InnerModel {
  /** Inner model property */
  property: string;
}
