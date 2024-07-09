// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  textBlockItemInfoSerializer,
  imageDataSerializer,
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  AnalyzeTextOptions,
  AnalyzeTextResult,
  _PagedTextBlockItem,
  _PagedTextBlocklist,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  ContentSafetyContext as Client,
  AddOrUpdateBlockItems200Response,
  AddOrUpdateBlockItemsDefaultResponse,
  AnalyzeImage200Response,
  AnalyzeImageDefaultResponse,
  AnalyzeText200Response,
  AnalyzeTextDefaultResponse,
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
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<AnalyzeText200Response | AnalyzeTextDefaultResponse> {
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
  result: AnalyzeText200Response | AnalyzeTextDefaultResponse,
): Promise<AnalyzeTextResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as AnalyzeText200Response;
  return {
    blocklistsMatchResults:
      _result.body["blocklistsMatchResults"] === undefined
        ? _result.body["blocklistsMatchResults"]
        : _result.body["blocklistsMatchResults"].map((p) => {
            return {
              blocklistName: p["blocklistName"],
              blockItemId: p["blockItemId"],
              blockItemText: p["blockItemText"],
            };
          }),
    analyzeResults: _result.body["analyzeResults"].map((p) => {
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
): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse> {
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
  result: AnalyzeImage200Response | AnalyzeImageDefaultResponse,
): Promise<AnalyzeImageResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as AnalyzeImage200Response;
  return {
    analyzeResults: _result.body["analyzeResults"].map((p) => {
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

  const _result = result as unknown as GetTextBlocklist200Response;
  return {
    blocklistName: _result.body["blocklistName"],
    description: _result.body["description"],
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
      body: {
        blocklistName: resource["blocklistName"],
        description: resource["description"],
      },
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

  const _result = result as unknown as CreateOrUpdateTextBlocklist201Response;
  return {
    blocklistName: _result.body["blocklistName"],
    description: _result.body["description"],
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
): StreamableMethod<
  ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
> {
  return context
    .path("/text/blocklists")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTextBlocklistsDeserialize(
  result: ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse,
): Promise<_PagedTextBlocklist> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as ListTextBlocklists200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        blocklistName: p["blocklistName"],
        description: p["description"],
      };
    }),
    nextLink: _result.body["nextLink"],
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addOrUpdateBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: AddOrUpdateBlockItemsOptionalParams = { requestOptions: {} },
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
      body: { blockItems: body["blockItems"].map(textBlockItemInfoSerializer) },
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

  const _result = result as unknown as AddOrUpdateBlockItems200Response;
  return {
    value:
      _result.body["value"] === undefined
        ? _result.body["value"]
        : _result.body["value"].map((p) => {
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

  const _result = result as unknown as GetTextBlocklistItem200Response;
  return {
    blockItemId: _result.body["blockItemId"],
    description: _result.body["description"],
    text: _result.body["text"],
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
): Promise<_PagedTextBlockItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as ListTextBlocklistItems200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        blockItemId: p["blockItemId"],
        description: p["description"],
        text: p["text"],
      };
    }),
    nextLink: _result.body["nextLink"],
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
