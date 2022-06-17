// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  BasicDefOutput,
  ErrorModelOutput,
  IntWrapperOutput,
  LongWrapperOutput,
  FloatWrapperOutput,
  DoubleWrapperOutput,
  BooleanWrapperOutput,
  StringWrapperOutput,
  DateWrapperOutput,
  DatetimeWrapperOutput,
  Datetimerfc1123WrapperOutput,
  DurationWrapperOutput,
  ByteWrapperOutput,
  ArrayWrapperOutput,
  DictionaryWrapperOutput,
  SiameseOutput,
  FishOutput,
  DotFishOutput,
  DotFishMarketOutput,
  SalmonOutput,
  ReadonlyObjOutput,
  MyBaseTypeOutput
} from "./outputModels";

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicGetValid200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicPutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicGetInvalid200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicGetInvaliddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a basic complex type that is empty */
export interface BasicGetEmpty200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type that is empty */
export interface BasicGetEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a basic complex type whose properties are null */
export interface BasicGetNull200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type whose properties are null */
export interface BasicGetNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: BasicDefOutput;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicGetNotProvideddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with integer properties */
export interface PrimitiveGetInt200Response extends HttpResponse {
  status: "200";
  body: IntWrapperOutput;
}

/** Get complex types with integer properties */
export interface PrimitiveGetIntdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with integer properties */
export interface PrimitivePutInt200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with integer properties */
export interface PrimitivePutIntdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with long properties */
export interface PrimitiveGetLong200Response extends HttpResponse {
  status: "200";
  body: LongWrapperOutput;
}

/** Get complex types with long properties */
export interface PrimitiveGetLongdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with long properties */
export interface PrimitivePutLong200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with long properties */
export interface PrimitivePutLongdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with float properties */
export interface PrimitiveGetFloat200Response extends HttpResponse {
  status: "200";
  body: FloatWrapperOutput;
}

/** Get complex types with float properties */
export interface PrimitiveGetFloatdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with float properties */
export interface PrimitivePutFloat200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with float properties */
export interface PrimitivePutFloatdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with double properties */
export interface PrimitiveGetDouble200Response extends HttpResponse {
  status: "200";
  body: DoubleWrapperOutput;
}

/** Get complex types with double properties */
export interface PrimitiveGetDoubledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with double properties */
export interface PrimitivePutDouble200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with double properties */
export interface PrimitivePutDoubledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with bool properties */
export interface PrimitiveGetBool200Response extends HttpResponse {
  status: "200";
  body: BooleanWrapperOutput;
}

/** Get complex types with bool properties */
export interface PrimitiveGetBooldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with bool properties */
export interface PrimitivePutBool200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with bool properties */
export interface PrimitivePutBooldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with string properties */
export interface PrimitiveGetString200Response extends HttpResponse {
  status: "200";
  body: StringWrapperOutput;
}

/** Get complex types with string properties */
export interface PrimitiveGetStringdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with string properties */
export interface PrimitivePutString200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with string properties */
export interface PrimitivePutStringdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with date properties */
export interface PrimitiveGetDate200Response extends HttpResponse {
  status: "200";
  body: DateWrapperOutput;
}

/** Get complex types with date properties */
export interface PrimitiveGetDatedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with date properties */
export interface PrimitivePutDate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with date properties */
export interface PrimitivePutDatedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with datetime properties */
export interface PrimitiveGetDateTime200Response extends HttpResponse {
  status: "200";
  body: DatetimeWrapperOutput;
}

/** Get complex types with datetime properties */
export interface PrimitiveGetDateTimedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with datetime properties */
export interface PrimitivePutDateTime200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetime properties */
export interface PrimitivePutDateTimedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitiveGetDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Datetimerfc1123WrapperOutput;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitiveGetDateTimeRfc1123defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitivePutDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitivePutDateTimeRfc1123defaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with duration properties */
export interface PrimitiveGetDuration200Response extends HttpResponse {
  status: "200";
  body: DurationWrapperOutput;
}

/** Get complex types with duration properties */
export interface PrimitiveGetDurationdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with duration properties */
export interface PrimitivePutDuration200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with duration properties */
export interface PrimitivePutDurationdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with byte properties */
export interface PrimitiveGetByte200Response extends HttpResponse {
  status: "200";
  body: ByteWrapperOutput;
}

/** Get complex types with byte properties */
export interface PrimitiveGetBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with byte properties */
export interface PrimitivePutByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with byte properties */
export interface PrimitivePutBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with array property */
export interface ArrayGetValid200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property */
export interface ArrayGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with array property */
export interface ArrayPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property */
export interface ArrayPutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with array property which is empty */
export interface ArrayGetEmpty200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property which is empty */
export interface ArrayGetEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with array property which is empty */
export interface ArrayPutEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property which is empty */
export interface ArrayPutEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArrayGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapperOutput;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArrayGetNotProvideddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property */
export interface DictionaryGetValid200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property */
export interface DictionaryGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with dictionary property */
export interface DictionaryPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property */
export interface DictionaryPutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property which is empty */
export interface DictionaryGetEmpty200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property which is empty */
export interface DictionaryGetEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryPutEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryPutEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property which is null */
export interface DictionaryGetNull200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property which is null */
export interface DictionaryGetNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionaryGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapperOutput;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionaryGetNotProvideddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that extend others */
export interface InheritanceGetValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** Get complex types that extend others */
export interface InheritanceGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that extend others */
export interface InheritancePutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that extend others */
export interface InheritancePutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic */
export interface PolymorphismGetValid200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** Get complex types that are polymorphic */
export interface PolymorphismGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic */
export interface PolymorphismPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic */
export interface PolymorphismPutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismGetDotSyntax200Response extends HttpResponse {
  status: "200";
  body: DotFishOutput;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismGetDotSyntaxdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismGetComposedWithDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarketOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismGetComposedWithDiscriminatordefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismGetComposedWithoutDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarketOutput;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismGetComposedWithoutDiscriminatordefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismGetComplicated200Response extends HttpResponse {
  status: "200";
  body: SalmonOutput;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismGetComplicateddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismPutComplicated200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismPutComplicateddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismPutMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: SalmonOutput;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismPutMissingDiscriminatordefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismPutValidMissingRequired200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismPutValidMissingRequireddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveGetValid200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveGetValiddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivePutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivePutValiddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertyGetValid200Response extends HttpResponse {
  status: "200";
  body: ReadonlyObjOutput;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertyGetValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyPutValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface FlattencomplexGetValid200Response extends HttpResponse {
  status: "200";
  body: MyBaseTypeOutput;
}
