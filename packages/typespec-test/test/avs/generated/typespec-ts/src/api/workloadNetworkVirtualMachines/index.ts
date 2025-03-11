// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
  WorkloadNetworkVirtualMachinesListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkVirtualMachinesList,
  _workloadNetworkVirtualMachinesListDeserializer,
  WorkloadNetworkVirtualMachine,
  workloadNetworkVirtualMachineDeserializer,
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

export function _workloadNetworkVirtualMachinesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      virtualMachineId: virtualMachineId,
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

export async function _workloadNetworkVirtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVirtualMachineDeserializer(result.body);
}

/** Get a WorkloadNetworkVirtualMachine */
export async function workloadNetworkVirtualMachinesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  virtualMachineId: string,
  options: WorkloadNetworkVirtualMachinesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkVirtualMachine> {
  const result = await _workloadNetworkVirtualMachinesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    virtualMachineId,
    options,
  );
  return _workloadNetworkVirtualMachinesGetDeserialize(result);
}

export function _workloadNetworkVirtualMachinesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines{?api-version}",
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

export async function _workloadNetworkVirtualMachinesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkVirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkVirtualMachinesListDeserializer(result.body);
}

/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function workloadNetworkVirtualMachinesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVirtualMachinesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkVirtualMachinesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkVirtualMachinesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
