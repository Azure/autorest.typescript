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
   * Possible values: ValueOne, ValueTwo
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
