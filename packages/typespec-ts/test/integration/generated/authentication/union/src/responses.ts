// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface ValidKey204Response extends HttpResponse {
  status: "204";
}

export interface ValidKeyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ValidToken204Response extends HttpResponse {
  status: "204";
}

export interface ValidTokenDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
