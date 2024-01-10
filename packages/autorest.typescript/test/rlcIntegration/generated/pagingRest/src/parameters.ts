// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BodyParam } from "./models";

export type PagingGetNoItemNamePagesParameters = RequestParameters;
export type PagingGetEmptyNextLinkNamePagesParameters = RequestParameters;
export type PagingGetNullNextLinkNamePagesParameters = RequestParameters;
export type PagingGetSinglePagesParameters = RequestParameters;

export interface PagingGetSinglePagesWithBodyParamsBodyParam {
  /** put {'name': 'body'} to pass the test */
  body: BodyParam;
}

export interface PagingGetSinglePagesWithBodyParamsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PagingGetSinglePagesWithBodyParamsParameters =
  PagingGetSinglePagesWithBodyParamsMediaTypesParam &
    PagingGetSinglePagesWithBodyParamsBodyParam &
    RequestParameters;
export type PagingFirstResponseEmptyParameters = RequestParameters;

export interface PagingGetMultiplePagesHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PagingGetMultiplePagesHeaderParam {
  headers?: RawHttpHeadersInput & PagingGetMultiplePagesHeaders;
}

export type PagingGetMultiplePagesParameters =
  PagingGetMultiplePagesHeaderParam & RequestParameters;

export interface PagingGetWithQueryParamsQueryParamProperties {
  /** A required integer query parameter. Put in value '100' to pass test. */
  requiredQueryParameter: number;
  /** A constant. Must be True and will be passed as a query parameter to nextOperationWithQueryParams */
  queryConstant: true;
}

export interface PagingGetWithQueryParamsQueryParam {
  queryParameters: PagingGetWithQueryParamsQueryParamProperties;
}

export type PagingGetWithQueryParamsParameters =
  PagingGetWithQueryParamsQueryParam & RequestParameters;

export interface PagingDuplicateParamsQueryParamProperties {
  /** OData filter options. Pass in 'foo' */
  $filter?: string;
}

export interface PagingDuplicateParamsQueryParam {
  queryParameters?: PagingDuplicateParamsQueryParamProperties;
}

export type PagingDuplicateParamsParameters = PagingDuplicateParamsQueryParam &
  RequestParameters;

export interface PagingPageWithMaxPageSizeQueryParamProperties {
  /** Max page size query param. Don't send */
  $maxpagesize?: "5";
}

export interface PagingPageWithMaxPageSizeQueryParam {
  queryParameters?: PagingPageWithMaxPageSizeQueryParamProperties;
}

export type PagingPageWithMaxPageSizeParameters =
  PagingPageWithMaxPageSizeQueryParam & RequestParameters;

export interface PagingNextOperationWithQueryParamsQueryParamProperties {
  /** A constant. Must be True */
  queryConstant: true;
}

export interface PagingNextOperationWithQueryParamsQueryParam {
  queryParameters: PagingNextOperationWithQueryParamsQueryParamProperties;
}

export type PagingNextOperationWithQueryParamsParameters =
  PagingNextOperationWithQueryParamsQueryParam & RequestParameters;

export interface PagingGetOdataMultiplePagesHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PagingGetOdataMultiplePagesHeaderParam {
  headers?: RawHttpHeadersInput & PagingGetOdataMultiplePagesHeaders;
}

export type PagingGetOdataMultiplePagesParameters =
  PagingGetOdataMultiplePagesHeaderParam & RequestParameters;

export interface PagingGetMultiplePagesWithOffsetHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PagingGetMultiplePagesWithOffsetHeaderParam {
  headers?: RawHttpHeadersInput & PagingGetMultiplePagesWithOffsetHeaders;
}

export type PagingGetMultiplePagesWithOffsetParameters =
  PagingGetMultiplePagesWithOffsetHeaderParam & RequestParameters;
export type PagingGetMultiplePagesRetryFirstParameters = RequestParameters;
export type PagingGetMultiplePagesRetrySecondParameters = RequestParameters;
export type PagingGetSinglePagesFailureParameters = RequestParameters;
export type PagingGetMultiplePagesFailureParameters = RequestParameters;
export type PagingGetMultiplePagesFailureUriParameters = RequestParameters;

export interface PagingGetMultiplePagesFragmentNextLinkQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface PagingGetMultiplePagesFragmentNextLinkQueryParam {
  queryParameters: PagingGetMultiplePagesFragmentNextLinkQueryParamProperties;
}

export type PagingGetMultiplePagesFragmentNextLinkParameters =
  PagingGetMultiplePagesFragmentNextLinkQueryParam & RequestParameters;

export interface PagingGetMultiplePagesFragmentWithGroupingNextLinkQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface PagingGetMultiplePagesFragmentWithGroupingNextLinkQueryParam {
  queryParameters: PagingGetMultiplePagesFragmentWithGroupingNextLinkQueryParamProperties;
}

export type PagingGetMultiplePagesFragmentWithGroupingNextLinkParameters =
  PagingGetMultiplePagesFragmentWithGroupingNextLinkQueryParam &
    RequestParameters;

export interface PagingGetMultiplePagesLROHeaders {
  "client-request-id"?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

export interface PagingGetMultiplePagesLROHeaderParam {
  headers?: RawHttpHeadersInput & PagingGetMultiplePagesLROHeaders;
}

export type PagingGetMultiplePagesLROParameters =
  PagingGetMultiplePagesLROHeaderParam & RequestParameters;
export type PagingAppendApiVersionParameters = RequestParameters;
export type PagingReplaceApiVersionParameters = RequestParameters;

export interface PagingNextFragmentQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface PagingNextFragmentQueryParam {
  queryParameters: PagingNextFragmentQueryParamProperties;
}

export type PagingNextFragmentParameters = PagingNextFragmentQueryParam &
  RequestParameters;

export interface PagingNextFragmentWithGroupingQueryParamProperties {
  /** Sets the api version to use. */
  api_version: string;
}

export interface PagingNextFragmentWithGroupingQueryParam {
  queryParameters: PagingNextFragmentWithGroupingQueryParamProperties;
}

export type PagingNextFragmentWithGroupingParameters =
  PagingNextFragmentWithGroupingQueryParam & RequestParameters;
export type PagingGetPagingModelWithItemNameWithXMSClientNameParameters =
  RequestParameters;
