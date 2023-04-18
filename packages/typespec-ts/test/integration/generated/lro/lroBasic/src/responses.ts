// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { UserOutput } from "./outputModels";

/** The request has succeeded. */
export interface Create200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The final response for long-running create operation */
export interface CreateLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded. */
export interface Polling200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}
