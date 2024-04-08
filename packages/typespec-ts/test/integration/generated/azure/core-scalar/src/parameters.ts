// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { AzureLocationModel } from "./models.js";

export type GetParameters = RequestParameters;

export interface PutBodyParam {
  /** _ */
  body: string;
}

export type PutParameters = PutBodyParam & RequestParameters;

export interface PostBodyParam {
  /** _ */
  body: AzureLocationModel;
}

export type PostParameters = PostBodyParam & RequestParameters;

export interface HeaderHeaders {
  /** _ */
  region: string;
}

export interface HeaderHeaderParam {
  headers: RawHttpHeadersInput & HeaderHeaders;
}

export type HeaderParameters = HeaderHeaderParam & RequestParameters;

export interface QueryQueryParamProperties {
  /** _ */
  region: string;
}

export interface QueryQueryParam {
  queryParameters: QueryQueryParamProperties;
}

export type QueryParameters = QueryQueryParam & RequestParameters;
