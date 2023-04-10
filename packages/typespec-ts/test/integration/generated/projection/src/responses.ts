// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** There is no content to send for this request, but the headers may be useful. */
export interface JsonProjection204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ClientProjection204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface LanguageProjection204Response extends HttpResponse {
  status: "204";
}
