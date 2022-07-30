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
  PathItemsGetLocalPathItemQueryNullParameters
} from "./parameters";
import {
  PathsGetBooleanTrue200Response,
  PathsGetBooleanTruedefaultResponse,
  PathsGetBooleanFalse200Response,
  PathsGetBooleanFalsedefaultResponse,
  PathsGetIntOneMillion200Response,
  PathsGetIntOneMilliondefaultResponse,
  PathsGetIntNegativeOneMillion200Response,
  PathsGetIntNegativeOneMilliondefaultResponse,
  PathsGetTenBillion200Response,
  PathsGetTenBilliondefaultResponse,
  PathsGetNegativeTenBillion200Response,
  PathsGetNegativeTenBilliondefaultResponse,
  PathsFloatScientificPositive200Response,
  PathsFloatScientificPositivedefaultResponse,
  PathsFloatScientificNegative200Response,
  PathsFloatScientificNegativedefaultResponse,
  PathsDoubleDecimalPositive200Response,
  PathsDoubleDecimalPositivedefaultResponse,
  PathsDoubleDecimalNegative200Response,
  PathsDoubleDecimalNegativedefaultResponse,
  PathsStringUnicode200Response,
  PathsStringUnicodedefaultResponse,
  PathsStringUrlEncoded200Response,
  PathsStringUrlEncodeddefaultResponse,
  PathsStringUrlNonEncoded200Response,
  PathsStringUrlNonEncodeddefaultResponse,
  PathsStringEmpty200Response,
  PathsStringEmptydefaultResponse,
  PathsStringNull400Response,
  PathsStringNulldefaultResponse,
  PathsEnumValid200Response,
  PathsEnumValiddefaultResponse,
  PathsEnumNull400Response,
  PathsEnumNulldefaultResponse,
  PathsByteMultiByte200Response,
  PathsByteMultiBytedefaultResponse,
  PathsByteEmpty200Response,
  PathsByteEmptydefaultResponse,
  PathsByteNull400Response,
  PathsByteNulldefaultResponse,
  PathsDateValid200Response,
  PathsDateValiddefaultResponse,
  PathsDateNull400Response,
  PathsDateNulldefaultResponse,
  PathsDateTimeValid200Response,
  PathsDateTimeValiddefaultResponse,
  PathsDateTimeNull400Response,
  PathsDateTimeNulldefaultResponse,
  PathsBase64Url200Response,
  PathsBase64UrldefaultResponse,
  PathsArrayCsvInPath200Response,
  PathsArrayCsvInPathdefaultResponse,
  PathsUnixTimeUrl200Response,
  PathsUnixTimeUrldefaultResponse,
  QueriesGetBooleanTrue200Response,
  QueriesGetBooleanTruedefaultResponse,
  QueriesGetBooleanFalse200Response,
  QueriesGetBooleanFalsedefaultResponse,
  QueriesGetBooleanNull200Response,
  QueriesGetBooleanNulldefaultResponse,
  QueriesGetIntOneMillion200Response,
  QueriesGetIntOneMilliondefaultResponse,
  QueriesGetIntNegativeOneMillion200Response,
  QueriesGetIntNegativeOneMilliondefaultResponse,
  QueriesGetIntNull200Response,
  QueriesGetIntNulldefaultResponse,
  QueriesGetTenBillion200Response,
  QueriesGetTenBilliondefaultResponse,
  QueriesGetNegativeTenBillion200Response,
  QueriesGetNegativeTenBilliondefaultResponse,
  QueriesGetLongNull200Response,
  QueriesGetLongNulldefaultResponse,
  QueriesFloatScientificPositive200Response,
  QueriesFloatScientificPositivedefaultResponse,
  QueriesFloatScientificNegative200Response,
  QueriesFloatScientificNegativedefaultResponse,
  QueriesFloatNull200Response,
  QueriesFloatNulldefaultResponse,
  QueriesDoubleDecimalPositive200Response,
  QueriesDoubleDecimalPositivedefaultResponse,
  QueriesDoubleDecimalNegative200Response,
  QueriesDoubleDecimalNegativedefaultResponse,
  QueriesDoubleNull200Response,
  QueriesDoubleNulldefaultResponse,
  QueriesStringUnicode200Response,
  QueriesStringUnicodedefaultResponse,
  QueriesStringUrlEncoded200Response,
  QueriesStringUrlEncodeddefaultResponse,
  QueriesStringEmpty200Response,
  QueriesStringEmptydefaultResponse,
  QueriesStringNull200Response,
  QueriesStringNulldefaultResponse,
  QueriesEnumValid200Response,
  QueriesEnumValiddefaultResponse,
  QueriesEnumNull200Response,
  QueriesEnumNulldefaultResponse,
  QueriesByteMultiByte200Response,
  QueriesByteMultiBytedefaultResponse,
  QueriesByteEmpty200Response,
  QueriesByteEmptydefaultResponse,
  QueriesByteNull200Response,
  QueriesByteNulldefaultResponse,
  QueriesDateValid200Response,
  QueriesDateValiddefaultResponse,
  QueriesDateNull200Response,
  QueriesDateNulldefaultResponse,
  QueriesDateTimeValid200Response,
  QueriesDateTimeValiddefaultResponse,
  QueriesDateTimeNull200Response,
  QueriesDateTimeNulldefaultResponse,
  QueriesArrayStringCsvValid200Response,
  QueriesArrayStringCsvValiddefaultResponse,
  QueriesArrayStringCsvNull200Response,
  QueriesArrayStringCsvNulldefaultResponse,
  QueriesArrayStringCsvEmpty200Response,
  QueriesArrayStringCsvEmptydefaultResponse,
  QueriesArrayStringNoCollectionFormatEmpty200Response,
  QueriesArrayStringNoCollectionFormatEmptydefaultResponse,
  QueriesArrayStringSsvValid200Response,
  QueriesArrayStringSsvValiddefaultResponse,
  QueriesArrayStringTsvValid200Response,
  QueriesArrayStringTsvValiddefaultResponse,
  QueriesArrayStringPipesValid200Response,
  QueriesArrayStringPipesValiddefaultResponse,
  PathItemsGetAllWithValues200Response,
  PathItemsGetAllWithValuesdefaultResponse,
  PathItemsGetGlobalQueryNull200Response,
  PathItemsGetGlobalQueryNulldefaultResponse,
  PathItemsGetGlobalAndLocalQueryNull200Response,
  PathItemsGetGlobalAndLocalQueryNulldefaultResponse,
  PathItemsGetLocalPathItemQueryNull200Response,
  PathItemsGetLocalPathItemQueryNulldefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Paths operations */
export interface PathsOperations {
  /** Get true Boolean value on path */
  getBooleanTrue(
    boolPath: true,
    options?: PathsGetBooleanTrueParameters
  ): StreamableMethod<
    PathsGetBooleanTrue200Response | PathsGetBooleanTruedefaultResponse
  >;
  /** Get false Boolean value on path */
  getBooleanFalse(
    boolPath: false,
    options?: PathsGetBooleanFalseParameters
  ): StreamableMethod<
    PathsGetBooleanFalse200Response | PathsGetBooleanFalsedefaultResponse
  >;
  /** Get '1000000' integer value */
  getIntOneMillion(
    intPath: 1000000,
    options?: PathsGetIntOneMillionParameters
  ): StreamableMethod<
    PathsGetIntOneMillion200Response | PathsGetIntOneMilliondefaultResponse
  >;
  /** Get '-1000000' integer value */
  getIntNegativeOneMillion(
    intPath: -1000000,
    options?: PathsGetIntNegativeOneMillionParameters
  ): StreamableMethod<
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMilliondefaultResponse
  >;
  /** Get '10000000000' 64 bit integer value */
  getTenBillion(
    longPath: 10000000000,
    options?: PathsGetTenBillionParameters
  ): StreamableMethod<
    PathsGetTenBillion200Response | PathsGetTenBilliondefaultResponse
  >;
  /** Get '-10000000000' 64 bit integer value */
  getNegativeTenBillion(
    longPath: -10000000000,
    options?: PathsGetNegativeTenBillionParameters
  ): StreamableMethod<
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBilliondefaultResponse
  >;
  /** Get '1.034E+20' numeric value */
  floatScientificPositive(
    floatPath: 103400000000000000000,
    options?: PathsFloatScientificPositiveParameters
  ): StreamableMethod<
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositivedefaultResponse
  >;
  /** Get '-1.034E-20' numeric value */
  floatScientificNegative(
    floatPath: -1.034e-20,
    options?: PathsFloatScientificNegativeParameters
  ): StreamableMethod<
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativedefaultResponse
  >;
  /** Get '9999999.999' numeric value */
  doubleDecimalPositive(
    doublePath: 9999999.999,
    options?: PathsDoubleDecimalPositiveParameters
  ): StreamableMethod<
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositivedefaultResponse
  >;
  /** Get '-9999999.999' numeric value */
  doubleDecimalNegative(
    doublePath: -9999999.999,
    options?: PathsDoubleDecimalNegativeParameters
  ): StreamableMethod<
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativedefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  stringUnicode(
    stringPath: "啊齄丂狛狜隣郎隣兀﨩",
    options?: PathsStringUnicodeParameters
  ): StreamableMethod<
    PathsStringUnicode200Response | PathsStringUnicodedefaultResponse
  >;
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  stringUrlEncoded(
    stringPath: "begin!*'();:@ &=+$,/?#[]end",
    options?: PathsStringUrlEncodedParameters
  ): StreamableMethod<
    PathsStringUrlEncoded200Response | PathsStringUrlEncodeddefaultResponse
  >;
  /** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
  stringUrlNonEncoded(
    stringPath: "begin!*'();:@&=+$,end",
    options?: PathsStringUrlNonEncodedParameters
  ): StreamableMethod<
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodeddefaultResponse
  >;
  /** Get '' */
  stringEmpty(
    stringPath: "",
    options?: PathsStringEmptyParameters
  ): StreamableMethod<
    PathsStringEmpty200Response | PathsStringEmptydefaultResponse
  >;
  /** Get null (should throw) */
  stringNull(
    stringPath: string,
    options?: PathsStringNullParameters
  ): StreamableMethod<
    PathsStringNull400Response | PathsStringNulldefaultResponse
  >;
  /** Get using uri with 'green color' in path parameter */
  enumValid(
    enumPath: "red color" | "green color" | "blue color",
    options?: PathsEnumValidParameters
  ): StreamableMethod<
    PathsEnumValid200Response | PathsEnumValiddefaultResponse
  >;
  /** Get null (should throw on the client before the request is sent on wire) */
  enumNull(
    enumPath: "red color" | "green color" | "blue color",
    options?: PathsEnumNullParameters
  ): StreamableMethod<PathsEnumNull400Response | PathsEnumNulldefaultResponse>;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  byteMultiByte(
    bytePath: string,
    options?: PathsByteMultiByteParameters
  ): StreamableMethod<
    PathsByteMultiByte200Response | PathsByteMultiBytedefaultResponse
  >;
  /** Get '' as byte array */
  byteEmpty(
    bytePath: "",
    options?: PathsByteEmptyParameters
  ): StreamableMethod<
    PathsByteEmpty200Response | PathsByteEmptydefaultResponse
  >;
  /** Get null as byte array (should throw) */
  byteNull(
    bytePath: string,
    options?: PathsByteNullParameters
  ): StreamableMethod<PathsByteNull400Response | PathsByteNulldefaultResponse>;
  /** Get '2012-01-01' as date */
  dateValid(
    datePath: "2012-01-01",
    options?: PathsDateValidParameters
  ): StreamableMethod<
    PathsDateValid200Response | PathsDateValiddefaultResponse
  >;
  /** Get null as date - this should throw or be unusable on the client side, depending on date representation */
  dateNull(
    datePath: Date | string,
    options?: PathsDateNullParameters
  ): StreamableMethod<PathsDateNull400Response | PathsDateNulldefaultResponse>;
  /** Get '2012-01-01T01:01:01Z' as date-time */
  dateTimeValid(
    dateTimePath: "2012-01-01T01:01:01.000Z",
    options?: PathsDateTimeValidParameters
  ): StreamableMethod<
    PathsDateTimeValid200Response | PathsDateTimeValiddefaultResponse
  >;
  /** Get null as date-time, should be disallowed or throw depending on representation of date-time */
  dateTimeNull(
    dateTimePath: Date | string,
    options?: PathsDateTimeNullParameters
  ): StreamableMethod<
    PathsDateTimeNull400Response | PathsDateTimeNulldefaultResponse
  >;
  /** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
  base64Url(
    base64UrlPath: string,
    options?: PathsBase64UrlParameters
  ): StreamableMethod<
    PathsBase64Url200Response | PathsBase64UrldefaultResponse
  >;
  /** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayCsvInPath(
    arrayPath: Array<string>,
    options?: PathsArrayCsvInPathParameters
  ): StreamableMethod<
    PathsArrayCsvInPath200Response | PathsArrayCsvInPathdefaultResponse
  >;
  /** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
  unixTimeUrl(
    unixTimeUrlPath: string,
    options?: PathsUnixTimeUrlParameters
  ): StreamableMethod<
    PathsUnixTimeUrl200Response | PathsUnixTimeUrldefaultResponse
  >;
}

/** Contains operations for Queries operations */
export interface QueriesOperations {
  /** Get true Boolean value on path */
  getBooleanTrue(
    options: QueriesGetBooleanTrueParameters
  ): StreamableMethod<
    QueriesGetBooleanTrue200Response | QueriesGetBooleanTruedefaultResponse
  >;
  /** Get false Boolean value on path */
  getBooleanFalse(
    options: QueriesGetBooleanFalseParameters
  ): StreamableMethod<
    QueriesGetBooleanFalse200Response | QueriesGetBooleanFalsedefaultResponse
  >;
  /** Get null Boolean value on query (query string should be absent) */
  getBooleanNull(
    options?: QueriesGetBooleanNullParameters
  ): StreamableMethod<
    QueriesGetBooleanNull200Response | QueriesGetBooleanNulldefaultResponse
  >;
  /** Get '1000000' integer value */
  getIntOneMillion(
    options: QueriesGetIntOneMillionParameters
  ): StreamableMethod<
    QueriesGetIntOneMillion200Response | QueriesGetIntOneMilliondefaultResponse
  >;
  /** Get '-1000000' integer value */
  getIntNegativeOneMillion(
    options: QueriesGetIntNegativeOneMillionParameters
  ): StreamableMethod<
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMilliondefaultResponse
  >;
  /** Get null integer value (no query parameter) */
  getIntNull(
    options?: QueriesGetIntNullParameters
  ): StreamableMethod<
    QueriesGetIntNull200Response | QueriesGetIntNulldefaultResponse
  >;
  /** Get '10000000000' 64 bit integer value */
  getTenBillion(
    options: QueriesGetTenBillionParameters
  ): StreamableMethod<
    QueriesGetTenBillion200Response | QueriesGetTenBilliondefaultResponse
  >;
  /** Get '-10000000000' 64 bit integer value */
  getNegativeTenBillion(
    options: QueriesGetNegativeTenBillionParameters
  ): StreamableMethod<
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBilliondefaultResponse
  >;
  /** Get 'null 64 bit integer value (no query param in uri) */
  getLongNull(
    options?: QueriesGetLongNullParameters
  ): StreamableMethod<
    QueriesGetLongNull200Response | QueriesGetLongNulldefaultResponse
  >;
  /** Get '1.034E+20' numeric value */
  floatScientificPositive(
    options: QueriesFloatScientificPositiveParameters
  ): StreamableMethod<
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositivedefaultResponse
  >;
  /** Get '-1.034E-20' numeric value */
  floatScientificNegative(
    options: QueriesFloatScientificNegativeParameters
  ): StreamableMethod<
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativedefaultResponse
  >;
  /** Get null numeric value (no query parameter) */
  floatNull(
    options?: QueriesFloatNullParameters
  ): StreamableMethod<
    QueriesFloatNull200Response | QueriesFloatNulldefaultResponse
  >;
  /** Get '9999999.999' numeric value */
  doubleDecimalPositive(
    options: QueriesDoubleDecimalPositiveParameters
  ): StreamableMethod<
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositivedefaultResponse
  >;
  /** Get '-9999999.999' numeric value */
  doubleDecimalNegative(
    options: QueriesDoubleDecimalNegativeParameters
  ): StreamableMethod<
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativedefaultResponse
  >;
  /** Get null numeric value (no query parameter) */
  doubleNull(
    options?: QueriesDoubleNullParameters
  ): StreamableMethod<
    QueriesDoubleNull200Response | QueriesDoubleNulldefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  stringUnicode(
    options: QueriesStringUnicodeParameters
  ): StreamableMethod<
    QueriesStringUnicode200Response | QueriesStringUnicodedefaultResponse
  >;
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  stringUrlEncoded(
    options: QueriesStringUrlEncodedParameters
  ): StreamableMethod<
    QueriesStringUrlEncoded200Response | QueriesStringUrlEncodeddefaultResponse
  >;
  /** Get '' */
  stringEmpty(
    options: QueriesStringEmptyParameters
  ): StreamableMethod<
    QueriesStringEmpty200Response | QueriesStringEmptydefaultResponse
  >;
  /** Get null (no query parameter in url) */
  stringNull(
    options?: QueriesStringNullParameters
  ): StreamableMethod<
    QueriesStringNull200Response | QueriesStringNulldefaultResponse
  >;
  /** Get using uri with query parameter 'green color' */
  enumValid(
    options?: QueriesEnumValidParameters
  ): StreamableMethod<
    QueriesEnumValid200Response | QueriesEnumValiddefaultResponse
  >;
  /** Get null (no query parameter in url) */
  enumNull(
    options?: QueriesEnumNullParameters
  ): StreamableMethod<
    QueriesEnumNull200Response | QueriesEnumNulldefaultResponse
  >;
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  byteMultiByte(
    options?: QueriesByteMultiByteParameters
  ): StreamableMethod<
    QueriesByteMultiByte200Response | QueriesByteMultiBytedefaultResponse
  >;
  /** Get '' as byte array */
  byteEmpty(
    options: QueriesByteEmptyParameters
  ): StreamableMethod<
    QueriesByteEmpty200Response | QueriesByteEmptydefaultResponse
  >;
  /** Get null as byte array (no query parameters in uri) */
  byteNull(
    options?: QueriesByteNullParameters
  ): StreamableMethod<
    QueriesByteNull200Response | QueriesByteNulldefaultResponse
  >;
  /** Get '2012-01-01' as date */
  dateValid(
    options: QueriesDateValidParameters
  ): StreamableMethod<
    QueriesDateValid200Response | QueriesDateValiddefaultResponse
  >;
  /** Get null as date - this should result in no query parameters in uri */
  dateNull(
    options?: QueriesDateNullParameters
  ): StreamableMethod<
    QueriesDateNull200Response | QueriesDateNulldefaultResponse
  >;
  /** Get '2012-01-01T01:01:01Z' as date-time */
  dateTimeValid(
    options: QueriesDateTimeValidParameters
  ): StreamableMethod<
    QueriesDateTimeValid200Response | QueriesDateTimeValiddefaultResponse
  >;
  /** Get null as date-time, should result in no query parameters in uri */
  dateTimeNull(
    options?: QueriesDateTimeNullParameters
  ): StreamableMethod<
    QueriesDateTimeNull200Response | QueriesDateTimeNulldefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayStringCsvValid(
    options?: QueriesArrayStringCsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValiddefaultResponse
  >;
  /** Get a null array of string using the csv-array format */
  arrayStringCsvNull(
    options?: QueriesArrayStringCsvNullParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNulldefaultResponse
  >;
  /** Get an empty array [] of string using the csv-array format */
  arrayStringCsvEmpty(
    options?: QueriesArrayStringCsvEmptyParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptydefaultResponse
  >;
  /** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
  arrayStringNoCollectionFormatEmpty(
    options?: QueriesArrayStringNoCollectionFormatEmptyParameters
  ): StreamableMethod<
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptydefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  arrayStringSsvValid(
    options?: QueriesArrayStringSsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValiddefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  arrayStringTsvValid(
    options?: QueriesArrayStringTsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValiddefaultResponse
  >;
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  arrayStringPipesValid(
    options?: QueriesArrayStringPipesValidParameters
  ): StreamableMethod<
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValiddefaultResponse
  >;
}

/** Contains operations for PathItems operations */
export interface PathItemsOperations {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  getAllWithValues(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetAllWithValuesParameters
  ): StreamableMethod<
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesdefaultResponse
  >;
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  getGlobalQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNulldefaultResponse
  >;
  /** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
  getGlobalAndLocalQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalAndLocalQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNulldefaultResponse
  >;
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
  getLocalPathItemQueryNull(
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetLocalPathItemQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNulldefaultResponse
  >;
}

export interface GetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options?: PathsGetBooleanTrueParameters
  ): StreamableMethod<
    PathsGetBooleanTrue200Response | PathsGetBooleanTruedefaultResponse
  >;
}

export interface GetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options?: PathsGetBooleanFalseParameters
  ): StreamableMethod<
    PathsGetBooleanFalse200Response | PathsGetBooleanFalsedefaultResponse
  >;
}

export interface GetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options?: PathsGetIntOneMillionParameters
  ): StreamableMethod<
    PathsGetIntOneMillion200Response | PathsGetIntOneMilliondefaultResponse
  >;
}

export interface GetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options?: PathsGetIntNegativeOneMillionParameters
  ): StreamableMethod<
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMilliondefaultResponse
  >;
}

export interface GetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options?: PathsGetTenBillionParameters
  ): StreamableMethod<
    PathsGetTenBillion200Response | PathsGetTenBilliondefaultResponse
  >;
}

export interface GetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options?: PathsGetNegativeTenBillionParameters
  ): StreamableMethod<
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBilliondefaultResponse
  >;
}

export interface FloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options?: PathsFloatScientificPositiveParameters
  ): StreamableMethod<
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositivedefaultResponse
  >;
}

export interface FloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options?: PathsFloatScientificNegativeParameters
  ): StreamableMethod<
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativedefaultResponse
  >;
}

export interface DoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options?: PathsDoubleDecimalPositiveParameters
  ): StreamableMethod<
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositivedefaultResponse
  >;
}

export interface DoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options?: PathsDoubleDecimalNegativeParameters
  ): StreamableMethod<
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativedefaultResponse
  >;
}

export interface StringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options?: PathsStringUnicodeParameters
  ): StreamableMethod<
    PathsStringUnicode200Response | PathsStringUnicodedefaultResponse
  >;
}

export interface StringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options?: PathsStringUrlEncodedParameters
  ): StreamableMethod<
    PathsStringUrlEncoded200Response | PathsStringUrlEncodeddefaultResponse
  >;
}

export interface StringUrlNonEncoded {
  /** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
  get(
    options?: PathsStringUrlNonEncodedParameters
  ): StreamableMethod<
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodeddefaultResponse
  >;
}

export interface StringEmpty {
  /** Get '' */
  get(
    options?: PathsStringEmptyParameters
  ): StreamableMethod<
    PathsStringEmpty200Response | PathsStringEmptydefaultResponse
  >;
}

export interface StringNull {
  /** Get null (should throw) */
  get(
    options?: PathsStringNullParameters
  ): StreamableMethod<
    PathsStringNull400Response | PathsStringNulldefaultResponse
  >;
}

export interface EnumValid {
  /** Get using uri with 'green color' in path parameter */
  get(
    options?: PathsEnumValidParameters
  ): StreamableMethod<
    PathsEnumValid200Response | PathsEnumValiddefaultResponse
  >;
}

export interface EnumNull {
  /** Get null (should throw on the client before the request is sent on wire) */
  get(
    options?: PathsEnumNullParameters
  ): StreamableMethod<PathsEnumNull400Response | PathsEnumNulldefaultResponse>;
}

export interface ByteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: PathsByteMultiByteParameters
  ): StreamableMethod<
    PathsByteMultiByte200Response | PathsByteMultiBytedefaultResponse
  >;
}

export interface ByteEmpty {
  /** Get '' as byte array */
  get(
    options?: PathsByteEmptyParameters
  ): StreamableMethod<
    PathsByteEmpty200Response | PathsByteEmptydefaultResponse
  >;
}

export interface ByteNull {
  /** Get null as byte array (should throw) */
  get(
    options?: PathsByteNullParameters
  ): StreamableMethod<PathsByteNull400Response | PathsByteNulldefaultResponse>;
}

export interface DateValid {
  /** Get '2012-01-01' as date */
  get(
    options?: PathsDateValidParameters
  ): StreamableMethod<
    PathsDateValid200Response | PathsDateValiddefaultResponse
  >;
}

export interface DateNull {
  /** Get null as date - this should throw or be unusable on the client side, depending on date representation */
  get(
    options?: PathsDateNullParameters
  ): StreamableMethod<PathsDateNull400Response | PathsDateNulldefaultResponse>;
}

export interface DateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options?: PathsDateTimeValidParameters
  ): StreamableMethod<
    PathsDateTimeValid200Response | PathsDateTimeValiddefaultResponse
  >;
}

export interface DateTimeNull {
  /** Get null as date-time, should be disallowed or throw depending on representation of date-time */
  get(
    options?: PathsDateTimeNullParameters
  ): StreamableMethod<
    PathsDateTimeNull400Response | PathsDateTimeNulldefaultResponse
  >;
}

export interface Base64Url {
  /** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
  get(
    options?: PathsBase64UrlParameters
  ): StreamableMethod<
    PathsBase64Url200Response | PathsBase64UrldefaultResponse
  >;
}

export interface ArrayCsvInPath {
  /** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: PathsArrayCsvInPathParameters
  ): StreamableMethod<
    PathsArrayCsvInPath200Response | PathsArrayCsvInPathdefaultResponse
  >;
}

export interface UnixTimeUrl {
  /** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
  get(
    options?: PathsUnixTimeUrlParameters
  ): StreamableMethod<
    PathsUnixTimeUrl200Response | PathsUnixTimeUrldefaultResponse
  >;
}

export interface GetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options: QueriesGetBooleanTrueParameters
  ): StreamableMethod<
    QueriesGetBooleanTrue200Response | QueriesGetBooleanTruedefaultResponse
  >;
}

export interface GetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options: QueriesGetBooleanFalseParameters
  ): StreamableMethod<
    QueriesGetBooleanFalse200Response | QueriesGetBooleanFalsedefaultResponse
  >;
}

export interface GetBooleanNull {
  /** Get null Boolean value on query (query string should be absent) */
  get(
    options?: QueriesGetBooleanNullParameters
  ): StreamableMethod<
    QueriesGetBooleanNull200Response | QueriesGetBooleanNulldefaultResponse
  >;
}

export interface GetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options: QueriesGetIntOneMillionParameters
  ): StreamableMethod<
    QueriesGetIntOneMillion200Response | QueriesGetIntOneMilliondefaultResponse
  >;
}

export interface GetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options: QueriesGetIntNegativeOneMillionParameters
  ): StreamableMethod<
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMilliondefaultResponse
  >;
}

export interface GetIntNull {
  /** Get null integer value (no query parameter) */
  get(
    options?: QueriesGetIntNullParameters
  ): StreamableMethod<
    QueriesGetIntNull200Response | QueriesGetIntNulldefaultResponse
  >;
}

export interface GetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options: QueriesGetTenBillionParameters
  ): StreamableMethod<
    QueriesGetTenBillion200Response | QueriesGetTenBilliondefaultResponse
  >;
}

export interface GetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options: QueriesGetNegativeTenBillionParameters
  ): StreamableMethod<
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBilliondefaultResponse
  >;
}

export interface GetLongNull {
  /** Get 'null 64 bit integer value (no query param in uri) */
  get(
    options?: QueriesGetLongNullParameters
  ): StreamableMethod<
    QueriesGetLongNull200Response | QueriesGetLongNulldefaultResponse
  >;
}

export interface FloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options: QueriesFloatScientificPositiveParameters
  ): StreamableMethod<
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositivedefaultResponse
  >;
}

export interface FloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options: QueriesFloatScientificNegativeParameters
  ): StreamableMethod<
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativedefaultResponse
  >;
}

export interface FloatNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesFloatNullParameters
  ): StreamableMethod<
    QueriesFloatNull200Response | QueriesFloatNulldefaultResponse
  >;
}

export interface DoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options: QueriesDoubleDecimalPositiveParameters
  ): StreamableMethod<
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositivedefaultResponse
  >;
}

export interface DoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options: QueriesDoubleDecimalNegativeParameters
  ): StreamableMethod<
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativedefaultResponse
  >;
}

export interface DoubleNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesDoubleNullParameters
  ): StreamableMethod<
    QueriesDoubleNull200Response | QueriesDoubleNulldefaultResponse
  >;
}

export interface StringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options: QueriesStringUnicodeParameters
  ): StreamableMethod<
    QueriesStringUnicode200Response | QueriesStringUnicodedefaultResponse
  >;
}

export interface StringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options: QueriesStringUrlEncodedParameters
  ): StreamableMethod<
    QueriesStringUrlEncoded200Response | QueriesStringUrlEncodeddefaultResponse
  >;
}

export interface StringEmpty {
  /** Get '' */
  get(
    options: QueriesStringEmptyParameters
  ): StreamableMethod<
    QueriesStringEmpty200Response | QueriesStringEmptydefaultResponse
  >;
}

export interface StringNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesStringNullParameters
  ): StreamableMethod<
    QueriesStringNull200Response | QueriesStringNulldefaultResponse
  >;
}

export interface EnumValid {
  /** Get using uri with query parameter 'green color' */
  get(
    options?: QueriesEnumValidParameters
  ): StreamableMethod<
    QueriesEnumValid200Response | QueriesEnumValiddefaultResponse
  >;
}

export interface EnumNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesEnumNullParameters
  ): StreamableMethod<
    QueriesEnumNull200Response | QueriesEnumNulldefaultResponse
  >;
}

export interface ByteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: QueriesByteMultiByteParameters
  ): StreamableMethod<
    QueriesByteMultiByte200Response | QueriesByteMultiBytedefaultResponse
  >;
}

export interface ByteEmpty {
  /** Get '' as byte array */
  get(
    options: QueriesByteEmptyParameters
  ): StreamableMethod<
    QueriesByteEmpty200Response | QueriesByteEmptydefaultResponse
  >;
}

export interface ByteNull {
  /** Get null as byte array (no query parameters in uri) */
  get(
    options?: QueriesByteNullParameters
  ): StreamableMethod<
    QueriesByteNull200Response | QueriesByteNulldefaultResponse
  >;
}

export interface DateValid {
  /** Get '2012-01-01' as date */
  get(
    options: QueriesDateValidParameters
  ): StreamableMethod<
    QueriesDateValid200Response | QueriesDateValiddefaultResponse
  >;
}

export interface DateNull {
  /** Get null as date - this should result in no query parameters in uri */
  get(
    options?: QueriesDateNullParameters
  ): StreamableMethod<
    QueriesDateNull200Response | QueriesDateNulldefaultResponse
  >;
}

export interface DateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options: QueriesDateTimeValidParameters
  ): StreamableMethod<
    QueriesDateTimeValid200Response | QueriesDateTimeValiddefaultResponse
  >;
}

export interface DateTimeNull {
  /** Get null as date-time, should result in no query parameters in uri */
  get(
    options?: QueriesDateTimeNullParameters
  ): StreamableMethod<
    QueriesDateTimeNull200Response | QueriesDateTimeNulldefaultResponse
  >;
}

export interface ArrayStringCsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: QueriesArrayStringCsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValiddefaultResponse
  >;
}

export interface ArrayStringCsvNull {
  /** Get a null array of string using the csv-array format */
  get(
    options?: QueriesArrayStringCsvNullParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNulldefaultResponse
  >;
}

export interface ArrayStringCsvEmpty {
  /** Get an empty array [] of string using the csv-array format */
  get(
    options?: QueriesArrayStringCsvEmptyParameters
  ): StreamableMethod<
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptydefaultResponse
  >;
}

export interface ArrayStringNoCollectionFormatEmpty {
  /** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
  get(
    options?: QueriesArrayStringNoCollectionFormatEmptyParameters
  ): StreamableMethod<
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptydefaultResponse
  >;
}

export interface ArrayStringSsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  get(
    options?: QueriesArrayStringSsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValiddefaultResponse
  >;
}

export interface ArrayStringTsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  get(
    options?: QueriesArrayStringTsvValidParameters
  ): StreamableMethod<
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValiddefaultResponse
  >;
}

export interface ArrayStringPipesValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  get(
    options?: QueriesArrayStringPipesValidParameters
  ): StreamableMethod<
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValiddefaultResponse
  >;
}

export interface GetAllWithValues {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsGetAllWithValuesParameters
  ): StreamableMethod<
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesdefaultResponse
  >;
}

export interface GetGlobalQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsGetGlobalQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNulldefaultResponse
  >;
}

export interface GetGlobalAndLocalQueryNull {
  /** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
  get(
    options?: PathItemsGetGlobalAndLocalQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNulldefaultResponse
  >;
}

export interface GetLocalPathItemQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
  get(
    options?: PathItemsGetLocalPathItemQueryNullParameters
  ): StreamableMethod<
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNulldefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paths/bool/true/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/true/{boolPath}", boolPath: true): GetBooleanTrue;
  /** Resource for '/paths/bool/false/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/false/{boolPath}", boolPath: false): GetBooleanFalse;
  /** Resource for '/paths/int/1000000/\{intPath\}' has methods for the following verbs: get */
  (path: "/paths/int/1000000/{intPath}", intPath: 1000000): GetIntOneMillion;
  /** Resource for '/paths/int/-1000000/\{intPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/-1000000/{intPath}",
    intPath: -1000000
  ): GetIntNegativeOneMillion;
  /** Resource for '/paths/long/10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/10000000000/{longPath}",
    longPath: 10000000000
  ): GetTenBillion;
  /** Resource for '/paths/long/-10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/-10000000000/{longPath}",
    longPath: -10000000000
  ): GetNegativeTenBillion;
  /** Resource for '/paths/float/1.034E+20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/1.034E+20/{floatPath}",
    floatPath: 103400000000000000000
  ): FloatScientificPositive;
  /** Resource for '/paths/float/-1.034E-20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/-1.034E-20/{floatPath}",
    floatPath: -1.034e-20
  ): FloatScientificNegative;
  /** Resource for '/paths/double/9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/9999999.999/{doublePath}",
    doublePath: 9999999.999
  ): DoubleDecimalPositive;
  /** Resource for '/paths/double/-9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/-9999999.999/{doublePath}",
    doublePath: -9999999.999
  ): DoubleDecimalNegative;
  /** Resource for '/paths/string/unicode/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/unicode/{stringPath}",
    stringPath: "啊齄丂狛狜隣郎隣兀﨩"
  ): StringUnicode;
  /** Resource for '/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
    stringPath: "begin!*'();:@ &=+$,/?#[]end"
  ): StringUrlEncoded;
  /** Resource for '/paths/string/begin!*'();:@&=+$,end/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
    stringPath: "begin!*'();:@&=+$,end"
  ): StringUrlNonEncoded;
  /** Resource for '/paths/string/empty/\{stringPath\}' has methods for the following verbs: get */
  (path: "/paths/string/empty/{stringPath}", stringPath: ""): StringEmpty;
  /** Resource for '/paths/string/null/\{stringPath\}' has methods for the following verbs: get */
  (path: "/paths/string/null/{stringPath}", stringPath: string): StringNull;
  /** Resource for '/paths/enum/green%20color/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/enum/green%20color/{enumPath}",
    enumPath: "red color" | "green color" | "blue color"
  ): EnumValid;
  /** Resource for '/paths/string/null/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/null/{enumPath}",
    enumPath: "red color" | "green color" | "blue color"
  ): EnumNull;
  /** Resource for '/paths/byte/multibyte/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/multibyte/{bytePath}", bytePath: string): ByteMultiByte;
  /** Resource for '/paths/byte/empty/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/empty/{bytePath}", bytePath: ""): ByteEmpty;
  /** Resource for '/paths/byte/null/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/null/{bytePath}", bytePath: string): ByteNull;
  /** Resource for '/paths/date/2012-01-01/\{datePath\}' has methods for the following verbs: get */
  (
    path: "/paths/date/2012-01-01/{datePath}",
    datePath: "2012-01-01"
  ): DateValid;
  /** Resource for '/paths/date/null/\{datePath\}' has methods for the following verbs: get */
  (path: "/paths/date/null/{datePath}", datePath: Date | string): DateNull;
  /** Resource for '/paths/datetime/2012-01-01T01%3A01%3A01Z/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
    dateTimePath: "2012-01-01T01:01:01.000Z"
  ): DateTimeValid;
  /** Resource for '/paths/datetime/null/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/null/{dateTimePath}",
    dateTimePath: Date | string
  ): DateTimeNull;
  /** Resource for '/paths/string/bG9yZW0/\{base64UrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/bG9yZW0/{base64UrlPath}",
    base64UrlPath: string
  ): Base64Url;
  /** Resource for '/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/\{arrayPath\}' has methods for the following verbs: get */
  (
    path: "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
    arrayPath: Array<string>
  ): ArrayCsvInPath;
  /** Resource for '/paths/int/1460505600/\{unixTimeUrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/1460505600/{unixTimeUrlPath}",
    unixTimeUrlPath: string
  ): UnixTimeUrl;
  /** Resource for '/queries/bool/true' has methods for the following verbs: get */
  (path: "/queries/bool/true"): GetBooleanTrue;
  /** Resource for '/queries/bool/false' has methods for the following verbs: get */
  (path: "/queries/bool/false"): GetBooleanFalse;
  /** Resource for '/queries/bool/null' has methods for the following verbs: get */
  (path: "/queries/bool/null"): GetBooleanNull;
  /** Resource for '/queries/int/1000000' has methods for the following verbs: get */
  (path: "/queries/int/1000000"): GetIntOneMillion;
  /** Resource for '/queries/int/-1000000' has methods for the following verbs: get */
  (path: "/queries/int/-1000000"): GetIntNegativeOneMillion;
  /** Resource for '/queries/int/null' has methods for the following verbs: get */
  (path: "/queries/int/null"): GetIntNull;
  /** Resource for '/queries/long/10000000000' has methods for the following verbs: get */
  (path: "/queries/long/10000000000"): GetTenBillion;
  /** Resource for '/queries/long/-10000000000' has methods for the following verbs: get */
  (path: "/queries/long/-10000000000"): GetNegativeTenBillion;
  /** Resource for '/queries/long/null' has methods for the following verbs: get */
  (path: "/queries/long/null"): GetLongNull;
  /** Resource for '/queries/float/1.034E+20' has methods for the following verbs: get */
  (path: "/queries/float/1.034E+20"): FloatScientificPositive;
  /** Resource for '/queries/float/-1.034E-20' has methods for the following verbs: get */
  (path: "/queries/float/-1.034E-20"): FloatScientificNegative;
  /** Resource for '/queries/float/null' has methods for the following verbs: get */
  (path: "/queries/float/null"): FloatNull;
  /** Resource for '/queries/double/9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/9999999.999"): DoubleDecimalPositive;
  /** Resource for '/queries/double/-9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/-9999999.999"): DoubleDecimalNegative;
  /** Resource for '/queries/double/null' has methods for the following verbs: get */
  (path: "/queries/double/null"): DoubleNull;
  /** Resource for '/queries/string/unicode/' has methods for the following verbs: get */
  (path: "/queries/string/unicode/"): StringUnicode;
  /** Resource for '/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend' has methods for the following verbs: get */
  (
    path: "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend"
  ): StringUrlEncoded;
  /** Resource for '/queries/string/empty' has methods for the following verbs: get */
  (path: "/queries/string/empty"): StringEmpty;
  /** Resource for '/queries/string/null' has methods for the following verbs: get */
  (path: "/queries/string/null"): StringNull;
  /** Resource for '/queries/enum/green%20color' has methods for the following verbs: get */
  (path: "/queries/enum/green%20color"): EnumValid;
  /** Resource for '/queries/enum/null' has methods for the following verbs: get */
  (path: "/queries/enum/null"): EnumNull;
  /** Resource for '/queries/byte/multibyte' has methods for the following verbs: get */
  (path: "/queries/byte/multibyte"): ByteMultiByte;
  /** Resource for '/queries/byte/empty' has methods for the following verbs: get */
  (path: "/queries/byte/empty"): ByteEmpty;
  /** Resource for '/queries/byte/null' has methods for the following verbs: get */
  (path: "/queries/byte/null"): ByteNull;
  /** Resource for '/queries/date/2012-01-01' has methods for the following verbs: get */
  (path: "/queries/date/2012-01-01"): DateValid;
  /** Resource for '/queries/date/null' has methods for the following verbs: get */
  (path: "/queries/date/null"): DateNull;
  /** Resource for '/queries/datetime/2012-01-01T01%3A01%3A01Z' has methods for the following verbs: get */
  (path: "/queries/datetime/2012-01-01T01%3A01%3A01Z"): DateTimeValid;
  /** Resource for '/queries/datetime/null' has methods for the following verbs: get */
  (path: "/queries/datetime/null"): DateTimeNull;
  /** Resource for '/queries/array/csv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/valid"): ArrayStringCsvValid;
  /** Resource for '/queries/array/csv/string/null' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/null"): ArrayStringCsvNull;
  /** Resource for '/queries/array/csv/string/empty' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/empty"): ArrayStringCsvEmpty;
  /** Resource for '/queries/array/none/string/empty' has methods for the following verbs: get */
  (
    path: "/queries/array/none/string/empty"
  ): ArrayStringNoCollectionFormatEmpty;
  /** Resource for '/queries/array/ssv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/ssv/string/valid"): ArrayStringSsvValid;
  /** Resource for '/queries/array/tsv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/tsv/string/valid"): ArrayStringTsvValid;
  /** Resource for '/queries/array/pipes/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/pipes/string/valid"): ArrayStringPipesValid;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): GetAllWithValues;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): GetGlobalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): GetGlobalAndLocalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/null/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): GetLocalPathItemQueryNull;
}

export type UrlRestClient = Client & {
  path: Routes;
  paths: PathsOperations;
  queries: QueriesOperations;
  pathItems: PathItemsOperations;
};
