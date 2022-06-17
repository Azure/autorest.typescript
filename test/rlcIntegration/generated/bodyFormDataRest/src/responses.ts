// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Upload file */
export interface UploadFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload file */
export interface UploadFiledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Upload file */
export interface UploadFileViaBody200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload file */
export interface UploadFileViaBodydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Upload multiple files */
export interface UploadFiles200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload multiple files */
export interface UploadFilesdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
