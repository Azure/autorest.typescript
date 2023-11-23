// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
  PagedTextBlocklist,
  PagedTextBlockItem,
} from "../models/models.js";
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
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  AnalyzeTextRequestOptions,
  AnalyzeImageRequestOptions,
  GetTextBlocklistOptions,
  CreateOrUpdateTextBlocklistOptions,
  DeleteTextBlocklistOptions,
  ListTextBlocklistsOptions,
  AddOrUpdateBlockItemsRequestOptions,
  RemoveBlockItemsRequestOptions,
  GetTextBlocklistItemOptions,
  ListTextBlocklistItemsOptions,
} from "../models/options.js";

export function _analyzeTextSend(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextRequestOptions = { requestOptions: {} }
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
  result: AnalyzeText200Response | AnalyzeTextDefaultResponse
): Promise<AnalyzeTextResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    blocklistsMatchResults: !result.body["blocklistsMatchResults"]
      ? result.body["blocklistsMatchResults"]
      : result.body["blocklistsMatchResults"].map((p) => ({
          blocklistName: p["blocklistName"],
          blockItemId: p["blockItemId"],
          blockItemText: p["blockItemText"],
        })),
    analyzeResults: result.body["analyzeResults"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeText(
  context: Client,
  body: AnalyzeTextOptions,
  options: AnalyzeTextRequestOptions = { requestOptions: {} }
): Promise<AnalyzeTextResult> {
  const result = await _analyzeTextSend(context, body, options);
  return _analyzeTextDeserialize(result);
}

export function _analyzeImageSend(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageRequestOptions = { requestOptions: {} }
): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse> {
  return context
    .path("/image:analyze")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        image: {
          content:
            body.image["content"] !== undefined
              ? uint8ArrayToString(body.image["content"], "base64")
              : undefined,
          blobUrl: body.image["blobUrl"],
        },
        categories: body["categories"],
        outputType: body["outputType"],
      },
    });
}

export async function _analyzeImageDeserialize(
  result: AnalyzeImage200Response | AnalyzeImageDefaultResponse
): Promise<AnalyzeImageResult> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    analyzeResults: result.body["analyzeResults"].map((p) => ({
      category: p["category"],
      severity: p["severity"],
    })),
  };
}

/** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
export async function analyzeImage(
  context: Client,
  body: AnalyzeImageOptions,
  options: AnalyzeImageRequestOptions = { requestOptions: {} }
): Promise<AnalyzeImageResult> {
  const result = await _analyzeImageSend(context, body, options);
  return _analyzeImageDeserialize(result);
}

export function _getTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: GetTextBlocklistOptions = { requestOptions: {} }
): StreamableMethod<
  GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistDeserialize(
  result: GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: GetTextBlocklistOptions = { requestOptions: {} }
): Promise<TextBlocklist> {
  const result = await _getTextBlocklistSend(context, blocklistName, options);
  return _getTextBlocklistDeserialize(result);
}

export function _createOrUpdateTextBlocklistSend(
  context: Client,
  blocklistName: string,
  resource: TextBlocklist,
  options: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} }
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
    | CreateOrUpdateTextBlocklistDefaultResponse
): Promise<TextBlocklist> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} }
): Promise<TextBlocklist> {
  const result = await _createOrUpdateTextBlocklistSend(
    context,
    blocklistName,
    resource,
    options
  );
  return _createOrUpdateTextBlocklistDeserialize(result);
}

export function _deleteTextBlocklistSend(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptions = { requestOptions: {} }
): StreamableMethod<
  DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
> {
  return context
    .path("/text/blocklists/{blocklistName}", blocklistName)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTextBlocklistDeserialize(
  result: DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Deletes a text blocklist. */
export async function deleteTextBlocklist(
  context: Client,
  blocklistName: string,
  options: DeleteTextBlocklistOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteTextBlocklistSend(
    context,
    blocklistName,
    options
  );
  return _deleteTextBlocklistDeserialize(result);
}

export function _listTextBlocklistsSend(
  context: Client,
  options: ListTextBlocklistsOptions = { requestOptions: {} }
): StreamableMethod<
  ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
> {
  return context
    .path("/text/blocklists")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listTextBlocklistsDeserialize(
  result: ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
): Promise<PagedTextBlocklist> {
  if (isUnexpected(result)) {
    throw result.body;
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
export async function listTextBlocklists(
  context: Client,
  options: ListTextBlocklistsOptions = { requestOptions: {} }
): Promise<PagedTextBlocklist> {
  const result = await _listTextBlocklistsSend(context, options);
  return _listTextBlocklistsDeserialize(result);
}

export function _addOrUpdateBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: AddOrUpdateBlockItemsOptions,
  options: AddOrUpdateBlockItemsRequestOptions = { requestOptions: {} }
): StreamableMethod<
  AddOrUpdateBlockItems200Response | AddOrUpdateBlockItemsDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}:addOrUpdateBlockItems",
      blocklistName
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
    | AddOrUpdateBlockItemsDefaultResponse
): Promise<AddOrUpdateBlockItemsResult> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: AddOrUpdateBlockItemsRequestOptions = { requestOptions: {} }
): Promise<AddOrUpdateBlockItemsResult> {
  const result = await _addOrUpdateBlockItemsSend(
    context,
    blocklistName,
    body,
    options
  );
  return _addOrUpdateBlockItemsDeserialize(result);
}

export function _removeBlockItemsSend(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: RemoveBlockItemsRequestOptions = { requestOptions: {} }
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
  result: RemoveBlockItems204Response | RemoveBlockItemsDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
export async function removeBlockItems(
  context: Client,
  blocklistName: string,
  body: RemoveBlockItemsOptions,
  options: RemoveBlockItemsRequestOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _removeBlockItemsSend(
    context,
    blocklistName,
    body,
    options
  );
  return _removeBlockItemsDeserialize(result);
}

export function _getTextBlocklistItemSend(
  context: Client,
  blocklistName: string,
  blockItemId: string,
  options: GetTextBlocklistItemOptions = { requestOptions: {} }
): StreamableMethod<
  GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
> {
  return context
    .path(
      "/text/blocklists/{blocklistName}/blockItems/{blockItemId}",
      blocklistName,
      blockItemId
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTextBlocklistItemDeserialize(
  result: GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
): Promise<TextBlockItem> {
  if (isUnexpected(result)) {
    throw result.body;
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
  options: GetTextBlocklistItemOptions = { requestOptions: {} }
): Promise<TextBlockItem> {
  const result = await _getTextBlocklistItemSend(
    context,
    blocklistName,
    blockItemId,
    options
  );
  return _getTextBlocklistItemDeserialize(result);
}

export function _listTextBlocklistItemsSend(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptions = { requestOptions: {} }
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
    | ListTextBlocklistItemsDefaultResponse
): Promise<PagedTextBlockItem> {
  if (isUnexpected(result)) {
    throw result.body;
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
export async function listTextBlocklistItems(
  context: Client,
  blocklistName: string,
  options: ListTextBlocklistItemsOptions = { requestOptions: {} }
): Promise<PagedTextBlockItem> {
  const result = await _listTextBlocklistItemsSend(
    context,
    blocklistName,
    options
  );
  return _listTextBlocklistItemsDeserialize(result);
}
