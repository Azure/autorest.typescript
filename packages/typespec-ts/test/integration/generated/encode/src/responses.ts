// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  DefaultDurationPropertyOutput,
  ISO8601DurationPropertyOutput,
  Int32SecondsDurationPropertyOutput,
  FloatSecondsDurationPropertyOutput,
} from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryDefault204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryIso8601204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryInt32Seconds204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface QueryFloatSeconds204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PropertyDefault200Response extends HttpResponse {
  status: "200";
  body: DefaultDurationPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyIso8601200Response extends HttpResponse {
  status: "200";
  body: ISO8601DurationPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyInt32Seconds200Response extends HttpResponse {
  status: "200";
  body: Int32SecondsDurationPropertyOutput;
}

/** The request has succeeded. */
export interface PropertyFloatSeconds200Response extends HttpResponse {
  status: "200";
  body: FloatSecondsDurationPropertyOutput;
}
