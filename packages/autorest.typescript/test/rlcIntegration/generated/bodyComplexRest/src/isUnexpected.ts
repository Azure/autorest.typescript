// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BasicGetValid200Response,
  BasicGetValidDefaultResponse,
  BasicPutValid200Response,
  BasicPutValidDefaultResponse,
  BasicGetInvalid200Response,
  BasicGetInvalidDefaultResponse,
  BasicGetEmpty200Response,
  BasicGetEmptyDefaultResponse,
  BasicGetNull200Response,
  BasicGetNullDefaultResponse,
  BasicGetNotProvided200Response,
  BasicGetNotProvidedDefaultResponse,
  PrimitiveGetInt200Response,
  PrimitiveGetIntDefaultResponse,
  PrimitivePutInt200Response,
  PrimitivePutIntDefaultResponse,
  PrimitiveGetLong200Response,
  PrimitiveGetLongDefaultResponse,
  PrimitivePutLong200Response,
  PrimitivePutLongDefaultResponse,
  PrimitiveGetFloat200Response,
  PrimitiveGetFloatDefaultResponse,
  PrimitivePutFloat200Response,
  PrimitivePutFloatDefaultResponse,
  PrimitiveGetDouble200Response,
  PrimitiveGetDoubleDefaultResponse,
  PrimitivePutDouble200Response,
  PrimitivePutDoubleDefaultResponse,
  PrimitiveGetBool200Response,
  PrimitiveGetBoolDefaultResponse,
  PrimitivePutBool200Response,
  PrimitivePutBoolDefaultResponse,
  PrimitiveGetString200Response,
  PrimitiveGetStringDefaultResponse,
  PrimitivePutString200Response,
  PrimitivePutStringDefaultResponse,
  PrimitiveGetDate200Response,
  PrimitiveGetDateDefaultResponse,
  PrimitivePutDate200Response,
  PrimitivePutDateDefaultResponse,
  PrimitiveGetDateTime200Response,
  PrimitiveGetDateTimeDefaultResponse,
  PrimitivePutDateTime200Response,
  PrimitivePutDateTimeDefaultResponse,
  PrimitiveGetDateTimeRfc1123200Response,
  PrimitiveGetDateTimeRfc1123DefaultResponse,
  PrimitivePutDateTimeRfc1123200Response,
  PrimitivePutDateTimeRfc1123DefaultResponse,
  PrimitiveGetDuration200Response,
  PrimitiveGetDurationDefaultResponse,
  PrimitivePutDuration200Response,
  PrimitivePutDurationDefaultResponse,
  PrimitiveGetByte200Response,
  PrimitiveGetByteDefaultResponse,
  PrimitivePutByte200Response,
  PrimitivePutByteDefaultResponse,
  ArrayGetValid200Response,
  ArrayGetValidDefaultResponse,
  ArrayPutValid200Response,
  ArrayPutValidDefaultResponse,
  ArrayGetEmpty200Response,
  ArrayGetEmptyDefaultResponse,
  ArrayPutEmpty200Response,
  ArrayPutEmptyDefaultResponse,
  ArrayGetNotProvided200Response,
  ArrayGetNotProvidedDefaultResponse,
  DictionaryGetValid200Response,
  DictionaryGetValidDefaultResponse,
  DictionaryPutValid200Response,
  DictionaryPutValidDefaultResponse,
  DictionaryGetEmpty200Response,
  DictionaryGetEmptyDefaultResponse,
  DictionaryPutEmpty200Response,
  DictionaryPutEmptyDefaultResponse,
  DictionaryGetNull200Response,
  DictionaryGetNullDefaultResponse,
  DictionaryGetNotProvided200Response,
  DictionaryGetNotProvidedDefaultResponse,
  InheritanceGetValid200Response,
  InheritanceGetValidDefaultResponse,
  InheritancePutValid200Response,
  InheritancePutValidDefaultResponse,
  PolymorphismGetValid200Response,
  PolymorphismGetValidDefaultResponse,
  PolymorphismPutValid200Response,
  PolymorphismPutValidDefaultResponse,
  PolymorphismGetDotSyntax200Response,
  PolymorphismGetDotSyntaxDefaultResponse,
  PolymorphismGetComposedWithDiscriminator200Response,
  PolymorphismGetComposedWithDiscriminatorDefaultResponse,
  PolymorphismGetComposedWithoutDiscriminator200Response,
  PolymorphismGetComposedWithoutDiscriminatorDefaultResponse,
  PolymorphismGetComplicated200Response,
  PolymorphismGetComplicatedDefaultResponse,
  PolymorphismPutComplicated200Response,
  PolymorphismPutComplicatedDefaultResponse,
  PolymorphismPutMissingDiscriminator200Response,
  PolymorphismPutMissingDiscriminatorDefaultResponse,
  PolymorphismPutValidMissingRequired200Response,
  PolymorphismPutValidMissingRequiredDefaultResponse,
  PolymorphicrecursiveGetValid200Response,
  PolymorphicrecursiveGetValidDefaultResponse,
  PolymorphicrecursivePutValid200Response,
  PolymorphicrecursivePutValidDefaultResponse,
  ReadonlypropertyGetValid200Response,
  ReadonlypropertyGetValidDefaultResponse,
  ReadonlypropertyPutValid200Response,
  ReadonlypropertyPutValidDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /complex/basic/valid": ["200"],
  "PUT /complex/basic/valid": ["200"],
  "GET /complex/basic/invalid": ["200"],
  "GET /complex/basic/empty": ["200"],
  "GET /complex/basic/null": ["200"],
  "GET /complex/basic/notprovided": ["200"],
  "GET /complex/primitive/integer": ["200"],
  "PUT /complex/primitive/integer": ["200"],
  "GET /complex/primitive/long": ["200"],
  "PUT /complex/primitive/long": ["200"],
  "GET /complex/primitive/float": ["200"],
  "PUT /complex/primitive/float": ["200"],
  "GET /complex/primitive/double": ["200"],
  "PUT /complex/primitive/double": ["200"],
  "GET /complex/primitive/bool": ["200"],
  "PUT /complex/primitive/bool": ["200"],
  "GET /complex/primitive/string": ["200"],
  "PUT /complex/primitive/string": ["200"],
  "GET /complex/primitive/date": ["200"],
  "PUT /complex/primitive/date": ["200"],
  "GET /complex/primitive/datetime": ["200"],
  "PUT /complex/primitive/datetime": ["200"],
  "GET /complex/primitive/datetimerfc1123": ["200"],
  "PUT /complex/primitive/datetimerfc1123": ["200"],
  "GET /complex/primitive/duration": ["200"],
  "PUT /complex/primitive/duration": ["200"],
  "GET /complex/primitive/byte": ["200"],
  "PUT /complex/primitive/byte": ["200"],
  "GET /complex/array/valid": ["200"],
  "PUT /complex/array/valid": ["200"],
  "GET /complex/array/empty": ["200"],
  "PUT /complex/array/empty": ["200"],
  "GET /complex/array/notprovided": ["200"],
  "GET /complex/dictionary/typed/valid": ["200"],
  "PUT /complex/dictionary/typed/valid": ["200"],
  "GET /complex/dictionary/typed/empty": ["200"],
  "PUT /complex/dictionary/typed/empty": ["200"],
  "GET /complex/dictionary/typed/null": ["200"],
  "GET /complex/dictionary/typed/notprovided": ["200"],
  "GET /complex/inheritance/valid": ["200"],
  "PUT /complex/inheritance/valid": ["200"],
  "GET /complex/polymorphism/valid": ["200"],
  "PUT /complex/polymorphism/valid": ["200"],
  "GET /complex/polymorphism/dotsyntax": ["200"],
  "GET /complex/polymorphism/composedWithDiscriminator": ["200"],
  "GET /complex/polymorphism/composedWithoutDiscriminator": ["200"],
  "GET /complex/polymorphism/complicated": ["200"],
  "PUT /complex/polymorphism/complicated": ["200"],
  "PUT /complex/polymorphism/missingdiscriminator": ["200"],
  "PUT /complex/polymorphism/missingrequired/invalid": ["200"],
  "GET /complex/polymorphicrecursive/valid": ["200"],
  "PUT /complex/polymorphicrecursive/valid": ["200"],
  "GET /complex/readonlyproperty/valid": ["200"],
  "PUT /complex/readonlyproperty/valid": ["200"],
  "GET /complex/flatten/valid": ["200"],
};

export function isUnexpected(
  response: BasicGetValid200Response | BasicGetValidDefaultResponse,
): response is BasicGetValidDefaultResponse;
export function isUnexpected(
  response: BasicPutValid200Response | BasicPutValidDefaultResponse,
): response is BasicPutValidDefaultResponse;
export function isUnexpected(
  response: BasicGetInvalid200Response | BasicGetInvalidDefaultResponse,
): response is BasicGetInvalidDefaultResponse;
export function isUnexpected(
  response: BasicGetEmpty200Response | BasicGetEmptyDefaultResponse,
): response is BasicGetEmptyDefaultResponse;
export function isUnexpected(
  response: BasicGetNull200Response | BasicGetNullDefaultResponse,
): response is BasicGetNullDefaultResponse;
export function isUnexpected(
  response: BasicGetNotProvided200Response | BasicGetNotProvidedDefaultResponse,
): response is BasicGetNotProvidedDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetInt200Response | PrimitiveGetIntDefaultResponse,
): response is PrimitiveGetIntDefaultResponse;
export function isUnexpected(
  response: PrimitivePutInt200Response | PrimitivePutIntDefaultResponse,
): response is PrimitivePutIntDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetLong200Response | PrimitiveGetLongDefaultResponse,
): response is PrimitiveGetLongDefaultResponse;
export function isUnexpected(
  response: PrimitivePutLong200Response | PrimitivePutLongDefaultResponse,
): response is PrimitivePutLongDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetFloat200Response | PrimitiveGetFloatDefaultResponse,
): response is PrimitiveGetFloatDefaultResponse;
export function isUnexpected(
  response: PrimitivePutFloat200Response | PrimitivePutFloatDefaultResponse,
): response is PrimitivePutFloatDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetDouble200Response | PrimitiveGetDoubleDefaultResponse,
): response is PrimitiveGetDoubleDefaultResponse;
export function isUnexpected(
  response: PrimitivePutDouble200Response | PrimitivePutDoubleDefaultResponse,
): response is PrimitivePutDoubleDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetBool200Response | PrimitiveGetBoolDefaultResponse,
): response is PrimitiveGetBoolDefaultResponse;
export function isUnexpected(
  response: PrimitivePutBool200Response | PrimitivePutBoolDefaultResponse,
): response is PrimitivePutBoolDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetString200Response | PrimitiveGetStringDefaultResponse,
): response is PrimitiveGetStringDefaultResponse;
export function isUnexpected(
  response: PrimitivePutString200Response | PrimitivePutStringDefaultResponse,
): response is PrimitivePutStringDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetDate200Response | PrimitiveGetDateDefaultResponse,
): response is PrimitiveGetDateDefaultResponse;
export function isUnexpected(
  response: PrimitivePutDate200Response | PrimitivePutDateDefaultResponse,
): response is PrimitivePutDateDefaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDateTime200Response
    | PrimitiveGetDateTimeDefaultResponse,
): response is PrimitiveGetDateTimeDefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDateTime200Response
    | PrimitivePutDateTimeDefaultResponse,
): response is PrimitivePutDateTimeDefaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123DefaultResponse,
): response is PrimitiveGetDateTimeRfc1123DefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123DefaultResponse,
): response is PrimitivePutDateTimeRfc1123DefaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDuration200Response
    | PrimitiveGetDurationDefaultResponse,
): response is PrimitiveGetDurationDefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDuration200Response
    | PrimitivePutDurationDefaultResponse,
): response is PrimitivePutDurationDefaultResponse;
export function isUnexpected(
  response: PrimitiveGetByte200Response | PrimitiveGetByteDefaultResponse,
): response is PrimitiveGetByteDefaultResponse;
export function isUnexpected(
  response: PrimitivePutByte200Response | PrimitivePutByteDefaultResponse,
): response is PrimitivePutByteDefaultResponse;
export function isUnexpected(
  response: ArrayGetValid200Response | ArrayGetValidDefaultResponse,
): response is ArrayGetValidDefaultResponse;
export function isUnexpected(
  response: ArrayPutValid200Response | ArrayPutValidDefaultResponse,
): response is ArrayPutValidDefaultResponse;
export function isUnexpected(
  response: ArrayGetEmpty200Response | ArrayGetEmptyDefaultResponse,
): response is ArrayGetEmptyDefaultResponse;
export function isUnexpected(
  response: ArrayPutEmpty200Response | ArrayPutEmptyDefaultResponse,
): response is ArrayPutEmptyDefaultResponse;
export function isUnexpected(
  response: ArrayGetNotProvided200Response | ArrayGetNotProvidedDefaultResponse,
): response is ArrayGetNotProvidedDefaultResponse;
export function isUnexpected(
  response: DictionaryGetValid200Response | DictionaryGetValidDefaultResponse,
): response is DictionaryGetValidDefaultResponse;
export function isUnexpected(
  response: DictionaryPutValid200Response | DictionaryPutValidDefaultResponse,
): response is DictionaryPutValidDefaultResponse;
export function isUnexpected(
  response: DictionaryGetEmpty200Response | DictionaryGetEmptyDefaultResponse,
): response is DictionaryGetEmptyDefaultResponse;
export function isUnexpected(
  response: DictionaryPutEmpty200Response | DictionaryPutEmptyDefaultResponse,
): response is DictionaryPutEmptyDefaultResponse;
export function isUnexpected(
  response: DictionaryGetNull200Response | DictionaryGetNullDefaultResponse,
): response is DictionaryGetNullDefaultResponse;
export function isUnexpected(
  response:
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvidedDefaultResponse,
): response is DictionaryGetNotProvidedDefaultResponse;
export function isUnexpected(
  response: InheritanceGetValid200Response | InheritanceGetValidDefaultResponse,
): response is InheritanceGetValidDefaultResponse;
export function isUnexpected(
  response: InheritancePutValid200Response | InheritancePutValidDefaultResponse,
): response is InheritancePutValidDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetValid200Response
    | PolymorphismGetValidDefaultResponse,
): response is PolymorphismGetValidDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutValid200Response
    | PolymorphismPutValidDefaultResponse,
): response is PolymorphismPutValidDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxDefaultResponse,
): response is PolymorphismGetDotSyntaxDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatorDefaultResponse,
): response is PolymorphismGetComposedWithDiscriminatorDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatorDefaultResponse,
): response is PolymorphismGetComposedWithoutDiscriminatorDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicatedDefaultResponse,
): response is PolymorphismGetComplicatedDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicatedDefaultResponse,
): response is PolymorphismPutComplicatedDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatorDefaultResponse,
): response is PolymorphismPutMissingDiscriminatorDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequiredDefaultResponse,
): response is PolymorphismPutValidMissingRequiredDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValidDefaultResponse,
): response is PolymorphicrecursiveGetValidDefaultResponse;
export function isUnexpected(
  response:
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValidDefaultResponse,
): response is PolymorphicrecursivePutValidDefaultResponse;
export function isUnexpected(
  response:
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValidDefaultResponse,
): response is ReadonlypropertyGetValidDefaultResponse;
export function isUnexpected(
  response:
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValidDefaultResponse,
): response is ReadonlypropertyPutValidDefaultResponse;
export function isUnexpected(
  response:
    | BasicGetValid200Response
    | BasicGetValidDefaultResponse
    | BasicPutValid200Response
    | BasicPutValidDefaultResponse
    | BasicGetInvalid200Response
    | BasicGetInvalidDefaultResponse
    | BasicGetEmpty200Response
    | BasicGetEmptyDefaultResponse
    | BasicGetNull200Response
    | BasicGetNullDefaultResponse
    | BasicGetNotProvided200Response
    | BasicGetNotProvidedDefaultResponse
    | PrimitiveGetInt200Response
    | PrimitiveGetIntDefaultResponse
    | PrimitivePutInt200Response
    | PrimitivePutIntDefaultResponse
    | PrimitiveGetLong200Response
    | PrimitiveGetLongDefaultResponse
    | PrimitivePutLong200Response
    | PrimitivePutLongDefaultResponse
    | PrimitiveGetFloat200Response
    | PrimitiveGetFloatDefaultResponse
    | PrimitivePutFloat200Response
    | PrimitivePutFloatDefaultResponse
    | PrimitiveGetDouble200Response
    | PrimitiveGetDoubleDefaultResponse
    | PrimitivePutDouble200Response
    | PrimitivePutDoubleDefaultResponse
    | PrimitiveGetBool200Response
    | PrimitiveGetBoolDefaultResponse
    | PrimitivePutBool200Response
    | PrimitivePutBoolDefaultResponse
    | PrimitiveGetString200Response
    | PrimitiveGetStringDefaultResponse
    | PrimitivePutString200Response
    | PrimitivePutStringDefaultResponse
    | PrimitiveGetDate200Response
    | PrimitiveGetDateDefaultResponse
    | PrimitivePutDate200Response
    | PrimitivePutDateDefaultResponse
    | PrimitiveGetDateTime200Response
    | PrimitiveGetDateTimeDefaultResponse
    | PrimitivePutDateTime200Response
    | PrimitivePutDateTimeDefaultResponse
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123DefaultResponse
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123DefaultResponse
    | PrimitiveGetDuration200Response
    | PrimitiveGetDurationDefaultResponse
    | PrimitivePutDuration200Response
    | PrimitivePutDurationDefaultResponse
    | PrimitiveGetByte200Response
    | PrimitiveGetByteDefaultResponse
    | PrimitivePutByte200Response
    | PrimitivePutByteDefaultResponse
    | ArrayGetValid200Response
    | ArrayGetValidDefaultResponse
    | ArrayPutValid200Response
    | ArrayPutValidDefaultResponse
    | ArrayGetEmpty200Response
    | ArrayGetEmptyDefaultResponse
    | ArrayPutEmpty200Response
    | ArrayPutEmptyDefaultResponse
    | ArrayGetNotProvided200Response
    | ArrayGetNotProvidedDefaultResponse
    | DictionaryGetValid200Response
    | DictionaryGetValidDefaultResponse
    | DictionaryPutValid200Response
    | DictionaryPutValidDefaultResponse
    | DictionaryGetEmpty200Response
    | DictionaryGetEmptyDefaultResponse
    | DictionaryPutEmpty200Response
    | DictionaryPutEmptyDefaultResponse
    | DictionaryGetNull200Response
    | DictionaryGetNullDefaultResponse
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvidedDefaultResponse
    | InheritanceGetValid200Response
    | InheritanceGetValidDefaultResponse
    | InheritancePutValid200Response
    | InheritancePutValidDefaultResponse
    | PolymorphismGetValid200Response
    | PolymorphismGetValidDefaultResponse
    | PolymorphismPutValid200Response
    | PolymorphismPutValidDefaultResponse
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxDefaultResponse
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatorDefaultResponse
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatorDefaultResponse
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicatedDefaultResponse
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicatedDefaultResponse
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatorDefaultResponse
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequiredDefaultResponse
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValidDefaultResponse
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValidDefaultResponse
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValidDefaultResponse
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValidDefaultResponse,
): response is
  | BasicGetValidDefaultResponse
  | BasicPutValidDefaultResponse
  | BasicGetInvalidDefaultResponse
  | BasicGetEmptyDefaultResponse
  | BasicGetNullDefaultResponse
  | BasicGetNotProvidedDefaultResponse
  | PrimitiveGetIntDefaultResponse
  | PrimitivePutIntDefaultResponse
  | PrimitiveGetLongDefaultResponse
  | PrimitivePutLongDefaultResponse
  | PrimitiveGetFloatDefaultResponse
  | PrimitivePutFloatDefaultResponse
  | PrimitiveGetDoubleDefaultResponse
  | PrimitivePutDoubleDefaultResponse
  | PrimitiveGetBoolDefaultResponse
  | PrimitivePutBoolDefaultResponse
  | PrimitiveGetStringDefaultResponse
  | PrimitivePutStringDefaultResponse
  | PrimitiveGetDateDefaultResponse
  | PrimitivePutDateDefaultResponse
  | PrimitiveGetDateTimeDefaultResponse
  | PrimitivePutDateTimeDefaultResponse
  | PrimitiveGetDateTimeRfc1123DefaultResponse
  | PrimitivePutDateTimeRfc1123DefaultResponse
  | PrimitiveGetDurationDefaultResponse
  | PrimitivePutDurationDefaultResponse
  | PrimitiveGetByteDefaultResponse
  | PrimitivePutByteDefaultResponse
  | ArrayGetValidDefaultResponse
  | ArrayPutValidDefaultResponse
  | ArrayGetEmptyDefaultResponse
  | ArrayPutEmptyDefaultResponse
  | ArrayGetNotProvidedDefaultResponse
  | DictionaryGetValidDefaultResponse
  | DictionaryPutValidDefaultResponse
  | DictionaryGetEmptyDefaultResponse
  | DictionaryPutEmptyDefaultResponse
  | DictionaryGetNullDefaultResponse
  | DictionaryGetNotProvidedDefaultResponse
  | InheritanceGetValidDefaultResponse
  | InheritancePutValidDefaultResponse
  | PolymorphismGetValidDefaultResponse
  | PolymorphismPutValidDefaultResponse
  | PolymorphismGetDotSyntaxDefaultResponse
  | PolymorphismGetComposedWithDiscriminatorDefaultResponse
  | PolymorphismGetComposedWithoutDiscriminatorDefaultResponse
  | PolymorphismGetComplicatedDefaultResponse
  | PolymorphismPutComplicatedDefaultResponse
  | PolymorphismPutMissingDiscriminatorDefaultResponse
  | PolymorphismPutValidMissingRequiredDefaultResponse
  | PolymorphicrecursiveGetValidDefaultResponse
  | PolymorphicrecursivePutValidDefaultResponse
  | ReadonlypropertyGetValidDefaultResponse
  | ReadonlypropertyPutValidDefaultResponse {
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
