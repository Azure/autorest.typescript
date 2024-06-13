// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { Cloud, CloudTagsUpdate } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/clouds/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudsGetOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface CloudsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsGetOptionalParams,
  ) => Promise<Cloud>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudResourceName: string,
    resource: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudResourceName: string,
    properties: CloudTagsUpdate,
    options?: CloudsUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  listBySubscription: (
    subscriptionId: string,
    options?: CloudsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
}

export function getClouds(context: ScVmmContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudResourceName: string,
      resource: Cloud,
      options?: CloudsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudResourceName: string,
      properties: CloudTagsUpdate,
      options?: CloudsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: CloudsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: CloudsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getCloudsOperations(context: ScVmmContext): CloudsOperations {
  return {
    ...getClouds(context),
  };
}
