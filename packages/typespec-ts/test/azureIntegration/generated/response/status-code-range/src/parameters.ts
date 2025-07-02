// Licensed under the MIT License.

import type { RequestParameters } from "@typespec/ts-http-runtime";

export interface ErrorResponseStatusCodeInRangeQueryParam {
  queryParameters?: Record<string, unknown>;
}

export type ErrorResponseStatusCodeInRangeParameters = ErrorResponseStatusCodeInRangeQueryParam & 
  RequestParameters;

export interface ErrorResponseStatusCode404QueryParam {
  queryParameters?: Record<string, unknown>;
}

export type ErrorResponseStatusCode404Parameters = ErrorResponseStatusCode404QueryParam & 
  RequestParameters;