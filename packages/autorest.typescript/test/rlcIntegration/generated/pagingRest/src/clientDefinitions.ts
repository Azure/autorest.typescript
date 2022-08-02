// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetNoItemNamePagesParameters,
  GetNullNextLinkNamePagesParameters,
  GetSinglePagesParameters,
  FirstResponseEmptyParameters,
  GetMultiplePagesParameters,
  GetWithQueryParamsParameters,
  DuplicateParamsParameters,
  PageWithMaxPageSizeParameters,
  NextOperationWithQueryParamsParameters,
  GetOdataMultiplePagesParameters,
  GetMultiplePagesWithOffsetParameters,
  GetMultiplePagesRetryFirstParameters,
  GetMultiplePagesRetrySecondParameters,
  GetSinglePagesFailureParameters,
  GetMultiplePagesFailureParameters,
  GetMultiplePagesFailureUriParameters,
  GetMultiplePagesFragmentNextLinkParameters,
  GetMultiplePagesFragmentWithGroupingNextLinkParameters,
  GetMultiplePagesLROParameters,
  AppendApiVersionParameters,
  ReplaceApiVersionParameters,
  NextFragmentParameters,
  NextFragmentWithGroupingParameters,
  GetPagingModelWithItemNameWithXMSClientNameParameters
} from "./parameters";
import {
  GetNoItemNamePages200Response,
  GetNoItemNamePagesdefaultResponse,
  GetNullNextLinkNamePages200Response,
  GetNullNextLinkNamePagesdefaultResponse,
  GetSinglePages200Response,
  GetSinglePagesdefaultResponse,
  FirstResponseEmpty200Response,
  FirstResponseEmptydefaultResponse,
  GetMultiplePages200Response,
  GetMultiplePagesdefaultResponse,
  GetWithQueryParams200Response,
  GetWithQueryParamsdefaultResponse,
  DuplicateParams200Response,
  DuplicateParamsdefaultResponse,
  PageWithMaxPageSize200Response,
  PageWithMaxPageSizedefaultResponse,
  NextOperationWithQueryParams200Response,
  NextOperationWithQueryParamsdefaultResponse,
  GetOdataMultiplePages200Response,
  GetOdataMultiplePagesdefaultResponse,
  GetMultiplePagesWithOffset200Response,
  GetMultiplePagesWithOffsetdefaultResponse,
  GetMultiplePagesRetryFirst200Response,
  GetMultiplePagesRetryFirstdefaultResponse,
  GetMultiplePagesRetrySecond200Response,
  GetMultiplePagesRetrySeconddefaultResponse,
  GetSinglePagesFailure200Response,
  GetSinglePagesFailuredefaultResponse,
  GetMultiplePagesFailure200Response,
  GetMultiplePagesFailuredefaultResponse,
  GetMultiplePagesFailureUri200Response,
  GetMultiplePagesFailureUridefaultResponse,
  GetMultiplePagesFragmentNextLink200Response,
  GetMultiplePagesFragmentNextLinkdefaultResponse,
  GetMultiplePagesFragmentWithGroupingNextLink200Response,
  GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse,
  GetMultiplePagesLRO202Response,
  GetMultiplePagesLROdefaultResponse,
  AppendApiVersion200Response,
  AppendApiVersiondefaultResponse,
  ReplaceApiVersion200Response,
  ReplaceApiVersiondefaultResponse,
  NextFragment200Response,
  NextFragmentdefaultResponse,
  NextFragmentWithGrouping200Response,
  NextFragmentWithGroupingdefaultResponse,
  GetPagingModelWithItemNameWithXMSClientName200Response,
  GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PagingGetNoItemNamePages {
  /** A paging operation that must return result of the default 'value' node. */
  get(
    options?: GetNoItemNamePagesParameters
  ): StreamableMethod<
    GetNoItemNamePages200Response | GetNoItemNamePagesdefaultResponse
  >;
}

export interface PagingGetNullNextLinkNamePages {
  /** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
  get(
    options?: GetNullNextLinkNamePagesParameters
  ): StreamableMethod<
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesdefaultResponse
  >;
}

export interface PagingGetSinglePages {
  /** A paging operation that finishes on the first call without a nextlink */
  get(
    options?: GetSinglePagesParameters
  ): StreamableMethod<
    GetSinglePages200Response | GetSinglePagesdefaultResponse
  >;
}

export interface PagingFirstResponseEmpty {
  /** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
  get(
    options?: FirstResponseEmptyParameters
  ): StreamableMethod<
    FirstResponseEmpty200Response | FirstResponseEmptydefaultResponse
  >;
}

export interface PagingGetMultiplePages {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesParameters
  ): StreamableMethod<
    GetMultiplePages200Response | GetMultiplePagesdefaultResponse
  >;
}

export interface PagingGetWithQueryParams {
  /** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
  get(
    options: GetWithQueryParamsParameters
  ): StreamableMethod<
    GetWithQueryParams200Response | GetWithQueryParamsdefaultResponse
  >;
}

export interface PagingDuplicateParams {
  /** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
  get(
    options?: DuplicateParamsParameters
  ): StreamableMethod<
    DuplicateParams200Response | DuplicateParamsdefaultResponse
  >;
}

export interface PagingPageWithMaxPageSize {
  /** Paging with max page size. We don't want to */
  get(
    options?: PageWithMaxPageSizeParameters
  ): StreamableMethod<
    PageWithMaxPageSize200Response | PageWithMaxPageSizedefaultResponse
  >;
}

export interface PagingNextOperationWithQueryParams {
  /** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
  get(
    options: NextOperationWithQueryParamsParameters
  ): StreamableMethod<
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsdefaultResponse
  >;
}

export interface PagingGetOdataMultiplePages {
  /** A paging operation that includes a nextLink in odata format that has 10 pages */
  get(
    options?: GetOdataMultiplePagesParameters
  ): StreamableMethod<
    GetOdataMultiplePages200Response | GetOdataMultiplePagesdefaultResponse
  >;
}

export interface PagingGetMultiplePagesWithOffset {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesWithOffsetParameters
  ): StreamableMethod<
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetdefaultResponse
  >;
}

export interface PagingGetMultiplePagesRetryFirst {
  /** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesRetryFirstParameters
  ): StreamableMethod<
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstdefaultResponse
  >;
}

export interface PagingGetMultiplePagesRetrySecond {
  /** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
  get(
    options?: GetMultiplePagesRetrySecondParameters
  ): StreamableMethod<
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySeconddefaultResponse
  >;
}

export interface PagingGetSinglePagesFailure {
  /** A paging operation that receives a 400 on the first call */
  get(
    options?: GetSinglePagesFailureParameters
  ): StreamableMethod<
    GetSinglePagesFailure200Response | GetSinglePagesFailuredefaultResponse
  >;
}

export interface PagingGetMultiplePagesFailure {
  /** A paging operation that receives a 400 on the second call */
  get(
    options?: GetMultiplePagesFailureParameters
  ): StreamableMethod<
    GetMultiplePagesFailure200Response | GetMultiplePagesFailuredefaultResponse
  >;
}

export interface PagingGetMultiplePagesFailureUri {
  /** A paging operation that receives an invalid nextLink */
  get(
    options?: GetMultiplePagesFailureUriParameters
  ): StreamableMethod<
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUridefaultResponse
  >;
}

export interface PagingGetMultiplePagesFragmentNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: GetMultiplePagesFragmentNextLinkParameters
  ): StreamableMethod<
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkdefaultResponse
  >;
}

export interface PagingGetMultiplePagesFragmentWithGroupingNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
  get(
    options: GetMultiplePagesFragmentWithGroupingNextLinkParameters
  ): StreamableMethod<
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
  >;
}

export interface PagingGetMultiplePagesLRO {
  /** A long-running paging operation that includes a nextLink that has 10 pages */
  post(
    options?: GetMultiplePagesLROParameters
  ): StreamableMethod<
    GetMultiplePagesLRO202Response | GetMultiplePagesLROdefaultResponse
  >;
}

export interface PagingAppendApiVersion {
  /** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
  get(
    options?: AppendApiVersionParameters
  ): StreamableMethod<
    AppendApiVersion200Response | AppendApiVersiondefaultResponse
  >;
}

export interface PagingReplaceApiVersion {
  /** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
  get(
    options?: ReplaceApiVersionParameters
  ): StreamableMethod<
    ReplaceApiVersion200Response | ReplaceApiVersiondefaultResponse
  >;
}

export interface PagingNextFragment {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentParameters
  ): StreamableMethod<NextFragment200Response | NextFragmentdefaultResponse>;
}

export interface PagingNextFragmentWithGrouping {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentWithGroupingParameters
  ): StreamableMethod<
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingdefaultResponse
  >;
}

export interface PagingGetPagingModelWithItemNameWithXMSClientName {
  /** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
  get(
    options?: GetPagingModelWithItemNameWithXMSClientNameParameters
  ): StreamableMethod<
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paging/noitemname' has methods for the following verbs: get */
  (path: "/paging/noitemname"): PagingGetNoItemNamePages;
  /** Resource for '/paging/nullnextlink' has methods for the following verbs: get */
  (path: "/paging/nullnextlink"): PagingGetNullNextLinkNamePages;
  /** Resource for '/paging/single' has methods for the following verbs: get */
  (path: "/paging/single"): PagingGetSinglePages;
  /** Resource for '/paging/firstResponseEmpty/1' has methods for the following verbs: get */
  (path: "/paging/firstResponseEmpty/1"): PagingFirstResponseEmpty;
  /** Resource for '/paging/multiple' has methods for the following verbs: get */
  (path: "/paging/multiple"): PagingGetMultiplePages;
  /** Resource for '/paging/multiple/getWithQueryParams' has methods for the following verbs: get */
  (path: "/paging/multiple/getWithQueryParams"): PagingGetWithQueryParams;
  /** Resource for '/paging/multiple/duplicateParams/1' has methods for the following verbs: get */
  (path: "/paging/multiple/duplicateParams/1"): PagingDuplicateParams;
  /** Resource for '/paging/maxPageSize' has methods for the following verbs: get */
  (path: "/paging/maxPageSize"): PagingPageWithMaxPageSize;
  /** Resource for '/paging/multiple/nextOperationWithQueryParams' has methods for the following verbs: get */
  (
    path: "/paging/multiple/nextOperationWithQueryParams"
  ): PagingNextOperationWithQueryParams;
  /** Resource for '/paging/multiple/odata' has methods for the following verbs: get */
  (path: "/paging/multiple/odata"): PagingGetOdataMultiplePages;
  /** Resource for '/paging/multiple/withpath/\{offset\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/withpath/{offset}",
    offset: number
  ): PagingGetMultiplePagesWithOffset;
  /** Resource for '/paging/multiple/retryfirst' has methods for the following verbs: get */
  (path: "/paging/multiple/retryfirst"): PagingGetMultiplePagesRetryFirst;
  /** Resource for '/paging/multiple/retrysecond' has methods for the following verbs: get */
  (path: "/paging/multiple/retrysecond"): PagingGetMultiplePagesRetrySecond;
  /** Resource for '/paging/single/failure' has methods for the following verbs: get */
  (path: "/paging/single/failure"): PagingGetSinglePagesFailure;
  /** Resource for '/paging/multiple/failure' has methods for the following verbs: get */
  (path: "/paging/multiple/failure"): PagingGetMultiplePagesFailure;
  /** Resource for '/paging/multiple/failureuri' has methods for the following verbs: get */
  (path: "/paging/multiple/failureuri"): PagingGetMultiplePagesFailureUri;
  /** Resource for '/paging/multiple/fragment/\{tenant\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragment/{tenant}",
    tenant: string
  ): PagingGetMultiplePagesFragmentNextLink;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}",
    tenant: string
  ): PagingGetMultiplePagesFragmentWithGroupingNextLink;
  /** Resource for '/paging/multiple/lro' has methods for the following verbs: post */
  (path: "/paging/multiple/lro"): PagingGetMultiplePagesLRO;
  /** Resource for '/paging/apiVersion/append/1' has methods for the following verbs: get */
  (path: "/paging/apiVersion/append/1"): PagingAppendApiVersion;
  /** Resource for '/paging/apiVersion/replace/1' has methods for the following verbs: get */
  (path: "/paging/apiVersion/replace/1"): PagingReplaceApiVersion;
  /** Resource for '/paging/multiple/fragment/\{tenant\}/\{nextLink\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragment/{tenant}/{nextLink}",
    tenant: string,
    nextLink: string
  ): PagingNextFragment;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}/\{nextLink\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
    tenant: string,
    nextLink: string
  ): PagingNextFragmentWithGrouping;
  /** Resource for '/paging/itemNameWithXMSClientName' has methods for the following verbs: get */
  (
    path: "/paging/itemNameWithXMSClientName"
  ): PagingGetPagingModelWithItemNameWithXMSClientName;
}

export type PagingClient = Client & {
  path: Routes;
};
