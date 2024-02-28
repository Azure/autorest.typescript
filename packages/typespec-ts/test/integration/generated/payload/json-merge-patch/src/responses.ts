// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ResourceOutput } from "./outputModels";

/** The request has succeeded. */
export interface CreateResource200Response extends HttpResponse {
  status: "200";
  body: ResourceOutput;
}

/** The request has succeeded. */
export interface UpdateResource200Response extends HttpResponse {
  status: "200";
  body: ResourceOutput;
}

/** The request has succeeded. */
export interface UpdateOptionalResource200Response extends HttpResponse {
  status: "200";
  body: ResourceOutput;
}
