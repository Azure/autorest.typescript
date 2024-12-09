// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { listByDataProduct } from "../../api/listByDataProduct/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { ListByDataProductListByDataProductOptionalParams } from "../../api/options.js";

/** Interface representing a ListByDataProduct operations. */
export interface ListByDataProductOperations {
  /** List data type by parent resource. */
  listByDataProduct: (
    resourceGroupName: string,
    dataProductName: string,
    options?: ListByDataProductListByDataProductOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
}

export function getListByDataProduct(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    listByDataProduct: (
      resourceGroupName: string,
      dataProductName: string,
      options?: ListByDataProductListByDataProductOptionalParams,
    ) =>
      listByDataProduct(context, resourceGroupName, dataProductName, options),
  };
}

export function getListByDataProductOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): ListByDataProductOperations {
  return {
    ...getListByDataProduct(context, subscriptionId),
  };
}
