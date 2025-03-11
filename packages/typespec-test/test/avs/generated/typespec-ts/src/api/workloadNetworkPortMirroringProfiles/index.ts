// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkPortMirroringList,
  _workloadNetworkPortMirroringListDeserializer,
  WorkloadNetworkPortMirroring,
  workloadNetworkPortMirroringSerializer,
  workloadNetworkPortMirroringDeserializer,
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

export function _workloadNetworkPortMirroringProfilesDeleteSend(
  context: Client,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      portMirroringId: portMirroringId,
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

export async function _workloadNetworkPortMirroringProfilesDeleteDeserialize(
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

/** Delete a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesDelete(
  context: Client,
  resourceGroupName: string,
  portMirroringId: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesDeleteSend(
          context,
          resourceGroupName,
          portMirroringId,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _workloadNetworkPortMirroringProfilesUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      portMirroringId: portMirroringId,
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
      body: workloadNetworkPortMirroringSerializer(
        workloadNetworkPortMirroring,
      ),
    });
}

export async function _workloadNetworkPortMirroringProfilesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Update a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworkPortMirroringProfilesCreateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      portMirroringId: portMirroringId,
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
      body: workloadNetworkPortMirroringSerializer(
        workloadNetworkPortMirroring,
      ),
    });
}

export async function _workloadNetworkPortMirroringProfilesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Create a WorkloadNetworkPortMirroring */
export function workloadNetworkPortMirroringProfilesCreate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
  options: WorkloadNetworkPortMirroringProfilesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<WorkloadNetworkPortMirroring>,
  WorkloadNetworkPortMirroring
> {
  return getLongRunningPoller(
    context,
    _workloadNetworkPortMirroringProfilesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _workloadNetworkPortMirroringProfilesCreateSend(
          context,
          resourceGroupName,
          privateCloudName,
          portMirroringId,
          workloadNetworkPortMirroring,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
}

export function _workloadNetworkPortMirroringProfilesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  options: WorkloadNetworkPortMirroringProfilesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      portMirroringId: portMirroringId,
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

export async function _workloadNetworkPortMirroringProfilesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkPortMirroring> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkPortMirroringDeserializer(result.body);
}

/** Get a WorkloadNetworkPortMirroring */
export async function workloadNetworkPortMirroringProfilesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  portMirroringId: string,
  options: WorkloadNetworkPortMirroringProfilesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<WorkloadNetworkPortMirroring> {
  const result = await _workloadNetworkPortMirroringProfilesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    portMirroringId,
    options,
  );
  return _workloadNetworkPortMirroringProfilesGetDeserialize(result);
}

export function _workloadNetworkPortMirroringProfilesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles{?api-version}",
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

export async function _workloadNetworkPortMirroringProfilesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkPortMirroringList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkPortMirroringListDeserializer(result.body);
}

/** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
export function workloadNetworkPortMirroringProfilesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkPortMirroringProfilesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WorkloadNetworkPortMirroring> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _workloadNetworkPortMirroringProfilesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _workloadNetworkPortMirroringProfilesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
