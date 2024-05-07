// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import { FleetUpdateStrategy } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByFleet,
} from "../../api/fleetUpdateStrategies/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetUpdateStrategiesGetOptionalParams,
  FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  FleetUpdateStrategiesDeleteOptionalParams,
  FleetUpdateStrategiesListByFleetOptionalParams,
} from "../../models/options.js";

export interface FleetUpdateStrategiesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesGetOptionalParams,
  ) => Promise<FleetUpdateStrategy>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    resource: FleetUpdateStrategy,
    options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FleetUpdateStrategy>, FleetUpdateStrategy>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
    options?: FleetUpdateStrategiesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByFleet: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: FleetUpdateStrategiesListByFleetOptionalParams,
  ) => PagedAsyncIterableIterator<FleetUpdateStrategy>;
}

export function getFleetUpdateStrategies(context: ContainerServiceContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      options?: FleetUpdateStrategiesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      resource: FleetUpdateStrategy,
      options?: FleetUpdateStrategiesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      updateStrategyName: string,
      options?: FleetUpdateStrategiesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        updateStrategyName,
        options,
      ),
    listByFleet: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: FleetUpdateStrategiesListByFleetOptionalParams,
    ) =>
      listByFleet(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
  };
}

export function getFleetUpdateStrategiesOperations(
  context: ContainerServiceContext,
): FleetUpdateStrategiesOperations {
  return {
    ...getFleetUpdateStrategies(context),
  };
}
