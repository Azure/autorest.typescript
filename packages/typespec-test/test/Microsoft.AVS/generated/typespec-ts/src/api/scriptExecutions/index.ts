// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ScriptExecutionListResult,
  ScriptExecution,
  ScriptOutputStreamType,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  ScriptExecutionsCreateOrUpdate200Response,
  ScriptExecutionsCreateOrUpdate201Response,
  ScriptExecutionsCreateOrUpdateDefaultResponse,
  ScriptExecutionsCreateOrUpdateLogicalResponse,
  ScriptExecutionsDelete200Response,
  ScriptExecutionsDelete202Response,
  ScriptExecutionsDelete204Response,
  ScriptExecutionsDeleteDefaultResponse,
  ScriptExecutionsDeleteLogicalResponse,
  ScriptExecutionsGet200Response,
  ScriptExecutionsGetDefaultResponse,
  ScriptExecutionsGetExecutionLogs200Response,
  ScriptExecutionsGetExecutionLogsDefaultResponse,
  ScriptExecutionsListByPrivateCloud200Response,
  ScriptExecutionsListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ScriptExecutionsListByPrivateCloudOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScriptExecutionsListByPrivateCloud200Response
  | ScriptExecutionsListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | ScriptExecutionsListByPrivateCloud200Response
    | ScriptExecutionsListByPrivateCloudDefaultResponse,
): Promise<ScriptExecutionListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            scriptCmdletId: p.properties?.["scriptCmdletId"],
            parameters:
              p.properties?.["parameters"] === undefined
                ? p.properties?.["parameters"]
                : p.properties?.["parameters"],
            hiddenParameters:
              p.properties?.["hiddenParameters"] === undefined
                ? p.properties?.["hiddenParameters"]
                : p.properties?.["hiddenParameters"],
            failureReason: p.properties?.["failureReason"],
            timeout: p.properties?.["timeout"],
            retention: p.properties?.["retention"],
            submittedAt:
              p.properties?.["submittedAt"] !== undefined
                ? new Date(p.properties?.["submittedAt"])
                : undefined,
            startedAt:
              p.properties?.["startedAt"] !== undefined
                ? new Date(p.properties?.["startedAt"])
                : undefined,
            finishedAt:
              p.properties?.["finishedAt"] !== undefined
                ? new Date(p.properties?.["finishedAt"])
                : undefined,
            provisioningState: p.properties?.["provisioningState"],
            output: p.properties?.["output"],
            namedOutputs: p.properties?.["namedOutputs"],
            information: p.properties?.["information"],
            warnings: p.properties?.["warnings"],
            errors: p.properties?.["errors"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List ScriptExecution resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListByPrivateCloudOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ScriptExecution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByPrivateCloudDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse,
): Promise<ScriptExecution> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
}

/** Get a ScriptExecution */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): Promise<ScriptExecution> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScriptExecutionsCreateOrUpdate200Response
  | ScriptExecutionsCreateOrUpdate201Response
  | ScriptExecutionsCreateOrUpdateDefaultResponse
  | ScriptExecutionsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !scriptExecution.properties
          ? undefined
          : {
              scriptCmdletId: scriptExecution.properties?.["scriptCmdletId"],
              parameters: scriptExecution.properties?.["parameters"],
              hiddenParameters:
                scriptExecution.properties?.["hiddenParameters"],
              failureReason: scriptExecution.properties?.["failureReason"],
              timeout: scriptExecution.properties?.["timeout"],
              retention: scriptExecution.properties?.["retention"],
              output: scriptExecution.properties?.["output"],
              namedOutputs: scriptExecution.properties?.["namedOutputs"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | ScriptExecutionsCreateOrUpdate200Response
    | ScriptExecutionsCreateOrUpdate201Response
    | ScriptExecutionsCreateOrUpdateDefaultResponse
    | ScriptExecutionsCreateOrUpdateLogicalResponse,
): Promise<ScriptExecution> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ScriptExecutionsCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
}

/** Create a ScriptExecution */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<ScriptExecution>, ScriptExecution> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options,
      ),
  }) as PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ScriptExecutionsDelete200Response
  | ScriptExecutionsDelete202Response
  | ScriptExecutionsDelete204Response
  | ScriptExecutionsDeleteDefaultResponse
  | ScriptExecutionsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ScriptExecutionsDelete200Response
    | ScriptExecutionsDelete202Response
    | ScriptExecutionsDelete204Response
    | ScriptExecutionsDeleteDefaultResponse
    | ScriptExecutionsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ScriptExecutionsDeleteLogicalResponse;
  return;
}

/** Delete a ScriptExecution */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _getExecutionLogsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptOutputStreamType?: ScriptOutputStreamType[],
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ScriptExecutionsGetExecutionLogs200Response
  | ScriptExecutionsGetExecutionLogsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: scriptOutputStreamType,
    });
}

export async function _getExecutionLogsDeserialize(
  result:
    | ScriptExecutionsGetExecutionLogs200Response
    | ScriptExecutionsGetExecutionLogsDefaultResponse,
): Promise<ScriptExecution> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
}

/** Return the logs for a script execution resource */
export async function getExecutionLogs(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptOutputStreamType?: ScriptOutputStreamType[],
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): Promise<ScriptExecution> {
  const result = await _getExecutionLogsSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    scriptOutputStreamType,
    options,
  );
  return _getExecutionLogsDeserialize(result);
}
