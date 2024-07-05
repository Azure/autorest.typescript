// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface SendAsText200Response extends HttpResponse {
  status: "200";
}

export interface GetAsText200Headers {
  "content-type": "text/plain";
}

/** The request has succeeded. */
export interface GetAsText200Response extends HttpResponse {
  status: "200";
  body: string;
  headers: RawHttpHeaders & GetAsText200Headers;
}

/** The request has succeeded. */
export interface SendAsJson200Response extends HttpResponse {
  status: "200";
}

export interface GetAsJson200Headers {
  "content-type": "application/json";
}

/** The request has succeeded. */
export interface GetAsJson200Response extends HttpResponse {
  status: "200";
  body: string;
  headers: RawHttpHeaders & GetAsJson200Headers;
}
