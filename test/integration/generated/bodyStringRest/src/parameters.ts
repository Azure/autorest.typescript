// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RefColorConstant } from "./models";

export type StringgetNullParameters = RequestParameters;

export interface StringputNullBodyParam {
  /** string body */
  body?: string;
}

export interface StringputNullMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringputNullParameters = StringputNullMediaTypesParam &
  StringputNullBodyParam &
  RequestParameters;
export type StringgetEmptyParameters = RequestParameters;

export interface StringputEmptyBodyParam {
  /** string body */
  body: "";
}

export interface StringputEmptyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringputEmptyParameters = StringputEmptyMediaTypesParam &
  StringputEmptyBodyParam &
  RequestParameters;
export type StringgetMbcsParameters = RequestParameters;

export interface StringputMbcsBodyParam {
  /** string body */
  body: "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€";
}

export interface StringputMbcsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringputMbcsParameters = StringputMbcsMediaTypesParam &
  StringputMbcsBodyParam &
  RequestParameters;
export type StringgetWhitespaceParameters = RequestParameters;

export interface StringputWhitespaceBodyParam {
  /** string body */
  body: "    Now is the time for all good men to come to the aid of their country    ";
}

export interface StringputWhitespaceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringputWhitespaceParameters = StringputWhitespaceMediaTypesParam &
  StringputWhitespaceBodyParam &
  RequestParameters;
export type StringgetNotProvidedParameters = RequestParameters;
export type StringgetBase64EncodedParameters = RequestParameters;
export type StringgetBase64UrlEncodedParameters = RequestParameters;

export interface StringputBase64UrlEncodedBodyParam {
  /**
   * string body
   *
   * Value may contain base64 encoded characters
   */
  body: string;
}

export interface StringputBase64UrlEncodedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type StringputBase64UrlEncodedParameters = StringputBase64UrlEncodedMediaTypesParam &
  StringputBase64UrlEncodedBodyParam &
  RequestParameters;
export type StringgetNullBase64UrlEncodedParameters = RequestParameters;
export type EnumgetNotExpandableParameters = RequestParameters;

export interface EnumputNotExpandableBodyParam {
  /** string body */
  body: "red color" | "green-color" | "blue_color";
}

export interface EnumputNotExpandableMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumputNotExpandableParameters = EnumputNotExpandableMediaTypesParam &
  EnumputNotExpandableBodyParam &
  RequestParameters;
export type EnumgetReferencedParameters = RequestParameters;

export interface EnumputReferencedBodyParam {
  /** enum string body */
  body: "red color" | "green-color" | "blue_color";
}

export interface EnumputReferencedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumputReferencedParameters = EnumputReferencedMediaTypesParam &
  EnumputReferencedBodyParam &
  RequestParameters;
export type EnumgetReferencedConstantParameters = RequestParameters;

export interface EnumputReferencedConstantBodyParam {
  /** enum string body */
  body: RefColorConstant;
}

export interface EnumputReferencedConstantMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type EnumputReferencedConstantParameters = EnumputReferencedConstantMediaTypesParam &
  EnumputReferencedConstantBodyParam &
  RequestParameters;
