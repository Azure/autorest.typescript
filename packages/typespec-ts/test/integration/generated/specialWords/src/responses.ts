// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { BaseModelOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface OperationFor204Response extends HttpResponse {
  status: "204";
}

export interface OperationForDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ParameterGetWithIf204Response extends HttpResponse {
  status: "204";
}

export interface ParameterGetWithIfDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ParameterGetWithFilter204Response extends HttpResponse {
  status: "204";
}

export interface ParameterGetWithFilterDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ModelGet200Response extends HttpResponse {
  status: "200";
  body: BaseModelOutput;
}

export interface ModelGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelPut204Response extends HttpResponse {
  status: "204";
}

export interface ModelPutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
