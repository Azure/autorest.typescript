// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  addonsDelete,
  addonsCreateOrUpdate,
  addonsGet,
  addonsList,
} from "../../api/addons/index.js";
import { Addon } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AddonsDeleteOptionalParams,
  AddonsCreateOrUpdateOptionalParams,
  AddonsGetOptionalParams,
  AddonsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Addons operations. */
export interface AddonsOperations {
  /** Delete a Addon */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a Addon */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    addon: Addon,
    options?: AddonsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Addon>, Addon>;
  /** Get a Addon */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsGetOptionalParams,
  ) => Promise<Addon>;
  /** List Addon resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AddonsListOptionalParams,
  ) => PagedAsyncIterableIterator<Addon>;
}

function _getAddons(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsDeleteOptionalParams,
    ) =>
      addonsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        addonName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      addon: Addon,
      options?: AddonsCreateOrUpdateOptionalParams,
    ) =>
      addonsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        addonName,
        addon,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsGetOptionalParams,
    ) =>
      addonsGet(
        context,
        resourceGroupName,
        privateCloudName,
        addonName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AddonsListOptionalParams,
    ) => addonsList(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getAddonsOperations(
  context: AzureVMwareSolutionAPIContext,
): AddonsOperations {
  return {
    ..._getAddons(context),
  };
}
