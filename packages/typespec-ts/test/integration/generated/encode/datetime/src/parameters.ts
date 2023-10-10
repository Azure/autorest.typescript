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
} from "./models";

export interface QueryDefaultQueryParamProperties {
  value: Date | string;
}

export interface QueryDefaultQueryParam {
  queryParameters: QueryDefaultQueryParamProperties;
}

export type QueryDefaultParameters = QueryDefaultQueryParam & RequestParameters;

export interface QueryRfc3339QueryParamProperties {
  value: Date | string;
}

export interface QueryRfc3339QueryParam {
  queryParameters: QueryRfc3339QueryParamProperties;
}

export type QueryRfc3339Parameters = QueryRfc3339QueryParam & RequestParameters;

export interface QueryRfc7231QueryParamProperties {
  value: Date | string;
}

export interface QueryRfc7231QueryParam {
  queryParameters: QueryRfc7231QueryParamProperties;
}

export type QueryRfc7231Parameters = QueryRfc7231QueryParam & RequestParameters;

export interface QueryUnixTimestampQueryParamProperties {
  value: number;
}

export interface QueryUnixTimestampQueryParam {
  queryParameters: QueryUnixTimestampQueryParamProperties;
}

export type QueryUnixTimestampParameters = QueryUnixTimestampQueryParam &
  RequestParameters;

export interface QueryUnixTimestampArrayQueryParamProperties {
  value: number[];
}

export interface QueryUnixTimestampArrayQueryParam {
  queryParameters: QueryUnixTimestampArrayQueryParamProperties;
}

export type QueryUnixTimestampArrayParameters =
  QueryUnixTimestampArrayQueryParam & RequestParameters;

export interface PropertyDefaultBodyParam {
  body: DefaultDatetimeProperty;
}

export type PropertyDefaultParameters = PropertyDefaultBodyParam &
  RequestParameters;

export interface PropertyRfc3339BodyParam {
  body: Rfc3339DatetimeProperty;
}

export type PropertyRfc3339Parameters = PropertyRfc3339BodyParam &
  RequestParameters;

export interface PropertyRfc7231BodyParam {
  body: Rfc7231DatetimeProperty;
}

export type PropertyRfc7231Parameters = PropertyRfc7231BodyParam &
  RequestParameters;

export interface PropertyUnixTimestampBodyParam {
  body: UnixTimestampDatetimeProperty;
}

export type PropertyUnixTimestampParameters = PropertyUnixTimestampBodyParam &
  RequestParameters;

export interface PropertyUnixTimestampArrayBodyParam {
  body: UnixTimestampArrayDatetimeProperty;
}

export type PropertyUnixTimestampArrayParameters =
  PropertyUnixTimestampArrayBodyParam & RequestParameters;

export interface HeaderDefaultHeaders {
  value: string;
}

export interface HeaderDefaultHeaderParam {
  headers: RawHttpHeadersInput & HeaderDefaultHeaders;
}

export type HeaderDefaultParameters = HeaderDefaultHeaderParam &
  RequestParameters;

export interface HeaderRfc3339Headers {
  value: string;
}

export interface HeaderRfc3339HeaderParam {
  headers: RawHttpHeadersInput & HeaderRfc3339Headers;
}

export type HeaderRfc3339Parameters = HeaderRfc3339HeaderParam &
  RequestParameters;

export interface HeaderRfc7231Headers {
  value: string;
}

export interface HeaderRfc7231HeaderParam {
  headers: RawHttpHeadersInput & HeaderRfc7231Headers;
}

export type HeaderRfc7231Parameters = HeaderRfc7231HeaderParam &
  RequestParameters;

export interface HeaderUnixTimestampHeaders {
  value: number;
}

export interface HeaderUnixTimestampHeaderParam {
  headers: RawHttpHeadersInput & HeaderUnixTimestampHeaders;
}

export type HeaderUnixTimestampParameters = HeaderUnixTimestampHeaderParam &
  RequestParameters;

export interface HeaderUnixTimestampArrayHeaders {
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  value: string;
}

export interface HeaderUnixTimestampArrayHeaderParam {
  headers: RawHttpHeadersInput & HeaderUnixTimestampArrayHeaders;
}

export type HeaderUnixTimestampArrayParameters =
  HeaderUnixTimestampArrayHeaderParam & RequestParameters;
export type ResponseHeaderDefaultParameters = RequestParameters;
export type ResponseHeaderRfc3339Parameters = RequestParameters;
export type ResponseHeaderRfc7231Parameters = RequestParameters;
export type ResponseHeaderUnixTimestampParameters = RequestParameters;
