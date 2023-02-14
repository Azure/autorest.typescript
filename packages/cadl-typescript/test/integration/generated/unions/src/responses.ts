// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface SendInt200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendIntArray200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendFirstNamedUnionValue200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SendSecondNamedUnionValue200Response extends HttpResponse {
  status: "200";
}
