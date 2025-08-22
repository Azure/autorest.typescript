// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExpressRouteServiceProvider,
  ExpressRouteServiceProvidersListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteServiceProviders. */
export interface ExpressRouteServiceProviders {
  /**
   * Gets all the available express route service providers.
   * @param options The options parameters.
   */
  list(
    options?: ExpressRouteServiceProvidersListOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRouteServiceProvider>;
}
