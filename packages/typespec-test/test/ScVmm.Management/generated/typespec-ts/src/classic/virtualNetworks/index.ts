// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/virtualNetworks/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworksGetOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface VirtualNetworksOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams,
  ) => Promise<VirtualNetwork>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualNetworkName: string,
    resource: VirtualNetwork,
    options?: VirtualNetworksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualNetworkName: string,
    properties: VirtualNetworkTagsUpdate,
    options?: VirtualNetworksUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: VirtualNetworksListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
  listBySubscription: (
    subscriptionId: string,
    options?: VirtualNetworksListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
}

export function getVirtualNetworks(context: ScVmmContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      virtualNetworkName: string,
      resource: VirtualNetwork,
      options?: VirtualNetworksCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      virtualNetworkName: string,
      properties: VirtualNetworkTagsUpdate,
      options?: VirtualNetworksUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: VirtualNetworksListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: VirtualNetworksListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVirtualNetworksOperations(
  context: ScVmmContext,
): VirtualNetworksOperations {
  return {
    ...getVirtualNetworks(context),
  };
}
