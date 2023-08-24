// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  DefaultDurationPropertyOutput,
  ISO8601DurationPropertyOutput,
  Int32SecondsDurationPropertyOutput,
  FloatSecondsDurationPropertyOutput,
  FloatSecondsDurationArrayPropertyOutput,
} from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryDefault204Response extends HttpResponse {
  status: "204";
}

export interface QueryDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryIso8601204Response extends HttpResponse {
  status: "204";
}

export interface QueryIso8601DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryInt32Seconds204Response extends HttpResponse {
  status: "204";
}

export interface QueryInt32SecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryFloatSeconds204Response extends HttpResponse {
  status: "204";
}

export interface QueryFloatSecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryInt32SecondsArray204Response extends HttpResponse {
  status: "204";
}

export interface QueryInt32SecondsArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyDefault200Response extends HttpResponse {
  status: "200";
  body: DefaultDurationPropertyOutput;
}

export interface PropertyDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyIso8601200Response extends HttpResponse {
  status: "200";
  body: ISO8601DurationPropertyOutput;
}

export interface PropertyIso8601DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyInt32Seconds200Response extends HttpResponse {
  status: "200";
  body: Int32SecondsDurationPropertyOutput;
}

export interface PropertyInt32SecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyFloatSeconds200Response extends HttpResponse {
  status: "200";
  body: FloatSecondsDurationPropertyOutput;
}

export interface PropertyFloatSecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PropertyFloatSecondsArray200Response extends HttpResponse {
  status: "200";
  body: FloatSecondsDurationArrayPropertyOutput;
}

export interface PropertyFloatSecondsArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderDefault204Response extends HttpResponse {
  status: "204";
}

export interface HeaderDefaultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderIso8601204Response extends HttpResponse {
  status: "204";
}

export interface HeaderIso8601DefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderIso8601Array204Response extends HttpResponse {
  status: "204";
}

export interface HeaderIso8601ArrayDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderInt32Seconds204Response extends HttpResponse {
  status: "204";
}

export interface HeaderInt32SecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface HeaderFloatSeconds204Response extends HttpResponse {
  status: "204";
}

export interface HeaderFloatSecondsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
