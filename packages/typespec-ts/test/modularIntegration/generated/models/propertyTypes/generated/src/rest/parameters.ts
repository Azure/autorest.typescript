// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  BooleanProperty,
  StringProperty,
  BytesProperty,
  IntProperty,
  FloatProperty,
  DecimalProperty,
  Decimal128Property,
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
  UnknownStringProperty,
  UnknownIntProperty,
  UnknownDictProperty,
  UnknownArrayProperty,
  StringLiteralProperty,
  IntLiteralProperty,
  FloatLiteralProperty,
  BooleanLiteralProperty,
  UnionStringLiteralProperty,
  UnionIntLiteralProperty,
  UnionFloatLiteralProperty,
} from "./models.js";

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
export type DecimalGetParameters = RequestParameters;

export interface DecimalPutBodyParam {
  /** body */
  body: DecimalProperty;
}

export type DecimalPutParameters = DecimalPutBodyParam & RequestParameters;
export type Decimal128GetParameters = RequestParameters;

export interface Decimal128PutBodyParam {
  /** body */
  body: Decimal128Property;
}

export type Decimal128PutParameters = Decimal128PutBodyParam &
  RequestParameters;
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
export type UnknownStringGetParameters = RequestParameters;

export interface UnknownStringPutBodyParam {
  /** body */
  body: UnknownStringProperty;
}

export type UnknownStringPutParameters = UnknownStringPutBodyParam &
  RequestParameters;
export type UnknownIntGetParameters = RequestParameters;

export interface UnknownIntPutBodyParam {
  /** body */
  body: UnknownIntProperty;
}

export type UnknownIntPutParameters = UnknownIntPutBodyParam &
  RequestParameters;
export type UnknownDictGetParameters = RequestParameters;

export interface UnknownDictPutBodyParam {
  /** body */
  body: UnknownDictProperty;
}

export type UnknownDictPutParameters = UnknownDictPutBodyParam &
  RequestParameters;
export type UnknownArrayGetParameters = RequestParameters;

export interface UnknownArrayPutBodyParam {
  /** body */
  body: UnknownArrayProperty;
}

export type UnknownArrayPutParameters = UnknownArrayPutBodyParam &
  RequestParameters;
export type StringLiteralGetParameters = RequestParameters;

export interface StringLiteralPutBodyParam {
  /** body */
  body: StringLiteralProperty;
}

export type StringLiteralPutParameters = StringLiteralPutBodyParam &
  RequestParameters;
export type IntLiteralGetParameters = RequestParameters;

export interface IntLiteralPutBodyParam {
  /** body */
  body: IntLiteralProperty;
}

export type IntLiteralPutParameters = IntLiteralPutBodyParam &
  RequestParameters;
export type FloatLiteralGetParameters = RequestParameters;

export interface FloatLiteralPutBodyParam {
  /** body */
  body: FloatLiteralProperty;
}

export type FloatLiteralPutParameters = FloatLiteralPutBodyParam &
  RequestParameters;
export type BooleanLiteralGetParameters = RequestParameters;

export interface BooleanLiteralPutBodyParam {
  /** body */
  body: BooleanLiteralProperty;
}

export type BooleanLiteralPutParameters = BooleanLiteralPutBodyParam &
  RequestParameters;
export type UnionStringLiteralGetParameters = RequestParameters;

export interface UnionStringLiteralPutBodyParam {
  /** body */
  body: UnionStringLiteralProperty;
}

export type UnionStringLiteralPutParameters = UnionStringLiteralPutBodyParam &
  RequestParameters;
export type UnionIntLiteralGetParameters = RequestParameters;

export interface UnionIntLiteralPutBodyParam {
  /** body */
  body: UnionIntLiteralProperty;
}

export type UnionIntLiteralPutParameters = UnionIntLiteralPutBodyParam &
  RequestParameters;
export type UnionFloatLiteralGetParameters = RequestParameters;

export interface UnionFloatLiteralPutBodyParam {
  /** body */
  body: UnionFloatLiteralProperty;
}

export type UnionFloatLiteralPutParameters = UnionFloatLiteralPutBodyParam &
  RequestParameters;
