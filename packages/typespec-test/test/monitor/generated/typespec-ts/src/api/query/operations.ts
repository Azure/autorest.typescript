// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorQueryLogsContext as Client } from "../index.js";
import {
  QueryResults,
  queryResultsDeserializer,
  errorResponseDeserializer,
  QueryBody,
  queryBodySerializer,
  BatchRequest,
  batchRequestSerializer,
  BatchResponse,
  batchResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  QueryBatchOptionalParams,
  QueryExecuteWithResourceIdOptionalParams,
  QueryGetWithResourceIdOptionalParams,
  QueryExecuteOptionalParams,
  QueryGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _batchSend(
  context: Client,
  body: BatchRequest,
  options: QueryBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/$batch")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: batchRequestSerializer(body),
    });
}

export async function _batchDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return batchResponseDeserializer(result.body);
}

/**
 * Executes a batch of Analytics queries for data.
 * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/batch-queries)
 * is an example for using POST with an Analytics query.
 */
export async function batch(
  context: Client,
  body: BatchRequest,
  options: QueryBatchOptionalParams = { requestOptions: {} },
): Promise<BatchResponse> {
  const result = await _batchSend(context, body, options);
  return _batchDeserialize(result);
}

export function _executeWithResourceIdSend(
  context: Client,
  resourceId: string,
  body: QueryBody,
  options: QueryExecuteWithResourceIdOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceId}/query",
    {
      resourceId: resourceId,
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
        ...(options?.prefer !== undefined ? { Prefer: options?.prefer } : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: queryBodySerializer(body),
    });
}

export async function _executeWithResourceIdDeserialize(
  result: PathUncheckedResponse,
): Promise<QueryResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return queryResultsDeserializer(result.body);
}

/**
 * Executes an Analytics query for data in the context of a resource.
 * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/azure-resource-queries)
 * is an example for using POST with an Analytics query.
 */
export async function executeWithResourceId(
  context: Client,
  resourceId: string,
  body: QueryBody,
  options: QueryExecuteWithResourceIdOptionalParams = { requestOptions: {} },
): Promise<QueryResults> {
  const result = await _executeWithResourceIdSend(
    context,
    resourceId,
    body,
    options,
  );
  return _executeWithResourceIdDeserialize(result);
}

export function _getWithResourceIdSend(
  context: Client,
  resourceId: string,
  query: string,
  options: QueryGetWithResourceIdOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceId}/query{?query,timespan}",
    {
      resourceId: resourceId,
      query: query,
      timespan: options?.timespan,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getWithResourceIdDeserialize(
  result: PathUncheckedResponse,
): Promise<QueryResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return queryResultsDeserializer(result.body);
}

/**
 * Executes an Analytics query for data in the context of a resource.
 * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/azure-resource-queries)
 * is an example for using POST with an Analytics query.
 */
export async function getWithResourceId(
  context: Client,
  resourceId: string,
  query: string,
  options: QueryGetWithResourceIdOptionalParams = { requestOptions: {} },
): Promise<QueryResults> {
  const result = await _getWithResourceIdSend(
    context,
    resourceId,
    query,
    options,
  );
  return _getWithResourceIdDeserialize(result);
}

export function _executeSend(
  context: Client,
  workspaceId: string,
  body: QueryBody,
  options: QueryExecuteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/workspaces/{workspaceId}/query",
    {
      workspaceId: workspaceId,
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
        ...(options?.prefer !== undefined ? { Prefer: options?.prefer } : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: queryBodySerializer(body),
    });
}

export async function _executeDeserialize(
  result: PathUncheckedResponse,
): Promise<QueryResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return queryResultsDeserializer(result.body);
}

/**
 * Executes an Analytics query for data.
 * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/request-format)
 * is an example for using POST with an Analytics query.
 */
export async function execute(
  context: Client,
  workspaceId: string,
  body: QueryBody,
  options: QueryExecuteOptionalParams = { requestOptions: {} },
): Promise<QueryResults> {
  const result = await _executeSend(context, workspaceId, body, options);
  return _executeDeserialize(result);
}

export function _getSend(
  context: Client,
  workspaceId: string,
  query: string,
  options: QueryGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/workspaces/{workspaceId}/query{?query,timespan}",
    {
      workspaceId: workspaceId,
      query: query,
      timespan: options?.timespan,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<QueryResults> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return queryResultsDeserializer(result.body);
}

/** Executes an Analytics query for data. */
export async function get(
  context: Client,
  workspaceId: string,
  query: string,
  options: QueryGetOptionalParams = { requestOptions: {} },
): Promise<QueryResults> {
  const result = await _getSend(context, workspaceId, query, options);
  return _getDeserialize(result);
}
