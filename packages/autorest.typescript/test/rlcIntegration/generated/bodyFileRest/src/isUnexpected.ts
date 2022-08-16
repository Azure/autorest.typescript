// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FilesGetFile200Response,
  FilesGetFileDefaultResponse,
  FilesGetFileLarge200Response,
  FilesGetFileLargeDefaultResponse,
  FilesGetEmptyFile200Response,
  FilesGetEmptyFileDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /files/stream/nonempty": ["200"],
  "GET /files/stream/verylarge": ["200"],
  "GET /files/stream/empty": ["200"]
};

export function isUnexpected(
  response: FilesGetFile200Response | FilesGetFileDefaultResponse
): response is FilesGetFileDefaultResponse;
export function isUnexpected(
  response: FilesGetFileLarge200Response | FilesGetFileLargeDefaultResponse
): response is FilesGetFileLargeDefaultResponse;
export function isUnexpected(
  response: FilesGetEmptyFile200Response | FilesGetEmptyFileDefaultResponse
): response is FilesGetEmptyFileDefaultResponse;
export function isUnexpected(
  response:
    | FilesGetFile200Response
    | FilesGetFileDefaultResponse
    | FilesGetFileLarge200Response
    | FilesGetFileLargeDefaultResponse
    | FilesGetEmptyFile200Response
    | FilesGetEmptyFileDefaultResponse
): response is
  | FilesGetFileDefaultResponse
  | FilesGetFileLargeDefaultResponse
  | FilesGetEmptyFileDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
