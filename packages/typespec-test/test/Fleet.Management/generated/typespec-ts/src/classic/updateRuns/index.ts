// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { UpdateRun, SkipProperties } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByFleet,
  start,
  stop,
  skip,
} from "../../api/updateRuns/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  UpdateRunsGetOptionalParams,
  UpdateRunsCreateOrUpdateOptionalParams,
  UpdateRunsDeleteOptionalParams,
  UpdateRunsListByFleetOptionalParams,
  UpdateRunsStartOptionalParams,
  UpdateRunsStopOptionalParams,
  UpdateRunsSkipOptionalParams,
} from "../../models/options.js";

export interface UpdateRunsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsGetOptionalParams,
  ) => Promise<UpdateRun>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    resource: UpdateRun,
    options?: UpdateRunsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<UpdateRun>, UpdateRun>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByFleet: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: UpdateRunsListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<UpdateRun>;
  start: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    body: void,
    options?: UpdateRunsStartOptionalParams,
  ) => PollerLike<OperationState<UpdateRun>, UpdateRun>;
  stop: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    body: void,
    options?: UpdateRunsStopOptionalParams,
  ) => PollerLike<OperationState<UpdateRun>, UpdateRun>;
  skip: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    body: SkipProperties,
    options?: UpdateRunsSkipOptionalParams,
  ) => PollerLike<OperationState<UpdateRun>, UpdateRun>;
}

export function getUpdateRuns(context: ContainerServiceContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      resource: UpdateRun,
      options?: UpdateRunsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      options?: UpdateRunsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        options,
      ),
    listByFleet: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: UpdateRunsListByFleetOptionalParams,
    ) =>
      listByFleet(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
    start: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      body: void,
      options?: UpdateRunsStartOptionalParams,
    ) =>
      start(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
    stop: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      body: void,
      options?: UpdateRunsStopOptionalParams,
    ) =>
      stop(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
    skip: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateRunName: string,
      body: SkipProperties,
      options?: UpdateRunsSkipOptionalParams,
    ) =>
      skip(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateRunName,
        body,
        options,
      ),
  };
}

export function getUpdateRunsOperations(
  context: ContainerServiceContext,
): UpdateRunsOperations {
  return {
    ...getUpdateRuns(context),
  };
}
