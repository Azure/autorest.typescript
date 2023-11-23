// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface StringModelGet200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface StringModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface BooleanModelGet200Response extends HttpResponse {
  status: "200";
  body: boolean;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface BooleanModelPut204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface UnknownGet200Response extends HttpResponse {
  status: "200";
  body: any;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UnknownPut204Response extends HttpResponse {
  status: "204";
}
