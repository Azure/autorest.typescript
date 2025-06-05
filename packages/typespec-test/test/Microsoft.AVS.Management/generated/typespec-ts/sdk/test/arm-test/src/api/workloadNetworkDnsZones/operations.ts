// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkDnsZonesList,
  _workloadNetworkDnsZonesListDeserializer,
  WorkloadNetworkDnsZone,
  workloadNetworkDnsZoneSerializer,
  workloadNetworkDnsZoneDeserializer,
} from "../../models/models.js";
import {
  WorkloadNetworkDnsZonesDeleteOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesListOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dnsZoneId: dnsZoneId,
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

/** Delete a WorkloadNetworkDnsZone */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  dnsZoneId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesDeleteOptionalParams = { requestOptions: {} },
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
          dnsZoneId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsZoneId: dnsZoneId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsZone */
export function update(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsZoneId: dnsZoneId,
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
      body: workloadNetworkDnsZoneSerializer(workloadNetworkDnsZone),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsZone */
export function create(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  workloadNetworkDnsZone: WorkloadNetworkDnsZone,
  options: WorkloadNetworkDnsZonesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        privateCloudName,
        dnsZoneId,
        workloadNetworkDnsZone,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsZone>,
    WorkloadNetworkDnsZone
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  options: WorkloadNetworkDnsZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsZoneId: dnsZoneId,
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
): Promise<WorkloadNetworkDnsZone> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsZoneDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsZone */
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsZoneId: string,
  options: WorkloadNetworkDnsZonesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsZone> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    dnsZoneId,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones{?api%2Dversion}",
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
): Promise<_WorkloadNetworkDnsZonesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDnsZonesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsZonesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkDnsZone> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
