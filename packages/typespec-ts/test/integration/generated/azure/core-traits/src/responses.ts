// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  UserOutput,
  RepeatabilityResultOutput,
  UserActionResponseOutput,
} from "./outputModels.js";

export interface SmokeTest200Headers {
  bar: string;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface SmokeTest200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & SmokeTest200Headers;
}

export interface SmokeTestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SmokeTestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SmokeTestDefaultHeaders;
}

export interface RepeatableAction200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
}

/** The request has succeeded. */
export interface RepeatableAction200Response extends HttpResponse {
  status: "200";
  body: UserActionResponseOutput;
  headers: RawHttpHeaders & RepeatableAction200Headers;
}

export interface RepeatableActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RepeatableActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RepeatableActionDefaultHeaders;
}
