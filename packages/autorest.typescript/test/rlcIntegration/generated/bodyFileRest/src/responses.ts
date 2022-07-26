// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get file */
export interface GetFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get file */
export interface GetFiledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a large file */
export interface GetFileLarge200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get a large file */
export interface GetFileLargedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty file */
export interface GetEmptyFile200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** Get empty file */
export interface GetEmptyFiledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
