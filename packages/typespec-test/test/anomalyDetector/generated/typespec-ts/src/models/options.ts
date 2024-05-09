// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface UnivariateDetectUnivariateEntireSeriesOptionalParams
  extends OperationOptions {}

export interface UnivariateDetectUnivariateLastPointOptionalParams
  extends OperationOptions {}

export interface UnivariateDetectUnivariateChangePointOptionalParams
  extends OperationOptions {}

export interface MultivariateGetMultivariateBatchDetectionResultOptionalParams
  extends OperationOptions {}

export interface MultivariateTrainMultivariateModelOptionalParams
  extends OperationOptions {}

export interface MultivariateListMultivariateModelsOptionalParams
  extends OperationOptions {
  /** Skip indicates how many models will be skipped. */
  skip?: number;
  /** Top indicates how many models will be fetched. */
  top?: number;
}

export interface MultivariateDeleteMultivariateModelOptionalParams
  extends OperationOptions {}

export interface MultivariateGetMultivariateModelOptionalParams
  extends OperationOptions {}

export interface MultivariateDetectMultivariateBatchAnomalyOptionalParams
  extends OperationOptions {}

export interface MultivariateDetectMultivariateLastAnomalyOptionalParams
  extends OperationOptions {}
