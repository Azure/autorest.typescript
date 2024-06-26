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
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams,
  ) => Promise<VmmServer>;
  createOrUpdate: (
    resourceGroupName: string,
    vmmServerName: string,
    resource: VmmServer,
    options?: VmmServersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  update: (
    resourceGroupName: string,
    vmmServerName: string,
    properties: VmmServerTagsUpdate,
    options?: VmmServersUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
  listBySubscription: (
    options?: VmmServersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
}

export function getVmmServers(context: ScVmmContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersGetOptionalParams,
    ) =>
      get(context, subscriptionId, resourceGroupName, vmmServerName, options),
    createOrUpdate: (
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
      resourceGroupName: string,
      options?: VmmServersListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      options?: VmmServersListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVmmServersOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VmmServersOperations {
  return {
    ...getVmmServers(context, subscriptionId),
  };
}
