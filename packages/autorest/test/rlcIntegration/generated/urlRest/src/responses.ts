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
export interface PathsGetBooleanTruedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface PathsGetBooleanFalsedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1000000' integer value */
export interface PathsGetIntOneMilliondefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-1000000' integer value */
export interface PathsGetIntNegativeOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-1000000' integer value */
export interface PathsGetIntNegativeOneMilliondefaultResponse
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
export interface PathsGetTenBilliondefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-10000000000' 64 bit integer value */
export interface PathsGetNegativeTenBilliondefaultResponse
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
export interface PathsFloatScientificPositivedefaultResponse
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
export interface PathsFloatScientificNegativedefaultResponse
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
export interface PathsDoubleDecimalPositivedefaultResponse
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
export interface PathsDoubleDecimalNegativedefaultResponse
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
export interface PathsStringUnicodedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface PathsStringUrlEncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded */
export interface PathsStringUrlNonEncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface PathsStringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface PathsStringEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw) */
export interface PathsStringNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw) */
export interface PathsStringNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with 'green color' in path parameter */
export interface PathsEnumValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null (should throw on the client before the request is sent on wire) */
export interface PathsEnumNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface PathsByteMultiBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface PathsByteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface PathsByteEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (should throw) */
export interface PathsByteNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as byte array (should throw) */
export interface PathsByteNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface PathsDateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface PathsDateValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDateNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date - this should throw or be unusable on the client side, depending on date representation */
export interface PathsDateNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface PathsDateTimeValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimeNull400Response extends HttpResponse {
  status: "400";
  body: Record<string, unknown>;
}

/** Get null as date-time, should be disallowed or throw depending on representation of date-time */
export interface PathsDateTimeNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64Url200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'lorem' encoded value as 'bG9yZW0' (base64url) */
export interface PathsBase64UrldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPath200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface PathsArrayCsvInPathdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrl200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get the date 2016-04-13 encoded value as '1460505600' (Unix time) */
export interface PathsUnixTimeUrldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTrue200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get true Boolean value on path */
export interface QueriesGetBooleanTruedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalse200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get false Boolean value on path */
export interface QueriesGetBooleanFalsedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleanNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null Boolean value on query (query string should be absent) */
export interface QueriesGetBooleanNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '1000000' integer value */
export interface QueriesGetIntOneMillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '1000000' integer value */
export interface QueriesGetIntOneMilliondefaultResponse extends HttpResponse {
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
export interface QueriesGetIntNegativeOneMilliondefaultResponse
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
export interface QueriesGetIntNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '10000000000' 64 bit integer value */
export interface QueriesGetTenBilliondefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBillion200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '-10000000000' 64 bit integer value */
export interface QueriesGetNegativeTenBilliondefaultResponse
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
export interface QueriesGetLongNulldefaultResponse extends HttpResponse {
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
export interface QueriesFloatScientificPositivedefaultResponse
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
export interface QueriesFloatScientificNegativedefaultResponse
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
export interface QueriesFloatNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '9999999.999' numeric value */
export interface QueriesDoubleDecimalPositive200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '9999999.999' numeric value */
export interface QueriesDoubleDecimalPositivedefaultResponse
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
export interface QueriesDoubleDecimalNegativedefaultResponse
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
export interface QueriesDoubleNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicode200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value */
export interface QueriesStringUnicodedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get 'begin!*'();:@ &=+$,/?#[]end */
export interface QueriesStringUrlEncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' */
export interface QueriesStringEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' */
export interface QueriesStringEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesStringNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesStringNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get using uri with query parameter 'green color' */
export interface QueriesEnumValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null (no query parameter in url) */
export interface QueriesEnumNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null (no query parameter in url) */
export interface QueriesEnumNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiByte200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array */
export interface QueriesByteMultiBytedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '' as byte array */
export interface QueriesByteEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '' as byte array */
export interface QueriesByteEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesByteNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as byte array (no query parameters in uri) */
export interface QueriesByteNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01' as date */
export interface QueriesDateValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01' as date */
export interface QueriesDateValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDateNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date - this should result in no query parameters in uri */
export interface QueriesDateNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get '2012-01-01T01:01:01Z' as date-time */
export interface QueriesDateTimeValiddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimeNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get null as date-time, should result in no query parameters in uri */
export interface QueriesDateTimeNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValid200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array format */
export interface QueriesArrayStringCsvValiddefaultResponse
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
export interface QueriesArrayStringCsvNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesArrayStringCsvEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get an empty array [] of string using the csv-array format */
export interface QueriesArrayStringCsvEmptydefaultResponse
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
export interface QueriesArrayStringNoCollectionFormatEmptydefaultResponse
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
export interface QueriesArrayStringSsvValiddefaultResponse
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
export interface QueriesArrayStringTsvValiddefaultResponse
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
export interface QueriesArrayStringPipesValiddefaultResponse
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
export interface PathItemsGetAllWithValuesdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQueryNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath', localStringPath='localStringPath', globalStringQuery=null, pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery' */
export interface PathItemsGetGlobalQueryNulldefaultResponse
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
export interface PathItemsGetGlobalAndLocalQueryNulldefaultResponse
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
export interface PathItemsGetLocalPathItemQueryNulldefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
