// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import {
  BasicDef,
  ErrorModel,
  IntWrapper,
  LongWrapper,
  FloatWrapper,
  DoubleWrapper,
  BooleanWrapper,
  StringWrapper,
  DateWrapper,
  DatetimeWrapper,
  Datetimerfc1123Wrapper,
  DurationWrapper,
  ByteWrapper,
  ArrayWrapper,
  DictionaryWrapper,
  Siamese,
  Fish,
  DotFish,
  DotFishMarket,
  Salmon,
  ReadonlyObj,
  MyBaseType
} from "./models";

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicGetValid200Response extends HttpResponse {
  status: "200";
  body: BasicDef;
}

/** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
export interface BasicGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Please put {id: 2, name: 'abc', color: 'Magenta'} */
export interface BasicPutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicGetInvalid200Response extends HttpResponse {
  status: "200";
  body: BasicDef;
}

/** Get a basic complex type that is invalid for the local strong type */
export interface BasicGetInvalid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get a basic complex type that is empty */
export interface BasicGetEmpty200Response extends HttpResponse {
  status: "200";
  body: BasicDef;
}

/** Get a basic complex type that is empty */
export interface BasicGetEmpty500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get a basic complex type whose properties are null */
export interface BasicGetNull200Response extends HttpResponse {
  status: "200";
  body: BasicDef;
}

/** Get a basic complex type whose properties are null */
export interface BasicGetNull500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: BasicDef;
}

/** Get a basic complex type while the server doesn't provide a response payload */
export interface BasicGetNotProvided500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with integer properties */
export interface PrimitiveGetInt200Response extends HttpResponse {
  status: "200";
  body: IntWrapper;
}

/** Get complex types with integer properties */
export interface PrimitiveGetInt500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with integer properties */
export interface PrimitivePutInt200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with integer properties */
export interface PrimitivePutInt500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with long properties */
export interface PrimitiveGetLong200Response extends HttpResponse {
  status: "200";
  body: LongWrapper;
}

/** Get complex types with long properties */
export interface PrimitiveGetLong500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with long properties */
export interface PrimitivePutLong200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with long properties */
export interface PrimitivePutLong500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with float properties */
export interface PrimitiveGetFloat200Response extends HttpResponse {
  status: "200";
  body: FloatWrapper;
}

/** Get complex types with float properties */
export interface PrimitiveGetFloat500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with float properties */
export interface PrimitivePutFloat200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with float properties */
export interface PrimitivePutFloat500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with double properties */
export interface PrimitiveGetDouble200Response extends HttpResponse {
  status: "200";
  body: DoubleWrapper;
}

/** Get complex types with double properties */
export interface PrimitiveGetDouble500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with double properties */
export interface PrimitivePutDouble200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with double properties */
export interface PrimitivePutDouble500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with bool properties */
export interface PrimitiveGetBool200Response extends HttpResponse {
  status: "200";
  body: BooleanWrapper;
}

/** Get complex types with bool properties */
export interface PrimitiveGetBool500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with bool properties */
export interface PrimitivePutBool200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with bool properties */
export interface PrimitivePutBool500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with string properties */
export interface PrimitiveGetString200Response extends HttpResponse {
  status: "200";
  body: StringWrapper;
}

/** Get complex types with string properties */
export interface PrimitiveGetString500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with string properties */
export interface PrimitivePutString200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with string properties */
export interface PrimitivePutString500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with date properties */
export interface PrimitiveGetDate200Response extends HttpResponse {
  status: "200";
  body: DateWrapper;
}

/** Get complex types with date properties */
export interface PrimitiveGetDate500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with date properties */
export interface PrimitivePutDate200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with date properties */
export interface PrimitivePutDate500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with datetime properties */
export interface PrimitiveGetDateTime200Response extends HttpResponse {
  status: "200";
  body: DatetimeWrapper;
}

/** Get complex types with datetime properties */
export interface PrimitiveGetDateTime500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with datetime properties */
export interface PrimitivePutDateTime200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetime properties */
export interface PrimitivePutDateTime500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitiveGetDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Datetimerfc1123Wrapper;
}

/** Get complex types with datetimeRfc1123 properties */
export interface PrimitiveGetDateTimeRfc1123500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitivePutDateTimeRfc1123200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with datetimeRfc1123 properties */
export interface PrimitivePutDateTimeRfc1123500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with duration properties */
export interface PrimitiveGetDuration200Response extends HttpResponse {
  status: "200";
  body: DurationWrapper;
}

/** Get complex types with duration properties */
export interface PrimitiveGetDuration500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with duration properties */
export interface PrimitivePutDuration200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with duration properties */
export interface PrimitivePutDuration500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with byte properties */
export interface PrimitiveGetByte200Response extends HttpResponse {
  status: "200";
  body: ByteWrapper;
}

/** Get complex types with byte properties */
export interface PrimitiveGetByte500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with byte properties */
export interface PrimitivePutByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with byte properties */
export interface PrimitivePutByte500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with array property */
export interface ArrayGetValid200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapper;
}

/** Get complex types with array property */
export interface ArrayGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with array property */
export interface ArrayPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property */
export interface ArrayPutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with array property which is empty */
export interface ArrayGetEmpty200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapper;
}

/** Get complex types with array property which is empty */
export interface ArrayGetEmpty500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with array property which is empty */
export interface ArrayPutEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with array property which is empty */
export interface ArrayPutEmpty500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArrayGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: ArrayWrapper;
}

/** Get complex types with array property while server doesn't provide a response payload */
export interface ArrayGetNotProvided500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with dictionary property */
export interface DictionaryGetValid200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapper;
}

/** Get complex types with dictionary property */
export interface DictionaryGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with dictionary property */
export interface DictionaryPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property */
export interface DictionaryPutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with dictionary property which is empty */
export interface DictionaryGetEmpty200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapper;
}

/** Get complex types with dictionary property which is empty */
export interface DictionaryGetEmpty500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryPutEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types with dictionary property which is empty */
export interface DictionaryPutEmpty500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with dictionary property which is null */
export interface DictionaryGetNull200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapper;
}

/** Get complex types with dictionary property which is null */
export interface DictionaryGetNull500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionaryGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: DictionaryWrapper;
}

/** Get complex types with dictionary property while server doesn't provide a response payload */
export interface DictionaryGetNotProvided500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that extend others */
export interface InheritanceGetValid200Response extends HttpResponse {
  status: "200";
  body: Siamese;
}

/** Get complex types that extend others */
export interface InheritanceGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that extend others */
export interface InheritancePutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that extend others */
export interface InheritancePutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that are polymorphic */
export interface PolymorphismGetValid200Response extends HttpResponse {
  status: "200";
  body: Fish;
}

/** Get complex types that are polymorphic */
export interface PolymorphismGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that are polymorphic */
export interface PolymorphismPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic */
export interface PolymorphismPutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismGetDotSyntax200Response extends HttpResponse {
  status: "200";
  body: DotFish;
}

/** Get complex types that are polymorphic, JSON key contains a dot */
export interface PolymorphismGetDotSyntax500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismGetComposedWithDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarket;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
export interface PolymorphismGetComposedWithDiscriminator500Response
  extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismGetComposedWithoutDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DotFishMarket;
}

/** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
export interface PolymorphismGetComposedWithoutDiscriminator500Response
  extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismGetComplicated200Response extends HttpResponse {
  status: "200";
  body: Salmon;
}

/** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismGetComplicated500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismPutComplicated200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
export interface PolymorphismPutComplicated500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismPutMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: Salmon;
}

/** Put complex types that are polymorphic, omitting the discriminator */
export interface PolymorphismPutMissingDiscriminator500Response
  extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismPutValidMissingRequired200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
export interface PolymorphismPutValidMissingRequired500Response
  extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveGetValid200Response extends HttpResponse {
  status: "200";
  body: Fish;
}

/** Get complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursiveGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivePutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that are polymorphic and have recursive references */
export interface PolymorphicrecursivePutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertyGetValid200Response extends HttpResponse {
  status: "200";
  body: ReadonlyObj;
}

/** Get complex types that have readonly properties */
export interface ReadonlypropertyGetValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyPutValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put complex types that have readonly properties */
export interface ReadonlypropertyPutValid500Response extends HttpResponse {
  status: "500";
  body: ErrorModel;
}

export interface FlattencomplexGetValid200Response extends HttpResponse {
  status: "200";
  body: MyBaseType;
}
