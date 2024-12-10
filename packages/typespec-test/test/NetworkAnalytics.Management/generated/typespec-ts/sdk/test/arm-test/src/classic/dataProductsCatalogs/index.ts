// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  get,
} from "../../api/dataProductsCatalogs/index.js";
import { DataProductsCatalog } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  DataProductsCatalogsListBySubscriptionOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a DataProductsCatalogs operations. */
export interface DataProductsCatalogsOperations {
  /** List data catalog by subscription. */
  listBySubscription: (
    options?: DataProductsCatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
  /** List data catalog by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DataProductsCatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    options?: DataProductsCatalogsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
}

export function getDataProductsCatalogs(context: NetworkAnalyticsContext) {
  return {
    listBySubscription: (
      options?: DataProductsCatalogsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DataProductsCatalogsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    get: (
      resourceGroupName: string,
      options?: DataProductsCatalogsGetOptionalParams,
    ) => get(context, resourceGroupName, options),
  };
}

export function getDataProductsCatalogsOperations(
  context: NetworkAnalyticsContext,
): DataProductsCatalogsOperations {
  return {
    ...getDataProductsCatalogs(context),
  };
}
