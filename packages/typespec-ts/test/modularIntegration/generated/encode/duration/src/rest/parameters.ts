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

export interface QueryDefaultQueryParamProperties {
  input: string;
}

export interface QueryDefaultQueryParam {
  queryParameters: QueryDefaultQueryParamProperties;
}

export type QueryDefaultParameters = QueryDefaultQueryParam & RequestParameters;

export interface QueryIso8601QueryParamProperties {
  input: string;
}

export interface QueryIso8601QueryParam {
  queryParameters: QueryIso8601QueryParamProperties;
}

export type QueryIso8601Parameters = QueryIso8601QueryParam & RequestParameters;

export interface QueryInt32SecondsQueryParamProperties {
  input: number;
}

export interface QueryInt32SecondsQueryParam {
  queryParameters: QueryInt32SecondsQueryParamProperties;
}

export type QueryInt32SecondsParameters = QueryInt32SecondsQueryParam &
  RequestParameters;

export interface QueryFloatSecondsQueryParamProperties {
  input: number;
}

export interface QueryFloatSecondsQueryParam {
  queryParameters: QueryFloatSecondsQueryParamProperties;
}

export type QueryFloatSecondsParameters = QueryFloatSecondsQueryParam &
  RequestParameters;

export interface QueryInt32SecondsArrayQueryParamProperties {
  input: number[];
}

export interface QueryInt32SecondsArrayQueryParam {
  queryParameters: QueryInt32SecondsArrayQueryParamProperties;
}

export type QueryInt32SecondsArrayParameters =
  QueryInt32SecondsArrayQueryParam & RequestParameters;

export interface PropertyDefaultBodyParam {
  body: DefaultDurationProperty;
}

export type PropertyDefaultParameters = PropertyDefaultBodyParam &
  RequestParameters;

export interface PropertyIso8601BodyParam {
  body: ISO8601DurationProperty;
}

export type PropertyIso8601Parameters = PropertyIso8601BodyParam &
  RequestParameters;

export interface PropertyInt32SecondsBodyParam {
  body: Int32SecondsDurationProperty;
}

export type PropertyInt32SecondsParameters = PropertyInt32SecondsBodyParam &
  RequestParameters;

export interface PropertyFloatSecondsBodyParam {
  body: FloatSecondsDurationProperty;
}

export type PropertyFloatSecondsParameters = PropertyFloatSecondsBodyParam &
  RequestParameters;

export interface PropertyFloatSecondsArrayBodyParam {
  body: FloatSecondsDurationArrayProperty;
}

export type PropertyFloatSecondsArrayParameters =
  PropertyFloatSecondsArrayBodyParam & RequestParameters;

export interface HeaderDefaultHeaders {
  duration: string;
}

export interface HeaderDefaultHeaderParam {
  headers: RawHttpHeadersInput & HeaderDefaultHeaders;
}

export type HeaderDefaultParameters = HeaderDefaultHeaderParam &
  RequestParameters;

export interface HeaderIso8601Headers {
  duration: string;
}

export interface HeaderIso8601HeaderParam {
  headers: RawHttpHeadersInput & HeaderIso8601Headers;
}

export type HeaderIso8601Parameters = HeaderIso8601HeaderParam &
  RequestParameters;

export interface HeaderIso8601ArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  duration: string;
}

export interface HeaderIso8601ArrayHeaderParam {
  headers: RawHttpHeadersInput & HeaderIso8601ArrayHeaders;
}

export type HeaderIso8601ArrayParameters = HeaderIso8601ArrayHeaderParam &
  RequestParameters;

export interface HeaderInt32SecondsHeaders {
  duration: number;
}

export interface HeaderInt32SecondsHeaderParam {
  headers: RawHttpHeadersInput & HeaderInt32SecondsHeaders;
}

export type HeaderInt32SecondsParameters = HeaderInt32SecondsHeaderParam &
  RequestParameters;

export interface HeaderFloatSecondsHeaders {
  duration: number;
}

export interface HeaderFloatSecondsHeaderParam {
  headers: RawHttpHeadersInput & HeaderFloatSecondsHeaders;
}

export type HeaderFloatSecondsParameters = HeaderFloatSecondsHeaderParam &
  RequestParameters;
