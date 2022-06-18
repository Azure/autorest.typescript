// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetEmpty200Response, GetEmptydefaultResponse } from "./responses";

const responseMap: Record<string, string[]> = { "GET /customuri": ["200"] };

export function isUnexpected(
  response: GetEmpty200Response | GetEmptydefaultResponse
): response is GetEmptydefaultResponse;
export function isUnexpected(
  response: GetEmpty200Response | GetEmptydefaultResponse
): response is GetEmptydefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
