// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface FromNone204Response extends HttpResponse {
  status: "204";
}

export interface FromNoneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FromOneRequired204Response extends HttpResponse {
  status: "204";
}

export interface FromOneRequiredDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FromOneOptional204Response extends HttpResponse {
  status: "204";
}

export interface FromOneOptionalDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
