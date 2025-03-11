// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  ProvisionedNetworksGetOptionalParams,
  ProvisionedNetworksListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _ProvisionedNetworkListResult,
  _provisionedNetworkListResultDeserializer,
  ProvisionedNetwork,
  provisionedNetworkDeserializer,
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

export function _provisionedNetworksGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  provisionedNetworkName: string,
  options: ProvisionedNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks/{provisionedNetworkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      provisionedNetworkName: provisionedNetworkName,
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

export async function _provisionedNetworksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ProvisionedNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return provisionedNetworkDeserializer(result.body);
}

/** Get a ProvisionedNetwork */
export async function provisionedNetworksGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  provisionedNetworkName: string,
  options: ProvisionedNetworksGetOptionalParams = { requestOptions: {} },
): Promise<ProvisionedNetwork> {
  const result = await _provisionedNetworksGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    provisionedNetworkName,
    options,
  );
  return _provisionedNetworksGetDeserialize(result);
}

export function _provisionedNetworksListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ProvisionedNetworksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks{?api-version}",
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

export async function _provisionedNetworksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProvisionedNetworkListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _provisionedNetworkListResultDeserializer(result.body);
}

/** List ProvisionedNetwork resources by PrivateCloud */
export function provisionedNetworksList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: ProvisionedNetworksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ProvisionedNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _provisionedNetworksListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _provisionedNetworksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
