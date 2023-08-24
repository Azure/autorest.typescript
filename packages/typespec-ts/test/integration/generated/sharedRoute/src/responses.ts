// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { ResourceOutput } from "./outputModels";

/** The request has succeeded. */
export interface ListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: Array<ResourceOutput>;
}

export interface ListByResourceGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ListBySubscription200Response extends HttpResponse {
  status: "200";
  body: Array<ResourceOutput>;
}

export interface ListBySubscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UpdateInt204Response extends HttpResponse {
  status: "204";
}

export interface UpdateIntDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface UpdateString204Response extends HttpResponse {
  status: "204";
}

export interface UpdateStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ReturnsInt200Response extends HttpResponse {
  status: "200";
  body: number;
}

export interface ReturnsIntDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ReturnsString200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface ReturnsStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ProcessInt200Response extends HttpResponse {
  status: "200";
  body: number;
}

export interface ProcessIntDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ProcessString200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface ProcessStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
