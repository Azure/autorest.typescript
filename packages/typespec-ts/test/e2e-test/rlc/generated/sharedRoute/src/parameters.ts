// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { Resource } from "./models.js";

export interface ListByResourceGroupBodyParam {
  body?: Resource;
}

export interface ListByResourceGroupQueryParamProperties {
  filter: "resourceGroup";
}

export interface ListByResourceGroupQueryParam {
  queryParameters: ListByResourceGroupQueryParamProperties;
}

export type ListByResourceGroupParameters = ListByResourceGroupQueryParam &
  ListByResourceGroupBodyParam &
  RequestParameters;

export interface ListBySubscriptionHeaders {
  filter: "subscription";
}

export interface ListBySubscriptionBodyParam {
  body?: Resource;
}

export interface ListBySubscriptionHeaderParam {
  headers: RawHttpHeadersInput & ListBySubscriptionHeaders;
}

export type ListBySubscriptionParameters = ListBySubscriptionHeaderParam &
  ListBySubscriptionBodyParam &
  RequestParameters;

export interface UpdateIntBodyParam {
  body: number;
}

export interface UpdateIntQueryParamProperties {
  options: string;
}

export interface UpdateIntQueryParam {
  queryParameters: UpdateIntQueryParamProperties;
}

export type UpdateIntParameters = UpdateIntQueryParam &
  UpdateIntBodyParam &
  RequestParameters;

export interface UpdateStringBodyParam {
  body: string;
}

export interface UpdateStringQueryParamProperties {
  options: string;
}

export interface UpdateStringQueryParam {
  queryParameters: UpdateStringQueryParamProperties;
}

export type UpdateStringParameters = UpdateStringQueryParam &
  UpdateStringBodyParam &
  RequestParameters;

export interface ReturnsIntBodyParam {
  body?: Resource;
}

export interface ReturnsIntQueryParamProperties {
  options: string;
}

export interface ReturnsIntQueryParam {
  queryParameters: ReturnsIntQueryParamProperties;
}

export type ReturnsIntParameters = ReturnsIntQueryParam &
  ReturnsIntBodyParam &
  RequestParameters;

export interface ReturnsStringBodyParam {
  body?: Resource;
}

export interface ReturnsStringQueryParamProperties {
  options: string;
}

export interface ReturnsStringQueryParam {
  queryParameters: ReturnsStringQueryParamProperties;
}

export type ReturnsStringParameters = ReturnsStringQueryParam &
  ReturnsStringBodyParam &
  RequestParameters;

export interface ProcessIntBodyParam {
  body: number;
}

export interface ProcessIntQueryParamProperties {
  options: string;
}

export interface ProcessIntQueryParam {
  queryParameters: ProcessIntQueryParamProperties;
}

export type ProcessIntParameters = ProcessIntQueryParam &
  ProcessIntBodyParam &
  RequestParameters;

export interface ProcessStringBodyParam {
  body: string;
}

export interface ProcessStringQueryParamProperties {
  options: string;
}

export interface ProcessStringQueryParam {
  queryParameters: ProcessStringQueryParamProperties;
}

export type ProcessStringParameters = ProcessStringQueryParam &
  ProcessStringBodyParam &
  RequestParameters;
