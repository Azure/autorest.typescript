// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import {
  SearchIndex,
  GetIndexStatisticsResult,
  AnalyzeRequest,
  AnalyzeResult,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  IndexesAnalyzeOptionalParams,
  IndexesGetStatisticsOptionalParams,
  IndexesCreateOptionalParams,
  IndexesListOptionalParams,
  IndexesGetOptionalParams,
  IndexesDeleteOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
} from "../../api/indexes/options.js";
import {
  analyze,
  getStatistics,
  create,
  list,
  get,
  $delete,
  createOrUpdate,
} from "../../api/indexes/operations.js";
import { PagedAsyncIterableIterator } from "../../../static-helpers/pagingHelpers.js";

/** Interface representing a Indexes operations. */
export interface IndexesOperations {
  /** Shows how an analyzer breaks text into tokens. */
  analyze: (
    request: AnalyzeRequest,
    indexName: string,
    options?: IndexesAnalyzeOptionalParams,
  ) => Promise<AnalyzeResult>;
  /**
   * Returns statistics for the given index, including a document count and storage
   * usage.
   */
  getStatistics: (
    indexName: string,
    options?: IndexesGetStatisticsOptionalParams,
  ) => Promise<GetIndexStatisticsResult>;
  /** Creates a new search index. */
  create: (
    index: SearchIndex,
    options?: IndexesCreateOptionalParams,
  ) => Promise<SearchIndex>;
  /** Lists all indexes available for a search service. */
  list: (
    options?: IndexesListOptionalParams,
  ) => PagedAsyncIterableIterator<SearchIndex>;
  /** Retrieves an index definition. */
  get: (
    indexName: string,
    options?: IndexesGetOptionalParams,
  ) => Promise<SearchIndex>;
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
  delete: (
    indexName: string,
    options?: IndexesDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new search index or updates an index if it already exists. */
  createOrUpdate: (
    index: SearchIndex,
    indexName: string,
    options?: IndexesCreateOrUpdateOptionalParams,
  ) => Promise<SearchIndex>;
}

function _getIndexes(context: SearchServiceContext) {
  return {
    analyze: (
      request: AnalyzeRequest,
      indexName: string,
      options?: IndexesAnalyzeOptionalParams,
    ) => analyze(context, request, indexName, options),
    getStatistics: (
      indexName: string,
      options?: IndexesGetStatisticsOptionalParams,
    ) => getStatistics(context, indexName, options),
    create: (index: SearchIndex, options?: IndexesCreateOptionalParams) =>
      create(context, index, options),
    list: (options?: IndexesListOptionalParams) => list(context, options),
    get: (indexName: string, options?: IndexesGetOptionalParams) =>
      get(context, indexName, options),
    delete: (indexName: string, options?: IndexesDeleteOptionalParams) =>
      $delete(context, indexName, options),
    createOrUpdate: (
      index: SearchIndex,
      indexName: string,
      options?: IndexesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, index, indexName, options),
  };
}

export function _getIndexesOperations(
  context: SearchServiceContext,
): IndexesOperations {
  return {
    ..._getIndexes(context),
  };
}
