// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _VirtualMachinesList,
  _virtualMachinesListDeserializer,
  VirtualMachine,
  virtualMachineDeserializer,
  VirtualMachineRestrictMovement,
  virtualMachineRestrictMovementSerializer,
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
  VirtualMachinesRestrictMovementOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesListOptionalParams,
} from "./options.js";

export function _virtualMachinesRestrictMovementSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovement: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      virtualMachineId: virtualMachineId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: virtualMachineRestrictMovementSerializer(restrictMovement),
    });
}

export async function _virtualMachinesRestrictMovementDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Enable or disable DRS-driven VM movement restriction */
export function virtualMachinesRestrictMovement(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  restrictMovement: VirtualMachineRestrictMovement,
  options: VirtualMachinesRestrictMovementOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachinesRestrictMovementDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachinesRestrictMovementSend(
          context,
          resourceGroupName,
          privateCloudName,
          clusterName,
          virtualMachineId,
          restrictMovement,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachinesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
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

export async function _virtualMachinesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineDeserializer(result.body);
}

/** Get a VirtualMachine */
export async function virtualMachinesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  virtualMachineId: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachine> {
  const result = await _virtualMachinesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId,
    options,
  );
  return _virtualMachinesGetDeserialize(result);
}

export function _virtualMachinesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines{?api-version}",
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

export async function _virtualMachinesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachinesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualMachinesListDeserializer(result.body);
}

/** List VirtualMachine resources by Cluster */
export function virtualMachinesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: VirtualMachinesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachine> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachinesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _virtualMachinesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
