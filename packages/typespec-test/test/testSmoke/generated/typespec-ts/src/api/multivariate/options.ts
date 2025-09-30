// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface MultivariateDetectMultivariateLastAnomalyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateDetectMultivariateBatchAnomalyOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateGetMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateDeleteMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateListMultivariateModelsOptionalParams
  extends OperationOptions {
  /** The number of result items to skip. */
  skip?: number;
  /** The number of result items to return. */
  top?: number;
}

/** Optional parameters. */
export interface MultivariateTrainMultivariateModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface MultivariateGetMultivariateBatchDetectionResultOptionalParams
  extends OperationOptions {}
