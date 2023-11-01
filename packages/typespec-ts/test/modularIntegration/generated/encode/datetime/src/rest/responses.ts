// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  DefaultDatetimePropertyOutput,
  Rfc3339DatetimePropertyOutput,
  Rfc7231DatetimePropertyOutput,
  UnixTimestampDatetimePropertyOutput,
  UnixTimestampArrayDatetimePropertyOutput,
} from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc3339204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc7231204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnixTimestamp204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Default200Response extends HttpResponse {
  status: "200";
  body: DefaultDatetimePropertyOutput;
}

/** The request has succeeded. */
export interface Rfc3339200Response extends HttpResponse {
  status: "200";
  body: Rfc3339DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface Rfc7231200Response extends HttpResponse {
  status: "200";
  body: Rfc7231DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface UnixTimestamp200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampDatetimePropertyOutput;
}

/** The request has succeeded. */
export interface UnixTimestampArray200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampArrayDatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc3339204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc7231204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnixTimestamp204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

export interface Default204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & Default204Headers;
}

export interface Rfc3339204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc3339204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & Rfc3339204Headers;
}

export interface Rfc7231204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Rfc7231204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & Rfc7231204Headers;
}

export interface UnixTimestamp204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnixTimestamp204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & UnixTimestamp204Headers;
}
