// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { TestModel } from "./models.js";

export interface TestBodyParam {
  body: TestModel;
}

export interface TestQueryParamProperties {
  param?: string;
}

export interface TestQueryParam {
  queryParameters?: TestQueryParamProperties;
}

export type TestParameters = TestQueryParam & TestBodyParam & RequestParameters;
