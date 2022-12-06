// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { InnerModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface Int32ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Int64ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int64ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, boolean>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Float32ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Float32ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimeValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnknownValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, any>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ModelValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface RecursiveModelValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RecursiveModelValuePut204Response extends HttpResponse {
  status: "204";
}
