// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  clustersListZones,
  clustersDelete,
  clustersUpdate,
  clustersCreateOrUpdate,
  clustersGet,
  clustersList,
} from "../../api/clusters/index.js";
import {
  ClustersListZonesOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersGetOptionalParams,
  ClustersListOptionalParams,
} from "../../api/options.js";
import {
  Cluster,
  ClusterUpdate,
  ClusterZoneList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Clusters operations. */
export interface ClustersOperations {
  /** List hosts by zone in a cluster */
  listZones: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersListZonesOptionalParams,
  ) => Promise<ClusterZoneList>;
  /** Delete a Cluster */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a Cluster */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    clusterUpdate: ClusterUpdate,
    options?: ClustersUpdateOptionalParams,
  ) => Promise<Cluster>;
  /** Create a Cluster */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cluster>, Cluster>;
  /** Get a Cluster */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ) => Promise<Cluster>;
  /** List Cluster resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
  ) => PagedAsyncIterableIterator<Cluster>;
}

function _getClusters(context: AzureVMwareSolutionAPIContext) {
  return {
    listZones: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersListZonesOptionalParams,
    ) =>
      clustersListZones(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersDeleteOptionalParams,
    ) =>
      clustersDelete(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      clusterUpdate: ClusterUpdate,
      options?: ClustersUpdateOptionalParams,
    ) =>
      clustersUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        clusterUpdate,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      cluster: Cluster,
      options?: ClustersCreateOrUpdateOptionalParams,
    ) =>
      clustersCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        cluster,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: ClustersGetOptionalParams,
    ) =>
      clustersGet(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ClustersListOptionalParams,
    ) => clustersList(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getClustersOperations(
  context: AzureVMwareSolutionAPIContext,
): ClustersOperations {
  return {
    ..._getClusters(context),
  };
}
