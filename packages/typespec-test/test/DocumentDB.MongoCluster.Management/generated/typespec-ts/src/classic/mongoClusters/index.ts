// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentDBContext } from "../../api/documentDBContext.js";
import {
  MongoCluster,
  MongoClusterUpdate,
  ListConnectionStringsResult,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
} from "../../models/models.js";
import {
  mongoClustersGet,
  mongoClustersCreateOrUpdate,
  mongoClustersUpdate,
  mongoClustersDelete,
  mongoClustersListByResourceGroup,
  mongoClustersList,
  mongoClustersListConnectionStrings,
  mongoClustersCheckNameAvailability,
} from "../../api/mongoClusters/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  MongoClustersGetOptionalParams,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersUpdateOptionalParams,
  MongoClustersDeleteOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  MongoClustersListOptionalParams,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersCheckNameAvailabilityOptionalParams,
} from "../../models/options.js";

export interface MongoClustersOperations {
  get: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersGetOptionalParams,
  ) => Promise<MongoCluster>;
  createOrUpdate: (
    resourceGroupName: string,
    mongoClusterName: string,
    resource: MongoCluster,
    options?: MongoClustersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<MongoCluster>, MongoCluster>;
  update: (
    resourceGroupName: string,
    mongoClusterName: string,
    properties: MongoClusterUpdate,
    options?: MongoClustersUpdateOptionalParams,
  ) => PollerLike<OperationState<MongoCluster>, MongoCluster>;
  delete: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    resourceGroupName: string,
    options?: MongoClustersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<MongoCluster>;
  list: (
    options?: MongoClustersListOptionalParams,
  ) => PagedAsyncIterableIterator<MongoCluster>;
  listConnectionStrings: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersListConnectionStringsOptionalParams,
  ) => Promise<ListConnectionStringsResult>;
  checkNameAvailability: (
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: MongoClustersCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
}

export function getMongoClusters(
  context: DocumentDBContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: MongoClustersGetOptionalParams,
    ) =>
      mongoClustersGet(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      mongoClusterName: string,
      resource: MongoCluster,
      options?: MongoClustersCreateOrUpdateOptionalParams,
    ) =>
      mongoClustersCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      mongoClusterName: string,
      properties: MongoClusterUpdate,
      options?: MongoClustersUpdateOptionalParams,
    ) =>
      mongoClustersUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: MongoClustersDeleteOptionalParams,
    ) =>
      mongoClustersDelete(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: MongoClustersListByResourceGroupOptionalParams,
    ) =>
      mongoClustersListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    list: (options?: MongoClustersListOptionalParams) =>
      mongoClustersList(context, subscriptionId, options),
    listConnectionStrings: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: MongoClustersListConnectionStringsOptionalParams,
    ) =>
      mongoClustersListConnectionStrings(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    checkNameAvailability: (
      location: string,
      body: CheckNameAvailabilityRequest,
      options?: MongoClustersCheckNameAvailabilityOptionalParams,
    ) =>
      mongoClustersCheckNameAvailability(
        context,
        subscriptionId,
        location,
        body,
        options,
      ),
  };
}

export function getMongoClustersOperations(
  context: DocumentDBContext,
  subscriptionId: string,
): MongoClustersOperations {
  return {
    ...getMongoClusters(context, subscriptionId),
  };
}
