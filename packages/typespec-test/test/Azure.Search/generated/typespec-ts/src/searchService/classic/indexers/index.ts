// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import {
  SearchIndexer,
  ListIndexersResult,
  SearchIndexerStatus,
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
} from "../../api/indexers/options.js";
import {
  getStatus,
  create,
  list,
  get,
  $delete,
  createOrUpdate,
  run,
  resetDocs,
  reset,
} from "../../api/indexers/operations.js";

/** Interface representing a Indexers operations. */
export interface IndexersOperations {
  /** Returns the current status and execution history of an indexer. */
  getStatus: (
    indexerName: string,
    options?: IndexersGetStatusOptionalParams,
  ) => Promise<SearchIndexerStatus>;
  /** Creates a new indexer. */
  create: (
    indexer: SearchIndexer,
    options?: IndexersCreateOptionalParams,
  ) => Promise<SearchIndexer>;
  /** Lists all indexers available for a search service. */
  list: (options?: IndexersListOptionalParams) => Promise<ListIndexersResult>;
  /** Retrieves an indexer definition. */
  get: (
    indexerName: string,
    options?: IndexersGetOptionalParams,
  ) => Promise<SearchIndexer>;
  /** Deletes an indexer. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    indexerName: string,
    options?: IndexersDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new indexer or updates an indexer if it already exists. */
  createOrUpdate: (
    indexer: SearchIndexer,
    indexerName: string,
    options?: IndexersCreateOrUpdateOptionalParams,
  ) => Promise<SearchIndexer>;
  /** Runs an indexer on-demand. */
  run: (
    indexerName: string,
    options?: IndexersRunOptionalParams,
  ) => Promise<void>;
  /**
   * Resets specific documents in the datasource to be selectively re-ingested by
   * the indexer.
   */
  resetDocs: (
    indexerName: string,
    options?: IndexersResetDocsOptionalParams,
  ) => Promise<void>;
  /** Resets the change tracking state associated with an indexer. */
  reset: (
    indexerName: string,
    options?: IndexersResetOptionalParams,
  ) => Promise<void>;
}

function _getIndexers(context: SearchServiceContext) {
  return {
    getStatus: (
      indexerName: string,
      options?: IndexersGetStatusOptionalParams,
    ) => getStatus(context, indexerName, options),
    create: (indexer: SearchIndexer, options?: IndexersCreateOptionalParams) =>
      create(context, indexer, options),
    list: (options?: IndexersListOptionalParams) => list(context, options),
    get: (indexerName: string, options?: IndexersGetOptionalParams) =>
      get(context, indexerName, options),
    delete: (indexerName: string, options?: IndexersDeleteOptionalParams) =>
      $delete(context, indexerName, options),
    createOrUpdate: (
      indexer: SearchIndexer,
      indexerName: string,
      options?: IndexersCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, indexer, indexerName, options),
    run: (indexerName: string, options?: IndexersRunOptionalParams) =>
      run(context, indexerName, options),
    resetDocs: (
      indexerName: string,
      options?: IndexersResetDocsOptionalParams,
    ) => resetDocs(context, indexerName, options),
    reset: (indexerName: string, options?: IndexersResetOptionalParams) =>
      reset(context, indexerName, options),
  };
}

export function _getIndexersOperations(
  context: SearchServiceContext,
): IndexersOperations {
  return {
    ..._getIndexers(context),
  };
}
