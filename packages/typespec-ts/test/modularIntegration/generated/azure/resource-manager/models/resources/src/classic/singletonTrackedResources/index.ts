// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SingletonTrackedResourcesGetByResourceGroupOptionalParams,
  SingletonTrackedResourcesCreateOrUpdateOptionalParams,
  SingletonTrackedResourcesUpdateOptionalParams,
  SingletonTrackedResourcesListByResourceGroupOptionalParams,
} from "../../api/options.js";
import { ResourcesContext } from "../../api/resourcesContext.js";
import {
  singletonTrackedResourcesGetByResourceGroup,
  singletonTrackedResourcesCreateOrUpdate,
  singletonTrackedResourcesUpdate,
  singletonTrackedResourcesListByResourceGroup,
} from "../../api/singletonTrackedResources/index.js";
import { SingletonTrackedResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SingletonTrackedResources operations. */
export interface SingletonTrackedResourcesOperations {
  /** Get a SingletonTrackedResource */
  getByResourceGroup: (
    resourceGroupName: string,
    options?: SingletonTrackedResourcesGetByResourceGroupOptionalParams,
  ) => Promise<SingletonTrackedResource>;
  /** Create a SingletonTrackedResource */
  createOrUpdate: (
    resourceGroupName: string,
    resource: SingletonTrackedResource,
    options?: SingletonTrackedResourcesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<SingletonTrackedResource>,
    SingletonTrackedResource
  >;
  /** Update a SingletonTrackedResource */
  update: (
    resourceGroupName: string,
    properties: SingletonTrackedResource,
    options?: SingletonTrackedResourcesUpdateOptionalParams,
  ) => Promise<SingletonTrackedResource>;
  /** List SingletonTrackedResource resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SingletonTrackedResourcesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SingletonTrackedResource>;
}

export function getSingletonTrackedResources(
  context: ResourcesContext,
  subscriptionId: string,
) {
  return {
    getByResourceGroup: (
      resourceGroupName: string,
      options?: SingletonTrackedResourcesGetByResourceGroupOptionalParams,
    ) =>
      singletonTrackedResourcesGetByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      resource: SingletonTrackedResource,
      options?: SingletonTrackedResourcesCreateOrUpdateOptionalParams,
    ) =>
      singletonTrackedResourcesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      properties: SingletonTrackedResource,
      options?: SingletonTrackedResourcesUpdateOptionalParams,
    ) =>
      singletonTrackedResourcesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        properties,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SingletonTrackedResourcesListByResourceGroupOptionalParams,
    ) =>
      singletonTrackedResourcesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
  };
}

export function getSingletonTrackedResourcesOperations(
  context: ResourcesContext,
  subscriptionId: string,
): SingletonTrackedResourcesOperations {
  return {
    ...getSingletonTrackedResources(context, subscriptionId),
  };
}
