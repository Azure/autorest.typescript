// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductResultValue,
  ProductResult,
  OdataProductResult,
  ProductResultValueWithXMSClientName
} from "./models";

/** A paging operation that must return result of the default 'value' node. */
export interface GetNoItemNamePages200Response extends HttpResponse {
  status: "200";
  body: ProductResultValue;
}

/** A paging operation that must return result of the default 'value' node. */
export interface GetNoItemNamePagesdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface GetNullNextLinkNamePages200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
export interface GetNullNextLinkNamePagesdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface GetSinglePages200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that finishes on the first call without a nextlink */
export interface GetSinglePagesdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface FirstResponseEmpty200Response extends HttpResponse {
  status: "200";
  body: ProductResultValue;
}

/** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
export interface FirstResponseEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePages200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface GetWithQueryParams200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
export interface GetWithQueryParamsdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface NextOperationWithQueryParams200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
export interface NextOperationWithQueryParamsdefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface GetOdataMultiplePages200Response extends HttpResponse {
  status: "200";
  body: OdataProductResult;
}

/** A paging operation that includes a nextLink in odata format that has 10 pages */
export interface GetOdataMultiplePagesdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesWithOffset200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesWithOffsetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface GetMultiplePagesRetryFirst200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
export interface GetMultiplePagesRetryFirstdefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface GetMultiplePagesRetrySecond200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
export interface GetMultiplePagesRetrySeconddefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that receives a 400 on the first call */
export interface GetSinglePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that receives a 400 on the first call */
export interface GetSinglePagesFailuredefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that receives a 400 on the second call */
export interface GetMultiplePagesFailure200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that receives a 400 on the second call */
export interface GetMultiplePagesFailuredefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that receives an invalid nextLink */
export interface GetMultiplePagesFailureUri200Response extends HttpResponse {
  status: "200";
  body: ProductResult;
}

/** A paging operation that receives an invalid nextLink */
export interface GetMultiplePagesFailureUridefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface GetMultiplePagesFragmentNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResult;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface GetMultiplePagesFragmentNextLinkdefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface GetMultiplePagesFragmentWithGroupingNextLink200Response
  extends HttpResponse {
  status: "200";
  body: OdataProductResult;
}

/** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
export interface GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesLRO202Response extends HttpResponse {
  status: "202";
  body: ProductResult;
}

/** A long-running paging operation that includes a nextLink that has 10 pages */
export interface GetMultiplePagesLROdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragment200Response extends HttpResponse {
  status: "200";
  body: OdataProductResult;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentWithGrouping200Response extends HttpResponse {
  status: "200";
  body: OdataProductResult;
}

/** A paging operation that doesn't return a full URL, just a fragment */
export interface NextFragmentWithGroupingdefaultResponse extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface GetPagingModelWithItemNameWithXMSClientName200Response
  extends HttpResponse {
  status: "200";
  body: ProductResultValueWithXMSClientName;
}

/** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
export interface GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
  extends HttpResponse {
  status: "500";
  body: Record<string, unknown>;
}
