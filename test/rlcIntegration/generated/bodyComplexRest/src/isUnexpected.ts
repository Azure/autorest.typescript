// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BasicGetValid200Response,
  BasicGetValiddefaultResponse,
  BasicPutValid200Response,
  BasicPutValiddefaultResponse,
  BasicGetInvalid200Response,
  BasicGetInvaliddefaultResponse,
  BasicGetEmpty200Response,
  BasicGetEmptydefaultResponse,
  BasicGetNull200Response,
  BasicGetNulldefaultResponse,
  BasicGetNotProvided200Response,
  BasicGetNotProvideddefaultResponse,
  PrimitiveGetInt200Response,
  PrimitiveGetIntdefaultResponse,
  PrimitivePutInt200Response,
  PrimitivePutIntdefaultResponse,
  PrimitiveGetLong200Response,
  PrimitiveGetLongdefaultResponse,
  PrimitivePutLong200Response,
  PrimitivePutLongdefaultResponse,
  PrimitiveGetFloat200Response,
  PrimitiveGetFloatdefaultResponse,
  PrimitivePutFloat200Response,
  PrimitivePutFloatdefaultResponse,
  PrimitiveGetDouble200Response,
  PrimitiveGetDoubledefaultResponse,
  PrimitivePutDouble200Response,
  PrimitivePutDoubledefaultResponse,
  PrimitiveGetBool200Response,
  PrimitiveGetBooldefaultResponse,
  PrimitivePutBool200Response,
  PrimitivePutBooldefaultResponse,
  PrimitiveGetString200Response,
  PrimitiveGetStringdefaultResponse,
  PrimitivePutString200Response,
  PrimitivePutStringdefaultResponse,
  PrimitiveGetDate200Response,
  PrimitiveGetDatedefaultResponse,
  PrimitivePutDate200Response,
  PrimitivePutDatedefaultResponse,
  PrimitiveGetDateTime200Response,
  PrimitiveGetDateTimedefaultResponse,
  PrimitivePutDateTime200Response,
  PrimitivePutDateTimedefaultResponse,
  PrimitiveGetDateTimeRfc1123200Response,
  PrimitiveGetDateTimeRfc1123defaultResponse,
  PrimitivePutDateTimeRfc1123200Response,
  PrimitivePutDateTimeRfc1123defaultResponse,
  PrimitiveGetDuration200Response,
  PrimitiveGetDurationdefaultResponse,
  PrimitivePutDuration200Response,
  PrimitivePutDurationdefaultResponse,
  PrimitiveGetByte200Response,
  PrimitiveGetBytedefaultResponse,
  PrimitivePutByte200Response,
  PrimitivePutBytedefaultResponse,
  ArrayGetValid200Response,
  ArrayGetValiddefaultResponse,
  ArrayPutValid200Response,
  ArrayPutValiddefaultResponse,
  ArrayGetEmpty200Response,
  ArrayGetEmptydefaultResponse,
  ArrayPutEmpty200Response,
  ArrayPutEmptydefaultResponse,
  ArrayGetNotProvided200Response,
  ArrayGetNotProvideddefaultResponse,
  DictionaryGetValid200Response,
  DictionaryGetValiddefaultResponse,
  DictionaryPutValid200Response,
  DictionaryPutValiddefaultResponse,
  DictionaryGetEmpty200Response,
  DictionaryGetEmptydefaultResponse,
  DictionaryPutEmpty200Response,
  DictionaryPutEmptydefaultResponse,
  DictionaryGetNull200Response,
  DictionaryGetNulldefaultResponse,
  DictionaryGetNotProvided200Response,
  DictionaryGetNotProvideddefaultResponse,
  InheritanceGetValid200Response,
  InheritanceGetValiddefaultResponse,
  InheritancePutValid200Response,
  InheritancePutValiddefaultResponse,
  PolymorphismGetValid200Response,
  PolymorphismGetValiddefaultResponse,
  PolymorphismPutValid200Response,
  PolymorphismPutValiddefaultResponse,
  PolymorphismGetDotSyntax200Response,
  PolymorphismGetDotSyntaxdefaultResponse,
  PolymorphismGetComposedWithDiscriminator200Response,
  PolymorphismGetComposedWithDiscriminatordefaultResponse,
  PolymorphismGetComposedWithoutDiscriminator200Response,
  PolymorphismGetComposedWithoutDiscriminatordefaultResponse,
  PolymorphismGetComplicated200Response,
  PolymorphismGetComplicateddefaultResponse,
  PolymorphismPutComplicated200Response,
  PolymorphismPutComplicateddefaultResponse,
  PolymorphismPutMissingDiscriminator200Response,
  PolymorphismPutMissingDiscriminatordefaultResponse,
  PolymorphismPutValidMissingRequired200Response,
  PolymorphismPutValidMissingRequireddefaultResponse,
  PolymorphicrecursiveGetValid200Response,
  PolymorphicrecursiveGetValiddefaultResponse,
  PolymorphicrecursivePutValid200Response,
  PolymorphicrecursivePutValiddefaultResponse,
  ReadonlypropertyGetValid200Response,
  ReadonlypropertyGetValiddefaultResponse,
  ReadonlypropertyPutValid200Response,
  ReadonlypropertyPutValiddefaultResponse
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
  "GET /complex/flatten/valid": ["200"]
};

export function isUnexpected(
  response: BasicGetValid200Response | BasicGetValiddefaultResponse
): response is BasicGetValiddefaultResponse;
export function isUnexpected(
  response: BasicPutValid200Response | BasicPutValiddefaultResponse
): response is BasicPutValiddefaultResponse;
export function isUnexpected(
  response: BasicGetInvalid200Response | BasicGetInvaliddefaultResponse
): response is BasicGetInvaliddefaultResponse;
export function isUnexpected(
  response: BasicGetEmpty200Response | BasicGetEmptydefaultResponse
): response is BasicGetEmptydefaultResponse;
export function isUnexpected(
  response: BasicGetNull200Response | BasicGetNulldefaultResponse
): response is BasicGetNulldefaultResponse;
export function isUnexpected(
  response: BasicGetNotProvided200Response | BasicGetNotProvideddefaultResponse
): response is BasicGetNotProvideddefaultResponse;
export function isUnexpected(
  response: PrimitiveGetInt200Response | PrimitiveGetIntdefaultResponse
): response is PrimitiveGetIntdefaultResponse;
export function isUnexpected(
  response: PrimitivePutInt200Response | PrimitivePutIntdefaultResponse
): response is PrimitivePutIntdefaultResponse;
export function isUnexpected(
  response: PrimitiveGetLong200Response | PrimitiveGetLongdefaultResponse
): response is PrimitiveGetLongdefaultResponse;
export function isUnexpected(
  response: PrimitivePutLong200Response | PrimitivePutLongdefaultResponse
): response is PrimitivePutLongdefaultResponse;
export function isUnexpected(
  response: PrimitiveGetFloat200Response | PrimitiveGetFloatdefaultResponse
): response is PrimitiveGetFloatdefaultResponse;
export function isUnexpected(
  response: PrimitivePutFloat200Response | PrimitivePutFloatdefaultResponse
): response is PrimitivePutFloatdefaultResponse;
export function isUnexpected(
  response: PrimitiveGetDouble200Response | PrimitiveGetDoubledefaultResponse
): response is PrimitiveGetDoubledefaultResponse;
export function isUnexpected(
  response: PrimitivePutDouble200Response | PrimitivePutDoubledefaultResponse
): response is PrimitivePutDoubledefaultResponse;
export function isUnexpected(
  response: PrimitiveGetBool200Response | PrimitiveGetBooldefaultResponse
): response is PrimitiveGetBooldefaultResponse;
export function isUnexpected(
  response: PrimitivePutBool200Response | PrimitivePutBooldefaultResponse
): response is PrimitivePutBooldefaultResponse;
export function isUnexpected(
  response: PrimitiveGetString200Response | PrimitiveGetStringdefaultResponse
): response is PrimitiveGetStringdefaultResponse;
export function isUnexpected(
  response: PrimitivePutString200Response | PrimitivePutStringdefaultResponse
): response is PrimitivePutStringdefaultResponse;
export function isUnexpected(
  response: PrimitiveGetDate200Response | PrimitiveGetDatedefaultResponse
): response is PrimitiveGetDatedefaultResponse;
export function isUnexpected(
  response: PrimitivePutDate200Response | PrimitivePutDatedefaultResponse
): response is PrimitivePutDatedefaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDateTime200Response
    | PrimitiveGetDateTimedefaultResponse
): response is PrimitiveGetDateTimedefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDateTime200Response
    | PrimitivePutDateTimedefaultResponse
): response is PrimitivePutDateTimedefaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123defaultResponse
): response is PrimitiveGetDateTimeRfc1123defaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123defaultResponse
): response is PrimitivePutDateTimeRfc1123defaultResponse;
export function isUnexpected(
  response:
    | PrimitiveGetDuration200Response
    | PrimitiveGetDurationdefaultResponse
): response is PrimitiveGetDurationdefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePutDuration200Response
    | PrimitivePutDurationdefaultResponse
): response is PrimitivePutDurationdefaultResponse;
export function isUnexpected(
  response: PrimitiveGetByte200Response | PrimitiveGetBytedefaultResponse
): response is PrimitiveGetBytedefaultResponse;
export function isUnexpected(
  response: PrimitivePutByte200Response | PrimitivePutBytedefaultResponse
): response is PrimitivePutBytedefaultResponse;
export function isUnexpected(
  response: ArrayGetValid200Response | ArrayGetValiddefaultResponse
): response is ArrayGetValiddefaultResponse;
export function isUnexpected(
  response: ArrayPutValid200Response | ArrayPutValiddefaultResponse
): response is ArrayPutValiddefaultResponse;
export function isUnexpected(
  response: ArrayGetEmpty200Response | ArrayGetEmptydefaultResponse
): response is ArrayGetEmptydefaultResponse;
export function isUnexpected(
  response: ArrayPutEmpty200Response | ArrayPutEmptydefaultResponse
): response is ArrayPutEmptydefaultResponse;
export function isUnexpected(
  response: ArrayGetNotProvided200Response | ArrayGetNotProvideddefaultResponse
): response is ArrayGetNotProvideddefaultResponse;
export function isUnexpected(
  response: DictionaryGetValid200Response | DictionaryGetValiddefaultResponse
): response is DictionaryGetValiddefaultResponse;
export function isUnexpected(
  response: DictionaryPutValid200Response | DictionaryPutValiddefaultResponse
): response is DictionaryPutValiddefaultResponse;
export function isUnexpected(
  response: DictionaryGetEmpty200Response | DictionaryGetEmptydefaultResponse
): response is DictionaryGetEmptydefaultResponse;
export function isUnexpected(
  response: DictionaryPutEmpty200Response | DictionaryPutEmptydefaultResponse
): response is DictionaryPutEmptydefaultResponse;
export function isUnexpected(
  response: DictionaryGetNull200Response | DictionaryGetNulldefaultResponse
): response is DictionaryGetNulldefaultResponse;
export function isUnexpected(
  response:
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvideddefaultResponse
): response is DictionaryGetNotProvideddefaultResponse;
export function isUnexpected(
  response: InheritanceGetValid200Response | InheritanceGetValiddefaultResponse
): response is InheritanceGetValiddefaultResponse;
export function isUnexpected(
  response: InheritancePutValid200Response | InheritancePutValiddefaultResponse
): response is InheritancePutValiddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetValid200Response
    | PolymorphismGetValiddefaultResponse
): response is PolymorphismGetValiddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutValid200Response
    | PolymorphismPutValiddefaultResponse
): response is PolymorphismPutValiddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxdefaultResponse
): response is PolymorphismGetDotSyntaxdefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatordefaultResponse
): response is PolymorphismGetComposedWithDiscriminatordefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatordefaultResponse
): response is PolymorphismGetComposedWithoutDiscriminatordefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicateddefaultResponse
): response is PolymorphismGetComplicateddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicateddefaultResponse
): response is PolymorphismPutComplicateddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatordefaultResponse
): response is PolymorphismPutMissingDiscriminatordefaultResponse;
export function isUnexpected(
  response:
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequireddefaultResponse
): response is PolymorphismPutValidMissingRequireddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValiddefaultResponse
): response is PolymorphicrecursiveGetValiddefaultResponse;
export function isUnexpected(
  response:
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValiddefaultResponse
): response is PolymorphicrecursivePutValiddefaultResponse;
export function isUnexpected(
  response:
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValiddefaultResponse
): response is ReadonlypropertyGetValiddefaultResponse;
export function isUnexpected(
  response:
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValiddefaultResponse
): response is ReadonlypropertyPutValiddefaultResponse;
export function isUnexpected(
  response:
    | BasicGetValid200Response
    | BasicGetValiddefaultResponse
    | BasicPutValid200Response
    | BasicPutValiddefaultResponse
    | BasicGetInvalid200Response
    | BasicGetInvaliddefaultResponse
    | BasicGetEmpty200Response
    | BasicGetEmptydefaultResponse
    | BasicGetNull200Response
    | BasicGetNulldefaultResponse
    | BasicGetNotProvided200Response
    | BasicGetNotProvideddefaultResponse
    | PrimitiveGetInt200Response
    | PrimitiveGetIntdefaultResponse
    | PrimitivePutInt200Response
    | PrimitivePutIntdefaultResponse
    | PrimitiveGetLong200Response
    | PrimitiveGetLongdefaultResponse
    | PrimitivePutLong200Response
    | PrimitivePutLongdefaultResponse
    | PrimitiveGetFloat200Response
    | PrimitiveGetFloatdefaultResponse
    | PrimitivePutFloat200Response
    | PrimitivePutFloatdefaultResponse
    | PrimitiveGetDouble200Response
    | PrimitiveGetDoubledefaultResponse
    | PrimitivePutDouble200Response
    | PrimitivePutDoubledefaultResponse
    | PrimitiveGetBool200Response
    | PrimitiveGetBooldefaultResponse
    | PrimitivePutBool200Response
    | PrimitivePutBooldefaultResponse
    | PrimitiveGetString200Response
    | PrimitiveGetStringdefaultResponse
    | PrimitivePutString200Response
    | PrimitivePutStringdefaultResponse
    | PrimitiveGetDate200Response
    | PrimitiveGetDatedefaultResponse
    | PrimitivePutDate200Response
    | PrimitivePutDatedefaultResponse
    | PrimitiveGetDateTime200Response
    | PrimitiveGetDateTimedefaultResponse
    | PrimitivePutDateTime200Response
    | PrimitivePutDateTimedefaultResponse
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123defaultResponse
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123defaultResponse
    | PrimitiveGetDuration200Response
    | PrimitiveGetDurationdefaultResponse
    | PrimitivePutDuration200Response
    | PrimitivePutDurationdefaultResponse
    | PrimitiveGetByte200Response
    | PrimitiveGetBytedefaultResponse
    | PrimitivePutByte200Response
    | PrimitivePutBytedefaultResponse
    | ArrayGetValid200Response
    | ArrayGetValiddefaultResponse
    | ArrayPutValid200Response
    | ArrayPutValiddefaultResponse
    | ArrayGetEmpty200Response
    | ArrayGetEmptydefaultResponse
    | ArrayPutEmpty200Response
    | ArrayPutEmptydefaultResponse
    | ArrayGetNotProvided200Response
    | ArrayGetNotProvideddefaultResponse
    | DictionaryGetValid200Response
    | DictionaryGetValiddefaultResponse
    | DictionaryPutValid200Response
    | DictionaryPutValiddefaultResponse
    | DictionaryGetEmpty200Response
    | DictionaryGetEmptydefaultResponse
    | DictionaryPutEmpty200Response
    | DictionaryPutEmptydefaultResponse
    | DictionaryGetNull200Response
    | DictionaryGetNulldefaultResponse
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvideddefaultResponse
    | InheritanceGetValid200Response
    | InheritanceGetValiddefaultResponse
    | InheritancePutValid200Response
    | InheritancePutValiddefaultResponse
    | PolymorphismGetValid200Response
    | PolymorphismGetValiddefaultResponse
    | PolymorphismPutValid200Response
    | PolymorphismPutValiddefaultResponse
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxdefaultResponse
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatordefaultResponse
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatordefaultResponse
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicateddefaultResponse
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicateddefaultResponse
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatordefaultResponse
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequireddefaultResponse
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValiddefaultResponse
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValiddefaultResponse
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValiddefaultResponse
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValiddefaultResponse
): response is
  | BasicGetValiddefaultResponse
  | BasicPutValiddefaultResponse
  | BasicGetInvaliddefaultResponse
  | BasicGetEmptydefaultResponse
  | BasicGetNulldefaultResponse
  | BasicGetNotProvideddefaultResponse
  | PrimitiveGetIntdefaultResponse
  | PrimitivePutIntdefaultResponse
  | PrimitiveGetLongdefaultResponse
  | PrimitivePutLongdefaultResponse
  | PrimitiveGetFloatdefaultResponse
  | PrimitivePutFloatdefaultResponse
  | PrimitiveGetDoubledefaultResponse
  | PrimitivePutDoubledefaultResponse
  | PrimitiveGetBooldefaultResponse
  | PrimitivePutBooldefaultResponse
  | PrimitiveGetStringdefaultResponse
  | PrimitivePutStringdefaultResponse
  | PrimitiveGetDatedefaultResponse
  | PrimitivePutDatedefaultResponse
  | PrimitiveGetDateTimedefaultResponse
  | PrimitivePutDateTimedefaultResponse
  | PrimitiveGetDateTimeRfc1123defaultResponse
  | PrimitivePutDateTimeRfc1123defaultResponse
  | PrimitiveGetDurationdefaultResponse
  | PrimitivePutDurationdefaultResponse
  | PrimitiveGetBytedefaultResponse
  | PrimitivePutBytedefaultResponse
  | ArrayGetValiddefaultResponse
  | ArrayPutValiddefaultResponse
  | ArrayGetEmptydefaultResponse
  | ArrayPutEmptydefaultResponse
  | ArrayGetNotProvideddefaultResponse
  | DictionaryGetValiddefaultResponse
  | DictionaryPutValiddefaultResponse
  | DictionaryGetEmptydefaultResponse
  | DictionaryPutEmptydefaultResponse
  | DictionaryGetNulldefaultResponse
  | DictionaryGetNotProvideddefaultResponse
  | InheritanceGetValiddefaultResponse
  | InheritancePutValiddefaultResponse
  | PolymorphismGetValiddefaultResponse
  | PolymorphismPutValiddefaultResponse
  | PolymorphismGetDotSyntaxdefaultResponse
  | PolymorphismGetComposedWithDiscriminatordefaultResponse
  | PolymorphismGetComposedWithoutDiscriminatordefaultResponse
  | PolymorphismGetComplicateddefaultResponse
  | PolymorphismPutComplicateddefaultResponse
  | PolymorphismPutMissingDiscriminatordefaultResponse
  | PolymorphismPutValidMissingRequireddefaultResponse
  | PolymorphicrecursiveGetValiddefaultResponse
  | PolymorphicrecursivePutValiddefaultResponse
  | ReadonlypropertyGetValiddefaultResponse
  | ReadonlypropertyPutValiddefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
