// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureFleetContext } from "../../api/azureFleetContext.js";
import {
  Fleet,
  FleetUpdate,
  VirtualMachineScaleSetListResult,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
  listVirtualMachineScaleSets,
} from "../../api/fleets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetsGetOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsUpdateOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListVirtualMachineScaleSetsOptionalParams,
} from "../../models/options.js";

export interface FleetsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams,
  ) => Promise<Fleet>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleet>, Fleet>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    properties: FleetUpdate,
    options?: FleetsUpdateOptionalParams,
  ) => PollerLike<OperationState<Fleet>, Fleet>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Fleet>;
  listBySubscription: (
    subscriptionId: string,
    options?: FleetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Fleet>;
  listVirtualMachineScaleSets: (
    subscriptionId: string,
    resourceGroupName: string,
    name: string,
    options?: FleetsListVirtualMachineScaleSetsOptionalParams,
  ) => Promise<VirtualMachineScaleSetListResult>;
}

export function getFleets(context: AzureFleetContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, fleetName, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      resource: Fleet,
      options?: FleetsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      properties: FleetUpdate,
      options?: FleetsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsDeleteOptionalParams,
    ) =>
      $delete(context, subscriptionId, resourceGroupName, fleetName, options),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: FleetsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: FleetsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    listVirtualMachineScaleSets: (
      subscriptionId: string,
      resourceGroupName: string,
      name: string,
      options?: FleetsListVirtualMachineScaleSetsOptionalParams,
    ) =>
      listVirtualMachineScaleSets(
        context,
        subscriptionId,
        resourceGroupName,
        name,
        options,
      ),
  };
}

export function getFleetsOperations(
  context: AzureFleetContext,
): FleetsOperations {
  return {
    ...getFleets(context),
  };
}
