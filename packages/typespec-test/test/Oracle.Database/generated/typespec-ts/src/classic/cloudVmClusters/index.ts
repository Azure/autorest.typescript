// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  PrivateIpAddressProperties,
} from "../../models/models.js";
import {
  listBySubscription,
  createOrUpdate,
  get,
  update,
  $delete,
  listByResourceGroup,
  addVms,
  removeVms,
  listPrivateIpAddresses,
} from "../../api/cloudVmClusters/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudVmClustersListBySubscriptionOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
} from "../../models/options.js";

export interface CloudVmClustersOperations {
  listBySubscription: (
    subscriptionId: string,
    options?: CloudVmClustersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    resource: CloudVmCluster,
    options?: CloudVmClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersGetOptionalParams,
  ) => Promise<CloudVmCluster>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    properties: CloudVmClusterUpdate,
    options?: CloudVmClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: CloudVmClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: CloudVmClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudVmCluster>;
  addVms: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersAddVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  removeVms: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    body: AddRemoveDbNode,
    options?: CloudVmClustersRemoveVmsOptionalParams,
  ) => PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
  listPrivateIpAddresses: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    body: PrivateIpAddressesFilter,
    options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
  ) => Promise<PrivateIpAddressProperties[]>;
}

export function getCloudVmClusters(context: DatabaseContext) {
  return {
    listBySubscription: (
      subscriptionId: string,
      options?: CloudVmClustersListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      resource: CloudVmCluster,
      options?: CloudVmClustersCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        resource,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      properties: CloudVmClusterUpdate,
      options?: CloudVmClustersUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: CloudVmClustersDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: CloudVmClustersListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    addVms: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      body: AddRemoveDbNode,
      options?: CloudVmClustersAddVmsOptionalParams,
    ) =>
      addVms(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
    removeVms: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      body: AddRemoveDbNode,
      options?: CloudVmClustersRemoveVmsOptionalParams,
    ) =>
      removeVms(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
    listPrivateIpAddresses: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      body: PrivateIpAddressesFilter,
      options?: CloudVmClustersListPrivateIpAddressesOptionalParams,
    ) =>
      listPrivateIpAddresses(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        body,
        options,
      ),
  };
}

export function getCloudVmClustersOperations(
  context: DatabaseContext,
): CloudVmClustersOperations {
  return {
    ...getCloudVmClusters(context),
  };
}
