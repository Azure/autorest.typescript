// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createOrUpdate, get } from "../../api/diskAccesses/operations.js";
import {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "../../api/diskAccesses/options.js";
import { ComputeDiskDiskAccess } from "../../../models/computeDisk/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ComputeDiskContext } from "../../api/index.js";

/** Interface representing a DiskAccesses operations. */
export interface DiskAccessesOperations {
  /** Creates or updates a disk access resource */
  createOrUpdate: (
    resourceGroupName: string,
    diskAccessName: string,
    resource: ComputeDiskDiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
  /** Gets information about a disk access resource. */
  get: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetOptionalParams,
  ) => Promise<ComputeDiskDiskAccess>;
}

function _getDiskAccesses(context: ComputeDiskContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      diskAccessName: string,
      resource: ComputeDiskDiskAccess,
      options?: DiskAccessesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, diskAccessName, resource, options),
    get: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesGetOptionalParams,
    ) => get(context, resourceGroupName, diskAccessName, options),
  };
}

export function _getDiskAccessesOperations(context: ComputeDiskContext): DiskAccessesOperations {
  return {
    ..._getDiskAccesses(context),
  };
}
