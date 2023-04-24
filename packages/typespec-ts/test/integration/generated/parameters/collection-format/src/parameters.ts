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

export interface QuerySsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as ssv collection, we provide buildSsvCollection from serializeHelper.ts to help */
  colors: string;
}

export interface QuerySsvQueryParam {
  queryParameters: QuerySsvQueryParamProperties;
}

export type QuerySsvParameters = QuerySsvQueryParam & RequestParameters;

export interface QueryTsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as tsv collection, we provide buildTsvCollection from serializeHelper.ts to help */
  colors: string;
}

export interface QueryTsvQueryParam {
  queryParameters: QueryTsvQueryParamProperties;
}

export type QueryTsvParameters = QueryTsvQueryParam & RequestParameters;

export interface QueryPipesQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as pipe collection, we provide buildPipeCollection from serializeHelper.ts to help */
  colors: string;
}

export interface QueryPipesQueryParam {
  queryParameters: QueryPipesQueryParamProperties;
}

export type QueryPipesParameters = QueryPipesQueryParam & RequestParameters;

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
