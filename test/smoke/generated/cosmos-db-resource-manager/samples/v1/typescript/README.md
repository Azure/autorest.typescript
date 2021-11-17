# A generated TypeScript SDK samples for @msinternal/cosmos-db-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/cosmos-db-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [cosmosDBDatabaseAccountGet.ts][cosmosDBDatabaseAccountGet] | Retrieves the properties of an existing Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountPatch.ts][cosmosDBDatabaseAccountPatch] | Updates the properties of an existing Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountCreateMax.ts][cosmosDBDatabaseAccountCreateMax] | Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account. |  
| [cosmosDBDatabaseAccountCreateMin.ts][cosmosDBDatabaseAccountCreateMin] | Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account. |  
| [cosmosDBDatabaseAccountDelete.ts][cosmosDBDatabaseAccountDelete] | Deletes an existing Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountFailoverPriorityChange.ts][cosmosDBDatabaseAccountFailoverPriorityChange] | Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. |  
| [cosmosDBDatabaseAccountList.ts][cosmosDBDatabaseAccountList] | Lists all the Azure Cosmos DB database accounts available under the subscription. |  
| [cosmosDBDatabaseAccountListByResourceGroup.ts][cosmosDBDatabaseAccountListByResourceGroup] | Lists all the Azure Cosmos DB database accounts available under the given resource group. |  
| [cosmosDBDatabaseAccountListKeys.ts][cosmosDBDatabaseAccountListKeys] | Lists the access keys for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountListConnectionStrings.ts][cosmosDBDatabaseAccountListConnectionStrings] | Lists the connection strings for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountListConnectionStringsMongo.ts][cosmosDBDatabaseAccountListConnectionStringsMongo] | Lists the connection strings for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountOfflineRegion.ts][cosmosDBDatabaseAccountOfflineRegion] | Offline the specified region for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountOnlineRegion.ts][cosmosDBDatabaseAccountOnlineRegion] | Online the specified region for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountListReadOnlyKeys.ts][cosmosDBDatabaseAccountListReadOnlyKeys] | Lists the read-only access keys for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountListReadOnlyKeys.ts][cosmosDBDatabaseAccountListReadOnlyKeys] | Lists the read-only access keys for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountRegenerateKey.ts][cosmosDBDatabaseAccountRegenerateKey] | Regenerates an access key for the specified Azure Cosmos DB database account. |  
| [cosmosDBDatabaseAccountCheckNameExists.ts][cosmosDBDatabaseAccountCheckNameExists] | Checks that the Azure Cosmos DB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters. |  
| [cosmosDBDatabaseAccountGetMetrics.ts][cosmosDBDatabaseAccountGetMetrics] | Retrieves the metrics determined by the given filter for the given database account. |  
| [cosmosDBDatabaseAccountGetUsages.ts][cosmosDBDatabaseAccountGetUsages] | Retrieves the usages (most recent data) for the given database account. |  
| [cosmosDBDatabaseAccountGetMetricDefinitions.ts][cosmosDBDatabaseAccountGetMetricDefinitions] | Retrieves metric definitions for the given database account. |  
| [cosmosDBOperationsList.ts][cosmosDBOperationsList] | Lists all of the available Cosmos DB Resource Provider operations. |  
| [cosmosDBDatabaseGetMetrics.ts][cosmosDBDatabaseGetMetrics] | Retrieves the metrics determined by the given filter for the given database account and database. |  
| [cosmosDBDatabaseGetUsages.ts][cosmosDBDatabaseGetUsages] | Retrieves the usages (most recent data) for the given database. |  
| [cosmosDBDatabaseGetMetricDefinitions.ts][cosmosDBDatabaseGetMetricDefinitions] | Retrieves metric definitions for the given database. |  
| [cosmosDBCollectionGetMetrics.ts][cosmosDBCollectionGetMetrics] | Retrieves the metrics determined by the given filter for the given database account and collection. |  
| [cosmosDBCollectionGetUsages.ts][cosmosDBCollectionGetUsages] | Retrieves the usages (most recent storage data) for the given collection. |  
| [cosmosDBCollectionGetMetricDefinitions.ts][cosmosDBCollectionGetMetricDefinitions] | Retrieves metric definitions for the given collection. |  
| [cosmosDBRegionCollectionGetMetrics.ts][cosmosDBRegionCollectionGetMetrics] | Retrieves the metrics determined by the given filter for the given database account, collection and region. |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given database account and region. |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given account target region. This url is only for PBS and Replication Latency data |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given database account. This url is only for PBS and Replication Latency data |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given collection and region, split by partition. |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given collection, split by partition. |  
| [cosmosDBCollectionGetUsages.ts][cosmosDBCollectionGetUsages] | Retrieves the usages (most recent storage data) for the given collection, split by partition. |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given partition key range id. |  
| [cosmosDBDatabaseAccountRegionGetMetrics.ts][cosmosDBDatabaseAccountRegionGetMetrics] | Retrieves the metrics determined by the given filter for the given partition key range id and region. |  
| [cosmosDBSqlDatabaseList.ts][cosmosDBSqlDatabaseList] | Lists the SQL databases under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlDatabaseGet.ts][cosmosDBSqlDatabaseGet] | Gets the SQL database under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBSqlDatabaseCreateUpdate.ts][cosmosDBSqlDatabaseCreateUpdate] | Create or update an Azure Cosmos DB SQL database |  
| [cosmosDBSqlDatabaseDelete.ts][cosmosDBSqlDatabaseDelete] | Deletes an existing Azure Cosmos DB SQL database. |  
| [cosmosDBSqlDatabaseThroughputGet.ts][cosmosDBSqlDatabaseThroughputGet] | Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBSqlDatabaseThroughputUpdate.ts][cosmosDBSqlDatabaseThroughputUpdate] | Update RUs per second of an Azure Cosmos DB SQL database |  
| [cosmosDBSqlContainerList.ts][cosmosDBSqlContainerList] | Lists the SQL container under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlContainerGet.ts][cosmosDBSqlContainerGet] | Gets the SQL container under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlContainerCreateUpdate.ts][cosmosDBSqlContainerCreateUpdate] | Create or update an Azure Cosmos DB SQL container |  
| [cosmosDBSqlContainerDelete.ts][cosmosDBSqlContainerDelete] | Deletes an existing Azure Cosmos DB SQL container. |  
| [cosmosDBSqlContainerThroughputGet.ts][cosmosDBSqlContainerThroughputGet] | Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlContainerThroughputUpdate.ts][cosmosDBSqlContainerThroughputUpdate] | Update RUs per second of an Azure Cosmos DB SQL container |  
| [cosmosDBSqlStoredProcedureList.ts][cosmosDBSqlStoredProcedureList] | Lists the SQL storedProcedure under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlStoredProcedureGet.ts][cosmosDBSqlStoredProcedureGet] | Gets the SQL storedProcedure under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlStoredProcedureCreateUpdate.ts][cosmosDBSqlStoredProcedureCreateUpdate] | Create or update an Azure Cosmos DB SQL storedProcedure |  
| [cosmosDBSqlStoredProcedureDelete.ts][cosmosDBSqlStoredProcedureDelete] | Deletes an existing Azure Cosmos DB SQL storedProcedure. |  
| [cosmosDBSqlUserDefinedFunctionList.ts][cosmosDBSqlUserDefinedFunctionList] | Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlUserDefinedFunctionGet.ts][cosmosDBSqlUserDefinedFunctionGet] | Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlUserDefinedFunctionCreateUpdate.ts][cosmosDBSqlUserDefinedFunctionCreateUpdate] | Create or update an Azure Cosmos DB SQL userDefinedFunction |  
| [cosmosDBSqlUserDefinedFunctionDelete.ts][cosmosDBSqlUserDefinedFunctionDelete] | Deletes an existing Azure Cosmos DB SQL userDefinedFunction. |  
| [cosmosDBSqlTriggerList.ts][cosmosDBSqlTriggerList] | Lists the SQL trigger under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlTriggerGet.ts][cosmosDBSqlTriggerGet] | Gets the SQL trigger under an existing Azure Cosmos DB database account. |  
| [cosmosDBSqlTriggerCreateUpdate.ts][cosmosDBSqlTriggerCreateUpdate] | Create or update an Azure Cosmos DB SQL trigger |  
| [cosmosDBSqlTriggerDelete.ts][cosmosDBSqlTriggerDelete] | Deletes an existing Azure Cosmos DB SQL trigger. |  
| [cosmosDBMongoDBDatabaseList.ts][cosmosDBMongoDBDatabaseList] | Lists the MongoDB databases under an existing Azure Cosmos DB database account. |  
| [cosmosDBMongoDBDatabaseGet.ts][cosmosDBMongoDBDatabaseGet] | Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBMongoDBDatabaseCreateUpdate.ts][cosmosDBMongoDBDatabaseCreateUpdate] | Create or updates Azure Cosmos DB MongoDB database |  
| [cosmosDBMongoDBDatabaseDelete.ts][cosmosDBMongoDBDatabaseDelete] | Deletes an existing Azure Cosmos DB MongoDB database. |  
| [cosmosDBMongoDBDatabaseThroughputGet.ts][cosmosDBMongoDBDatabaseThroughputGet] | Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBMongoDBDatabaseThroughputUpdate.ts][cosmosDBMongoDBDatabaseThroughputUpdate] | Update RUs per second of the an Azure Cosmos DB MongoDB database |  
| [cosmosDBMongoDBCollectionList.ts][cosmosDBMongoDBCollectionList] | Lists the MongoDB collection under an existing Azure Cosmos DB database account. |  
| [cosmosDBMongoDBCollectionGet.ts][cosmosDBMongoDBCollectionGet] | Gets the MongoDB collection under an existing Azure Cosmos DB database account. |  
| [cosmosDBMongoDBCollectionCreateUpdate.ts][cosmosDBMongoDBCollectionCreateUpdate] | Create or update an Azure Cosmos DB MongoDB Collection |  
| [cosmosDBMongoDBCollectionDelete.ts][cosmosDBMongoDBCollectionDelete] | Deletes an existing Azure Cosmos DB MongoDB Collection. |  
| [cosmosDBMongoDBCollectionThroughputGet.ts][cosmosDBMongoDBCollectionThroughputGet] | Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBMongoDBCollectionThroughputUpdate.ts][cosmosDBMongoDBCollectionThroughputUpdate] | Update the RUs per second of an Azure Cosmos DB MongoDB collection |  
| [cosmosDBTableList.ts][cosmosDBTableList] | Lists the Tables under an existing Azure Cosmos DB database account. |  
| [cosmosDBTableGet.ts][cosmosDBTableGet] | Gets the Tables under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBTableReplace.ts][cosmosDBTableReplace] | Create or update an Azure Cosmos DB Table |  
| [cosmosDBTableDelete.ts][cosmosDBTableDelete] | Deletes an existing Azure Cosmos DB Table. |  
| [cosmosDBTableThroughputGet.ts][cosmosDBTableThroughputGet] | Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBTableThroughputUpdate.ts][cosmosDBTableThroughputUpdate] | Update RUs per second of an Azure Cosmos DB Table |  
| [cosmosDBCassandraKeyspaceList.ts][cosmosDBCassandraKeyspaceList] | Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account. |  
| [cosmosDBCassandraKeyspaceGet.ts][cosmosDBCassandraKeyspaceGet] | Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBCassandraKeyspaceCreateUpdate.ts][cosmosDBCassandraKeyspaceCreateUpdate] | Create or update an Azure Cosmos DB Cassandra keyspace |  
| [cosmosDBCassandraKeyspaceDelete.ts][cosmosDBCassandraKeyspaceDelete] | Deletes an existing Azure Cosmos DB Cassandra keyspace. |  
| [cosmosDBCassandraKeyspaceThroughputGet.ts][cosmosDBCassandraKeyspaceThroughputGet] | Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBCassandraKeyspaceThroughputUpdate.ts][cosmosDBCassandraKeyspaceThroughputUpdate] | Update RUs per second of an Azure Cosmos DB Cassandra Keyspace |  
| [cosmosDBCassandraTableList.ts][cosmosDBCassandraTableList] | Lists the Cassandra table under an existing Azure Cosmos DB database account. |  
| [cosmosDBCassandraTableGet.ts][cosmosDBCassandraTableGet] | Gets the Cassandra table under an existing Azure Cosmos DB database account. |  
| [cosmosDBCassandraTableCreateUpdate.ts][cosmosDBCassandraTableCreateUpdate] | Create or update an Azure Cosmos DB Cassandra Table |  
| [cosmosDBCassandraTableDelete.ts][cosmosDBCassandraTableDelete] | Deletes an existing Azure Cosmos DB Cassandra table. |  
| [cosmosDBCassandraTableThroughputGet.ts][cosmosDBCassandraTableThroughputGet] | Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBCassandraTableThroughputUpdate.ts][cosmosDBCassandraTableThroughputUpdate] | Update RUs per second of an Azure Cosmos DB Cassandra table |  
| [cosmosDBGremlinDatabaseList.ts][cosmosDBGremlinDatabaseList] | Lists the Gremlin databases under an existing Azure Cosmos DB database account. |  
| [cosmosDBGremlinDatabaseGet.ts][cosmosDBGremlinDatabaseGet] | Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBGremlinDatabaseCreateUpdate.ts][cosmosDBGremlinDatabaseCreateUpdate] | Create or update an Azure Cosmos DB Gremlin database |  
| [cosmosDBGremlinDatabaseDelete.ts][cosmosDBGremlinDatabaseDelete] | Deletes an existing Azure Cosmos DB Gremlin database. |  
| [cosmosDBGremlinDatabaseThroughputGet.ts][cosmosDBGremlinDatabaseThroughputGet] | Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBGremlinDatabaseThroughputUpdate.ts][cosmosDBGremlinDatabaseThroughputUpdate] | Update RUs per second of an Azure Cosmos DB Gremlin database |  
| [cosmosDBGremlinGraphList.ts][cosmosDBGremlinGraphList] | Lists the Gremlin graph under an existing Azure Cosmos DB database account. |  
| [cosmosDBGremlinGraphGet.ts][cosmosDBGremlinGraphGet] | Gets the Gremlin graph under an existing Azure Cosmos DB database account. |  
| [cosmosDBGremlinGraphCreateUpdate.ts][cosmosDBGremlinGraphCreateUpdate] | Create or update an Azure Cosmos DB Gremlin graph |  
| [cosmosDBGremlinGraphDelete.ts][cosmosDBGremlinGraphDelete] | Deletes an existing Azure Cosmos DB Gremlin graph. |  
| [cosmosDBGremlinGraphThroughputGet.ts][cosmosDBGremlinGraphThroughputGet] | Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name. |  
| [cosmosDBGremlinGraphThroughputUpdate.ts][cosmosDBGremlinGraphThroughputUpdate] | Update RUs per second of an Azure Cosmos DB Gremlin graph |  
| [cosmosDBNotebookWorkspaceList.ts][cosmosDBNotebookWorkspaceList] | Gets the notebook workspace resources of an existing Cosmos DB account. |  
| [cosmosDBNotebookWorkspaceGet.ts][cosmosDBNotebookWorkspaceGet] | Gets the notebook workspace for a Cosmos DB account. |  
| [cosmosDBNotebookWorkspaceCreate.ts][cosmosDBNotebookWorkspaceCreate] | Creates the notebook workspace for a Cosmos DB account. |  
| [cosmosDBNotebookWorkspaceDelete.ts][cosmosDBNotebookWorkspaceDelete] | Deletes the notebook workspace for a Cosmos DB account. |  
| [cosmosDBNotebookWorkspaceListConnectionInfo.ts][cosmosDBNotebookWorkspaceListConnectionInfo] | Retrieves the connection info for the notebook workspace |  
| [cosmosDBNotebookWorkspaceRegenerateAuthToken.ts][cosmosDBNotebookWorkspaceRegenerateAuthToken] | Regenerates the auth token for the notebook workspace |  
| [cosmosDBNotebookWorkspaceStart.ts][cosmosDBNotebookWorkspaceStart] | Starts the notebook workspace |  
| [getsPrivateEndpointConnection.ts][getsPrivateEndpointConnection] | Gets the private link resources that need to be created for a Cosmos DB account. |  
| [getsPrivateEndpointConnection.ts][getsPrivateEndpointConnection] | Gets the private link resources that need to be created for a Cosmos DB account. |  
| [getsPrivateEndpointConnection.ts][getsPrivateEndpointConnection] | List all private endpoint connections on a Cosmos DB account. |  
| [getsPrivateEndpointConnection.ts][getsPrivateEndpointConnection] | Gets a private endpoint connection. |  
| [approveOrRejectAPrivateEndpointConnectionWithAGivenName.ts][approveOrRejectAPrivateEndpointConnectionWithAGivenName] | Approve or reject a private endpoint connection with a given name. |  
| [deletesAPrivateEndpointConnectionWithAGivenName.ts][deletesAPrivateEndpointConnectionWithAGivenName] | Deletes a private endpoint connection with a given name. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/cosmosDBDatabaseAccountGet.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[cosmosDBDatabaseAccountGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountGet.ts  
[cosmosDBDatabaseAccountPatch]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountPatch.ts  
[cosmosDBDatabaseAccountCreateMax]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountCreateMax.ts  
[cosmosDBDatabaseAccountCreateMin]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountCreateMin.ts  
[cosmosDBDatabaseAccountDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountDelete.ts  
[cosmosDBDatabaseAccountFailoverPriorityChange]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountFailoverPriorityChange.ts  
[cosmosDBDatabaseAccountList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountList.ts  
[cosmosDBDatabaseAccountListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListByResourceGroup.ts  
[cosmosDBDatabaseAccountListKeys]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListKeys.ts  
[cosmosDBDatabaseAccountListConnectionStrings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListConnectionStrings.ts  
[cosmosDBDatabaseAccountListConnectionStringsMongo]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListConnectionStringsMongo.ts  
[cosmosDBDatabaseAccountOfflineRegion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountOfflineRegion.ts  
[cosmosDBDatabaseAccountOnlineRegion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountOnlineRegion.ts  
[cosmosDBDatabaseAccountListReadOnlyKeys]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListReadOnlyKeys.ts  
[cosmosDBDatabaseAccountListReadOnlyKeys]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountListReadOnlyKeys.ts  
[cosmosDBDatabaseAccountRegenerateKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegenerateKey.ts  
[cosmosDBDatabaseAccountCheckNameExists]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountCheckNameExists.ts  
[cosmosDBDatabaseAccountGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountGetMetrics.ts  
[cosmosDBDatabaseAccountGetUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountGetUsages.ts  
[cosmosDBDatabaseAccountGetMetricDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountGetMetricDefinitions.ts  
[cosmosDBOperationsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBOperationsList.ts  
[cosmosDBDatabaseGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseGetMetrics.ts  
[cosmosDBDatabaseGetUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseGetUsages.ts  
[cosmosDBDatabaseGetMetricDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseGetMetricDefinitions.ts  
[cosmosDBCollectionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCollectionGetMetrics.ts  
[cosmosDBCollectionGetUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCollectionGetUsages.ts  
[cosmosDBCollectionGetMetricDefinitions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCollectionGetMetricDefinitions.ts  
[cosmosDBRegionCollectionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBRegionCollectionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBCollectionGetUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCollectionGetUsages.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBDatabaseAccountRegionGetMetrics]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBDatabaseAccountRegionGetMetrics.ts  
[cosmosDBSqlDatabaseList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseList.ts  
[cosmosDBSqlDatabaseGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseGet.ts  
[cosmosDBSqlDatabaseCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseCreateUpdate.ts  
[cosmosDBSqlDatabaseDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseDelete.ts  
[cosmosDBSqlDatabaseThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseThroughputGet.ts  
[cosmosDBSqlDatabaseThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlDatabaseThroughputUpdate.ts  
[cosmosDBSqlContainerList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerList.ts  
[cosmosDBSqlContainerGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerGet.ts  
[cosmosDBSqlContainerCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerCreateUpdate.ts  
[cosmosDBSqlContainerDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerDelete.ts  
[cosmosDBSqlContainerThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerThroughputGet.ts  
[cosmosDBSqlContainerThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlContainerThroughputUpdate.ts  
[cosmosDBSqlStoredProcedureList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlStoredProcedureList.ts  
[cosmosDBSqlStoredProcedureGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlStoredProcedureGet.ts  
[cosmosDBSqlStoredProcedureCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlStoredProcedureCreateUpdate.ts  
[cosmosDBSqlStoredProcedureDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlStoredProcedureDelete.ts  
[cosmosDBSqlUserDefinedFunctionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlUserDefinedFunctionList.ts  
[cosmosDBSqlUserDefinedFunctionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlUserDefinedFunctionGet.ts  
[cosmosDBSqlUserDefinedFunctionCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlUserDefinedFunctionCreateUpdate.ts  
[cosmosDBSqlUserDefinedFunctionDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlUserDefinedFunctionDelete.ts  
[cosmosDBSqlTriggerList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlTriggerList.ts  
[cosmosDBSqlTriggerGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlTriggerGet.ts  
[cosmosDBSqlTriggerCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlTriggerCreateUpdate.ts  
[cosmosDBSqlTriggerDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBSqlTriggerDelete.ts  
[cosmosDBMongoDBDatabaseList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseList.ts  
[cosmosDBMongoDBDatabaseGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseGet.ts  
[cosmosDBMongoDBDatabaseCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseCreateUpdate.ts  
[cosmosDBMongoDBDatabaseDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseDelete.ts  
[cosmosDBMongoDBDatabaseThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseThroughputGet.ts  
[cosmosDBMongoDBDatabaseThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBDatabaseThroughputUpdate.ts  
[cosmosDBMongoDBCollectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionList.ts  
[cosmosDBMongoDBCollectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionGet.ts  
[cosmosDBMongoDBCollectionCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionCreateUpdate.ts  
[cosmosDBMongoDBCollectionDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionDelete.ts  
[cosmosDBMongoDBCollectionThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionThroughputGet.ts  
[cosmosDBMongoDBCollectionThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBMongoDBCollectionThroughputUpdate.ts  
[cosmosDBTableList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableList.ts  
[cosmosDBTableGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableGet.ts  
[cosmosDBTableReplace]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableReplace.ts  
[cosmosDBTableDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableDelete.ts  
[cosmosDBTableThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableThroughputGet.ts  
[cosmosDBTableThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBTableThroughputUpdate.ts  
[cosmosDBCassandraKeyspaceList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceList.ts  
[cosmosDBCassandraKeyspaceGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceGet.ts  
[cosmosDBCassandraKeyspaceCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceCreateUpdate.ts  
[cosmosDBCassandraKeyspaceDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceDelete.ts  
[cosmosDBCassandraKeyspaceThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceThroughputGet.ts  
[cosmosDBCassandraKeyspaceThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraKeyspaceThroughputUpdate.ts  
[cosmosDBCassandraTableList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableList.ts  
[cosmosDBCassandraTableGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableGet.ts  
[cosmosDBCassandraTableCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableCreateUpdate.ts  
[cosmosDBCassandraTableDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableDelete.ts  
[cosmosDBCassandraTableThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableThroughputGet.ts  
[cosmosDBCassandraTableThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBCassandraTableThroughputUpdate.ts  
[cosmosDBGremlinDatabaseList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseList.ts  
[cosmosDBGremlinDatabaseGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseGet.ts  
[cosmosDBGremlinDatabaseCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseCreateUpdate.ts  
[cosmosDBGremlinDatabaseDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseDelete.ts  
[cosmosDBGremlinDatabaseThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseThroughputGet.ts  
[cosmosDBGremlinDatabaseThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinDatabaseThroughputUpdate.ts  
[cosmosDBGremlinGraphList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphList.ts  
[cosmosDBGremlinGraphGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphGet.ts  
[cosmosDBGremlinGraphCreateUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphCreateUpdate.ts  
[cosmosDBGremlinGraphDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphDelete.ts  
[cosmosDBGremlinGraphThroughputGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphThroughputGet.ts  
[cosmosDBGremlinGraphThroughputUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBGremlinGraphThroughputUpdate.ts  
[cosmosDBNotebookWorkspaceList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceList.ts  
[cosmosDBNotebookWorkspaceGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceGet.ts  
[cosmosDBNotebookWorkspaceCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceCreate.ts  
[cosmosDBNotebookWorkspaceDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceDelete.ts  
[cosmosDBNotebookWorkspaceListConnectionInfo]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceListConnectionInfo.ts  
[cosmosDBNotebookWorkspaceRegenerateAuthToken]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceRegenerateAuthToken.ts  
[cosmosDBNotebookWorkspaceStart]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/cosmosDBNotebookWorkspaceStart.ts  
[getsPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateEndpointConnection.ts  
[getsPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateEndpointConnection.ts  
[getsPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateEndpointConnection.ts  
[getsPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsPrivateEndpointConnection.ts  
[approveOrRejectAPrivateEndpointConnectionWithAGivenName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/approveOrRejectAPrivateEndpointConnectionWithAGivenName.ts  
[deletesAPrivateEndpointConnectionWithAGivenName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesAPrivateEndpointConnectionWithAGivenName.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/cosmos-db-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
