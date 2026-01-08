// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../../api/computeContext.js";
import { get } from "../../api/actionGroups/operations.js";
import {
  ActionGroupsGetOptionalParams,
} from "../../api/actionGroups/options.js";
import { ComputeActionGroup } from "../../../models/compute/models.js";

/** Interface representing a ActionGroups operations. */
export interface ActionGroupsOperations {
  /** Get a ActionGroup */
  get: (
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsGetOptionalParams,
  ) => Promise<ComputeActionGroup>;
}

function _getActionGroups(context: ComputeContext) {
  return {
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
