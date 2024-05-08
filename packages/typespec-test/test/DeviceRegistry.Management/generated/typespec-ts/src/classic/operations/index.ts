// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { Operation } from "../../models/models.js";
import { list } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../models/options.js";

export interface OperationsOperations {
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: DeviceRegistryContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function getOperationsOperations(
  context: DeviceRegistryContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
