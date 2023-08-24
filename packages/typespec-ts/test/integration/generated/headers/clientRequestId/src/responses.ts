// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface Get204Response extends HttpResponse {
  status: "204";
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
