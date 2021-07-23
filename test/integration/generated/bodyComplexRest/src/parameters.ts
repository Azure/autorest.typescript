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
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
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
  /** Please put -1 and 2 */
  body: IntWrapper;
}

export type PrimitivePutIntParameters = PrimitivePutIntBodyParam &
  RequestParameters;
export type PrimitiveGetLongParameters = RequestParameters;

export interface PrimitivePutLongBodyParam {
  /** Please put 1099511627775 and -999511627788 */
  body: LongWrapper;
}

export type PrimitivePutLongParameters = PrimitivePutLongBodyParam &
  RequestParameters;
export type PrimitiveGetFloatParameters = RequestParameters;

export interface PrimitivePutFloatBodyParam {
  /** Please put 1.05 and -0.003 */
  body: FloatWrapper;
}

export type PrimitivePutFloatParameters = PrimitivePutFloatBodyParam &
  RequestParameters;
export type PrimitiveGetDoubleParameters = RequestParameters;

export interface PrimitivePutDoubleBodyParam {
  /** Please put 3e-100 and -0.000000000000000000000000000000000000000000000000000000005 */
  body: DoubleWrapper;
}

export type PrimitivePutDoubleParameters = PrimitivePutDoubleBodyParam &
  RequestParameters;
export type PrimitiveGetBoolParameters = RequestParameters;

export interface PrimitivePutBoolBodyParam {
  /** Please put true and false */
  body: BooleanWrapper;
}

export type PrimitivePutBoolParameters = PrimitivePutBoolBodyParam &
  RequestParameters;
export type PrimitiveGetStringParameters = RequestParameters;

export interface PrimitivePutStringBodyParam {
  /** Please put 'goodrequest', '', and null */
  body: StringWrapper;
}

export type PrimitivePutStringParameters = PrimitivePutStringBodyParam &
  RequestParameters;
export type PrimitiveGetDateParameters = RequestParameters;

export interface PrimitivePutDateBodyParam {
  /** Please put '0001-01-01' and '2016-02-29' */
  body: DateWrapper;
}

export type PrimitivePutDateParameters = PrimitivePutDateBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeParameters = RequestParameters;

export interface PrimitivePutDateTimeBodyParam {
  /** Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00' */
  body: DatetimeWrapper;
}

export type PrimitivePutDateTimeParameters = PrimitivePutDateTimeBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeRfc1123Parameters = RequestParameters;

export interface PrimitivePutDateTimeRfc1123BodyParam {
  /** Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT' */
  body: Datetimerfc1123Wrapper;
}

export type PrimitivePutDateTimeRfc1123Parameters = PrimitivePutDateTimeRfc1123BodyParam &
  RequestParameters;
export type PrimitiveGetDurationParameters = RequestParameters;

export interface PrimitivePutDurationBodyParam {
  /** Please put 'P123DT22H14M12.011S' */
  body: DurationWrapper;
}

export type PrimitivePutDurationParameters = PrimitivePutDurationBodyParam &
  RequestParameters;
export type PrimitiveGetByteParameters = RequestParameters;

export interface PrimitivePutByteBodyParam {
  /** Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6) */
  body: ByteWrapper;
}

export type PrimitivePutByteParameters = PrimitivePutByteBodyParam &
  RequestParameters;
export type ArrayGetValidParameters = RequestParameters;

export interface ArrayPutValidBodyParam {
  /** Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog" */
  body: ArrayWrapper;
}

export type ArrayPutValidParameters = ArrayPutValidBodyParam &
  RequestParameters;
export type ArrayGetEmptyParameters = RequestParameters;

export interface ArrayPutEmptyBodyParam {
  /** Please put an empty array */
  body: ArrayWrapper;
}

export type ArrayPutEmptyParameters = ArrayPutEmptyBodyParam &
  RequestParameters;
export type ArrayGetNotProvidedParameters = RequestParameters;
export type DictionaryGetValidParameters = RequestParameters;

export interface DictionaryPutValidBodyParam {
  /** Please put a dictionary with 5 key-value pairs: "txt":"notepad", "bmp":"mspaint", "xls":"excel", "exe":"", "":null */
  body: DictionaryWrapper;
}

export type DictionaryPutValidParameters = DictionaryPutValidBodyParam &
  RequestParameters;
export type DictionaryGetEmptyParameters = RequestParameters;

export interface DictionaryPutEmptyBodyParam {
  /** Please put an empty dictionary */
  body: DictionaryWrapper;
}

export type DictionaryPutEmptyParameters = DictionaryPutEmptyBodyParam &
  RequestParameters;
export type DictionaryGetNullParameters = RequestParameters;
export type DictionaryGetNotProvidedParameters = RequestParameters;
export type InheritanceGetValidParameters = RequestParameters;

export interface InheritancePutValidBodyParam {
  /** Please put a siamese with id=2, name="Siameee", color=green, breed=persion, which hates 2 dogs, the 1st one named "Potato" with id=1 and food="tomato", and the 2nd one named "Tomato" with id=-1 and food="french fries". */
  body: Siamese;
}

export type InheritancePutValidParameters = InheritancePutValidBodyParam &
  RequestParameters;
export type PolymorphismGetValidParameters = RequestParameters;

export interface PolymorphismPutValidBodyParam {
  /**
   * Please put a salmon that looks like this:
   * {
   *         'fishtype':'Salmon',
   *         'location':'alaska',
   *         'iswild':true,
   *         'species':'king',
   *         'length':1.0,
   *         'siblings':[
   *           {
   *             'fishtype':'Shark',
   *             'age':6,
   *             'birthday': '2012-01-05T01:00:00Z',
   *             'length':20.0,
   *             'species':'predator',
   *           },
   *           {
   *             'fishtype':'Sawshark',
   *             'age':105,
   *             'birthday': '1900-01-05T01:00:00Z',
   *             'length':10.0,
   *             'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   *             'species':'dangerous',
   *           },
   *           {
   *             'fishtype': 'goblin',
   *             'age': 1,
   *             'birthday': '2015-08-08T00:00:00Z',
   *             'length': 30.0,
   *             'species': 'scary',
   *             'jawsize': 5
   *           }
   *         ]
   *       };
   */
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
  /**
   * Please attempt put a sawshark that looks like this, the client should not allow this data to be sent:
   * {
   *     "fishtype": "sawshark",
   *     "species": "snaggle toothed",
   *     "length": 18.5,
   *     "age": 2,
   *     "birthday": "2013-06-01T01:00:00Z",
   *     "location": "alaska",
   *     "picture": base64(FF FF FF FF FE),
   *     "siblings": [
   *         {
   *             "fishtype": "shark",
   *             "species": "predator",
   *             "birthday": "2012-01-05T01:00:00Z",
   *             "length": 20,
   *             "age": 6
   *         },
   *         {
   *             "fishtype": "sawshark",
   *             "species": "dangerous",
   *             "picture": base64(FF FF FF FF FE),
   *             "length": 10,
   *             "age": 105
   *         }
   *     ]
   * }
   */
  body: Fish;
}

export type PolymorphismPutValidMissingRequiredParameters = PolymorphismPutValidMissingRequiredBodyParam &
  RequestParameters;
export type PolymorphicrecursiveGetValidParameters = RequestParameters;

export interface PolymorphicrecursivePutValidBodyParam {
  /**
   * Please put a salmon that looks like this:
   * {
   *     "fishtype": "salmon",
   *     "species": "king",
   *     "length": 1,
   *     "age": 1,
   *     "location": "alaska",
   *     "iswild": true,
   *     "siblings": [
   *         {
   *             "fishtype": "shark",
   *             "species": "predator",
   *             "length": 20,
   *             "age": 6,
   *             "siblings": [
   *                 {
   *                     "fishtype": "salmon",
   *                     "species": "coho",
   *                     "length": 2,
   *                     "age": 2,
   *                     "location": "atlantic",
   *                     "iswild": true,
   *                     "siblings": [
   *                         {
   *                             "fishtype": "shark",
   *                             "species": "predator",
   *                             "length": 20,
   *                             "age": 6
   *                         },
   *                         {
   *                             "fishtype": "sawshark",
   *                             "species": "dangerous",
   *                             "length": 10,
   *                             "age": 105
   *                         }
   *                     ]
   *                 },
   *                 {
   *                     "fishtype": "sawshark",
   *                     "species": "dangerous",
   *                     "length": 10,
   *                     "age": 105
   *                 }
   *             ]
   *         },
   *         {
   *             "fishtype": "sawshark",
   *             "species": "dangerous",
   *             "length": 10,
   *             "age": 105
   *         }
   *     ]
   * }
   */
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
