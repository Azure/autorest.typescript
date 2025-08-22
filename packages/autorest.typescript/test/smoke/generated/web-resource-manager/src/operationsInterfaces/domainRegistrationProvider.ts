// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CsmOperationDescription,
  DomainRegistrationProviderListOperationsOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DomainRegistrationProvider. */
export interface DomainRegistrationProvider {
  /**
   * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
   * resource provider
   * @param options The options parameters.
   */
  listOperations(
    options?: DomainRegistrationProviderListOperationsOptionalParams,
  ): PagedAsyncIterableIterator<CsmOperationDescription>;
}
