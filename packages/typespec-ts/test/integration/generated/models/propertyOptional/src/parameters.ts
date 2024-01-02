// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StringProperty,
  BytesProperty,
  DatetimeProperty,
  DurationProperty,
  CollectionsByteProperty,
  CollectionsModelProperty,
  RequiredAndOptionalProperty,
} from "./models";

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
