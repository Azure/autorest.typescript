// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get true Boolean value on path */
export interface PathsGetBooleanTrue200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get true Boolean value on path */
export interface PathsGetBooleanTrueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalseDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface PathsGetIntNegativeOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Get '10000000000' 64 bit integer value */
export interface PathsGetTenBillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface PathsStringUnicodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface PathsStringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface PathsStringEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw) */
export interface PathsStringNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw) */
export interface PathsStringNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface PathsByteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface PathsByteEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (should throw) */
export interface PathsByteNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as byte array (should throw) */
export interface PathsByteNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface PathsDateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface PathsDateValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDateNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDateNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimeNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimeNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64Url200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64UrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPath200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPathDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrl200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTrue200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTrueDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalseDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleanNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleanNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface QueriesGetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Get '-1000000' integer value */
export interface QueriesGetIntNegativeOneMillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null integer value (no query parameter) */
export interface QueriesGetIntNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null integer value (no query parameter) */
export interface QueriesGetIntNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBillionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBillionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesGetLongNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesGetLongNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1.034E+20' numeric value */
export interface QueriesFloatScientificPositive200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Get '-1.034E-20' numeric value */
export interface QueriesFloatScientificNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesFloatNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null numeric value (no query parameter) */
export interface QueriesFloatNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface QueriesDoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** Get '-9999999.999' numeric value */
export interface QueriesDoubleDecimalNegativeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesDoubleNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null numeric value (no query parameter) */
export interface QueriesDoubleNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicode200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface QueriesStringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface QueriesStringEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesStringNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesStringNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesEnumNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesEnumNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiByteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface QueriesByteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface QueriesByteEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesByteNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesByteNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface QueriesDateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface QueriesDateValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDateNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDateNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimeNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimeNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValidDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get a null array of string using the csv-array format */
export interface QueriesArrayStringCsvNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get a null array of string using the csv-array format */
export interface QueriesArrayStringCsvNullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesArrayStringCsvEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
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
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetAllWithValuesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQueryNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQueryNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsGetGlobalAndLocalQueryNull200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsGetGlobalAndLocalQueryNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsGetLocalPathItemQueryNull200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsGetLocalPathItemQueryNullDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
