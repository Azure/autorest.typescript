// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import {
  SearchIndexerDataSource,
  ListDataSourcesResult,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  DataSourcesCreateOptionalParams,
  DataSourcesListOptionalParams,
  DataSourcesGetOptionalParams,
  DataSourcesDeleteOptionalParams,
  DataSourcesCreateOrUpdateOptionalParams,
} from "../../api/dataSources/options.js";
import {
  create,
  list,
  get,
  $delete,
  createOrUpdate,
} from "../../api/dataSources/operations.js";

/** Interface representing a DataSources operations. */
export interface DataSourcesOperations {
  /** Creates a new datasource. */
  create: (
    dataSource: SearchIndexerDataSource,
    options?: DataSourcesCreateOptionalParams,
  ) => Promise<SearchIndexerDataSource>;
  /** Lists all datasources available for a search service. */
  list: (
    options?: DataSourcesListOptionalParams,
  ) => Promise<ListDataSourcesResult>;
  /** Retrieves a datasource definition. */
  get: (
    dataSourceName: string,
    options?: DataSourcesGetOptionalParams,
  ) => Promise<SearchIndexerDataSource>;
  /** Deletes a datasource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    dataSourceName: string,
    options?: DataSourcesDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new datasource or updates a datasource if it already exists. */
  createOrUpdate: (
    dataSource: SearchIndexerDataSource,
    dataSourceName: string,
    options?: DataSourcesCreateOrUpdateOptionalParams,
  ) => Promise<SearchIndexerDataSource>;
}

function _getDataSources(context: SearchServiceContext) {
  return {
    create: (
      dataSource: SearchIndexerDataSource,
      options?: DataSourcesCreateOptionalParams,
    ) => create(context, dataSource, options),
    list: (options?: DataSourcesListOptionalParams) => list(context, options),
    get: (dataSourceName: string, options?: DataSourcesGetOptionalParams) =>
      get(context, dataSourceName, options),
    delete: (
      dataSourceName: string,
      options?: DataSourcesDeleteOptionalParams,
    ) => $delete(context, dataSourceName, options),
    createOrUpdate: (
      dataSource: SearchIndexerDataSource,
      dataSourceName: string,
      options?: DataSourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, dataSource, dataSourceName, options),
  };
}

export function _getDataSourcesOperations(
  context: SearchServiceContext,
): DataSourcesOperations {
  return {
    ..._getDataSources(context),
  };
}
