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
