// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  SiteNetworkService,
  siteNetworkServiceSerializer,
  siteNetworkServiceDeserializer,
  _SiteNetworkServiceListResult,
  _siteNetworkServiceListResultDeserializer,
  CancelInformation,
  cancelInformationSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SiteNetworkServicesCancelOperationOptionalParams,
  SiteNetworkServicesListBySubscriptionOptionalParams,
  SiteNetworkServicesListByResourceGroupOptionalParams,
  SiteNetworkServicesDeleteOptionalParams,
  SiteNetworkServicesUpdateTagsOptionalParams,
  SiteNetworkServicesCreateOrUpdateOptionalParams,
  SiteNetworkServicesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _cancelOperationSend(
  context: Client,
  parameters: CancelInformation,
  options: SiteNetworkServicesCancelOperationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/cancelSiteNetworkServiceOperation{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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
      body: cancelInformationSerializer(parameters),
    });
}

export async function _cancelOperationDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Cancels an ongoing long-running PUT operation for the specified Site Network Service resource. Other operations are not supported for cancellation at this time. */
export function cancelOperation(
  context: Client,
  parameters: CancelInformation,
  options: SiteNetworkServicesCancelOperationOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _cancelOperationDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _cancelOperationSend(context, parameters, options),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<void>, void>;
}

export function _listBySubscriptionSend(
  context: Client,
  options: SiteNetworkServicesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/siteNetworkServices{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SiteNetworkServiceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _siteNetworkServiceListResultDeserializer(result.body);
}

/** Lists all sites in the network service in a subscription. */
export function listBySubscription(
  context: Client,
  options: SiteNetworkServicesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SiteNetworkService> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SiteNetworkServicesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SiteNetworkServiceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _siteNetworkServiceListResultDeserializer(result.body);
}

/** Lists all site network services. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SiteNetworkServicesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SiteNetworkService> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  options: SiteNetworkServicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteNetworkServiceName: siteNetworkServiceName,
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

/** Deletes the specified site network service. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  options: SiteNetworkServicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, siteNetworkServiceName, options),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateTagsSend(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  parameters: TagsObject,
  options: SiteNetworkServicesUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteNetworkServiceName: siteNetworkServiceName,
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

export async function _updateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<SiteNetworkService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteNetworkServiceDeserializer(result.body);
}

/** Updates a site update tags. */
export async function updateTags(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  parameters: TagsObject,
  options: SiteNetworkServicesUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<SiteNetworkService> {
  const result = await _updateTagsSend(
    context,
    resourceGroupName,
    siteNetworkServiceName,
    parameters,
    options,
  );
  return _updateTagsDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  parameters: SiteNetworkService,
  options: SiteNetworkServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteNetworkServiceName: siteNetworkServiceName,
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
      body: siteNetworkServiceSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SiteNetworkService> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteNetworkServiceDeserializer(result.body);
}

/** Creates or updates a network site. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  parameters: SiteNetworkService,
  options: SiteNetworkServicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SiteNetworkService>, SiteNetworkService> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, siteNetworkServiceName, parameters, options),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<SiteNetworkService>, SiteNetworkService>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  options: SiteNetworkServicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteNetworkServiceName: siteNetworkServiceName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<SiteNetworkService> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteNetworkServiceDeserializer(result.body);
}

/** Gets information about the specified site network service. */
export async function get(
  context: Client,
  resourceGroupName: string,
  siteNetworkServiceName: string,
  options: SiteNetworkServicesGetOptionalParams = { requestOptions: {} },
): Promise<SiteNetworkService> {
  const result = await _getSend(context, resourceGroupName, siteNetworkServiceName, options);
  return _getDeserialize(result);
}
