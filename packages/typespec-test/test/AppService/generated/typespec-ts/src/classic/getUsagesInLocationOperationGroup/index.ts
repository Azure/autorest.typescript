// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import { list } from "../../api/getUsagesInLocationOperationGroup/operations.js";
import { GetUsagesInLocationOperationGroupListOptionalParams } from "../../api/getUsagesInLocationOperationGroup/options.js";
import { CsmUsageQuota } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a GetUsagesInLocationOperationGroup operations. */
export interface GetUsagesInLocationOperationGroupOperations {
  /** List usages in cores for all skus used by a subscription in a given location, for a specific quota type. */
  list: (
    location: string,
    options?: GetUsagesInLocationOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<CsmUsageQuota>;
}

function _getGetUsagesInLocationOperationGroup(context: WebSiteManagementContext) {
  return {
    list: (location: string, options?: GetUsagesInLocationOperationGroupListOptionalParams) =>
      list(context, location, options),
  };
}

export function _getGetUsagesInLocationOperationGroupOperations(
  context: WebSiteManagementContext,
): GetUsagesInLocationOperationGroupOperations {
  return {
    ..._getGetUsagesInLocationOperationGroup(context),
  };
}
