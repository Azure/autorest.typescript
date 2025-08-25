// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage, UsageListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a UsageOperations. */
export interface UsageOperations {
  /**
   * Gets, for the specified location, the current compute resource usage information as well as the
   * limits for compute resources under the subscription.
   * @param location The location for which resource usage is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: UsageListOptionalParams,
  ): PagedAsyncIterableIterator<Usage>;
}
