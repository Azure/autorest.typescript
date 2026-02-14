// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ConfigurationGroupSchema,
  configurationGroupSchemaSerializer,
  configurationGroupSchemaDeserializer,
  TagsObject,
  tagsObjectSerializer,
  _ConfigurationGroupSchemaListResult,
  _configurationGroupSchemaListResultDeserializer,
  ConfigurationGroupSchemaVersionUpdateState,
  configurationGroupSchemaVersionUpdateStateSerializer,
  configurationGroupSchemaVersionUpdateStateDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ConfigurationGroupSchemasUpdateStateOptionalParams,
  ConfigurationGroupSchemasListByPublisherOptionalParams,
  ConfigurationGroupSchemasDeleteOptionalParams,
  ConfigurationGroupSchemasUpdateOptionalParams,
  ConfigurationGroupSchemasCreateOrUpdateOptionalParams,
  ConfigurationGroupSchemasGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateStateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: ConfigurationGroupSchemaVersionUpdateState,
  options: ConfigurationGroupSchemasUpdateStateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}/updateState{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      configurationGroupSchemaName: configurationGroupSchemaName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: configurationGroupSchemaVersionUpdateStateSerializer(parameters),
    });
}

export async function _updateStateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupSchemaVersionUpdateState> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupSchemaVersionUpdateStateDeserializer(result.body);
}

/** Update configuration group schema state. */
export function updateState(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: ConfigurationGroupSchemaVersionUpdateState,
  options: ConfigurationGroupSchemasUpdateStateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ConfigurationGroupSchemaVersionUpdateState>,
  ConfigurationGroupSchemaVersionUpdateState
> {
  return getLongRunningPoller(context, _updateStateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateStateSend(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<
    OperationState<ConfigurationGroupSchemaVersionUpdateState>,
    ConfigurationGroupSchemaVersionUpdateState
  >;
}

export function _listByPublisherSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: ConfigurationGroupSchemasListByPublisherOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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

export async function _listByPublisherDeserialize(
  result: PathUncheckedResponse,
): Promise<_ConfigurationGroupSchemaListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _configurationGroupSchemaListResultDeserializer(result.body);
}

/** Gets information of the configuration group schemas under a publisher. */
export function listByPublisher(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: ConfigurationGroupSchemasListByPublisherOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ConfigurationGroupSchema> {
  return buildPagedAsyncIterator(
    context,
    () => _listByPublisherSend(context, resourceGroupName, publisherName, options),
    _listByPublisherDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  options: ConfigurationGroupSchemasDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      configurationGroupSchemaName: configurationGroupSchemaName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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

/** Deletes a specified configuration group schema. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  options: ConfigurationGroupSchemasDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: TagsObject,
  options: ConfigurationGroupSchemasUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      configurationGroupSchemaName: configurationGroupSchemaName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupSchema> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupSchemaDeserializer(result.body);
}

/** Updates a configuration group schema resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: TagsObject,
  options: ConfigurationGroupSchemasUpdateOptionalParams = { requestOptions: {} },
): Promise<ConfigurationGroupSchema> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    configurationGroupSchemaName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: ConfigurationGroupSchema,
  options: ConfigurationGroupSchemasCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      configurationGroupSchemaName: configurationGroupSchemaName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      body: configurationGroupSchemaSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationGroupSchema> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupSchemaDeserializer(result.body);
}

/** Creates or updates a configuration group schema. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  parameters: ConfigurationGroupSchema,
  options: ConfigurationGroupSchemasCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ConfigurationGroupSchema>, ConfigurationGroupSchema> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        configurationGroupSchemaName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<ConfigurationGroupSchema>, ConfigurationGroupSchema>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  options: ConfigurationGroupSchemasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      configurationGroupSchemaName: configurationGroupSchemaName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
): Promise<ConfigurationGroupSchema> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return configurationGroupSchemaDeserializer(result.body);
}

/** Gets information about the specified configuration group schema. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  configurationGroupSchemaName: string,
  options: ConfigurationGroupSchemasGetOptionalParams = { requestOptions: {} },
): Promise<ConfigurationGroupSchema> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    configurationGroupSchemaName,
    options,
  );
  return _getDeserialize(result);
}
