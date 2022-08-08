// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ParamExistingKey200Response,
  ParamExistingKeyDefaultResponse,
  ResponseExistingKey200Response,
  ResponseExistingKeyDefaultResponse,
  ParamProtectedKey200Response,
  ParamProtectedKeyDefaultResponse,
  ResponseProtectedKey200Response,
  ResponseProtectedKeyDefaultResponse,
  ParamInteger200Response,
  ParamIntegerDefaultResponse,
  ResponseInteger200Response,
  ResponseIntegerDefaultResponse,
  ParamLong200Response,
  ParamLongDefaultResponse,
  ResponseLong200Response,
  ResponseLongDefaultResponse,
  ParamFloat200Response,
  ParamFloatDefaultResponse,
  ResponseFloat200Response,
  ResponseFloatDefaultResponse,
  ParamDouble200Response,
  ParamDoubleDefaultResponse,
  ResponseDouble200Response,
  ResponseDoubleDefaultResponse,
  ParamBool200Response,
  ParamBoolDefaultResponse,
  ResponseBool200Response,
  ResponseBoolDefaultResponse,
  ParamString200Response,
  ParamStringDefaultResponse,
  ResponseString200Response,
  ResponseStringDefaultResponse,
  ParamDate200Response,
  ParamDateDefaultResponse,
  ResponseDate200Response,
  ResponseDateDefaultResponse,
  ParamDatetime200Response,
  ParamDatetimeDefaultResponse,
  ResponseDatetime200Response,
  ResponseDatetimeDefaultResponse,
  ParamDatetimeRfc1123200Response,
  ParamDatetimeRfc1123DefaultResponse,
  ResponseDatetimeRfc1123200Response,
  ResponseDatetimeRfc1123DefaultResponse,
  ParamDuration200Response,
  ParamDurationDefaultResponse,
  ResponseDuration200Response,
  ResponseDurationDefaultResponse,
  ParamByte200Response,
  ParamByteDefaultResponse,
  ResponseByte200Response,
  ResponseByteDefaultResponse,
  ParamEnum200Response,
  ParamEnumDefaultResponse,
  ResponseEnum200Response,
  ResponseEnumDefaultResponse,
  CustomRequestId200Response,
  CustomRequestIdDefaultResponse
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
  response: ParamExistingKey200Response | ParamExistingKeyDefaultResponse
): response is ParamExistingKeyDefaultResponse;
export function isUnexpected(
  response: ResponseExistingKey200Response | ResponseExistingKeyDefaultResponse
): response is ResponseExistingKeyDefaultResponse;
export function isUnexpected(
  response: ParamProtectedKey200Response | ParamProtectedKeyDefaultResponse
): response is ParamProtectedKeyDefaultResponse;
export function isUnexpected(
  response:
    | ResponseProtectedKey200Response
    | ResponseProtectedKeyDefaultResponse
): response is ResponseProtectedKeyDefaultResponse;
export function isUnexpected(
  response: ParamInteger200Response | ParamIntegerDefaultResponse
): response is ParamIntegerDefaultResponse;
export function isUnexpected(
  response: ResponseInteger200Response | ResponseIntegerDefaultResponse
): response is ResponseIntegerDefaultResponse;
export function isUnexpected(
  response: ParamLong200Response | ParamLongDefaultResponse
): response is ParamLongDefaultResponse;
export function isUnexpected(
  response: ResponseLong200Response | ResponseLongDefaultResponse
): response is ResponseLongDefaultResponse;
export function isUnexpected(
  response: ParamFloat200Response | ParamFloatDefaultResponse
): response is ParamFloatDefaultResponse;
export function isUnexpected(
  response: ResponseFloat200Response | ResponseFloatDefaultResponse
): response is ResponseFloatDefaultResponse;
export function isUnexpected(
  response: ParamDouble200Response | ParamDoubleDefaultResponse
): response is ParamDoubleDefaultResponse;
export function isUnexpected(
  response: ResponseDouble200Response | ResponseDoubleDefaultResponse
): response is ResponseDoubleDefaultResponse;
export function isUnexpected(
  response: ParamBool200Response | ParamBoolDefaultResponse
): response is ParamBoolDefaultResponse;
export function isUnexpected(
  response: ResponseBool200Response | ResponseBoolDefaultResponse
): response is ResponseBoolDefaultResponse;
export function isUnexpected(
  response: ParamString200Response | ParamStringDefaultResponse
): response is ParamStringDefaultResponse;
export function isUnexpected(
  response: ResponseString200Response | ResponseStringDefaultResponse
): response is ResponseStringDefaultResponse;
export function isUnexpected(
  response: ParamDate200Response | ParamDateDefaultResponse
): response is ParamDateDefaultResponse;
export function isUnexpected(
  response: ResponseDate200Response | ResponseDateDefaultResponse
): response is ResponseDateDefaultResponse;
export function isUnexpected(
  response: ParamDatetime200Response | ParamDatetimeDefaultResponse
): response is ParamDatetimeDefaultResponse;
export function isUnexpected(
  response: ResponseDatetime200Response | ResponseDatetimeDefaultResponse
): response is ResponseDatetimeDefaultResponse;
export function isUnexpected(
  response:
    | ParamDatetimeRfc1123200Response
    | ParamDatetimeRfc1123DefaultResponse
): response is ParamDatetimeRfc1123DefaultResponse;
export function isUnexpected(
  response:
    | ResponseDatetimeRfc1123200Response
    | ResponseDatetimeRfc1123DefaultResponse
): response is ResponseDatetimeRfc1123DefaultResponse;
export function isUnexpected(
  response: ParamDuration200Response | ParamDurationDefaultResponse
): response is ParamDurationDefaultResponse;
export function isUnexpected(
  response: ResponseDuration200Response | ResponseDurationDefaultResponse
): response is ResponseDurationDefaultResponse;
export function isUnexpected(
  response: ParamByte200Response | ParamByteDefaultResponse
): response is ParamByteDefaultResponse;
export function isUnexpected(
  response: ResponseByte200Response | ResponseByteDefaultResponse
): response is ResponseByteDefaultResponse;
export function isUnexpected(
  response: ParamEnum200Response | ParamEnumDefaultResponse
): response is ParamEnumDefaultResponse;
export function isUnexpected(
  response: ResponseEnum200Response | ResponseEnumDefaultResponse
): response is ResponseEnumDefaultResponse;
export function isUnexpected(
  response: CustomRequestId200Response | CustomRequestIdDefaultResponse
): response is CustomRequestIdDefaultResponse;
export function isUnexpected(
  response:
    | ParamExistingKey200Response
    | ParamExistingKeyDefaultResponse
    | ResponseExistingKey200Response
    | ResponseExistingKeyDefaultResponse
    | ParamProtectedKey200Response
    | ParamProtectedKeyDefaultResponse
    | ResponseProtectedKey200Response
    | ResponseProtectedKeyDefaultResponse
    | ParamInteger200Response
    | ParamIntegerDefaultResponse
    | ResponseInteger200Response
    | ResponseIntegerDefaultResponse
    | ParamLong200Response
    | ParamLongDefaultResponse
    | ResponseLong200Response
    | ResponseLongDefaultResponse
    | ParamFloat200Response
    | ParamFloatDefaultResponse
    | ResponseFloat200Response
    | ResponseFloatDefaultResponse
    | ParamDouble200Response
    | ParamDoubleDefaultResponse
    | ResponseDouble200Response
    | ResponseDoubleDefaultResponse
    | ParamBool200Response
    | ParamBoolDefaultResponse
    | ResponseBool200Response
    | ResponseBoolDefaultResponse
    | ParamString200Response
    | ParamStringDefaultResponse
    | ResponseString200Response
    | ResponseStringDefaultResponse
    | ParamDate200Response
    | ParamDateDefaultResponse
    | ResponseDate200Response
    | ResponseDateDefaultResponse
    | ParamDatetime200Response
    | ParamDatetimeDefaultResponse
    | ResponseDatetime200Response
    | ResponseDatetimeDefaultResponse
    | ParamDatetimeRfc1123200Response
    | ParamDatetimeRfc1123DefaultResponse
    | ResponseDatetimeRfc1123200Response
    | ResponseDatetimeRfc1123DefaultResponse
    | ParamDuration200Response
    | ParamDurationDefaultResponse
    | ResponseDuration200Response
    | ResponseDurationDefaultResponse
    | ParamByte200Response
    | ParamByteDefaultResponse
    | ResponseByte200Response
    | ResponseByteDefaultResponse
    | ParamEnum200Response
    | ParamEnumDefaultResponse
    | ResponseEnum200Response
    | ResponseEnumDefaultResponse
    | CustomRequestId200Response
    | CustomRequestIdDefaultResponse
): response is
  | ParamExistingKeyDefaultResponse
  | ResponseExistingKeyDefaultResponse
  | ParamProtectedKeyDefaultResponse
  | ResponseProtectedKeyDefaultResponse
  | ParamIntegerDefaultResponse
  | ResponseIntegerDefaultResponse
  | ParamLongDefaultResponse
  | ResponseLongDefaultResponse
  | ParamFloatDefaultResponse
  | ResponseFloatDefaultResponse
  | ParamDoubleDefaultResponse
  | ResponseDoubleDefaultResponse
  | ParamBoolDefaultResponse
  | ResponseBoolDefaultResponse
  | ParamStringDefaultResponse
  | ResponseStringDefaultResponse
  | ParamDateDefaultResponse
  | ResponseDateDefaultResponse
  | ParamDatetimeDefaultResponse
  | ResponseDatetimeDefaultResponse
  | ParamDatetimeRfc1123DefaultResponse
  | ResponseDatetimeRfc1123DefaultResponse
  | ParamDurationDefaultResponse
  | ResponseDurationDefaultResponse
  | ParamByteDefaultResponse
  | ResponseByteDefaultResponse
  | ParamEnumDefaultResponse
  | ResponseEnumDefaultResponse
  | CustomRequestIdDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
