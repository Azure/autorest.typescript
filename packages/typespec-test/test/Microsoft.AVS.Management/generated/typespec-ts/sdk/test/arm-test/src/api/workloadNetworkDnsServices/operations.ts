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
import {
  WorkloadNetworkDnsServicesDeleteOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesListOptionalParams,
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
  dnsServiceId: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      dnsServiceId: dnsServiceId,
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

/** Delete a WorkloadNetworkDnsService */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
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
    _$deleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
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

export function _updateSend(
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _updateDeserialize(
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
export function update(
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
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _createSend(
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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
      body: workloadNetworkDnsServiceSerializer(workloadNetworkDnsService),
    });
}

export async function _createDeserialize(
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
export function create(
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
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        privateCloudName,
        dnsServiceId,
        workloadNetworkDnsService,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<WorkloadNetworkDnsService>,
    WorkloadNetworkDnsService
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      dnsServiceId: dnsServiceId,
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
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  dnsServiceId: string,
  options: WorkloadNetworkDnsServicesGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkDnsService> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices{?api%2Dversion}",
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
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkDnsServicesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkDnsService> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
