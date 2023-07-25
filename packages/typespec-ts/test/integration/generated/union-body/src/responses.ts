// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface Registration200Response extends HttpResponse {
  status: "200";
  body: Record<string, any>;
}
