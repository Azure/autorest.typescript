// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  WidgetOutput,
  ErrorModelOutput,
  WidgetCollectionWithNextLinkOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface Update200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface UpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** Resource deleted successfully. */
export interface DeleteOperation200Response extends HttpResponse {
  status: "200";
}

export interface DeleteOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface Create200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

/** Resource create operation completed successfully. */
export interface Create201Response extends HttpResponse {
  status: "201";
  body: WidgetOutput;
}

export interface CreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: WidgetCollectionWithNextLinkOutput;
}

export interface ListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface CustomGet200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}
