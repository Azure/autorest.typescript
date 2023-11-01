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
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64url204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64urlArray204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Default200Response extends HttpResponse {
  status: "200";
  body: DefaultBytesPropertyOutput;
}

/** The request has succeeded. */
export interface Base64200Response extends HttpResponse {
  status: "200";
  body: Base64BytesPropertyOutput;
}

/** The request has succeeded. */
export interface Base64url200Response extends HttpResponse {
  status: "200";
  body: Base64urlBytesPropertyOutput;
}

/** The request has succeeded. */
export interface Base64urlArray200Response extends HttpResponse {
  status: "200";
  body: Base64urlArrayBytesPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64url204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64urlArray204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OctetStream204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CustomContentType204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Base64url204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Default200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface OctetStream200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface CustomContentType200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface Base64200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface Base64url200Response extends HttpResponse {
  status: "200";
  body: string;
}
