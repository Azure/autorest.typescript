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

const responseMap: Record<string, string[]> = {
  "GET /paging/noitemname": ["200"],
  "GET /paging/nullnextlink": ["200"],
  "GET /paging/single": ["200"],
  "GET /paging/firstResponseEmpty/1": ["200"],
  "GET /paging/multiple": ["200"],
  "GET /paging/multiple/getWithQueryParams": ["200"],
  "GET /paging/multiple/duplicateParams/1": ["200"],
  "GET /paging/maxPageSize": ["200"],
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
  "GET /paging/multiple/lro": ["202"],
  "GET /paging/apiVersion/append/1": ["200"],
  "GET /paging/apiVersion/replace/1": ["200"],
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
  response: PageWithMaxPageSize200Response | PageWithMaxPageSizedefaultResponse
): response is PageWithMaxPageSizedefaultResponse;
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
  response: AppendApiVersion200Response | AppendApiVersiondefaultResponse
): response is AppendApiVersiondefaultResponse;
export function isUnexpected(
  response: ReplaceApiVersion200Response | ReplaceApiVersiondefaultResponse
): response is ReplaceApiVersiondefaultResponse;
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
    | PageWithMaxPageSize200Response
    | PageWithMaxPageSizedefaultResponse
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
    | AppendApiVersion200Response
    | AppendApiVersiondefaultResponse
    | ReplaceApiVersion200Response
    | ReplaceApiVersiondefaultResponse
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
  | PageWithMaxPageSizedefaultResponse
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
  | AppendApiVersiondefaultResponse
  | ReplaceApiVersiondefaultResponse
  | NextFragmentdefaultResponse
  | NextFragmentWithGroupingdefaultResponse
  | GetPagingModelWithItemNameWithXMSClientNamedefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
