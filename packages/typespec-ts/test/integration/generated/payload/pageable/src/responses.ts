// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { PagedUserOutput } from "./outputModels";

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: PagedUserOutput;
}
