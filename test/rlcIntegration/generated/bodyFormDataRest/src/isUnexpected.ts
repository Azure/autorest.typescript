// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UploadFile200Response,
  UploadFiledefaultResponse,
  UploadFileViaBody200Response,
  UploadFileViaBodydefaultResponse,
  UploadFiles200Response,
  UploadFilesdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /formdata/stream/uploadfile": ["200"],
  "PUT /formdata/stream/uploadfile": ["200"],
  "POST /formdata/stream/uploadfiles": ["200"]
};

export function isUnexpected(
  response: UploadFile200Response | UploadFiledefaultResponse
): response is UploadFiledefaultResponse;
export function isUnexpected(
  response: UploadFileViaBody200Response | UploadFileViaBodydefaultResponse
): response is UploadFileViaBodydefaultResponse;
export function isUnexpected(
  response: UploadFiles200Response | UploadFilesdefaultResponse
): response is UploadFilesdefaultResponse;
export function isUnexpected(
  response:
    | UploadFile200Response
    | UploadFiledefaultResponse
    | UploadFileViaBody200Response
    | UploadFileViaBodydefaultResponse
    | UploadFiles200Response
    | UploadFilesdefaultResponse
): response is
  | UploadFiledefaultResponse
  | UploadFileViaBodydefaultResponse
  | UploadFilesdefaultResponse {
  const url = new URL(response.request.url);
  const method = response.request.method;
  return responseMap[`${method} ${url.pathname}`].includes(response.status);
}
