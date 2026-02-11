// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createTextBlocklists,
  TextBlocklistsContext,
  TextBlocklistsOptionalParams,
} from "./api/index.js";
import {
  TextBlocklist,
  AddOrUpdateTextBlocklistItemsOptions,
  TextBlocklistItem,
  AddOrUpdateTextBlocklistItemsResult,
  RemoveTextBlocklistItemsOptions,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  listTextBlocklistItems,
  getTextBlocklistItem,
  removeBlocklistItems,
  addOrUpdateBlocklistItems,
  listTextBlocklists,
  deleteTextBlocklist,
  createOrUpdateTextBlocklist,
  getTextBlocklist,
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
} from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TextBlocklistsOptionalParams } from "./api/textBlocklistsContext.js";

export class TextBlocklists {
  private _client: TextBlocklistsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: TextBlocklistsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTextBlocklists(endpointParam, credential, {
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
    return getTextBlocklistItem(this._client, blocklistName, blocklistItemId, options);
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
    return addOrUpdateBlocklistItems(this._client, blocklistName, body, options);
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
    return createOrUpdateTextBlocklist(this._client, blocklistName, resource, options);
  }

  /** Returns text blocklist details. */
  getTextBlocklist(
    blocklistName: string,
    options: GetTextBlocklistOptionalParams = { requestOptions: {} },
  ): Promise<TextBlocklist> {
    return getTextBlocklist(this._client, blocklistName, options);
  }
}
