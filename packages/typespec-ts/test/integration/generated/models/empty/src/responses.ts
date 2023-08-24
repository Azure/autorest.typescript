// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { EmptyOutputOutput, EmptyInputOutputOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface PutEmpty204Response extends HttpResponse {
  status: "204";
}

export interface PutEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetEmpty200Response extends HttpResponse {
  status: "200";
  body: EmptyOutputOutput;
}

export interface GetEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PostRoundTripEmpty200Response extends HttpResponse {
  status: "200";
  body: EmptyInputOutputOutput;
}

export interface PostRoundTripEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
