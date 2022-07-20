// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  "GET /paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}": [
    "200"
  ],
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
  "GET /paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}": [
    "200"
  ],
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
  "GET /queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend": [
    "200"
  ],
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
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery": [
    "200"
  ],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery": [
    "200"
  ],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null": [
    "200"
  ],
  "GET /pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null": [
    "200"
  ]
};

export function isUnexpected(
  response: PathsGetBooleanTrue200Response | PathsGetBooleanTruedefaultResponse
): response is PathsGetBooleanTruedefaultResponse;
export function isUnexpected(
  response:
    | PathsGetBooleanFalse200Response
    | PathsGetBooleanFalsedefaultResponse
): response is PathsGetBooleanFalsedefaultResponse;
export function isUnexpected(
  response:
    | PathsGetIntOneMillion200Response
    | PathsGetIntOneMilliondefaultResponse
): response is PathsGetIntOneMilliondefaultResponse;
export function isUnexpected(
  response:
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMilliondefaultResponse
): response is PathsGetIntNegativeOneMilliondefaultResponse;
export function isUnexpected(
  response: PathsGetTenBillion200Response | PathsGetTenBilliondefaultResponse
): response is PathsGetTenBilliondefaultResponse;
export function isUnexpected(
  response:
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBilliondefaultResponse
): response is PathsGetNegativeTenBilliondefaultResponse;
export function isUnexpected(
  response:
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositivedefaultResponse
): response is PathsFloatScientificPositivedefaultResponse;
export function isUnexpected(
  response:
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativedefaultResponse
): response is PathsFloatScientificNegativedefaultResponse;
export function isUnexpected(
  response:
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositivedefaultResponse
): response is PathsDoubleDecimalPositivedefaultResponse;
export function isUnexpected(
  response:
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativedefaultResponse
): response is PathsDoubleDecimalNegativedefaultResponse;
export function isUnexpected(
  response: PathsStringUnicode200Response | PathsStringUnicodedefaultResponse
): response is PathsStringUnicodedefaultResponse;
export function isUnexpected(
  response:
    | PathsStringUrlEncoded200Response
    | PathsStringUrlEncodeddefaultResponse
): response is PathsStringUrlEncodeddefaultResponse;
export function isUnexpected(
  response:
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodeddefaultResponse
): response is PathsStringUrlNonEncodeddefaultResponse;
export function isUnexpected(
  response: PathsStringEmpty200Response | PathsStringEmptydefaultResponse
): response is PathsStringEmptydefaultResponse;
export function isUnexpected(
  response: PathsStringNull400Response | PathsStringNulldefaultResponse
): response is PathsStringNulldefaultResponse;
export function isUnexpected(
  response: PathsEnumValid200Response | PathsEnumValiddefaultResponse
): response is PathsEnumValiddefaultResponse;
export function isUnexpected(
  response: PathsEnumNull400Response | PathsEnumNulldefaultResponse
): response is PathsEnumNulldefaultResponse;
export function isUnexpected(
  response: PathsByteMultiByte200Response | PathsByteMultiBytedefaultResponse
): response is PathsByteMultiBytedefaultResponse;
export function isUnexpected(
  response: PathsByteEmpty200Response | PathsByteEmptydefaultResponse
): response is PathsByteEmptydefaultResponse;
export function isUnexpected(
  response: PathsByteNull400Response | PathsByteNulldefaultResponse
): response is PathsByteNulldefaultResponse;
export function isUnexpected(
  response: PathsDateValid200Response | PathsDateValiddefaultResponse
): response is PathsDateValiddefaultResponse;
export function isUnexpected(
  response: PathsDateNull400Response | PathsDateNulldefaultResponse
): response is PathsDateNulldefaultResponse;
export function isUnexpected(
  response: PathsDateTimeValid200Response | PathsDateTimeValiddefaultResponse
): response is PathsDateTimeValiddefaultResponse;
export function isUnexpected(
  response: PathsDateTimeNull400Response | PathsDateTimeNulldefaultResponse
): response is PathsDateTimeNulldefaultResponse;
export function isUnexpected(
  response: PathsBase64Url200Response | PathsBase64UrldefaultResponse
): response is PathsBase64UrldefaultResponse;
export function isUnexpected(
  response: PathsArrayCsvInPath200Response | PathsArrayCsvInPathdefaultResponse
): response is PathsArrayCsvInPathdefaultResponse;
export function isUnexpected(
  response: PathsUnixTimeUrl200Response | PathsUnixTimeUrldefaultResponse
): response is PathsUnixTimeUrldefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanTrue200Response
    | QueriesGetBooleanTruedefaultResponse
): response is QueriesGetBooleanTruedefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanFalse200Response
    | QueriesGetBooleanFalsedefaultResponse
): response is QueriesGetBooleanFalsedefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetBooleanNull200Response
    | QueriesGetBooleanNulldefaultResponse
): response is QueriesGetBooleanNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetIntOneMillion200Response
    | QueriesGetIntOneMilliondefaultResponse
): response is QueriesGetIntOneMilliondefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMilliondefaultResponse
): response is QueriesGetIntNegativeOneMilliondefaultResponse;
export function isUnexpected(
  response: QueriesGetIntNull200Response | QueriesGetIntNulldefaultResponse
): response is QueriesGetIntNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetTenBillion200Response
    | QueriesGetTenBilliondefaultResponse
): response is QueriesGetTenBilliondefaultResponse;
export function isUnexpected(
  response:
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBilliondefaultResponse
): response is QueriesGetNegativeTenBilliondefaultResponse;
export function isUnexpected(
  response: QueriesGetLongNull200Response | QueriesGetLongNulldefaultResponse
): response is QueriesGetLongNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositivedefaultResponse
): response is QueriesFloatScientificPositivedefaultResponse;
export function isUnexpected(
  response:
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativedefaultResponse
): response is QueriesFloatScientificNegativedefaultResponse;
export function isUnexpected(
  response: QueriesFloatNull200Response | QueriesFloatNulldefaultResponse
): response is QueriesFloatNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositivedefaultResponse
): response is QueriesDoubleDecimalPositivedefaultResponse;
export function isUnexpected(
  response:
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativedefaultResponse
): response is QueriesDoubleDecimalNegativedefaultResponse;
export function isUnexpected(
  response: QueriesDoubleNull200Response | QueriesDoubleNulldefaultResponse
): response is QueriesDoubleNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesStringUnicode200Response
    | QueriesStringUnicodedefaultResponse
): response is QueriesStringUnicodedefaultResponse;
export function isUnexpected(
  response:
    | QueriesStringUrlEncoded200Response
    | QueriesStringUrlEncodeddefaultResponse
): response is QueriesStringUrlEncodeddefaultResponse;
export function isUnexpected(
  response: QueriesStringEmpty200Response | QueriesStringEmptydefaultResponse
): response is QueriesStringEmptydefaultResponse;
export function isUnexpected(
  response: QueriesStringNull200Response | QueriesStringNulldefaultResponse
): response is QueriesStringNulldefaultResponse;
export function isUnexpected(
  response: QueriesEnumValid200Response | QueriesEnumValiddefaultResponse
): response is QueriesEnumValiddefaultResponse;
export function isUnexpected(
  response: QueriesEnumNull200Response | QueriesEnumNulldefaultResponse
): response is QueriesEnumNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesByteMultiByte200Response
    | QueriesByteMultiBytedefaultResponse
): response is QueriesByteMultiBytedefaultResponse;
export function isUnexpected(
  response: QueriesByteEmpty200Response | QueriesByteEmptydefaultResponse
): response is QueriesByteEmptydefaultResponse;
export function isUnexpected(
  response: QueriesByteNull200Response | QueriesByteNulldefaultResponse
): response is QueriesByteNulldefaultResponse;
export function isUnexpected(
  response: QueriesDateValid200Response | QueriesDateValiddefaultResponse
): response is QueriesDateValiddefaultResponse;
export function isUnexpected(
  response: QueriesDateNull200Response | QueriesDateNulldefaultResponse
): response is QueriesDateNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesDateTimeValid200Response
    | QueriesDateTimeValiddefaultResponse
): response is QueriesDateTimeValiddefaultResponse;
export function isUnexpected(
  response: QueriesDateTimeNull200Response | QueriesDateTimeNulldefaultResponse
): response is QueriesDateTimeNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValiddefaultResponse
): response is QueriesArrayStringCsvValiddefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNulldefaultResponse
): response is QueriesArrayStringCsvNulldefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptydefaultResponse
): response is QueriesArrayStringCsvEmptydefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptydefaultResponse
): response is QueriesArrayStringNoCollectionFormatEmptydefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValiddefaultResponse
): response is QueriesArrayStringSsvValiddefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValiddefaultResponse
): response is QueriesArrayStringTsvValiddefaultResponse;
export function isUnexpected(
  response:
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValiddefaultResponse
): response is QueriesArrayStringPipesValiddefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesdefaultResponse
): response is PathItemsGetAllWithValuesdefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNulldefaultResponse
): response is PathItemsGetGlobalQueryNulldefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNulldefaultResponse
): response is PathItemsGetGlobalAndLocalQueryNulldefaultResponse;
export function isUnexpected(
  response:
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNulldefaultResponse
): response is PathItemsGetLocalPathItemQueryNulldefaultResponse;
export function isUnexpected(
  response:
    | PathsGetBooleanTrue200Response
    | PathsGetBooleanTruedefaultResponse
    | PathsGetBooleanFalse200Response
    | PathsGetBooleanFalsedefaultResponse
    | PathsGetIntOneMillion200Response
    | PathsGetIntOneMilliondefaultResponse
    | PathsGetIntNegativeOneMillion200Response
    | PathsGetIntNegativeOneMilliondefaultResponse
    | PathsGetTenBillion200Response
    | PathsGetTenBilliondefaultResponse
    | PathsGetNegativeTenBillion200Response
    | PathsGetNegativeTenBilliondefaultResponse
    | PathsFloatScientificPositive200Response
    | PathsFloatScientificPositivedefaultResponse
    | PathsFloatScientificNegative200Response
    | PathsFloatScientificNegativedefaultResponse
    | PathsDoubleDecimalPositive200Response
    | PathsDoubleDecimalPositivedefaultResponse
    | PathsDoubleDecimalNegative200Response
    | PathsDoubleDecimalNegativedefaultResponse
    | PathsStringUnicode200Response
    | PathsStringUnicodedefaultResponse
    | PathsStringUrlEncoded200Response
    | PathsStringUrlEncodeddefaultResponse
    | PathsStringUrlNonEncoded200Response
    | PathsStringUrlNonEncodeddefaultResponse
    | PathsStringEmpty200Response
    | PathsStringEmptydefaultResponse
    | PathsStringNull400Response
    | PathsStringNulldefaultResponse
    | PathsEnumValid200Response
    | PathsEnumValiddefaultResponse
    | PathsEnumNull400Response
    | PathsEnumNulldefaultResponse
    | PathsByteMultiByte200Response
    | PathsByteMultiBytedefaultResponse
    | PathsByteEmpty200Response
    | PathsByteEmptydefaultResponse
    | PathsByteNull400Response
    | PathsByteNulldefaultResponse
    | PathsDateValid200Response
    | PathsDateValiddefaultResponse
    | PathsDateNull400Response
    | PathsDateNulldefaultResponse
    | PathsDateTimeValid200Response
    | PathsDateTimeValiddefaultResponse
    | PathsDateTimeNull400Response
    | PathsDateTimeNulldefaultResponse
    | PathsBase64Url200Response
    | PathsBase64UrldefaultResponse
    | PathsArrayCsvInPath200Response
    | PathsArrayCsvInPathdefaultResponse
    | PathsUnixTimeUrl200Response
    | PathsUnixTimeUrldefaultResponse
    | QueriesGetBooleanTrue200Response
    | QueriesGetBooleanTruedefaultResponse
    | QueriesGetBooleanFalse200Response
    | QueriesGetBooleanFalsedefaultResponse
    | QueriesGetBooleanNull200Response
    | QueriesGetBooleanNulldefaultResponse
    | QueriesGetIntOneMillion200Response
    | QueriesGetIntOneMilliondefaultResponse
    | QueriesGetIntNegativeOneMillion200Response
    | QueriesGetIntNegativeOneMilliondefaultResponse
    | QueriesGetIntNull200Response
    | QueriesGetIntNulldefaultResponse
    | QueriesGetTenBillion200Response
    | QueriesGetTenBilliondefaultResponse
    | QueriesGetNegativeTenBillion200Response
    | QueriesGetNegativeTenBilliondefaultResponse
    | QueriesGetLongNull200Response
    | QueriesGetLongNulldefaultResponse
    | QueriesFloatScientificPositive200Response
    | QueriesFloatScientificPositivedefaultResponse
    | QueriesFloatScientificNegative200Response
    | QueriesFloatScientificNegativedefaultResponse
    | QueriesFloatNull200Response
    | QueriesFloatNulldefaultResponse
    | QueriesDoubleDecimalPositive200Response
    | QueriesDoubleDecimalPositivedefaultResponse
    | QueriesDoubleDecimalNegative200Response
    | QueriesDoubleDecimalNegativedefaultResponse
    | QueriesDoubleNull200Response
    | QueriesDoubleNulldefaultResponse
    | QueriesStringUnicode200Response
    | QueriesStringUnicodedefaultResponse
    | QueriesStringUrlEncoded200Response
    | QueriesStringUrlEncodeddefaultResponse
    | QueriesStringEmpty200Response
    | QueriesStringEmptydefaultResponse
    | QueriesStringNull200Response
    | QueriesStringNulldefaultResponse
    | QueriesEnumValid200Response
    | QueriesEnumValiddefaultResponse
    | QueriesEnumNull200Response
    | QueriesEnumNulldefaultResponse
    | QueriesByteMultiByte200Response
    | QueriesByteMultiBytedefaultResponse
    | QueriesByteEmpty200Response
    | QueriesByteEmptydefaultResponse
    | QueriesByteNull200Response
    | QueriesByteNulldefaultResponse
    | QueriesDateValid200Response
    | QueriesDateValiddefaultResponse
    | QueriesDateNull200Response
    | QueriesDateNulldefaultResponse
    | QueriesDateTimeValid200Response
    | QueriesDateTimeValiddefaultResponse
    | QueriesDateTimeNull200Response
    | QueriesDateTimeNulldefaultResponse
    | QueriesArrayStringCsvValid200Response
    | QueriesArrayStringCsvValiddefaultResponse
    | QueriesArrayStringCsvNull200Response
    | QueriesArrayStringCsvNulldefaultResponse
    | QueriesArrayStringCsvEmpty200Response
    | QueriesArrayStringCsvEmptydefaultResponse
    | QueriesArrayStringNoCollectionFormatEmpty200Response
    | QueriesArrayStringNoCollectionFormatEmptydefaultResponse
    | QueriesArrayStringSsvValid200Response
    | QueriesArrayStringSsvValiddefaultResponse
    | QueriesArrayStringTsvValid200Response
    | QueriesArrayStringTsvValiddefaultResponse
    | QueriesArrayStringPipesValid200Response
    | QueriesArrayStringPipesValiddefaultResponse
    | PathItemsGetAllWithValues200Response
    | PathItemsGetAllWithValuesdefaultResponse
    | PathItemsGetGlobalQueryNull200Response
    | PathItemsGetGlobalQueryNulldefaultResponse
    | PathItemsGetGlobalAndLocalQueryNull200Response
    | PathItemsGetGlobalAndLocalQueryNulldefaultResponse
    | PathItemsGetLocalPathItemQueryNull200Response
    | PathItemsGetLocalPathItemQueryNulldefaultResponse
): response is
  | PathsGetBooleanTruedefaultResponse
  | PathsGetBooleanFalsedefaultResponse
  | PathsGetIntOneMilliondefaultResponse
  | PathsGetIntNegativeOneMilliondefaultResponse
  | PathsGetTenBilliondefaultResponse
  | PathsGetNegativeTenBilliondefaultResponse
  | PathsFloatScientificPositivedefaultResponse
  | PathsFloatScientificNegativedefaultResponse
  | PathsDoubleDecimalPositivedefaultResponse
  | PathsDoubleDecimalNegativedefaultResponse
  | PathsStringUnicodedefaultResponse
  | PathsStringUrlEncodeddefaultResponse
  | PathsStringUrlNonEncodeddefaultResponse
  | PathsStringEmptydefaultResponse
  | PathsStringNulldefaultResponse
  | PathsEnumValiddefaultResponse
  | PathsEnumNulldefaultResponse
  | PathsByteMultiBytedefaultResponse
  | PathsByteEmptydefaultResponse
  | PathsByteNulldefaultResponse
  | PathsDateValiddefaultResponse
  | PathsDateNulldefaultResponse
  | PathsDateTimeValiddefaultResponse
  | PathsDateTimeNulldefaultResponse
  | PathsBase64UrldefaultResponse
  | PathsArrayCsvInPathdefaultResponse
  | PathsUnixTimeUrldefaultResponse
  | QueriesGetBooleanTruedefaultResponse
  | QueriesGetBooleanFalsedefaultResponse
  | QueriesGetBooleanNulldefaultResponse
  | QueriesGetIntOneMilliondefaultResponse
  | QueriesGetIntNegativeOneMilliondefaultResponse
  | QueriesGetIntNulldefaultResponse
  | QueriesGetTenBilliondefaultResponse
  | QueriesGetNegativeTenBilliondefaultResponse
  | QueriesGetLongNulldefaultResponse
  | QueriesFloatScientificPositivedefaultResponse
  | QueriesFloatScientificNegativedefaultResponse
  | QueriesFloatNulldefaultResponse
  | QueriesDoubleDecimalPositivedefaultResponse
  | QueriesDoubleDecimalNegativedefaultResponse
  | QueriesDoubleNulldefaultResponse
  | QueriesStringUnicodedefaultResponse
  | QueriesStringUrlEncodeddefaultResponse
  | QueriesStringEmptydefaultResponse
  | QueriesStringNulldefaultResponse
  | QueriesEnumValiddefaultResponse
  | QueriesEnumNulldefaultResponse
  | QueriesByteMultiBytedefaultResponse
  | QueriesByteEmptydefaultResponse
  | QueriesByteNulldefaultResponse
  | QueriesDateValiddefaultResponse
  | QueriesDateNulldefaultResponse
  | QueriesDateTimeValiddefaultResponse
  | QueriesDateTimeNulldefaultResponse
  | QueriesArrayStringCsvValiddefaultResponse
  | QueriesArrayStringCsvNulldefaultResponse
  | QueriesArrayStringCsvEmptydefaultResponse
  | QueriesArrayStringNoCollectionFormatEmptydefaultResponse
  | QueriesArrayStringSsvValiddefaultResponse
  | QueriesArrayStringTsvValiddefaultResponse
  | QueriesArrayStringPipesValiddefaultResponse
  | PathItemsGetAllWithValuesdefaultResponse
  | PathItemsGetGlobalQueryNulldefaultResponse
  | PathItemsGetGlobalAndLocalQueryNulldefaultResponse
  | PathItemsGetLocalPathItemQueryNulldefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
