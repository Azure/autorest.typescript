// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get file */
export interface GetFile200Response extends HttpResponse {
  status: "200";
  body: Uint8Array;
}

/** Get file as Stream */
export interface GetFile200NodeStreamResponse extends HttpResponse {
  status: "200";
  body: NodeJS.ReadableStream;
}

/** Get file */
export interface GetFiledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a large file */
export interface GetFileLarge200Response extends HttpResponse {
  status: "200";
  body: Uint8Array;
}

/** Get a large file as Stream */
export interface GetFileLarge200NodeStreamResponse extends HttpResponse {
  status: "200";
  body: NodeJS.ReadableStream;
}

/** Get a large file */
export interface GetFileLargedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get empty file */
export interface GetEmptyFile200Response extends HttpResponse {
  status: "200";
  body: Uint8Array;
}

/** Get empty file */
export interface GetEmptyFile200NodeStreamResponse extends HttpResponse {
  status: "200";
  body: NodeJS.ReadableStream;
}

/** Get empty file */
export interface GetEmptyFiledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}
