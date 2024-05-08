// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { Asset, AssetUpdate } from "../../models/models.js";
import {
  get,
  createOrReplace,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/assets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface AssetsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    assetName: string,
    options?: AssetsGetOptionalParams,
  ) => Promise<Asset>;
  createOrReplace: (
    subscriptionId: string,
    resourceGroupName: string,
    assetName: string,
    resource: Asset,
    options?: AssetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<Asset>, Asset>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    assetName: string,
    properties: AssetUpdate,
    options?: AssetsUpdateOptionalParams,
  ) => PollerLike<OperationState<Asset>, Asset>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    assetName: string,
    options?: AssetsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: AssetsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Asset>;
  listBySubscription: (
    subscriptionId: string,
    options?: AssetsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Asset>;
}

export function getAssets(context: DeviceRegistryContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      assetName: string,
      options?: AssetsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, assetName, options),
    createOrReplace: (
      subscriptionId: string,
      resourceGroupName: string,
      assetName: string,
      resource: Asset,
      options?: AssetsCreateOrReplaceOptionalParams,
    ) =>
      createOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      assetName: string,
      properties: AssetUpdate,
      options?: AssetsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      assetName: string,
      options?: AssetsDeleteOptionalParams,
    ) =>
      $delete(context, subscriptionId, resourceGroupName, assetName, options),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: AssetsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: AssetsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getAssetsOperations(
  context: DeviceRegistryContext,
): AssetsOperations {
  return {
    ...getAssets(context),
  };
}
