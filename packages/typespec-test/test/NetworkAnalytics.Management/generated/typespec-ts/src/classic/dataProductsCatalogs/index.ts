// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsContext } from "../../api/NetworkAnalyticsContext.js";
import { DataProductsCatalog } from "../../models/models.js";
import {
  dataProductsCatalogsGet,
  dataProductsCatalogsListByResourceGroup,
  dataProductsCatalogsListBySubscription,
} from "../../api/dataProductsCatalogs/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  DataProductsCatalogsGetOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface DataProductsCatalogsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: DataProductsCatalogsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: DataProductsCatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  listBySubscription: (
    subscriptionId: string,
    options?: DataProductsCatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
}

export function getDataProductsCatalogs(context: NetworkAnalyticsContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: DataProductsCatalogsGetOptionalParams,
    ) =>
      dataProductsCatalogsGet(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: DataProductsCatalogsListByResourceGroupOptionalParams,
    ) =>
      dataProductsCatalogsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      subscriptionId: string,
      options?: DataProductsCatalogsListBySubscriptionOptionalParams,
    ) =>
      dataProductsCatalogsListBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsCatalogsOperations(
  context: NetworkAnalyticsContext,
): DataProductsCatalogsOperations {
  return {
    ...getDataProductsCatalogs(context),
  };
}
