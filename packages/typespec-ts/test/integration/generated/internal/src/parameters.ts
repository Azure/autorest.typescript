// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface SharedPublicQueryParamProperties {
  name: string;
}

export interface SharedPublicQueryParam {
  queryParameters: SharedPublicQueryParamProperties;
}

export type SharedPublicParameters = SharedPublicQueryParam & RequestParameters;

export interface SharedInternalQueryParamProperties {
  name: string;
}

export interface SharedInternalQueryParam {
  queryParameters: SharedInternalQueryParamProperties;
}

export type SharedInternalParameters = SharedInternalQueryParam &
  RequestParameters;

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
