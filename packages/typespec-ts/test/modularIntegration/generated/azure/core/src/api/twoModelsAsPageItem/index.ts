// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PagedFirstItem,
  FirstItem,
  PagedSecondItem,
  SecondItem,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BasicContext as Client,
  ListFirstItem200Response,
  ListFirstItemDefaultResponse,
  ListSecondItem200Response,
  ListSecondItemDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  TwoModelsAsPageItemListFirstItemOptions,
  TwoModelsAsPageItemListSecondItemOptions,
} from "../../models/options.js";

export function _listFirstItemSend(
  context: Client,
  options: TwoModelsAsPageItemListFirstItemOptions = { requestOptions: {} },
): StreamableMethod<ListFirstItem200Response | ListFirstItemDefaultResponse> {
  return context
    .path("/azure/core/basic/first-item")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFirstItemDeserialize(
  result: ListFirstItem200Response | ListFirstItemDefaultResponse,
): Promise<PagedFirstItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({ id: p["id"] })),
    nextLink: result.body["nextLink"],
  };
}

/** Two operations with two different page item types should be successfully generated. Should generate model for FirstItem. */
export function listFirstItem(
  context: Client,
  options: TwoModelsAsPageItemListFirstItemOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<FirstItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listFirstItemSend(context, options),
    _listFirstItemDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSecondItemSend(
  context: Client,
  options: TwoModelsAsPageItemListSecondItemOptions = { requestOptions: {} },
): StreamableMethod<ListSecondItem200Response | ListSecondItemDefaultResponse> {
  return context
    .path("/azure/core/basic/second-item")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSecondItemDeserialize(
  result: ListSecondItem200Response | ListSecondItemDefaultResponse,
): Promise<PagedSecondItem> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({ name: p["name"] })),
    nextLink: result.body["nextLink"],
  };
}

/** Two operations with two different page item types should be successfully generated. Should generate model for SecondItem. */
export function listSecondItem(
  context: Client,
  options: TwoModelsAsPageItemListSecondItemOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<SecondItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listSecondItemSend(context, options),
    _listSecondItemDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
