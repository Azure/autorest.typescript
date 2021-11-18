// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BasicgetValidParameters,
  BasicputValidParameters,
  BasicgetInvalidParameters,
  BasicgetEmptyParameters,
  BasicgetNullParameters,
  BasicgetNotProvidedParameters,
  PrimitivegetIntParameters,
  PrimitiveputIntParameters,
  PrimitivegetLongParameters,
  PrimitiveputLongParameters,
  PrimitivegetFloatParameters,
  PrimitiveputFloatParameters,
  PrimitivegetDoubleParameters,
  PrimitiveputDoubleParameters,
  PrimitivegetBoolParameters,
  PrimitiveputBoolParameters,
  PrimitivegetStringParameters,
  PrimitiveputStringParameters,
  PrimitivegetDateParameters,
  PrimitiveputDateParameters,
  PrimitivegetDateTimeParameters,
  PrimitiveputDateTimeParameters,
  PrimitivegetDateTimeRfc1123Parameters,
  PrimitiveputDateTimeRfc1123Parameters,
  PrimitivegetDurationParameters,
  PrimitiveputDurationParameters,
  PrimitivegetByteParameters,
  PrimitiveputByteParameters,
  ArraygetValidParameters,
  ArrayputValidParameters,
  ArraygetEmptyParameters,
  ArrayputEmptyParameters,
  ArraygetNotProvidedParameters,
  DictionarygetValidParameters,
  DictionaryputValidParameters,
  DictionarygetEmptyParameters,
  DictionaryputEmptyParameters,
  DictionarygetNullParameters,
  DictionarygetNotProvidedParameters,
  InheritancegetValidParameters,
  InheritanceputValidParameters,
  PolymorphismgetValidParameters,
  PolymorphismputValidParameters,
  PolymorphismgetDotSyntaxParameters,
  PolymorphismgetComposedWithDiscriminatorParameters,
  PolymorphismgetComposedWithoutDiscriminatorParameters,
  PolymorphismgetComplicatedParameters,
  PolymorphismputComplicatedParameters,
  PolymorphismputMissingDiscriminatorParameters,
  PolymorphismputValidMissingRequiredParameters,
  PolymorphicrecursivegetValidParameters,
  PolymorphicrecursiveputValidParameters,
  ReadonlypropertygetValidParameters,
  ReadonlypropertyputValidParameters,
  FlattencomplexgetValidParameters
} from "./parameters";
import {
  BasicgetValid200Response,
  BasicgetValiddefaultResponse,
  BasicputValid200Response,
  BasicputValiddefaultResponse,
  BasicgetInvalid200Response,
  BasicgetInvaliddefaultResponse,
  BasicgetEmpty200Response,
  BasicgetEmptydefaultResponse,
  BasicgetNull200Response,
  BasicgetNulldefaultResponse,
  BasicgetNotProvided200Response,
  BasicgetNotProvideddefaultResponse,
  PrimitivegetInt200Response,
  PrimitivegetIntdefaultResponse,
  PrimitiveputInt200Response,
  PrimitiveputIntdefaultResponse,
  PrimitivegetLong200Response,
  PrimitivegetLongdefaultResponse,
  PrimitiveputLong200Response,
  PrimitiveputLongdefaultResponse,
  PrimitivegetFloat200Response,
  PrimitivegetFloatdefaultResponse,
  PrimitiveputFloat200Response,
  PrimitiveputFloatdefaultResponse,
  PrimitivegetDouble200Response,
  PrimitivegetDoubledefaultResponse,
  PrimitiveputDouble200Response,
  PrimitiveputDoubledefaultResponse,
  PrimitivegetBool200Response,
  PrimitivegetBooldefaultResponse,
  PrimitiveputBool200Response,
  PrimitiveputBooldefaultResponse,
  PrimitivegetString200Response,
  PrimitivegetStringdefaultResponse,
  PrimitiveputString200Response,
  PrimitiveputStringdefaultResponse,
  PrimitivegetDate200Response,
  PrimitivegetDatedefaultResponse,
  PrimitiveputDate200Response,
  PrimitiveputDatedefaultResponse,
  PrimitivegetDateTime200Response,
  PrimitivegetDateTimedefaultResponse,
  PrimitiveputDateTime200Response,
  PrimitiveputDateTimedefaultResponse,
  PrimitivegetDateTimeRfc1123200Response,
  PrimitivegetDateTimeRfc1123defaultResponse,
  PrimitiveputDateTimeRfc1123200Response,
  PrimitiveputDateTimeRfc1123defaultResponse,
  PrimitivegetDuration200Response,
  PrimitivegetDurationdefaultResponse,
  PrimitiveputDuration200Response,
  PrimitiveputDurationdefaultResponse,
  PrimitivegetByte200Response,
  PrimitivegetBytedefaultResponse,
  PrimitiveputByte200Response,
  PrimitiveputBytedefaultResponse,
  ArraygetValid200Response,
  ArraygetValiddefaultResponse,
  ArrayputValid200Response,
  ArrayputValiddefaultResponse,
  ArraygetEmpty200Response,
  ArraygetEmptydefaultResponse,
  ArrayputEmpty200Response,
  ArrayputEmptydefaultResponse,
  ArraygetNotProvided200Response,
  ArraygetNotProvideddefaultResponse,
  DictionarygetValid200Response,
  DictionarygetValiddefaultResponse,
  DictionaryputValid200Response,
  DictionaryputValiddefaultResponse,
  DictionarygetEmpty200Response,
  DictionarygetEmptydefaultResponse,
  DictionaryputEmpty200Response,
  DictionaryputEmptydefaultResponse,
  DictionarygetNull200Response,
  DictionarygetNulldefaultResponse,
  DictionarygetNotProvided200Response,
  DictionarygetNotProvideddefaultResponse,
  InheritancegetValid200Response,
  InheritancegetValiddefaultResponse,
  InheritanceputValid200Response,
  InheritanceputValiddefaultResponse,
  PolymorphismgetValid200Response,
  PolymorphismgetValiddefaultResponse,
  PolymorphismputValid200Response,
  PolymorphismputValiddefaultResponse,
  PolymorphismgetDotSyntax200Response,
  PolymorphismgetDotSyntaxdefaultResponse,
  PolymorphismgetComposedWithDiscriminator200Response,
  PolymorphismgetComposedWithDiscriminatordefaultResponse,
  PolymorphismgetComposedWithoutDiscriminator200Response,
  PolymorphismgetComposedWithoutDiscriminatordefaultResponse,
  PolymorphismgetComplicated200Response,
  PolymorphismgetComplicateddefaultResponse,
  PolymorphismputComplicated200Response,
  PolymorphismputComplicateddefaultResponse,
  PolymorphismputMissingDiscriminator200Response,
  PolymorphismputMissingDiscriminatordefaultResponse,
  PolymorphismputValidMissingRequired200Response,
  PolymorphismputValidMissingRequireddefaultResponse,
  PolymorphicrecursivegetValid200Response,
  PolymorphicrecursivegetValiddefaultResponse,
  PolymorphicrecursiveputValid200Response,
  PolymorphicrecursiveputValiddefaultResponse,
  ReadonlypropertygetValid200Response,
  ReadonlypropertygetValiddefaultResponse,
  ReadonlypropertyputValid200Response,
  ReadonlypropertyputValiddefaultResponse,
  FlattencomplexgetValid200Response
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface BasicgetValid {
  /** Get complex type {id: 2, name: 'abc', color: 'YELLOW'} */
  get(
    options?: BasicgetValidParameters
  ): Promise<BasicgetValid200Response | BasicgetValiddefaultResponse>;
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  put(
    options: BasicputValidParameters
  ): Promise<BasicputValid200Response | BasicputValiddefaultResponse>;
}

export interface BasicgetInvalid {
  /** Get a basic complex type that is invalid for the local strong type */
  get(
    options?: BasicgetInvalidParameters
  ): Promise<BasicgetInvalid200Response | BasicgetInvaliddefaultResponse>;
}

export interface BasicgetEmpty {
  /** Get a basic complex type that is empty */
  get(
    options?: BasicgetEmptyParameters
  ): Promise<BasicgetEmpty200Response | BasicgetEmptydefaultResponse>;
}

export interface BasicgetNull {
  /** Get a basic complex type whose properties are null */
  get(
    options?: BasicgetNullParameters
  ): Promise<BasicgetNull200Response | BasicgetNulldefaultResponse>;
}

export interface BasicgetNotProvided {
  /** Get a basic complex type while the server doesn't provide a response payload */
  get(
    options?: BasicgetNotProvidedParameters
  ): Promise<
    BasicgetNotProvided200Response | BasicgetNotProvideddefaultResponse
  >;
}

export interface PrimitivegetInt {
  /** Get complex types with integer properties */
  get(
    options?: PrimitivegetIntParameters
  ): Promise<PrimitivegetInt200Response | PrimitivegetIntdefaultResponse>;
  /** Put complex types with integer properties */
  put(
    options: PrimitiveputIntParameters
  ): Promise<PrimitiveputInt200Response | PrimitiveputIntdefaultResponse>;
}

export interface PrimitivegetLong {
  /** Get complex types with long properties */
  get(
    options?: PrimitivegetLongParameters
  ): Promise<PrimitivegetLong200Response | PrimitivegetLongdefaultResponse>;
  /** Put complex types with long properties */
  put(
    options: PrimitiveputLongParameters
  ): Promise<PrimitiveputLong200Response | PrimitiveputLongdefaultResponse>;
}

export interface PrimitivegetFloat {
  /** Get complex types with float properties */
  get(
    options?: PrimitivegetFloatParameters
  ): Promise<PrimitivegetFloat200Response | PrimitivegetFloatdefaultResponse>;
  /** Put complex types with float properties */
  put(
    options: PrimitiveputFloatParameters
  ): Promise<PrimitiveputFloat200Response | PrimitiveputFloatdefaultResponse>;
}

export interface PrimitivegetDouble {
  /** Get complex types with double properties */
  get(
    options?: PrimitivegetDoubleParameters
  ): Promise<PrimitivegetDouble200Response | PrimitivegetDoubledefaultResponse>;
  /** Put complex types with double properties */
  put(
    options: PrimitiveputDoubleParameters
  ): Promise<PrimitiveputDouble200Response | PrimitiveputDoubledefaultResponse>;
}

export interface PrimitivegetBool {
  /** Get complex types with bool properties */
  get(
    options?: PrimitivegetBoolParameters
  ): Promise<PrimitivegetBool200Response | PrimitivegetBooldefaultResponse>;
  /** Put complex types with bool properties */
  put(
    options: PrimitiveputBoolParameters
  ): Promise<PrimitiveputBool200Response | PrimitiveputBooldefaultResponse>;
}

export interface PrimitivegetString {
  /** Get complex types with string properties */
  get(
    options?: PrimitivegetStringParameters
  ): Promise<PrimitivegetString200Response | PrimitivegetStringdefaultResponse>;
  /** Put complex types with string properties */
  put(
    options: PrimitiveputStringParameters
  ): Promise<PrimitiveputString200Response | PrimitiveputStringdefaultResponse>;
}

export interface PrimitivegetDate {
  /** Get complex types with date properties */
  get(
    options?: PrimitivegetDateParameters
  ): Promise<PrimitivegetDate200Response | PrimitivegetDatedefaultResponse>;
  /** Put complex types with date properties */
  put(
    options: PrimitiveputDateParameters
  ): Promise<PrimitiveputDate200Response | PrimitiveputDatedefaultResponse>;
}

export interface PrimitivegetDateTime {
  /** Get complex types with datetime properties */
  get(
    options?: PrimitivegetDateTimeParameters
  ): Promise<
    PrimitivegetDateTime200Response | PrimitivegetDateTimedefaultResponse
  >;
  /** Put complex types with datetime properties */
  put(
    options: PrimitiveputDateTimeParameters
  ): Promise<
    PrimitiveputDateTime200Response | PrimitiveputDateTimedefaultResponse
  >;
}

export interface PrimitivegetDateTimeRfc1123 {
  /** Get complex types with datetimeRfc1123 properties */
  get(
    options?: PrimitivegetDateTimeRfc1123Parameters
  ): Promise<
    | PrimitivegetDateTimeRfc1123200Response
    | PrimitivegetDateTimeRfc1123defaultResponse
  >;
  /** Put complex types with datetimeRfc1123 properties */
  put(
    options: PrimitiveputDateTimeRfc1123Parameters
  ): Promise<
    | PrimitiveputDateTimeRfc1123200Response
    | PrimitiveputDateTimeRfc1123defaultResponse
  >;
}

export interface PrimitivegetDuration {
  /** Get complex types with duration properties */
  get(
    options?: PrimitivegetDurationParameters
  ): Promise<
    PrimitivegetDuration200Response | PrimitivegetDurationdefaultResponse
  >;
  /** Put complex types with duration properties */
  put(
    options: PrimitiveputDurationParameters
  ): Promise<
    PrimitiveputDuration200Response | PrimitiveputDurationdefaultResponse
  >;
}

export interface PrimitivegetByte {
  /** Get complex types with byte properties */
  get(
    options?: PrimitivegetByteParameters
  ): Promise<PrimitivegetByte200Response | PrimitivegetBytedefaultResponse>;
  /** Put complex types with byte properties */
  put(
    options: PrimitiveputByteParameters
  ): Promise<PrimitiveputByte200Response | PrimitiveputBytedefaultResponse>;
}

export interface ArraygetValid {
  /** Get complex types with array property */
  get(
    options?: ArraygetValidParameters
  ): Promise<ArraygetValid200Response | ArraygetValiddefaultResponse>;
  /** Put complex types with array property */
  put(
    options: ArrayputValidParameters
  ): Promise<ArrayputValid200Response | ArrayputValiddefaultResponse>;
}

export interface ArraygetEmpty {
  /** Get complex types with array property which is empty */
  get(
    options?: ArraygetEmptyParameters
  ): Promise<ArraygetEmpty200Response | ArraygetEmptydefaultResponse>;
  /** Put complex types with array property which is empty */
  put(
    options: ArrayputEmptyParameters
  ): Promise<ArrayputEmpty200Response | ArrayputEmptydefaultResponse>;
}

export interface ArraygetNotProvided {
  /** Get complex types with array property while server doesn't provide a response payload */
  get(
    options?: ArraygetNotProvidedParameters
  ): Promise<
    ArraygetNotProvided200Response | ArraygetNotProvideddefaultResponse
  >;
}

export interface DictionarygetValid {
  /** Get complex types with dictionary property */
  get(
    options?: DictionarygetValidParameters
  ): Promise<DictionarygetValid200Response | DictionarygetValiddefaultResponse>;
  /** Put complex types with dictionary property */
  put(
    options: DictionaryputValidParameters
  ): Promise<DictionaryputValid200Response | DictionaryputValiddefaultResponse>;
}

export interface DictionarygetEmpty {
  /** Get complex types with dictionary property which is empty */
  get(
    options?: DictionarygetEmptyParameters
  ): Promise<DictionarygetEmpty200Response | DictionarygetEmptydefaultResponse>;
  /** Put complex types with dictionary property which is empty */
  put(
    options: DictionaryputEmptyParameters
  ): Promise<DictionaryputEmpty200Response | DictionaryputEmptydefaultResponse>;
}

export interface DictionarygetNull {
  /** Get complex types with dictionary property which is null */
  get(
    options?: DictionarygetNullParameters
  ): Promise<DictionarygetNull200Response | DictionarygetNulldefaultResponse>;
}

export interface DictionarygetNotProvided {
  /** Get complex types with dictionary property while server doesn't provide a response payload */
  get(
    options?: DictionarygetNotProvidedParameters
  ): Promise<
    | DictionarygetNotProvided200Response
    | DictionarygetNotProvideddefaultResponse
  >;
}

export interface InheritancegetValid {
  /** Get complex types that extend others */
  get(
    options?: InheritancegetValidParameters
  ): Promise<
    InheritancegetValid200Response | InheritancegetValiddefaultResponse
  >;
  /** Put complex types that extend others */
  put(
    options: InheritanceputValidParameters
  ): Promise<
    InheritanceputValid200Response | InheritanceputValiddefaultResponse
  >;
}

export interface PolymorphismgetValid {
  /** Get complex types that are polymorphic */
  get(
    options?: PolymorphismgetValidParameters
  ): Promise<
    PolymorphismgetValid200Response | PolymorphismgetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic */
  put(
    options: PolymorphismputValidParameters
  ): Promise<
    PolymorphismputValid200Response | PolymorphismputValiddefaultResponse
  >;
}

export interface PolymorphismgetDotSyntax {
  /** Get complex types that are polymorphic, JSON key contains a dot */
  get(
    options?: PolymorphismgetDotSyntaxParameters
  ): Promise<
    | PolymorphismgetDotSyntax200Response
    | PolymorphismgetDotSyntaxdefaultResponse
  >;
}

export interface PolymorphismgetComposedWithDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, with discriminator specified. Deserialization must NOT fail and use the discriminator type specified on the wire. */
  get(
    options?: PolymorphismgetComposedWithDiscriminatorParameters
  ): Promise<
    | PolymorphismgetComposedWithDiscriminator200Response
    | PolymorphismgetComposedWithDiscriminatordefaultResponse
  >;
}

export interface PolymorphismgetComposedWithoutDiscriminator {
  /** Get complex object composing a polymorphic scalar property and array property with polymorphic element type, without discriminator specified on wire. Deserialization must NOT fail and use the explicit type of the property. */
  get(
    options?: PolymorphismgetComposedWithoutDiscriminatorParameters
  ): Promise<
    | PolymorphismgetComposedWithoutDiscriminator200Response
    | PolymorphismgetComposedWithoutDiscriminatordefaultResponse
  >;
}

export interface PolymorphismgetComplicated {
  /** Get complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  get(
    options?: PolymorphismgetComplicatedParameters
  ): Promise<
    | PolymorphismgetComplicated200Response
    | PolymorphismgetComplicateddefaultResponse
  >;
  /** Put complex types that are polymorphic, but not at the root of the hierarchy; also have additional properties */
  put(
    options: PolymorphismputComplicatedParameters
  ): Promise<
    | PolymorphismputComplicated200Response
    | PolymorphismputComplicateddefaultResponse
  >;
}

export interface PolymorphismputMissingDiscriminator {
  /** Put complex types that are polymorphic, omitting the discriminator */
  put(
    options: PolymorphismputMissingDiscriminatorParameters
  ): Promise<
    | PolymorphismputMissingDiscriminator200Response
    | PolymorphismputMissingDiscriminatordefaultResponse
  >;
}

export interface PolymorphismputValidMissingRequired {
  /** Put complex types that are polymorphic, attempting to omit required 'birthday' field - the request should not be allowed from the client */
  put(
    options: PolymorphismputValidMissingRequiredParameters
  ): Promise<
    | PolymorphismputValidMissingRequired200Response
    | PolymorphismputValidMissingRequireddefaultResponse
  >;
}

export interface PolymorphicrecursivegetValid {
  /** Get complex types that are polymorphic and have recursive references */
  get(
    options?: PolymorphicrecursivegetValidParameters
  ): Promise<
    | PolymorphicrecursivegetValid200Response
    | PolymorphicrecursivegetValiddefaultResponse
  >;
  /** Put complex types that are polymorphic and have recursive references */
  put(
    options: PolymorphicrecursiveputValidParameters
  ): Promise<
    | PolymorphicrecursiveputValid200Response
    | PolymorphicrecursiveputValiddefaultResponse
  >;
}

export interface ReadonlypropertygetValid {
  /** Get complex types that have readonly properties */
  get(
    options?: ReadonlypropertygetValidParameters
  ): Promise<
    | ReadonlypropertygetValid200Response
    | ReadonlypropertygetValiddefaultResponse
  >;
  /** Put complex types that have readonly properties */
  put(
    options: ReadonlypropertyputValidParameters
  ): Promise<
    | ReadonlypropertyputValid200Response
    | ReadonlypropertyputValiddefaultResponse
  >;
}

export interface FlattencomplexgetValid {
  get(
    options?: FlattencomplexgetValidParameters
  ): Promise<FlattencomplexgetValid200Response>;
}

export interface Routes {
  /** Resource for '/complex/basic/valid' has methods for the following verbs: get, put */
  (path: "/complex/basic/valid"): BasicgetValid;
  /** Resource for '/complex/basic/invalid' has methods for the following verbs: get */
  (path: "/complex/basic/invalid"): BasicgetInvalid;
  /** Resource for '/complex/basic/empty' has methods for the following verbs: get */
  (path: "/complex/basic/empty"): BasicgetEmpty;
  /** Resource for '/complex/basic/null' has methods for the following verbs: get */
  (path: "/complex/basic/null"): BasicgetNull;
  /** Resource for '/complex/basic/notprovided' has methods for the following verbs: get */
  (path: "/complex/basic/notprovided"): BasicgetNotProvided;
  /** Resource for '/complex/primitive/integer' has methods for the following verbs: get, put */
  (path: "/complex/primitive/integer"): PrimitivegetInt;
  /** Resource for '/complex/primitive/long' has methods for the following verbs: get, put */
  (path: "/complex/primitive/long"): PrimitivegetLong;
  /** Resource for '/complex/primitive/float' has methods for the following verbs: get, put */
  (path: "/complex/primitive/float"): PrimitivegetFloat;
  /** Resource for '/complex/primitive/double' has methods for the following verbs: get, put */
  (path: "/complex/primitive/double"): PrimitivegetDouble;
  /** Resource for '/complex/primitive/bool' has methods for the following verbs: get, put */
  (path: "/complex/primitive/bool"): PrimitivegetBool;
  /** Resource for '/complex/primitive/string' has methods for the following verbs: get, put */
  (path: "/complex/primitive/string"): PrimitivegetString;
  /** Resource for '/complex/primitive/date' has methods for the following verbs: get, put */
  (path: "/complex/primitive/date"): PrimitivegetDate;
  /** Resource for '/complex/primitive/datetime' has methods for the following verbs: get, put */
  (path: "/complex/primitive/datetime"): PrimitivegetDateTime;
  /** Resource for '/complex/primitive/datetimerfc1123' has methods for the following verbs: get, put */
  (path: "/complex/primitive/datetimerfc1123"): PrimitivegetDateTimeRfc1123;
  /** Resource for '/complex/primitive/duration' has methods for the following verbs: get, put */
  (path: "/complex/primitive/duration"): PrimitivegetDuration;
  /** Resource for '/complex/primitive/byte' has methods for the following verbs: get, put */
  (path: "/complex/primitive/byte"): PrimitivegetByte;
  /** Resource for '/complex/array/valid' has methods for the following verbs: get, put */
  (path: "/complex/array/valid"): ArraygetValid;
  /** Resource for '/complex/array/empty' has methods for the following verbs: get, put */
  (path: "/complex/array/empty"): ArraygetEmpty;
  /** Resource for '/complex/array/notprovided' has methods for the following verbs: get */
  (path: "/complex/array/notprovided"): ArraygetNotProvided;
  /** Resource for '/complex/dictionary/typed/valid' has methods for the following verbs: get, put */
  (path: "/complex/dictionary/typed/valid"): DictionarygetValid;
  /** Resource for '/complex/dictionary/typed/empty' has methods for the following verbs: get, put */
  (path: "/complex/dictionary/typed/empty"): DictionarygetEmpty;
  /** Resource for '/complex/dictionary/typed/null' has methods for the following verbs: get */
  (path: "/complex/dictionary/typed/null"): DictionarygetNull;
  /** Resource for '/complex/dictionary/typed/notprovided' has methods for the following verbs: get */
  (path: "/complex/dictionary/typed/notprovided"): DictionarygetNotProvided;
  /** Resource for '/complex/inheritance/valid' has methods for the following verbs: get, put */
  (path: "/complex/inheritance/valid"): InheritancegetValid;
  /** Resource for '/complex/polymorphism/valid' has methods for the following verbs: get, put */
  (path: "/complex/polymorphism/valid"): PolymorphismgetValid;
  /** Resource for '/complex/polymorphism/dotsyntax' has methods for the following verbs: get */
  (path: "/complex/polymorphism/dotsyntax"): PolymorphismgetDotSyntax;
  /** Resource for '/complex/polymorphism/composedWithDiscriminator' has methods for the following verbs: get */
  (
    path: "/complex/polymorphism/composedWithDiscriminator"
  ): PolymorphismgetComposedWithDiscriminator;
  /** Resource for '/complex/polymorphism/composedWithoutDiscriminator' has methods for the following verbs: get */
  (
    path: "/complex/polymorphism/composedWithoutDiscriminator"
  ): PolymorphismgetComposedWithoutDiscriminator;
  /** Resource for '/complex/polymorphism/complicated' has methods for the following verbs: get, put */
  (path: "/complex/polymorphism/complicated"): PolymorphismgetComplicated;
  /** Resource for '/complex/polymorphism/missingdiscriminator' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingdiscriminator"
  ): PolymorphismputMissingDiscriminator;
  /** Resource for '/complex/polymorphism/missingrequired/invalid' has methods for the following verbs: put */
  (
    path: "/complex/polymorphism/missingrequired/invalid"
  ): PolymorphismputValidMissingRequired;
  /** Resource for '/complex/polymorphicrecursive/valid' has methods for the following verbs: get, put */
  (path: "/complex/polymorphicrecursive/valid"): PolymorphicrecursivegetValid;
  /** Resource for '/complex/readonlyproperty/valid' has methods for the following verbs: get, put */
  (path: "/complex/readonlyproperty/valid"): ReadonlypropertygetValid;
  /** Resource for '/complex/flatten/valid' has methods for the following verbs: get */
  (path: "/complex/flatten/valid"): FlattencomplexgetValid;
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
