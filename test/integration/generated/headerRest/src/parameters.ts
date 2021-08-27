// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters, RawHttpHeaders } from "@azure-rest/core-client";
import "./models";

export interface ParamExistingKeyHeaders {
  /** Send a post request with header value "User-Agent": "overwrite" */
  userAgent?: string;
}

export interface ParamExistingKeyHeaderParam {
  headers: RawHttpHeaders & ParamExistingKeyHeaders;
}

export type ParamExistingKeyParameters = ParamExistingKeyHeaderParam &
  RequestParameters;
export type ResponseExistingKeyParameters = RequestParameters;

export interface ParamProtectedKeyHeaders {
  /** Send a post request with header value "Content-Type": "text/html" */
  contentType?: string;
}

export interface ParamProtectedKeyHeaderParam {
  headers: RawHttpHeaders & ParamProtectedKeyHeaders;
}

export type ParamProtectedKeyParameters = ParamProtectedKeyHeaderParam &
  RequestParameters;
export type ResponseProtectedKeyParameters = RequestParameters;

export interface ParamIntegerHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 1 or -2 */
  value?: number;
}

export interface ParamIntegerHeaderParam {
  headers: RawHttpHeaders & ParamIntegerHeaders;
}

export type ParamIntegerParameters = ParamIntegerHeaderParam &
  RequestParameters;

export interface ResponseIntegerHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export interface ResponseIntegerHeaderParam {
  headers: RawHttpHeaders & ResponseIntegerHeaders;
}

export type ResponseIntegerParameters = ResponseIntegerHeaderParam &
  RequestParameters;

export interface ParamLongHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 105 or -2 */
  value?: number;
}

export interface ParamLongHeaderParam {
  headers: RawHttpHeaders & ParamLongHeaders;
}

export type ParamLongParameters = ParamLongHeaderParam & RequestParameters;

export interface ResponseLongHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export interface ResponseLongHeaderParam {
  headers: RawHttpHeaders & ResponseLongHeaders;
}

export type ResponseLongParameters = ResponseLongHeaderParam &
  RequestParameters;

export interface ParamFloatHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 0.07 or -3.0 */
  value?: number;
}

export interface ParamFloatHeaderParam {
  headers: RawHttpHeaders & ParamFloatHeaders;
}

export type ParamFloatParameters = ParamFloatHeaderParam & RequestParameters;

export interface ResponseFloatHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export interface ResponseFloatHeaderParam {
  headers: RawHttpHeaders & ResponseFloatHeaders;
}

export type ResponseFloatParameters = ResponseFloatHeaderParam &
  RequestParameters;

export interface ParamDoubleHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 7e120 or -3.0 */
  value?: number;
}

export interface ParamDoubleHeaderParam {
  headers: RawHttpHeaders & ParamDoubleHeaders;
}

export type ParamDoubleParameters = ParamDoubleHeaderParam & RequestParameters;

export interface ResponseDoubleHeaders {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export interface ResponseDoubleHeaderParam {
  headers: RawHttpHeaders & ResponseDoubleHeaders;
}

export type ResponseDoubleParameters = ResponseDoubleHeaderParam &
  RequestParameters;

export interface ParamBoolHeaders {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario?: string;
  /** Send a post request with header values true or false */
  value?: boolean;
}

export interface ParamBoolHeaderParam {
  headers: RawHttpHeaders & ParamBoolHeaders;
}

export type ParamBoolParameters = ParamBoolHeaderParam & RequestParameters;

export interface ResponseBoolHeaders {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario?: string;
}

export interface ResponseBoolHeaderParam {
  headers: RawHttpHeaders & ResponseBoolHeaders;
}

export type ResponseBoolParameters = ResponseBoolHeaderParam &
  RequestParameters;

export interface ParamStringHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
  /** Send a post request with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  value?: string;
}

export interface ParamStringHeaderParam {
  headers: RawHttpHeaders & ParamStringHeaders;
}

export type ParamStringParameters = ParamStringHeaderParam & RequestParameters;

export interface ResponseStringHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
}

export interface ResponseStringHeaderParam {
  headers: RawHttpHeaders & ResponseStringHeaders;
}

export type ResponseStringParameters = ResponseStringHeaderParam &
  RequestParameters;

export interface ParamDateHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "2010-01-01" or "0001-01-01" */
  value?: Date;
}

export interface ParamDateHeaderParam {
  headers: RawHttpHeaders & ParamDateHeaders;
}

export type ParamDateParameters = ParamDateHeaderParam & RequestParameters;

export interface ResponseDateHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export interface ResponseDateHeaderParam {
  headers: RawHttpHeaders & ResponseDateHeaders;
}

export type ResponseDateParameters = ResponseDateHeaderParam &
  RequestParameters;

export interface ParamDatetimeHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  value?: Date;
}

export interface ParamDatetimeHeaderParam {
  headers: RawHttpHeaders & ParamDatetimeHeaders;
}

export type ParamDatetimeParameters = ParamDatetimeHeaderParam &
  RequestParameters;

export interface ResponseDatetimeHeaders {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export interface ResponseDatetimeHeaderParam {
  headers: RawHttpHeaders & ResponseDatetimeHeaders;
}

export type ResponseDatetimeParameters = ResponseDatetimeHeaderParam &
  RequestParameters;

export interface ParamDatetimeRfc1123Headers {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  value?: Date;
}

export interface ParamDatetimeRfc1123HeaderParam {
  headers: RawHttpHeaders & ParamDatetimeRfc1123Headers;
}

export type ParamDatetimeRfc1123Parameters = ParamDatetimeRfc1123HeaderParam &
  RequestParameters;

export interface ResponseDatetimeRfc1123Headers {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export interface ResponseDatetimeRfc1123HeaderParam {
  headers: RawHttpHeaders & ResponseDatetimeRfc1123Headers;
}

export type ResponseDatetimeRfc1123Parameters = ResponseDatetimeRfc1123HeaderParam &
  RequestParameters;

export interface ParamDurationHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
  /** Send a post request with header values "P123DT22H14M12.011S" */
  value?: string;
}

export interface ParamDurationHeaderParam {
  headers: RawHttpHeaders & ParamDurationHeaders;
}

export type ParamDurationParameters = ParamDurationHeaderParam &
  RequestParameters;

export interface ResponseDurationHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
}

export interface ResponseDurationHeaderParam {
  headers: RawHttpHeaders & ResponseDurationHeaders;
}

export type ResponseDurationParameters = ResponseDurationHeaderParam &
  RequestParameters;

export interface ParamByteHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
  /** Send a post request with header values "啊齄丂狛狜隣郎隣兀﨩" */
  value?: string;
}

export interface ParamByteHeaderParam {
  headers: RawHttpHeaders & ParamByteHeaders;
}

export type ParamByteParameters = ParamByteHeaderParam & RequestParameters;

export interface ResponseByteHeaders {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
}

export interface ResponseByteHeaderParam {
  headers: RawHttpHeaders & ResponseByteHeaders;
}

export type ResponseByteParameters = ResponseByteHeaderParam &
  RequestParameters;

export interface ParamEnumHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
  /** Send a post request with header values 'GREY' */
  value?: "White" | "black" | "GREY";
}

export interface ParamEnumHeaderParam {
  headers: RawHttpHeaders & ParamEnumHeaders;
}

export type ParamEnumParameters = ParamEnumHeaderParam & RequestParameters;

export interface ResponseEnumHeaders {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
}

export interface ResponseEnumHeaderParam {
  headers: RawHttpHeaders & ResponseEnumHeaders;
}

export type ResponseEnumParameters = ResponseEnumHeaderParam &
  RequestParameters;
export type CustomRequestIdParameters = RequestParameters;
