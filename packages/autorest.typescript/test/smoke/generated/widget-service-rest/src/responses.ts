// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { WidgetOutput, ErrorModelOutput } from "./outputModels";

export interface List200Response extends HttpResponse {
  status: "200";
  body: Array<WidgetOutput>;
}

export interface ListdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface Create200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface CreatedefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface Read200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface ReaddefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

export interface CustomGet200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface CustomGetdefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
