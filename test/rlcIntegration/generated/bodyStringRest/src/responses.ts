// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput, RefColorConstantOutput } from "./outputModels";

/** Get null string value value */
export interface StringGetNull200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get null string value value */
export interface StringGetNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value null */
export interface StringPutNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value null */
export interface StringPutNulldefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty string value value '' */
export interface StringGetEmpty200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get empty string value value '' */
export interface StringGetEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value empty '' */
export interface StringPutEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value empty '' */
export interface StringPutEmptydefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringGetMbcs200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringGetMbcsdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringPutMbcs200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringPutMbcsdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringGetWhitespace200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringGetWhitespacedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringPutWhitespace200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringPutWhitespacedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get String value when no string value is sent in response payload */
export interface StringGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get String value when no string value is sent in response payload */
export interface StringGetNotProvideddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get value that is base64 encoded */
export interface StringGetBase64Encoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get value that is base64 encoded */
export interface StringGetBase64EncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get value that is base64url encoded */
export interface StringGetBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get value that is base64url encoded */
export interface StringGetBase64UrlEncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put value that is base64url encoded */
export interface StringPutBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put value that is base64url encoded */
export interface StringPutBase64UrlEncodeddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null value that is expected to be base64url encoded */
export interface StringGetNullBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get null value that is expected to be base64url encoded */
export interface StringGetNullBase64UrlEncodeddefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetNotExpandable200Response extends HttpResponse {
  status: "200";
  body: "red color" | "green-color" | "blue_color";
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetNotExpandabledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutNotExpandable200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutNotExpandabledefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetReferenced200Response extends HttpResponse {
  status: "200";
  body: "red color" | "green-color" | "blue_color";
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetReferenceddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutReferenced200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutReferenceddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumGetReferencedConstant200Response extends HttpResponse {
  status: "200";
  body: RefColorConstantOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumGetReferencedConstantdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'green-color' from a constant */
export interface EnumPutReferencedConstant200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'green-color' from a constant */
export interface EnumPutReferencedConstantdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
