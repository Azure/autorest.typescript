// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { InnerModel } from "./models.js";

export type Int32ValueGetParameters = RequestParameters;

export interface Int32ValuePutBodyParam {
  body: number[];
}

export type Int32ValuePutParameters = Int32ValuePutBodyParam &
  RequestParameters;
export type Int64ValueGetParameters = RequestParameters;

export interface Int64ValuePutBodyParam {
  body: number[];
}

export type Int64ValuePutParameters = Int64ValuePutBodyParam &
  RequestParameters;
export type BooleanValueGetParameters = RequestParameters;

export interface BooleanValuePutBodyParam {
  body: boolean[];
}

export type BooleanValuePutParameters = BooleanValuePutBodyParam &
  RequestParameters;
export type StringValueGetParameters = RequestParameters;

export interface StringValuePutBodyParam {
  body: string[];
}

export type StringValuePutParameters = StringValuePutBodyParam &
  RequestParameters;
export type Float32ValueGetParameters = RequestParameters;

export interface Float32ValuePutBodyParam {
  body: number[];
}

export type Float32ValuePutParameters = Float32ValuePutBodyParam &
  RequestParameters;
export type DatetimeValueGetParameters = RequestParameters;

export interface DatetimeValuePutBodyParam {
  body: Date[] | string[];
}

export type DatetimeValuePutParameters = DatetimeValuePutBodyParam &
  RequestParameters;
export type DurationValueGetParameters = RequestParameters;

export interface DurationValuePutBodyParam {
  body: string[];
}

export type DurationValuePutParameters = DurationValuePutBodyParam &
  RequestParameters;
export type UnknownValueGetParameters = RequestParameters;

export interface UnknownValuePutBodyParam {
  body: unknown[];
}

export type UnknownValuePutParameters = UnknownValuePutBodyParam &
  RequestParameters;
export type ModelValueGetParameters = RequestParameters;

export interface ModelValuePutBodyParam {
  body: Array<InnerModel>;
}

export type ModelValuePutParameters = ModelValuePutBodyParam &
  RequestParameters;
export type NullableFloatValueGetParameters = RequestParameters;

export interface NullableFloatValuePutBodyParam {
  body: (number | null)[];
}

export type NullableFloatValuePutParameters = NullableFloatValuePutBodyParam &
  RequestParameters;
