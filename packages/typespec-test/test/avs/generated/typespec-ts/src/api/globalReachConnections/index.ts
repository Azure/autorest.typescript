// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _GlobalReachConnectionList,
  _globalReachConnectionListDeserializer,
  GlobalReachConnection,
  globalReachConnectionSerializer,
  globalReachConnectionDeserializer,
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

export function _globalReachConnectionsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      globalReachConnectionName: globalReachConnectionName,
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

export async function _globalReachConnectionsDeleteDeserialize(
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

/** Delete a GlobalReachConnection */
export function globalReachConnectionsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _globalReachConnectionsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      globalReachConnectionName: globalReachConnectionName,
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
      body: globalReachConnectionSerializer(globalReachConnection),
    });
}

export async function _globalReachConnectionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return globalReachConnectionDeserializer(result.body);
}

/** Create a GlobalReachConnection */
export function globalReachConnectionsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          globalReachConnection,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
}

export function _globalReachConnectionsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      globalReachConnectionName: globalReachConnectionName,
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

export async function _globalReachConnectionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return globalReachConnectionDeserializer(result.body);
}

/** Get a GlobalReachConnection */
export async function globalReachConnectionsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<GlobalReachConnection> {
  const result = await _globalReachConnectionsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName,
    options,
  );
  return _globalReachConnectionsGetDeserialize(result);
}

export function _globalReachConnectionsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections{?api-version}",
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

export async function _globalReachConnectionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_GlobalReachConnectionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _globalReachConnectionListDeserializer(result.body);
}

/** List GlobalReachConnection resources by PrivateCloud */
export function globalReachConnectionsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GlobalReachConnection> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _globalReachConnectionsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _globalReachConnectionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
