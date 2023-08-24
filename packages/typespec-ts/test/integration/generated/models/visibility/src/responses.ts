// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { VisibilityModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: VisibilityModelOutput;
}

export interface GetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface HeadModel200Response extends HttpResponse {
  status: "200";
}

export interface HeadModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutModel204Response extends HttpResponse {
  status: "204";
}

export interface PutModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PatchModel204Response extends HttpResponse {
  status: "204";
}

export interface PatchModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PostModel204Response extends HttpResponse {
  status: "204";
}

export interface PostModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteModel204Response extends HttpResponse {
  status: "204";
}

export interface DeleteModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
