// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PathsGetEmpty200Response,
  PathsGetEmptyDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = { "GET /customuri": ["200"] };

export function isUnexpected(
  response: PathsGetEmpty200Response | PathsGetEmptyDefaultResponse
): response is PathsGetEmptyDefaultResponse;
export function isUnexpected(
  response: PathsGetEmpty200Response | PathsGetEmptyDefaultResponse
): response is PathsGetEmptyDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
