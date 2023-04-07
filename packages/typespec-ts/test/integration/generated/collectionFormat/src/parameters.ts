// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface TestMultiQueryParamProperties {
  /** Possible values for colors are [blue,red,green] This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  colors: string;
}

export interface TestMultiQueryParam {
  queryParameters: TestMultiQueryParamProperties;
}

export type TestMultiParameters = TestMultiQueryParam & RequestParameters;

export interface TestCsvQueryParamProperties {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface TestCsvQueryParam {
  queryParameters: TestCsvQueryParamProperties;
}

export type TestCsvParameters = TestCsvQueryParam & RequestParameters;

export interface TestCsvHeaderHeaders {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface TestCsvHeaderHeaderParam {
  headers: RawHttpHeadersInput & TestCsvHeaderHeaders;
}

export type TestCsvHeaderParameters = TestCsvHeaderHeaderParam &
  RequestParameters;

export interface TestDefaultHeaderHeaders {
  /** Possible values for colors are [blue,red,green] */
  colors: string[];
}

export interface TestDefaultHeaderHeaderParam {
  headers: RawHttpHeadersInput & TestDefaultHeaderHeaders;
}

export type TestDefaultHeaderParameters = TestDefaultHeaderHeaderParam &
  RequestParameters;
