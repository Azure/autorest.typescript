// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { VisibilityModelOutput, ReadOnlyModelOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: VisibilityModelOutput;
}

/** The request has succeeded. */
export interface HeadModel200Response extends HttpResponse {
  status: "200";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutModel204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PatchModel204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PostModel204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PutReadOnlyModel200Response extends HttpResponse {
  status: "200";
  body: ReadOnlyModelOutput;
}
