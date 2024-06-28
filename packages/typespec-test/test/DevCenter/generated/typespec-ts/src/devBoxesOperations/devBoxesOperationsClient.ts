// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  Pool,
  Schedule,
  DevBox,
  OperationState,
  RemoteConnection,
  DevBoxAction,
  DevBoxActionDelayResult,
} from "./models/models.js";
import {
  ListPoolsOptionalParams,
  GetPoolOptionalParams,
  ListSchedulesOptionalParams,
  GetScheduleOptionalParams,
  ListAllDevBoxesOptionalParams,
  ListAllDevBoxesByUserOptionalParams,
  ListDevBoxesOptionalParams,
  GetDevBoxOptionalParams,
  CreateDevBoxOptionalParams,
  DeleteDevBoxOptionalParams,
  StartDevBoxOptionalParams,
  StopDevBoxOptionalParams,
  RestartDevBoxOptionalParams,
  GetRemoteConnectionOptionalParams,
  ListDevBoxActionsOptionalParams,
  GetDevBoxActionOptionalParams,
  SkipActionOptionalParams,
  DelayActionOptionalParams,
  DelayAllActionsOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createDevBoxesOperations,
  DevBoxesOperationsClientOptions,
  DevCenterServiceContext,
  listPools,
  getPool,
  listSchedules,
  getSchedule,
  listAllDevBoxes,
  listAllDevBoxesByUser,
  listDevBoxes,
  getDevBox,
  createDevBox,
  deleteDevBox,
  startDevBox,
  stopDevBox,
  restartDevBox,
  getRemoteConnection,
  listDevBoxActions,
  getDevBoxAction,
  skipAction,
  delayAction,
  delayAllActions,
} from "./api/index.js";

export { DevBoxesOperationsClientOptions } from "./api/devBoxesOperationsContext.js";

export class DevBoxesOperationsClient {
  private _client: DevCenterServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: DevBoxesOperationsClientOptions = {},
  ) {
    this._client = createDevBoxesOperations(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Lists available pools. */
  listPools(
    projectName: string,
    options: ListPoolsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Pool> {
    return listPools(this._client, projectName, options);
  }

  /** Gets a pool. */
  getPool(
    projectName: string,
    poolName: string,
    options: GetPoolOptionalParams = { requestOptions: {} },
  ): Promise<Pool> {
    return getPool(this._client, projectName, poolName, options);
  }

  /** Lists all schedules within a pool that are configured by your project administrator. */
  listSchedules(
    projectName: string,
    poolName: string,
    options: ListSchedulesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Schedule> {
    return listSchedules(this._client, projectName, poolName, options);
  }

  /** Gets a schedule. */
  getSchedule(
    projectName: string,
    poolName: string,
    scheduleName: string,
    options: GetScheduleOptionalParams = { requestOptions: {} },
  ): Promise<Schedule> {
    return getSchedule(
      this._client,
      projectName,
      poolName,
      scheduleName,
      options,
    );
  }

  /** Lists Dev Boxes that the caller has access to in the DevCenter. */
  listAllDevBoxes(
    options: ListAllDevBoxesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DevBox> {
    return listAllDevBoxes(this._client, options);
  }

  /** Lists Dev Boxes in the Dev Center for a particular user. */
  listAllDevBoxesByUser(
    userId: string,
    options: ListAllDevBoxesByUserOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DevBox> {
    return listAllDevBoxesByUser(this._client, userId, options);
  }

  /** Lists Dev Boxes in the project for a particular user. */
  listDevBoxes(
    projectName: string,
    userId: string,
    options: ListDevBoxesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DevBox> {
    return listDevBoxes(this._client, projectName, userId, options);
  }

  /** Gets a Dev Box. */
  getDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: GetDevBoxOptionalParams = { requestOptions: {} },
  ): Promise<DevBox> {
    return getDevBox(this._client, projectName, userId, devBoxName, options);
  }

  /** Creates or replaces a Dev Box. */
  createDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    body: DevBox,
    options: CreateDevBoxOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<DevBox>, DevBox> {
    return createDevBox(
      this._client,
      projectName,
      userId,
      devBoxName,
      body,
      options,
    );
  }

  /** Deletes a Dev Box. */
  deleteDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: DeleteDevBoxOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return deleteDevBox(this._client, projectName, userId, devBoxName, options);
  }

  /** Starts a Dev Box. */
  startDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: StartDevBoxOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return startDevBox(this._client, projectName, userId, devBoxName, options);
  }

  /** Stops a Dev Box. */
  stopDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: StopDevBoxOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return stopDevBox(this._client, projectName, userId, devBoxName, options);
  }

  /** Restarts a Dev Box. */
  restartDevBox(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: RestartDevBoxOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return restartDevBox(
      this._client,
      projectName,
      userId,
      devBoxName,
      options,
    );
  }

  /** Gets RDP Connection info. */
  getRemoteConnection(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: GetRemoteConnectionOptionalParams = { requestOptions: {} },
  ): Promise<RemoteConnection> {
    return getRemoteConnection(
      this._client,
      projectName,
      userId,
      devBoxName,
      options,
    );
  }

  /** Lists actions on a Dev Box. */
  listDevBoxActions(
    projectName: string,
    userId: string,
    devBoxName: string,
    options: ListDevBoxActionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DevBoxAction> {
    return listDevBoxActions(
      this._client,
      projectName,
      userId,
      devBoxName,
      options,
    );
  }

  /** Gets an action. */
  getDevBoxAction(
    projectName: string,
    userId: string,
    devBoxName: string,
    actionName: string,
    options: GetDevBoxActionOptionalParams = { requestOptions: {} },
  ): Promise<DevBoxAction> {
    return getDevBoxAction(
      this._client,
      projectName,
      userId,
      devBoxName,
      actionName,
      options,
    );
  }

  /** Skips an occurrence of an action. */
  skipAction(
    projectName: string,
    userId: string,
    devBoxName: string,
    actionName: string,
    options: SkipActionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return skipAction(
      this._client,
      projectName,
      userId,
      devBoxName,
      actionName,
      options,
    );
  }

  /** Delays the occurrence of an action. */
  delayAction(
    projectName: string,
    userId: string,
    devBoxName: string,
    actionName: string,
    delayUntil: Date,
    options: DelayActionOptionalParams = { requestOptions: {} },
  ): Promise<DevBoxAction> {
    return delayAction(
      this._client,
      projectName,
      userId,
      devBoxName,
      actionName,
      delayUntil,
      options,
    );
  }

  /** Delays all actions. */
  delayAllActions(
    projectName: string,
    userId: string,
    devBoxName: string,
    delayUntil: Date,
    options: DelayAllActionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DevBoxActionDelayResult> {
    return delayAllActions(
      this._client,
      projectName,
      userId,
      devBoxName,
      delayUntil,
      options,
    );
  }
}
