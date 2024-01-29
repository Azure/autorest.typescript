// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  TrialMatcherResultOutput,
  RepeatabilityResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface TrialMatcherGetJob200Response extends HttpResponse {
  status: "200";
  body: TrialMatcherResultOutput;
}

export interface TrialMatcherGetJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TrialMatcherGetJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TrialMatcherGetJobDefaultHeaders;
}

/** The request has succeeded. */
export interface TrialMatcherCreateJob200Response extends HttpResponse {
  status: "200";
  body: TrialMatcherResultOutput;
}

export interface TrialMatcherCreateJob202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface TrialMatcherCreateJob202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & TrialMatcherCreateJob202Headers;
}

export interface TrialMatcherCreateJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TrialMatcherCreateJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TrialMatcherCreateJobDefaultHeaders;
}

/** The final response for long-running createJob operation */
export interface TrialMatcherCreateJobLogicalResponse extends HttpResponse {
  status: "200";
  body: TrialMatcherResultOutput;
}
