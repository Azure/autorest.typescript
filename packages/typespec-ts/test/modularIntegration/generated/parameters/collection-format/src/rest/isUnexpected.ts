// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryMulti204Response,
  QueryMultiDefaultResponse,
  QuerySsv204Response,
  QuerySsvDefaultResponse,
  QueryTsv204Response,
  QueryTsvDefaultResponse,
  QueryPipes204Response,
  QueryPipesDefaultResponse,
  QueryCsv204Response,
  QueryCsvDefaultResponse,
  HeaderCsv204Response,
  HeaderCsvDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /parameters/collection-format/query/multi": ["204"],
  "GET /parameters/collection-format/query/ssv": ["204"],
  "GET /parameters/collection-format/query/tsv": ["204"],
  "GET /parameters/collection-format/query/pipes": ["204"],
  "GET /parameters/collection-format/query/csv": ["204"],
  "GET /parameters/collection-format/header/csv": ["204"],
};

export function isUnexpected(
  response: QueryMulti204Response | QueryMultiDefaultResponse
): response is QueryMultiDefaultResponse;
export function isUnexpected(
  response: QuerySsv204Response | QuerySsvDefaultResponse
): response is QuerySsvDefaultResponse;
export function isUnexpected(
  response: QueryTsv204Response | QueryTsvDefaultResponse
): response is QueryTsvDefaultResponse;
export function isUnexpected(
  response: QueryPipes204Response | QueryPipesDefaultResponse
): response is QueryPipesDefaultResponse;
export function isUnexpected(
  response: QueryCsv204Response | QueryCsvDefaultResponse
): response is QueryCsvDefaultResponse;
export function isUnexpected(
  response: HeaderCsv204Response | HeaderCsvDefaultResponse
): response is HeaderCsvDefaultResponse;
export function isUnexpected(
  response:
    | QueryMulti204Response
    | QueryMultiDefaultResponse
    | QuerySsv204Response
    | QuerySsvDefaultResponse
    | QueryTsv204Response
    | QueryTsvDefaultResponse
    | QueryPipes204Response
    | QueryPipesDefaultResponse
    | QueryCsv204Response
    | QueryCsvDefaultResponse
    | HeaderCsv204Response
    | HeaderCsvDefaultResponse
): response is
  | QueryMultiDefaultResponse
  | QuerySsvDefaultResponse
  | QueryTsvDefaultResponse
  | QueryPipesDefaultResponse
  | QueryCsvDefaultResponse
  | HeaderCsvDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`
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
