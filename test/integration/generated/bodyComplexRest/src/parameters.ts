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

export interface BasicPutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type BasicPutValidParameters = BasicPutValidMediaTypesParam &
  BasicPutValidBodyParam &
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

export interface PrimitivePutIntMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutIntParameters = PrimitivePutIntMediaTypesParam &
  PrimitivePutIntBodyParam &
  RequestParameters;
export type PrimitiveGetLongParameters = RequestParameters;

export interface PrimitivePutLongBodyParam {
  /** Please put 1099511627775 and -999511627788 */
  body: LongWrapper;
}

export interface PrimitivePutLongMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutLongParameters = PrimitivePutLongMediaTypesParam &
  PrimitivePutLongBodyParam &
  RequestParameters;
export type PrimitiveGetFloatParameters = RequestParameters;

export interface PrimitivePutFloatBodyParam {
  /** Please put 1.05 and -0.003 */
  body: FloatWrapper;
}

export interface PrimitivePutFloatMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutFloatParameters = PrimitivePutFloatMediaTypesParam &
  PrimitivePutFloatBodyParam &
  RequestParameters;
export type PrimitiveGetDoubleParameters = RequestParameters;

export interface PrimitivePutDoubleBodyParam {
  /** Please put 3e-100 and -0.000000000000000000000000000000000000000000000000000000005 */
  body: DoubleWrapper;
}

export interface PrimitivePutDoubleMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutDoubleParameters = PrimitivePutDoubleMediaTypesParam &
  PrimitivePutDoubleBodyParam &
  RequestParameters;
export type PrimitiveGetBoolParameters = RequestParameters;

export interface PrimitivePutBoolBodyParam {
  /** Please put true and false */
  body: BooleanWrapper;
}

export interface PrimitivePutBoolMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutBoolParameters = PrimitivePutBoolMediaTypesParam &
  PrimitivePutBoolBodyParam &
  RequestParameters;
export type PrimitiveGetStringParameters = RequestParameters;

export interface PrimitivePutStringBodyParam {
  /** Please put 'goodrequest', '', and null */
  body: StringWrapper;
}

export interface PrimitivePutStringMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutStringParameters = PrimitivePutStringMediaTypesParam &
  PrimitivePutStringBodyParam &
  RequestParameters;
export type PrimitiveGetDateParameters = RequestParameters;

export interface PrimitivePutDateBodyParam {
  /** Please put '0001-01-01' and '2016-02-29' */
  body: DateWrapper;
}

export interface PrimitivePutDateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutDateParameters = PrimitivePutDateMediaTypesParam &
  PrimitivePutDateBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeParameters = RequestParameters;

export interface PrimitivePutDateTimeBodyParam {
  /** Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00' */
  body: DatetimeWrapper;
}

export interface PrimitivePutDateTimeMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutDateTimeParameters = PrimitivePutDateTimeMediaTypesParam &
  PrimitivePutDateTimeBodyParam &
  RequestParameters;
export type PrimitiveGetDateTimeRfc1123Parameters = RequestParameters;

export interface PrimitivePutDateTimeRfc1123BodyParam {
  /** Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT' */
  body: Datetimerfc1123Wrapper;
}

export interface PrimitivePutDateTimeRfc1123MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutDateTimeRfc1123Parameters = PrimitivePutDateTimeRfc1123MediaTypesParam &
  PrimitivePutDateTimeRfc1123BodyParam &
  RequestParameters;
export type PrimitiveGetDurationParameters = RequestParameters;

export interface PrimitivePutDurationBodyParam {
  /** Please put 'P123DT22H14M12.011S' */
  body: DurationWrapper;
}

export interface PrimitivePutDurationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutDurationParameters = PrimitivePutDurationMediaTypesParam &
  PrimitivePutDurationBodyParam &
  RequestParameters;
export type PrimitiveGetByteParameters = RequestParameters;

export interface PrimitivePutByteBodyParam {
  /** Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6) */
  body: ByteWrapper;
}

export interface PrimitivePutByteMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitivePutByteParameters = PrimitivePutByteMediaTypesParam &
  PrimitivePutByteBodyParam &
  RequestParameters;
export type ArrayGetValidParameters = RequestParameters;

export interface ArrayPutValidBodyParam {
  /** Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog" */
  body: ArrayWrapper;
}

export interface ArrayPutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ArrayPutValidParameters = ArrayPutValidMediaTypesParam &
  ArrayPutValidBodyParam &
  RequestParameters;
export type ArrayGetEmptyParameters = RequestParameters;

export interface ArrayPutEmptyBodyParam {
  /** Please put an empty array */
  body: ArrayWrapper;
}

export interface ArrayPutEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ArrayPutEmptyParameters = ArrayPutEmptyMediaTypesParam &
  ArrayPutEmptyBodyParam &
  RequestParameters;
export type ArrayGetNotProvidedParameters = RequestParameters;
export type DictionaryGetValidParameters = RequestParameters;

export interface DictionaryPutValidBodyParam {
  /** Please put a dictionary with 5 key-value pairs: "txt":"notepad", "bmp":"mspaint", "xls":"excel", "exe":"", "":null */
  body: DictionaryWrapper;
}

export interface DictionaryPutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DictionaryPutValidParameters = DictionaryPutValidMediaTypesParam &
  DictionaryPutValidBodyParam &
  RequestParameters;
export type DictionaryGetEmptyParameters = RequestParameters;

export interface DictionaryPutEmptyBodyParam {
  /** Please put an empty dictionary */
  body: DictionaryWrapper;
}

export interface DictionaryPutEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DictionaryPutEmptyParameters = DictionaryPutEmptyMediaTypesParam &
  DictionaryPutEmptyBodyParam &
  RequestParameters;
export type DictionaryGetNullParameters = RequestParameters;
export type DictionaryGetNotProvidedParameters = RequestParameters;
export type InheritanceGetValidParameters = RequestParameters;

export interface InheritancePutValidBodyParam {
  /** Please put a siamese with id=2, name="Siameee", color=green, breed=persion, which hates 2 dogs, the 1st one named "Potato" with id=1 and food="tomato", and the 2nd one named "Tomato" with id=-1 and food="french fries". */
  body: Siamese;
}

export interface InheritancePutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type InheritancePutValidParameters = InheritancePutValidMediaTypesParam &
  InheritancePutValidBodyParam &
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

export interface PolymorphismPutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismPutValidParameters = PolymorphismPutValidMediaTypesParam &
  PolymorphismPutValidBodyParam &
  RequestParameters;
export type PolymorphismGetDotSyntaxParameters = RequestParameters;
export type PolymorphismGetComposedWithDiscriminatorParameters = RequestParameters;
export type PolymorphismGetComposedWithoutDiscriminatorParameters = RequestParameters;
export type PolymorphismGetComplicatedParameters = RequestParameters;

export interface PolymorphismPutComplicatedBodyParam {
  body: Salmon;
}

export interface PolymorphismPutComplicatedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismPutComplicatedParameters = PolymorphismPutComplicatedMediaTypesParam &
  PolymorphismPutComplicatedBodyParam &
  RequestParameters;

export interface PolymorphismPutMissingDiscriminatorBodyParam {
  body: Salmon;
}

export interface PolymorphismPutMissingDiscriminatorMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismPutMissingDiscriminatorParameters = PolymorphismPutMissingDiscriminatorMediaTypesParam &
  PolymorphismPutMissingDiscriminatorBodyParam &
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

export interface PolymorphismPutValidMissingRequiredMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismPutValidMissingRequiredParameters = PolymorphismPutValidMissingRequiredMediaTypesParam &
  PolymorphismPutValidMissingRequiredBodyParam &
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

export interface PolymorphicrecursivePutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphicrecursivePutValidParameters = PolymorphicrecursivePutValidMediaTypesParam &
  PolymorphicrecursivePutValidBodyParam &
  RequestParameters;
export type ReadonlypropertyGetValidParameters = RequestParameters;

export interface ReadonlypropertyPutValidBodyParam {
  body: ReadonlyObj;
}

export interface ReadonlypropertyPutValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ReadonlypropertyPutValidParameters = ReadonlypropertyPutValidMediaTypesParam &
  ReadonlypropertyPutValidBodyParam &
  RequestParameters;
export type FlattencomplexGetValidParameters = RequestParameters;
