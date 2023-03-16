// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface TestMultiQueryParamProperties {
  /**  This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  colors: string;
}

export interface TestMultiQueryParam {
  queryParameters: TestMultiQueryParamProperties;
}

export type TestMultiParameters = TestMultiQueryParam & RequestParameters;

export interface TestCsvQueryParamProperties {
  colors: string[];
}

export interface TestCsvQueryParam {
  queryParameters: TestCsvQueryParamProperties;
}

export type TestCsvParameters = TestCsvQueryParam & RequestParameters;
