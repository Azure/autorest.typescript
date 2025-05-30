/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Metric,
  DatabasesListMetricsOptionalParams,
  MetricDefinition,
  DatabasesListMetricDefinitionsOptionalParams,
  Database,
  DatabasesListByServerOptionalParams,
  DatabasesListByElasticPoolOptionalParams,
  DatabasesListInaccessibleByServerOptionalParams,
  DatabasesGetOptionalParams,
  DatabasesGetResponse,
  DatabasesCreateOrUpdateOptionalParams,
  DatabasesCreateOrUpdateResponse,
  DatabasesDeleteOptionalParams,
  DatabaseUpdate,
  DatabasesUpdateOptionalParams,
  DatabasesUpdateResponse,
  DatabasesFailoverOptionalParams,
  DatabasesPauseOptionalParams,
  DatabasesPauseResponse,
  DatabasesResumeOptionalParams,
  DatabasesResumeResponse,
  DatabasesUpgradeDataWarehouseOptionalParams,
  ResourceMoveDefinition,
  DatabasesRenameOptionalParams,
  ImportExistingDatabaseDefinition,
  DatabasesImportOptionalParams,
  DatabasesImportResponse,
  ExportDatabaseDefinition,
  DatabasesExportOptionalParams,
  DatabasesExportResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Databases. */
export interface Databases {
  /**
   * Returns database metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    filter: string,
    options?: DatabasesListMetricsOptionalParams,
  ): PagedAsyncIterableIterator<Metric>;
  /**
   * Returns database metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesListMetricDefinitionsOptionalParams,
  ): PagedAsyncIterableIterator<MetricDefinition>;
  /**
   * Gets a list of databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: DatabasesListByServerOptionalParams,
  ): PagedAsyncIterableIterator<Database>;
  /**
   * Gets a list of databases in an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  listByElasticPool(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: DatabasesListByElasticPoolOptionalParams,
  ): PagedAsyncIterableIterator<Database>;
  /**
   * Gets a list of inaccessible databases in a logical server
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listInaccessibleByServer(
    resourceGroupName: string,
    serverName: string,
    options?: DatabasesListInaccessibleByServerOptionalParams,
  ): PagedAsyncIterableIterator<Database>;
  /**
   * Gets a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesGetOptionalParams,
  ): Promise<DatabasesGetResponse>;
  /**
   * Creates a new database or updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: Database,
    options?: DatabasesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesCreateOrUpdateResponse>,
      DatabasesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new database or updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: Database,
    options?: DatabasesCreateOrUpdateOptionalParams,
  ): Promise<DatabasesCreateOrUpdateResponse>;
  /**
   * Deletes the database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: DatabaseUpdate,
    options?: DatabasesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesUpdateResponse>,
      DatabasesUpdateResponse
    >
  >;
  /**
   * Updates an existing database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The requested database resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: DatabaseUpdate,
    options?: DatabasesUpdateOptionalParams,
  ): Promise<DatabasesUpdateResponse>;
  /**
   * Failovers a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to failover.
   * @param options The options parameters.
   */
  beginFailover(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesFailoverOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Failovers a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to failover.
   * @param options The options parameters.
   */
  beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesFailoverOptionalParams,
  ): Promise<void>;
  /**
   * Pauses a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be paused.
   * @param options The options parameters.
   */
  beginPause(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesPauseOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesPauseResponse>,
      DatabasesPauseResponse
    >
  >;
  /**
   * Pauses a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be paused.
   * @param options The options parameters.
   */
  beginPauseAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesPauseOptionalParams,
  ): Promise<DatabasesPauseResponse>;
  /**
   * Resumes a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be resumed.
   * @param options The options parameters.
   */
  beginResume(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesResumeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesResumeResponse>,
      DatabasesResumeResponse
    >
  >;
  /**
   * Resumes a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be resumed.
   * @param options The options parameters.
   */
  beginResumeAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesResumeOptionalParams,
  ): Promise<DatabasesResumeResponse>;
  /**
   * Upgrades a data warehouse.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be upgraded.
   * @param options The options parameters.
   */
  beginUpgradeDataWarehouse(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesUpgradeDataWarehouseOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Upgrades a data warehouse.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to be upgraded.
   * @param options The options parameters.
   */
  beginUpgradeDataWarehouseAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabasesUpgradeDataWarehouseOptionalParams,
  ): Promise<void>;
  /**
   * Renames a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to rename.
   * @param parameters The resource move definition for renaming this database.
   * @param options The options parameters.
   */
  rename(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ResourceMoveDefinition,
    options?: DatabasesRenameOptionalParams,
  ): Promise<void>;
  /**
   * Imports a bacpac into a new database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database import request parameters.
   * @param options The options parameters.
   */
  beginImport(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ImportExistingDatabaseDefinition,
    options?: DatabasesImportOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesImportResponse>,
      DatabasesImportResponse
    >
  >;
  /**
   * Imports a bacpac into a new database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database import request parameters.
   * @param options The options parameters.
   */
  beginImportAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ImportExistingDatabaseDefinition,
    options?: DatabasesImportOptionalParams,
  ): Promise<DatabasesImportResponse>;
  /**
   * Exports a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database export request parameters.
   * @param options The options parameters.
   */
  beginExport(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ExportDatabaseDefinition,
    options?: DatabasesExportOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesExportResponse>,
      DatabasesExportResponse
    >
  >;
  /**
   * Exports a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database export request parameters.
   * @param options The options parameters.
   */
  beginExportAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ExportDatabaseDefinition,
    options?: DatabasesExportOptionalParams,
  ): Promise<DatabasesExportResponse>;
}
