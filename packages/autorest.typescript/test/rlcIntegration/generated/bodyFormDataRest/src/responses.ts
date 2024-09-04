// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Upload file */
export interface FormdataUploadFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload file */
export interface FormdataUploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Upload file */
export interface FormdataUploadFileViaBody200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload file */
export interface FormdataUploadFileViaBodyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Upload multiple files */
export interface FormdataUploadFiles200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Upload multiple files */
export interface FormdataUploadFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
