// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import { list, get } from "../../api/unsupportedVmSizes/operations.js";
import {
  UnsupportedVmSizesListOptionalParams,
  UnsupportedVmSizesGetOptionalParams,
} from "../../api/unsupportedVmSizes/options.js";
import { VMSizeResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a UnsupportedVmSizes operations. */
export interface UnsupportedVmSizesOperations {
  /** Get the lists of unsupported vm sizes for Service Fabric Clusters. */
  list: (
    location: string,
    options?: UnsupportedVmSizesListOptionalParams,
  ) => PagedAsyncIterableIterator<VMSizeResource>;
  /** Get unsupported vm size for Service Fabric Clusters. */
  get: (
    location: string,
    vmSize: string,
    options?: UnsupportedVmSizesGetOptionalParams,
  ) => Promise<VMSizeResource>;
}

function _getUnsupportedVmSizes(context: ServiceFabricContext) {
  return {
    list: (location: string, options?: UnsupportedVmSizesListOptionalParams) =>
      list(context, location, options),
    get: (location: string, vmSize: string, options?: UnsupportedVmSizesGetOptionalParams) =>
      get(context, location, vmSize, options),
  };
}

export function _getUnsupportedVmSizesOperations(
  context: ServiceFabricContext,
): UnsupportedVmSizesOperations {
  return {
    ..._getUnsupportedVmSizes(context),
  };
}
