// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListCollections200Response,
  ListCollectionsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /app/collections": ["200"],
};

export function isUnexpected(
  response: ListCollections200Response | ListCollectionsDefaultResponse
): response is ListCollectionsDefaultResponse;
export function isUnexpected(
  response: ListCollections200Response | ListCollectionsDefaultResponse
): response is ListCollectionsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
