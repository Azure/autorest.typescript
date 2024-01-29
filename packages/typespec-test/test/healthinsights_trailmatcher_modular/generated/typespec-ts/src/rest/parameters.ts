// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { TrialMatcherData } from "./models.js";

export type TrialMatcherGetJobParameters = RequestParameters;

export interface TrialMatcherCreateJobHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface TrialMatcherCreateJobBodyParam {
  body?: TrialMatcherData;
}

export interface TrialMatcherCreateJobHeaderParam {
  headers?: RawHttpHeadersInput & TrialMatcherCreateJobHeaders;
}

export type TrialMatcherCreateJobParameters = TrialMatcherCreateJobHeaderParam &
  TrialMatcherCreateJobBodyParam &
  RequestParameters;
