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

export type BasicgetValidParameters = RequestParameters;

export interface BasicputValidBodyParam {
  /** Please put {id: 2, name: 'abc', color: 'Magenta'} */
  body: BasicDef;
}

export interface BasicputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type BasicputValidParameters = BasicputValidMediaTypesParam &
  BasicputValidBodyParam &
  RequestParameters;
export type BasicgetInvalidParameters = RequestParameters;
export type BasicgetEmptyParameters = RequestParameters;
export type BasicgetNullParameters = RequestParameters;
export type BasicgetNotProvidedParameters = RequestParameters;
export type PrimitivegetIntParameters = RequestParameters;

export interface PrimitiveputIntBodyParam {
  /** Please put -1 and 2 */
  body: IntWrapper;
}

export interface PrimitiveputIntMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputIntParameters = PrimitiveputIntMediaTypesParam &
  PrimitiveputIntBodyParam &
  RequestParameters;
export type PrimitivegetLongParameters = RequestParameters;

export interface PrimitiveputLongBodyParam {
  /** Please put 1099511627775 and -999511627788 */
  body: LongWrapper;
}

export interface PrimitiveputLongMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputLongParameters = PrimitiveputLongMediaTypesParam &
  PrimitiveputLongBodyParam &
  RequestParameters;
export type PrimitivegetFloatParameters = RequestParameters;

export interface PrimitiveputFloatBodyParam {
  /** Please put 1.05 and -0.003 */
  body: FloatWrapper;
}

export interface PrimitiveputFloatMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputFloatParameters = PrimitiveputFloatMediaTypesParam &
  PrimitiveputFloatBodyParam &
  RequestParameters;
export type PrimitivegetDoubleParameters = RequestParameters;

export interface PrimitiveputDoubleBodyParam {
  /** Please put 3e-100 and -0.000000000000000000000000000000000000000000000000000000005 */
  body: DoubleWrapper;
}

export interface PrimitiveputDoubleMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputDoubleParameters = PrimitiveputDoubleMediaTypesParam &
  PrimitiveputDoubleBodyParam &
  RequestParameters;
export type PrimitivegetBoolParameters = RequestParameters;

export interface PrimitiveputBoolBodyParam {
  /** Please put true and false */
  body: BooleanWrapper;
}

export interface PrimitiveputBoolMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputBoolParameters = PrimitiveputBoolMediaTypesParam &
  PrimitiveputBoolBodyParam &
  RequestParameters;
export type PrimitivegetStringParameters = RequestParameters;

export interface PrimitiveputStringBodyParam {
  /** Please put 'goodrequest', '', and null */
  body: StringWrapper;
}

export interface PrimitiveputStringMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputStringParameters = PrimitiveputStringMediaTypesParam &
  PrimitiveputStringBodyParam &
  RequestParameters;
export type PrimitivegetDateParameters = RequestParameters;

export interface PrimitiveputDateBodyParam {
  /** Please put '0001-01-01' and '2016-02-29' */
  body: DateWrapper;
}

export interface PrimitiveputDateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputDateParameters = PrimitiveputDateMediaTypesParam &
  PrimitiveputDateBodyParam &
  RequestParameters;
export type PrimitivegetDateTimeParameters = RequestParameters;

export interface PrimitiveputDateTimeBodyParam {
  /** Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00' */
  body: DatetimeWrapper;
}

export interface PrimitiveputDateTimeMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputDateTimeParameters = PrimitiveputDateTimeMediaTypesParam &
  PrimitiveputDateTimeBodyParam &
  RequestParameters;
export type PrimitivegetDateTimeRfc1123Parameters = RequestParameters;

export interface PrimitiveputDateTimeRfc1123BodyParam {
  /** Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT' */
  body: Datetimerfc1123Wrapper;
}

export interface PrimitiveputDateTimeRfc1123MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputDateTimeRfc1123Parameters = PrimitiveputDateTimeRfc1123MediaTypesParam &
  PrimitiveputDateTimeRfc1123BodyParam &
  RequestParameters;
export type PrimitivegetDurationParameters = RequestParameters;

export interface PrimitiveputDurationBodyParam {
  /** Please put 'P123DT22H14M12.011S' */
  body: DurationWrapper;
}

export interface PrimitiveputDurationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputDurationParameters = PrimitiveputDurationMediaTypesParam &
  PrimitiveputDurationBodyParam &
  RequestParameters;
export type PrimitivegetByteParameters = RequestParameters;

export interface PrimitiveputByteBodyParam {
  /** Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6) */
  body: ByteWrapper;
}

export interface PrimitiveputByteMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PrimitiveputByteParameters = PrimitiveputByteMediaTypesParam &
  PrimitiveputByteBodyParam &
  RequestParameters;
export type ArraygetValidParameters = RequestParameters;

export interface ArrayputValidBodyParam {
  /** Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog" */
  body: ArrayWrapper;
}

export interface ArrayputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ArrayputValidParameters = ArrayputValidMediaTypesParam &
  ArrayputValidBodyParam &
  RequestParameters;
export type ArraygetEmptyParameters = RequestParameters;

export interface ArrayputEmptyBodyParam {
  /** Please put an empty array */
  body: ArrayWrapper;
}

export interface ArrayputEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ArrayputEmptyParameters = ArrayputEmptyMediaTypesParam &
  ArrayputEmptyBodyParam &
  RequestParameters;
export type ArraygetNotProvidedParameters = RequestParameters;
export type DictionarygetValidParameters = RequestParameters;

export interface DictionaryputValidBodyParam {
  /** Please put a dictionary with 5 key-value pairs: "txt":"notepad", "bmp":"mspaint", "xls":"excel", "exe":"", "":null */
  body: DictionaryWrapper;
}

export interface DictionaryputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DictionaryputValidParameters = DictionaryputValidMediaTypesParam &
  DictionaryputValidBodyParam &
  RequestParameters;
export type DictionarygetEmptyParameters = RequestParameters;

export interface DictionaryputEmptyBodyParam {
  /** Please put an empty dictionary */
  body: DictionaryWrapper;
}

export interface DictionaryputEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DictionaryputEmptyParameters = DictionaryputEmptyMediaTypesParam &
  DictionaryputEmptyBodyParam &
  RequestParameters;
export type DictionarygetNullParameters = RequestParameters;
export type DictionarygetNotProvidedParameters = RequestParameters;
export type InheritancegetValidParameters = RequestParameters;

export interface InheritanceputValidBodyParam {
  /** Please put a siamese with id=2, name="Siameee", color=green, breed=persion, which hates 2 dogs, the 1st one named "Potato" with id=1 and food="tomato", and the 2nd one named "Tomato" with id=-1 and food="french fries". */
  body: Siamese;
}

export interface InheritanceputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type InheritanceputValidParameters = InheritanceputValidMediaTypesParam &
  InheritanceputValidBodyParam &
  RequestParameters;
export type PolymorphismgetValidParameters = RequestParameters;

export interface PolymorphismputValidBodyParam {
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

export interface PolymorphismputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismputValidParameters = PolymorphismputValidMediaTypesParam &
  PolymorphismputValidBodyParam &
  RequestParameters;
export type PolymorphismgetDotSyntaxParameters = RequestParameters;
export type PolymorphismgetComposedWithDiscriminatorParameters = RequestParameters;
export type PolymorphismgetComposedWithoutDiscriminatorParameters = RequestParameters;
export type PolymorphismgetComplicatedParameters = RequestParameters;

export interface PolymorphismputComplicatedBodyParam {
  body: Salmon;
}

export interface PolymorphismputComplicatedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismputComplicatedParameters = PolymorphismputComplicatedMediaTypesParam &
  PolymorphismputComplicatedBodyParam &
  RequestParameters;

export interface PolymorphismputMissingDiscriminatorBodyParam {
  body: Salmon;
}

export interface PolymorphismputMissingDiscriminatorMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismputMissingDiscriminatorParameters = PolymorphismputMissingDiscriminatorMediaTypesParam &
  PolymorphismputMissingDiscriminatorBodyParam &
  RequestParameters;

export interface PolymorphismputValidMissingRequiredBodyParam {
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

export interface PolymorphismputValidMissingRequiredMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphismputValidMissingRequiredParameters = PolymorphismputValidMissingRequiredMediaTypesParam &
  PolymorphismputValidMissingRequiredBodyParam &
  RequestParameters;
export type PolymorphicrecursivegetValidParameters = RequestParameters;

export interface PolymorphicrecursiveputValidBodyParam {
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

export interface PolymorphicrecursiveputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PolymorphicrecursiveputValidParameters = PolymorphicrecursiveputValidMediaTypesParam &
  PolymorphicrecursiveputValidBodyParam &
  RequestParameters;
export type ReadonlypropertygetValidParameters = RequestParameters;

export interface ReadonlypropertyputValidBodyParam {
  body: ReadonlyObj;
}

export interface ReadonlypropertyputValidMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ReadonlypropertyputValidParameters = ReadonlypropertyputValidMediaTypesParam &
  ReadonlypropertyputValidBodyParam &
  RequestParameters;
export type FlattencomplexgetValidParameters = RequestParameters;
