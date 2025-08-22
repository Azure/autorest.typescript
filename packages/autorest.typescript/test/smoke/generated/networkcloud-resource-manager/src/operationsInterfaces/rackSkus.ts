// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RackSku,
  RackSkusListBySubscriptionOptionalParams,
  RackSkusGetOptionalParams,
  RackSkusGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RackSkus. */
export interface RackSkus {
  /**
   * Get a list of rack SKUs in the provided subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: RackSkusListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<RackSku>;
  /**
   * Get the properties of the provided rack SKU.
   * @param rackSkuName The name of the rack SKU.
   * @param options The options parameters.
   */
  get(
    rackSkuName: string,
    options?: RackSkusGetOptionalParams,
  ): Promise<RackSkusGetResponse>;
}
