// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringModelGetAll200Response,
  StringModelGetAllDefaultResponse,
  StringModelPutAll204Response,
  StringModelPutAllDefaultResponse,
  StringModelGetDefault200Response,
  StringModelGetDefaultDefaultResponse,
  StringModelPutDefault204Response,
  StringModelPutDefaultDefaultResponse,
  BytesGetAll200Response,
  BytesGetAllDefaultResponse,
  BytesPutAll204Response,
  BytesPutAllDefaultResponse,
  BytesGetDefault200Response,
  BytesGetDefaultDefaultResponse,
  BytesPutDefault204Response,
  BytesPutDefaultDefaultResponse,
  DatetimeGetAll200Response,
  DatetimeGetAllDefaultResponse,
  DatetimePutAll204Response,
  DatetimePutAllDefaultResponse,
  DatetimeGetDefault200Response,
  DatetimeGetDefaultDefaultResponse,
  DatetimePutDefault204Response,
  DatetimePutDefaultDefaultResponse,
  DurationGetAll200Response,
  DurationGetAllDefaultResponse,
  DurationPutAll204Response,
  DurationPutAllDefaultResponse,
  DurationGetDefault200Response,
  DurationGetDefaultDefaultResponse,
  DurationPutDefault204Response,
  DurationPutDefaultDefaultResponse,
  CollectionsByteGetAll200Response,
  CollectionsByteGetAllDefaultResponse,
  CollectionsBytePutAll204Response,
  CollectionsBytePutAllDefaultResponse,
  CollectionsByteGetDefault200Response,
  CollectionsByteGetDefaultDefaultResponse,
  CollectionsBytePutDefault204Response,
  CollectionsBytePutDefaultDefaultResponse,
  CollectionsModelGetAll200Response,
  CollectionsModelGetAllDefaultResponse,
  CollectionsModelPutAll204Response,
  CollectionsModelPutAllDefaultResponse,
  CollectionsModelGetDefault200Response,
  CollectionsModelGetDefaultDefaultResponse,
  CollectionsModelPutDefault204Response,
  CollectionsModelPutDefaultDefaultResponse,
  RequiredAndOptionalGetAll200Response,
  RequiredAndOptionalGetAllDefaultResponse,
  RequiredAndOptionalPutAll204Response,
  RequiredAndOptionalPutAllDefaultResponse,
  RequiredAndOptionalGetRequiredOnly200Response,
  RequiredAndOptionalGetRequiredOnlyDefaultResponse,
  RequiredAndOptionalPutRequiredOnly204Response,
  RequiredAndOptionalPutRequiredOnlyDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /type/property/optional/string/all": ["200"],
  "PUT /type/property/optional/string/all": ["204"],
  "GET /type/property/optional/string/default": ["200"],
  "PUT /type/property/optional/string/default": ["204"],
  "GET /type/property/optional/bytes/all": ["200"],
  "PUT /type/property/optional/bytes/all": ["204"],
  "GET /type/property/optional/bytes/default": ["200"],
  "PUT /type/property/optional/bytes/default": ["204"],
  "GET /type/property/optional/datetime/all": ["200"],
  "PUT /type/property/optional/datetime/all": ["204"],
  "GET /type/property/optional/datetime/default": ["200"],
  "PUT /type/property/optional/datetime/default": ["204"],
  "GET /type/property/optional/duration/all": ["200"],
  "PUT /type/property/optional/duration/all": ["204"],
  "GET /type/property/optional/duration/default": ["200"],
  "PUT /type/property/optional/duration/default": ["204"],
  "GET /type/property/optional/collections/bytes/all": ["200"],
  "PUT /type/property/optional/collections/bytes/all": ["204"],
  "GET /type/property/optional/collections/bytes/default": ["200"],
  "PUT /type/property/optional/collections/bytes/default": ["204"],
  "GET /type/property/optional/collections/model/all": ["200"],
  "PUT /type/property/optional/collections/model/all": ["204"],
  "GET /type/property/optional/collections/model/default": ["200"],
  "PUT /type/property/optional/collections/model/default": ["204"],
  "GET /type/property/optional/requiredAndOptional/all": ["200"],
  "PUT /type/property/optional/requiredAndOptional/all": ["204"],
  "GET /type/property/optional/requiredAndOptional/requiredOnly": ["200"],
  "PUT /type/property/optional/requiredAndOptional/requiredOnly": ["204"],
};

export function isUnexpected(
  response: StringModelGetAll200Response | StringModelGetAllDefaultResponse
): response is StringModelGetAllDefaultResponse;
export function isUnexpected(
  response: StringModelPutAll204Response | StringModelPutAllDefaultResponse
): response is StringModelPutAllDefaultResponse;
export function isUnexpected(
  response:
    | StringModelGetDefault200Response
    | StringModelGetDefaultDefaultResponse
): response is StringModelGetDefaultDefaultResponse;
export function isUnexpected(
  response:
    | StringModelPutDefault204Response
    | StringModelPutDefaultDefaultResponse
): response is StringModelPutDefaultDefaultResponse;
export function isUnexpected(
  response: BytesGetAll200Response | BytesGetAllDefaultResponse
): response is BytesGetAllDefaultResponse;
export function isUnexpected(
  response: BytesPutAll204Response | BytesPutAllDefaultResponse
): response is BytesPutAllDefaultResponse;
export function isUnexpected(
  response: BytesGetDefault200Response | BytesGetDefaultDefaultResponse
): response is BytesGetDefaultDefaultResponse;
export function isUnexpected(
  response: BytesPutDefault204Response | BytesPutDefaultDefaultResponse
): response is BytesPutDefaultDefaultResponse;
export function isUnexpected(
  response: DatetimeGetAll200Response | DatetimeGetAllDefaultResponse
): response is DatetimeGetAllDefaultResponse;
export function isUnexpected(
  response: DatetimePutAll204Response | DatetimePutAllDefaultResponse
): response is DatetimePutAllDefaultResponse;
export function isUnexpected(
  response: DatetimeGetDefault200Response | DatetimeGetDefaultDefaultResponse
): response is DatetimeGetDefaultDefaultResponse;
export function isUnexpected(
  response: DatetimePutDefault204Response | DatetimePutDefaultDefaultResponse
): response is DatetimePutDefaultDefaultResponse;
export function isUnexpected(
  response: DurationGetAll200Response | DurationGetAllDefaultResponse
): response is DurationGetAllDefaultResponse;
export function isUnexpected(
  response: DurationPutAll204Response | DurationPutAllDefaultResponse
): response is DurationPutAllDefaultResponse;
export function isUnexpected(
  response: DurationGetDefault200Response | DurationGetDefaultDefaultResponse
): response is DurationGetDefaultDefaultResponse;
export function isUnexpected(
  response: DurationPutDefault204Response | DurationPutDefaultDefaultResponse
): response is DurationPutDefaultDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsByteGetAll200Response
    | CollectionsByteGetAllDefaultResponse
): response is CollectionsByteGetAllDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsBytePutAll204Response
    | CollectionsBytePutAllDefaultResponse
): response is CollectionsBytePutAllDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsByteGetDefault200Response
    | CollectionsByteGetDefaultDefaultResponse
): response is CollectionsByteGetDefaultDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsBytePutDefault204Response
    | CollectionsBytePutDefaultDefaultResponse
): response is CollectionsBytePutDefaultDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelGetAll200Response
    | CollectionsModelGetAllDefaultResponse
): response is CollectionsModelGetAllDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelPutAll204Response
    | CollectionsModelPutAllDefaultResponse
): response is CollectionsModelPutAllDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelGetDefault200Response
    | CollectionsModelGetDefaultDefaultResponse
): response is CollectionsModelGetDefaultDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsModelPutDefault204Response
    | CollectionsModelPutDefaultDefaultResponse
): response is CollectionsModelPutDefaultDefaultResponse;
export function isUnexpected(
  response:
    | RequiredAndOptionalGetAll200Response
    | RequiredAndOptionalGetAllDefaultResponse
): response is RequiredAndOptionalGetAllDefaultResponse;
export function isUnexpected(
  response:
    | RequiredAndOptionalPutAll204Response
    | RequiredAndOptionalPutAllDefaultResponse
): response is RequiredAndOptionalPutAllDefaultResponse;
export function isUnexpected(
  response:
    | RequiredAndOptionalGetRequiredOnly200Response
    | RequiredAndOptionalGetRequiredOnlyDefaultResponse
): response is RequiredAndOptionalGetRequiredOnlyDefaultResponse;
export function isUnexpected(
  response:
    | RequiredAndOptionalPutRequiredOnly204Response
    | RequiredAndOptionalPutRequiredOnlyDefaultResponse
): response is RequiredAndOptionalPutRequiredOnlyDefaultResponse;
export function isUnexpected(
  response:
    | StringModelGetAll200Response
    | StringModelGetAllDefaultResponse
    | StringModelPutAll204Response
    | StringModelPutAllDefaultResponse
    | StringModelGetDefault200Response
    | StringModelGetDefaultDefaultResponse
    | StringModelPutDefault204Response
    | StringModelPutDefaultDefaultResponse
    | BytesGetAll200Response
    | BytesGetAllDefaultResponse
    | BytesPutAll204Response
    | BytesPutAllDefaultResponse
    | BytesGetDefault200Response
    | BytesGetDefaultDefaultResponse
    | BytesPutDefault204Response
    | BytesPutDefaultDefaultResponse
    | DatetimeGetAll200Response
    | DatetimeGetAllDefaultResponse
    | DatetimePutAll204Response
    | DatetimePutAllDefaultResponse
    | DatetimeGetDefault200Response
    | DatetimeGetDefaultDefaultResponse
    | DatetimePutDefault204Response
    | DatetimePutDefaultDefaultResponse
    | DurationGetAll200Response
    | DurationGetAllDefaultResponse
    | DurationPutAll204Response
    | DurationPutAllDefaultResponse
    | DurationGetDefault200Response
    | DurationGetDefaultDefaultResponse
    | DurationPutDefault204Response
    | DurationPutDefaultDefaultResponse
    | CollectionsByteGetAll200Response
    | CollectionsByteGetAllDefaultResponse
    | CollectionsBytePutAll204Response
    | CollectionsBytePutAllDefaultResponse
    | CollectionsByteGetDefault200Response
    | CollectionsByteGetDefaultDefaultResponse
    | CollectionsBytePutDefault204Response
    | CollectionsBytePutDefaultDefaultResponse
    | CollectionsModelGetAll200Response
    | CollectionsModelGetAllDefaultResponse
    | CollectionsModelPutAll204Response
    | CollectionsModelPutAllDefaultResponse
    | CollectionsModelGetDefault200Response
    | CollectionsModelGetDefaultDefaultResponse
    | CollectionsModelPutDefault204Response
    | CollectionsModelPutDefaultDefaultResponse
    | RequiredAndOptionalGetAll200Response
    | RequiredAndOptionalGetAllDefaultResponse
    | RequiredAndOptionalPutAll204Response
    | RequiredAndOptionalPutAllDefaultResponse
    | RequiredAndOptionalGetRequiredOnly200Response
    | RequiredAndOptionalGetRequiredOnlyDefaultResponse
    | RequiredAndOptionalPutRequiredOnly204Response
    | RequiredAndOptionalPutRequiredOnlyDefaultResponse
): response is
  | StringModelGetAllDefaultResponse
  | StringModelPutAllDefaultResponse
  | StringModelGetDefaultDefaultResponse
  | StringModelPutDefaultDefaultResponse
  | BytesGetAllDefaultResponse
  | BytesPutAllDefaultResponse
  | BytesGetDefaultDefaultResponse
  | BytesPutDefaultDefaultResponse
  | DatetimeGetAllDefaultResponse
  | DatetimePutAllDefaultResponse
  | DatetimeGetDefaultDefaultResponse
  | DatetimePutDefaultDefaultResponse
  | DurationGetAllDefaultResponse
  | DurationPutAllDefaultResponse
  | DurationGetDefaultDefaultResponse
  | DurationPutDefaultDefaultResponse
  | CollectionsByteGetAllDefaultResponse
  | CollectionsBytePutAllDefaultResponse
  | CollectionsByteGetDefaultDefaultResponse
  | CollectionsBytePutDefaultDefaultResponse
  | CollectionsModelGetAllDefaultResponse
  | CollectionsModelPutAllDefaultResponse
  | CollectionsModelGetDefaultDefaultResponse
  | CollectionsModelPutDefaultDefaultResponse
  | RequiredAndOptionalGetAllDefaultResponse
  | RequiredAndOptionalPutAllDefaultResponse
  | RequiredAndOptionalGetRequiredOnlyDefaultResponse
  | RequiredAndOptionalPutRequiredOnlyDefaultResponse {
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
