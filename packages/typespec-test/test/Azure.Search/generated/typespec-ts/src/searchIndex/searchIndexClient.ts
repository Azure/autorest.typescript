// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSearchIndex,
  SearchIndexContext,
  SearchIndexClientOptionalParams,
} from "./api/index.js";
import {
  AzureSearchDocumentsIndexesSynonymMap,
  AzureSearchDocumentsIndexesListSynonymMapsResult,
  AzureSearchDocumentsIndexesSearchIndex,
  AzureSearchDocumentsIndexesGetIndexStatisticsResult,
  AzureSearchDocumentsIndexesAnalyzeTextOptions,
  AzureSearchDocumentsIndexesAnalyzeResult,
  AzureSearchDocumentsIndexesSearchAlias,
  AzureSearchDocumentsIndexesKnowledgeBase,
  AzureSearchDocumentsIndexesKnowledgeSourceUnion,
  AzureSearchDocumentsIndexesSearchServiceStatistics,
  AzureSearchDocumentsIndexesIndexStatisticsSummary,
} from "../models/azure/search/documents/indexes/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  listIndexStatsSummary,
  getServiceStatistics,
  createKnowledgeSource,
  listKnowledgeSources,
  getKnowledgeSource,
  deleteKnowledgeSource,
  createOrUpdateKnowledgeSource,
  createKnowledgeBase,
  listKnowledgeBases,
  getKnowledgeBase,
  deleteKnowledgeBase,
  createOrUpdateKnowledgeBase,
  createAlias,
  listAliases,
  getAlias,
  deleteAlias,
  createOrUpdateAlias,
  analyzeText,
  getIndexStatistics,
  createIndex,
  listIndexes,
  getIndex,
  deleteIndex,
  createOrUpdateIndex,
  createSynonymMap,
  getSynonymMaps,
  getSynonymMap,
  deleteSynonymMap,
  createOrUpdateSynonymMap,
} from "./api/operations.js";
import {
  ListIndexStatsSummaryOptionalParams,
  GetServiceStatisticsOptionalParams,
  CreateKnowledgeSourceOptionalParams,
  ListKnowledgeSourcesOptionalParams,
  GetKnowledgeSourceOptionalParams,
  DeleteKnowledgeSourceOptionalParams,
  CreateOrUpdateKnowledgeSourceOptionalParams,
  CreateKnowledgeBaseOptionalParams,
  ListKnowledgeBasesOptionalParams,
  GetKnowledgeBaseOptionalParams,
  DeleteKnowledgeBaseOptionalParams,
  CreateOrUpdateKnowledgeBaseOptionalParams,
  CreateAliasOptionalParams,
  ListAliasesOptionalParams,
  GetAliasOptionalParams,
  DeleteAliasOptionalParams,
  CreateOrUpdateAliasOptionalParams,
  AnalyzeTextOptionalParams,
  GetIndexStatisticsOptionalParams,
  CreateIndexOptionalParams,
  ListIndexesOptionalParams,
  GetIndexOptionalParams,
  DeleteIndexOptionalParams,
  CreateOrUpdateIndexOptionalParams,
  CreateSynonymMapOptionalParams,
  GetSynonymMapsOptionalParams,
  GetSynonymMapOptionalParams,
  DeleteSynonymMapOptionalParams,
  CreateOrUpdateSynonymMapOptionalParams,
} from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { SearchIndexClientOptionalParams } from "./api/searchIndexContext.js";

export class SearchIndexClient {
  private _client: SearchIndexContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: SearchIndexClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSearchIndex(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Retrieves a summary of statistics for all indexes in the search service. */
  listIndexStatsSummary(
    options: ListIndexStatsSummaryOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AzureSearchDocumentsIndexesIndexStatisticsSummary> {
    return listIndexStatsSummary(this._client, options);
  }

  /** Gets service level statistics for a search service. */
  getServiceStatistics(
    options: GetServiceStatisticsOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchServiceStatistics> {
    return getServiceStatistics(this._client, options);
  }

  /** Creates a new knowledge source. */
  createKnowledgeSource(
    knowledgeSource: AzureSearchDocumentsIndexesKnowledgeSourceUnion,
    options: CreateKnowledgeSourceOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeSourceUnion> {
    return createKnowledgeSource(this._client, knowledgeSource, options);
  }

  /** Lists all knowledge sources available for a search service. */
  listKnowledgeSources(
    options: ListKnowledgeSourcesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AzureSearchDocumentsIndexesKnowledgeSourceUnion> {
    return listKnowledgeSources(this._client, options);
  }

  /** Retrieves a knowledge source definition. */
  getKnowledgeSource(
    sourceName: string,
    options: GetKnowledgeSourceOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeSourceUnion> {
    return getKnowledgeSource(this._client, sourceName, options);
  }

  /** Deletes an existing knowledge source. */
  deleteKnowledgeSource(
    sourceName: string,
    options: DeleteKnowledgeSourceOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteKnowledgeSource(this._client, sourceName, options);
  }

  /** Creates a new knowledge source or updates an knowledge source if it already exists. */
  createOrUpdateKnowledgeSource(
    knowledgeSource: AzureSearchDocumentsIndexesKnowledgeSourceUnion,
    sourceName: string,
    options: CreateOrUpdateKnowledgeSourceOptionalParams = {
      requestOptions: {},
    },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeSourceUnion> {
    return createOrUpdateKnowledgeSource(
      this._client,
      knowledgeSource,
      sourceName,
      options,
    );
  }

  /** Creates a new knowledge base. */
  createKnowledgeBase(
    knowledgeBase: AzureSearchDocumentsIndexesKnowledgeBase,
    options: CreateKnowledgeBaseOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeBase> {
    return createKnowledgeBase(this._client, knowledgeBase, options);
  }

  /** Lists all knowledge bases available for a search service. */
  listKnowledgeBases(
    options: ListKnowledgeBasesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AzureSearchDocumentsIndexesKnowledgeBase> {
    return listKnowledgeBases(this._client, options);
  }

  /** Retrieves a knowledge base definition. */
  getKnowledgeBase(
    knowledgeBaseName: string,
    options: GetKnowledgeBaseOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeBase> {
    return getKnowledgeBase(this._client, knowledgeBaseName, options);
  }

  /** Deletes a knowledge base. */
  deleteKnowledgeBase(
    knowledgeBaseName: string,
    options: DeleteKnowledgeBaseOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteKnowledgeBase(this._client, knowledgeBaseName, options);
  }

  /** Creates a new knowledge base or updates a knowledge base if it already exists. */
  createOrUpdateKnowledgeBase(
    knowledgeBase: AzureSearchDocumentsIndexesKnowledgeBase,
    knowledgeBaseName: string,
    options: CreateOrUpdateKnowledgeBaseOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesKnowledgeBase> {
    return createOrUpdateKnowledgeBase(
      this._client,
      knowledgeBase,
      knowledgeBaseName,
      options,
    );
  }

  /** Creates a new search alias. */
  createAlias(
    alias: AzureSearchDocumentsIndexesSearchAlias,
    options: CreateAliasOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchAlias> {
    return createAlias(this._client, alias, options);
  }

  /** Lists all aliases available for a search service. */
  listAliases(
    options: ListAliasesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AzureSearchDocumentsIndexesSearchAlias> {
    return listAliases(this._client, options);
  }

  /** Retrieves an alias definition. */
  getAlias(
    aliasName: string,
    options: GetAliasOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchAlias> {
    return getAlias(this._client, aliasName, options);
  }

  /** Deletes a search alias and its associated mapping to an index. This operation is permanent, with no recovery option. The mapped index is untouched by this operation. */
  deleteAlias(
    aliasName: string,
    options: DeleteAliasOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteAlias(this._client, aliasName, options);
  }

  /** Creates a new search alias or updates an alias if it already exists. */
  createOrUpdateAlias(
    alias: AzureSearchDocumentsIndexesSearchAlias,
    aliasName: string,
    options: CreateOrUpdateAliasOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchAlias> {
    return createOrUpdateAlias(this._client, alias, aliasName, options);
  }

  /** Shows how an analyzer breaks text into tokens. */
  analyzeText(
    request: AzureSearchDocumentsIndexesAnalyzeTextOptions,
    indexName: string,
    options: AnalyzeTextOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesAnalyzeResult> {
    return analyzeText(this._client, request, indexName, options);
  }

  /** Returns statistics for the given index, including a document count and storage usage. */
  getIndexStatistics(
    indexName: string,
    options: GetIndexStatisticsOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesGetIndexStatisticsResult> {
    return getIndexStatistics(this._client, indexName, options);
  }

  /** Creates a new search index. */
  createIndex(
    index: AzureSearchDocumentsIndexesSearchIndex,
    options: CreateIndexOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchIndex> {
    return createIndex(this._client, index, options);
  }

  /** Lists all indexes available for a search service. */
  listIndexes(
    options: ListIndexesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<AzureSearchDocumentsIndexesSearchIndex> {
    return listIndexes(this._client, options);
  }

  /** Retrieves an index definition. */
  getIndex(
    indexName: string,
    options: GetIndexOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchIndex> {
    return getIndex(this._client, indexName, options);
  }

  /** Deletes a search index and all the documents it contains. This operation is permanent, with no recovery option. Make sure you have a master copy of your index definition, data ingestion code, and a backup of the primary data source in case you need to re-build the index. */
  deleteIndex(
    indexName: string,
    options: DeleteIndexOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteIndex(this._client, indexName, options);
  }

  /** Creates a new search index or updates an index if it already exists. */
  createOrUpdateIndex(
    index: AzureSearchDocumentsIndexesSearchIndex,
    indexName: string,
    options: CreateOrUpdateIndexOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSearchIndex> {
    return createOrUpdateIndex(this._client, index, indexName, options);
  }

  /** Creates a new synonym map. */
  createSynonymMap(
    synonymMap: AzureSearchDocumentsIndexesSynonymMap,
    options: CreateSynonymMapOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSynonymMap> {
    return createSynonymMap(this._client, synonymMap, options);
  }

  /** Lists all synonym maps available for a search service. */
  getSynonymMaps(
    options: GetSynonymMapsOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesListSynonymMapsResult> {
    return getSynonymMaps(this._client, options);
  }

  /** Retrieves a synonym map definition. */
  getSynonymMap(
    synonymMapName: string,
    options: GetSynonymMapOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSynonymMap> {
    return getSynonymMap(this._client, synonymMapName, options);
  }

  /** Deletes a synonym map. */
  deleteSynonymMap(
    synonymMapName: string,
    options: DeleteSynonymMapOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteSynonymMap(this._client, synonymMapName, options);
  }

  /** Creates a new synonym map or updates a synonym map if it already exists. */
  createOrUpdateSynonymMap(
    synonymMap: AzureSearchDocumentsIndexesSynonymMap,
    synonymMapName: string,
    options: CreateOrUpdateSynonymMapOptionalParams = { requestOptions: {} },
  ): Promise<AzureSearchDocumentsIndexesSynonymMap> {
    return createOrUpdateSynonymMap(
      this._client,
      synonymMap,
      synonymMapName,
      options,
    );
  }
}
