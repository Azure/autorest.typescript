// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse } from "@azure-rest/core-client";
import type { ErrorModelOutput } from "./outputModels.js";

/** Send a post request with header value "User-Agent": "overwrite" */
export interface HeaderParamExistingKey200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header value "User-Agent": "overwrite" */
export interface HeaderParamExistingKeyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseExistingKey200Headers {
  /** response with header value "User-Agent": "overwrite" */
  "user-agent"?: string;
}

/** Get a response with header value "User-Agent": "overwrite" */
export interface HeaderResponseExistingKey200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseExistingKey200Headers;
}

/** Get a response with header value "User-Agent": "overwrite" */
export interface HeaderResponseExistingKeyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header value "Content-Type": "text/html" */
export interface HeaderParamProtectedKey200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header value "Content-Type": "text/html" */
export interface HeaderParamProtectedKeyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseProtectedKey200Headers {
  /** response with header value "Content-Type": "text/html" */
  "content-type"?: string;
}

/** Get a response with header value "Content-Type": "text/html" */
export interface HeaderResponseProtectedKey200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseProtectedKey200Headers;
}

/** Get a response with header value "Content-Type": "text/html" */
export interface HeaderResponseProtectedKeyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
export interface HeaderParamInteger200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
export interface HeaderParamIntegerDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseInteger200Headers {
  /** response with header value "value": 1 or -2 */
  value?: number;
}

/** Get a response with header value "value": 1 or -2 */
export interface HeaderResponseInteger200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseInteger200Headers;
}

/** Get a response with header value "value": 1 or -2 */
export interface HeaderResponseIntegerDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
export interface HeaderParamLong200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
export interface HeaderParamLongDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseLong200Headers {
  /** response with header value "value": 105 or -2 */
  value?: number;
}

/** Get a response with header value "value": 105 or -2 */
export interface HeaderResponseLong200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseLong200Headers;
}

/** Get a response with header value "value": 105 or -2 */
export interface HeaderResponseLongDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
export interface HeaderParamFloat200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
export interface HeaderParamFloatDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseFloat200Headers {
  /** response with header value "value": 0.07 or -3.0 */
  value?: number;
}

/** Get a response with header value "value": 0.07 or -3.0 */
export interface HeaderResponseFloat200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseFloat200Headers;
}

/** Get a response with header value "value": 0.07 or -3.0 */
export interface HeaderResponseFloatDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
export interface HeaderParamDouble200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
export interface HeaderParamDoubleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseDouble200Headers {
  /** response with header value "value": 7e120 or -3.0 */
  value?: number;
}

/** Get a response with header value "value": 7e120 or -3.0 */
export interface HeaderResponseDouble200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseDouble200Headers;
}

/** Get a response with header value "value": 7e120 or -3.0 */
export interface HeaderResponseDoubleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
export interface HeaderParamBool200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
export interface HeaderParamBoolDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseBool200Headers {
  /** response with header value "value": true or false */
  value?: boolean;
}

/** Get a response with header value "value": true or false */
export interface HeaderResponseBool200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseBool200Headers;
}

/** Get a response with header value "value": true or false */
export interface HeaderResponseBoolDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
export interface HeaderParamString200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
export interface HeaderParamStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseString200Headers {
  /** response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  value?: string;
}

/** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
export interface HeaderResponseString200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseString200Headers;
}

/** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
export interface HeaderResponseStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
export interface HeaderParamDate200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
export interface HeaderParamDateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseDate200Headers {
  /** response with header values "2010-01-01" or "0001-01-01" */
  value?: string;
}

/** Get a response with header values "2010-01-01" or "0001-01-01" */
export interface HeaderResponseDate200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseDate200Headers;
}

/** Get a response with header values "2010-01-01" or "0001-01-01" */
export interface HeaderResponseDateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
export interface HeaderParamDatetime200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
export interface HeaderParamDatetimeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseDatetime200Headers {
  /** response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  value?: string;
}

/** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
export interface HeaderResponseDatetime200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseDatetime200Headers;
}

/** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
export interface HeaderResponseDatetimeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface HeaderParamDatetimeRfc1123200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface HeaderParamDatetimeRfc1123DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseDatetimeRfc1123200Headers {
  /** response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  value?: string;
}

/** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface HeaderResponseDatetimeRfc1123200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseDatetimeRfc1123200Headers;
}

/** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface HeaderResponseDatetimeRfc1123DefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
export interface HeaderParamDuration200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
export interface HeaderParamDurationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseDuration200Headers {
  /** response with header values "P123DT22H14M12.011S" */
  value?: string;
}

/** Get a response with header values "P123DT22H14M12.011S" */
export interface HeaderResponseDuration200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseDuration200Headers;
}

/** Get a response with header values "P123DT22H14M12.011S" */
export interface HeaderResponseDurationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
export interface HeaderParamByte200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
export interface HeaderParamByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseByte200Headers {
  /** response with header values "啊齄丂狛狜隣郎隣兀﨩" */
  value?: string;
}

/** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
export interface HeaderResponseByte200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseByte200Headers;
}

/** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
export interface HeaderResponseByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
export interface HeaderParamEnum200Response extends HttpResponse {
  status: "200";
}

/** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
export interface HeaderParamEnumDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface HeaderResponseEnum200Headers {
  /** response with header values "GREY" or null */
  value?: "White" | "black" | "GREY";
}

/** Get a response with header values "GREY" or null */
export interface HeaderResponseEnum200Response extends HttpResponse {
  status: "200";
  headers: RawHttpHeaders & HeaderResponseEnum200Headers;
}

/** Get a response with header values "GREY" or null */
export interface HeaderResponseEnumDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
export interface HeaderCustomRequestId200Response extends HttpResponse {
  status: "200";
}

/** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
export interface HeaderCustomRequestIdDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
