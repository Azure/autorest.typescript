// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VmmServer, VmmServerTagsUpdate } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/vmmServers/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VmmServersGetOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface VmmServersOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams,
  ) => Promise<VmmServer>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
    resource: VmmServer,
    options?: VmmServersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
    properties: VmmServerTagsUpdate,
    options?: VmmServersUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
  listBySubscription: (
    subscriptionId: string,
    options?: VmmServersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
}

export function getVmmServers(context: ScVmmContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersGetOptionalParams,
    ) =>
      get(context, subscriptionId, resourceGroupName, vmmServerName, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      vmmServerName: string,
      resource: VmmServer,
      options?: VmmServersCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      vmmServerName: string,
      properties: VmmServerTagsUpdate,
      options?: VmmServersUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: VmmServersListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: VmmServersListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVmmServersOperations(
  context: ScVmmContext,
): VmmServersOperations {
  return {
    ...getVmmServers(context),
  };
}
