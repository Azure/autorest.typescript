// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VirtualMachineSize,
  VirtualMachineSizesListOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineSizes. */
export interface VirtualMachineSizes {
  /**
   * This API is deprecated. Use [Resources
   * Skus](https://docs.microsoft.com/rest/api/compute/resourceskus/list)
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: VirtualMachineSizesListOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachineSize>;
}
