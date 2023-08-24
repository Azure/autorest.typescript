// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { InnerModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface Int32ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

export interface Int32ValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32ValuePut204Response extends HttpResponse {
  status: "204";
}

export interface Int32ValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface Int64ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

export interface Int64ValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int64ValuePut204Response extends HttpResponse {
  status: "204";
}

export interface Int64ValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface BooleanValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, boolean>;
}

export interface BooleanValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanValuePut204Response extends HttpResponse {
  status: "204";
}

export interface BooleanValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface StringValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

export interface StringValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringValuePut204Response extends HttpResponse {
  status: "204";
}

export interface StringValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface Float32ValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number>;
}

export interface Float32ValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Float32ValuePut204Response extends HttpResponse {
  status: "204";
}

export interface Float32ValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DatetimeValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

export interface DatetimeValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimeValuePut204Response extends HttpResponse {
  status: "204";
}

export interface DatetimeValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DurationValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, string>;
}

export interface DurationValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationValuePut204Response extends HttpResponse {
  status: "204";
}

export interface DurationValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface UnknownValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, any>;
}

export interface UnknownValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownValuePut204Response extends HttpResponse {
  status: "204";
}

export interface UnknownValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ModelValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

export interface ModelValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelValuePut204Response extends HttpResponse {
  status: "204";
}

export interface ModelValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface RecursiveModelValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, InnerModelOutput>;
}

export interface RecursiveModelValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RecursiveModelValuePut204Response extends HttpResponse {
  status: "204";
}

export interface RecursiveModelValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface NullableFloatValueGet200Response extends HttpResponse {
  status: "200";
  body: Record<string, number | null>;
}

export interface NullableFloatValueGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface NullableFloatValuePut204Response extends HttpResponse {
  status: "204";
}

export interface NullableFloatValuePutDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
