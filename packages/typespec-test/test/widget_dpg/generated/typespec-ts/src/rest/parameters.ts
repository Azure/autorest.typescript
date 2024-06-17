// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { CreateWidget, User, UpdateWidget } from "./models.js";

export interface WidgetsListWidgetsHeaders {
  "required-header": string;
  "optional-header"?: string;
  "nullable-optional-header"?: string | null;
  "bytes-header": string;
  value: string;
  /**  This parameter needs to be formatted as csv collection, we provide buildCsvCollection from serializeHelper.ts to help */
  "csv-array-header": string;
  "utc-date-header": string;
  "optional-date-header"?: string;
  "nullable-date-header"?: string | null;
}

export interface WidgetsListWidgetsHeaderParam {
  headers: RawHttpHeadersInput & WidgetsListWidgetsHeaders;
}

export type WidgetsListWidgetsParameters = WidgetsListWidgetsHeaderParam &
  RequestParameters;

export interface WidgetsListWidgetsPagesQueryParamProperties {
  page: number;
  pageSize: number;
}

export interface WidgetsListWidgetsPagesQueryParam {
  queryParameters: WidgetsListWidgetsPagesQueryParamProperties;
}

export type WidgetsListWidgetsPagesParameters =
  WidgetsListWidgetsPagesQueryParam & RequestParameters;

export interface WidgetsQueryWidgetsPagesQueryParamProperties {
  page: number;
  pageSize: number;
}

export interface WidgetsQueryWidgetsPagesQueryParam {
  queryParameters: WidgetsQueryWidgetsPagesQueryParamProperties;
}

export type WidgetsQueryWidgetsPagesParameters =
  WidgetsQueryWidgetsPagesQueryParam & RequestParameters;
export type WidgetsGetWidgetParameters = RequestParameters;

export interface WidgetsCreateWidgetBodyParam {
  body?: CreateWidget;
}

export type WidgetsCreateWidgetParameters = WidgetsCreateWidgetBodyParam &
  RequestParameters;

export interface WidgetsCreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export interface WidgetsCreateOrReplaceQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface WidgetsCreateOrReplaceQueryParam {
  queryParameters: WidgetsCreateOrReplaceQueryParamProperties;
}

export type WidgetsCreateOrReplaceParameters =
  WidgetsCreateOrReplaceQueryParam &
    WidgetsCreateOrReplaceBodyParam &
    RequestParameters;

export interface WidgetsUpdateWidgetBodyParam {
  body?: UpdateWidget;
}

export type WidgetsUpdateWidgetParameters = WidgetsUpdateWidgetBodyParam &
  RequestParameters;
export type WidgetsDeleteWidgetParameters = RequestParameters;
export type WidgetsAnalyzeWidgetParameters = RequestParameters;

export interface BudgetsCreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export interface BudgetsCreateOrReplaceQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface BudgetsCreateOrReplaceQueryParam {
  queryParameters: BudgetsCreateOrReplaceQueryParamProperties;
}

export type BudgetsCreateOrReplaceParameters =
  BudgetsCreateOrReplaceQueryParam &
    BudgetsCreateOrReplaceBodyParam &
    RequestParameters;
