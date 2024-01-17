// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
  PagedTextBlocklist,
  PagedTextBlockItem,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AddOrUpdateBlockItems200Response,
  AddOrUpdateBlockItemsDefaultResponse,
  CreateOrUpdateTextBlocklist200Response,
  CreateOrUpdateTextBlocklist201Response,
  CreateOrUpdateTextBlocklistDefaultResponse,
  DeleteTextBlocklist204Response,
  DeleteTextBlocklistDefaultResponse,
  GetTextBlocklist200Response,
  GetTextBlocklistDefaultResponse,
  GetTextBlocklistItem200Response,
  GetTextBlocklistItemDefaultResponse,
  ListTextBlocklistItems200Response,
  ListTextBlocklistItemsDefaultResponse,
  ListTextBlocklists200Response,
  ListTextBlocklistsDefaultResponse,
  RemoveBlockItems204Response,
  RemoveBlockItemsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  TextBlocklistsGetTextBlocklistOptions,
  TextBlocklistsCreateOrUpdateTextBlocklistOptions,
  TextBlocklistsDeleteTextBlocklistOptions,
  TextBlocklistsListTextBlocklistsOptions,
  TextBlocklistsAddOrUpdateBlockItemsOptions,
  TextBlocklistsRemoveBlockItemsOptions,
  TextBlocklistsGetTextBlocklistItemOptions,
  TextBlocklistsListTextBlocklistItemsOptions,
} from "../../models/options.js";

export function _getTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsGetTextBlocklistOptions = { requestOptions: {} },
): StreamableMethod<
  GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistDeserialize(
  result: GetTextBlocklist200Response | GetTextBlocklistDefaultResponse,
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistName: result.body["blocklistName"],
    description: result.body["description"],
  };
}

/** Returns text blocklist details. */
export async function getTextBlocklist(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsGetTextBlocklistOptions = { requestOptions: {} },
): Promise<TextBlocklist> {
  const result = await _getTextBlocklistSend(context, blocklistName, options);
  return _getTextBlocklistDeserialize(result);
}

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: TextBlocklistsCreateOrUpdateTextBlocklistOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | CreateOrUpdateTextBlocklist200Response
  | CreateOrUpdateTextBlocklist201Response
  | CreateOrUpdateTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: { description: resource["description"] },
    });
}

export async function _createOrUpdateTextBlocklistDeserialize(
  result:
    | CreateOrUpdateTextBlocklist200Response
    | CreateOrUpdateTextBlocklist201Response
    | CreateOrUpdateTextBlocklistDefaultResponse,
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blocklistName: result.body["blocklistName"],
    description: result.body["description"],
  };
}

/** Updates a text blocklist, if blocklistName does not exist, create a new blocklist. */
export async function createOrUpdateTextBlocklist(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: TextBlocklistsCreateOrUpdateTextBlocklistOptions = {
    requestOptions: {},
  },
): Promise<TextBlocklist> {
  const result = await _createOrUpdateTextBlocklistSend(
    context,
    blocklistName,
    resource,
    options,
  );
  return _createOrUpdateTextBlocklistDeserialize(result);
}

export function _deleteTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsDeleteTextBlocklistOptions = { requestOptions: {} },
): StreamableMethod<
  DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTextBlocklistDeserialize(
  result: DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a text blocklist. */
export async function deleteTextBlocklist(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsDeleteTextBlocklistOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTextBlocklistSend(
    context,
    blocklistName,
    options,
  );
  return _deleteTextBlocklistDeserialize(result);
}

export function _listTextBlocklistsSend(
  context: Client,
  options: TextBlocklistsListTextBlocklistsOptions = { requestOptions: {} },
): StreamableMethod<
  ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
> {
  return context
    .path("/text/blocklists")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTextBlocklistsDeserialize(
  result: ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse,
): Promise<PagedTextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      blocklistName: p["blocklistName"],
      description: p["description"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all text blocklists details. */
export function listTextBlocklists(
  context: Client,
  options: TextBlocklistsListTextBlocklistsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlocklist> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistsSend(context, options),
    _listTextBlocklistsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addOrUpdateBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: TextBlocklistsAddOrUpdateBlockItemsOptions = { requestOptions: {} },
): StreamableMethod<
  AddOrUpdateBlockItems200Response | AddOrUpdateBlockItemsDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}:addOrUpdateBlockItems",
      blocklistName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        blockItems: body["blockItems"].map((p) => ({
          description: p["description"],
          text: p["text"],
        })),
      },
    });
}

export async function _addOrUpdateBlockItemsDeserialize(
  result:
    | AddOrUpdateBlockItems200Response
    | AddOrUpdateBlockItemsDefaultResponse,
): Promise<AddOrUpdateBlockItemsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          blockItemId: p["blockItemId"],
          description: p["description"],
          text: p["text"],
        })),
  };
}

/** Add or update blockItems to a text blocklist. You can add or update at most 100 BlockItems in one request. */
export async function addOrUpdateBlockItems(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: TextBlocklistsAddOrUpdateBlockItemsOptions = { requestOptions: {} },
): Promise<AddOrUpdateBlockItemsResult> {
  const result = await _addOrUpdateBlockItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _addOrUpdateBlockItemsDeserialize(result);
}

export function _removeBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: TextBlocklistsRemoveBlockItemsOptions = { requestOptions: {} },
): StreamableMethod<
  RemoveBlockItems204Response | RemoveBlockItemsDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}:removeBlockItems", blocklistName)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { blockItemIds: body["blockItemIds"] },
    });
}

export async function _removeBlockItemsDeserialize(
  result: RemoveBlockItems204Response | RemoveBlockItemsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
export async function removeBlockItems(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: TextBlocklistsRemoveBlockItemsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _removeBlockItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _removeBlockItemsDeserialize(result);
}

export function _getTextBlocklistItemSend(
  context: Client,
  blocklistName: string,
  blockItemId: string,
  options: TextBlocklistsGetTextBlocklistItemOptions = { requestOptions: {} },
): StreamableMethod<
  GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}/blockItems/{blockItemId}",
      blocklistName,
      blockItemId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistItemDeserialize(
  result: GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse,
): Promise<TextBlockItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    blockItemId: result.body["blockItemId"],
    description: result.body["description"],
    text: result.body["text"],
  };
}

/** Get blockItem By blockItemId from a text blocklist. */
export async function getTextBlocklistItem(
  context: Client,
  blocklistName: string,
  blockItemId: string,
  options: TextBlocklistsGetTextBlocklistItemOptions = { requestOptions: {} },
): Promise<TextBlockItem> {
  const result = await _getTextBlocklistItemSend(
    context,
    blocklistName,
    blockItemId,
    options,
  );
  return _getTextBlocklistItemDeserialize(result);
}

export function _listTextBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsListTextBlocklistItemsOptions = { requestOptions: {} },
): StreamableMethod<
  ListTextBlocklistItems200Response | ListTextBlocklistItemsDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}/blockItems", blocklistName)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTextBlocklistItemsDeserialize(
  result:
    | ListTextBlocklistItems200Response
    | ListTextBlocklistItemsDefaultResponse,
): Promise<PagedTextBlockItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      blockItemId: p["blockItemId"],
      description: p["description"],
      text: p["text"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get all blockItems in a text blocklist */
export function listTextBlocklistItems(
  context: Client,
  blocklistName: string,
  options: TextBlocklistsListTextBlocklistItemsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlockItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistItemsSend(context, blocklistName, options),
    _listTextBlocklistItemsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
