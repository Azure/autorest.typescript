// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesStartOptionalParams,
  SAPDatabaseInstancesStopOptionalParams,
  SAPDatabaseInstancesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  stopRequestSerializer,
  SAPDatabaseInstance,
  sAPDatabaseInstanceSerializer,
  sAPDatabaseInstanceDeserializer,
  updateSAPDatabaseInstanceRequestSerializer,
  _SAPDatabaseInstanceListResult,
  _sAPDatabaseInstanceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _stopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/stop",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: !options["body"]
        ? options["body"]
        : stopRequestSerializer(options["body"]),
    });
}

export async function _stopDeserialize(
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
export function stop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(context, _stopDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _stopSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<OperationStatusResult>,
    OperationStatusResult
  >;
}

export function _startSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/start",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: !options["body"]
        ? options["body"]
        : startRequestSerializer(options["body"]),
    });
}

export async function _startDeserialize(
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
export function start(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(context, _startDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _startSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<OperationStatusResult>,
    OperationStatusResult
  >;
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPDatabaseInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDatabaseInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sAPDatabaseInstanceListResultDeserializer(result.body);
}

/** Lists the Database resources associated with a Virtual Instance for SAP solutions resource. */
export function list(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPDatabaseInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SAPDatabaseInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listSend(context, resourceGroupName, sapVirtualInstanceName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _$deleteDeserialize(
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
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _$deleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
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

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: updateSAPDatabaseInstanceRequestSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPDatabaseInstanceDeserializer(result.body);
}

/** Updates the Database resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPDatabaseInstance> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options,
  );
  return _updateDeserialize(result);
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPDatabaseInstanceSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPDatabaseInstanceDeserializer(result.body);
}

/** Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT by end user will return a Bad Request error. */
export function create(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPDatabaseInstance>, SAPDatabaseInstance> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        databaseInstanceName,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<SAPDatabaseInstance>, SAPDatabaseInstance>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      databaseInstanceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDatabaseInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPDatabaseInstanceDeserializer(result.body);
}

/** Gets the SAP Database Instance resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  databaseInstanceName: string,
  options: SAPDatabaseInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPDatabaseInstance> {
  const result = await _getSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options,
  );
  return _getDeserialize(result);
}
