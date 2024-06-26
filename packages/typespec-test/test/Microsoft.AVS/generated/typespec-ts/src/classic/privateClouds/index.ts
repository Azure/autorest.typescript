// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  PrivateCloud,
  PrivateCloudUpdate,
  AdminCredentials,
} from "../../models/models.js";
import {
  listByResourceGroup,
  listInSubscription,
  get,
  createOrUpdate,
  update,
  $delete,
  rotateVcenterPassword,
  rotateNsxtPassword,
  listAdminCredentials,
} from "../../api/privateClouds/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateCloudsListByResourceGroupOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
} from "../../models/options.js";

export interface PrivateCloudsOperations {
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  listInSubscription: (
    subscriptionId: string,
    options?: PrivateCloudsListInSubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams,
  ) => Promise<PrivateCloud>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ) => Promise<PrivateCloud>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  rotateVcenterPassword: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  rotateNsxtPassword: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listAdminCredentials: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsListAdminCredentialsOptionalParams,
  ) => Promise<AdminCredentials>;
}

export function getPrivateClouds(context: AVSContext) {
  return {
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: PrivateCloudsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listInSubscription: (
      subscriptionId: string,
      options?: PrivateCloudsListInSubscriptionOptionalParams,
    ) => listInSubscription(context, subscriptionId, options),
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      privateCloud: PrivateCloud,
      options?: PrivateCloudsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        privateCloud,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      privateCloudUpdate: PrivateCloudUpdate,
      options?: PrivateCloudsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        privateCloudUpdate,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateVcenterPassword: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
    ) =>
      rotateVcenterPassword(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateNsxtPassword: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
    ) =>
      rotateNsxtPassword(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    listAdminCredentials: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsListAdminCredentialsOptionalParams,
    ) =>
      listAdminCredentials(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getPrivateCloudsOperations(
  context: AVSContext,
): PrivateCloudsOperations {
  return {
    ...getPrivateClouds(context),
  };
}
