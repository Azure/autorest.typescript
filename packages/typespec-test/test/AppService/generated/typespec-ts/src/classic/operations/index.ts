// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import { list } from "../../api/operations/operations.js";
import { OperationsListOptionalParams } from "../../api/operations/options.js";
import { CsmOperationDescription } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<CsmOperationDescription>;
}

function _getOperations(context: WebSiteManagementContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function _getOperationsOperations(context: WebSiteManagementContext): OperationsOperations {
  return {
    ..._getOperations(context),
  };
}
