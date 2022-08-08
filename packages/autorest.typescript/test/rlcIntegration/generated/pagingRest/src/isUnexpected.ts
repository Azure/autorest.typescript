// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  response: GetNoItemNamePages200Response | GetNoItemNamePagesDefaultResponse
): response is GetNoItemNamePagesDefaultResponse;
export function isUnexpected(
  response:
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesDefaultResponse
): response is GetNullNextLinkNamePagesDefaultResponse;
export function isUnexpected(
  response: GetSinglePages200Response | GetSinglePagesDefaultResponse
): response is GetSinglePagesDefaultResponse;
export function isUnexpected(
  response: FirstResponseEmpty200Response | FirstResponseEmptyDefaultResponse
): response is FirstResponseEmptyDefaultResponse;
export function isUnexpected(
  response: GetMultiplePages200Response | GetMultiplePagesDefaultResponse
): response is GetMultiplePagesDefaultResponse;
export function isUnexpected(
  response: GetWithQueryParams200Response | GetWithQueryParamsDefaultResponse
): response is GetWithQueryParamsDefaultResponse;
export function isUnexpected(
  response: DuplicateParams200Response | DuplicateParamsDefaultResponse
): response is DuplicateParamsDefaultResponse;
export function isUnexpected(
  response: PageWithMaxPageSize200Response | PageWithMaxPageSizeDefaultResponse
): response is PageWithMaxPageSizeDefaultResponse;
export function isUnexpected(
  response:
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsDefaultResponse
): response is NextOperationWithQueryParamsDefaultResponse;
export function isUnexpected(
  response:
    | GetOdataMultiplePages200Response
    | GetOdataMultiplePagesDefaultResponse
): response is GetOdataMultiplePagesDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetDefaultResponse
): response is GetMultiplePagesWithOffsetDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstDefaultResponse
): response is GetMultiplePagesRetryFirstDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySecondDefaultResponse
): response is GetMultiplePagesRetrySecondDefaultResponse;
export function isUnexpected(
  response:
    | GetSinglePagesFailure200Response
    | GetSinglePagesFailureDefaultResponse
): response is GetSinglePagesFailureDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFailure200Response
    | GetMultiplePagesFailureDefaultResponse
): response is GetMultiplePagesFailureDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUriDefaultResponse
): response is GetMultiplePagesFailureUriDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkDefaultResponse
): response is GetMultiplePagesFragmentNextLinkDefaultResponse;
export function isUnexpected(
  response:
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
): response is GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse;
export function isUnexpected(
  response: GetMultiplePagesLRO202Response | GetMultiplePagesLRODefaultResponse
): response is GetMultiplePagesLRODefaultResponse;
export function isUnexpected(
  response: AppendApiVersion200Response | AppendApiVersionDefaultResponse
): response is AppendApiVersionDefaultResponse;
export function isUnexpected(
  response: ReplaceApiVersion200Response | ReplaceApiVersionDefaultResponse
): response is ReplaceApiVersionDefaultResponse;
export function isUnexpected(
  response: NextFragment200Response | NextFragmentDefaultResponse
): response is NextFragmentDefaultResponse;
export function isUnexpected(
  response:
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingDefaultResponse
): response is NextFragmentWithGroupingDefaultResponse;
export function isUnexpected(
  response:
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNameDefaultResponse
): response is GetPagingModelWithItemNameWithXMSClientNameDefaultResponse;
export function isUnexpected(
  response:
    | GetNoItemNamePages200Response
    | GetNoItemNamePagesDefaultResponse
    | GetNullNextLinkNamePages200Response
    | GetNullNextLinkNamePagesDefaultResponse
    | GetSinglePages200Response
    | GetSinglePagesDefaultResponse
    | FirstResponseEmpty200Response
    | FirstResponseEmptyDefaultResponse
    | GetMultiplePages200Response
    | GetMultiplePagesDefaultResponse
    | GetWithQueryParams200Response
    | GetWithQueryParamsDefaultResponse
    | DuplicateParams200Response
    | DuplicateParamsDefaultResponse
    | PageWithMaxPageSize200Response
    | PageWithMaxPageSizeDefaultResponse
    | NextOperationWithQueryParams200Response
    | NextOperationWithQueryParamsDefaultResponse
    | GetOdataMultiplePages200Response
    | GetOdataMultiplePagesDefaultResponse
    | GetMultiplePagesWithOffset200Response
    | GetMultiplePagesWithOffsetDefaultResponse
    | GetMultiplePagesRetryFirst200Response
    | GetMultiplePagesRetryFirstDefaultResponse
    | GetMultiplePagesRetrySecond200Response
    | GetMultiplePagesRetrySecondDefaultResponse
    | GetSinglePagesFailure200Response
    | GetSinglePagesFailureDefaultResponse
    | GetMultiplePagesFailure200Response
    | GetMultiplePagesFailureDefaultResponse
    | GetMultiplePagesFailureUri200Response
    | GetMultiplePagesFailureUriDefaultResponse
    | GetMultiplePagesFragmentNextLink200Response
    | GetMultiplePagesFragmentNextLinkDefaultResponse
    | GetMultiplePagesFragmentWithGroupingNextLink200Response
    | GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
    | GetMultiplePagesLRO202Response
    | GetMultiplePagesLRODefaultResponse
    | AppendApiVersion200Response
    | AppendApiVersionDefaultResponse
    | ReplaceApiVersion200Response
    | ReplaceApiVersionDefaultResponse
    | NextFragment200Response
    | NextFragmentDefaultResponse
    | NextFragmentWithGrouping200Response
    | NextFragmentWithGroupingDefaultResponse
    | GetPagingModelWithItemNameWithXMSClientName200Response
    | GetPagingModelWithItemNameWithXMSClientNameDefaultResponse
): response is
  | GetNoItemNamePagesDefaultResponse
  | GetNullNextLinkNamePagesDefaultResponse
  | GetSinglePagesDefaultResponse
  | FirstResponseEmptyDefaultResponse
  | GetMultiplePagesDefaultResponse
  | GetWithQueryParamsDefaultResponse
  | DuplicateParamsDefaultResponse
  | PageWithMaxPageSizeDefaultResponse
  | NextOperationWithQueryParamsDefaultResponse
  | GetOdataMultiplePagesDefaultResponse
  | GetMultiplePagesWithOffsetDefaultResponse
  | GetMultiplePagesRetryFirstDefaultResponse
  | GetMultiplePagesRetrySecondDefaultResponse
  | GetSinglePagesFailureDefaultResponse
  | GetMultiplePagesFailureDefaultResponse
  | GetMultiplePagesFailureUriDefaultResponse
  | GetMultiplePagesFragmentNextLinkDefaultResponse
  | GetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  | GetMultiplePagesLRODefaultResponse
  | AppendApiVersionDefaultResponse
  | ReplaceApiVersionDefaultResponse
  | NextFragmentDefaultResponse
  | NextFragmentWithGroupingDefaultResponse
  | GetPagingModelWithItemNameWithXMSClientNameDefaultResponse {
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
