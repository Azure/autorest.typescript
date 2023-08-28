// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface GetThing200Response extends HttpResponse {
  status: "200";
  body: string | number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Upload204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Process204Response extends HttpResponse {
  status: "204";
}
