// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
} from "../../models/models.js";
import {
  VirtualNetworksListBySubscriptionOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksGetOptionalParams,
} from "../../api/virtualNetworks/options.js";
import {
  virtualNetworksListBySubscription,
  virtualNetworksListByResourceGroup,
  virtualNetworksDelete,
  virtualNetworksUpdate,
  virtualNetworksCreateOrUpdate,
  virtualNetworksGet,
} from "../../api/virtualNetworks/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualNetworks operations. */
export interface VirtualNetworksOperations {
  /** List of VirtualNetworks in a subscription. */
  listBySubscription: (
    options?: VirtualNetworksListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
  /** List of VirtualNetworks in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualNetworksListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetwork>;
  /** Deregisters the ScVmm virtual network from Azure. */
  delete: (
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the VirtualNetworks resource. */
  update: (
    resourceGroupName: string,
    virtualNetworkName: string,
    properties: VirtualNetworkTagsUpdate,
    options?: VirtualNetworksUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  /** Onboards the ScVmm virtual network as an Azure virtual network resource. */
  createOrUpdate: (
    resourceGroupName: string,
    virtualNetworkName: string,
    resource: VirtualNetwork,
    options?: VirtualNetworksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
  /** Implements VirtualNetwork GET method. */
  get: (
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: VirtualNetworksGetOptionalParams,
  ) => Promise<VirtualNetwork>;
}

function _getVirtualNetworks(context: ScVmmContext) {
  return {
    listBySubscription: (
      options?: VirtualNetworksListBySubscriptionOptionalParams,
    ) => virtualNetworksListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VirtualNetworksListByResourceGroupOptionalParams,
    ) =>
      virtualNetworksListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksDeleteOptionalParams,
    ) =>
      virtualNetworksDelete(
        context,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
    update: (
      resourceGroupName: string,
      virtualNetworkName: string,
      properties: VirtualNetworkTagsUpdate,
      options?: VirtualNetworksUpdateOptionalParams,
    ) =>
      virtualNetworksUpdate(
        context,
        resourceGroupName,
        virtualNetworkName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      virtualNetworkName: string,
      resource: VirtualNetwork,
      options?: VirtualNetworksCreateOrUpdateOptionalParams,
    ) =>
      virtualNetworksCreateOrUpdate(
        context,
        resourceGroupName,
        virtualNetworkName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      virtualNetworkName: string,
      options?: VirtualNetworksGetOptionalParams,
    ) =>
      virtualNetworksGet(
        context,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
  };
}

export function _getVirtualNetworksOperations(
  context: ScVmmContext,
): VirtualNetworksOperations {
  return {
    ..._getVirtualNetworks(context),
  };
}
