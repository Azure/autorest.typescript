// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  ListBySubscriptionListBySubscriptionOptionalParams,
} from "../index.js";
import {
  dataProductArrayDeserializer,
  dataProductsCatalogArrayDeserializer,
} from "../../models/models.js";
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

export function _listBySubscriptionSend(
  context: Client,
  options: ListBySubscriptionListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listBySubscriptionContentType: application / json },
    });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductArrayDeserializer(result.body);
}

/** List data products by subscription. */
export function listBySubscription(
  context: Client,
  options: ListBySubscriptionListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  options: ListBySubscriptionListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { listBySubscriptionContentType: application / json },
    });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductsCatalogArrayDeserializer(result.body);
}

/** List data catalog by subscription. */
export function listBySubscription(
  context: Client,
  options: ListBySubscriptionListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<void> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
