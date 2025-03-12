// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _IscsiPathListResult,
  _iscsiPathListResultDeserializer,
  IscsiPath,
  iscsiPathSerializer,
  iscsiPathDeserializer,
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
  IscsiPathsDeleteOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsListByPrivateCloudOptionalParams,
} from "./options.js";

export function _iscsiPathsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default{?api-version}",
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
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _iscsiPathsDeleteDeserialize(
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

/** Delete a IscsiPath */
export function iscsiPathsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _iscsiPathsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _iscsiPathsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _iscsiPathsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default{?api-version}",
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
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: iscsiPathSerializer(resource),
    });
}

export async function _iscsiPathsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IscsiPath> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return iscsiPathDeserializer(result.body);
}

/** Create a IscsiPath */
export function iscsiPathsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<IscsiPath>, IscsiPath> {
  return getLongRunningPoller(
    context,
    _iscsiPathsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _iscsiPathsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<IscsiPath>, IscsiPath>;
}

export function _iscsiPathsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default{?api-version}",
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

export async function _iscsiPathsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IscsiPath> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return iscsiPathDeserializer(result.body);
}

/** Get a IscsiPath */
export async function iscsiPathsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): Promise<IscsiPath> {
  const result = await _iscsiPathsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _iscsiPathsGetDeserialize(result);
}

export function _iscsiPathsListByPrivateCloudSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths{?api-version}",
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

export async function _iscsiPathsListByPrivateCloudDeserialize(
  result: PathUncheckedResponse,
): Promise<_IscsiPathListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _iscsiPathListResultDeserializer(result.body);
}

/** List IscsiPath resources by PrivateCloud */
export function iscsiPathsListByPrivateCloud(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<IscsiPath> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _iscsiPathsListByPrivateCloudSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _iscsiPathsListByPrivateCloudDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
