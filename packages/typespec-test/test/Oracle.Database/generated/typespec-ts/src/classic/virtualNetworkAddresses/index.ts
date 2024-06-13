// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { VirtualNetworkAddress } from "../../models/models.js";
import {
  createOrUpdate,
  get,
  $delete,
  listByCloudVmCluster,
} from "../../api/virtualNetworkAddresses/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
} from "../../models/options.js";

export interface VirtualNetworkAddressesOperations {
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    resource: VirtualNetworkAddress,
    options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesGetOptionalParams,
  ) => Promise<VirtualNetworkAddress>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByCloudVmCluster: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualNetworkAddress>;
}

export function getVirtualNetworkAddresses(context: DatabaseContext) {
  return {
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      resource: VirtualNetworkAddress,
      options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      virtualnetworkaddressname: string,
      options?: VirtualNetworkAddressesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      ),
    listByCloudVmCluster: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
    ) =>
      listByCloudVmCluster(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
  };
}

export function getVirtualNetworkAddressesOperations(
  context: DatabaseContext,
): VirtualNetworkAddressesOperations {
  return {
    ...getVirtualNetworkAddresses(context),
  };
}
