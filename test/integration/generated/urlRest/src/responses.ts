// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get true Boolean value on path */
export interface PathsgetBooleanTrue200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get true Boolean value on path */
export interface PathsgetBooleanTruedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface PathsgetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface PathsgetBooleanFalsedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface PathsgetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1000000' integer value */
export interface PathsgetIntOneMilliondefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface PathsgetIntNegativeOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-1000000' integer value */
export interface PathsgetIntNegativeOneMilliondefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface PathsgetTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '10000000000' 64 bit integer value */
export interface PathsgetTenBilliondefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsgetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsgetNegativeTenBilliondefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '1.034E+20' numeric value */
export interface PathsfloatScientificPositive200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1.034E+20' numeric value */
export interface PathsfloatScientificPositivedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-1.034E-20' numeric value */
export interface PathsfloatScientificNegative200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-1.034E-20' numeric value */
export interface PathsfloatScientificNegativedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface PathsdoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '9999999.999' numeric value */
export interface PathsdoubleDecimalPositivedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-9999999.999' numeric value */
export interface PathsdoubleDecimalNegative200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-9999999.999' numeric value */
export interface PathsdoubleDecimalNegativedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface PathsstringUnicode200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface PathsstringUnicodedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsstringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsstringUrlEncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsstringUrlNonEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsstringUrlNonEncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '' */
export interface PathsstringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface PathsstringEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null (should throw) */
export interface PathsstringNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw) */
export interface PathsstringNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsenumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsenumValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsenumNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsenumNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsbyteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsbyteMultiBytedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface PathsbyteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface PathsbyteEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as byte array (should throw) */
export interface PathsbyteNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as byte array (should throw) */
export interface PathsbyteNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface PathsdateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface PathsdateValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsdateNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsdateNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsdateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsdateTimeValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsdateTimeNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsdateTimeNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface Pathsbase64Url200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface Pathsbase64UrldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsarrayCsvInPath200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsarrayCsvInPathdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsunixTimeUrl200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsunixTimeUrldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get true Boolean value on path */
export interface QueriesgetBooleanTrue200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get true Boolean value on path */
export interface QueriesgetBooleanTruedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface QueriesgetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface QueriesgetBooleanFalsedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesgetBooleanNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesgetBooleanNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface QueriesgetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1000000' integer value */
export interface QueriesgetIntOneMilliondefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface QueriesgetIntNegativeOneMillion200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-1000000' integer value */
export interface QueriesgetIntNegativeOneMilliondefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null integer value (no query parameter) */
export interface QueriesgetIntNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null integer value (no query parameter) */
export interface QueriesgetIntNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesgetTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesgetTenBilliondefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesgetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesgetNegativeTenBilliondefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesgetLongNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'null 64 bit integer value (no query param in uri) */
export interface QueriesgetLongNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '1.034E+20' numeric value */
export interface QueriesfloatScientificPositive200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1.034E+20' numeric value */
export interface QueriesfloatScientificPositivedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-1.034E-20' numeric value */
export interface QueriesfloatScientificNegative200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-1.034E-20' numeric value */
export interface QueriesfloatScientificNegativedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesfloatNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null numeric value (no query parameter) */
export interface QueriesfloatNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface QueriesdoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '9999999.999' numeric value */
export interface QueriesdoubleDecimalPositivedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '-9999999.999' numeric value */
export interface QueriesdoubleDecimalNegative200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-9999999.999' numeric value */
export interface QueriesdoubleDecimalNegativedefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null numeric value (no query parameter) */
export interface QueriesdoubleNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null numeric value (no query parameter) */
export interface QueriesdoubleNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesstringUnicode200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesstringUnicodedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesstringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesstringUrlEncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '' */
export interface QueriesstringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface QueriesstringEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesstringNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesstringNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesenumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesenumValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesenumNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesenumNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesbyteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesbyteMultiBytedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface QueriesbyteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface QueriesbyteEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesbyteNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesbyteNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface QueriesdateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface QueriesdateValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesdateNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesdateNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesdateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesdateTimeValiddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesdateTimeNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesdateTimeNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesarrayStringCsvValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesarrayStringCsvValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get a null array of string using the csv-array format */
export interface QueriesarrayStringCsvNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get a null array of string using the csv-array format */
export interface QueriesarrayStringCsvNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesarrayStringCsvEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesarrayStringCsvEmptydefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
export interface QueriesarrayStringNoCollectionFormatEmpty200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Array query has no defined collection format, should default to csv. Pass in ['hello', 'nihao', 'bonjour'] for the 'arrayQuery' parameter to the service */
export interface QueriesarrayStringNoCollectionFormatEmptydefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
export interface QueriesarrayStringSsvValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the ssv-array format */
export interface QueriesarrayStringSsvValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
export interface QueriesarrayStringTsvValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the tsv-array format */
export interface QueriesarrayStringTsvValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
export interface QueriesarrayStringPipesValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the pipes-array format */
export interface QueriesarrayStringPipesValiddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsgetAllWithValues200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsgetAllWithValuesdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsgetGlobalQueryNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsgetGlobalQueryNulldefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsgetGlobalAndLocalQueryNull200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery=null */
export interface PathItemsgetGlobalAndLocalQueryNulldefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsgetLocalPathItemQueryNull200Response
  extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null, localStringQuery=null */
export interface PathItemsgetLocalPathItemQueryNulldefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}
