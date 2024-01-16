// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BasicContext } from "../../api/BasicContext.js";
import { FirstItem, SecondItem } from "../../models/models.js";
import {
  listFirstItem,
  listSecondItem,
} from "../../api/twoModelsAsPageItem/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  TwoModelsAsPageItemListFirstItemOptions,
  TwoModelsAsPageItemListSecondItemOptions,
} from "../../models/options.js";

export interface TwoModelsAsPageItemOperations {
  listFirstItem: (
    options?: TwoModelsAsPageItemListFirstItemOptions,
  ) => PagedAsyncIterableIterator<FirstItem>;
  listSecondItem: (
    options?: TwoModelsAsPageItemListSecondItemOptions,
  ) => PagedAsyncIterableIterator<SecondItem>;
}

export function getTwoModelsAsPageItem(context: BasicContext) {
  return {
    listFirstItem: (options?: TwoModelsAsPageItemListFirstItemOptions) =>
      listFirstItem(context, options),
    listSecondItem: (options?: TwoModelsAsPageItemListSecondItemOptions) =>
      listSecondItem(context, options),
  };
}

export function getTwoModelsAsPageItemOperations(
  context: BasicContext,
): TwoModelsAsPageItemOperations {
  return {
    ...getTwoModelsAsPageItem(context),
  };
}
