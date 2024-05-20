// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandbyPoolContext } from "../../api/standbyPoolContext.js";
import { Operation } from "../../models/models.js";
import { list } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";

export interface OperationsOperations {
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: StandbyPoolContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function getOperationsOperations(
  context: StandbyPoolContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
