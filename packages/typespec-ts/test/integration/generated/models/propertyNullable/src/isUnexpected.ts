// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetNonNull200Response,
  StringModelGetNonNullDefaultResponse,
  StringModelPatchNonNull204Response,
  StringModelPatchNonNullDefaultResponse,
  StringModelGetNull200Response,
  StringModelGetNullDefaultResponse,
  StringModelPatchNull204Response,
  StringModelPatchNullDefaultResponse,
  BytesGetNonNull200Response,
  BytesGetNonNullDefaultResponse,
  BytesPatchNonNull204Response,
  BytesPatchNonNullDefaultResponse,
  BytesGetNull200Response,
  BytesGetNullDefaultResponse,
  BytesPatchNull204Response,
  BytesPatchNullDefaultResponse,
  DatetimeGetNonNull200Response,
  DatetimeGetNonNullDefaultResponse,
  DatetimePatchNonNull204Response,
  DatetimePatchNonNullDefaultResponse,
  DatetimeGetNull200Response,
  DatetimeGetNullDefaultResponse,
  DatetimePatchNull204Response,
  DatetimePatchNullDefaultResponse,
  DurationGetNonNull200Response,
  DurationGetNonNullDefaultResponse,
  DurationPatchNonNull204Response,
  DurationPatchNonNullDefaultResponse,
  DurationGetNull200Response,
  DurationGetNullDefaultResponse,
  DurationPatchNull204Response,
  DurationPatchNullDefaultResponse,
  CollectionsByteGetNonNull200Response,
  CollectionsByteGetNonNullDefaultResponse,
  CollectionsBytePatchNonNull204Response,
  CollectionsBytePatchNonNullDefaultResponse,
  CollectionsByteGetNull200Response,
  CollectionsByteGetNullDefaultResponse,
  CollectionsBytePatchNull204Response,
  CollectionsBytePatchNullDefaultResponse,
  CollectionsModelGetNonNull200Response,
  CollectionsModelGetNonNullDefaultResponse,
  CollectionsModelPatchNonNull204Response,
  CollectionsModelPatchNonNullDefaultResponse,
  CollectionsModelGetNull200Response,
  CollectionsModelGetNullDefaultResponse,
  CollectionsModelPatchNull204Response,
  CollectionsModelPatchNullDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /type/property/nullable/string/non-null": ["200"],
  "PATCH /type/property/nullable/string/non-null": ["204"],
  "GET /type/property/nullable/string/null": ["200"],
  "PATCH /type/property/nullable/string/null": ["204"],
  "GET /type/property/nullable/bytes/non-null": ["200"],
  "PATCH /type/property/nullable/bytes/non-null": ["204"],
  "GET /type/property/nullable/bytes/null": ["200"],
  "PATCH /type/property/nullable/bytes/null": ["204"],
  "GET /type/property/nullable/datetime/non-null": ["200"],
  "PATCH /type/property/nullable/datetime/non-null": ["204"],
  "GET /type/property/nullable/datetime/null": ["200"],
  "PATCH /type/property/nullable/datetime/null": ["204"],
  "GET /type/property/nullable/duration/non-null": ["200"],
  "PATCH /type/property/nullable/duration/non-null": ["204"],
  "GET /type/property/nullable/duration/null": ["200"],
  "PATCH /type/property/nullable/duration/null": ["204"],
  "GET /type/property/nullable/collections/bytes/non-null": ["200"],
  "PATCH /type/property/nullable/collections/bytes/non-null": ["204"],
  "GET /type/property/nullable/collections/bytes/null": ["200"],
  "PATCH /type/property/nullable/collections/bytes/null": ["204"],
  "GET /type/property/nullable/collections/model/non-null": ["200"],
  "PATCH /type/property/nullable/collections/model/non-null": ["204"],
  "GET /type/property/nullable/collections/model/null": ["200"],
  "PATCH /type/property/nullable/collections/model/null": ["204"],
};

export function isUnexpected(
  response:
    | StringModelGetNonNull200Response
    | StringModelGetNonNullDefaultResponse
): response is StringModelGetNonNullDefaultResponse;
export function isUnexpected(
  response:
    | StringModelPatchNonNull204Response
    | StringModelPatchNonNullDefaultResponse
): response is StringModelPatchNonNullDefaultResponse;
export function isUnexpected(
  response: StringModelGetNull200Response | StringModelGetNullDefaultResponse
): response is StringModelGetNullDefaultResponse;
export function isUnexpected(
  response:
    | StringModelPatchNull204Response
    | StringModelPatchNullDefaultResponse
): response is StringModelPatchNullDefaultResponse;
export function isUnexpected(
  response: BytesGetNonNull200Response | BytesGetNonNullDefaultResponse
): response is BytesGetNonNullDefaultResponse;
export function isUnexpected(
  response: BytesPatchNonNull204Response | BytesPatchNonNullDefaultResponse
): response is BytesPatchNonNullDefaultResponse;
export function isUnexpected(
  response: BytesGetNull200Response | BytesGetNullDefaultResponse
): response is BytesGetNullDefaultResponse;
export function isUnexpected(
  response: BytesPatchNull204Response | BytesPatchNullDefaultResponse
): response is BytesPatchNullDefaultResponse;
export function isUnexpected(
  response: DatetimeGetNonNull200Response | DatetimeGetNonNullDefaultResponse
): response is DatetimeGetNonNullDefaultResponse;
export function isUnexpected(
  response:
    | DatetimePatchNonNull204Response
    | DatetimePatchNonNullDefaultResponse
): response is DatetimePatchNonNullDefaultResponse;
export function isUnexpected(
  response: DatetimeGetNull200Response | DatetimeGetNullDefaultResponse
): response is DatetimeGetNullDefaultResponse;
export function isUnexpected(
  response: DatetimePatchNull204Response | DatetimePatchNullDefaultResponse
): response is DatetimePatchNullDefaultResponse;
export function isUnexpected(
  response: DurationGetNonNull200Response | DurationGetNonNullDefaultResponse
): response is DurationGetNonNullDefaultResponse;
export function isUnexpected(
  response:
    | DurationPatchNonNull204Response
    | DurationPatchNonNullDefaultResponse
): response is DurationPatchNonNullDefaultResponse;
export function isUnexpected(
  response: DurationGetNull200Response | DurationGetNullDefaultResponse
): response is DurationGetNullDefaultResponse;
export function isUnexpected(
  response: DurationPatchNull204Response | DurationPatchNullDefaultResponse
): response is DurationPatchNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsByteGetNonNull200Response
    | CollectionsByteGetNonNullDefaultResponse
): response is CollectionsByteGetNonNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsBytePatchNonNull204Response
    | CollectionsBytePatchNonNullDefaultResponse
): response is CollectionsBytePatchNonNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsByteGetNull200Response
    | CollectionsByteGetNullDefaultResponse
): response is CollectionsByteGetNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsBytePatchNull204Response
    | CollectionsBytePatchNullDefaultResponse
): response is CollectionsBytePatchNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelGetNonNull200Response
    | CollectionsModelGetNonNullDefaultResponse
): response is CollectionsModelGetNonNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelPatchNonNull204Response
    | CollectionsModelPatchNonNullDefaultResponse
): response is CollectionsModelPatchNonNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelGetNull200Response
    | CollectionsModelGetNullDefaultResponse
): response is CollectionsModelGetNullDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelPatchNull204Response
    | CollectionsModelPatchNullDefaultResponse
): response is CollectionsModelPatchNullDefaultResponse;
export function isUnexpected(
  response:
    | StringModelGetNonNull200Response
    | StringModelGetNonNullDefaultResponse
    | StringModelPatchNonNull204Response
    | StringModelPatchNonNullDefaultResponse
    | StringModelGetNull200Response
    | StringModelGetNullDefaultResponse
    | StringModelPatchNull204Response
    | StringModelPatchNullDefaultResponse
    | BytesGetNonNull200Response
    | BytesGetNonNullDefaultResponse
    | BytesPatchNonNull204Response
    | BytesPatchNonNullDefaultResponse
    | BytesGetNull200Response
    | BytesGetNullDefaultResponse
    | BytesPatchNull204Response
    | BytesPatchNullDefaultResponse
    | DatetimeGetNonNull200Response
    | DatetimeGetNonNullDefaultResponse
    | DatetimePatchNonNull204Response
    | DatetimePatchNonNullDefaultResponse
    | DatetimeGetNull200Response
    | DatetimeGetNullDefaultResponse
    | DatetimePatchNull204Response
    | DatetimePatchNullDefaultResponse
    | DurationGetNonNull200Response
    | DurationGetNonNullDefaultResponse
    | DurationPatchNonNull204Response
    | DurationPatchNonNullDefaultResponse
    | DurationGetNull200Response
    | DurationGetNullDefaultResponse
    | DurationPatchNull204Response
    | DurationPatchNullDefaultResponse
    | CollectionsByteGetNonNull200Response
    | CollectionsByteGetNonNullDefaultResponse
    | CollectionsBytePatchNonNull204Response
    | CollectionsBytePatchNonNullDefaultResponse
    | CollectionsByteGetNull200Response
    | CollectionsByteGetNullDefaultResponse
    | CollectionsBytePatchNull204Response
    | CollectionsBytePatchNullDefaultResponse
    | CollectionsModelGetNonNull200Response
    | CollectionsModelGetNonNullDefaultResponse
    | CollectionsModelPatchNonNull204Response
    | CollectionsModelPatchNonNullDefaultResponse
    | CollectionsModelGetNull200Response
    | CollectionsModelGetNullDefaultResponse
    | CollectionsModelPatchNull204Response
    | CollectionsModelPatchNullDefaultResponse
): response is
  | StringModelGetNonNullDefaultResponse
  | StringModelPatchNonNullDefaultResponse
  | StringModelGetNullDefaultResponse
  | StringModelPatchNullDefaultResponse
  | BytesGetNonNullDefaultResponse
  | BytesPatchNonNullDefaultResponse
  | BytesGetNullDefaultResponse
  | BytesPatchNullDefaultResponse
  | DatetimeGetNonNullDefaultResponse
  | DatetimePatchNonNullDefaultResponse
  | DatetimeGetNullDefaultResponse
  | DatetimePatchNullDefaultResponse
  | DurationGetNonNullDefaultResponse
  | DurationPatchNonNullDefaultResponse
  | DurationGetNullDefaultResponse
  | DurationPatchNullDefaultResponse
  | CollectionsByteGetNonNullDefaultResponse
  | CollectionsBytePatchNonNullDefaultResponse
  | CollectionsByteGetNullDefaultResponse
  | CollectionsBytePatchNullDefaultResponse
  | CollectionsModelGetNonNullDefaultResponse
  | CollectionsModelPatchNonNullDefaultResponse
  | CollectionsModelGetNullDefaultResponse
  | CollectionsModelPatchNullDefaultResponse {
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
