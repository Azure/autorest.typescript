// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface UnivariateDetectUnivariateEntireSeriesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface UnivariateDetectUnivariateLastPointOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface UnivariateDetectUnivariateChangePointOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateGetMultivariateBatchDetectionResultOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateTrainMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateListMultivariateModelsOptionalParams
  extends OperationOptions {
  /** Skip indicates how many models will be skipped. */
  skip?: number;
  /** Top indicates how many models will be fetched. */
  top?: number;
}

/** Optional parameters. */
export interface MultivariateDeleteMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateGetMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateDetectMultivariateBatchAnomalyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateDetectMultivariateLastAnomalyOptionalParams
  extends OperationOptions {}
