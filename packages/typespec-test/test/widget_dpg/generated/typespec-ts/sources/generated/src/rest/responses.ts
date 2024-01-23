// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  WidgetOutput,
  WidgetErrorOutput,
  ListWidgetsPagesResultsOutput,
  UserOutput,
  AnalyzeResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ListWidgets200Response extends HttpResponse {
  status: "200";
  body: Array<WidgetOutput>;
}

export interface ListWidgetsDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface ListWidgetsPages200Response extends HttpResponse {
  status: "200";
  body: ListWidgetsPagesResultsOutput;
}

export interface ListWidgetsPagesDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface QueryWidgetsPages200Response extends HttpResponse {
  status: "200";
  body: ListWidgetsPagesResultsOutput;
}

export interface QueryWidgetsPagesDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface GetWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface GetWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateWidget201Response extends HttpResponse {
  status: "201";
  body: WidgetOutput;
}

export interface CreateWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

export interface CreateOrReplace200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface CreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace200Headers;
}

export interface CreateOrReplace201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace201Headers;
}

export interface CreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

/** The final response for long-running createOrReplace operation */
export interface CreateOrReplaceLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded. */
export interface UpdateWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface UpdateWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteWidget204Response extends HttpResponse {
  status: "204";
}

export interface DeleteWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface AnalyzeWidget200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOutput;
}

export interface AnalyzeWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}
