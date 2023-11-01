// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  DefaultDurationPropertyOutput,
  ISO8601DurationPropertyOutput,
  Int32SecondsDurationPropertyOutput,
  FloatSecondsDurationPropertyOutput,
  FloatSecondsDurationArrayPropertyOutput,
} from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Iso8601204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32Seconds204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatSeconds204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32SecondsArray204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Default200Response extends HttpResponse {
  status: "200";
  body: DefaultDurationPropertyOutput;
}

/** The request has succeeded. */
export interface Iso8601200Response extends HttpResponse {
  status: "200";
  body: ISO8601DurationPropertyOutput;
}

/** The request has succeeded. */
export interface Int32Seconds200Response extends HttpResponse {
  status: "200";
  body: Int32SecondsDurationPropertyOutput;
}

/** The request has succeeded. */
export interface FloatSeconds200Response extends HttpResponse {
  status: "200";
  body: FloatSecondsDurationPropertyOutput;
}

/** The request has succeeded. */
export interface FloatSecondsArray200Response extends HttpResponse {
  status: "200";
  body: FloatSecondsDurationArrayPropertyOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Default204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Iso8601204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Iso8601Array204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Int32Seconds204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FloatSeconds204Response extends HttpResponse {
  status: "204";
}
