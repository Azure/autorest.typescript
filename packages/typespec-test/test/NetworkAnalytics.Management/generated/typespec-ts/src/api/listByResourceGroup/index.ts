// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  ListByResourceGroupListByResourceGroupOptionalParams,
} from "../index.js";
import {
  dataProductArrayDeserializer,
  dataProductsCatalogArrayDeserializer,
} from "../../models/models.js";
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
import { json } from "stream/consumers";

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listByResourceGroupContentType: application / json },
    });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductArrayDeserializer(result.body);
}

/** List data products by resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listByResourceGroupContentType: application / json },
    });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductsCatalogArrayDeserializer(result.body);
}

/** List data catalog by resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
