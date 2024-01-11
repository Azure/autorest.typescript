// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { ModelInfo, DetectionRequest, LastDetectionRequest } from "./models";

export type GetMultivariateBatchDetectionResultParameters = RequestParameters;

export interface CreateAndTrainMultivariateModelBodyParam {
  /** Training request */
  body: ModelInfo;
}

export interface CreateAndTrainMultivariateModelMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type CreateAndTrainMultivariateModelParameters =
  CreateAndTrainMultivariateModelMediaTypesParam &
    CreateAndTrainMultivariateModelBodyParam &
    RequestParameters;

export interface ListMultivariateModelsQueryParamProperties {
  /** Skip indicates how many models will be skipped. */
  skip?: number;
  /** Top indicates how many models will be fetched. */
  top?: number;
}

export interface ListMultivariateModelsQueryParam {
  queryParameters?: ListMultivariateModelsQueryParamProperties;
}

export type ListMultivariateModelsParameters =
  ListMultivariateModelsQueryParam & RequestParameters;
export type DeleteMultivariateModelParameters = RequestParameters;
export type GetMultivariateModelParameters = RequestParameters;

export interface DetectMultivariateBatchAnomalyBodyParam {
  /** Detect anomaly request */
  body: DetectionRequest;
}

export interface DetectMultivariateBatchAnomalyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DetectMultivariateBatchAnomalyParameters =
  DetectMultivariateBatchAnomalyMediaTypesParam &
    DetectMultivariateBatchAnomalyBodyParam &
    RequestParameters;

export interface DetectMultivariateLastAnomalyBodyParam {
  /** Request for last detection */
  body: LastDetectionRequest;
}

export interface DetectMultivariateLastAnomalyMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DetectMultivariateLastAnomalyParameters =
  DetectMultivariateLastAnomalyMediaTypesParam &
    DetectMultivariateLastAnomalyBodyParam &
    RequestParameters;
