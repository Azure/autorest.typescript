// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface GetThing200Response extends HttpResponse {
  status: "200";
  body: string | number;
}

export interface GetThingDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Upload204Response extends HttpResponse {
  status: "204";
}

export interface UploadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Process204Response extends HttpResponse {
  status: "204";
}

export interface ProcessDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
