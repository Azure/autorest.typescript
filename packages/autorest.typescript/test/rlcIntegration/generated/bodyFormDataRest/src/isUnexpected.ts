// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FormdataUploadFile200Response,
  FormdataUploadFileDefaultResponse,
  FormdataUploadFileViaBody200Response,
  FormdataUploadFileViaBodyDefaultResponse,
  FormdataUploadFiles200Response,
  FormdataUploadFilesDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /formdata/stream/uploadfile": ["200"],
  "PUT /formdata/stream/uploadfile": ["200"],
  "POST /formdata/stream/uploadfiles": ["200"]
};

export function isUnexpected(
  response: FormdataUploadFile200Response | FormdataUploadFileDefaultResponse
): response is FormdataUploadFileDefaultResponse;
export function isUnexpected(
  response:
    | FormdataUploadFileViaBody200Response
    | FormdataUploadFileViaBodyDefaultResponse
): response is FormdataUploadFileViaBodyDefaultResponse;
export function isUnexpected(
  response: FormdataUploadFiles200Response | FormdataUploadFilesDefaultResponse
): response is FormdataUploadFilesDefaultResponse;
export function isUnexpected(
  response:
    | FormdataUploadFile200Response
    | FormdataUploadFileDefaultResponse
    | FormdataUploadFileViaBody200Response
    | FormdataUploadFileViaBodyDefaultResponse
    | FormdataUploadFiles200Response
    | FormdataUploadFilesDefaultResponse
): response is
  | FormdataUploadFileDefaultResponse
  | FormdataUploadFileViaBodyDefaultResponse
  | FormdataUploadFilesDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
