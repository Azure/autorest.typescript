// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput, RefColorConstantOutput } from "./outputModels";

/** Get null string value value */
export interface StringgetNull200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get null string value value */
export interface StringgetNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Set string value null */
export interface StringputNull200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value null */
export interface StringputNulldefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get empty string value value '' */
export interface StringgetEmpty200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get empty string value value '' */
export interface StringgetEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Set string value empty '' */
export interface StringputEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value empty '' */
export interface StringputEmptydefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringgetMbcs200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get mbcs string value '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringgetMbcsdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringputMbcs200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€' */
export interface StringputMbcsdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringgetWhitespace200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringgetWhitespacedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringputWhitespace200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>' */
export interface StringputWhitespacedefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get String value when no string value is sent in response payload */
export interface StringgetNotProvided200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** Get String value when no string value is sent in response payload */
export interface StringgetNotProvideddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get value that is base64 encoded */
export interface StringgetBase64Encoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get value that is base64 encoded */
export interface StringgetBase64EncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get value that is base64url encoded */
export interface StringgetBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get value that is base64url encoded */
export interface StringgetBase64UrlEncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Put value that is base64url encoded */
export interface StringputBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Put value that is base64url encoded */
export interface StringputBase64UrlEncodeddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get null value that is expected to be base64url encoded */
export interface StringgetNullBase64UrlEncoded200Response extends HttpResponse {
  status: "200";
  /** Value may contain base64 encoded characters */
  body: string;
}

/** Get null value that is expected to be base64url encoded */
export interface StringgetNullBase64UrlEncodeddefaultResponse
  extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumgetNotExpandable200Response extends HttpResponse {
  status: "200";
  body: "red color" | "green-color" | "blue_color";
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumgetNotExpandabledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumputNotExpandable200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumputNotExpandabledefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumgetReferenced200Response extends HttpResponse {
  status: "200";
  body: "red color" | "green-color" | "blue_color";
}

/** Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'. */
export interface EnumgetReferenceddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumputReferenced200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color' */
export interface EnumputReferenceddefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumgetReferencedConstant200Response extends HttpResponse {
  status: "200";
  body: RefColorConstantOutput;
}

/** Get value 'green-color' from the constant. */
export interface EnumgetReferencedConstantdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}

/** Sends value 'green-color' from a constant */
export interface EnumputReferencedConstant200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Sends value 'green-color' from a constant */
export interface EnumputReferencedConstantdefaultResponse extends HttpResponse {
  status: "500";
  body: ErrorModelOutput;
}
