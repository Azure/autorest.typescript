// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelSpreadAsRequestBody204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AliasSpreadAsRequestBody204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AliasSpreadAsRequestParameter204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AliasSpreadWithMultipleParameters204Response
  extends HttpResponse {
  status: "204";
}
