// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { BaseModelOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface For204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface GetWithIf204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface GetWithFilter204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: BaseModelOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Put204Response extends HttpResponse {
  status: "204";
}
