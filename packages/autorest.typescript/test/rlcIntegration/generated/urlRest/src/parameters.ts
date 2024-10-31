// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";

export type PathsGetBooleanTrueParameters = RequestParameters;
export type PathsGetBooleanFalseParameters = RequestParameters;
export type PathsGetIntOneMillionParameters = RequestParameters;
export type PathsGetIntNegativeOneMillionParameters = RequestParameters;
export type PathsGetTenBillionParameters = RequestParameters;
export type PathsGetNegativeTenBillionParameters = RequestParameters;
export type PathsFloatScientificPositiveParameters = RequestParameters;
export type PathsFloatScientificNegativeParameters = RequestParameters;
export type PathsDoubleDecimalPositiveParameters = RequestParameters;
export type PathsDoubleDecimalNegativeParameters = RequestParameters;
export type PathsStringUnicodeParameters = RequestParameters;
export type PathsStringUrlEncodedParameters = RequestParameters;
export type PathsStringUrlNonEncodedParameters = RequestParameters;
export type PathsStringEmptyParameters = RequestParameters;
export type PathsStringnullParameters = RequestParameters;
export type PathsEnumValidParameters = RequestParameters;
export type PathsEnumnullParameters = RequestParameters;
export type PathsByteMultiByteParameters = RequestParameters;
export type PathsByteEmptyParameters = RequestParameters;
export type PathsBytenullParameters = RequestParameters;
export type PathsDateValidParameters = RequestParameters;
export type PathsDatenullParameters = RequestParameters;
export type PathsDateTimeValidParameters = RequestParameters;
export type PathsDateTimenullParameters = RequestParameters;
export type PathsBase64UrlParameters = RequestParameters;
export type PathsArrayCsvInPathParameters = RequestParameters;
export type PathsUnixTimeUrlParameters = RequestParameters;

export interface QueriesGetBooleanTrueQueryParamProperties {
  /** true boolean value */
  boolQuery: true;
}

export interface QueriesGetBooleanTrueQueryParam {
  queryParameters: QueriesGetBooleanTrueQueryParamProperties;
}

export type QueriesGetBooleanTrueParameters = QueriesGetBooleanTrueQueryParam &
  RequestParameters;

export interface QueriesGetBooleanFalseQueryParamProperties {
  /** false boolean value */
  boolQuery: false;
}

export interface QueriesGetBooleanFalseQueryParam {
  queryParameters: QueriesGetBooleanFalseQueryParamProperties;
}

export type QueriesGetBooleanFalseParameters =
  QueriesGetBooleanFalseQueryParam & RequestParameters;

export interface QueriesGetBooleannullQueryParamProperties {
  /** null boolean value */
  boolQuery?: boolean;
}

export interface QueriesGetBooleannullQueryParam {
  queryParameters?: QueriesGetBooleannullQueryParamProperties;
}

export type QueriesGetBooleannullParameters = QueriesGetBooleannullQueryParam &
  RequestParameters;

export interface QueriesGetIntOneMillionQueryParamProperties {
  /** '1000000' integer value */
  intQuery: 1000000;
}

export interface QueriesGetIntOneMillionQueryParam {
  queryParameters: QueriesGetIntOneMillionQueryParamProperties;
}

export type QueriesGetIntOneMillionParameters =
  QueriesGetIntOneMillionQueryParam & RequestParameters;

export interface QueriesGetIntNegativeOneMillionQueryParamProperties {
  /** '-1000000' integer value */
  intQuery: -1000000;
}

export interface QueriesGetIntNegativeOneMillionQueryParam {
  queryParameters: QueriesGetIntNegativeOneMillionQueryParamProperties;
}

export type QueriesGetIntNegativeOneMillionParameters =
  QueriesGetIntNegativeOneMillionQueryParam & RequestParameters;

export interface QueriesGetIntnullQueryParamProperties {
  /** null integer value */
  intQuery?: number;
}

export interface QueriesGetIntnullQueryParam {
  queryParameters?: QueriesGetIntnullQueryParamProperties;
}

export type QueriesGetIntnullParameters = QueriesGetIntnullQueryParam &
  RequestParameters;

export interface QueriesGetTenBillionQueryParamProperties {
  /** '10000000000' 64 bit integer value */
  longQuery: 10000000000;
}

export interface QueriesGetTenBillionQueryParam {
  queryParameters: QueriesGetTenBillionQueryParamProperties;
}

export type QueriesGetTenBillionParameters = QueriesGetTenBillionQueryParam &
  RequestParameters;

export interface QueriesGetNegativeTenBillionQueryParamProperties {
  /** '-10000000000' 64 bit integer value */
  longQuery: -10000000000;
}

export interface QueriesGetNegativeTenBillionQueryParam {
  queryParameters: QueriesGetNegativeTenBillionQueryParamProperties;
}

export type QueriesGetNegativeTenBillionParameters =
  QueriesGetNegativeTenBillionQueryParam & RequestParameters;

export interface QueriesGetLongnullQueryParamProperties {
  /** null 64 bit integer value */
  longQuery?: number;
}

export interface QueriesGetLongnullQueryParam {
  queryParameters?: QueriesGetLongnullQueryParamProperties;
}

export type QueriesGetLongnullParameters = QueriesGetLongnullQueryParam &
  RequestParameters;

export interface QueriesFloatScientificPositiveQueryParamProperties {
  /** '1.034E+20'numeric value */
  floatQuery: 103400000000000000000;
}

export interface QueriesFloatScientificPositiveQueryParam {
  queryParameters: QueriesFloatScientificPositiveQueryParamProperties;
}

export type QueriesFloatScientificPositiveParameters =
  QueriesFloatScientificPositiveQueryParam & RequestParameters;

export interface QueriesFloatScientificNegativeQueryParamProperties {
  /** '-1.034E-20'numeric value */
  floatQuery: -1.034e-20;
}

export interface QueriesFloatScientificNegativeQueryParam {
  queryParameters: QueriesFloatScientificNegativeQueryParamProperties;
}

export type QueriesFloatScientificNegativeParameters =
  QueriesFloatScientificNegativeQueryParam & RequestParameters;

export interface QueriesFloatnullQueryParamProperties {
  /** null numeric value */
  floatQuery?: number;
}

export interface QueriesFloatnullQueryParam {
  queryParameters?: QueriesFloatnullQueryParamProperties;
}

export type QueriesFloatnullParameters = QueriesFloatnullQueryParam &
  RequestParameters;

export interface QueriesDoubleDecimalPositiveQueryParamProperties {
  /** '9999999.999'numeric value */
  doubleQuery: 9999999.999;
}

export interface QueriesDoubleDecimalPositiveQueryParam {
  queryParameters: QueriesDoubleDecimalPositiveQueryParamProperties;
}

export type QueriesDoubleDecimalPositiveParameters =
  QueriesDoubleDecimalPositiveQueryParam & RequestParameters;

export interface QueriesDoubleDecimalNegativeQueryParamProperties {
  /** '-9999999.999'numeric value */
  doubleQuery: -9999999.999;
}

export interface QueriesDoubleDecimalNegativeQueryParam {
  queryParameters: QueriesDoubleDecimalNegativeQueryParamProperties;
}

export type QueriesDoubleDecimalNegativeParameters =
  QueriesDoubleDecimalNegativeQueryParam & RequestParameters;

export interface QueriesDoublenullQueryParamProperties {
  /** null numeric value */
  doubleQuery?: number;
}

export interface QueriesDoublenullQueryParam {
  queryParameters?: QueriesDoublenullQueryParamProperties;
}

export type QueriesDoublenullParameters = QueriesDoublenullQueryParam &
  RequestParameters;

export interface QueriesStringUnicodeQueryParamProperties {
  /** '啊齄丂狛狜隣郎隣兀﨩'multi-byte string value */
  stringQuery: "啊齄丂狛狜隣郎隣兀﨩";
}

export interface QueriesStringUnicodeQueryParam {
  queryParameters: QueriesStringUnicodeQueryParamProperties;
}

export type QueriesStringUnicodeParameters = QueriesStringUnicodeQueryParam &
  RequestParameters;

export interface QueriesStringUrlEncodedQueryParamProperties {
  /** 'begin!*'();:@ &=+$,/?#[]end' url encoded string value */
  stringQuery: "begin!*'();:@ &=+$,/?#[]end";
}

export interface QueriesStringUrlEncodedQueryParam {
  queryParameters: QueriesStringUrlEncodedQueryParamProperties;
}

export type QueriesStringUrlEncodedParameters =
  QueriesStringUrlEncodedQueryParam & RequestParameters;

export interface QueriesStringEmptyQueryParamProperties {
  /** '' string value */
  stringQuery: "";
}

export interface QueriesStringEmptyQueryParam {
  queryParameters: QueriesStringEmptyQueryParamProperties;
}

export type QueriesStringEmptyParameters = QueriesStringEmptyQueryParam &
  RequestParameters;

export interface QueriesStringnullQueryParamProperties {
  /** null string value */
  stringQuery?: string;
}

export interface QueriesStringnullQueryParam {
  queryParameters?: QueriesStringnullQueryParamProperties;
}

export type QueriesStringnullParameters = QueriesStringnullQueryParam &
  RequestParameters;

export interface QueriesEnumValidQueryParamProperties {
  /** 'green color' enum value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesEnumValidQueryParam {
  queryParameters?: QueriesEnumValidQueryParamProperties;
}

export type QueriesEnumValidParameters = QueriesEnumValidQueryParam &
  RequestParameters;

export interface QueriesEnumnullQueryParamProperties {
  /** null string value */
  enumQuery?: "red color" | "green color" | "blue color";
}

export interface QueriesEnumnullQueryParam {
  queryParameters?: QueriesEnumnullQueryParamProperties;
}

export type QueriesEnumnullParameters = QueriesEnumnullQueryParam &
  RequestParameters;

export interface QueriesByteMultiByteQueryParamProperties {
  /**
   * '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesByteMultiByteQueryParam {
  queryParameters?: QueriesByteMultiByteQueryParamProperties;
}

export type QueriesByteMultiByteParameters = QueriesByteMultiByteQueryParam &
  RequestParameters;

export interface QueriesByteEmptyQueryParamProperties {
  /** '' as byte array */
  byteQuery: "";
}

export interface QueriesByteEmptyQueryParam {
  queryParameters: QueriesByteEmptyQueryParamProperties;
}

export type QueriesByteEmptyParameters = QueriesByteEmptyQueryParam &
  RequestParameters;

export interface QueriesBytenullQueryParamProperties {
  /**
   * null as byte array (no query parameters in uri)
   *
   * Value may contain base64 encoded characters
   */
  byteQuery?: string;
}

export interface QueriesBytenullQueryParam {
  queryParameters?: QueriesBytenullQueryParamProperties;
}

export type QueriesBytenullParameters = QueriesBytenullQueryParam &
  RequestParameters;

export interface QueriesDateValidQueryParamProperties {
  /** '2012-01-01' as date */
  dateQuery: "2012-01-01";
}

export interface QueriesDateValidQueryParam {
  queryParameters: QueriesDateValidQueryParamProperties;
}

export type QueriesDateValidParameters = QueriesDateValidQueryParam &
  RequestParameters;

export interface QueriesDatenullQueryParamProperties {
  /** null as date (no query parameters in uri) */
  dateQuery?: Date | string;
}

export interface QueriesDatenullQueryParam {
  queryParameters?: QueriesDatenullQueryParamProperties;
}

export type QueriesDatenullParameters = QueriesDatenullQueryParam &
  RequestParameters;

export interface QueriesDateTimeValidQueryParamProperties {
  /** '2012-01-01T01:01:01Z' as date-time */
  dateTimeQuery: "2012-01-01T01:01:01.000Z";
}

export interface QueriesDateTimeValidQueryParam {
  queryParameters: QueriesDateTimeValidQueryParamProperties;
}

export type QueriesDateTimeValidParameters = QueriesDateTimeValidQueryParam &
  RequestParameters;

export interface QueriesDateTimenullQueryParamProperties {
  /** null as date-time (no query parameters) */
  dateTimeQuery?: Date | string;
}

export interface QueriesDateTimenullQueryParam {
  queryParameters?: QueriesDateTimenullQueryParamProperties;
}

export type QueriesDateTimenullParameters = QueriesDateTimenullQueryParam &
  RequestParameters;

export interface QueriesArrayStringCsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvValidQueryParam {
  queryParameters?: QueriesArrayStringCsvValidQueryParamProperties;
}

export type QueriesArrayStringCsvValidParameters =
  QueriesArrayStringCsvValidQueryParam & RequestParameters;

export interface QueriesArrayStringCsvnullQueryParamProperties {
  /** a null array of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvnullQueryParam {
  queryParameters?: QueriesArrayStringCsvnullQueryParamProperties;
}

export type QueriesArrayStringCsvnullParameters =
  QueriesArrayStringCsvnullQueryParam & RequestParameters;

export interface QueriesArrayStringCsvEmptyQueryParamProperties {
  /** an empty array [] of string using the csv-array format */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringCsvEmptyQueryParam {
  queryParameters?: QueriesArrayStringCsvEmptyQueryParamProperties;
}

export type QueriesArrayStringCsvEmptyParameters =
  QueriesArrayStringCsvEmptyQueryParam & RequestParameters;

export interface QueriesArrayStringNoCollectionFormatEmptyQueryParamProperties {
  /** Array-typed query parameter. Pass in ['hello', 'nihao', 'bonjour']. */
  arrayQuery?: Array<string>;
}

export interface QueriesArrayStringNoCollectionFormatEmptyQueryParam {
  queryParameters?: QueriesArrayStringNoCollectionFormatEmptyQueryParamProperties;
}

export type QueriesArrayStringNoCollectionFormatEmptyParameters =
  QueriesArrayStringNoCollectionFormatEmptyQueryParam & RequestParameters;

export interface QueriesArrayStringSsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format This parameter needs to be formatted as ssv collection, we provide buildSsvCollection from serializeHelper.ts to help */
  arrayQuery?: string;
}

export interface QueriesArrayStringSsvValidQueryParam {
  queryParameters?: QueriesArrayStringSsvValidQueryParamProperties;
}

export type QueriesArrayStringSsvValidParameters =
  QueriesArrayStringSsvValidQueryParam & RequestParameters;

export interface QueriesArrayStringTsvValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format This parameter needs to be formatted as tsv collection, we provide buildTsvCollection from serializeHelper.ts to help */
  arrayQuery?: string;
}

export interface QueriesArrayStringTsvValidQueryParam {
  queryParameters?: QueriesArrayStringTsvValidQueryParamProperties;
}

export type QueriesArrayStringTsvValidParameters =
  QueriesArrayStringTsvValidQueryParam & RequestParameters;

export interface QueriesArrayStringPipesValidQueryParamProperties {
  /** an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format This parameter needs to be formatted as pipe collection, we provide buildPipeCollection from serializeHelper.ts to help */
  arrayQuery?: string;
}

export interface QueriesArrayStringPipesValidQueryParam {
  queryParameters?: QueriesArrayStringPipesValidQueryParamProperties;
}

export type QueriesArrayStringPipesValidParameters =
  QueriesArrayStringPipesValidQueryParam & RequestParameters;

export interface PathItemsGetAllWithValuesQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsGetAllWithValuesQueryParam {
  queryParameters?: PathItemsGetAllWithValuesQueryParamProperties;
}

export type PathItemsGetAllWithValuesParameters =
  PathItemsGetAllWithValuesQueryParam & RequestParameters;

export interface PathItemsGetGlobalQuerynullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain value 'localStringQuery' */
  localStringQuery?: string;
}

export interface PathItemsGetGlobalQuerynullQueryParam {
  queryParameters?: PathItemsGetGlobalQuerynullQueryParamProperties;
}

export type PathItemsGetGlobalQuerynullParameters =
  PathItemsGetGlobalQuerynullQueryParam & RequestParameters;

export interface PathItemsGetGlobalAndLocalQuerynullQueryParamProperties {
  /** A string value 'pathItemStringQuery' that appears as a query parameter */
  pathItemStringQuery?: string;
  /** should contain null value */
  localStringQuery?: string;
}

export interface PathItemsGetGlobalAndLocalQuerynullQueryParam {
  queryParameters?: PathItemsGetGlobalAndLocalQuerynullQueryParamProperties;
}

export type PathItemsGetGlobalAndLocalQuerynullParameters =
  PathItemsGetGlobalAndLocalQuerynullQueryParam & RequestParameters;

export interface PathItemsGetLocalPathItemQuerynullQueryParamProperties {
  /** should contain value null */
  pathItemStringQuery?: string;
  /** should contain value null */
  localStringQuery?: string;
}

export interface PathItemsGetLocalPathItemQuerynullQueryParam {
  queryParameters?: PathItemsGetLocalPathItemQuerynullQueryParamProperties;
}

export type PathItemsGetLocalPathItemQuerynullParameters =
  PathItemsGetLocalPathItemQuerynullQueryParam & RequestParameters;
