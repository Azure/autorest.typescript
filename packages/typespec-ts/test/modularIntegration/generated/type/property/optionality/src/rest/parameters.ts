// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StringProperty,
  BytesProperty,
  DatetimeProperty,
  DurationProperty,
  PlainDateProperty,
  PlainTimeProperty,
  CollectionsByteProperty,
  CollectionsModelProperty,
  StringLiteralProperty,
  IntLiteralProperty,
  FloatLiteralProperty,
  BooleanLiteralProperty,
  UnionStringLiteralProperty,
  UnionIntLiteralProperty,
  UnionFloatLiteralProperty,
  RequiredAndOptionalProperty,
} from "./models.js";

export type StringModelGetAllParameters = RequestParameters;
export type StringModelGetDefaultParameters = RequestParameters;

export interface StringModelPutAllBodyParam {
  body: StringProperty;
}

export type StringModelPutAllParameters = StringModelPutAllBodyParam &
  RequestParameters;

export interface StringModelPutDefaultBodyParam {
  body: StringProperty;
}

export type StringModelPutDefaultParameters = StringModelPutDefaultBodyParam &
  RequestParameters;
export type BytesGetAllParameters = RequestParameters;
export type BytesGetDefaultParameters = RequestParameters;

export interface BytesPutAllBodyParam {
  body: BytesProperty;
}

export type BytesPutAllParameters = BytesPutAllBodyParam & RequestParameters;

export interface BytesPutDefaultBodyParam {
  body: BytesProperty;
}

export type BytesPutDefaultParameters = BytesPutDefaultBodyParam &
  RequestParameters;
export type DatetimeGetAllParameters = RequestParameters;
export type DatetimeGetDefaultParameters = RequestParameters;

export interface DatetimePutAllBodyParam {
  body: DatetimeProperty;
}

export type DatetimePutAllParameters = DatetimePutAllBodyParam &
  RequestParameters;

export interface DatetimePutDefaultBodyParam {
  body: DatetimeProperty;
}

export type DatetimePutDefaultParameters = DatetimePutDefaultBodyParam &
  RequestParameters;
export type DurationGetAllParameters = RequestParameters;
export type DurationGetDefaultParameters = RequestParameters;

export interface DurationPutAllBodyParam {
  body: DurationProperty;
}

export type DurationPutAllParameters = DurationPutAllBodyParam &
  RequestParameters;

export interface DurationPutDefaultBodyParam {
  body: DurationProperty;
}

export type DurationPutDefaultParameters = DurationPutDefaultBodyParam &
  RequestParameters;
export type PlainDateGetAllParameters = RequestParameters;
export type PlainDateGetDefaultParameters = RequestParameters;

export interface PlainDatePutAllBodyParam {
  body: PlainDateProperty;
}

export type PlainDatePutAllParameters = PlainDatePutAllBodyParam &
  RequestParameters;

export interface PlainDatePutDefaultBodyParam {
  body: PlainDateProperty;
}

export type PlainDatePutDefaultParameters = PlainDatePutDefaultBodyParam &
  RequestParameters;
export type PlainTimeGetAllParameters = RequestParameters;
export type PlainTimeGetDefaultParameters = RequestParameters;

export interface PlainTimePutAllBodyParam {
  body: PlainTimeProperty;
}

export type PlainTimePutAllParameters = PlainTimePutAllBodyParam &
  RequestParameters;

export interface PlainTimePutDefaultBodyParam {
  body: PlainTimeProperty;
}

export type PlainTimePutDefaultParameters = PlainTimePutDefaultBodyParam &
  RequestParameters;
export type CollectionsByteGetAllParameters = RequestParameters;
export type CollectionsByteGetDefaultParameters = RequestParameters;

export interface CollectionsBytePutAllBodyParam {
  body: CollectionsByteProperty;
}

export type CollectionsBytePutAllParameters = CollectionsBytePutAllBodyParam &
  RequestParameters;

export interface CollectionsBytePutDefaultBodyParam {
  body: CollectionsByteProperty;
}

export type CollectionsBytePutDefaultParameters =
  CollectionsBytePutDefaultBodyParam & RequestParameters;
export type CollectionsModelGetAllParameters = RequestParameters;
export type CollectionsModelGetDefaultParameters = RequestParameters;

export interface CollectionsModelPutAllBodyParam {
  body: CollectionsModelProperty;
}

export type CollectionsModelPutAllParameters = CollectionsModelPutAllBodyParam &
  RequestParameters;

export interface CollectionsModelPutDefaultBodyParam {
  body: CollectionsModelProperty;
}

export type CollectionsModelPutDefaultParameters =
  CollectionsModelPutDefaultBodyParam & RequestParameters;
export type StringLiteralGetAllParameters = RequestParameters;
export type StringLiteralGetDefaultParameters = RequestParameters;

export interface StringLiteralPutAllBodyParam {
  body: StringLiteralProperty;
}

export type StringLiteralPutAllParameters = StringLiteralPutAllBodyParam &
  RequestParameters;

export interface StringLiteralPutDefaultBodyParam {
  body: StringLiteralProperty;
}

export type StringLiteralPutDefaultParameters =
  StringLiteralPutDefaultBodyParam & RequestParameters;
export type IntLiteralGetAllParameters = RequestParameters;
export type IntLiteralGetDefaultParameters = RequestParameters;

export interface IntLiteralPutAllBodyParam {
  body: IntLiteralProperty;
}

export type IntLiteralPutAllParameters = IntLiteralPutAllBodyParam &
  RequestParameters;

export interface IntLiteralPutDefaultBodyParam {
  body: IntLiteralProperty;
}

export type IntLiteralPutDefaultParameters = IntLiteralPutDefaultBodyParam &
  RequestParameters;
export type FloatLiteralGetAllParameters = RequestParameters;
export type FloatLiteralGetDefaultParameters = RequestParameters;

export interface FloatLiteralPutAllBodyParam {
  body: FloatLiteralProperty;
}

export type FloatLiteralPutAllParameters = FloatLiteralPutAllBodyParam &
  RequestParameters;

export interface FloatLiteralPutDefaultBodyParam {
  body: FloatLiteralProperty;
}

export type FloatLiteralPutDefaultParameters = FloatLiteralPutDefaultBodyParam &
  RequestParameters;
export type BooleanLiteralGetAllParameters = RequestParameters;
export type BooleanLiteralGetDefaultParameters = RequestParameters;

export interface BooleanLiteralPutAllBodyParam {
  body: BooleanLiteralProperty;
}

export type BooleanLiteralPutAllParameters = BooleanLiteralPutAllBodyParam &
  RequestParameters;

export interface BooleanLiteralPutDefaultBodyParam {
  body: BooleanLiteralProperty;
}

export type BooleanLiteralPutDefaultParameters =
  BooleanLiteralPutDefaultBodyParam & RequestParameters;
export type UnionStringLiteralGetAllParameters = RequestParameters;
export type UnionStringLiteralGetDefaultParameters = RequestParameters;

export interface UnionStringLiteralPutAllBodyParam {
  body: UnionStringLiteralProperty;
}

export type UnionStringLiteralPutAllParameters =
  UnionStringLiteralPutAllBodyParam & RequestParameters;

export interface UnionStringLiteralPutDefaultBodyParam {
  body: UnionStringLiteralProperty;
}

export type UnionStringLiteralPutDefaultParameters =
  UnionStringLiteralPutDefaultBodyParam & RequestParameters;
export type UnionIntLiteralGetAllParameters = RequestParameters;
export type UnionIntLiteralGetDefaultParameters = RequestParameters;

export interface UnionIntLiteralPutAllBodyParam {
  body: UnionIntLiteralProperty;
}

export type UnionIntLiteralPutAllParameters = UnionIntLiteralPutAllBodyParam &
  RequestParameters;

export interface UnionIntLiteralPutDefaultBodyParam {
  body: UnionIntLiteralProperty;
}

export type UnionIntLiteralPutDefaultParameters =
  UnionIntLiteralPutDefaultBodyParam & RequestParameters;
export type UnionFloatLiteralGetAllParameters = RequestParameters;
export type UnionFloatLiteralGetDefaultParameters = RequestParameters;

export interface UnionFloatLiteralPutAllBodyParam {
  body: UnionFloatLiteralProperty;
}

export type UnionFloatLiteralPutAllParameters =
  UnionFloatLiteralPutAllBodyParam & RequestParameters;

export interface UnionFloatLiteralPutDefaultBodyParam {
  body: UnionFloatLiteralProperty;
}

export type UnionFloatLiteralPutDefaultParameters =
  UnionFloatLiteralPutDefaultBodyParam & RequestParameters;
export type RequiredAndOptionalGetAllParameters = RequestParameters;
export type RequiredAndOptionalGetRequiredOnlyParameters = RequestParameters;

export interface RequiredAndOptionalPutAllBodyParam {
  body: RequiredAndOptionalProperty;
}

export type RequiredAndOptionalPutAllParameters =
  RequiredAndOptionalPutAllBodyParam & RequestParameters;

export interface RequiredAndOptionalPutRequiredOnlyBodyParam {
  body: RequiredAndOptionalProperty;
}

export type RequiredAndOptionalPutRequiredOnlyParameters =
  RequiredAndOptionalPutRequiredOnlyBodyParam & RequestParameters;
