// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContainerServiceContext } from "../../api/containerServiceContext.js";
import {
  Fleet,
  FleetPatch,
  FleetCredentialResults,
} from "../../models/models.js";
import {
  get,
  create,
  updateAsync,
  $delete,
  listByResourceGroup,
  listBySubscription,
  listCredentials,
} from "../../api/fleets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FleetsGetOptionalParams,
  FleetsCreateOptionalParams,
  FleetsUpdateAsyncOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListCredentialsOptionalParams,
} from "../../models/options.js";

export interface FleetsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams,
  ) => Promise<Fleet>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOptionalParams,
  ) => PollerLike<OperationState<Fleet>, Fleet>;
  updateAsync: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    properties: FleetPatch,
    options?: FleetsUpdateAsyncOptionalParams,
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
  listCredentials: (
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    body: void,
    options?: FleetsListCredentialsOptionalParams,
  ) => Promise<FleetCredentialResults>;
}

export function getFleets(context: ContainerServiceContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      options?: FleetsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, fleetName, options),
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      resource: Fleet,
      options?: FleetsCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        resource,
        options,
      ),
    updateAsync: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      properties: FleetPatch,
      options?: FleetsUpdateAsyncOptionalParams,
    ) =>
      updateAsync(
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
    listCredentials: (
      subscriptionId: string,
      resourceGroupName: string,
      fleetName: string,
      body: void,
      options?: FleetsListCredentialsOptionalParams,
    ) =>
      listCredentials(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        body,
        options,
      ),
  };
}

export function getFleetsOperations(
  context: ContainerServiceContext,
): FleetsOperations {
  return {
    ...getFleets(context),
  };
}
