// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Get true Boolean value on path */
export interface GetRequired200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** POST a JSON or a JPEG */
export interface PostParameters200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Delete something */
export interface DeleteParameters204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** I'm a new operation */
export interface GetNewOperation200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
