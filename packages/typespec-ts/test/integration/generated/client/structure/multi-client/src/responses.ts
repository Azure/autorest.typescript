// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface One204Response extends HttpResponse {
  status: "204";
}

export interface OneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Two204Response extends HttpResponse {
  status: "204";
}

export interface TwoDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Three204Response extends HttpResponse {
  status: "204";
}

export interface ThreeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Four204Response extends HttpResponse {
  status: "204";
}

export interface FourDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Five204Response extends HttpResponse {
  status: "204";
}

export interface FiveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Six204Response extends HttpResponse {
  status: "204";
}

export interface SixDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
