// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Get true Boolean value on path */
export interface GetRequired200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** POST a JSON */
export interface PostParameters200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
