// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "GET /paging/noitemname": ["200"],
  "GET /paging/nullnextlink": ["200"],
  "GET /paging/single": ["200"],
  "GET /paging/firstResponseEmpty/1": ["200"],
  "GET /paging/multiple": ["200"],
  "GET /paging/multiple/getWithQueryParams": ["200"],
  "GET /paging/multiple/duplicateParams/1": ["200"],
  "GET /paging/multiple/nextOperationWithQueryParams": ["200"],
  "GET /paging/multiple/odata": ["200"],
  "GET /paging/multiple/withpath/{offset}": ["200"],
  "GET /paging/multiple/retryfirst": ["200"],
  "GET /paging/multiple/retrysecond": ["200"],
  "GET /paging/single/failure": ["200"],
  "GET /paging/multiple/failure": ["200"],
  "GET /paging/multiple/failureuri": ["200"],
  "GET /paging/multiple/fragment/{tenant}": ["200"],
  "GET /paging/multiple/fragmentwithgrouping/{tenant}": ["200"],
  "POST /paging/multiple/lro": ["202"],
  "GET /paging/multiple/fragment/{tenant}/{nextLink}": ["200"],
  "GET /paging/multiple/fragmentwithgrouping/{tenant}/{nextLink}": ["200"],
  "GET /paging/itemNameWithXMSClientName": ["200"]
};

export function isUnexpected(
  response: GetNoItemNamePages200Response | GetNoItemNamePagesdefaultResponse
): response is GetNoItemNamePagesdefaultResponse;
export function isUnexpected(
  response:
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesdefaultResponse
): response is GetNullNextLinkNamePagesdefaultResponse;
export function isUnexpected(
  response: GetSinglePages200Response | GetSinglePagesdefaultResponse
): response is GetSinglePagesdefaultResponse;
export function isUnexpected(
  response: FirstResponseEmpty200Response | FirstResponseEmptydefaultResponse
): response is FirstResponseEmptydefaultResponse;
export function isUnexpected(
  response: GetMultiplePages200Response | GetMultiplePagesdefaultResponse
): response is GetMultiplePagesdefaultResponse;
export function isUnexpected(
  response: GetWithQueryParams200Response | GetWithQueryParamsdefaultResponse
): response is GetWithQueryParamsdefaultResponse;
export function isUnexpected(
  response: DuplicateParams200Response | DuplicateParamsdefaultResponse
): response is DuplicateParamsdefaultResponse;
export function isUnexpected(
  response:
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsdefaultResponse
): response is NextOperationWithQueryParamsdefaultResponse;
export function isUnexpected(
  response:
    | GetOdataMultiplePages200Response
    | GetOdataMultiplePagesdefaultResponse
): response is GetOdataMultiplePagesdefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetdefaultResponse
): response is GetMultiplePagesWithOffsetdefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstdefaultResponse
): response is GetMultiplePagesRetryFirstdefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySeconddefaultResponse
): response is GetMultiplePagesRetrySeconddefaultResponse;
export function isUnexpected(
  response:
    | GetSinglePagesFailure200Response
    | GetSinglePagesFailuredefaultResponse
): response is GetSinglePagesFailuredefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFailure200Response
    | GetMultiplePagesFailuredefaultResponse
): response is GetMultiplePagesFailuredefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUridefaultResponse
): response is GetMultiplePagesFailureUridefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkdefaultResponse
): response is GetMultiplePagesFragmentNextLinkdefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
): response is GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse;
export function isUnexpected(
  response: GetMultiplePagesLRO202Response | GetMultiplePagesLROdefaultResponse
): response is GetMultiplePagesLROdefaultResponse;
export function isUnexpected(
  response: NextFragment200Response | NextFragmentdefaultResponse
): response is NextFragmentdefaultResponse;
export function isUnexpected(
  response:
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingdefaultResponse
): response is NextFragmentWithGroupingdefaultResponse;
export function isUnexpected(
  response:
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
): response is GetPagingModelWithItemNameWithXMSClientNamedefaultResponse;
export function isUnexpected(
  response:
    | GetNoItemNamePages200Response
    | GetNoItemNamePagesdefaultResponse
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesdefaultResponse
    | GetSinglePages200Response
    | GetSinglePagesdefaultResponse
    | FirstResponseEmpty200Response
    | FirstResponseEmptydefaultResponse
    | GetMultiplePages200Response
    | GetMultiplePagesdefaultResponse
    | GetWithQueryParams200Response
    | GetWithQueryParamsdefaultResponse
    | DuplicateParams200Response
    | DuplicateParamsdefaultResponse
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsdefaultResponse
    | GetOdataMultiplePages200Response
    | GetOdataMultiplePagesdefaultResponse
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetdefaultResponse
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstdefaultResponse
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySeconddefaultResponse
    | GetSinglePagesFailure200Response
    | GetSinglePagesFailuredefaultResponse
    | GetMultiplePagesFailure200Response
    | GetMultiplePagesFailuredefaultResponse
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUridefaultResponse
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkdefaultResponse
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
    | GetMultiplePagesLRO202Response
    | GetMultiplePagesLROdefaultResponse
    | NextFragment200Response
    | NextFragmentdefaultResponse
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingdefaultResponse
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse
): response is
  | GetNoItemNamePagesdefaultResponse
  | GetNullNextLinkNamePagesdefaultResponse
  | GetSinglePagesdefaultResponse
  | FirstResponseEmptydefaultResponse
  | GetMultiplePagesdefaultResponse
  | GetWithQueryParamsdefaultResponse
  | DuplicateParamsdefaultResponse
  | NextOperationWithQueryParamsdefaultResponse
  | GetOdataMultiplePagesdefaultResponse
  | GetMultiplePagesWithOffsetdefaultResponse
  | GetMultiplePagesRetryFirstdefaultResponse
  | GetMultiplePagesRetrySeconddefaultResponse
  | GetSinglePagesFailuredefaultResponse
  | GetMultiplePagesFailuredefaultResponse
  | GetMultiplePagesFailureUridefaultResponse
  | GetMultiplePagesFragmentNextLinkdefaultResponse
  | GetMultiplePagesFragmentWithGroupingNextLinkdefaultResponse
  | GetMultiplePagesLROdefaultResponse
  | NextFragmentdefaultResponse
  | NextFragmentWithGroupingdefaultResponse
  | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse {
  const url = new URL(response.request.url);
  const method = response.request.method;
  return responseMap[`${method} ${url.pathname}`].includes(response.status);
}
