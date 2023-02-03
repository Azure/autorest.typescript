// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { CollectionOutput } from "./outputModels";

/** The request has succeeded. */
export interface ListCollections200Response extends HttpResponse {
  status: "200";
  body: Array<CollectionOutput>;
}

export interface ListCollectionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
