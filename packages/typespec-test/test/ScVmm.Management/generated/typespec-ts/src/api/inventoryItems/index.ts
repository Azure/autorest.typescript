// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InventoryItem, InventoryItemListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  InventoryItemsCreate200Response,
  InventoryItemsCreate201Response,
  InventoryItemsCreateDefaultResponse,
  InventoryItemsDelete200Response,
  InventoryItemsDelete204Response,
  InventoryItemsDeleteDefaultResponse,
  InventoryItemsGet200Response,
  InventoryItemsGetDefaultResponse,
  InventoryItemsListByVmmServer200Response,
  InventoryItemsListByVmmServerDefaultResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  InventoryItemsGetOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  InventoryItemsGet200Response | InventoryItemsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: InventoryItemsGet200Response | InventoryItemsGetDefaultResponse,
): Promise<InventoryItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          inventoryType: result.body.properties?.["inventoryType"],
          managedResourceId: result.body.properties?.["managedResourceId"],
          uuid: result.body.properties?.["uuid"],
          inventoryItemName: result.body.properties?.["inventoryItemName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    kind: result.body["kind"],
  };
}

/** Shows an inventory item. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | InventoryItemsCreate200Response
  | InventoryItemsCreate201Response
  | InventoryItemsCreateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : { inventoryType: resource.properties?.["inventoryType"] },
        kind: resource["kind"],
      },
    });
}

export async function _createDeserialize(
  result:
    | InventoryItemsCreate200Response
    | InventoryItemsCreate201Response
    | InventoryItemsCreateDefaultResponse,
): Promise<InventoryItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          inventoryType: result.body.properties?.["inventoryType"],
          managedResourceId: result.body.properties?.["managedResourceId"],
          uuid: result.body.properties?.["uuid"],
          inventoryItemName: result.body.properties?.["inventoryItemName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    kind: result.body["kind"],
  };
}

/** Create Or Update InventoryItem. */
export async function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _createSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    resource,
    options,
  );
  return _createDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | InventoryItemsDelete200Response
  | InventoryItemsDelete204Response
  | InventoryItemsDeleteDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | InventoryItemsDelete200Response
    | InventoryItemsDelete204Response
    | InventoryItemsDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes an inventoryItem. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _listByVmmServerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | InventoryItemsListByVmmServer200Response
  | InventoryItemsListByVmmServerDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByVmmServerDeserialize(
  result:
    | InventoryItemsListByVmmServer200Response
    | InventoryItemsListByVmmServerDefaultResponse,
): Promise<InventoryItemListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            inventoryType: p.properties?.["inventoryType"],
            managedResourceId: p.properties?.["managedResourceId"],
            uuid: p.properties?.["uuid"],
            inventoryItemName: p.properties?.["inventoryItemName"],
            provisioningState: p.properties?.["provisioningState"],
          },
      kind: p["kind"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Returns the list of inventoryItems in the given VmmServer. */
export function listByVmmServer(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InventoryItem> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByVmmServerSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    _listByVmmServerDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
