// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PagingGetNoItemNamePagesParameters,
  PagingGetEmptyNextLinkNamePagesParameters,
  PagingGetNullNextLinkNamePagesParameters,
  PagingGetSinglePagesParameters,
  PagingGetSinglePagesWithBodyParamsParameters,
  PagingFirstResponseEmptyParameters,
  PagingGetMultiplePagesParameters,
  PagingGetWithQueryParamsParameters,
  PagingDuplicateParamsParameters,
  PagingPageWithMaxPageSizeParameters,
  PagingNextOperationWithQueryParamsParameters,
  PagingGetOdataMultiplePagesParameters,
  PagingGetMultiplePagesWithOffsetParameters,
  PagingGetMultiplePagesRetryFirstParameters,
  PagingGetMultiplePagesRetrySecondParameters,
  PagingGetSinglePagesFailureParameters,
  PagingGetMultiplePagesFailureParameters,
  PagingGetMultiplePagesFailureUriParameters,
  PagingGetMultiplePagesFragmentNextLinkParameters,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkParameters,
  PagingGetMultiplePagesLROParameters,
  PagingAppendApiVersionParameters,
  PagingReplaceApiVersionParameters,
  PagingNextFragmentParameters,
  PagingNextFragmentWithGroupingParameters,
  PagingGetPagingModelWithItemNameWithXMSClientNameParameters,
} from "./parameters";
import {
  PagingGetNoItemNamePages200Response,
  PagingGetNoItemNamePagesDefaultResponse,
  PagingGetEmptyNextLinkNamePages200Response,
  PagingGetEmptyNextLinkNamePagesDefaultResponse,
  PagingGetNullNextLinkNamePages200Response,
  PagingGetNullNextLinkNamePagesDefaultResponse,
  PagingGetSinglePages200Response,
  PagingGetSinglePagesDefaultResponse,
  PagingGetSinglePagesWithBodyParams200Response,
  PagingGetSinglePagesWithBodyParamsDefaultResponse,
  PagingFirstResponseEmpty200Response,
  PagingFirstResponseEmptyDefaultResponse,
  PagingGetMultiplePages200Response,
  PagingGetMultiplePagesDefaultResponse,
  PagingGetWithQueryParams200Response,
  PagingGetWithQueryParamsDefaultResponse,
  PagingDuplicateParams200Response,
  PagingDuplicateParamsDefaultResponse,
  PagingPageWithMaxPageSize200Response,
  PagingPageWithMaxPageSizeDefaultResponse,
  PagingNextOperationWithQueryParams200Response,
  PagingNextOperationWithQueryParamsDefaultResponse,
  PagingGetOdataMultiplePages200Response,
  PagingGetOdataMultiplePagesDefaultResponse,
  PagingGetMultiplePagesWithOffset200Response,
  PagingGetMultiplePagesWithOffsetDefaultResponse,
  PagingGetMultiplePagesRetryFirst200Response,
  PagingGetMultiplePagesRetryFirstDefaultResponse,
  PagingGetMultiplePagesRetrySecond200Response,
  PagingGetMultiplePagesRetrySecondDefaultResponse,
  PagingGetSinglePagesFailure200Response,
  PagingGetSinglePagesFailureDefaultResponse,
  PagingGetMultiplePagesFailure200Response,
  PagingGetMultiplePagesFailureDefaultResponse,
  PagingGetMultiplePagesFailureUri200Response,
  PagingGetMultiplePagesFailureUriDefaultResponse,
  PagingGetMultiplePagesFragmentNextLink200Response,
  PagingGetMultiplePagesFragmentNextLinkDefaultResponse,
  PagingGetMultiplePagesFragmentWithGroupingNextLink200Response,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse,
  PagingGetMultiplePagesLRO202Response,
  PagingGetMultiplePagesLRODefaultResponse,
  PagingAppendApiVersion200Response,
  PagingAppendApiVersionDefaultResponse,
  PagingReplaceApiVersion200Response,
  PagingReplaceApiVersionDefaultResponse,
  PagingNextFragment200Response,
  PagingNextFragmentDefaultResponse,
  PagingNextFragmentWithGrouping200Response,
  PagingNextFragmentWithGroupingDefaultResponse,
  PagingGetPagingModelWithItemNameWithXMSClientName200Response,
  PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetNoItemNamePages {
  /** A paging operation that must return result of the default 'value' node. */
  get(
    options?: PagingGetNoItemNamePagesParameters,
  ): StreamableMethod<
    | PagingGetNoItemNamePages200Response
    | PagingGetNoItemNamePagesDefaultResponse
  >;
}

export interface GetEmptyNextLinkNamePages {
  /** A paging operation that gets an empty next link and should stop after page 1. */
  get(
    options?: PagingGetEmptyNextLinkNamePagesParameters,
  ): StreamableMethod<
    | PagingGetEmptyNextLinkNamePages200Response
    | PagingGetEmptyNextLinkNamePagesDefaultResponse
  >;
}

export interface GetNullNextLinkNamePages {
  /** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
  get(
    options?: PagingGetNullNextLinkNamePagesParameters,
  ): StreamableMethod<
    | PagingGetNullNextLinkNamePages200Response
    | PagingGetNullNextLinkNamePagesDefaultResponse
  >;
}

export interface GetSinglePages {
  /** A paging operation that finishes on the first call without a nextlink */
  get(
    options?: PagingGetSinglePagesParameters,
  ): StreamableMethod<
    PagingGetSinglePages200Response | PagingGetSinglePagesDefaultResponse
  >;
}

export interface GetSinglePagesWithBodyParams {
  /** A paging operation that finishes on the first call with body params without a nextlink */
  get(
    options: PagingGetSinglePagesWithBodyParamsParameters,
  ): StreamableMethod<
    | PagingGetSinglePagesWithBodyParams200Response
    | PagingGetSinglePagesWithBodyParamsDefaultResponse
  >;
}

export interface FirstResponseEmpty {
  /** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
  get(
    options?: PagingFirstResponseEmptyParameters,
  ): StreamableMethod<
    | PagingFirstResponseEmpty200Response
    | PagingFirstResponseEmptyDefaultResponse
  >;
}

export interface GetMultiplePages {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: PagingGetMultiplePagesParameters,
  ): StreamableMethod<
    PagingGetMultiplePages200Response | PagingGetMultiplePagesDefaultResponse
  >;
}

export interface GetWithQueryParams {
  /** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
  get(
    options: PagingGetWithQueryParamsParameters,
  ): StreamableMethod<
    | PagingGetWithQueryParams200Response
    | PagingGetWithQueryParamsDefaultResponse
  >;
}

export interface DuplicateParams {
  /** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
  get(
    options?: PagingDuplicateParamsParameters,
  ): StreamableMethod<
    PagingDuplicateParams200Response | PagingDuplicateParamsDefaultResponse
  >;
}

export interface PageWithMaxPageSize {
  /** Paging with max page size. We don't want to */
  get(
    options?: PagingPageWithMaxPageSizeParameters,
  ): StreamableMethod<
    | PagingPageWithMaxPageSize200Response
    | PagingPageWithMaxPageSizeDefaultResponse
  >;
}

export interface NextOperationWithQueryParams {
  /** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
  get(
    options: PagingNextOperationWithQueryParamsParameters,
  ): StreamableMethod<
    | PagingNextOperationWithQueryParams200Response
    | PagingNextOperationWithQueryParamsDefaultResponse
  >;
}

export interface GetOdataMultiplePages {
  /** A paging operation that includes a nextLink in odata format that has 10 pages */
  get(
    options?: PagingGetOdataMultiplePagesParameters,
  ): StreamableMethod<
    | PagingGetOdataMultiplePages200Response
    | PagingGetOdataMultiplePagesDefaultResponse
  >;
}

export interface GetMultiplePagesWithOffset {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: PagingGetMultiplePagesWithOffsetParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesWithOffset200Response
    | PagingGetMultiplePagesWithOffsetDefaultResponse
  >;
}

export interface GetMultiplePagesRetryFirst {
  /** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
  get(
    options?: PagingGetMultiplePagesRetryFirstParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesRetryFirst200Response
    | PagingGetMultiplePagesRetryFirstDefaultResponse
  >;
}

export interface GetMultiplePagesRetrySecond {
  /** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
  get(
    options?: PagingGetMultiplePagesRetrySecondParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesRetrySecond200Response
    | PagingGetMultiplePagesRetrySecondDefaultResponse
  >;
}

export interface GetSinglePagesFailure {
  /** A paging operation that receives a 400 on the first call */
  get(
    options?: PagingGetSinglePagesFailureParameters,
  ): StreamableMethod<
    | PagingGetSinglePagesFailure200Response
    | PagingGetSinglePagesFailureDefaultResponse
  >;
}

export interface GetMultiplePagesFailure {
  /** A paging operation that receives a 400 on the second call */
  get(
    options?: PagingGetMultiplePagesFailureParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesFailure200Response
    | PagingGetMultiplePagesFailureDefaultResponse
  >;
}

export interface GetMultiplePagesFailureUri {
  /** A paging operation that receives an invalid nextLink */
  get(
    options?: PagingGetMultiplePagesFailureUriParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesFailureUri200Response
    | PagingGetMultiplePagesFailureUriDefaultResponse
  >;
}

export interface GetMultiplePagesFragmentNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: PagingGetMultiplePagesFragmentNextLinkParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesFragmentNextLink200Response
    | PagingGetMultiplePagesFragmentNextLinkDefaultResponse
  >;
}

export interface GetMultiplePagesFragmentWithGroupingNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
  get(
    options: PagingGetMultiplePagesFragmentWithGroupingNextLinkParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesFragmentWithGroupingNextLink200Response
    | PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  >;
}

export interface GetMultiplePagesLRO {
  /** A long-running paging operation that includes a nextLink that has 10 pages */
  post(
    options?: PagingGetMultiplePagesLROParameters,
  ): StreamableMethod<
    | PagingGetMultiplePagesLRO202Response
    | PagingGetMultiplePagesLRODefaultResponse
  >;
}

export interface AppendApiVersion {
  /** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
  get(
    options?: PagingAppendApiVersionParameters,
  ): StreamableMethod<
    PagingAppendApiVersion200Response | PagingAppendApiVersionDefaultResponse
  >;
}

export interface ReplaceApiVersion {
  /** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
  get(
    options?: PagingReplaceApiVersionParameters,
  ): StreamableMethod<
    PagingReplaceApiVersion200Response | PagingReplaceApiVersionDefaultResponse
  >;
}

export interface NextFragment {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: PagingNextFragmentParameters,
  ): StreamableMethod<
    PagingNextFragment200Response | PagingNextFragmentDefaultResponse
  >;
}

export interface NextFragmentWithGrouping {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: PagingNextFragmentWithGroupingParameters,
  ): StreamableMethod<
    | PagingNextFragmentWithGrouping200Response
    | PagingNextFragmentWithGroupingDefaultResponse
  >;
}

export interface GetPagingModelWithItemNameWithXMSClientName {
  /** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
  get(
    options?: PagingGetPagingModelWithItemNameWithXMSClientNameParameters,
  ): StreamableMethod<
    | PagingGetPagingModelWithItemNameWithXMSClientName200Response
    | PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paging/noitemname' has methods for the following verbs: get */
  (path: "/paging/noitemname"): GetNoItemNamePages;
  /** Resource for '/paging/emptynextlink' has methods for the following verbs: get */
  (path: "/paging/emptynextlink"): GetEmptyNextLinkNamePages;
  /** Resource for '/paging/nullnextlink' has methods for the following verbs: get */
  (path: "/paging/nullnextlink"): GetNullNextLinkNamePages;
  /** Resource for '/paging/single' has methods for the following verbs: get */
  (path: "/paging/single"): GetSinglePages;
  /** Resource for '/paging/single/getWithBodyParams' has methods for the following verbs: get */
  (path: "/paging/single/getWithBodyParams"): GetSinglePagesWithBodyParams;
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
    path: "/paging/multiple/nextOperationWithQueryParams",
  ): NextOperationWithQueryParams;
  /** Resource for '/paging/multiple/odata' has methods for the following verbs: get */
  (path: "/paging/multiple/odata"): GetOdataMultiplePages;
  /** Resource for '/paging/multiple/withpath/\{offset\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/withpath/{offset}",
    offset: number,
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
    tenant: string,
  ): GetMultiplePagesFragmentNextLink;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}",
    tenant: string,
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
    nextLink: string,
  ): NextFragment;
  /** Resource for '/paging/multiple/fragmentwithgrouping/\{tenant\}/\{nextLink\}' has methods for the following verbs: get */
  (
    path: "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
    tenant: string,
    nextLink: string,
  ): NextFragmentWithGrouping;
  /** Resource for '/paging/itemNameWithXMSClientName' has methods for the following verbs: get */
  (
    path: "/paging/itemNameWithXMSClientName",
  ): GetPagingModelWithItemNameWithXMSClientName;
}

export type PagingClient = Client & {
  path: Routes;
};
