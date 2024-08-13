// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  User,
  ListItemInputBody,
  FirstItem,
  SecondItem,
  _PagedFirstItem,
  _PagedSecondItem,
  _PagedUser,
  _UserListResults,
} from "../models/models.js";
import { PageContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import {
  ListWithPageOptionalParams,
  ListWithParametersOptionalParams,
  ListWithCustomPageModelOptionalParams,
  ListFirstItemOptionalParams,
  ListSecondItemOptionalParams,
} from "../models/options.js";

export function _listWithPageSend(
  context: Client,
  options: ListWithPageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/page/page")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listWithPageDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedUser> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        orders:
          p["orders"] === undefined
            ? p["orders"]
            : p["orders"].map((p: any) => {
                return {
                  id: p["id"],
                  userId: p["userId"],
                  detail: p["detail"],
                };
              }),
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List with Azure.Core.Page<>. */
export function listWithPage(
  context: Client,
  options: ListWithPageOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(
    context,
    () => _listWithPageSend(context, options),
    _listWithPageDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listWithParametersSend(
  context: Client,
  bodyInput: ListItemInputBody,
  options: ListWithParametersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/page/parameters")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { another: options?.another },
      body: { inputName: bodyInput["inputName"] },
    });
}

export async function _listWithParametersDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedUser> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        orders:
          p["orders"] === undefined
            ? p["orders"]
            : p["orders"].map((p: any) => {
                return {
                  id: p["id"],
                  userId: p["userId"],
                  detail: p["detail"],
                };
              }),
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List with extensible enum parameter Azure.Core.Page<>. */
export function listWithParameters(
  context: Client,
  bodyInput: ListItemInputBody,
  options: ListWithParametersOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(
    context,
    () => _listWithParametersSend(context, bodyInput, options),
    _listWithParametersDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listWithCustomPageModelSend(
  context: Client,
  options: ListWithCustomPageModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/page/custom-page")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listWithCustomPageModelDeserialize(
  result: PathUncheckedResponse,
): Promise<_UserListResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    items: result.body["items"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        orders:
          p["orders"] === undefined
            ? p["orders"]
            : p["orders"].map((p: any) => {
                return {
                  id: p["id"],
                  userId: p["userId"],
                  detail: p["detail"],
                };
              }),
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List with custom page model. */
export function listWithCustomPageModel(
  context: Client,
  options: ListWithCustomPageModelOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(
    context,
    () => _listWithCustomPageModelSend(context, options),
    _listWithCustomPageModelDeserialize,
    ["200"],
    { itemName: "items", nextLinkName: "nextLink" },
  );
}

export function _listFirstItemSend(
  context: Client,
  options: ListFirstItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/page/first-item")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFirstItemDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedFirstItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return { id: p["id"] };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Two operations with two different page item types should be successfully generated. Should generate model for FirstItem. */
export function listFirstItem(
  context: Client,
  options: ListFirstItemOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FirstItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listFirstItemSend(context, options),
    _listFirstItemDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSecondItemSend(
  context: Client,
  options: ListSecondItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/page/second-item")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listSecondItemDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedSecondItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return { name: p["name"] };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Two operations with two different page item types should be successfully generated. Should generate model for SecondItem. */
export function listSecondItem(
  context: Client,
  options: ListSecondItemOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SecondItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listSecondItemSend(context, options),
    _listSecondItemDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
