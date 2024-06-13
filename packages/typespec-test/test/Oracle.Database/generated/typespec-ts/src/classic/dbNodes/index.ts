// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbNode, DbNodeAction } from "../../models/models.js";
import { get, listByCloudVmCluster, action } from "../../api/dbNodes/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DbNodesGetOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesActionOptionalParams,
} from "../../models/options.js";

export interface DbNodesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    options?: DbNodesGetOptionalParams,
  ) => Promise<DbNode>;
  listByCloudVmCluster: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: DbNodesListByCloudVmClusterOptionalParams,
  ) => PagedAsyncIterableIterator<DbNode>;
  action: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
    body: DbNodeAction,
    options?: DbNodesActionOptionalParams,
  ) => PollerLike<OperationState<DbNode>, DbNode>;
}

export function getDbNodes(context: DatabaseContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      options?: DbNodesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        dbnodeocid,
        options,
      ),
    listByCloudVmCluster: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      options?: DbNodesListByCloudVmClusterOptionalParams,
    ) =>
      listByCloudVmCluster(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    action: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudvmclustername: string,
      dbnodeocid: string,
      body: DbNodeAction,
      options?: DbNodesActionOptionalParams,
    ) =>
      action(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        dbnodeocid,
        body,
        options,
      ),
  };
}

export function getDbNodesOperations(
  context: DatabaseContext,
): DbNodesOperations {
  return {
    ...getDbNodes(context),
  };
}
