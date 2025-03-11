// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _ScriptExecutionsList,
  _scriptExecutionsListDeserializer,
  ScriptExecution,
  scriptExecutionSerializer,
  scriptExecutionDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ScriptExecutionsGetExecutionLogsOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsListOptionalParams,
} from "./options.js";

export function _scriptExecutionsGetExecutionLogsSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptExecutionName: scriptExecutionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: { accept: "application/json", ...options.requestOptions?.headers },
    body: !options["scriptOutputStreamType"]
      ? options["scriptOutputStreamType"]
      : options["scriptOutputStreamType"].map((p: any) => {
          return p;
        }),
  });
}

export async function _scriptExecutionsGetExecutionLogsDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scriptExecutionDeserializer(result.body);
}

/** Return the logs for a script execution resource */
export async function scriptExecutionsGetExecutionLogs(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): Promise<ScriptExecution> {
  const result = await _scriptExecutionsGetExecutionLogsSend(
    context,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    options,
  );
  return _scriptExecutionsGetExecutionLogsDeserialize(result);
}

export function _scriptExecutionsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptExecutionName: scriptExecutionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _scriptExecutionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a ScriptExecution */
export function scriptExecutionsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _scriptExecutionsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _scriptExecutionsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          scriptExecutionName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _scriptExecutionsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptExecutionName: scriptExecutionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: scriptExecutionSerializer(scriptExecution),
    });
}

export async function _scriptExecutionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scriptExecutionDeserializer(result.body);
}

/** Create a ScriptExecution */
export function scriptExecutionsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<ScriptExecution>, ScriptExecution> {
  return getLongRunningPoller(
    context,
    _scriptExecutionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _scriptExecutionsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          scriptExecutionName,
          scriptExecution,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
}

export function _scriptExecutionsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      scriptExecutionName: scriptExecutionName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _scriptExecutionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scriptExecutionDeserializer(result.body);
}

/** Get a ScriptExecution */
export async function scriptExecutionsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): Promise<ScriptExecution> {
  const result = await _scriptExecutionsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    options,
  );
  return _scriptExecutionsGetDeserialize(result);
}

export function _scriptExecutionsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _scriptExecutionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptExecutionsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _scriptExecutionsListDeserializer(result.body);
}

/** List ScriptExecution resources by PrivateCloud */
export function scriptExecutionsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptExecution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptExecutionsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _scriptExecutionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
