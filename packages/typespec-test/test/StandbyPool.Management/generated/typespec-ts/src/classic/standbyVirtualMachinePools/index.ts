// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandbyPoolContext } from "../../api/standbyPoolContext.js";
import {
  StandbyVirtualMachinePoolResource,
  StandbyVirtualMachinePoolResourceUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  update,
  listByResourceGroup,
  listBySubscription,
} from "../../api/standbyVirtualMachinePools/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  StandbyVirtualMachinePoolsGetOptionalParams,
  StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  StandbyVirtualMachinePoolsDeleteOptionalParams,
  StandbyVirtualMachinePoolsUpdateOptionalParams,
  StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface StandbyVirtualMachinePoolsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinePoolsGetOptionalParams,
  ) => Promise<StandbyVirtualMachinePoolResource>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    resource: StandbyVirtualMachinePoolResource,
    options?: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<StandbyVirtualMachinePoolResource>,
    StandbyVirtualMachinePoolResource
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    options?: StandbyVirtualMachinePoolsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    properties: StandbyVirtualMachinePoolResourceUpdate,
    options?: StandbyVirtualMachinePoolsUpdateOptionalParams,
  ) => Promise<StandbyVirtualMachinePoolResource>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource>;
  listBySubscription: (
    subscriptionId: string,
    options?: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyVirtualMachinePoolResource>;
}

export function getStandbyVirtualMachinePools(context: StandbyPoolContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinePoolsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      resource: StandbyVirtualMachinePoolResource,
      options?: StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      options?: StandbyVirtualMachinePoolsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      standbyVirtualMachinePoolName: string,
      properties: StandbyVirtualMachinePoolResourceUpdate,
      options?: StandbyVirtualMachinePoolsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        properties,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: StandbyVirtualMachinePoolsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: StandbyVirtualMachinePoolsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getStandbyVirtualMachinePoolsOperations(
  context: StandbyPoolContext,
): StandbyVirtualMachinePoolsOperations {
  return {
    ...getStandbyVirtualMachinePools(context),
  };
}
