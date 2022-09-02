import { RequestParameters } from "@azure-rest/core-client";
import {
  BooleanProperty,
  StringProperty,
  BytesProperty,
  IntProperty,
  FloatProperty,
  DatetimeProperty,
  DurationProperty,
  EnumProperty,
  ExtensibleEnumProperty,
  ModelProperty,
  CollectionsStringProperty,
  CollectionsIntProperty,
  CollectionsModelProperty,
} from "./models";

export type BooleanGetParameters = RequestParameters;

export interface BooleanPutBodyParam {
  /** Model with a boolean property */
  body: BooleanProperty;
}

export type BooleanPutParameters = BooleanPutBodyParam & RequestParameters;
export type StringGetParameters = RequestParameters;

export interface StringPutBodyParam {
  /** Model with a string property */
  body: StringProperty;
}

export type StringPutParameters = StringPutBodyParam & RequestParameters;
export type BytesGetParameters = RequestParameters;

export interface BytesPutBodyParam {
  /** Model with a bytes property */
  body: BytesProperty;
}

export type BytesPutParameters = BytesPutBodyParam & RequestParameters;
export type IntGetParameters = RequestParameters;

export interface IntPutBodyParam {
  /** Model with a int property */
  body: IntProperty;
}

export type IntPutParameters = IntPutBodyParam & RequestParameters;
export type FloatGetParameters = RequestParameters;

export interface FloatPutBodyParam {
  /** Model with a float property */
  body: FloatProperty;
}

export type FloatPutParameters = FloatPutBodyParam & RequestParameters;
export type DatetimeGetParameters = RequestParameters;

export interface DatetimePutBodyParam {
  /** Model with a datetime property */
  body: DatetimeProperty;
}

export type DatetimePutParameters = DatetimePutBodyParam & RequestParameters;
export type DurationGetParameters = RequestParameters;

export interface DurationPutBodyParam {
  /** Model with a duration property */
  body: DurationProperty;
}

export type DurationPutParameters = DurationPutBodyParam & RequestParameters;
export type EnumGetParameters = RequestParameters;

export interface EnumPutBodyParam {
  /** Model with enum properties */
  body: EnumProperty;
}

export type EnumPutParameters = EnumPutBodyParam & RequestParameters;
export type ExtensibleEnumGetParameters = RequestParameters;

export interface ExtensibleEnumPutBodyParam {
  /** Model with extensible enum properties */
  body: ExtensibleEnumProperty;
}

export type ExtensibleEnumPutParameters = ExtensibleEnumPutBodyParam &
  RequestParameters;
export type ModelGetParameters = RequestParameters;

export interface ModelPutBodyParam {
  /** Model with model properties */
  body: ModelProperty;
}

export type ModelPutParameters = ModelPutBodyParam & RequestParameters;
export type CollectionsStringGetParameters = RequestParameters;

export interface CollectionsStringPutBodyParam {
  /** Model with collection string properties */
  body: CollectionsStringProperty;
}

export type CollectionsStringPutParameters = CollectionsStringPutBodyParam &
  RequestParameters;
export type CollectionsIntGetParameters = RequestParameters;

export interface CollectionsIntPutBodyParam {
  /** Model with collection int properties */
  body: CollectionsIntProperty;
}

export type CollectionsIntPutParameters = CollectionsIntPutBodyParam &
  RequestParameters;
export type CollectionsModelGetParameters = RequestParameters;

export interface CollectionsModelPutBodyParam {
  /** Model with collection model properties */
  body: CollectionsModelProperty;
}

export type CollectionsModelPutParameters = CollectionsModelPutBodyParam &
  RequestParameters;
