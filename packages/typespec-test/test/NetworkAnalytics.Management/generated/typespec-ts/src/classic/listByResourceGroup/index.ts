// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { listByResourceGroup } from "../../api/listByResourceGroup/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { ListByResourceGroupListByResourceGroupOptionalParams } from "../../api/options.js";

/** Interface representing a ListByResourceGroup operations. */
export interface ListByResourceGroupOperations {
  /** List data products by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ListByResourceGroupListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
  /** List data catalog by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: ListByResourceGroupListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
}

export function getListByResourceGroup(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ListByResourceGroupListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: ListByResourceGroupListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
  };
}

export function getListByResourceGroupOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): ListByResourceGroupOperations {
  return {
    ...getListByResourceGroup(context, subscriptionId),
  };
}
