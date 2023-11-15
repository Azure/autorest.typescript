// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PagedUser, User } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import { List200Response, PageableContext as Client } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { ListOptions } from "../models/options.js";

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<List200Response> {
  return context
    .path("/payload/pageable")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { maxpagesize: options?.maxpagesize },
    });
}

export async function _listDeserialize(
  result: List200Response
): Promise<PagedUser> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: (result.body["value"] ?? []).map((p) => ({ name: p["name"] })),
    nextLink: result.body["nextLink"],
  };
}

/** List users */
export function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): PagedAsyncIterableIterator<User> {
  return buildPagedAsyncIterator(context, _listSend, _listDeserialize, [
    context,
    options,
  ]);
}
