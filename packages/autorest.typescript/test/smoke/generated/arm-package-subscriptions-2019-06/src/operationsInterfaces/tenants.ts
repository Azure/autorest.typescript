// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TenantIdDescription,
  TenantsListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Tenants. */
export interface Tenants {
  /**
   * Gets the tenants for your account.
   * @param options The options parameters.
   */
  list(
    options?: TenantsListOptionalParams,
  ): PagedAsyncIterableIterator<TenantIdDescription>;
}
