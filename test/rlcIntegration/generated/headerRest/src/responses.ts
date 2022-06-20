// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Send a post request with header value "User-Agent": "overwrite" */
export interface ParamExistingKey200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header value "User-Agent": "overwrite" */
export interface ParamExistingKeydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseExistingKey200Headers {
  /** response with header value "User-Agent": "overwrite" */
  "user-agent"?: string;
}

/** Get a response with header value "User-Agent": "overwrite" */
export interface ResponseExistingKey200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseExistingKey200Headers;
}

/** Get a response with header value "User-Agent": "overwrite" */
export interface ResponseExistingKeydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header value "Content-Type": "text/html" */
export interface ParamProtectedKey200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header value "Content-Type": "text/html" */
export interface ParamProtectedKeydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseProtectedKey200Headers {
  /** response with header value "Content-Type": "text/html" */
  "content-type"?: string;
}

/** Get a response with header value "Content-Type": "text/html" */
export interface ResponseProtectedKey200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseProtectedKey200Headers;
}

/** Get a response with header value "Content-Type": "text/html" */
export interface ResponseProtectedKeydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
export interface ParamInteger200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
export interface ParamIntegerdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseInteger200Headers {
  /** response with header value "value": 1 or -2 */
  value?: number;
}

/** Get a response with header value "value": 1 or -2 */
export interface ResponseInteger200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseInteger200Headers;
}

/** Get a response with header value "value": 1 or -2 */
export interface ResponseIntegerdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
export interface ParamLong200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
export interface ParamLongdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseLong200Headers {
  /** response with header value "value": 105 or -2 */
  value?: number;
}

/** Get a response with header value "value": 105 or -2 */
export interface ResponseLong200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseLong200Headers;
}

/** Get a response with header value "value": 105 or -2 */
export interface ResponseLongdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
export interface ParamFloat200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
export interface ParamFloatdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseFloat200Headers {
  /** response with header value "value": 0.07 or -3.0 */
  value?: number;
}

/** Get a response with header value "value": 0.07 or -3.0 */
export interface ResponseFloat200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseFloat200Headers;
}

/** Get a response with header value "value": 0.07 or -3.0 */
export interface ResponseFloatdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
export interface ParamDouble200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
export interface ParamDoubledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseDouble200Headers {
  /** response with header value "value": 7e120 or -3.0 */
  value?: number;
}

/** Get a response with header value "value": 7e120 or -3.0 */
export interface ResponseDouble200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseDouble200Headers;
}

/** Get a response with header value "value": 7e120 or -3.0 */
export interface ResponseDoubledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
export interface ParamBool200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
export interface ParamBooldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseBool200Headers {
  /** response with header value "value": true or false */
  value?: boolean;
}

/** Get a response with header value "value": true or false */
export interface ResponseBool200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseBool200Headers;
}

/** Get a response with header value "value": true or false */
export interface ResponseBooldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
export interface ParamString200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
export interface ParamStringdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseString200Headers {
  /** response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  value?: string;
}

/** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
export interface ResponseString200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseString200Headers;
}

/** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
export interface ResponseStringdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
export interface ParamDate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
export interface ParamDatedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseDate200Headers {
  /** response with header values "2010-01-01" or "0001-01-01" */
  value?: string;
}

/** Get a response with header values "2010-01-01" or "0001-01-01" */
export interface ResponseDate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseDate200Headers;
}

/** Get a response with header values "2010-01-01" or "0001-01-01" */
export interface ResponseDatedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
export interface ParamDatetime200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
export interface ParamDatetimedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseDatetime200Headers {
  /** response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  value?: string;
}

/** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
export interface ResponseDatetime200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseDatetime200Headers;
}

/** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
export interface ResponseDatetimedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface ParamDatetimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface ParamDatetimeRfc1123defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseDatetimeRfc1123200Headers {
  /** response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  value?: string;
}

/** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface ResponseDatetimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseDatetimeRfc1123200Headers;
}

/** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
export interface ResponseDatetimeRfc1123defaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
export interface ParamDuration200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
export interface ParamDurationdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseDuration200Headers {
  /** response with header values "P123DT22H14M12.011S" */
  value?: string;
}

/** Get a response with header values "P123DT22H14M12.011S" */
export interface ResponseDuration200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseDuration200Headers;
}

/** Get a response with header values "P123DT22H14M12.011S" */
export interface ResponseDurationdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
export interface ParamByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
export interface ParamBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseByte200Headers {
  /** response with header values "啊齄丂狛狜隣郎隣兀﨩" */
  value?: string;
}

/** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
export interface ResponseByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseByte200Headers;
}

/** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
export interface ResponseBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
export interface ParamEnum200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
export interface ParamEnumdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface ResponseEnum200Headers {
  /** response with header values "GREY" or null */
  value?: "White" | "black" | "GREY";
}

/** Get a response with header values "GREY" or null */
export interface ResponseEnum200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & ResponseEnum200Headers;
}

/** Get a response with header values "GREY" or null */
export interface ResponseEnumdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
export interface CustomRequestId200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
export interface CustomRequestIddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
