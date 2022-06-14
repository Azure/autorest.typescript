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
  const url = new URL(response.request.url);
  const method = response.request.method;
  return responseMap[`${method} ${url.pathname}`].includes(response.status);
}
