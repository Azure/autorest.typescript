// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  DefaultBytesPropertyOutput,
  Base64BytesPropertyOutput,
  Base64urlBytesPropertyOutput,
  Base64urlArrayBytesPropertyOutput,
} from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryBase64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryBase64url204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryBase64urlArray204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PropertyDefault200Response extends HttpResponse {
  status: "200";
  body: DefaultBytesPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyBase64200Response extends HttpResponse {
  status: "200";
  body: Base64BytesPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyBase64url200Response extends HttpResponse {
  status: "200";
  body: Base64urlBytesPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyBase64urlArray200Response extends HttpResponse {
  status: "200";
  body: Base64urlArrayBytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderBase64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderBase64url204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderBase64urlArray204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequestBodyDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequestBodyOctetStream204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequestBodyCustomContentType204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequestBodyBase64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RequestBodyBase64url204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ResponseBodyDefault200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface ResponseBodyOctetStream200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface ResponseBodyCustomContentType200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface ResponseBodyBase64200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface ResponseBodyBase64url200Response extends HttpResponse {
  status: "200";
  body: string;
}
