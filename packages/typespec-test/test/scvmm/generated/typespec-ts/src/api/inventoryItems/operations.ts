// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  InventoryItem,
  inventoryItemSerializer,
  inventoryItemDeserializer,
  _InventoryItemListResult,
  _inventoryItemListResultDeserializer,
} from "../../models/models.js";
import {
  InventoryItemsListByVmmServerOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _inventoryItemsListByVmmServerSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmmServerName: vmmServerName,
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

export async function _inventoryItemsListByVmmServerDeserialize(
  result: PathUncheckedResponse,
): Promise<_InventoryItemListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _inventoryItemListResultDeserializer(result.body);
}

/** Returns the list of inventoryItems in the given VmmServer. */
export function inventoryItemsListByVmmServer(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InventoryItem> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _inventoryItemsListByVmmServerSend(
        context,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    _inventoryItemsListByVmmServerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _inventoryItemsDeleteSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmmServerName: vmmServerName,
      inventoryItemResourceName: inventoryItemResourceName,
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

export async function _inventoryItemsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes an inventoryItem. */
export async function inventoryItemsDelete(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _inventoryItemsDeleteSend(
    context,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _inventoryItemsDeleteDeserialize(result);
}

export function _inventoryItemsCreateSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmmServerName: vmmServerName,
      inventoryItemResourceName: inventoryItemResourceName,
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
      body: inventoryItemSerializer(resource),
    });
}

export async function _inventoryItemsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryItem> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return inventoryItemDeserializer(result.body);
}

/** Create Or Update InventoryItem. */
export async function inventoryItemsCreate(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _inventoryItemsCreateSend(
    context,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    resource,
    options,
  );
  return _inventoryItemsCreateDeserialize(result);
}

export function _inventoryItemsGetSend(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      vmmServerName: vmmServerName,
      inventoryItemResourceName: inventoryItemResourceName,
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

export async function _inventoryItemsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return inventoryItemDeserializer(result.body);
}

/** Shows an inventory item. */
export async function inventoryItemsGet(
  context: Client,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _inventoryItemsGetSend(
    context,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _inventoryItemsGetDeserialize(result);
}
