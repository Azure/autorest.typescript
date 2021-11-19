import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
export declare interface ARMProxyResource {
    /**
     * The unique resource identifier of the database account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the database account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of Azure resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** The core properties of ARM resources. */
export declare interface ARMResourceProperties {
    /**
     * The unique resource identifier of the ARM resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the ARM resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of Azure resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The location of the resource group to which the resource belongs. */
    location?: string;
    /** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Cosmos DB resource auto-upgrade policy */
export declare interface AutoUpgradePolicyResource {
    /** Represents throughput policy which service must adhere to for auto-upgrade */
    throughputPolicy?: ThroughputPolicyResource;
}

/** Cosmos DB capability object */
export declare interface Capability {
    /** Name of the Cosmos DB capability. For example, "name": "EnableCassandra". Current values also include "EnableTable" and "EnableGremlin". */
    name?: string;
}

/** Parameters to create and update Cosmos DB Cassandra keyspace. */
export declare type CassandraKeyspaceCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a Cassandra keyspace */
    resource: CassandraKeyspaceResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type CassandraKeyspaceGetPropertiesOptions = OptionsResource & {};

export declare type CassandraKeyspaceGetPropertiesResource = CassandraKeyspaceResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB Cassandra keyspace. */
export declare type CassandraKeyspaceGetResults = ARMResourceProperties & {
    resource?: CassandraKeyspaceGetPropertiesResource;
    options?: CassandraKeyspaceGetPropertiesOptions;
};

/** The List operation response, that contains the Cassandra keyspaces and their properties. */
export declare interface CassandraKeyspaceListResult {
    /**
     * List of Cassandra keyspaces and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: CassandraKeyspaceGetResults[];
}

/** Cosmos DB Cassandra keyspace resource object */
export declare interface CassandraKeyspaceResource {
    /** Name of the Cosmos DB Cassandra keyspace */
    id: string;
}

/** Cosmos DB Cassandra table partition key */
export declare interface CassandraPartitionKey {
    /** Name of the Cosmos DB Cassandra table partition key */
    name?: string;
}

/** Interface representing a CassandraResources. */
export declare interface CassandraResources {
    /**
     * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listCassandraKeyspaces(resourceGroupName: string, accountName: string, options?: CassandraResourcesListCassandraKeyspacesOptionalParams): PagedAsyncIterableIterator<CassandraKeyspaceGetResults>;
    /**
     * Lists the Cassandra table under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param options The options parameters.
     */
    listCassandraTables(resourceGroupName: string, accountName: string, keyspaceName: string, options?: CassandraResourcesListCassandraTablesOptionalParams): PagedAsyncIterableIterator<CassandraTableGetResults>;
    /**
     * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided
     * name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param options The options parameters.
     */
    getCassandraKeyspace(resourceGroupName: string, accountName: string, keyspaceName: string, options?: CassandraResourcesGetCassandraKeyspaceOptionalParams): Promise<CassandraResourcesGetCassandraKeyspaceResponse>;
    /**
     * Create or update an Azure Cosmos DB Cassandra keyspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
     *                                                keyspace.
     * @param options The options parameters.
     */
    beginCreateUpdateCassandraKeyspace(resourceGroupName: string, accountName: string, keyspaceName: string, createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters, options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams): Promise<PollerLike<PollOperationState<CassandraResourcesCreateUpdateCassandraKeyspaceResponse>, CassandraResourcesCreateUpdateCassandraKeyspaceResponse>>;
    /**
     * Create or update an Azure Cosmos DB Cassandra keyspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
     *                                                keyspace.
     * @param options The options parameters.
     */
    beginCreateUpdateCassandraKeyspaceAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters, options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams): Promise<CassandraResourcesCreateUpdateCassandraKeyspaceResponse>;
    /**
     * Deletes an existing Azure Cosmos DB Cassandra keyspace.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param options The options parameters.
     */
    beginDeleteCassandraKeyspace(resourceGroupName: string, accountName: string, keyspaceName: string, options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB Cassandra keyspace.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param options The options parameters.
     */
    beginDeleteCassandraKeyspaceAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account
     * with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param options The options parameters.
     */
    getCassandraKeyspaceThroughput(resourceGroupName: string, accountName: string, keyspaceName: string, options?: CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams): Promise<CassandraResourcesGetCassandraKeyspaceThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Cassandra Keyspace.
     * @param options The options parameters.
     */
    beginUpdateCassandraKeyspaceThroughput(resourceGroupName: string, accountName: string, keyspaceName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams): Promise<PollerLike<PollOperationState<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse>, CassandraResourcesUpdateCassandraKeyspaceThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Cassandra Keyspace.
     * @param options The options parameters.
     */
    beginUpdateCassandraKeyspaceThroughputAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams): Promise<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse>;
    /**
     * Gets the Cassandra table under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    getCassandraTable(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, options?: CassandraResourcesGetCassandraTableOptionalParams): Promise<CassandraResourcesGetCassandraTableResponse>;
    /**
     * Create or update an Azure Cosmos DB Cassandra Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
     *                                             Table.
     * @param options The options parameters.
     */
    beginCreateUpdateCassandraTable(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters, options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams): Promise<PollerLike<PollOperationState<CassandraResourcesCreateUpdateCassandraTableResponse>, CassandraResourcesCreateUpdateCassandraTableResponse>>;
    /**
     * Create or update an Azure Cosmos DB Cassandra Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
     *                                             Table.
     * @param options The options parameters.
     */
    beginCreateUpdateCassandraTableAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters, options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams): Promise<CassandraResourcesCreateUpdateCassandraTableResponse>;
    /**
     * Deletes an existing Azure Cosmos DB Cassandra table.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    beginDeleteCassandraTable(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, options?: CassandraResourcesDeleteCassandraTableOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB Cassandra table.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    beginDeleteCassandraTableAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, options?: CassandraResourcesDeleteCassandraTableOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account
     * with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    getCassandraTableThroughput(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, options?: CassandraResourcesGetCassandraTableThroughputOptionalParams): Promise<CassandraResourcesGetCassandraTableThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB Cassandra table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Cassandra table.
     * @param options The options parameters.
     */
    beginUpdateCassandraTableThroughput(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams): Promise<PollerLike<PollOperationState<CassandraResourcesUpdateCassandraTableThroughputResponse>, CassandraResourcesUpdateCassandraTableThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB Cassandra table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyspaceName Cosmos DB keyspace name.
     * @param tableName Cosmos DB table name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Cassandra table.
     * @param options The options parameters.
     */
    beginUpdateCassandraTableThroughputAndWait(resourceGroupName: string, accountName: string, keyspaceName: string, tableName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams): Promise<CassandraResourcesUpdateCassandraTableThroughputResponse>;
}

/** Optional parameters. */
export declare interface CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateCassandraKeyspace operation. */
export declare type CassandraResourcesCreateUpdateCassandraKeyspaceResponse = CassandraKeyspaceGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesCreateUpdateCassandraTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateCassandraTable operation. */
export declare type CassandraResourcesCreateUpdateCassandraTableResponse = CassandraTableGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesDeleteCassandraKeyspaceOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface CassandraResourcesDeleteCassandraTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface CassandraResourcesGetCassandraKeyspaceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCassandraKeyspace operation. */
export declare type CassandraResourcesGetCassandraKeyspaceResponse = CassandraKeyspaceGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCassandraKeyspaceThroughput operation. */
export declare type CassandraResourcesGetCassandraKeyspaceThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesGetCassandraTableOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCassandraTable operation. */
export declare type CassandraResourcesGetCassandraTableResponse = CassandraTableGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesGetCassandraTableThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getCassandraTableThroughput operation. */
export declare type CassandraResourcesGetCassandraTableThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesListCassandraKeyspacesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCassandraKeyspaces operation. */
export declare type CassandraResourcesListCassandraKeyspacesResponse = CassandraKeyspaceListResult;

/** Optional parameters. */
export declare interface CassandraResourcesListCassandraTablesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listCassandraTables operation. */
export declare type CassandraResourcesListCassandraTablesResponse = CassandraTableListResult;

/** Optional parameters. */
export declare interface CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateCassandraKeyspaceThroughput operation. */
export declare type CassandraResourcesUpdateCassandraKeyspaceThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface CassandraResourcesUpdateCassandraTableThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateCassandraTableThroughput operation. */
export declare type CassandraResourcesUpdateCassandraTableThroughputResponse = ThroughputSettingsGetResults;

/** Cosmos DB Cassandra table schema */
export declare interface CassandraSchema {
    /** List of Cassandra table columns. */
    columns?: Column[];
    /** List of partition key. */
    partitionKeys?: CassandraPartitionKey[];
    /** List of cluster key. */
    clusterKeys?: ClusterKey[];
}

/** Parameters to create and update Cosmos DB Cassandra table. */
export declare type CassandraTableCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a Cassandra table */
    resource: CassandraTableResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type CassandraTableGetPropertiesOptions = OptionsResource & {};

export declare type CassandraTableGetPropertiesResource = CassandraTableResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB Cassandra table. */
export declare type CassandraTableGetResults = ARMResourceProperties & {
    resource?: CassandraTableGetPropertiesResource;
    options?: CassandraTableGetPropertiesOptions;
};

/** The List operation response, that contains the Cassandra tables and their properties. */
export declare interface CassandraTableListResult {
    /**
     * List of Cassandra tables and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: CassandraTableGetResults[];
}

/** Cosmos DB Cassandra table resource object */
export declare interface CassandraTableResource {
    /** Name of the Cosmos DB Cassandra table */
    id: string;
    /** Time to live of the Cosmos DB Cassandra table */
    defaultTtl?: number;
    /** Schema of the Cosmos DB Cassandra table */
    schema?: CassandraSchema;
}

/** Cosmos DB Cassandra table cluster key */
export declare interface ClusterKey {
    /** Name of the Cosmos DB Cassandra table cluster key */
    name?: string;
    /** Order of the Cosmos DB Cassandra table cluster key, only support "Asc" and "Desc" */
    orderBy?: string;
}

/** Interface representing a Collection. */
export declare interface Collection {
    /**
     * Retrieves the metrics determined by the given filter for the given database account and collection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: CollectionListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
    /**
     * Retrieves the usages (most recent storage data) for the given collection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: CollectionListUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    /**
     * Retrieves metric definitions for the given collection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param options The options parameters.
     */
    listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: CollectionListMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<MetricDefinition>;
}

/** Optional parameters. */
export declare interface CollectionListMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetricDefinitions operation. */
export declare type CollectionListMetricDefinitionsResponse = MetricDefinitionsListResult;

/** Optional parameters. */
export declare interface CollectionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type CollectionListMetricsResponse = MetricListResult;

/** Optional parameters. */
export declare interface CollectionListUsagesOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type CollectionListUsagesResponse = UsagesResult;

/** Interface representing a CollectionPartition. */
export declare interface CollectionPartition {
    /**
     * Retrieves the metrics determined by the given filter for the given collection, split by partition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: CollectionPartitionListMetricsOptionalParams): PagedAsyncIterableIterator<PartitionMetric>;
    /**
     * Retrieves the usages (most recent storage data) for the given collection, split by partition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: CollectionPartitionListUsagesOptionalParams): PagedAsyncIterableIterator<PartitionUsage>;
}

/** Optional parameters. */
export declare interface CollectionPartitionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type CollectionPartitionListMetricsResponse = PartitionMetricListResult;

/** Optional parameters. */
export declare interface CollectionPartitionListUsagesOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type CollectionPartitionListUsagesResponse = PartitionUsagesResult;

/** Interface representing a CollectionPartitionRegion. */
export declare interface CollectionPartitionRegion {
    /**
     * Retrieves the metrics determined by the given filter for the given collection and region, split by
     * partition.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param region Cosmos DB region, with spaces between words and each word capitalized.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, options?: CollectionPartitionRegionListMetricsOptionalParams): PagedAsyncIterableIterator<PartitionMetric>;
}

/** Optional parameters. */
export declare interface CollectionPartitionRegionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type CollectionPartitionRegionListMetricsResponse = PartitionMetricListResult;

/** Interface representing a CollectionRegion. */
export declare interface CollectionRegion {
    /**
     * Retrieves the metrics determined by the given filter for the given database account, collection and
     * region.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param region Cosmos DB region, with spaces between words and each word capitalized.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, options?: CollectionRegionListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
}

/** Optional parameters. */
export declare interface CollectionRegionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type CollectionRegionListMetricsResponse = MetricListResult;

/** Cosmos DB Cassandra table column */
export declare interface Column {
    /** Name of the Cosmos DB Cassandra table column */
    name?: string;
    /** Type of the Cosmos DB Cassandra table column */
    type?: string;
}

export declare interface CompositePath {
    /** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
    path?: string;
    /** Sort order for composite paths. */
    order?: CompositePathSortOrder;
}

/**
 * Defines values for CompositePathSortOrder. \
 * {@link KnownCompositePathSortOrder} can be used interchangeably with CompositePathSortOrder,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Ascending** \
 * **Descending**
 */
export declare type CompositePathSortOrder = string;

/**
 * Defines values for ConflictResolutionMode. \
 * {@link KnownConflictResolutionMode} can be used interchangeably with ConflictResolutionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LastWriterWins** \
 * **Custom**
 */
export declare type ConflictResolutionMode = string;

/** The conflict resolution policy for the container. */
export declare interface ConflictResolutionPolicy {
    /** Indicates the conflict resolution mode. */
    mode?: ConflictResolutionMode;
    /** The conflict resolution path in the case of LastWriterWins mode. */
    conflictResolutionPath?: string;
    /** The procedure to resolve conflicts in the case of custom mode. */
    conflictResolutionProcedure?: string;
}

/**
 * Defines values for ConnectorOffer. \
 * {@link KnownConnectorOffer} can be used interchangeably with ConnectorOffer,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Small**
 */
export declare type ConnectorOffer = string;

/** The consistency policy for the Cosmos DB database account. */
export declare interface ConsistencyPolicy {
    /** The default consistency level and configuration settings of the Cosmos DB account. */
    defaultConsistencyLevel: DefaultConsistencyLevel;
    /** When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'. */
    maxStalenessPrefix?: number;
    /** When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to 'BoundedStaleness'. */
    maxIntervalInSeconds?: number;
}

/** The configuration of the partition key to be used for partitioning data into multiple partitions */
export declare interface ContainerPartitionKey {
    /** List of paths using which data within the container can be partitioned */
    paths?: string[];
    /** Indicates the kind of algorithm used for partitioning */
    kind?: PartitionKind;
    /** Indicates the version of the partition key definition */
    version?: number;
}

export declare class CosmosDBManagementClient extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the CosmosDBManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: CosmosDBManagementClientOptionalParams);
    databaseAccounts: DatabaseAccounts;
    operations: Operations;
    database: Database;
    collection: Collection;
    collectionRegion: CollectionRegion;
    databaseAccountRegion: DatabaseAccountRegion;
    percentileSourceTarget: PercentileSourceTarget;
    percentileTarget: PercentileTarget;
    percentile: Percentile;
    collectionPartitionRegion: CollectionPartitionRegion;
    collectionPartition: CollectionPartition;
    partitionKeyRangeId: PartitionKeyRangeId;
    partitionKeyRangeIdRegion: PartitionKeyRangeIdRegion;
    sqlResources: SqlResources;
    mongoDBResources: MongoDBResources;
    tableResources: TableResources;
    cassandraResources: CassandraResources;
    gremlinResources: GremlinResources;
    notebookWorkspaces: NotebookWorkspaces;
    privateLinkResources: PrivateLinkResources;
    privateEndpointConnections: PrivateEndpointConnections;
}

/** Optional parameters. */
export declare interface CosmosDBManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are "If-Match", "If-None-Match", "Session-Token" and "Throughput" */
export declare interface CreateUpdateOptions {
    /** Describes unknown properties. The value of an unknown property can be of "any" type. */
    [property: string]: any;
    /** Request Units per second. For example, "throughput": "10000". */
    throughput?: string;
}

/** Interface representing a Database. */
export declare interface Database {
    /**
     * Retrieves the metrics determined by the given filter for the given database account and database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, filter: string, options?: DatabaseListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
    /**
     * Retrieves the usages (most recent data) for the given database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, accountName: string, databaseRid: string, options?: DatabaseListUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    /**
     * Retrieves metric definitions for the given database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param options The options parameters.
     */
    listMetricDefinitions(resourceGroupName: string, accountName: string, databaseRid: string, options?: DatabaseListMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<MetricDefinition>;
}

/** Connection string for the Cosmos DB account */
export declare interface DatabaseAccountConnectionString {
    /**
     * Value of the connection string
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionString?: string;
    /**
     * Description of the connection string
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
}

/** Parameters to create and update Cosmos DB database accounts. */
export declare type DatabaseAccountCreateUpdateParameters = ARMResourceProperties & {
    /** Indicates the type of database account. This can only be set at database account creation. */
    kind?: DatabaseAccountKind;
    /** The consistency policy for the Cosmos DB account. */
    consistencyPolicy?: ConsistencyPolicy;
    /** An array that contains the georeplication locations enabled for the Cosmos DB account. */
    locations: Location_2[];
    /** The offer type for the database */
    databaseAccountOfferType: "Standard";
    /** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
    ipRangeFilter?: string;
    /** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
    isVirtualNetworkFilterEnabled?: boolean;
    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    enableAutomaticFailover?: boolean;
    /** List of Cosmos DB capabilities for the account */
    capabilities?: Capability[];
    /** List of Virtual Network ACL rules configured for the Cosmos DB account. */
    virtualNetworkRules?: VirtualNetworkRule[];
    /** Enables the account to write in multiple locations */
    enableMultipleWriteLocations?: boolean;
    /** Enables the cassandra connector on the Cosmos DB C* account */
    enableCassandraConnector?: boolean;
    /** The cassandra connector offer type for the Cosmos DB database C* account. */
    connectorOffer?: ConnectorOffer;
    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
    disableKeyBasedMetadataWriteAccess?: boolean;
    /** The URI of the key vault */
    keyVaultKeyUri?: string;
    /**
     * Whether requests from Public Network are allowed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicNetworkAccess?: PublicNetworkAccess;
};

/** An Azure Cosmos DB database account. */
export declare type DatabaseAccountGetResults = ARMResourceProperties & {
    /** Indicates the type of database account. This can only be set at database account creation. */
    kind?: DatabaseAccountKind;
    /**
     * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * The connection endpoint for the Cosmos DB database account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly documentEndpoint?: string;
    /**
     * The offer type for the Cosmos DB database account. Default value: Standard.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseAccountOfferType?: "Standard";
    /** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
    ipRangeFilter?: string;
    /** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
    isVirtualNetworkFilterEnabled?: boolean;
    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    enableAutomaticFailover?: boolean;
    /** The consistency policy for the Cosmos DB database account. */
    consistencyPolicy?: ConsistencyPolicy;
    /** List of Cosmos DB capabilities for the account */
    capabilities?: Capability[];
    /**
     * An array that contains the write location for the Cosmos DB account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly writeLocations?: Location_2[];
    /**
     * An array that contains of the read locations enabled for the Cosmos DB account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly readLocations?: Location_2[];
    /**
     * An array that contains all of the locations enabled for the Cosmos DB account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locations?: Location_2[];
    /**
     * An array that contains the regions ordered by their failover priorities.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverPolicies?: FailoverPolicy[];
    /** List of Virtual Network ACL rules configured for the Cosmos DB account. */
    virtualNetworkRules?: VirtualNetworkRule[];
    /**
     * List of Private Endpoint Connections configured for the Cosmos DB account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    /** Enables the account to write in multiple locations */
    enableMultipleWriteLocations?: boolean;
    /** Enables the cassandra connector on the Cosmos DB C* account */
    enableCassandraConnector?: boolean;
    /** The cassandra connector offer type for the Cosmos DB database C* account. */
    connectorOffer?: ConnectorOffer;
    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
    disableKeyBasedMetadataWriteAccess?: boolean;
    /** The URI of the key vault */
    keyVaultKeyUri?: string;
    /**
     * Whether requests from Public Network are allowed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicNetworkAccess?: PublicNetworkAccess;
};

/**
 * Defines values for DatabaseAccountKind. \
 * {@link KnownDatabaseAccountKind} can be used interchangeably with DatabaseAccountKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GlobalDocumentDB** \
 * **MongoDB** \
 * **Parse**
 */
export declare type DatabaseAccountKind = string;

/** The connection strings for the given database account. */
export declare interface DatabaseAccountListConnectionStringsResult {
    /** An array that contains the connection strings for the Cosmos DB account. */
    connectionStrings?: DatabaseAccountConnectionString[];
}

/** The access keys for the given database account. */
export declare type DatabaseAccountListKeysResult = DatabaseAccountListReadOnlyKeysResult & {
    /**
     * Base 64 encoded value of the primary read-write key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryMasterKey?: string;
    /**
     * Base 64 encoded value of the secondary read-write key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryMasterKey?: string;
};

/** The read-only access keys for the given database account. */
export declare interface DatabaseAccountListReadOnlyKeysResult {
    /**
     * Base 64 encoded value of the primary read-only key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryReadonlyMasterKey?: string;
    /**
     * Base 64 encoded value of the secondary read-only key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryReadonlyMasterKey?: string;
}

/** Parameters to regenerate the keys within the database account. */
export declare interface DatabaseAccountRegenerateKeyParameters {
    /** The access key to regenerate. */
    keyKind: KeyKind;
}

/** Interface representing a DatabaseAccountRegion. */
export declare interface DatabaseAccountRegion {
    /**
     * Retrieves the metrics determined by the given filter for the given database account and region.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param region Cosmos DB region, with spaces between words and each word capitalized.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, region: string, filter: string, options?: DatabaseAccountRegionListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
}

/** Optional parameters. */
export declare interface DatabaseAccountRegionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type DatabaseAccountRegionListMetricsResponse = MetricListResult;

/** Interface representing a DatabaseAccounts. */
export declare interface DatabaseAccounts {
    /**
     * Lists all the Azure Cosmos DB database accounts available under the subscription.
     * @param options The options parameters.
     */
    list(options?: DatabaseAccountsListOptionalParams): PagedAsyncIterableIterator<DatabaseAccountGetResults>;
    /**
     * Lists all the Azure Cosmos DB database accounts available under the given resource group.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DatabaseAccountsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DatabaseAccountGetResults>;
    /**
     * Retrieves the metrics determined by the given filter for the given database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, filter: string, options?: DatabaseAccountsListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
    /**
     * Retrieves the usages (most recent data) for the given database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listUsages(resourceGroupName: string, accountName: string, options?: DatabaseAccountsListUsagesOptionalParams): PagedAsyncIterableIterator<Usage>;
    /**
     * Retrieves metric definitions for the given database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listMetricDefinitions(resourceGroupName: string, accountName: string, options?: DatabaseAccountsListMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<MetricDefinition>;
    /**
     * Retrieves the properties of an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, options?: DatabaseAccountsGetOptionalParams): Promise<DatabaseAccountsGetResponse>;
    /**
     * Updates the properties of an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param updateParameters The parameters to provide for the current database account.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, accountName: string, updateParameters: DatabaseAccountUpdateParameters, options?: DatabaseAccountsUpdateOptionalParams): Promise<PollerLike<PollOperationState<DatabaseAccountsUpdateResponse>, DatabaseAccountsUpdateResponse>>;
    /**
     * Updates the properties of an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param updateParameters The parameters to provide for the current database account.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, accountName: string, updateParameters: DatabaseAccountUpdateParameters, options?: DatabaseAccountsUpdateOptionalParams): Promise<DatabaseAccountsUpdateResponse>;
    /**
     * Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when
     * performing updates on an account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param createUpdateParameters The parameters to provide for the current database account.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, accountName: string, createUpdateParameters: DatabaseAccountCreateUpdateParameters, options?: DatabaseAccountsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DatabaseAccountsCreateOrUpdateResponse>, DatabaseAccountsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when
     * performing updates on an account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param createUpdateParameters The parameters to provide for the current database account.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, accountName: string, createUpdateParameters: DatabaseAccountCreateUpdateParameters, options?: DatabaseAccountsCreateOrUpdateOptionalParams): Promise<DatabaseAccountsCreateOrUpdateResponse>;
    /**
     * Deletes an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, accountName: string, options?: DatabaseAccountsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, accountName: string, options?: DatabaseAccountsDeleteOptionalParams): Promise<void>;
    /**
     * Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0
     * indicates a write region. The maximum value for a failover priority = (total number of regions - 1).
     * Failover priority values must be unique for each of the regions in which the database account
     * exists.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param failoverParameters The new failover policies for the database account.
     * @param options The options parameters.
     */
    beginFailoverPriorityChange(resourceGroupName: string, accountName: string, failoverParameters: FailoverPolicies, options?: DatabaseAccountsFailoverPriorityChangeOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0
     * indicates a write region. The maximum value for a failover priority = (total number of regions - 1).
     * Failover priority values must be unique for each of the regions in which the database account
     * exists.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param failoverParameters The new failover policies for the database account.
     * @param options The options parameters.
     */
    beginFailoverPriorityChangeAndWait(resourceGroupName: string, accountName: string, failoverParameters: FailoverPolicies, options?: DatabaseAccountsFailoverPriorityChangeOptionalParams): Promise<void>;
    /**
     * Lists the access keys for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listKeys(resourceGroupName: string, accountName: string, options?: DatabaseAccountsListKeysOptionalParams): Promise<DatabaseAccountsListKeysResponse>;
    /**
     * Lists the connection strings for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listConnectionStrings(resourceGroupName: string, accountName: string, options?: DatabaseAccountsListConnectionStringsOptionalParams): Promise<DatabaseAccountsListConnectionStringsResponse>;
    /**
     * Offline the specified region for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param regionParameterForOffline Cosmos DB region to offline for the database account.
     * @param options The options parameters.
     */
    beginOfflineRegion(resourceGroupName: string, accountName: string, regionParameterForOffline: RegionForOnlineOffline, options?: DatabaseAccountsOfflineRegionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Offline the specified region for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param regionParameterForOffline Cosmos DB region to offline for the database account.
     * @param options The options parameters.
     */
    beginOfflineRegionAndWait(resourceGroupName: string, accountName: string, regionParameterForOffline: RegionForOnlineOffline, options?: DatabaseAccountsOfflineRegionOptionalParams): Promise<void>;
    /**
     * Online the specified region for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param regionParameterForOnline Cosmos DB region to online for the database account.
     * @param options The options parameters.
     */
    beginOnlineRegion(resourceGroupName: string, accountName: string, regionParameterForOnline: RegionForOnlineOffline, options?: DatabaseAccountsOnlineRegionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Online the specified region for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param regionParameterForOnline Cosmos DB region to online for the database account.
     * @param options The options parameters.
     */
    beginOnlineRegionAndWait(resourceGroupName: string, accountName: string, regionParameterForOnline: RegionForOnlineOffline, options?: DatabaseAccountsOnlineRegionOptionalParams): Promise<void>;
    /**
     * Lists the read-only access keys for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    getReadOnlyKeys(resourceGroupName: string, accountName: string, options?: DatabaseAccountsGetReadOnlyKeysOptionalParams): Promise<DatabaseAccountsGetReadOnlyKeysResponse>;
    /**
     * Lists the read-only access keys for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listReadOnlyKeys(resourceGroupName: string, accountName: string, options?: DatabaseAccountsListReadOnlyKeysOptionalParams): Promise<DatabaseAccountsListReadOnlyKeysResponse>;
    /**
     * Regenerates an access key for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyToRegenerate The name of the key to regenerate.
     * @param options The options parameters.
     */
    beginRegenerateKey(resourceGroupName: string, accountName: string, keyToRegenerate: DatabaseAccountRegenerateKeyParameters, options?: DatabaseAccountsRegenerateKeyOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Regenerates an access key for the specified Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param keyToRegenerate The name of the key to regenerate.
     * @param options The options parameters.
     */
    beginRegenerateKeyAndWait(resourceGroupName: string, accountName: string, keyToRegenerate: DatabaseAccountRegenerateKeyParameters, options?: DatabaseAccountsRegenerateKeyOptionalParams): Promise<void>;
    /**
     * Checks that the Azure Cosmos DB account name already exists. A valid account name may contain only
     * lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    checkNameExists(accountName: string, options?: DatabaseAccountsCheckNameExistsOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DatabaseAccountsCheckNameExistsOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseAccountsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabaseAccountsCreateOrUpdateResponse = DatabaseAccountGetResults;

/** Optional parameters. */
export declare interface DatabaseAccountsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseAccountsFailoverPriorityChangeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseAccountsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseAccountsGetReadOnlyKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getReadOnlyKeys operation. */
export declare type DatabaseAccountsGetReadOnlyKeysResponse = DatabaseAccountListReadOnlyKeysResult;

/** Contains response data for the get operation. */
export declare type DatabaseAccountsGetResponse = DatabaseAccountGetResults;

/** Optional parameters. */
export declare interface DatabaseAccountsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DatabaseAccountsListByResourceGroupResponse = DatabaseAccountsListResult;

/** Optional parameters. */
export declare interface DatabaseAccountsListConnectionStringsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnectionStrings operation. */
export declare type DatabaseAccountsListConnectionStringsResponse = DatabaseAccountListConnectionStringsResult;

/** Optional parameters. */
export declare interface DatabaseAccountsListKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listKeys operation. */
export declare type DatabaseAccountsListKeysResponse = DatabaseAccountListKeysResult;

/** Optional parameters. */
export declare interface DatabaseAccountsListMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetricDefinitions operation. */
export declare type DatabaseAccountsListMetricDefinitionsResponse = MetricDefinitionsListResult;

/** Optional parameters. */
export declare interface DatabaseAccountsListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type DatabaseAccountsListMetricsResponse = MetricListResult;

/** Optional parameters. */
export declare interface DatabaseAccountsListOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseAccountsListReadOnlyKeysOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listReadOnlyKeys operation. */
export declare type DatabaseAccountsListReadOnlyKeysResponse = DatabaseAccountListReadOnlyKeysResult;

/** Contains response data for the list operation. */
export declare type DatabaseAccountsListResponse = DatabaseAccountsListResult;

/** The List operation response, that contains the database accounts and their properties. */
export declare interface DatabaseAccountsListResult {
    /**
     * List of database account and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: DatabaseAccountGetResults[];
}

/** Optional parameters. */
export declare interface DatabaseAccountsListUsagesOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type DatabaseAccountsListUsagesResponse = UsagesResult;

/** Optional parameters. */
export declare interface DatabaseAccountsOfflineRegionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseAccountsOnlineRegionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseAccountsRegenerateKeyOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseAccountsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type DatabaseAccountsUpdateResponse = DatabaseAccountGetResults;

/** Parameters for patching Azure Cosmos DB database account properties. */
export declare interface DatabaseAccountUpdateParameters {
    /** Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB". */
    tags?: {
        [propertyName: string]: string;
    };
    /** The location of the resource group to which the resource belongs. */
    location?: string;
    /** The consistency policy for the Cosmos DB account. */
    consistencyPolicy?: ConsistencyPolicy;
    /** An array that contains the georeplication locations enabled for the Cosmos DB account. */
    locations?: Location_2[];
    /** Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. */
    ipRangeFilter?: string;
    /** Flag to indicate whether to enable/disable Virtual Network ACL rules. */
    isVirtualNetworkFilterEnabled?: boolean;
    /** Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. */
    enableAutomaticFailover?: boolean;
    /** List of Cosmos DB capabilities for the account */
    capabilities?: Capability[];
    /** List of Virtual Network ACL rules configured for the Cosmos DB account. */
    virtualNetworkRules?: VirtualNetworkRule[];
    /** Enables the account to write in multiple locations */
    enableMultipleWriteLocations?: boolean;
    /** Enables the cassandra connector on the Cosmos DB C* account */
    enableCassandraConnector?: boolean;
    /** The cassandra connector offer type for the Cosmos DB database C* account. */
    connectorOffer?: ConnectorOffer;
    /** Disable write operations on metadata resources (databases, containers, throughput) via account keys */
    disableKeyBasedMetadataWriteAccess?: boolean;
    /** The URI of the key vault */
    keyVaultKeyUri?: string;
    /**
     * Whether requests from Public Network are allowed
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicNetworkAccess?: PublicNetworkAccess;
}

/** Optional parameters. */
export declare interface DatabaseListMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetricDefinitions operation. */
export declare type DatabaseListMetricDefinitionsResponse = MetricDefinitionsListResult;

/** Optional parameters. */
export declare interface DatabaseListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type DatabaseListMetricsResponse = MetricListResult;

/** Optional parameters. */
export declare interface DatabaseListUsagesOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). */
    filter?: string;
}

/** Contains response data for the listUsages operation. */
export declare type DatabaseListUsagesResponse = UsagesResult;

/**
 * Defines values for DataType. \
 * {@link KnownDataType} can be used interchangeably with DataType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String** \
 * **Number** \
 * **Point** \
 * **Polygon** \
 * **LineString** \
 * **MultiPolygon**
 */
export declare type DataType = string;

/** Defines values for DefaultConsistencyLevel. */
export declare type DefaultConsistencyLevel = "Eventual" | "Session" | "BoundedStaleness" | "Strong" | "ConsistentPrefix";

/** Error Response. */
export declare interface ErrorResponse {
    /** Error code. */
    code?: string;
    /** Error message indicating why the operation failed. */
    message?: string;
}

export declare interface ExcludedPath {
    /** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
    path?: string;
}

/** The system generated resource properties associated with SQL databases, SQL containers, Gremlin databases and Gremlin graphs. */
export declare interface ExtendedResourceProperties {
    /**
     * A system generated property. A unique identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rid?: string;
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ts?: any;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
}

/** The list of new failover policies for the failover priority change. */
export declare interface FailoverPolicies {
    /** List of failover policies. */
    failoverPolicies: FailoverPolicy[];
}

/** The failover policy for a given region of a database account. */
export declare interface FailoverPolicy {
    /**
     * The unique identifier of the region in which the database account replicates to. Example: &lt;accountName&gt;-&lt;locationName&gt;.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** The name of the region in which the database account exists. */
    locationName?: string;
    /** The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. */
    failoverPriority?: number;
}

/** Parameters to create and update Cosmos DB Gremlin database. */
export declare type GremlinDatabaseCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a Gremlin database */
    resource: GremlinDatabaseResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type GremlinDatabaseGetPropertiesOptions = OptionsResource & {};

export declare type GremlinDatabaseGetPropertiesResource = GremlinDatabaseResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB Gremlin database. */
export declare type GremlinDatabaseGetResults = ARMResourceProperties & {
    resource?: GremlinDatabaseGetPropertiesResource;
    options?: GremlinDatabaseGetPropertiesOptions;
};

/** The List operation response, that contains the Gremlin databases and their properties. */
export declare interface GremlinDatabaseListResult {
    /**
     * List of Gremlin databases and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: GremlinDatabaseGetResults[];
}

/** Cosmos DB Gremlin database resource object */
export declare interface GremlinDatabaseResource {
    /** Name of the Cosmos DB Gremlin database */
    id: string;
}

/** Parameters to create and update Cosmos DB Gremlin graph. */
export declare type GremlinGraphCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a Gremlin graph */
    resource: GremlinGraphResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type GremlinGraphGetPropertiesOptions = OptionsResource & {};

export declare type GremlinGraphGetPropertiesResource = GremlinGraphResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB Gremlin graph. */
export declare type GremlinGraphGetResults = ARMResourceProperties & {
    resource?: GremlinGraphGetPropertiesResource;
    options?: GremlinGraphGetPropertiesOptions;
};

/** The List operation response, that contains the graphs and their properties. */
export declare interface GremlinGraphListResult {
    /**
     * List of graphs and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: GremlinGraphGetResults[];
}

/** Cosmos DB Gremlin graph resource object */
export declare interface GremlinGraphResource {
    /** Name of the Cosmos DB Gremlin graph */
    id: string;
    /** The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph */
    indexingPolicy?: IndexingPolicy;
    /** The configuration of the partition key to be used for partitioning data into multiple partitions */
    partitionKey?: ContainerPartitionKey;
    /** Default time to live */
    defaultTtl?: number;
    /** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
    uniqueKeyPolicy?: UniqueKeyPolicy;
    /** The conflict resolution policy for the graph. */
    conflictResolutionPolicy?: ConflictResolutionPolicy;
}

/** Interface representing a GremlinResources. */
export declare interface GremlinResources {
    /**
     * Lists the Gremlin databases under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listGremlinDatabases(resourceGroupName: string, accountName: string, options?: GremlinResourcesListGremlinDatabasesOptionalParams): PagedAsyncIterableIterator<GremlinDatabaseGetResults>;
    /**
     * Lists the Gremlin graph under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    listGremlinGraphs(resourceGroupName: string, accountName: string, databaseName: string, options?: GremlinResourcesListGremlinGraphsOptionalParams): PagedAsyncIterableIterator<GremlinGraphGetResults>;
    /**
     * Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided
     * name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getGremlinDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: GremlinResourcesGetGremlinDatabaseOptionalParams): Promise<GremlinResourcesGetGremlinDatabaseResponse>;
    /**
     * Create or update an Azure Cosmos DB Gremlin database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateGremlinDatabaseParameters The parameters to provide for the current Gremlin
     *                                              database.
     * @param options The options parameters.
     */
    beginCreateUpdateGremlinDatabase(resourceGroupName: string, accountName: string, databaseName: string, createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters, options?: GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams): Promise<PollerLike<PollOperationState<GremlinResourcesCreateUpdateGremlinDatabaseResponse>, GremlinResourcesCreateUpdateGremlinDatabaseResponse>>;
    /**
     * Create or update an Azure Cosmos DB Gremlin database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateGremlinDatabaseParameters The parameters to provide for the current Gremlin
     *                                              database.
     * @param options The options parameters.
     */
    beginCreateUpdateGremlinDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters, options?: GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams): Promise<GremlinResourcesCreateUpdateGremlinDatabaseResponse>;
    /**
     * Deletes an existing Azure Cosmos DB Gremlin database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteGremlinDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: GremlinResourcesDeleteGremlinDatabaseOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB Gremlin database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteGremlinDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, options?: GremlinResourcesDeleteGremlinDatabaseOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account
     * with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getGremlinDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, options?: GremlinResourcesGetGremlinDatabaseThroughputOptionalParams): Promise<GremlinResourcesGetGremlinDatabaseThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB Gremlin database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Gremlin database.
     * @param options The options parameters.
     */
    beginUpdateGremlinDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams): Promise<PollerLike<PollOperationState<GremlinResourcesUpdateGremlinDatabaseThroughputResponse>, GremlinResourcesUpdateGremlinDatabaseThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB Gremlin database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Gremlin database.
     * @param options The options parameters.
     */
    beginUpdateGremlinDatabaseThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams): Promise<GremlinResourcesUpdateGremlinDatabaseThroughputResponse>;
    /**
     * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param options The options parameters.
     */
    getGremlinGraph(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, options?: GremlinResourcesGetGremlinGraphOptionalParams): Promise<GremlinResourcesGetGremlinGraphResponse>;
    /**
     * Create or update an Azure Cosmos DB Gremlin graph
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param createUpdateGremlinGraphParameters The parameters to provide for the current Gremlin graph.
     * @param options The options parameters.
     */
    beginCreateUpdateGremlinGraph(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters, options?: GremlinResourcesCreateUpdateGremlinGraphOptionalParams): Promise<PollerLike<PollOperationState<GremlinResourcesCreateUpdateGremlinGraphResponse>, GremlinResourcesCreateUpdateGremlinGraphResponse>>;
    /**
     * Create or update an Azure Cosmos DB Gremlin graph
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param createUpdateGremlinGraphParameters The parameters to provide for the current Gremlin graph.
     * @param options The options parameters.
     */
    beginCreateUpdateGremlinGraphAndWait(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters, options?: GremlinResourcesCreateUpdateGremlinGraphOptionalParams): Promise<GremlinResourcesCreateUpdateGremlinGraphResponse>;
    /**
     * Deletes an existing Azure Cosmos DB Gremlin graph.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param options The options parameters.
     */
    beginDeleteGremlinGraph(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, options?: GremlinResourcesDeleteGremlinGraphOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB Gremlin graph.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param options The options parameters.
     */
    beginDeleteGremlinGraphAndWait(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, options?: GremlinResourcesDeleteGremlinGraphOptionalParams): Promise<void>;
    /**
     * Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the
     * provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param options The options parameters.
     */
    getGremlinGraphThroughput(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, options?: GremlinResourcesGetGremlinGraphThroughputOptionalParams): Promise<GremlinResourcesGetGremlinGraphThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB Gremlin graph
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Gremlin graph.
     * @param options The options parameters.
     */
    beginUpdateGremlinGraphThroughput(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: GremlinResourcesUpdateGremlinGraphThroughputOptionalParams): Promise<PollerLike<PollOperationState<GremlinResourcesUpdateGremlinGraphThroughputResponse>, GremlinResourcesUpdateGremlinGraphThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB Gremlin graph
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param graphName Cosmos DB graph name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   Gremlin graph.
     * @param options The options parameters.
     */
    beginUpdateGremlinGraphThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, graphName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: GremlinResourcesUpdateGremlinGraphThroughputOptionalParams): Promise<GremlinResourcesUpdateGremlinGraphThroughputResponse>;
}

/** Optional parameters. */
export declare interface GremlinResourcesCreateUpdateGremlinDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateGremlinDatabase operation. */
export declare type GremlinResourcesCreateUpdateGremlinDatabaseResponse = GremlinDatabaseGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesCreateUpdateGremlinGraphOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateGremlinGraph operation. */
export declare type GremlinResourcesCreateUpdateGremlinGraphResponse = GremlinGraphGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesDeleteGremlinDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GremlinResourcesDeleteGremlinGraphOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface GremlinResourcesGetGremlinDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGremlinDatabase operation. */
export declare type GremlinResourcesGetGremlinDatabaseResponse = GremlinDatabaseGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesGetGremlinDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGremlinDatabaseThroughput operation. */
export declare type GremlinResourcesGetGremlinDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesGetGremlinGraphOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGremlinGraph operation. */
export declare type GremlinResourcesGetGremlinGraphResponse = GremlinGraphGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesGetGremlinGraphThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getGremlinGraphThroughput operation. */
export declare type GremlinResourcesGetGremlinGraphThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesListGremlinDatabasesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listGremlinDatabases operation. */
export declare type GremlinResourcesListGremlinDatabasesResponse = GremlinDatabaseListResult;

/** Optional parameters. */
export declare interface GremlinResourcesListGremlinGraphsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listGremlinGraphs operation. */
export declare type GremlinResourcesListGremlinGraphsResponse = GremlinGraphListResult;

/** Optional parameters. */
export declare interface GremlinResourcesUpdateGremlinDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateGremlinDatabaseThroughput operation. */
export declare type GremlinResourcesUpdateGremlinDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface GremlinResourcesUpdateGremlinGraphThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateGremlinGraphThroughput operation. */
export declare type GremlinResourcesUpdateGremlinGraphThroughputResponse = ThroughputSettingsGetResults;

/** The paths that are included in indexing */
export declare interface IncludedPath {
    /** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
    path?: string;
    /** List of indexes for this path */
    indexes?: Indexes[];
}

/** The indexes for the path. */
export declare interface Indexes {
    /** The datatype for which the indexing behavior is applied to. */
    dataType?: DataType;
    /** The precision of the index. -1 is maximum precision. */
    precision?: number;
    /** Indicates the type of index. */
    kind?: IndexKind;
}

/**
 * Defines values for IndexingMode. \
 * {@link KnownIndexingMode} can be used interchangeably with IndexingMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Consistent** \
 * **Lazy** \
 * **None**
 */
export declare type IndexingMode = string;

/** Cosmos DB indexing policy */
export declare interface IndexingPolicy {
    /** Indicates if the indexing policy is automatic */
    automatic?: boolean;
    /** Indicates the indexing mode. */
    indexingMode?: IndexingMode;
    /** List of paths to include in the indexing */
    includedPaths?: IncludedPath[];
    /** List of paths to exclude from indexing */
    excludedPaths?: ExcludedPath[];
    /** List of composite path list */
    compositeIndexes?: CompositePath[][];
    /** List of spatial specifics */
    spatialIndexes?: SpatialSpec[];
}

/**
 * Defines values for IndexKind. \
 * {@link KnownIndexKind} can be used interchangeably with IndexKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Hash** \
 * **Range** \
 * **Spatial**
 */
export declare type IndexKind = string;

/**
 * Defines values for KeyKind. \
 * {@link KnownKeyKind} can be used interchangeably with KeyKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **primary** \
 * **secondary** \
 * **primaryReadonly** \
 * **secondaryReadonly**
 */
export declare type KeyKind = string;

/** Known values of {@link CompositePathSortOrder} that the service accepts. */
export declare enum KnownCompositePathSortOrder {
    Ascending = "Ascending",
    Descending = "Descending"
}

/** Known values of {@link ConflictResolutionMode} that the service accepts. */
export declare enum KnownConflictResolutionMode {
    LastWriterWins = "LastWriterWins",
    Custom = "Custom"
}

/** Known values of {@link ConnectorOffer} that the service accepts. */
export declare enum KnownConnectorOffer {
    Small = "Small"
}

/** Known values of {@link DatabaseAccountKind} that the service accepts. */
export declare enum KnownDatabaseAccountKind {
    GlobalDocumentDB = "GlobalDocumentDB",
    MongoDB = "MongoDB",
    Parse = "Parse"
}

/** Known values of {@link DataType} that the service accepts. */
export declare enum KnownDataType {
    String = "String",
    Number = "Number",
    Point = "Point",
    Polygon = "Polygon",
    LineString = "LineString",
    MultiPolygon = "MultiPolygon"
}

/** Known values of {@link IndexingMode} that the service accepts. */
export declare enum KnownIndexingMode {
    Consistent = "Consistent",
    Lazy = "Lazy",
    None = "None"
}

/** Known values of {@link IndexKind} that the service accepts. */
export declare enum KnownIndexKind {
    Hash = "Hash",
    Range = "Range",
    Spatial = "Spatial"
}

/** Known values of {@link KeyKind} that the service accepts. */
export declare enum KnownKeyKind {
    Primary = "primary",
    Secondary = "secondary",
    PrimaryReadonly = "primaryReadonly",
    SecondaryReadonly = "secondaryReadonly"
}

/** Known values of {@link NotebookWorkspaceName} that the service accepts. */
export declare enum KnownNotebookWorkspaceName {
    Default = "default"
}

/** Known values of {@link PartitionKind} that the service accepts. */
export declare enum KnownPartitionKind {
    Hash = "Hash",
    Range = "Range"
}

/** Known values of {@link PrimaryAggregationType} that the service accepts. */
export declare enum KnownPrimaryAggregationType {
    None = "None",
    Average = "Average",
    Total = "Total",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Last = "Last"
}

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export declare enum KnownPublicNetworkAccess {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link SpatialType} that the service accepts. */
export declare enum KnownSpatialType {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPolygon = "MultiPolygon"
}

/** Known values of {@link TriggerOperation} that the service accepts. */
export declare enum KnownTriggerOperation {
    All = "All",
    Create = "Create",
    Update = "Update",
    Delete = "Delete",
    Replace = "Replace"
}

/** Known values of {@link TriggerType} that the service accepts. */
export declare enum KnownTriggerType {
    Pre = "Pre",
    Post = "Post"
}

/** Known values of {@link UnitType} that the service accepts. */
export declare enum KnownUnitType {
    Count = "Count",
    Bytes = "Bytes",
    Seconds = "Seconds",
    Percent = "Percent",
    CountPerSecond = "CountPerSecond",
    BytesPerSecond = "BytesPerSecond",
    Milliseconds = "Milliseconds"
}

/** A region in which the Azure Cosmos DB database account is deployed. */
declare interface Location_2 {
    /**
     * The unique identifier of the region within the database account. Example: &lt;accountName&gt;-&lt;locationName&gt;.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** The name of the region. */
    locationName?: string;
    /**
     * The connection endpoint for the specific region. Example: https://&lt;accountName&gt;-&lt;locationName&gt;.documents.azure.com:443/
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly documentEndpoint?: string;
    /**
     * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'DeletionFailed' – the Cosmos DB account deletion failed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /** The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. */
    failoverPriority?: number;
    /** Flag to indicate whether or not this region is an AvailabilityZone region */
    isZoneRedundant?: boolean;
}
export { Location_2 as Location }

/** Metric data */
export declare interface Metric {
    /**
     * The start time for the metric (ISO-8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The end time for the metric (ISO-8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * The time grain to be used to summarize the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeGrain?: string;
    /**
     * The unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UnitType;
    /**
     * The name information for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: MetricName;
    /**
     * The metric values for the specified time window and timestep.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metricValues?: MetricValue[];
}

/** The availability of the metric. */
export declare interface MetricAvailability {
    /**
     * The time grain to be used to summarize the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeGrain?: string;
    /**
     * The retention for the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly retention?: string;
}

/** The definition of a metric. */
export declare interface MetricDefinition {
    /**
     * The list of metric availabilities for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metricAvailabilities?: MetricAvailability[];
    /**
     * The primary aggregation type of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryAggregationType?: PrimaryAggregationType;
    /**
     * The unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UnitType;
    /**
     * The resource uri of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceUri?: string;
    /**
     * The name information for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: MetricName;
}

/** The response to a list metric definitions request. */
export declare interface MetricDefinitionsListResult {
    /**
     * The list of metric definitions for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: MetricDefinition[];
}

/** The response to a list metrics request. */
export declare interface MetricListResult {
    /**
     * The list of metrics for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Metric[];
}

/** A metric name. */
export declare interface MetricName {
    /**
     * The name of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
    /**
     * The friendly name of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localizedValue?: string;
}

/** Represents metrics values. */
export declare interface MetricValue {
    /**
     * The number of values for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly count?: number;
    /**
     * The average value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly average?: number;
    /**
     * The max value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maximum?: number;
    /**
     * The min value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minimum?: number;
    /**
     * The metric timestamp (ISO-8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * The total value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly total?: number;
}

/** Parameters to create and update Cosmos DB MongoDB collection. */
export declare type MongoDBCollectionCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a MongoDB collection */
    resource: MongoDBCollectionResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type MongoDBCollectionGetPropertiesOptions = OptionsResource & {};

export declare type MongoDBCollectionGetPropertiesResource = MongoDBCollectionResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB MongoDB collection. */
export declare type MongoDBCollectionGetResults = ARMResourceProperties & {
    resource?: MongoDBCollectionGetPropertiesResource;
    options?: MongoDBCollectionGetPropertiesOptions;
};

/** The List operation response, that contains the MongoDB collections and their properties. */
export declare interface MongoDBCollectionListResult {
    /**
     * List of MongoDB collections and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: MongoDBCollectionGetResults[];
}

/** Cosmos DB MongoDB collection resource object */
export declare interface MongoDBCollectionResource {
    /** Name of the Cosmos DB MongoDB collection */
    id: string;
    /** A key-value pair of shard keys to be applied for the request. */
    shardKey?: {
        [propertyName: string]: string;
    };
    /** List of index keys */
    indexes?: MongoIndex[];
}

/** Parameters to create and update Cosmos DB MongoDB database. */
export declare type MongoDBDatabaseCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a MongoDB database */
    resource: MongoDBDatabaseResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type MongoDBDatabaseGetPropertiesOptions = OptionsResource & {};

export declare type MongoDBDatabaseGetPropertiesResource = MongoDBDatabaseResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB MongoDB database. */
export declare type MongoDBDatabaseGetResults = ARMResourceProperties & {
    resource?: MongoDBDatabaseGetPropertiesResource;
    options?: MongoDBDatabaseGetPropertiesOptions;
};

/** The List operation response, that contains the MongoDB databases and their properties. */
export declare interface MongoDBDatabaseListResult {
    /**
     * List of MongoDB databases and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: MongoDBDatabaseGetResults[];
}

/** Cosmos DB MongoDB database resource object */
export declare interface MongoDBDatabaseResource {
    /** Name of the Cosmos DB MongoDB database */
    id: string;
}

/** Interface representing a MongoDBResources. */
export declare interface MongoDBResources {
    /**
     * Lists the MongoDB databases under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listMongoDBDatabases(resourceGroupName: string, accountName: string, options?: MongoDBResourcesListMongoDBDatabasesOptionalParams): PagedAsyncIterableIterator<MongoDBDatabaseGetResults>;
    /**
     * Lists the MongoDB collection under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    listMongoDBCollections(resourceGroupName: string, accountName: string, databaseName: string, options?: MongoDBResourcesListMongoDBCollectionsOptionalParams): PagedAsyncIterableIterator<MongoDBCollectionGetResults>;
    /**
     * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided
     * name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getMongoDBDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: MongoDBResourcesGetMongoDBDatabaseOptionalParams): Promise<MongoDBResourcesGetMongoDBDatabaseResponse>;
    /**
     * Create or updates Azure Cosmos DB MongoDB database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateMongoDBDatabaseParameters The parameters to provide for the current MongoDB
     *                                              database.
     * @param options The options parameters.
     */
    beginCreateUpdateMongoDBDatabase(resourceGroupName: string, accountName: string, databaseName: string, createUpdateMongoDBDatabaseParameters: MongoDBDatabaseCreateUpdateParameters, options?: MongoDBResourcesCreateUpdateMongoDBDatabaseOptionalParams): Promise<PollerLike<PollOperationState<MongoDBResourcesCreateUpdateMongoDBDatabaseResponse>, MongoDBResourcesCreateUpdateMongoDBDatabaseResponse>>;
    /**
     * Create or updates Azure Cosmos DB MongoDB database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateMongoDBDatabaseParameters The parameters to provide for the current MongoDB
     *                                              database.
     * @param options The options parameters.
     */
    beginCreateUpdateMongoDBDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, createUpdateMongoDBDatabaseParameters: MongoDBDatabaseCreateUpdateParameters, options?: MongoDBResourcesCreateUpdateMongoDBDatabaseOptionalParams): Promise<MongoDBResourcesCreateUpdateMongoDBDatabaseResponse>;
    /**
     * Deletes an existing Azure Cosmos DB MongoDB database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteMongoDBDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: MongoDBResourcesDeleteMongoDBDatabaseOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB MongoDB database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteMongoDBDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, options?: MongoDBResourcesDeleteMongoDBDatabaseOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account
     * with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getMongoDBDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, options?: MongoDBResourcesGetMongoDBDatabaseThroughputOptionalParams): Promise<MongoDBResourcesGetMongoDBDatabaseThroughputResponse>;
    /**
     * Update RUs per second of the an Azure Cosmos DB MongoDB database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   MongoDB database.
     * @param options The options parameters.
     */
    beginUpdateMongoDBDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: MongoDBResourcesUpdateMongoDBDatabaseThroughputOptionalParams): Promise<PollerLike<PollOperationState<MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse>, MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse>>;
    /**
     * Update RUs per second of the an Azure Cosmos DB MongoDB database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   MongoDB database.
     * @param options The options parameters.
     */
    beginUpdateMongoDBDatabaseThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: MongoDBResourcesUpdateMongoDBDatabaseThroughputOptionalParams): Promise<MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse>;
    /**
     * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param options The options parameters.
     */
    getMongoDBCollection(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, options?: MongoDBResourcesGetMongoDBCollectionOptionalParams): Promise<MongoDBResourcesGetMongoDBCollectionResponse>;
    /**
     * Create or update an Azure Cosmos DB MongoDB Collection
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param createUpdateMongoDBCollectionParameters The parameters to provide for the current MongoDB
     *                                                Collection.
     * @param options The options parameters.
     */
    beginCreateUpdateMongoDBCollection(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters, options?: MongoDBResourcesCreateUpdateMongoDBCollectionOptionalParams): Promise<PollerLike<PollOperationState<MongoDBResourcesCreateUpdateMongoDBCollectionResponse>, MongoDBResourcesCreateUpdateMongoDBCollectionResponse>>;
    /**
     * Create or update an Azure Cosmos DB MongoDB Collection
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param createUpdateMongoDBCollectionParameters The parameters to provide for the current MongoDB
     *                                                Collection.
     * @param options The options parameters.
     */
    beginCreateUpdateMongoDBCollectionAndWait(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, createUpdateMongoDBCollectionParameters: MongoDBCollectionCreateUpdateParameters, options?: MongoDBResourcesCreateUpdateMongoDBCollectionOptionalParams): Promise<MongoDBResourcesCreateUpdateMongoDBCollectionResponse>;
    /**
     * Deletes an existing Azure Cosmos DB MongoDB Collection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param options The options parameters.
     */
    beginDeleteMongoDBCollection(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, options?: MongoDBResourcesDeleteMongoDBCollectionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB MongoDB Collection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param options The options parameters.
     */
    beginDeleteMongoDBCollectionAndWait(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, options?: MongoDBResourcesDeleteMongoDBCollectionOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account
     * with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param options The options parameters.
     */
    getMongoDBCollectionThroughput(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, options?: MongoDBResourcesGetMongoDBCollectionThroughputOptionalParams): Promise<MongoDBResourcesGetMongoDBCollectionThroughputResponse>;
    /**
     * Update the RUs per second of an Azure Cosmos DB MongoDB collection
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   MongoDB collection.
     * @param options The options parameters.
     */
    beginUpdateMongoDBCollectionThroughput(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: MongoDBResourcesUpdateMongoDBCollectionThroughputOptionalParams): Promise<PollerLike<PollOperationState<MongoDBResourcesUpdateMongoDBCollectionThroughputResponse>, MongoDBResourcesUpdateMongoDBCollectionThroughputResponse>>;
    /**
     * Update the RUs per second of an Azure Cosmos DB MongoDB collection
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param collectionName Cosmos DB collection name.
     * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
     *                                   MongoDB collection.
     * @param options The options parameters.
     */
    beginUpdateMongoDBCollectionThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, collectionName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: MongoDBResourcesUpdateMongoDBCollectionThroughputOptionalParams): Promise<MongoDBResourcesUpdateMongoDBCollectionThroughputResponse>;
}

/** Optional parameters. */
export declare interface MongoDBResourcesCreateUpdateMongoDBCollectionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateMongoDBCollection operation. */
export declare type MongoDBResourcesCreateUpdateMongoDBCollectionResponse = MongoDBCollectionGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesCreateUpdateMongoDBDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateMongoDBDatabase operation. */
export declare type MongoDBResourcesCreateUpdateMongoDBDatabaseResponse = MongoDBDatabaseGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesDeleteMongoDBCollectionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface MongoDBResourcesDeleteMongoDBDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface MongoDBResourcesGetMongoDBCollectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMongoDBCollection operation. */
export declare type MongoDBResourcesGetMongoDBCollectionResponse = MongoDBCollectionGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesGetMongoDBCollectionThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMongoDBCollectionThroughput operation. */
export declare type MongoDBResourcesGetMongoDBCollectionThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesGetMongoDBDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMongoDBDatabase operation. */
export declare type MongoDBResourcesGetMongoDBDatabaseResponse = MongoDBDatabaseGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesGetMongoDBDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getMongoDBDatabaseThroughput operation. */
export declare type MongoDBResourcesGetMongoDBDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesListMongoDBCollectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMongoDBCollections operation. */
export declare type MongoDBResourcesListMongoDBCollectionsResponse = MongoDBCollectionListResult;

/** Optional parameters. */
export declare interface MongoDBResourcesListMongoDBDatabasesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMongoDBDatabases operation. */
export declare type MongoDBResourcesListMongoDBDatabasesResponse = MongoDBDatabaseListResult;

/** Optional parameters. */
export declare interface MongoDBResourcesUpdateMongoDBCollectionThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateMongoDBCollectionThroughput operation. */
export declare type MongoDBResourcesUpdateMongoDBCollectionThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface MongoDBResourcesUpdateMongoDBDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateMongoDBDatabaseThroughput operation. */
export declare type MongoDBResourcesUpdateMongoDBDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Cosmos DB MongoDB collection index key */
export declare interface MongoIndex {
    /** Cosmos DB MongoDB collection index keys */
    key?: MongoIndexKeys;
    /** Cosmos DB MongoDB collection index key options */
    options?: MongoIndexOptions;
}

/** Cosmos DB MongoDB collection resource object */
export declare interface MongoIndexKeys {
    /** List of keys for each MongoDB collection in the Azure Cosmos DB service */
    keys?: string[];
}

/** Cosmos DB MongoDB collection index options */
export declare interface MongoIndexOptions {
    /** Expire after seconds */
    expireAfterSeconds?: number;
    /** Is unique or not */
    unique?: boolean;
}

/** A notebook workspace resource */
export declare type NotebookWorkspace = ARMProxyResource & {
    /**
     * Specifies the endpoint of Notebook server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly notebookServerEndpoint?: string;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: string;
};

/** The connection info for the given notebook workspace */
export declare interface NotebookWorkspaceConnectionInfoResult {
    /**
     * Specifies auth token used for connecting to Notebook server (uses token-based auth).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly authToken?: string;
    /**
     * Specifies the endpoint of Notebook server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly notebookServerEndpoint?: string;
}

/** Parameters to create a notebook workspace resource */
export declare type NotebookWorkspaceCreateUpdateParameters = ARMProxyResource & {};

/** A list of notebook workspace resources */
export declare interface NotebookWorkspaceListResult {
    /** Array of notebook workspace resources */
    value?: NotebookWorkspace[];
}

/**
 * Defines values for NotebookWorkspaceName. \
 * {@link KnownNotebookWorkspaceName} can be used interchangeably with NotebookWorkspaceName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type NotebookWorkspaceName = string;

/** Interface representing a NotebookWorkspaces. */
export declare interface NotebookWorkspaces {
    /**
     * Gets the notebook workspace resources of an existing Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listByDatabaseAccount(resourceGroupName: string, accountName: string, options?: NotebookWorkspacesListByDatabaseAccountOptionalParams): PagedAsyncIterableIterator<NotebookWorkspace>;
    /**
     * Gets the notebook workspace for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesGetOptionalParams): Promise<NotebookWorkspacesGetResponse>;
    /**
     * Creates the notebook workspace for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param notebookCreateUpdateParameters The notebook workspace to create for the current database
     *                                       account.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, notebookCreateUpdateParameters: NotebookWorkspaceCreateUpdateParameters, options?: NotebookWorkspacesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NotebookWorkspacesCreateOrUpdateResponse>, NotebookWorkspacesCreateOrUpdateResponse>>;
    /**
     * Creates the notebook workspace for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param notebookCreateUpdateParameters The notebook workspace to create for the current database
     *                                       account.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, notebookCreateUpdateParameters: NotebookWorkspaceCreateUpdateParameters, options?: NotebookWorkspacesCreateOrUpdateOptionalParams): Promise<NotebookWorkspacesCreateOrUpdateResponse>;
    /**
     * Deletes the notebook workspace for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the notebook workspace for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves the connection info for the notebook workspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    listConnectionInfo(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesListConnectionInfoOptionalParams): Promise<NotebookWorkspacesListConnectionInfoResponse>;
    /**
     * Regenerates the auth token for the notebook workspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginRegenerateAuthToken(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesRegenerateAuthTokenOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Regenerates the auth token for the notebook workspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginRegenerateAuthTokenAndWait(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesRegenerateAuthTokenOptionalParams): Promise<void>;
    /**
     * Starts the notebook workspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts the notebook workspace
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param notebookWorkspaceName The name of the notebook workspace resource.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, accountName: string, notebookWorkspaceName: NotebookWorkspaceName, options?: NotebookWorkspacesStartOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface NotebookWorkspacesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NotebookWorkspacesCreateOrUpdateResponse = NotebookWorkspace;

/** Optional parameters. */
export declare interface NotebookWorkspacesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NotebookWorkspacesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type NotebookWorkspacesGetResponse = NotebookWorkspace;

/** Optional parameters. */
export declare interface NotebookWorkspacesListByDatabaseAccountOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseAccount operation. */
export declare type NotebookWorkspacesListByDatabaseAccountResponse = NotebookWorkspaceListResult;

/** Optional parameters. */
export declare interface NotebookWorkspacesListConnectionInfoOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnectionInfo operation. */
export declare type NotebookWorkspacesListConnectionInfoResponse = NotebookWorkspaceConnectionInfoResult;

/** Optional parameters. */
export declare interface NotebookWorkspacesRegenerateAuthTokenOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NotebookWorkspacesStartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** REST API operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.ResourceProvider */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
    /** Description of operation */
    description?: string;
}

/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of operations supported by the Resource Provider. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Cosmos DB Resource Provider operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult;

/** Cosmos DB options resource object */
export declare interface OptionsResource {
    /** Value of the Cosmos DB resource throughput. Use the ThroughputSetting resource when retrieving offer details. */
    throughput?: number;
}

/** Interface representing a PartitionKeyRangeId. */
export declare interface PartitionKeyRangeId {
    /**
     * Retrieves the metrics determined by the given filter for the given partition key range id.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param partitionKeyRangeId Partition Key Range Id for which to get data.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, options?: PartitionKeyRangeIdListMetricsOptionalParams): PagedAsyncIterableIterator<PartitionMetric>;
}

/** Optional parameters. */
export declare interface PartitionKeyRangeIdListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type PartitionKeyRangeIdListMetricsResponse = PartitionMetricListResult;

/** Interface representing a PartitionKeyRangeIdRegion. */
export declare interface PartitionKeyRangeIdRegion {
    /**
     * Retrieves the metrics determined by the given filter for the given partition key range id and
     * region.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param region Cosmos DB region, with spaces between words and each word capitalized.
     * @param databaseRid Cosmos DB database rid.
     * @param collectionRid Cosmos DB collection rid.
     * @param partitionKeyRangeId Partition Key Range Id for which to get data.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, partitionKeyRangeId: string, filter: string, options?: PartitionKeyRangeIdRegionListMetricsOptionalParams): PagedAsyncIterableIterator<PartitionMetric>;
}

/** Optional parameters. */
export declare interface PartitionKeyRangeIdRegionListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type PartitionKeyRangeIdRegionListMetricsResponse = PartitionMetricListResult;

/**
 * Defines values for PartitionKind. \
 * {@link KnownPartitionKind} can be used interchangeably with PartitionKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Hash** \
 * **Range**
 */
export declare type PartitionKind = string;

/** The metric values for a single partition. */
export declare type PartitionMetric = Metric & {
    /**
     * The partition id (GUID identifier) of the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partitionId?: string;
    /**
     * The partition key range id (integer identifier) of the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partitionKeyRangeId?: string;
};

/** The response to a list partition metrics request. */
export declare interface PartitionMetricListResult {
    /**
     * The list of partition-level metrics for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: PartitionMetric[];
}

/** The partition level usage data for a usage request. */
export declare type PartitionUsage = Usage & {
    /**
     * The partition id (GUID identifier) of the usages.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partitionId?: string;
    /**
     * The partition key range id (integer identifier) of the usages.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partitionKeyRangeId?: string;
};

/** The response to a list partition level usage request. */
export declare interface PartitionUsagesResult {
    /**
     * The list of partition-level usages for the database. A usage is a point in time metric
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: PartitionUsage[];
}

/** Interface representing a Percentile. */
export declare interface Percentile {
    /**
     * Retrieves the metrics determined by the given filter for the given database account. This url is
     * only for PBS and Replication Latency data
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, filter: string, options?: PercentileListMetricsOptionalParams): PagedAsyncIterableIterator<PercentileMetric>;
}

/** Optional parameters. */
export declare interface PercentileListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type PercentileListMetricsResponse = PercentileMetricListResult;

/** Percentile Metric data */
export declare interface PercentileMetric {
    /**
     * The start time for the metric (ISO-8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The end time for the metric (ISO-8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * The time grain to be used to summarize the metric values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeGrain?: string;
    /**
     * The unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UnitType;
    /**
     * The name information for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: MetricName;
    /**
     * The percentile metric values for the specified time window and timestep.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metricValues?: PercentileMetricValue[];
}

/** The response to a list percentile metrics request. */
export declare interface PercentileMetricListResult {
    /**
     * The list of percentile metrics for the account.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: PercentileMetric[];
}

/** Represents percentile metrics values. */
export declare type PercentileMetricValue = MetricValue & {
    /**
     * The 10th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p10?: number;
    /**
     * The 25th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p25?: number;
    /**
     * The 50th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p50?: number;
    /**
     * The 75th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p75?: number;
    /**
     * The 90th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p90?: number;
    /**
     * The 95th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p95?: number;
    /**
     * The 99th percentile value for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p99?: number;
};

/** Interface representing a PercentileSourceTarget. */
export declare interface PercentileSourceTarget {
    /**
     * Retrieves the metrics determined by the given filter for the given account, source and target
     * region. This url is only for PBS and Replication Latency data
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param sourceRegion Source region from which data is written. Cosmos DB region, with spaces between
     *                     words and each word capitalized.
     * @param targetRegion Target region to which data is written. Cosmos DB region, with spaces between
     *                     words and each word capitalized.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, sourceRegion: string, targetRegion: string, filter: string, options?: PercentileSourceTargetListMetricsOptionalParams): PagedAsyncIterableIterator<PercentileMetric>;
}

/** Optional parameters. */
export declare interface PercentileSourceTargetListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type PercentileSourceTargetListMetricsResponse = PercentileMetricListResult;

/** Interface representing a PercentileTarget. */
export declare interface PercentileTarget {
    /**
     * Retrieves the metrics determined by the given filter for the given account target region. This url
     * is only for PBS and Replication Latency data
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param targetRegion Target region to which data is written. Cosmos DB region, with spaces between
     *                     words and each word capitalized.
     * @param filter An OData filter expression that describes a subset of metrics to return. The
     *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
     *               names), startTime, endTime, and timeGrain. The supported operator is eq.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, accountName: string, targetRegion: string, filter: string, options?: PercentileTargetListMetricsOptionalParams): PagedAsyncIterableIterator<PercentileMetric>;
}

/** Optional parameters. */
export declare interface PercentileTargetListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type PercentileTargetListMetricsResponse = PercentileMetricListResult;

/**
 * Defines values for PrimaryAggregationType. \
 * {@link KnownPrimaryAggregationType} can be used interchangeably with PrimaryAggregationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Average** \
 * **Total** \
 * **Minimum** \
 * **Maximum** \
 * **Last**
 */
export declare type PrimaryAggregationType = string;

/** A private endpoint connection */
export declare type PrivateEndpointConnection = ProxyResource & {
    /** Private endpoint which the connection belongs to. */
    privateEndpoint?: PrivateEndpointProperty;
    /** Connection State of the Private Endpoint Connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
};

/** A private endpoint connection */
export declare type PrivateEndpointConnectionAutoGenerated = ProxyResource & {
    /** Private endpoint which the connection belongs to. */
    privateEndpoint?: PrivateEndpointProperty;
    /** Connection State of the Private Endpoint Connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyAutoGenerated;
    /** Group id of the private endpoint. */
    groupId?: string;
    /** Provisioning state of the private endpoint. */
    provisioningState?: string;
};

/** A list of private endpoint connections */
export declare interface PrivateEndpointConnectionListResult {
    /** Array of private endpoint connections */
    value?: PrivateEndpointConnectionAutoGenerated[];
}

/** Interface representing a PrivateEndpointConnections. */
export declare interface PrivateEndpointConnections {
    /**
     * List all private endpoint connections on a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listByDatabaseAccount(resourceGroupName: string, accountName: string, options?: PrivateEndpointConnectionsListByDatabaseAccountOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnectionAutoGenerated>;
    /**
     * Gets a private endpoint connection.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Approve or reject a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param parameters A private endpoint connection
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnectionAutoGenerated, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>, PrivateEndpointConnectionsCreateOrUpdateResponse>>;
    /**
     * Approve or reject a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param parameters A private endpoint connection
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnectionAutoGenerated, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse>;
    /**
     * Deletes a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnectionAutoGenerated;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnectionAutoGenerated;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListByDatabaseAccountOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseAccount operation. */
export declare type PrivateEndpointConnectionsListByDatabaseAccountResponse = PrivateEndpointConnectionListResult;

/** Private endpoint which the connection belongs to. */
export declare interface PrivateEndpointProperty {
    /** Resource id of the private endpoint. */
    id?: string;
}

/** A private link resource */
export declare type PrivateLinkResource = ARMProxyResource & {
    /**
     * The private link resource group id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * The private link resource required member names.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMembers?: string[];
    /**
     * The private link resource required zone names.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredZoneNames?: string[];
};

/** A list of private link resources */
export declare interface PrivateLinkResourceListResult {
    /** Array of private link resources */
    value?: PrivateLinkResource[];
}

/** Interface representing a PrivateLinkResources. */
export declare interface PrivateLinkResources {
    /**
     * Gets the private link resources that need to be created for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listByDatabaseAccount(resourceGroupName: string, accountName: string, options?: PrivateLinkResourcesListByDatabaseAccountOptionalParams): PagedAsyncIterableIterator<PrivateLinkResource>;
    /**
     * Gets the private link resources that need to be created for a Cosmos DB account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param groupName The name of the private link resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, accountName: string, groupName: string, options?: PrivateLinkResourcesGetOptionalParams): Promise<PrivateLinkResourcesGetResponse>;
}

/** Optional parameters. */
export declare interface PrivateLinkResourcesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateLinkResourcesGetResponse = PrivateLinkResource;

/** Optional parameters. */
export declare interface PrivateLinkResourcesListByDatabaseAccountOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseAccount operation. */
export declare type PrivateLinkResourcesListByDatabaseAccountResponse = PrivateLinkResourceListResult;

/** Connection State of the Private Endpoint Connection. */
export declare interface PrivateLinkServiceConnectionStateProperty {
    /** The private link service connection status. */
    status?: string;
    /**
     * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actionsRequired?: string;
}

/** Connection State of the Private Endpoint Connection. */
export declare interface PrivateLinkServiceConnectionStatePropertyAutoGenerated {
    /** The private link service connection status. */
    status?: string;
    /** The private link service connection description. */
    description?: string;
    /**
     * Any action that is required beyond basic workflow (approve/ reject/ disconnect)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actionsRequired?: string;
}

/** Cosmos DB provisioned throughput settings object */
export declare interface ProvisionedThroughputSettingsResource {
    /** Represents maximum throughput container can scale up to. */
    maxThroughput: number;
    /** Cosmos DB resource auto-upgrade policy */
    autoUpgradePolicy?: AutoUpgradePolicyResource;
    /**
     * Represents target maximum throughput container can scale up to once offer is no longer in pending state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetMaxThroughput?: number;
}

/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
export declare type ProxyResource = Resource & {};

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type PublicNetworkAccess = string;

/** Cosmos DB region to online or offline. */
export declare interface RegionForOnlineOffline {
    /** Cosmos DB region, with spaces between words and each word capitalized. */
    region: string;
}

export declare interface Resource {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The name of the resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

export declare interface SpatialSpec {
    /** The path for which the indexing behavior applies to. Index paths typically start with root and end with wildcard (/path/*) */
    path?: string;
    /** List of path's spatial type */
    types?: SpatialType[];
}

/**
 * Defines values for SpatialType. \
 * {@link KnownSpatialType} can be used interchangeably with SpatialType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Point** \
 * **LineString** \
 * **Polygon** \
 * **MultiPolygon**
 */
export declare type SpatialType = string;

/** Parameters to create and update Cosmos DB container. */
export declare type SqlContainerCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a container */
    resource: SqlContainerResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type SqlContainerGetPropertiesOptions = OptionsResource & {};

export declare type SqlContainerGetPropertiesResource = SqlContainerResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB container. */
export declare type SqlContainerGetResults = ARMResourceProperties & {
    resource?: SqlContainerGetPropertiesResource;
    options?: SqlContainerGetPropertiesOptions;
};

/** The List operation response, that contains the containers and their properties. */
export declare interface SqlContainerListResult {
    /**
     * List of containers and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SqlContainerGetResults[];
}

/** Cosmos DB SQL container resource object */
export declare interface SqlContainerResource {
    /** Name of the Cosmos DB SQL container */
    id: string;
    /** The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the container */
    indexingPolicy?: IndexingPolicy;
    /** The configuration of the partition key to be used for partitioning data into multiple partitions */
    partitionKey?: ContainerPartitionKey;
    /** Default time to live */
    defaultTtl?: number;
    /** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
    uniqueKeyPolicy?: UniqueKeyPolicy;
    /** The conflict resolution policy for the container. */
    conflictResolutionPolicy?: ConflictResolutionPolicy;
}

/** Parameters to create and update Cosmos DB SQL database. */
export declare type SqlDatabaseCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a SQL database */
    resource: SqlDatabaseResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type SqlDatabaseGetPropertiesOptions = OptionsResource & {};

export declare type SqlDatabaseGetPropertiesResource = SqlDatabaseResource & ExtendedResourceProperties & {
    /** A system generated property that specified the addressable path of the collections resource. */
    colls?: string;
    /** A system generated property that specifies the addressable path of the users resource. */
    users?: string;
};

/** An Azure Cosmos DB SQL database. */
export declare type SqlDatabaseGetResults = ARMResourceProperties & {
    resource?: SqlDatabaseGetPropertiesResource;
    options?: SqlDatabaseGetPropertiesOptions;
};

/** The List operation response, that contains the SQL databases and their properties. */
export declare interface SqlDatabaseListResult {
    /**
     * List of SQL databases and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SqlDatabaseGetResults[];
}

/** Cosmos DB SQL database resource object */
export declare interface SqlDatabaseResource {
    /** Name of the Cosmos DB SQL database */
    id: string;
}

/** Interface representing a SqlResources. */
export declare interface SqlResources {
    /**
     * Lists the SQL databases under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listSqlDatabases(resourceGroupName: string, accountName: string, options?: SqlResourcesListSqlDatabasesOptionalParams): PagedAsyncIterableIterator<SqlDatabaseGetResults>;
    /**
     * Lists the SQL container under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    listSqlContainers(resourceGroupName: string, accountName: string, databaseName: string, options?: SqlResourcesListSqlContainersOptionalParams): PagedAsyncIterableIterator<SqlContainerGetResults>;
    /**
     * Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    listSqlStoredProcedures(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesListSqlStoredProceduresOptionalParams): PagedAsyncIterableIterator<SqlStoredProcedureGetResults>;
    /**
     * Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    listSqlUserDefinedFunctions(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesListSqlUserDefinedFunctionsOptionalParams): PagedAsyncIterableIterator<SqlUserDefinedFunctionGetResults>;
    /**
     * Lists the SQL trigger under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    listSqlTriggers(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesListSqlTriggersOptionalParams): PagedAsyncIterableIterator<SqlTriggerGetResults>;
    /**
     * Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getSqlDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: SqlResourcesGetSqlDatabaseOptionalParams): Promise<SqlResourcesGetSqlDatabaseResponse>;
    /**
     * Create or update an Azure Cosmos DB SQL database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateSqlDatabaseParameters The parameters to provide for the current SQL database.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlDatabase(resourceGroupName: string, accountName: string, databaseName: string, createUpdateSqlDatabaseParameters: SqlDatabaseCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlDatabaseOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesCreateUpdateSqlDatabaseResponse>, SqlResourcesCreateUpdateSqlDatabaseResponse>>;
    /**
     * Create or update an Azure Cosmos DB SQL database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param createUpdateSqlDatabaseParameters The parameters to provide for the current SQL database.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, createUpdateSqlDatabaseParameters: SqlDatabaseCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlDatabaseOptionalParams): Promise<SqlResourcesCreateUpdateSqlDatabaseResponse>;
    /**
     * Deletes an existing Azure Cosmos DB SQL database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteSqlDatabase(resourceGroupName: string, accountName: string, databaseName: string, options?: SqlResourcesDeleteSqlDatabaseOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB SQL database.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    beginDeleteSqlDatabaseAndWait(resourceGroupName: string, accountName: string, databaseName: string, options?: SqlResourcesDeleteSqlDatabaseOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with
     * the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param options The options parameters.
     */
    getSqlDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, options?: SqlResourcesGetSqlDatabaseThroughputOptionalParams): Promise<SqlResourcesGetSqlDatabaseThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB SQL database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   SQL database.
     * @param options The options parameters.
     */
    beginUpdateSqlDatabaseThroughput(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: SqlResourcesUpdateSqlDatabaseThroughputOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesUpdateSqlDatabaseThroughputResponse>, SqlResourcesUpdateSqlDatabaseThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB SQL database
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   SQL database.
     * @param options The options parameters.
     */
    beginUpdateSqlDatabaseThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: SqlResourcesUpdateSqlDatabaseThroughputOptionalParams): Promise<SqlResourcesUpdateSqlDatabaseThroughputResponse>;
    /**
     * Gets the SQL container under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    getSqlContainer(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesGetSqlContainerOptionalParams): Promise<SqlResourcesGetSqlContainerResponse>;
    /**
     * Create or update an Azure Cosmos DB SQL container
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param createUpdateSqlContainerParameters The parameters to provide for the current SQL container.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlContainer(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, createUpdateSqlContainerParameters: SqlContainerCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlContainerOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesCreateUpdateSqlContainerResponse>, SqlResourcesCreateUpdateSqlContainerResponse>>;
    /**
     * Create or update an Azure Cosmos DB SQL container
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param createUpdateSqlContainerParameters The parameters to provide for the current SQL container.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlContainerAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, createUpdateSqlContainerParameters: SqlContainerCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlContainerOptionalParams): Promise<SqlResourcesCreateUpdateSqlContainerResponse>;
    /**
     * Deletes an existing Azure Cosmos DB SQL container.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    beginDeleteSqlContainer(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesDeleteSqlContainerOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB SQL container.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    beginDeleteSqlContainerAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesDeleteSqlContainerOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param options The options parameters.
     */
    getSqlContainerThroughput(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, options?: SqlResourcesGetSqlContainerThroughputOptionalParams): Promise<SqlResourcesGetSqlContainerThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB SQL container
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   SQL container.
     * @param options The options parameters.
     */
    beginUpdateSqlContainerThroughput(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: SqlResourcesUpdateSqlContainerThroughputOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesUpdateSqlContainerThroughputResponse>, SqlResourcesUpdateSqlContainerThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB SQL container
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   SQL container.
     * @param options The options parameters.
     */
    beginUpdateSqlContainerThroughputAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: SqlResourcesUpdateSqlContainerThroughputOptionalParams): Promise<SqlResourcesUpdateSqlContainerThroughputResponse>;
    /**
     * Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param storedProcedureName Cosmos DB storedProcedure name.
     * @param options The options parameters.
     */
    getSqlStoredProcedure(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, options?: SqlResourcesGetSqlStoredProcedureOptionalParams): Promise<SqlResourcesGetSqlStoredProcedureResponse>;
    /**
     * Create or update an Azure Cosmos DB SQL storedProcedure
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param storedProcedureName Cosmos DB storedProcedure name.
     * @param createUpdateSqlStoredProcedureParameters The parameters to provide for the current SQL
     *                                                 storedProcedure.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlStoredProcedure(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, createUpdateSqlStoredProcedureParameters: SqlStoredProcedureCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlStoredProcedureOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesCreateUpdateSqlStoredProcedureResponse>, SqlResourcesCreateUpdateSqlStoredProcedureResponse>>;
    /**
     * Create or update an Azure Cosmos DB SQL storedProcedure
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param storedProcedureName Cosmos DB storedProcedure name.
     * @param createUpdateSqlStoredProcedureParameters The parameters to provide for the current SQL
     *                                                 storedProcedure.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlStoredProcedureAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, createUpdateSqlStoredProcedureParameters: SqlStoredProcedureCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlStoredProcedureOptionalParams): Promise<SqlResourcesCreateUpdateSqlStoredProcedureResponse>;
    /**
     * Deletes an existing Azure Cosmos DB SQL storedProcedure.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param storedProcedureName Cosmos DB storedProcedure name.
     * @param options The options parameters.
     */
    beginDeleteSqlStoredProcedure(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, options?: SqlResourcesDeleteSqlStoredProcedureOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB SQL storedProcedure.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param storedProcedureName Cosmos DB storedProcedure name.
     * @param options The options parameters.
     */
    beginDeleteSqlStoredProcedureAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, storedProcedureName: string, options?: SqlResourcesDeleteSqlStoredProcedureOptionalParams): Promise<void>;
    /**
     * Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param userDefinedFunctionName Cosmos DB userDefinedFunction name.
     * @param options The options parameters.
     */
    getSqlUserDefinedFunction(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, options?: SqlResourcesGetSqlUserDefinedFunctionOptionalParams): Promise<SqlResourcesGetSqlUserDefinedFunctionResponse>;
    /**
     * Create or update an Azure Cosmos DB SQL userDefinedFunction
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param userDefinedFunctionName Cosmos DB userDefinedFunction name.
     * @param createUpdateSqlUserDefinedFunctionParameters The parameters to provide for the current SQL
     *                                                     userDefinedFunction.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlUserDefinedFunction(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, createUpdateSqlUserDefinedFunctionParameters: SqlUserDefinedFunctionCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlUserDefinedFunctionOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesCreateUpdateSqlUserDefinedFunctionResponse>, SqlResourcesCreateUpdateSqlUserDefinedFunctionResponse>>;
    /**
     * Create or update an Azure Cosmos DB SQL userDefinedFunction
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param userDefinedFunctionName Cosmos DB userDefinedFunction name.
     * @param createUpdateSqlUserDefinedFunctionParameters The parameters to provide for the current SQL
     *                                                     userDefinedFunction.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlUserDefinedFunctionAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, createUpdateSqlUserDefinedFunctionParameters: SqlUserDefinedFunctionCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlUserDefinedFunctionOptionalParams): Promise<SqlResourcesCreateUpdateSqlUserDefinedFunctionResponse>;
    /**
     * Deletes an existing Azure Cosmos DB SQL userDefinedFunction.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param userDefinedFunctionName Cosmos DB userDefinedFunction name.
     * @param options The options parameters.
     */
    beginDeleteSqlUserDefinedFunction(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, options?: SqlResourcesDeleteSqlUserDefinedFunctionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB SQL userDefinedFunction.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param userDefinedFunctionName Cosmos DB userDefinedFunction name.
     * @param options The options parameters.
     */
    beginDeleteSqlUserDefinedFunctionAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, userDefinedFunctionName: string, options?: SqlResourcesDeleteSqlUserDefinedFunctionOptionalParams): Promise<void>;
    /**
     * Gets the SQL trigger under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param triggerName Cosmos DB trigger name.
     * @param options The options parameters.
     */
    getSqlTrigger(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, options?: SqlResourcesGetSqlTriggerOptionalParams): Promise<SqlResourcesGetSqlTriggerResponse>;
    /**
     * Create or update an Azure Cosmos DB SQL trigger
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param triggerName Cosmos DB trigger name.
     * @param createUpdateSqlTriggerParameters The parameters to provide for the current SQL trigger.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlTrigger(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, createUpdateSqlTriggerParameters: SqlTriggerCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlTriggerOptionalParams): Promise<PollerLike<PollOperationState<SqlResourcesCreateUpdateSqlTriggerResponse>, SqlResourcesCreateUpdateSqlTriggerResponse>>;
    /**
     * Create or update an Azure Cosmos DB SQL trigger
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param triggerName Cosmos DB trigger name.
     * @param createUpdateSqlTriggerParameters The parameters to provide for the current SQL trigger.
     * @param options The options parameters.
     */
    beginCreateUpdateSqlTriggerAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, createUpdateSqlTriggerParameters: SqlTriggerCreateUpdateParameters, options?: SqlResourcesCreateUpdateSqlTriggerOptionalParams): Promise<SqlResourcesCreateUpdateSqlTriggerResponse>;
    /**
     * Deletes an existing Azure Cosmos DB SQL trigger.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param triggerName Cosmos DB trigger name.
     * @param options The options parameters.
     */
    beginDeleteSqlTrigger(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, options?: SqlResourcesDeleteSqlTriggerOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB SQL trigger.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param databaseName Cosmos DB database name.
     * @param containerName Cosmos DB container name.
     * @param triggerName Cosmos DB trigger name.
     * @param options The options parameters.
     */
    beginDeleteSqlTriggerAndWait(resourceGroupName: string, accountName: string, databaseName: string, containerName: string, triggerName: string, options?: SqlResourcesDeleteSqlTriggerOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface SqlResourcesCreateUpdateSqlContainerOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateSqlContainer operation. */
export declare type SqlResourcesCreateUpdateSqlContainerResponse = SqlContainerGetResults;

/** Optional parameters. */
export declare interface SqlResourcesCreateUpdateSqlDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateSqlDatabase operation. */
export declare type SqlResourcesCreateUpdateSqlDatabaseResponse = SqlDatabaseGetResults;

/** Optional parameters. */
export declare interface SqlResourcesCreateUpdateSqlStoredProcedureOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateSqlStoredProcedure operation. */
export declare type SqlResourcesCreateUpdateSqlStoredProcedureResponse = SqlStoredProcedureGetResults;

/** Optional parameters. */
export declare interface SqlResourcesCreateUpdateSqlTriggerOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateSqlTrigger operation. */
export declare type SqlResourcesCreateUpdateSqlTriggerResponse = SqlTriggerGetResults;

/** Optional parameters. */
export declare interface SqlResourcesCreateUpdateSqlUserDefinedFunctionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateSqlUserDefinedFunction operation. */
export declare type SqlResourcesCreateUpdateSqlUserDefinedFunctionResponse = SqlUserDefinedFunctionGetResults;

/** Optional parameters. */
export declare interface SqlResourcesDeleteSqlContainerOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SqlResourcesDeleteSqlDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SqlResourcesDeleteSqlStoredProcedureOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SqlResourcesDeleteSqlTriggerOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SqlResourcesDeleteSqlUserDefinedFunctionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SqlResourcesGetSqlContainerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlContainer operation. */
export declare type SqlResourcesGetSqlContainerResponse = SqlContainerGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlContainerThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlContainerThroughput operation. */
export declare type SqlResourcesGetSqlContainerThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlDatabase operation. */
export declare type SqlResourcesGetSqlDatabaseResponse = SqlDatabaseGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlDatabaseThroughput operation. */
export declare type SqlResourcesGetSqlDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlStoredProcedureOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlStoredProcedure operation. */
export declare type SqlResourcesGetSqlStoredProcedureResponse = SqlStoredProcedureGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlTriggerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlTrigger operation. */
export declare type SqlResourcesGetSqlTriggerResponse = SqlTriggerGetResults;

/** Optional parameters. */
export declare interface SqlResourcesGetSqlUserDefinedFunctionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSqlUserDefinedFunction operation. */
export declare type SqlResourcesGetSqlUserDefinedFunctionResponse = SqlUserDefinedFunctionGetResults;

/** Optional parameters. */
export declare interface SqlResourcesListSqlContainersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSqlContainers operation. */
export declare type SqlResourcesListSqlContainersResponse = SqlContainerListResult;

/** Optional parameters. */
export declare interface SqlResourcesListSqlDatabasesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSqlDatabases operation. */
export declare type SqlResourcesListSqlDatabasesResponse = SqlDatabaseListResult;

/** Optional parameters. */
export declare interface SqlResourcesListSqlStoredProceduresOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSqlStoredProcedures operation. */
export declare type SqlResourcesListSqlStoredProceduresResponse = SqlStoredProcedureListResult;

/** Optional parameters. */
export declare interface SqlResourcesListSqlTriggersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSqlTriggers operation. */
export declare type SqlResourcesListSqlTriggersResponse = SqlTriggerListResult;

/** Optional parameters. */
export declare interface SqlResourcesListSqlUserDefinedFunctionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSqlUserDefinedFunctions operation. */
export declare type SqlResourcesListSqlUserDefinedFunctionsResponse = SqlUserDefinedFunctionListResult;

/** Optional parameters. */
export declare interface SqlResourcesUpdateSqlContainerThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateSqlContainerThroughput operation. */
export declare type SqlResourcesUpdateSqlContainerThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface SqlResourcesUpdateSqlDatabaseThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateSqlDatabaseThroughput operation. */
export declare type SqlResourcesUpdateSqlDatabaseThroughputResponse = ThroughputSettingsGetResults;

/** Parameters to create and update Cosmos DB storedProcedure. */
export declare type SqlStoredProcedureCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a storedProcedure */
    resource: SqlStoredProcedureResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type SqlStoredProcedureGetPropertiesResource = SqlStoredProcedureResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB storedProcedure. */
export declare type SqlStoredProcedureGetResults = ARMResourceProperties & {
    resource?: SqlStoredProcedureGetPropertiesResource;
};

/** The List operation response, that contains the storedProcedures and their properties. */
export declare interface SqlStoredProcedureListResult {
    /**
     * List of storedProcedures and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SqlStoredProcedureGetResults[];
}

/** Cosmos DB SQL storedProcedure resource object */
export declare interface SqlStoredProcedureResource {
    /** Name of the Cosmos DB SQL storedProcedure */
    id: string;
    /** Body of the Stored Procedure */
    body?: string;
}

/** Parameters to create and update Cosmos DB trigger. */
export declare type SqlTriggerCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a trigger */
    resource: SqlTriggerResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type SqlTriggerGetPropertiesResource = SqlTriggerResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB trigger. */
export declare type SqlTriggerGetResults = ARMResourceProperties & {
    resource?: SqlTriggerGetPropertiesResource;
};

/** The List operation response, that contains the triggers and their properties. */
export declare interface SqlTriggerListResult {
    /**
     * List of triggers and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SqlTriggerGetResults[];
}

/** Cosmos DB SQL trigger resource object */
export declare interface SqlTriggerResource {
    /** Name of the Cosmos DB SQL trigger */
    id: string;
    /** Body of the Trigger */
    body?: string;
    /** Type of the Trigger */
    triggerType?: TriggerType;
    /** The operation the trigger is associated with */
    triggerOperation?: TriggerOperation;
}

/** Parameters to create and update Cosmos DB userDefinedFunction. */
export declare type SqlUserDefinedFunctionCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a userDefinedFunction */
    resource: SqlUserDefinedFunctionResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type SqlUserDefinedFunctionGetPropertiesResource = SqlUserDefinedFunctionResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB userDefinedFunction. */
export declare type SqlUserDefinedFunctionGetResults = ARMResourceProperties & {
    resource?: SqlUserDefinedFunctionGetPropertiesResource;
};

/** The List operation response, that contains the userDefinedFunctions and their properties. */
export declare interface SqlUserDefinedFunctionListResult {
    /**
     * List of userDefinedFunctions and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SqlUserDefinedFunctionGetResults[];
}

/** Cosmos DB SQL userDefinedFunction resource object */
export declare interface SqlUserDefinedFunctionResource {
    /** Name of the Cosmos DB SQL userDefinedFunction */
    id: string;
    /** Body of the User Defined Function */
    body?: string;
}

/** Parameters to create and update Cosmos DB Table. */
export declare type TableCreateUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a Table */
    resource: TableResource;
    /** A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request. */
    options: CreateUpdateOptions;
};

export declare type TableGetPropertiesOptions = OptionsResource & {};

export declare type TableGetPropertiesResource = TableResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB Table. */
export declare type TableGetResults = ARMResourceProperties & {
    resource?: TableGetPropertiesResource;
    options?: TableGetPropertiesOptions;
};

/** The List operation response, that contains the Table and their properties. */
export declare interface TableListResult {
    /**
     * List of Table and their properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: TableGetResults[];
}

/** Cosmos DB table resource object */
export declare interface TableResource {
    /** Name of the Cosmos DB table */
    id: string;
}

/** Interface representing a TableResources. */
export declare interface TableResources {
    /**
     * Lists the Tables under an existing Azure Cosmos DB database account.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param options The options parameters.
     */
    listTables(resourceGroupName: string, accountName: string, options?: TableResourcesListTablesOptionalParams): PagedAsyncIterableIterator<TableGetResults>;
    /**
     * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    getTable(resourceGroupName: string, accountName: string, tableName: string, options?: TableResourcesGetTableOptionalParams): Promise<TableResourcesGetTableResponse>;
    /**
     * Create or update an Azure Cosmos DB Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param createUpdateTableParameters The parameters to provide for the current Table.
     * @param options The options parameters.
     */
    beginCreateUpdateTable(resourceGroupName: string, accountName: string, tableName: string, createUpdateTableParameters: TableCreateUpdateParameters, options?: TableResourcesCreateUpdateTableOptionalParams): Promise<PollerLike<PollOperationState<TableResourcesCreateUpdateTableResponse>, TableResourcesCreateUpdateTableResponse>>;
    /**
     * Create or update an Azure Cosmos DB Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param createUpdateTableParameters The parameters to provide for the current Table.
     * @param options The options parameters.
     */
    beginCreateUpdateTableAndWait(resourceGroupName: string, accountName: string, tableName: string, createUpdateTableParameters: TableCreateUpdateParameters, options?: TableResourcesCreateUpdateTableOptionalParams): Promise<TableResourcesCreateUpdateTableResponse>;
    /**
     * Deletes an existing Azure Cosmos DB Table.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    beginDeleteTable(resourceGroupName: string, accountName: string, tableName: string, options?: TableResourcesDeleteTableOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an existing Azure Cosmos DB Table.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    beginDeleteTableAndWait(resourceGroupName: string, accountName: string, tableName: string, options?: TableResourcesDeleteTableOptionalParams): Promise<void>;
    /**
     * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
     * provided name.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param options The options parameters.
     */
    getTableThroughput(resourceGroupName: string, accountName: string, tableName: string, options?: TableResourcesGetTableThroughputOptionalParams): Promise<TableResourcesGetTableThroughputResponse>;
    /**
     * Update RUs per second of an Azure Cosmos DB Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   Table.
     * @param options The options parameters.
     */
    beginUpdateTableThroughput(resourceGroupName: string, accountName: string, tableName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: TableResourcesUpdateTableThroughputOptionalParams): Promise<PollerLike<PollOperationState<TableResourcesUpdateTableThroughputResponse>, TableResourcesUpdateTableThroughputResponse>>;
    /**
     * Update RUs per second of an Azure Cosmos DB Table
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param accountName Cosmos DB database account name.
     * @param tableName Cosmos DB table name.
     * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
     *                                   Table.
     * @param options The options parameters.
     */
    beginUpdateTableThroughputAndWait(resourceGroupName: string, accountName: string, tableName: string, updateThroughputParameters: ThroughputSettingsUpdateParameters, options?: TableResourcesUpdateTableThroughputOptionalParams): Promise<TableResourcesUpdateTableThroughputResponse>;
}

/** Optional parameters. */
export declare interface TableResourcesCreateUpdateTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createUpdateTable operation. */
export declare type TableResourcesCreateUpdateTableResponse = TableGetResults;

/** Optional parameters. */
export declare interface TableResourcesDeleteTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface TableResourcesGetTableOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTable operation. */
export declare type TableResourcesGetTableResponse = TableGetResults;

/** Optional parameters. */
export declare interface TableResourcesGetTableThroughputOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTableThroughput operation. */
export declare type TableResourcesGetTableThroughputResponse = ThroughputSettingsGetResults;

/** Optional parameters. */
export declare interface TableResourcesListTablesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listTables operation. */
export declare type TableResourcesListTablesResponse = TableListResult;

/** Optional parameters. */
export declare interface TableResourcesUpdateTableThroughputOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateTableThroughput operation. */
export declare type TableResourcesUpdateTableThroughputResponse = ThroughputSettingsGetResults;

/** Cosmos DB resource throughput policy */
export declare interface ThroughputPolicyResource {
    /** Determines whether the ThroughputPolicy is active or not */
    isEnabled?: boolean;
    /** Represents the percentage by which throughput can increase every time throughput policy kicks in. */
    incrementPercent?: number;
}

export declare type ThroughputSettingsGetPropertiesResource = ThroughputSettingsResource & ExtendedResourceProperties & {};

/** An Azure Cosmos DB resource throughput. */
export declare type ThroughputSettingsGetResults = ARMResourceProperties & {
    resource?: ThroughputSettingsGetPropertiesResource;
};

/** Cosmos DB resource throughput object. Either throughput is required or provisionedThroughputSettings is required, but not both. */
export declare interface ThroughputSettingsResource {
    /** Value of the Cosmos DB resource throughput. Either throughput is required or provisionedThroughputSettings is required, but not both. */
    throughput?: number;
    /** Cosmos DB resource for provisioned throughput settings. Either throughput is required or provisionedThroughputSettings is required, but not both. */
    provisionedThroughputSettings?: ProvisionedThroughputSettingsResource;
    /**
     * The minimum throughput of the resource
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minimumThroughput?: string;
    /**
     * The throughput replace is pending
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly offerReplacePending?: string;
}

/** Parameters to update Cosmos DB resource throughput. */
export declare type ThroughputSettingsUpdateParameters = ARMResourceProperties & {
    /** The standard JSON format of a resource throughput */
    resource: ThroughputSettingsResource;
};

/**
 * Defines values for TriggerOperation. \
 * {@link KnownTriggerOperation} can be used interchangeably with TriggerOperation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **All** \
 * **Create** \
 * **Update** \
 * **Delete** \
 * **Replace**
 */
export declare type TriggerOperation = string;

/**
 * Defines values for TriggerType. \
 * {@link KnownTriggerType} can be used interchangeably with TriggerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pre** \
 * **Post**
 */
export declare type TriggerType = string;

/** The unique key on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. */
export declare interface UniqueKey {
    /** List of paths must be unique for each document in the Azure Cosmos DB service */
    paths?: string[];
}

/** The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service. */
export declare interface UniqueKeyPolicy {
    /** List of unique keys on that enforces uniqueness constraint on documents in the collection in the Azure Cosmos DB service. */
    uniqueKeys?: UniqueKey[];
}

/**
 * Defines values for UnitType. \
 * {@link KnownUnitType} can be used interchangeably with UnitType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Count** \
 * **Bytes** \
 * **Seconds** \
 * **Percent** \
 * **CountPerSecond** \
 * **BytesPerSecond** \
 * **Milliseconds**
 */
export declare type UnitType = string;

/** The usage data for a usage request. */
export declare interface Usage {
    /**
     * The unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UnitType;
    /**
     * The name information for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: MetricName;
    /**
     * The quota period used to summarize the usage values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly quotaPeriod?: string;
    /**
     * Maximum value for this metric
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Current value for this metric
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
}

/** The response to a list usage request. */
export declare interface UsagesResult {
    /**
     * The list of usages for the database. A usage is a point in time metric
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Usage[];
}

/** Virtual Network ACL Rule object */
export declare interface VirtualNetworkRule {
    /** Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}. */
    id?: string;
    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    ignoreMissingVNetServiceEndpoint?: boolean;
}

export { }
