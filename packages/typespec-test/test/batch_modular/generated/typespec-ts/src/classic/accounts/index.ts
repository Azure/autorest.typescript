// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import { ImageInformation, PoolNodeCounts } from "../../models/models.js";
import {
  listSupportedImages,
  listPoolNodeCounts,
} from "../../api/accounts/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  AccountsListSupportedImagesOptions,
  AccountsListPoolNodeCountsOptions,
} from "../../models/options.js";

export interface AccountsOperations {
  listSupportedImages: (
    options?: AccountsListSupportedImagesOptions,
  ) => PagedAsyncIterableIterator<ImageInformation>;
  listPoolNodeCounts: (
    options?: AccountsListPoolNodeCountsOptions,
  ) => PagedAsyncIterableIterator<PoolNodeCounts>;
}

export function getAccounts(context: BatchContext) {
  return {
    listSupportedImages: (options?: AccountsListSupportedImagesOptions) =>
      listSupportedImages(context, options),
    listPoolNodeCounts: (options?: AccountsListPoolNodeCountsOptions) =>
      listPoolNodeCounts(context, options),
  };
}

export function getAccountsOperations(
  context: BatchContext,
): AccountsOperations {
  return {
    ...getAccounts(context),
  };
}
