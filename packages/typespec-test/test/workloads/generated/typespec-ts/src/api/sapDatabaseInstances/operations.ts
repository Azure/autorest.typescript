// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  stopRequestSerializer,
  SAPDatabaseInstance,
  sapDatabaseInstanceSerializer,
  sapDatabaseInstanceDeserializer,
  UpdateSAPDatabaseInstanceRequest,
  updateSAPDatabaseInstanceRequestSerializer,
  _SAPDatabaseInstanceListResult,
  _sapDatabaseInstanceListResultDeserializer,
} from "../../models/models.js";
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
import {
  SAPDatabaseInstancesStopOptionalParams,
  SAPDatabaseInstancesStartOptionalParams,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesUpdateOptionalParams,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
} from "./options.js";

export function _sapDatabaseInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/stop{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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
      body: !options["body"]
        ? options["body"]
        : stopRequestSerializer(options["body"]),
    });
}

export async function _sapDatabaseInstancesStopDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Stops the database instance of the SAP system. */
export function sapDatabaseInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapDatabaseInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapDatabaseInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          databaseInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapDatabaseInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/start{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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
      body: !options["body"]
        ? options["body"]
        : startRequestSerializer(options["body"]),
    });
}

export async function _sapDatabaseInstancesStartDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Starts the database instance of the SAP system. */
export function sapDatabaseInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapDatabaseInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapDatabaseInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          databaseInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapDatabaseInstancesListSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPDatabaseInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
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

export async function _sapDatabaseInstancesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDatabaseInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapDatabaseInstanceListResultDeserializer(result.body);
}

/** Lists the Database resources associated with a Virtual Instance for SAP solutions resource. */
export function sapDatabaseInstancesList(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPDatabaseInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SAPDatabaseInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapDatabaseInstancesListSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    _sapDatabaseInstancesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapDatabaseInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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

export async function _sapDatabaseInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes the Database resource corresponding to a Virtual Instance for SAP solutions resource. &lt;br&gt;&lt;br&gt;This will be used by service only. Delete by end user will return a Bad Request error. */
export function sapDatabaseInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sapDatabaseInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapDatabaseInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          databaseInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sapDatabaseInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  properties: UpdateSAPDatabaseInstanceRequest,
  options: SAPDatabaseInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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
      body: updateSAPDatabaseInstanceRequestSerializer(properties),
    });
}

export async function _sapDatabaseInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDatabaseInstanceDeserializer(result.body);
}

/** Updates the Database resource. */
export async function sapDatabaseInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  properties: UpdateSAPDatabaseInstanceRequest,
  options: SAPDatabaseInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPDatabaseInstance> {
  const result = await _sapDatabaseInstancesUpdateSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    properties,
    options,
  );
  return _sapDatabaseInstancesUpdateDeserialize(result);
}

export function _sapDatabaseInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  resource: SAPDatabaseInstance,
  options: SAPDatabaseInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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
      body: sapDatabaseInstanceSerializer(resource),
    });
}

export async function _sapDatabaseInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDatabaseInstanceDeserializer(result.body);
}

/** Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT by end user will return a Bad Request error. */
export function sapDatabaseInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  resource: SAPDatabaseInstance,
  options: SAPDatabaseInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPDatabaseInstance>, SAPDatabaseInstance> {
  return getLongRunningPoller(
    context,
    _sapDatabaseInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapDatabaseInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          databaseInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<SAPDatabaseInstance>, SAPDatabaseInstance>;
}

export function _sapDatabaseInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      databaseInstanceName: databaseInstanceName,
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

export async function _sapDatabaseInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDatabaseInstanceDeserializer(result.body);
}

/** Gets the SAP Database Instance resource. */
export async function sapDatabaseInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPDatabaseInstance> {
  const result = await _sapDatabaseInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options,
  );
  return _sapDatabaseInstancesGetDeserialize(result);
}
