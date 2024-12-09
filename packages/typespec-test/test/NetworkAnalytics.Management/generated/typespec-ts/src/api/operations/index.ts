// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  OperationsListOptionalParams,
} from "../index.js";
import { operationArrayDeserializer } from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _listSend(
  context: Client,
  options: OperationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.NetworkAnalytics/operations")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listContentType: application / json },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return operationArrayDeserializer(result.body);
}

/** List the operations for the provider */
export function list(
  context: Client,
  options: OperationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
