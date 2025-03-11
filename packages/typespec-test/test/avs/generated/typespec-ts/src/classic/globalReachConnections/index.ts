// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  globalReachConnectionsDelete,
  globalReachConnectionsCreateOrUpdate,
  globalReachConnectionsGet,
  globalReachConnectionsList,
} from "../../api/globalReachConnections/index.js";
import {
  GlobalReachConnectionsDeleteOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsListOptionalParams,
} from "../../api/options.js";
import { GlobalReachConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a GlobalReachConnections operations. */
export interface GlobalReachConnectionsOperations {
  /** Delete a GlobalReachConnection */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a GlobalReachConnection */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    globalReachConnection: GlobalReachConnection,
    options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
  /** Get a GlobalReachConnection */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    globalReachConnectionName: string,
    options?: GlobalReachConnectionsGetOptionalParams,
  ) => Promise<GlobalReachConnection>;
  /** List GlobalReachConnection resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: GlobalReachConnectionsListOptionalParams,
  ) => PagedAsyncIterableIterator<GlobalReachConnection>;
}

function _getGlobalReachConnections(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsDeleteOptionalParams,
    ) =>
      globalReachConnectionsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      globalReachConnection: GlobalReachConnection,
      options?: GlobalReachConnectionsCreateOrUpdateOptionalParams,
    ) =>
      globalReachConnectionsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        globalReachConnection,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      globalReachConnectionName: string,
      options?: GlobalReachConnectionsGetOptionalParams,
    ) =>
      globalReachConnectionsGet(
        context,
        resourceGroupName,
        privateCloudName,
        globalReachConnectionName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: GlobalReachConnectionsListOptionalParams,
    ) =>
      globalReachConnectionsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getGlobalReachConnectionsOperations(
  context: AzureVMwareSolutionAPIContext,
): GlobalReachConnectionsOperations {
  return {
    ..._getGlobalReachConnections(context),
  };
}
