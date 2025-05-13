// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkVMGroupsList,
  _workloadNetworkVMGroupsListDeserializer,
  WorkloadNetworkVMGroup,
  workloadNetworkVMGroupSerializer,
  workloadNetworkVMGroupDeserializer,
} from "../../models/models.js";
import {
  WorkloadNetworkVmGroupsDeleteOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsListOptionalParams,
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
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmGroupId: vmGroupId,
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

/** Delete a WorkloadNetworkVMGroup */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  vmGroupId: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsDeleteOptionalParams = { requestOptions: {} },
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
          vmGroupId,
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
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      vmGroupId: vmGroupId,
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
      body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Update a WorkloadNetworkVMGroup */
export function update(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      vmGroupId: vmGroupId,
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
      body: workloadNetworkVMGroupSerializer(workloadNetworkVMGroup),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Create a WorkloadNetworkVMGroup */
export function create(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  workloadNetworkVMGroup: WorkloadNetworkVMGroup,
  options: WorkloadNetworkVmGroupsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      vmGroupId: vmGroupId,
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
): Promise<WorkloadNetworkVMGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkVMGroupDeserializer(result.body);
}

/** Get a WorkloadNetworkVMGroup */
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  vmGroupId: string,
  options: WorkloadNetworkVmGroupsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkVMGroup> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    vmGroupId,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups{?api%2Dversion}",
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
): Promise<_WorkloadNetworkVMGroupsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkVMGroupsListDeserializer(result.body);
}

/** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkVmGroupsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkVMGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
