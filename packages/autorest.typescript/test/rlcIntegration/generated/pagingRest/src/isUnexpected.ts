// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "GET /paging/noitemname": ["200"],
  "GET /paging/emptynextlink": ["200"],
  "GET /paging/nullnextlink": ["200"],
  "GET /paging/single": ["200"],
  "GET /paging/single/getWithBodyParams": ["200"],
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
  "GET /paging/itemNameWithXMSClientName": ["200"],
};

export function isUnexpected(
  response:
    | PagingGetNoItemNamePages200Response
    | PagingGetNoItemNamePagesDefaultResponse,
): response is PagingGetNoItemNamePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetEmptyNextLinkNamePages200Response
    | PagingGetEmptyNextLinkNamePagesDefaultResponse,
): response is PagingGetEmptyNextLinkNamePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetNullNextLinkNamePages200Response
    | PagingGetNullNextLinkNamePagesDefaultResponse,
): response is PagingGetNullNextLinkNamePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetSinglePages200Response
    | PagingGetSinglePagesDefaultResponse,
): response is PagingGetSinglePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetSinglePagesWithBodyParams200Response
    | PagingGetSinglePagesWithBodyParamsDefaultResponse,
): response is PagingGetSinglePagesWithBodyParamsDefaultResponse;
export function isUnexpected(
  response:
    | PagingFirstResponseEmpty200Response
    | PagingFirstResponseEmptyDefaultResponse,
): response is PagingFirstResponseEmptyDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePages200Response
    | PagingGetMultiplePagesDefaultResponse,
): response is PagingGetMultiplePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetWithQueryParams200Response
    | PagingGetWithQueryParamsDefaultResponse,
): response is PagingGetWithQueryParamsDefaultResponse;
export function isUnexpected(
  response:
    | PagingDuplicateParams200Response
    | PagingDuplicateParamsDefaultResponse,
): response is PagingDuplicateParamsDefaultResponse;
export function isUnexpected(
  response:
    | PagingPageWithMaxPageSize200Response
    | PagingPageWithMaxPageSizeDefaultResponse,
): response is PagingPageWithMaxPageSizeDefaultResponse;
export function isUnexpected(
  response:
    | PagingNextOperationWithQueryParams200Response
    | PagingNextOperationWithQueryParamsDefaultResponse,
): response is PagingNextOperationWithQueryParamsDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetOdataMultiplePages200Response
    | PagingGetOdataMultiplePagesDefaultResponse,
): response is PagingGetOdataMultiplePagesDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesWithOffset200Response
    | PagingGetMultiplePagesWithOffsetDefaultResponse,
): response is PagingGetMultiplePagesWithOffsetDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesRetryFirst200Response
    | PagingGetMultiplePagesRetryFirstDefaultResponse,
): response is PagingGetMultiplePagesRetryFirstDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesRetrySecond200Response
    | PagingGetMultiplePagesRetrySecondDefaultResponse,
): response is PagingGetMultiplePagesRetrySecondDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetSinglePagesFailure200Response
    | PagingGetSinglePagesFailureDefaultResponse,
): response is PagingGetSinglePagesFailureDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesFailure200Response
    | PagingGetMultiplePagesFailureDefaultResponse,
): response is PagingGetMultiplePagesFailureDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesFailureUri200Response
    | PagingGetMultiplePagesFailureUriDefaultResponse,
): response is PagingGetMultiplePagesFailureUriDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesFragmentNextLink200Response
    | PagingGetMultiplePagesFragmentNextLinkDefaultResponse,
): response is PagingGetMultiplePagesFragmentNextLinkDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesFragmentWithGroupingNextLink200Response
    | PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse,
): response is PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetMultiplePagesLRO202Response
    | PagingGetMultiplePagesLRODefaultResponse,
): response is PagingGetMultiplePagesLRODefaultResponse;
export function isUnexpected(
  response:
    | PagingAppendApiVersion200Response
    | PagingAppendApiVersionDefaultResponse,
): response is PagingAppendApiVersionDefaultResponse;
export function isUnexpected(
  response:
    | PagingReplaceApiVersion200Response
    | PagingReplaceApiVersionDefaultResponse,
): response is PagingReplaceApiVersionDefaultResponse;
export function isUnexpected(
  response: PagingNextFragment200Response | PagingNextFragmentDefaultResponse,
): response is PagingNextFragmentDefaultResponse;
export function isUnexpected(
  response:
    | PagingNextFragmentWithGrouping200Response
    | PagingNextFragmentWithGroupingDefaultResponse,
): response is PagingNextFragmentWithGroupingDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetPagingModelWithItemNameWithXMSClientName200Response
    | PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse,
): response is PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse;
export function isUnexpected(
  response:
    | PagingGetNoItemNamePages200Response
    | PagingGetNoItemNamePagesDefaultResponse
    | PagingGetEmptyNextLinkNamePages200Response
    | PagingGetEmptyNextLinkNamePagesDefaultResponse
    | PagingGetNullNextLinkNamePages200Response
    | PagingGetNullNextLinkNamePagesDefaultResponse
    | PagingGetSinglePages200Response
    | PagingGetSinglePagesDefaultResponse
    | PagingGetSinglePagesWithBodyParams200Response
    | PagingGetSinglePagesWithBodyParamsDefaultResponse
    | PagingFirstResponseEmpty200Response
    | PagingFirstResponseEmptyDefaultResponse
    | PagingGetMultiplePages200Response
    | PagingGetMultiplePagesDefaultResponse
    | PagingGetWithQueryParams200Response
    | PagingGetWithQueryParamsDefaultResponse
    | PagingDuplicateParams200Response
    | PagingDuplicateParamsDefaultResponse
    | PagingPageWithMaxPageSize200Response
    | PagingPageWithMaxPageSizeDefaultResponse
    | PagingNextOperationWithQueryParams200Response
    | PagingNextOperationWithQueryParamsDefaultResponse
    | PagingGetOdataMultiplePages200Response
    | PagingGetOdataMultiplePagesDefaultResponse
    | PagingGetMultiplePagesWithOffset200Response
    | PagingGetMultiplePagesWithOffsetDefaultResponse
    | PagingGetMultiplePagesRetryFirst200Response
    | PagingGetMultiplePagesRetryFirstDefaultResponse
    | PagingGetMultiplePagesRetrySecond200Response
    | PagingGetMultiplePagesRetrySecondDefaultResponse
    | PagingGetSinglePagesFailure200Response
    | PagingGetSinglePagesFailureDefaultResponse
    | PagingGetMultiplePagesFailure200Response
    | PagingGetMultiplePagesFailureDefaultResponse
    | PagingGetMultiplePagesFailureUri200Response
    | PagingGetMultiplePagesFailureUriDefaultResponse
    | PagingGetMultiplePagesFragmentNextLink200Response
    | PagingGetMultiplePagesFragmentNextLinkDefaultResponse
    | PagingGetMultiplePagesFragmentWithGroupingNextLink200Response
    | PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
    | PagingGetMultiplePagesLRO202Response
    | PagingGetMultiplePagesLRODefaultResponse
    | PagingAppendApiVersion200Response
    | PagingAppendApiVersionDefaultResponse
    | PagingReplaceApiVersion200Response
    | PagingReplaceApiVersionDefaultResponse
    | PagingNextFragment200Response
    | PagingNextFragmentDefaultResponse
    | PagingNextFragmentWithGrouping200Response
    | PagingNextFragmentWithGroupingDefaultResponse
    | PagingGetPagingModelWithItemNameWithXMSClientName200Response
    | PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse,
): response is
  | PagingGetNoItemNamePagesDefaultResponse
  | PagingGetEmptyNextLinkNamePagesDefaultResponse
  | PagingGetNullNextLinkNamePagesDefaultResponse
  | PagingGetSinglePagesDefaultResponse
  | PagingGetSinglePagesWithBodyParamsDefaultResponse
  | PagingFirstResponseEmptyDefaultResponse
  | PagingGetMultiplePagesDefaultResponse
  | PagingGetWithQueryParamsDefaultResponse
  | PagingDuplicateParamsDefaultResponse
  | PagingPageWithMaxPageSizeDefaultResponse
  | PagingNextOperationWithQueryParamsDefaultResponse
  | PagingGetOdataMultiplePagesDefaultResponse
  | PagingGetMultiplePagesWithOffsetDefaultResponse
  | PagingGetMultiplePagesRetryFirstDefaultResponse
  | PagingGetMultiplePagesRetrySecondDefaultResponse
  | PagingGetSinglePagesFailureDefaultResponse
  | PagingGetMultiplePagesFailureDefaultResponse
  | PagingGetMultiplePagesFailureUriDefaultResponse
  | PagingGetMultiplePagesFragmentNextLinkDefaultResponse
  | PagingGetMultiplePagesFragmentWithGroupingNextLinkDefaultResponse
  | PagingGetMultiplePagesLRODefaultResponse
  | PagingAppendApiVersionDefaultResponse
  | PagingReplaceApiVersionDefaultResponse
  | PagingNextFragmentDefaultResponse
  | PagingNextFragmentWithGroupingDefaultResponse
  | PagingGetPagingModelWithItemNameWithXMSClientNameDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
