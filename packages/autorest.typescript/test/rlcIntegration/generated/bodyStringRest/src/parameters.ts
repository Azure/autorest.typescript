// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RefColorConstant } from "./models";

export type StringGetNullParameters = RequestParameters;

export interface StringPutNullBodyParam {
  /** string body */
  body?: string;
}

export interface StringPutNullMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringPutNullParameters = StringPutNullMediaTypesParam &
  StringPutNullBodyParam &
  RequestParameters;
export type StringGetEmptyParameters = RequestParameters;

export interface StringPutEmptyBodyParam {
  /** string body */
  body: "";
}

export interface StringPutEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringPutEmptyParameters = StringPutEmptyMediaTypesParam &
  StringPutEmptyBodyParam &
  RequestParameters;
export type StringGetMbcsParameters = RequestParameters;

export interface StringPutMbcsBodyParam {
  /** string body */
  body: "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€";
}

export interface StringPutMbcsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringPutMbcsParameters = StringPutMbcsMediaTypesParam &
  StringPutMbcsBodyParam &
  RequestParameters;
export type StringGetWhitespaceParameters = RequestParameters;

export interface StringPutWhitespaceBodyParam {
  /** string body */
  body: "    Now is the time for all good men to come to the aid of their country    ";
}

export interface StringPutWhitespaceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringPutWhitespaceParameters = StringPutWhitespaceMediaTypesParam &
  StringPutWhitespaceBodyParam &
  RequestParameters;
export type StringGetNotProvidedParameters = RequestParameters;
export type StringGetBase64EncodedParameters = RequestParameters;
export type StringGetBase64UrlEncodedParameters = RequestParameters;

export interface StringPutBase64UrlEncodedBodyParam {
  /**
   * string body
   *
   * Value may contain base64 encoded characters
   */
  body: string;
}

export interface StringPutBase64UrlEncodedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringPutBase64UrlEncodedParameters =
  StringPutBase64UrlEncodedMediaTypesParam &
    StringPutBase64UrlEncodedBodyParam &
    RequestParameters;
export type StringGetNullBase64UrlEncodedParameters = RequestParameters;
export type EnumGetNotExpandableParameters = RequestParameters;

export interface EnumPutNotExpandableBodyParam {
  /** string body */
  body: "red color" | "green-color" | "blue_color";
}

export interface EnumPutNotExpandableMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumPutNotExpandableParameters =
  EnumPutNotExpandableMediaTypesParam &
    EnumPutNotExpandableBodyParam &
    RequestParameters;
export type EnumGetReferencedParameters = RequestParameters;

export interface EnumPutReferencedBodyParam {
  /** enum string body */
  body: "red color" | "green-color" | "blue_color";
}

export interface EnumPutReferencedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumPutReferencedParameters = EnumPutReferencedMediaTypesParam &
  EnumPutReferencedBodyParam &
  RequestParameters;
export type EnumGetReferencedConstantParameters = RequestParameters;

export interface EnumPutReferencedConstantBodyParam {
  /** enum string body */
  body: RefColorConstant;
}

export interface EnumPutReferencedConstantMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumPutReferencedConstantParameters =
  EnumPutReferencedConstantMediaTypesParam &
    EnumPutReferencedConstantBodyParam &
    RequestParameters;
