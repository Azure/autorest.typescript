// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AddOrUpdateBlockItemsOptionalParams,
  AnalyzeImageOptionalParams,
  AnalyzeTextOptionalParams,
  ContentSafetyContext as Client,
  CreateOrUpdateTextBlocklistOptionalParams,
  DeleteTextBlocklistOptionalParams,
  GetTextBlocklistItemOptionalParams,
  GetTextBlocklistOptionalParams,
  ListTextBlocklistItemsOptionalParams,
  ListTextBlocklistsOptionalParams,
  RemoveBlockItemsOptionalParams,
} from "./index.js";
import {
  TextBlocklist,
  textBlocklistSerializer,
  textBlocklistDeserializer,
  _PagedTextBlocklist,
  _pagedTextBlocklistDeserializer,
  AddOrUpdateBlockItemsOptions,
  addOrUpdateBlockItemsOptionsSerializer,
  AddOrUpdateBlockItemsResult,
  addOrUpdateBlockItemsResultDeserializer,
  TextBlockItem,
  textBlockItemDeserializer,
  RemoveBlockItemsOptions,
  removeBlockItemsOptionsSerializer,
  _PagedTextBlockItem,
  _pagedTextBlockItemDeserializer,
  AnalyzeImageOptions,
  analyzeImageOptionsSerializer,
  AnalyzeImageResult,
  analyzeImageResultDeserializer,
  AnalyzeTextOptions,
  analyzeTextOptionsSerializer,
  AnalyzeTextResult,
  analyzeTextResultDeserializer,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listTextBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}/blockItems{?api-version,top,skip,maxpagesize}",
    {
      blocklistName: blocklistName,
      "api-version": context.apiVersion,
      top: options?.top,
      skip: options?.skip,
      maxpagesize: options?.maxpagesize,
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

export async function _listTextBlocklistItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTextBlockItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTextBlockItemDeserializer(result.body);
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

export function _getTextBlocklistItemSend(
  context: Client,
  blocklistName: string,
  blockItemId: string,
  options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}/blockItems/{blockItemId}{?api-version}",
    {
      blocklistName: blocklistName,
      blockItemId: blockItemId,
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

export async function _getTextBlocklistItemDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlockItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return textBlockItemDeserializer(result.body);
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

export function _removeBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: RemoveBlockItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}:removeBlockItems{?api-version}",
    {
      blocklistName: blocklistName,
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: removeBlockItemsOptionsSerializer(body),
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

export function _addOrUpdateBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: AddOrUpdateBlockItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}:addOrUpdateBlockItems{?api-version}",
    {
      blocklistName: blocklistName,
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: addOrUpdateBlockItemsOptionsSerializer(body),
    });
}

export async function _addOrUpdateBlockItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<AddOrUpdateBlockItemsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return addOrUpdateBlockItemsResultDeserializer(result.body);
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

export function _listTextBlocklistsSend(
  context: Client,
  options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists{?api-version}",
    {
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

export async function _listTextBlocklistsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedTextBlocklist> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTextBlocklistDeserializer(result.body);
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

export function _deleteTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}{?api-version}",
    {
      blocklistName: blocklistName,
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

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: CreateOrUpdateTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}{?api-version}",
    {
      blocklistName: blocklistName,
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
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: textBlocklistSerializer(resource),
    });
}

export async function _createOrUpdateTextBlocklistDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlocklist> {
  const expectedStatuses = ["201", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return textBlocklistDeserializer(result.body);
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

export function _getTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: GetTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}{?api-version}",
    {
      blocklistName: blocklistName,
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

export async function _getTextBlocklistDeserialize(
  result: PathUncheckedResponse,
): Promise<TextBlocklist> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return textBlocklistDeserializer(result.body);
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

export function _analyzeImageSend(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/image:analyze{?api-version}",
    {
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: analyzeImageOptionsSerializer(body),
    });
}

export async function _analyzeImageDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeImageResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return analyzeImageResultDeserializer(result.body);
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

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text:analyze{?api-version}",
    {
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: analyzeTextOptionsSerializer(body),
    });
}

export async function _analyzeTextDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeTextResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return analyzeTextResultDeserializer(result.body);
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
