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

/** Interface representing a PrivateClouds operations. */
export interface PrivateCloudsOperations {
  /** List PrivateCloud resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  /** List PrivateCloud resources by subscription ID */
  listInSubscription: (
    options?: PrivateCloudsListInSubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  /** Get a PrivateCloud */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams,
  ) => Promise<PrivateCloud>;
  /** Create a PrivateCloud */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
  /** Update a PrivateCloud */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ) => Promise<PrivateCloud>;
  /** Delete a PrivateCloud */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Rotate the vCenter password */
  rotateVcenterPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Rotate the NSX-T Manager password */
  rotateNsxtPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List the admin credentials for the private cloud */
  listAdminCredentials: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsListAdminCredentialsOptionalParams,
  ) => Promise<AdminCredentials>;
}

export function getPrivateClouds(context: AVSContext, subscriptionId: string) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PrivateCloudsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listInSubscription: (
      options?: PrivateCloudsListInSubscriptionOptionalParams,
    ) => listInSubscription(context, subscriptionId, options),
    get: (
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
  subscriptionId: string,
): PrivateCloudsOperations {
  return {
    ...getPrivateClouds(context, subscriptionId),
  };
}
