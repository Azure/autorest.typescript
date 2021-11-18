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
  PrimitiveGetDateTimeRfc1123DefaultResponse,
  PrimitivePutDateTimeRfc1123200Response,
  PrimitivePutDateTimeRfc1123DefaultResponse,
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
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface BasicGetValid {
  /** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
  get(
    options?: BasicGetValidParameters
  ): Promise<BasicGetValid200Response | BasicGetValiddefaultResponse>;
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  put(
    options: BasicPutValidParameters
  ): Promise<BasicPutValid200Response | BasicPutValiddefaultResponse>;
}

export interface BasicGetInvalid {
  /** Get a basic complex type that is invalid for the local strong type */
  get(
    options?: BasicGetInvalidParameters
  ): Promise<BasicGetInvalid200Response | BasicGetInvaliddefaultResponse>;
}

export interface BasicGetEmpty {
  /** Get a basic complex type that is empty */
  get(
    options?: BasicGetEmptyParameters
  ): Promise<BasicGetEmpty200Response | BasicGetEmptydefaultResponse>;
}

export interface BasicGetNull {
  /** Get a basic complex type whose properties are null */
  get(
    options?: BasicGetNullParameters
  ): Promise<BasicGetNull200Response | BasicGetNulldefaultResponse>;
}

export interface BasicGetNotProvided {
  /** Get a basic complex type while the server doesn't provide a response payload */
  get(
    options?: BasicGetNotProvidedParameters
  ): Promise<
    BasicGetNotProvided200Response | BasicGetNotProvideddefaultResponse
  >;
}

export interface PrimitiveGetInt {
  /** Get complex types with integer properties */
  get(
    options?: PrimitiveGetIntParameters
  ): Promise<PrimitiveGetInt200Response | PrimitiveGetIntdefaultResponse>;
  /** Put complex types with integer properties */
  put(
    options: PrimitivePutIntParameters
  ): Promise<PrimitivePutInt200Response | PrimitivePutIntdefaultResponse>;
}

export interface PrimitiveGetLong {
  /** Get complex types with long properties */
  get(
    options?: PrimitiveGetLongParameters
  ): Promise<PrimitiveGetLong200Response | PrimitiveGetLongdefaultResponse>;
  /** Put complex types with long properties */
  put(
    options: PrimitivePutLongParameters
  ): Promise<PrimitivePutLong200Response | PrimitivePutLongdefaultResponse>;
}

export interface PrimitiveGetFloat {
  /** Get complex types with float properties */
  get(
    options?: PrimitiveGetFloatParameters
  ): Promise<PrimitiveGetFloat200Response | PrimitiveGetFloatdefaultResponse>;
  /** Put complex types with float properties */
  put(
    options: PrimitivePutFloatParameters
  ): Promise<PrimitivePutFloat200Response | PrimitivePutFloatdefaultResponse>;
}

export interface PrimitiveGetDouble {
  /** Get complex types with double properties */
  get(
    options?: PrimitiveGetDoubleParameters
  ): Promise<PrimitiveGetDouble200Response | PrimitiveGetDoubledefaultResponse>;
  /** Put complex types with double properties */
  put(
    options: PrimitivePutDoubleParameters
  ): Promise<PrimitivePutDouble200Response | PrimitivePutDoubledefaultResponse>;
}

export interface PrimitiveGetBool {
  /** Get complex types with bool properties */
  get(
    options?: PrimitiveGetBoolParameters
  ): Promise<PrimitiveGetBool200Response | PrimitiveGetBooldefaultResponse>;
  /** Put complex types with bool properties */
  put(
    options: PrimitivePutBoolParameters
  ): Promise<PrimitivePutBool200Response | PrimitivePutBooldefaultResponse>;
}

export interface PrimitiveGetString {
  /** Get complex types with string properties */
  get(
    options?: PrimitiveGetStringParameters
  ): Promise<PrimitiveGetString200Response | PrimitiveGetStringdefaultResponse>;
  /** Put complex types with string properties */
  put(
    options: PrimitivePutStringParameters
  ): Promise<PrimitivePutString200Response | PrimitivePutStringdefaultResponse>;
}

export interface PrimitiveGetDate {
  /** Get complex types with date properties */
  get(
    options?: PrimitiveGetDateParameters
  ): Promise<PrimitiveGetDate200Response | PrimitiveGetDatedefaultResponse>;
  /** Put complex types with date properties */
  put(
    options: PrimitivePutDateParameters
  ): Promise<PrimitivePutDate200Response | PrimitivePutDatedefaultResponse>;
}

export interface PrimitiveGetDateTime {
  /** Get complex types with datetime properties */
  get(
    options?: PrimitiveGetDateTimeParameters
  ): Promise<
    PrimitiveGetDateTime200Response | PrimitiveGetDateTimedefaultResponse
  >;
  /** Put complex types with datetime properties */
  put(
    options: PrimitivePutDateTimeParameters
  ): Promise<
    PrimitivePutDateTime200Response | PrimitivePutDateTimedefaultResponse
  >;
}

export interface PrimitiveGetDateTimeRfc1123 {
  /** Get complex types with datetimeRfc1123 properties */
  get(
    options?: PrimitiveGetDateTimeRfc1123Parameters
  ): Promise<
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123DefaultResponse
  >;
  /** Put complex types with datetimeRfc1123 properties */
  put(
    options: PrimitivePutDateTimeRfc1123Parameters
  ): Promise<
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123DefaultResponse
  >;
}

export interface PrimitiveGetDuration {
  /** Get complex types with duration properties */
  get(
    options?: PrimitiveGetDurationParameters
  ): Promise<
    PrimitiveGetDuration200Response | PrimitiveGetDurationdefaultResponse
  >;
  /** Put complex types with duration properties */
  put(
    options: PrimitivePutDurationParameters
  ): Promise<
    PrimitivePutDuration200Response | PrimitivePutDurationdefaultResponse
  >;
}

export interface PrimitiveGetByte {
  /** Get complex types with byte properties */
  get(
    options?: PrimitiveGetByteParameters
  ): Promise<PrimitiveGetByte200Response | PrimitiveGetBytedefaultResponse>;
  /** Put complex types with byte properties */
  put(
    options: PrimitivePutByteParameters
  ): Promise<PrimitivePutByte200Response | PrimitivePutBytedefaultResponse>;
}

export interface ArrayGetValid {
  /** Get complex types with array property */
  get(
    options?: ArrayGetValidParameters
  ): Promise<ArrayGetValid200Response | ArrayGetValiddefaultResponse>;
  /** Put complex types with array property */
  put(
    options: ArrayPutValidParameters
  ): Promise<ArrayPutValid200Response | ArrayPutValiddefaultResponse>;
}

export interface ArrayGetEmpty {
  /** Get complex types with array property which is empty */
  get(
    options?: ArrayGetEmptyParameters
  ): Promise<ArrayGetEmpty200Response | ArrayGetEmptydefaultResponse>;
  /** Put complex types with array property which is empty */
  put(
    options: ArrayPutEmptyParameters
  ): Promise<ArrayPutEmpty200Response | ArrayPutEmptydefaultResponse>;
}

export interface ArrayGetNotProvided {
  /** Get complex types with array property while server doesn't provide a response payload */
  get(
    options?: ArrayGetNotProvidedParameters
  ): Promise<
    ArrayGetNotProvided200Response | ArrayGetNotProvideddefaultResponse
  >;
}

export interface DictionaryGetValid {
  /** Get complex types with dictionary property */
  get(
    options?: DictionaryGetValidParameters
  ): Promise<DictionaryGetValid200Response | DictionaryGetValiddefaultResponse>;
  /** Put complex types with dictionary property */
  put(
    options: DictionaryPutValidParameters
  ): Promise<DictionaryPutValid200Response | DictionaryPutValiddefaultResponse>;
}

export interface DictionaryGetEmpty {
  /** Get complex types with dictionary property which is empty */
  get(
    options?: DictionaryGetEmptyParameters
  ): Promise<DictionaryGetEmpty200Response | DictionaryGetEmptydefaultResponse>;
  /** Put complex types with dictionary property which is empty */
  put(
    options: DictionaryPutEmptyParameters
  ): Promise<DictionaryPutEmpty200Response | DictionaryPutEmptydefaultResponse>;
}

export interface DictionaryGetNull {
  /** Get complex types with dictionary property which is null */
  get(
    options?: DictionaryGetNullParameters
  ): Promise<DictionaryGetNull200Response | DictionaryGetNulldefaultResponse>;
}

export interface DictionaryGetNotProvided {
  /** Get complex types with dictionary property while server doesn't provide a response payload */
  get(
    options?: DictionaryGetNotProvidedParameters
  ): Promise<
    | DictionaryGetNotProvided200Response
    | DictionaryGetNotProvideddefaultResponse
  >;
}

export interface InheritanceGetValid {
  /** Get complex types that extend others */
  get(
    options?: InheritanceGetValidParameters
  ): Promise<
    InheritanceGetValid200Response | InheritanceGetValiddefaultResponse
  >;
  /** Put complex types that extend others */
  put(
    options: InheritancePutValidParameters
  ): Promise<
    InheritancePutValid200Response | InheritancePutValiddefaultResponse
  >;
}

export interface PolymorphismGetValid {
  /** Get complex types that are polymorphic */
  get(
    options?: PolymorphismGetValidParameters
  ): Promise<
    PolymorphismGetValid200Response | PolymorphismGetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic */
  put(
    options: PolymorphismPutValidParameters
  ): Promise<
    PolymorphismPutValid200Response | PolymorphismPutValiddefaultResponse
  >;
}

export interface PolymorphismGetDotSyntax {
  /** Get complex types that are polymorphic, JSON key contains a dot */
  get(
    options?: PolymorphismGetDotSyntaxParameters
  ): Promise<
    | PolymorphismGetDotSyntax200Response
    | PolymorphismGetDotSyntaxdefaultResponse
  >;
}

export interface PolymorphismGetComposedWithDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
  get(
    options?: PolymorphismGetComposedWithDiscriminatorParameters
  ): Promise<
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminatordefaultResponse
  >;
}

export interface PolymorphismGetComposedWithoutDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
  get(
    options?: PolymorphismGetComposedWithoutDiscriminatorParameters
  ): Promise<
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminatordefaultResponse
  >;
}

export interface PolymorphismGetComplicated {
  /** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  get(
    options?: PolymorphismGetComplicatedParameters
  ): Promise<
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicateddefaultResponse
  >;
  /** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  put(
    options: PolymorphismPutComplicatedParameters
  ): Promise<
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicateddefaultResponse
  >;
}

export interface PolymorphismPutMissingDiscriminator {
  /** Put complex types that are polymorphic, omitting the discriminator */
  put(
    options: PolymorphismPutMissingDiscriminatorParameters
  ): Promise<
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminatordefaultResponse
  >;
}

export interface PolymorphismPutValidMissingRequired {
  /** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
  put(
    options: PolymorphismPutValidMissingRequiredParameters
  ): Promise<
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequireddefaultResponse
  >;
}

export interface PolymorphicrecursiveGetValid {
  /** Get complex types that are polymorphic and have recursive references */
  get(
    options?: PolymorphicrecursiveGetValidParameters
  ): Promise<
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic and have recursive references */
  put(
    options: PolymorphicrecursivePutValidParameters
  ): Promise<
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValiddefaultResponse
  >;
}

export interface ReadonlypropertyGetValid {
  /** Get complex types that have readonly properties */
  get(
    options?: ReadonlypropertyGetValidParameters
  ): Promise<
    | ReadonlypropertyGetValid200Response
    | ReadonlypropertyGetValiddefaultResponse
  >;
  /** Put complex types that have readonly properties */
  put(
    options: ReadonlypropertyPutValidParameters
  ): Promise<
    | ReadonlypropertyPutValid200Response
    | ReadonlypropertyPutValiddefaultResponse
  >;
}

export interface FlattencomplexGetValid {
  get(
    options?: FlattencomplexGetValidParameters
  ): Promise<FlattencomplexGetValid200Response>;
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

export type BodyComplexRestClientRestClient = Client & {
  path: Routes;
};

export default function BodyComplexRestClient(
  options: ClientOptions = {}
): BodyComplexRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";
  options.apiVersion = options.apiVersion ?? "2016-02-29";

  return getClient(
    baseUrl,

    options
  ) as BodyComplexRestClientRestClient;
}
