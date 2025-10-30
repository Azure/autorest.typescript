// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaContext } from "../../api/quotaContext.js";
import { list, get } from "../../api/usages/operations.js";
import {
  UsagesListOptionalParams,
  UsagesGetOptionalParams,
} from "../../api/usages/options.js";
import { CurrentUsagesBase } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Usages operations. */
export interface UsagesOperations {
  /** Get a list of current usage for all resources for the scope specified. */
  list: (
    scope: string,
    options?: UsagesListOptionalParams,
  ) => PagedAsyncIterableIterator<CurrentUsagesBase>;
  /** Get the current usage of a resource. */
  get: (
    resourceName: string,
    scope: string,
    options?: UsagesGetOptionalParams,
  ) => Promise<CurrentUsagesBase>;
}

function _getUsages(context: QuotaContext) {
  return {
    list: (scope: string, options?: UsagesListOptionalParams) =>
      list(context, scope, options),
    get: (
      resourceName: string,
      scope: string,
      options?: UsagesGetOptionalParams,
    ) => get(context, resourceName, scope, options),
  };
}

export function _getUsagesOperations(context: QuotaContext): UsagesOperations {
  return {
    ..._getUsages(context),
  };
}
