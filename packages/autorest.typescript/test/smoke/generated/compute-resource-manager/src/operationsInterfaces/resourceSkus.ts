// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ResourceSku,
  ResourceSkusListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ResourceSkus. */
export interface ResourceSkus {
  /**
   * Gets the list of Microsoft.Compute SKUs available for your Subscription.
   * @param options The options parameters.
   */
  list(
    options?: ResourceSkusListOptionalParams,
  ): PagedAsyncIterableIterator<ResourceSku>;
}
