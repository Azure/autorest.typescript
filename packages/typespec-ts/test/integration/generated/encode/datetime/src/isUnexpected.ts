// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefault204Response,
  QueryDefaultDefaultResponse,
  QueryRfc3339204Response,
  QueryRfc3339DefaultResponse,
  QueryRfc7231204Response,
  QueryRfc7231DefaultResponse,
  QueryUnixTimestamp204Response,
  QueryUnixTimestampDefaultResponse,
  QueryUnixTimestampArray204Response,
  QueryUnixTimestampArrayDefaultResponse,
  PropertyDefault200Response,
  PropertyDefaultDefaultResponse,
  PropertyRfc3339200Response,
  PropertyRfc3339DefaultResponse,
  PropertyRfc7231200Response,
  PropertyRfc7231DefaultResponse,
  PropertyUnixTimestamp200Response,
  PropertyUnixTimestampDefaultResponse,
  PropertyUnixTimestampArray200Response,
  PropertyUnixTimestampArrayDefaultResponse,
  HeaderDefault204Response,
  HeaderDefaultDefaultResponse,
  HeaderRfc3339204Response,
  HeaderRfc3339DefaultResponse,
  HeaderRfc7231204Response,
  HeaderRfc7231DefaultResponse,
  HeaderUnixTimestamp204Response,
  HeaderUnixTimestampDefaultResponse,
  HeaderUnixTimestampArray204Response,
  HeaderUnixTimestampArrayDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /encode/datetime/query/default": ["204"],
  "GET /encode/datetime/query/rfc3339": ["204"],
  "GET /encode/datetime/query/rfc7231": ["204"],
  "GET /encode/datetime/query/unix-timestamp": ["204"],
  "GET /encode/datetime/query/unix-timestamp-array": ["204"],
  "POST /encode/datetime/property/default": ["200"],
  "POST /encode/datetime/property/rfc3339": ["200"],
  "POST /encode/datetime/property/rfc7231": ["200"],
  "POST /encode/datetime/property/unix-timestamp": ["200"],
  "POST /encode/datetime/property/unix-timestamp-array": ["200"],
  "GET /encode/datetime/header/default": ["204"],
  "GET /encode/datetime/header/rfc3339": ["204"],
  "GET /encode/datetime/header/rfc7231": ["204"],
  "GET /encode/datetime/header/unix-timestamp": ["204"],
  "GET /encode/datetime/header/unix-timestamp-array": ["204"],
};

export function isUnexpected(
  response: QueryDefault204Response | QueryDefaultDefaultResponse
): response is QueryDefaultDefaultResponse;
export function isUnexpected(
  response: QueryRfc3339204Response | QueryRfc3339DefaultResponse
): response is QueryRfc3339DefaultResponse;
export function isUnexpected(
  response: QueryRfc7231204Response | QueryRfc7231DefaultResponse
): response is QueryRfc7231DefaultResponse;
export function isUnexpected(
  response: QueryUnixTimestamp204Response | QueryUnixTimestampDefaultResponse
): response is QueryUnixTimestampDefaultResponse;
export function isUnexpected(
  response:
    | QueryUnixTimestampArray204Response
    | QueryUnixTimestampArrayDefaultResponse
): response is QueryUnixTimestampArrayDefaultResponse;
export function isUnexpected(
  response: PropertyDefault200Response | PropertyDefaultDefaultResponse
): response is PropertyDefaultDefaultResponse;
export function isUnexpected(
  response: PropertyRfc3339200Response | PropertyRfc3339DefaultResponse
): response is PropertyRfc3339DefaultResponse;
export function isUnexpected(
  response: PropertyRfc7231200Response | PropertyRfc7231DefaultResponse
): response is PropertyRfc7231DefaultResponse;
export function isUnexpected(
  response:
    | PropertyUnixTimestamp200Response
    | PropertyUnixTimestampDefaultResponse
): response is PropertyUnixTimestampDefaultResponse;
export function isUnexpected(
  response:
    | PropertyUnixTimestampArray200Response
    | PropertyUnixTimestampArrayDefaultResponse
): response is PropertyUnixTimestampArrayDefaultResponse;
export function isUnexpected(
  response: HeaderDefault204Response | HeaderDefaultDefaultResponse
): response is HeaderDefaultDefaultResponse;
export function isUnexpected(
  response: HeaderRfc3339204Response | HeaderRfc3339DefaultResponse
): response is HeaderRfc3339DefaultResponse;
export function isUnexpected(
  response: HeaderRfc7231204Response | HeaderRfc7231DefaultResponse
): response is HeaderRfc7231DefaultResponse;
export function isUnexpected(
  response: HeaderUnixTimestamp204Response | HeaderUnixTimestampDefaultResponse
): response is HeaderUnixTimestampDefaultResponse;
export function isUnexpected(
  response:
    | HeaderUnixTimestampArray204Response
    | HeaderUnixTimestampArrayDefaultResponse
): response is HeaderUnixTimestampArrayDefaultResponse;
export function isUnexpected(
  response:
    | QueryDefault204Response
    | QueryDefaultDefaultResponse
    | QueryRfc3339204Response
    | QueryRfc3339DefaultResponse
    | QueryRfc7231204Response
    | QueryRfc7231DefaultResponse
    | QueryUnixTimestamp204Response
    | QueryUnixTimestampDefaultResponse
    | QueryUnixTimestampArray204Response
    | QueryUnixTimestampArrayDefaultResponse
    | PropertyDefault200Response
    | PropertyDefaultDefaultResponse
    | PropertyRfc3339200Response
    | PropertyRfc3339DefaultResponse
    | PropertyRfc7231200Response
    | PropertyRfc7231DefaultResponse
    | PropertyUnixTimestamp200Response
    | PropertyUnixTimestampDefaultResponse
    | PropertyUnixTimestampArray200Response
    | PropertyUnixTimestampArrayDefaultResponse
    | HeaderDefault204Response
    | HeaderDefaultDefaultResponse
    | HeaderRfc3339204Response
    | HeaderRfc3339DefaultResponse
    | HeaderRfc7231204Response
    | HeaderRfc7231DefaultResponse
    | HeaderUnixTimestamp204Response
    | HeaderUnixTimestampDefaultResponse
    | HeaderUnixTimestampArray204Response
    | HeaderUnixTimestampArrayDefaultResponse
): response is
  | QueryDefaultDefaultResponse
  | QueryRfc3339DefaultResponse
  | QueryRfc7231DefaultResponse
  | QueryUnixTimestampDefaultResponse
  | QueryUnixTimestampArrayDefaultResponse
  | PropertyDefaultDefaultResponse
  | PropertyRfc3339DefaultResponse
  | PropertyRfc7231DefaultResponse
  | PropertyUnixTimestampDefaultResponse
  | PropertyUnixTimestampArrayDefaultResponse
  | HeaderDefaultDefaultResponse
  | HeaderRfc3339DefaultResponse
  | HeaderRfc7231DefaultResponse
  | HeaderUnixTimestampDefaultResponse
  | HeaderUnixTimestampArrayDefaultResponse {
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
