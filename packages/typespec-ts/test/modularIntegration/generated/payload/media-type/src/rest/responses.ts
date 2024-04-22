// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface SendAsText200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetAsText200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface SendAsJson200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetAsJson200Response extends HttpResponse {
  status: "200";
  body: string;
}
