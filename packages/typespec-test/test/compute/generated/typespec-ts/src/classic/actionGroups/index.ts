// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { list, get } from "../../api/actionGroups/operations.js";
import {
  ActionGroupsListOptionalParams,
  ActionGroupsGetOptionalParams,
} from "../../api/actionGroups/options.js";
import { ComputeActionGroup } from "../../models/compute/models.js";
import { ComputeDiskActionGroup } from "../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ActionGroups operations. */
export interface ActionGroupsOperations {
  /** List ActionGroup resources by subscription ID */
  list: (
    options?: ActionGroupsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskActionGroup>;
  /** Get a ActionGroup */
  get: (
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsGetOptionalParams,
  ) => Promise<ComputeActionGroup>;
}

function _getActionGroups(context: ComputeContext) {
  return {
    list: (options?: ActionGroupsListOptionalParams) => list(context, options),
    get: (
      resourceGroupName: string,
      actionGroupName: string,
      options?: ActionGroupsGetOptionalParams,
    ) => get(context, resourceGroupName, actionGroupName, options),
  };
}

export function _getActionGroupsOperations(context: ComputeContext): ActionGroupsOperations {
  return {
    ..._getActionGroups(context),
  };
}
