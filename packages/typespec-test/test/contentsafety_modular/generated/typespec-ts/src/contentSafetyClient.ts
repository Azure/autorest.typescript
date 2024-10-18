// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createContentSafety,
  ContentSafetyContext,
  ContentSafetyClientOptionalParams,
  analyzeText,
  analyzeImage,
  getTextBlocklist,
  createOrUpdateTextBlocklist,
  deleteTextBlocklist,
  listTextBlocklists,
  addOrUpdateBlockItems,
  removeBlockItems,
  getTextBlocklistItem,
  listTextBlocklistItems,
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
} from "./api/index.js";
import {
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  AnalyzeTextOptions,
  AnalyzeTextResult,
} from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { ContentSafetyClientOptionalParams } from "./api/contentSafetyContext.js";

export class ContentSafetyClient {
  private _client: ContentSafetyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Analyze harmful content */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ContentSafetyClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createContentSafety(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** A sync API for harmful content analysis for text. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  analyzeText(
    body: AnalyzeTextOptions,
    options: AnalyzeTextOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeTextResult> {
    return analyzeText(this._client, body, options);
  }

  /** A sync API for harmful content analysis for image. Currently, we support four categories: Hate, SelfHarm, Sexual, Violence. */
  analyzeImage(
    body: AnalyzeImageOptions,
    options: AnalyzeImageOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeImageResult> {
    return analyzeImage(this._client, body, options);
  }

  /** Returns text blocklist details. */
  getTextBlocklist(
    blocklistName: string,
    options: GetTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return getTextBlocklist(this._client, blocklistName, options);
  }

  /** Updates a text blocklist, if blocklistName does not exist, create a new blocklist. */
  createOrUpdateTextBlocklist(
    blocklistName: string,
    resource: TextBlocklist,
    options: CreateOrUpdateTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return createOrUpdateTextBlocklist(
      this._client,
      blocklistName,
      resource,
      options,
    );
  }

  /** Deletes a text blocklist. */
  deleteTextBlocklist(
    blocklistName: string,
    options: DeleteTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTextBlocklist(this._client, blocklistName, options);
  }

  /** Get all text blocklists details. */
  listTextBlocklists(
    options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlocklist> {
    return listTextBlocklists(this._client, options);
  }

  /** Add or update blockItems to a text blocklist. You can add or update at most 100 BlockItems in one request. */
  addOrUpdateBlockItems(
    blocklistName: string,
    body: AddOrUpdateBlockItemsOptions,
    options: AddOrUpdateBlockItemsOptionalParams = { requestOptions: {} },
  ): Promise<AddOrUpdateBlockItemsResult> {
    return addOrUpdateBlockItems(this._client, blocklistName, body, options);
  }

  /** Remove blockItems from a text blocklist. You can remove at most 100 BlockItems in one request. */
  removeBlockItems(
    blocklistName: string,
    body: RemoveBlockItemsOptions,
    options: RemoveBlockItemsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return removeBlockItems(this._client, blocklistName, body, options);
  }

  /** Get blockItem By blockItemId from a text blocklist. */
  getTextBlocklistItem(
    blocklistName: string,
    blockItemId: string,
    options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
  ): Promise<TextBlockItem> {
    return getTextBlocklistItem(
      this._client,
      blocklistName,
      blockItemId,
      options,
    );
  }

  /** Get all blockItems in a text blocklist */
  listTextBlocklistItems(
    blocklistName: string,
    options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlockItem> {
    return listTextBlocklistItems(this._client, blocklistName, options);
  }
}
