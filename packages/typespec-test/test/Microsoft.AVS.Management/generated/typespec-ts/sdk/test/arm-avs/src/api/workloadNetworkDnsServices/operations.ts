// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkDnsServicesList,
  _workloadNetworkDnsServicesListDeserializer,
  WorkloadNetworkDnsService,
  workloadNetworkDnsServiceSerializer,
  workloadNetworkDnsServiceDeserializer,
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
  WorkloadNetworkDnsServicesDeleteOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesListOptionalParams,
} from "./options.js";

export function _workloadNetworkDnsServicesDeleteSend(
  context: Client,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dnsServiceId: dnsServiceId,
      privateCloudName: privateCloudName,
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

export async function _workloadNetworkDnsServicesDeleteDeserialize(
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

/** Delete a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesDelete(
  context: Client,
  resourceGroupName: string,
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesDeleteSend(
          context,
          resourceGroupName,
          dnsServiceId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworkDnsServicesUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _workloadNetworkDnsServicesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Update a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworkDnsServicesCreateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _workloadNetworkDnsServicesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Create a WorkloadNetworkDnsService */
export function workloadNetworkDnsServicesCreate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  workloadNetworkDnsService: WorkloadNetworkDnsService,
  options: WorkloadNetworkDnsServicesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkDnsService>,
  WorkloadNetworkDnsService
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkDnsServicesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkDnsServicesCreateSend(
          context,
          resourceGroupName,
          privateCloudName,
          dnsServiceId,
          workloadNetworkDnsService,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _workloadNetworkDnsServicesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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

export async function _workloadNetworkDnsServicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkDnsService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkDnsServiceDeserializer(result.body);
}

/** Get a WorkloadNetworkDnsService */
export async function workloadNetworkDnsServicesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsService> {
  const result = await _workloadNetworkDnsServicesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    options,
  );
  return _workloadNetworkDnsServicesGetDeserialize(result);
}

export function _workloadNetworkDnsServicesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices{?api-version}",
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

export async function _workloadNetworkDnsServicesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkDnsServicesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkDnsServicesListDeserializer(result.body);
}

/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function workloadNetworkDnsServicesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkDnsServicesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkDnsServicesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
