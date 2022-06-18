// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetFile200Response,
  GetFiledefaultResponse,
  GetFileLarge200Response,
  GetFileLargedefaultResponse,
  GetEmptyFile200Response,
  GetEmptyFiledefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /files/stream/nonempty": ["200"],
  "GET /files/stream/verylarge": ["200"],
  "GET /files/stream/empty": ["200"]
};

export function isUnexpected(
  response: GetFile200Response | GetFiledefaultResponse
): response is GetFiledefaultResponse;
export function isUnexpected(
  response: GetFileLarge200Response | GetFileLargedefaultResponse
): response is GetFileLargedefaultResponse;
export function isUnexpected(
  response: GetEmptyFile200Response | GetEmptyFiledefaultResponse
): response is GetEmptyFiledefaultResponse;
export function isUnexpected(
  response:
    | GetFile200Response
    | GetFiledefaultResponse
    | GetFileLarge200Response
    | GetFileLargedefaultResponse
    | GetEmptyFile200Response
    | GetEmptyFiledefaultResponse
): response is
  | GetFiledefaultResponse
  | GetFileLargedefaultResponse
  | GetEmptyFiledefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
