// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BasicGetValidParameters,
  BasicPutValidParameters,
  BasicGetInvalidParameters,
  BasicGetEmptyParameters,
  BasicGetNullParameters,
  BasicGetNotProvidedParameters,
  PrimitiveGetIntParameters,
  PrimitivePutIntParameters,
  PrimitiveGetLongParameters,
  PrimitivePutLongParameters,
  PrimitiveGetFloatParameters,
  PrimitivePutFloatParameters,
  PrimitiveGetDoubleParameters,
  PrimitivePutDoubleParameters,
  PrimitiveGetBoolParameters,
  PrimitivePutBoolParameters,
  PrimitiveGetStringParameters,
  PrimitivePutStringParameters,
  PrimitiveGetDateParameters,
  PrimitivePutDateParameters,
  PrimitiveGetDateTimeParameters,
  PrimitivePutDateTimeParameters,
  PrimitiveGetDateTimeRfc1123Parameters,
  PrimitivePutDateTimeRfc1123Parameters,
  PrimitiveGetDurationParameters,
  PrimitivePutDurationParameters,
  PrimitiveGetByteParameters,
  PrimitivePutByteParameters,
  ArrayGetValidParameters,
  ArrayPutValidParameters,
  ArrayGetEmptyParameters,
  ArrayPutEmptyParameters,
  ArrayGetNotProvidedParameters,
  DictionaryGetValidParameters,
  DictionaryPutValidParameters,
  DictionaryGetEmptyParameters,
  DictionaryPutEmptyParameters,
  DictionaryGetNullParameters,
  DictionaryGetNotProvidedParameters,
  InheritanceGetValidParameters,
  InheritancePutValidParameters,
  PolymorphismGetValidParameters,
  PolymorphismPutValidParameters,
  PolymorphismGetDotSyntaxParameters,
  PolymorphismGetComposedWithDiscriminatorParameters,
  PolymorphismGetComposedWithoutDiscriminatorParameters,
  PolymorphismGetComplicatedParameters,
  PolymorphismPutComplicatedParameters,
  PolymorphismPutMissingDiscriminatorParameters,
  PolymorphismPutValidMissingRequiredParameters,
  PolymorphicrecursiveGetValidParameters,
  PolymorphicrecursivePutValidParameters,
  ReadonlypropertyGetValidParameters,
  ReadonlypropertyPutValidParameters,
  FlattencomplexGetValidParameters
} from "./parameters";
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
  ReadonlypropertyPutValiddefaultResponse,
  FlattencomplexGetValid200Response
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BasicGetValid {
  /** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
  get(
    options?: BasicGetValidParameters
  ): StreamableMethod<BasicGetValid200Response | BasicGetValiddefaultResponse>;
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  put(
    options: BasicPutValidParameters
  ): StreamableMethod<BasicPutValid200Response | BasicPutValiddefaultResponse>;
}

export interface BasicGetInvalid {
  /** Get a basic complex type that is invalid for the local strong type */
  get(
    options?: BasicGetInvalidParameters
  ): StreamableMethod<
    BasicGetInvalid200Response | BasicGetInvaliddefaultResponse
  >;
}

export interface BasicGetEmpty {
  /** Get a basic complex type that is empty */
  get(
    options?: BasicGetEmptyParameters
  ): StreamableMethod<BasicGetEmpty200Response | BasicGetEmptydefaultResponse>;
}

export interface BasicGetNull {
  /** Get a basic complex type whose properties are null */
  get(
    options?: BasicGetNullParameters
  ): StreamableMethod<BasicGetNull200Response | BasicGetNulldefaultResponse>;
}

export interface BasicGetNotProvided {
  /** Get a basic complex type while the server doesn't provide a response payload */
  get(
    options?: BasicGetNotProvidedParameters
  ): StreamableMethod<
    BasicGetNotProvided200Response | BasicGetNotProvideddefaultResponse
  >;
}

export interface PrimitiveGetInt {
  /** Get complex types with integer properties */
  get(
    options?: PrimitiveGetIntParameters
  ): StreamableMethod<
    PrimitiveGetInt200Response | PrimitiveGetIntdefaultResponse
  >;
  /** Put complex types with integer properties */
  put(
    options: PrimitivePutIntParameters
  ): StreamableMethod<
    PrimitivePutInt200Response | PrimitivePutIntdefaultResponse
  >;
}

export interface PrimitiveGetLong {
  /** Get complex types with long properties */
  get(
    options?: PrimitiveGetLongParameters
  ): StreamableMethod<
    PrimitiveGetLong200Response | PrimitiveGetLongdefaultResponse
  >;
  /** Put complex types with long properties */
  put(
    options: PrimitivePutLongParameters
  ): StreamableMethod<
    PrimitivePutLong200Response | PrimitivePutLongdefaultResponse
  >;
}

export interface PrimitiveGetFloat {
  /** Get complex types with float properties */
  get(
    options?: PrimitiveGetFloatParameters
  ): StreamableMethod<
    PrimitiveGetFloat200Response | PrimitiveGetFloatdefaultResponse
  >;
  /** Put complex types with float properties */
  put(
    options: PrimitivePutFloatParameters
  ): StreamableMethod<
    PrimitivePutFloat200Response | PrimitivePutFloatdefaultResponse
  >;
}

export interface PrimitiveGetDouble {
  /** Get complex types with double properties */
  get(
    options?: PrimitiveGetDoubleParameters
  ): StreamableMethod<
    PrimitiveGetDouble200Response | PrimitiveGetDoubledefaultResponse
  >;
  /** Put complex types with double properties */
  put(
    options: PrimitivePutDoubleParameters
  ): StreamableMethod<
    PrimitivePutDouble200Response | PrimitivePutDoubledefaultResponse
  >;
}

export interface PrimitiveGetBool {
  /** Get complex types with bool properties */
  get(
    options?: PrimitiveGetBoolParameters
  ): StreamableMethod<
    PrimitiveGetBool200Response | PrimitiveGetBooldefaultResponse
  >;
  /** Put complex types with bool properties */
  put(
    options: PrimitivePutBoolParameters
  ): StreamableMethod<
    PrimitivePutBool200Response | PrimitivePutBooldefaultResponse
  >;
}

export interface PrimitiveGetString {
  /** Get complex types with string properties */
  get(
    options?: PrimitiveGetStringParameters
  ): StreamableMethod<
    PrimitiveGetString200Response | PrimitiveGetStringdefaultResponse
  >;
  /** Put complex types with string properties */
  put(
    options: PrimitivePutStringParameters
  ): StreamableMethod<
    PrimitivePutString200Response | PrimitivePutStringdefaultResponse
  >;
}

export interface PrimitiveGetDate {
  /** Get complex types with date properties */
  get(
    options?: PrimitiveGetDateParameters
  ): StreamableMethod<
    PrimitiveGetDate200Response | PrimitiveGetDatedefaultResponse
  >;
  /** Put complex types with date properties */
  put(
    options: PrimitivePutDateParameters
  ): StreamableMethod<
    PrimitivePutDate200Response | PrimitivePutDatedefaultResponse
  >;
}

export interface PrimitiveGetDateTime {
  /** Get complex types with datetime properties */
  get(
    options?: PrimitiveGetDateTimeParameters
  ): StreamableMethod<
    PrimitiveGetDateTime200Response | PrimitiveGetDateTimedefaultResponse
  >;
  /** Put complex types with datetime properties */
  put(
    options: PrimitivePutDateTimeParameters
  ): StreamableMethod<
    PrimitivePutDateTime200Response | PrimitivePutDateTimedefaultResponse
  >;
}

export interface PrimitiveGetDateTimeRfc1123 {
  /** Get complex types with datetimeRfc1123 properties */
  get(
    options?: PrimitiveGetDateTimeRfc1123Parameters
  ): StreamableMethod<
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123defaultResponse
  >;
  /** Put complex types with datetimeRfc1123 properties */
  put(
    options: PrimitivePutDateTimeRfc1123Parameters
  ): StreamableMethod<
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123defaultResponse
  >;
}

export interface PrimitiveGetDuration {
  /** Get complex types with duration properties */
  get(
    options?: PrimitiveGetDurationParameters
  ): StreamableMethod<
    PrimitiveGetDuration200Response | PrimitiveGetDurationdefaultResponse
  >;
  /** Put complex types with duration properties */
  put(
    options: PrimitivePutDurationParameters
  ): StreamableMethod<
    PrimitivePutDuration200Response | PrimitivePutDurationdefaultResponse
  >;
}

export interface PrimitiveGetByte {
  /** Get complex types with byte properties */
  get(
    options?: PrimitiveGetByteParameters
  ): StreamableMethod<
    PrimitiveGetByte200Response | PrimitiveGetBytedefaultResponse
  >;
  /** Put complex types with byte properties */
  put(
    options: PrimitivePutByteParameters
  ): StreamableMethod<
    PrimitivePutByte200Response | PrimitivePutBytedefaultResponse
  >;
}

export interface ArrayGetValid {
  /** Get complex types with array property */
  get(
    options?: ArrayGetValidParameters
  ): StreamableMethod<ArrayGetValid200Response | ArrayGetValiddefaultResponse>;
  /** Put complex types with array property */
  put(
    options: ArrayPutValidParameters
  ): StreamableMethod<ArrayPutValid200Response | ArrayPutValiddefaultResponse>;
}

export interface ArrayGetEmpty {
  /** Get complex types with array property which is empty */
  get(
    options?: ArrayGetEmptyParameters
  ): StreamableMethod<ArrayGetEmpty200Response | ArrayGetEmptydefaultResponse>;
  /** Put complex types with array property which is empty */
  put(
    options: ArrayPutEmptyParameters
  ): StreamableMethod<ArrayPutEmpty200Response | ArrayPutEmptydefaultResponse>;
}

export interface ArrayGetNotProvided {
  /** Get complex types with array property while server doesn't provide a response payload */
  get(
    options?: ArrayGetNotProvidedParameters
  ): StreamableMethod<
    ArrayGetNotProvided200Response | ArrayGetNotProvideddefaultResponse
  >;
}

export interface DictionaryGetValid {
  /** Get complex types with dictionary property */
  get(
    options?: DictionaryGetValidParameters
  ): StreamableMethod<
    DictionaryGetValid200Response | DictionaryGetValiddefaultResponse
  >;
  /** Put complex types with dictionary property */
  put(
    options: DictionaryPutValidParameters
  ): StreamableMethod<
    DictionaryPutValid200Response | DictionaryPutValiddefaultResponse
  >;
}

export interface DictionaryGetEmpty {
  /** Get complex types with dictionary property which is empty */
  get(
    options?: DictionaryGetEmptyParameters
  ): StreamableMethod<
    DictionaryGetEmpty200Response | DictionaryGetEmptydefaultResponse
  >;
  /** Put complex types with dictionary property which is empty */
  put(
    options: DictionaryPutEmptyParameters
  ): StreamableMethod<
    DictionaryPutEmpty200Response | DictionaryPutEmptydefaultResponse
  >;
}

export interface DictionaryGetNull {
  /** Get complex types with dictionary property which is null */
  get(
    options?: DictionaryGetNullParameters
  ): StreamableMethod<
    DictionaryGetNull200Response | DictionaryGetNulldefaultResponse
  >;
}

export interface DictionaryGetNotProvided {
  /** Get complex types with dictionary property while server doesn't provide a response payload */
  get(
    options?: DictionaryGetNotProvidedParameters
  ): StreamableMethod<
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvideddefaultResponse
  >;
}

export interface InheritanceGetValid {
  /** Get complex types that extend others */
  get(
    options?: InheritanceGetValidParameters
  ): StreamableMethod<
    InheritanceGetValid200Response | InheritanceGetValiddefaultResponse
  >;
  /** Put complex types that extend others */
  put(
    options: InheritancePutValidParameters
  ): StreamableMethod<
    InheritancePutValid200Response | InheritancePutValiddefaultResponse
  >;
}

export interface PolymorphismGetValid {
  /** Get complex types that are polymorphic */
  get(
    options?: PolymorphismGetValidParameters
  ): StreamableMethod<
    PolymorphismGetValid200Response | PolymorphismGetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic */
  put(
    options: PolymorphismPutValidParameters
  ): StreamableMethod<
    PolymorphismPutValid200Response | PolymorphismPutValiddefaultResponse
  >;
}

export interface PolymorphismGetDotSyntax {
  /** Get complex types that are polymorphic, JSON key contains a dot */
  get(
    options?: PolymorphismGetDotSyntaxParameters
  ): StreamableMethod<
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxdefaultResponse
  >;
}

export interface PolymorphismGetComposedWithDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
  get(
    options?: PolymorphismGetComposedWithDiscriminatorParameters
  ): StreamableMethod<
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatordefaultResponse
  >;
}

export interface PolymorphismGetComposedWithoutDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
  get(
    options?: PolymorphismGetComposedWithoutDiscriminatorParameters
  ): StreamableMethod<
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatordefaultResponse
  >;
}

export interface PolymorphismGetComplicated {
  /** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  get(
    options?: PolymorphismGetComplicatedParameters
  ): StreamableMethod<
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicateddefaultResponse
  >;
  /** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  put(
    options: PolymorphismPutComplicatedParameters
  ): StreamableMethod<
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicateddefaultResponse
  >;
}

export interface PolymorphismPutMissingDiscriminator {
  /** Put complex types that are polymorphic, omitting the discriminator */
  put(
    options: PolymorphismPutMissingDiscriminatorParameters
  ): StreamableMethod<
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatordefaultResponse
  >;
}

export interface PolymorphismPutValidMissingRequired {
  /** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
  put(
    options: PolymorphismPutValidMissingRequiredParameters
  ): StreamableMethod<
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequireddefaultResponse
  >;
}

export interface PolymorphicrecursiveGetValid {
  /** Get complex types that are polymorphic and have recursive references */
  get(
    options?: PolymorphicrecursiveGetValidParameters
  ): StreamableMethod<
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic and have recursive references */
  put(
    options: PolymorphicrecursivePutValidParameters
  ): StreamableMethod<
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValiddefaultResponse
  >;
}

export interface ReadonlypropertyGetValid {
  /** Get complex types that have readonly properties */
  get(
    options?: ReadonlypropertyGetValidParameters
  ): StreamableMethod<
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValiddefaultResponse
  >;
  /** Put complex types that have readonly properties */
  put(
    options: ReadonlypropertyPutValidParameters
  ): StreamableMethod<
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValiddefaultResponse
  >;
}

export interface FlattencomplexGetValid {
  get(
    options?: FlattencomplexGetValidParameters
  ): StreamableMethod<FlattencomplexGetValid200Response>;
}

export interface Routes {
  /** Resource for '/complex/basic/valid' has methods for the following verbs: get, put */
  (path: "/complex/basic/valid"): BasicGetValid;
  /** Resource for '/complex/basic/invalid' has methods for the following verbs: get */
  (path: "/complex/basic/invalid"): BasicGetInvalid;
  /** Resource for '/complex/basic/empty' has methods for the following verbs: get */
  (path: "/complex/basic/empty"): BasicGetEmpty;
  /** Resource for '/complex/basic/null' has methods for the following verbs: get */
  (path: "/complex/basic/null"): BasicGetNull;
  /** Resource for '/complex/basic/notprovided' has methods for the following verbs: get */
  (path: "/complex/basic/notprovided"): BasicGetNotProvided;
  /** Resource for '/complex/primitive/integer' has methods for the following verbs: get, put */
  (path: "/complex/primitive/integer"): PrimitiveGetInt;
  /** Resource for '/complex/primitive/long' has methods for the following verbs: get, put */
  (path: "/complex/primitive/long"): PrimitiveGetLong;
  /** Resource for '/complex/primitive/float' has methods for the following verbs: get, put */
  (path: "/complex/primitive/float"): PrimitiveGetFloat;
  /** Resource for '/complex/primitive/double' has methods for the following verbs: get, put */
  (path: "/complex/primitive/double"): PrimitiveGetDouble;
  /** Resource for '/complex/primitive/bool' has methods for the following verbs: get, put */
  (path: "/complex/primitive/bool"): PrimitiveGetBool;
  /** Resource for '/complex/primitive/string' has methods for the following verbs: get, put */
  (path: "/complex/primitive/string"): PrimitiveGetString;
  /** Resource for '/complex/primitive/date' has methods for the following verbs: get, put */
  (path: "/complex/primitive/date"): PrimitiveGetDate;
  /** Resource for '/complex/primitive/datetime' has methods for the following verbs: get, put */
  (path: "/complex/primitive/datetime"): PrimitiveGetDateTime;
  /** Resource for '/complex/primitive/datetimerfc1123' has methods for the following verbs: get, put */
  (path: "/complex/primitive/datetimerfc1123"): PrimitiveGetDateTimeRfc1123;
  /** Resource for '/complex/primitive/duration' has methods for the following verbs: get, put */
  (path: "/complex/primitive/duration"): PrimitiveGetDuration;
  /** Resource for '/complex/primitive/byte' has methods for the following verbs: get, put */
  (path: "/complex/primitive/byte"): PrimitiveGetByte;
  /** Resource for '/complex/array/valid' has methods for the following verbs: get, put */
  (path: "/complex/array/valid"): ArrayGetValid;
  /** Resource for '/complex/array/empty' has methods for the following verbs: get, put */
  (path: "/complex/array/empty"): ArrayGetEmpty;
  /** Resource for '/complex/array/notprovided' has methods for the following verbs: get */
  (path: "/complex/array/notprovided"): ArrayGetNotProvided;
  /** Resource for '/complex/dictionary/typed/valid' has methods for the following verbs: get, put */
  (path: "/complex/dictionary/typed/valid"): DictionaryGetValid;
  /** Resource for '/complex/dictionary/typed/empty' has methods for the following verbs: get, put */
  (path: "/complex/dictionary/typed/empty"): DictionaryGetEmpty;
  /** Resource for '/complex/dictionary/typed/null' has methods for the following verbs: get */
  (path: "/complex/dictionary/typed/null"): DictionaryGetNull;
  /** Resource for '/complex/dictionary/typed/notprovided' has methods for the following verbs: get */
  (path: "/complex/dictionary/typed/notprovided"): DictionaryGetNotProvided;
  /** Resource for '/complex/inheritance/valid' has methods for the following verbs: get, put */
  (path: "/complex/inheritance/valid"): InheritanceGetValid;
  /** Resource for '/complex/polymorphism/valid' has methods for the following verbs: get, put */
  (path: "/complex/polymorphism/valid"): PolymorphismGetValid;
  /** Resource for '/complex/polymorphism/dotsyntax' has methods for the following verbs: get */
  (path: "/complex/polymorphism/dotsyntax"): PolymorphismGetDotSyntax;
  /** Resource for '/complex/polymorphism/composedWithDiscriminator' has methods for the following verbs: get */
  (
    path: "/complex/polymorphism/composedWithDiscriminator"
  ): PolymorphismGetComposedWithDiscriminator;
  /** Resource for '/complex/polymorphism/composedWithoutDiscriminator' has methods for the following verbs: get */
  (
    path: "/complex/polymorphism/composedWithoutDiscriminator"
  ): PolymorphismGetComposedWithoutDiscriminator;
  /** Resource for '/complex/polymorphism/complicated' has methods for the following verbs: get, put */
  (path: "/complex/polymorphism/complicated"): PolymorphismGetComplicated;
  /** Resource for '/complex/polymorphism/missingdiscriminator' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingdiscriminator"
  ): PolymorphismPutMissingDiscriminator;
  /** Resource for '/complex/polymorphism/missingrequired/invalid' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingrequired/invalid"
  ): PolymorphismPutValidMissingRequired;
  /** Resource for '/complex/polymorphicrecursive/valid' has methods for the following verbs: get, put */
  (path: "/complex/polymorphicrecursive/valid"): PolymorphicrecursiveGetValid;
  /** Resource for '/complex/readonlyproperty/valid' has methods for the following verbs: get, put */
  (path: "/complex/readonlyproperty/valid"): ReadonlypropertyGetValid;
  /** Resource for '/complex/flatten/valid' has methods for the following verbs: get */
  (path: "/complex/flatten/valid"): FlattencomplexGetValid;
}

export type BodyComplexRestClient = Client & {
  path: Routes;
};
