// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HeaderParamExistingKeyParameters,
  HeaderResponseExistingKeyParameters,
  HeaderParamProtectedKeyParameters,
  HeaderResponseProtectedKeyParameters,
  HeaderParamIntegerParameters,
  HeaderResponseIntegerParameters,
  HeaderParamLongParameters,
  HeaderResponseLongParameters,
  HeaderParamFloatParameters,
  HeaderResponseFloatParameters,
  HeaderParamDoubleParameters,
  HeaderResponseDoubleParameters,
  HeaderParamBoolParameters,
  HeaderResponseBoolParameters,
  HeaderParamStringParameters,
  HeaderResponseStringParameters,
  HeaderParamDateParameters,
  HeaderResponseDateParameters,
  HeaderParamDatetimeParameters,
  HeaderResponseDatetimeParameters,
  HeaderParamDatetimeRfc1123Parameters,
  HeaderResponseDatetimeRfc1123Parameters,
  HeaderParamDurationParameters,
  HeaderResponseDurationParameters,
  HeaderParamByteParameters,
  HeaderResponseByteParameters,
  HeaderParamEnumParameters,
  HeaderResponseEnumParameters,
  HeaderCustomRequestIdParameters,
} from "./parameters";
import {
  HeaderParamExistingKey200Response,
  HeaderParamExistingKeyDefaultResponse,
  HeaderResponseExistingKey200Response,
  HeaderResponseExistingKeyDefaultResponse,
  HeaderParamProtectedKey200Response,
  HeaderParamProtectedKeyDefaultResponse,
  HeaderResponseProtectedKey200Response,
  HeaderResponseProtectedKeyDefaultResponse,
  HeaderParamInteger200Response,
  HeaderParamIntegerDefaultResponse,
  HeaderResponseInteger200Response,
  HeaderResponseIntegerDefaultResponse,
  HeaderParamLong200Response,
  HeaderParamLongDefaultResponse,
  HeaderResponseLong200Response,
  HeaderResponseLongDefaultResponse,
  HeaderParamFloat200Response,
  HeaderParamFloatDefaultResponse,
  HeaderResponseFloat200Response,
  HeaderResponseFloatDefaultResponse,
  HeaderParamDouble200Response,
  HeaderParamDoubleDefaultResponse,
  HeaderResponseDouble200Response,
  HeaderResponseDoubleDefaultResponse,
  HeaderParamBool200Response,
  HeaderParamBoolDefaultResponse,
  HeaderResponseBool200Response,
  HeaderResponseBoolDefaultResponse,
  HeaderParamString200Response,
  HeaderParamStringDefaultResponse,
  HeaderResponseString200Response,
  HeaderResponseStringDefaultResponse,
  HeaderParamDate200Response,
  HeaderParamDateDefaultResponse,
  HeaderResponseDate200Response,
  HeaderResponseDateDefaultResponse,
  HeaderParamDatetime200Response,
  HeaderParamDatetimeDefaultResponse,
  HeaderResponseDatetime200Response,
  HeaderResponseDatetimeDefaultResponse,
  HeaderParamDatetimeRfc1123200Response,
  HeaderParamDatetimeRfc1123DefaultResponse,
  HeaderResponseDatetimeRfc1123200Response,
  HeaderResponseDatetimeRfc1123DefaultResponse,
  HeaderParamDuration200Response,
  HeaderParamDurationDefaultResponse,
  HeaderResponseDuration200Response,
  HeaderResponseDurationDefaultResponse,
  HeaderParamByte200Response,
  HeaderParamByteDefaultResponse,
  HeaderResponseByte200Response,
  HeaderResponseByteDefaultResponse,
  HeaderParamEnum200Response,
  HeaderParamEnumDefaultResponse,
  HeaderResponseEnum200Response,
  HeaderResponseEnumDefaultResponse,
  HeaderCustomRequestId200Response,
  HeaderCustomRequestIdDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ParamExistingKey {
  /** Send a post request with header value "User-Agent": "overwrite" */
  post(
    options?: HeaderParamExistingKeyParameters,
  ): StreamableMethod<
    HeaderParamExistingKey200Response | HeaderParamExistingKeyDefaultResponse
  >;
}

export interface ResponseExistingKey {
  /** Get a response with header value "User-Agent": "overwrite" */
  post(
    options?: HeaderResponseExistingKeyParameters,
  ): StreamableMethod<
    | HeaderResponseExistingKey200Response
    | HeaderResponseExistingKeyDefaultResponse
  >;
}

export interface ParamProtectedKey {
  /** Send a post request with header value "Content-Type": "text/html" */
  post(
    options?: HeaderParamProtectedKeyParameters,
  ): StreamableMethod<
    HeaderParamProtectedKey200Response | HeaderParamProtectedKeyDefaultResponse
  >;
}

export interface ResponseProtectedKey {
  /** Get a response with header value "Content-Type": "text/html" */
  post(
    options?: HeaderResponseProtectedKeyParameters,
  ): StreamableMethod<
    | HeaderResponseProtectedKey200Response
    | HeaderResponseProtectedKeyDefaultResponse
  >;
}

export interface ParamInteger {
  /** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
  post(
    options?: HeaderParamIntegerParameters,
  ): StreamableMethod<
    HeaderParamInteger200Response | HeaderParamIntegerDefaultResponse
  >;
}

export interface ResponseInteger {
  /** Get a response with header value "value": 1 or -2 */
  post(
    options?: HeaderResponseIntegerParameters,
  ): StreamableMethod<
    HeaderResponseInteger200Response | HeaderResponseIntegerDefaultResponse
  >;
}

export interface ParamLong {
  /** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
  post(
    options?: HeaderParamLongParameters,
  ): StreamableMethod<
    HeaderParamLong200Response | HeaderParamLongDefaultResponse
  >;
}

export interface ResponseLong {
  /** Get a response with header value "value": 105 or -2 */
  post(
    options?: HeaderResponseLongParameters,
  ): StreamableMethod<
    HeaderResponseLong200Response | HeaderResponseLongDefaultResponse
  >;
}

export interface ParamFloat {
  /** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
  post(
    options?: HeaderParamFloatParameters,
  ): StreamableMethod<
    HeaderParamFloat200Response | HeaderParamFloatDefaultResponse
  >;
}

export interface ResponseFloat {
  /** Get a response with header value "value": 0.07 or -3.0 */
  post(
    options?: HeaderResponseFloatParameters,
  ): StreamableMethod<
    HeaderResponseFloat200Response | HeaderResponseFloatDefaultResponse
  >;
}

export interface ParamDouble {
  /** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
  post(
    options?: HeaderParamDoubleParameters,
  ): StreamableMethod<
    HeaderParamDouble200Response | HeaderParamDoubleDefaultResponse
  >;
}

export interface ResponseDouble {
  /** Get a response with header value "value": 7e120 or -3.0 */
  post(
    options?: HeaderResponseDoubleParameters,
  ): StreamableMethod<
    HeaderResponseDouble200Response | HeaderResponseDoubleDefaultResponse
  >;
}

export interface ParamBool {
  /** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
  post(
    options?: HeaderParamBoolParameters,
  ): StreamableMethod<
    HeaderParamBool200Response | HeaderParamBoolDefaultResponse
  >;
}

export interface ResponseBool {
  /** Get a response with header value "value": true or false */
  post(
    options?: HeaderResponseBoolParameters,
  ): StreamableMethod<
    HeaderResponseBool200Response | HeaderResponseBoolDefaultResponse
  >;
}

export interface ParamString {
  /** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
  post(
    options?: HeaderParamStringParameters,
  ): StreamableMethod<
    HeaderParamString200Response | HeaderParamStringDefaultResponse
  >;
}

export interface ResponseString {
  /** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  post(
    options?: HeaderResponseStringParameters,
  ): StreamableMethod<
    HeaderResponseString200Response | HeaderResponseStringDefaultResponse
  >;
}

export interface ParamDate {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
  post(
    options?: HeaderParamDateParameters,
  ): StreamableMethod<
    HeaderParamDate200Response | HeaderParamDateDefaultResponse
  >;
}

export interface ResponseDate {
  /** Get a response with header values "2010-01-01" or "0001-01-01" */
  post(
    options?: HeaderResponseDateParameters,
  ): StreamableMethod<
    HeaderResponseDate200Response | HeaderResponseDateDefaultResponse
  >;
}

export interface ParamDatetime {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
  post(
    options?: HeaderParamDatetimeParameters,
  ): StreamableMethod<
    HeaderParamDatetime200Response | HeaderParamDatetimeDefaultResponse
  >;
}

export interface ResponseDatetime {
  /** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  post(
    options?: HeaderResponseDatetimeParameters,
  ): StreamableMethod<
    HeaderResponseDatetime200Response | HeaderResponseDatetimeDefaultResponse
  >;
}

export interface ParamDatetimeRfc1123 {
  /** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: HeaderParamDatetimeRfc1123Parameters,
  ): StreamableMethod<
    | HeaderParamDatetimeRfc1123200Response
    | HeaderParamDatetimeRfc1123DefaultResponse
  >;
}

export interface ResponseDatetimeRfc1123 {
  /** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: HeaderResponseDatetimeRfc1123Parameters,
  ): StreamableMethod<
    | HeaderResponseDatetimeRfc1123200Response
    | HeaderResponseDatetimeRfc1123DefaultResponse
  >;
}

export interface ParamDuration {
  /** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
  post(
    options?: HeaderParamDurationParameters,
  ): StreamableMethod<
    HeaderParamDuration200Response | HeaderParamDurationDefaultResponse
  >;
}

export interface ResponseDuration {
  /** Get a response with header values "P123DT22H14M12.011S" */
  post(
    options?: HeaderResponseDurationParameters,
  ): StreamableMethod<
    HeaderResponseDuration200Response | HeaderResponseDurationDefaultResponse
  >;
}

export interface ParamByte {
  /** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: HeaderParamByteParameters,
  ): StreamableMethod<
    HeaderParamByte200Response | HeaderParamByteDefaultResponse
  >;
}

export interface ResponseByte {
  /** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: HeaderResponseByteParameters,
  ): StreamableMethod<
    HeaderResponseByte200Response | HeaderResponseByteDefaultResponse
  >;
}

export interface ParamEnum {
  /** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
  post(
    options?: HeaderParamEnumParameters,
  ): StreamableMethod<
    HeaderParamEnum200Response | HeaderParamEnumDefaultResponse
  >;
}

export interface ResponseEnum {
  /** Get a response with header values "GREY" or null */
  post(
    options?: HeaderResponseEnumParameters,
  ): StreamableMethod<
    HeaderResponseEnum200Response | HeaderResponseEnumDefaultResponse
  >;
}

export interface CustomRequestId {
  /** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
  post(
    options?: HeaderCustomRequestIdParameters,
  ): StreamableMethod<
    HeaderCustomRequestId200Response | HeaderCustomRequestIdDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/header/param/existingkey' has methods for the following verbs: post */
  (path: "/header/param/existingkey"): ParamExistingKey;
  /** Resource for '/header/response/existingkey' has methods for the following verbs: post */
  (path: "/header/response/existingkey"): ResponseExistingKey;
  /** Resource for '/header/param/protectedkey' has methods for the following verbs: post */
  (path: "/header/param/protectedkey"): ParamProtectedKey;
  /** Resource for '/header/response/protectedkey' has methods for the following verbs: post */
  (path: "/header/response/protectedkey"): ResponseProtectedKey;
  /** Resource for '/header/param/prim/integer' has methods for the following verbs: post */
  (path: "/header/param/prim/integer"): ParamInteger;
  /** Resource for '/header/response/prim/integer' has methods for the following verbs: post */
  (path: "/header/response/prim/integer"): ResponseInteger;
  /** Resource for '/header/param/prim/long' has methods for the following verbs: post */
  (path: "/header/param/prim/long"): ParamLong;
  /** Resource for '/header/response/prim/long' has methods for the following verbs: post */
  (path: "/header/response/prim/long"): ResponseLong;
  /** Resource for '/header/param/prim/float' has methods for the following verbs: post */
  (path: "/header/param/prim/float"): ParamFloat;
  /** Resource for '/header/response/prim/float' has methods for the following verbs: post */
  (path: "/header/response/prim/float"): ResponseFloat;
  /** Resource for '/header/param/prim/double' has methods for the following verbs: post */
  (path: "/header/param/prim/double"): ParamDouble;
  /** Resource for '/header/response/prim/double' has methods for the following verbs: post */
  (path: "/header/response/prim/double"): ResponseDouble;
  /** Resource for '/header/param/prim/bool' has methods for the following verbs: post */
  (path: "/header/param/prim/bool"): ParamBool;
  /** Resource for '/header/response/prim/bool' has methods for the following verbs: post */
  (path: "/header/response/prim/bool"): ResponseBool;
  /** Resource for '/header/param/prim/string' has methods for the following verbs: post */
  (path: "/header/param/prim/string"): ParamString;
  /** Resource for '/header/response/prim/string' has methods for the following verbs: post */
  (path: "/header/response/prim/string"): ResponseString;
  /** Resource for '/header/param/prim/date' has methods for the following verbs: post */
  (path: "/header/param/prim/date"): ParamDate;
  /** Resource for '/header/response/prim/date' has methods for the following verbs: post */
  (path: "/header/response/prim/date"): ResponseDate;
  /** Resource for '/header/param/prim/datetime' has methods for the following verbs: post */
  (path: "/header/param/prim/datetime"): ParamDatetime;
  /** Resource for '/header/response/prim/datetime' has methods for the following verbs: post */
  (path: "/header/response/prim/datetime"): ResponseDatetime;
  /** Resource for '/header/param/prim/datetimerfc1123' has methods for the following verbs: post */
  (path: "/header/param/prim/datetimerfc1123"): ParamDatetimeRfc1123;
  /** Resource for '/header/response/prim/datetimerfc1123' has methods for the following verbs: post */
  (path: "/header/response/prim/datetimerfc1123"): ResponseDatetimeRfc1123;
  /** Resource for '/header/param/prim/duration' has methods for the following verbs: post */
  (path: "/header/param/prim/duration"): ParamDuration;
  /** Resource for '/header/response/prim/duration' has methods for the following verbs: post */
  (path: "/header/response/prim/duration"): ResponseDuration;
  /** Resource for '/header/param/prim/byte' has methods for the following verbs: post */
  (path: "/header/param/prim/byte"): ParamByte;
  /** Resource for '/header/response/prim/byte' has methods for the following verbs: post */
  (path: "/header/response/prim/byte"): ResponseByte;
  /** Resource for '/header/param/prim/enum' has methods for the following verbs: post */
  (path: "/header/param/prim/enum"): ParamEnum;
  /** Resource for '/header/response/prim/enum' has methods for the following verbs: post */
  (path: "/header/response/prim/enum"): ResponseEnum;
  /** Resource for '/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0' has methods for the following verbs: post */
  (
    path: "/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0",
  ): CustomRequestId;
}

export type HeaderRestClient = Client & {
  path: Routes;
};
