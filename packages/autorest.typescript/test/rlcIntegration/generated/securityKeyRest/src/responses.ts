// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";

/** Operation */
export interface Head200Response extends HttpResponse {
  status: "200";
}
