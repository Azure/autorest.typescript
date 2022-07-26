// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeBodyNoAcceptHeader202Response,
  AnalyzeBodyNoAcceptHeaderdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /mediatypes/analyze": ["200"],
  "POST /mediatypes/analyzeNoAccept": ["202"],
  "POST /mediatypes/contentTypeWithEncoding": ["200"],
  "POST /mediatypes/binaryBodyTwoContentTypes": ["200"],
  "POST /mediatypes/binaryBodyThreeContentTypes": ["200"],
  "POST /mediatypes/bodyThreeTypes": ["200"],
  "POST /mediatypes/textAndJson": ["200"]
};

export function isUnexpected(
  response:
    | AnalyzeBodyNoAcceptHeader202Response
    | AnalyzeBodyNoAcceptHeaderdefaultResponse
): response is AnalyzeBodyNoAcceptHeaderdefaultResponse;
export function isUnexpected(
  response:
    | AnalyzeBodyNoAcceptHeader202Response
    | AnalyzeBodyNoAcceptHeaderdefaultResponse
): response is AnalyzeBodyNoAcceptHeaderdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
