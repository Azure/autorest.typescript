// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { InventoryItem } from "../../models/models.js";
import {
  get,
  create,
  $delete,
  listByVmmServer,
} from "../../api/inventoryItems/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  InventoryItemsGetOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
} from "../../models/options.js";

export interface InventoryItemsOperations {
  get: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsGetOptionalParams,
  ) => Promise<InventoryItem>;
  create: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    resource: InventoryItem,
    options?: InventoryItemsCreateOptionalParams,
  ) => Promise<InventoryItem>;
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsDeleteOptionalParams,
  ) => Promise<void>;
  listByVmmServer: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: InventoryItemsListByVmmServerOptionalParams,
  ) => PagedAsyncIterableIterator<InventoryItem>;
}

export function getInventoryItems(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        options,
      ),
    create: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      resource: InventoryItem,
      options?: InventoryItemsCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        options,
      ),
    listByVmmServer: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: InventoryItemsListByVmmServerOptionalParams,
    ) =>
      listByVmmServer(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
  };
}

export function getInventoryItemsOperations(
  context: ScVmmContext,
  subscriptionId: string,
): InventoryItemsOperations {
  return {
    ...getInventoryItems(context, subscriptionId),
  };
}
