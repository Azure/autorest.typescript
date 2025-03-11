// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AddonsCreateOrUpdateOptionalParams,
  AddonsDeleteOptionalParams,
  AddonsGetOptionalParams,
  AddonsListOptionalParams,
  AzureVMwareSolutionAPIContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  _AddonList,
  _addonListDeserializer,
  Addon,
  addonSerializer,
  addonDeserializer,
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

export function _addonsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      addonName: addonName,
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

export async function _addonsDeleteDeserialize(
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

/** Delete a Addon */
export function addonsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _addonsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _addonsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          addonName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _addonsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      addonName: addonName,
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
      body: addonSerializer(addon),
    });
}

export async function _addonsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Addon> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return addonDeserializer(result.body);
}

/** Create a Addon */
export function addonsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  addon: Addon,
  options: AddonsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Addon>, Addon> {
  return getLongRunningPoller(
    context,
    _addonsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _addonsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          addonName,
          addon,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Addon>, Addon>;
}

export function _addonsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      addonName: addonName,
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

export async function _addonsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Addon> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return addonDeserializer(result.body);
}

/** Get a Addon */
export async function addonsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  addonName: string,
  options: AddonsGetOptionalParams = { requestOptions: {} },
): Promise<Addon> {
  const result = await _addonsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    addonName,
    options,
  );
  return _addonsGetDeserialize(result);
}

export function _addonsListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons{?api-version}",
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

export async function _addonsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_AddonList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _addonListDeserializer(result.body);
}

/** List Addon resources by PrivateCloud */
export function addonsList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: AddonsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Addon> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _addonsListSend(context, resourceGroupName, privateCloudName, options),
    _addonsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
