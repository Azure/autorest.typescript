// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { InvalidAuthOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface Valid204Response extends HttpResponse {
  status: "204";
}

export interface ValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Invalid204Response extends HttpResponse {
  status: "204";
}

/** Access is forbidden */
export interface Invalid403Response extends HttpResponse {
  status: "403";
  body: InvalidAuthOutput;
}

export interface InvalidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
