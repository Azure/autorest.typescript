// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  stopRequestSerializer,
  SAPCentralServerInstance,
  sapCentralServerInstanceSerializer,
  sapCentralServerInstanceDeserializer,
  UpdateSAPCentralInstanceRequest,
  updateSAPCentralInstanceRequestSerializer,
  _SAPCentralServerInstanceListResult,
  _sapCentralServerInstanceListResultDeserializer,
} from "../../models/models.js";
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
import {
  SAPCentralServerInstancesStopOptionalParams,
  SAPCentralServerInstancesStartOptionalParams,
  SAPCentralServerInstancesListOptionalParams,
  SAPCentralServerInstancesDeleteOptionalParams,
  SAPCentralServerInstancesUpdateOptionalParams,
  SAPCentralServerInstancesCreateOptionalParams,
  SAPCentralServerInstancesGetOptionalParams,
} from "./options.js";

export function _sapCentralServerInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/stop{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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

export async function _sapCentralServerInstancesStopDeserialize(
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

/** Stops the SAP Central Services Instance. */
export function sapCentralServerInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapCentralServerInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapCentralServerInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapCentralServerInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/start{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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

export async function _sapCentralServerInstancesStartDeserialize(
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

/** Starts the SAP Central Services Instance. */
export function sapCentralServerInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapCentralServerInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapCentralServerInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapCentralServerInstancesListSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPCentralServerInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances{?api-version}",
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

export async function _sapCentralServerInstancesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPCentralServerInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapCentralServerInstanceListResultDeserializer(result.body);
}

/** Lists the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource. */
export function sapCentralServerInstancesList(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPCentralServerInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SAPCentralServerInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapCentralServerInstancesListSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    _sapCentralServerInstancesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapCentralServerInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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

export async function _sapCentralServerInstancesDeleteDeserialize(
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

/** Deletes the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the Virtual Instance for SAP solutions resource, using the delete operation on it. */
export function sapCentralServerInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sapCentralServerInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapCentralServerInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sapCentralServerInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  properties: UpdateSAPCentralInstanceRequest,
  options: SAPCentralServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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
      body: updateSAPCentralInstanceRequestSerializer(properties),
    });
}

export async function _sapCentralServerInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapCentralServerInstanceDeserializer(result.body);
}

/** Updates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This can be used to update tags on the resource. */
export async function sapCentralServerInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  properties: UpdateSAPCentralInstanceRequest,
  options: SAPCentralServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPCentralServerInstance> {
  const result = await _sapCentralServerInstancesUpdateSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    properties,
    options,
  );
  return _sapCentralServerInstancesUpdateDeserialize(result);
}

export function _sapCentralServerInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  resource: SAPCentralServerInstance,
  options: SAPCentralServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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
      body: sapCentralServerInstanceSerializer(resource),
    });
}

export async function _sapCentralServerInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapCentralServerInstanceDeserializer(result.body);
}

/** Creates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function sapCentralServerInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  resource: SAPCentralServerInstance,
  options: SAPCentralServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SAPCentralServerInstance>,
  SAPCentralServerInstance
> {
  return getLongRunningPoller(
    context,
    _sapCentralServerInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapCentralServerInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<SAPCentralServerInstance>,
    SAPCentralServerInstance
  >;
}

export function _sapCentralServerInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      centralInstanceName: centralInstanceName,
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

export async function _sapCentralServerInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapCentralServerInstanceDeserializer(result.body);
}

/** Gets the SAP Central Services Instance resource. */
export async function sapCentralServerInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPCentralServerInstance> {
  const result = await _sapCentralServerInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    options,
  );
  return _sapCentralServerInstancesGetDeserialize(result);
}
