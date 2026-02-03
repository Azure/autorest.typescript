// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext as Client } from "../index.js";
import {
  defaultErrorResponseDeserializer,
  _RecommendationCollection,
  _recommendationCollectionDeserializer,
  Recommendation,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams,
  RecommendationsOperationGroupResetAllFiltersOptionalParams,
  RecommendationsOperationGroupListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _disableRecommendationForSubscriptionSend(
  context: Client,
  name: string,
  options: RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/{name}/disable{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      name: name,
      "api%2Dversion": context.apiVersion ?? "2025-05-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({ ...operationOptionsToRequestParameters(options) });
}

export async function _disableRecommendationForSubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Description for Disables the specified rule so it will not apply to a subscription in the future. */
export async function disableRecommendationForSubscription(
  context: Client,
  name: string,
  options: RecommendationsOperationGroupDisableRecommendationForSubscriptionOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _disableRecommendationForSubscriptionSend(context, name, options);
  return _disableRecommendationForSubscriptionDeserialize(result);
}

export function _resetAllFiltersSend(
  context: Client,
  options: RecommendationsOperationGroupResetAllFiltersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations/reset{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion ?? "2025-05-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({ ...operationOptionsToRequestParameters(options) });
}

export async function _resetAllFiltersDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Description for Reset all recommendation opt-out settings for a subscription. */
export async function resetAllFilters(
  context: Client,
  options: RecommendationsOperationGroupResetAllFiltersOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resetAllFiltersSend(context, options);
  return _resetAllFiltersDeserialize(result);
}

export function _listSend(
  context: Client,
  options: RecommendationsOperationGroupListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/recommendations{?api%2Dversion,featured,%24filter}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion ?? "2025-05-01",
      featured: options?.featured,
      "%24filter": options?.filter,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_RecommendationCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return _recommendationCollectionDeserializer(result.body);
}

/** Description for List all recommendations for a subscription. */
export function list(
  context: Client,
  options: RecommendationsOperationGroupListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Recommendation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-05-01" },
  );
}
