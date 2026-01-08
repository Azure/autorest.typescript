// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../../api/computeContext.js";
import { list } from "../../api/actionGroups/operations.js";
import {
  ActionGroupsListOptionalParams,
} from "../../api/actionGroups/options.js";
import { ComputeDiskActionGroup } from "../../../models/computeDisk/models.js";
import { PagedAsyncIterableIterator } from "../../../static-helpers/pagingHelpers.js";

/** Interface representing a ActionGroups operations. */
export interface ActionGroupsOperations {
  /** List ActionGroup resources by subscription ID */
  list: (
    options?: ActionGroupsListOptionalParams,
  ) => PagedAsyncIterableIterator<ComputeDiskActionGroup>;
}

function _getActionGroups(context: ComputeContext) {
  return {
    list: (options?: ActionGroupsListOptionalParams) => list(context, options),
  };
}

export function _getActionGroupsOperations(context: ComputeContext): ActionGroupsOperations {
  return {
    ..._getActionGroups(context),
  };
}
