// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { ActionRequest } from "./models.js";

export interface BasicHeaders {
  "header-param": string;
}

export interface BasicBodyParam {
  body: ActionRequest;
}

export interface BasicQueryParamProperties {
  "query-param": string;
}

export interface BasicQueryParam {
  queryParameters: BasicQueryParamProperties;
}

export interface BasicHeaderParam {
  headers: RawHttpHeadersInput & BasicHeaders;
}

export type BasicParameters = BasicQueryParam &
  BasicHeaderParam &
  BasicBodyParam &
  RequestParameters;
