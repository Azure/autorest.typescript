// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface HeaderParamExistingKeyHeaders {
  /** Send a post request with header value "User-Agent": "overwrite" */
  "User-Agent": string;
}

export interface HeaderParamExistingKeyHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamExistingKeyHeaders;
}

export type HeaderParamExistingKeyParameters =
  HeaderParamExistingKeyHeaderParam & RequestParameters;
export type HeaderResponseExistingKeyParameters = RequestParameters;

export interface HeaderParamProtectedKeyHeaders {
  /** Send a post request with header value "Content-Type": "text/html" */
  "Content-Type": string;
}

export interface HeaderParamProtectedKeyHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamProtectedKeyHeaders;
}

export type HeaderParamProtectedKeyParameters =
  HeaderParamProtectedKeyHeaderParam & RequestParameters;
export type HeaderResponseProtectedKeyParameters = RequestParameters;

export interface HeaderParamIntegerHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
  /** Send a post request with header values 1 or -2 */
  value: number;
}

export interface HeaderParamIntegerHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamIntegerHeaders;
}

export type HeaderParamIntegerParameters = HeaderParamIntegerHeaderParam &
  RequestParameters;

export interface HeaderResponseIntegerHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
}

export interface HeaderResponseIntegerHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseIntegerHeaders;
}

export type HeaderResponseIntegerParameters = HeaderResponseIntegerHeaderParam &
  RequestParameters;

export interface HeaderParamLongHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
  /** Send a post request with header values 105 or -2 */
  value: number;
}

export interface HeaderParamLongHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamLongHeaders;
}

export type HeaderParamLongParameters = HeaderParamLongHeaderParam &
  RequestParameters;

export interface HeaderResponseLongHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
}

export interface HeaderResponseLongHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseLongHeaders;
}

export type HeaderResponseLongParameters = HeaderResponseLongHeaderParam &
  RequestParameters;

export interface HeaderParamFloatHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
  /** Send a post request with header values 0.07 or -3.0 */
  value: number;
}

export interface HeaderParamFloatHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamFloatHeaders;
}

export type HeaderParamFloatParameters = HeaderParamFloatHeaderParam &
  RequestParameters;

export interface HeaderResponseFloatHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
}

export interface HeaderResponseFloatHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseFloatHeaders;
}

export type HeaderResponseFloatParameters = HeaderResponseFloatHeaderParam &
  RequestParameters;

export interface HeaderParamDoubleHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
  /** Send a post request with header values 7e120 or -3.0 */
  value: number;
}

export interface HeaderParamDoubleHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamDoubleHeaders;
}

export type HeaderParamDoubleParameters = HeaderParamDoubleHeaderParam &
  RequestParameters;

export interface HeaderResponseDoubleHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario: string;
}

export interface HeaderResponseDoubleHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseDoubleHeaders;
}

export type HeaderResponseDoubleParameters = HeaderResponseDoubleHeaderParam &
  RequestParameters;

export interface HeaderParamBoolHeaders {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario: string;
  /** Send a post request with header values true or false */
  value: boolean;
}

export interface HeaderParamBoolHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamBoolHeaders;
}

export type HeaderParamBoolParameters = HeaderParamBoolHeaderParam &
  RequestParameters;

export interface HeaderResponseBoolHeaders {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario: string;
}

export interface HeaderResponseBoolHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseBoolHeaders;
}

export type HeaderResponseBoolParameters = HeaderResponseBoolHeaderParam &
  RequestParameters;

export interface HeaderParamStringHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario: string;
  /** Send a post request with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  value?: string;
}

export interface HeaderParamStringHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamStringHeaders;
}

export type HeaderParamStringParameters = HeaderParamStringHeaderParam &
  RequestParameters;

export interface HeaderResponseStringHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario: string;
}

export interface HeaderResponseStringHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseStringHeaders;
}

export type HeaderResponseStringParameters = HeaderResponseStringHeaderParam &
  RequestParameters;

export interface HeaderParamDateHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
  /** Send a post request with header values "2010-01-01" or "0001-01-01" */
  value: Date | string;
}

export interface HeaderParamDateHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamDateHeaders;
}

export type HeaderParamDateParameters = HeaderParamDateHeaderParam &
  RequestParameters;

export interface HeaderResponseDateHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
}

export interface HeaderResponseDateHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseDateHeaders;
}

export type HeaderResponseDateParameters = HeaderResponseDateHeaderParam &
  RequestParameters;

export interface HeaderParamDatetimeHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
  /** Send a post request with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  value: Date | string;
}

export interface HeaderParamDatetimeHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamDatetimeHeaders;
}

export type HeaderParamDatetimeParameters = HeaderParamDatetimeHeaderParam &
  RequestParameters;

export interface HeaderResponseDatetimeHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
}

export interface HeaderResponseDatetimeHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseDatetimeHeaders;
}

export type HeaderResponseDatetimeParameters =
  HeaderResponseDatetimeHeaderParam & RequestParameters;

export interface HeaderParamDatetimeRfc1123Headers {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
  /** Send a post request with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  value?: Date | string;
}

export interface HeaderParamDatetimeRfc1123HeaderParam {
  headers: RawHttpHeadersInput & HeaderParamDatetimeRfc1123Headers;
}

export type HeaderParamDatetimeRfc1123Parameters =
  HeaderParamDatetimeRfc1123HeaderParam & RequestParameters;

export interface HeaderResponseDatetimeRfc1123Headers {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario: string;
}

export interface HeaderResponseDatetimeRfc1123HeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseDatetimeRfc1123Headers;
}

export type HeaderResponseDatetimeRfc1123Parameters =
  HeaderResponseDatetimeRfc1123HeaderParam & RequestParameters;

export interface HeaderParamDurationHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario: string;
  /** Send a post request with header values "P123DT22H14M12.011S" */
  value: string;
}

export interface HeaderParamDurationHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamDurationHeaders;
}

export type HeaderParamDurationParameters = HeaderParamDurationHeaderParam &
  RequestParameters;

export interface HeaderResponseDurationHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario: string;
}

export interface HeaderResponseDurationHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseDurationHeaders;
}

export type HeaderResponseDurationParameters =
  HeaderResponseDurationHeaderParam & RequestParameters;

export interface HeaderParamByteHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario: string;
  /**
   * Send a post request with header values "啊齄丂狛狜隣郎隣兀﨩"
   *
   * Value may contain base64 encoded characters
   */
  value: string;
}

export interface HeaderParamByteHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamByteHeaders;
}

export type HeaderParamByteParameters = HeaderParamByteHeaderParam &
  RequestParameters;

export interface HeaderResponseByteHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario: string;
}

export interface HeaderResponseByteHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseByteHeaders;
}

export type HeaderResponseByteParameters = HeaderResponseByteHeaderParam &
  RequestParameters;

export interface HeaderParamEnumHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario: string;
  /** Send a post request with header values 'GREY' */
  value?: "White" | "black" | "GREY";
}

export interface HeaderParamEnumHeaderParam {
  headers: RawHttpHeadersInput & HeaderParamEnumHeaders;
}

export type HeaderParamEnumParameters = HeaderParamEnumHeaderParam &
  RequestParameters;

export interface HeaderResponseEnumHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario: string;
}

export interface HeaderResponseEnumHeaderParam {
  headers: RawHttpHeadersInput & HeaderResponseEnumHeaders;
}

export type HeaderResponseEnumParameters = HeaderResponseEnumHeaderParam &
  RequestParameters;
export type HeaderCustomRequestIdParameters = RequestParameters;
