// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ParamExistingKeyParameters,
  ResponseExistingKeyParameters,
  ParamProtectedKeyParameters,
  ResponseProtectedKeyParameters,
  ParamIntegerParameters,
  ResponseIntegerParameters,
  ParamLongParameters,
  ResponseLongParameters,
  ParamFloatParameters,
  ResponseFloatParameters,
  ParamDoubleParameters,
  ResponseDoubleParameters,
  ParamBoolParameters,
  ResponseBoolParameters,
  ParamStringParameters,
  ResponseStringParameters,
  ParamDateParameters,
  ResponseDateParameters,
  ParamDatetimeParameters,
  ResponseDatetimeParameters,
  ParamDatetimeRfc1123Parameters,
  ResponseDatetimeRfc1123Parameters,
  ParamDurationParameters,
  ResponseDurationParameters,
  ParamByteParameters,
  ResponseByteParameters,
  ParamEnumParameters,
  ResponseEnumParameters,
  CustomRequestIdParameters
} from "./parameters";
import {
  ParamExistingKey200Response,
  ParamExistingKeydefaultResponse,
  ResponseExistingKey200Response,
  ResponseExistingKeydefaultResponse,
  ParamProtectedKey200Response,
  ParamProtectedKeydefaultResponse,
  ResponseProtectedKey200Response,
  ResponseProtectedKeydefaultResponse,
  ParamInteger200Response,
  ParamIntegerdefaultResponse,
  ResponseInteger200Response,
  ResponseIntegerdefaultResponse,
  ParamLong200Response,
  ParamLongdefaultResponse,
  ResponseLong200Response,
  ResponseLongdefaultResponse,
  ParamFloat200Response,
  ParamFloatdefaultResponse,
  ResponseFloat200Response,
  ResponseFloatdefaultResponse,
  ParamDouble200Response,
  ParamDoubledefaultResponse,
  ResponseDouble200Response,
  ResponseDoubledefaultResponse,
  ParamBool200Response,
  ParamBooldefaultResponse,
  ResponseBool200Response,
  ResponseBooldefaultResponse,
  ParamString200Response,
  ParamStringdefaultResponse,
  ResponseString200Response,
  ResponseStringdefaultResponse,
  ParamDate200Response,
  ParamDatedefaultResponse,
  ResponseDate200Response,
  ResponseDatedefaultResponse,
  ParamDatetime200Response,
  ParamDatetimedefaultResponse,
  ResponseDatetime200Response,
  ResponseDatetimedefaultResponse,
  ParamDatetimeRfc1123200Response,
  ParamDatetimeRfc1123defaultResponse,
  ResponseDatetimeRfc1123200Response,
  ResponseDatetimeRfc1123defaultResponse,
  ParamDuration200Response,
  ParamDurationdefaultResponse,
  ResponseDuration200Response,
  ResponseDurationdefaultResponse,
  ParamByte200Response,
  ParamBytedefaultResponse,
  ResponseByte200Response,
  ResponseBytedefaultResponse,
  ParamEnum200Response,
  ParamEnumdefaultResponse,
  ResponseEnum200Response,
  ResponseEnumdefaultResponse,
  CustomRequestId200Response,
  CustomRequestIddefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ParamExistingKey {
  /** Send a post request with header value "User-Agent": "overwrite" */
  post(
    options?: ParamExistingKeyParameters
  ): StreamableMethod<
    ParamExistingKey200Response | ParamExistingKeydefaultResponse
  >;
}

export interface ResponseExistingKey {
  /** Get a response with header value "User-Agent": "overwrite" */
  post(
    options?: ResponseExistingKeyParameters
  ): StreamableMethod<
    ResponseExistingKey200Response | ResponseExistingKeydefaultResponse
  >;
}

export interface ParamProtectedKey {
  /** Send a post request with header value "Content-Type": "text/html" */
  post(
    options?: ParamProtectedKeyParameters
  ): StreamableMethod<
    ParamProtectedKey200Response | ParamProtectedKeydefaultResponse
  >;
}

export interface ResponseProtectedKey {
  /** Get a response with header value "Content-Type": "text/html" */
  post(
    options?: ResponseProtectedKeyParameters
  ): StreamableMethod<
    ResponseProtectedKey200Response | ResponseProtectedKeydefaultResponse
  >;
}

export interface ParamInteger {
  /** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
  post(
    options?: ParamIntegerParameters
  ): StreamableMethod<ParamInteger200Response | ParamIntegerdefaultResponse>;
}

export interface ResponseInteger {
  /** Get a response with header value "value": 1 or -2 */
  post(
    options?: ResponseIntegerParameters
  ): StreamableMethod<
    ResponseInteger200Response | ResponseIntegerdefaultResponse
  >;
}

export interface ParamLong {
  /** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
  post(
    options?: ParamLongParameters
  ): StreamableMethod<ParamLong200Response | ParamLongdefaultResponse>;
}

export interface ResponseLong {
  /** Get a response with header value "value": 105 or -2 */
  post(
    options?: ResponseLongParameters
  ): StreamableMethod<ResponseLong200Response | ResponseLongdefaultResponse>;
}

export interface ParamFloat {
  /** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
  post(
    options?: ParamFloatParameters
  ): StreamableMethod<ParamFloat200Response | ParamFloatdefaultResponse>;
}

export interface ResponseFloat {
  /** Get a response with header value "value": 0.07 or -3.0 */
  post(
    options?: ResponseFloatParameters
  ): StreamableMethod<ResponseFloat200Response | ResponseFloatdefaultResponse>;
}

export interface ParamDouble {
  /** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
  post(
    options?: ParamDoubleParameters
  ): StreamableMethod<ParamDouble200Response | ParamDoubledefaultResponse>;
}

export interface ResponseDouble {
  /** Get a response with header value "value": 7e120 or -3.0 */
  post(
    options?: ResponseDoubleParameters
  ): StreamableMethod<
    ResponseDouble200Response | ResponseDoubledefaultResponse
  >;
}

export interface ParamBool {
  /** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
  post(
    options?: ParamBoolParameters
  ): StreamableMethod<ParamBool200Response | ParamBooldefaultResponse>;
}

export interface ResponseBool {
  /** Get a response with header value "value": true or false */
  post(
    options?: ResponseBoolParameters
  ): StreamableMethod<ResponseBool200Response | ResponseBooldefaultResponse>;
}

export interface ParamString {
  /** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
  post(
    options?: ParamStringParameters
  ): StreamableMethod<ParamString200Response | ParamStringdefaultResponse>;
}

export interface ResponseString {
  /** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  post(
    options?: ResponseStringParameters
  ): StreamableMethod<
    ResponseString200Response | ResponseStringdefaultResponse
  >;
}

export interface ParamDate {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
  post(
    options?: ParamDateParameters
  ): StreamableMethod<ParamDate200Response | ParamDatedefaultResponse>;
}

export interface ResponseDate {
  /** Get a response with header values "2010-01-01" or "0001-01-01" */
  post(
    options?: ResponseDateParameters
  ): StreamableMethod<ResponseDate200Response | ResponseDatedefaultResponse>;
}

export interface ParamDatetime {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
  post(
    options?: ParamDatetimeParameters
  ): StreamableMethod<ParamDatetime200Response | ParamDatetimedefaultResponse>;
}

export interface ResponseDatetime {
  /** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  post(
    options?: ResponseDatetimeParameters
  ): StreamableMethod<
    ResponseDatetime200Response | ResponseDatetimedefaultResponse
  >;
}

export interface ParamDatetimeRfc1123 {
  /** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: ParamDatetimeRfc1123Parameters
  ): StreamableMethod<
    ParamDatetimeRfc1123200Response | ParamDatetimeRfc1123defaultResponse
  >;
}

export interface ResponseDatetimeRfc1123 {
  /** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: ResponseDatetimeRfc1123Parameters
  ): StreamableMethod<
    ResponseDatetimeRfc1123200Response | ResponseDatetimeRfc1123defaultResponse
  >;
}

export interface ParamDuration {
  /** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
  post(
    options?: ParamDurationParameters
  ): StreamableMethod<ParamDuration200Response | ParamDurationdefaultResponse>;
}

export interface ResponseDuration {
  /** Get a response with header values "P123DT22H14M12.011S" */
  post(
    options?: ResponseDurationParameters
  ): StreamableMethod<
    ResponseDuration200Response | ResponseDurationdefaultResponse
  >;
}

export interface ParamByte {
  /** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: ParamByteParameters
  ): StreamableMethod<ParamByte200Response | ParamBytedefaultResponse>;
}

export interface ResponseByte {
  /** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: ResponseByteParameters
  ): StreamableMethod<ResponseByte200Response | ResponseBytedefaultResponse>;
}

export interface ParamEnum {
  /** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
  post(
    options?: ParamEnumParameters
  ): StreamableMethod<ParamEnum200Response | ParamEnumdefaultResponse>;
}

export interface ResponseEnum {
  /** Get a response with header values "GREY" or null */
  post(
    options?: ResponseEnumParameters
  ): StreamableMethod<ResponseEnum200Response | ResponseEnumdefaultResponse>;
}

export interface CustomRequestId {
  /** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
  post(
    options?: CustomRequestIdParameters
  ): StreamableMethod<
    CustomRequestId200Response | CustomRequestIddefaultResponse
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
    path: "/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
  ): CustomRequestId;
}

export type HeaderRestClient = Client & {
  path: Routes;
};
