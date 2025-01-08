// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type { ErrorModelOutput } from "./outputModels";

/** Get a 200 to test a valid base uri */
export interface PathsGetEmpty200Response extends HttpResponse {
  status: "200";
}

/** Get a 200 to test a valid base uri */
export interface PathsGetEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
