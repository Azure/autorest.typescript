// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "../index.js";
import { errorResponseDeserializer } from "../../../models/azure/search/documents/models.js";
import {
  SearchIndexerDataSource,
  searchIndexerDataSourceSerializer,
  searchIndexerDataSourceDeserializer,
  ListDataSourcesResult,
  listDataSourcesResultDeserializer,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  DataSourcesCreateOptionalParams,
  DataSourcesListOptionalParams,
  DataSourcesGetOptionalParams,
  DataSourcesDeleteOptionalParams,
  DataSourcesCreateOrUpdateOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  dataSource: SearchIndexerDataSource,
  options: DataSourcesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/datasources{?api%2Dversion}",
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
      body: searchIndexerDataSourceSerializer(dataSource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexerDataSource> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDataSourceDeserializer(result.body);
}

/** Creates a new datasource. */
export async function create(
  context: Client,
  dataSource: SearchIndexerDataSource,
  options: DataSourcesCreateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerDataSource> {
  const result = await _createSend(context, dataSource, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: DataSourcesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/datasources{?api%2Dversion,%24select}",
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
): Promise<ListDataSourcesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listDataSourcesResultDeserializer(result.body);
}

/** Lists all datasources available for a search service. */
export async function list(
  context: Client,
  options: DataSourcesListOptionalParams = { requestOptions: {} },
): Promise<ListDataSourcesResult> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  dataSourceName: string,
  options: DataSourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/datasources('{dataSourceName}'){?api%2Dversion}",
    {
      dataSourceName: dataSourceName,
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
): Promise<SearchIndexerDataSource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDataSourceDeserializer(result.body);
}

/** Retrieves a datasource definition. */
export async function get(
  context: Client,
  dataSourceName: string,
  options: DataSourcesGetOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerDataSource> {
  const result = await _getSend(context, dataSourceName, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  dataSourceName: string,
  options: DataSourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/datasources('{dataSourceName}'){?api%2Dversion}",
    {
      dataSourceName: dataSourceName,
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

/** Deletes a datasource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  dataSourceName: string,
  options: DataSourcesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, dataSourceName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  dataSource: SearchIndexerDataSource,
  dataSourceName: string,
  options: DataSourcesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/datasources('{dataSourceName}'){?api%2Dversion,ignoreResetRequirements}",
    {
      dataSourceName: dataSourceName,
      "api%2Dversion": context.apiVersion,
      ignoreResetRequirements: options?.skipIndexerResetRequirementForCache,
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
      body: searchIndexerDataSourceSerializer(dataSource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexerDataSource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerDataSourceDeserializer(result.body);
}

/** Creates a new datasource or updates a datasource if it already exists. */
export async function createOrUpdate(
  context: Client,
  dataSource: SearchIndexerDataSource,
  dataSourceName: string,
  options: DataSourcesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerDataSource> {
  const result = await _createOrUpdateSend(
    context,
    dataSource,
    dataSourceName,
    options,
  );
  return _createOrUpdateDeserialize(result);
}
