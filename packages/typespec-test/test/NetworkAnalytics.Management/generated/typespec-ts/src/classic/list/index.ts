// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { list } from "../../api/list/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { ListListOptionalParams } from "../../api/options.js";

/** Interface representing a List operations. */
export interface ListOperations {
  /** List the operations for the provider */
  list: (options?: ListListOptionalParams) => PagedAsyncIterableIterator<void>;
}

export function getList(context: NetworkAnalyticsContext) {
  return {
    list: (options?: ListListOptionalParams) => list(context, options),
  };
}

export function getListOperations(
  context: NetworkAnalyticsContext,
): ListOperations {
  return {
    ...getList(context),
  };
}
