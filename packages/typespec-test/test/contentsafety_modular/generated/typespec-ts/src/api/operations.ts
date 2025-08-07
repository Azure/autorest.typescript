// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContentSafetyContext as Client } from "./index.js";
import {
  AnalyzeTextOptions,
  analyzeTextOptionsSerializer,
  AnalyzeTextResult,
  analyzeTextResultDeserializer,
  ShieldPromptOptions,
  shieldPromptOptionsSerializer,
  ShieldPromptResult,
  shieldPromptResultDeserializer,
  DetectTextProtectedMaterialOptions,
  detectTextProtectedMaterialOptionsSerializer,
  DetectTextProtectedMaterialResult,
  detectTextProtectedMaterialResultDeserializer,
  AnalyzeImageOptions,
  analyzeImageOptionsSerializer,
  AnalyzeImageResult,
  analyzeImageResultDeserializer,
  TextBlocklist,
  textBlocklistSerializer,
  textBlocklistDeserializer,
  _PagedTextBlocklist,
  _pagedTextBlocklistDeserializer,
  AddOrUpdateTextBlocklistItemsOptions,
  addOrUpdateTextBlocklistItemsOptionsSerializer,
  TextBlocklistItem,
  textBlocklistItemDeserializer,
  AddOrUpdateTextBlocklistItemsResult,
  addOrUpdateTextBlocklistItemsResultDeserializer,
  RemoveTextBlocklistItemsOptions,
  removeTextBlocklistItemsOptionsSerializer,
  _PagedTextBlocklistItem,
  _pagedTextBlocklistItemDeserializer,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  ListTextBlocklistItemsOptionalParams,
  GetTextBlocklistItemOptionalParams,
  RemoveBlocklistItemsOptionalParams,
  AddOrUpdateBlocklistItemsOptionalParams,
  ListTextBlocklistsOptionalParams,
  DeleteTextBlocklistOptionalParams,
  CreateOrUpdateTextBlocklistOptionalParams,
  GetTextBlocklistOptionalParams,
  AnalyzeImageOptionalParams,
  DetectTextProtectedMaterialOptionalParams,
  ShieldPromptOptionalParams,
  AnalyzeTextOptionalParams,
} from "./options.js";
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
    "/text/blocklists/{blocklistName}/blocklistItems{?api%2Dversion,top,skip,maxpagesize}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
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
): Promise<_PagedTextBlocklistItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedTextBlocklistItemDeserializer(result.body);
}

/** Get all blocklistItems in a text blocklist. */
export function listTextBlocklistItems(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TextBlocklistItem> {
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
  blocklistItemId: string,
  options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      blocklistItemId: blocklistItemId,
      "api%2Dversion": context.apiVersion,
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
): Promise<TextBlocklistItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return textBlocklistItemDeserializer(result.body);
}

/** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
export async function getTextBlocklistItem(
  context: Client,
  blocklistName: string,
  blocklistItemId: string,
  options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
): Promise<TextBlocklistItem> {
  const result = await _getTextBlocklistItemSend(
    context,
    blocklistName,
    blocklistItemId,
    options,
  );
  return _getTextBlocklistItemDeserialize(result);
}

export function _removeBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  body: RemoveTextBlocklistItemsOptions,
  options: RemoveBlocklistItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}:removeBlocklistItems{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
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
      body: removeTextBlocklistItemsOptionsSerializer(body),
    });
}

export async function _removeBlocklistItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
export async function removeBlocklistItems(
  context: Client,
  blocklistName: string,
  body: RemoveTextBlocklistItemsOptions,
  options: RemoveBlocklistItemsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeBlocklistItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _removeBlocklistItemsDeserialize(result);
}

export function _addOrUpdateBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateTextBlocklistItemsOptions,
  options: AddOrUpdateBlocklistItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
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
      body: addOrUpdateTextBlocklistItemsOptionsSerializer(body),
    });
}

export async function _addOrUpdateBlocklistItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<AddOrUpdateTextBlocklistItemsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return addOrUpdateTextBlocklistItemsResultDeserializer(result.body);
}

/** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
export async function addOrUpdateBlocklistItems(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateTextBlocklistItemsOptions,
  options: AddOrUpdateBlocklistItemsOptionalParams = { requestOptions: {} },
): Promise<AddOrUpdateTextBlocklistItemsResult> {
  const result = await _addOrUpdateBlocklistItemsSend(
    context,
    blocklistName,
    body,
    options,
  );
  return _addOrUpdateBlocklistItemsDeserialize(result);
}

export function _listTextBlocklistsSend(
  context: Client,
  options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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
    "/text/blocklists/{blocklistName}{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
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

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: CreateOrUpdateTextBlocklistOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text/blocklists/{blocklistName}{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
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

/** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
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
    "/text/blocklists/{blocklistName}{?api%2Dversion}",
    {
      blocklistName: blocklistName,
      "api%2Dversion": context.apiVersion,
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
    "/image:analyze{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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

/** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
export async function analyzeImage(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageOptionalParams = { requestOptions: {} },
): Promise<AnalyzeImageResult> {
  const result = await _analyzeImageSend(context, body, options);
  return _analyzeImageDeserialize(result);
}

export function _detectTextProtectedMaterialSend(
  context: Client,
  body: DetectTextProtectedMaterialOptions,
  options: DetectTextProtectedMaterialOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text:detectProtectedMaterial{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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
      body: detectTextProtectedMaterialOptionsSerializer(body),
    });
}

export async function _detectTextProtectedMaterialDeserialize(
  result: PathUncheckedResponse,
): Promise<DetectTextProtectedMaterialResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return detectTextProtectedMaterialResultDeserializer(result.body);
}

/** A synchronous API for detecting protected material in the given text. */
export async function detectTextProtectedMaterial(
  context: Client,
  body: DetectTextProtectedMaterialOptions,
  options: DetectTextProtectedMaterialOptionalParams = { requestOptions: {} },
): Promise<DetectTextProtectedMaterialResult> {
  const result = await _detectTextProtectedMaterialSend(context, body, options);
  return _detectTextProtectedMaterialDeserialize(result);
}

export function _shieldPromptSend(
  context: Client,
  body: ShieldPromptOptions,
  options: ShieldPromptOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text:shieldPrompt{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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
      body: shieldPromptOptionsSerializer(body),
    });
}

export async function _shieldPromptDeserialize(
  result: PathUncheckedResponse,
): Promise<ShieldPromptResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return shieldPromptResultDeserializer(result.body);
}

/** A synchronous API for shielding prompt from direct and indirect injection attacks. */
export async function shieldPrompt(
  context: Client,
  body: ShieldPromptOptions,
  options: ShieldPromptOptionalParams = { requestOptions: {} },
): Promise<ShieldPromptResult> {
  const result = await _shieldPromptSend(context, body, options);
  return _shieldPromptDeserialize(result);
}

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/text:analyze{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
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

/** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
export async function analyzeText(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextOptionalParams = { requestOptions: {} },
): Promise<AnalyzeTextResult> {
  const result = await _analyzeTextSend(context, body, options);
  return _analyzeTextDeserialize(result);
}
