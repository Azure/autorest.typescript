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
  BasicGetValid500Response,
  BasicPutValid200Response,
  BasicPutValid500Response,
  BasicGetInvalid200Response,
  BasicGetInvalid500Response,
  BasicGetEmpty200Response,
  BasicGetEmpty500Response,
  BasicGetNull200Response,
  BasicGetNull500Response,
  BasicGetNotProvided200Response,
  BasicGetNotProvided500Response,
  PrimitiveGetInt200Response,
  PrimitiveGetInt500Response,
  PrimitivePutInt200Response,
  PrimitivePutInt500Response,
  PrimitiveGetLong200Response,
  PrimitiveGetLong500Response,
  PrimitivePutLong200Response,
  PrimitivePutLong500Response,
  PrimitiveGetFloat200Response,
  PrimitiveGetFloat500Response,
  PrimitivePutFloat200Response,
  PrimitivePutFloat500Response,
  PrimitiveGetDouble200Response,
  PrimitiveGetDouble500Response,
  PrimitivePutDouble200Response,
  PrimitivePutDouble500Response,
  PrimitiveGetBool200Response,
  PrimitiveGetBool500Response,
  PrimitivePutBool200Response,
  PrimitivePutBool500Response,
  PrimitiveGetString200Response,
  PrimitiveGetString500Response,
  PrimitivePutString200Response,
  PrimitivePutString500Response,
  PrimitiveGetDate200Response,
  PrimitiveGetDate500Response,
  PrimitivePutDate200Response,
  PrimitivePutDate500Response,
  PrimitiveGetDateTime200Response,
  PrimitiveGetDateTime500Response,
  PrimitivePutDateTime200Response,
  PrimitivePutDateTime500Response,
  PrimitiveGetDateTimeRfc1123200Response,
  PrimitiveGetDateTimeRfc1123500Response,
  PrimitivePutDateTimeRfc1123200Response,
  PrimitivePutDateTimeRfc1123500Response,
  PrimitiveGetDuration200Response,
  PrimitiveGetDuration500Response,
  PrimitivePutDuration200Response,
  PrimitivePutDuration500Response,
  PrimitiveGetByte200Response,
  PrimitiveGetByte500Response,
  PrimitivePutByte200Response,
  PrimitivePutByte500Response,
  ArrayGetValid200Response,
  ArrayGetValid500Response,
  ArrayPutValid200Response,
  ArrayPutValid500Response,
  ArrayGetEmpty200Response,
  ArrayGetEmpty500Response,
  ArrayPutEmpty200Response,
  ArrayPutEmpty500Response,
  ArrayGetNotProvided200Response,
  ArrayGetNotProvided500Response,
  DictionaryGetValid200Response,
  DictionaryGetValid500Response,
  DictionaryPutValid200Response,
  DictionaryPutValid500Response,
  DictionaryGetEmpty200Response,
  DictionaryGetEmpty500Response,
  DictionaryPutEmpty200Response,
  DictionaryPutEmpty500Response,
  DictionaryGetNull200Response,
  DictionaryGetNull500Response,
  DictionaryGetNotProvided200Response,
  DictionaryGetNotProvided500Response,
  InheritanceGetValid200Response,
  InheritanceGetValid500Response,
  InheritancePutValid200Response,
  InheritancePutValid500Response,
  PolymorphismGetValid200Response,
  PolymorphismGetValid500Response,
  PolymorphismPutValid200Response,
  PolymorphismPutValid500Response,
  PolymorphismGetDotSyntax200Response,
  PolymorphismGetDotSyntax500Response,
  PolymorphismGetComposedWithDiscriminator200Response,
  PolymorphismGetComposedWithDiscriminator500Response,
  PolymorphismGetComposedWithoutDiscriminator200Response,
  PolymorphismGetComposedWithoutDiscriminator500Response,
  PolymorphismGetComplicated200Response,
  PolymorphismGetComplicated500Response,
  PolymorphismPutComplicated200Response,
  PolymorphismPutComplicated500Response,
  PolymorphismPutMissingDiscriminator200Response,
  PolymorphismPutMissingDiscriminator500Response,
  PolymorphismPutValidMissingRequired200Response,
  PolymorphismPutValidMissingRequired500Response,
  PolymorphicrecursiveGetValid200Response,
  PolymorphicrecursiveGetValid500Response,
  PolymorphicrecursivePutValid200Response,
  PolymorphicrecursivePutValid500Response,
  ReadonlypropertyGetValid200Response,
  ReadonlypropertyGetValid500Response,
  ReadonlypropertyPutValid200Response,
  ReadonlypropertyPutValid500Response,
  FlattencomplexGetValid200Response
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface BasicGetValid {
  /** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
  get(
    options?: BasicGetValidParameters
  ): Promise<BasicGetValid200Response | BasicGetValid500Response>;
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  put(
    options: BasicPutValidParameters
  ): Promise<BasicPutValid200Response | BasicPutValid500Response>;
}

export interface BasicGetInvalid {
  /** Get a basic complex type that is invalid for the local strong type */
  get(
    options?: BasicGetInvalidParameters
  ): Promise<BasicGetInvalid200Response | BasicGetInvalid500Response>;
}

export interface BasicGetEmpty {
  /** Get a basic complex type that is empty */
  get(
    options?: BasicGetEmptyParameters
  ): Promise<BasicGetEmpty200Response | BasicGetEmpty500Response>;
}

export interface BasicGetNull {
  /** Get a basic complex type whose properties are null */
  get(
    options?: BasicGetNullParameters
  ): Promise<BasicGetNull200Response | BasicGetNull500Response>;
}

export interface BasicGetNotProvided {
  /** Get a basic complex type while the server doesn't provide a response payload */
  get(
    options?: BasicGetNotProvidedParameters
  ): Promise<BasicGetNotProvided200Response | BasicGetNotProvided500Response>;
}

export interface PrimitiveGetInt {
  /** Get complex types with integer properties */
  get(
    options?: PrimitiveGetIntParameters
  ): Promise<PrimitiveGetInt200Response | PrimitiveGetInt500Response>;
  /** Put complex types with integer properties */
  put(
    options: PrimitivePutIntParameters
  ): Promise<PrimitivePutInt200Response | PrimitivePutInt500Response>;
}

export interface PrimitiveGetLong {
  /** Get complex types with long properties */
  get(
    options?: PrimitiveGetLongParameters
  ): Promise<PrimitiveGetLong200Response | PrimitiveGetLong500Response>;
  /** Put complex types with long properties */
  put(
    options: PrimitivePutLongParameters
  ): Promise<PrimitivePutLong200Response | PrimitivePutLong500Response>;
}

export interface PrimitiveGetFloat {
  /** Get complex types with float properties */
  get(
    options?: PrimitiveGetFloatParameters
  ): Promise<PrimitiveGetFloat200Response | PrimitiveGetFloat500Response>;
  /** Put complex types with float properties */
  put(
    options: PrimitivePutFloatParameters
  ): Promise<PrimitivePutFloat200Response | PrimitivePutFloat500Response>;
}

export interface PrimitiveGetDouble {
  /** Get complex types with double properties */
  get(
    options?: PrimitiveGetDoubleParameters
  ): Promise<PrimitiveGetDouble200Response | PrimitiveGetDouble500Response>;
  /** Put complex types with double properties */
  put(
    options: PrimitivePutDoubleParameters
  ): Promise<PrimitivePutDouble200Response | PrimitivePutDouble500Response>;
}

export interface PrimitiveGetBool {
  /** Get complex types with bool properties */
  get(
    options?: PrimitiveGetBoolParameters
  ): Promise<PrimitiveGetBool200Response | PrimitiveGetBool500Response>;
  /** Put complex types with bool properties */
  put(
    options: PrimitivePutBoolParameters
  ): Promise<PrimitivePutBool200Response | PrimitivePutBool500Response>;
}

export interface PrimitiveGetString {
  /** Get complex types with string properties */
  get(
    options?: PrimitiveGetStringParameters
  ): Promise<PrimitiveGetString200Response | PrimitiveGetString500Response>;
  /** Put complex types with string properties */
  put(
    options: PrimitivePutStringParameters
  ): Promise<PrimitivePutString200Response | PrimitivePutString500Response>;
}

export interface PrimitiveGetDate {
  /** Get complex types with date properties */
  get(
    options?: PrimitiveGetDateParameters
  ): Promise<PrimitiveGetDate200Response | PrimitiveGetDate500Response>;
  /** Put complex types with date properties */
  put(
    options: PrimitivePutDateParameters
  ): Promise<PrimitivePutDate200Response | PrimitivePutDate500Response>;
}

export interface PrimitiveGetDateTime {
  /** Get complex types with datetime properties */
  get(
    options?: PrimitiveGetDateTimeParameters
  ): Promise<PrimitiveGetDateTime200Response | PrimitiveGetDateTime500Response>;
  /** Put complex types with datetime properties */
  put(
    options: PrimitivePutDateTimeParameters
  ): Promise<PrimitivePutDateTime200Response | PrimitivePutDateTime500Response>;
}

export interface PrimitiveGetDateTimeRfc1123 {
  /** Get complex types with datetimeRfc1123 properties */
  get(
    options?: PrimitiveGetDateTimeRfc1123Parameters
  ): Promise<
    | PrimitiveGetDateTimeRfc1123200Response
    | PrimitiveGetDateTimeRfc1123500Response
  >;
  /** Put complex types with datetimeRfc1123 properties */
  put(
    options: PrimitivePutDateTimeRfc1123Parameters
  ): Promise<
    | PrimitivePutDateTimeRfc1123200Response
    | PrimitivePutDateTimeRfc1123500Response
  >;
}

export interface PrimitiveGetDuration {
  /** Get complex types with duration properties */
  get(
    options?: PrimitiveGetDurationParameters
  ): Promise<PrimitiveGetDuration200Response | PrimitiveGetDuration500Response>;
  /** Put complex types with duration properties */
  put(
    options: PrimitivePutDurationParameters
  ): Promise<PrimitivePutDuration200Response | PrimitivePutDuration500Response>;
}

export interface PrimitiveGetByte {
  /** Get complex types with byte properties */
  get(
    options?: PrimitiveGetByteParameters
  ): Promise<PrimitiveGetByte200Response | PrimitiveGetByte500Response>;
  /** Put complex types with byte properties */
  put(
    options: PrimitivePutByteParameters
  ): Promise<PrimitivePutByte200Response | PrimitivePutByte500Response>;
}

export interface ArrayGetValid {
  /** Get complex types with array property */
  get(
    options?: ArrayGetValidParameters
  ): Promise<ArrayGetValid200Response | ArrayGetValid500Response>;
  /** Put complex types with array property */
  put(
    options: ArrayPutValidParameters
  ): Promise<ArrayPutValid200Response | ArrayPutValid500Response>;
}

export interface ArrayGetEmpty {
  /** Get complex types with array property which is empty */
  get(
    options?: ArrayGetEmptyParameters
  ): Promise<ArrayGetEmpty200Response | ArrayGetEmpty500Response>;
  /** Put complex types with array property which is empty */
  put(
    options: ArrayPutEmptyParameters
  ): Promise<ArrayPutEmpty200Response | ArrayPutEmpty500Response>;
}

export interface ArrayGetNotProvided {
  /** Get complex types with array property while server doesn't provide a response payload */
  get(
    options?: ArrayGetNotProvidedParameters
  ): Promise<ArrayGetNotProvided200Response | ArrayGetNotProvided500Response>;
}

export interface DictionaryGetValid {
  /** Get complex types with dictionary property */
  get(
    options?: DictionaryGetValidParameters
  ): Promise<DictionaryGetValid200Response | DictionaryGetValid500Response>;
  /** Put complex types with dictionary property */
  put(
    options: DictionaryPutValidParameters
  ): Promise<DictionaryPutValid200Response | DictionaryPutValid500Response>;
}

export interface DictionaryGetEmpty {
  /** Get complex types with dictionary property which is empty */
  get(
    options?: DictionaryGetEmptyParameters
  ): Promise<DictionaryGetEmpty200Response | DictionaryGetEmpty500Response>;
  /** Put complex types with dictionary property which is empty */
  put(
    options: DictionaryPutEmptyParameters
  ): Promise<DictionaryPutEmpty200Response | DictionaryPutEmpty500Response>;
}

export interface DictionaryGetNull {
  /** Get complex types with dictionary property which is null */
  get(
    options?: DictionaryGetNullParameters
  ): Promise<DictionaryGetNull200Response | DictionaryGetNull500Response>;
}

export interface DictionaryGetNotProvided {
  /** Get complex types with dictionary property while server doesn't provide a response payload */
  get(
    options?: DictionaryGetNotProvidedParameters
  ): Promise<
    DictionaryGetNotProvided200Response | DictionaryGetNotProvided500Response
  >;
}

export interface InheritanceGetValid {
  /** Get complex types that extend others */
  get(
    options?: InheritanceGetValidParameters
  ): Promise<InheritanceGetValid200Response | InheritanceGetValid500Response>;
  /** Put complex types that extend others */
  put(
    options: InheritancePutValidParameters
  ): Promise<InheritancePutValid200Response | InheritancePutValid500Response>;
}

export interface PolymorphismGetValid {
  /** Get complex types that are polymorphic */
  get(
    options?: PolymorphismGetValidParameters
  ): Promise<PolymorphismGetValid200Response | PolymorphismGetValid500Response>;
  /** Put complex types that are polymorphic */
  put(
    options: PolymorphismPutValidParameters
  ): Promise<PolymorphismPutValid200Response | PolymorphismPutValid500Response>;
}

export interface PolymorphismGetDotSyntax {
  /** Get complex types that are polymorphic, JSON key contains a dot */
  get(
    options?: PolymorphismGetDotSyntaxParameters
  ): Promise<
    PolymorphismGetDotSyntax200Response | PolymorphismGetDotSyntax500Response
  >;
}

export interface PolymorphismGetComposedWithDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
  get(
    options?: PolymorphismGetComposedWithDiscriminatorParameters
  ): Promise<
    | PolymorphismGetComposedWithDiscriminator200Response
    | PolymorphismGetComposedWithDiscriminator500Response
  >;
}

export interface PolymorphismGetComposedWithoutDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
  get(
    options?: PolymorphismGetComposedWithoutDiscriminatorParameters
  ): Promise<
    | PolymorphismGetComposedWithoutDiscriminator200Response
    | PolymorphismGetComposedWithoutDiscriminator500Response
  >;
}

export interface PolymorphismGetComplicated {
  /** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  get(
    options?: PolymorphismGetComplicatedParameters
  ): Promise<
    | PolymorphismGetComplicated200Response
    | PolymorphismGetComplicated500Response
  >;
  /** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  put(
    options: PolymorphismPutComplicatedParameters
  ): Promise<
    | PolymorphismPutComplicated200Response
    | PolymorphismPutComplicated500Response
  >;
}

export interface PolymorphismPutMissingDiscriminator {
  /** Put complex types that are polymorphic, omitting the discriminator */
  put(
    options: PolymorphismPutMissingDiscriminatorParameters
  ): Promise<
    | PolymorphismPutMissingDiscriminator200Response
    | PolymorphismPutMissingDiscriminator500Response
  >;
}

export interface PolymorphismPutValidMissingRequired {
  /** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
  put(
    options: PolymorphismPutValidMissingRequiredParameters
  ): Promise<
    | PolymorphismPutValidMissingRequired200Response
    | PolymorphismPutValidMissingRequired500Response
  >;
}

export interface PolymorphicrecursiveGetValid {
  /** Get complex types that are polymorphic and have recursive references */
  get(
    options?: PolymorphicrecursiveGetValidParameters
  ): Promise<
    | PolymorphicrecursiveGetValid200Response
    | PolymorphicrecursiveGetValid500Response
  >;
  /** Put complex types that are polymorphic and have recursive references */
  put(
    options: PolymorphicrecursivePutValidParameters
  ): Promise<
    | PolymorphicrecursivePutValid200Response
    | PolymorphicrecursivePutValid500Response
  >;
}

export interface ReadonlypropertyGetValid {
  /** Get complex types that have readonly properties */
  get(
    options?: ReadonlypropertyGetValidParameters
  ): Promise<
    ReadonlypropertyGetValid200Response | ReadonlypropertyGetValid500Response
  >;
  /** Put complex types that have readonly properties */
  put(
    options: ReadonlypropertyPutValidParameters
  ): Promise<
    ReadonlypropertyPutValid200Response | ReadonlypropertyPutValid500Response
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
