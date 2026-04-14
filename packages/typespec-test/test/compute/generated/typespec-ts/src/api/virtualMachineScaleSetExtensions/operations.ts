// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import {
  VirtualMachineScaleSetExtension,
  virtualMachineScaleSetExtensionSerializer,
  virtualMachineScaleSetExtensionDeserializer,
} from "../../models/compute/models.js";
import { errorResponseDeserializer } from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  vmssExtensionName: string,
  resource: VirtualMachineScaleSetExtension,
  options: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/extensions/{vmssExtensionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmssExtensionName: vmssExtensionName,
      "api%2Dversion": "2025-04-01",
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
      body: virtualMachineScaleSetExtensionSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineScaleSetExtension> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return virtualMachineScaleSetExtensionDeserializer(result.body);
}

/** The operation to create or update an extension. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  vmssExtensionName: string,
  resource: VirtualMachineScaleSetExtension,
  options: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineScaleSetExtension>, VirtualMachineScaleSetExtension> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, vmssExtensionName, resource, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-04-01",
  }) as PollerLike<
    OperationState<VirtualMachineScaleSetExtension>,
    VirtualMachineScaleSetExtension
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/extensions/{vmssExtensionName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmssExtensionName: vmssExtensionName,
      "api%2Dversion": "2025-04-01",
      "%24expand": options?.expand,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineScaleSetExtension> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return virtualMachineScaleSetExtensionDeserializer(result.body);
}

/** The operation to get the extension. */
export async function get(
  context: Client,
  resourceGroupName: string,
  vmssExtensionName: string,
  options: VirtualMachineScaleSetExtensionsGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineScaleSetExtension> {
  const result = await _getSend(context, resourceGroupName, vmssExtensionName, options);
  return _getDeserialize(result);
}
