// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListOptionalParams,
} from "../../api/options.js";
import {
  privateCloudsListAdminCredentials,
  privateCloudsRotateNsxtPassword,
  privateCloudsRotateVcenterPassword,
  privateCloudsDelete,
  privateCloudsUpdate,
  privateCloudsCreateOrUpdate,
  privateCloudsGet,
  privateCloudsListInSubscription,
  privateCloudsList,
} from "../../api/privateClouds/index.js";
import {
  PrivateCloud,
  PrivateCloudUpdate,
  AdminCredentials,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateClouds operations. */
export interface PrivateCloudsOperations {
  /** List the admin credentials for the private cloud */
  listAdminCredentials: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsListAdminCredentialsOptionalParams,
  ) => Promise<AdminCredentials>;
  /** Rotate the NSX-T Manager password */
  rotateNsxtPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Rotate the vCenter password */
  rotateVcenterPassword: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Delete a PrivateCloud */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a PrivateCloud */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ) => Promise<PrivateCloud>;
  /** Create a PrivateCloud */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
  /** Get a PrivateCloud */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams,
  ) => Promise<PrivateCloud>;
  /** List PrivateCloud resources by subscription ID */
  listInSubscription: (
    options?: PrivateCloudsListInSubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
  /** List PrivateCloud resources by resource group */
  list: (
    resourceGroupName: string,
    options?: PrivateCloudsListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateCloud>;
}

function _getPrivateClouds(context: AzureVMwareSolutionAPIContext) {
  return {
    listAdminCredentials: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsListAdminCredentialsOptionalParams,
    ) =>
      privateCloudsListAdminCredentials(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateNsxtPassword: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
    ) =>
      privateCloudsRotateNsxtPassword(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    rotateVcenterPassword: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
    ) =>
      privateCloudsRotateVcenterPassword(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsDeleteOptionalParams,
    ) =>
      privateCloudsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      privateCloudUpdate: PrivateCloudUpdate,
      options?: PrivateCloudsUpdateOptionalParams,
    ) =>
      privateCloudsUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        privateCloudUpdate,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      privateCloud: PrivateCloud,
      options?: PrivateCloudsCreateOrUpdateOptionalParams,
    ) =>
      privateCloudsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        privateCloud,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: PrivateCloudsGetOptionalParams,
    ) =>
      privateCloudsGet(context, resourceGroupName, privateCloudName, options),
    listInSubscription: (
      options?: PrivateCloudsListInSubscriptionOptionalParams,
    ) => privateCloudsListInSubscription(context, options),
    list: (
      resourceGroupName: string,
      options?: PrivateCloudsListOptionalParams,
    ) => privateCloudsList(context, resourceGroupName, options),
  };
}

export function _getPrivateCloudsOperations(
  context: AzureVMwareSolutionAPIContext,
): PrivateCloudsOperations {
  return {
    ..._getPrivateClouds(context),
  };
}
