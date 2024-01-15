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
  FlattencomplexGetValidParameters,
} from "./parameters";
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
  FlattencomplexGetValid200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface BasicGetValid {
  /** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
  get(
    options?: BasicGetValidParameters,
  ): StreamableMethod<BasicGetValid200Response | BasicGetValidDefaultResponse>;
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  put(
    options: BasicPutValidParameters,
  ): StreamableMethod<BasicPutValid200Response | BasicPutValidDefaultResponse>;
}

export interface BasicGetInvalid {
  /** Get a basic complex type that is invalid for the local strong type */
  get(
    options?: BasicGetInvalidParameters,
  ): StreamableMethod<
    BasicGetInvalid200Response | BasicGetInvalidDefaultResponse
  >;
}

export interface BasicGetEmpty {
  /** Get a basic complex type that is empty */
  get(
    options?: BasicGetEmptyParameters,
  ): StreamableMethod<BasicGetEmpty200Response | BasicGetEmptyDefaultResponse>;
}

export interface BasicGetNull {
  /** Get a basic complex type whose properties are null */
  get(
    options?: BasicGetNullParameters,
  ): StreamableMethod<BasicGetNull200Response | BasicGetNullDefaultResponse>;
}

export interface BasicGetNotProvided {
  /** Get a basic complex type while the server doesn't provide a response payload */
  get(
    options?: BasicGetNotProvidedParameters,
  ): StreamableMethod<
    BasicGetNotProvided200Response | BasicGetNotProvidedDefaultResponse
  >;
}

export interface PrimitiveGetInt {
  /** Get complex types with integer properties */
  get(
    options?: PrimitiveGetIntParameters,
  ): StreamableMethod<
    PrimitiveGetInt200Response | PrimitiveGetIntDefaultResponse
  >;
  /** Put complex types with integer properties */
  put(
    options: PrimitivePutIntParameters,
  ): StreamableMethod<
    PrimitivePutInt200Response | PrimitivePutIntDefaultResponse
  >;
}

export interface PrimitiveGetLong {
  /** Get complex types with long properties */
  get(
    options?: PrimitiveGetLongParameters,
  ): StreamableMethod<
    PrimitiveGetLong200Response | PrimitiveGetLongDefaultResponse
  >;
  /** Put complex types with long properties */
  put(
    options: PrimitivePutLongParameters,
  ): StreamableMethod<
    PrimitivePutLong200Response | PrimitivePutLongDefaultResponse
  >;
}

export interface PrimitiveGetFloat {
  /** Get complex types with float properties */
  get(
    options?: PrimitiveGetFloatParameters,
  ): StreamableMethod<
    PrimitiveGetFloat200Response | PrimitiveGetFloatDefaultResponse
  >;
  /** Put complex types with float properties */
  put(
    options: PrimitivePutFloatParameters,
  ): StreamableMethod<
    PrimitivePutFloat200Response | PrimitivePutFloatDefaultResponse
  >;
}

export interface PrimitiveGetDouble {
  /** Get complex types with double properties */
  get(
    options?: PrimitiveGetDoubleParameters,
  ): StreamableMethod<
    PrimitiveGetDouble200Response | PrimitiveGetDoubleDefaultResponse
  >;
  /** Put complex types with double properties */
  put(
    options: PrimitivePutDoubleParameters,
  ): StreamableMethod<
    PrimitivePutDouble200Response | PrimitivePutDoubleDefaultResponse
  >;
}

export interface PrimitiveGetBool {
  /** Get complex types with bool properties */
  get(
    options?: PrimitiveGetBoolParameters,
  ): StreamableMethod<
    PrimitiveGetBool200Response | PrimitiveGetBoolDefaultResponse
  >;
  /** Put complex types with bool properties */
  put(
    options: PrimitivePutBoolParameters,
  ): StreamableMethod<
    PrimitivePutBool200Response | PrimitivePutBoolDefaultResponse
  >;
}

export interface PrimitiveGetString {
  /** Get complex types with string properties */
  get(
    options?: PrimitiveGetStringParameters,
  ): StreamableMethod<
    PrimitiveGetString200Response | PrimitiveGetStringDefaultResponse
  >;
  /** Put complex types with string properties */
  put(
    options: PrimitivePutStringParameters,
  ): StreamableMethod<
    PrimitivePutString200Response | PrimitivePutStringDefaultResponse
  >;
}

export interface PrimitiveGetDate {
  /** Get complex types with date properties */
  get(
    options?: PrimitiveGetDateParameters,
  ): StreamableMethod<
    PrimitiveGetDate200Response | PrimitiveGetDateDefaultResponse
  >;
  /** Put complex types with date properties */
  put(
    options: PrimitivePutDateParameters,
  ): StreamableMethod<
    PrimitivePutDate200Response | PrimitivePutDateDefaultResponse
  >;
}

export interface PrimitiveGetDateTime {
  /** Get complex types with datetime properties */
  get(
    options?: PrimitiveGetDateTimeParameters,
  ): StreamableMethod<
    PrimitiveGetDateTime200Response | PrimitiveGetDateTimeDefaultResponse
  >;
  /** Put complex types with datetime properties */
  put(
    options: PrimitivePutDateTimeParameters,
  ): StreamableMethod<
    PrimitivePutDateTime200Response | PrimitivePutDateTimeDefaultResponse
  >;
}

export interface PrimitiveGetDateTimeRfc1123 {
  /** Get complex types with datetimeRfc1123 properties */
  get(
    options?: PrimitiveGetDateTimeRfc1123Parameters,
  ): StreamableMethod<
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123DefaultResponse
  >;
  /** Put complex types with datetimeRfc1123 properties */
  put(
    options: PrimitivePutDateTimeRfc1123Parameters,
  ): StreamableMethod<
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123DefaultResponse
  >;
}

export interface PrimitiveGetDuration {
  /** Get complex types with duration properties */
  get(
    options?: PrimitiveGetDurationParameters,
  ): StreamableMethod<
    PrimitiveGetDuration200Response | PrimitiveGetDurationDefaultResponse
  >;
  /** Put complex types with duration properties */
  put(
    options: PrimitivePutDurationParameters,
  ): StreamableMethod<
    PrimitivePutDuration200Response | PrimitivePutDurationDefaultResponse
  >;
}

export interface PrimitiveGetByte {
  /** Get complex types with byte properties */
  get(
    options?: PrimitiveGetByteParameters,
  ): StreamableMethod<
    PrimitiveGetByte200Response | PrimitiveGetByteDefaultResponse
  >;
  /** Put complex types with byte properties */
  put(
    options: PrimitivePutByteParameters,
  ): StreamableMethod<
    PrimitivePutByte200Response | PrimitivePutByteDefaultResponse
  >;
}

export interface ArrayGetValid {
  /** Get complex types with array property */
  get(
    options?: ArrayGetValidParameters,
  ): StreamableMethod<ArrayGetValid200Response | ArrayGetValidDefaultResponse>;
  /** Put complex types with array property */
  put(
    options: ArrayPutValidParameters,
  ): StreamableMethod<ArrayPutValid200Response | ArrayPutValidDefaultResponse>;
}

export interface ArrayGetEmpty {
  /** Get complex types with array property which is empty */
  get(
    options?: ArrayGetEmptyParameters,
  ): StreamableMethod<ArrayGetEmpty200Response | ArrayGetEmptyDefaultResponse>;
  /** Put complex types with array property which is empty */
  put(
    options: ArrayPutEmptyParameters,
  ): StreamableMethod<ArrayPutEmpty200Response | ArrayPutEmptyDefaultResponse>;
}

export interface ArrayGetNotProvided {
  /** Get complex types with array property while server doesn't provide a response payload */
  get(
    options?: ArrayGetNotProvidedParameters,
  ): StreamableMethod<
    ArrayGetNotProvided200Response | ArrayGetNotProvidedDefaultResponse
  >;
}

export interface DictionaryGetValid {
  /** Get complex types with dictionary property */
  get(
    options?: DictionaryGetValidParameters,
  ): StreamableMethod<
    DictionaryGetValid200Response | DictionaryGetValidDefaultResponse
  >;
  /** Put complex types with dictionary property */
  put(
    options: DictionaryPutValidParameters,
  ): StreamableMethod<
    DictionaryPutValid200Response | DictionaryPutValidDefaultResponse
  >;
}

export interface DictionaryGetEmpty {
  /** Get complex types with dictionary property which is empty */
  get(
    options?: DictionaryGetEmptyParameters,
  ): StreamableMethod<
    DictionaryGetEmpty200Response | DictionaryGetEmptyDefaultResponse
  >;
  /** Put complex types with dictionary property which is empty */
  put(
    options: DictionaryPutEmptyParameters,
  ): StreamableMethod<
    DictionaryPutEmpty200Response | DictionaryPutEmptyDefaultResponse
  >;
}

export interface DictionaryGetNull {
  /** Get complex types with dictionary property which is null */
  get(
    options?: DictionaryGetNullParameters,
  ): StreamableMethod<
    DictionaryGetNull200Response | DictionaryGetNullDefaultResponse
  >;
}

export interface DictionaryGetNotProvided {
  /** Get complex types with dictionary property while server doesn't provide a response payload */
  get(
    options?: DictionaryGetNotProvidedParameters,
  ): StreamableMethod<
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvidedDefaultResponse
  >;
}

export interface InheritanceGetValid {
  /** Get complex types that extend others */
  get(
    options?: InheritanceGetValidParameters,
  ): StreamableMethod<
    InheritanceGetValid200Response | InheritanceGetValidDefaultResponse
  >;
  /** Put complex types that extend others */
  put(
    options: InheritancePutValidParameters,
  ): StreamableMethod<
    InheritancePutValid200Response | InheritancePutValidDefaultResponse
  >;
}

export interface PolymorphismGetValid {
  /** Get complex types that are polymorphic */
  get(
    options?: PolymorphismGetValidParameters,
  ): StreamableMethod<
    PolymorphismGetValid200Response | PolymorphismGetValidDefaultResponse
  >;
  /** Put complex types that are polymorphic */
  put(
    options: PolymorphismPutValidParameters,
  ): StreamableMethod<
    PolymorphismPutValid200Response | PolymorphismPutValidDefaultResponse
  >;
}

export interface PolymorphismGetDotSyntax {
  /** Get complex types that are polymorphic, JSON key contains a dot */
  get(
    options?: PolymorphismGetDotSyntaxParameters,
  ): StreamableMethod<
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxDefaultResponse
  >;
}

export interface PolymorphismGetComposedWithDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
  get(
    options?: PolymorphismGetComposedWithDiscriminatorParameters,
  ): StreamableMethod<
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatorDefaultResponse
  >;
}

export interface PolymorphismGetComposedWithoutDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
  get(
    options?: PolymorphismGetComposedWithoutDiscriminatorParameters,
  ): StreamableMethod<
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatorDefaultResponse
  >;
}

export interface PolymorphismGetComplicated {
  /** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  get(
    options?: PolymorphismGetComplicatedParameters,
  ): StreamableMethod<
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicatedDefaultResponse
  >;
  /** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  put(
    options: PolymorphismPutComplicatedParameters,
  ): StreamableMethod<
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicatedDefaultResponse
  >;
}

export interface PolymorphismPutMissingDiscriminator {
  /** Put complex types that are polymorphic, omitting the discriminator */
  put(
    options: PolymorphismPutMissingDiscriminatorParameters,
  ): StreamableMethod<
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatorDefaultResponse
  >;
}

export interface PolymorphismPutValidMissingRequired {
  /** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
  put(
    options: PolymorphismPutValidMissingRequiredParameters,
  ): StreamableMethod<
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequiredDefaultResponse
  >;
}

export interface PolymorphicrecursiveGetValid {
  /** Get complex types that are polymorphic and have recursive references */
  get(
    options?: PolymorphicrecursiveGetValidParameters,
  ): StreamableMethod<
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValidDefaultResponse
  >;
  /** Put complex types that are polymorphic and have recursive references */
  put(
    options: PolymorphicrecursivePutValidParameters,
  ): StreamableMethod<
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValidDefaultResponse
  >;
}

export interface ReadonlypropertyGetValid {
  /** Get complex types that have readonly properties */
  get(
    options?: ReadonlypropertyGetValidParameters,
  ): StreamableMethod<
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValidDefaultResponse
  >;
  /** Put complex types that have readonly properties */
  put(
    options: ReadonlypropertyPutValidParameters,
  ): StreamableMethod<
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValidDefaultResponse
  >;
}

export interface FlattencomplexGetValid {
  get(
    options?: FlattencomplexGetValidParameters,
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
    path: "/complex/polymorphism/composedWithDiscriminator",
  ): PolymorphismGetComposedWithDiscriminator;
  /** Resource for '/complex/polymorphism/composedWithoutDiscriminator' has methods for the following verbs: get */
  (
    path: "/complex/polymorphism/composedWithoutDiscriminator",
  ): PolymorphismGetComposedWithoutDiscriminator;
  /** Resource for '/complex/polymorphism/complicated' has methods for the following verbs: get, put */
  (path: "/complex/polymorphism/complicated"): PolymorphismGetComplicated;
  /** Resource for '/complex/polymorphism/missingdiscriminator' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingdiscriminator",
  ): PolymorphismPutMissingDiscriminator;
  /** Resource for '/complex/polymorphism/missingrequired/invalid' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingrequired/invalid",
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
