// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { createOrUpdate, get } from "../../api/restorePointCollections/operations.js";
import {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "../../api/restorePointCollections/options.js";
import { ComputeRestorePointCollection } from "../../../models/compute/models.js";

/** Interface representing a RestorePointCollections operations. */
export interface RestorePointCollectionsOperations {
  /** The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified. */
  createOrUpdate: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    resource: ComputeRestorePointCollection,
    options?: RestorePointCollectionsCreateOrUpdateOptionalParams,
  ) => Promise<ComputeRestorePointCollection>;
  /** The operation to get the restore point collection. */
  get: (
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsGetOptionalParams,
  ) => Promise<ComputeRestorePointCollection>;
}

function _getRestorePointCollections(context: ComputeContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      resource: ComputeRestorePointCollection,
      options?: RestorePointCollectionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, restorePointCollectionName, resource, options),
    get: (
      resourceGroupName: string,
      restorePointCollectionName: string,
      options?: RestorePointCollectionsGetOptionalParams,
    ) => get(context, resourceGroupName, restorePointCollectionName, options),
  };
}

export function _getRestorePointCollectionsOperations(
  context: ComputeContext,
): RestorePointCollectionsOperations {
  return {
    ..._getRestorePointCollections(context),
  };
}
