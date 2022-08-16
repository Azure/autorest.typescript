// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  HeaderCustomRequestIdDefaultResponse
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
  response:
    | HeaderParamExistingKey200Response
    | HeaderParamExistingKeyDefaultResponse
): response is HeaderParamExistingKeyDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseExistingKey200Response
    | HeaderResponseExistingKeyDefaultResponse
): response is HeaderResponseExistingKeyDefaultResponse;
export function isUnexpected(
  response:
    | HeaderParamProtectedKey200Response
    | HeaderParamProtectedKeyDefaultResponse
): response is HeaderParamProtectedKeyDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseProtectedKey200Response
    | HeaderResponseProtectedKeyDefaultResponse
): response is HeaderResponseProtectedKeyDefaultResponse;
export function isUnexpected(
  response: HeaderParamInteger200Response | HeaderParamIntegerDefaultResponse
): response is HeaderParamIntegerDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseInteger200Response
    | HeaderResponseIntegerDefaultResponse
): response is HeaderResponseIntegerDefaultResponse;
export function isUnexpected(
  response: HeaderParamLong200Response | HeaderParamLongDefaultResponse
): response is HeaderParamLongDefaultResponse;
export function isUnexpected(
  response: HeaderResponseLong200Response | HeaderResponseLongDefaultResponse
): response is HeaderResponseLongDefaultResponse;
export function isUnexpected(
  response: HeaderParamFloat200Response | HeaderParamFloatDefaultResponse
): response is HeaderParamFloatDefaultResponse;
export function isUnexpected(
  response: HeaderResponseFloat200Response | HeaderResponseFloatDefaultResponse
): response is HeaderResponseFloatDefaultResponse;
export function isUnexpected(
  response: HeaderParamDouble200Response | HeaderParamDoubleDefaultResponse
): response is HeaderParamDoubleDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseDouble200Response
    | HeaderResponseDoubleDefaultResponse
): response is HeaderResponseDoubleDefaultResponse;
export function isUnexpected(
  response: HeaderParamBool200Response | HeaderParamBoolDefaultResponse
): response is HeaderParamBoolDefaultResponse;
export function isUnexpected(
  response: HeaderResponseBool200Response | HeaderResponseBoolDefaultResponse
): response is HeaderResponseBoolDefaultResponse;
export function isUnexpected(
  response: HeaderParamString200Response | HeaderParamStringDefaultResponse
): response is HeaderParamStringDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseString200Response
    | HeaderResponseStringDefaultResponse
): response is HeaderResponseStringDefaultResponse;
export function isUnexpected(
  response: HeaderParamDate200Response | HeaderParamDateDefaultResponse
): response is HeaderParamDateDefaultResponse;
export function isUnexpected(
  response: HeaderResponseDate200Response | HeaderResponseDateDefaultResponse
): response is HeaderResponseDateDefaultResponse;
export function isUnexpected(
  response: HeaderParamDatetime200Response | HeaderParamDatetimeDefaultResponse
): response is HeaderParamDatetimeDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseDatetime200Response
    | HeaderResponseDatetimeDefaultResponse
): response is HeaderResponseDatetimeDefaultResponse;
export function isUnexpected(
  response:
    | HeaderParamDatetimeRfc1123200Response
    | HeaderParamDatetimeRfc1123DefaultResponse
): response is HeaderParamDatetimeRfc1123DefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseDatetimeRfc1123200Response
    | HeaderResponseDatetimeRfc1123DefaultResponse
): response is HeaderResponseDatetimeRfc1123DefaultResponse;
export function isUnexpected(
  response: HeaderParamDuration200Response | HeaderParamDurationDefaultResponse
): response is HeaderParamDurationDefaultResponse;
export function isUnexpected(
  response:
    | HeaderResponseDuration200Response
    | HeaderResponseDurationDefaultResponse
): response is HeaderResponseDurationDefaultResponse;
export function isUnexpected(
  response: HeaderParamByte200Response | HeaderParamByteDefaultResponse
): response is HeaderParamByteDefaultResponse;
export function isUnexpected(
  response: HeaderResponseByte200Response | HeaderResponseByteDefaultResponse
): response is HeaderResponseByteDefaultResponse;
export function isUnexpected(
  response: HeaderParamEnum200Response | HeaderParamEnumDefaultResponse
): response is HeaderParamEnumDefaultResponse;
export function isUnexpected(
  response: HeaderResponseEnum200Response | HeaderResponseEnumDefaultResponse
): response is HeaderResponseEnumDefaultResponse;
export function isUnexpected(
  response:
    | HeaderCustomRequestId200Response
    | HeaderCustomRequestIdDefaultResponse
): response is HeaderCustomRequestIdDefaultResponse;
export function isUnexpected(
  response:
    | HeaderParamExistingKey200Response
    | HeaderParamExistingKeyDefaultResponse
    | HeaderResponseExistingKey200Response
    | HeaderResponseExistingKeyDefaultResponse
    | HeaderParamProtectedKey200Response
    | HeaderParamProtectedKeyDefaultResponse
    | HeaderResponseProtectedKey200Response
    | HeaderResponseProtectedKeyDefaultResponse
    | HeaderParamInteger200Response
    | HeaderParamIntegerDefaultResponse
    | HeaderResponseInteger200Response
    | HeaderResponseIntegerDefaultResponse
    | HeaderParamLong200Response
    | HeaderParamLongDefaultResponse
    | HeaderResponseLong200Response
    | HeaderResponseLongDefaultResponse
    | HeaderParamFloat200Response
    | HeaderParamFloatDefaultResponse
    | HeaderResponseFloat200Response
    | HeaderResponseFloatDefaultResponse
    | HeaderParamDouble200Response
    | HeaderParamDoubleDefaultResponse
    | HeaderResponseDouble200Response
    | HeaderResponseDoubleDefaultResponse
    | HeaderParamBool200Response
    | HeaderParamBoolDefaultResponse
    | HeaderResponseBool200Response
    | HeaderResponseBoolDefaultResponse
    | HeaderParamString200Response
    | HeaderParamStringDefaultResponse
    | HeaderResponseString200Response
    | HeaderResponseStringDefaultResponse
    | HeaderParamDate200Response
    | HeaderParamDateDefaultResponse
    | HeaderResponseDate200Response
    | HeaderResponseDateDefaultResponse
    | HeaderParamDatetime200Response
    | HeaderParamDatetimeDefaultResponse
    | HeaderResponseDatetime200Response
    | HeaderResponseDatetimeDefaultResponse
    | HeaderParamDatetimeRfc1123200Response
    | HeaderParamDatetimeRfc1123DefaultResponse
    | HeaderResponseDatetimeRfc1123200Response
    | HeaderResponseDatetimeRfc1123DefaultResponse
    | HeaderParamDuration200Response
    | HeaderParamDurationDefaultResponse
    | HeaderResponseDuration200Response
    | HeaderResponseDurationDefaultResponse
    | HeaderParamByte200Response
    | HeaderParamByteDefaultResponse
    | HeaderResponseByte200Response
    | HeaderResponseByteDefaultResponse
    | HeaderParamEnum200Response
    | HeaderParamEnumDefaultResponse
    | HeaderResponseEnum200Response
    | HeaderResponseEnumDefaultResponse
    | HeaderCustomRequestId200Response
    | HeaderCustomRequestIdDefaultResponse
): response is
  | HeaderParamExistingKeyDefaultResponse
  | HeaderResponseExistingKeyDefaultResponse
  | HeaderParamProtectedKeyDefaultResponse
  | HeaderResponseProtectedKeyDefaultResponse
  | HeaderParamIntegerDefaultResponse
  | HeaderResponseIntegerDefaultResponse
  | HeaderParamLongDefaultResponse
  | HeaderResponseLongDefaultResponse
  | HeaderParamFloatDefaultResponse
  | HeaderResponseFloatDefaultResponse
  | HeaderParamDoubleDefaultResponse
  | HeaderResponseDoubleDefaultResponse
  | HeaderParamBoolDefaultResponse
  | HeaderResponseBoolDefaultResponse
  | HeaderParamStringDefaultResponse
  | HeaderResponseStringDefaultResponse
  | HeaderParamDateDefaultResponse
  | HeaderResponseDateDefaultResponse
  | HeaderParamDatetimeDefaultResponse
  | HeaderResponseDatetimeDefaultResponse
  | HeaderParamDatetimeRfc1123DefaultResponse
  | HeaderResponseDatetimeRfc1123DefaultResponse
  | HeaderParamDurationDefaultResponse
  | HeaderResponseDurationDefaultResponse
  | HeaderParamByteDefaultResponse
  | HeaderResponseByteDefaultResponse
  | HeaderParamEnumDefaultResponse
  | HeaderResponseEnumDefaultResponse
  | HeaderCustomRequestIdDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
