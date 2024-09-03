// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import {
  get,
  listByResourceGroup,
  listBySubscription,
} from "../../api/dataProductsCatalogs/index.js";
import {
  _DataProductListResult,
  _DataTypeListResult,
  DataProductsCatalog,
  _DataProductsCatalogListResult,
  _OperationListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  DataProductsCatalogsGetOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a DataProductsCatalogs operations. */
export interface DataProductsCatalogsOperations {
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    options?: DataProductsCatalogsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
  /** List data catalog by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DataProductsCatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  /** List data catalog by subscription. */
  listBySubscription: (
    options?: DataProductsCatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
}

export function getDataProductsCatalogs(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      options?: DataProductsCatalogsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DataProductsCatalogsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      options?: DataProductsCatalogsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsCatalogsOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): DataProductsCatalogsOperations {
  return {
    ...getDataProductsCatalogs(context, subscriptionId),
  };
}
