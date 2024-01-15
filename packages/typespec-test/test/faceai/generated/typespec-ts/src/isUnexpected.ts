// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateLivenessSession200Response,
  CreateLivenessSessionDefaultResponse,
  ListLivenessSessions200Response,
  ListLivenessSessionsDefaultResponse,
  GetLivenessSession200Response,
  GetLivenessSessionDefaultResponse,
  DeleteLivenessSession200Response,
  DeleteLivenessSessionDefaultResponse,
  ListLivenessSessionAuditEntries200Response,
  ListLivenessSessionAuditEntriesDefaultResponse,
  CreateLivenessWithVerifySessionByJson200Response,
  CreateLivenessWithVerifySessionByFormData200Response,
  CreateLivenessWithVerifySessionByJsonDefaultResponse,
  ListLivenessWithVerifySessions200Response,
  ListLivenessWithVerifySessionsDefaultResponse,
  GetLivenessWithVerifySession200Response,
  GetLivenessWithVerifySessionDefaultResponse,
  DeleteLivenessWithVerifySession200Response,
  DeleteLivenessWithVerifySessionDefaultResponse,
  ListLivenessWithVerifySessionAuditEntries200Response,
  ListLivenessWithVerifySessionAuditEntriesDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /face/{apiVersion}/detectLiveness/singleModal/sessions": ["200"],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions": ["200"],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}": [
    "200",
  ],
  "DELETE /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}/audit":
    ["200"],
  "POST /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}":
    ["200"],
  "DELETE /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}":
    ["200"],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit":
    ["200"],
};

export function isUnexpected(
  response:
    | CreateLivenessSession200Response
    | CreateLivenessSessionDefaultResponse,
): response is CreateLivenessSessionDefaultResponse;
export function isUnexpected(
  response:
    | ListLivenessSessions200Response
    | ListLivenessSessionsDefaultResponse,
): response is ListLivenessSessionsDefaultResponse;
export function isUnexpected(
  response: GetLivenessSession200Response | GetLivenessSessionDefaultResponse,
): response is GetLivenessSessionDefaultResponse;
export function isUnexpected(
  response:
    | DeleteLivenessSession200Response
    | DeleteLivenessSessionDefaultResponse,
): response is DeleteLivenessSessionDefaultResponse;
export function isUnexpected(
  response:
    | ListLivenessSessionAuditEntries200Response
    | ListLivenessSessionAuditEntriesDefaultResponse,
): response is ListLivenessSessionAuditEntriesDefaultResponse;
export function isUnexpected(
  response:
    | CreateLivenessWithVerifySessionByJson200Response
    | CreateLivenessWithVerifySessionByFormData200Response
    | CreateLivenessWithVerifySessionByJsonDefaultResponse,
): response is CreateLivenessWithVerifySessionByJsonDefaultResponse;
export function isUnexpected(
  response:
    | ListLivenessWithVerifySessions200Response
    | ListLivenessWithVerifySessionsDefaultResponse,
): response is ListLivenessWithVerifySessionsDefaultResponse;
export function isUnexpected(
  response:
    | GetLivenessWithVerifySession200Response
    | GetLivenessWithVerifySessionDefaultResponse,
): response is GetLivenessWithVerifySessionDefaultResponse;
export function isUnexpected(
  response:
    | DeleteLivenessWithVerifySession200Response
    | DeleteLivenessWithVerifySessionDefaultResponse,
): response is DeleteLivenessWithVerifySessionDefaultResponse;
export function isUnexpected(
  response:
    | ListLivenessWithVerifySessionAuditEntries200Response
    | ListLivenessWithVerifySessionAuditEntriesDefaultResponse,
): response is ListLivenessWithVerifySessionAuditEntriesDefaultResponse;
export function isUnexpected(
  response:
    | CreateLivenessSession200Response
    | CreateLivenessSessionDefaultResponse
    | ListLivenessSessions200Response
    | ListLivenessSessionsDefaultResponse
    | GetLivenessSession200Response
    | GetLivenessSessionDefaultResponse
    | DeleteLivenessSession200Response
    | DeleteLivenessSessionDefaultResponse
    | ListLivenessSessionAuditEntries200Response
    | ListLivenessSessionAuditEntriesDefaultResponse
    | CreateLivenessWithVerifySessionByJson200Response
    | CreateLivenessWithVerifySessionByFormData200Response
    | CreateLivenessWithVerifySessionByJsonDefaultResponse
    | ListLivenessWithVerifySessions200Response
    | ListLivenessWithVerifySessionsDefaultResponse
    | GetLivenessWithVerifySession200Response
    | GetLivenessWithVerifySessionDefaultResponse
    | DeleteLivenessWithVerifySession200Response
    | DeleteLivenessWithVerifySessionDefaultResponse
    | ListLivenessWithVerifySessionAuditEntries200Response
    | ListLivenessWithVerifySessionAuditEntriesDefaultResponse,
): response is
  | CreateLivenessSessionDefaultResponse
  | ListLivenessSessionsDefaultResponse
  | GetLivenessSessionDefaultResponse
  | DeleteLivenessSessionDefaultResponse
  | ListLivenessSessionAuditEntriesDefaultResponse
  | CreateLivenessWithVerifySessionByJsonDefaultResponse
  | ListLivenessWithVerifySessionsDefaultResponse
  | GetLivenessWithVerifySessionDefaultResponse
  | DeleteLivenessWithVerifySessionDefaultResponse
  | ListLivenessWithVerifySessionAuditEntriesDefaultResponse {
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
