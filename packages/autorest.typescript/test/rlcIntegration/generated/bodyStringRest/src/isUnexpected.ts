// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringGetNull200Response,
  StringGetNullDefaultResponse,
  StringPutNull200Response,
  StringPutNullDefaultResponse,
  StringGetEmpty200Response,
  StringGetEmptyDefaultResponse,
  StringPutEmpty200Response,
  StringPutEmptyDefaultResponse,
  StringGetMbcs200Response,
  StringGetMbcsDefaultResponse,
  StringPutMbcs200Response,
  StringPutMbcsDefaultResponse,
  StringGetWhitespace200Response,
  StringGetWhitespaceDefaultResponse,
  StringPutWhitespace200Response,
  StringPutWhitespaceDefaultResponse,
  StringGetNotProvided200Response,
  StringGetNotProvidedDefaultResponse,
  StringGetBase64Encoded200Response,
  StringGetBase64EncodedDefaultResponse,
  StringGetBase64UrlEncoded200Response,
  StringGetBase64UrlEncodedDefaultResponse,
  StringPutBase64UrlEncoded200Response,
  StringPutBase64UrlEncodedDefaultResponse,
  StringGetNullBase64UrlEncoded200Response,
  StringGetNullBase64UrlEncodedDefaultResponse,
  EnumGetNotExpandable200Response,
  EnumGetNotExpandableDefaultResponse,
  EnumPutNotExpandable200Response,
  EnumPutNotExpandableDefaultResponse,
  EnumGetReferenced200Response,
  EnumGetReferencedDefaultResponse,
  EnumPutReferenced200Response,
  EnumPutReferencedDefaultResponse,
  EnumGetReferencedConstant200Response,
  EnumGetReferencedConstantDefaultResponse,
  EnumPutReferencedConstant200Response,
  EnumPutReferencedConstantDefaultResponse,
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
  "PUT /string/enum/ReferencedConstant": ["200"],
};

export function isUnexpected(
  response: StringGetNull200Response | StringGetNullDefaultResponse,
): response is StringGetNullDefaultResponse;
export function isUnexpected(
  response: StringPutNull200Response | StringPutNullDefaultResponse,
): response is StringPutNullDefaultResponse;
export function isUnexpected(
  response: StringGetEmpty200Response | StringGetEmptyDefaultResponse,
): response is StringGetEmptyDefaultResponse;
export function isUnexpected(
  response: StringPutEmpty200Response | StringPutEmptyDefaultResponse,
): response is StringPutEmptyDefaultResponse;
export function isUnexpected(
  response: StringGetMbcs200Response | StringGetMbcsDefaultResponse,
): response is StringGetMbcsDefaultResponse;
export function isUnexpected(
  response: StringPutMbcs200Response | StringPutMbcsDefaultResponse,
): response is StringPutMbcsDefaultResponse;
export function isUnexpected(
  response: StringGetWhitespace200Response | StringGetWhitespaceDefaultResponse,
): response is StringGetWhitespaceDefaultResponse;
export function isUnexpected(
  response: StringPutWhitespace200Response | StringPutWhitespaceDefaultResponse,
): response is StringPutWhitespaceDefaultResponse;
export function isUnexpected(
  response:
    | StringGetNotProvided200Response
    | StringGetNotProvidedDefaultResponse,
): response is StringGetNotProvidedDefaultResponse;
export function isUnexpected(
  response:
    | StringGetBase64Encoded200Response
    | StringGetBase64EncodedDefaultResponse,
): response is StringGetBase64EncodedDefaultResponse;
export function isUnexpected(
  response:
    | StringGetBase64UrlEncoded200Response
    | StringGetBase64UrlEncodedDefaultResponse,
): response is StringGetBase64UrlEncodedDefaultResponse;
export function isUnexpected(
  response:
    | StringPutBase64UrlEncoded200Response
    | StringPutBase64UrlEncodedDefaultResponse,
): response is StringPutBase64UrlEncodedDefaultResponse;
export function isUnexpected(
  response:
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncodedDefaultResponse,
): response is StringGetNullBase64UrlEncodedDefaultResponse;
export function isUnexpected(
  response:
    | EnumGetNotExpandable200Response
    | EnumGetNotExpandableDefaultResponse,
): response is EnumGetNotExpandableDefaultResponse;
export function isUnexpected(
  response:
    | EnumPutNotExpandable200Response
    | EnumPutNotExpandableDefaultResponse,
): response is EnumPutNotExpandableDefaultResponse;
export function isUnexpected(
  response: EnumGetReferenced200Response | EnumGetReferencedDefaultResponse,
): response is EnumGetReferencedDefaultResponse;
export function isUnexpected(
  response: EnumPutReferenced200Response | EnumPutReferencedDefaultResponse,
): response is EnumPutReferencedDefaultResponse;
export function isUnexpected(
  response:
    | EnumGetReferencedConstant200Response
    | EnumGetReferencedConstantDefaultResponse,
): response is EnumGetReferencedConstantDefaultResponse;
export function isUnexpected(
  response:
    | EnumPutReferencedConstant200Response
    | EnumPutReferencedConstantDefaultResponse,
): response is EnumPutReferencedConstantDefaultResponse;
export function isUnexpected(
  response:
    | StringGetNull200Response
    | StringGetNullDefaultResponse
    | StringPutNull200Response
    | StringPutNullDefaultResponse
    | StringGetEmpty200Response
    | StringGetEmptyDefaultResponse
    | StringPutEmpty200Response
    | StringPutEmptyDefaultResponse
    | StringGetMbcs200Response
    | StringGetMbcsDefaultResponse
    | StringPutMbcs200Response
    | StringPutMbcsDefaultResponse
    | StringGetWhitespace200Response
    | StringGetWhitespaceDefaultResponse
    | StringPutWhitespace200Response
    | StringPutWhitespaceDefaultResponse
    | StringGetNotProvided200Response
    | StringGetNotProvidedDefaultResponse
    | StringGetBase64Encoded200Response
    | StringGetBase64EncodedDefaultResponse
    | StringGetBase64UrlEncoded200Response
    | StringGetBase64UrlEncodedDefaultResponse
    | StringPutBase64UrlEncoded200Response
    | StringPutBase64UrlEncodedDefaultResponse
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncodedDefaultResponse
    | EnumGetNotExpandable200Response
    | EnumGetNotExpandableDefaultResponse
    | EnumPutNotExpandable200Response
    | EnumPutNotExpandableDefaultResponse
    | EnumGetReferenced200Response
    | EnumGetReferencedDefaultResponse
    | EnumPutReferenced200Response
    | EnumPutReferencedDefaultResponse
    | EnumGetReferencedConstant200Response
    | EnumGetReferencedConstantDefaultResponse
    | EnumPutReferencedConstant200Response
    | EnumPutReferencedConstantDefaultResponse,
): response is
  | StringGetNullDefaultResponse
  | StringPutNullDefaultResponse
  | StringGetEmptyDefaultResponse
  | StringPutEmptyDefaultResponse
  | StringGetMbcsDefaultResponse
  | StringPutMbcsDefaultResponse
  | StringGetWhitespaceDefaultResponse
  | StringPutWhitespaceDefaultResponse
  | StringGetNotProvidedDefaultResponse
  | StringGetBase64EncodedDefaultResponse
  | StringGetBase64UrlEncodedDefaultResponse
  | StringPutBase64UrlEncodedDefaultResponse
  | StringGetNullBase64UrlEncodedDefaultResponse
  | EnumGetNotExpandableDefaultResponse
  | EnumPutNotExpandableDefaultResponse
  | EnumGetReferencedDefaultResponse
  | EnumPutReferencedDefaultResponse
  | EnumGetReferencedConstantDefaultResponse
  | EnumPutReferencedConstantDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
