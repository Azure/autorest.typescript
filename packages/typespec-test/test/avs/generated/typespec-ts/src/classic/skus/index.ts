// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { SkusListOptionalParams } from "../../api/options.js";
import { skusList } from "../../api/skus/index.js";
import { ResourceSku } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Skus operations. */
export interface SkusOperations {
  /** A list of SKUs. */
  list: (
    options?: SkusListOptionalParams,
  ) => PagedAsyncIterableIterator<ResourceSku>;
}

function _getSkus(context: AzureVMwareSolutionAPIContext) {
  return {
    list: (options?: SkusListOptionalParams) => skusList(context, options),
  };
}

export function _getSkusOperations(
  context: AzureVMwareSolutionAPIContext,
): SkusOperations {
  return {
    ..._getSkus(context),
  };
}
