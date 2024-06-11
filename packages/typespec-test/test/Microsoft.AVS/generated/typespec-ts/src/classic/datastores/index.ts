// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { Datastore } from "../../models/models.js";
import {
  listByCluster,
  get,
  createOrUpdate,
  $delete,
} from "../../api/datastores/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DatastoresListByClusterOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
} from "../../models/options.js";

export interface DatastoresOperations {
  listByCluster: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<Datastore>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresGetOptionalParams,
  ) => Promise<Datastore>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    datastore: Datastore,
    options?: DatastoresCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Datastore>, Datastore>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getDatastores(context: AVSContext) {
  return {
    listByCluster: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: DatastoresListByClusterOptionalParams,
    ) =>
      listByCluster(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      options?: DatastoresGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      datastore: Datastore,
      options?: DatastoresCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        datastore,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      datastoreName: string,
      options?: DatastoresDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      ),
  };
}

export function getDatastoresOperations(
  context: AVSContext,
): DatastoresOperations {
  return {
    ...getDatastores(context),
  };
}
