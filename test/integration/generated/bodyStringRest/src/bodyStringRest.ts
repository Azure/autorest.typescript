// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringGetNullParameters,
  StringPutNullParameters,
  StringGetEmptyParameters,
  StringPutEmptyParameters,
  StringGetMbcsParameters,
  StringPutMbcsParameters,
  StringGetWhitespaceParameters,
  StringPutWhitespaceParameters,
  StringGetNotProvidedParameters,
  StringGetBase64EncodedParameters,
  StringGetBase64UrlEncodedParameters,
  StringPutBase64UrlEncodedParameters,
  StringGetNullBase64UrlEncodedParameters,
  EnumGetNotExpandableParameters,
  EnumPutNotExpandableParameters,
  EnumGetReferencedParameters,
  EnumPutReferencedParameters,
  EnumGetReferencedConstantParameters,
  EnumPutReferencedConstantParameters
} from "./parameters";
import {
  StringGetNull200Response,
  StringGetNull500Response,
  StringPutNull200Response,
  StringPutNull500Response,
  StringGetEmpty200Response,
  StringGetEmpty500Response,
  StringPutEmpty200Response,
  StringPutEmpty500Response,
  StringGetMbcs200Response,
  StringGetMbcs500Response,
  StringPutMbcs200Response,
  StringPutMbcs500Response,
  StringGetWhitespace200Response,
  StringGetWhitespace500Response,
  StringPutWhitespace200Response,
  StringPutWhitespace500Response,
  StringGetNotProvided200Response,
  StringGetNotProvided500Response,
  StringGetBase64Encoded200Response,
  StringGetBase64Encoded500Response,
  StringGetBase64UrlEncoded200Response,
  StringGetBase64UrlEncoded500Response,
  StringPutBase64UrlEncoded200Response,
  StringPutBase64UrlEncoded500Response,
  StringGetNullBase64UrlEncoded200Response,
  StringGetNullBase64UrlEncoded500Response,
  EnumGetNotExpandable200Response,
  EnumGetNotExpandable500Response,
  EnumPutNotExpandable200Response,
  EnumPutNotExpandable500Response,
  EnumGetReferenced200Response,
  EnumGetReferenced500Response,
  EnumPutReferenced200Response,
  EnumPutReferenced500Response,
  EnumGetReferencedConstant200Response,
  EnumGetReferencedConstant500Response,
  EnumPutReferencedConstant200Response,
  EnumPutReferencedConstant500Response
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface StringGetNull {
  /** Get null string value value */
  get(
    options?: StringGetNullParameters
  ): Promise<StringGetNull200Response | StringGetNull500Response>;
  /** Set string value null */
  put(
    options?: StringPutNullParameters
  ): Promise<StringPutNull200Response | StringPutNull500Response>;
}

export interface StringGetEmpty {
  /** Get empty string value value '' */
  get(
    options?: StringGetEmptyParameters
  ): Promise<StringGetEmpty200Response | StringGetEmpty500Response>;
  /** Set string value empty '' */
  put(
    options?: StringPutEmptyParameters
  ): Promise<StringPutEmpty200Response | StringPutEmpty500Response>;
}

export interface StringGetMbcs {
  /** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  get(
    options?: StringGetMbcsParameters
  ): Promise<StringGetMbcs200Response | StringGetMbcs500Response>;
  /** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  put(
    options?: StringPutMbcsParameters
  ): Promise<StringPutMbcs200Response | StringPutMbcs500Response>;
}

export interface StringGetWhitespace {
  /** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  get(
    options?: StringGetWhitespaceParameters
  ): Promise<StringGetWhitespace200Response | StringGetWhitespace500Response>;
  /** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  put(
    options?: StringPutWhitespaceParameters
  ): Promise<StringPutWhitespace200Response | StringPutWhitespace500Response>;
}

export interface StringGetNotProvided {
  /** Get String value when no string value is sent in response payload */
  get(
    options?: StringGetNotProvidedParameters
  ): Promise<StringGetNotProvided200Response | StringGetNotProvided500Response>;
}

export interface StringGetBase64Encoded {
  /** Get value that is base64 encoded */
  get(
    options?: StringGetBase64EncodedParameters
  ): Promise<
    StringGetBase64Encoded200Response | StringGetBase64Encoded500Response
  >;
}

export interface StringGetBase64UrlEncoded {
  /** Get value that is base64url encoded */
  get(
    options?: StringGetBase64UrlEncodedParameters
  ): Promise<
    StringGetBase64UrlEncoded200Response | StringGetBase64UrlEncoded500Response
  >;
  /** Put value that is base64url encoded */
  put(
    options: StringPutBase64UrlEncodedParameters
  ): Promise<
    StringPutBase64UrlEncoded200Response | StringPutBase64UrlEncoded500Response
  >;
}

export interface StringGetNullBase64UrlEncoded {
  /** Get null value that is expected to be base64url encoded */
  get(
    options?: StringGetNullBase64UrlEncodedParameters
  ): Promise<
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncoded500Response
  >;
}

export interface EnumGetNotExpandable {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumGetNotExpandableParameters
  ): Promise<EnumGetNotExpandable200Response | EnumGetNotExpandable500Response>;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumPutNotExpandableParameters
  ): Promise<EnumPutNotExpandable200Response | EnumPutNotExpandable500Response>;
}

export interface EnumGetReferenced {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumGetReferencedParameters
  ): Promise<EnumGetReferenced200Response | EnumGetReferenced500Response>;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumPutReferencedParameters
  ): Promise<EnumPutReferenced200Response | EnumPutReferenced500Response>;
}

export interface EnumGetReferencedConstant {
  /** Get value 'green-color' from the constant. */
  get(
    options?: EnumGetReferencedConstantParameters
  ): Promise<
    EnumGetReferencedConstant200Response | EnumGetReferencedConstant500Response
  >;
  /** Sends value 'green-color' from a constant */
  put(
    options: EnumPutReferencedConstantParameters
  ): Promise<
    EnumPutReferencedConstant200Response | EnumPutReferencedConstant500Response
  >;
}

export interface Routes {
  /** Resource for '/string/null' has methods for the following verbs: get, put */
  (path: "/string/null"): StringGetNull;
  /** Resource for '/string/empty' has methods for the following verbs: get, put */
  (path: "/string/empty"): StringGetEmpty;
  /** Resource for '/string/mbcs' has methods for the following verbs: get, put */
  (path: "/string/mbcs"): StringGetMbcs;
  /** Resource for '/string/whitespace' has methods for the following verbs: get, put */
  (path: "/string/whitespace"): StringGetWhitespace;
  /** Resource for '/string/notProvided' has methods for the following verbs: get */
  (path: "/string/notProvided"): StringGetNotProvided;
  /** Resource for '/string/base64Encoding' has methods for the following verbs: get */
  (path: "/string/base64Encoding"): StringGetBase64Encoded;
  /** Resource for '/string/base64UrlEncoding' has methods for the following verbs: get, put */
  (path: "/string/base64UrlEncoding"): StringGetBase64UrlEncoded;
  /** Resource for '/string/nullBase64UrlEncoding' has methods for the following verbs: get */
  (path: "/string/nullBase64UrlEncoding"): StringGetNullBase64UrlEncoded;
  /** Resource for '/string/enum/notExpandable' has methods for the following verbs: get, put */
  (path: "/string/enum/notExpandable"): EnumGetNotExpandable;
  /** Resource for '/string/enum/Referenced' has methods for the following verbs: get, put */
  (path: "/string/enum/Referenced"): EnumGetReferenced;
  /** Resource for '/string/enum/ReferencedConstant' has methods for the following verbs: get, put */
  (path: "/string/enum/ReferencedConstant"): EnumGetReferencedConstant;
}

export type BodyStringRestRestClient = Client & {
  path: Routes;
};

export default function BodyStringRest(
  options: ClientOptions = {}
): BodyStringRestRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as BodyStringRestRestClient;
}
