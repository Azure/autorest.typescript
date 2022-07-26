// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export type GetNoItemNamePagesParameters = RequestParameters;
export type GetNullNextLinkNamePagesParameters = RequestParameters;
export type GetSinglePagesParameters = RequestParameters;
export type FirstResponseEmptyParameters = RequestParameters;

export interface GetMultiplePagesHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface GetMultiplePagesHeaderParam {
  headers: RawHttpHeadersInput & GetMultiplePagesHeaders;
}

export type GetMultiplePagesParameters = GetMultiplePagesHeaderParam &
  RequestParameters;

export interface GetWithQueryParamsQueryParamProperties {
  /** A required integer query parameter. Put in value '100' to pass test. */
  requiredQueryParameter: number;
  /** A constant. Must be True and will be passed as a query parameter to nextOperationWithQueryParams */
  queryConstant: true;
}

export interface GetWithQueryParamsQueryParam {
  queryParameters: GetWithQueryParamsQueryParamProperties;
}

export type GetWithQueryParamsParameters = GetWithQueryParamsQueryParam &
  RequestParameters;

export interface DuplicateParamsQueryParamProperties {
  /** OData filter options. Pass in 'foo' */
  $filter?: string;
}

export interface DuplicateParamsQueryParam {
  queryParameters?: DuplicateParamsQueryParamProperties;
}

export type DuplicateParamsParameters = DuplicateParamsQueryParam &
  RequestParameters;

export interface PageWithMaxPageSizeQueryParamProperties {
  /** Max page size query param. Don't send */
  $maxpagesize?: "5";
}

export interface PageWithMaxPageSizeQueryParam {
  queryParameters?: PageWithMaxPageSizeQueryParamProperties;
}

export type PageWithMaxPageSizeParameters = PageWithMaxPageSizeQueryParam &
  RequestParameters;

export interface NextOperationWithQueryParamsQueryParamProperties {
  /** A constant. Must be True */
  queryConstant: true;
}

export interface NextOperationWithQueryParamsQueryParam {
  queryParameters: NextOperationWithQueryParamsQueryParamProperties;
}

export type NextOperationWithQueryParamsParameters = NextOperationWithQueryParamsQueryParam &
  RequestParameters;

export interface GetOdataMultiplePagesHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface GetOdataMultiplePagesHeaderParam {
  headers: RawHttpHeadersInput & GetOdataMultiplePagesHeaders;
}

export type GetOdataMultiplePagesParameters = GetOdataMultiplePagesHeaderParam &
  RequestParameters;

export interface GetMultiplePagesWithOffsetHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface GetMultiplePagesWithOffsetHeaderParam {
  headers: RawHttpHeadersInput & GetMultiplePagesWithOffsetHeaders;
}

export type GetMultiplePagesWithOffsetParameters = GetMultiplePagesWithOffsetHeaderParam &
  RequestParameters;
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

export interface GetMultiplePagesLROHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface GetMultiplePagesLROHeaderParam {
  headers: RawHttpHeadersInput & GetMultiplePagesLROHeaders;
}

export type GetMultiplePagesLROParameters = GetMultiplePagesLROHeaderParam &
  RequestParameters;
export type AppendApiVersionParameters = RequestParameters;
export type ReplaceApiVersionParameters = RequestParameters;

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
