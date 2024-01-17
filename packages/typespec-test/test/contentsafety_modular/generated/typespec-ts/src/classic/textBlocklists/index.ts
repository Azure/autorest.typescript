// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentSafetyContext } from "../../api/ContentSafetyContext.js";
import {
  TextBlocklist,
  AddOrUpdateBlockItemsOptions,
  AddOrUpdateBlockItemsResult,
  TextBlockItem,
  RemoveBlockItemsOptions,
} from "../../models/models.js";
import {
  getTextBlocklist,
  createOrUpdateTextBlocklist,
  deleteTextBlocklist,
  listTextBlocklists,
  addOrUpdateBlockItems,
  removeBlockItems,
  getTextBlocklistItem,
  listTextBlocklistItems,
} from "../../api/textBlocklists/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
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

export interface TextBlocklistsOperations {
  getTextBlocklist: (
    blocklistName: string,
    options?: TextBlocklistsGetTextBlocklistOptions,
  ) => Promise<TextBlocklist>;
  createOrUpdateTextBlocklist: (
    blocklistName: string,
    resource: TextBlocklist,
    options?: TextBlocklistsCreateOrUpdateTextBlocklistOptions,
  ) => Promise<TextBlocklist>;
  deleteTextBlocklist: (
    blocklistName: string,
    options?: TextBlocklistsDeleteTextBlocklistOptions,
  ) => Promise<void>;
  listTextBlocklists: (
    options?: TextBlocklistsListTextBlocklistsOptions,
  ) => PagedAsyncIterableIterator<TextBlocklist>;
  addOrUpdateBlockItems: (
    blocklistName: string,
    body: AddOrUpdateBlockItemsOptions,
    options?: TextBlocklistsAddOrUpdateBlockItemsOptions,
  ) => Promise<AddOrUpdateBlockItemsResult>;
  removeBlockItems: (
    blocklistName: string,
    body: RemoveBlockItemsOptions,
    options?: TextBlocklistsRemoveBlockItemsOptions,
  ) => Promise<void>;
  getTextBlocklistItem: (
    blocklistName: string,
    blockItemId: string,
    options?: TextBlocklistsGetTextBlocklistItemOptions,
  ) => Promise<TextBlockItem>;
  listTextBlocklistItems: (
    blocklistName: string,
    options?: TextBlocklistsListTextBlocklistItemsOptions,
  ) => PagedAsyncIterableIterator<TextBlockItem>;
}

export function getTextBlocklists(context: ContentSafetyContext) {
  return {
    getTextBlocklist: (
      blocklistName: string,
      options?: TextBlocklistsGetTextBlocklistOptions,
    ) => getTextBlocklist(context, blocklistName, options),
    createOrUpdateTextBlocklist: (
      blocklistName: string,
      resource: TextBlocklist,
      options?: TextBlocklistsCreateOrUpdateTextBlocklistOptions,
    ) => createOrUpdateTextBlocklist(context, blocklistName, resource, options),
    deleteTextBlocklist: (
      blocklistName: string,
      options?: TextBlocklistsDeleteTextBlocklistOptions,
    ) => deleteTextBlocklist(context, blocklistName, options),
    listTextBlocklists: (options?: TextBlocklistsListTextBlocklistsOptions) =>
      listTextBlocklists(context, options),
    addOrUpdateBlockItems: (
      blocklistName: string,
      body: AddOrUpdateBlockItemsOptions,
      options?: TextBlocklistsAddOrUpdateBlockItemsOptions,
    ) => addOrUpdateBlockItems(context, blocklistName, body, options),
    removeBlockItems: (
      blocklistName: string,
      body: RemoveBlockItemsOptions,
      options?: TextBlocklistsRemoveBlockItemsOptions,
    ) => removeBlockItems(context, blocklistName, body, options),
    getTextBlocklistItem: (
      blocklistName: string,
      blockItemId: string,
      options?: TextBlocklistsGetTextBlocklistItemOptions,
    ) => getTextBlocklistItem(context, blocklistName, blockItemId, options),
    listTextBlocklistItems: (
      blocklistName: string,
      options?: TextBlocklistsListTextBlocklistItemsOptions,
    ) => listTextBlocklistItems(context, blocklistName, options),
  };
}

export function getTextBlocklistsOperations(
  context: ContentSafetyContext,
): TextBlocklistsOperations {
  return {
    ...getTextBlocklists(context),
  };
}
