// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AvailabilitySet,
  availabilitySetSerializer,
  availabilitySetDeserializer,
  AvailabilitySetTagsUpdate,
  availabilitySetTagsUpdateSerializer,
  _AvailabilitySetListResult,
  _availabilitySetListResultDeserializer,
} from "../../models/models.js";
import {
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsGetOptionalParams,
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

export function _availabilitySetsListBySubscriptionSend(
  context: Client,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _availabilitySetsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvailabilitySetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _availabilitySetListResultDeserializer(result.body);
}

/** List of AvailabilitySets in a subscription. */
export function availabilitySetsListBySubscription(
  context: Client,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () => _availabilitySetsListBySubscriptionSend(context, options),
    _availabilitySetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _availabilitySetsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _availabilitySetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvailabilitySetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _availabilitySetListResultDeserializer(result.body);
}

/** List of AvailabilitySets in a resource group. */
export function availabilitySetsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _availabilitySetsListByResourceGroupSend(
        context,
        resourceGroupName,
        options,
      ),
    _availabilitySetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _availabilitySetsDeleteSend(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}{?api-version,force}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      availabilitySetResourceName: availabilitySetResourceName,
      "api-version": context.apiVersion,
      force: options?.force,
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

export async function _availabilitySetsDeleteDeserialize(
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

/** Deregisters the ScVmm availability set from Azure. */
export function availabilitySetsDelete(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _availabilitySetsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsDeleteSend(
          context,
          resourceGroupName,
          availabilitySetResourceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _availabilitySetsUpdateSend(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      availabilitySetResourceName: availabilitySetResourceName,
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
      body: availabilitySetTagsUpdateSerializer(properties),
    });
}

export async function _availabilitySetsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return availabilitySetDeserializer(result.body);
}

/** Updates the AvailabilitySets resource. */
export function availabilitySetsUpdate(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(
    context,
    _availabilitySetsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsUpdateSend(
          context,
          resourceGroupName,
          availabilitySetResourceName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      availabilitySetResourceName: availabilitySetResourceName,
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
      body: availabilitySetSerializer(resource),
    });
}

export async function _availabilitySetsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return availabilitySetDeserializer(result.body);
}

/** Onboards the ScVmm availability set as an Azure resource. */
export function availabilitySetsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(
    context,
    _availabilitySetsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsCreateOrUpdateSend(
          context,
          resourceGroupName,
          availabilitySetResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsGetSend(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      availabilitySetResourceName: availabilitySetResourceName,
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

export async function _availabilitySetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return availabilitySetDeserializer(result.body);
}

/** Implements AvailabilitySet GET method. */
export async function availabilitySetsGet(
  context: Client,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): Promise<AvailabilitySet> {
  const result = await _availabilitySetsGetSend(
    context,
    resourceGroupName,
    availabilitySetResourceName,
    options,
  );
  return _availabilitySetsGetDeserialize(result);
}
