// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type { ErrorModelOutput } from "./outputModels";

/** Get file */
export interface FilesGetFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get file */
export interface FilesGetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a large file */
export interface FilesGetFileLarge200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get a large file */
export interface FilesGetFileLargeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty file */
export interface FilesGetEmptyFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get empty file */
export interface FilesGetEmptyFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
