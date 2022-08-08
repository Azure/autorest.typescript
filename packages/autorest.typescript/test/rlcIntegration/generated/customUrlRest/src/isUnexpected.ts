// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetEmpty200Response, GetEmptyDefaultResponse } from "./responses";

const responseMap: Record<string, string[]> = { "GET /customuri": ["200"] };

export function isUnexpected(
  response: GetEmpty200Response | GetEmptyDefaultResponse
): response is GetEmptyDefaultResponse;
export function isUnexpected(
  response: GetEmpty200Response | GetEmptyDefaultResponse
): response is GetEmptyDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
