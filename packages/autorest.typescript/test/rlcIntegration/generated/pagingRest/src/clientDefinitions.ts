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
  GetNoItemNamePagesDefaultResponse,
  GetNullNextLinkNamePages200Response,
  GetNullNextLinkNamePagesDefaultResponse,
  GetSinglePages200Response,
  GetSinglePagesDefaultResponse,
  FirstResponseEmpty200Response,
  FirstResponseEmptyDefaultResponse,
  GetMultiplePages200Response,
  GetMultiplePagesDefaultResponse,
  GetWithQueryParams200Response,
  GetWithQueryParamsDefaultResponse,
  DuplicateParams200Response,
  DuplicateParamsDefaultResponse,
  PageWithMaxPageSize200Response,
  PageWithMaxPageSizeDefaultResponse,
  NextOperationWithQueryParams200Response,
  NextOperationWithQueryParamsDefaultResponse,
  GetOdataMultiplePages200Response,
  GetOdataMultiplePagesDefaultResponse,
  GetMultiplePagesWithOffset200Response,
  GetMultiplePagesWithOffsetDefaultResponse,
  GetMultiplePagesRetryFirst200Response,
  GetMultiplePagesRetryFirstDefaultResponse,
  GetMultiplePagesRetrySecond200Response,
  GetMultiplePagesRetrySecondDefaultResponse,
  GetSinglePagesFailure200Response,
  GetSinglePagesFailureDefaultResponse,
  GetMultiplePagesFailure200Response,
  GetMultiplePagesFailureDefaultResponse,
  GetMultiplePagesFailureUri200Response,
  GetMultiplePagesFailureUriDefaultResponse,
  GetMultiplePagesFragmentNextLink200Response,
  GetMultiplePagesFragmentNextLinkDefaultResponse,
  GetMultiplePagesFragmentWithGroupingNextLink200Response,
  GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse,
  GetMultiplePagesLRO202Response,
  GetMultiplePagesLRODefaultResponse,
  AppendApiVersion200Response,
  AppendApiVersionDefaultResponse,
  ReplaceApiVersion200Response,
  ReplaceApiVersionDefaultResponse,
  NextFragment200Response,
  NextFragmentDefaultResponse,
  NextFragmentWithGrouping200Response,
  NextFragmentWithGroupingDefaultResponse,
  GetPagingModelWithItemNameWithXMSClientName200Response,
  GetPagingModelWithItemNameWithXMSClientNameDefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetNoItemNamePages {
  /** A paging operation that must return result of the default 'value' node. */
  get(
    options?: GetNoItemNamePagesParameters
  ): StreamableMethod<
    GetNoItemNamePages200Response | GetNoItemNamePagesDefaultResponse
  >;
}

export interface GetNullNextLinkNamePages {
  /** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
  get(
    options?: GetNullNextLinkNamePagesParameters
  ): StreamableMethod<
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesDefaultResponse
  >;
}

export interface GetSinglePages {
  /** A paging operation that finishes on the first call without a nextlink */
  get(
    options?: GetSinglePagesParameters
  ): StreamableMethod<
    GetSinglePages200Response | GetSinglePagesDefaultResponse
  >;
}

export interface FirstResponseEmpty {
  /** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
  get(
    options?: FirstResponseEmptyParameters
  ): StreamableMethod<
    FirstResponseEmpty200Response | FirstResponseEmptyDefaultResponse
  >;
}

export interface GetMultiplePages {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesParameters
  ): StreamableMethod<
    GetMultiplePages200Response | GetMultiplePagesDefaultResponse
  >;
}

export interface GetWithQueryParams {
  /** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
  get(
    options: GetWithQueryParamsParameters
  ): StreamableMethod<
    GetWithQueryParams200Response | GetWithQueryParamsDefaultResponse
  >;
}

export interface DuplicateParams {
  /** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
  get(
    options?: DuplicateParamsParameters
  ): StreamableMethod<
    DuplicateParams200Response | DuplicateParamsDefaultResponse
  >;
}

export interface PageWithMaxPageSize {
  /** Paging with max page size. We don't want to */
  get(
    options?: PageWithMaxPageSizeParameters
  ): StreamableMethod<
    PageWithMaxPageSize200Response | PageWithMaxPageSizeDefaultResponse
  >;
}

export interface NextOperationWithQueryParams {
  /** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
  get(
    options: NextOperationWithQueryParamsParameters
  ): StreamableMethod<
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsDefaultResponse
  >;
}

export interface GetOdataMultiplePages {
  /** A paging operation that includes a nextLink in odata format that has 10 pages */
  get(
    options?: GetOdataMultiplePagesParameters
  ): StreamableMethod<
    GetOdataMultiplePages200Response | GetOdataMultiplePagesDefaultResponse
  >;
}

export interface GetMultiplePagesWithOffset {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesWithOffsetParameters
  ): StreamableMethod<
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetDefaultResponse
  >;
}

export interface GetMultiplePagesRetryFirst {
  /** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesRetryFirstParameters
  ): StreamableMethod<
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstDefaultResponse
  >;
}

export interface GetMultiplePagesRetrySecond {
  /** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
  get(
    options?: GetMultiplePagesRetrySecondParameters
  ): StreamableMethod<
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySecondDefaultResponse
  >;
}

export interface GetSinglePagesFailure {
  /** A paging operation that receives a 400 on the first call */
  get(
    options?: GetSinglePagesFailureParameters
  ): StreamableMethod<
    GetSinglePagesFailure200Response | GetSinglePagesFailureDefaultResponse
  >;
}

export interface GetMultiplePagesFailure {
  /** A paging operation that receives a 400 on the second call */
  get(
    options?: GetMultiplePagesFailureParameters
  ): StreamableMethod<
    GetMultiplePagesFailure200Response | GetMultiplePagesFailureDefaultResponse
  >;
}

export interface GetMultiplePagesFailureUri {
  /** A paging operation that receives an invalid nextLink */
  get(
    options?: GetMultiplePagesFailureUriParameters
  ): StreamableMethod<
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUriDefaultResponse
  >;
}

export interface GetMultiplePagesFragmentNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: GetMultiplePagesFragmentNextLinkParameters
  ): StreamableMethod<
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkDefaultResponse
  >;
}

export interface GetMultiplePagesFragmentWithGroupingNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
  get(
    options: GetMultiplePagesFragmentWithGroupingNextLinkParameters
  ): StreamableMethod<
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  >;
}

export interface GetMultiplePagesLRO {
  /** A long-running paging operation that includes a nextLink that has 10 pages */
  post(
    options?: GetMultiplePagesLROParameters
  ): StreamableMethod<
    GetMultiplePagesLRO202Response | GetMultiplePagesLRODefaultResponse
  >;
}

export interface AppendApiVersion {
  /** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
  get(
    options?: AppendApiVersionParameters
  ): StreamableMethod<
    AppendApiVersion200Response | AppendApiVersionDefaultResponse
  >;
}

export interface ReplaceApiVersion {
  /** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
  get(
    options?: ReplaceApiVersionParameters
  ): StreamableMethod<
    ReplaceApiVersion200Response | ReplaceApiVersionDefaultResponse
  >;
}

export interface NextFragment {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentParameters
  ): StreamableMethod<NextFragment200Response | NextFragmentDefaultResponse>;
}

export interface NextFragmentWithGrouping {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentWithGroupingParameters
  ): StreamableMethod<
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingDefaultResponse
  >;
}

export interface GetPagingModelWithItemNameWithXMSClientName {
  /** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
  get(
    options?: GetPagingModelWithItemNameWithXMSClientNameParameters
  ): StreamableMethod<
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNameDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paging/noitemname' has methods for the following verbs: get */
  (path: "/paging/noitemname"): GetNoItemNamePages;
  /** Resource for '/paging/nullnextlink' has methods for the following verbs: get */
  (path: "/paging/nullnextlink"): GetNullNextLinkNamePages;
  /** Resource for '/paging/single' has methods for the following verbs: get */
  (path: "/paging/single"): GetSinglePages;
  /** Resource for '/paging/firstResponseEmpty/1' has methods for the following verbs: get */
  (path: "/paging/firstResponseEmpty/1"): FirstResponseEmpty;
  /** Resource for '/paging/multiple' has methods for the following verbs: get */
  (path: "/paging/multiple"): GetMultiplePages;
  /** Resource for '/paging/multiple/getWithQueryParams' has methods for the following verbs: get */
  (path: "/paging/multiple/getWithQueryParams"): GetWithQueryParams;
  /** Resource for '/paging/multiple/duplicateParams/1' has methods for the following verbs: get */
  (path: "/paging/multiple/duplicateParams/1"): DuplicateParams;
  /** Resource for '/paging/maxPageSize' has methods for the following verbs: get */
  (path: "/paging/maxPageSize"): PageWithMaxPageSize;
  /** Resource for '/paging/multiple/nextOperationWithQueryParams' has methods for the following verbs: get */
  (
    path: "/paging/multiple/nextOperationWithQueryParams"
  ): NextOperationWithQueryParams;
  /** Resource for '/paging/multiple/odata' has methods for the following verbs: get */
  (path: "/paging/multiple/odata"): GetOdataMultiplePages;
  /** Resource for '/paging/multiple/withpath/\{offset\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/withpath/{offset}",
    offset: number
  ): GetMultiplePagesWithOffset;
  /** Resource for '/paging/multiple/retryfirst' has methods for the following verbs: get */
  (path: "/paging/multiple/retryfirst"): GetMultiplePagesRetryFirst;
  /** Resource for '/paging/multiple/retrysecond' has methods for the following verbs: get */
  (path: "/paging/multiple/retrysecond"): GetMultiplePagesRetrySecond;
  /** Resource for '/paging/single/failure' has methods for the following verbs: get */
  (path: "/paging/single/failure"): GetSinglePagesFailure;
  /** Resource for '/paging/multiple/failure' has methods for the following verbs: get */
  (path: "/paging/multiple/failure"): GetMultiplePagesFailure;
  /** Resource for '/paging/multiple/failureuri' has methods for the following verbs: get */
  (path: "/paging/multiple/failureuri"): GetMultiplePagesFailureUri;
  /** Resource for '/paging/multiple/fragment/\{tenant\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragment/{tenant}",
    tenant: string
  ): GetMultiplePagesFragmentNextLink;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}",
    tenant: string
  ): GetMultiplePagesFragmentWithGroupingNextLink;
  /** Resource for '/paging/multiple/lro' has methods for the following verbs: post */
  (path: "/paging/multiple/lro"): GetMultiplePagesLRO;
  /** Resource for '/paging/apiVersion/append/1' has methods for the following verbs: get */
  (path: "/paging/apiVersion/append/1"): AppendApiVersion;
  /** Resource for '/paging/apiVersion/replace/1' has methods for the following verbs: get */
  (path: "/paging/apiVersion/replace/1"): ReplaceApiVersion;
  /** Resource for '/paging/multiple/fragment/\{tenant\}/\{nextLink\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragment/{tenant}/{nextLink}",
    tenant: string,
    nextLink: string
  ): NextFragment;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}/\{nextLink\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
    tenant: string,
    nextLink: string
  ): NextFragmentWithGrouping;
  /** Resource for '/paging/itemNameWithXMSClientName' has methods for the following verbs: get */
  (
    path: "/paging/itemNameWithXMSClientName"
  ): GetPagingModelWithItemNameWithXMSClientName;
}

export type PagingClient = Client & {
  path: Routes;
};
