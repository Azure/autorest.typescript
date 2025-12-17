// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import { list, get } from "../../api/workflowVersions/operations.js";
import {
  WorkflowVersionsListOptionalParams,
  WorkflowVersionsGetOptionalParams,
} from "../../api/workflowVersions/options.js";
import { WorkflowVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a WorkflowVersions operations. */
export interface WorkflowVersionsOperations {
  /** Gets a list of workflow versions. */
  list: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    options?: WorkflowVersionsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkflowVersion>;
  /** Gets a workflow version. */
  get: (
    resourceGroupName: string,
    name: string,
    workflowName: string,
    versionId: string,
    options?: WorkflowVersionsGetOptionalParams,
  ) => Promise<WorkflowVersion>;
}

function _getWorkflowVersions(context: WebContext) {
  return {
    list: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      options?: WorkflowVersionsListOptionalParams,
    ) => list(context, resourceGroupName, name, workflowName, options),
    get: (
      resourceGroupName: string,
      name: string,
      workflowName: string,
      versionId: string,
      options?: WorkflowVersionsGetOptionalParams,
    ) => get(context, resourceGroupName, name, workflowName, versionId, options),
  };
}

export function _getWorkflowVersionsOperations(context: WebContext): WorkflowVersionsOperations {
  return {
    ..._getWorkflowVersions(context),
  };
}
