// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductResultValueOutput,
  ProductResultOutput,
  OdataProductResultOutput,
  ProductResultValueWithXMSClientNameOutput
} from "./outputModels";

/** A paging operation that must return result of the default 'value' node. */
export interface GetNoItemNamePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultValueOutput;
}

/** A paging operation that must return result of the default 'value' node. */
export interface GetNoItemNamePagesDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface GetNullNextLinkNamePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface GetNullNextLinkNamePagesDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface GetSinglePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface GetSinglePagesDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface FirstResponseEmpty200Response extends HttpResponse {
  status: "200";
  body: ProductResultValueOutput;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface FirstResponseEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface GetWithQueryParams200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface GetWithQueryParamsDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
export interface DuplicateParams200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Define `filter` as a query param for all calls. However, the returned next link will also include the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url sent. */
export interface DuplicateParamsDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Paging with max page size. We don't want to */
export interface PageWithMaxPageSize200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Paging with max page size. We don't want to */
export interface PageWithMaxPageSizeDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface NextOperationWithQueryParams200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface NextOperationWithQueryParamsDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface GetOdataMultiplePages200Response extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface GetOdataMultiplePagesDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesWithOffset200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesWithOffsetDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface GetMultiplePagesRetryFirst200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface GetMultiplePagesRetryFirstDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface GetMultiplePagesRetrySecond200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface GetMultiplePagesRetrySecondDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that receives a 400 on the first call */
export interface GetSinglePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives a 400 on the first call */
export interface GetSinglePagesFailureDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that receives a 400 on the second call */
export interface GetMultiplePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives a 400 on the second call */
export interface GetMultiplePagesFailureDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that receives an invalid nextLink */
export interface GetMultiplePagesFailureUri200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation that receives an invalid nextLink */
export interface GetMultiplePagesFailureUriDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface GetMultiplePagesFragmentNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface GetMultiplePagesFragmentNextLinkDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface GetMultiplePagesFragmentWithGroupingNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesLRO202Response extends HttpResponse {
  status: "202";
  body: ProductResultOutput;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesLRODefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
export interface AppendApiVersion200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation with api version. When calling the next link, you want to append your client's api version to the next link */
export interface AppendApiVersionDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
export interface ReplaceApiVersion200Response extends HttpResponse {
  status: "200";
  body: ProductResultOutput;
}

/** A paging operation with api version. When calling the next link, you want to reformat it and override the returned api version with your client's api version */
export interface ReplaceApiVersionDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragment200Response extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentWithGrouping200Response extends HttpResponse {
  status: "200";
  body: OdataProductResultOutput;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentWithGroupingDefaultResponse extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface GetPagingModelWithItemNameWithXMSClientName200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultValueWithXMSClientNameOutput;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface GetPagingModelWithItemNameWithXMSClientNameDefaultResponse
  extends HttpResponse {
  status: string;
  body: Record<string, unknown>;
}
