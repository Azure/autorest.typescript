// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BooleanModelGet200Response,
  BooleanModelGetDefaultResponse,
  BooleanModelPut204Response,
  BooleanModelPutDefaultResponse,
  StringModelGet200Response,
  StringModelGetDefaultResponse,
  StringModelPut204Response,
  StringModelPutDefaultResponse,
  BytesGet200Response,
  BytesGetDefaultResponse,
  BytesPut204Response,
  BytesPutDefaultResponse,
  IntGet200Response,
  IntGetDefaultResponse,
  IntPut204Response,
  IntPutDefaultResponse,
  FloatGet200Response,
  FloatGetDefaultResponse,
  FloatPut204Response,
  FloatPutDefaultResponse,
  DatetimeGet200Response,
  DatetimeGetDefaultResponse,
  DatetimePut204Response,
  DatetimePutDefaultResponse,
  DurationGet200Response,
  DurationGetDefaultResponse,
  DurationPut204Response,
  DurationPutDefaultResponse,
  EnumGet200Response,
  EnumGetDefaultResponse,
  EnumPut204Response,
  EnumPutDefaultResponse,
  ExtensibleEnumGet200Response,
  ExtensibleEnumGetDefaultResponse,
  ExtensibleEnumPut204Response,
  ExtensibleEnumPutDefaultResponse,
  ModelGet200Response,
  ModelGetDefaultResponse,
  ModelPut204Response,
  ModelPutDefaultResponse,
  CollectionsStringGet200Response,
  CollectionsStringGetDefaultResponse,
  CollectionsStringPut204Response,
  CollectionsStringPutDefaultResponse,
  CollectionsIntGet200Response,
  CollectionsIntGetDefaultResponse,
  CollectionsIntPut204Response,
  CollectionsIntPutDefaultResponse,
  CollectionsModelGet200Response,
  CollectionsModelGetDefaultResponse,
  CollectionsModelPut204Response,
  CollectionsModelPutDefaultResponse,
  DictionaryStringGet200Response,
  DictionaryStringGetDefaultResponse,
  DictionaryStringPut204Response,
  DictionaryStringPutDefaultResponse,
  NeverGet200Response,
  NeverGetDefaultResponse,
  NeverPut204Response,
  NeverPutDefaultResponse,
  UnknownStringGet200Response,
  UnknownStringGetDefaultResponse,
  UnknownStringPut204Response,
  UnknownStringPutDefaultResponse,
  UnknownIntGet200Response,
  UnknownIntGetDefaultResponse,
  UnknownIntPut204Response,
  UnknownIntPutDefaultResponse,
  UnknownDictGet200Response,
  UnknownDictGetDefaultResponse,
  UnknownDictPut204Response,
  UnknownDictPutDefaultResponse,
  UnknownArrayGet200Response,
  UnknownArrayGetDefaultResponse,
  UnknownArrayPut204Response,
  UnknownArrayPutDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /type/property/value-types/boolean": ["200"],
  "PUT /type/property/value-types/boolean": ["204"],
  "GET /type/property/value-types/string": ["200"],
  "PUT /type/property/value-types/string": ["204"],
  "GET /type/property/value-types/bytes": ["200"],
  "PUT /type/property/value-types/bytes": ["204"],
  "GET /type/property/value-types/int": ["200"],
  "PUT /type/property/value-types/int": ["204"],
  "GET /type/property/value-types/float": ["200"],
  "PUT /type/property/value-types/float": ["204"],
  "GET /type/property/value-types/datetime": ["200"],
  "PUT /type/property/value-types/datetime": ["204"],
  "GET /type/property/value-types/duration": ["200"],
  "PUT /type/property/value-types/duration": ["204"],
  "GET /type/property/value-types/enum": ["200"],
  "PUT /type/property/value-types/enum": ["204"],
  "GET /type/property/value-types/extensible-enum": ["200"],
  "PUT /type/property/value-types/extensible-enum": ["204"],
  "GET /type/property/value-types/model": ["200"],
  "PUT /type/property/value-types/model": ["204"],
  "GET /type/property/value-types/collections/string": ["200"],
  "PUT /type/property/value-types/collections/string": ["204"],
  "GET /type/property/value-types/collections/int": ["200"],
  "PUT /type/property/value-types/collections/int": ["204"],
  "GET /type/property/value-types/collections/model": ["200"],
  "PUT /type/property/value-types/collections/model": ["204"],
  "GET /type/property/value-types/dictionary/string": ["200"],
  "PUT /type/property/value-types/dictionary/string": ["204"],
  "GET /type/property/value-types/never": ["200"],
  "PUT /type/property/value-types/never": ["204"],
  "GET /type/property/value-types/unknown/string": ["200"],
  "PUT /type/property/value-types/unknown/string": ["204"],
  "GET /type/property/value-types/unknown/int": ["200"],
  "PUT /type/property/value-types/unknown/int": ["204"],
  "GET /type/property/value-types/unknown/dict": ["200"],
  "PUT /type/property/value-types/unknown/dict": ["204"],
  "GET /type/property/value-types/unknown/array": ["200"],
  "PUT /type/property/value-types/unknown/array": ["204"],
};

export function isUnexpected(
  response: BooleanModelGet200Response | BooleanModelGetDefaultResponse
): response is BooleanModelGetDefaultResponse;
export function isUnexpected(
  response: BooleanModelPut204Response | BooleanModelPutDefaultResponse
): response is BooleanModelPutDefaultResponse;
export function isUnexpected(
  response: StringModelGet200Response | StringModelGetDefaultResponse
): response is StringModelGetDefaultResponse;
export function isUnexpected(
  response: StringModelPut204Response | StringModelPutDefaultResponse
): response is StringModelPutDefaultResponse;
export function isUnexpected(
  response: BytesGet200Response | BytesGetDefaultResponse
): response is BytesGetDefaultResponse;
export function isUnexpected(
  response: BytesPut204Response | BytesPutDefaultResponse
): response is BytesPutDefaultResponse;
export function isUnexpected(
  response: IntGet200Response | IntGetDefaultResponse
): response is IntGetDefaultResponse;
export function isUnexpected(
  response: IntPut204Response | IntPutDefaultResponse
): response is IntPutDefaultResponse;
export function isUnexpected(
  response: FloatGet200Response | FloatGetDefaultResponse
): response is FloatGetDefaultResponse;
export function isUnexpected(
  response: FloatPut204Response | FloatPutDefaultResponse
): response is FloatPutDefaultResponse;
export function isUnexpected(
  response: DatetimeGet200Response | DatetimeGetDefaultResponse
): response is DatetimeGetDefaultResponse;
export function isUnexpected(
  response: DatetimePut204Response | DatetimePutDefaultResponse
): response is DatetimePutDefaultResponse;
export function isUnexpected(
  response: DurationGet200Response | DurationGetDefaultResponse
): response is DurationGetDefaultResponse;
export function isUnexpected(
  response: DurationPut204Response | DurationPutDefaultResponse
): response is DurationPutDefaultResponse;
export function isUnexpected(
  response: EnumGet200Response | EnumGetDefaultResponse
): response is EnumGetDefaultResponse;
export function isUnexpected(
  response: EnumPut204Response | EnumPutDefaultResponse
): response is EnumPutDefaultResponse;
export function isUnexpected(
  response: ExtensibleEnumGet200Response | ExtensibleEnumGetDefaultResponse
): response is ExtensibleEnumGetDefaultResponse;
export function isUnexpected(
  response: ExtensibleEnumPut204Response | ExtensibleEnumPutDefaultResponse
): response is ExtensibleEnumPutDefaultResponse;
export function isUnexpected(
  response: ModelGet200Response | ModelGetDefaultResponse
): response is ModelGetDefaultResponse;
export function isUnexpected(
  response: ModelPut204Response | ModelPutDefaultResponse
): response is ModelPutDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsStringGet200Response
    | CollectionsStringGetDefaultResponse
): response is CollectionsStringGetDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsStringPut204Response
    | CollectionsStringPutDefaultResponse
): response is CollectionsStringPutDefaultResponse;
export function isUnexpected(
  response: CollectionsIntGet200Response | CollectionsIntGetDefaultResponse
): response is CollectionsIntGetDefaultResponse;
export function isUnexpected(
  response: CollectionsIntPut204Response | CollectionsIntPutDefaultResponse
): response is CollectionsIntPutDefaultResponse;
export function isUnexpected(
  response: CollectionsModelGet200Response | CollectionsModelGetDefaultResponse
): response is CollectionsModelGetDefaultResponse;
export function isUnexpected(
  response: CollectionsModelPut204Response | CollectionsModelPutDefaultResponse
): response is CollectionsModelPutDefaultResponse;
export function isUnexpected(
  response: DictionaryStringGet200Response | DictionaryStringGetDefaultResponse
): response is DictionaryStringGetDefaultResponse;
export function isUnexpected(
  response: DictionaryStringPut204Response | DictionaryStringPutDefaultResponse
): response is DictionaryStringPutDefaultResponse;
export function isUnexpected(
  response: NeverGet200Response | NeverGetDefaultResponse
): response is NeverGetDefaultResponse;
export function isUnexpected(
  response: NeverPut204Response | NeverPutDefaultResponse
): response is NeverPutDefaultResponse;
export function isUnexpected(
  response: UnknownStringGet200Response | UnknownStringGetDefaultResponse
): response is UnknownStringGetDefaultResponse;
export function isUnexpected(
  response: UnknownStringPut204Response | UnknownStringPutDefaultResponse
): response is UnknownStringPutDefaultResponse;
export function isUnexpected(
  response: UnknownIntGet200Response | UnknownIntGetDefaultResponse
): response is UnknownIntGetDefaultResponse;
export function isUnexpected(
  response: UnknownIntPut204Response | UnknownIntPutDefaultResponse
): response is UnknownIntPutDefaultResponse;
export function isUnexpected(
  response: UnknownDictGet200Response | UnknownDictGetDefaultResponse
): response is UnknownDictGetDefaultResponse;
export function isUnexpected(
  response: UnknownDictPut204Response | UnknownDictPutDefaultResponse
): response is UnknownDictPutDefaultResponse;
export function isUnexpected(
  response: UnknownArrayGet200Response | UnknownArrayGetDefaultResponse
): response is UnknownArrayGetDefaultResponse;
export function isUnexpected(
  response: UnknownArrayPut204Response | UnknownArrayPutDefaultResponse
): response is UnknownArrayPutDefaultResponse;
export function isUnexpected(
  response:
    | BooleanModelGet200Response
    | BooleanModelGetDefaultResponse
    | BooleanModelPut204Response
    | BooleanModelPutDefaultResponse
    | StringModelGet200Response
    | StringModelGetDefaultResponse
    | StringModelPut204Response
    | StringModelPutDefaultResponse
    | BytesGet200Response
    | BytesGetDefaultResponse
    | BytesPut204Response
    | BytesPutDefaultResponse
    | IntGet200Response
    | IntGetDefaultResponse
    | IntPut204Response
    | IntPutDefaultResponse
    | FloatGet200Response
    | FloatGetDefaultResponse
    | FloatPut204Response
    | FloatPutDefaultResponse
    | DatetimeGet200Response
    | DatetimeGetDefaultResponse
    | DatetimePut204Response
    | DatetimePutDefaultResponse
    | DurationGet200Response
    | DurationGetDefaultResponse
    | DurationPut204Response
    | DurationPutDefaultResponse
    | EnumGet200Response
    | EnumGetDefaultResponse
    | EnumPut204Response
    | EnumPutDefaultResponse
    | ExtensibleEnumGet200Response
    | ExtensibleEnumGetDefaultResponse
    | ExtensibleEnumPut204Response
    | ExtensibleEnumPutDefaultResponse
    | ModelGet200Response
    | ModelGetDefaultResponse
    | ModelPut204Response
    | ModelPutDefaultResponse
    | CollectionsStringGet200Response
    | CollectionsStringGetDefaultResponse
    | CollectionsStringPut204Response
    | CollectionsStringPutDefaultResponse
    | CollectionsIntGet200Response
    | CollectionsIntGetDefaultResponse
    | CollectionsIntPut204Response
    | CollectionsIntPutDefaultResponse
    | CollectionsModelGet200Response
    | CollectionsModelGetDefaultResponse
    | CollectionsModelPut204Response
    | CollectionsModelPutDefaultResponse
    | DictionaryStringGet200Response
    | DictionaryStringGetDefaultResponse
    | DictionaryStringPut204Response
    | DictionaryStringPutDefaultResponse
    | NeverGet200Response
    | NeverGetDefaultResponse
    | NeverPut204Response
    | NeverPutDefaultResponse
    | UnknownStringGet200Response
    | UnknownStringGetDefaultResponse
    | UnknownStringPut204Response
    | UnknownStringPutDefaultResponse
    | UnknownIntGet200Response
    | UnknownIntGetDefaultResponse
    | UnknownIntPut204Response
    | UnknownIntPutDefaultResponse
    | UnknownDictGet200Response
    | UnknownDictGetDefaultResponse
    | UnknownDictPut204Response
    | UnknownDictPutDefaultResponse
    | UnknownArrayGet200Response
    | UnknownArrayGetDefaultResponse
    | UnknownArrayPut204Response
    | UnknownArrayPutDefaultResponse
): response is
  | BooleanModelGetDefaultResponse
  | BooleanModelPutDefaultResponse
  | StringModelGetDefaultResponse
  | StringModelPutDefaultResponse
  | BytesGetDefaultResponse
  | BytesPutDefaultResponse
  | IntGetDefaultResponse
  | IntPutDefaultResponse
  | FloatGetDefaultResponse
  | FloatPutDefaultResponse
  | DatetimeGetDefaultResponse
  | DatetimePutDefaultResponse
  | DurationGetDefaultResponse
  | DurationPutDefaultResponse
  | EnumGetDefaultResponse
  | EnumPutDefaultResponse
  | ExtensibleEnumGetDefaultResponse
  | ExtensibleEnumPutDefaultResponse
  | ModelGetDefaultResponse
  | ModelPutDefaultResponse
  | CollectionsStringGetDefaultResponse
  | CollectionsStringPutDefaultResponse
  | CollectionsIntGetDefaultResponse
  | CollectionsIntPutDefaultResponse
  | CollectionsModelGetDefaultResponse
  | CollectionsModelPutDefaultResponse
  | DictionaryStringGetDefaultResponse
  | DictionaryStringPutDefaultResponse
  | NeverGetDefaultResponse
  | NeverPutDefaultResponse
  | UnknownStringGetDefaultResponse
  | UnknownStringPutDefaultResponse
  | UnknownIntGetDefaultResponse
  | UnknownIntPutDefaultResponse
  | UnknownDictGetDefaultResponse
  | UnknownDictPutDefaultResponse
  | UnknownArrayGetDefaultResponse
  | UnknownArrayPutDefaultResponse {
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
