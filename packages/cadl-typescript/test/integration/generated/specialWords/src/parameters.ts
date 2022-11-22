// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BaseModel } from "./models";

export type ForParameters = RequestParameters;

export interface GetWithIfHeaders {
  if: string;
}

export interface GetWithIfHeaderParam {
  headers: RawHttpHeadersInput & GetWithIfHeaders;
}

export type GetWithIfParameters = GetWithIfHeaderParam & RequestParameters;

export interface GetWithFilterQueryParamProperties {
  filter: string;
}

export interface GetWithFilterQueryParam {
  queryParameters: GetWithFilterQueryParamProperties;
}

export type GetWithFilterParameters = GetWithFilterQueryParam &
  RequestParameters;
export type GetParameters = RequestParameters;

export interface PutBodyParam {
  body: BaseModel;
}

export type PutParameters = PutBodyParam & RequestParameters;
