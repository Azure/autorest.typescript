// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefault204Response,
  QueryDefaultDefaultResponse,
  QueryIso8601204Response,
  QueryIso8601DefaultResponse,
  QueryInt32Seconds204Response,
  QueryInt32SecondsDefaultResponse,
  QueryFloatSeconds204Response,
  QueryFloatSecondsDefaultResponse,
  QueryInt32SecondsArray204Response,
  QueryInt32SecondsArrayDefaultResponse,
  PropertyDefault200Response,
  PropertyDefaultDefaultResponse,
  PropertyIso8601200Response,
  PropertyIso8601DefaultResponse,
  PropertyInt32Seconds200Response,
  PropertyInt32SecondsDefaultResponse,
  PropertyFloatSeconds200Response,
  PropertyFloatSecondsDefaultResponse,
  PropertyFloatSecondsArray200Response,
  PropertyFloatSecondsArrayDefaultResponse,
  HeaderDefault204Response,
  HeaderDefaultDefaultResponse,
  HeaderIso8601204Response,
  HeaderIso8601DefaultResponse,
  HeaderIso8601Array204Response,
  HeaderIso8601ArrayDefaultResponse,
  HeaderInt32Seconds204Response,
  HeaderInt32SecondsDefaultResponse,
  HeaderFloatSeconds204Response,
  HeaderFloatSecondsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /encode/duration/query/default": ["204"],
  "GET /encode/duration/query/iso8601": ["204"],
  "GET /encode/duration/query/int32-seconds": ["204"],
  "GET /encode/duration/query/float-seconds": ["204"],
  "GET /encode/duration/query/int32-seconds-array": ["204"],
  "POST /encode/duration/property/default": ["200"],
  "POST /encode/duration/property/iso8601": ["200"],
  "POST /encode/duration/property/int32-seconds": ["200"],
  "POST /encode/duration/property/float-seconds": ["200"],
  "POST /encode/duration/property/float-seconds-array": ["200"],
  "GET /encode/duration/header/default": ["204"],
  "GET /encode/duration/header/iso8601": ["204"],
  "GET /encode/duration/header/iso8601-array": ["204"],
  "GET /encode/duration/header/int32-seconds": ["204"],
  "GET /encode/duration/header/float-seconds": ["204"],
};

export function isUnexpected(
  response: QueryDefault204Response | QueryDefaultDefaultResponse
): response is QueryDefaultDefaultResponse;
export function isUnexpected(
  response: QueryIso8601204Response | QueryIso8601DefaultResponse
): response is QueryIso8601DefaultResponse;
export function isUnexpected(
  response: QueryInt32Seconds204Response | QueryInt32SecondsDefaultResponse
): response is QueryInt32SecondsDefaultResponse;
export function isUnexpected(
  response: QueryFloatSeconds204Response | QueryFloatSecondsDefaultResponse
): response is QueryFloatSecondsDefaultResponse;
export function isUnexpected(
  response:
    | QueryInt32SecondsArray204Response
    | QueryInt32SecondsArrayDefaultResponse
): response is QueryInt32SecondsArrayDefaultResponse;
export function isUnexpected(
  response: PropertyDefault200Response | PropertyDefaultDefaultResponse
): response is PropertyDefaultDefaultResponse;
export function isUnexpected(
  response: PropertyIso8601200Response | PropertyIso8601DefaultResponse
): response is PropertyIso8601DefaultResponse;
export function isUnexpected(
  response:
    | PropertyInt32Seconds200Response
    | PropertyInt32SecondsDefaultResponse
): response is PropertyInt32SecondsDefaultResponse;
export function isUnexpected(
  response:
    | PropertyFloatSeconds200Response
    | PropertyFloatSecondsDefaultResponse
): response is PropertyFloatSecondsDefaultResponse;
export function isUnexpected(
  response:
    | PropertyFloatSecondsArray200Response
    | PropertyFloatSecondsArrayDefaultResponse
): response is PropertyFloatSecondsArrayDefaultResponse;
export function isUnexpected(
  response: HeaderDefault204Response | HeaderDefaultDefaultResponse
): response is HeaderDefaultDefaultResponse;
export function isUnexpected(
  response: HeaderIso8601204Response | HeaderIso8601DefaultResponse
): response is HeaderIso8601DefaultResponse;
export function isUnexpected(
  response: HeaderIso8601Array204Response | HeaderIso8601ArrayDefaultResponse
): response is HeaderIso8601ArrayDefaultResponse;
export function isUnexpected(
  response: HeaderInt32Seconds204Response | HeaderInt32SecondsDefaultResponse
): response is HeaderInt32SecondsDefaultResponse;
export function isUnexpected(
  response: HeaderFloatSeconds204Response | HeaderFloatSecondsDefaultResponse
): response is HeaderFloatSecondsDefaultResponse;
export function isUnexpected(
  response:
    | QueryDefault204Response
    | QueryDefaultDefaultResponse
    | QueryIso8601204Response
    | QueryIso8601DefaultResponse
    | QueryInt32Seconds204Response
    | QueryInt32SecondsDefaultResponse
    | QueryFloatSeconds204Response
    | QueryFloatSecondsDefaultResponse
    | QueryInt32SecondsArray204Response
    | QueryInt32SecondsArrayDefaultResponse
    | PropertyDefault200Response
    | PropertyDefaultDefaultResponse
    | PropertyIso8601200Response
    | PropertyIso8601DefaultResponse
    | PropertyInt32Seconds200Response
    | PropertyInt32SecondsDefaultResponse
    | PropertyFloatSeconds200Response
    | PropertyFloatSecondsDefaultResponse
    | PropertyFloatSecondsArray200Response
    | PropertyFloatSecondsArrayDefaultResponse
    | HeaderDefault204Response
    | HeaderDefaultDefaultResponse
    | HeaderIso8601204Response
    | HeaderIso8601DefaultResponse
    | HeaderIso8601Array204Response
    | HeaderIso8601ArrayDefaultResponse
    | HeaderInt32Seconds204Response
    | HeaderInt32SecondsDefaultResponse
    | HeaderFloatSeconds204Response
    | HeaderFloatSecondsDefaultResponse
): response is
  | QueryDefaultDefaultResponse
  | QueryIso8601DefaultResponse
  | QueryInt32SecondsDefaultResponse
  | QueryFloatSecondsDefaultResponse
  | QueryInt32SecondsArrayDefaultResponse
  | PropertyDefaultDefaultResponse
  | PropertyIso8601DefaultResponse
  | PropertyInt32SecondsDefaultResponse
  | PropertyFloatSecondsDefaultResponse
  | PropertyFloatSecondsArrayDefaultResponse
  | HeaderDefaultDefaultResponse
  | HeaderIso8601DefaultResponse
  | HeaderIso8601ArrayDefaultResponse
  | HeaderInt32SecondsDefaultResponse
  | HeaderFloatSecondsDefaultResponse {
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
