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
  StringGetNulldefaultResponse,
  StringPutNull200Response,
  StringPutNulldefaultResponse,
  StringGetEmpty200Response,
  StringGetEmptydefaultResponse,
  StringPutEmpty200Response,
  StringPutEmptydefaultResponse,
  StringGetMbcs200Response,
  StringGetMbcsdefaultResponse,
  StringPutMbcs200Response,
  StringPutMbcsdefaultResponse,
  StringGetWhitespace200Response,
  StringGetWhitespacedefaultResponse,
  StringPutWhitespace200Response,
  StringPutWhitespacedefaultResponse,
  StringGetNotProvided200Response,
  StringGetNotProvideddefaultResponse,
  StringGetBase64Encoded200Response,
  StringGetBase64EncodeddefaultResponse,
  StringGetBase64UrlEncoded200Response,
  StringGetBase64UrlEncodeddefaultResponse,
  StringPutBase64UrlEncoded200Response,
  StringPutBase64UrlEncodeddefaultResponse,
  StringGetNullBase64UrlEncoded200Response,
  StringGetNullBase64UrlEncodeddefaultResponse,
  EnumGetNotExpandable200Response,
  EnumGetNotExpandabledefaultResponse,
  EnumPutNotExpandable200Response,
  EnumPutNotExpandabledefaultResponse,
  EnumGetReferenced200Response,
  EnumGetReferenceddefaultResponse,
  EnumPutReferenced200Response,
  EnumPutReferenceddefaultResponse,
  EnumGetReferencedConstant200Response,
  EnumGetReferencedConstantdefaultResponse,
  EnumPutReferencedConstant200Response,
  EnumPutReferencedConstantdefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StringGetNull {
  /** Get null string value value */
  get(
    options?: StringGetNullParameters
  ): StreamableMethod<StringGetNull200Response | StringGetNulldefaultResponse>;
  /** Set string value null */
  put(
    options?: StringPutNullParameters
  ): StreamableMethod<StringPutNull200Response | StringPutNulldefaultResponse>;
}

export interface StringGetEmpty {
  /** Get empty string value value '' */
  get(
    options?: StringGetEmptyParameters
  ): StreamableMethod<
    StringGetEmpty200Response | StringGetEmptydefaultResponse
  >;
  /** Set string value empty '' */
  put(
    options: StringPutEmptyParameters
  ): StreamableMethod<
    StringPutEmpty200Response | StringPutEmptydefaultResponse
  >;
}

export interface StringGetMbcs {
  /** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  get(
    options?: StringGetMbcsParameters
  ): StreamableMethod<StringGetMbcs200Response | StringGetMbcsdefaultResponse>;
  /** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  put(
    options: StringPutMbcsParameters
  ): StreamableMethod<StringPutMbcs200Response | StringPutMbcsdefaultResponse>;
}

export interface StringGetWhitespace {
  /** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  get(
    options?: StringGetWhitespaceParameters
  ): StreamableMethod<
    StringGetWhitespace200Response | StringGetWhitespacedefaultResponse
  >;
  /** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  put(
    options: StringPutWhitespaceParameters
  ): StreamableMethod<
    StringPutWhitespace200Response | StringPutWhitespacedefaultResponse
  >;
}

export interface StringGetNotProvided {
  /** Get String value when no string value is sent in response payload */
  get(
    options?: StringGetNotProvidedParameters
  ): StreamableMethod<
    StringGetNotProvided200Response | StringGetNotProvideddefaultResponse
  >;
}

export interface StringGetBase64Encoded {
  /** Get value that is base64 encoded */
  get(
    options?: StringGetBase64EncodedParameters
  ): StreamableMethod<
    StringGetBase64Encoded200Response | StringGetBase64EncodeddefaultResponse
  >;
}

export interface StringGetBase64UrlEncoded {
  /** Get value that is base64url encoded */
  get(
    options?: StringGetBase64UrlEncodedParameters
  ): StreamableMethod<
    | StringGetBase64UrlEncoded200Response
    | StringGetBase64UrlEncodeddefaultResponse
  >;
  /** Put value that is base64url encoded */
  put(
    options: StringPutBase64UrlEncodedParameters
  ): StreamableMethod<
    | StringPutBase64UrlEncoded200Response
    | StringPutBase64UrlEncodeddefaultResponse
  >;
}

export interface StringGetNullBase64UrlEncoded {
  /** Get null value that is expected to be base64url encoded */
  get(
    options?: StringGetNullBase64UrlEncodedParameters
  ): StreamableMethod<
    | StringGetNullBase64UrlEncoded200Response
    | StringGetNullBase64UrlEncodeddefaultResponse
  >;
}

export interface EnumGetNotExpandable {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumGetNotExpandableParameters
  ): StreamableMethod<
    EnumGetNotExpandable200Response | EnumGetNotExpandabledefaultResponse
  >;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumPutNotExpandableParameters
  ): StreamableMethod<
    EnumPutNotExpandable200Response | EnumPutNotExpandabledefaultResponse
  >;
}

export interface EnumGetReferenced {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumGetReferencedParameters
  ): StreamableMethod<
    EnumGetReferenced200Response | EnumGetReferenceddefaultResponse
  >;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumPutReferencedParameters
  ): StreamableMethod<
    EnumPutReferenced200Response | EnumPutReferenceddefaultResponse
  >;
}

export interface EnumGetReferencedConstant {
  /** Get value 'green-color' from the constant. */
  get(
    options?: EnumGetReferencedConstantParameters
  ): StreamableMethod<
    | EnumGetReferencedConstant200Response
    | EnumGetReferencedConstantdefaultResponse
  >;
  /** Sends value 'green-color' from a constant */
  put(
    options: EnumPutReferencedConstantParameters
  ): StreamableMethod<
    | EnumPutReferencedConstant200Response
    | EnumPutReferencedConstantdefaultResponse
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

export type BodyStringRestClient = Client & {
  path: Routes;
};
