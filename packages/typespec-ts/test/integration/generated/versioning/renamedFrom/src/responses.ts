// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { NewModelOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface NewOp200Response extends HttpResponse {
  status: "200";
  body: NewModelOutput;
}

/** The request has succeeded. */
export interface NewOpInNewInterface200Response extends HttpResponse {
  status: "200";
  body: NewModelOutput;
}
