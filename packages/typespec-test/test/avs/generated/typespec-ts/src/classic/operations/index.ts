// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  operationsList,
  OperationsListOptionalParams,
} from "../../api/operations/index.js";
import { Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

function _getOperations(context: AzureVMwareSolutionAPIContext) {
  return {
    list: (options?: OperationsListOptionalParams) =>
      operationsList(context, options),
  };
}

export function _getOperationsOperations(
  context: AzureVMwareSolutionAPIContext,
): OperationsOperations {
  return {
    ..._getOperations(context),
  };
}
