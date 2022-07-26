// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Operation */
export interface Head200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
