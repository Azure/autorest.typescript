// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  WorkloadNetwork,
  workloadNetworkDeserializer,
  errorResponseDeserializer,
  _WorkloadNetworkList,
  _workloadNetworkListDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  WorkloadNetworksListOptionalParams,
  WorkloadNetworksGetOptionalParams,
} from "./options.js";

export function _workloadNetworksListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks{?api-version}",
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

export async function _workloadNetworksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkListDeserializer(result.body);
}

/** List WorkloadNetwork resources by PrivateCloud */
export function workloadNetworksList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworksListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _workloadNetworksGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default{?api-version}",
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

export async function _workloadNetworksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDeserializer(result.body);
}

/** Get a WorkloadNetwork */
export async function workloadNetworksGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworksGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetwork> {
  const result = await _workloadNetworksGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _workloadNetworksGetDeserialize(result);
}
