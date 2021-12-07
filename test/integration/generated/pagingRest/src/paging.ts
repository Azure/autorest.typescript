// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetNoItemNamePagesParameters,
  GetNullNextLinkNamePagesParameters,
  GetSinglePagesParameters,
  FirstResponseEmptyParameters,
  GetMultiplePagesParameters,
  GetWithQueryParamsParameters,
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
  NextFragment200Response,
  NextFragmentdefaultResponse,
  NextFragmentWithGrouping200Response,
  NextFragmentWithGroupingdefaultResponse,
  GetPagingModelWithItemNameWithXMSClientName200Response,
  GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface PagingOperations {
  /** A paging operation that must return result of the default 'value' node. */
  getNoItemNamePages(
    options?: GetNoItemNamePagesParameters
  ): Promise<GetNoItemNamePages200Response | GetNoItemNamePagesdefaultResponse>;
  /** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
  getNullNextLinkNamePages(
    options?: GetNullNextLinkNamePagesParameters
  ): Promise<
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesdefaultResponse
  >;
  /** A paging operation that finishes on the first call without a nextlink */
  getSinglePages(
    options?: GetSinglePagesParameters
  ): Promise<GetSinglePages200Response | GetSinglePagesdefaultResponse>;
  /** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
  firstResponseEmpty(
    options?: FirstResponseEmptyParameters
  ): Promise<FirstResponseEmpty200Response | FirstResponseEmptydefaultResponse>;
  /** A paging operation that includes a nextLink that has 10 pages */
  getMultiplePages(
    options?: GetMultiplePagesParameters
  ): Promise<GetMultiplePages200Response | GetMultiplePagesdefaultResponse>;
  /** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
  getWithQueryParams(
    options: GetWithQueryParamsParameters
  ): Promise<GetWithQueryParams200Response | GetWithQueryParamsdefaultResponse>;
  /** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
  nextOperationWithQueryParams(
    options: NextOperationWithQueryParamsParameters
  ): Promise<
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsdefaultResponse
  >;
  /** A paging operation that includes a nextLink in odata format that has 10 pages */
  getOdataMultiplePages(
    options?: GetOdataMultiplePagesParameters
  ): Promise<
    GetOdataMultiplePages200Response | GetOdataMultiplePagesdefaultResponse
  >;
  /** A paging operation that includes a nextLink that has 10 pages */
  getMultiplePagesWithOffset(
    offset: number,
    options?: GetMultiplePagesWithOffsetParameters
  ): Promise<
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetdefaultResponse
  >;
  /** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
  getMultiplePagesRetryFirst(
    options?: GetMultiplePagesRetryFirstParameters
  ): Promise<
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstdefaultResponse
  >;
  /** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
  getMultiplePagesRetrySecond(
    options?: GetMultiplePagesRetrySecondParameters
  ): Promise<
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySeconddefaultResponse
  >;
  /** A paging operation that receives a 400 on the first call */
  getSinglePagesFailure(
    options?: GetSinglePagesFailureParameters
  ): Promise<
    GetSinglePagesFailure200Response | GetSinglePagesFailuredefaultResponse
  >;
  /** A paging operation that receives a 400 on the second call */
  getMultiplePagesFailure(
    options?: GetMultiplePagesFailureParameters
  ): Promise<
    GetMultiplePagesFailure200Response | GetMultiplePagesFailuredefaultResponse
  >;
  /** A paging operation that receives an invalid nextLink */
  getMultiplePagesFailureUri(
    options?: GetMultiplePagesFailureUriParameters
  ): Promise<
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUridefaultResponse
  >;
  /** A paging operation that doesn't return a full URL, just a fragment */
  getMultiplePagesFragmentNextLink(
    tenant: string,
    options: GetMultiplePagesFragmentNextLinkParameters
  ): Promise<
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkdefaultResponse
  >;
  /** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
  getMultiplePagesFragmentWithGroupingNextLink(
    tenant: string,
    options: GetMultiplePagesFragmentWithGroupingNextLinkParameters
  ): Promise<
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
  >;
  /** A long-running paging operation that includes a nextLink that has 10 pages */
  getMultiplePagesLRO(
    options?: GetMultiplePagesLROParameters
  ): Promise<
    GetMultiplePagesLRO202Response | GetMultiplePagesLROdefaultResponse
  >;
  /** A paging operation that doesn't return a full URL, just a fragment */
  nextFragment(
    tenant: string,
    nextLink: string,
    options: NextFragmentParameters
  ): Promise<NextFragment200Response | NextFragmentdefaultResponse>;
  /** A paging operation that doesn't return a full URL, just a fragment */
  nextFragmentWithGrouping(
    tenant: string,
    nextLink: string,
    options: NextFragmentWithGroupingParameters
  ): Promise<
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingdefaultResponse
  >;
  /** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
  getPagingModelWithItemNameWithXMSClientName(
    options?: GetPagingModelWithItemNameWithXMSClientNameParameters
  ): Promise<
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
  >;
}

export interface GetNoItemNamePages {
  /** A paging operation that must return result of the default 'value' node. */
  get(
    options?: GetNoItemNamePagesParameters
  ): Promise<GetNoItemNamePages200Response | GetNoItemNamePagesdefaultResponse>;
}

export interface GetNullNextLinkNamePages {
  /** A paging operation that must ignore any kind of nextLink, and stop after page 1. */
  get(
    options?: GetNullNextLinkNamePagesParameters
  ): Promise<
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesdefaultResponse
  >;
}

export interface GetSinglePages {
  /** A paging operation that finishes on the first call without a nextlink */
  get(
    options?: GetSinglePagesParameters
  ): Promise<GetSinglePages200Response | GetSinglePagesdefaultResponse>;
}

export interface FirstResponseEmpty {
  /** A paging operation whose first response's items list is empty, but still returns a next link. Second (and final) call, will give you an items list of 1. */
  get(
    options?: FirstResponseEmptyParameters
  ): Promise<FirstResponseEmpty200Response | FirstResponseEmptydefaultResponse>;
}

export interface GetMultiplePages {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesParameters
  ): Promise<GetMultiplePages200Response | GetMultiplePagesdefaultResponse>;
}

export interface GetWithQueryParams {
  /** A paging operation that includes a next operation. It has a different query parameter from it's next operation nextOperationWithQueryParams. Returns a ProductResult */
  get(
    options: GetWithQueryParamsParameters
  ): Promise<GetWithQueryParams200Response | GetWithQueryParamsdefaultResponse>;
}

export interface NextOperationWithQueryParams {
  /** Next operation for getWithQueryParams. Pass in next=True to pass test. Returns a ProductResult */
  get(
    options: NextOperationWithQueryParamsParameters
  ): Promise<
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsdefaultResponse
  >;
}

export interface GetOdataMultiplePages {
  /** A paging operation that includes a nextLink in odata format that has 10 pages */
  get(
    options?: GetOdataMultiplePagesParameters
  ): Promise<
    GetOdataMultiplePages200Response | GetOdataMultiplePagesdefaultResponse
  >;
}

export interface GetMultiplePagesWithOffset {
  /** A paging operation that includes a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesWithOffsetParameters
  ): Promise<
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetdefaultResponse
  >;
}

export interface GetMultiplePagesRetryFirst {
  /** A paging operation that fails on the first call with 500 and then retries and then get a response including a nextLink that has 10 pages */
  get(
    options?: GetMultiplePagesRetryFirstParameters
  ): Promise<
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstdefaultResponse
  >;
}

export interface GetMultiplePagesRetrySecond {
  /** A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first with 500. The client should retry and finish all 10 pages eventually. */
  get(
    options?: GetMultiplePagesRetrySecondParameters
  ): Promise<
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySeconddefaultResponse
  >;
}

export interface GetSinglePagesFailure {
  /** A paging operation that receives a 400 on the first call */
  get(
    options?: GetSinglePagesFailureParameters
  ): Promise<
    GetSinglePagesFailure200Response | GetSinglePagesFailuredefaultResponse
  >;
}

export interface GetMultiplePagesFailure {
  /** A paging operation that receives a 400 on the second call */
  get(
    options?: GetMultiplePagesFailureParameters
  ): Promise<
    GetMultiplePagesFailure200Response | GetMultiplePagesFailuredefaultResponse
  >;
}

export interface GetMultiplePagesFailureUri {
  /** A paging operation that receives an invalid nextLink */
  get(
    options?: GetMultiplePagesFailureUriParameters
  ): Promise<
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUridefaultResponse
  >;
}

export interface GetMultiplePagesFragmentNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: GetMultiplePagesFragmentNextLinkParameters
  ): Promise<
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkdefaultResponse
  >;
}

export interface GetMultiplePagesFragmentWithGroupingNextLink {
  /** A paging operation that doesn't return a full URL, just a fragment with parameters grouped */
  get(
    options: GetMultiplePagesFragmentWithGroupingNextLinkParameters
  ): Promise<
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
  >;
}

export interface GetMultiplePagesLRO {
  /** A long-running paging operation that includes a nextLink that has 10 pages */
  post(
    options?: GetMultiplePagesLROParameters
  ): Promise<
    GetMultiplePagesLRO202Response | GetMultiplePagesLROdefaultResponse
  >;
}

export interface NextFragment {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentParameters
  ): Promise<NextFragment200Response | NextFragmentdefaultResponse>;
}

export interface NextFragmentWithGrouping {
  /** A paging operation that doesn't return a full URL, just a fragment */
  get(
    options: NextFragmentWithGroupingParameters
  ): Promise<
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingdefaultResponse
  >;
}

export interface GetPagingModelWithItemNameWithXMSClientName {
  /** A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name 'indexes'. */
  get(
    options?: GetPagingModelWithItemNameWithXMSClientNameParameters
  ): Promise<
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
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

export type PagingRestClient = Client & {
  path: Routes;
  paging: PagingOperations;
};

export default function Paging(options: ClientOptions = {}): PagingRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(
    baseUrl,

    options
  ) as PagingRestClient;
  return {
    ...client,
    paging: {
      getNoItemNamePages: (options) => {
        return client.path("/paging/noitemname").get(options);
      },
      getNullNextLinkNamePages: (options) => {
        return client.path("/paging/nullnextlink").get(options);
      },
      getSinglePages: (options) => {
        return client.path("/paging/single").get(options);
      },
      firstResponseEmpty: (options) => {
        return client.path("/paging/firstResponseEmpty/1").get(options);
      },
      getMultiplePages: (options) => {
        return client.path("/paging/multiple").get(options);
      },
      getWithQueryParams: (options) => {
        return client.path("/paging/multiple/getWithQueryParams").get(options);
      },
      nextOperationWithQueryParams: (options) => {
        return client
          .path("/paging/multiple/nextOperationWithQueryParams")
          .get(options);
      },
      getOdataMultiplePages: (options) => {
        return client.path("/paging/multiple/odata").get(options);
      },
      getMultiplePagesWithOffset: (offset, options) => {
        return client
          .path("/paging/multiple/withpath/{offset}", offset)
          .get(options);
      },
      getMultiplePagesRetryFirst: (options) => {
        return client.path("/paging/multiple/retryfirst").get(options);
      },
      getMultiplePagesRetrySecond: (options) => {
        return client.path("/paging/multiple/retrysecond").get(options);
      },
      getSinglePagesFailure: (options) => {
        return client.path("/paging/single/failure").get(options);
      },
      getMultiplePagesFailure: (options) => {
        return client.path("/paging/multiple/failure").get(options);
      },
      getMultiplePagesFailureUri: (options) => {
        return client.path("/paging/multiple/failureuri").get(options);
      },
      getMultiplePagesFragmentNextLink: (tenant, options) => {
        return client
          .path("/paging/multiple/fragment/{tenant}", tenant)
          .get(options);
      },
      getMultiplePagesFragmentWithGroupingNextLink: (tenant, options) => {
        return client
          .path("/paging/multiple/fragmentwithgrouping/{tenant}", tenant)
          .get(options);
      },
      getMultiplePagesLRO: (options) => {
        return client.path("/paging/multiple/lro").post(options);
      },
      nextFragment: (tenant, nextLink, options) => {
        return client
          .path(
            "/paging/multiple/fragment/{tenant}/{nextLink}",
            tenant,
            nextLink
          )
          .get(options);
      },
      nextFragmentWithGrouping: (tenant, nextLink, options) => {
        return client
          .path(
            "/paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}",
            tenant,
            nextLink
          )
          .get(options);
      },
      getPagingModelWithItemNameWithXMSClientName: (options) => {
        return client.path("/paging/itemNameWithXMSClientName").get(options);
      }
    }
  };
}
