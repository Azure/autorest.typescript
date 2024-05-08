// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import {
  AssetEndpointProfile,
  AssetEndpointProfileUpdate,
} from "../../models/models.js";
import {
  get,
  createOrReplace,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/assetEndpointProfiles/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AssetEndpointProfilesGetOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface AssetEndpointProfilesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    assetEndpointProfileName: string,
    options?: AssetEndpointProfilesGetOptionalParams,
  ) => Promise<AssetEndpointProfile>;
  createOrReplace: (
    subscriptionId: string,
    resourceGroupName: string,
    assetEndpointProfileName: string,
    resource: AssetEndpointProfile,
    options?: AssetEndpointProfilesCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    assetEndpointProfileName: string,
    properties: AssetEndpointProfileUpdate,
    options?: AssetEndpointProfilesUpdateOptionalParams,
  ) => PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    assetEndpointProfileName: string,
    options?: AssetEndpointProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: AssetEndpointProfilesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AssetEndpointProfile>;
  listBySubscription: (
    subscriptionId: string,
    options?: AssetEndpointProfilesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AssetEndpointProfile>;
}

export function getAssetEndpointProfiles(context: DeviceRegistryContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      assetEndpointProfileName: string,
      options?: AssetEndpointProfilesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        options,
      ),
    createOrReplace: (
      subscriptionId: string,
      resourceGroupName: string,
      assetEndpointProfileName: string,
      resource: AssetEndpointProfile,
      options?: AssetEndpointProfilesCreateOrReplaceOptionalParams,
    ) =>
      createOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      assetEndpointProfileName: string,
      properties: AssetEndpointProfileUpdate,
      options?: AssetEndpointProfilesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      assetEndpointProfileName: string,
      options?: AssetEndpointProfilesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        assetEndpointProfileName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: AssetEndpointProfilesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: AssetEndpointProfilesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getAssetEndpointProfilesOperations(
  context: DeviceRegistryContext,
): AssetEndpointProfilesOperations {
  return {
    ...getAssetEndpointProfiles(context),
  };
}
