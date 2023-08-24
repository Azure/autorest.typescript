// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { OutputRecordOutput, InputOutputRecordOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface Input204Response extends HttpResponse {
  status: "204";
}

export interface InputDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface Output200Response extends HttpResponse {
  status: "200";
  body: OutputRecordOutput;
}

export interface OutputDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface InputAndOutput200Response extends HttpResponse {
  status: "200";
  body: InputOutputRecordOutput;
}

export interface InputAndOutputDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
