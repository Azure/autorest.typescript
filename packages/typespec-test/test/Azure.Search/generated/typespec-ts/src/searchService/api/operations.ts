// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "./index.js";
import { errorResponseDeserializer } from "../../models/azure/search/documents/models.js";
import {
  SearchServiceStatistics,
  searchServiceStatisticsDeserializer,
  _ListIndexStatsSummary,
  _listIndexStatsSummaryDeserializer,
  IndexStatisticsSummary,
} from "../../models/azure/search/documents/indexes/models.js";
import {
  GetIndexStatsSummaryOptionalParams,
  GetServiceStatisticsOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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

export function _getIndexStatsSummarySend(
  context: Client,
  options: GetIndexStatsSummaryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexstats{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getIndexStatsSummaryDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListIndexStatsSummary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _listIndexStatsSummaryDeserializer(result.body);
}

/** Retrieves a summary of statistics for all indexes in the search service. */
export function getIndexStatsSummary(
  context: Client,
  options: GetIndexStatsSummaryOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<IndexStatisticsSummary> {
  return buildPagedAsyncIterator(
    context,
    () => _getIndexStatsSummarySend(context, options),
    _getIndexStatsSummaryDeserialize,
    ["200"],
    { itemName: "IndexesStatistics" },
  );
}

export function _getServiceStatisticsSend(
  context: Client,
  options: GetServiceStatisticsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/servicestats{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getServiceStatisticsDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchServiceStatistics> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchServiceStatisticsDeserializer(result.body);
}

/** Gets service level statistics for a search service. */
export async function getServiceStatistics(
  context: Client,
  options: GetServiceStatisticsOptionalParams = { requestOptions: {} },
): Promise<SearchServiceStatistics> {
  const result = await _getServiceStatisticsSend(context, options);
  return _getServiceStatisticsDeserialize(result);
}
