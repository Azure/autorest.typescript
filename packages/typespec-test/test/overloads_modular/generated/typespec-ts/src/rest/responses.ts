// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

export interface GetAvatarAsPng204Headers {
  accept: "image/png";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface GetAvatarAsPng204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & GetAvatarAsPng204Headers;
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

export interface GetAvatarAsJpeg204Headers {
  accept: "image/jpeg";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface GetAvatarAsJpeg204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & GetAvatarAsJpeg204Headers;
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
