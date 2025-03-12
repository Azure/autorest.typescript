// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkGatewayList,
  _workloadNetworkGatewayListDeserializer,
  WorkloadNetworkGateway,
  workloadNetworkGatewayDeserializer,
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
import {
  WorkloadNetworkGatewaysGetOptionalParams,
  WorkloadNetworkGatewaysListOptionalParams,
} from "./options.js";

export function _workloadNetworkGatewaysGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      gatewayId: gatewayId,
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

export async function _workloadNetworkGatewaysGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkGateway> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkGatewayDeserializer(result.body);
}

/** Get a WorkloadNetworkGateway */
export async function workloadNetworkGatewaysGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  gatewayId: string,
  options: WorkloadNetworkGatewaysGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkGateway> {
  const result = await _workloadNetworkGatewaysGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    gatewayId,
    options,
  );
  return _workloadNetworkGatewaysGetDeserialize(result);
}

export function _workloadNetworkGatewaysListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways{?api-version}",
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

export async function _workloadNetworkGatewaysListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkGatewayList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkGatewayListDeserializer(result.body);
}

/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export function workloadNetworkGatewaysList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkGatewaysListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkGateway> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkGatewaysListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkGatewaysListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
