// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface QueryMultiQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  colors: string;
}

export interface QueryMultiQueryParam {
  queryParameters: QueryMultiQueryParamProperties;
}

export type QueryMultiParameters = QueryMultiQueryParam & RequestParameters;

export interface QueryCsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface QueryCsvQueryParam {
  queryParameters: QueryCsvQueryParamProperties;
}

export type QueryCsvParameters = QueryCsvQueryParam & RequestParameters;

export interface HeaderCsvHeaders {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface HeaderCsvHeaderParam {
  headers: RawHttpHeadersInput & HeaderCsvHeaders;
}

export type HeaderCsvParameters = HeaderCsvHeaderParam & RequestParameters;
