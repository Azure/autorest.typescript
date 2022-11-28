// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { CollectionOutput, ErrorResponseOutput } from "./outputModels";

/** The request has succeeded. */
export interface ListCollections200Response extends HttpResponse {
  status: "200";
  body: Array<CollectionOutput>;
}

export interface ListCollectionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
