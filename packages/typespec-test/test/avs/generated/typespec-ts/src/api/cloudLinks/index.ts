// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureVMwareSolutionAPIContext as Client,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  _CloudLinkList,
  _cloudLinkListDeserializer,
  CloudLink,
  cloudLinkSerializer,
  cloudLinkDeserializer,
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

export function _cloudLinksDeleteSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      cloudLinkName: cloudLinkName,
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

export async function _cloudLinksDeleteDeserialize(
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

/** Delete a CloudLink */
export function cloudLinksDelete(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudLinksDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksDeleteSend(
          context,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudLinksCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      cloudLinkName: cloudLinkName,
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
      body: cloudLinkSerializer(cloudLink),
    });
}

export async function _cloudLinksCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudLinkDeserializer(result.body);
}

/** Create a CloudLink */
export function cloudLinksCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudLink>, CloudLink> {
  return getLongRunningPoller(
    context,
    _cloudLinksCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksCreateOrUpdateSend(
          context,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          cloudLink,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<CloudLink>, CloudLink>;
}

export function _cloudLinksGetSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      cloudLinkName: cloudLinkName,
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

export async function _cloudLinksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudLinkDeserializer(result.body);
}

/** Get a CloudLink */
export async function cloudLinksGet(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): Promise<CloudLink> {
  const result = await _cloudLinksGetSend(
    context,
    resourceGroupName,
    privateCloudName,
    cloudLinkName,
    options,
  );
  return _cloudLinksGetDeserialize(result);
}

export function _cloudLinksListSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks{?api-version}",
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

export async function _cloudLinksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudLinkList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudLinkListDeserializer(result.body);
}

/** List CloudLink resources by PrivateCloud */
export function cloudLinksList(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CloudLink> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudLinksListSend(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _cloudLinksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
