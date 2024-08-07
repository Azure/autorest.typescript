// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  ScriptExecution,
  ScriptOutputStreamType,
} from "../../models/models.js";
import {
  listByPrivateCloud,
  get,
  createOrUpdate,
  $delete,
  getExecutionLogs,
} from "../../api/scriptExecutions/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ScriptExecutionsListByPrivateCloudOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
} from "../../models/options.js";

/** Interface representing a ScriptExecutions operations. */
export interface ScriptExecutionsOperations {
  /** List ScriptExecution resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptExecution>;
  /** Get a ScriptExecution */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetOptionalParams,
  ) => Promise<ScriptExecution>;
  /** Create a ScriptExecution */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
  /** Delete a ScriptExecution */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Return the logs for a script execution resource */
  getExecutionLogs: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptOutputStreamType?: ScriptOutputStreamType[],
    options?: ScriptExecutionsGetExecutionLogsOptionalParams,
  ) => Promise<ScriptExecution>;
}

export function getScriptExecutions(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ScriptExecutionsListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
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
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    getExecutionLogs: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      scriptOutputStreamType?: ScriptOutputStreamType[],
      options?: ScriptExecutionsGetExecutionLogsOptionalParams,
    ) =>
      getExecutionLogs(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptOutputStreamType,
        options,
      ),
  };
}

export function getScriptExecutionsOperations(
  context: AVSContext,
  subscriptionId: string,
): ScriptExecutionsOperations {
  return {
    ...getScriptExecutions(context, subscriptionId),
  };
}
