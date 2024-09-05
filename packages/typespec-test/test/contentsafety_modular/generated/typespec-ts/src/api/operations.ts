// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContentSafetyContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  textBlockItemInfoSerializer,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
  AnalyzeImageOptions,
  imageDataSerializer,
  AnalyzeImageResult,
  AnalyzeTextOptions,
  AnalyzeTextResult,
  _PagedTextBlocklist,
  _PagedTextBlockItem,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  AnalyzeTextOptionalParams,
  AnalyzeImageOptionalParams,
  GetTextBlocklistOptionalParams,
  CreateOrUpdateTextBlocklistOptionalParams,
  DeleteTextBlocklistOptionalParams,
  ListTextBlocklistsOptionalParams,
  AddOrUpdateBlockItemsOptionalParams,
  RemoveBlockItemsOptionalParams,
  GetTextBlocklistItemOptionalParams,
  ListTextBlocklistItemsOptionalParams,
} from "../models/options.js";

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        text: body["text"],
        categories: body["categories"],
        blocklistNames: body["blocklistNames"],
        breakByBlocklists: body["breakByBlocklists"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeTextDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeTextResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    blocklistsMatchResults:
      result.body["blocklistsMatchResults"] === undefined
        ? result.body["blocklistsMatchResults"]
        : result.body["blocklistsMatchResults"].map((p: any) => {
            return {
              blocklistName: p["blocklistName"],
              blockItemId: p["blockItemId"],
              blockItemText: p["blockItemText"],
            };
          }),
    analyzeResults: result.body["analyzeResults"].map((p: any) => {
      return { category: p["category"], severity: p["severity"] };
    }),
  };
}

/** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeText(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextOptionalParams = { requestOptions: {} },
): Promise<AnalyzeTextResult> {
  const result = await _analyzeTextSend(context, body, options);
  return _analyzeTextDeserialize(result);
}

export function _analyzeImageSend(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/image:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        image: imageDataSerializer(body.image),
        categories: body["categories"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeImageDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeImageResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    analyzeResults: result.body["analyzeResults"].map((p: any) => {
      return { category: p["category"], severity: p["severity"] };
    }),
  };
}

/** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeImage(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageOptionalParams = { requestOptions: {} },
): Promise<AnalyzeImageResult> {
  const result = await _analyzeImageSend(context, body, options);
  return _analyzeImageDeserialize(result);
}

export function _getTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: GetTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlocklist> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: GetTextBlocklistOptionalParams = { requestOptions: {} },
): Promise<TextBlocklist> {
  const result = await _getTextBlocklistSend(context, blocklistName, options);
  return _getTextBlocklistDeserialize(result);
}

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: CreateOrUpdateTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
      body: {
        blocklistName: resource["blocklistName"],
        description: resource["description"],
      },
    });
}

export async function _createOrUpdateTextBlocklistDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlocklist> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: CreateOrUpdateTextBlocklistOptionalParams = { requestOptions: {} },
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
  options: DeleteTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTextBlocklistDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a text blocklist. */
export async function deleteTextBlocklist(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptionalParams = { requestOptions: {} },
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
  options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text/blocklists")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTextBlocklistsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTextBlocklist> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        blocklistName: p["blocklistName"],
        description: p["description"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Get all text blocklists details. */
export function listTextBlocklists(
  context: Client,
  options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlocklist> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistsSend(context, options),
    _listTextBlocklistsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addOrUpdateBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: AddOrUpdateBlockItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/text/blocklists/{blocklistName}:addOrUpdateBlockItems",
      blocklistName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { blockItems: body["blockItems"].map(textBlockItemInfoSerializer) },
    });
}

export async function _addOrUpdateBlockItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<AddOrUpdateBlockItemsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              blockItemId: p["blockItemId"],
              description: p["description"],
              text: p["text"],
            };
          }),
  };
}

/** Add or update blockItems to a text blocklist. You can add or update at most 100 BlockItems in one request. */
export async function addOrUpdateBlockItems(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: AddOrUpdateBlockItemsOptionalParams = { requestOptions: {} },
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
  options: RemoveBlockItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/text/blocklists/{blocklistName}:removeBlockItems", blocklistName)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { blockItemIds: body["blockItemIds"] },
    });
}

export async function _removeBlockItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
export async function removeBlockItems(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: RemoveBlockItemsOptionalParams = { requestOptions: {} },
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
  options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/text/blocklists/{blocklistName}/blockItems/{blockItemId}",
      blocklistName,
      blockItemId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistItemDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlockItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
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
  options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<_PagedTextBlockItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        blockItemId: p["blockItemId"],
        description: p["description"],
        text: p["text"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Get all blockItems in a text blocklist */
export function listTextBlocklistItems(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlockItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listTextBlocklistItemsSend(context, blocklistName, options),
    _listTextBlocklistItemsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
