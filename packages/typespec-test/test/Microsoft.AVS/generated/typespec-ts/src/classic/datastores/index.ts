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

/** Interface representing a Datastores operations. */
export interface DatastoresOperations {
  /** List Datastore resources by Cluster */
  listByCluster: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<Datastore>;
  /** Get a Datastore */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresGetOptionalParams,
  ) => Promise<Datastore>;
  /** Create a Datastore */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    datastore: Datastore,
    options?: DatastoresCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Datastore>, Datastore>;
  /** Delete a Datastore */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getDatastores(context: AVSContext, subscriptionId: string) {
  return {
    listByCluster: (
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
  subscriptionId: string,
): DatastoresOperations {
  return {
    ...getDatastores(context, subscriptionId),
  };
}
