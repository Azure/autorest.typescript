// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

export interface GetAvatarAsPng200Headers {
  accept: "image/png";
}

/** The request has succeeded. */
export interface GetAvatarAsPng200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & GetAvatarAsPng200Headers;
}

export interface GetAvatarAsPngDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAvatarAsPngDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAvatarAsPngDefaultHeaders;
}

export interface GetAvatarAsJpeg200Headers {
  accept: "image/jpeg";
}

/** The request has succeeded. */
export interface GetAvatarAsJpeg200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & GetAvatarAsJpeg200Headers;
}

export interface GetAvatarAsJpegDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAvatarAsJpegDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAvatarAsJpegDefaultHeaders;
}
