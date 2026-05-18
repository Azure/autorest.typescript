// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/index.js";
import { createOrUpdate, get } from "../../api/diskAccesses/operations.js";
import {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "../../api/diskAccesses/options.js";
import { DiskAccess } from "../../models/computeDisk/models.js";
import { getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiskAccesses operations. */
export interface DiskAccessesOperations {
  /** Creates or updates a disk access resource */
  createOrUpdate: (
    resourceGroupName: string,
    diskAccessName: string,
    resource: DiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DiskAccess>, DiskAccess>;
  /** Gets information about a disk access resource. */
  get: (
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetOptionalParams,
  ) => Promise<DiskAccess>;
}

function _getDiskAccesses(context: ComputeContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      diskAccessName: string,
      resource: DiskAccess,
      options?: DiskAccessesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, diskAccessName, resource, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      diskAccessName: string,
      resource: DiskAccess,
      options?: DiskAccessesCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(context, resourceGroupName, diskAccessName, resource, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      diskAccessName: string,
      resource: DiskAccess,
      options?: DiskAccessesCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(context, resourceGroupName, diskAccessName, resource, options);
    },
    get: (
      resourceGroupName: string,
      diskAccessName: string,
      options?: DiskAccessesGetOptionalParams,
    ) => get(context, resourceGroupName, diskAccessName, options),
  };
}

export function _getDiskAccessesOperations(context: ComputeContext): DiskAccessesOperations {
  return {
    ..._getDiskAccesses(context),
  };
}
