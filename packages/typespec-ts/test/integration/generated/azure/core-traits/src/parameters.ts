// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { UserActionParam } from "./models.js";

export interface SmokeTestHeaders {
  /** header in request */
  foo: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SmokeTestHeaderParam {
  headers: RawHttpHeadersInput & SmokeTestHeaders;
}

export type SmokeTestParameters = SmokeTestHeaderParam & RequestParameters;

export interface RepeatableActionHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface RepeatableActionBodyParam {
  body?: UserActionParam;
}

export interface RepeatableActionHeaderParam {
  headers?: RawHttpHeadersInput & RepeatableActionHeaders;
}

export type RepeatableActionParameters = RepeatableActionHeaderParam &
  RepeatableActionBodyParam &
  RequestParameters;
