// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { InnerModelOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Int32ValueGet200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Int64ValueGet200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int64ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanValueGet200Response extends HttpResponse {
  status: "200";
  body: boolean[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringValueGet200Response extends HttpResponse {
  status: "200";
  body: string[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Float32ValueGet200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Float32ValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeValueGet200Response extends HttpResponse {
  status: "200";
  body: string[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimeValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationValueGet200Response extends HttpResponse {
  status: "200";
  body: string[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnknownValueGet200Response extends HttpResponse {
  status: "200";
  body: any[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ModelValueGet200Response extends HttpResponse {
  status: "200";
  body: Array<InnerModelOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelValuePut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface NullableFloatValueGet200Response extends HttpResponse {
  status: "200";
  body: (number | null)[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface NullableFloatValuePut204Response extends HttpResponse {
  status: "204";
}
