// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "../index.js";
import { errorResponseDeserializer } from "../../../models/azure/search/documents/models.js";
import {
  documentKeysOrIdsSerializer,
  SearchIndexer,
  searchIndexerSerializer,
  searchIndexerDeserializer,
  ListIndexersResult,
  listIndexersResultDeserializer,
  SearchIndexerStatus,
  searchIndexerStatusDeserializer,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  IndexersGetStatusOptionalParams,
  IndexersCreateOptionalParams,
  IndexersListOptionalParams,
  IndexersGetOptionalParams,
  IndexersDeleteOptionalParams,
  IndexersCreateOrUpdateOptionalParams,
  IndexersRunOptionalParams,
  IndexersResetDocsOptionalParams,
  IndexersResetOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getStatusSend(
  context: Client,
  indexerName: string,
  options: IndexersGetStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}')/search.status{?api%2Dversion}",
    {
      indexerName: indexerName,
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

export async function _getStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexerStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerStatusDeserializer(result.body);
}

/** Returns the current status and execution history of an indexer. */
export async function getStatus(
  context: Client,
  indexerName: string,
  options: IndexersGetStatusOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerStatus> {
  const result = await _getStatusSend(context, indexerName, options);
  return _getStatusDeserialize(result);
}

export function _createSend(
  context: Client,
  indexer: SearchIndexer,
  options: IndexersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers{?api%2Dversion}",
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
      body: searchIndexerSerializer(indexer),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexer> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDeserializer(result.body);
}

/** Creates a new indexer. */
export async function create(
  context: Client,
  indexer: SearchIndexer,
  options: IndexersCreateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexer> {
  const result = await _createSend(context, indexer, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: IndexersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers{?api%2Dversion,%24select}",
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
): Promise<ListIndexersResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listIndexersResultDeserializer(result.body);
}

/** Lists all indexers available for a search service. */
export async function list(
  context: Client,
  options: IndexersListOptionalParams = { requestOptions: {} },
): Promise<ListIndexersResult> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  indexerName: string,
  options: IndexersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}'){?api%2Dversion}",
    {
      indexerName: indexerName,
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
): Promise<SearchIndexer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDeserializer(result.body);
}

/** Retrieves an indexer definition. */
export async function get(
  context: Client,
  indexerName: string,
  options: IndexersGetOptionalParams = { requestOptions: {} },
): Promise<SearchIndexer> {
  const result = await _getSend(context, indexerName, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  indexerName: string,
  options: IndexersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}'){?api%2Dversion}",
    {
      indexerName: indexerName,
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

/** Deletes an indexer. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  indexerName: string,
  options: IndexersDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, indexerName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  indexer: SearchIndexer,
  indexerName: string,
  options: IndexersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}'){?api%2Dversion,ignoreResetRequirements,disableCacheReprocessingChangeDetection}",
    {
      indexerName: indexerName,
      "api%2Dversion": context.apiVersion,
      ignoreResetRequirements: options?.skipIndexerResetRequirementForCache,
      disableCacheReprocessingChangeDetection:
        options?.disableCacheReprocessingChangeDetection,
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
      body: searchIndexerSerializer(indexer),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexer> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDeserializer(result.body);
}

/** Creates a new indexer or updates an indexer if it already exists. */
export async function createOrUpdate(
  context: Client,
  indexer: SearchIndexer,
  indexerName: string,
  options: IndexersCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexer> {
  const result = await _createOrUpdateSend(
    context,
    indexer,
    indexerName,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _runSend(
  context: Client,
  indexerName: string,
  options: IndexersRunOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}')/search.run{?api%2Dversion}",
    {
      indexerName: indexerName,
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
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _runDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Runs an indexer on-demand. */
export async function run(
  context: Client,
  indexerName: string,
  options: IndexersRunOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _runSend(context, indexerName, options);
  return _runDeserialize(result);
}

export function _resetDocsSend(
  context: Client,
  indexerName: string,
  options: IndexersResetDocsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}')/search.resetdocs{?api%2Dversion,overwrite}",
    {
      indexerName: indexerName,
      "api%2Dversion": context.apiVersion,
      overwrite: options?.overwrite,
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
      body: !options["keysOrIds"]
        ? options["keysOrIds"]
        : documentKeysOrIdsSerializer(options["keysOrIds"]),
    });
}

export async function _resetDocsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Resets specific documents in the datasource to be selectively re-ingested by
 * the indexer.
 */
export async function resetDocs(
  context: Client,
  indexerName: string,
  options: IndexersResetDocsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resetDocsSend(context, indexerName, options);
  return _resetDocsDeserialize(result);
}

export function _resetSend(
  context: Client,
  indexerName: string,
  options: IndexersResetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/indexers('{indexerName}')/search.reset{?api%2Dversion}",
    {
      indexerName: indexerName,
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
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _resetDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Resets the change tracking state associated with an indexer. */
export async function reset(
  context: Client,
  indexerName: string,
  options: IndexersResetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resetSend(context, indexerName, options);
  return _resetDeserialize(result);
}
