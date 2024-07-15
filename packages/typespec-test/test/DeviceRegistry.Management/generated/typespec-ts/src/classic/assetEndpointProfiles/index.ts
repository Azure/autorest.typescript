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

/** Interface representing a AssetEndpointProfiles operations. */
export interface AssetEndpointProfilesOperations {
  /** Get a AssetEndpointProfile */
  get: (
    resourceGroupName: string,
    assetEndpointProfileName: string,
    options?: AssetEndpointProfilesGetOptionalParams,
  ) => Promise<AssetEndpointProfile>;
  /** Create a AssetEndpointProfile */
  createOrReplace: (
    resourceGroupName: string,
    assetEndpointProfileName: string,
    resource: AssetEndpointProfile,
    options?: AssetEndpointProfilesCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
  /** Update a AssetEndpointProfile */
  update: (
    resourceGroupName: string,
    assetEndpointProfileName: string,
    properties: AssetEndpointProfileUpdate,
    options?: AssetEndpointProfilesUpdateOptionalParams,
  ) => PollerLike<OperationState<AssetEndpointProfile>, AssetEndpointProfile>;
  /** Delete a AssetEndpointProfile */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    assetEndpointProfileName: string,
    options?: AssetEndpointProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List AssetEndpointProfile resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AssetEndpointProfilesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AssetEndpointProfile>;
  /** List AssetEndpointProfile resources by subscription ID */
  listBySubscription: (
    options?: AssetEndpointProfilesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<AssetEndpointProfile>;
}

export function getAssetEndpointProfiles(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
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
      resourceGroupName: string,
      options?: AssetEndpointProfilesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      options?: AssetEndpointProfilesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getAssetEndpointProfilesOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): AssetEndpointProfilesOperations {
  return {
    ...getAssetEndpointProfiles(context, subscriptionId),
  };
}
