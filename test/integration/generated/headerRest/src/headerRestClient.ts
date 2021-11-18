// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  paramExistingKeyParameters,
  responseExistingKeyParameters,
  paramProtectedKeyParameters,
  responseProtectedKeyParameters,
  paramIntegerParameters,
  responseIntegerParameters,
  paramLongParameters,
  responseLongParameters,
  paramFloatParameters,
  responseFloatParameters,
  paramDoubleParameters,
  responseDoubleParameters,
  paramBoolParameters,
  responseBoolParameters,
  paramStringParameters,
  responseStringParameters,
  paramDateParameters,
  responseDateParameters,
  paramDatetimeParameters,
  responseDatetimeParameters,
  paramDatetimeRfc1123Parameters,
  responseDatetimeRfc1123Parameters,
  paramDurationParameters,
  responseDurationParameters,
  paramByteParameters,
  responseByteParameters,
  paramEnumParameters,
  responseEnumParameters,
  customRequestIdParameters
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
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface paramExistingKey {
  /** Send a post request with header value "User-Agent": "overwrite" */
  post(
    options?: paramExistingKeyParameters
  ): Promise<ParamExistingKey200Response | ParamExistingKeydefaultResponse>;
}

export interface responseExistingKey {
  /** Get a response with header value "User-Agent": "overwrite" */
  post(
    options?: responseExistingKeyParameters
  ): Promise<
    ResponseExistingKey200Response | ResponseExistingKeydefaultResponse
  >;
}

export interface paramProtectedKey {
  /** Send a post request with header value "Content-Type": "text/html" */
  post(
    options?: paramProtectedKeyParameters
  ): Promise<ParamProtectedKey200Response | ParamProtectedKeydefaultResponse>;
}

export interface responseProtectedKey {
  /** Get a response with header value "Content-Type": "text/html" */
  post(
    options?: responseProtectedKeyParameters
  ): Promise<
    ResponseProtectedKey200Response | ResponseProtectedKeydefaultResponse
  >;
}

export interface paramInteger {
  /** Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative", "value": -2 */
  post(
    options?: paramIntegerParameters
  ): Promise<ParamInteger200Response | ParamIntegerdefaultResponse>;
}

export interface responseInteger {
  /** Get a response with header value "value": 1 or -2 */
  post(
    options?: responseIntegerParameters
  ): Promise<ResponseInteger200Response | ResponseIntegerdefaultResponse>;
}

export interface paramLong {
  /** Send a post request with header values "scenario": "positive", "value": 105 or "scenario": "negative", "value": -2 */
  post(
    options?: paramLongParameters
  ): Promise<ParamLong200Response | ParamLongdefaultResponse>;
}

export interface responseLong {
  /** Get a response with header value "value": 105 or -2 */
  post(
    options?: responseLongParameters
  ): Promise<ResponseLong200Response | ResponseLongdefaultResponse>;
}

export interface paramFloat {
  /** Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario": "negative", "value": -3.0 */
  post(
    options?: paramFloatParameters
  ): Promise<ParamFloat200Response | ParamFloatdefaultResponse>;
}

export interface responseFloat {
  /** Get a response with header value "value": 0.07 or -3.0 */
  post(
    options?: responseFloatParameters
  ): Promise<ResponseFloat200Response | ResponseFloatdefaultResponse>;
}

export interface paramDouble {
  /** Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario": "negative", "value": -3.0 */
  post(
    options?: paramDoubleParameters
  ): Promise<ParamDouble200Response | ParamDoubledefaultResponse>;
}

export interface responseDouble {
  /** Get a response with header value "value": 7e120 or -3.0 */
  post(
    options?: responseDoubleParameters
  ): Promise<ResponseDouble200Response | ResponseDoubledefaultResponse>;
}

export interface paramBool {
  /** Send a post request with header values "scenario": "true", "value": true or "scenario": "false", "value": false */
  post(
    options?: paramBoolParameters
  ): Promise<ParamBool200Response | ParamBooldefaultResponse>;
}

export interface responseBool {
  /** Get a response with header value "value": true or false */
  post(
    options?: responseBoolParameters
  ): Promise<ResponseBool200Response | ResponseBooldefaultResponse>;
}

export interface paramString {
  /** Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": "" */
  post(
    options?: paramStringParameters
  ): Promise<ParamString200Response | ParamStringdefaultResponse>;
}

export interface responseString {
  /** Get a response with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  post(
    options?: responseStringParameters
  ): Promise<ResponseString200Response | ResponseStringdefaultResponse>;
}

export interface paramDate {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario": "min", "value": "0001-01-01" */
  post(
    options?: paramDateParameters
  ): Promise<ParamDate200Response | ParamDatedefaultResponse>;
}

export interface responseDate {
  /** Get a response with header values "2010-01-01" or "0001-01-01" */
  post(
    options?: responseDateParameters
  ): Promise<ResponseDate200Response | ResponseDatedefaultResponse>;
}

export interface paramDatetime {
  /** Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or "scenario": "min", "value": "0001-01-01T00:00:00Z" */
  post(
    options?: paramDatetimeParameters
  ): Promise<ParamDatetime200Response | ParamDatetimedefaultResponse>;
}

export interface responseDatetime {
  /** Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  post(
    options?: responseDatetimeParameters
  ): Promise<ResponseDatetime200Response | ResponseDatetimedefaultResponse>;
}

export interface paramDatetimeRfc1123 {
  /** Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: paramDatetimeRfc1123Parameters
  ): Promise<
    ParamDatetimeRfc1123200Response | ParamDatetimeRfc1123defaultResponse
  >;
}

export interface responseDatetimeRfc1123 {
  /** Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  post(
    options?: responseDatetimeRfc1123Parameters
  ): Promise<
    ResponseDatetimeRfc1123200Response | ResponseDatetimeRfc1123defaultResponse
  >;
}

export interface paramDuration {
  /** Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S" */
  post(
    options?: paramDurationParameters
  ): Promise<ParamDuration200Response | ParamDurationdefaultResponse>;
}

export interface responseDuration {
  /** Get a response with header values "P123DT22H14M12.011S" */
  post(
    options?: responseDurationParameters
  ): Promise<ResponseDuration200Response | ResponseDurationdefaultResponse>;
}

export interface paramByte {
  /** Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: paramByteParameters
  ): Promise<ParamByte200Response | ParamBytedefaultResponse>;
}

export interface responseByte {
  /** Get a response with header values "啊齄丂狛狜隣郎隣兀﨩" */
  post(
    options?: responseByteParameters
  ): Promise<ResponseByte200Response | ResponseBytedefaultResponse>;
}

export interface paramEnum {
  /** Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null", "value": null */
  post(
    options?: paramEnumParameters
  ): Promise<ParamEnum200Response | ParamEnumdefaultResponse>;
}

export interface responseEnum {
  /** Get a response with header values "GREY" or null */
  post(
    options?: responseEnumParameters
  ): Promise<ResponseEnum200Response | ResponseEnumdefaultResponse>;
}

export interface customRequestId {
  /** Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request */
  post(
    options?: customRequestIdParameters
  ): Promise<CustomRequestId200Response | CustomRequestIddefaultResponse>;
}

export interface Routes {
  /** Resource for '/header/param/existingkey' has methods for the following verbs: post */
  (path: "/header/param/existingkey"): paramExistingKey;
  /** Resource for '/header/response/existingkey' has methods for the following verbs: post */
  (path: "/header/response/existingkey"): responseExistingKey;
  /** Resource for '/header/param/protectedkey' has methods for the following verbs: post */
  (path: "/header/param/protectedkey"): paramProtectedKey;
  /** Resource for '/header/response/protectedkey' has methods for the following verbs: post */
  (path: "/header/response/protectedkey"): responseProtectedKey;
  /** Resource for '/header/param/prim/integer' has methods for the following verbs: post */
  (path: "/header/param/prim/integer"): paramInteger;
  /** Resource for '/header/response/prim/integer' has methods for the following verbs: post */
  (path: "/header/response/prim/integer"): responseInteger;
  /** Resource for '/header/param/prim/long' has methods for the following verbs: post */
  (path: "/header/param/prim/long"): paramLong;
  /** Resource for '/header/response/prim/long' has methods for the following verbs: post */
  (path: "/header/response/prim/long"): responseLong;
  /** Resource for '/header/param/prim/float' has methods for the following verbs: post */
  (path: "/header/param/prim/float"): paramFloat;
  /** Resource for '/header/response/prim/float' has methods for the following verbs: post */
  (path: "/header/response/prim/float"): responseFloat;
  /** Resource for '/header/param/prim/double' has methods for the following verbs: post */
  (path: "/header/param/prim/double"): paramDouble;
  /** Resource for '/header/response/prim/double' has methods for the following verbs: post */
  (path: "/header/response/prim/double"): responseDouble;
  /** Resource for '/header/param/prim/bool' has methods for the following verbs: post */
  (path: "/header/param/prim/bool"): paramBool;
  /** Resource for '/header/response/prim/bool' has methods for the following verbs: post */
  (path: "/header/response/prim/bool"): responseBool;
  /** Resource for '/header/param/prim/string' has methods for the following verbs: post */
  (path: "/header/param/prim/string"): paramString;
  /** Resource for '/header/response/prim/string' has methods for the following verbs: post */
  (path: "/header/response/prim/string"): responseString;
  /** Resource for '/header/param/prim/date' has methods for the following verbs: post */
  (path: "/header/param/prim/date"): paramDate;
  /** Resource for '/header/response/prim/date' has methods for the following verbs: post */
  (path: "/header/response/prim/date"): responseDate;
  /** Resource for '/header/param/prim/datetime' has methods for the following verbs: post */
  (path: "/header/param/prim/datetime"): paramDatetime;
  /** Resource for '/header/response/prim/datetime' has methods for the following verbs: post */
  (path: "/header/response/prim/datetime"): responseDatetime;
  /** Resource for '/header/param/prim/datetimerfc1123' has methods for the following verbs: post */
  (path: "/header/param/prim/datetimerfc1123"): paramDatetimeRfc1123;
  /** Resource for '/header/response/prim/datetimerfc1123' has methods for the following verbs: post */
  (path: "/header/response/prim/datetimerfc1123"): responseDatetimeRfc1123;
  /** Resource for '/header/param/prim/duration' has methods for the following verbs: post */
  (path: "/header/param/prim/duration"): paramDuration;
  /** Resource for '/header/response/prim/duration' has methods for the following verbs: post */
  (path: "/header/response/prim/duration"): responseDuration;
  /** Resource for '/header/param/prim/byte' has methods for the following verbs: post */
  (path: "/header/param/prim/byte"): paramByte;
  /** Resource for '/header/response/prim/byte' has methods for the following verbs: post */
  (path: "/header/response/prim/byte"): responseByte;
  /** Resource for '/header/param/prim/enum' has methods for the following verbs: post */
  (path: "/header/param/prim/enum"): paramEnum;
  /** Resource for '/header/response/prim/enum' has methods for the following verbs: post */
  (path: "/header/response/prim/enum"): responseEnum;
  /** Resource for '/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0' has methods for the following verbs: post */
  (
    path: "/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
  ): customRequestId;
}

export type HeaderRestClientRestClient = Client & {
  path: Routes;
};

export default function HeaderRestClient(
  options: ClientOptions = {}
): HeaderRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as HeaderRestClientRestClient;
}
