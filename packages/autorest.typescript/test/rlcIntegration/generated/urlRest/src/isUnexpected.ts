// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

const responseMap: Record<string, string[]> = {
  "GET /paths/bool/true/{boolPath}": ["200"],
  "GET /paths/bool/false/{boolPath}": ["200"],
  "GET /paths/int/1000000/{intPath}": ["200"],
  "GET /paths/int/-1000000/{intPath}": ["200"],
  "GET /paths/long/10000000000/{longPath}": ["200"],
  "GET /paths/long/-10000000000/{longPath}": ["200"],
  "GET /paths/float/1.034E+20/{floatPath}": ["200"],
  "GET /paths/float/-1.034E-20/{floatPath}": ["200"],
  "GET /paths/double/9999999.999/{doublePath}": ["200"],
  "GET /paths/double/-9999999.999/{doublePath}": ["200"],
  "GET /paths/string/unicode/{stringPath}": ["200"],
  "GET /paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}":
    ["200"],
  "GET /paths/string/begin!*'();:@&=+$,end/{stringPath}": ["200"],
  "GET /paths/string/empty/{stringPath}": ["200"],
  "GET /paths/string/null/{stringPath}": ["400"],
  "GET /paths/enum/green%20color/{enumPath}": ["200"],
  "GET /paths/string/null/{enumPath}": ["400"],
  "GET /paths/byte/multibyte/{bytePath}": ["200"],
  "GET /paths/byte/empty/{bytePath}": ["200"],
  "GET /paths/byte/null/{bytePath}": ["400"],
  "GET /paths/date/2012-01-01/{datePath}": ["200"],
  "GET /paths/date/null/{datePath}": ["400"],
  "GET /paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}": ["200"],
  "GET /paths/datetime/null/{dateTimePath}": ["400"],
  "GET /paths/string/bG9yZW0/{base64UrlPath}": ["200"],
  "GET /paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}":
    ["200"],
  "GET /paths/int/1460505600/{unixTimeUrlPath}": ["200"],
  "GET /queries/bool/true": ["200"],
  "GET /queries/bool/false": ["200"],
  "GET /queries/bool/null": ["200"],
  "GET /queries/int/1000000": ["200"],
  "GET /queries/int/-1000000": ["200"],
  "GET /queries/int/null": ["200"],
  "GET /queries/long/10000000000": ["200"],
  "GET /queries/long/-10000000000": ["200"],
  "GET /queries/long/null": ["200"],
  "GET /queries/float/1.034E+20": ["200"],
  "GET /queries/float/-1.034E-20": ["200"],
  "GET /queries/float/null": ["200"],
  "GET /queries/double/9999999.999": ["200"],
  "GET /queries/double/-9999999.999": ["200"],
  "GET /queries/double/null": ["200"],
  "GET /queries/string/unicode/": ["200"],
  "GET /queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend":
    ["200"],
  "GET /queries/string/empty": ["200"],
  "GET /queries/string/null": ["200"],
  "GET /queries/enum/green%20color": ["200"],
  "GET /queries/enum/null": ["200"],
  "GET /queries/byte/multibyte": ["200"],
  "GET /queries/byte/empty": ["200"],
  "GET /queries/byte/null": ["200"],
  "GET /queries/date/2012-01-01": ["200"],
  "GET /queries/date/null": ["200"],
  "GET /queries/datetime/2012-01-01T01%3A01%3A01Z": ["200"],
  "GET /queries/datetime/null": ["200"],
  "GET /queries/array/csv/string/valid": ["200"],
  "GET /queries/array/csv/string/null": ["200"],
  "GET /queries/array/csv/string/empty": ["200"],
  "GET /queries/array/none/string/empty": ["200"],
  "GET /queries/array/ssv/string/valid": ["200"],
  "GET /queries/array/tsv/string/valid": ["200"],
  "GET /queries/array/pipes/string/valid": ["200"],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery":
    ["200"],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery":
    ["200"],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null":
    ["200"],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null":
    ["200"],
};

export function isUnexpected(
  response: PathsGetBooleanTrue200Response | PathsGetBooleanTrueDefaultResponse,
): response is PathsGetBooleanTrueDefaultResponse;
export function isUnexpected(
  response:
    | PathsGetBooleanFalse200Response
    | PathsGetBooleanFalseDefaultResponse,
): response is PathsGetBooleanFalseDefaultResponse;
export function isUnexpected(
  response:
    | PathsGetIntOneMillion200Response
    | PathsGetIntOneMillionDefaultResponse,
): response is PathsGetIntOneMillionDefaultResponse;
export function isUnexpected(
  response:
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMillionDefaultResponse,
): response is PathsGetIntNegativeOneMillionDefaultResponse;
export function isUnexpected(
  response: PathsGetTenBillion200Response | PathsGetTenBillionDefaultResponse,
): response is PathsGetTenBillionDefaultResponse;
export function isUnexpected(
  response:
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBillionDefaultResponse,
): response is PathsGetNegativeTenBillionDefaultResponse;
export function isUnexpected(
  response:
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositiveDefaultResponse,
): response is PathsFloatScientificPositiveDefaultResponse;
export function isUnexpected(
  response:
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativeDefaultResponse,
): response is PathsFloatScientificNegativeDefaultResponse;
export function isUnexpected(
  response:
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositiveDefaultResponse,
): response is PathsDoubleDecimalPositiveDefaultResponse;
export function isUnexpected(
  response:
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativeDefaultResponse,
): response is PathsDoubleDecimalNegativeDefaultResponse;
export function isUnexpected(
  response: PathsStringUnicode200Response | PathsStringUnicodeDefaultResponse,
): response is PathsStringUnicodeDefaultResponse;
export function isUnexpected(
  response:
    | PathsStringUrlEncoded200Response
    | PathsStringUrlEncodedDefaultResponse,
): response is PathsStringUrlEncodedDefaultResponse;
export function isUnexpected(
  response:
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodedDefaultResponse,
): response is PathsStringUrlNonEncodedDefaultResponse;
export function isUnexpected(
  response: PathsStringEmpty200Response | PathsStringEmptyDefaultResponse,
): response is PathsStringEmptyDefaultResponse;
export function isUnexpected(
  response: PathsStringNull400Response | PathsStringNullDefaultResponse,
): response is PathsStringNullDefaultResponse;
export function isUnexpected(
  response: PathsEnumValid200Response | PathsEnumValidDefaultResponse,
): response is PathsEnumValidDefaultResponse;
export function isUnexpected(
  response: PathsEnumNull400Response | PathsEnumNullDefaultResponse,
): response is PathsEnumNullDefaultResponse;
export function isUnexpected(
  response: PathsByteMultiByte200Response | PathsByteMultiByteDefaultResponse,
): response is PathsByteMultiByteDefaultResponse;
export function isUnexpected(
  response: PathsByteEmpty200Response | PathsByteEmptyDefaultResponse,
): response is PathsByteEmptyDefaultResponse;
export function isUnexpected(
  response: PathsByteNull400Response | PathsByteNullDefaultResponse,
): response is PathsByteNullDefaultResponse;
export function isUnexpected(
  response: PathsDateValid200Response | PathsDateValidDefaultResponse,
): response is PathsDateValidDefaultResponse;
export function isUnexpected(
  response: PathsDateNull400Response | PathsDateNullDefaultResponse,
): response is PathsDateNullDefaultResponse;
export function isUnexpected(
  response: PathsDateTimeValid200Response | PathsDateTimeValidDefaultResponse,
): response is PathsDateTimeValidDefaultResponse;
export function isUnexpected(
  response: PathsDateTimeNull400Response | PathsDateTimeNullDefaultResponse,
): response is PathsDateTimeNullDefaultResponse;
export function isUnexpected(
  response: PathsBase64Url200Response | PathsBase64UrlDefaultResponse,
): response is PathsBase64UrlDefaultResponse;
export function isUnexpected(
  response: PathsArrayCsvInPath200Response | PathsArrayCsvInPathDefaultResponse,
): response is PathsArrayCsvInPathDefaultResponse;
export function isUnexpected(
  response: PathsUnixTimeUrl200Response | PathsUnixTimeUrlDefaultResponse,
): response is PathsUnixTimeUrlDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanTrue200Response
    | QueriesGetBooleanTrueDefaultResponse,
): response is QueriesGetBooleanTrueDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanFalse200Response
    | QueriesGetBooleanFalseDefaultResponse,
): response is QueriesGetBooleanFalseDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanNull200Response
    | QueriesGetBooleanNullDefaultResponse,
): response is QueriesGetBooleanNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetIntOneMillion200Response
    | QueriesGetIntOneMillionDefaultResponse,
): response is QueriesGetIntOneMillionDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMillionDefaultResponse,
): response is QueriesGetIntNegativeOneMillionDefaultResponse;
export function isUnexpected(
  response: QueriesGetIntNull200Response | QueriesGetIntNullDefaultResponse,
): response is QueriesGetIntNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetTenBillion200Response
    | QueriesGetTenBillionDefaultResponse,
): response is QueriesGetTenBillionDefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBillionDefaultResponse,
): response is QueriesGetNegativeTenBillionDefaultResponse;
export function isUnexpected(
  response: QueriesGetLongNull200Response | QueriesGetLongNullDefaultResponse,
): response is QueriesGetLongNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositiveDefaultResponse,
): response is QueriesFloatScientificPositiveDefaultResponse;
export function isUnexpected(
  response:
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativeDefaultResponse,
): response is QueriesFloatScientificNegativeDefaultResponse;
export function isUnexpected(
  response: QueriesFloatNull200Response | QueriesFloatNullDefaultResponse,
): response is QueriesFloatNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositiveDefaultResponse,
): response is QueriesDoubleDecimalPositiveDefaultResponse;
export function isUnexpected(
  response:
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativeDefaultResponse,
): response is QueriesDoubleDecimalNegativeDefaultResponse;
export function isUnexpected(
  response: QueriesDoubleNull200Response | QueriesDoubleNullDefaultResponse,
): response is QueriesDoubleNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesStringUnicode200Response
    | QueriesStringUnicodeDefaultResponse,
): response is QueriesStringUnicodeDefaultResponse;
export function isUnexpected(
  response:
    | QueriesStringUrlEncoded200Response
    | QueriesStringUrlEncodedDefaultResponse,
): response is QueriesStringUrlEncodedDefaultResponse;
export function isUnexpected(
  response: QueriesStringEmpty200Response | QueriesStringEmptyDefaultResponse,
): response is QueriesStringEmptyDefaultResponse;
export function isUnexpected(
  response: QueriesStringNull200Response | QueriesStringNullDefaultResponse,
): response is QueriesStringNullDefaultResponse;
export function isUnexpected(
  response: QueriesEnumValid200Response | QueriesEnumValidDefaultResponse,
): response is QueriesEnumValidDefaultResponse;
export function isUnexpected(
  response: QueriesEnumNull200Response | QueriesEnumNullDefaultResponse,
): response is QueriesEnumNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesByteMultiByte200Response
    | QueriesByteMultiByteDefaultResponse,
): response is QueriesByteMultiByteDefaultResponse;
export function isUnexpected(
  response: QueriesByteEmpty200Response | QueriesByteEmptyDefaultResponse,
): response is QueriesByteEmptyDefaultResponse;
export function isUnexpected(
  response: QueriesByteNull200Response | QueriesByteNullDefaultResponse,
): response is QueriesByteNullDefaultResponse;
export function isUnexpected(
  response: QueriesDateValid200Response | QueriesDateValidDefaultResponse,
): response is QueriesDateValidDefaultResponse;
export function isUnexpected(
  response: QueriesDateNull200Response | QueriesDateNullDefaultResponse,
): response is QueriesDateNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesDateTimeValid200Response
    | QueriesDateTimeValidDefaultResponse,
): response is QueriesDateTimeValidDefaultResponse;
export function isUnexpected(
  response: QueriesDateTimeNull200Response | QueriesDateTimeNullDefaultResponse,
): response is QueriesDateTimeNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValidDefaultResponse,
): response is QueriesArrayStringCsvValidDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNullDefaultResponse,
): response is QueriesArrayStringCsvNullDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptyDefaultResponse,
): response is QueriesArrayStringCsvEmptyDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptyDefaultResponse,
): response is QueriesArrayStringNoCollectionFormatEmptyDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValidDefaultResponse,
): response is QueriesArrayStringSsvValidDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValidDefaultResponse,
): response is QueriesArrayStringTsvValidDefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValidDefaultResponse,
): response is QueriesArrayStringPipesValidDefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesDefaultResponse,
): response is PathItemsGetAllWithValuesDefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNullDefaultResponse,
): response is PathItemsGetGlobalQueryNullDefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNullDefaultResponse,
): response is PathItemsGetGlobalAndLocalQueryNullDefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNullDefaultResponse,
): response is PathItemsGetLocalPathItemQueryNullDefaultResponse;
export function isUnexpected(
  response:
    | PathsGetBooleanTrue200Response
    | PathsGetBooleanTrueDefaultResponse
    | PathsGetBooleanFalse200Response
    | PathsGetBooleanFalseDefaultResponse
    | PathsGetIntOneMillion200Response
    | PathsGetIntOneMillionDefaultResponse
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMillionDefaultResponse
    | PathsGetTenBillion200Response
    | PathsGetTenBillionDefaultResponse
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBillionDefaultResponse
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositiveDefaultResponse
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativeDefaultResponse
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositiveDefaultResponse
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativeDefaultResponse
    | PathsStringUnicode200Response
    | PathsStringUnicodeDefaultResponse
    | PathsStringUrlEncoded200Response
    | PathsStringUrlEncodedDefaultResponse
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodedDefaultResponse
    | PathsStringEmpty200Response
    | PathsStringEmptyDefaultResponse
    | PathsStringNull400Response
    | PathsStringNullDefaultResponse
    | PathsEnumValid200Response
    | PathsEnumValidDefaultResponse
    | PathsEnumNull400Response
    | PathsEnumNullDefaultResponse
    | PathsByteMultiByte200Response
    | PathsByteMultiByteDefaultResponse
    | PathsByteEmpty200Response
    | PathsByteEmptyDefaultResponse
    | PathsByteNull400Response
    | PathsByteNullDefaultResponse
    | PathsDateValid200Response
    | PathsDateValidDefaultResponse
    | PathsDateNull400Response
    | PathsDateNullDefaultResponse
    | PathsDateTimeValid200Response
    | PathsDateTimeValidDefaultResponse
    | PathsDateTimeNull400Response
    | PathsDateTimeNullDefaultResponse
    | PathsBase64Url200Response
    | PathsBase64UrlDefaultResponse
    | PathsArrayCsvInPath200Response
    | PathsArrayCsvInPathDefaultResponse
    | PathsUnixTimeUrl200Response
    | PathsUnixTimeUrlDefaultResponse
    | QueriesGetBooleanTrue200Response
    | QueriesGetBooleanTrueDefaultResponse
    | QueriesGetBooleanFalse200Response
    | QueriesGetBooleanFalseDefaultResponse
    | QueriesGetBooleanNull200Response
    | QueriesGetBooleanNullDefaultResponse
    | QueriesGetIntOneMillion200Response
    | QueriesGetIntOneMillionDefaultResponse
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMillionDefaultResponse
    | QueriesGetIntNull200Response
    | QueriesGetIntNullDefaultResponse
    | QueriesGetTenBillion200Response
    | QueriesGetTenBillionDefaultResponse
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBillionDefaultResponse
    | QueriesGetLongNull200Response
    | QueriesGetLongNullDefaultResponse
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositiveDefaultResponse
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativeDefaultResponse
    | QueriesFloatNull200Response
    | QueriesFloatNullDefaultResponse
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositiveDefaultResponse
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativeDefaultResponse
    | QueriesDoubleNull200Response
    | QueriesDoubleNullDefaultResponse
    | QueriesStringUnicode200Response
    | QueriesStringUnicodeDefaultResponse
    | QueriesStringUrlEncoded200Response
    | QueriesStringUrlEncodedDefaultResponse
    | QueriesStringEmpty200Response
    | QueriesStringEmptyDefaultResponse
    | QueriesStringNull200Response
    | QueriesStringNullDefaultResponse
    | QueriesEnumValid200Response
    | QueriesEnumValidDefaultResponse
    | QueriesEnumNull200Response
    | QueriesEnumNullDefaultResponse
    | QueriesByteMultiByte200Response
    | QueriesByteMultiByteDefaultResponse
    | QueriesByteEmpty200Response
    | QueriesByteEmptyDefaultResponse
    | QueriesByteNull200Response
    | QueriesByteNullDefaultResponse
    | QueriesDateValid200Response
    | QueriesDateValidDefaultResponse
    | QueriesDateNull200Response
    | QueriesDateNullDefaultResponse
    | QueriesDateTimeValid200Response
    | QueriesDateTimeValidDefaultResponse
    | QueriesDateTimeNull200Response
    | QueriesDateTimeNullDefaultResponse
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValidDefaultResponse
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNullDefaultResponse
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptyDefaultResponse
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptyDefaultResponse
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValidDefaultResponse
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValidDefaultResponse
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValidDefaultResponse
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesDefaultResponse
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNullDefaultResponse
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNullDefaultResponse
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNullDefaultResponse,
): response is
  | PathsGetBooleanTrueDefaultResponse
  | PathsGetBooleanFalseDefaultResponse
  | PathsGetIntOneMillionDefaultResponse
  | PathsGetIntNegativeOneMillionDefaultResponse
  | PathsGetTenBillionDefaultResponse
  | PathsGetNegativeTenBillionDefaultResponse
  | PathsFloatScientificPositiveDefaultResponse
  | PathsFloatScientificNegativeDefaultResponse
  | PathsDoubleDecimalPositiveDefaultResponse
  | PathsDoubleDecimalNegativeDefaultResponse
  | PathsStringUnicodeDefaultResponse
  | PathsStringUrlEncodedDefaultResponse
  | PathsStringUrlNonEncodedDefaultResponse
  | PathsStringEmptyDefaultResponse
  | PathsStringNullDefaultResponse
  | PathsEnumValidDefaultResponse
  | PathsEnumNullDefaultResponse
  | PathsByteMultiByteDefaultResponse
  | PathsByteEmptyDefaultResponse
  | PathsByteNullDefaultResponse
  | PathsDateValidDefaultResponse
  | PathsDateNullDefaultResponse
  | PathsDateTimeValidDefaultResponse
  | PathsDateTimeNullDefaultResponse
  | PathsBase64UrlDefaultResponse
  | PathsArrayCsvInPathDefaultResponse
  | PathsUnixTimeUrlDefaultResponse
  | QueriesGetBooleanTrueDefaultResponse
  | QueriesGetBooleanFalseDefaultResponse
  | QueriesGetBooleanNullDefaultResponse
  | QueriesGetIntOneMillionDefaultResponse
  | QueriesGetIntNegativeOneMillionDefaultResponse
  | QueriesGetIntNullDefaultResponse
  | QueriesGetTenBillionDefaultResponse
  | QueriesGetNegativeTenBillionDefaultResponse
  | QueriesGetLongNullDefaultResponse
  | QueriesFloatScientificPositiveDefaultResponse
  | QueriesFloatScientificNegativeDefaultResponse
  | QueriesFloatNullDefaultResponse
  | QueriesDoubleDecimalPositiveDefaultResponse
  | QueriesDoubleDecimalNegativeDefaultResponse
  | QueriesDoubleNullDefaultResponse
  | QueriesStringUnicodeDefaultResponse
  | QueriesStringUrlEncodedDefaultResponse
  | QueriesStringEmptyDefaultResponse
  | QueriesStringNullDefaultResponse
  | QueriesEnumValidDefaultResponse
  | QueriesEnumNullDefaultResponse
  | QueriesByteMultiByteDefaultResponse
  | QueriesByteEmptyDefaultResponse
  | QueriesByteNullDefaultResponse
  | QueriesDateValidDefaultResponse
  | QueriesDateNullDefaultResponse
  | QueriesDateTimeValidDefaultResponse
  | QueriesDateTimeNullDefaultResponse
  | QueriesArrayStringCsvValidDefaultResponse
  | QueriesArrayStringCsvNullDefaultResponse
  | QueriesArrayStringCsvEmptyDefaultResponse
  | QueriesArrayStringNoCollectionFormatEmptyDefaultResponse
  | QueriesArrayStringSsvValidDefaultResponse
  | QueriesArrayStringTsvValidDefaultResponse
  | QueriesArrayStringPipesValidDefaultResponse
  | PathItemsGetAllWithValuesDefaultResponse
  | PathItemsGetGlobalQueryNullDefaultResponse
  | PathItemsGetGlobalAndLocalQueryNullDefaultResponse
  | PathItemsGetLocalPathItemQueryNullDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
