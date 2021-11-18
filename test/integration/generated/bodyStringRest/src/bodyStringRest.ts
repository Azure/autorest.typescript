// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringgetNullParameters,
  StringputNullParameters,
  StringgetEmptyParameters,
  StringputEmptyParameters,
  StringgetMbcsParameters,
  StringputMbcsParameters,
  StringgetWhitespaceParameters,
  StringputWhitespaceParameters,
  StringgetNotProvidedParameters,
  StringgetBase64EncodedParameters,
  StringgetBase64UrlEncodedParameters,
  StringputBase64UrlEncodedParameters,
  StringgetNullBase64UrlEncodedParameters,
  EnumgetNotExpandableParameters,
  EnumputNotExpandableParameters,
  EnumgetReferencedParameters,
  EnumputReferencedParameters,
  EnumgetReferencedConstantParameters,
  EnumputReferencedConstantParameters
} from "./parameters";
import {
  StringgetNull200Response,
  StringgetNulldefaultResponse,
  StringputNull200Response,
  StringputNulldefaultResponse,
  StringgetEmpty200Response,
  StringgetEmptydefaultResponse,
  StringputEmpty200Response,
  StringputEmptydefaultResponse,
  StringgetMbcs200Response,
  StringgetMbcsdefaultResponse,
  StringputMbcs200Response,
  StringputMbcsdefaultResponse,
  StringgetWhitespace200Response,
  StringgetWhitespacedefaultResponse,
  StringputWhitespace200Response,
  StringputWhitespacedefaultResponse,
  StringgetNotProvided200Response,
  StringgetNotProvideddefaultResponse,
  StringgetBase64Encoded200Response,
  StringgetBase64EncodeddefaultResponse,
  StringgetBase64UrlEncoded200Response,
  StringgetBase64UrlEncodeddefaultResponse,
  StringputBase64UrlEncoded200Response,
  StringputBase64UrlEncodeddefaultResponse,
  StringgetNullBase64UrlEncoded200Response,
  StringgetNullBase64UrlEncodeddefaultResponse,
  EnumgetNotExpandable200Response,
  EnumgetNotExpandabledefaultResponse,
  EnumputNotExpandable200Response,
  EnumputNotExpandabledefaultResponse,
  EnumgetReferenced200Response,
  EnumgetReferenceddefaultResponse,
  EnumputReferenced200Response,
  EnumputReferenceddefaultResponse,
  EnumgetReferencedConstant200Response,
  EnumgetReferencedConstantdefaultResponse,
  EnumputReferencedConstant200Response,
  EnumputReferencedConstantdefaultResponse
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface StringgetNull {
  /** Get null string value value */
  get(
    options?: StringgetNullParameters
  ): Promise<StringgetNull200Response | StringgetNulldefaultResponse>;
  /** Set string value null */
  put(
    options?: StringputNullParameters
  ): Promise<StringputNull200Response | StringputNulldefaultResponse>;
}

export interface StringgetEmpty {
  /** Get empty string value value '' */
  get(
    options?: StringgetEmptyParameters
  ): Promise<StringgetEmpty200Response | StringgetEmptydefaultResponse>;
  /** Set string value empty '' */
  put(
    options: StringputEmptyParameters
  ): Promise<StringputEmpty200Response | StringputEmptydefaultResponse>;
}

export interface StringgetMbcs {
  /** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  get(
    options?: StringgetMbcsParameters
  ): Promise<StringgetMbcs200Response | StringgetMbcsdefaultResponse>;
  /** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
  put(
    options: StringputMbcsParameters
  ): Promise<StringputMbcs200Response | StringputMbcsdefaultResponse>;
}

export interface StringgetWhitespace {
  /** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  get(
    options?: StringgetWhitespaceParameters
  ): Promise<
    StringgetWhitespace200Response | StringgetWhitespacedefaultResponse
  >;
  /** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
  put(
    options: StringputWhitespaceParameters
  ): Promise<
    StringputWhitespace200Response | StringputWhitespacedefaultResponse
  >;
}

export interface StringgetNotProvided {
  /** Get String value when no string value is sent in response payload */
  get(
    options?: StringgetNotProvidedParameters
  ): Promise<
    StringgetNotProvided200Response | StringgetNotProvideddefaultResponse
  >;
}

export interface StringgetBase64Encoded {
  /** Get value that is base64 encoded */
  get(
    options?: StringgetBase64EncodedParameters
  ): Promise<
    StringgetBase64Encoded200Response | StringgetBase64EncodeddefaultResponse
  >;
}

export interface StringgetBase64UrlEncoded {
  /** Get value that is base64url encoded */
  get(
    options?: StringgetBase64UrlEncodedParameters
  ): Promise<
    | StringgetBase64UrlEncoded200Response
    | StringgetBase64UrlEncodeddefaultResponse
  >;
  /** Put value that is base64url encoded */
  put(
    options: StringputBase64UrlEncodedParameters
  ): Promise<
    | StringputBase64UrlEncoded200Response
    | StringputBase64UrlEncodeddefaultResponse
  >;
}

export interface StringgetNullBase64UrlEncoded {
  /** Get null value that is expected to be base64url encoded */
  get(
    options?: StringgetNullBase64UrlEncodedParameters
  ): Promise<
    | StringgetNullBase64UrlEncoded200Response
    | StringgetNullBase64UrlEncodeddefaultResponse
  >;
}

export interface EnumgetNotExpandable {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumgetNotExpandableParameters
  ): Promise<
    EnumgetNotExpandable200Response | EnumgetNotExpandabledefaultResponse
  >;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumputNotExpandableParameters
  ): Promise<
    EnumputNotExpandable200Response | EnumputNotExpandabledefaultResponse
  >;
}

export interface EnumgetReferenced {
  /** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
  get(
    options?: EnumgetReferencedParameters
  ): Promise<EnumgetReferenced200Response | EnumgetReferenceddefaultResponse>;
  /** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
  put(
    options: EnumputReferencedParameters
  ): Promise<EnumputReferenced200Response | EnumputReferenceddefaultResponse>;
}

export interface EnumgetReferencedConstant {
  /** Get value 'green-color' from the constant. */
  get(
    options?: EnumgetReferencedConstantParameters
  ): Promise<
    | EnumgetReferencedConstant200Response
    | EnumgetReferencedConstantdefaultResponse
  >;
  /** Sends value 'green-color' from a constant */
  put(
    options: EnumputReferencedConstantParameters
  ): Promise<
    | EnumputReferencedConstant200Response
    | EnumputReferencedConstantdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/string/null' has methods for the following verbs: get, put */
  (path: "/string/null"): StringgetNull;
  /** Resource for '/string/empty' has methods for the following verbs: get, put */
  (path: "/string/empty"): StringgetEmpty;
  /** Resource for '/string/mbcs' has methods for the following verbs: get, put */
  (path: "/string/mbcs"): StringgetMbcs;
  /** Resource for '/string/whitespace' has methods for the following verbs: get, put */
  (path: "/string/whitespace"): StringgetWhitespace;
  /** Resource for '/string/notProvided' has methods for the following verbs: get */
  (path: "/string/notProvided"): StringgetNotProvided;
  /** Resource for '/string/base64Encoding' has methods for the following verbs: get */
  (path: "/string/base64Encoding"): StringgetBase64Encoded;
  /** Resource for '/string/base64UrlEncoding' has methods for the following verbs: get, put */
  (path: "/string/base64UrlEncoding"): StringgetBase64UrlEncoded;
  /** Resource for '/string/nullBase64UrlEncoding' has methods for the following verbs: get */
  (path: "/string/nullBase64UrlEncoding"): StringgetNullBase64UrlEncoded;
  /** Resource for '/string/enum/notExpandable' has methods for the following verbs: get, put */
  (path: "/string/enum/notExpandable"): EnumgetNotExpandable;
  /** Resource for '/string/enum/Referenced' has methods for the following verbs: get, put */
  (path: "/string/enum/Referenced"): EnumgetReferenced;
  /** Resource for '/string/enum/ReferencedConstant' has methods for the following verbs: get, put */
  (path: "/string/enum/ReferencedConstant"): EnumgetReferencedConstant;
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
