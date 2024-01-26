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
export interface WidgetsListWidgets200Response extends HttpResponse {
  status: "200";
  body: Array<WidgetOutput>;
}

export interface WidgetsListWidgetsDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface WidgetsListWidgetsPages200Response extends HttpResponse {
  status: "200";
  body: ListWidgetsPagesResultsOutput;
}

export interface WidgetsListWidgetsPagesDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface WidgetsQueryWidgetsPages200Response extends HttpResponse {
  status: "200";
  body: ListWidgetsPagesResultsOutput;
}

export interface WidgetsQueryWidgetsPagesDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface WidgetsGetWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface WidgetsGetWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface WidgetsCreateWidget201Response extends HttpResponse {
  status: "201";
  body: WidgetOutput;
}

export interface WidgetsCreateWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

export interface WidgetsCreateOrReplace200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface WidgetsCreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & WidgetsCreateOrReplace200Headers;
}

export interface WidgetsCreateOrReplace201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface WidgetsCreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & WidgetsCreateOrReplace201Headers;
}

export interface WidgetsCreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface WidgetsCreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & WidgetsCreateOrReplaceDefaultHeaders;
}

/** The final response for long-running createOrReplace operation */
export interface WidgetsCreateOrReplaceLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded. */
export interface WidgetsUpdateWidget200Response extends HttpResponse {
  status: "200";
  body: WidgetOutput;
}

export interface WidgetsUpdateWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface WidgetsDeleteWidget204Response extends HttpResponse {
  status: "204";
}

export interface WidgetsDeleteWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

/** The request has succeeded. */
export interface WidgetsAnalyzeWidget200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOutput;
}

export interface WidgetsAnalyzeWidgetDefaultResponse extends HttpResponse {
  status: string;
  body: WidgetErrorOutput;
}

export interface BudgetsCreateOrReplace200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface BudgetsCreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & BudgetsCreateOrReplace200Headers;
}

export interface BudgetsCreateOrReplace201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface BudgetsCreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & BudgetsCreateOrReplace201Headers;
}

export interface BudgetsCreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface BudgetsCreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & BudgetsCreateOrReplaceDefaultHeaders;
}

/** The final response for long-running createOrReplace operation */
export interface BudgetsCreateOrReplaceLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}

export interface BudgetsCreateOrUpdate200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface BudgetsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & BudgetsCreateOrUpdate200Headers;
}

export interface BudgetsCreateOrUpdate201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface BudgetsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & BudgetsCreateOrUpdate201Headers;
}

export interface BudgetsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface BudgetsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & BudgetsCreateOrUpdateDefaultHeaders;
}

/** The final response for long-running createOrUpdate operation */
export interface BudgetsCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}
