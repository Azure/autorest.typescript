// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import {
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  BatchPool,
  AutoScaleRun,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
} from "../../models/models.js";
import {
  listPoolUsageMetrics,
  createPool,
  listPools,
  deletePool,
  poolExists,
  getPool,
  updatePool,
  disablePoolAutoScale,
  enablePoolAutoScale,
  evaluatePoolAutoScale,
  resizePool,
  stopPoolResize,
  replacePoolProperties,
  removeNodes,
} from "../../api/pools/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  PoolsListPoolUsageMetricsOptions,
  PoolsCreatePoolOptions,
  PoolsListPoolsOptions,
  PoolsDeletePoolOptions,
  PoolsPoolExistsOptions,
  PoolsGetPoolOptions,
  PoolsUpdatePoolOptions,
  PoolsDisablePoolAutoScaleOptions,
  PoolsEnablePoolAutoScaleOptions,
  PoolsEvaluatePoolAutoScaleOptions,
  PoolsResizePoolOptions,
  PoolsStopPoolResizeOptions,
  PoolsReplacePoolPropertiesOptions,
  PoolsRemoveNodesOptions,
} from "../../models/options.js";

export interface PoolsOperations {
  listPoolUsageMetrics: (
    options?: PoolsListPoolUsageMetricsOptions,
  ) => PagedAsyncIterableIterator<PoolUsageMetrics>;
  createPool: (
    body: BatchPoolCreateOptions,
    options?: PoolsCreatePoolOptions,
  ) => Promise<void>;
  listPools: (
    options?: PoolsListPoolsOptions,
  ) => PagedAsyncIterableIterator<BatchPool>;
  deletePool: (
    poolId: string,
    options?: PoolsDeletePoolOptions,
  ) => Promise<void>;
  poolExists: (
    poolId: string,
    options?: PoolsPoolExistsOptions,
  ) => Promise<void>;
  getPool: (
    poolId: string,
    options?: PoolsGetPoolOptions,
  ) => Promise<BatchPool>;
  updatePool: (
    poolId: string,
    body: BatchPoolUpdateOptions,
    options?: PoolsUpdatePoolOptions,
  ) => Promise<void>;
  disablePoolAutoScale: (
    poolId: string,
    options?: PoolsDisablePoolAutoScaleOptions,
  ) => Promise<void>;
  enablePoolAutoScale: (
    poolId: string,
    body: BatchPoolEnableAutoScaleOptions,
    options?: PoolsEnablePoolAutoScaleOptions,
  ) => Promise<void>;
  evaluatePoolAutoScale: (
    poolId: string,
    body: BatchPoolEvaluateAutoScaleOptions,
    options?: PoolsEvaluatePoolAutoScaleOptions,
  ) => Promise<AutoScaleRun>;
  resizePool: (
    poolId: string,
    body: BatchPoolResizeOptions,
    options?: PoolsResizePoolOptions,
  ) => Promise<void>;
  stopPoolResize: (
    poolId: string,
    options?: PoolsStopPoolResizeOptions,
  ) => Promise<void>;
  replacePoolProperties: (
    poolId: string,
    body: BatchPoolReplaceOptions,
    options?: PoolsReplacePoolPropertiesOptions,
  ) => Promise<void>;
  removeNodes: (
    poolId: string,
    body: NodeRemoveOptions,
    options?: PoolsRemoveNodesOptions,
  ) => Promise<void>;
}

export function getPools(context: BatchContext) {
  return {
    listPoolUsageMetrics: (options?: PoolsListPoolUsageMetricsOptions) =>
      listPoolUsageMetrics(context, options),
    createPool: (
      body: BatchPoolCreateOptions,
      options?: PoolsCreatePoolOptions,
    ) => createPool(context, body, options),
    listPools: (options?: PoolsListPoolsOptions) => listPools(context, options),
    deletePool: (poolId: string, options?: PoolsDeletePoolOptions) =>
      deletePool(context, poolId, options),
    poolExists: (poolId: string, options?: PoolsPoolExistsOptions) =>
      poolExists(context, poolId, options),
    getPool: (poolId: string, options?: PoolsGetPoolOptions) =>
      getPool(context, poolId, options),
    updatePool: (
      poolId: string,
      body: BatchPoolUpdateOptions,
      options?: PoolsUpdatePoolOptions,
    ) => updatePool(context, poolId, body, options),
    disablePoolAutoScale: (
      poolId: string,
      options?: PoolsDisablePoolAutoScaleOptions,
    ) => disablePoolAutoScale(context, poolId, options),
    enablePoolAutoScale: (
      poolId: string,
      body: BatchPoolEnableAutoScaleOptions,
      options?: PoolsEnablePoolAutoScaleOptions,
    ) => enablePoolAutoScale(context, poolId, body, options),
    evaluatePoolAutoScale: (
      poolId: string,
      body: BatchPoolEvaluateAutoScaleOptions,
      options?: PoolsEvaluatePoolAutoScaleOptions,
    ) => evaluatePoolAutoScale(context, poolId, body, options),
    resizePool: (
      poolId: string,
      body: BatchPoolResizeOptions,
      options?: PoolsResizePoolOptions,
    ) => resizePool(context, poolId, body, options),
    stopPoolResize: (poolId: string, options?: PoolsStopPoolResizeOptions) =>
      stopPoolResize(context, poolId, options),
    replacePoolProperties: (
      poolId: string,
      body: BatchPoolReplaceOptions,
      options?: PoolsReplacePoolPropertiesOptions,
    ) => replacePoolProperties(context, poolId, body, options),
    removeNodes: (
      poolId: string,
      body: NodeRemoveOptions,
      options?: PoolsRemoveNodesOptions,
    ) => removeNodes(context, poolId, body, options),
  };
}

export function getPoolsOperations(context: BatchContext): PoolsOperations {
  return {
    ...getPools(context),
  };
}
