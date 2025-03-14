// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";

/** Operation */
export interface Head200Response extends HttpResponse {
  status: "200";
}
