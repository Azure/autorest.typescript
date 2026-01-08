// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../../api/index.js";
import {
  ComputeVirtualMachine,
  computeVirtualMachineSerializer,
  computeVirtualMachineDeserializer,
} from "../../../models/compute/models.js";
import { errorResponseDeserializer } from "../../../models/models.js";
import { getLongRunningPoller } from "../../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _createOrUpdateSend(
  context: ComputeContext,
  resourceGroupName: string,
  vmName: string,
  resource: ComputeVirtualMachine,
  options: VirtualMachinesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmName: vmName,
      "api%2Dversion": context.apiVersion ?? "2025-04-01",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: computeVirtualMachineSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeVirtualMachine> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineDeserializer(result.body);
}

/** The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. */
export function createOrUpdate(
  context: ComputeContext,
  resourceGroupName: string,
  vmName: string,
  resource: ComputeVirtualMachine,
  options: VirtualMachinesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, vmName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine>;
}

export function _getSend(
  context: ComputeContext,
  resourceGroupName: string,
  vmName: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmName: vmName,
      "api%2Dversion": context.apiVersion ?? "2025-04-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ComputeVirtualMachine> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeVirtualMachineDeserializer(result.body);
}

/** Retrieves information about the model view or the instance view of a virtual machine. */
export async function get(
  context: ComputeContext,
  resourceGroupName: string,
  vmName: string,
  options: VirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeVirtualMachine> {
  const result = await _getSend(context, resourceGroupName, vmName, options);
  return _getDeserialize(result);
}
