// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface OptionalExplicitSetModel204Response extends HttpResponse {
  status: "204";
}

export interface OptionalExplicitSetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OptionalExplicitOmit204Response extends HttpResponse {
  status: "204";
}

export interface OptionalExplicitOmitDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredExplicit204Response extends HttpResponse {
  status: "204";
}

export interface RequiredExplicitDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequiredImplicit204Response extends HttpResponse {
  status: "204";
}

export interface RequiredImplicitDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
