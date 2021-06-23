// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  BasicDef,
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
  Salmon,
  ReadonlyObj
} from "./models";

export type BasicGetValidParameters = RequestParameters;

export interface BasicPutValidBodyParam {
  body: BasicDef;
}

export type BasicPutValidParameters = BasicPutValidBodyParam &
  RequestParameters;
export type BasicGetInvalidParameters = RequestParameters;
export type BasicGetEmptyParameters = RequestParameters;
export type BasicGetNullParameters = RequestParameters;
export type BasicGetNotProvidedParameters = RequestParameters;
export type PrimitiveGetIntParameters = RequestParameters;

export interface PrimitivePutIntBodyParam {
  body: IntWrapper;
}

export type PrimitivePutIntParameters = PrimitivePutIntBodyParam &
  RequestParameters;
export type PrimitiveGetLongParameters = RequestParameters;

export interface PrimitivePutLongBodyParam {
  body: LongWrapper;
}

export type PrimitivePutLongParameters = PrimitivePutLongBodyParam &
  RequestParameters;
export type PrimitiveGetFloatParameters = RequestParameters;

export interface PrimitivePutFloatBodyParam {
  body: FloatWrapper;
}

export type PrimitivePutFloatParameters = PrimitivePutFloatBodyParam &
  RequestParameters;
export type PrimitiveGetDoubleParameters = RequestParameters;

export interface PrimitivePutDoubleBodyParam {
  body: DoubleWrapper;
}

export type PrimitivePutDoubleParameters = PrimitivePutDoubleBodyParam &
  RequestParameters;
export type PrimitiveGetBoolParameters = RequestParameters;

export interface PrimitivePutBoolBodyParam {
  body: BooleanWrapper;
}

export type PrimitivePutBoolParameters = PrimitivePutBoolBodyParam &
  RequestParameters;
export type PrimitiveGetStringParameters = RequestParameters;

export interface PrimitivePutStringBodyParam {
  body: StringWrapper;
}

export type PrimitivePutStringParameters = PrimitivePutStringBodyParam &
  RequestParameters;
export type PrimitiveGetDateParameters = RequestParameters;

export interface PrimitivePutDateBodyParam {
  body: DateWrapper;
}

export type PrimitivePutDateParameters = PrimitivePutDateBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeParameters = RequestParameters;

export interface PrimitivePutDateTimeBodyParam {
  body: DatetimeWrapper;
}

export type PrimitivePutDateTimeParameters = PrimitivePutDateTimeBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeRfc1123Parameters = RequestParameters;

export interface PrimitivePutDateTimeRfc1123BodyParam {
  body: Datetimerfc1123Wrapper;
}

export type PrimitivePutDateTimeRfc1123Parameters = PrimitivePutDateTimeRfc1123BodyParam &
  RequestParameters;
export type PrimitiveGetDurationParameters = RequestParameters;

export interface PrimitivePutDurationBodyParam {
  body: DurationWrapper;
}

export type PrimitivePutDurationParameters = PrimitivePutDurationBodyParam &
  RequestParameters;
export type PrimitiveGetByteParameters = RequestParameters;

export interface PrimitivePutByteBodyParam {
  body: ByteWrapper;
}

export type PrimitivePutByteParameters = PrimitivePutByteBodyParam &
  RequestParameters;
export type ArrayGetValidParameters = RequestParameters;

export interface ArrayPutValidBodyParam {
  body: ArrayWrapper;
}

export type ArrayPutValidParameters = ArrayPutValidBodyParam &
  RequestParameters;
export type ArrayGetEmptyParameters = RequestParameters;

export interface ArrayPutEmptyBodyParam {
  body: ArrayWrapper;
}

export type ArrayPutEmptyParameters = ArrayPutEmptyBodyParam &
  RequestParameters;
export type ArrayGetNotProvidedParameters = RequestParameters;
export type DictionaryGetValidParameters = RequestParameters;

export interface DictionaryPutValidBodyParam {
  body: DictionaryWrapper;
}

export type DictionaryPutValidParameters = DictionaryPutValidBodyParam &
  RequestParameters;
export type DictionaryGetEmptyParameters = RequestParameters;

export interface DictionaryPutEmptyBodyParam {
  body: DictionaryWrapper;
}

export type DictionaryPutEmptyParameters = DictionaryPutEmptyBodyParam &
  RequestParameters;
export type DictionaryGetNullParameters = RequestParameters;
export type DictionaryGetNotProvidedParameters = RequestParameters;
export type InheritanceGetValidParameters = RequestParameters;

export interface InheritancePutValidBodyParam {
  body: Siamese;
}

export type InheritancePutValidParameters = InheritancePutValidBodyParam &
  RequestParameters;
export type PolymorphismGetValidParameters = RequestParameters;

export interface PolymorphismPutValidBodyParam {
  body: Fish;
}

export type PolymorphismPutValidParameters = PolymorphismPutValidBodyParam &
  RequestParameters;
export type PolymorphismGetDotSyntaxParameters = RequestParameters;
export type PolymorphismGetComposedWithDiscriminatorParameters = RequestParameters;
export type PolymorphismGetComposedWithoutDiscriminatorParameters = RequestParameters;
export type PolymorphismGetComplicatedParameters = RequestParameters;

export interface PolymorphismPutComplicatedBodyParam {
  body: Salmon;
}

export type PolymorphismPutComplicatedParameters = PolymorphismPutComplicatedBodyParam &
  RequestParameters;

export interface PolymorphismPutMissingDiscriminatorBodyParam {
  body: Salmon;
}

export type PolymorphismPutMissingDiscriminatorParameters = PolymorphismPutMissingDiscriminatorBodyParam &
  RequestParameters;

export interface PolymorphismPutValidMissingRequiredBodyParam {
  body: Fish;
}

export type PolymorphismPutValidMissingRequiredParameters = PolymorphismPutValidMissingRequiredBodyParam &
  RequestParameters;
export type PolymorphicrecursiveGetValidParameters = RequestParameters;

export interface PolymorphicrecursivePutValidBodyParam {
  body: Fish;
}

export type PolymorphicrecursivePutValidParameters = PolymorphicrecursivePutValidBodyParam &
  RequestParameters;
export type ReadonlypropertyGetValidParameters = RequestParameters;

export interface ReadonlypropertyPutValidBodyParam {
  body: ReadonlyObj;
}

export type ReadonlypropertyPutValidParameters = ReadonlypropertyPutValidBodyParam &
  RequestParameters;
export type FlattencomplexGetValidParameters = RequestParameters;
