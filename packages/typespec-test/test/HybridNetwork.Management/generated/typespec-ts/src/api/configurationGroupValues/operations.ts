// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  ConfigurationGroupValue,
  configurationGroupValueSerializer,
  configurationGroupValueDeserializer,
  _ConfigurationGroupValueListResult,
  _configurationGroupValueListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ConfigurationGroupValuesListBySubscriptionOptionalParams,
  ConfigurationGroupValuesListByResourceGroupOptionalParams,
  ConfigurationGroupValuesDeleteOptionalParams,
  ConfigurationGroupValuesUpdateTagsOptionalParams,
  ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ConfigurationGroupValuesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listBySubscriptionSend(
  context: Client,
  options: ConfigurationGroupValuesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/configurationGroupValues{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ConfigurationGroupValueListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _configurationGroupValueListResultDeserializer(result.body);
}

/** Lists all sites in the configuration group value in a subscription. */
export function listBySubscription(
  context: Client,
  options: ConfigurationGroupValuesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ConfigurationGroupValue> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ConfigurationGroupValuesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ConfigurationGroupValueListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _configurationGroupValueListResultDeserializer(result.body);
}

/** Lists all the hybrid network configurationGroupValues in a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ConfigurationGroupValuesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ConfigurationGroupValue> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  options: ConfigurationGroupValuesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configurationGroupValueName: configurationGroupValueName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes the specified hybrid configuration group value. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  options: ConfigurationGroupValuesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, configurationGroupValueName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateTagsSend(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  parameters: TagsObject,
  options: ConfigurationGroupValuesUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configurationGroupValueName: configurationGroupValueName,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: tagsObjectSerializer(parameters),
    });
}

export async function _updateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupValue> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupValueDeserializer(result.body);
}

/** Updates a hybrid configuration group tags. */
export async function updateTags(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  parameters: TagsObject,
  options: ConfigurationGroupValuesUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<ConfigurationGroupValue> {
  const result = await _updateTagsSend(
    context,
    resourceGroupName,
    configurationGroupValueName,
    parameters,
    options,
  );
  return _updateTagsDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  parameters: ConfigurationGroupValue,
  options: ConfigurationGroupValuesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configurationGroupValueName: configurationGroupValueName,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: configurationGroupValueSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupValue> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupValueDeserializer(result.body);
}

/** Creates or updates a hybrid configuration group value. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  parameters: ConfigurationGroupValue,
  options: ConfigurationGroupValuesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ConfigurationGroupValue>, ConfigurationGroupValue> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        configurationGroupValueName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ConfigurationGroupValue>, ConfigurationGroupValue>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  options: ConfigurationGroupValuesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configurationGroupValueName: configurationGroupValueName,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupValue> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupValueDeserializer(result.body);
}

/** Gets information about the specified hybrid configuration group values. */
export async function get(
  context: Client,
  resourceGroupName: string,
  configurationGroupValueName: string,
  options: ConfigurationGroupValuesGetOptionalParams = { requestOptions: {} },
): Promise<ConfigurationGroupValue> {
  const result = await _getSend(context, resourceGroupName, configurationGroupValueName, options);
  return _getDeserialize(result);
}
