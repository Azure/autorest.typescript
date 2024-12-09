// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { listBySubscription } from "../../api/listBySubscription/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { ListBySubscriptionListBySubscriptionOptionalParams } from "../../api/options.js";

/** Interface representing a ListBySubscription operations. */
export interface ListBySubscriptionOperations {
  /** List data products by subscription. */
  listBySubscription: (
    options?: ListBySubscriptionListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
  /** List data catalog by subscription. */
  listBySubscription: (
    options?: ListBySubscriptionListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<void>;
}

export function getListBySubscription(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    listBySubscription: (
      options?: ListBySubscriptionListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
    listBySubscription: (
      options?: ListBySubscriptionListBySubscriptionOptionalParams,
    ) => listBySubscription(context, options),
  };
}

export function getListBySubscriptionOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): ListBySubscriptionOperations {
  return {
    ...getListBySubscription(context, subscriptionId),
  };
}
