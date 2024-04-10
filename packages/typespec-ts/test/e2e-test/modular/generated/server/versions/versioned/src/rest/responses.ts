// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface WithoutApiVersion200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface WithQueryApiVersion200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface WithPathApiVersion200Response extends HttpResponse {
  status: "200";
}
