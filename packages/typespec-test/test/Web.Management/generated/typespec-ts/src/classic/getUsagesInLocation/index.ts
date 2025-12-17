// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import { list } from "../../api/getUsagesInLocation/operations.js";
import { GetUsagesInLocationListOptionalParams } from "../../api/getUsagesInLocation/options.js";
import { CsmUsageQuota } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a GetUsagesInLocation operations. */
export interface GetUsagesInLocationOperations {
  /** List usages in cores for all skus used by a subscription in a given location, for a specific quota type. */
  list: (
    location: string,
    options?: GetUsagesInLocationListOptionalParams,
  ) => PagedAsyncIterableIterator<CsmUsageQuota>;
}

function _getGetUsagesInLocation(context: WebContext) {
  return {
    list: (location: string, options?: GetUsagesInLocationListOptionalParams) =>
      list(context, location, options),
  };
}

export function _getGetUsagesInLocationOperations(
  context: WebContext,
): GetUsagesInLocationOperations {
  return {
    ..._getGetUsagesInLocation(context),
  };
}
