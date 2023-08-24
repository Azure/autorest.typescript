// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  DefaultDatetimePropertyOutput,
  Rfc3339DatetimePropertyOutput,
  Rfc7231DatetimePropertyOutput,
  UnixTimestampDatetimePropertyOutput,
  UnixTimestampArrayDatetimePropertyOutput,
} from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryDefault204Response extends HttpResponse {
  status: "204";
}

export interface QueryDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryRfc3339204Response extends HttpResponse {
  status: "204";
}

export interface QueryRfc3339DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryRfc7231204Response extends HttpResponse {
  status: "204";
}

export interface QueryRfc7231DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryUnixTimestamp204Response extends HttpResponse {
  status: "204";
}

export interface QueryUnixTimestampDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryUnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

export interface QueryUnixTimestampArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyDefault200Response extends HttpResponse {
  status: "200";
  body: DefaultDatetimePropertyOutput;
}

export interface PropertyDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyRfc3339200Response extends HttpResponse {
  status: "200";
  body: Rfc3339DatetimePropertyOutput;
}

export interface PropertyRfc3339DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyRfc7231200Response extends HttpResponse {
  status: "200";
  body: Rfc7231DatetimePropertyOutput;
}

export interface PropertyRfc7231DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyUnixTimestamp200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampDatetimePropertyOutput;
}

export interface PropertyUnixTimestampDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyUnixTimestampArray200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampArrayDatetimePropertyOutput;
}

export interface PropertyUnixTimestampArrayDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderDefault204Response extends HttpResponse {
  status: "204";
}

export interface HeaderDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderRfc3339204Response extends HttpResponse {
  status: "204";
}

export interface HeaderRfc3339DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderRfc7231204Response extends HttpResponse {
  status: "204";
}

export interface HeaderRfc7231DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderUnixTimestamp204Response extends HttpResponse {
  status: "204";
}

export interface HeaderUnixTimestampDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderUnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

export interface HeaderUnixTimestampArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
