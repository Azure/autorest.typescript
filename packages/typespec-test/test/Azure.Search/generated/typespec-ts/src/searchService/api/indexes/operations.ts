// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "../index.js";
import { errorResponseDeserializer } from "../../../models/azure/search/documents/models.js";
import {
  SearchIndex,
  searchIndexSerializer,
  searchIndexDeserializer,
  _ListIndexesResult,
  _listIndexesResultDeserializer,
  GetIndexStatisticsResult,
  getIndexStatisticsResultDeserializer,
  AnalyzeRequest,
  analyzeRequestSerializer,
  AnalyzeResult,
  analyzeResultDeserializer,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  IndexesAnalyzeOptionalParams,
  IndexesGetStatisticsOptionalParams,
  IndexesCreateOptionalParams,
  IndexesListOptionalParams,
  IndexesGetOptionalParams,
  IndexesDeleteOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _analyzeSend(
  context: Client,
  request: AnalyzeRequest,
  indexName: string,
  options: IndexesAnalyzeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes('{indexName}')/search.analyze{?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: analyzeRequestSerializer(request),
    });
}

export async function _analyzeDeserialize(
  result: PathUncheckedResponse,
): Promise<AnalyzeResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return analyzeResultDeserializer(result.body);
}

/** Shows how an analyzer breaks text into tokens. */
export async function analyze(
  context: Client,
  request: AnalyzeRequest,
  indexName: string,
  options: IndexesAnalyzeOptionalParams = { requestOptions: {} },
): Promise<AnalyzeResult> {
  const result = await _analyzeSend(context, request, indexName, options);
  return _analyzeDeserialize(result);
}

export function _getStatisticsSend(
  context: Client,
  indexName: string,
  options: IndexesGetStatisticsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes('{indexName}')/search.stats{?api%2Dversion}",
    {
      indexName: indexName,
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

export async function _getStatisticsDeserialize(
  result: PathUncheckedResponse,
): Promise<GetIndexStatisticsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return getIndexStatisticsResultDeserializer(result.body);
}

/**
 * Returns statistics for the given index, including a document count and storage
 * usage.
 */
export async function getStatistics(
  context: Client,
  indexName: string,
  options: IndexesGetStatisticsOptionalParams = { requestOptions: {} },
): Promise<GetIndexStatisticsResult> {
  const result = await _getStatisticsSend(context, indexName, options);
  return _getStatisticsDeserialize(result);
}

export function _createSend(
  context: Client,
  index: SearchIndex,
  options: IndexesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: searchIndexSerializer(index),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndex> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexDeserializer(result.body);
}

/** Creates a new search index. */
export async function create(
  context: Client,
  index: SearchIndex,
  options: IndexesCreateOptionalParams = { requestOptions: {} },
): Promise<SearchIndex> {
  const result = await _createSend(context, index, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: IndexesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes{?api%2Dversion,%24select}",
    {
      "api%2Dversion": context.apiVersion,
      "%24select": options?.select,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListIndexesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _listIndexesResultDeserializer(result.body);
}

/** Lists all indexes available for a search service. */
export function list(
  context: Client,
  options: IndexesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SearchIndex> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "indexes" },
  );
}

export function _getSend(
  context: Client,
  indexName: string,
  options: IndexesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes('{indexName}'){?api%2Dversion}",
    {
      indexName: indexName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndex> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexDeserializer(result.body);
}

/** Retrieves an index definition. */
export async function get(
  context: Client,
  indexName: string,
  options: IndexesGetOptionalParams = { requestOptions: {} },
): Promise<SearchIndex> {
  const result = await _getSend(context, indexName, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  indexName: string,
  options: IndexesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes('{indexName}'){?api%2Dversion}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Deletes a search index and all the documents it contains. This operation is
 * permanent, with no recovery option. Make sure you have a master copy of your
 * index definition, data ingestion code, and a backup of the primary data source
 * in case you need to re-build the index.
 */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  indexName: string,
  options: IndexesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, indexName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  index: SearchIndex,
  indexName: string,
  options: IndexesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexes('{indexName}'){?api%2Dversion,allowIndexDowntime}",
    {
      indexName: indexName,
      "api%2Dversion": context.apiVersion,
      allowIndexDowntime: options?.allowIndexDowntime,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
        prefer: "return=representation",
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: searchIndexSerializer(index),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndex> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexDeserializer(result.body);
}

/** Creates a new search index or updates an index if it already exists. */
export async function createOrUpdate(
  context: Client,
  index: SearchIndex,
  indexName: string,
  options: IndexesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SearchIndex> {
  const result = await _createOrUpdateSend(context, index, indexName, options);
  return _createOrUpdateDeserialize(result);
}
