// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import {
  AnalyzeTextResult,
  ImageData,
  AnalyzeImageResult,
  TextBlocklist,
  TextBlockItemInfo,
  AddBlockItemsResult,
  TextBlockItem,
  CustomPage,
} from "./models/models.js";
import {
  AnalyzeTextOptions,
  AnalyzeImageOptions,
  GetTextBlocklistOptions,
  CreateOrUpdateTextBlocklistOptions,
  DeleteTextBlocklistOptions,
  ListTextBlocklistsOptions,
  AddBlockItemsOptions,
  AddOrUpdateBlockItemsOptions,
  RemoveBlockItemsOptions,
  GetTextBlocklistItemOptions,
  ListTextBlocklistItemsOptions,
} from "./models/options.js";
import {
  createContentSafety,
  ContentSafetyClientOptions,
  ContentSafetyContext,
  analyzeText,
  analyzeImage,
  getTextBlocklist,
  createOrUpdateTextBlocklist,
  deleteTextBlocklist,
  listTextBlocklists,
  addBlockItems,
  addOrUpdateBlockItems,
  removeBlockItems,
  getTextBlocklistItem,
  listTextBlocklistItems,
} from "./api/index.js";

export { ContentSafetyClientOptions } from "./api/ContentSafetyContext.js";

export class ContentSafetyClient {
  private _client: ContentSafetyContext;

  /** Analyze harmful content */
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ContentSafetyClientOptions = {}
  ) {
    this._client = createContentSafety(endpoint, credential, options);
  }

  /** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  analyzeText(
    text: string,
    options: AnalyzeTextOptions = { requestOptions: {} }
  ): Promise<AnalyzeTextResult> {
    return analyzeText(this._client, text, options);
  }

  /** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  analyzeImage(
    image: ImageData,
    options: AnalyzeImageOptions = { requestOptions: {} }
  ): Promise<AnalyzeImageResult> {
    return analyzeImage(this._client, image, options);
  }

  /** Returns text blocklist details. */
  getTextBlocklist(
    blocklistName: string,
    options: GetTextBlocklistOptions = { requestOptions: {} }
  ): Promise<TextBlocklist> {
    return getTextBlocklist(this._client, blocklistName, options);
  }

  /** Updates a text blocklist, if blocklistName does not exist, create a new blocklist. */
  createOrUpdateTextBlocklist(
    blocklistName: string,
    options: CreateOrUpdateTextBlocklistOptions = { requestOptions: {} }
  ): Promise<TextBlocklist> {
    return createOrUpdateTextBlocklist(this._client, blocklistName, options);
  }

  /** Deletes a text blocklist. */
  deleteTextBlocklist(
    blocklistName: string,
    options: DeleteTextBlocklistOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteTextBlocklist(this._client, blocklistName, options);
  }

  /** Get all text blocklists details. */
  listTextBlocklists(
    options: ListTextBlocklistsOptions = { requestOptions: {} }
  ): Promise<CustomPage> {
    return listTextBlocklists(this._client, options);
  }

  /** Add blockItems to a text blocklist. You can add at most 100 BlockItems in one request. */
  addBlockItems(
    blockItems: TextBlockItemInfo[],
    blocklistName: string,
    options: AddBlockItemsOptions = { requestOptions: {} }
  ): Promise<AddBlockItemsResult> {
    return addBlockItems(this._client, blockItems, blocklistName, options);
  }

  /** Add or update blockItems to a text blocklist. You can add or update at most 100 BlockItems in one request. */
  addOrUpdateBlockItems(
    blockItems: TextBlockItemInfo[],
    blocklistName: string,
    options: AddOrUpdateBlockItemsOptions = { requestOptions: {} }
  ): Promise<AddBlockItemsResult> {
    return addOrUpdateBlockItems(
      this._client,
      blockItems,
      blocklistName,
      options
    );
  }

  /** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
  removeBlockItems(
    blockItemIds: string[],
    blocklistName: string,
    options: RemoveBlockItemsOptions = { requestOptions: {} }
  ): Promise<void> {
    return removeBlockItems(this._client, blockItemIds, blocklistName, options);
  }

  /** Get blockItem By blockItemId from a text blocklist. */
  getTextBlocklistItem(
    blocklistName: string,
    blockItemId: string,
    options: GetTextBlocklistItemOptions = { requestOptions: {} }
  ): Promise<TextBlockItem> {
    return getTextBlocklistItem(
      this._client,
      blocklistName,
      blockItemId,
      options
    );
  }

  /** Get all blockItems in a text blocklist */
  listTextBlocklistItems(
    blocklistName: string,
    options: ListTextBlocklistItemsOptions = { requestOptions: {} }
  ): Promise<CustomPage> {
    return listTextBlocklistItems(this._client, blocklistName, options);
  }
}
