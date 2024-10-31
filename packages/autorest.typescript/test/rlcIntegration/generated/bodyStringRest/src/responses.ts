// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput, RefColorConstantOutput } from "./outputModels";

/** Get null string value value */
export interface StringGetnull200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get null string value value */
export interface StringGetnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value null */
export interface StringPutnull200Response extends HttpResponse {
  status: "200";
}

/** Set string value null */
export interface StringPutnullDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get empty string value value '' */
export interface StringGetEmpty200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get empty string value value '' */
export interface StringGetEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value empty '' */
export interface StringPutEmpty200Response extends HttpResponse {
  status: "200";
}

/** Set string value empty '' */
export interface StringPutEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringGetMbcs200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringGetMbcsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringPutMbcs200Response extends HttpResponse {
  status: "200";
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringPutMbcsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringGetWhitespace200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringGetWhitespaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringPutWhitespace200Response extends HttpResponse {
  status: "200";
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringPutWhitespaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get String value when no string value is sent in response payload */
export interface StringGetNotProvided200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get String value when no string value is sent in response payload */
export interface StringGetNotProvidedDefaultResponse extends HttpResponse {
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
export interface StringGetBase64EncodedDefaultResponse extends HttpResponse {
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
export interface StringGetBase64UrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Put value that is base64url encoded */
export interface StringPutBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
}

/** Put value that is base64url encoded */
export interface StringPutBase64UrlEncodedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get null value that is expected to be base64url encoded */
export interface StringGetnullBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get null value that is expected to be base64url encoded */
export interface StringGetnullBase64UrlEncodedDefaultResponse
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
export interface EnumGetNotExpandableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutNotExpandable200Response extends HttpResponse {
  status: "200";
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutNotExpandableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetReferenced200Response extends HttpResponse {
  status: "200";
  body: "red color" | "green-color" | "blue_color";
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumGetReferencedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutReferenced200Response extends HttpResponse {
  status: "200";
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumPutReferencedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumGetReferencedConstant200Response extends HttpResponse {
  status: "200";
  body: RefColorConstantOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumGetReferencedConstantDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Sends value 'green-color' from a constant */
export interface EnumPutReferencedConstant200Response extends HttpResponse {
  status: "200";
}

/** Sends value 'green-color' from a constant */
export interface EnumPutReferencedConstantDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
