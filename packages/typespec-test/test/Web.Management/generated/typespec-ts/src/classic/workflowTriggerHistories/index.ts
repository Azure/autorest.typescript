// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import { resubmit, list, get } from "../../api/workflowTriggerHistories/operations.js";
import {
  WorkflowTriggerHistoriesResubmitOptionalParams,
  WorkflowTriggerHistoriesListOptionalParams,
  WorkflowTriggerHistoriesGetOptionalParams,
} from "../../api/workflowTriggerHistories/options.js";
import { WorkflowTriggerHistory } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkflowTriggerHistories operations. */
export interface WorkflowTriggerHistoriesOperations {
  /** Resubmits a workflow run based on the trigger history. */
  resubmit: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    historyName: string,
    options?: WorkflowTriggerHistoriesResubmitOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of workflow trigger histories. */
  list: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggerHistoriesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkflowTriggerHistory>;
  /** Gets a workflow trigger history. */
  get: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    historyName: string,
    options?: WorkflowTriggerHistoriesGetOptionalParams,
  ) => Promise<WorkflowTriggerHistory>;
}

function _getWorkflowTriggerHistories(context: WebContext) {
  return {
    resubmit: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      historyName: string,
      options?: WorkflowTriggerHistoriesResubmitOptionalParams,
    ) =>
      resubmit(context, resourceGroupName, name, workflowName, triggerName, historyName, options),
    list: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      options?: WorkflowTriggerHistoriesListOptionalParams,
    ) => list(context, resourceGroupName, name, workflowName, triggerName, options),
    get: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      historyName: string,
      options?: WorkflowTriggerHistoriesGetOptionalParams,
    ) => get(context, resourceGroupName, name, workflowName, triggerName, historyName, options),
  };
}

export function _getWorkflowTriggerHistoriesOperations(
  context: WebContext,
): WorkflowTriggerHistoriesOperations {
  return {
    ..._getWorkflowTriggerHistories(context),
  };
}
