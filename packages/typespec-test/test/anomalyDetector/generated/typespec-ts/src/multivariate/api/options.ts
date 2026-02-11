// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface DetectMultivariateLastAnomalyOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DetectMultivariateBatchAnomalyOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetMultivariateModelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteMultivariateModelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListMultivariateModelsOptionalParams extends OperationOptions {
  /** Skip indicates how many models will be skipped. */
  skip?: number;
  /** Top indicates how many models will be fetched. */
  top?: number;
}

/** Optional parameters. */
export interface TrainMultivariateModelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetMultivariateBatchDetectionResultOptionalParams extends OperationOptions {}
