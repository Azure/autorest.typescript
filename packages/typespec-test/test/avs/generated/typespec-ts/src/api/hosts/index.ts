// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  HostsGetOptionalParams,
  HostsListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _HostListResult,
  _hostListResultDeserializer,
  Host,
  hostDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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

export function _hostsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  hostId: string,
  options: HostsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts/{hostId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      hostId: hostId,
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

export async function _hostsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Host> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return hostDeserializer(result.body);
}

/** Get a Host */
export async function hostsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  hostId: string,
  options: HostsGetOptionalParams = { requestOptions: {} },
): Promise<Host> {
  const result = await _hostsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    clusterName,
    hostId,
    options,
  );
  return _hostsGetDeserialize(result);
}

export function _hostsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: HostsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts{?api-version}",
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

export async function _hostsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_HostListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _hostListResultDeserializer(result.body);
}

/** List Host resources by Cluster */
export function hostsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: HostsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Host> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _hostsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _hostsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
