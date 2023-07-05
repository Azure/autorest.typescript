// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface PublicQueryParamProperties {
  name: string;
}

export interface PublicQueryParam {
  queryParameters: PublicQueryParamProperties;
}

export type PublicParameters = PublicQueryParam & RequestParameters;

export interface InternalQueryParamProperties {
  name: string;
}

export interface InternalQueryParam {
  queryParameters: InternalQueryParamProperties;
}

export type InternalParameters = InternalQueryParam & RequestParameters;

export interface PublicOnlyQueryParamProperties {
  name: string;
}

export interface PublicOnlyQueryParam {
  queryParameters: PublicOnlyQueryParamProperties;
}

export type PublicOnlyParameters = PublicOnlyQueryParam & RequestParameters;

export interface InternalOnlyQueryParamProperties {
  name: string;
}

export interface InternalOnlyQueryParam {
  queryParameters: InternalOnlyQueryParamProperties;
}

export type InternalOnlyParameters = InternalOnlyQueryParam & RequestParameters;
