// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { DataProductsCatalog } from "../../models/models.js";
import {
  get,
  listByResourceGroup,
  listBySubscription,
} from "../../api/dataProductsCatalogsOperations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DataProductsCatalogsOperationsGetOptionalParams,
  DataProductsCatalogsOperationsListByResourceGroupOptionalParams,
  DataProductsCatalogsOperationsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface DataProductsCatalogsOperationsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: DataProductsCatalogsOperationsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: DataProductsCatalogsOperationsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  listBySubscription: (
    subscriptionId: string,
    options?: DataProductsCatalogsOperationsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
}

export function getDataProductsCatalogsOperations(
  context: NetworkAnalyticsContext,
) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: DataProductsCatalogsOperationsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, options),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: DataProductsCatalogsOperationsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: DataProductsCatalogsOperationsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsCatalogsOperationsOperations(
  context: NetworkAnalyticsContext,
): DataProductsCatalogsOperationsOperations {
  return {
    ...getDataProductsCatalogsOperations(context),
  };
}
