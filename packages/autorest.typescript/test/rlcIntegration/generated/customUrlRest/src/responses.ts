// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput } from "./outputModels";

/** Get a 200 to test a valid base uri */
export interface PathsGetEmpty200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Get a 200 to test a valid base uri */
export interface PathsGetEmptyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
