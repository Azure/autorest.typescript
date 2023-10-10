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
} from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryRfc3339204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryRfc7231204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryUnixTimestamp204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryUnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PropertyDefault200Response extends HttpResponse {
  status: "200";
  body: DefaultDatetimePropertyOutput;
}

/** The request has succeeded. */
export interface PropertyRfc3339200Response extends HttpResponse {
  status: "200";
  body: Rfc3339DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface PropertyRfc7231200Response extends HttpResponse {
  status: "200";
  body: Rfc7231DatetimePropertyOutput;
}

/** The request has succeeded. */
export interface PropertyUnixTimestamp200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampDatetimePropertyOutput;
}

/** The request has succeeded. */
export interface PropertyUnixTimestampArray200Response extends HttpResponse {
  status: "200";
  body: UnixTimestampArrayDatetimePropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderRfc3339204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderRfc7231204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderUnixTimestamp204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderUnixTimestampArray204Response extends HttpResponse {
  status: "204";
}

export interface ResponseHeaderDefault204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ResponseHeaderDefault204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ResponseHeaderDefault204Headers;
}

export interface ResponseHeaderRfc3339204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ResponseHeaderRfc3339204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ResponseHeaderRfc3339204Headers;
}

export interface ResponseHeaderRfc7231204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ResponseHeaderRfc7231204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ResponseHeaderRfc7231204Headers;
}

export interface ResponseHeaderUnixTimestamp204Headers {
  value: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ResponseHeaderUnixTimestamp204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ResponseHeaderUnixTimestamp204Headers;
}
