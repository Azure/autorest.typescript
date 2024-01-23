// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { CreateWidget, User, UpdateWidget } from "./models.js";

export interface ListWidgetsHeaders {
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

export interface ListWidgetsHeaderParam {
  headers: RawHttpHeadersInput & ListWidgetsHeaders;
}

export type ListWidgetsParameters = ListWidgetsHeaderParam & RequestParameters;

export interface ListWidgetsPagesQueryParamProperties {
  page: number;
  pageSize: number;
}

export interface ListWidgetsPagesQueryParam {
  queryParameters: ListWidgetsPagesQueryParamProperties;
}

export type ListWidgetsPagesParameters = ListWidgetsPagesQueryParam &
  RequestParameters;

export interface QueryWidgetsPagesQueryParamProperties {
  page: number;
  pageSize: number;
}

export interface QueryWidgetsPagesQueryParam {
  queryParameters: QueryWidgetsPagesQueryParamProperties;
}

export type QueryWidgetsPagesParameters = QueryWidgetsPagesQueryParam &
  RequestParameters;
export type GetWidgetParameters = RequestParameters;

export interface CreateWidgetBodyParam {
  body?: CreateWidget;
}

export type CreateWidgetParameters = CreateWidgetBodyParam & RequestParameters;

export interface CreateOrReplaceBodyParam {
  /** The resource instance. */
  body: User;
}

export type CreateOrReplaceParameters = CreateOrReplaceBodyParam &
  RequestParameters;

export interface UpdateWidgetBodyParam {
  body?: UpdateWidget;
}

export type UpdateWidgetParameters = UpdateWidgetBodyParam & RequestParameters;
export type DeleteWidgetParameters = RequestParameters;
export type AnalyzeWidgetParameters = RequestParameters;
