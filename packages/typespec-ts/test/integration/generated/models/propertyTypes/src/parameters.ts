// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  DictionaryStringProperty,
  NeverProperty,
} from "./models";

export type BooleanModelGetParameters = RequestParameters;

export interface BooleanModelPutBodyParam {
  /** body */
  body: BooleanProperty;
}

export type BooleanModelPutParameters = BooleanModelPutBodyParam &
  RequestParameters;
export type StringModelGetParameters = RequestParameters;

export interface StringModelPutBodyParam {
  /** body */
  body: StringProperty;
}

export type StringModelPutParameters = StringModelPutBodyParam &
  RequestParameters;
export type BytesGetParameters = RequestParameters;

export interface BytesPutBodyParam {
  /** body */
  body: BytesProperty;
}

export type BytesPutParameters = BytesPutBodyParam & RequestParameters;
export type IntGetParameters = RequestParameters;

export interface IntPutBodyParam {
  /** body */
  body: IntProperty;
}

export type IntPutParameters = IntPutBodyParam & RequestParameters;
export type FloatGetParameters = RequestParameters;

export interface FloatPutBodyParam {
  /** body */
  body: FloatProperty;
}

export type FloatPutParameters = FloatPutBodyParam & RequestParameters;
export type DatetimeGetParameters = RequestParameters;

export interface DatetimePutBodyParam {
  /** body */
  body: DatetimeProperty;
}

export type DatetimePutParameters = DatetimePutBodyParam & RequestParameters;
export type DurationGetParameters = RequestParameters;

export interface DurationPutBodyParam {
  /** body */
  body: DurationProperty;
}

export type DurationPutParameters = DurationPutBodyParam & RequestParameters;
export type EnumGetParameters = RequestParameters;

export interface EnumPutBodyParam {
  /** body */
  body: EnumProperty;
}

export type EnumPutParameters = EnumPutBodyParam & RequestParameters;
export type ExtensibleEnumGetParameters = RequestParameters;

export interface ExtensibleEnumPutBodyParam {
  /** body */
  body: ExtensibleEnumProperty;
}

export type ExtensibleEnumPutParameters = ExtensibleEnumPutBodyParam &
  RequestParameters;
export type ModelGetParameters = RequestParameters;

export interface ModelPutBodyParam {
  /** body */
  body: ModelProperty;
}

export type ModelPutParameters = ModelPutBodyParam & RequestParameters;
export type CollectionsStringGetParameters = RequestParameters;

export interface CollectionsStringPutBodyParam {
  /** body */
  body: CollectionsStringProperty;
}

export type CollectionsStringPutParameters = CollectionsStringPutBodyParam &
  RequestParameters;
export type CollectionsIntGetParameters = RequestParameters;

export interface CollectionsIntPutBodyParam {
  /** body */
  body: CollectionsIntProperty;
}

export type CollectionsIntPutParameters = CollectionsIntPutBodyParam &
  RequestParameters;
export type CollectionsModelGetParameters = RequestParameters;

export interface CollectionsModelPutBodyParam {
  /** body */
  body: CollectionsModelProperty;
}

export type CollectionsModelPutParameters = CollectionsModelPutBodyParam &
  RequestParameters;
export type DictionaryStringGetParameters = RequestParameters;

export interface DictionaryStringPutBodyParam {
  /** body */
  body: DictionaryStringProperty;
}

export type DictionaryStringPutParameters = DictionaryStringPutBodyParam &
  RequestParameters;
export type NeverGetParameters = RequestParameters;

export interface NeverPutBodyParam {
  /** body */
  body: NeverProperty;
}

export type NeverPutParameters = NeverPutBodyParam & RequestParameters;
