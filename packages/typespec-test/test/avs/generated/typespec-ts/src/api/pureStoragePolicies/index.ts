// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  PureStoragePoliciesCreateOrUpdateOptionalParams,
  PureStoragePoliciesDeleteOptionalParams,
  PureStoragePoliciesGetOptionalParams,
  PureStoragePoliciesListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _PureStoragePolicyListResult,
  _pureStoragePolicyListResultDeserializer,
  PureStoragePolicy,
  pureStoragePolicySerializer,
  pureStoragePolicyDeserializer,
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

export function _pureStoragePoliciesDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  options: PureStoragePoliciesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      storagePolicyName: storagePolicyName,
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

export async function _pureStoragePoliciesDeleteDeserialize(
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

/** Delete a PureStoragePolicy */
export function pureStoragePoliciesDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  options: PureStoragePoliciesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _pureStoragePoliciesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _pureStoragePoliciesDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          storagePolicyName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _pureStoragePoliciesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  resource: PureStoragePolicy,
  options: PureStoragePoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      storagePolicyName: storagePolicyName,
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
      body: pureStoragePolicySerializer(resource),
    });
}

export async function _pureStoragePoliciesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PureStoragePolicy> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pureStoragePolicyDeserializer(result.body);
}

/** Create a PureStoragePolicy */
export function pureStoragePoliciesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  resource: PureStoragePolicy,
  options: PureStoragePoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<PureStoragePolicy>, PureStoragePolicy> {
  return getLongRunningPoller(
    context,
    _pureStoragePoliciesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _pureStoragePoliciesCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          storagePolicyName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<PureStoragePolicy>, PureStoragePolicy>;
}

export function _pureStoragePoliciesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  options: PureStoragePoliciesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      storagePolicyName: storagePolicyName,
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

export async function _pureStoragePoliciesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PureStoragePolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return pureStoragePolicyDeserializer(result.body);
}

/** Get a PureStoragePolicy */
export async function pureStoragePoliciesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  storagePolicyName: string,
  options: PureStoragePoliciesGetOptionalParams = { requestOptions: {} },
): Promise<PureStoragePolicy> {
  const result = await _pureStoragePoliciesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    storagePolicyName,
    options,
  );
  return _pureStoragePoliciesGetDeserialize(result);
}

export function _pureStoragePoliciesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PureStoragePoliciesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies{?api-version}",
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

export async function _pureStoragePoliciesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PureStoragePolicyListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pureStoragePolicyListResultDeserializer(result.body);
}

/** List PureStoragePolicy resources by PrivateCloud */
export function pureStoragePoliciesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PureStoragePoliciesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PureStoragePolicy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _pureStoragePoliciesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _pureStoragePoliciesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
