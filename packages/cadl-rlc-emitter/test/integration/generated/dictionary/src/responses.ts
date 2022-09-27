import { HttpResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32ValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Int32ValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int64ValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Int64ValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface StringValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Float32ValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Float32ValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatetimeValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DatetimeValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DurationValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface DurationValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnknownValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ModelValuePut200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RecursiveModelValueGet204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface RecursiveModelValuePut200Response extends HttpResponse {
  status: "200";
}
