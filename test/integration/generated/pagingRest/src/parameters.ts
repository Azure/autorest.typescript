// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import "./models";

export type GetNoItemNamePagesParameters = RequestParameters;
export type GetNullNextLinkNamePagesParameters = RequestParameters;
export type GetSinglePagesParameters = RequestParameters;
export type FirstResponseEmptyParameters = RequestParameters;
export type GetMultiplePagesParameters = RequestParameters;

export interface GetWithQueryParamsQueryParamProperties {
  /** A required integer query parameter. Put in value '100' to pass test. */
  requiredQueryParameter: number;
}

export interface GetWithQueryParamsQueryParam {
  queryParameters: GetWithQueryParamsQueryParamProperties;
}

export type GetWithQueryParamsParameters = GetWithQueryParamsQueryParam &
  RequestParameters;
export type NextOperationWithQueryParamsParameters = RequestParameters;
export type GetOdataMultiplePagesParameters = RequestParameters;
export type GetMultiplePagesWithOffsetParameters = RequestParameters;
export type GetMultiplePagesRetryFirstParameters = RequestParameters;
export type GetMultiplePagesRetrySecondParameters = RequestParameters;
export type GetSinglePagesFailureParameters = RequestParameters;
export type GetMultiplePagesFailureParameters = RequestParameters;
export type GetMultiplePagesFailureUriParameters = RequestParameters;

export interface GetMultiplePagesFragmentNextLinkQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface GetMultiplePagesFragmentNextLinkQueryParam {
  queryParameters: GetMultiplePagesFragmentNextLinkQueryParamProperties;
}

export type GetMultiplePagesFragmentNextLinkParameters = GetMultiplePagesFragmentNextLinkQueryParam &
  RequestParameters;

export interface GetMultiplePagesFragmentWithGroupingNextLinkQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface GetMultiplePagesFragmentWithGroupingNextLinkQueryParam {
  queryParameters: GetMultiplePagesFragmentWithGroupingNextLinkQueryParamProperties;
}

export type GetMultiplePagesFragmentWithGroupingNextLinkParameters = GetMultiplePagesFragmentWithGroupingNextLinkQueryParam &
  RequestParameters;
export type GetMultiplePagesLROParameters = RequestParameters;

export interface NextFragmentQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface NextFragmentQueryParam {
  queryParameters: NextFragmentQueryParamProperties;
}

export type NextFragmentParameters = NextFragmentQueryParam & RequestParameters;

export interface NextFragmentWithGroupingQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface NextFragmentWithGroupingQueryParam {
  queryParameters: NextFragmentWithGroupingQueryParamProperties;
}

export type NextFragmentWithGroupingParameters = NextFragmentWithGroupingQueryParam &
  RequestParameters;
export type GetPagingModelWithItemNameWithXMSClientNameParameters = RequestParameters;
