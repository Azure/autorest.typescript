// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorQueryLogsContext } from "../../api/monitorQueryLogsContext.js";
import {
  batch,
  executeWithResourceId,
  getWithResourceId,
  execute,
  get,
} from "../../api/query/operations.js";
import {
  QueryBatchOptionalParams,
  QueryExecuteWithResourceIdOptionalParams,
  QueryGetWithResourceIdOptionalParams,
  QueryExecuteOptionalParams,
  QueryGetOptionalParams,
} from "../../api/query/options.js";
import {
  QueryResults,
  QueryBody,
  BatchRequest,
  BatchResponse,
} from "../../models/models.js";

/** Interface representing a Query operations. */
export interface QueryOperations {
  /**
   * Executes a batch of Analytics queries for data.
   * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/batch-queries)
   * is an example for using POST with an Analytics query.
   */
  batch: (
    body: BatchRequest,
    options?: QueryBatchOptionalParams,
  ) => Promise<BatchResponse>;
  /**
   * Executes an Analytics query for data in the context of a resource.
   * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/azure-resource-queries)
   * is an example for using POST with an Analytics query.
   */
  executeWithResourceId: (
    resourceId: string,
    body: QueryBody,
    options?: QueryExecuteWithResourceIdOptionalParams,
  ) => Promise<QueryResults>;
  /**
   * Executes an Analytics query for data in the context of a resource.
   * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/azure-resource-queries)
   * is an example for using POST with an Analytics query.
   */
  getWithResourceId: (
    resourceId: string,
    query: string,
    options?: QueryGetWithResourceIdOptionalParams,
  ) => Promise<QueryResults>;
  /**
   * Executes an Analytics query for data.
   * [Here](https://learn.microsoft.com/azure/azure-monitor/logs/api/request-format)
   * is an example for using POST with an Analytics query.
   */
  execute: (
    workspaceId: string,
    body: QueryBody,
    options?: QueryExecuteOptionalParams,
  ) => Promise<QueryResults>;
  /** Executes an Analytics query for data. */
  get: (
    workspaceId: string,
    query: string,
    options?: QueryGetOptionalParams,
  ) => Promise<QueryResults>;
}

function _getQuery(context: MonitorQueryLogsContext) {
  return {
    batch: (body: BatchRequest, options?: QueryBatchOptionalParams) =>
      batch(context, body, options),
    executeWithResourceId: (
      resourceId: string,
      body: QueryBody,
      options?: QueryExecuteWithResourceIdOptionalParams,
    ) => executeWithResourceId(context, resourceId, body, options),
    getWithResourceId: (
      resourceId: string,
      query: string,
      options?: QueryGetWithResourceIdOptionalParams,
    ) => getWithResourceId(context, resourceId, query, options),
    execute: (
      workspaceId: string,
      body: QueryBody,
      options?: QueryExecuteOptionalParams,
    ) => execute(context, workspaceId, body, options),
    get: (
      workspaceId: string,
      query: string,
      options?: QueryGetOptionalParams,
    ) => get(context, workspaceId, query, options),
  };
}

export function _getQueryOperations(
  context: MonitorQueryLogsContext,
): QueryOperations {
  return {
    ..._getQuery(context),
  };
}
