// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import "./models";

export interface ParamExistingKeyHeaderParam {
  /** Send a post request with header value "User-Agent": "overwrite" */
  useragent?: string;
}

export type ParamExistingKeyParameters = ParamExistingKeyHeaderParam &
  RequestParameters;
export type ResponseExistingKeyParameters = RequestParameters;

export interface ParamProtectedKeyHeaderParam {
  /** Send a post request with header value "Content-Type": "text/html" */
  contenttype?: string;
}

export type ParamProtectedKeyParameters = ParamProtectedKeyHeaderParam &
  RequestParameters;
export type ResponseProtectedKeyParameters = RequestParameters;

export interface ParamIntegerHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 1 or -2 */
  value?: number;
}

export type ParamIntegerParameters = ParamIntegerHeaderParam &
  RequestParameters;

export interface ResponseIntegerHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export type ResponseIntegerParameters = ResponseIntegerHeaderParam &
  RequestParameters;

export interface ParamLongHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 105 or -2 */
  value?: number;
}

export type ParamLongParameters = ParamLongHeaderParam & RequestParameters;

export interface ResponseLongHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export type ResponseLongParameters = ResponseLongHeaderParam &
  RequestParameters;

export interface ParamFloatHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 0.07 or -3.0 */
  value?: number;
}

export type ParamFloatParameters = ParamFloatHeaderParam & RequestParameters;

export interface ResponseFloatHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export type ResponseFloatParameters = ResponseFloatHeaderParam &
  RequestParameters;

export interface ParamDoubleHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
  /** Send a post request with header values 7e120 or -3.0 */
  value?: number;
}

export type ParamDoubleParameters = ParamDoubleHeaderParam & RequestParameters;

export interface ResponseDoubleHeaderParam {
  /** Send a post request with header values "scenario": "positive" or "negative" */
  scenario?: string;
}

export type ResponseDoubleParameters = ResponseDoubleHeaderParam &
  RequestParameters;

export interface ParamBoolHeaderParam {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario?: string;
  /** Send a post request with header values true or false */
  value?: boolean;
}

export type ParamBoolParameters = ParamBoolHeaderParam & RequestParameters;

export interface ResponseBoolHeaderParam {
  /** Send a post request with header values "scenario": "true" or "false" */
  scenario?: string;
}

export type ResponseBoolParameters = ResponseBoolHeaderParam &
  RequestParameters;

export interface ParamStringHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
  /** Send a post request with header values "The quick brown fox jumps over the lazy dog" or null or "" */
  value?: string;
}

export type ParamStringParameters = ParamStringHeaderParam & RequestParameters;

export interface ResponseStringHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
}

export type ResponseStringParameters = ResponseStringHeaderParam &
  RequestParameters;

export interface ParamDateHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "2010-01-01" or "0001-01-01" */
  value?: Date;
}

export type ParamDateParameters = ParamDateHeaderParam & RequestParameters;

export interface ResponseDateHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export type ResponseDateParameters = ResponseDateHeaderParam &
  RequestParameters;

export interface ParamDatetimeHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z" */
  value?: Date;
}

export type ParamDatetimeParameters = ParamDatetimeHeaderParam &
  RequestParameters;

export interface ResponseDatetimeHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export type ResponseDatetimeParameters = ResponseDatetimeHeaderParam &
  RequestParameters;

export interface ParamDatetimeRfc1123HeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
  /** Send a post request with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT" */
  value?: Date;
}

export type ParamDatetimeRfc1123Parameters = ParamDatetimeRfc1123HeaderParam &
  RequestParameters;

export interface ResponseDatetimeRfc1123HeaderParam {
  /** Send a post request with header values "scenario": "valid" or "min" */
  scenario?: string;
}

export type ResponseDatetimeRfc1123Parameters = ResponseDatetimeRfc1123HeaderParam &
  RequestParameters;

export interface ParamDurationHeaderParam {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
  /** Send a post request with header values "P123DT22H14M12.011S" */
  value?: string;
}

export type ParamDurationParameters = ParamDurationHeaderParam &
  RequestParameters;

export interface ResponseDurationHeaderParam {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
}

export type ResponseDurationParameters = ResponseDurationHeaderParam &
  RequestParameters;

export interface ParamByteHeaderParam {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
  /** Send a post request with header values "啊齄丂狛狜隣郎隣兀﨩" */
  value?: string;
}

export type ParamByteParameters = ParamByteHeaderParam & RequestParameters;

export interface ResponseByteHeaderParam {
  /** Send a post request with header values "scenario": "valid" */
  scenario?: string;
}

export type ResponseByteParameters = ResponseByteHeaderParam &
  RequestParameters;

export interface ParamEnumHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
  /** Send a post request with header values 'GREY' */
  value?: "White" | "black" | "GREY";
}

export type ParamEnumParameters = ParamEnumHeaderParam & RequestParameters;

export interface ResponseEnumHeaderParam {
  /** Send a post request with header values "scenario": "valid" or "null" or "empty" */
  scenario?: string;
}

export type ResponseEnumParameters = ResponseEnumHeaderParam &
  RequestParameters;
export type CustomRequestIdParameters = RequestParameters;
