// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UploadFile200Response,
  UploadFileDefaultResponse,
  UploadFileViaBody200Response,
  UploadFileViaBodyDefaultResponse,
  UploadFiles200Response,
  UploadFilesDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /formdata/stream/uploadfile": ["200"],
  "PUT /formdata/stream/uploadfile": ["200"],
  "POST /formdata/stream/uploadfiles": ["200"]
};

export function isUnexpected(
  response: UploadFile200Response | UploadFileDefaultResponse
): response is UploadFileDefaultResponse;
export function isUnexpected(
  response: UploadFileViaBody200Response | UploadFileViaBodyDefaultResponse
): response is UploadFileViaBodyDefaultResponse;
export function isUnexpected(
  response: UploadFiles200Response | UploadFilesDefaultResponse
): response is UploadFilesDefaultResponse;
export function isUnexpected(
  response:
    | UploadFile200Response
    | UploadFileDefaultResponse
    | UploadFileViaBody200Response
    | UploadFileViaBodyDefaultResponse
    | UploadFiles200Response
    | UploadFilesDefaultResponse
): response is
  | UploadFileDefaultResponse
  | UploadFileViaBodyDefaultResponse
  | UploadFilesDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
