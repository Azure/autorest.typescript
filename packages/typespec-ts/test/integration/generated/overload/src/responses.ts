// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface OveralodOperationsGetThing200Response extends HttpResponse {
  status: "200";
  body: string | number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OveralodOperationsUpload204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OveralodOperationsProcess204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface OverloadClientGetString200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface OverloadClientGetNumber200Response extends HttpResponse {
  status: "200";
  body: number;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OverloadClientUploadString204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OverloadClientUploadBytes204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OverloadClientProcessString204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface OverloadClientProcessBytes204Response extends HttpResponse {
  status: "204";
}
