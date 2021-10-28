// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Upload file */
export interface UploadFile200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Upload file */
export interface UploadFiledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Upload file */
export interface UploadFileViaBody200Response extends HttpResponse {
  status: "200";
  body: Uint8Array;
}

/** Upload file */
export interface UploadFileViaBodydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Upload multiple files */
export interface UploadFiles200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Upload multiple files */
export interface UploadFilesdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}
