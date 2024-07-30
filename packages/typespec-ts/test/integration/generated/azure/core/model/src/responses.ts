// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { AzureEmbeddingModelOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: number[];
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Post200Response extends HttpResponse {
  status: "200";
  body: AzureEmbeddingModelOutput;
}
