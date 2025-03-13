// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _PrivateCloudList,
  _privateCloudListDeserializer,
  PrivateCloud,
  privateCloudSerializer,
  privateCloudDeserializer,
  PrivateCloudUpdate,
  privateCloudUpdateSerializer,
  AdminCredentials,
  adminCredentialsDeserializer,
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
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListOptionalParams,
} from "./options.js";

export function _privateCloudsListAdminCredentialsSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials{?api-version}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _privateCloudsListAdminCredentialsDeserialize(
  result: PathUncheckedResponse,
): Promise<AdminCredentials> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return adminCredentialsDeserializer(result.body);
}

/** List the admin credentials for the private cloud */
export async function privateCloudsListAdminCredentials(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): Promise<AdminCredentials> {
  const result = await _privateCloudsListAdminCredentialsSend(
    context,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsListAdminCredentialsDeserialize(result);
}

export function _privateCloudsRotateNsxtPasswordSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword{?api-version}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _privateCloudsRotateNsxtPasswordDeserialize(
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

/** Rotate the NSX-T Manager password */
export function privateCloudsRotateNsxtPassword(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateNsxtPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateNsxtPasswordSend(
          context,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsRotateVcenterPasswordSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword{?api-version}",
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
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _privateCloudsRotateVcenterPasswordDeserialize(
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

/** Rotate the vCenter password */
export function privateCloudsRotateVcenterPassword(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsRotateVcenterPasswordDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsRotateVcenterPasswordSend(
          context,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}{?api-version}",
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
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _privateCloudsDeleteDeserialize(
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

/** Delete a PrivateCloud */
export function privateCloudsDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _privateCloudsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _privateCloudsUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}{?api-version}",
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
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: privateCloudUpdateSerializer(privateCloudUpdate),
    });
}

export async function _privateCloudsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateCloudDeserializer(result.body);
}

/** Update a PrivateCloud */
export async function privateCloudsUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _privateCloudsUpdateSend(
    context,
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate,
    options,
  );
  return _privateCloudsUpdateDeserialize(result);
}

export function _privateCloudsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}{?api-version}",
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
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: privateCloudSerializer(privateCloud),
    });
}

export async function _privateCloudsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateCloudDeserializer(result.body);
}

/** Create a PrivateCloud */
export function privateCloudsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateCloud>, PrivateCloud> {
  return getLongRunningPoller(
    context,
    _privateCloudsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _privateCloudsCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          privateCloud,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
}

export function _privateCloudsGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}{?api-version}",
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

export async function _privateCloudsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateCloud> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateCloudDeserializer(result.body);
}

/** Get a PrivateCloud */
export async function privateCloudsGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _privateCloudsGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _privateCloudsGetDeserialize(result);
}

export function _privateCloudsListInSubscriptionSend(
  context: Client,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds{?api-version}",
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

export async function _privateCloudsListInSubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _privateCloudListDeserializer(result.body);
}

/** List PrivateCloud resources by subscription ID */
export function privateCloudsListInSubscription(
  context: Client,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () => _privateCloudsListInSubscriptionSend(context, options),
    _privateCloudsListInSubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _privateCloudsListSend(
  context: Client,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds{?api-version}",
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

export async function _privateCloudsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PrivateCloudList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _privateCloudListDeserializer(result.body);
}

/** List PrivateCloud resources by resource group */
export function privateCloudsList(
  context: Client,
  resourceGroupName: string,
  options: PrivateCloudsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () => _privateCloudsListSend(context, resourceGroupName, options),
    _privateCloudsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
