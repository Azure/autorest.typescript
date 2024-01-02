// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PathsGetBooleanTrueParameters,
  PathsGetBooleanFalseParameters,
  PathsGetIntOneMillionParameters,
  PathsGetIntNegativeOneMillionParameters,
  PathsGetTenBillionParameters,
  PathsGetNegativeTenBillionParameters,
  PathsFloatScientificPositiveParameters,
  PathsFloatScientificNegativeParameters,
  PathsDoubleDecimalPositiveParameters,
  PathsDoubleDecimalNegativeParameters,
  PathsStringUnicodeParameters,
  PathsStringUrlEncodedParameters,
  PathsStringUrlNonEncodedParameters,
  PathsStringEmptyParameters,
  PathsStringNullParameters,
  PathsEnumValidParameters,
  PathsEnumNullParameters,
  PathsByteMultiByteParameters,
  PathsByteEmptyParameters,
  PathsByteNullParameters,
  PathsDateValidParameters,
  PathsDateNullParameters,
  PathsDateTimeValidParameters,
  PathsDateTimeNullParameters,
  PathsBase64UrlParameters,
  PathsArrayCsvInPathParameters,
  PathsUnixTimeUrlParameters,
  QueriesGetBooleanTrueParameters,
  QueriesGetBooleanFalseParameters,
  QueriesGetBooleanNullParameters,
  QueriesGetIntOneMillionParameters,
  QueriesGetIntNegativeOneMillionParameters,
  QueriesGetIntNullParameters,
  QueriesGetTenBillionParameters,
  QueriesGetNegativeTenBillionParameters,
  QueriesGetLongNullParameters,
  QueriesFloatScientificPositiveParameters,
  QueriesFloatScientificNegativeParameters,
  QueriesFloatNullParameters,
  QueriesDoubleDecimalPositiveParameters,
  QueriesDoubleDecimalNegativeParameters,
  QueriesDoubleNullParameters,
  QueriesStringUnicodeParameters,
  QueriesStringUrlEncodedParameters,
  QueriesStringEmptyParameters,
  QueriesStringNullParameters,
  QueriesEnumValidParameters,
  QueriesEnumNullParameters,
  QueriesByteMultiByteParameters,
  QueriesByteEmptyParameters,
  QueriesByteNullParameters,
  QueriesDateValidParameters,
  QueriesDateNullParameters,
  QueriesDateTimeValidParameters,
  QueriesDateTimeNullParameters,
  QueriesArrayStringCsvValidParameters,
  QueriesArrayStringCsvNullParameters,
  QueriesArrayStringCsvEmptyParameters,
  QueriesArrayStringNoCollectionFormatEmptyParameters,
  QueriesArrayStringSsvValidParameters,
  QueriesArrayStringTsvValidParameters,
  QueriesArrayStringPipesValidParameters,
  PathItemsGetAllWithValuesParameters,
  PathItemsGetGlobalQueryNullParameters,
  PathItemsGetGlobalAndLocalQueryNullParameters,
  PathItemsGetLocalPathItemQueryNullParameters,
} from "./parameters";
import {
  PathsGetBooleanTrue200Response,
  PathsGetBooleanTrueDefaultResponse,
  PathsGetBooleanFalse200Response,
  PathsGetBooleanFalseDefaultResponse,
  PathsGetIntOneMillion200Response,
  PathsGetIntOneMillionDefaultResponse,
  PathsGetIntNegativeOneMillion200Response,
  PathsGetIntNegativeOneMillionDefaultResponse,
  PathsGetTenBillion200Response,
  PathsGetTenBillionDefaultResponse,
  PathsGetNegativeTenBillion200Response,
  PathsGetNegativeTenBillionDefaultResponse,
  PathsFloatScientificPositive200Response,
  PathsFloatScientificPositiveDefaultResponse,
  PathsFloatScientificNegative200Response,
  PathsFloatScientificNegativeDefaultResponse,
  PathsDoubleDecimalPositive200Response,
  PathsDoubleDecimalPositiveDefaultResponse,
  PathsDoubleDecimalNegative200Response,
  PathsDoubleDecimalNegativeDefaultResponse,
  PathsStringUnicode200Response,
  PathsStringUnicodeDefaultResponse,
  PathsStringUrlEncoded200Response,
  PathsStringUrlEncodedDefaultResponse,
  PathsStringUrlNonEncoded200Response,
  PathsStringUrlNonEncodedDefaultResponse,
  PathsStringEmpty200Response,
  PathsStringEmptyDefaultResponse,
  PathsStringNull400Response,
  PathsStringNullDefaultResponse,
  PathsEnumValid200Response,
  PathsEnumValidDefaultResponse,
  PathsEnumNull400Response,
  PathsEnumNullDefaultResponse,
  PathsByteMultiByte200Response,
  PathsByteMultiByteDefaultResponse,
  PathsByteEmpty200Response,
  PathsByteEmptyDefaultResponse,
  PathsByteNull400Response,
  PathsByteNullDefaultResponse,
  PathsDateValid200Response,
  PathsDateValidDefaultResponse,
  PathsDateNull400Response,
  PathsDateNullDefaultResponse,
  PathsDateTimeValid200Response,
  PathsDateTimeValidDefaultResponse,
  PathsDateTimeNull400Response,
  PathsDateTimeNullDefaultResponse,
  PathsBase64Url200Response,
  PathsBase64UrlDefaultResponse,
  PathsArrayCsvInPath200Response,
  PathsArrayCsvInPathDefaultResponse,
  PathsUnixTimeUrl200Response,
  PathsUnixTimeUrlDefaultResponse,
  QueriesGetBooleanTrue200Response,
  QueriesGetBooleanTrueDefaultResponse,
  QueriesGetBooleanFalse200Response,
  QueriesGetBooleanFalseDefaultResponse,
  QueriesGetBooleanNull200Response,
  QueriesGetBooleanNullDefaultResponse,
  QueriesGetIntOneMillion200Response,
  QueriesGetIntOneMillionDefaultResponse,
  QueriesGetIntNegativeOneMillion200Response,
  QueriesGetIntNegativeOneMillionDefaultResponse,
  QueriesGetIntNull200Response,
  QueriesGetIntNullDefaultResponse,
  QueriesGetTenBillion200Response,
  QueriesGetTenBillionDefaultResponse,
  QueriesGetNegativeTenBillion200Response,
  QueriesGetNegativeTenBillionDefaultResponse,
  QueriesGetLongNull200Response,
  QueriesGetLongNullDefaultResponse,
  QueriesFloatScientificPositive200Response,
  QueriesFloatScientificPositiveDefaultResponse,
  QueriesFloatScientificNegative200Response,
  QueriesFloatScientificNegativeDefaultResponse,
  QueriesFloatNull200Response,
  QueriesFloatNullDefaultResponse,
  QueriesDoubleDecimalPositive200Response,
  QueriesDoubleDecimalPositiveDefaultResponse,
  QueriesDoubleDecimalNegative200Response,
  QueriesDoubleDecimalNegativeDefaultResponse,
  QueriesDoubleNull200Response,
  QueriesDoubleNullDefaultResponse,
  QueriesStringUnicode200Response,
  QueriesStringUnicodeDefaultResponse,
  QueriesStringUrlEncoded200Response,
  QueriesStringUrlEncodedDefaultResponse,
  QueriesStringEmpty200Response,
  QueriesStringEmptyDefaultResponse,
  QueriesStringNull200Response,
  QueriesStringNullDefaultResponse,
  QueriesEnumValid200Response,
  QueriesEnumValidDefaultResponse,
  QueriesEnumNull200Response,
  QueriesEnumNullDefaultResponse,
  QueriesByteMultiByte200Response,
  QueriesByteMultiByteDefaultResponse,
  QueriesByteEmpty200Response,
  QueriesByteEmptyDefaultResponse,
  QueriesByteNull200Response,
  QueriesByteNullDefaultResponse,
  QueriesDateValid200Response,
  QueriesDateValidDefaultResponse,
  QueriesDateNull200Response,
  QueriesDateNullDefaultResponse,
  QueriesDateTimeValid200Response,
  QueriesDateTimeValidDefaultResponse,
  QueriesDateTimeNull200Response,
  QueriesDateTimeNullDefaultResponse,
  QueriesArrayStringCsvValid200Response,
  QueriesArrayStringCsvValidDefaultResponse,
  QueriesArrayStringCsvNull200Response,
  QueriesArrayStringCsvNullDefaultResponse,
  QueriesArrayStringCsvEmpty200Response,
  QueriesArrayStringCsvEmptyDefaultResponse,
  QueriesArrayStringNoCollectionFormatEmpty200Response,
  QueriesArrayStringNoCollectionFormatEmptyDefaultResponse,
  QueriesArrayStringSsvValid200Response,
  QueriesArrayStringSsvValidDefaultResponse,
  QueriesArrayStringTsvValid200Response,
  QueriesArrayStringTsvValidDefaultResponse,
  QueriesArrayStringPipesValid200Response,
  QueriesArrayStringPipesValidDefaultResponse,
  PathItemsGetAllWithValues200Response,
  PathItemsGetAllWithValuesDefaultResponse,
  PathItemsGetGlobalQueryNull200Response,
  PathItemsGetGlobalQueryNullDefaultResponse,
  PathItemsGetGlobalAndLocalQueryNull200Response,
  PathItemsGetGlobalAndLocalQueryNullDefaultResponse,
  PathItemsGetLocalPathItemQueryNull200Response,
  PathItemsGetLocalPathItemQueryNullDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Paths operations */
export interface PathsOperations {
  /** Get true Boolean value on path */
  getBooleanTrue(
    boolPath: true,
    options?: PathsGetBooleanTrueParameters,
  ): StreamableMethod<
    PathsGetBooleanTrue200Response | PathsGetBooleanTrueDefaultResponse
  >;
  /** Get false Boolean value on path */
  getBooleanFalse(
    boolPath: false,
    options?: PathsGetBooleanFalseParameters,
  ): StreamableMethod<
    PathsGetBooleanFalse200Response | PathsGetBooleanFalseDefaultResponse
  >;
  /** Get '1000000' integer value */
  getIntOneMillion(
    intPath: 1000000,
    options?: PathsGetIntOneMillionParameters,
  ): StreamableMethod<
    PathsGetIntOneMillion200Response | PathsGetIntOneMillionDefaultResponse
  >;
  /** Get '-1000000' integer value */
  getIntNegativeOneMillion(
    intPath: -1000000,
    options?: PathsGetIntNegativeOneMillionParameters,
  ): StreamableMethod<
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMillionDefaultResponse
  >;
  /** Get '10000000000' 64 bit integer value */
  getTenBillion(
    longPath: 10000000000,
    options?: PathsGetTenBillionParameters,
  ): StreamableMethod<
    PathsGetTenBillion200Response | PathsGetTenBillionDefaultResponse
  >;
  /** Get '-10000000000' 64 bit integer value */
  getNegativeTenBillion(
    longPath: -10000000000,
    options?: PathsGetNegativeTenBillionParameters,
  ): StreamableMethod<
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBillionDefaultResponse
  >;
  /** Get '1.034E+20' numeric value */
  floatScientificPositive(
    floatPath: 103400000000000000000,
    options?: PathsFloatScientificPositiveParameters,
  ): StreamableMethod<
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositiveDefaultResponse
  >;
  /** Get '-1.034E-20' numeric value */
  floatScientificNegative(
    floatPath: -1.034e-20,
    options?: PathsFloatScientificNegativeParameters,
  ): StreamableMethod<
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativeDefaultResponse
  >;
  /** Get '9999999.999' numeric value */
  doubleDecimalPositive(
    doublePath: 9999999.999,
    options?: PathsDoubleDecimalPositiveParameters,
  ): StreamableMethod<
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositiveDefaultResponse
  >;
  /** Get '-9999999.999' numeric value */
  doubleDecimalNegative(
    doublePath: -9999999.999,
    options?: PathsDoubleDecimalNegativeParameters,
  ): StreamableMethod<
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativeDefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  stringUnicode(
    stringPath: "啊齄丂狛狜隣郎隣兀﨩",
    options?: PathsStringUnicodeParameters,
  ): StreamableMethod<
    PathsStringUnicode200Response | PathsStringUnicodeDefaultResponse
  >;
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  stringUrlEncoded(
    stringPath: "begin!*'();:@ &=+$,/?#[]end",
    options?: PathsStringUrlEncodedParameters,
  ): StreamableMethod<
    PathsStringUrlEncoded200Response | PathsStringUrlEncodedDefaultResponse
  >;
  /** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
  stringUrlNonEncoded(
    stringPath: "begin!*'();:@&=+$,end",
    options?: PathsStringUrlNonEncodedParameters,
  ): StreamableMethod<
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodedDefaultResponse
  >;
  /** Get '' */
  stringEmpty(
    stringPath: "",
    options?: PathsStringEmptyParameters,
  ): StreamableMethod<
    PathsStringEmpty200Response | PathsStringEmptyDefaultResponse
  >;
  /** Get null (should throw) */
  stringNull(
    stringPath: string,
    options?: PathsStringNullParameters,
  ): StreamableMethod<
    PathsStringNull400Response | PathsStringNullDefaultResponse
  >;
  /** Get using uri with 'green color' in path parameter */
  enumValid(
    enumPath: "red color" | "green color" | "blue color",
    options?: PathsEnumValidParameters,
  ): StreamableMethod<
    PathsEnumValid200Response | PathsEnumValidDefaultResponse
  >;
  /** Get null (should throw on the client before the request is sent on wire) */
  enumNull(
    enumPath: "red color" | "green color" | "blue color",
    options?: PathsEnumNullParameters,
  ): StreamableMethod<PathsEnumNull400Response | PathsEnumNullDefaultResponse>;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  byteMultiByte(
    bytePath: string,
    options?: PathsByteMultiByteParameters,
  ): StreamableMethod<
    PathsByteMultiByte200Response | PathsByteMultiByteDefaultResponse
  >;
  /** Get '' as byte array */
  byteEmpty(
    bytePath: "",
    options?: PathsByteEmptyParameters,
  ): StreamableMethod<
    PathsByteEmpty200Response | PathsByteEmptyDefaultResponse
  >;
  /** Get null as byte array (should throw) */
  byteNull(
    bytePath: string,
    options?: PathsByteNullParameters,
  ): StreamableMethod<PathsByteNull400Response | PathsByteNullDefaultResponse>;
  /** Get '2012-01-01' as date */
  dateValid(
    datePath: "2012-01-01",
    options?: PathsDateValidParameters,
  ): StreamableMethod<
    PathsDateValid200Response | PathsDateValidDefaultResponse
  >;
  /** Get null as date - this should throw or be unusable on the client side, depending on date representation */
  dateNull(
    datePath: Date | string,
    options?: PathsDateNullParameters,
  ): StreamableMethod<PathsDateNull400Response | PathsDateNullDefaultResponse>;
  /** Get '2012-01-01T01:01:01Z' as date-time */
  dateTimeValid(
    dateTimePath: "2012-01-01T01:01:01.000Z",
    options?: PathsDateTimeValidParameters,
  ): StreamableMethod<
    PathsDateTimeValid200Response | PathsDateTimeValidDefaultResponse
  >;
  /** Get null as date-time, should be disallowed or throw depending on representation of date-time */
  dateTimeNull(
    dateTimePath: Date | string,
    options?: PathsDateTimeNullParameters,
  ): StreamableMethod<
    PathsDateTimeNull400Response | PathsDateTimeNullDefaultResponse
  >;
  /** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
  base64Url(
    base64UrlPath: string,
    options?: PathsBase64UrlParameters,
  ): StreamableMethod<
    PathsBase64Url200Response | PathsBase64UrlDefaultResponse
  >;
  /** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayCsvInPath(
    arrayPath: Array<string>,
    options?: PathsArrayCsvInPathParameters,
  ): StreamableMethod<
    PathsArrayCsvInPath200Response | PathsArrayCsvInPathDefaultResponse
  >;
  /** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
  unixTimeUrl(
    unixTimeUrlPath: string,
    options?: PathsUnixTimeUrlParameters,
  ): StreamableMethod<
    PathsUnixTimeUrl200Response | PathsUnixTimeUrlDefaultResponse
  >;
}

/** Contains operations for Queries operations */
export interface QueriesOperations {
  /** Get true Boolean value on path */
  getBooleanTrue(
    options: QueriesGetBooleanTrueParameters,
  ): StreamableMethod<
    QueriesGetBooleanTrue200Response | QueriesGetBooleanTrueDefaultResponse
  >;
  /** Get false Boolean value on path */
  getBooleanFalse(
    options: QueriesGetBooleanFalseParameters,
  ): StreamableMethod<
    QueriesGetBooleanFalse200Response | QueriesGetBooleanFalseDefaultResponse
  >;
  /** Get null Boolean value on query (query string should be absent) */
  getBooleanNull(
    options?: QueriesGetBooleanNullParameters,
  ): StreamableMethod<
    QueriesGetBooleanNull200Response | QueriesGetBooleanNullDefaultResponse
  >;
  /** Get '1000000' integer value */
  getIntOneMillion(
    options: QueriesGetIntOneMillionParameters,
  ): StreamableMethod<
    QueriesGetIntOneMillion200Response | QueriesGetIntOneMillionDefaultResponse
  >;
  /** Get '-1000000' integer value */
  getIntNegativeOneMillion(
    options: QueriesGetIntNegativeOneMillionParameters,
  ): StreamableMethod<
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMillionDefaultResponse
  >;
  /** Get null integer value (no query parameter) */
  getIntNull(
    options?: QueriesGetIntNullParameters,
  ): StreamableMethod<
    QueriesGetIntNull200Response | QueriesGetIntNullDefaultResponse
  >;
  /** Get '10000000000' 64 bit integer value */
  getTenBillion(
    options: QueriesGetTenBillionParameters,
  ): StreamableMethod<
    QueriesGetTenBillion200Response | QueriesGetTenBillionDefaultResponse
  >;
  /** Get '-10000000000' 64 bit integer value */
  getNegativeTenBillion(
    options: QueriesGetNegativeTenBillionParameters,
  ): StreamableMethod<
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBillionDefaultResponse
  >;
  /** Get 'null 64 bit integer value (no query param in uri) */
  getLongNull(
    options?: QueriesGetLongNullParameters,
  ): StreamableMethod<
    QueriesGetLongNull200Response | QueriesGetLongNullDefaultResponse
  >;
  /** Get '1.034E+20' numeric value */
  floatScientificPositive(
    options: QueriesFloatScientificPositiveParameters,
  ): StreamableMethod<
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositiveDefaultResponse
  >;
  /** Get '-1.034E-20' numeric value */
  floatScientificNegative(
    options: QueriesFloatScientificNegativeParameters,
  ): StreamableMethod<
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativeDefaultResponse
  >;
  /** Get null numeric value (no query parameter) */
  floatNull(
    options?: QueriesFloatNullParameters,
  ): StreamableMethod<
    QueriesFloatNull200Response | QueriesFloatNullDefaultResponse
  >;
  /** Get '9999999.999' numeric value */
  doubleDecimalPositive(
    options: QueriesDoubleDecimalPositiveParameters,
  ): StreamableMethod<
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositiveDefaultResponse
  >;
  /** Get '-9999999.999' numeric value */
  doubleDecimalNegative(
    options: QueriesDoubleDecimalNegativeParameters,
  ): StreamableMethod<
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativeDefaultResponse
  >;
  /** Get null numeric value (no query parameter) */
  doubleNull(
    options?: QueriesDoubleNullParameters,
  ): StreamableMethod<
    QueriesDoubleNull200Response | QueriesDoubleNullDefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  stringUnicode(
    options: QueriesStringUnicodeParameters,
  ): StreamableMethod<
    QueriesStringUnicode200Response | QueriesStringUnicodeDefaultResponse
  >;
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  stringUrlEncoded(
    options: QueriesStringUrlEncodedParameters,
  ): StreamableMethod<
    QueriesStringUrlEncoded200Response | QueriesStringUrlEncodedDefaultResponse
  >;
  /** Get '' */
  stringEmpty(
    options: QueriesStringEmptyParameters,
  ): StreamableMethod<
    QueriesStringEmpty200Response | QueriesStringEmptyDefaultResponse
  >;
  /** Get null (no query parameter in url) */
  stringNull(
    options?: QueriesStringNullParameters,
  ): StreamableMethod<
    QueriesStringNull200Response | QueriesStringNullDefaultResponse
  >;
  /** Get using uri with query parameter 'green color' */
  enumValid(
    options?: QueriesEnumValidParameters,
  ): StreamableMethod<
    QueriesEnumValid200Response | QueriesEnumValidDefaultResponse
  >;
  /** Get null (no query parameter in url) */
  enumNull(
    options?: QueriesEnumNullParameters,
  ): StreamableMethod<
    QueriesEnumNull200Response | QueriesEnumNullDefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  byteMultiByte(
    options?: QueriesByteMultiByteParameters,
  ): StreamableMethod<
    QueriesByteMultiByte200Response | QueriesByteMultiByteDefaultResponse
  >;
  /** Get '' as byte array */
  byteEmpty(
    options: QueriesByteEmptyParameters,
  ): StreamableMethod<
    QueriesByteEmpty200Response | QueriesByteEmptyDefaultResponse
  >;
  /** Get null as byte array (no query parameters in uri) */
  byteNull(
    options?: QueriesByteNullParameters,
  ): StreamableMethod<
    QueriesByteNull200Response | QueriesByteNullDefaultResponse
  >;
  /** Get '2012-01-01' as date */
  dateValid(
    options: QueriesDateValidParameters,
  ): StreamableMethod<
    QueriesDateValid200Response | QueriesDateValidDefaultResponse
  >;
  /** Get null as date - this should result in no query parameters in uri */
  dateNull(
    options?: QueriesDateNullParameters,
  ): StreamableMethod<
    QueriesDateNull200Response | QueriesDateNullDefaultResponse
  >;
  /** Get '2012-01-01T01:01:01Z' as date-time */
  dateTimeValid(
    options: QueriesDateTimeValidParameters,
  ): StreamableMethod<
    QueriesDateTimeValid200Response | QueriesDateTimeValidDefaultResponse
  >;
  /** Get null as date-time, should result in no query parameters in uri */
  dateTimeNull(
    options?: QueriesDateTimeNullParameters,
  ): StreamableMethod<
    QueriesDateTimeNull200Response | QueriesDateTimeNullDefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayStringCsvValid(
    options?: QueriesArrayStringCsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValidDefaultResponse
  >;
  /** Get a null array of string using the csv-array format */
  arrayStringCsvNull(
    options?: QueriesArrayStringCsvNullParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNullDefaultResponse
  >;
  /** Get an empty array [] of string using the csv-array format */
  arrayStringCsvEmpty(
    options?: QueriesArrayStringCsvEmptyParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptyDefaultResponse
  >;
  /** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
  arrayStringNoCollectionFormatEmpty(
    options?: QueriesArrayStringNoCollectionFormatEmptyParameters,
  ): StreamableMethod<
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptyDefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  arrayStringSsvValid(
    options?: QueriesArrayStringSsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValidDefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  arrayStringTsvValid(
    options?: QueriesArrayStringTsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValidDefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  arrayStringPipesValid(
    options?: QueriesArrayStringPipesValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValidDefaultResponse
  >;
}

/** Contains operations for PathItems operations */
export interface PathItemsOperations {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  getAllWithValues(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetAllWithValuesParameters,
  ): StreamableMethod<
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesDefaultResponse
  >;
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  getGlobalQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNullDefaultResponse
  >;
  /** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
  getGlobalAndLocalQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalAndLocalQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNullDefaultResponse
  >;
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
  getLocalPathItemQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetLocalPathItemQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNullDefaultResponse
  >;
}

export interface PathsGetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options?: PathsGetBooleanTrueParameters,
  ): StreamableMethod<
    PathsGetBooleanTrue200Response | PathsGetBooleanTrueDefaultResponse
  >;
}

export interface PathsGetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options?: PathsGetBooleanFalseParameters,
  ): StreamableMethod<
    PathsGetBooleanFalse200Response | PathsGetBooleanFalseDefaultResponse
  >;
}

export interface PathsGetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options?: PathsGetIntOneMillionParameters,
  ): StreamableMethod<
    PathsGetIntOneMillion200Response | PathsGetIntOneMillionDefaultResponse
  >;
}

export interface PathsGetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options?: PathsGetIntNegativeOneMillionParameters,
  ): StreamableMethod<
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMillionDefaultResponse
  >;
}

export interface PathsGetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options?: PathsGetTenBillionParameters,
  ): StreamableMethod<
    PathsGetTenBillion200Response | PathsGetTenBillionDefaultResponse
  >;
}

export interface PathsGetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options?: PathsGetNegativeTenBillionParameters,
  ): StreamableMethod<
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBillionDefaultResponse
  >;
}

export interface PathsFloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options?: PathsFloatScientificPositiveParameters,
  ): StreamableMethod<
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositiveDefaultResponse
  >;
}

export interface PathsFloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options?: PathsFloatScientificNegativeParameters,
  ): StreamableMethod<
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativeDefaultResponse
  >;
}

export interface PathsDoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options?: PathsDoubleDecimalPositiveParameters,
  ): StreamableMethod<
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositiveDefaultResponse
  >;
}

export interface PathsDoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options?: PathsDoubleDecimalNegativeParameters,
  ): StreamableMethod<
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativeDefaultResponse
  >;
}

export interface PathsStringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options?: PathsStringUnicodeParameters,
  ): StreamableMethod<
    PathsStringUnicode200Response | PathsStringUnicodeDefaultResponse
  >;
}

export interface PathsStringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options?: PathsStringUrlEncodedParameters,
  ): StreamableMethod<
    PathsStringUrlEncoded200Response | PathsStringUrlEncodedDefaultResponse
  >;
}

export interface PathsStringUrlNonEncoded {
  /** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
  get(
    options?: PathsStringUrlNonEncodedParameters,
  ): StreamableMethod<
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodedDefaultResponse
  >;
}

export interface PathsStringEmpty {
  /** Get '' */
  get(
    options?: PathsStringEmptyParameters,
  ): StreamableMethod<
    PathsStringEmpty200Response | PathsStringEmptyDefaultResponse
  >;
}

export interface PathsStringNull {
  /** Get null (should throw) */
  get(
    options?: PathsStringNullParameters,
  ): StreamableMethod<
    PathsStringNull400Response | PathsStringNullDefaultResponse
  >;
}

export interface PathsEnumValid {
  /** Get using uri with 'green color' in path parameter */
  get(
    options?: PathsEnumValidParameters,
  ): StreamableMethod<
    PathsEnumValid200Response | PathsEnumValidDefaultResponse
  >;
}

export interface PathsEnumNull {
  /** Get null (should throw on the client before the request is sent on wire) */
  get(
    options?: PathsEnumNullParameters,
  ): StreamableMethod<PathsEnumNull400Response | PathsEnumNullDefaultResponse>;
}

export interface PathsByteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: PathsByteMultiByteParameters,
  ): StreamableMethod<
    PathsByteMultiByte200Response | PathsByteMultiByteDefaultResponse
  >;
}

export interface PathsByteEmpty {
  /** Get '' as byte array */
  get(
    options?: PathsByteEmptyParameters,
  ): StreamableMethod<
    PathsByteEmpty200Response | PathsByteEmptyDefaultResponse
  >;
}

export interface PathsByteNull {
  /** Get null as byte array (should throw) */
  get(
    options?: PathsByteNullParameters,
  ): StreamableMethod<PathsByteNull400Response | PathsByteNullDefaultResponse>;
}

export interface PathsDateValid {
  /** Get '2012-01-01' as date */
  get(
    options?: PathsDateValidParameters,
  ): StreamableMethod<
    PathsDateValid200Response | PathsDateValidDefaultResponse
  >;
}

export interface PathsDateNull {
  /** Get null as date - this should throw or be unusable on the client side, depending on date representation */
  get(
    options?: PathsDateNullParameters,
  ): StreamableMethod<PathsDateNull400Response | PathsDateNullDefaultResponse>;
}

export interface PathsDateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options?: PathsDateTimeValidParameters,
  ): StreamableMethod<
    PathsDateTimeValid200Response | PathsDateTimeValidDefaultResponse
  >;
}

export interface PathsDateTimeNull {
  /** Get null as date-time, should be disallowed or throw depending on representation of date-time */
  get(
    options?: PathsDateTimeNullParameters,
  ): StreamableMethod<
    PathsDateTimeNull400Response | PathsDateTimeNullDefaultResponse
  >;
}

export interface PathsBase64Url {
  /** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
  get(
    options?: PathsBase64UrlParameters,
  ): StreamableMethod<
    PathsBase64Url200Response | PathsBase64UrlDefaultResponse
  >;
}

export interface PathsArrayCsvInPath {
  /** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: PathsArrayCsvInPathParameters,
  ): StreamableMethod<
    PathsArrayCsvInPath200Response | PathsArrayCsvInPathDefaultResponse
  >;
}

export interface PathsUnixTimeUrl {
  /** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
  get(
    options?: PathsUnixTimeUrlParameters,
  ): StreamableMethod<
    PathsUnixTimeUrl200Response | PathsUnixTimeUrlDefaultResponse
  >;
}

export interface QueriesGetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options: QueriesGetBooleanTrueParameters,
  ): StreamableMethod<
    QueriesGetBooleanTrue200Response | QueriesGetBooleanTrueDefaultResponse
  >;
}

export interface QueriesGetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options: QueriesGetBooleanFalseParameters,
  ): StreamableMethod<
    QueriesGetBooleanFalse200Response | QueriesGetBooleanFalseDefaultResponse
  >;
}

export interface QueriesGetBooleanNull {
  /** Get null Boolean value on query (query string should be absent) */
  get(
    options?: QueriesGetBooleanNullParameters,
  ): StreamableMethod<
    QueriesGetBooleanNull200Response | QueriesGetBooleanNullDefaultResponse
  >;
}

export interface QueriesGetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options: QueriesGetIntOneMillionParameters,
  ): StreamableMethod<
    QueriesGetIntOneMillion200Response | QueriesGetIntOneMillionDefaultResponse
  >;
}

export interface QueriesGetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options: QueriesGetIntNegativeOneMillionParameters,
  ): StreamableMethod<
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMillionDefaultResponse
  >;
}

export interface QueriesGetIntNull {
  /** Get null integer value (no query parameter) */
  get(
    options?: QueriesGetIntNullParameters,
  ): StreamableMethod<
    QueriesGetIntNull200Response | QueriesGetIntNullDefaultResponse
  >;
}

export interface QueriesGetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options: QueriesGetTenBillionParameters,
  ): StreamableMethod<
    QueriesGetTenBillion200Response | QueriesGetTenBillionDefaultResponse
  >;
}

export interface QueriesGetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options: QueriesGetNegativeTenBillionParameters,
  ): StreamableMethod<
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBillionDefaultResponse
  >;
}

export interface QueriesGetLongNull {
  /** Get 'null 64 bit integer value (no query param in uri) */
  get(
    options?: QueriesGetLongNullParameters,
  ): StreamableMethod<
    QueriesGetLongNull200Response | QueriesGetLongNullDefaultResponse
  >;
}

export interface QueriesFloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options: QueriesFloatScientificPositiveParameters,
  ): StreamableMethod<
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositiveDefaultResponse
  >;
}

export interface QueriesFloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options: QueriesFloatScientificNegativeParameters,
  ): StreamableMethod<
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativeDefaultResponse
  >;
}

export interface QueriesFloatNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesFloatNullParameters,
  ): StreamableMethod<
    QueriesFloatNull200Response | QueriesFloatNullDefaultResponse
  >;
}

export interface QueriesDoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options: QueriesDoubleDecimalPositiveParameters,
  ): StreamableMethod<
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositiveDefaultResponse
  >;
}

export interface QueriesDoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options: QueriesDoubleDecimalNegativeParameters,
  ): StreamableMethod<
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativeDefaultResponse
  >;
}

export interface QueriesDoubleNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesDoubleNullParameters,
  ): StreamableMethod<
    QueriesDoubleNull200Response | QueriesDoubleNullDefaultResponse
  >;
}

export interface QueriesStringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options: QueriesStringUnicodeParameters,
  ): StreamableMethod<
    QueriesStringUnicode200Response | QueriesStringUnicodeDefaultResponse
  >;
}

export interface QueriesStringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options: QueriesStringUrlEncodedParameters,
  ): StreamableMethod<
    QueriesStringUrlEncoded200Response | QueriesStringUrlEncodedDefaultResponse
  >;
}

export interface QueriesStringEmpty {
  /** Get '' */
  get(
    options: QueriesStringEmptyParameters,
  ): StreamableMethod<
    QueriesStringEmpty200Response | QueriesStringEmptyDefaultResponse
  >;
}

export interface QueriesStringNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesStringNullParameters,
  ): StreamableMethod<
    QueriesStringNull200Response | QueriesStringNullDefaultResponse
  >;
}

export interface QueriesEnumValid {
  /** Get using uri with query parameter 'green color' */
  get(
    options?: QueriesEnumValidParameters,
  ): StreamableMethod<
    QueriesEnumValid200Response | QueriesEnumValidDefaultResponse
  >;
}

export interface QueriesEnumNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesEnumNullParameters,
  ): StreamableMethod<
    QueriesEnumNull200Response | QueriesEnumNullDefaultResponse
  >;
}

export interface QueriesByteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: QueriesByteMultiByteParameters,
  ): StreamableMethod<
    QueriesByteMultiByte200Response | QueriesByteMultiByteDefaultResponse
  >;
}

export interface QueriesByteEmpty {
  /** Get '' as byte array */
  get(
    options: QueriesByteEmptyParameters,
  ): StreamableMethod<
    QueriesByteEmpty200Response | QueriesByteEmptyDefaultResponse
  >;
}

export interface QueriesByteNull {
  /** Get null as byte array (no query parameters in uri) */
  get(
    options?: QueriesByteNullParameters,
  ): StreamableMethod<
    QueriesByteNull200Response | QueriesByteNullDefaultResponse
  >;
}

export interface QueriesDateValid {
  /** Get '2012-01-01' as date */
  get(
    options: QueriesDateValidParameters,
  ): StreamableMethod<
    QueriesDateValid200Response | QueriesDateValidDefaultResponse
  >;
}

export interface QueriesDateNull {
  /** Get null as date - this should result in no query parameters in uri */
  get(
    options?: QueriesDateNullParameters,
  ): StreamableMethod<
    QueriesDateNull200Response | QueriesDateNullDefaultResponse
  >;
}

export interface QueriesDateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options: QueriesDateTimeValidParameters,
  ): StreamableMethod<
    QueriesDateTimeValid200Response | QueriesDateTimeValidDefaultResponse
  >;
}

export interface QueriesDateTimeNull {
  /** Get null as date-time, should result in no query parameters in uri */
  get(
    options?: QueriesDateTimeNullParameters,
  ): StreamableMethod<
    QueriesDateTimeNull200Response | QueriesDateTimeNullDefaultResponse
  >;
}

export interface QueriesArrayStringCsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: QueriesArrayStringCsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValidDefaultResponse
  >;
}

export interface QueriesArrayStringCsvNull {
  /** Get a null array of string using the csv-array format */
  get(
    options?: QueriesArrayStringCsvNullParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNullDefaultResponse
  >;
}

export interface QueriesArrayStringCsvEmpty {
  /** Get an empty array [] of string using the csv-array format */
  get(
    options?: QueriesArrayStringCsvEmptyParameters,
  ): StreamableMethod<
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptyDefaultResponse
  >;
}

export interface QueriesArrayStringNoCollectionFormatEmpty {
  /** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
  get(
    options?: QueriesArrayStringNoCollectionFormatEmptyParameters,
  ): StreamableMethod<
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptyDefaultResponse
  >;
}

export interface QueriesArrayStringSsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  get(
    options?: QueriesArrayStringSsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValidDefaultResponse
  >;
}

export interface QueriesArrayStringTsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  get(
    options?: QueriesArrayStringTsvValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValidDefaultResponse
  >;
}

export interface QueriesArrayStringPipesValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  get(
    options?: QueriesArrayStringPipesValidParameters,
  ): StreamableMethod<
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValidDefaultResponse
  >;
}

export interface PathItemsGetAllWithValues {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsGetAllWithValuesParameters,
  ): StreamableMethod<
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesDefaultResponse
  >;
}

export interface PathItemsGetGlobalQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsGetGlobalQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNullDefaultResponse
  >;
}

export interface PathItemsGetGlobalAndLocalQueryNull {
  /** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
  get(
    options?: PathItemsGetGlobalAndLocalQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNullDefaultResponse
  >;
}

export interface PathItemsGetLocalPathItemQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
  get(
    options?: PathItemsGetLocalPathItemQueryNullParameters,
  ): StreamableMethod<
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNullDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paths/bool/true/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/true/{boolPath}", boolPath: true): PathsGetBooleanTrue;
  /** Resource for '/paths/bool/false/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/false/{boolPath}", boolPath: false): PathsGetBooleanFalse;
  /** Resource for '/paths/int/1000000/\{intPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/1000000/{intPath}",
    intPath: 1000000,
  ): PathsGetIntOneMillion;
  /** Resource for '/paths/int/-1000000/\{intPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/-1000000/{intPath}",
    intPath: -1000000,
  ): PathsGetIntNegativeOneMillion;
  /** Resource for '/paths/long/10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/10000000000/{longPath}",
    longPath: 10000000000,
  ): PathsGetTenBillion;
  /** Resource for '/paths/long/-10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/-10000000000/{longPath}",
    longPath: -10000000000,
  ): PathsGetNegativeTenBillion;
  /** Resource for '/paths/float/1.034E+20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/1.034E+20/{floatPath}",
    floatPath: 103400000000000000000,
  ): PathsFloatScientificPositive;
  /** Resource for '/paths/float/-1.034E-20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/-1.034E-20/{floatPath}",
    floatPath: -1.034e-20,
  ): PathsFloatScientificNegative;
  /** Resource for '/paths/double/9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/9999999.999/{doublePath}",
    doublePath: 9999999.999,
  ): PathsDoubleDecimalPositive;
  /** Resource for '/paths/double/-9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/-9999999.999/{doublePath}",
    doublePath: -9999999.999,
  ): PathsDoubleDecimalNegative;
  /** Resource for '/paths/string/unicode/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/unicode/{stringPath}",
    stringPath: "啊齄丂狛狜隣郎隣兀﨩",
  ): PathsStringUnicode;
  /** Resource for '/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
    stringPath: "begin!*'();:@ &=+$,/?#[]end",
  ): PathsStringUrlEncoded;
  /** Resource for '/paths/string/begin!*'();:@&=+$,end/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
    stringPath: "begin!*'();:@&=+$,end",
  ): PathsStringUrlNonEncoded;
  /** Resource for '/paths/string/empty/\{stringPath\}' has methods for the following verbs: get */
  (path: "/paths/string/empty/{stringPath}", stringPath: ""): PathsStringEmpty;
  /** Resource for '/paths/string/null/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/null/{stringPath}",
    stringPath: string,
  ): PathsStringNull;
  /** Resource for '/paths/enum/green%20color/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/enum/green%20color/{enumPath}",
    enumPath: "red color" | "green color" | "blue color",
  ): PathsEnumValid;
  /** Resource for '/paths/string/null/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/null/{enumPath}",
    enumPath: "red color" | "green color" | "blue color",
  ): PathsEnumNull;
  /** Resource for '/paths/byte/multibyte/\{bytePath\}' has methods for the following verbs: get */
  (
    path: "/paths/byte/multibyte/{bytePath}",
    bytePath: string,
  ): PathsByteMultiByte;
  /** Resource for '/paths/byte/empty/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/empty/{bytePath}", bytePath: ""): PathsByteEmpty;
  /** Resource for '/paths/byte/null/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/null/{bytePath}", bytePath: string): PathsByteNull;
  /** Resource for '/paths/date/2012-01-01/\{datePath\}' has methods for the following verbs: get */
  (
    path: "/paths/date/2012-01-01/{datePath}",
    datePath: "2012-01-01",
  ): PathsDateValid;
  /** Resource for '/paths/date/null/\{datePath\}' has methods for the following verbs: get */
  (path: "/paths/date/null/{datePath}", datePath: Date | string): PathsDateNull;
  /** Resource for '/paths/datetime/2012-01-01T01%3A01%3A01Z/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
    dateTimePath: "2012-01-01T01:01:01.000Z",
  ): PathsDateTimeValid;
  /** Resource for '/paths/datetime/null/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/null/{dateTimePath}",
    dateTimePath: Date | string,
  ): PathsDateTimeNull;
  /** Resource for '/paths/string/bG9yZW0/\{base64UrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/bG9yZW0/{base64UrlPath}",
    base64UrlPath: string,
  ): PathsBase64Url;
  /** Resource for '/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/\{arrayPath\}' has methods for the following verbs: get */
  (
    path: "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
    arrayPath: Array<string>,
  ): PathsArrayCsvInPath;
  /** Resource for '/paths/int/1460505600/\{unixTimeUrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/1460505600/{unixTimeUrlPath}",
    unixTimeUrlPath: string,
  ): PathsUnixTimeUrl;
  /** Resource for '/queries/bool/true' has methods for the following verbs: get */
  (path: "/queries/bool/true"): QueriesGetBooleanTrue;
  /** Resource for '/queries/bool/false' has methods for the following verbs: get */
  (path: "/queries/bool/false"): QueriesGetBooleanFalse;
  /** Resource for '/queries/bool/null' has methods for the following verbs: get */
  (path: "/queries/bool/null"): QueriesGetBooleanNull;
  /** Resource for '/queries/int/1000000' has methods for the following verbs: get */
  (path: "/queries/int/1000000"): QueriesGetIntOneMillion;
  /** Resource for '/queries/int/-1000000' has methods for the following verbs: get */
  (path: "/queries/int/-1000000"): QueriesGetIntNegativeOneMillion;
  /** Resource for '/queries/int/null' has methods for the following verbs: get */
  (path: "/queries/int/null"): QueriesGetIntNull;
  /** Resource for '/queries/long/10000000000' has methods for the following verbs: get */
  (path: "/queries/long/10000000000"): QueriesGetTenBillion;
  /** Resource for '/queries/long/-10000000000' has methods for the following verbs: get */
  (path: "/queries/long/-10000000000"): QueriesGetNegativeTenBillion;
  /** Resource for '/queries/long/null' has methods for the following verbs: get */
  (path: "/queries/long/null"): QueriesGetLongNull;
  /** Resource for '/queries/float/1.034E+20' has methods for the following verbs: get */
  (path: "/queries/float/1.034E+20"): QueriesFloatScientificPositive;
  /** Resource for '/queries/float/-1.034E-20' has methods for the following verbs: get */
  (path: "/queries/float/-1.034E-20"): QueriesFloatScientificNegative;
  /** Resource for '/queries/float/null' has methods for the following verbs: get */
  (path: "/queries/float/null"): QueriesFloatNull;
  /** Resource for '/queries/double/9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/9999999.999"): QueriesDoubleDecimalPositive;
  /** Resource for '/queries/double/-9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/-9999999.999"): QueriesDoubleDecimalNegative;
  /** Resource for '/queries/double/null' has methods for the following verbs: get */
  (path: "/queries/double/null"): QueriesDoubleNull;
  /** Resource for '/queries/string/unicode/' has methods for the following verbs: get */
  (path: "/queries/string/unicode/"): QueriesStringUnicode;
  /** Resource for '/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend' has methods for the following verbs: get */
  (
    path: "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend",
  ): QueriesStringUrlEncoded;
  /** Resource for '/queries/string/empty' has methods for the following verbs: get */
  (path: "/queries/string/empty"): QueriesStringEmpty;
  /** Resource for '/queries/string/null' has methods for the following verbs: get */
  (path: "/queries/string/null"): QueriesStringNull;
  /** Resource for '/queries/enum/green%20color' has methods for the following verbs: get */
  (path: "/queries/enum/green%20color"): QueriesEnumValid;
  /** Resource for '/queries/enum/null' has methods for the following verbs: get */
  (path: "/queries/enum/null"): QueriesEnumNull;
  /** Resource for '/queries/byte/multibyte' has methods for the following verbs: get */
  (path: "/queries/byte/multibyte"): QueriesByteMultiByte;
  /** Resource for '/queries/byte/empty' has methods for the following verbs: get */
  (path: "/queries/byte/empty"): QueriesByteEmpty;
  /** Resource for '/queries/byte/null' has methods for the following verbs: get */
  (path: "/queries/byte/null"): QueriesByteNull;
  /** Resource for '/queries/date/2012-01-01' has methods for the following verbs: get */
  (path: "/queries/date/2012-01-01"): QueriesDateValid;
  /** Resource for '/queries/date/null' has methods for the following verbs: get */
  (path: "/queries/date/null"): QueriesDateNull;
  /** Resource for '/queries/datetime/2012-01-01T01%3A01%3A01Z' has methods for the following verbs: get */
  (path: "/queries/datetime/2012-01-01T01%3A01%3A01Z"): QueriesDateTimeValid;
  /** Resource for '/queries/datetime/null' has methods for the following verbs: get */
  (path: "/queries/datetime/null"): QueriesDateTimeNull;
  /** Resource for '/queries/array/csv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/valid"): QueriesArrayStringCsvValid;
  /** Resource for '/queries/array/csv/string/null' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/null"): QueriesArrayStringCsvNull;
  /** Resource for '/queries/array/csv/string/empty' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/empty"): QueriesArrayStringCsvEmpty;
  /** Resource for '/queries/array/none/string/empty' has methods for the following verbs: get */
  (
    path: "/queries/array/none/string/empty",
  ): QueriesArrayStringNoCollectionFormatEmpty;
  /** Resource for '/queries/array/ssv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/ssv/string/valid"): QueriesArrayStringSsvValid;
  /** Resource for '/queries/array/tsv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/tsv/string/valid"): QueriesArrayStringTsvValid;
  /** Resource for '/queries/array/pipes/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/pipes/string/valid"): QueriesArrayStringPipesValid;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
  ): PathItemsGetAllWithValues;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
  ): PathItemsGetGlobalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
  ): PathItemsGetGlobalAndLocalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/null/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
  ): PathItemsGetLocalPathItemQueryNull;
}

export type UrlRestClient = Client & {
  path: Routes;
  paths: PathsOperations;
  queries: QueriesOperations;
  pathItems: PathItemsOperations;
};
