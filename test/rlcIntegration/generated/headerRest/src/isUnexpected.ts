// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "POST /header/param/existingkey": ["200"],
  "POST /header/response/existingkey": ["200"],
  "POST /header/param/protectedkey": ["200"],
  "POST /header/response/protectedkey": ["200"],
  "POST /header/param/prim/integer": ["200"],
  "POST /header/response/prim/integer": ["200"],
  "POST /header/param/prim/long": ["200"],
  "POST /header/response/prim/long": ["200"],
  "POST /header/param/prim/float": ["200"],
  "POST /header/response/prim/float": ["200"],
  "POST /header/param/prim/double": ["200"],
  "POST /header/response/prim/double": ["200"],
  "POST /header/param/prim/bool": ["200"],
  "POST /header/response/prim/bool": ["200"],
  "POST /header/param/prim/string": ["200"],
  "POST /header/response/prim/string": ["200"],
  "POST /header/param/prim/date": ["200"],
  "POST /header/response/prim/date": ["200"],
  "POST /header/param/prim/datetime": ["200"],
  "POST /header/response/prim/datetime": ["200"],
  "POST /header/param/prim/datetimerfc1123": ["200"],
  "POST /header/response/prim/datetimerfc1123": ["200"],
  "POST /header/param/prim/duration": ["200"],
  "POST /header/response/prim/duration": ["200"],
  "POST /header/param/prim/byte": ["200"],
  "POST /header/response/prim/byte": ["200"],
  "POST /header/param/prim/enum": ["200"],
  "POST /header/response/prim/enum": ["200"],
  "POST /header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0": [
    "200"
  ]
};

export function isUnexpected(
  response: ParamExistingKey200Response | ParamExistingKeydefaultResponse
): response is ParamExistingKeydefaultResponse;
export function isUnexpected(
  response: ResponseExistingKey200Response | ResponseExistingKeydefaultResponse
): response is ResponseExistingKeydefaultResponse;
export function isUnexpected(
  response: ParamProtectedKey200Response | ParamProtectedKeydefaultResponse
): response is ParamProtectedKeydefaultResponse;
export function isUnexpected(
  response:
    | ResponseProtectedKey200Response
    | ResponseProtectedKeydefaultResponse
): response is ResponseProtectedKeydefaultResponse;
export function isUnexpected(
  response: ParamInteger200Response | ParamIntegerdefaultResponse
): response is ParamIntegerdefaultResponse;
export function isUnexpected(
  response: ResponseInteger200Response | ResponseIntegerdefaultResponse
): response is ResponseIntegerdefaultResponse;
export function isUnexpected(
  response: ParamLong200Response | ParamLongdefaultResponse
): response is ParamLongdefaultResponse;
export function isUnexpected(
  response: ResponseLong200Response | ResponseLongdefaultResponse
): response is ResponseLongdefaultResponse;
export function isUnexpected(
  response: ParamFloat200Response | ParamFloatdefaultResponse
): response is ParamFloatdefaultResponse;
export function isUnexpected(
  response: ResponseFloat200Response | ResponseFloatdefaultResponse
): response is ResponseFloatdefaultResponse;
export function isUnexpected(
  response: ParamDouble200Response | ParamDoubledefaultResponse
): response is ParamDoubledefaultResponse;
export function isUnexpected(
  response: ResponseDouble200Response | ResponseDoubledefaultResponse
): response is ResponseDoubledefaultResponse;
export function isUnexpected(
  response: ParamBool200Response | ParamBooldefaultResponse
): response is ParamBooldefaultResponse;
export function isUnexpected(
  response: ResponseBool200Response | ResponseBooldefaultResponse
): response is ResponseBooldefaultResponse;
export function isUnexpected(
  response: ParamString200Response | ParamStringdefaultResponse
): response is ParamStringdefaultResponse;
export function isUnexpected(
  response: ResponseString200Response | ResponseStringdefaultResponse
): response is ResponseStringdefaultResponse;
export function isUnexpected(
  response: ParamDate200Response | ParamDatedefaultResponse
): response is ParamDatedefaultResponse;
export function isUnexpected(
  response: ResponseDate200Response | ResponseDatedefaultResponse
): response is ResponseDatedefaultResponse;
export function isUnexpected(
  response: ParamDatetime200Response | ParamDatetimedefaultResponse
): response is ParamDatetimedefaultResponse;
export function isUnexpected(
  response: ResponseDatetime200Response | ResponseDatetimedefaultResponse
): response is ResponseDatetimedefaultResponse;
export function isUnexpected(
  response:
    | ParamDatetimeRfc1123200Response
    | ParamDatetimeRfc1123defaultResponse
): response is ParamDatetimeRfc1123defaultResponse;
export function isUnexpected(
  response:
    | ResponseDatetimeRfc1123200Response
    | ResponseDatetimeRfc1123defaultResponse
): response is ResponseDatetimeRfc1123defaultResponse;
export function isUnexpected(
  response: ParamDuration200Response | ParamDurationdefaultResponse
): response is ParamDurationdefaultResponse;
export function isUnexpected(
  response: ResponseDuration200Response | ResponseDurationdefaultResponse
): response is ResponseDurationdefaultResponse;
export function isUnexpected(
  response: ParamByte200Response | ParamBytedefaultResponse
): response is ParamBytedefaultResponse;
export function isUnexpected(
  response: ResponseByte200Response | ResponseBytedefaultResponse
): response is ResponseBytedefaultResponse;
export function isUnexpected(
  response: ParamEnum200Response | ParamEnumdefaultResponse
): response is ParamEnumdefaultResponse;
export function isUnexpected(
  response: ResponseEnum200Response | ResponseEnumdefaultResponse
): response is ResponseEnumdefaultResponse;
export function isUnexpected(
  response: CustomRequestId200Response | CustomRequestIddefaultResponse
): response is CustomRequestIddefaultResponse;
export function isUnexpected(
  response:
    | ParamExistingKey200Response
    | ParamExistingKeydefaultResponse
    | ResponseExistingKey200Response
    | ResponseExistingKeydefaultResponse
    | ParamProtectedKey200Response
    | ParamProtectedKeydefaultResponse
    | ResponseProtectedKey200Response
    | ResponseProtectedKeydefaultResponse
    | ParamInteger200Response
    | ParamIntegerdefaultResponse
    | ResponseInteger200Response
    | ResponseIntegerdefaultResponse
    | ParamLong200Response
    | ParamLongdefaultResponse
    | ResponseLong200Response
    | ResponseLongdefaultResponse
    | ParamFloat200Response
    | ParamFloatdefaultResponse
    | ResponseFloat200Response
    | ResponseFloatdefaultResponse
    | ParamDouble200Response
    | ParamDoubledefaultResponse
    | ResponseDouble200Response
    | ResponseDoubledefaultResponse
    | ParamBool200Response
    | ParamBooldefaultResponse
    | ResponseBool200Response
    | ResponseBooldefaultResponse
    | ParamString200Response
    | ParamStringdefaultResponse
    | ResponseString200Response
    | ResponseStringdefaultResponse
    | ParamDate200Response
    | ParamDatedefaultResponse
    | ResponseDate200Response
    | ResponseDatedefaultResponse
    | ParamDatetime200Response
    | ParamDatetimedefaultResponse
    | ResponseDatetime200Response
    | ResponseDatetimedefaultResponse
    | ParamDatetimeRfc1123200Response
    | ParamDatetimeRfc1123defaultResponse
    | ResponseDatetimeRfc1123200Response
    | ResponseDatetimeRfc1123defaultResponse
    | ParamDuration200Response
    | ParamDurationdefaultResponse
    | ResponseDuration200Response
    | ResponseDurationdefaultResponse
    | ParamByte200Response
    | ParamBytedefaultResponse
    | ResponseByte200Response
    | ResponseBytedefaultResponse
    | ParamEnum200Response
    | ParamEnumdefaultResponse
    | ResponseEnum200Response
    | ResponseEnumdefaultResponse
    | CustomRequestId200Response
    | CustomRequestIddefaultResponse
): response is
  | ParamExistingKeydefaultResponse
  | ResponseExistingKeydefaultResponse
  | ParamProtectedKeydefaultResponse
  | ResponseProtectedKeydefaultResponse
  | ParamIntegerdefaultResponse
  | ResponseIntegerdefaultResponse
  | ParamLongdefaultResponse
  | ResponseLongdefaultResponse
  | ParamFloatdefaultResponse
  | ResponseFloatdefaultResponse
  | ParamDoubledefaultResponse
  | ResponseDoubledefaultResponse
  | ParamBooldefaultResponse
  | ResponseBooldefaultResponse
  | ParamStringdefaultResponse
  | ResponseStringdefaultResponse
  | ParamDatedefaultResponse
  | ResponseDatedefaultResponse
  | ParamDatetimedefaultResponse
  | ResponseDatetimedefaultResponse
  | ParamDatetimeRfc1123defaultResponse
  | ResponseDatetimeRfc1123defaultResponse
  | ParamDurationdefaultResponse
  | ResponseDurationdefaultResponse
  | ParamBytedefaultResponse
  | ResponseBytedefaultResponse
  | ParamEnumdefaultResponse
  | ResponseEnumdefaultResponse
  | CustomRequestIddefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
