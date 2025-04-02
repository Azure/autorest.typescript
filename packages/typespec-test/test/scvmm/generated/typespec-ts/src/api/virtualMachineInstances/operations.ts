// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  VirtualMachineInstance,
  virtualMachineInstanceSerializer,
  virtualMachineInstanceDeserializer,
  VirtualMachineInstanceUpdate,
  virtualMachineInstanceUpdateSerializer,
  _VirtualMachineInstanceListResult,
  _virtualMachineInstanceListResultDeserializer,
  StopVirtualMachineOptions,
  stopVirtualMachineOptionsSerializer,
  VirtualMachineCreateCheckpoint,
  virtualMachineCreateCheckpointSerializer,
  VirtualMachineDeleteCheckpoint,
  virtualMachineDeleteCheckpointSerializer,
  VirtualMachineRestoreCheckpoint,
  virtualMachineRestoreCheckpointSerializer,
} from "../../models/models.js";
import {
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesGetOptionalParams,
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

export function _virtualMachineInstancesRestoreCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint{?api-version}",
    {
      resourceUri: resourceUri,
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
      body: virtualMachineRestoreCheckpointSerializer(body),
    });
}

export async function _virtualMachineInstancesRestoreCheckpointDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Restores to a checkpoint in virtual machine instance. */
export function virtualMachineInstancesRestoreCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesRestoreCheckpointDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesRestoreCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesDeleteCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint{?api-version}",
    {
      resourceUri: resourceUri,
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
      body: virtualMachineDeleteCheckpointSerializer(body),
    });
}

export async function _virtualMachineInstancesDeleteCheckpointDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a checkpoint in virtual machine instance. */
export function virtualMachineInstancesDeleteCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesDeleteCheckpointDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesDeleteCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesCreateCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint{?api-version}",
    {
      resourceUri: resourceUri,
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
      body: virtualMachineCreateCheckpointSerializer(body),
    });
}

export async function _virtualMachineInstancesCreateCheckpointDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Creates a checkpoint in virtual machine instance. */
export function virtualMachineInstancesCreateCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesCreateCheckpointDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesCreateCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesRestartSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart{?api-version}",
    {
      resourceUri: resourceUri,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineInstancesRestartDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** The operation to restart a virtual machine instance. */
export function virtualMachineInstancesRestart(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesRestartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesRestartSend(context, resourceUri, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesStartSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start{?api-version}",
    {
      resourceUri: resourceUri,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineInstancesStartDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** The operation to start a virtual machine instance. */
export function virtualMachineInstancesStart(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesStartSend(context, resourceUri, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesStopSend(
  context: Client,
  resourceUri: string,
  body: {
    body?: StopVirtualMachineOptions;
  },
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop{?api-version}",
    {
      resourceUri: resourceUri,
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
        : stopVirtualMachineOptionsSerializer(options["body"]),
    });
}

export async function _virtualMachineInstancesStopDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** The operation to power off (stop) a virtual machine instance. */
export function virtualMachineInstancesStop(
  context: Client,
  resourceUri: string,
  body: {
    body?: StopVirtualMachineOptions;
  },
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesStopSend(context, resourceUri, body, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesListSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances{?api-version}",
    {
      resourceUri: resourceUri,
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

export async function _virtualMachineInstancesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualMachineInstanceListResultDeserializer(result.body);
}

/** Lists all of the virtual machine instances within the specified parent resource. */
export function virtualMachineInstancesList(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachineInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _virtualMachineInstancesListSend(context, resourceUri, options),
    _virtualMachineInstancesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineInstancesDeleteSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default{?api-version,force,deleteFromHost}",
    {
      resourceUri: resourceUri,
      "api-version": context.apiVersion,
      force: options?.force,
      deleteFromHost: options?.deleteFromHost,
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

export async function _virtualMachineInstancesDeleteDeserialize(
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

/** The operation to delete a virtual machine instance. */
export function virtualMachineInstancesDelete(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesDeleteSend(context, resourceUri, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesUpdateSend(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default{?api-version}",
    {
      resourceUri: resourceUri,
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
      body: virtualMachineInstanceUpdateSerializer(properties),
    });
}

export async function _virtualMachineInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineInstance> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineInstanceDeserializer(result.body);
}

/** The operation to update a virtual machine instance. */
export function virtualMachineInstancesUpdate(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesUpdateSend(
          context,
          resourceUri,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _virtualMachineInstancesCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default{?api-version}",
    {
      resourceUri: resourceUri,
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
      body: virtualMachineInstanceSerializer(resource),
    });
}

export async function _virtualMachineInstancesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineInstanceDeserializer(result.body);
}

/** The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. */
export function virtualMachineInstancesCreateOrUpdate(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesCreateOrUpdateSend(
          context,
          resourceUri,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _virtualMachineInstancesGetSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default{?api-version}",
    {
      resourceUri: resourceUri,
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

export async function _virtualMachineInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineInstanceDeserializer(result.body);
}

/** Retrieves information about a virtual machine instance. */
export async function virtualMachineInstancesGet(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineInstance> {
  const result = await _virtualMachineInstancesGetSend(
    context,
    resourceUri,
    options,
  );
  return _virtualMachineInstancesGetDeserialize(result);
}
