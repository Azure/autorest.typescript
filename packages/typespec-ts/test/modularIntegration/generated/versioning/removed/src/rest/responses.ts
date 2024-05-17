// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ModelV2Output } from "./outputModels.js";

/** The request has succeeded. */
export interface V2200Response extends HttpResponse {
  status: "200";
  body: ModelV2Output;
}
