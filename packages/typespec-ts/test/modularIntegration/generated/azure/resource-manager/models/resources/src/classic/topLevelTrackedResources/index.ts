// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  TopLevelTrackedResourcesActionSyncOptionalParams,
} from "../../api/options.js";
import { ResourcesContext } from "../../api/resourcesContext.js";
import {
  topLevelTrackedResourcesGet,
  topLevelTrackedResourcesCreateOrReplace,
  topLevelTrackedResourcesUpdate,
  topLevelTrackedResourcesDelete,
  topLevelTrackedResourcesListByResourceGroup,
  topLevelTrackedResourcesListBySubscription,
  topLevelTrackedResourcesActionSync,
} from "../../api/topLevelTrackedResources/index.js";
import {
  TopLevelTrackedResource,
  NotificationDetails,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a TopLevelTrackedResources operations. */
export interface TopLevelTrackedResourcesOperations {
  /** Get a TopLevelTrackedResource */
  get: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    options?: TopLevelTrackedResourcesGetOptionalParams,
  ) => Promise<TopLevelTrackedResource>;
  /** Create a TopLevelTrackedResource */
  createOrReplace: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    resource: TopLevelTrackedResource,
    options?: TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  ) => PollerLike<
    OperationState<TopLevelTrackedResource>,
    TopLevelTrackedResource
  >;
  /** Update a TopLevelTrackedResource */
  update: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    properties: TopLevelTrackedResource,
    options?: TopLevelTrackedResourcesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<TopLevelTrackedResource>,
    TopLevelTrackedResource
  >;
  /** Delete a TopLevelTrackedResource */
  delete: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    options?: TopLevelTrackedResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List TopLevelTrackedResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
  /** List TopLevelTrackedResource resources by subscription ID */
  listBySubscription: (
    options?: TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<TopLevelTrackedResource>;
  /** A synchronous resource action that returns no content. */
  actionSync: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    body: NotificationDetails,
    options?: TopLevelTrackedResourcesActionSyncOptionalParams,
  ) => Promise<void>;
}

export function getTopLevelTrackedResources(
  context: ResourcesContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      options?: TopLevelTrackedResourcesGetOptionalParams,
    ) =>
      topLevelTrackedResourcesGet(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        options,
      ),
    createOrReplace: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      resource: TopLevelTrackedResource,
      options?: TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
    ) =>
      topLevelTrackedResourcesCreateOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      properties: TopLevelTrackedResource,
      options?: TopLevelTrackedResourcesUpdateOptionalParams,
    ) =>
      topLevelTrackedResourcesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      options?: TopLevelTrackedResourcesDeleteOptionalParams,
    ) =>
      topLevelTrackedResourcesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: TopLevelTrackedResourcesListByResourceGroupOptionalParams,
    ) =>
      topLevelTrackedResourcesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: TopLevelTrackedResourcesListBySubscriptionOptionalParams,
    ) =>
      topLevelTrackedResourcesListBySubscription(
        context,
        subscriptionId,
        options,
      ),
    actionSync: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      body: NotificationDetails,
      options?: TopLevelTrackedResourcesActionSyncOptionalParams,
    ) =>
      topLevelTrackedResourcesActionSync(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        body,
        options,
      ),
  };
}

export function getTopLevelTrackedResourcesOperations(
  context: ResourcesContext,
  subscriptionId: string,
): TopLevelTrackedResourcesOperations {
  return {
    ...getTopLevelTrackedResources(context, subscriptionId),
  };
}
