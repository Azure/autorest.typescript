// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createPools, PoolsContext, PoolsOptionalParams } from "./api/index.js";
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
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  removeNodes,
  replacePoolProperties,
  stopPoolResize,
  resizePool,
  evaluatePoolAutoScale,
  enablePoolAutoScale,
  disablePoolAutoScale,
  updatePool,
  getPool,
  poolExists,
  deletePool,
  listPools,
  createPool,
  listPoolUsageMetrics,
} from "./api/operations.js";
import {
  RemoveNodesOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  StopPoolResizeOptionalParams,
  ResizePoolOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  UpdatePoolOptionalParams,
  GetPoolOptionalParams,
  PoolExistsOptionalParams,
  DeletePoolOptionalParams,
  ListPoolsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolUsageMetricsOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { PoolsOptionalParams } from "./api/poolsContext.js";

export class Pools {
  private _client: PoolsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: PoolsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createPools(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * This operation can only run when the allocation state of the Pool is steady.
   * When this operation runs, the allocation state changes from steady to resizing.
   * Each request may remove up to 100 nodes.
   */
  removeNodes(
    poolId: string,
    body: NodeRemoveOptions,
    options: RemoveNodesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return removeNodes(this._client, poolId, body, options);
  }

  /**
   * This fully replaces all the updatable properties of the Pool. For example, if
   * the Pool has a StartTask associated with it and if StartTask is not specified
   * with this request, then the Batch service will remove the existing StartTask.
   */
  replacePoolProperties(
    poolId: string,
    body: BatchPoolReplaceOptions,
    options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replacePoolProperties(this._client, poolId, body, options);
  }

  /**
   * This does not restore the Pool to its previous state before the resize
   * operation: it only stops any further changes being made, and the Pool maintains
   * its current state. After stopping, the Pool stabilizes at the number of Compute
   * Nodes it was at when the stop operation was done. During the stop operation,
   * the Pool allocation state changes first to stopping and then to steady. A
   * resize operation need not be an explicit resize Pool request; this API can also
   * be used to halt the initial sizing of the Pool when it is created.
   */
  stopPoolResize(
    poolId: string,
    options: StopPoolResizeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return stopPoolResize(this._client, poolId, options);
  }

  /**
   * You can only resize a Pool when its allocation state is steady. If the Pool is
   * already resizing, the request fails with status code 409. When you resize a
   * Pool, the Pool's allocation state changes from steady to resizing. You cannot
   * resize Pools which are configured for automatic scaling. If you try to do this,
   * the Batch service returns an error 409. If you resize a Pool downwards, the
   * Batch service chooses which Compute Nodes to remove. To remove specific Compute
   * Nodes, use the Pool remove Compute Nodes API instead.
   */
  resizePool(
    poolId: string,
    body: BatchPoolResizeOptions,
    options: ResizePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return resizePool(this._client, poolId, body, options);
  }

  /**
   * This API is primarily for validating an autoscale formula, as it simply returns
   * the result without applying the formula to the Pool. The Pool must have auto
   * scaling enabled in order to evaluate a formula.
   */
  evaluatePoolAutoScale(
    poolId: string,
    body: BatchPoolEvaluateAutoScaleOptions,
    options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<AutoScaleRun> {
    return evaluatePoolAutoScale(this._client, poolId, body, options);
  }

  /**
   * You cannot enable automatic scaling on a Pool if a resize operation is in
   * progress on the Pool. If automatic scaling of the Pool is currently disabled,
   * you must specify a valid autoscale formula as part of the request. If automatic
   * scaling of the Pool is already enabled, you may specify a new autoscale formula
   * and/or a new evaluation interval. You cannot call this API for the same Pool
   * more than once every 30 seconds.
   */
  enablePoolAutoScale(
    poolId: string,
    body: BatchPoolEnableAutoScaleOptions,
    options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enablePoolAutoScale(this._client, poolId, body, options);
  }

  /** Disables automatic scaling for a Pool. */
  disablePoolAutoScale(
    poolId: string,
    options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disablePoolAutoScale(this._client, poolId, options);
  }

  /**
   * This only replaces the Pool properties specified in the request. For example,
   * if the Pool has a StartTask associated with it, and a request does not specify
   * a StartTask element, then the Pool keeps the existing StartTask.
   */
  updatePool(
    poolId: string,
    body: BatchPoolUpdateOptions,
    options: UpdatePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updatePool(this._client, poolId, body, options);
  }

  /** Gets information about the specified Pool. */
  getPool(
    poolId: string,
    options: GetPoolOptionalParams = { requestOptions: {} },
  ): Promise<BatchPool> {
    return getPool(this._client, poolId, options);
  }

  /** Gets basic properties of a Pool. */
  poolExists(
    poolId: string,
    options: PoolExistsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return poolExists(this._client, poolId, options);
  }

  /**
   * When you request that a Pool be deleted, the following actions occur: the Pool
   * state is set to deleting; any ongoing resize operation on the Pool are stopped;
   * the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks
   * running on existing Compute Nodes are terminated and requeued (as if a resize
   * Pool operation had been requested with the default requeue option); finally,
   * the Pool is removed from the system. Because running Tasks are requeued, the
   * user can rerun these Tasks by updating their Job to target a different Pool.
   * The Tasks can then run on the new Pool. If you want to override the requeue
   * behavior, then you should call resize Pool explicitly to shrink the Pool to
   * zero size before deleting the Pool. If you call an Update, Patch or Delete API
   * on a Pool in the deleting state, it will fail with HTTP status code 409 with
   * error code PoolBeingDeleted.
   */
  deletePool(
    poolId: string,
    options: DeletePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deletePool(this._client, poolId, options);
  }

  /** Lists all of the Pools in the specified Account. */
  listPools(
    options: ListPoolsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchPool> {
    return listPools(this._client, options);
  }

  /**
   * When naming Pools, avoid including sensitive information such as user names or
   * secret project names. This information may appear in telemetry logs accessible
   * to Microsoft Support engineers.
   */
  createPool(
    body: BatchPoolCreateOptions,
    options: CreatePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createPool(this._client, body, options);
  }

  /**
   * If you do not specify a $filter clause including a poolId, the response
   * includes all Pools that existed in the Account in the time range of the
   * returned aggregation intervals. If you do not specify a $filter clause
   * including a startTime or endTime these filters default to the start and end
   * times of the last aggregation interval currently available; that is, only the
   * last aggregation interval is returned.
   */
  listPoolUsageMetrics(
    options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<PoolUsageMetrics> {
    return listPoolUsageMetrics(this._client, options);
  }
}
