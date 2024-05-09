// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface StringBodySendAsText200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface StringBodyGetAsText200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface StringBodySendAsJson200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface StringBodyGetAsJson200Response extends HttpResponse {
  status: "200";
  body: string;
}
