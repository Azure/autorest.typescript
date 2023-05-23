// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
} from "./models";

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
