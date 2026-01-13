// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createOrUpdate, get } from "../../api/disks/operations.js";
import {
  DisksCreateOrUpdateOptionalParams,
  DisksGetOptionalParams,
} from "../../api/disks/options.js";
import { ComputeDiskDisk } from "../../../models/computeDisk/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ComputeDiskContext } from "../../api/index.js";

/** Interface representing a Disks operations. */
export interface DisksOperations {
  /** Creates or updates a disk. */
  createOrUpdate: (
    resourceGroupName: string,
    diskName: string,
    resource: ComputeDiskDisk,
    options?: DisksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeDiskDisk>, ComputeDiskDisk>;
  /** Gets information about a disk. */
  get: (
    resourceGroupName: string,
    diskName: string,
    options?: DisksGetOptionalParams,
  ) => Promise<ComputeDiskDisk>;
}

function _getDisks(context: ComputeDiskContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      diskName: string,
      resource: ComputeDiskDisk,
      options?: DisksCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, diskName, resource, options),
    get: (resourceGroupName: string, diskName: string, options?: DisksGetOptionalParams) =>
      get(context, resourceGroupName, diskName, options),
  };
}

export function _getDisksOperations(context: ComputeDiskContext): DisksOperations {
  return {
    ..._getDisks(context),
  };
}
