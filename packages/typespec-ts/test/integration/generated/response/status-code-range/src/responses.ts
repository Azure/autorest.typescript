// Licensed under the MIT License.

import type { RawHttpHeaders } from "@typespec/ts-http-runtime";
import type { HttpResponse } from "@typespec/ts-http-runtime";
import type { ErrorInRangeOutput, DefaultErrorOutput, NotFoundErrorOutput, Standard4XXErrorOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface ErrorResponseStatusCodeInRange204Response extends HttpResponse {
  status: "204";
}

export interface ErrorResponseStatusCodeInRangeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

/** An unexpected error response. */
export interface ErrorResponseStatusCodeInRangeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorInRangeOutput | DefaultErrorOutput;
  headers: RawHttpHeaders & ErrorResponseStatusCodeInRangeDefaultHeaders;
}

/** The request has succeeded. */
export interface ErrorResponseStatusCode404204Response extends HttpResponse {
  status: "204";
}

export interface ErrorResponseStatusCode404DefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

/** An unexpected error response. */
export interface ErrorResponseStatusCode404DefaultResponse extends HttpResponse {
  status: string;
  body: NotFoundErrorOutput | Standard4XXErrorOutput;
  headers: RawHttpHeaders & ErrorResponseStatusCode404DefaultHeaders;
}