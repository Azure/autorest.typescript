// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandbyPoolContext } from "../../api/standbyPoolContext.js";
import {
  StandbyContainerGroupPoolResource,
  StandbyContainerGroupPoolResourceUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  update,
  listByResourceGroup,
  listBySubscription,
} from "../../api/standbyContainerGroupPools/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  StandbyContainerGroupPoolsGetOptionalParams,
  StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  StandbyContainerGroupPoolsDeleteOptionalParams,
  StandbyContainerGroupPoolsUpdateOptionalParams,
  StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface StandbyContainerGroupPoolsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    options?: StandbyContainerGroupPoolsGetOptionalParams,
  ) => Promise<StandbyContainerGroupPoolResource>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    resource: StandbyContainerGroupPoolResource,
    options?: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<StandbyContainerGroupPoolResource>,
    StandbyContainerGroupPoolResource
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    options?: StandbyContainerGroupPoolsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    properties: StandbyContainerGroupPoolResourceUpdate,
    options?: StandbyContainerGroupPoolsUpdateOptionalParams,
  ) => Promise<StandbyContainerGroupPoolResource>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyContainerGroupPoolResource>;
  listBySubscription: (
    subscriptionId: string,
    options?: StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyContainerGroupPoolResource>;
}

export function getStandbyContainerGroupPools(context: StandbyPoolContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      options?: StandbyContainerGroupPoolsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      resource: StandbyContainerGroupPoolResource,
      options?: StandbyContainerGroupPoolsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      options?: StandbyContainerGroupPoolsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      properties: StandbyContainerGroupPoolResourceUpdate,
      options?: StandbyContainerGroupPoolsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        properties,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: StandbyContainerGroupPoolsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: StandbyContainerGroupPoolsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getStandbyContainerGroupPoolsOperations(
  context: StandbyPoolContext,
): StandbyContainerGroupPoolsOperations {
  return {
    ...getStandbyContainerGroupPools(context),
  };
}
