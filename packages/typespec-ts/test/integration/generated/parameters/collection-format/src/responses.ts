// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryMulti204Response extends HttpResponse {
  status: "204";
}

export interface QueryMultiDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QuerySsv204Response extends HttpResponse {
  status: "204";
}

export interface QuerySsvDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryTsv204Response extends HttpResponse {
  status: "204";
}

export interface QueryTsvDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryPipes204Response extends HttpResponse {
  status: "204";
}

export interface QueryPipesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryCsv204Response extends HttpResponse {
  status: "204";
}

export interface QueryCsvDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderCsv204Response extends HttpResponse {
  status: "204";
}

export interface HeaderCsvDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
