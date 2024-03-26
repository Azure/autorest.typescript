// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface UnivariateDetectUnivariateEntireSeriesOptions
  extends OperationOptions {}

export interface UnivariateDetectUnivariateLastPointOptions
  extends OperationOptions {}

export interface UnivariateDetectUnivariateChangePointOptions
  extends OperationOptions {}

export interface MultivariateGetMultivariateBatchDetectionResultOptions
  extends OperationOptions {}

export interface MultivariateTrainMultivariateModelOptions
  extends OperationOptions {}

export interface MultivariateListMultivariateModelsOptions
  extends OperationOptions {
  /** Skip indicates how many models will be skipped. */
  skip?: number;
  /** Top indicates how many models will be fetched. */
  top?: number;
}

export interface MultivariateDeleteMultivariateModelOptions
  extends OperationOptions {}

export interface MultivariateGetMultivariateModelOptions
  extends OperationOptions {}

export interface MultivariateDetectMultivariateBatchAnomalyOptions
  extends OperationOptions {}

export interface MultivariateDetectMultivariateLastAnomalyOptions
  extends OperationOptions {}
