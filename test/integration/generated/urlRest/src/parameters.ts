// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type PathsgetBooleanTrueParameters = RequestParameters;
export type PathsgetBooleanFalseParameters = RequestParameters;
export type PathsgetIntOneMillionParameters = RequestParameters;
export type PathsgetIntNegativeOneMillionParameters = RequestParameters;
export type PathsgetTenBillionParameters = RequestParameters;
export type PathsgetNegativeTenBillionParameters = RequestParameters;
export type PathsfloatScientificPositiveParameters = RequestParameters;
export type PathsfloatScientificNegativeParameters = RequestParameters;
export type PathsdoubleDecimalPositiveParameters = RequestParameters;
export type PathsdoubleDecimalNegativeParameters = RequestParameters;
export type PathsstringUnicodeParameters = RequestParameters;
export type PathsstringUrlEncodedParameters = RequestParameters;
export type PathsstringUrlNonEncodedParameters = RequestParameters;
export type PathsstringEmptyParameters = RequestParameters;
export type PathsstringNullParameters = RequestParameters;
export type PathsenumValidParameters = RequestParameters;
export type PathsenumNullParameters = RequestParameters;
export type PathsbyteMultiByteParameters = RequestParameters;
export type PathsbyteEmptyParameters = RequestParameters;
export type PathsbyteNullParameters = RequestParameters;
export type PathsdateValidParameters = RequestParameters;
export type PathsdateNullParameters = RequestParameters;
export type PathsdateTimeValidParameters = RequestParameters;
export type PathsdateTimeNullParameters = RequestParameters;
export type Pathsbase64UrlParameters = RequestParameters;
export type PathsarrayCsvInPathParameters = RequestParameters;
export type PathsunixTimeUrlParameters = RequestParameters;

export interface QueriesgetBooleanTrueQueryParamProperties {
  /** true boolean value */
  boolQuery: true;
}

export interface QueriesgetBooleanTrueQueryParam {
  queryParameters: QueriesgetBooleanTrueQueryParamProperties;
}

export type QueriesgetBooleanTrueParameters = QueriesgetBooleanTrueQueryParam &
  RequestParameters;

export interface QueriesgetBooleanFalseQueryParamProperties {
  /** false boolean value */
  boolQuery: false;
}

export interface QueriesgetBooleanFalseQueryParam {
  queryParameters: QueriesgetBooleanFalseQueryParamProperties;
}

export type QueriesgetBooleanFalseParameters = QueriesgetBooleanFalseQueryParam &
  RequestParameters;

export interface QueriesgetBooleanNullQueryParamProperties {
  /** null boolean value */
  boolQuery?: boolean;
}

export interface QueriesgetBooleanNullQueryParam {
  queryParameters?: QueriesgetBooleanNullQueryParamProperties;
}

export type QueriesgetBooleanNullParameters = QueriesgetBooleanNullQueryParam &
  RequestParameters;

export interface QueriesgetIntOneMillionQueryParamProperties {
  /** '1000000' integer value */
  intQuery: 1000000;
}

export interface QueriesgetIntOneMillionQueryParam {
  queryParameters: QueriesgetIntOneMillionQueryParamProperties;
}

export type QueriesgetIntOneMillionParameters = QueriesgetIntOneMillionQueryParam &
  RequestParameters;

export interface QueriesgetIntNegativeOneMillionQueryParamProperties {
  /** '-1000000' integer value */
  intQuery: -1000000;
}

export interface QueriesgetIntNegativeOneMillionQueryParam {
  queryParameters: QueriesgetIntNegativeOneMillionQueryParamProperties;
}

export type QueriesgetIntNegativeOneMillionParameters = QueriesgetIntNegativeOneMillionQueryParam &
  RequestParameters;

export interface QueriesgetIntNullQueryParamProperties {
  /** null integer value */
  intQuery?: number;
}

export interface QueriesgetIntNullQueryParam {
  queryParameters?: QueriesgetIntNullQueryParamProperties;
}

export type QueriesgetIntNullParameters = QueriesgetIntNullQueryParam &
  RequestParameters;

export interface QueriesgetTenBillionQueryParamProperties {
  /** '10000000000' 64 bit integer value */
  longQuery: 10000000000;
}

export interface QueriesgetTenBillionQueryParam {
  queryParameters: QueriesgetTenBillionQueryParamProperties;
}

export type QueriesgetTenBillionParameters = QueriesgetTenBillionQueryParam &
  RequestParameters;

export interface QueriesgetNegativeTenBillionQueryParamProperties {
  /** '-10000000000' 64 bit integer value */
  longQuery: -10000000000;
}

export interface QueriesgetNegativeTenBillionQueryParam {
  queryParameters: QueriesgetNegativeTenBillionQueryParamProperties;
}

export type QueriesgetNegativeTenBillionParameters = QueriesgetNegativeTenBillionQueryParam &
  RequestParameters;

export interface QueriesgetLongNullQueryParamProperties {
  /** null 64 bit integer value */
  longQuery?: number;
}

export interface QueriesgetLongNullQueryParam {
  queryParameters?: QueriesgetLongNullQueryParamProperties;
}

export type QueriesgetLongNullParameters = QueriesgetLongNullQueryParam &
  RequestParameters;

export interface QueriesfloatScientificPositiveQueryParamProperties {
  /** '1.034E+20'numeric value */
  floatQuery: 103400000000000000000;
}

export interface QueriesfloatScientificPositiveQueryParam {
  queryParameters: QueriesfloatScientificPositiveQueryParamProperties;
}

export type QueriesfloatScientificPositiveParameters = QueriesfloatScientificPositiveQueryParam &
  RequestParameters;

export interface QueriesfloatScientificNegativeQueryParamProperties {
  /** '-1.034E-20'numeric value */
  floatQuery: -1.034e-20;
}

export interface QueriesfloatScientificNegativeQueryParam {
  queryParameters: QueriesfloatScientificNegativeQueryParamProperties;
}

export type QueriesfloatScientificNegativeParameters = QueriesfloatScientificNegativeQueryParam &
  RequestParameters;

export interface QueriesfloatNullQueryParamProperties {
  /** null numeric value */
  floatQuery?: number;
}

export interface QueriesfloatNullQueryParam {
  queryParameters?: QueriesfloatNullQueryParamProperties;
}

export type QueriesfloatNullParameters = QueriesfloatNullQueryParam &
  RequestParameters;

export interface QueriesdoubleDecimalPositiveQueryParamProperties {
  /** '9999999.999'numeric value */
  doubleQuery: 9999999.999;
}

export interface QueriesdoubleDecimalPositiveQueryParam {
  queryParameters: QueriesdoubleDecimalPositiveQueryParamProperties;
}

export type QueriesdoubleDecimalPositiveParameters = QueriesdoubleDecimalPositiveQueryParam &
  RequestParameters;

export interface QueriesdoubleDecimalNegativeQueryParamProperties {
  /** '-9999999.999'numeric value */
  doubleQuery: -9999999.999;
}

export interface QueriesdoubleDecimalNegativeQueryParam {
  queryParameters: QueriesdoubleDecimalNegativeQueryParamProperties;
}

export type QueriesdoubleDecimalNegativeParameters = QueriesdoubleDecimalNegativeQueryParam &
  RequestParameters;

export interface QueriesdoubleNullQueryParamProperties {
  /** null numeric value */
  doubleQuery?: number;
}

export interface QueriesdoubleNullQueryParam {
  queryParameters?: QueriesdoubleNullQueryParamProperties;
}

export type QueriesdoubleNullParameters = QueriesdoubleNullQueryParam &
  RequestParameters;

export interface QueriesstringUnicodeQueryParamProperties {
  /** '啊齄丂狛狜隣郎隣兀﨩'multi-byte string value */
  stringQuery: "啊齄丂狛狜隣郎隣兀﨩";
}

export interface QueriesstringUnicodeQueryParam {
  queryParameters: QueriesstringUnicodeQueryParamProperties;
}

export type QueriesstringUnicodeParameters = QueriesstringUnicodeQueryParam &
  RequestParameters;

export interface QueriesstringUrlEncodedQueryParamProperties {
  /** 'begin!*'();:@ &=+$,/?#[]end' url encoded string value */
  stringQuery: "begin!*'();:@ &=+$,/?#[]end";
}

export interface QueriesstringUrlEncodedQueryParam {
  queryParameters: QueriesstringUrlEncodedQueryParamProperties;
}

export type QueriesstringUrlEncodedParameters = QueriesstringUrlEncodedQueryParam &
  RequestParameters;

export interface QueriesstringEmptyQueryParamProperties {
  /** '' string value */
  stringQuery: "";
}

export interface QueriesstringEmptyQueryParam {
  queryParameters: QueriesstringEmptyQueryParamProperties;
}

export type QueriesstringEmptyParameters = QueriesstringEmptyQueryParam &
  RequestParameters;

export interface QueriesstringNullQueryParamProperties {
  /** null string value */
  stringQuery?: string;
}

export interface QueriesstringNullQueryParam {
  queryParameters?: QueriesstringNullQueryParamProperties;
}

export type QueriesstringNullParameters = QueriesstringNullQueryParam &
  RequestParameters;

export interface QueriesenumValidQueryParamProperties {
  /** 'green color' enum value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesenumValidQueryParam {
  queryParameters?: QueriesenumValidQueryParamProperties;
}

export type QueriesenumValidParameters = QueriesenumValidQueryParam &
  RequestParameters;

export interface QueriesenumNullQueryParamProperties {
  /** null string value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesenumNullQueryParam {
  queryParameters?: QueriesenumNullQueryParamProperties;
}

export type QueriesenumNullParameters = QueriesenumNullQueryParam &
  RequestParameters;

export interface QueriesbyteMultiByteQueryParamProperties {
  /**
   * '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesbyteMultiByteQueryParam {
  queryParameters?: QueriesbyteMultiByteQueryParamProperties;
}

export type QueriesbyteMultiByteParameters = QueriesbyteMultiByteQueryParam &
  RequestParameters;

export interface QueriesbyteEmptyQueryParamProperties {
  /** '' as byte array */
  byteQuery: "";
}

export interface QueriesbyteEmptyQueryParam {
  queryParameters: QueriesbyteEmptyQueryParamProperties;
}

export type QueriesbyteEmptyParameters = QueriesbyteEmptyQueryParam &
  RequestParameters;

export interface QueriesbyteNullQueryParamProperties {
  /**
   * null as byte array (no query parameters in uri)
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesbyteNullQueryParam {
  queryParameters?: QueriesbyteNullQueryParamProperties;
}

export type QueriesbyteNullParameters = QueriesbyteNullQueryParam &
  RequestParameters;

export interface QueriesdateValidQueryParamProperties {
  /** '2012-01-01' as date */
  dateQuery: "2012-01-01";
}

export interface QueriesdateValidQueryParam {
  queryParameters: QueriesdateValidQueryParamProperties;
}

export type QueriesdateValidParameters = QueriesdateValidQueryParam &
  RequestParameters;

export interface QueriesdateNullQueryParamProperties {
  /** null as date (no query parameters in uri) */
  dateQuery?: Date | string;
}

export interface QueriesdateNullQueryParam {
  queryParameters?: QueriesdateNullQueryParamProperties;
}

export type QueriesdateNullParameters = QueriesdateNullQueryParam &
  RequestParameters;

export interface QueriesdateTimeValidQueryParamProperties {
  /** '2012-01-01T01:01:01Z' as date-time */
  dateTimeQuery: "2012-01-01T01:01:01Z";
}

export interface QueriesdateTimeValidQueryParam {
  queryParameters: QueriesdateTimeValidQueryParamProperties;
}

export type QueriesdateTimeValidParameters = QueriesdateTimeValidQueryParam &
  RequestParameters;

export interface QueriesdateTimeNullQueryParamProperties {
  /** null as date-time (no query parameters) */
  dateTimeQuery?: Date | string;
}

export interface QueriesdateTimeNullQueryParam {
  queryParameters?: QueriesdateTimeNullQueryParamProperties;
}

export type QueriesdateTimeNullParameters = QueriesdateTimeNullQueryParam &
  RequestParameters;

export interface QueriesarrayStringCsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringCsvValidQueryParam {
  queryParameters?: QueriesarrayStringCsvValidQueryParamProperties;
}

export type QueriesarrayStringCsvValidParameters = QueriesarrayStringCsvValidQueryParam &
  RequestParameters;

export interface QueriesarrayStringCsvNullQueryParamProperties {
  /** a null array of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringCsvNullQueryParam {
  queryParameters?: QueriesarrayStringCsvNullQueryParamProperties;
}

export type QueriesarrayStringCsvNullParameters = QueriesarrayStringCsvNullQueryParam &
  RequestParameters;

export interface QueriesarrayStringCsvEmptyQueryParamProperties {
  /** an empty array [] of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringCsvEmptyQueryParam {
  queryParameters?: QueriesarrayStringCsvEmptyQueryParamProperties;
}

export type QueriesarrayStringCsvEmptyParameters = QueriesarrayStringCsvEmptyQueryParam &
  RequestParameters;

export interface QueriesarrayStringNoCollectionFormatEmptyQueryParamProperties {
  /** Array-typed query parameter. Pass in ['hello', 'nihao', 'bonjour']. */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringNoCollectionFormatEmptyQueryParam {
  queryParameters?: QueriesarrayStringNoCollectionFormatEmptyQueryParamProperties;
}

export type QueriesarrayStringNoCollectionFormatEmptyParameters = QueriesarrayStringNoCollectionFormatEmptyQueryParam &
  RequestParameters;

export interface QueriesarrayStringSsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringSsvValidQueryParam {
  queryParameters?: QueriesarrayStringSsvValidQueryParamProperties;
}

export type QueriesarrayStringSsvValidParameters = QueriesarrayStringSsvValidQueryParam &
  RequestParameters;

export interface QueriesarrayStringTsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringTsvValidQueryParam {
  queryParameters?: QueriesarrayStringTsvValidQueryParamProperties;
}

export type QueriesarrayStringTsvValidParameters = QueriesarrayStringTsvValidQueryParam &
  RequestParameters;

export interface QueriesarrayStringPipesValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesarrayStringPipesValidQueryParam {
  queryParameters?: QueriesarrayStringPipesValidQueryParamProperties;
}

export type QueriesarrayStringPipesValidParameters = QueriesarrayStringPipesValidQueryParam &
  RequestParameters;

export interface PathItemsgetAllWithValuesQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsgetAllWithValuesQueryParam {
  queryParameters?: PathItemsgetAllWithValuesQueryParamProperties;
}

export type PathItemsgetAllWithValuesParameters = PathItemsgetAllWithValuesQueryParam &
  RequestParameters;

export interface PathItemsgetGlobalQueryNullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsgetGlobalQueryNullQueryParam {
  queryParameters?: PathItemsgetGlobalQueryNullQueryParamProperties;
}

export type PathItemsgetGlobalQueryNullParameters = PathItemsgetGlobalQueryNullQueryParam &
  RequestParameters;

export interface PathItemsgetGlobalAndLocalQueryNullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain null value */
  localStringQuery?: string;
}

export interface PathItemsgetGlobalAndLocalQueryNullQueryParam {
  queryParameters?: PathItemsgetGlobalAndLocalQueryNullQueryParamProperties;
}

export type PathItemsgetGlobalAndLocalQueryNullParameters = PathItemsgetGlobalAndLocalQueryNullQueryParam &
  RequestParameters;

export interface PathItemsgetLocalPathItemQueryNullQueryParamProperties {
  /** should contain value null */
  pathItemStringQuery?: string;
  /** should contain value null */
  localStringQuery?: string;
}

export interface PathItemsgetLocalPathItemQueryNullQueryParam {
  queryParameters?: PathItemsgetLocalPathItemQueryNullQueryParamProperties;
}

export type PathItemsgetLocalPathItemQueryNullParameters = PathItemsgetLocalPathItemQueryNullQueryParam &
  RequestParameters;
