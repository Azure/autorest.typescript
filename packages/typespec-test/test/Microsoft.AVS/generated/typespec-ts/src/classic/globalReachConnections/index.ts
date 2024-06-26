// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { GlobalReachConnection } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/globalReachConnections/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GlobalReachConnectionsListByPrivateCloudOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
} from "../../models/options.js";

export interface GlobalReachConnectionsOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: GlobalReachConnectionsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<GlobalReachConnection>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsGetOptionalParams,
  ) => Promise<GlobalReachConnection>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    globalReachConnection: GlobalReachConnection,
    options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getGlobalReachConnections(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: GlobalReachConnectionsListByPrivateCloudOptionalParams,
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
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      globalReachConnection: GlobalReachConnection,
      options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        globalReachConnection,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
  };
}

export function getGlobalReachConnectionsOperations(
  context: AVSContext,
): GlobalReachConnectionsOperations {
  return {
    ...getGlobalReachConnections(context),
  };
}
