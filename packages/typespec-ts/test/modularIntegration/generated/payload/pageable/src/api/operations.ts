// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { _PagedUser, User } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import { PageableContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ListOptionalParams } from "../models/options.js";

export function _listSend(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/payload/pageable")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { maxpagesize: options?.maxpagesize },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedUser> {
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

/** List users */
export function list(
  context: Client,
  options: ListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
