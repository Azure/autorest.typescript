// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentDBContext } from "../../api/documentDBContext.js";
import { Operation } from "../../models/models.js";
import { operationsList } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";

export interface OperationsOperations {
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: DocumentDBContext) {
  return {
    list: (options?: OperationsListOptionalParams) =>
      operationsList(context, options),
  };
}

export function getOperationsOperations(
  context: DocumentDBContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}