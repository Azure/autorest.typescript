// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ModelV1Output, ModelV2Output } from "./outputModels.js";

/** The request has succeeded. */
export interface V1200Response extends HttpResponse {
  status: "200";
  body: ModelV1Output;
}

/** The request has succeeded. */
export interface V2200Response extends HttpResponse {
  status: "200";
  body: ModelV2Output;
}

/** The request has succeeded. */
export interface V2InInterface200Response extends HttpResponse {
  status: "200";
  body: ModelV2Output;
}
