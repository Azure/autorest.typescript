// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApiContext } from "../../api/networkAnalyticsApiContext.js";
import { DataProductsCatalog } from "../../models/models.js";
import {
  DataProductsCatalogsListBySubscriptionOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsGetOptionalParams,
} from "../../api/dataProductsCatalogs/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  get,
} from "../../api/dataProductsCatalogs/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DataProductsCatalogs operations. */
export interface DataProductsCatalogsOperations {
  /** List data catalog by subscription. */
  listBySubscription: (
    options: DataProductsCatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  /** List data catalog by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options: DataProductsCatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    options: DataProductsCatalogsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
}

function _getDataProductsCatalogs(context: NetworkAnalyticsApiContext) {
  return {
    listBySubscription: (
      options: DataProductsCatalogsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options: DataProductsCatalogsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    get: (
      resourceGroupName: string,
      options: DataProductsCatalogsGetOptionalParams,
    ) => get(context, resourceGroupName, options),
  };
}

export function _getDataProductsCatalogsOperations(
  context: NetworkAnalyticsApiContext,
): DataProductsCatalogsOperations {
  return {
    ..._getDataProductsCatalogs(context),
  };
}
