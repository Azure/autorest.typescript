// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface MyOp200Response extends HttpResponse {
  status: "200";
}

export interface MyOpDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
