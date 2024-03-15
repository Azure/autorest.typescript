// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { ResourceOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface ListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: Array<ResourceOutput>;
}

/** The request has succeeded. */
export interface ListBySubscription200Response extends HttpResponse {
  status: "200";
  body: Array<ResourceOutput>;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UpdateInt204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UpdateString204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface ReturnsInt200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** The request has succeeded. */
export interface ReturnsString200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface ProcessInt200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** The request has succeeded. */
export interface ProcessString200Response extends HttpResponse {
  status: "200";
  body: string;
}
