// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Widget } from "./models";

export interface GetWidgetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetWidgetQueryParam {
  queryParameters: GetWidgetQueryParamProperties;
}

export type GetWidgetParameters = GetWidgetQueryParam & RequestParameters;

export interface GetWidgetOperationStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetWidgetOperationStatusQueryParam {
  queryParameters: GetWidgetOperationStatusQueryParamProperties;
}

export type GetWidgetOperationStatusParameters =
  GetWidgetOperationStatusQueryParam & RequestParameters;
/** The resource instance. */
export type WidgetResourceMergeAndPatch = Partial<Widget>;

export interface CreateOrUpdateWidgetBodyParam {
  /** The resource instance. */
  body: WidgetResourceMergeAndPatch;
}

export interface CreateOrUpdateWidgetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface CreateOrUpdateWidgetQueryParam {
  queryParameters: CreateOrUpdateWidgetQueryParamProperties;
}

export interface CreateOrUpdateWidgetMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateWidgetParameters = CreateOrUpdateWidgetQueryParam &
  CreateOrUpdateWidgetMediaTypesParam &
  CreateOrUpdateWidgetBodyParam &
  RequestParameters;

export interface DeleteWidgetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeleteWidgetQueryParam {
  queryParameters: DeleteWidgetQueryParamProperties;
}

export type DeleteWidgetParameters = DeleteWidgetQueryParam & RequestParameters;

export interface ListWidgetsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ListWidgetsQueryParam {
  queryParameters: ListWidgetsQueryParamProperties;
}

export type ListWidgetsParameters = ListWidgetsQueryParam & RequestParameters;
