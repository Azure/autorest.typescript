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
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams,
  ) => Promise<VirtualNetwork>;
  createOrUpdate: (
    resourceGroupName: string,
    virtualNetworkName: string,
    resource: VirtualNetwork,
    options?: VirtualNetworksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  update: (
    resourceGroupName: string,
    virtualNetworkName: string,
    properties: VirtualNetworkTagsUpdate,
    options?: VirtualNetworksUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  delete: (
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualNetworksListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
  listBySubscription: (
    options?: VirtualNetworksListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
}

export function getVirtualNetworks(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
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
      resourceGroupName: string,
      options?: VirtualNetworksListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      options?: VirtualNetworksListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVirtualNetworksOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VirtualNetworksOperations {
  return {
    ...getVirtualNetworks(context, subscriptionId),
  };
}
