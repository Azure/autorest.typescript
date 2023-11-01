// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "./models.js";

export interface DefaultQueryParamProperties {
  value: Date | string;
}

export interface DefaultQueryParam {
  queryParameters: DefaultQueryParamProperties;
}

export type DefaultParameters = DefaultQueryParam & RequestParameters;

export interface Rfc3339QueryParamProperties {
  value: Date | string;
}

export interface Rfc3339QueryParam {
  queryParameters: Rfc3339QueryParamProperties;
}

export type Rfc3339Parameters = Rfc3339QueryParam & RequestParameters;

export interface Rfc7231QueryParamProperties {
  value: Date | string;
}

export interface Rfc7231QueryParam {
  queryParameters: Rfc7231QueryParamProperties;
}

export type Rfc7231Parameters = Rfc7231QueryParam & RequestParameters;

export interface UnixTimestampQueryParamProperties {
  value: number;
}

export interface UnixTimestampQueryParam {
  queryParameters: UnixTimestampQueryParamProperties;
}

export type UnixTimestampParameters = UnixTimestampQueryParam &
  RequestParameters;

export interface UnixTimestampArrayQueryParamProperties {
  value: number[];
}

export interface UnixTimestampArrayQueryParam {
  queryParameters: UnixTimestampArrayQueryParamProperties;
}

export type UnixTimestampArrayParameters = UnixTimestampArrayQueryParam &
  RequestParameters;

export interface DefaultBodyParam {
  body: DefaultDatetimeProperty;
}

export type DefaultParameters = DefaultBodyParam & RequestParameters;

export interface Rfc3339BodyParam {
  body: Rfc3339DatetimeProperty;
}

export type Rfc3339Parameters = Rfc3339BodyParam & RequestParameters;

export interface Rfc7231BodyParam {
  body: Rfc7231DatetimeProperty;
}

export type Rfc7231Parameters = Rfc7231BodyParam & RequestParameters;

export interface UnixTimestampBodyParam {
  body: UnixTimestampDatetimeProperty;
}

export type UnixTimestampParameters = UnixTimestampBodyParam &
  RequestParameters;

export interface UnixTimestampArrayBodyParam {
  body: UnixTimestampArrayDatetimeProperty;
}

export type UnixTimestampArrayParameters = UnixTimestampArrayBodyParam &
  RequestParameters;

export interface DefaultHeaders {
  value: string;
}

export interface DefaultHeaderParam {
  headers: RawHttpHeadersInput & DefaultHeaders;
}

export type DefaultParameters = DefaultHeaderParam & RequestParameters;

export interface Rfc3339Headers {
  value: string;
}

export interface Rfc3339HeaderParam {
  headers: RawHttpHeadersInput & Rfc3339Headers;
}

export type Rfc3339Parameters = Rfc3339HeaderParam & RequestParameters;

export interface Rfc7231Headers {
  value: string;
}

export interface Rfc7231HeaderParam {
  headers: RawHttpHeadersInput & Rfc7231Headers;
}

export type Rfc7231Parameters = Rfc7231HeaderParam & RequestParameters;

export interface UnixTimestampHeaders {
  value: number;
}

export interface UnixTimestampHeaderParam {
  headers: RawHttpHeadersInput & UnixTimestampHeaders;
}

export type UnixTimestampParameters = UnixTimestampHeaderParam &
  RequestParameters;

export interface UnixTimestampArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  value: string;
}

export interface UnixTimestampArrayHeaderParam {
  headers: RawHttpHeadersInput & UnixTimestampArrayHeaders;
}

export type UnixTimestampArrayParameters = UnixTimestampArrayHeaderParam &
  RequestParameters;
export type DefaultParameters = RequestParameters;
export type Rfc3339Parameters = RequestParameters;
export type Rfc7231Parameters = RequestParameters;
export type UnixTimestampParameters = RequestParameters;
