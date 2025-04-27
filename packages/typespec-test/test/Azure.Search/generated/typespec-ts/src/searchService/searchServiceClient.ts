// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createSearchService,
  SearchServiceContext,
  SearchServiceClientOptionalParams,
} from "./api/index.js";
import {
  SearchServiceStatistics,
  IndexStatisticsSummary,
} from "../models/azure/search/documents/indexes/models.js";
import {
  GetIndexStatsSummaryOptionalParams,
  GetServiceStatisticsOptionalParams,
} from "./api/options.js";
import {
  getIndexStatsSummary,
  getServiceStatistics,
} from "./api/operations.js";
import {
  AliasesOperations,
  _getAliasesOperations,
} from "./classic/aliases/index.js";
import {
  IndexesOperations,
  _getIndexesOperations,
} from "./classic/indexes/index.js";
import {
  SynonymMapsOperations,
  _getSynonymMapsOperations,
} from "./classic/synonymMaps/index.js";
import {
  SkillsetsOperations,
  _getSkillsetsOperations,
} from "./classic/skillsets/index.js";
import {
  IndexersOperations,
  _getIndexersOperations,
} from "./classic/indexers/index.js";
import {
  DataSourcesOperations,
  _getDataSourcesOperations,
} from "./classic/dataSources/index.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { SearchServiceClientOptionalParams } from "./api/searchServiceContext.js";

export class SearchServiceClient {
  private _client: SearchServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: SearchServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createSearchService(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.aliases = _getAliasesOperations(this._client);
    this.indexes = _getIndexesOperations(this._client);
    this.synonymMaps = _getSynonymMapsOperations(this._client);
    this.skillsets = _getSkillsetsOperations(this._client);
    this.indexers = _getIndexersOperations(this._client);
    this.dataSources = _getDataSourcesOperations(this._client);
  }

  /** The operation groups for aliases */
  public readonly aliases: AliasesOperations;
  /** The operation groups for indexes */
  public readonly indexes: IndexesOperations;
  /** The operation groups for synonymMaps */
  public readonly synonymMaps: SynonymMapsOperations;
  /** The operation groups for skillsets */
  public readonly skillsets: SkillsetsOperations;
  /** The operation groups for indexers */
  public readonly indexers: IndexersOperations;
  /** The operation groups for dataSources */
  public readonly dataSources: DataSourcesOperations;

  /** Retrieves a summary of statistics for all indexes in the search service. */
  getIndexStatsSummary(
    options: GetIndexStatsSummaryOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<IndexStatisticsSummary> {
    return getIndexStatsSummary(this._client, options);
  }

  /** Gets service level statistics for a search service. */
  getServiceStatistics(
    options: GetServiceStatisticsOptionalParams = { requestOptions: {} },
  ): Promise<SearchServiceStatistics> {
    return getServiceStatistics(this._client, options);
  }
}
