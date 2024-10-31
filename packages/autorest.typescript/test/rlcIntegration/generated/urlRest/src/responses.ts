// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get true Boolean value on path */
export interface PathsGetBooleanTrue200Response extends HttpResponse {
  status: "200";
}

/** Get true Boolean value on path */
export interface PathsGetBooleanTrueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalse200Response extends HttpResponse {
  status: "200";
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalseDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMillion200Response extends HttpResponse {
  status: "200";
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface PathsGetIntNegativeOneMillion200Response extends HttpResponse {
  status: "200";
}

/** Get '-1000000' integer value */
export interface PathsGetIntNegativeOneMillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface PathsGetTenBillion200Response extends HttpResponse {
  status: "200";
}

/** Get '10000000000' 64 bit integer value */
export interface PathsGetTenBillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsGetNegativeTenBillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1.034E+20' numeric value */
export interface PathsFloatScientificPositive200Response extends HttpResponse {
  status: "200";
}

/** Get '1.034E+20' numeric value */
export interface PathsFloatScientificPositiveDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1.034E-20' numeric value */
export interface PathsFloatScientificNegative200Response extends HttpResponse {
  status: "200";
}

/** Get '-1.034E-20' numeric value */
export interface PathsFloatScientificNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface PathsDoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
}

/** Get '9999999.999' numeric value */
export interface PathsDoubleDecimalPositiveDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-9999999.999' numeric value */
export interface PathsDoubleDecimalNegative200Response extends HttpResponse {
  status: "200";
}

/** Get '-9999999.999' numeric value */
export interface PathsDoubleDecimalNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface PathsStringUnicode200Response extends HttpResponse {
  status: "200";
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface PathsStringUnicodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncoded200Response extends HttpResponse {
  status: "200";
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncoded200Response extends HttpResponse {
  status: "200";
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface PathsStringEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get '' */
export interface PathsStringEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw) */
export interface PathsStringnull400Response extends HttpResponse {
  status: "400";
}

/** Get null (should throw) */
export interface PathsStringnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValid200Response extends HttpResponse {
  status: "200";
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumnull400Response extends HttpResponse {
  status: "400";
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiByte200Response extends HttpResponse {
  status: "200";
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface PathsByteEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get '' as byte array */
export interface PathsByteEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (should throw) */
export interface PathsBytenull400Response extends HttpResponse {
  status: "400";
}

/** Get null as byte array (should throw) */
export interface PathsBytenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface PathsDateValid200Response extends HttpResponse {
  status: "200";
}

/** Get '2012-01-01' as date */
export interface PathsDateValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDatenull400Response extends HttpResponse {
  status: "400";
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDatenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValid200Response extends HttpResponse {
  status: "200";
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimenull400Response extends HttpResponse {
  status: "400";
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64Url200Response extends HttpResponse {
  status: "200";
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64UrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPath200Response extends HttpResponse {
  status: "200";
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPathDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrl200Response extends HttpResponse {
  status: "200";
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTrue200Response extends HttpResponse {
  status: "200";
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTrueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalse200Response extends HttpResponse {
  status: "200";
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalseDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleannull200Response extends HttpResponse {
  status: "200";
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleannullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface QueriesGetIntOneMillion200Response extends HttpResponse {
  status: "200";
}

/** Get '1000000' integer value */
export interface QueriesGetIntOneMillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface QueriesGetIntNegativeOneMillion200Response
  extends HttpResponse {
  status: "200";
}

/** Get '-1000000' integer value */
export interface QueriesGetIntNegativeOneMillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null integer value (no query parameter) */
export interface QueriesGetIntnull200Response extends HttpResponse {
  status: "200";
}

/** Get null integer value (no query parameter) */
export interface QueriesGetIntnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBillion200Response extends HttpResponse {
  status: "200";
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesGetLongnull200Response extends HttpResponse {
  status: "200";
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesGetLongnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1.034E+20' numeric value */
export interface QueriesFloatScientificPositive200Response
  extends HttpResponse {
  status: "200";
}

/** Get '1.034E+20' numeric value */
export interface QueriesFloatScientificPositiveDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1.034E-20' numeric value */
export interface QueriesFloatScientificNegative200Response
  extends HttpResponse {
  status: "200";
}

/** Get '-1.034E-20' numeric value */
export interface QueriesFloatScientificNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesFloatnull200Response extends HttpResponse {
  status: "200";
}

/** Get null numeric value (no query parameter) */
export interface QueriesFloatnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface QueriesDoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
}

/** Get '9999999.999' numeric value */
export interface QueriesDoubleDecimalPositiveDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-9999999.999' numeric value */
export interface QueriesDoubleDecimalNegative200Response extends HttpResponse {
  status: "200";
}

/** Get '-9999999.999' numeric value */
export interface QueriesDoubleDecimalNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesDoublenull200Response extends HttpResponse {
  status: "200";
}

/** Get null numeric value (no query parameter) */
export interface QueriesDoublenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicode200Response extends HttpResponse {
  status: "200";
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncoded200Response extends HttpResponse {
  status: "200";
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface QueriesStringEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get '' */
export interface QueriesStringEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesStringnull200Response extends HttpResponse {
  status: "200";
}

/** Get null (no query parameter in url) */
export interface QueriesStringnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValid200Response extends HttpResponse {
  status: "200";
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesEnumnull200Response extends HttpResponse {
  status: "200";
}

/** Get null (no query parameter in url) */
export interface QueriesEnumnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiByte200Response extends HttpResponse {
  status: "200";
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface QueriesByteEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get '' as byte array */
export interface QueriesByteEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesBytenull200Response extends HttpResponse {
  status: "200";
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesBytenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface QueriesDateValid200Response extends HttpResponse {
  status: "200";
}

/** Get '2012-01-01' as date */
export interface QueriesDateValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDatenull200Response extends HttpResponse {
  status: "200";
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDatenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValid200Response extends HttpResponse {
  status: "200";
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimenull200Response extends HttpResponse {
  status: "200";
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimenullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValid200Response extends HttpResponse {
  status: "200";
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a null array of string using the csv-array format */
export interface QueriesArrayStringCsvnull200Response extends HttpResponse {
  status: "200";
}

/** Get a null array of string using the csv-array format */
export interface QueriesArrayStringCsvnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesArrayStringCsvEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesArrayStringCsvEmptyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
export interface QueriesArrayStringNoCollectionFormatEmpty200Response
  extends HttpResponse {
  status: "200";
}

/** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
export interface QueriesArrayStringNoCollectionFormatEmptyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
export interface QueriesArrayStringSsvValid200Response extends HttpResponse {
  status: "200";
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
export interface QueriesArrayStringSsvValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
export interface QueriesArrayStringTsvValid200Response extends HttpResponse {
  status: "200";
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
export interface QueriesArrayStringTsvValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
export interface QueriesArrayStringPipesValid200Response extends HttpResponse {
  status: "200";
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
export interface QueriesArrayStringPipesValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetAllWithValues200Response extends HttpResponse {
  status: "200";
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetAllWithValuesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQuerynull200Response extends HttpResponse {
  status: "200";
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQuerynullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsGetGlobalAndLocalQuerynull200Response
  extends HttpResponse {
  status: "200";
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsGetGlobalAndLocalQuerynullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsGetLocalPathItemQuerynull200Response
  extends HttpResponse {
  status: "200";
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsGetLocalPathItemQuerynullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
