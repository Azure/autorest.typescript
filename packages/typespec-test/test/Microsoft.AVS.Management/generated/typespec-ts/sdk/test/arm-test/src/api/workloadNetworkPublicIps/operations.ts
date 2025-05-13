// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkPublicIPsList,
  _workloadNetworkPublicIPsListDeserializer,
  WorkloadNetworkPublicIP,
  workloadNetworkPublicIPSerializer,
  workloadNetworkPublicIPDeserializer,
} from "../../models/models.js";
import {
  WorkloadNetworkPublicIpsDeleteOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsListOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publicIPId: publicIPId,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
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

export async function _$deleteDeserialize(
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

/** Delete a WorkloadNetworkPublicIP */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publicIPId: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _$deleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
          context,
          resourceGroupName,
          publicIPId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      publicIPId: publicIPId,
      "api%2Dversion": context.apiVersion,
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
      body: workloadNetworkPublicIPSerializer(workloadNetworkPublicIP),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Create a WorkloadNetworkPublicIP */
export function create(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  workloadNetworkPublicIP: WorkloadNetworkPublicIP,
  options: WorkloadNetworkPublicIpsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPublicIP>,
  WorkloadNetworkPublicIP
> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      publicIPId: publicIPId,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPublicIP> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPublicIPDeserializer(result.body);
}

/** Get a WorkloadNetworkPublicIP */
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  publicIPId: string,
  options: WorkloadNetworkPublicIpsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkPublicIP> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    publicIPId,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      "api%2Dversion": context.apiVersion,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPublicIPsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkPublicIPsListDeserializer(result.body);
}

/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPublicIpsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkPublicIP> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
