// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type WithoutApiVersionParameters = RequestParameters;

export interface WithQueryApiVersionQueryParamProperties {
  "api-version": string;
}

export interface WithQueryApiVersionQueryParam {
  queryParameters: WithQueryApiVersionQueryParamProperties;
}

export type WithQueryApiVersionParameters = WithQueryApiVersionQueryParam &
  RequestParameters;
export type WithPathApiVersionParameters = RequestParameters;
