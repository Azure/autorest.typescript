// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VmmServer, VmmServerTagsUpdate } from "../../models/models.js";
import {
  VmmServersListBySubscriptionOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersGetOptionalParams,
} from "../../api/vmmServers/options.js";
import {
  vmmServersListBySubscription,
  vmmServersListByResourceGroup,
  vmmServersDelete,
  vmmServersUpdate,
  vmmServersCreateOrUpdate,
  vmmServersGet,
} from "../../api/vmmServers/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VmmServers operations. */
export interface VmmServersOperations {
  /** List of VmmServers in a subscription. */
  listBySubscription: (
    options?: VmmServersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
  /** List of VmmServers in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
  /** Removes the SCVmm fabric from Azure. */
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the VmmServers resource. */
  update: (
    resourceGroupName: string,
    vmmServerName: string,
    properties: VmmServerTagsUpdate,
    options?: VmmServersUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  /** Onboards the SCVmm fabric as an Azure VmmServer resource. */
  createOrUpdate: (
    resourceGroupName: string,
    vmmServerName: string,
    resource: VmmServer,
    options?: VmmServersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  /** Implements VmmServer GET method. */
  get: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams,
  ) => Promise<VmmServer>;
}

function _getVmmServers(context: ScVmmContext) {
  return {
    listBySubscription: (
      options?: VmmServersListBySubscriptionOptionalParams,
    ) => vmmServersListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VmmServersListByResourceGroupOptionalParams,
    ) => vmmServersListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersDeleteOptionalParams,
    ) => vmmServersDelete(context, resourceGroupName, vmmServerName, options),
    update: (
      resourceGroupName: string,
      vmmServerName: string,
      properties: VmmServerTagsUpdate,
      options?: VmmServersUpdateOptionalParams,
    ) =>
      vmmServersUpdate(
        context,
        resourceGroupName,
        vmmServerName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      vmmServerName: string,
      resource: VmmServer,
      options?: VmmServersCreateOrUpdateOptionalParams,
    ) =>
      vmmServersCreateOrUpdate(
        context,
        resourceGroupName,
        vmmServerName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersGetOptionalParams,
    ) => vmmServersGet(context, resourceGroupName, vmmServerName, options),
  };
}

export function _getVmmServersOperations(
  context: ScVmmContext,
): VmmServersOperations {
  return {
    ..._getVmmServers(context),
  };
}
