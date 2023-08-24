// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface SendInt200Response extends HttpResponse {
  status: "200";
}

export interface SendIntDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface SendIntArray200Response extends HttpResponse {
  status: "200";
}

export interface SendIntArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface SendFirstNamedUnionValue200Response extends HttpResponse {
  status: "200";
}

export interface SendFirstNamedUnionValueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface SendSecondNamedUnionValue200Response extends HttpResponse {
  status: "200";
}

export interface SendSecondNamedUnionValueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
