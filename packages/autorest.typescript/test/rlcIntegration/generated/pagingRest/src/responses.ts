// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductResultValueOutput,
  ProductResultOutput,
  OdataProductResultOutput,
  ProductResultValueWithXMSClientNameOutput,
} from "./outputModels";

/** A paging operation that must return result of the default 'value' node. */
export interface PagingGetNoItemNamePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultValueOutput;
}

/** A paging operation that must return result of the default 'value' node. */
export interface PagingGetNoItemNamePagesDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that gets an empty next link and should stop after page 1. */
export interface PagingGetEmptyNextLinkNamePages200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultValueOutput;
}

/** A paging operation that gets an empty next link and should stop after page 1. */
export interface PagingGetEmptyNextLinkNamePagesDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface PagingGetNullNextLinkNamePages200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface PagingGetNullNextLinkNamePagesDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface PagingGetSinglePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface PagingGetSinglePagesDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that finishes on the first call with body params without a nextlink */
export interface PagingGetSinglePagesWithBodyParams200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that finishes on the first call with body params without a nextlink */
export interface PagingGetSinglePagesWithBodyParamsDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface PagingFirstResponseEmpty200Response extends HttpResponse {
  status: "200";
  body: ProductResultValueOutput;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface PagingFirstResponseEmptyDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePagesDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface PagingGetWithQueryParams200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface PagingGetWithQueryParamsDefaultResponse extends HttpResponse {
  status: string;
}

/** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
export interface PagingDuplicateParams200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
export interface PagingDuplicateParamsDefaultResponse extends HttpResponse {
  status: string;
}

/** Paging with max page size. We don't want to */
export interface PagingPageWithMaxPageSize200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Paging with max page size. We don't want to */
export interface PagingPageWithMaxPageSizeDefaultResponse extends HttpResponse {
  status: string;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface PagingNextOperationWithQueryParams200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface PagingNextOperationWithQueryParamsDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface PagingGetOdataMultiplePages200Response extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface PagingGetOdataMultiplePagesDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePagesWithOffset200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePagesWithOffsetDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface PagingGetMultiplePagesRetryFirst200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface PagingGetMultiplePagesRetryFirstDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface PagingGetMultiplePagesRetrySecond200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface PagingGetMultiplePagesRetrySecondDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that receives a 400 on the first call */
export interface PagingGetSinglePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives a 400 on the first call */
export interface PagingGetSinglePagesFailureDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that receives a 400 on the second call */
export interface PagingGetMultiplePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives a 400 on the second call */
export interface PagingGetMultiplePagesFailureDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that receives an invalid nextLink */
export interface PagingGetMultiplePagesFailureUri200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives an invalid nextLink */
export interface PagingGetMultiplePagesFailureUriDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingGetMultiplePagesFragmentNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingGetMultiplePagesFragmentNextLinkDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface PagingGetMultiplePagesFragmentWithGroupingNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePagesLRO202Response extends HttpResponse {
  status: "202";
  body: ProductResultOutput;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface PagingGetMultiplePagesLRODefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
export interface PagingAppendApiVersion200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
export interface PagingAppendApiVersionDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
export interface PagingReplaceApiVersion200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
export interface PagingReplaceApiVersionDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingNextFragment200Response extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingNextFragmentDefaultResponse extends HttpResponse {
  status: string;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingNextFragmentWithGrouping200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface PagingNextFragmentWithGroupingDefaultResponse
  extends HttpResponse {
  status: string;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface PagingGetPagingModelWithItemNameWithXMSClientName200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultValueWithXMSClientNameOutput;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse
  extends HttpResponse {
  status: string;
}
