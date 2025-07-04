// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConfluentContext } from "../../api/confluentContext.js";
import { OperationResult } from "../../models/models.js";
import { OrganizationOperationsListOptionalParams } from "../../api/organizationOperations/options.js";
import { list } from "../../api/organizationOperations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a OrganizationOperations operations. */
export interface OrganizationOperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OrganizationOperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<OperationResult>;
}

function _getOrganizationOperations(context: ConfluentContext) {
  return {
    list: (options?: OrganizationOperationsListOptionalParams) =>
      list(context, options),
  };
}

export function _getOrganizationOperationsOperations(
  context: ConfluentContext,
): OrganizationOperationsOperations {
  return {
    ..._getOrganizationOperations(context),
  };
}
