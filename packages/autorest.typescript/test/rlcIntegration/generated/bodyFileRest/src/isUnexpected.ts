// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetFile200Response,
  GetFileDefaultResponse,
  GetFileLarge200Response,
  GetFileLargeDefaultResponse,
  GetEmptyFile200Response,
  GetEmptyFileDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /files/stream/nonempty": ["200"],
  "GET /files/stream/verylarge": ["200"],
  "GET /files/stream/empty": ["200"]
};

export function isUnexpected(
  response: GetFile200Response | GetFileDefaultResponse
): response is GetFileDefaultResponse;
export function isUnexpected(
  response: GetFileLarge200Response | GetFileLargeDefaultResponse
): response is GetFileLargeDefaultResponse;
export function isUnexpected(
  response: GetEmptyFile200Response | GetEmptyFileDefaultResponse
): response is GetEmptyFileDefaultResponse;
export function isUnexpected(
  response:
    | GetFile200Response
    | GetFileDefaultResponse
    | GetFileLarge200Response
    | GetFileLargeDefaultResponse
    | GetEmptyFile200Response
    | GetEmptyFileDefaultResponse
): response is
  | GetFileDefaultResponse
  | GetFileLargeDefaultResponse
  | GetEmptyFileDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
