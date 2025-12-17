// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  getSchemaJson,
  run,
  listCallbackUrl,
  list,
  get,
} from "../../api/workflowTriggers/operations.js";
import {
  WorkflowTriggersGetSchemaJsonOptionalParams,
  WorkflowTriggersRunOptionalParams,
  WorkflowTriggersListCallbackUrlOptionalParams,
  WorkflowTriggersListOptionalParams,
  WorkflowTriggersGetOptionalParams,
} from "../../api/workflowTriggers/options.js";
import { WorkflowTrigger, WorkflowTriggerCallbackUrl, JsonSchema } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkflowTriggers operations. */
export interface WorkflowTriggersOperations {
  /** Get the trigger schema as JSON. */
  getSchemaJson: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersGetSchemaJsonOptionalParams,
  ) => Promise<JsonSchema>;
  /** Runs a workflow trigger. */
  run: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersRunOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get the callback URL for a workflow trigger. */
  listCallbackUrl: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersListCallbackUrlOptionalParams,
  ) => Promise<WorkflowTriggerCallbackUrl>;
  /** Gets a list of workflow triggers. */
  list: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    options?: WorkflowTriggersListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkflowTrigger>;
  /** Gets a workflow trigger. */
  get: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    triggerName: string,
    options?: WorkflowTriggersGetOptionalParams,
  ) => Promise<WorkflowTrigger>;
}

function _getWorkflowTriggers(context: WebContext) {
  return {
    getSchemaJson: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      options?: WorkflowTriggersGetSchemaJsonOptionalParams,
    ) => getSchemaJson(context, resourceGroupName, name, workflowName, triggerName, options),
    run: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      options?: WorkflowTriggersRunOptionalParams,
    ) => run(context, resourceGroupName, name, workflowName, triggerName, options),
    listCallbackUrl: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      options?: WorkflowTriggersListCallbackUrlOptionalParams,
    ) => listCallbackUrl(context, resourceGroupName, name, workflowName, triggerName, options),
    list: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      options?: WorkflowTriggersListOptionalParams,
    ) => list(context, resourceGroupName, name, workflowName, options),
    get: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      triggerName: string,
      options?: WorkflowTriggersGetOptionalParams,
    ) => get(context, resourceGroupName, name, workflowName, triggerName, options),
  };
}

export function _getWorkflowTriggersOperations(context: WebContext): WorkflowTriggersOperations {
  return {
    ..._getWorkflowTriggers(context),
  };
}
