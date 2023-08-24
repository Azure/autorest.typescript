// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyJson204Response extends HttpResponse {
  status: "204";
}

export interface PropertyJsonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyClient204Response extends HttpResponse {
  status: "204";
}

export interface PropertyClientDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyLanguage204Response extends HttpResponse {
  status: "204";
}

export interface PropertyLanguageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertyJsonAndClient204Response extends HttpResponse {
  status: "204";
}

export interface PropertyJsonAndClientDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Operation204Response extends HttpResponse {
  status: "204";
}

export interface OperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Parameter204Response extends HttpResponse {
  status: "204";
}

export interface ParameterDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
