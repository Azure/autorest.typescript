// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ResourcesContext } from "../../api/resourcesContext.js";
import { NestedProxyResource } from "../../models/models.js";
import {
  nestedProxyResourcesGet,
  nestedProxyResourcesCreateOrReplace,
  nestedProxyResourcesUpdate,
  nestedProxyResourcesDelete,
  nestedProxyResourcesListByParent,
} from "../../api/nestedProxyResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByParentOptionalParams,
} from "../../models/options.js";

/** Interface representing a NestedProxyResources operations. */
export interface NestedProxyResourcesOperations {
  /** Get a NestedProxyResource */
  get: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    nextedProxyResourceName: string,
    options?: NestedProxyResourcesGetOptionalParams,
  ) => Promise<NestedProxyResource>;
  /** Create a NestedProxyResource */
  createOrReplace: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    nextedProxyResourceName: string,
    resource: NestedProxyResource,
    options?: NestedProxyResourcesCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
  /** Update a NestedProxyResource */
  update: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    nextedProxyResourceName: string,
    properties: NestedProxyResource,
    options?: NestedProxyResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
  /** Delete a NestedProxyResource */
  delete: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    nextedProxyResourceName: string,
    options?: NestedProxyResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List NestedProxyResource resources by TopLevelTrackedResource */
  listByParent: (
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    options?: NestedProxyResourcesListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<NestedProxyResource>;
}

export function getNestedProxyResources(
  context: ResourcesContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      nextedProxyResourceName: string,
      options?: NestedProxyResourcesGetOptionalParams,
    ) =>
      nestedProxyResourcesGet(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        options,
      ),
    createOrReplace: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      nextedProxyResourceName: string,
      resource: NestedProxyResource,
      options?: NestedProxyResourcesCreateOrReplaceOptionalParams,
    ) =>
      nestedProxyResourcesCreateOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      nextedProxyResourceName: string,
      properties: NestedProxyResource,
      options?: NestedProxyResourcesUpdateOptionalParams,
    ) =>
      nestedProxyResourcesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      nextedProxyResourceName: string,
      options?: NestedProxyResourcesDeleteOptionalParams,
    ) =>
      nestedProxyResourcesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        nextedProxyResourceName,
        options,
      ),
    listByParent: (
      resourceGroupName: string,
      topLevelTrackedResourceName: string,
      options?: NestedProxyResourcesListByParentOptionalParams,
    ) =>
      nestedProxyResourcesListByParent(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        options,
      ),
  };
}

export function getNestedProxyResourcesOperations(
  context: ResourcesContext,
  subscriptionId: string,
): NestedProxyResourcesOperations {
  return {
    ...getNestedProxyResources(context, subscriptionId),
  };
}
