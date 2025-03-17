// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  SAPApplicationServerInstance,
  sapApplicationServerInstanceSerializer,
  sapApplicationServerInstanceDeserializer,
  errorResponseDeserializer,
  UpdateSAPApplicationInstanceRequest,
  updateSAPApplicationInstanceRequestSerializer,
  _SAPApplicationServerInstanceListResult,
  _sapApplicationServerInstanceListResultDeserializer,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  stopRequestSerializer,
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
  SAPApplicationServerInstancesStopOptionalParams,
  SAPApplicationServerInstancesStartOptionalParams,
  SAPApplicationServerInstancesListOptionalParams,
  SAPApplicationServerInstancesDeleteOptionalParams,
  SAPApplicationServerInstancesUpdateOptionalParams,
  SAPApplicationServerInstancesCreateOptionalParams,
  SAPApplicationServerInstancesGetOptionalParams,
} from "./options.js";

export function _sapApplicationServerInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesStopOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/stop{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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

export async function _sapApplicationServerInstancesStopDeserialize(
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

/** Stops the SAP Application Server Instance. */
export function sapApplicationServerInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesStopOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapApplicationServerInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapApplicationServerInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          applicationInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapApplicationServerInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/start{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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

export async function _sapApplicationServerInstancesStartDeserialize(
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

/** Starts the SAP Application Server Instance. */
export function sapApplicationServerInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapApplicationServerInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapApplicationServerInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          applicationInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapApplicationServerInstancesListSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPApplicationServerInstancesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances{?api-version}",
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

export async function _sapApplicationServerInstancesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPApplicationServerInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapApplicationServerInstanceListResultDeserializer(result.body);
}

/** Lists the SAP Application Server Instance resources for a given Virtual Instance for SAP solutions resource. */
export function sapApplicationServerInstancesList(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPApplicationServerInstancesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPApplicationServerInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapApplicationServerInstancesListSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    _sapApplicationServerInstancesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapApplicationServerInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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

export async function _sapApplicationServerInstancesDeleteDeserialize(
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

/** Deletes the SAP Application Server Instance resource. &lt;br&gt;&lt;br&gt;This operation will be used by service only. Delete by end user will return a Bad Request error. */
export function sapApplicationServerInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sapApplicationServerInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapApplicationServerInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          applicationInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sapApplicationServerInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  properties: UpdateSAPApplicationInstanceRequest,
  options: SAPApplicationServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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
      body: updateSAPApplicationInstanceRequestSerializer(properties),
    });
}

export async function _sapApplicationServerInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPApplicationServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapApplicationServerInstanceDeserializer(result.body);
}

/** Puts the SAP Application Server Instance resource. */
export async function sapApplicationServerInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  properties: UpdateSAPApplicationInstanceRequest,
  options: SAPApplicationServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPApplicationServerInstance> {
  const result = await _sapApplicationServerInstancesUpdateSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    applicationInstanceName,
    properties,
    options,
  );
  return _sapApplicationServerInstancesUpdateDeserialize(result);
}

export function _sapApplicationServerInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  resource: SAPApplicationServerInstance,
  options: SAPApplicationServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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
      body: sapApplicationServerInstanceSerializer(resource),
    });
}

export async function _sapApplicationServerInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPApplicationServerInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapApplicationServerInstanceDeserializer(result.body);
}

/** Puts the SAP Application Server Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT by end user will return a Bad Request error. */
export function sapApplicationServerInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  resource: SAPApplicationServerInstance,
  options: SAPApplicationServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SAPApplicationServerInstance>,
  SAPApplicationServerInstance
> {
  return getLongRunningPoller(
    context,
    _sapApplicationServerInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapApplicationServerInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          applicationInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<SAPApplicationServerInstance>,
    SAPApplicationServerInstance
  >;
}

export function _sapApplicationServerInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapVirtualInstanceName: sapVirtualInstanceName,
      applicationInstanceName: applicationInstanceName,
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

export async function _sapApplicationServerInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPApplicationServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapApplicationServerInstanceDeserializer(result.body);
}

/** Gets the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource. */
export async function sapApplicationServerInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  applicationInstanceName: string,
  options: SAPApplicationServerInstancesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPApplicationServerInstance> {
  const result = await _sapApplicationServerInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    applicationInstanceName,
    options,
  );
  return _sapApplicationServerInstancesGetDeserialize(result);
}
