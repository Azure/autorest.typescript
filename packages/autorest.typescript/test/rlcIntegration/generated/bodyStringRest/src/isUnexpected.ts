// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringGetNull200Response,
  StringGetNulldefaultResponse,
  StringPutNull200Response,
  StringPutNulldefaultResponse,
  StringGetEmpty200Response,
  StringGetEmptydefaultResponse,
  StringPutEmpty200Response,
  StringPutEmptydefaultResponse,
  StringGetMbcs200Response,
  StringGetMbcsdefaultResponse,
  StringPutMbcs200Response,
  StringPutMbcsdefaultResponse,
  StringGetWhitespace200Response,
  StringGetWhitespacedefaultResponse,
  StringPutWhitespace200Response,
  StringPutWhitespacedefaultResponse,
  StringGetNotProvided200Response,
  StringGetNotProvideddefaultResponse,
  StringGetBase64Encoded200Response,
  StringGetBase64EncodeddefaultResponse,
  StringGetBase64UrlEncoded200Response,
  StringGetBase64UrlEncodeddefaultResponse,
  StringPutBase64UrlEncoded200Response,
  StringPutBase64UrlEncodeddefaultResponse,
  StringGetNullBase64UrlEncoded200Response,
  StringGetNullBase64UrlEncodeddefaultResponse,
  EnumGetNotExpandable200Response,
  EnumGetNotExpandabledefaultResponse,
  EnumPutNotExpandable200Response,
  EnumPutNotExpandabledefaultResponse,
  EnumGetReferenced200Response,
  EnumGetReferenceddefaultResponse,
  EnumPutReferenced200Response,
  EnumPutReferenceddefaultResponse,
  EnumGetReferencedConstant200Response,
  EnumGetReferencedConstantdefaultResponse,
  EnumPutReferencedConstant200Response,
  EnumPutReferencedConstantdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /string/null": ["200"],
  "PUT /string/null": ["200"],
  "GET /string/empty": ["200"],
  "PUT /string/empty": ["200"],
  "GET /string/mbcs": ["200"],
  "PUT /string/mbcs": ["200"],
  "GET /string/whitespace": ["200"],
  "PUT /string/whitespace": ["200"],
  "GET /string/notProvided": ["200"],
  "GET /string/base64Encoding": ["200"],
  "GET /string/base64UrlEncoding": ["200"],
  "PUT /string/base64UrlEncoding": ["200"],
  "GET /string/nullBase64UrlEncoding": ["200"],
  "GET /string/enum/notExpandable": ["200"],
  "PUT /string/enum/notExpandable": ["200"],
  "GET /string/enum/Referenced": ["200"],
  "PUT /string/enum/Referenced": ["200"],
  "GET /string/enum/ReferencedConstant": ["200"],
  "PUT /string/enum/ReferencedConstant": ["200"]
};

export function isUnexpected(
  response: StringGetNull200Response | StringGetNulldefaultResponse
): response is StringGetNulldefaultResponse;
export function isUnexpected(
  response: StringPutNull200Response | StringPutNulldefaultResponse
): response is StringPutNulldefaultResponse;
export function isUnexpected(
  response: StringGetEmpty200Response | StringGetEmptydefaultResponse
): response is StringGetEmptydefaultResponse;
export function isUnexpected(
  response: StringPutEmpty200Response | StringPutEmptydefaultResponse
): response is StringPutEmptydefaultResponse;
export function isUnexpected(
  response: StringGetMbcs200Response | StringGetMbcsdefaultResponse
): response is StringGetMbcsdefaultResponse;
export function isUnexpected(
  response: StringPutMbcs200Response | StringPutMbcsdefaultResponse
): response is StringPutMbcsdefaultResponse;
export function isUnexpected(
  response: StringGetWhitespace200Response | StringGetWhitespacedefaultResponse
): response is StringGetWhitespacedefaultResponse;
export function isUnexpected(
  response: StringPutWhitespace200Response | StringPutWhitespacedefaultResponse
): response is StringPutWhitespacedefaultResponse;
export function isUnexpected(
  response:
    | StringGetNotProvided200Response
    | StringGetNotProvideddefaultResponse
): response is StringGetNotProvideddefaultResponse;
export function isUnexpected(
  response:
    | StringGetBase64Encoded200Response
    | StringGetBase64EncodeddefaultResponse
): response is StringGetBase64EncodeddefaultResponse;
export function isUnexpected(
  response:
    | StringGetBase64UrlEncoded200Response
    | StringGetBase64UrlEncodeddefaultResponse
): response is StringGetBase64UrlEncodeddefaultResponse;
export function isUnexpected(
  response:
    | StringPutBase64UrlEncoded200Response
    | StringPutBase64UrlEncodeddefaultResponse
): response is StringPutBase64UrlEncodeddefaultResponse;
export function isUnexpected(
  response:
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncodeddefaultResponse
): response is StringGetNullBase64UrlEncodeddefaultResponse;
export function isUnexpected(
  response:
    | EnumGetNotExpandable200Response
    | EnumGetNotExpandabledefaultResponse
): response is EnumGetNotExpandabledefaultResponse;
export function isUnexpected(
  response:
    | EnumPutNotExpandable200Response
    | EnumPutNotExpandabledefaultResponse
): response is EnumPutNotExpandabledefaultResponse;
export function isUnexpected(
  response: EnumGetReferenced200Response | EnumGetReferenceddefaultResponse
): response is EnumGetReferenceddefaultResponse;
export function isUnexpected(
  response: EnumPutReferenced200Response | EnumPutReferenceddefaultResponse
): response is EnumPutReferenceddefaultResponse;
export function isUnexpected(
  response:
    | EnumGetReferencedConstant200Response
    | EnumGetReferencedConstantdefaultResponse
): response is EnumGetReferencedConstantdefaultResponse;
export function isUnexpected(
  response:
    | EnumPutReferencedConstant200Response
    | EnumPutReferencedConstantdefaultResponse
): response is EnumPutReferencedConstantdefaultResponse;
export function isUnexpected(
  response:
    | StringGetNull200Response
    | StringGetNulldefaultResponse
    | StringPutNull200Response
    | StringPutNulldefaultResponse
    | StringGetEmpty200Response
    | StringGetEmptydefaultResponse
    | StringPutEmpty200Response
    | StringPutEmptydefaultResponse
    | StringGetMbcs200Response
    | StringGetMbcsdefaultResponse
    | StringPutMbcs200Response
    | StringPutMbcsdefaultResponse
    | StringGetWhitespace200Response
    | StringGetWhitespacedefaultResponse
    | StringPutWhitespace200Response
    | StringPutWhitespacedefaultResponse
    | StringGetNotProvided200Response
    | StringGetNotProvideddefaultResponse
    | StringGetBase64Encoded200Response
    | StringGetBase64EncodeddefaultResponse
    | StringGetBase64UrlEncoded200Response
    | StringGetBase64UrlEncodeddefaultResponse
    | StringPutBase64UrlEncoded200Response
    | StringPutBase64UrlEncodeddefaultResponse
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncodeddefaultResponse
    | EnumGetNotExpandable200Response
    | EnumGetNotExpandabledefaultResponse
    | EnumPutNotExpandable200Response
    | EnumPutNotExpandabledefaultResponse
    | EnumGetReferenced200Response
    | EnumGetReferenceddefaultResponse
    | EnumPutReferenced200Response
    | EnumPutReferenceddefaultResponse
    | EnumGetReferencedConstant200Response
    | EnumGetReferencedConstantdefaultResponse
    | EnumPutReferencedConstant200Response
    | EnumPutReferencedConstantdefaultResponse
): response is
  | StringGetNulldefaultResponse
  | StringPutNulldefaultResponse
  | StringGetEmptydefaultResponse
  | StringPutEmptydefaultResponse
  | StringGetMbcsdefaultResponse
  | StringPutMbcsdefaultResponse
  | StringGetWhitespacedefaultResponse
  | StringPutWhitespacedefaultResponse
  | StringGetNotProvideddefaultResponse
  | StringGetBase64EncodeddefaultResponse
  | StringGetBase64UrlEncodeddefaultResponse
  | StringPutBase64UrlEncodeddefaultResponse
  | StringGetNullBase64UrlEncodeddefaultResponse
  | EnumGetNotExpandabledefaultResponse
  | EnumPutNotExpandabledefaultResponse
  | EnumGetReferenceddefaultResponse
  | EnumPutReferenceddefaultResponse
  | EnumGetReferencedConstantdefaultResponse
  | EnumPutReferencedConstantdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
