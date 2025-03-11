// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _PlacementPoliciesList,
  _placementPoliciesListDeserializer,
  PlacementPolicy,
  placementPolicySerializer,
  placementPolicyDeserializer,
  PlacementPolicyUpdate,
  placementPolicyUpdateSerializer,
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
import {
  PlacementPoliciesDeleteOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesListOptionalParams,
} from "./options.js";

export function _placementPoliciesDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      placementPolicyName: placementPolicyName,
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

export async function _placementPoliciesDeleteDeserialize(
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

/** Delete a PlacementPolicy */
export function placementPoliciesDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _placementPoliciesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _placementPoliciesDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          clusterName,
          placementPolicyName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _placementPoliciesUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      placementPolicyName: placementPolicyName,
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
      body: placementPolicyUpdateSerializer(placementPolicyUpdate),
    });
}

export async function _placementPoliciesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return placementPolicyDeserializer(result.body);
}

/** Update a PlacementPolicy */
export async function placementPoliciesUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _placementPoliciesUpdateSend(
    context,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    placementPolicyUpdate,
    options,
  );
  return _placementPoliciesUpdateDeserialize(result);
}

export function _placementPoliciesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      placementPolicyName: placementPolicyName,
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
      body: placementPolicySerializer(placementPolicy),
    });
}

export async function _placementPoliciesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return placementPolicyDeserializer(result.body);
}

/** Create a PlacementPolicy */
export function placementPoliciesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<PlacementPolicy>, PlacementPolicy> {
  return getLongRunningPoller(
    context,
    _placementPoliciesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _placementPoliciesCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          clusterName,
          placementPolicyName,
          placementPolicy,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
}

export function _placementPoliciesGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
      placementPolicyName: placementPolicyName,
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

export async function _placementPoliciesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return placementPolicyDeserializer(result.body);
}

/** Get a PlacementPolicy */
export async function placementPoliciesGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _placementPoliciesGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    options,
  );
  return _placementPoliciesGetDeserialize(result);
}

export function _placementPoliciesListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      clusterName: clusterName,
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

export async function _placementPoliciesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PlacementPoliciesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _placementPoliciesListDeserializer(result.body);
}

/** List PlacementPolicy resources by Cluster */
export function placementPoliciesList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PlacementPolicy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _placementPoliciesListSend(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _placementPoliciesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
