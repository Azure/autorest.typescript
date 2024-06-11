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

export interface ScriptExecutionsOperations {
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptExecution>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetOptionalParams,
  ) => Promise<ScriptExecution>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  getExecutionLogs: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptOutputStreamType?: ScriptOutputStreamType[],
    options?: ScriptExecutionsGetExecutionLogsOptionalParams,
  ) => Promise<ScriptExecution>;
}

export function getScriptExecutions(context: AVSContext) {
  return {
    listByPrivateCloud: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
): ScriptExecutionsOperations {
  return {
    ...getScriptExecutions(context),
  };
}
