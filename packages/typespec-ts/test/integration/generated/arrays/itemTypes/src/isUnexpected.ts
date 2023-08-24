// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Int32ValueGet200Response,
  Int32ValueGetDefaultResponse,
  Int32ValuePut204Response,
  Int32ValuePutDefaultResponse,
  Int64ValueGet200Response,
  Int64ValueGetDefaultResponse,
  Int64ValuePut204Response,
  Int64ValuePutDefaultResponse,
  BooleanValueGet200Response,
  BooleanValueGetDefaultResponse,
  BooleanValuePut204Response,
  BooleanValuePutDefaultResponse,
  StringValueGet200Response,
  StringValueGetDefaultResponse,
  StringValuePut204Response,
  StringValuePutDefaultResponse,
  Float32ValueGet200Response,
  Float32ValueGetDefaultResponse,
  Float32ValuePut204Response,
  Float32ValuePutDefaultResponse,
  DatetimeValueGet200Response,
  DatetimeValueGetDefaultResponse,
  DatetimeValuePut204Response,
  DatetimeValuePutDefaultResponse,
  DurationValueGet200Response,
  DurationValueGetDefaultResponse,
  DurationValuePut204Response,
  DurationValuePutDefaultResponse,
  UnknownValueGet200Response,
  UnknownValueGetDefaultResponse,
  UnknownValuePut204Response,
  UnknownValuePutDefaultResponse,
  ModelValueGet200Response,
  ModelValueGetDefaultResponse,
  ModelValuePut204Response,
  ModelValuePutDefaultResponse,
  NullableFloatValueGet200Response,
  NullableFloatValueGetDefaultResponse,
  NullableFloatValuePut204Response,
  NullableFloatValuePutDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /type/array/int32": ["200"],
  "PUT /type/array/int32": ["204"],
  "GET /type/array/int64": ["200"],
  "PUT /type/array/int64": ["204"],
  "GET /type/array/boolean": ["200"],
  "PUT /type/array/boolean": ["204"],
  "GET /type/array/string": ["200"],
  "PUT /type/array/string": ["204"],
  "GET /type/array/float32": ["200"],
  "PUT /type/array/float32": ["204"],
  "GET /type/array/datetime": ["200"],
  "PUT /type/array/datetime": ["204"],
  "GET /type/array/duration": ["200"],
  "PUT /type/array/duration": ["204"],
  "GET /type/array/unknown": ["200"],
  "PUT /type/array/unknown": ["204"],
  "GET /type/array/model": ["200"],
  "PUT /type/array/model": ["204"],
  "GET /type/array/nullable-float": ["200"],
  "PUT /type/array/nullable-float": ["204"],
};

export function isUnexpected(
  response: Int32ValueGet200Response | Int32ValueGetDefaultResponse
): response is Int32ValueGetDefaultResponse;
export function isUnexpected(
  response: Int32ValuePut204Response | Int32ValuePutDefaultResponse
): response is Int32ValuePutDefaultResponse;
export function isUnexpected(
  response: Int64ValueGet200Response | Int64ValueGetDefaultResponse
): response is Int64ValueGetDefaultResponse;
export function isUnexpected(
  response: Int64ValuePut204Response | Int64ValuePutDefaultResponse
): response is Int64ValuePutDefaultResponse;
export function isUnexpected(
  response: BooleanValueGet200Response | BooleanValueGetDefaultResponse
): response is BooleanValueGetDefaultResponse;
export function isUnexpected(
  response: BooleanValuePut204Response | BooleanValuePutDefaultResponse
): response is BooleanValuePutDefaultResponse;
export function isUnexpected(
  response: StringValueGet200Response | StringValueGetDefaultResponse
): response is StringValueGetDefaultResponse;
export function isUnexpected(
  response: StringValuePut204Response | StringValuePutDefaultResponse
): response is StringValuePutDefaultResponse;
export function isUnexpected(
  response: Float32ValueGet200Response | Float32ValueGetDefaultResponse
): response is Float32ValueGetDefaultResponse;
export function isUnexpected(
  response: Float32ValuePut204Response | Float32ValuePutDefaultResponse
): response is Float32ValuePutDefaultResponse;
export function isUnexpected(
  response: DatetimeValueGet200Response | DatetimeValueGetDefaultResponse
): response is DatetimeValueGetDefaultResponse;
export function isUnexpected(
  response: DatetimeValuePut204Response | DatetimeValuePutDefaultResponse
): response is DatetimeValuePutDefaultResponse;
export function isUnexpected(
  response: DurationValueGet200Response | DurationValueGetDefaultResponse
): response is DurationValueGetDefaultResponse;
export function isUnexpected(
  response: DurationValuePut204Response | DurationValuePutDefaultResponse
): response is DurationValuePutDefaultResponse;
export function isUnexpected(
  response: UnknownValueGet200Response | UnknownValueGetDefaultResponse
): response is UnknownValueGetDefaultResponse;
export function isUnexpected(
  response: UnknownValuePut204Response | UnknownValuePutDefaultResponse
): response is UnknownValuePutDefaultResponse;
export function isUnexpected(
  response: ModelValueGet200Response | ModelValueGetDefaultResponse
): response is ModelValueGetDefaultResponse;
export function isUnexpected(
  response: ModelValuePut204Response | ModelValuePutDefaultResponse
): response is ModelValuePutDefaultResponse;
export function isUnexpected(
  response:
    | NullableFloatValueGet200Response
    | NullableFloatValueGetDefaultResponse
): response is NullableFloatValueGetDefaultResponse;
export function isUnexpected(
  response:
    | NullableFloatValuePut204Response
    | NullableFloatValuePutDefaultResponse
): response is NullableFloatValuePutDefaultResponse;
export function isUnexpected(
  response:
    | Int32ValueGet200Response
    | Int32ValueGetDefaultResponse
    | Int32ValuePut204Response
    | Int32ValuePutDefaultResponse
    | Int64ValueGet200Response
    | Int64ValueGetDefaultResponse
    | Int64ValuePut204Response
    | Int64ValuePutDefaultResponse
    | BooleanValueGet200Response
    | BooleanValueGetDefaultResponse
    | BooleanValuePut204Response
    | BooleanValuePutDefaultResponse
    | StringValueGet200Response
    | StringValueGetDefaultResponse
    | StringValuePut204Response
    | StringValuePutDefaultResponse
    | Float32ValueGet200Response
    | Float32ValueGetDefaultResponse
    | Float32ValuePut204Response
    | Float32ValuePutDefaultResponse
    | DatetimeValueGet200Response
    | DatetimeValueGetDefaultResponse
    | DatetimeValuePut204Response
    | DatetimeValuePutDefaultResponse
    | DurationValueGet200Response
    | DurationValueGetDefaultResponse
    | DurationValuePut204Response
    | DurationValuePutDefaultResponse
    | UnknownValueGet200Response
    | UnknownValueGetDefaultResponse
    | UnknownValuePut204Response
    | UnknownValuePutDefaultResponse
    | ModelValueGet200Response
    | ModelValueGetDefaultResponse
    | ModelValuePut204Response
    | ModelValuePutDefaultResponse
    | NullableFloatValueGet200Response
    | NullableFloatValueGetDefaultResponse
    | NullableFloatValuePut204Response
    | NullableFloatValuePutDefaultResponse
): response is
  | Int32ValueGetDefaultResponse
  | Int32ValuePutDefaultResponse
  | Int64ValueGetDefaultResponse
  | Int64ValuePutDefaultResponse
  | BooleanValueGetDefaultResponse
  | BooleanValuePutDefaultResponse
  | StringValueGetDefaultResponse
  | StringValuePutDefaultResponse
  | Float32ValueGetDefaultResponse
  | Float32ValuePutDefaultResponse
  | DatetimeValueGetDefaultResponse
  | DatetimeValuePutDefaultResponse
  | DurationValueGetDefaultResponse
  | DurationValuePutDefaultResponse
  | UnknownValueGetDefaultResponse
  | UnknownValuePutDefaultResponse
  | ModelValueGetDefaultResponse
  | ModelValuePutDefaultResponse
  | NullableFloatValueGetDefaultResponse
  | NullableFloatValuePutDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`
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
