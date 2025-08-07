// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createContentSafety,
  ContentSafetyContext,
  ContentSafetyClientOptionalParams,
} from "./api/index.js";
import {
  listTextBlocklistItems,
  getTextBlocklistItem,
  removeBlocklistItems,
  addOrUpdateBlocklistItems,
  listTextBlocklists,
  deleteTextBlocklist,
  createOrUpdateTextBlocklist,
  getTextBlocklist,
  analyzeImage,
  detectTextProtectedMaterial,
  shieldPrompt,
  analyzeText,
} from "./api/operations.js";
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
} from "./api/options.js";
import {
  AnalyzeTextOptions,
  AnalyzeTextResult,
  ShieldPromptOptions,
  ShieldPromptResult,
  DetectTextProtectedMaterialOptions,
  DetectTextProtectedMaterialResult,
  AnalyzeImageOptions,
  AnalyzeImageResult,
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  RemoveTextBlocklistItemsOptions,
} from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

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
      : `azsdk-js-client`;
    this._client = createContentSafety(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Get all blocklistItems in a text blocklist. */
  listTextBlocklistItems(
    blocklistName: string,
    options: ListTextBlocklistItemsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlocklistItem> {
    return listTextBlocklistItems(this._client, blocklistName, options);
  }

  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  getTextBlocklistItem(
    blocklistName: string,
    blocklistItemId: string,
    options: GetTextBlocklistItemOptionalParams = { requestOptions: {} },
  ): Promise<TextBlocklistItem> {
    return getTextBlocklistItem(
      this._client,
      blocklistName,
      blocklistItemId,
      options,
    );
  }

  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  removeBlocklistItems(
    blocklistName: string,
    body: RemoveTextBlocklistItemsOptions,
    options: RemoveBlocklistItemsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return removeBlocklistItems(this._client, blocklistName, body, options);
  }

  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  addOrUpdateBlocklistItems(
    blocklistName: string,
    body: AddOrUpdateTextBlocklistItemsOptions,
    options: AddOrUpdateBlocklistItemsOptionalParams = { requestOptions: {} },
  ): Promise<AddOrUpdateTextBlocklistItemsResult> {
    return addOrUpdateBlocklistItems(
      this._client,
      blocklistName,
      body,
      options,
    );
  }

  /** Get all text blocklists details. */
  listTextBlocklists(
    options: ListTextBlocklistsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TextBlocklist> {
    return listTextBlocklists(this._client, options);
  }

  /** Deletes a text blocklist. */
  deleteTextBlocklist(
    blocklistName: string,
    options: DeleteTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTextBlocklist(this._client, blocklistName, options);
  }

  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
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

  /** Returns text blocklist details. */
  getTextBlocklist(
    blocklistName: string,
    options: GetTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return getTextBlocklist(this._client, blocklistName, options);
  }

  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeImage(
    body: AnalyzeImageOptions,
    options: AnalyzeImageOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeImageResult> {
    return analyzeImage(this._client, body, options);
  }

  /** A synchronous API for detecting protected material in the given text. */
  detectTextProtectedMaterial(
    body: DetectTextProtectedMaterialOptions,
    options: DetectTextProtectedMaterialOptionalParams = { requestOptions: {} },
  ): Promise<DetectTextProtectedMaterialResult> {
    return detectTextProtectedMaterial(this._client, body, options);
  }

  /** A synchronous API for shielding prompt from direct and indirect injection attacks. */
  shieldPrompt(
    body: ShieldPromptOptions,
    options: ShieldPromptOptionalParams = { requestOptions: {} },
  ): Promise<ShieldPromptResult> {
    return shieldPrompt(this._client, body, options);
  }

  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  analyzeText(
    body: AnalyzeTextOptions,
    options: AnalyzeTextOptionalParams = { requestOptions: {} },
  ): Promise<AnalyzeTextResult> {
    return analyzeText(this._client, body, options);
  }
}
