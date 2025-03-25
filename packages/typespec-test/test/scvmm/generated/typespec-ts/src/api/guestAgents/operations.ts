// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  GuestAgent,
  guestAgentSerializer,
  guestAgentDeserializer,
  errorResponseDeserializer,
  _GuestAgentListResult,
  _guestAgentListResultDeserializer,
} from "../../models/models.js";
import {
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsGetOptionalParams,
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

export function _guestAgentsListByVirtualMachineInstanceSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents{?api-version}",
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

export async function _guestAgentsListByVirtualMachineInstanceDeserialize(
  result: PathUncheckedResponse,
): Promise<_GuestAgentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _guestAgentListResultDeserializer(result.body);
}

/** Returns the list of GuestAgent of the given vm. */
export function guestAgentsListByVirtualMachineInstance(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<GuestAgent> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _guestAgentsListByVirtualMachineInstanceSend(
        context,
        resourceUri,
        options,
      ),
    _guestAgentsListByVirtualMachineInstanceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _guestAgentsDeleteSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default{?api-version}",
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
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _guestAgentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Implements GuestAgent DELETE method. */
export async function guestAgentsDelete(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _guestAgentsDeleteSend(context, resourceUri, options);
  return _guestAgentsDeleteDeserialize(result);
}

export function _guestAgentsCreateSend(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default{?api-version}",
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
      body: guestAgentSerializer(resource),
    });
}

export async function _guestAgentsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<GuestAgent> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return guestAgentDeserializer(result.body);
}

/** Create Or Update GuestAgent. */
export function guestAgentsCreate(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<GuestAgent>, GuestAgent> {
  return getLongRunningPoller(
    context,
    _guestAgentsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _guestAgentsCreateSend(context, resourceUri, resource, options),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<GuestAgent>, GuestAgent>;
}

export function _guestAgentsGetSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default{?api-version}",
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

export async function _guestAgentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GuestAgent> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return guestAgentDeserializer(result.body);
}

/** Implements GuestAgent GET method. */
export async function guestAgentsGet(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): Promise<GuestAgent> {
  const result = await _guestAgentsGetSend(context, resourceUri, options);
  return _guestAgentsGetDeserialize(result);
}
