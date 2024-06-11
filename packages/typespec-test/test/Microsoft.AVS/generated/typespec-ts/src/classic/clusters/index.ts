// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  Cluster,
  ClusterUpdate,
  ClusterZoneList,
} from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  update,
  $delete,
  listZones,
} from "../../api/clusters/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ClustersListByPrivateCloudOptionalParams,
  ClustersGetOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersListZonesOptionalParams,
} from "../../models/options.js";

export interface ClustersOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<Cluster>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ) => Promise<Cluster>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cluster>, Cluster>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    clusterUpdate: ClusterUpdate,
    options?: ClustersUpdateOptionalParams,
  ) => Promise<Cluster>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listZones: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersListZonesOptionalParams,
  ) => Promise<ClusterZoneList>;
}

export function getClusters(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: ClustersListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      cluster: Cluster,
      options?: ClustersCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        cluster,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      clusterUpdate: ClusterUpdate,
      options?: ClustersUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        clusterUpdate,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    listZones: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersListZonesOptionalParams,
    ) =>
      listZones(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
  };
}

export function getClustersOperations(context: AVSContext): ClustersOperations {
  return {
    ...getClusters(context),
  };
}
