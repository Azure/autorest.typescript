// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PathsgetBooleanTrueParameters,
  PathsgetBooleanFalseParameters,
  PathsgetIntOneMillionParameters,
  PathsgetIntNegativeOneMillionParameters,
  PathsgetTenBillionParameters,
  PathsgetNegativeTenBillionParameters,
  PathsfloatScientificPositiveParameters,
  PathsfloatScientificNegativeParameters,
  PathsdoubleDecimalPositiveParameters,
  PathsdoubleDecimalNegativeParameters,
  PathsstringUnicodeParameters,
  PathsstringUrlEncodedParameters,
  PathsstringUrlNonEncodedParameters,
  PathsstringEmptyParameters,
  PathsstringNullParameters,
  PathsenumValidParameters,
  PathsenumNullParameters,
  PathsbyteMultiByteParameters,
  PathsbyteEmptyParameters,
  PathsbyteNullParameters,
  PathsdateValidParameters,
  PathsdateNullParameters,
  PathsdateTimeValidParameters,
  PathsdateTimeNullParameters,
  Pathsbase64UrlParameters,
  PathsarrayCsvInPathParameters,
  PathsunixTimeUrlParameters,
  QueriesgetBooleanTrueParameters,
  QueriesgetBooleanFalseParameters,
  QueriesgetBooleanNullParameters,
  QueriesgetIntOneMillionParameters,
  QueriesgetIntNegativeOneMillionParameters,
  QueriesgetIntNullParameters,
  QueriesgetTenBillionParameters,
  QueriesgetNegativeTenBillionParameters,
  QueriesgetLongNullParameters,
  QueriesfloatScientificPositiveParameters,
  QueriesfloatScientificNegativeParameters,
  QueriesfloatNullParameters,
  QueriesdoubleDecimalPositiveParameters,
  QueriesdoubleDecimalNegativeParameters,
  QueriesdoubleNullParameters,
  QueriesstringUnicodeParameters,
  QueriesstringUrlEncodedParameters,
  QueriesstringEmptyParameters,
  QueriesstringNullParameters,
  QueriesenumValidParameters,
  QueriesenumNullParameters,
  QueriesbyteMultiByteParameters,
  QueriesbyteEmptyParameters,
  QueriesbyteNullParameters,
  QueriesdateValidParameters,
  QueriesdateNullParameters,
  QueriesdateTimeValidParameters,
  QueriesdateTimeNullParameters,
  QueriesarrayStringCsvValidParameters,
  QueriesarrayStringCsvNullParameters,
  QueriesarrayStringCsvEmptyParameters,
  QueriesarrayStringNoCollectionFormatEmptyParameters,
  QueriesarrayStringSsvValidParameters,
  QueriesarrayStringTsvValidParameters,
  QueriesarrayStringPipesValidParameters,
  PathItemsgetAllWithValuesParameters,
  PathItemsgetGlobalQueryNullParameters,
  PathItemsgetGlobalAndLocalQueryNullParameters,
  PathItemsgetLocalPathItemQueryNullParameters
} from "./parameters";
import {
  PathsgetBooleanTrue200Response,
  PathsgetBooleanTruedefaultResponse,
  PathsgetBooleanFalse200Response,
  PathsgetBooleanFalsedefaultResponse,
  PathsgetIntOneMillion200Response,
  PathsgetIntOneMilliondefaultResponse,
  PathsgetIntNegativeOneMillion200Response,
  PathsgetIntNegativeOneMilliondefaultResponse,
  PathsgetTenBillion200Response,
  PathsgetTenBilliondefaultResponse,
  PathsgetNegativeTenBillion200Response,
  PathsgetNegativeTenBilliondefaultResponse,
  PathsfloatScientificPositive200Response,
  PathsfloatScientificPositivedefaultResponse,
  PathsfloatScientificNegative200Response,
  PathsfloatScientificNegativedefaultResponse,
  PathsdoubleDecimalPositive200Response,
  PathsdoubleDecimalPositivedefaultResponse,
  PathsdoubleDecimalNegative200Response,
  PathsdoubleDecimalNegativedefaultResponse,
  PathsstringUnicode200Response,
  PathsstringUnicodedefaultResponse,
  PathsstringUrlEncoded200Response,
  PathsstringUrlEncodeddefaultResponse,
  PathsstringUrlNonEncoded200Response,
  PathsstringUrlNonEncodeddefaultResponse,
  PathsstringEmpty200Response,
  PathsstringEmptydefaultResponse,
  PathsstringNull400Response,
  PathsstringNulldefaultResponse,
  PathsenumValid200Response,
  PathsenumValiddefaultResponse,
  PathsenumNull400Response,
  PathsenumNulldefaultResponse,
  PathsbyteMultiByte200Response,
  PathsbyteMultiBytedefaultResponse,
  PathsbyteEmpty200Response,
  PathsbyteEmptydefaultResponse,
  PathsbyteNull400Response,
  PathsbyteNulldefaultResponse,
  PathsdateValid200Response,
  PathsdateValiddefaultResponse,
  PathsdateNull400Response,
  PathsdateNulldefaultResponse,
  PathsdateTimeValid200Response,
  PathsdateTimeValiddefaultResponse,
  PathsdateTimeNull400Response,
  PathsdateTimeNulldefaultResponse,
  Pathsbase64Url200Response,
  Pathsbase64UrldefaultResponse,
  PathsarrayCsvInPath200Response,
  PathsarrayCsvInPathdefaultResponse,
  PathsunixTimeUrl200Response,
  PathsunixTimeUrldefaultResponse,
  QueriesgetBooleanTrue200Response,
  QueriesgetBooleanTruedefaultResponse,
  QueriesgetBooleanFalse200Response,
  QueriesgetBooleanFalsedefaultResponse,
  QueriesgetBooleanNull200Response,
  QueriesgetBooleanNulldefaultResponse,
  QueriesgetIntOneMillion200Response,
  QueriesgetIntOneMilliondefaultResponse,
  QueriesgetIntNegativeOneMillion200Response,
  QueriesgetIntNegativeOneMilliondefaultResponse,
  QueriesgetIntNull200Response,
  QueriesgetIntNulldefaultResponse,
  QueriesgetTenBillion200Response,
  QueriesgetTenBilliondefaultResponse,
  QueriesgetNegativeTenBillion200Response,
  QueriesgetNegativeTenBilliondefaultResponse,
  QueriesgetLongNull200Response,
  QueriesgetLongNulldefaultResponse,
  QueriesfloatScientificPositive200Response,
  QueriesfloatScientificPositivedefaultResponse,
  QueriesfloatScientificNegative200Response,
  QueriesfloatScientificNegativedefaultResponse,
  QueriesfloatNull200Response,
  QueriesfloatNulldefaultResponse,
  QueriesdoubleDecimalPositive200Response,
  QueriesdoubleDecimalPositivedefaultResponse,
  QueriesdoubleDecimalNegative200Response,
  QueriesdoubleDecimalNegativedefaultResponse,
  QueriesdoubleNull200Response,
  QueriesdoubleNulldefaultResponse,
  QueriesstringUnicode200Response,
  QueriesstringUnicodedefaultResponse,
  QueriesstringUrlEncoded200Response,
  QueriesstringUrlEncodeddefaultResponse,
  QueriesstringEmpty200Response,
  QueriesstringEmptydefaultResponse,
  QueriesstringNull200Response,
  QueriesstringNulldefaultResponse,
  QueriesenumValid200Response,
  QueriesenumValiddefaultResponse,
  QueriesenumNull200Response,
  QueriesenumNulldefaultResponse,
  QueriesbyteMultiByte200Response,
  QueriesbyteMultiBytedefaultResponse,
  QueriesbyteEmpty200Response,
  QueriesbyteEmptydefaultResponse,
  QueriesbyteNull200Response,
  QueriesbyteNulldefaultResponse,
  QueriesdateValid200Response,
  QueriesdateValiddefaultResponse,
  QueriesdateNull200Response,
  QueriesdateNulldefaultResponse,
  QueriesdateTimeValid200Response,
  QueriesdateTimeValiddefaultResponse,
  QueriesdateTimeNull200Response,
  QueriesdateTimeNulldefaultResponse,
  QueriesarrayStringCsvValid200Response,
  QueriesarrayStringCsvValiddefaultResponse,
  QueriesarrayStringCsvNull200Response,
  QueriesarrayStringCsvNulldefaultResponse,
  QueriesarrayStringCsvEmpty200Response,
  QueriesarrayStringCsvEmptydefaultResponse,
  QueriesarrayStringNoCollectionFormatEmpty200Response,
  QueriesarrayStringNoCollectionFormatEmptydefaultResponse,
  QueriesarrayStringSsvValid200Response,
  QueriesarrayStringSsvValiddefaultResponse,
  QueriesarrayStringTsvValid200Response,
  QueriesarrayStringTsvValiddefaultResponse,
  QueriesarrayStringPipesValid200Response,
  QueriesarrayStringPipesValiddefaultResponse,
  PathItemsgetAllWithValues200Response,
  PathItemsgetAllWithValuesdefaultResponse,
  PathItemsgetGlobalQueryNull200Response,
  PathItemsgetGlobalQueryNulldefaultResponse,
  PathItemsgetGlobalAndLocalQueryNull200Response,
  PathItemsgetGlobalAndLocalQueryNulldefaultResponse,
  PathItemsgetLocalPathItemQueryNull200Response,
  PathItemsgetLocalPathItemQueryNulldefaultResponse
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface PathsgetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options?: PathsgetBooleanTrueParameters
  ): Promise<
    PathsgetBooleanTrue200Response | PathsgetBooleanTruedefaultResponse
  >;
}

export interface PathsgetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options?: PathsgetBooleanFalseParameters
  ): Promise<
    PathsgetBooleanFalse200Response | PathsgetBooleanFalsedefaultResponse
  >;
}

export interface PathsgetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options?: PathsgetIntOneMillionParameters
  ): Promise<
    PathsgetIntOneMillion200Response | PathsgetIntOneMilliondefaultResponse
  >;
}

export interface PathsgetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options?: PathsgetIntNegativeOneMillionParameters
  ): Promise<
    | PathsgetIntNegativeOneMillion200Response
    | PathsgetIntNegativeOneMilliondefaultResponse
  >;
}

export interface PathsgetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options?: PathsgetTenBillionParameters
  ): Promise<PathsgetTenBillion200Response | PathsgetTenBilliondefaultResponse>;
}

export interface PathsgetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options?: PathsgetNegativeTenBillionParameters
  ): Promise<
    | PathsgetNegativeTenBillion200Response
    | PathsgetNegativeTenBilliondefaultResponse
  >;
}

export interface PathsfloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options?: PathsfloatScientificPositiveParameters
  ): Promise<
    | PathsfloatScientificPositive200Response
    | PathsfloatScientificPositivedefaultResponse
  >;
}

export interface PathsfloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options?: PathsfloatScientificNegativeParameters
  ): Promise<
    | PathsfloatScientificNegative200Response
    | PathsfloatScientificNegativedefaultResponse
  >;
}

export interface PathsdoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options?: PathsdoubleDecimalPositiveParameters
  ): Promise<
    | PathsdoubleDecimalPositive200Response
    | PathsdoubleDecimalPositivedefaultResponse
  >;
}

export interface PathsdoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options?: PathsdoubleDecimalNegativeParameters
  ): Promise<
    | PathsdoubleDecimalNegative200Response
    | PathsdoubleDecimalNegativedefaultResponse
  >;
}

export interface PathsstringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options?: PathsstringUnicodeParameters
  ): Promise<PathsstringUnicode200Response | PathsstringUnicodedefaultResponse>;
}

export interface PathsstringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options?: PathsstringUrlEncodedParameters
  ): Promise<
    PathsstringUrlEncoded200Response | PathsstringUrlEncodeddefaultResponse
  >;
}

export interface PathsstringUrlNonEncoded {
  /** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
  get(
    options?: PathsstringUrlNonEncodedParameters
  ): Promise<
    | PathsstringUrlNonEncoded200Response
    | PathsstringUrlNonEncodeddefaultResponse
  >;
}

export interface PathsstringEmpty {
  /** Get '' */
  get(
    options?: PathsstringEmptyParameters
  ): Promise<PathsstringEmpty200Response | PathsstringEmptydefaultResponse>;
}

export interface PathsstringNull {
  /** Get null (should throw) */
  get(
    options?: PathsstringNullParameters
  ): Promise<PathsstringNull400Response | PathsstringNulldefaultResponse>;
}

export interface PathsenumValid {
  /** Get using uri with 'green color' in path parameter */
  get(
    options?: PathsenumValidParameters
  ): Promise<PathsenumValid200Response | PathsenumValiddefaultResponse>;
}

export interface PathsenumNull {
  /** Get null (should throw on the client before the request is sent on wire) */
  get(
    options?: PathsenumNullParameters
  ): Promise<PathsenumNull400Response | PathsenumNulldefaultResponse>;
}

export interface PathsbyteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: PathsbyteMultiByteParameters
  ): Promise<PathsbyteMultiByte200Response | PathsbyteMultiBytedefaultResponse>;
}

export interface PathsbyteEmpty {
  /** Get '' as byte array */
  get(
    options?: PathsbyteEmptyParameters
  ): Promise<PathsbyteEmpty200Response | PathsbyteEmptydefaultResponse>;
}

export interface PathsbyteNull {
  /** Get null as byte array (should throw) */
  get(
    options?: PathsbyteNullParameters
  ): Promise<PathsbyteNull400Response | PathsbyteNulldefaultResponse>;
}

export interface PathsdateValid {
  /** Get '2012-01-01' as date */
  get(
    options?: PathsdateValidParameters
  ): Promise<PathsdateValid200Response | PathsdateValiddefaultResponse>;
}

export interface PathsdateNull {
  /** Get null as date - this should throw or be unusable on the client side, depending on date representation */
  get(
    options?: PathsdateNullParameters
  ): Promise<PathsdateNull400Response | PathsdateNulldefaultResponse>;
}

export interface PathsdateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options?: PathsdateTimeValidParameters
  ): Promise<PathsdateTimeValid200Response | PathsdateTimeValiddefaultResponse>;
}

export interface PathsdateTimeNull {
  /** Get null as date-time, should be disallowed or throw depending on representation of date-time */
  get(
    options?: PathsdateTimeNullParameters
  ): Promise<PathsdateTimeNull400Response | PathsdateTimeNulldefaultResponse>;
}

export interface Pathsbase64Url {
  /** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
  get(
    options?: Pathsbase64UrlParameters
  ): Promise<Pathsbase64Url200Response | Pathsbase64UrldefaultResponse>;
}

export interface PathsarrayCsvInPath {
  /** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: PathsarrayCsvInPathParameters
  ): Promise<
    PathsarrayCsvInPath200Response | PathsarrayCsvInPathdefaultResponse
  >;
}

export interface PathsunixTimeUrl {
  /** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
  get(
    options?: PathsunixTimeUrlParameters
  ): Promise<PathsunixTimeUrl200Response | PathsunixTimeUrldefaultResponse>;
}

export interface QueriesgetBooleanTrue {
  /** Get true Boolean value on path */
  get(
    options: QueriesgetBooleanTrueParameters
  ): Promise<
    QueriesgetBooleanTrue200Response | QueriesgetBooleanTruedefaultResponse
  >;
}

export interface QueriesgetBooleanFalse {
  /** Get false Boolean value on path */
  get(
    options: QueriesgetBooleanFalseParameters
  ): Promise<
    QueriesgetBooleanFalse200Response | QueriesgetBooleanFalsedefaultResponse
  >;
}

export interface QueriesgetBooleanNull {
  /** Get null Boolean value on query (query string should be absent) */
  get(
    options?: QueriesgetBooleanNullParameters
  ): Promise<
    QueriesgetBooleanNull200Response | QueriesgetBooleanNulldefaultResponse
  >;
}

export interface QueriesgetIntOneMillion {
  /** Get '1000000' integer value */
  get(
    options: QueriesgetIntOneMillionParameters
  ): Promise<
    QueriesgetIntOneMillion200Response | QueriesgetIntOneMilliondefaultResponse
  >;
}

export interface QueriesgetIntNegativeOneMillion {
  /** Get '-1000000' integer value */
  get(
    options: QueriesgetIntNegativeOneMillionParameters
  ): Promise<
    | QueriesgetIntNegativeOneMillion200Response
    | QueriesgetIntNegativeOneMilliondefaultResponse
  >;
}

export interface QueriesgetIntNull {
  /** Get null integer value (no query parameter) */
  get(
    options?: QueriesgetIntNullParameters
  ): Promise<QueriesgetIntNull200Response | QueriesgetIntNulldefaultResponse>;
}

export interface QueriesgetTenBillion {
  /** Get '10000000000' 64 bit integer value */
  get(
    options: QueriesgetTenBillionParameters
  ): Promise<
    QueriesgetTenBillion200Response | QueriesgetTenBilliondefaultResponse
  >;
}

export interface QueriesgetNegativeTenBillion {
  /** Get '-10000000000' 64 bit integer value */
  get(
    options: QueriesgetNegativeTenBillionParameters
  ): Promise<
    | QueriesgetNegativeTenBillion200Response
    | QueriesgetNegativeTenBilliondefaultResponse
  >;
}

export interface QueriesgetLongNull {
  /** Get 'null 64 bit integer value (no query param in uri) */
  get(
    options?: QueriesgetLongNullParameters
  ): Promise<QueriesgetLongNull200Response | QueriesgetLongNulldefaultResponse>;
}

export interface QueriesfloatScientificPositive {
  /** Get '1.034E+20' numeric value */
  get(
    options: QueriesfloatScientificPositiveParameters
  ): Promise<
    | QueriesfloatScientificPositive200Response
    | QueriesfloatScientificPositivedefaultResponse
  >;
}

export interface QueriesfloatScientificNegative {
  /** Get '-1.034E-20' numeric value */
  get(
    options: QueriesfloatScientificNegativeParameters
  ): Promise<
    | QueriesfloatScientificNegative200Response
    | QueriesfloatScientificNegativedefaultResponse
  >;
}

export interface QueriesfloatNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesfloatNullParameters
  ): Promise<QueriesfloatNull200Response | QueriesfloatNulldefaultResponse>;
}

export interface QueriesdoubleDecimalPositive {
  /** Get '9999999.999' numeric value */
  get(
    options: QueriesdoubleDecimalPositiveParameters
  ): Promise<
    | QueriesdoubleDecimalPositive200Response
    | QueriesdoubleDecimalPositivedefaultResponse
  >;
}

export interface QueriesdoubleDecimalNegative {
  /** Get '-9999999.999' numeric value */
  get(
    options: QueriesdoubleDecimalNegativeParameters
  ): Promise<
    | QueriesdoubleDecimalNegative200Response
    | QueriesdoubleDecimalNegativedefaultResponse
  >;
}

export interface QueriesdoubleNull {
  /** Get null numeric value (no query parameter) */
  get(
    options?: QueriesdoubleNullParameters
  ): Promise<QueriesdoubleNull200Response | QueriesdoubleNulldefaultResponse>;
}

export interface QueriesstringUnicode {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
  get(
    options: QueriesstringUnicodeParameters
  ): Promise<
    QueriesstringUnicode200Response | QueriesstringUnicodedefaultResponse
  >;
}

export interface QueriesstringUrlEncoded {
  /** Get 'begin!*'();:@ &=+$,/?#[]end */
  get(
    options: QueriesstringUrlEncodedParameters
  ): Promise<
    QueriesstringUrlEncoded200Response | QueriesstringUrlEncodeddefaultResponse
  >;
}

export interface QueriesstringEmpty {
  /** Get '' */
  get(
    options: QueriesstringEmptyParameters
  ): Promise<QueriesstringEmpty200Response | QueriesstringEmptydefaultResponse>;
}

export interface QueriesstringNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesstringNullParameters
  ): Promise<QueriesstringNull200Response | QueriesstringNulldefaultResponse>;
}

export interface QueriesenumValid {
  /** Get using uri with query parameter 'green color' */
  get(
    options?: QueriesenumValidParameters
  ): Promise<QueriesenumValid200Response | QueriesenumValiddefaultResponse>;
}

export interface QueriesenumNull {
  /** Get null (no query parameter in url) */
  get(
    options?: QueriesenumNullParameters
  ): Promise<QueriesenumNull200Response | QueriesenumNulldefaultResponse>;
}

export interface QueriesbyteMultiByte {
  /** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
  get(
    options?: QueriesbyteMultiByteParameters
  ): Promise<
    QueriesbyteMultiByte200Response | QueriesbyteMultiBytedefaultResponse
  >;
}

export interface QueriesbyteEmpty {
  /** Get '' as byte array */
  get(
    options: QueriesbyteEmptyParameters
  ): Promise<QueriesbyteEmpty200Response | QueriesbyteEmptydefaultResponse>;
}

export interface QueriesbyteNull {
  /** Get null as byte array (no query parameters in uri) */
  get(
    options?: QueriesbyteNullParameters
  ): Promise<QueriesbyteNull200Response | QueriesbyteNulldefaultResponse>;
}

export interface QueriesdateValid {
  /** Get '2012-01-01' as date */
  get(
    options: QueriesdateValidParameters
  ): Promise<QueriesdateValid200Response | QueriesdateValiddefaultResponse>;
}

export interface QueriesdateNull {
  /** Get null as date - this should result in no query parameters in uri */
  get(
    options?: QueriesdateNullParameters
  ): Promise<QueriesdateNull200Response | QueriesdateNulldefaultResponse>;
}

export interface QueriesdateTimeValid {
  /** Get '2012-01-01T01:01:01Z' as date-time */
  get(
    options: QueriesdateTimeValidParameters
  ): Promise<
    QueriesdateTimeValid200Response | QueriesdateTimeValiddefaultResponse
  >;
}

export interface QueriesdateTimeNull {
  /** Get null as date-time, should result in no query parameters in uri */
  get(
    options?: QueriesdateTimeNullParameters
  ): Promise<
    QueriesdateTimeNull200Response | QueriesdateTimeNulldefaultResponse
  >;
}

export interface QueriesarrayStringCsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  get(
    options?: QueriesarrayStringCsvValidParameters
  ): Promise<
    | QueriesarrayStringCsvValid200Response
    | QueriesarrayStringCsvValiddefaultResponse
  >;
}

export interface QueriesarrayStringCsvNull {
  /** Get a null array of string using the csv-array format */
  get(
    options?: QueriesarrayStringCsvNullParameters
  ): Promise<
    | QueriesarrayStringCsvNull200Response
    | QueriesarrayStringCsvNulldefaultResponse
  >;
}

export interface QueriesarrayStringCsvEmpty {
  /** Get an empty array [] of string using the csv-array format */
  get(
    options?: QueriesarrayStringCsvEmptyParameters
  ): Promise<
    | QueriesarrayStringCsvEmpty200Response
    | QueriesarrayStringCsvEmptydefaultResponse
  >;
}

export interface QueriesarrayStringNoCollectionFormatEmpty {
  /** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
  get(
    options?: QueriesarrayStringNoCollectionFormatEmptyParameters
  ): Promise<
    | QueriesarrayStringNoCollectionFormatEmpty200Response
    | QueriesarrayStringNoCollectionFormatEmptydefaultResponse
  >;
}

export interface QueriesarrayStringSsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  get(
    options?: QueriesarrayStringSsvValidParameters
  ): Promise<
    | QueriesarrayStringSsvValid200Response
    | QueriesarrayStringSsvValiddefaultResponse
  >;
}

export interface QueriesarrayStringTsvValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  get(
    options?: QueriesarrayStringTsvValidParameters
  ): Promise<
    | QueriesarrayStringTsvValid200Response
    | QueriesarrayStringTsvValiddefaultResponse
  >;
}

export interface QueriesarrayStringPipesValid {
  /** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  get(
    options?: QueriesarrayStringPipesValidParameters
  ): Promise<
    | QueriesarrayStringPipesValid200Response
    | QueriesarrayStringPipesValiddefaultResponse
  >;
}

export interface PathItemsgetAllWithValues {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsgetAllWithValuesParameters
  ): Promise<
    | PathItemsgetAllWithValues200Response
    | PathItemsgetAllWithValuesdefaultResponse
  >;
}

export interface PathItemsgetGlobalQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
  get(
    options?: PathItemsgetGlobalQueryNullParameters
  ): Promise<
    | PathItemsgetGlobalQueryNull200Response
    | PathItemsgetGlobalQueryNulldefaultResponse
  >;
}

export interface PathItemsgetGlobalAndLocalQueryNull {
  /** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
  get(
    options?: PathItemsgetGlobalAndLocalQueryNullParameters
  ): Promise<
    | PathItemsgetGlobalAndLocalQueryNull200Response
    | PathItemsgetGlobalAndLocalQueryNulldefaultResponse
  >;
}

export interface PathItemsgetLocalPathItemQueryNull {
  /** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
  get(
    options?: PathItemsgetLocalPathItemQueryNullParameters
  ): Promise<
    | PathItemsgetLocalPathItemQueryNull200Response
    | PathItemsgetLocalPathItemQueryNulldefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/paths/bool/true/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/true/{boolPath}", boolPath: true): PathsgetBooleanTrue;
  /** Resource for '/paths/bool/false/\{boolPath\}' has methods for the following verbs: get */
  (path: "/paths/bool/false/{boolPath}", boolPath: false): PathsgetBooleanFalse;
  /** Resource for '/paths/int/1000000/\{intPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/1000000/{intPath}",
    intPath: 1000000
  ): PathsgetIntOneMillion;
  /** Resource for '/paths/int/-1000000/\{intPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/-1000000/{intPath}",
    intPath: -1000000
  ): PathsgetIntNegativeOneMillion;
  /** Resource for '/paths/long/10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/10000000000/{longPath}",
    longPath: 10000000000
  ): PathsgetTenBillion;
  /** Resource for '/paths/long/-10000000000/\{longPath\}' has methods for the following verbs: get */
  (
    path: "/paths/long/-10000000000/{longPath}",
    longPath: -10000000000
  ): PathsgetNegativeTenBillion;
  /** Resource for '/paths/float/1.034E+20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/1.034E+20/{floatPath}",
    floatPath: 103400000000000000000
  ): PathsfloatScientificPositive;
  /** Resource for '/paths/float/-1.034E-20/\{floatPath\}' has methods for the following verbs: get */
  (
    path: "/paths/float/-1.034E-20/{floatPath}",
    floatPath: -1.034e-20
  ): PathsfloatScientificNegative;
  /** Resource for '/paths/double/9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/9999999.999/{doublePath}",
    doublePath: 9999999.999
  ): PathsdoubleDecimalPositive;
  /** Resource for '/paths/double/-9999999.999/\{doublePath\}' has methods for the following verbs: get */
  (
    path: "/paths/double/-9999999.999/{doublePath}",
    doublePath: -9999999.999
  ): PathsdoubleDecimalNegative;
  /** Resource for '/paths/string/unicode/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/unicode/{stringPath}",
    stringPath: "啊齄丂狛狜隣郎隣兀﨩"
  ): PathsstringUnicode;
  /** Resource for '/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
    stringPath: "begin!*'();:@ &=+$,/?#[]end"
  ): PathsstringUrlEncoded;
  /** Resource for '/paths/string/begin!*'();:@&=+$,end/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
    stringPath: "begin!*'();:@&=+$,end"
  ): PathsstringUrlNonEncoded;
  /** Resource for '/paths/string/empty/\{stringPath\}' has methods for the following verbs: get */
  (path: "/paths/string/empty/{stringPath}", stringPath: ""): PathsstringEmpty;
  /** Resource for '/paths/string/null/\{stringPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/null/{stringPath}",
    stringPath: string
  ): PathsstringNull;
  /** Resource for '/paths/enum/green%20color/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/enum/green%20color/{enumPath}",
    enumPath: "red color" | "green color" | "blue color"
  ): PathsenumValid;
  /** Resource for '/paths/string/null/\{enumPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/null/{enumPath}",
    enumPath: "red color" | "green color" | "blue color"
  ): PathsenumNull;
  /** Resource for '/paths/byte/multibyte/\{bytePath\}' has methods for the following verbs: get */
  (
    path: "/paths/byte/multibyte/{bytePath}",
    bytePath: string
  ): PathsbyteMultiByte;
  /** Resource for '/paths/byte/empty/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/empty/{bytePath}", bytePath: ""): PathsbyteEmpty;
  /** Resource for '/paths/byte/null/\{bytePath\}' has methods for the following verbs: get */
  (path: "/paths/byte/null/{bytePath}", bytePath: string): PathsbyteNull;
  /** Resource for '/paths/date/2012-01-01/\{datePath\}' has methods for the following verbs: get */
  (
    path: "/paths/date/2012-01-01/{datePath}",
    datePath: "2012-01-01"
  ): PathsdateValid;
  /** Resource for '/paths/date/null/\{datePath\}' has methods for the following verbs: get */
  (path: "/paths/date/null/{datePath}", datePath: Date | string): PathsdateNull;
  /** Resource for '/paths/datetime/2012-01-01T01%3A01%3A01Z/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
    dateTimePath: "2012-01-01T01:01:01Z"
  ): PathsdateTimeValid;
  /** Resource for '/paths/datetime/null/\{dateTimePath\}' has methods for the following verbs: get */
  (
    path: "/paths/datetime/null/{dateTimePath}",
    dateTimePath: Date | string
  ): PathsdateTimeNull;
  /** Resource for '/paths/string/bG9yZW0/\{base64UrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/string/bG9yZW0/{base64UrlPath}",
    base64UrlPath: string
  ): Pathsbase64Url;
  /** Resource for '/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/\{arrayPath\}' has methods for the following verbs: get */
  (
    path: "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
    arrayPath: Array<string>
  ): PathsarrayCsvInPath;
  /** Resource for '/paths/int/1460505600/\{unixTimeUrlPath\}' has methods for the following verbs: get */
  (
    path: "/paths/int/1460505600/{unixTimeUrlPath}",
    unixTimeUrlPath: string
  ): PathsunixTimeUrl;
  /** Resource for '/queries/bool/true' has methods for the following verbs: get */
  (path: "/queries/bool/true"): QueriesgetBooleanTrue;
  /** Resource for '/queries/bool/false' has methods for the following verbs: get */
  (path: "/queries/bool/false"): QueriesgetBooleanFalse;
  /** Resource for '/queries/bool/null' has methods for the following verbs: get */
  (path: "/queries/bool/null"): QueriesgetBooleanNull;
  /** Resource for '/queries/int/1000000' has methods for the following verbs: get */
  (path: "/queries/int/1000000"): QueriesgetIntOneMillion;
  /** Resource for '/queries/int/-1000000' has methods for the following verbs: get */
  (path: "/queries/int/-1000000"): QueriesgetIntNegativeOneMillion;
  /** Resource for '/queries/int/null' has methods for the following verbs: get */
  (path: "/queries/int/null"): QueriesgetIntNull;
  /** Resource for '/queries/long/10000000000' has methods for the following verbs: get */
  (path: "/queries/long/10000000000"): QueriesgetTenBillion;
  /** Resource for '/queries/long/-10000000000' has methods for the following verbs: get */
  (path: "/queries/long/-10000000000"): QueriesgetNegativeTenBillion;
  /** Resource for '/queries/long/null' has methods for the following verbs: get */
  (path: "/queries/long/null"): QueriesgetLongNull;
  /** Resource for '/queries/float/1.034E+20' has methods for the following verbs: get */
  (path: "/queries/float/1.034E+20"): QueriesfloatScientificPositive;
  /** Resource for '/queries/float/-1.034E-20' has methods for the following verbs: get */
  (path: "/queries/float/-1.034E-20"): QueriesfloatScientificNegative;
  /** Resource for '/queries/float/null' has methods for the following verbs: get */
  (path: "/queries/float/null"): QueriesfloatNull;
  /** Resource for '/queries/double/9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/9999999.999"): QueriesdoubleDecimalPositive;
  /** Resource for '/queries/double/-9999999.999' has methods for the following verbs: get */
  (path: "/queries/double/-9999999.999"): QueriesdoubleDecimalNegative;
  /** Resource for '/queries/double/null' has methods for the following verbs: get */
  (path: "/queries/double/null"): QueriesdoubleNull;
  /** Resource for '/queries/string/unicode/' has methods for the following verbs: get */
  (path: "/queries/string/unicode/"): QueriesstringUnicode;
  /** Resource for '/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend' has methods for the following verbs: get */
  (
    path: "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend"
  ): QueriesstringUrlEncoded;
  /** Resource for '/queries/string/empty' has methods for the following verbs: get */
  (path: "/queries/string/empty"): QueriesstringEmpty;
  /** Resource for '/queries/string/null' has methods for the following verbs: get */
  (path: "/queries/string/null"): QueriesstringNull;
  /** Resource for '/queries/enum/green%20color' has methods for the following verbs: get */
  (path: "/queries/enum/green%20color"): QueriesenumValid;
  /** Resource for '/queries/enum/null' has methods for the following verbs: get */
  (path: "/queries/enum/null"): QueriesenumNull;
  /** Resource for '/queries/byte/multibyte' has methods for the following verbs: get */
  (path: "/queries/byte/multibyte"): QueriesbyteMultiByte;
  /** Resource for '/queries/byte/empty' has methods for the following verbs: get */
  (path: "/queries/byte/empty"): QueriesbyteEmpty;
  /** Resource for '/queries/byte/null' has methods for the following verbs: get */
  (path: "/queries/byte/null"): QueriesbyteNull;
  /** Resource for '/queries/date/2012-01-01' has methods for the following verbs: get */
  (path: "/queries/date/2012-01-01"): QueriesdateValid;
  /** Resource for '/queries/date/null' has methods for the following verbs: get */
  (path: "/queries/date/null"): QueriesdateNull;
  /** Resource for '/queries/datetime/2012-01-01T01%3A01%3A01Z' has methods for the following verbs: get */
  (path: "/queries/datetime/2012-01-01T01%3A01%3A01Z"): QueriesdateTimeValid;
  /** Resource for '/queries/datetime/null' has methods for the following verbs: get */
  (path: "/queries/datetime/null"): QueriesdateTimeNull;
  /** Resource for '/queries/array/csv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/valid"): QueriesarrayStringCsvValid;
  /** Resource for '/queries/array/csv/string/null' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/null"): QueriesarrayStringCsvNull;
  /** Resource for '/queries/array/csv/string/empty' has methods for the following verbs: get */
  (path: "/queries/array/csv/string/empty"): QueriesarrayStringCsvEmpty;
  /** Resource for '/queries/array/none/string/empty' has methods for the following verbs: get */
  (
    path: "/queries/array/none/string/empty"
  ): QueriesarrayStringNoCollectionFormatEmpty;
  /** Resource for '/queries/array/ssv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/ssv/string/valid"): QueriesarrayStringSsvValid;
  /** Resource for '/queries/array/tsv/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/tsv/string/valid"): QueriesarrayStringTsvValid;
  /** Resource for '/queries/array/pipes/string/valid' has methods for the following verbs: get */
  (path: "/queries/array/pipes/string/valid"): QueriesarrayStringPipesValid;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): PathItemsgetAllWithValues;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/localStringQuery' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): PathItemsgetGlobalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/null/pathItemStringQuery/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): PathItemsgetGlobalAndLocalQueryNull;
  /** Resource for '/pathitem/nullable/globalStringPath/\{globalStringPath\}/pathItemStringPath/\{pathItemStringPath\}/localStringPath/\{localStringPath\}/globalStringQuery/null/null' has methods for the following verbs: get */
  (
    path: "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
    globalStringPath: string,
    pathItemStringPath: string,
    localStringPath: string
  ): PathItemsgetLocalPathItemQueryNull;
}

export type UrlRestClientRestClient = Client & {
  path: Routes;
};

export default function UrlRestClient(
  options: ClientOptions = {}
): UrlRestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as UrlRestClientRestClient;
}
