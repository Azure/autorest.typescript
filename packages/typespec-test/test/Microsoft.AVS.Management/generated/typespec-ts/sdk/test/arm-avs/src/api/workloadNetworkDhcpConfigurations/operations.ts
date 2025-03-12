// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkDhcpList,
  _workloadNetworkDhcpListDeserializer,
  WorkloadNetworkDhcp,
  workloadNetworkDhcpSerializer,
  workloadNetworkDhcpDeserializer,
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
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsListOptionalParams,
} from "./options.js";

export function _workloadNetworkDhcpConfigurationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  options: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dhcpId: dhcpId,
      "api-version": context.apiVersion,
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

export async function _workloadNetworkDhcpConfigurationsDeleteDeserialize(
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

/** Delete a WorkloadNetworkDhcp */
export function workloadNetworkDhcpConfigurationsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  options: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDhcpConfigurationsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDhcpConfigurationsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          dhcpId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworkDhcpConfigurationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dhcpId: dhcpId,
      "api-version": context.apiVersion,
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
      body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
    });
}

export async function _workloadNetworkDhcpConfigurationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Update a WorkloadNetworkDhcp */
export function workloadNetworkDhcpConfigurationsUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDhcpConfigurationsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDhcpConfigurationsUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          dhcpId,
          workloadNetworkDhcp,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _workloadNetworkDhcpConfigurationsCreateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dhcpId: dhcpId,
      "api-version": context.apiVersion,
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
      body: workloadNetworkDhcpSerializer(workloadNetworkDhcp),
    });
}

export async function _workloadNetworkDhcpConfigurationsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Create a WorkloadNetworkDhcp */
export function workloadNetworkDhcpConfigurationsCreate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dhcpId: string,
  workloadNetworkDhcp: WorkloadNetworkDhcp,
  options: WorkloadNetworkDhcpConfigurationsCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDhcpConfigurationsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDhcpConfigurationsCreateSend(
          context,
          resourceGroupName,
          privateCloudName,
          dhcpId,
          workloadNetworkDhcp,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
}

export function _workloadNetworkDhcpConfigurationsGetSend(
  context: Client,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dhcpId: dhcpId,
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

export async function _workloadNetworkDhcpConfigurationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDhcp> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDhcpDeserializer(result.body);
}

/** Get a WorkloadNetworkDhcp */
export async function workloadNetworkDhcpConfigurationsGet(
  context: Client,
  resourceGroupName: string,
  dhcpId: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkDhcp> {
  const result = await _workloadNetworkDhcpConfigurationsGetSend(
    context,
    resourceGroupName,
    dhcpId,
    privateCloudName,
    options,
  );
  return _workloadNetworkDhcpConfigurationsGetDeserialize(result);
}

export function _workloadNetworkDhcpConfigurationsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations{?api-version}",
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

export async function _workloadNetworkDhcpConfigurationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDhcpList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDhcpListDeserializer(result.body);
}

/** List WorkloadNetworkDhcp resources by WorkloadNetwork */
export function workloadNetworkDhcpConfigurationsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDhcpConfigurationsListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDhcp> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkDhcpConfigurationsListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkDhcpConfigurationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
