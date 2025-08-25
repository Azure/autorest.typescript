// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SkuInformation, SkusListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Skus. */
export interface Skus {
  /**
   * Lists the available SKUs supported by Microsoft.Storage for given subscription.
   * @param options The options parameters.
   */
  list(
    options?: SkusListOptionalParams,
  ): PagedAsyncIterableIterator<SkuInformation>;
}
