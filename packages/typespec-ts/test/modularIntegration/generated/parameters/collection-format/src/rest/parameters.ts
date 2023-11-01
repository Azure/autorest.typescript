// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface MultiQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  colors: string;
}

export interface MultiQueryParam {
  queryParameters: MultiQueryParamProperties;
}

export type MultiParameters = MultiQueryParam & RequestParameters;

export interface SsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as ssv collection, we provide buildSsvCollection from serializeHelper.ts to help */
  colors: string;
}

export interface SsvQueryParam {
  queryParameters: SsvQueryParamProperties;
}

export type SsvParameters = SsvQueryParam & RequestParameters;

export interface TsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as tsv collection, we provide buildTsvCollection from serializeHelper.ts to help */
  colors: string;
}

export interface TsvQueryParam {
  queryParameters: TsvQueryParamProperties;
}

export type TsvParameters = TsvQueryParam & RequestParameters;

export interface PipesQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as pipe collection, we provide buildPipeCollection from serializeHelper.ts to help */
  colors: string;
}

export interface PipesQueryParam {
  queryParameters: PipesQueryParamProperties;
}

export type PipesParameters = PipesQueryParam & RequestParameters;

export interface CsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface CsvQueryParam {
  queryParameters: CsvQueryParamProperties;
}

export type CsvParameters = CsvQueryParam & RequestParameters;

export interface CsvHeaders {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  colors: string;
}

export interface CsvHeaderParam {
  headers: RawHttpHeadersInput & CsvHeaders;
}

export type CsvParameters = CsvHeaderParam & RequestParameters;
