// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { InnerModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, boolean>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}
