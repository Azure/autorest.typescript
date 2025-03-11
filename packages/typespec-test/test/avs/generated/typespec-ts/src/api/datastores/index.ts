// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresDeleteOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _DatastoreList,
  _datastoreListDeserializer,
  Datastore,
  datastoreSerializer,
  datastoreDeserializer,
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

export function _datastoresDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      datastoreName: datastoreName,
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

export async function _datastoresDeleteDeserialize(
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

/** Delete a Datastore */
export function datastoresDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _datastoresDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _datastoresDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          clusterName,
          datastoreName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _datastoresCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      datastoreName: datastoreName,
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
      body: datastoreSerializer(datastore),
    });
}

export async function _datastoresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Datastore> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datastoreDeserializer(result.body);
}

/** Create a Datastore */
export function datastoresCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  datastore: Datastore,
  options: DatastoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Datastore>, Datastore> {
  return getLongRunningPoller(
    context,
    _datastoresCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _datastoresCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          clusterName,
          datastoreName,
          datastore,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Datastore>, Datastore>;
}

export function _datastoresGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      datastoreName: datastoreName,
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

export async function _datastoresGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Datastore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datastoreDeserializer(result.body);
}

/** Get a Datastore */
export async function datastoresGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  datastoreName: string,
  options: DatastoresGetOptionalParams = { requestOptions: {} },
): Promise<Datastore> {
  const result = await _datastoresGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    clusterName,
    datastoreName,
    options,
  );
  return _datastoresGetDeserialize(result);
}

export function _datastoresListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
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

export async function _datastoresListDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatastoreList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datastoreListDeserializer(result.body);
}

/** List Datastore resources by Cluster */
export function datastoresList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: DatastoresListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Datastore> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _datastoresListSend(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _datastoresListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
