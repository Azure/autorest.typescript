// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { RefColorConstant } from "./models";

export type StringGetNullParameters = RequestParameters;

export interface StringPutNullBodyParam {
  /** string body */
  body?: string;
}

export type StringPutNullParameters = StringPutNullBodyParam &
  RequestParameters;
export type StringGetEmptyParameters = RequestParameters;
export type StringPutEmptyParameters = RequestParameters;
export type StringGetMbcsParameters = RequestParameters;
export type StringPutMbcsParameters = RequestParameters;
export type StringGetWhitespaceParameters = RequestParameters;
export type StringPutWhitespaceParameters = RequestParameters;
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

export type StringPutBase64UrlEncodedParameters = StringPutBase64UrlEncodedBodyParam &
  RequestParameters;
export type StringGetNullBase64UrlEncodedParameters = RequestParameters;
export type EnumGetNotExpandableParameters = RequestParameters;

export interface EnumPutNotExpandableBodyParam {
  /** string body */
  body: "red color" | "green-color" | "blue_color";
}

export type EnumPutNotExpandableParameters = EnumPutNotExpandableBodyParam &
  RequestParameters;
export type EnumGetReferencedParameters = RequestParameters;

export interface EnumPutReferencedBodyParam {
  /** enum string body */
  body: "red color" | "green-color" | "blue_color";
}

export type EnumPutReferencedParameters = EnumPutReferencedBodyParam &
  RequestParameters;
export type EnumGetReferencedConstantParameters = RequestParameters;

export interface EnumPutReferencedConstantBodyParam {
  /** enum string body */
  body: RefColorConstant;
}

export type EnumPutReferencedConstantParameters = EnumPutReferencedConstantBodyParam &
  RequestParameters;
