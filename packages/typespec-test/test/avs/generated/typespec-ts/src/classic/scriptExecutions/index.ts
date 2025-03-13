// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  scriptExecutionsGetExecutionLogs,
  scriptExecutionsDelete,
  scriptExecutionsCreateOrUpdate,
  scriptExecutionsGet,
  scriptExecutionsList,
  ScriptExecutionsGetExecutionLogsOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsListOptionalParams,
} from "../../api/scriptExecutions/index.js";
import { ScriptExecution } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a ScriptExecutions operations. */
export interface ScriptExecutionsOperations {
  /** Return the logs for a script execution resource */
  getExecutionLogs: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetExecutionLogsOptionalParams,
  ) => Promise<ScriptExecution>;
  /** Delete a ScriptExecution */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a ScriptExecution */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
  /** Get a ScriptExecution */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetOptionalParams,
  ) => Promise<ScriptExecution>;
  /** List ScriptExecution resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptExecution>;
}

function _getScriptExecutions(context: AzureVMwareSolutionAPIContext) {
  return {
    getExecutionLogs: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsGetExecutionLogsOptionalParams,
    ) =>
      scriptExecutionsGetExecutionLogs(
        context,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsDeleteOptionalParams,
    ) =>
      scriptExecutionsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      scriptExecution: ScriptExecution,
      options?: ScriptExecutionsCreateOrUpdateOptionalParams,
    ) =>
      scriptExecutionsCreateOrUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsGetOptionalParams,
    ) =>
      scriptExecutionsGet(
        context,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ScriptExecutionsListOptionalParams,
    ) =>
      scriptExecutionsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getScriptExecutionsOperations(
  context: AzureVMwareSolutionAPIContext,
): ScriptExecutionsOperations {
  return {
    ..._getScriptExecutions(context),
  };
}
