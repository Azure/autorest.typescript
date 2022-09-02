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
  body: BooleanProperty;
}

export type BooleanPutParameters = BooleanPutBodyParam & RequestParameters;
export type StringGetParameters = RequestParameters;

export interface StringPutBodyParam {
  body: StringProperty;
}

export type StringPutParameters = StringPutBodyParam & RequestParameters;
export type BytesGetParameters = RequestParameters;

export interface BytesPutBodyParam {
  body: BytesProperty;
}

export type BytesPutParameters = BytesPutBodyParam & RequestParameters;
export type IntGetParameters = RequestParameters;

export interface IntPutBodyParam {
  body: IntProperty;
}

export type IntPutParameters = IntPutBodyParam & RequestParameters;
export type FloatGetParameters = RequestParameters;

export interface FloatPutBodyParam {
  body: FloatProperty;
}

export type FloatPutParameters = FloatPutBodyParam & RequestParameters;
export type DatetimeGetParameters = RequestParameters;

export interface DatetimePutBodyParam {
  body: DatetimeProperty;
}

export type DatetimePutParameters = DatetimePutBodyParam & RequestParameters;
export type DurationGetParameters = RequestParameters;

export interface DurationPutBodyParam {
  body: DurationProperty;
}

export type DurationPutParameters = DurationPutBodyParam & RequestParameters;
export type EnumGetParameters = RequestParameters;

export interface EnumPutBodyParam {
  body: EnumProperty;
}

export type EnumPutParameters = EnumPutBodyParam & RequestParameters;
export type ExtensibleEnumGetParameters = RequestParameters;

export interface ExtensibleEnumPutBodyParam {
  body: ExtensibleEnumProperty;
}

export type ExtensibleEnumPutParameters = ExtensibleEnumPutBodyParam &
  RequestParameters;
export type ModelGetParameters = RequestParameters;

export interface ModelPutBodyParam {
  body: ModelProperty;
}

export type ModelPutParameters = ModelPutBodyParam & RequestParameters;
export type CollectionsStringGetParameters = RequestParameters;

export interface CollectionsStringPutBodyParam {
  body: CollectionsStringProperty;
}

export type CollectionsStringPutParameters = CollectionsStringPutBodyParam &
  RequestParameters;
export type CollectionsIntGetParameters = RequestParameters;

export interface CollectionsIntPutBodyParam {
  body: CollectionsIntProperty;
}

export type CollectionsIntPutParameters = CollectionsIntPutBodyParam &
  RequestParameters;
export type CollectionsModelGetParameters = RequestParameters;

export interface CollectionsModelPutBodyParam {
  body: CollectionsModelProperty;
}

export type CollectionsModelPutParameters = CollectionsModelPutBodyParam &
  RequestParameters;
