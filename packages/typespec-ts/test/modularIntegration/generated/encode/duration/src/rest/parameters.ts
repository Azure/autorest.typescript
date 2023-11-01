// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "./models.js";

export interface DefaultQueryParamProperties {
  input: string;
}

export interface DefaultQueryParam {
  queryParameters: DefaultQueryParamProperties;
}

export type DefaultParameters = DefaultQueryParam & RequestParameters;

export interface Iso8601QueryParamProperties {
  input: string;
}

export interface Iso8601QueryParam {
  queryParameters: Iso8601QueryParamProperties;
}

export type Iso8601Parameters = Iso8601QueryParam & RequestParameters;

export interface Int32SecondsQueryParamProperties {
  input: number;
}

export interface Int32SecondsQueryParam {
  queryParameters: Int32SecondsQueryParamProperties;
}

export type Int32SecondsParameters = Int32SecondsQueryParam & RequestParameters;

export interface FloatSecondsQueryParamProperties {
  input: number;
}

export interface FloatSecondsQueryParam {
  queryParameters: FloatSecondsQueryParamProperties;
}

export type FloatSecondsParameters = FloatSecondsQueryParam & RequestParameters;

export interface Int32SecondsArrayQueryParamProperties {
  input: number[];
}

export interface Int32SecondsArrayQueryParam {
  queryParameters: Int32SecondsArrayQueryParamProperties;
}

export type Int32SecondsArrayParameters = Int32SecondsArrayQueryParam &
  RequestParameters;

export interface DefaultBodyParam {
  body: DefaultDurationProperty;
}

export type DefaultParameters = DefaultBodyParam & RequestParameters;

export interface Iso8601BodyParam {
  body: ISO8601DurationProperty;
}

export type Iso8601Parameters = Iso8601BodyParam & RequestParameters;

export interface Int32SecondsBodyParam {
  body: Int32SecondsDurationProperty;
}

export type Int32SecondsParameters = Int32SecondsBodyParam & RequestParameters;

export interface FloatSecondsBodyParam {
  body: FloatSecondsDurationProperty;
}

export type FloatSecondsParameters = FloatSecondsBodyParam & RequestParameters;

export interface FloatSecondsArrayBodyParam {
  body: FloatSecondsDurationArrayProperty;
}

export type FloatSecondsArrayParameters = FloatSecondsArrayBodyParam &
  RequestParameters;

export interface DefaultHeaders {
  duration: string;
}

export interface DefaultHeaderParam {
  headers: RawHttpHeadersInput & DefaultHeaders;
}

export type DefaultParameters = DefaultHeaderParam & RequestParameters;

export interface Iso8601Headers {
  duration: string;
}

export interface Iso8601HeaderParam {
  headers: RawHttpHeadersInput & Iso8601Headers;
}

export type Iso8601Parameters = Iso8601HeaderParam & RequestParameters;

export interface Iso8601ArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  duration: string;
}

export interface Iso8601ArrayHeaderParam {
  headers: RawHttpHeadersInput & Iso8601ArrayHeaders;
}

export type Iso8601ArrayParameters = Iso8601ArrayHeaderParam &
  RequestParameters;

export interface Int32SecondsHeaders {
  duration: number;
}

export interface Int32SecondsHeaderParam {
  headers: RawHttpHeadersInput & Int32SecondsHeaders;
}

export type Int32SecondsParameters = Int32SecondsHeaderParam &
  RequestParameters;

export interface FloatSecondsHeaders {
  duration: number;
}

export interface FloatSecondsHeaderParam {
  headers: RawHttpHeadersInput & FloatSecondsHeaders;
}

export type FloatSecondsParameters = FloatSecondsHeaderParam &
  RequestParameters;
