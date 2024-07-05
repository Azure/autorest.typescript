// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface StringBodySendAsText200Response extends HttpResponse {
  status: "200";
}

export interface StringBodyGetAsText200Headers {
  "content-type": "text/plain";
}

/** The request has succeeded. */
export interface StringBodyGetAsText200Response extends HttpResponse {
  status: "200";
  body: string;
  headers: RawHttpHeaders & StringBodyGetAsText200Headers;
}

/** The request has succeeded. */
export interface StringBodySendAsJson200Response extends HttpResponse {
  status: "200";
}

export interface StringBodyGetAsJson200Headers {
  "content-type": "application/json";
}

/** The request has succeeded. */
export interface StringBodyGetAsJson200Response extends HttpResponse {
  status: "200";
  body: string;
  headers: RawHttpHeaders & StringBodyGetAsJson200Headers;
}
