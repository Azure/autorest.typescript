// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { Addon } from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
} from "../../api/addons/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AddonsListByPrivateCloudOptionalParams,
  AddonsGetOptionalParams,
  AddonsCreateOrUpdateOptionalParams,
  AddonsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a Addons operations. */
export interface AddonsOperations {
  /** List Addon resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AddonsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<Addon>;
  /** Get a Addon */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsGetOptionalParams,
  ) => Promise<Addon>;
  /** Create a Addon */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    addon: Addon,
    options?: AddonsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Addon>, Addon>;
  /** Delete a Addon */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    addonName: string,
    options?: AddonsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getAddons(context: AVSContext, subscriptionId: string) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AddonsListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
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
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        addon,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      addonName: string,
      options?: AddonsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        addonName,
        options,
      ),
  };
}

export function getAddonsOperations(
  context: AVSContext,
  subscriptionId: string,
): AddonsOperations {
  return {
    ...getAddons(context, subscriptionId),
  };
}
