// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../../../../../static-helpers/serialization/serialize-record.js";

/**
 * Response from a get service statistics request. If successful, it includes
 * service level counters and limits.
 */
export interface SearchServiceStatistics {
  /** Service level resource counters. */
  counters: SearchServiceCounters;
  /** Service level general limits. */
  limits: SearchServiceLimits;
}

export function searchServiceStatisticsDeserializer(
  item: any,
): SearchServiceStatistics {
  return {
    counters: searchServiceCountersDeserializer(item["counters"]),
    limits: searchServiceLimitsDeserializer(item["limits"]),
  };
}

/** Represents service-level resource counters and quotas. */
export interface SearchServiceCounters {
  /** Total number of aliases. */
  aliasCounter: ResourceCounter;
  /** Total number of documents across all indexes in the service. */
  documentCounter: ResourceCounter;
  /** Total number of indexes. */
  indexCounter: ResourceCounter;
  /** Total number of indexers. */
  indexerCounter: ResourceCounter;
  /** Total number of data sources. */
  dataSourceCounter: ResourceCounter;
  /** Total size of used storage in bytes. */
  storageSizeCounter: ResourceCounter;
  /** Total number of synonym maps. */
  synonymMapCounter: ResourceCounter;
  /** Total number of skillsets. */
  skillsetCounter: ResourceCounter;
  /** Total memory consumption of all vector indexes within the service, in bytes. */
  vectorIndexSizeCounter: ResourceCounter;
}

export function searchServiceCountersDeserializer(
  item: any,
): SearchServiceCounters {
  return {
    aliasCounter: resourceCounterDeserializer(item["aliasesCount"]),
    documentCounter: resourceCounterDeserializer(item["documentCount"]),
    indexCounter: resourceCounterDeserializer(item["indexesCount"]),
    indexerCounter: resourceCounterDeserializer(item["indexersCount"]),
    dataSourceCounter: resourceCounterDeserializer(item["dataSourcesCount"]),
    storageSizeCounter: resourceCounterDeserializer(item["storageSize"]),
    synonymMapCounter: resourceCounterDeserializer(item["synonymMaps"]),
    skillsetCounter: resourceCounterDeserializer(item["skillsetCount"]),
    vectorIndexSizeCounter: resourceCounterDeserializer(
      item["vectorIndexSize"],
    ),
  };
}

/** Represents a resource's usage and quota. */
export interface ResourceCounter {
  /** The resource usage amount. */
  usage: number;
  /** The resource amount quota. */
  quota?: number;
}

export function resourceCounterDeserializer(item: any): ResourceCounter {
  return {
    usage: item["usage"],
    quota: item["quota"],
  };
}

/** Represents various service level limits. */
export interface SearchServiceLimits {
  /** The maximum allowed fields per index. */
  maxFieldsPerIndex?: number;
  /**
   * The maximum depth which you can nest sub-fields in an index, including the
   * top-level complex field. For example, a/b/c has a nesting depth of 3.
   */
  maxFieldNestingDepthPerIndex?: number;
  /**
   * The maximum number of fields of type Collection(Edm.ComplexType) allowed in an
   * index.
   */
  maxComplexCollectionFieldsPerIndex?: number;
  /** The maximum number of objects in complex collections allowed per document. */
  maxComplexObjectsInCollectionsPerDocument?: number;
  /** The maximum amount of storage in bytes allowed per index. */
  maxStoragePerIndexInBytes?: number;
}

export function searchServiceLimitsDeserializer(
  item: any,
): SearchServiceLimits {
  return {
    maxFieldsPerIndex: item["maxFieldsPerIndex"],
    maxFieldNestingDepthPerIndex: item["maxFieldNestingDepthPerIndex"],
    maxComplexCollectionFieldsPerIndex:
      item["maxComplexCollectionFieldsPerIndex"],
    maxComplexObjectsInCollectionsPerDocument:
      item["maxComplexObjectsInCollectionsPerDocument"],
    maxStoragePerIndexInBytes: item["maxStoragePerIndex"],
  };
}

/** Response from a request to retrieve stats summary of all indexes. If successful, it includes the stats of each index in the service. */
export interface _ListIndexStatsSummary {
  /** The Statistics summary of all indexes in the Search service. */
  readonly indexesStatistics: IndexStatisticsSummary[];
}

export function _listIndexStatsSummaryDeserializer(
  item: any,
): _ListIndexStatsSummary {
  return {
    indexesStatistics: indexStatisticsSummaryArrayDeserializer(item["value"]),
  };
}

export function indexStatisticsSummaryArrayDeserializer(
  result: Array<IndexStatisticsSummary>,
): any[] {
  return result.map((item) => {
    return indexStatisticsSummaryDeserializer(item);
  });
}

/** Statistics for a given index. Statistics are collected periodically and are not guaranteed to always be up-to-date. */
export interface IndexStatisticsSummary {
  /** The name of the index. */
  readonly name: string;
  /** The number of documents in the index. */
  readonly documentCount: number;
  /** The amount of storage in bytes consumed by the index. */
  readonly storageSize: number;
  /** The amount of memory in bytes consumed by vectors in the index. */
  readonly vectorIndexSize?: number;
}

export function indexStatisticsSummaryDeserializer(
  item: any,
): IndexStatisticsSummary {
  return {
    name: item["name"],
    documentCount: item["documentCount"],
    storageSize: item["storageSize"],
    vectorIndexSize: item["vectorIndexSize"],
  };
}

/** Represents a datasource definition, which can be used to configure an indexer. */
export interface SearchIndexerDataSource {
  /** The name of the datasource. */
  name: string;
  /** The description of the datasource. */
  description?: string;
  /** The type of the datasource. */
  type: SearchIndexerDataSourceType;
  /** Credentials for the datasource. */
  credentials: DataSourceCredentials;
  /** The data container for the datasource. */
  container: SearchIndexerDataContainer;
  /**
   * An explicit managed identity to use for this datasource. If not specified and
   * the connection string is a managed identity, the system-assigned managed
   * identity is used. If not specified, the value remains unchanged. If "none" is
   * specified, the value of this property is cleared.
   */
  identity?: SearchIndexerDataIdentityUnion;
  /** The data change detection policy for the datasource. */
  dataChangeDetectionPolicy?: DataChangeDetectionPolicyUnion;
  /** The data deletion detection policy for the datasource. */
  dataDeletionDetectionPolicy?: DataDeletionDetectionPolicyUnion;
  /** The ETag of the data source. */
  eTag?: string;
  /**
   * A description of an encryption key that you create in Azure Key Vault. This key
   * is used to provide an additional level of encryption-at-rest for your
   * datasource definition when you want full assurance that no one, not even
   * Microsoft, can decrypt your data source definition. Once you have encrypted
   * your data source definition, it will always remain encrypted. The search
   * service will ignore attempts to set this property to null. You can change this
   * property as needed if you want to rotate your encryption key; Your datasource
   * definition will be unaffected. Encryption with customer-managed keys is not
   * available for free search services, and is only available for paid services
   * created on or after January 1, 2019.
   */
  encryptionKey?: SearchResourceEncryptionKey;
}

export function searchIndexerDataSourceSerializer(
  item: SearchIndexerDataSource,
): any {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    credentials: dataSourceCredentialsSerializer(item["credentials"]),
    container: searchIndexerDataContainerSerializer(item["container"]),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionSerializer(item["identity"]),
    dataChangeDetectionPolicy: !item["dataChangeDetectionPolicy"]
      ? item["dataChangeDetectionPolicy"]
      : dataChangeDetectionPolicyUnionSerializer(
          item["dataChangeDetectionPolicy"],
        ),
    dataDeletionDetectionPolicy: !item["dataDeletionDetectionPolicy"]
      ? item["dataDeletionDetectionPolicy"]
      : dataDeletionDetectionPolicyUnionSerializer(
          item["dataDeletionDetectionPolicy"],
        ),
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeySerializer(item["encryptionKey"]),
  };
}

export function searchIndexerDataSourceDeserializer(
  item: any,
): SearchIndexerDataSource {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    credentials: dataSourceCredentialsDeserializer(item["credentials"]),
    container: searchIndexerDataContainerDeserializer(item["container"]),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionDeserializer(item["identity"]),
    dataChangeDetectionPolicy: !item["dataChangeDetectionPolicy"]
      ? item["dataChangeDetectionPolicy"]
      : dataChangeDetectionPolicyUnionDeserializer(
          item["dataChangeDetectionPolicy"],
        ),
    dataDeletionDetectionPolicy: !item["dataDeletionDetectionPolicy"]
      ? item["dataDeletionDetectionPolicy"]
      : dataDeletionDetectionPolicyUnionDeserializer(
          item["dataDeletionDetectionPolicy"],
        ),
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeyDeserializer(item["encryptionKey"]),
  };
}

/** Defines the type of a datasource. */
export type SearchIndexerDataSourceType =
  | "azuresql"
  | "cosmosdb"
  | "azureblob"
  | "azuretable"
  | "mysql"
  | "adlsgen2"
  | "onelake";

/** Represents credentials that can be used to connect to a datasource. */
export interface DataSourceCredentials {
  /**
   * The connection string for the datasource. Set to `<unchanged>` (with brackets)
   * if you don't want the connection string updated. Set to `<redacted>` if you
   * want to remove the connection string value from the datasource.
   */
  connectionString?: string;
}

export function dataSourceCredentialsSerializer(
  item: DataSourceCredentials,
): any {
  return { connectionString: item["connectionString"] };
}

export function dataSourceCredentialsDeserializer(
  item: any,
): DataSourceCredentials {
  return {
    connectionString: item["connectionString"],
  };
}

/**
 * Represents information about the entity (such as Azure SQL table or CosmosDB
 * collection) that will be indexed.
 */
export interface SearchIndexerDataContainer {
  /**
   * The name of the table or view (for Azure SQL data source) or collection (for
   * CosmosDB data source) that will be indexed.
   */
  name: string;
  /**
   * A query that is applied to this data container. The syntax and meaning of this
   * parameter is datasource-specific. Not supported by Azure SQL datasources.
   */
  query?: string;
}

export function searchIndexerDataContainerSerializer(
  item: SearchIndexerDataContainer,
): any {
  return { name: item["name"], query: item["query"] };
}

export function searchIndexerDataContainerDeserializer(
  item: any,
): SearchIndexerDataContainer {
  return {
    name: item["name"],
    query: item["query"],
  };
}

/** Abstract base type for data identities. */
export interface SearchIndexerDataIdentity {
  /** A URI fragment specifying the type of identity. */
  /** The discriminator possible values: #Microsoft.Azure.Search.DataNoneIdentity, #Microsoft.Azure.Search.DataUserAssignedIdentity */
  odataType: string;
}

export function searchIndexerDataIdentitySerializer(
  item: SearchIndexerDataIdentity,
): any {
  return { "@odata.type": item["odataType"] };
}

export function searchIndexerDataIdentityDeserializer(
  item: any,
): SearchIndexerDataIdentity {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for SearchIndexerDataIdentityUnion */
export type SearchIndexerDataIdentityUnion =
  | SearchIndexerDataNoneIdentity
  | SearchIndexerDataUserAssignedIdentity
  | SearchIndexerDataIdentity;

export function searchIndexerDataIdentityUnionSerializer(
  item: SearchIndexerDataIdentityUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DataNoneIdentity":
      return searchIndexerDataNoneIdentitySerializer(
        item as SearchIndexerDataNoneIdentity,
      );

    case "#Microsoft.Azure.Search.DataUserAssignedIdentity":
      return searchIndexerDataUserAssignedIdentitySerializer(
        item as SearchIndexerDataUserAssignedIdentity,
      );

    default:
      return searchIndexerDataIdentitySerializer(item);
  }
}

export function searchIndexerDataIdentityUnionDeserializer(
  item: any,
): SearchIndexerDataIdentityUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DataNoneIdentity":
      return searchIndexerDataNoneIdentityDeserializer(
        item as SearchIndexerDataNoneIdentity,
      );

    case "#Microsoft.Azure.Search.DataUserAssignedIdentity":
      return searchIndexerDataUserAssignedIdentityDeserializer(
        item as SearchIndexerDataUserAssignedIdentity,
      );

    default:
      return searchIndexerDataIdentityDeserializer(item);
  }
}

/** Clears the identity property of a datasource. */
export interface SearchIndexerDataNoneIdentity
  extends SearchIndexerDataIdentity {
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.DataNoneIdentity";
}

export function searchIndexerDataNoneIdentitySerializer(
  item: SearchIndexerDataNoneIdentity,
): any {
  return { "@odata.type": item["odataType"] };
}

export function searchIndexerDataNoneIdentityDeserializer(
  item: any,
): SearchIndexerDataNoneIdentity {
  return {
    odataType: item["@odata.type"],
  };
}

/** Specifies the identity for a datasource to use. */
export interface SearchIndexerDataUserAssignedIdentity
  extends SearchIndexerDataIdentity {
  /**
   * The fully qualified Azure resource Id of a user assigned managed identity
   * typically in the form
   * "/subscriptions/12345678-1234-1234-1234-1234567890ab/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId"
   * that should have been assigned to the search service.
   */
  resourceId: string;
  /** A URI fragment specifying the type of identity. */
  odataType: "#Microsoft.Azure.Search.DataUserAssignedIdentity";
}

export function searchIndexerDataUserAssignedIdentitySerializer(
  item: SearchIndexerDataUserAssignedIdentity,
): any {
  return {
    "@odata.type": item["odataType"],
    userAssignedIdentity: item["resourceId"],
  };
}

export function searchIndexerDataUserAssignedIdentityDeserializer(
  item: any,
): SearchIndexerDataUserAssignedIdentity {
  return {
    odataType: item["@odata.type"],
    resourceId: item["userAssignedIdentity"],
  };
}

/** Base type for data change detection policies. */
export interface DataChangeDetectionPolicy {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy, #Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy */
  odataType: string;
}

export function dataChangeDetectionPolicySerializer(
  item: DataChangeDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function dataChangeDetectionPolicyDeserializer(
  item: any,
): DataChangeDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for DataChangeDetectionPolicyUnion */
export type DataChangeDetectionPolicyUnion =
  | HighWaterMarkChangeDetectionPolicy
  | SqlIntegratedChangeTrackingPolicy
  | DataChangeDetectionPolicy;

export function dataChangeDetectionPolicyUnionSerializer(
  item: DataChangeDetectionPolicyUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy":
      return highWaterMarkChangeDetectionPolicySerializer(
        item as HighWaterMarkChangeDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy":
      return sqlIntegratedChangeTrackingPolicySerializer(
        item as SqlIntegratedChangeTrackingPolicy,
      );

    default:
      return dataChangeDetectionPolicySerializer(item);
  }
}

export function dataChangeDetectionPolicyUnionDeserializer(
  item: any,
): DataChangeDetectionPolicyUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy":
      return highWaterMarkChangeDetectionPolicyDeserializer(
        item as HighWaterMarkChangeDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy":
      return sqlIntegratedChangeTrackingPolicyDeserializer(
        item as SqlIntegratedChangeTrackingPolicy,
      );

    default:
      return dataChangeDetectionPolicyDeserializer(item);
  }
}

/**
 * Defines a data change detection policy that captures changes based on the value
 * of a high water mark column.
 */
export interface HighWaterMarkChangeDetectionPolicy
  extends DataChangeDetectionPolicy {
  /** The name of the high water mark column. */
  highWaterMarkColumnName: string;
  /** A URI fragment specifying the type of data change detection policy. */
  odataType: "#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy";
}

export function highWaterMarkChangeDetectionPolicySerializer(
  item: HighWaterMarkChangeDetectionPolicy,
): any {
  return {
    "@odata.type": item["odataType"],
    highWaterMarkColumnName: item["highWaterMarkColumnName"],
  };
}

export function highWaterMarkChangeDetectionPolicyDeserializer(
  item: any,
): HighWaterMarkChangeDetectionPolicy {
  return {
    odataType: item["@odata.type"],
    highWaterMarkColumnName: item["highWaterMarkColumnName"],
  };
}

/**
 * Defines a data change detection policy that captures changes using the
 * Integrated Change Tracking feature of Azure SQL Database.
 */
export interface SqlIntegratedChangeTrackingPolicy
  extends DataChangeDetectionPolicy {
  /** A URI fragment specifying the type of data change detection policy. */
  odataType: "#Microsoft.Azure.Search.SqlIntegratedChangeTrackingPolicy";
}

export function sqlIntegratedChangeTrackingPolicySerializer(
  item: SqlIntegratedChangeTrackingPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function sqlIntegratedChangeTrackingPolicyDeserializer(
  item: any,
): SqlIntegratedChangeTrackingPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Base type for data deletion detection policies. */
export interface DataDeletionDetectionPolicy {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy, #Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy */
  odataType: string;
}

export function dataDeletionDetectionPolicySerializer(
  item: DataDeletionDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function dataDeletionDetectionPolicyDeserializer(
  item: any,
): DataDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for DataDeletionDetectionPolicyUnion */
export type DataDeletionDetectionPolicyUnion =
  | SoftDeleteColumnDeletionDetectionPolicy
  | NativeBlobSoftDeleteDeletionDetectionPolicy
  | DataDeletionDetectionPolicy;

export function dataDeletionDetectionPolicyUnionSerializer(
  item: DataDeletionDetectionPolicyUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy":
      return softDeleteColumnDeletionDetectionPolicySerializer(
        item as SoftDeleteColumnDeletionDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy":
      return nativeBlobSoftDeleteDeletionDetectionPolicySerializer(
        item as NativeBlobSoftDeleteDeletionDetectionPolicy,
      );

    default:
      return dataDeletionDetectionPolicySerializer(item);
  }
}

export function dataDeletionDetectionPolicyUnionDeserializer(
  item: any,
): DataDeletionDetectionPolicyUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy":
      return softDeleteColumnDeletionDetectionPolicyDeserializer(
        item as SoftDeleteColumnDeletionDetectionPolicy,
      );

    case "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy":
      return nativeBlobSoftDeleteDeletionDetectionPolicyDeserializer(
        item as NativeBlobSoftDeleteDeletionDetectionPolicy,
      );

    default:
      return dataDeletionDetectionPolicyDeserializer(item);
  }
}

/**
 * Defines a data deletion detection policy that implements a soft-deletion
 * strategy. It determines whether an item should be deleted based on the value of
 * a designated 'soft delete' column.
 */
export interface SoftDeleteColumnDeletionDetectionPolicy
  extends DataDeletionDetectionPolicy {
  /** The name of the column to use for soft-deletion detection. */
  softDeleteColumnName?: string;
  /** The marker value that identifies an item as deleted. */
  softDeleteMarkerValue?: string;
  /** A URI fragment specifying the type of data deletion detection policy. */
  odataType: "#Microsoft.Azure.Search.SoftDeleteColumnDeletionDetectionPolicy";
}

export function softDeleteColumnDeletionDetectionPolicySerializer(
  item: SoftDeleteColumnDeletionDetectionPolicy,
): any {
  return {
    "@odata.type": item["odataType"],
    softDeleteColumnName: item["softDeleteColumnName"],
    softDeleteMarkerValue: item["softDeleteMarkerValue"],
  };
}

export function softDeleteColumnDeletionDetectionPolicyDeserializer(
  item: any,
): SoftDeleteColumnDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
    softDeleteColumnName: item["softDeleteColumnName"],
    softDeleteMarkerValue: item["softDeleteMarkerValue"],
  };
}

/**
 * Defines a data deletion detection policy utilizing Azure Blob Storage's native
 * soft delete feature for deletion detection.
 */
export interface NativeBlobSoftDeleteDeletionDetectionPolicy
  extends DataDeletionDetectionPolicy {
  /** A URI fragment specifying the type of data deletion detection policy. */
  odataType: "#Microsoft.Azure.Search.NativeBlobSoftDeleteDeletionDetectionPolicy";
}

export function nativeBlobSoftDeleteDeletionDetectionPolicySerializer(
  item: NativeBlobSoftDeleteDeletionDetectionPolicy,
): any {
  return { "@odata.type": item["odataType"] };
}

export function nativeBlobSoftDeleteDeletionDetectionPolicyDeserializer(
  item: any,
): NativeBlobSoftDeleteDeletionDetectionPolicy {
  return {
    odataType: item["@odata.type"],
  };
}

/**
 * A customer-managed encryption key in Azure Key Vault. Keys that you create and
 * manage can be used to encrypt or decrypt data-at-rest, such as indexes and
 * synonym maps.
 */
export interface SearchResourceEncryptionKey {
  /** The name of your Azure Key Vault key to be used to encrypt your data at rest. */
  keyName: string;
  /** The version of your Azure Key Vault key to be used to encrypt your data at rest. */
  keyVersion?: string;
  /**
   * The URI of your Azure Key Vault, also referred to as DNS name, that contains
   * the key to be used to encrypt your data at rest. An example URI might be
   * `https://my-keyvault-name.vault.azure.net`.
   */
  vaultUri: string;
  /**
   * Optional Azure Active Directory credentials used for accessing your Azure Key
   * Vault. Not required if using managed identity instead.
   */
  accessCredentials?: AzureActiveDirectoryApplicationCredentials;
  /**
   * An explicit managed identity to use for this encryption key. If not specified
   * and the access credentials property is null, the system-assigned managed
   * identity is used. On update to the resource, if the explicit identity is
   * unspecified, it remains unchanged. If "none" is specified, the value of this
   * property is cleared.
   */
  identity?: SearchIndexerDataIdentityUnion;
}

export function searchResourceEncryptionKeySerializer(
  item: SearchResourceEncryptionKey,
): any {
  return {
    keyVaultKeyName: item["keyName"],
    keyVaultKeyVersion: item["keyVersion"],
    keyVaultUri: item["vaultUri"],
    accessCredentials: !item["accessCredentials"]
      ? item["accessCredentials"]
      : azureActiveDirectoryApplicationCredentialsSerializer(
          item["accessCredentials"],
        ),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionSerializer(item["identity"]),
  };
}

export function searchResourceEncryptionKeyDeserializer(
  item: any,
): SearchResourceEncryptionKey {
  return {
    keyName: item["keyVaultKeyName"],
    keyVersion: item["keyVaultKeyVersion"],
    vaultUri: item["keyVaultUri"],
    accessCredentials: !item["accessCredentials"]
      ? item["accessCredentials"]
      : azureActiveDirectoryApplicationCredentialsDeserializer(
          item["accessCredentials"],
        ),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionDeserializer(item["identity"]),
  };
}

/**
 * Credentials of a registered application created for your search service, used
 * for authenticated access to the encryption keys stored in Azure Key Vault.
 */
export interface AzureActiveDirectoryApplicationCredentials {
  /**
   * An AAD Application ID that was granted the required access permissions to the
   * Azure Key Vault that is to be used when encrypting your data at rest. The
   * Application ID should not be confused with the Object ID for your AAD
   * Application.
   */
  applicationId: string;
  /** The authentication key of the specified AAD application. */
  applicationSecret?: string;
}

export function azureActiveDirectoryApplicationCredentialsSerializer(
  item: AzureActiveDirectoryApplicationCredentials,
): any {
  return {
    applicationId: item["applicationId"],
    applicationSecret: item["applicationSecret"],
  };
}

export function azureActiveDirectoryApplicationCredentialsDeserializer(
  item: any,
): AzureActiveDirectoryApplicationCredentials {
  return {
    applicationId: item["applicationId"],
    applicationSecret: item["applicationSecret"],
  };
}

/**
 * Response from a List Datasources request. If successful, it includes the full
 * definitions of all datasources.
 */
export interface ListDataSourcesResult {
  /** The datasources in the Search service. */
  dataSources: SearchIndexerDataSource[];
}

export function listDataSourcesResultDeserializer(
  item: any,
): ListDataSourcesResult {
  return {
    dataSources: searchIndexerDataSourceArrayDeserializer(item["value"]),
  };
}

export function searchIndexerDataSourceArraySerializer(
  result: Array<SearchIndexerDataSource>,
): any[] {
  return result.map((item) => {
    return searchIndexerDataSourceSerializer(item);
  });
}

export function searchIndexerDataSourceArrayDeserializer(
  result: Array<SearchIndexerDataSource>,
): any[] {
  return result.map((item) => {
    return searchIndexerDataSourceDeserializer(item);
  });
}

/** The type of the keysOrIds. */
export interface DocumentKeysOrIds {
  /** document keys to be reset */
  documentKeys?: string[];
  /** datasource document identifiers to be reset */
  datasourceDocumentIds?: string[];
}

export function documentKeysOrIdsSerializer(item: DocumentKeysOrIds): any {
  return {
    documentKeys: !item["documentKeys"]
      ? item["documentKeys"]
      : item["documentKeys"].map((p: any) => {
          return p;
        }),
    datasourceDocumentIds: !item["datasourceDocumentIds"]
      ? item["datasourceDocumentIds"]
      : item["datasourceDocumentIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents an indexer. */
export interface SearchIndexer {
  /** The name of the indexer. */
  name: string;
  /** The description of the indexer. */
  description?: string;
  /** The name of the datasource from which this indexer reads data. */
  dataSourceName: string;
  /** The name of the skillset executing with this indexer. */
  skillsetName?: string;
  /** The name of the index to which this indexer writes data. */
  targetIndexName: string;
  /** The schedule for this indexer. */
  schedule?: IndexingSchedule;
  /** Parameters for indexer execution. */
  parameters?: IndexingParameters;
  /**
   * Defines mappings between fields in the data source and corresponding target
   * fields in the index.
   */
  fieldMappings?: FieldMapping[];
  /**
   * Output field mappings are applied after enrichment and immediately before
   * indexing.
   */
  outputFieldMappings?: FieldMapping[];
  /** A value indicating whether the indexer is disabled. Default is false. */
  isDisabled?: boolean;
  /** The ETag of the indexer. */
  eTag?: string;
  /**
   * A description of an encryption key that you create in Azure Key Vault. This key
   * is used to provide an additional level of encryption-at-rest for your indexer
   * definition (as well as indexer execution status) when you want full assurance
   * that no one, not even Microsoft, can decrypt them. Once you have encrypted your
   * indexer definition, it will always remain encrypted. The search service will
   * ignore attempts to set this property to null. You can change this property as
   * needed if you want to rotate your encryption key; Your indexer definition (and
   * indexer execution status) will be unaffected. Encryption with customer-managed
   * keys is not available for free search services, and is only available for paid
   * services created on or after January 1, 2019.
   */
  encryptionKey?: SearchResourceEncryptionKey;
  /**
   * Adds caching to an enrichment pipeline to allow for incremental modification
   * steps without having to rebuild the index every time.
   */
  cache?: SearchIndexerCache;
}

export function searchIndexerSerializer(item: SearchIndexer): any {
  return {
    name: item["name"],
    description: item["description"],
    dataSourceName: item["dataSourceName"],
    skillsetName: item["skillsetName"],
    targetIndexName: item["targetIndexName"],
    schedule: !item["schedule"]
      ? item["schedule"]
      : indexingScheduleSerializer(item["schedule"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : indexingParametersSerializer(item["parameters"]),
    fieldMappings: !item["fieldMappings"]
      ? item["fieldMappings"]
      : fieldMappingArraySerializer(item["fieldMappings"]),
    outputFieldMappings: !item["outputFieldMappings"]
      ? item["outputFieldMappings"]
      : fieldMappingArraySerializer(item["outputFieldMappings"]),
    disabled: item["isDisabled"],
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeySerializer(item["encryptionKey"]),
    cache: !item["cache"]
      ? item["cache"]
      : searchIndexerCacheSerializer(item["cache"]),
  };
}

export function searchIndexerDeserializer(item: any): SearchIndexer {
  return {
    name: item["name"],
    description: item["description"],
    dataSourceName: item["dataSourceName"],
    skillsetName: item["skillsetName"],
    targetIndexName: item["targetIndexName"],
    schedule: !item["schedule"]
      ? item["schedule"]
      : indexingScheduleDeserializer(item["schedule"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : indexingParametersDeserializer(item["parameters"]),
    fieldMappings: !item["fieldMappings"]
      ? item["fieldMappings"]
      : fieldMappingArrayDeserializer(item["fieldMappings"]),
    outputFieldMappings: !item["outputFieldMappings"]
      ? item["outputFieldMappings"]
      : fieldMappingArrayDeserializer(item["outputFieldMappings"]),
    isDisabled: item["disabled"],
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeyDeserializer(item["encryptionKey"]),
    cache: !item["cache"]
      ? item["cache"]
      : searchIndexerCacheDeserializer(item["cache"]),
  };
}

/** Represents a schedule for indexer execution. */
export interface IndexingSchedule {
  /** The interval of time between indexer executions. */
  interval: string;
  /** The time when an indexer should start running. */
  startTime?: Date;
}

export function indexingScheduleSerializer(item: IndexingSchedule): any {
  return {
    interval: item["interval"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : item["startTime"].toISOString(),
  };
}

export function indexingScheduleDeserializer(item: any): IndexingSchedule {
  return {
    interval: item["interval"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
  };
}

/** Represents parameters for indexer execution. */
export interface IndexingParameters {
  /**
   * The number of items that are read from the data source and indexed as a single
   * batch in order to improve performance. The default depends on the data source
   * type.
   */
  batchSize?: number;
  /**
   * The maximum number of items that can fail indexing for indexer execution to
   * still be considered successful. -1 means no limit. Default is 0.
   */
  maxFailedItems?: number;
  /**
   * The maximum number of items in a single batch that can fail indexing for the
   * batch to still be considered successful. -1 means no limit. Default is 0.
   */
  maxFailedItemsPerBatch?: number;
  /**
   * A dictionary of indexer-specific configuration properties. Each name is the
   * name of a specific property. Each value must be of a primitive type.
   */
  configuration?: IndexingParametersConfiguration;
}

export function indexingParametersSerializer(item: IndexingParameters): any {
  return {
    batchSize: item["batchSize"],
    maxFailedItems: item["maxFailedItems"],
    maxFailedItemsPerBatch: item["maxFailedItemsPerBatch"],
    configuration: !item["configuration"]
      ? item["configuration"]
      : indexingParametersConfigurationSerializer(item["configuration"]),
  };
}

export function indexingParametersDeserializer(item: any): IndexingParameters {
  return {
    batchSize: item["batchSize"],
    maxFailedItems: item["maxFailedItems"],
    maxFailedItemsPerBatch: item["maxFailedItemsPerBatch"],
    configuration: !item["configuration"]
      ? item["configuration"]
      : indexingParametersConfigurationDeserializer(item["configuration"]),
  };
}

/**
 * A dictionary of indexer-specific configuration properties. Each name is the
 * name of a specific property. Each value must be of a primitive type.
 */
export interface IndexingParametersConfiguration {
  /** Represents the parsing mode for indexing from an Azure blob data source. */
  parsingMode?: BlobIndexerParsingMode;
  /**
   * Comma-delimited list of filename extensions to ignore when processing from
   * Azure blob storage.  For example, you could exclude ".png, .mp4" to skip over
   * those files during indexing.
   */
  excludedFileNameExtensions?: string;
  /**
   * Comma-delimited list of filename extensions to select when processing from
   * Azure blob storage.  For example, you could focus indexing on specific
   * application files ".docx, .pptx, .msg" to specifically include those file
   * types.
   */
  indexedFileNameExtensions?: string;
  /**
   * For Azure blobs, set to false if you want to continue indexing when an
   * unsupported content type is encountered, and you don't know all the content
   * types (file extensions) in advance.
   */
  failOnUnsupportedContentType?: boolean;
  /**
   * For Azure blobs, set to false if you want to continue indexing if a document
   * fails indexing.
   */
  failOnUnprocessableDocument?: boolean;
  /**
   * For Azure blobs, set this property to true to still index storage metadata for
   * blob content that is too large to process. Oversized blobs are treated as
   * errors by default. For limits on blob size, see
   * https://learn.microsoft.com/azure/search/search-limits-quotas-capacity.
   */
  indexStorageMetadataOnlyForOversizedDocuments?: boolean;
  /**
   * For CSV blobs, specifies a comma-delimited list of column headers, useful for
   * mapping source fields to destination fields in an index.
   */
  delimitedTextHeaders?: string;
  /**
   * For CSV blobs, specifies the end-of-line single-character delimiter for CSV
   * files where each line starts a new document (for example, "|").
   */
  delimitedTextDelimiter?: string;
  /**
   * For CSV blobs, indicates that the first (non-blank) line of each blob contains
   * headers.
   */
  firstLineContainsHeaders?: boolean;
  /**
   * Specifies the submode that will determine whether a markdown file will be
   * parsed into exactly one search document or multiple search documents. Default
   * is `oneToMany`.
   */
  markdownParsingSubmode?: MarkdownParsingSubmode;
  /**
   * Specifies the max header depth that will be considered while grouping markdown
   * content. Default is `h6`.
   */
  markdownHeaderDepth?: MarkdownHeaderDepth;
  /**
   * For JSON arrays, given a structured or semi-structured document, you can
   * specify a path to the array using this property.
   */
  documentRoot?: string;
  /**
   * Specifies the data to extract from Azure blob storage and tells the indexer
   * which data to extract from image content when "imageAction" is set to a value
   * other than "none".  This applies to embedded image content in a .PDF or other
   * application, or image files such as .jpg and .png, in Azure blobs.
   */
  dataToExtract?: BlobIndexerDataToExtract;
  /**
   * Determines how to process embedded images and image files in Azure blob
   * storage.  Setting the "imageAction" configuration to any value other than
   * "none" requires that a skillset also be attached to that indexer.
   */
  imageAction?: BlobIndexerImageAction;
  /**
   * If true, will create a path //document//file_data that is an object
   * representing the original file data downloaded from your blob data source.
   * This allows you to pass the original file data to a custom skill for processing
   * within the enrichment pipeline, or to the Document Extraction skill.
   */
  allowSkillsetToReadFileData?: boolean;
  /** Determines algorithm for text extraction from PDF files in Azure blob storage. */
  pdfTextRotationAlgorithm?: BlobIndexerPDFTextRotationAlgorithm;
  /** Specifies the environment in which the indexer should execute. */
  executionEnvironment?: IndexerExecutionEnvironment;
  /**
   * Increases the timeout beyond the 5-minute default for Azure SQL database data
   * sources, specified in the format "hh:mm:ss".
   */
  queryTimeout?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function indexingParametersConfigurationSerializer(
  item: IndexingParametersConfiguration,
): any {
  return {
    ...serializeRecord(item.additionalProperties),
    parsingMode: item["parsingMode"],
    excludedFileNameExtensions: item["excludedFileNameExtensions"],
    indexedFileNameExtensions: item["indexedFileNameExtensions"],
    failOnUnsupportedContentType: item["failOnUnsupportedContentType"],
    failOnUnprocessableDocument: item["failOnUnprocessableDocument"],
    indexStorageMetadataOnlyForOversizedDocuments:
      item["indexStorageMetadataOnlyForOversizedDocuments"],
    delimitedTextHeaders: item["delimitedTextHeaders"],
    delimitedTextDelimiter: item["delimitedTextDelimiter"],
    firstLineContainsHeaders: item["firstLineContainsHeaders"],
    markdownParsingSubmode: item["markdownParsingSubmode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    documentRoot: item["documentRoot"],
    dataToExtract: item["dataToExtract"],
    imageAction: item["imageAction"],
    allowSkillsetToReadFileData: item["allowSkillsetToReadFileData"],
    pdfTextRotationAlgorithm: item["pdfTextRotationAlgorithm"],
    executionEnvironment: item["executionEnvironment"],
    queryTimeout: item["queryTimeout"],
  };
}

export function indexingParametersConfigurationDeserializer(
  item: any,
): IndexingParametersConfiguration {
  return {
    additionalProperties: serializeRecord(item, [
      "parsingMode",
      "excludedFileNameExtensions",
      "indexedFileNameExtensions",
      "failOnUnsupportedContentType",
      "failOnUnprocessableDocument",
      "indexStorageMetadataOnlyForOversizedDocuments",
      "delimitedTextHeaders",
      "delimitedTextDelimiter",
      "firstLineContainsHeaders",
      "markdownParsingSubmode",
      "markdownHeaderDepth",
      "documentRoot",
      "dataToExtract",
      "imageAction",
      "allowSkillsetToReadFileData",
      "pdfTextRotationAlgorithm",
      "executionEnvironment",
      "queryTimeout",
    ]),
    parsingMode: item["parsingMode"],
    excludedFileNameExtensions: item["excludedFileNameExtensions"],
    indexedFileNameExtensions: item["indexedFileNameExtensions"],
    failOnUnsupportedContentType: item["failOnUnsupportedContentType"],
    failOnUnprocessableDocument: item["failOnUnprocessableDocument"],
    indexStorageMetadataOnlyForOversizedDocuments:
      item["indexStorageMetadataOnlyForOversizedDocuments"],
    delimitedTextHeaders: item["delimitedTextHeaders"],
    delimitedTextDelimiter: item["delimitedTextDelimiter"],
    firstLineContainsHeaders: item["firstLineContainsHeaders"],
    markdownParsingSubmode: item["markdownParsingSubmode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
    documentRoot: item["documentRoot"],
    dataToExtract: item["dataToExtract"],
    imageAction: item["imageAction"],
    allowSkillsetToReadFileData: item["allowSkillsetToReadFileData"],
    pdfTextRotationAlgorithm: item["pdfTextRotationAlgorithm"],
    executionEnvironment: item["executionEnvironment"],
    queryTimeout: item["queryTimeout"],
  };
}

/** Represents the parsing mode for indexing from an Azure blob data source. */
export type BlobIndexerParsingMode =
  | "default"
  | "text"
  | "delimitedText"
  | "json"
  | "jsonArray"
  | "jsonLines"
  | "markdown";
/**
 * Specifies the submode that will determine whether a markdown file will be
 * parsed into exactly one search document or multiple search documents. Default
 * is `oneToMany`.
 */
export type MarkdownParsingSubmode = "oneToMany" | "oneToOne";
/**
 * Specifies the max header depth that will be considered while grouping markdown
 * content. Default is `h6`.
 */
export type MarkdownHeaderDepth = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
/**
 * Specifies the data to extract from Azure blob storage and tells the indexer
 * which data to extract from image content when "imageAction" is set to a value
 * other than "none".  This applies to embedded image content in a .PDF or other
 * application, or image files such as .jpg and .png, in Azure blobs.
 */
export type BlobIndexerDataToExtract =
  | "storageMetadata"
  | "allMetadata"
  | "contentAndMetadata";
/**
 * Determines how to process embedded images and image files in Azure blob
 * storage.  Setting the "imageAction" configuration to any value other than
 * "none" requires that a skillset also be attached to that indexer.
 */
export type BlobIndexerImageAction =
  | "none"
  | "generateNormalizedImages"
  | "generateNormalizedImagePerPage";
/** Determines algorithm for text extraction from PDF files in Azure blob storage. */
export type BlobIndexerPDFTextRotationAlgorithm = "none" | "detectAngles";
/** Specifies the environment in which the indexer should execute. */
export type IndexerExecutionEnvironment = "standard" | "private";

export function fieldMappingArraySerializer(
  result: Array<FieldMapping>,
): any[] {
  return result.map((item) => {
    return fieldMappingSerializer(item);
  });
}

export function fieldMappingArrayDeserializer(
  result: Array<FieldMapping>,
): any[] {
  return result.map((item) => {
    return fieldMappingDeserializer(item);
  });
}

/**
 * Defines a mapping between a field in a data source and a target field in an
 * index.
 */
export interface FieldMapping {
  /** The name of the field in the data source. */
  sourceFieldName: string;
  /**
   * The name of the target field in the index. Same as the source field name by
   * default.
   */
  targetFieldName?: string;
  /** A function to apply to each source field value before indexing. */
  mappingFunction?: FieldMappingFunction;
}

export function fieldMappingSerializer(item: FieldMapping): any {
  return {
    sourceFieldName: item["sourceFieldName"],
    targetFieldName: item["targetFieldName"],
    mappingFunction: !item["mappingFunction"]
      ? item["mappingFunction"]
      : fieldMappingFunctionSerializer(item["mappingFunction"]),
  };
}

export function fieldMappingDeserializer(item: any): FieldMapping {
  return {
    sourceFieldName: item["sourceFieldName"],
    targetFieldName: item["targetFieldName"],
    mappingFunction: !item["mappingFunction"]
      ? item["mappingFunction"]
      : fieldMappingFunctionDeserializer(item["mappingFunction"]),
  };
}

/**
 * Represents a function that transforms a value from a data source before
 * indexing.
 */
export interface FieldMappingFunction {
  /** The name of the field mapping function. */
  name: string;
  /**
   * A dictionary of parameter name/value pairs to pass to the function. Each value
   * must be of a primitive type.
   */
  parameters?: Record<string, any>;
}

export function fieldMappingFunctionSerializer(
  item: FieldMappingFunction,
): any {
  return { name: item["name"], parameters: item["parameters"] };
}

export function fieldMappingFunctionDeserializer(
  item: any,
): FieldMappingFunction {
  return {
    name: item["name"],
    parameters: item["parameters"],
  };
}

/** The type of the cache. */
export interface SearchIndexerCache {
  /**
   * The connection string to the storage account where the cache data will be
   * persisted.
   */
  storageConnectionString?: string;
  /** Specifies whether incremental reprocessing is enabled. */
  enableReprocessing?: boolean;
  /**
   * The user-assigned managed identity used for connections to the enrichment
   * cache.  If the connection string indicates an identity (ResourceId) and it's
   * not specified, the system-assigned managed identity is used. On updates to the
   * indexer, if the identity is unspecified, the value remains unchanged. If set to
   * "none", the value of this property is cleared.
   */
  identity?: SearchIndexerDataIdentityUnion;
  /** A guid for the SearchIndexerCache. */
  id?: string;
}

export function searchIndexerCacheSerializer(item: SearchIndexerCache): any {
  return {
    storageConnectionString: item["storageConnectionString"],
    enableReprocessing: item["enableReprocessing"],
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionSerializer(item["identity"]),
    id: item["id"],
  };
}

export function searchIndexerCacheDeserializer(item: any): SearchIndexerCache {
  return {
    storageConnectionString: item["storageConnectionString"],
    enableReprocessing: item["enableReprocessing"],
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionDeserializer(item["identity"]),
    id: item["id"],
  };
}

/**
 * Response from a List Indexers request. If successful, it includes the full
 * definitions of all indexers.
 */
export interface ListIndexersResult {
  /** The indexers in the Search service. */
  indexers: SearchIndexer[];
}

export function listIndexersResultDeserializer(item: any): ListIndexersResult {
  return {
    indexers: searchIndexerArrayDeserializer(item["value"]),
  };
}

export function searchIndexerArraySerializer(
  result: Array<SearchIndexer>,
): any[] {
  return result.map((item) => {
    return searchIndexerSerializer(item);
  });
}

export function searchIndexerArrayDeserializer(
  result: Array<SearchIndexer>,
): any[] {
  return result.map((item) => {
    return searchIndexerDeserializer(item);
  });
}

/** Represents the current status and execution history of an indexer. */
export interface SearchIndexerStatus {
  /** Overall indexer status. */
  status: IndexerStatus;
  /** The result of the most recent or an in-progress indexer execution. */
  lastResult?: IndexerExecutionResult;
  /** History of the recent indexer executions, sorted in reverse chronological order. */
  executionHistory: IndexerExecutionResult[];
  /** The execution limits for the indexer. */
  limits: SearchIndexerLimits;
}

export function searchIndexerStatusDeserializer(
  item: any,
): SearchIndexerStatus {
  return {
    status: item["status"],
    lastResult: !item["lastResult"]
      ? item["lastResult"]
      : indexerExecutionResultDeserializer(item["lastResult"]),
    executionHistory: indexerExecutionResultArrayDeserializer(
      item["executionHistory"],
    ),
    limits: searchIndexerLimitsDeserializer(item["limits"]),
  };
}

/** Represents the overall indexer status. */
export type IndexerStatus = "unknown" | "error" | "running";

/** Represents the result of an individual indexer execution. */
export interface IndexerExecutionResult {
  /** The outcome of this indexer execution. */
  status: IndexerExecutionStatus;
  /** The outcome of this indexer execution. */
  readonly statusDetail?: IndexerExecutionStatusDetail;
  /** All of the state that defines and dictates the indexer's current execution. */
  readonly currentState?: IndexerCurrentState;
  /** The error message indicating the top-level error, if any. */
  errorMessage?: string;
  /** The start time of this indexer execution. */
  startTime?: Date;
  /** The end time of this indexer execution, if the execution has already completed. */
  endTime?: Date;
  /** The item-level indexing errors. */
  errors: SearchIndexerError[];
  /** The item-level indexing warnings. */
  warnings: SearchIndexerWarning[];
  /**
   * The number of items that were processed during this indexer execution. This
   * includes both successfully processed items and items where indexing was
   * attempted but failed.
   */
  itemCount: number;
  /** The number of items that failed to be indexed during this indexer execution. */
  failedItemCount: number;
  /** Change tracking state with which an indexer execution started. */
  initialTrackingState?: string;
  /** Change tracking state with which an indexer execution finished. */
  finalTrackingState?: string;
}

export function indexerExecutionResultDeserializer(
  item: any,
): IndexerExecutionResult {
  return {
    status: item["status"],
    statusDetail: item["statusDetail"],
    currentState: !item["currentState"]
      ? item["currentState"]
      : indexerCurrentStateDeserializer(item["currentState"]),
    errorMessage: item["errorMessage"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    errors: searchIndexerErrorArrayDeserializer(item["errors"]),
    warnings: searchIndexerWarningArrayDeserializer(item["warnings"]),
    itemCount: item["itemsProcessed"],
    failedItemCount: item["itemsFailed"],
    initialTrackingState: item["initialTrackingState"],
    finalTrackingState: item["finalTrackingState"],
  };
}

/** Represents the status of an individual indexer execution. */
export type IndexerExecutionStatus =
  | "transientFailure"
  | "success"
  | "inProgress"
  | "reset";
/** Details the status of an individual indexer execution. */
export type IndexerExecutionStatusDetail = "resetDocs";

/**
 * Represents all of the state that defines and dictates the indexer's current
 * execution.
 */
export interface IndexerCurrentState {
  /** The mode the indexer is running in. */
  readonly mode?: IndexingMode;
  /**
   * Change tracking state used when indexing starts on all documents in the
   * datasource.
   */
  readonly allDocsInitialChangeTrackingState?: string;
  /**
   * Change tracking state value when indexing finishes on all documents in the
   * datasource.
   */
  readonly allDocsFinalChangeTrackingState?: string;
  /**
   * Change tracking state used when indexing starts on select, reset documents in
   * the datasource.
   */
  readonly resetDocsInitialChangeTrackingState?: string;
  /**
   * Change tracking state value when indexing finishes on select, reset documents
   * in the datasource.
   */
  readonly resetDocsFinalChangeTrackingState?: string;
  /**
   * The list of document keys that have been reset. The document key is the
   * document's unique identifier for the data in the search index. The indexer will
   * prioritize selectively re-ingesting these keys.
   */
  readonly resetDocumentKeys?: string[];
  /**
   * The list of datasource document ids that have been reset. The datasource
   * document id is the unique identifier for the data in the datasource. The
   * indexer will prioritize selectively re-ingesting these ids.
   */
  readonly resetDatasourceDocumentIds?: string[];
}

export function indexerCurrentStateDeserializer(
  item: any,
): IndexerCurrentState {
  return {
    mode: item["mode"],
    allDocsInitialChangeTrackingState:
      item["allDocsInitialChangeTrackingState"],
    allDocsFinalChangeTrackingState: item["allDocsFinalChangeTrackingState"],
    resetDocsInitialChangeTrackingState:
      item["resetDocsInitialChangeTrackingState"],
    resetDocsFinalChangeTrackingState:
      item["resetDocsFinalChangeTrackingState"],
    resetDocumentKeys: !item["resetDocumentKeys"]
      ? item["resetDocumentKeys"]
      : item["resetDocumentKeys"].map((p: any) => {
          return p;
        }),
    resetDatasourceDocumentIds: !item["resetDatasourceDocumentIds"]
      ? item["resetDatasourceDocumentIds"]
      : item["resetDatasourceDocumentIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents the mode the indexer is executing in. */
export type IndexingMode = "indexingAllDocs" | "indexingResetDocs";

export function searchIndexerErrorArrayDeserializer(
  result: Array<SearchIndexerError>,
): any[] {
  return result.map((item) => {
    return searchIndexerErrorDeserializer(item);
  });
}

/** Represents an item- or document-level indexing error. */
export interface SearchIndexerError {
  /** The key of the item for which indexing failed. */
  key?: string;
  /** The message describing the error that occurred while processing the item. */
  errorMessage: string;
  /**
   * The status code indicating why the indexing operation failed. Possible values
   * include: 400 for a malformed input document, 404 for document not found, 409
   * for a version conflict, 422 when the index is temporarily unavailable, or 503
   * for when the service is too busy.
   */
  statusCode: number;
  /**
   * The name of the source at which the error originated. For example, this could
   * refer to a particular skill in the attached skillset. This may not be always
   * available.
   */
  name?: string;
  /**
   * Additional, verbose details about the error to assist in debugging the indexer.
   * This may not be always available.
   */
  details?: string;
  /**
   * A link to a troubleshooting guide for these classes of errors. This may not be
   * always available.
   */
  documentationLink?: string;
}

export function searchIndexerErrorDeserializer(item: any): SearchIndexerError {
  return {
    key: item["key"],
    errorMessage: item["errorMessage"],
    statusCode: item["statusCode"],
    name: item["name"],
    details: item["details"],
    documentationLink: item["documentationLink"],
  };
}

export function searchIndexerWarningArrayDeserializer(
  result: Array<SearchIndexerWarning>,
): any[] {
  return result.map((item) => {
    return searchIndexerWarningDeserializer(item);
  });
}

/** Represents an item-level warning. */
export interface SearchIndexerWarning {
  /** The key of the item which generated a warning. */
  key?: string;
  /** The message describing the warning that occurred while processing the item. */
  message: string;
  /**
   * The name of the source at which the warning originated. For example, this could
   * refer to a particular skill in the attached skillset. This may not be always
   * available.
   */
  name?: string;
  /**
   * Additional, verbose details about the warning to assist in debugging the
   * indexer. This may not be always available.
   */
  details?: string;
  /**
   * A link to a troubleshooting guide for these classes of warnings. This may not
   * be always available.
   */
  documentationLink?: string;
}

export function searchIndexerWarningDeserializer(
  item: any,
): SearchIndexerWarning {
  return {
    key: item["key"],
    message: item["message"],
    name: item["name"],
    details: item["details"],
    documentationLink: item["documentationLink"],
  };
}

export function indexerExecutionResultArrayDeserializer(
  result: Array<IndexerExecutionResult>,
): any[] {
  return result.map((item) => {
    return indexerExecutionResultDeserializer(item);
  });
}

/** Represents the limits that can be applied to an indexer. */
export interface SearchIndexerLimits {
  /** The maximum duration that the indexer is permitted to run for one execution. */
  maxRunTime?: string;
  /**
   * The maximum size of a document, in bytes, which will be considered valid for
   * indexing.
   */
  maxDocumentExtractionSize?: number;
  /**
   * The maximum number of characters that will be extracted from a document picked
   * up for indexing.
   */
  maxDocumentContentCharactersToExtract?: number;
}

export function searchIndexerLimitsDeserializer(
  item: any,
): SearchIndexerLimits {
  return {
    maxRunTime: item["maxRunTime"],
    maxDocumentExtractionSize: item["maxDocumentExtractionSize"],
    maxDocumentContentCharactersToExtract:
      item["maxDocumentContentCharactersToExtract"],
  };
}

/** A list of skills. */
export interface SearchIndexerSkillset {
  /** The name of the skillset. */
  name: string;
  /** The description of the skillset. */
  description?: string;
  /** A list of skills in the skillset. */
  skills: SearchIndexerSkillUnion[];
  /** Details about the Azure AI service to be used when running skills. */
  cognitiveServicesAccount?: CognitiveServicesAccountUnion;
  /**
   * Definition of additional projections to Azure blob, table, or files, of
   * enriched data.
   */
  knowledgeStore?: SearchIndexerKnowledgeStore;
  /** Definition of additional projections to secondary search index(es). */
  indexProjection?: SearchIndexerIndexProjection;
  /** The ETag of the skillset. */
  eTag?: string;
  /**
   * A description of an encryption key that you create in Azure Key Vault. This key
   * is used to provide an additional level of encryption-at-rest for your skillset
   * definition when you want full assurance that no one, not even Microsoft, can
   * decrypt your skillset definition. Once you have encrypted your skillset
   * definition, it will always remain encrypted. The search service will ignore
   * attempts to set this property to null. You can change this property as needed
   * if you want to rotate your encryption key; Your skillset definition will be
   * unaffected. Encryption with customer-managed keys is not available for free
   * search services, and is only available for paid services created on or after
   * January 1, 2019.
   */
  encryptionKey?: SearchResourceEncryptionKey;
}

export function searchIndexerSkillsetSerializer(
  item: SearchIndexerSkillset,
): any {
  return {
    name: item["name"],
    description: item["description"],
    skills: searchIndexerSkillUnionArraySerializer(item["skills"]),
    cognitiveServices: !item["cognitiveServicesAccount"]
      ? item["cognitiveServicesAccount"]
      : cognitiveServicesAccountUnionSerializer(
          item["cognitiveServicesAccount"],
        ),
    knowledgeStore: !item["knowledgeStore"]
      ? item["knowledgeStore"]
      : searchIndexerKnowledgeStoreSerializer(item["knowledgeStore"]),
    indexProjections: !item["indexProjection"]
      ? item["indexProjection"]
      : searchIndexerIndexProjectionSerializer(item["indexProjection"]),
    "@odata.etag": item["eTag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeySerializer(item["encryptionKey"]),
  };
}

export function searchIndexerSkillsetDeserializer(
  item: any,
): SearchIndexerSkillset {
  return {
    name: item["name"],
    description: item["description"],
    skills: searchIndexerSkillUnionArrayDeserializer(item["skills"]),
    cognitiveServicesAccount: !item["cognitiveServices"]
      ? item["cognitiveServices"]
      : cognitiveServicesAccountUnionDeserializer(item["cognitiveServices"]),
    knowledgeStore: !item["knowledgeStore"]
      ? item["knowledgeStore"]
      : searchIndexerKnowledgeStoreDeserializer(item["knowledgeStore"]),
    indexProjection: !item["indexProjections"]
      ? item["indexProjections"]
      : searchIndexerIndexProjectionDeserializer(item["indexProjections"]),
    eTag: item["@odata.etag"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeyDeserializer(item["encryptionKey"]),
  };
}

export function searchIndexerSkillUnionArraySerializer(
  result: Array<SearchIndexerSkillUnion>,
): any[] {
  return result.map((item) => {
    return searchIndexerSkillUnionSerializer(item);
  });
}

export function searchIndexerSkillUnionArrayDeserializer(
  result: Array<SearchIndexerSkillUnion>,
): any[] {
  return result.map((item) => {
    return searchIndexerSkillUnionDeserializer(item);
  });
}

/** Base type for skills. */
export interface SearchIndexerSkill {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Skills.Util.ConditionalSkill, #Microsoft.Skills.Text.KeyPhraseExtractionSkill, #Microsoft.Skills.Vision.OcrSkill, #Microsoft.Skills.Vision.ImageAnalysisSkill, #Microsoft.Skills.Text.LanguageDetectionSkill, #Microsoft.Skills.Util.ShaperSkill, #Microsoft.Skills.Text.MergeSkill, #Microsoft.Skills.Text.EntityRecognitionSkill, #Microsoft.Skills.Text.SentimentSkill, #Microsoft.Skills.Text.V3.SentimentSkill, #Microsoft.Skills.Text.V3.EntityLinkingSkill, #Microsoft.Skills.Text.V3.EntityRecognitionSkill, #Microsoft.Skills.Text.PIIDetectionSkill, #Microsoft.Skills.Text.SplitSkill, #Microsoft.Skills.Text.CustomEntityLookupSkill, #Microsoft.Skills.Text.TranslationSkill, #Microsoft.Skills.Util.DocumentExtractionSkill, #Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill, #Microsoft.Skills.Custom.WebApiSkill, #Microsoft.Skills.Custom.AmlSkill, #Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill, #Microsoft.Skills.Vision.VectorizeSkill */
  odataType: string;
  /**
   * The name of the skill which uniquely identifies it within the skillset. A skill
   * with no name defined will be given a default name of its 1-based index in the
   * skills array, prefixed with the character '#'.
   */
  name?: string;
  /**
   * The description of the skill which describes the inputs, outputs, and usage of
   * the skill.
   */
  description?: string;
  /**
   * Represents the level at which operations take place, such as the document root
   * or document content (for example, /document or /document/content). The default
   * is /document.
   */
  context?: string;
  /**
   * Inputs of the skills could be a column in the source data set, or the output of
   * an upstream skill.
   */
  inputs: InputFieldMappingEntry[];
  /**
   * The output of a skill is either a field in a search index, or a value that can
   * be consumed as an input by another skill.
   */
  outputs: OutputFieldMappingEntry[];
}

export function searchIndexerSkillSerializer(item: SearchIndexerSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
  };
}

export function searchIndexerSkillDeserializer(item: any): SearchIndexerSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
  };
}

/** Alias for SearchIndexerSkillUnion */
export type SearchIndexerSkillUnion =
  | ConditionalSkill
  | KeyPhraseExtractionSkill
  | OcrSkill
  | ImageAnalysisSkill
  | LanguageDetectionSkill
  | ShaperSkill
  | MergeSkill
  | EntityRecognitionSkill
  | SentimentSkill
  | SentimentSkillV3
  | EntityLinkingSkill
  | EntityRecognitionSkillV3
  | PIIDetectionSkill
  | SplitSkill
  | CustomEntityLookupSkill
  | TextTranslationSkill
  | DocumentExtractionSkill
  | DocumentIntelligenceLayoutSkill
  | WebApiSkill
  | AzureMachineLearningSkill
  | AzureOpenAIEmbeddingSkill
  | VisionVectorizeSkill
  | SearchIndexerSkill;

export function searchIndexerSkillUnionSerializer(
  item: SearchIndexerSkillUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Skills.Util.ConditionalSkill":
      return conditionalSkillSerializer(item as ConditionalSkill);

    case "#Microsoft.Skills.Text.KeyPhraseExtractionSkill":
      return keyPhraseExtractionSkillSerializer(
        item as KeyPhraseExtractionSkill,
      );

    case "#Microsoft.Skills.Vision.OcrSkill":
      return ocrSkillSerializer(item as OcrSkill);

    case "#Microsoft.Skills.Vision.ImageAnalysisSkill":
      return imageAnalysisSkillSerializer(item as ImageAnalysisSkill);

    case "#Microsoft.Skills.Text.LanguageDetectionSkill":
      return languageDetectionSkillSerializer(item as LanguageDetectionSkill);

    case "#Microsoft.Skills.Util.ShaperSkill":
      return shaperSkillSerializer(item as ShaperSkill);

    case "#Microsoft.Skills.Text.MergeSkill":
      return mergeSkillSerializer(item as MergeSkill);

    case "#Microsoft.Skills.Text.EntityRecognitionSkill":
      return entityRecognitionSkillSerializer(item as EntityRecognitionSkill);

    case "#Microsoft.Skills.Text.SentimentSkill":
      return sentimentSkillSerializer(item as SentimentSkill);

    case "#Microsoft.Skills.Text.V3.SentimentSkill":
      return sentimentSkillV3Serializer(item as SentimentSkillV3);

    case "#Microsoft.Skills.Text.V3.EntityLinkingSkill":
      return entityLinkingSkillSerializer(item as EntityLinkingSkill);

    case "#Microsoft.Skills.Text.V3.EntityRecognitionSkill":
      return entityRecognitionSkillV3Serializer(
        item as EntityRecognitionSkillV3,
      );

    case "#Microsoft.Skills.Text.PIIDetectionSkill":
      return piiDetectionSkillSerializer(item as PIIDetectionSkill);

    case "#Microsoft.Skills.Text.SplitSkill":
      return splitSkillSerializer(item as SplitSkill);

    case "#Microsoft.Skills.Text.CustomEntityLookupSkill":
      return customEntityLookupSkillSerializer(item as CustomEntityLookupSkill);

    case "#Microsoft.Skills.Text.TranslationSkill":
      return textTranslationSkillSerializer(item as TextTranslationSkill);

    case "#Microsoft.Skills.Util.DocumentExtractionSkill":
      return documentExtractionSkillSerializer(item as DocumentExtractionSkill);

    case "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill":
      return documentIntelligenceLayoutSkillSerializer(
        item as DocumentIntelligenceLayoutSkill,
      );

    case "#Microsoft.Skills.Custom.WebApiSkill":
      return webApiSkillSerializer(item as WebApiSkill);

    case "#Microsoft.Skills.Custom.AmlSkill":
      return azureMachineLearningSkillSerializer(
        item as AzureMachineLearningSkill,
      );

    case "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill":
      return azureOpenAIEmbeddingSkillSerializer(
        item as AzureOpenAIEmbeddingSkill,
      );

    case "#Microsoft.Skills.Vision.VectorizeSkill":
      return visionVectorizeSkillSerializer(item as VisionVectorizeSkill);

    default:
      return searchIndexerSkillSerializer(item);
  }
}

export function searchIndexerSkillUnionDeserializer(
  item: any,
): SearchIndexerSkillUnion {
  switch (item.odataType) {
    case "#Microsoft.Skills.Util.ConditionalSkill":
      return conditionalSkillDeserializer(item as ConditionalSkill);

    case "#Microsoft.Skills.Text.KeyPhraseExtractionSkill":
      return keyPhraseExtractionSkillDeserializer(
        item as KeyPhraseExtractionSkill,
      );

    case "#Microsoft.Skills.Vision.OcrSkill":
      return ocrSkillDeserializer(item as OcrSkill);

    case "#Microsoft.Skills.Vision.ImageAnalysisSkill":
      return imageAnalysisSkillDeserializer(item as ImageAnalysisSkill);

    case "#Microsoft.Skills.Text.LanguageDetectionSkill":
      return languageDetectionSkillDeserializer(item as LanguageDetectionSkill);

    case "#Microsoft.Skills.Util.ShaperSkill":
      return shaperSkillDeserializer(item as ShaperSkill);

    case "#Microsoft.Skills.Text.MergeSkill":
      return mergeSkillDeserializer(item as MergeSkill);

    case "#Microsoft.Skills.Text.EntityRecognitionSkill":
      return entityRecognitionSkillDeserializer(item as EntityRecognitionSkill);

    case "#Microsoft.Skills.Text.SentimentSkill":
      return sentimentSkillDeserializer(item as SentimentSkill);

    case "#Microsoft.Skills.Text.V3.SentimentSkill":
      return sentimentSkillV3Deserializer(item as SentimentSkillV3);

    case "#Microsoft.Skills.Text.V3.EntityLinkingSkill":
      return entityLinkingSkillDeserializer(item as EntityLinkingSkill);

    case "#Microsoft.Skills.Text.V3.EntityRecognitionSkill":
      return entityRecognitionSkillV3Deserializer(
        item as EntityRecognitionSkillV3,
      );

    case "#Microsoft.Skills.Text.PIIDetectionSkill":
      return piiDetectionSkillDeserializer(item as PIIDetectionSkill);

    case "#Microsoft.Skills.Text.SplitSkill":
      return splitSkillDeserializer(item as SplitSkill);

    case "#Microsoft.Skills.Text.CustomEntityLookupSkill":
      return customEntityLookupSkillDeserializer(
        item as CustomEntityLookupSkill,
      );

    case "#Microsoft.Skills.Text.TranslationSkill":
      return textTranslationSkillDeserializer(item as TextTranslationSkill);

    case "#Microsoft.Skills.Util.DocumentExtractionSkill":
      return documentExtractionSkillDeserializer(
        item as DocumentExtractionSkill,
      );

    case "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill":
      return documentIntelligenceLayoutSkillDeserializer(
        item as DocumentIntelligenceLayoutSkill,
      );

    case "#Microsoft.Skills.Custom.WebApiSkill":
      return webApiSkillDeserializer(item as WebApiSkill);

    case "#Microsoft.Skills.Custom.AmlSkill":
      return azureMachineLearningSkillDeserializer(
        item as AzureMachineLearningSkill,
      );

    case "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill":
      return azureOpenAIEmbeddingSkillDeserializer(
        item as AzureOpenAIEmbeddingSkill,
      );

    case "#Microsoft.Skills.Vision.VectorizeSkill":
      return visionVectorizeSkillDeserializer(item as VisionVectorizeSkill);

    default:
      return searchIndexerSkillDeserializer(item);
  }
}

export function inputFieldMappingEntryArraySerializer(
  result: Array<InputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return inputFieldMappingEntrySerializer(item);
  });
}

export function inputFieldMappingEntryArrayDeserializer(
  result: Array<InputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return inputFieldMappingEntryDeserializer(item);
  });
}

/** Input field mapping for a skill. */
export interface InputFieldMappingEntry {
  /** The name of the input. */
  name: string;
  /** The source of the input. */
  source?: string;
  /** The source context used for selecting recursive inputs. */
  sourceContext?: string;
  /** The recursive inputs used when creating a complex type. */
  inputs?: InputFieldMappingEntry[];
}

export function inputFieldMappingEntrySerializer(
  item: InputFieldMappingEntry,
): any {
  return {
    name: item["name"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : __PLACEHOLDER_o189_sserializer__(item["inputs"]),
  };
}

export function inputFieldMappingEntryDeserializer(
  item: any,
): InputFieldMappingEntry {
  return {
    name: item["name"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : __PLACEHOLDER_o189_sdeserializer__(item["inputs"]),
  };
}

export function outputFieldMappingEntryArraySerializer(
  result: Array<OutputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return outputFieldMappingEntrySerializer(item);
  });
}

export function outputFieldMappingEntryArrayDeserializer(
  result: Array<OutputFieldMappingEntry>,
): any[] {
  return result.map((item) => {
    return outputFieldMappingEntryDeserializer(item);
  });
}

/** Output field mapping for a skill. */
export interface OutputFieldMappingEntry {
  /** The name of the output defined by the skill. */
  name: string;
  /** The target name of the output. It is optional and default to name. */
  targetName?: string;
}

export function outputFieldMappingEntrySerializer(
  item: OutputFieldMappingEntry,
): any {
  return { name: item["name"], targetName: item["targetName"] };
}

export function outputFieldMappingEntryDeserializer(
  item: any,
): OutputFieldMappingEntry {
  return {
    name: item["name"],
    targetName: item["targetName"],
  };
}

/**
 * A skill that enables scenarios that require a Boolean operation to determine
 * the data to assign to an output.
 */
export interface ConditionalSkill extends SearchIndexerSkill {
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.ConditionalSkill";
}

export function conditionalSkillSerializer(item: ConditionalSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
  };
}

export function conditionalSkillDeserializer(item: any): ConditionalSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
  };
}

/** A skill that uses text analytics for key phrase extraction. */
export interface KeyPhraseExtractionSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: KeyPhraseExtractionSkillLanguage;
  /**
   * A number indicating how many key phrases to return. If absent, all identified
   * key phrases will be returned.
   */
  maxKeyPhraseCount?: number;
  /**
   * The version of the model to use when calling the Text Analytics service. It
   * will default to the latest available when not specified. We recommend you do
   * not specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.KeyPhraseExtractionSkill";
}

export function keyPhraseExtractionSkillSerializer(
  item: KeyPhraseExtractionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    maxKeyPhraseCount: item["maxKeyPhraseCount"],
    modelVersion: item["modelVersion"],
  };
}

export function keyPhraseExtractionSkillDeserializer(
  item: any,
): KeyPhraseExtractionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    maxKeyPhraseCount: item["maxKeyPhraseCount"],
    modelVersion: item["modelVersion"],
  };
}

/** The language codes supported for input text by KeyPhraseExtractionSkill. */
export type KeyPhraseExtractionSkillLanguage =
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "it"
  | "ja"
  | "ko"
  | "no"
  | "pl"
  | "pt-PT"
  | "pt-BR"
  | "ru"
  | "es"
  | "sv";

/** A skill that extracts text from image files. */
export interface OcrSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: OcrSkillLanguage;
  /** A value indicating to turn orientation detection on or not. Default is false. */
  shouldDetectOrientation?: boolean;
  /**
   * Defines the sequence of characters to use between the lines of text recognized
   * by the OCR skill. The default value is "space".
   */
  lineEnding?: OcrLineEnding;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.OcrSkill";
}

export function ocrSkillSerializer(item: OcrSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    detectOrientation: item["shouldDetectOrientation"],
    lineEnding: item["lineEnding"],
  };
}

export function ocrSkillDeserializer(item: any): OcrSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    shouldDetectOrientation: item["detectOrientation"],
    lineEnding: item["lineEnding"],
  };
}

/** The language codes supported for input by OcrSkill. */
export type OcrSkillLanguage =
  | "af"
  | "sq"
  | "anp"
  | "ar"
  | "ast"
  | "awa"
  | "az"
  | "bfy"
  | "eu"
  | "be"
  | "be-cyrl"
  | "be-latn"
  | "bho"
  | "bi"
  | "brx"
  | "bs"
  | "bra"
  | "br"
  | "bg"
  | "bns"
  | "bua"
  | "ca"
  | "ceb"
  | "rab"
  | "ch"
  | "hne"
  | "zh-Hans"
  | "zh-Hant"
  | "kw"
  | "co"
  | "crh"
  | "hr"
  | "cs"
  | "da"
  | "prs"
  | "dhi"
  | "doi"
  | "nl"
  | "en"
  | "myv"
  | "et"
  | "fo"
  | "fj"
  | "fil"
  | "fi"
  | "fr"
  | "fur"
  | "gag"
  | "gl"
  | "de"
  | "gil"
  | "gon"
  | "el"
  | "kl"
  | "gvr"
  | "ht"
  | "hlb"
  | "hni"
  | "bgc"
  | "haw"
  | "hi"
  | "mww"
  | "hoc"
  | "hu"
  | "is"
  | "smn"
  | "id"
  | "ia"
  | "iu"
  | "ga"
  | "it"
  | "ja"
  | "Jns"
  | "jv"
  | "kea"
  | "kac"
  | "xnr"
  | "krc"
  | "kaa-cyrl"
  | "kaa"
  | "csb"
  | "kk-cyrl"
  | "kk-latn"
  | "klr"
  | "kha"
  | "quc"
  | "ko"
  | "kfq"
  | "kpy"
  | "kos"
  | "kum"
  | "ku-arab"
  | "ku-latn"
  | "kru"
  | "ky"
  | "lkt"
  | "la"
  | "lt"
  | "dsb"
  | "smj"
  | "lb"
  | "bfz"
  | "ms"
  | "mt"
  | "kmj"
  | "gv"
  | "mi"
  | "mr"
  | "mn"
  | "cnr-cyrl"
  | "cnr-latn"
  | "nap"
  | "ne"
  | "niu"
  | "nog"
  | "sme"
  | "nb"
  | "no"
  | "oc"
  | "os"
  | "ps"
  | "fa"
  | "pl"
  | "pt"
  | "pa"
  | "ksh"
  | "ro"
  | "rm"
  | "ru"
  | "sck"
  | "sm"
  | "sa"
  | "sat"
  | "sco"
  | "gd"
  | "sr"
  | "sr-Cyrl"
  | "sr-Latn"
  | "xsr"
  | "srx"
  | "sms"
  | "sk"
  | "sl"
  | "so"
  | "sma"
  | "es"
  | "sw"
  | "sv"
  | "tg"
  | "tt"
  | "tet"
  | "thf"
  | "to"
  | "tr"
  | "tk"
  | "tyv"
  | "hsb"
  | "ur"
  | "ug"
  | "uz-arab"
  | "uz-cyrl"
  | "uz"
  | "vo"
  | "wae"
  | "cy"
  | "fy"
  | "yua"
  | "za"
  | "zu"
  | "unk";
/**
 * Defines the sequence of characters to use between the lines of text recognized
 * by the OCR skill. The default value is "space".
 */
export type OcrLineEnding =
  | "space"
  | "carriageReturn"
  | "lineFeed"
  | "carriageReturnLineFeed";

/**
 * A skill that analyzes image files. It extracts a rich set of visual features
 * based on the image content.
 */
export interface ImageAnalysisSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: ImageAnalysisSkillLanguage;
  /** A list of visual features. */
  visualFeatures?: VisualFeature[];
  /** A string indicating which domain-specific details to return. */
  details?: ImageDetail[];
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.ImageAnalysisSkill";
}

export function imageAnalysisSkillSerializer(item: ImageAnalysisSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    visualFeatures: !item["visualFeatures"]
      ? item["visualFeatures"]
      : item["visualFeatures"].map((p: any) => {
          return p;
        }),
    details: !item["details"]
      ? item["details"]
      : item["details"].map((p: any) => {
          return p;
        }),
  };
}

export function imageAnalysisSkillDeserializer(item: any): ImageAnalysisSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    visualFeatures: !item["visualFeatures"]
      ? item["visualFeatures"]
      : item["visualFeatures"].map((p: any) => {
          return p;
        }),
    details: !item["details"]
      ? item["details"]
      : item["details"].map((p: any) => {
          return p;
        }),
  };
}

/** The language codes supported for input by ImageAnalysisSkill. */
export type ImageAnalysisSkillLanguage =
  | "ar"
  | "az"
  | "bg"
  | "bs"
  | "ca"
  | "cs"
  | "cy"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "et"
  | "eu"
  | "fi"
  | "fr"
  | "ga"
  | "gl"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "kk"
  | "ko"
  | "lt"
  | "lv"
  | "mk"
  | "ms"
  | "nb"
  | "nl"
  | "pl"
  | "prs"
  | "pt-BR"
  | "pt"
  | "pt-PT"
  | "ro"
  | "ru"
  | "sk"
  | "sl"
  | "sr-Cyrl"
  | "sr-Latn"
  | "sv"
  | "th"
  | "tr"
  | "uk"
  | "vi"
  | "zh"
  | "zh-Hans"
  | "zh-Hant";
/** The strings indicating what visual feature types to return. */
export type VisualFeature =
  | "adult"
  | "brands"
  | "categories"
  | "description"
  | "faces"
  | "objects"
  | "tags";
/** A string indicating which domain-specific details to return. */
export type ImageDetail = "celebrities" | "landmarks";

/**
 * A skill that detects the language of input text and reports a single language
 * code for every document submitted on the request. The language code is paired
 * with a score indicating the confidence of the analysis.
 */
export interface LanguageDetectionSkill extends SearchIndexerSkill {
  /**
   * A country code to use as a hint to the language detection model if it cannot
   * disambiguate the language.
   */
  defaultCountryHint?: string;
  /**
   * The version of the model to use when calling the Text Analytics service. It
   * will default to the latest available when not specified. We recommend you do
   * not specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.LanguageDetectionSkill";
}

export function languageDetectionSkillSerializer(
  item: LanguageDetectionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultCountryHint: item["defaultCountryHint"],
    modelVersion: item["modelVersion"],
  };
}

export function languageDetectionSkillDeserializer(
  item: any,
): LanguageDetectionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultCountryHint: item["defaultCountryHint"],
    modelVersion: item["modelVersion"],
  };
}

/**
 * A skill for reshaping the outputs. It creates a complex type to support
 * composite fields (also known as multipart fields).
 */
export interface ShaperSkill extends SearchIndexerSkill {
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.ShaperSkill";
}

export function shaperSkillSerializer(item: ShaperSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
  };
}

export function shaperSkillDeserializer(item: any): ShaperSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
  };
}

/**
 * A skill for merging two or more strings into a single unified string, with an
 * optional user-defined delimiter separating each component part.
 */
export interface MergeSkill extends SearchIndexerSkill {
  /**
   * The tag indicates the start of the merged text. By default, the tag is an empty
   * space.
   */
  insertPreTag?: string;
  /**
   * The tag indicates the end of the merged text. By default, the tag is an empty
   * space.
   */
  insertPostTag?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.MergeSkill";
}

export function mergeSkillSerializer(item: MergeSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    insertPreTag: item["insertPreTag"],
    insertPostTag: item["insertPostTag"],
  };
}

export function mergeSkillDeserializer(item: any): MergeSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    insertPreTag: item["insertPreTag"],
    insertPostTag: item["insertPostTag"],
  };
}

/** This skill is deprecated. Use the V3.EntityRecognitionSkill instead. */
export interface EntityRecognitionSkill extends SearchIndexerSkill {
  /** A list of entity categories that should be extracted. */
  categories?: EntityCategory[];
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: EntityRecognitionSkillLanguage;
  /**
   * Determines whether or not to include entities which are well known but don't
   * conform to a pre-defined type. If this configuration is not set (default), set
   * to null or set to false, entities which don't conform to one of the pre-defined
   * types will not be surfaced.
   */
  includeTypelessEntities?: boolean;
  /**
   * A value between 0 and 1 that be used to only include entities whose confidence
   * score is greater than the value specified. If not set (default), or if
   * explicitly set to null, all entities will be included.
   */
  minimumPrecision?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.EntityRecognitionSkill";
}

export function entityRecognitionSkillSerializer(
  item: EntityRecognitionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeTypelessEntities: item["includeTypelessEntities"],
    minimumPrecision: item["minimumPrecision"],
  };
}

export function entityRecognitionSkillDeserializer(
  item: any,
): EntityRecognitionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeTypelessEntities: item["includeTypelessEntities"],
    minimumPrecision: item["minimumPrecision"],
  };
}

/** A string indicating what entity categories to return. */
export type EntityCategory =
  | "location"
  | "organization"
  | "person"
  | "quantity"
  | "datetime"
  | "url"
  | "email";
/**
 * Deprecated. The language codes supported for input text by
 * EntityRecognitionSkill.
 */
export type EntityRecognitionSkillLanguage =
  | "ar"
  | "cs"
  | "zh-Hans"
  | "zh-Hant"
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "hu"
  | "it"
  | "ja"
  | "ko"
  | "no"
  | "pl"
  | "pt-PT"
  | "pt-BR"
  | "ru"
  | "es"
  | "sv"
  | "tr";

/** This skill is deprecated. Use the V3.SentimentSkill instead. */
export interface SentimentSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: SentimentSkillLanguage;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.SentimentSkill";
}

export function sentimentSkillSerializer(item: SentimentSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
  };
}

export function sentimentSkillDeserializer(item: any): SentimentSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
  };
}

/** Deprecated. The language codes supported for input text by SentimentSkill. */
export type SentimentSkillLanguage =
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "it"
  | "no"
  | "pl"
  | "pt-PT"
  | "ru"
  | "es"
  | "sv"
  | "tr";

/**
 * Using the Text Analytics API, evaluates unstructured text and for each record,
 * provides sentiment labels (such as "negative", "neutral" and "positive") based
 * on the highest confidence score found by the service at a sentence and
 * document-level.
 */
export interface SentimentSkillV3 extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /**
   * If set to true, the skill output will include information from Text Analytics
   * for opinion mining, namely targets (nouns or verbs) and their associated
   * assessment (adjective) in the text. Default is false.
   */
  includeOpinionMining?: boolean;
  /**
   * The version of the model to use when calling the Text Analytics service. It
   * will default to the latest available when not specified. We recommend you do
   * not specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.SentimentSkill";
}

export function sentimentSkillV3Serializer(item: SentimentSkillV3): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeOpinionMining: item["includeOpinionMining"],
    modelVersion: item["modelVersion"],
  };
}

export function sentimentSkillV3Deserializer(item: any): SentimentSkillV3 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    includeOpinionMining: item["includeOpinionMining"],
    modelVersion: item["modelVersion"],
  };
}

/** Using the Text Analytics API, extracts linked entities from text. */
export interface EntityLinkingSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /**
   * A value between 0 and 1 that be used to only include entities whose confidence
   * score is greater than the value specified. If not set (default), or if
   * explicitly set to null, all entities will be included.
   */
  minimumPrecision?: number;
  /**
   * The version of the model to use when calling the Text Analytics service. It
   * will default to the latest available when not specified. We recommend you do
   * not specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.EntityLinkingSkill";
}

export function entityLinkingSkillSerializer(item: EntityLinkingSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

export function entityLinkingSkillDeserializer(item: any): EntityLinkingSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

/** Using the Text Analytics API, extracts entities of different types from text. */
export interface EntityRecognitionSkillV3 extends SearchIndexerSkill {
  /** A list of entity categories that should be extracted. */
  categories?: string[];
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /**
   * A value between 0 and 1 that be used to only include entities whose confidence
   * score is greater than the value specified. If not set (default), or if
   * explicitly set to null, all entities will be included.
   */
  minimumPrecision?: number;
  /**
   * The version of the model to use when calling the Text Analytics API. It will
   * default to the latest available when not specified. We recommend you do not
   * specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.V3.EntityRecognitionSkill";
}

export function entityRecognitionSkillV3Serializer(
  item: EntityRecognitionSkillV3,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

export function entityRecognitionSkillV3Deserializer(
  item: any,
): EntityRecognitionSkillV3 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    categories: !item["categories"]
      ? item["categories"]
      : item["categories"].map((p: any) => {
          return p;
        }),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    modelVersion: item["modelVersion"],
  };
}

/**
 * Using the Text Analytics API, extracts personal information from an input text
 * and gives you the option of masking it.
 */
export interface PIIDetectionSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: string;
  /**
   * A value between 0 and 1 that be used to only include entities whose confidence
   * score is greater than the value specified. If not set (default), or if
   * explicitly set to null, all entities will be included.
   */
  minimumPrecision?: number;
  /**
   * A parameter that provides various ways to mask the personal information
   * detected in the input text. Default is 'none'.
   */
  maskingMode?: PIIDetectionSkillMaskingMode;
  /**
   * The character used to mask the text if the maskingMode parameter is set to
   * replace. Default is '*'.
   */
  mask?: string;
  /**
   * The version of the model to use when calling the Text Analytics service. It
   * will default to the latest available when not specified. We recommend you do
   * not specify this value unless absolutely necessary.
   */
  modelVersion?: string;
  /** A list of PII entity categories that should be extracted and masked. */
  piiCategories?: string[];
  /**
   * If specified, will set the PII domain to include only a subset of the entity
   * categories. Possible values include: 'phi', 'none'. Default is 'none'.
   */
  domain?: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.PIIDetectionSkill";
}

export function piiDetectionSkillSerializer(item: PIIDetectionSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    maskingMode: item["maskingMode"],
    maskingCharacter: item["mask"],
    modelVersion: item["modelVersion"],
    piiCategories: !item["piiCategories"]
      ? item["piiCategories"]
      : item["piiCategories"].map((p: any) => {
          return p;
        }),
    domain: item["domain"],
  };
}

export function piiDetectionSkillDeserializer(item: any): PIIDetectionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    minimumPrecision: item["minimumPrecision"],
    maskingMode: item["maskingMode"],
    mask: item["maskingCharacter"],
    modelVersion: item["modelVersion"],
    piiCategories: !item["piiCategories"]
      ? item["piiCategories"]
      : item["piiCategories"].map((p: any) => {
          return p;
        }),
    domain: item["domain"],
  };
}

/**
 * A string indicating what maskingMode to use to mask the personal information
 * detected in the input text.
 */
export type PIIDetectionSkillMaskingMode = "none" | "replace";

/** A skill to split a string into chunks of text. */
export interface SplitSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: SplitSkillLanguage;
  /** A value indicating which split mode to perform. */
  textSplitMode?: TextSplitMode;
  /** The desired maximum page length. Default is 10000. */
  maximumPageLength?: number;
  /**
   * Only applicable when textSplitMode is set to 'pages'. If specified, n+1th chunk
   * will start with this number of characters/tokens from the end of the nth chunk.
   */
  pageOverlapLength?: number;
  /**
   * Only applicable when textSplitMode is set to 'pages'. If specified, the
   * SplitSkill will discontinue splitting after processing the first 'maximumPagesToTake'
   * pages, in order to improve performance when only a few
   * initial pages are needed from each document.
   */
  maximumPagesToTake?: number;
  /**
   * Only applies if textSplitMode is set to pages. There are two possible values.
   * The choice of the values will decide the length (maximumPageLength and
   * pageOverlapLength) measurement. The default is 'characters', which means the
   * length will be measured by character.
   */
  unit?: SplitSkillUnit;
  /**
   * Only applies if the unit is set to azureOpenAITokens. If specified, the
   * splitSkill will use these parameters when performing the tokenization. The
   * parameters are a valid 'encoderModelName' and an optional 'allowedSpecialTokens' property.
   */
  azureOpenAITokenizerParameters?: AzureOpenAITokenizerParameters;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.SplitSkill";
}

export function splitSkillSerializer(item: SplitSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    textSplitMode: item["textSplitMode"],
    maximumPageLength: item["maximumPageLength"],
    pageOverlapLength: item["pageOverlapLength"],
    maximumPagesToTake: item["maximumPagesToTake"],
    unit: item["unit"],
    azureOpenAITokenizerParameters: !item["azureOpenAITokenizerParameters"]
      ? item["azureOpenAITokenizerParameters"]
      : azureOpenAITokenizerParametersSerializer(
          item["azureOpenAITokenizerParameters"],
        ),
  };
}

export function splitSkillDeserializer(item: any): SplitSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    textSplitMode: item["textSplitMode"],
    maximumPageLength: item["maximumPageLength"],
    pageOverlapLength: item["pageOverlapLength"],
    maximumPagesToTake: item["maximumPagesToTake"],
    unit: item["unit"],
    azureOpenAITokenizerParameters: !item["azureOpenAITokenizerParameters"]
      ? item["azureOpenAITokenizerParameters"]
      : azureOpenAITokenizerParametersDeserializer(
          item["azureOpenAITokenizerParameters"],
        ),
  };
}

/** The language codes supported for input text by SplitSkill. */
export type SplitSkillLanguage =
  | "am"
  | "bs"
  | "cs"
  | "da"
  | "de"
  | "en"
  | "es"
  | "et"
  | "fi"
  | "fr"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "is"
  | "it"
  | "ja"
  | "ko"
  | "lv"
  | "nb"
  | "nl"
  | "pl"
  | "pt"
  | "pt-br"
  | "ru"
  | "sk"
  | "sl"
  | "sr"
  | "sv"
  | "tr"
  | "ur"
  | "zh";
/** A value indicating which split mode to perform. */
export type TextSplitMode = "pages" | "sentences";
/** A value indicating which unit to use. */
export type SplitSkillUnit = "characters" | "azureOpenAITokens";

/** Azure OpenAI Tokenizer parameters. */
export interface AzureOpenAITokenizerParameters {
  /**
   * Only applies if the unit is set to azureOpenAITokens. Options include
   * 'R50k_base', 'P50k_base', 'P50k_edit' and 'CL100k_base'. The default value is 'CL100k_base'.
   */
  encoderModelName?: SplitSkillEncoderModelName;
  /**
   * (Optional) Only applies if the unit is set to azureOpenAITokens. This parameter
   * defines a collection of special tokens that are permitted within the
   * tokenization process.
   */
  allowedSpecialTokens?: string[];
}

export function azureOpenAITokenizerParametersSerializer(
  item: AzureOpenAITokenizerParameters,
): any {
  return {
    encoderModelName: item["encoderModelName"],
    allowedSpecialTokens: !item["allowedSpecialTokens"]
      ? item["allowedSpecialTokens"]
      : item["allowedSpecialTokens"].map((p: any) => {
          return p;
        }),
  };
}

export function azureOpenAITokenizerParametersDeserializer(
  item: any,
): AzureOpenAITokenizerParameters {
  return {
    encoderModelName: item["encoderModelName"],
    allowedSpecialTokens: !item["allowedSpecialTokens"]
      ? item["allowedSpecialTokens"]
      : item["allowedSpecialTokens"].map((p: any) => {
          return p;
        }),
  };
}

/** A value indicating which tokenizer to use. */
export type SplitSkillEncoderModelName =
  | "r50k_base"
  | "p50k_base"
  | "p50k_edit"
  | "cl100k_base";

/** A skill looks for text from a custom, user-defined list of words and phrases. */
export interface CustomEntityLookupSkill extends SearchIndexerSkill {
  /** A value indicating which language code to use. Default is `en`. */
  defaultLanguageCode?: CustomEntityLookupSkillLanguage;
  /**
   * Path to a JSON or CSV file containing all the target text to match against.
   * This entity definition is read at the beginning of an indexer run. Any updates
   * to this file during an indexer run will not take effect until subsequent runs.
   * This config must be accessible over HTTPS.
   */
  entitiesDefinitionUri?: string;
  /** The inline CustomEntity definition. */
  inlineEntitiesDefinition?: CustomEntity[];
  /**
   * A global flag for CaseSensitive. If CaseSensitive is not set in CustomEntity,
   * this value will be the default value.
   */
  globalDefaultCaseSensitive?: boolean;
  /**
   * A global flag for AccentSensitive. If AccentSensitive is not set in
   * CustomEntity, this value will be the default value.
   */
  globalDefaultAccentSensitive?: boolean;
  /**
   * A global flag for FuzzyEditDistance. If FuzzyEditDistance is not set in
   * CustomEntity, this value will be the default value.
   */
  globalDefaultFuzzyEditDistance?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.CustomEntityLookupSkill";
}

export function customEntityLookupSkillSerializer(
  item: CustomEntityLookupSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    entitiesDefinitionUri: item["entitiesDefinitionUri"],
    inlineEntitiesDefinition: !item["inlineEntitiesDefinition"]
      ? item["inlineEntitiesDefinition"]
      : customEntityArraySerializer(item["inlineEntitiesDefinition"]),
    globalDefaultCaseSensitive: item["globalDefaultCaseSensitive"],
    globalDefaultAccentSensitive: item["globalDefaultAccentSensitive"],
    globalDefaultFuzzyEditDistance: item["globalDefaultFuzzyEditDistance"],
  };
}

export function customEntityLookupSkillDeserializer(
  item: any,
): CustomEntityLookupSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultLanguageCode: item["defaultLanguageCode"],
    entitiesDefinitionUri: item["entitiesDefinitionUri"],
    inlineEntitiesDefinition: !item["inlineEntitiesDefinition"]
      ? item["inlineEntitiesDefinition"]
      : customEntityArrayDeserializer(item["inlineEntitiesDefinition"]),
    globalDefaultCaseSensitive: item["globalDefaultCaseSensitive"],
    globalDefaultAccentSensitive: item["globalDefaultAccentSensitive"],
    globalDefaultFuzzyEditDistance: item["globalDefaultFuzzyEditDistance"],
  };
}

/** The language codes supported for input text by CustomEntityLookupSkill. */
export type CustomEntityLookupSkillLanguage =
  | "da"
  | "de"
  | "en"
  | "es"
  | "fi"
  | "fr"
  | "it"
  | "ko"
  | "pt";

export function customEntityArraySerializer(
  result: Array<CustomEntity>,
): any[] {
  return result.map((item) => {
    return customEntitySerializer(item);
  });
}

export function customEntityArrayDeserializer(
  result: Array<CustomEntity>,
): any[] {
  return result.map((item) => {
    return customEntityDeserializer(item);
  });
}

/**
 * An object that contains information about the matches that were found, and
 * related metadata.
 */
export interface CustomEntity {
  /**
   * The top-level entity descriptor. Matches in the skill output will be grouped by
   * this name, and it should represent the "normalized" form of the text being
   * found.
   */
  name: string;
  /**
   * This field can be used as a passthrough for custom metadata about the matched
   * text(s). The value of this field will appear with every match of its entity in
   * the skill output.
   */
  description?: string;
  /**
   * This field can be used as a passthrough for custom metadata about the matched
   * text(s). The value of this field will appear with every match of its entity in
   * the skill output.
   */
  type?: string;
  /**
   * This field can be used as a passthrough for custom metadata about the matched
   * text(s). The value of this field will appear with every match of its entity in
   * the skill output.
   */
  subtype?: string;
  /**
   * This field can be used as a passthrough for custom metadata about the matched
   * text(s). The value of this field will appear with every match of its entity in
   * the skill output.
   */
  id?: string;
  /**
   * Defaults to false. Boolean value denoting whether comparisons with the entity
   * name should be sensitive to character casing. Sample case insensitive matches
   * of "Microsoft" could be: microsoft, microSoft, MICROSOFT.
   */
  caseSensitive?: boolean;
  /**
   * Defaults to false. Boolean value denoting whether comparisons with the entity
   * name should be sensitive to accent.
   */
  accentSensitive?: boolean;
  /**
   * Defaults to 0. Maximum value of 5. Denotes the acceptable number of divergent
   * characters that would still constitute a match with the entity name. The
   * smallest possible fuzziness for any given match is returned. For instance, if
   * the edit distance is set to 3, "Windows10" would still match "Windows",
   * "Windows10" and "Windows 7". When case sensitivity is set to false, case
   * differences do NOT count towards fuzziness tolerance, but otherwise do.
   */
  fuzzyEditDistance?: number;
  /**
   * Changes the default case sensitivity value for this entity. It be used to
   * change the default value of all aliases caseSensitive values.
   */
  defaultCaseSensitive?: boolean;
  /**
   * Changes the default accent sensitivity value for this entity. It be used to
   * change the default value of all aliases accentSensitive values.
   */
  defaultAccentSensitive?: boolean;
  /**
   * Changes the default fuzzy edit distance value for this entity. It can be used
   * to change the default value of all aliases fuzzyEditDistance values.
   */
  defaultFuzzyEditDistance?: number;
  /**
   * An array of complex objects that can be used to specify alternative spellings
   * or synonyms to the root entity name.
   */
  aliases?: CustomEntityAlias[];
}

export function customEntitySerializer(item: CustomEntity): any {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subtype: item["subtype"],
    id: item["id"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
    defaultCaseSensitive: item["defaultCaseSensitive"],
    defaultAccentSensitive: item["defaultAccentSensitive"],
    defaultFuzzyEditDistance: item["defaultFuzzyEditDistance"],
    aliases: !item["aliases"]
      ? item["aliases"]
      : customEntityAliasArraySerializer(item["aliases"]),
  };
}

export function customEntityDeserializer(item: any): CustomEntity {
  return {
    name: item["name"],
    description: item["description"],
    type: item["type"],
    subtype: item["subtype"],
    id: item["id"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
    defaultCaseSensitive: item["defaultCaseSensitive"],
    defaultAccentSensitive: item["defaultAccentSensitive"],
    defaultFuzzyEditDistance: item["defaultFuzzyEditDistance"],
    aliases: !item["aliases"]
      ? item["aliases"]
      : customEntityAliasArrayDeserializer(item["aliases"]),
  };
}

export function customEntityAliasArraySerializer(
  result: Array<CustomEntityAlias>,
): any[] {
  return result.map((item) => {
    return customEntityAliasSerializer(item);
  });
}

export function customEntityAliasArrayDeserializer(
  result: Array<CustomEntityAlias>,
): any[] {
  return result.map((item) => {
    return customEntityAliasDeserializer(item);
  });
}

/**
 * A complex object that can be used to specify alternative spellings or synonyms
 * to the root entity name.
 */
export interface CustomEntityAlias {
  /** The text of the alias. */
  text: string;
  /** Determine if the alias is case sensitive. */
  caseSensitive?: boolean;
  /** Determine if the alias is accent sensitive. */
  accentSensitive?: boolean;
  /** Determine the fuzzy edit distance of the alias. */
  fuzzyEditDistance?: number;
}

export function customEntityAliasSerializer(item: CustomEntityAlias): any {
  return {
    text: item["text"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
  };
}

export function customEntityAliasDeserializer(item: any): CustomEntityAlias {
  return {
    text: item["text"],
    caseSensitive: item["caseSensitive"],
    accentSensitive: item["accentSensitive"],
    fuzzyEditDistance: item["fuzzyEditDistance"],
  };
}

/** A skill to translate text from one language to another. */
export interface TextTranslationSkill extends SearchIndexerSkill {
  /**
   * The language code to translate documents into for documents that don't specify
   * the to language explicitly.
   */
  defaultToLanguageCode: TextTranslationSkillLanguage;
  /**
   * The language code to translate documents from for documents that don't specify
   * the from language explicitly.
   */
  defaultFromLanguageCode?: TextTranslationSkillLanguage;
  /**
   * The language code to translate documents from when neither the fromLanguageCode
   * input nor the defaultFromLanguageCode parameter are provided, and the automatic
   * language detection is unsuccessful. Default is `en`.
   */
  suggestedFrom?: TextTranslationSkillLanguage;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.TranslationSkill";
}

export function textTranslationSkillSerializer(
  item: TextTranslationSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    defaultToLanguageCode: item["defaultToLanguageCode"],
    defaultFromLanguageCode: item["defaultFromLanguageCode"],
    suggestedFrom: item["suggestedFrom"],
  };
}

export function textTranslationSkillDeserializer(
  item: any,
): TextTranslationSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    defaultToLanguageCode: item["defaultToLanguageCode"],
    defaultFromLanguageCode: item["defaultFromLanguageCode"],
    suggestedFrom: item["suggestedFrom"],
  };
}

/** The language codes supported for input text by TextTranslationSkill. */
export type TextTranslationSkillLanguage =
  | "af"
  | "ar"
  | "bn"
  | "bs"
  | "bg"
  | "yue"
  | "ca"
  | "zh-Hans"
  | "zh-Hant"
  | "hr"
  | "cs"
  | "da"
  | "nl"
  | "en"
  | "et"
  | "fj"
  | "fil"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "ht"
  | "he"
  | "hi"
  | "mww"
  | "hu"
  | "is"
  | "id"
  | "it"
  | "ja"
  | "sw"
  | "tlh"
  | "tlh-Latn"
  | "tlh-Piqd"
  | "ko"
  | "lv"
  | "lt"
  | "mg"
  | "ms"
  | "mt"
  | "nb"
  | "fa"
  | "pl"
  | "pt"
  | "pt-br"
  | "pt-PT"
  | "otq"
  | "ro"
  | "ru"
  | "sm"
  | "sr-Cyrl"
  | "sr-Latn"
  | "sk"
  | "sl"
  | "es"
  | "sv"
  | "ty"
  | "ta"
  | "te"
  | "th"
  | "to"
  | "tr"
  | "uk"
  | "ur"
  | "vi"
  | "cy"
  | "yua"
  | "ga"
  | "kn"
  | "mi"
  | "ml"
  | "pa";

/** A skill that extracts content from a file within the enrichment pipeline. */
export interface DocumentExtractionSkill extends SearchIndexerSkill {
  /** The parsingMode for the skill. Will be set to 'default' if not defined. */
  parsingMode?: string;
  /** The type of data to be extracted for the skill. Will be set to 'contentAndMetadata' if not defined. */
  dataToExtract?: string;
  /** A dictionary of configurations for the skill. */
  configuration?: Record<string, any>;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.DocumentExtractionSkill";
}

export function documentExtractionSkillSerializer(
  item: DocumentExtractionSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    parsingMode: item["parsingMode"],
    dataToExtract: item["dataToExtract"],
    configuration: item["configuration"],
  };
}

export function documentExtractionSkillDeserializer(
  item: any,
): DocumentExtractionSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    parsingMode: item["parsingMode"],
    dataToExtract: item["dataToExtract"],
    configuration: item["configuration"],
  };
}

/**
 * A skill that extracts content and layout information (as markdown), via Azure
 * AI Services, from files within the enrichment pipeline.
 */
export interface DocumentIntelligenceLayoutSkill extends SearchIndexerSkill {
  /** Controls the cardinality of the output produced by the skill. Default is 'oneToMany'. */
  outputMode?: DocumentIntelligenceLayoutSkillOutputMode;
  /** The depth of headers in the markdown output. Default is h6. */
  markdownHeaderDepth?: DocumentIntelligenceLayoutSkillMarkdownHeaderDepth;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill";
}

export function documentIntelligenceLayoutSkillSerializer(
  item: DocumentIntelligenceLayoutSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    outputMode: item["outputMode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
  };
}

export function documentIntelligenceLayoutSkillDeserializer(
  item: any,
): DocumentIntelligenceLayoutSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    outputMode: item["outputMode"],
    markdownHeaderDepth: item["markdownHeaderDepth"],
  };
}

/** Controls the cardinality of the output produced by the skill. Default is 'oneToMany' */
export type DocumentIntelligenceLayoutSkillOutputMode = "oneToMany";
/** The depth of headers in the markdown output. Default is h6. */
export type DocumentIntelligenceLayoutSkillMarkdownHeaderDepth =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

/**
 * A skill that can call a Web API endpoint, allowing you to extend a skillset by
 * having it call your custom code.
 */
export interface WebApiSkill extends SearchIndexerSkill {
  /** The url for the Web API. */
  uri: string;
  /** The headers required to make the http request. */
  httpHeaders?: Record<string, string>;
  /** The method for the http request. */
  httpMethod?: string;
  /** The desired timeout for the request. Default is 30 seconds. */
  timeout?: string;
  /** The desired batch size which indicates number of documents. */
  batchSize?: number;
  /** If set, the number of parallel calls that can be made to the Web API. */
  degreeOfParallelism?: number;
  /**
   * Applies to custom skills that connect to external code in an Azure function or
   * some other application that provides the transformations. This value should be
   * the application ID created for the function or app when it was registered with
   * Azure Active Directory. When specified, the custom skill connects to the
   * function or app using a managed ID (either system or user-assigned) of the
   * search service and the access token of the function or app, using this value as
   * the resource id for creating the scope of the access token.
   */
  authResourceId?: string;
  /**
   * The user-assigned managed identity used for outbound connections. If an
   * authResourceId is provided and it's not specified, the system-assigned managed
   * identity is used. On updates to the indexer, if the identity is unspecified,
   * the value remains unchanged. If set to "none", the value of this property is
   * cleared.
   */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Custom.WebApiSkill";
}

export function webApiSkillSerializer(item: WebApiSkill): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    uri: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionSerializer(item["authIdentity"]),
  };
}

export function webApiSkillDeserializer(item: any): WebApiSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    uri: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    batchSize: item["batchSize"],
    degreeOfParallelism: item["degreeOfParallelism"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionDeserializer(item["authIdentity"]),
  };
}

/**
 * The AML skill allows you to extend AI enrichment with a custom Azure Machine
 * Learning (AML) model. Once an AML model is trained and deployed, an AML skill
 * integrates it into AI enrichment.
 */
export interface AzureMachineLearningSkill extends SearchIndexerSkill {
  /**
   * (Required for no authentication or key authentication) The scoring URI of the
   * AML service to which the JSON payload will be sent. Only the https URI scheme
   * is allowed.
   */
  scoringUri?: string;
  /** (Required for key authentication) The key for the AML service. */
  authenticationKey?: string;
  /**
   * (Required for token authentication). The Azure Resource Manager resource ID of
   * the AML service. It should be in the format
   * subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.MachineLearningServices/workspaces/{workspace-name}/services/{service_name}.
   */
  resourceId?: string;
  /**
   * (Optional) When specified, indicates the timeout for the http client making the
   * API call.
   */
  timeout?: string;
  /** (Optional for token authentication). The region the AML service is deployed in. */
  region?: string;
  /**
   * (Optional) When specified, indicates the number of calls the indexer will make
   * in parallel to the endpoint you have provided. You can decrease this value if
   * your endpoint is failing under too high of a request load, or raise it if your
   * endpoint is able to accept more requests and you would like an increase in the
   * performance of the indexer. If not set, a default value of 5 is used. The
   * degreeOfParallelism can be set to a maximum of 10 and a minimum of 1.
   */
  degreeOfParallelism?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Custom.AmlSkill";
}

export function azureMachineLearningSkillSerializer(
  item: AzureMachineLearningSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    uri: item["scoringUri"],
    key: item["authenticationKey"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    degreeOfParallelism: item["degreeOfParallelism"],
  };
}

export function azureMachineLearningSkillDeserializer(
  item: any,
): AzureMachineLearningSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    scoringUri: item["uri"],
    authenticationKey: item["key"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    degreeOfParallelism: item["degreeOfParallelism"],
  };
}

/**
 * Allows you to generate a vector embedding for a given text input using the
 * Azure OpenAI resource.
 */
export interface AzureOpenAIEmbeddingSkill extends SearchIndexerSkill {
  /** The resource URI of the Azure OpenAI resource. */
  resourceUrl?: string;
  /** ID of the Azure OpenAI model deployment on the designated resource. */
  deploymentName?: string;
  /** API key of the designated Azure OpenAI resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /**
   * The name of the embedding model that is deployed at the provided deploymentId
   * path.
   */
  modelName?: AzureOpenAIModelName;
  /**
   * The number of dimensions the resulting output embeddings should have. Only
   * supported in text-embedding-3 and later models.
   */
  dimensions?: number;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill";
}

export function azureOpenAIEmbeddingSkillSerializer(
  item: AzureOpenAIEmbeddingSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    resourceUri: item["resourceUrl"],
    deploymentId: item["deploymentName"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionSerializer(item["authIdentity"]),
    modelName: item["modelName"],
    dimensions: item["dimensions"],
  };
}

export function azureOpenAIEmbeddingSkillDeserializer(
  item: any,
): AzureOpenAIEmbeddingSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    resourceUrl: item["resourceUri"],
    deploymentName: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionDeserializer(item["authIdentity"]),
    modelName: item["modelName"],
    dimensions: item["dimensions"],
  };
}

/** The Azure Open AI model name that will be called. */
export type AzureOpenAIModelName =
  | "text-embedding-ada-002"
  | "text-embedding-3-large"
  | "text-embedding-3-small";

/**
 * Allows you to generate a vector embedding for a given image or text input using
 * the Azure AI Services Vision Vectorize API.
 */
export interface VisionVectorizeSkill extends SearchIndexerSkill {
  /**
   * The version of the model to use when calling the AI Services Vision service. It
   * will default to the latest available when not specified.
   */
  modelVersion: string;
  /** A URI fragment specifying the type of skill. */
  odataType: "#Microsoft.Skills.Vision.VectorizeSkill";
}

export function visionVectorizeSkillSerializer(
  item: VisionVectorizeSkill,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArraySerializer(item["inputs"]),
    outputs: outputFieldMappingEntryArraySerializer(item["outputs"]),
    modelVersion: item["modelVersion"],
  };
}

export function visionVectorizeSkillDeserializer(
  item: any,
): VisionVectorizeSkill {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    description: item["description"],
    context: item["context"],
    inputs: inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    outputs: outputFieldMappingEntryArrayDeserializer(item["outputs"]),
    modelVersion: item["modelVersion"],
  };
}

/** Base type for describing any Azure AI service resource attached to a skillset. */
export interface CognitiveServicesAccount {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.DefaultCognitiveServices, #Microsoft.Azure.Search.CognitiveServicesByKey, #Microsoft.Azure.Search.AIServicesByKey, #Microsoft.Azure.Search.AIServicesByIdentity */
  odataType: string;
  /** Description of the Azure AI service resource attached to a skillset. */
  description?: string;
}

export function cognitiveServicesAccountSerializer(
  item: CognitiveServicesAccount,
): any {
  return { "@odata.type": item["odataType"], description: item["description"] };
}

export function cognitiveServicesAccountDeserializer(
  item: any,
): CognitiveServicesAccount {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
  };
}

/** Alias for CognitiveServicesAccountUnion */
export type CognitiveServicesAccountUnion =
  | DefaultCognitiveServicesAccount
  | CognitiveServicesAccountKey
  | AIServicesAccountKey
  | AIServicesAccountIdentity
  | CognitiveServicesAccount;

export function cognitiveServicesAccountUnionSerializer(
  item: CognitiveServicesAccountUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DefaultCognitiveServices":
      return defaultCognitiveServicesAccountSerializer(
        item as DefaultCognitiveServicesAccount,
      );

    case "#Microsoft.Azure.Search.CognitiveServicesByKey":
      return cognitiveServicesAccountKeySerializer(
        item as CognitiveServicesAccountKey,
      );

    case "#Microsoft.Azure.Search.AIServicesByKey":
      return aiServicesAccountKeySerializer(item as AIServicesAccountKey);

    case "#Microsoft.Azure.Search.AIServicesByIdentity":
      return aiServicesAccountIdentitySerializer(
        item as AIServicesAccountIdentity,
      );

    default:
      return cognitiveServicesAccountSerializer(item);
  }
}

export function cognitiveServicesAccountUnionDeserializer(
  item: any,
): CognitiveServicesAccountUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.DefaultCognitiveServices":
      return defaultCognitiveServicesAccountDeserializer(
        item as DefaultCognitiveServicesAccount,
      );

    case "#Microsoft.Azure.Search.CognitiveServicesByKey":
      return cognitiveServicesAccountKeyDeserializer(
        item as CognitiveServicesAccountKey,
      );

    case "#Microsoft.Azure.Search.AIServicesByKey":
      return aiServicesAccountKeyDeserializer(item as AIServicesAccountKey);

    case "#Microsoft.Azure.Search.AIServicesByIdentity":
      return aiServicesAccountIdentityDeserializer(
        item as AIServicesAccountIdentity,
      );

    default:
      return cognitiveServicesAccountDeserializer(item);
  }
}

/**
 * An empty object that represents the default Azure AI service resource for a
 * skillset.
 */
export interface DefaultCognitiveServicesAccount
  extends CognitiveServicesAccount {
  /**
   * A URI fragment specifying the type of Azure AI service resource attached to a
   * skillset.
   */
  odataType: "#Microsoft.Azure.Search.DefaultCognitiveServices";
}

export function defaultCognitiveServicesAccountSerializer(
  item: DefaultCognitiveServicesAccount,
): any {
  return { "@odata.type": item["odataType"], description: item["description"] };
}

export function defaultCognitiveServicesAccountDeserializer(
  item: any,
): DefaultCognitiveServicesAccount {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
  };
}

/**
 * The multi-region account key of an Azure AI service resource that's attached to
 * a skillset.
 */
export interface CognitiveServicesAccountKey extends CognitiveServicesAccount {
  /** The key used to provision the Azure AI service resource attached to a skillset. */
  key: string;
  /**
   * A URI fragment specifying the type of Azure AI service resource attached to a
   * skillset.
   */
  odataType: "#Microsoft.Azure.Search.CognitiveServicesByKey";
}

export function cognitiveServicesAccountKeySerializer(
  item: CognitiveServicesAccountKey,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    key: item["key"],
  };
}

export function cognitiveServicesAccountKeyDeserializer(
  item: any,
): CognitiveServicesAccountKey {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    key: item["key"],
  };
}

/**
 * The account key of an Azure AI service resource that's attached to a skillset,
 * to be used with the resource's subdomain.
 */
export interface AIServicesAccountKey extends CognitiveServicesAccount {
  /** The key used to provision the Azure AI service resource attached to a skillset. */
  key: string;
  /** The subdomain url for the corresponding AI Service. */
  subdomainUrl: string;
  /**
   * A URI fragment specifying the type of Azure AI service resource attached to a
   * skillset.
   */
  odataType: "#Microsoft.Azure.Search.AIServicesByKey";
}

export function aiServicesAccountKeySerializer(
  item: AIServicesAccountKey,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    key: item["key"],
    subdomainUrl: item["subdomainUrl"],
  };
}

export function aiServicesAccountKeyDeserializer(
  item: any,
): AIServicesAccountKey {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    key: item["key"],
    subdomainUrl: item["subdomainUrl"],
  };
}

/**
 * The multi-region account of an Azure AI service resource that's attached to a
 * skillset.
 */
export interface AIServicesAccountIdentity extends CognitiveServicesAccount {
  /**
   * The user-assigned managed identity used for connections to AI Service. If not
   * specified, the system-assigned managed identity is used. On updates to the
   * skillset, if the identity is unspecified, the value remains unchanged. If set
   * to "none", the value of this property is cleared.
   */
  identity?: SearchIndexerDataIdentityUnion;
  /** The subdomain url for the corresponding AI Service. */
  subdomainUrl: string;
  /**
   * A URI fragment specifying the type of Azure AI service resource attached to a
   * skillset.
   */
  odataType: "#Microsoft.Azure.Search.AIServicesByIdentity";
}

export function aiServicesAccountIdentitySerializer(
  item: AIServicesAccountIdentity,
): any {
  return {
    "@odata.type": item["odataType"],
    description: item["description"],
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionSerializer(item["identity"]),
    subdomainUrl: item["subdomainUrl"],
  };
}

export function aiServicesAccountIdentityDeserializer(
  item: any,
): AIServicesAccountIdentity {
  return {
    odataType: item["@odata.type"],
    description: item["description"],
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionDeserializer(item["identity"]),
    subdomainUrl: item["subdomainUrl"],
  };
}

/**
 * Definition of additional projections to azure blob, table, or files, of
 * enriched data.
 */
export interface SearchIndexerKnowledgeStore {
  /** The connection string to the storage account projections will be stored in. */
  storageConnectionString: string;
  /** A list of additional projections to perform during indexing. */
  projections: SearchIndexerKnowledgeStoreProjection[];
  /**
   * The user-assigned managed identity used for connections to Azure Storage when
   * writing knowledge store projections. If the connection string indicates an
   * identity (ResourceId) and it's not specified, the system-assigned managed
   * identity is used. On updates to the indexer, if the identity is unspecified,
   * the value remains unchanged. If set to "none", the value of this property is
   * cleared.
   */
  identity?: SearchIndexerDataIdentityUnion;
  /**
   * A dictionary of knowledge store-specific configuration properties. Each name is
   * the name of a specific property. Each value must be of a primitive type.
   */
  parameters?: SearchIndexerKnowledgeStoreParameters;
}

export function searchIndexerKnowledgeStoreSerializer(
  item: SearchIndexerKnowledgeStore,
): any {
  return {
    storageConnectionString: item["storageConnectionString"],
    projections: searchIndexerKnowledgeStoreProjectionArraySerializer(
      item["projections"],
    ),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionSerializer(item["identity"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : searchIndexerKnowledgeStoreParametersSerializer(item["parameters"]),
  };
}

export function searchIndexerKnowledgeStoreDeserializer(
  item: any,
): SearchIndexerKnowledgeStore {
  return {
    storageConnectionString: item["storageConnectionString"],
    projections: searchIndexerKnowledgeStoreProjectionArrayDeserializer(
      item["projections"],
    ),
    identity: !item["identity"]
      ? item["identity"]
      : searchIndexerDataIdentityUnionDeserializer(item["identity"]),
    parameters: !item["parameters"]
      ? item["parameters"]
      : searchIndexerKnowledgeStoreParametersDeserializer(item["parameters"]),
  };
}

export function searchIndexerKnowledgeStoreProjectionArraySerializer(
  result: Array<SearchIndexerKnowledgeStoreProjection>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreProjectionSerializer(item);
  });
}

export function searchIndexerKnowledgeStoreProjectionArrayDeserializer(
  result: Array<SearchIndexerKnowledgeStoreProjection>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreProjectionDeserializer(item);
  });
}

/** Container object for various projection selectors. */
export interface SearchIndexerKnowledgeStoreProjection {
  /** Projections to Azure Table storage. */
  tables?: SearchIndexerKnowledgeStoreTableProjectionSelector[];
  /** Projections to Azure Blob storage. */
  objects?: SearchIndexerKnowledgeStoreObjectProjectionSelector[];
  /** Projections to Azure File storage. */
  files?: SearchIndexerKnowledgeStoreFileProjectionSelector[];
}

export function searchIndexerKnowledgeStoreProjectionSerializer(
  item: SearchIndexerKnowledgeStoreProjection,
): any {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : searchIndexerKnowledgeStoreTableProjectionSelectorArraySerializer(
          item["tables"],
        ),
    objects: !item["objects"]
      ? item["objects"]
      : searchIndexerKnowledgeStoreObjectProjectionSelectorArraySerializer(
          item["objects"],
        ),
    files: !item["files"]
      ? item["files"]
      : searchIndexerKnowledgeStoreFileProjectionSelectorArraySerializer(
          item["files"],
        ),
  };
}

export function searchIndexerKnowledgeStoreProjectionDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreProjection {
  return {
    tables: !item["tables"]
      ? item["tables"]
      : searchIndexerKnowledgeStoreTableProjectionSelectorArrayDeserializer(
          item["tables"],
        ),
    objects: !item["objects"]
      ? item["objects"]
      : searchIndexerKnowledgeStoreObjectProjectionSelectorArrayDeserializer(
          item["objects"],
        ),
    files: !item["files"]
      ? item["files"]
      : searchIndexerKnowledgeStoreFileProjectionSelectorArrayDeserializer(
          item["files"],
        ),
  };
}

export function searchIndexerKnowledgeStoreTableProjectionSelectorArraySerializer(
  result: Array<SearchIndexerKnowledgeStoreTableProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreTableProjectionSelectorSerializer(item);
  });
}

export function searchIndexerKnowledgeStoreTableProjectionSelectorArrayDeserializer(
  result: Array<SearchIndexerKnowledgeStoreTableProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreTableProjectionSelectorDeserializer(item);
  });
}

/** Description for what data to store in Azure Tables. */
export interface SearchIndexerKnowledgeStoreTableProjectionSelector
  extends SearchIndexerKnowledgeStoreProjectionSelector {
  /** Name of the Azure table to store projected data in. */
  tableName: string;
}

export function searchIndexerKnowledgeStoreTableProjectionSelectorSerializer(
  item: SearchIndexerKnowledgeStoreTableProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArraySerializer(item["inputs"]),
    tableName: item["tableName"],
  };
}

export function searchIndexerKnowledgeStoreTableProjectionSelectorDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreTableProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    tableName: item["tableName"],
  };
}

export function searchIndexerKnowledgeStoreObjectProjectionSelectorArraySerializer(
  result: Array<SearchIndexerKnowledgeStoreObjectProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreObjectProjectionSelectorSerializer(item);
  });
}

export function searchIndexerKnowledgeStoreObjectProjectionSelectorArrayDeserializer(
  result: Array<SearchIndexerKnowledgeStoreObjectProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreObjectProjectionSelectorDeserializer(
      item,
    );
  });
}

/** Projection definition for what data to store in Azure Blob. */
export interface SearchIndexerKnowledgeStoreObjectProjectionSelector
  extends SearchIndexerKnowledgeStoreBlobProjectionSelector {}

export function searchIndexerKnowledgeStoreObjectProjectionSelectorSerializer(
  item: SearchIndexerKnowledgeStoreObjectProjectionSelector,
): any {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArraySerializer(item["inputs"]),
  };
}

export function searchIndexerKnowledgeStoreObjectProjectionSelectorDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreObjectProjectionSelector {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArrayDeserializer(item["inputs"]),
  };
}

export function searchIndexerKnowledgeStoreFileProjectionSelectorArraySerializer(
  result: Array<SearchIndexerKnowledgeStoreFileProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreFileProjectionSelectorSerializer(item);
  });
}

export function searchIndexerKnowledgeStoreFileProjectionSelectorArrayDeserializer(
  result: Array<SearchIndexerKnowledgeStoreFileProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerKnowledgeStoreFileProjectionSelectorDeserializer(item);
  });
}

/** Projection definition for what data to store in Azure Files. */
export interface SearchIndexerKnowledgeStoreFileProjectionSelector
  extends SearchIndexerKnowledgeStoreBlobProjectionSelector {}

export function searchIndexerKnowledgeStoreFileProjectionSelectorSerializer(
  item: SearchIndexerKnowledgeStoreFileProjectionSelector,
): any {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArraySerializer(item["inputs"]),
  };
}

export function searchIndexerKnowledgeStoreFileProjectionSelectorDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreFileProjectionSelector {
  return {
    storageContainer: item["storageContainer"],
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArrayDeserializer(item["inputs"]),
  };
}

/**
 * A dictionary of knowledge store-specific configuration properties. Each name is
 * the name of a specific property. Each value must be of a primitive type.
 */
export interface SearchIndexerKnowledgeStoreParameters {
  /**
   * Whether or not projections should synthesize a generated key name if one isn't
   * already present.
   */
  synthesizeGeneratedKeyName?: boolean;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function searchIndexerKnowledgeStoreParametersSerializer(
  item: SearchIndexerKnowledgeStoreParameters,
): any {
  return {
    ...serializeRecord(item.additionalProperties),
    synthesizeGeneratedKeyName: item["synthesizeGeneratedKeyName"],
  };
}

export function searchIndexerKnowledgeStoreParametersDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreParameters {
  return {
    additionalProperties: serializeRecord(item, ["synthesizeGeneratedKeyName"]),
    synthesizeGeneratedKeyName: item["synthesizeGeneratedKeyName"],
  };
}

/** Definition of additional projections to secondary search indexes. */
export interface SearchIndexerIndexProjection {
  /** A list of projections to be performed to secondary search indexes. */
  selectors: SearchIndexerIndexProjectionSelector[];
  /**
   * A dictionary of index projection-specific configuration properties. Each name
   * is the name of a specific property. Each value must be of a primitive type.
   */
  parameters?: SearchIndexerIndexProjectionsParameters;
}

export function searchIndexerIndexProjectionSerializer(
  item: SearchIndexerIndexProjection,
): any {
  return {
    selectors: searchIndexerIndexProjectionSelectorArraySerializer(
      item["selectors"],
    ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : searchIndexerIndexProjectionsParametersSerializer(item["parameters"]),
  };
}

export function searchIndexerIndexProjectionDeserializer(
  item: any,
): SearchIndexerIndexProjection {
  return {
    selectors: searchIndexerIndexProjectionSelectorArrayDeserializer(
      item["selectors"],
    ),
    parameters: !item["parameters"]
      ? item["parameters"]
      : searchIndexerIndexProjectionsParametersDeserializer(item["parameters"]),
  };
}

export function searchIndexerIndexProjectionSelectorArraySerializer(
  result: Array<SearchIndexerIndexProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerIndexProjectionSelectorSerializer(item);
  });
}

export function searchIndexerIndexProjectionSelectorArrayDeserializer(
  result: Array<SearchIndexerIndexProjectionSelector>,
): any[] {
  return result.map((item) => {
    return searchIndexerIndexProjectionSelectorDeserializer(item);
  });
}

/** Description for what data to store in the designated search index. */
export interface SearchIndexerIndexProjectionSelector {
  /** Name of the search index to project to. Must have a key field with the 'keyword' analyzer set. */
  targetIndexName: string;
  /**
   * Name of the field in the search index to map the parent document's key value
   * to. Must be a string field that is filterable and not the key field.
   */
  parentKeyFieldName: string;
  /**
   * Source context for the projections. Represents the cardinality at which the
   * document will be split into multiple sub documents.
   */
  sourceContext: string;
  /**
   * Mappings for the projection, or which source should be mapped to which field in
   * the target index.
   */
  mappings: InputFieldMappingEntry[];
}

export function searchIndexerIndexProjectionSelectorSerializer(
  item: SearchIndexerIndexProjectionSelector,
): any {
  return {
    targetIndexName: item["targetIndexName"],
    parentKeyFieldName: item["parentKeyFieldName"],
    sourceContext: item["sourceContext"],
    mappings: inputFieldMappingEntryArraySerializer(item["mappings"]),
  };
}

export function searchIndexerIndexProjectionSelectorDeserializer(
  item: any,
): SearchIndexerIndexProjectionSelector {
  return {
    targetIndexName: item["targetIndexName"],
    parentKeyFieldName: item["parentKeyFieldName"],
    sourceContext: item["sourceContext"],
    mappings: inputFieldMappingEntryArrayDeserializer(item["mappings"]),
  };
}

/**
 * A dictionary of index projection-specific configuration properties. Each name
 * is the name of a specific property. Each value must be of a primitive type.
 */
export interface SearchIndexerIndexProjectionsParameters {
  /**
   * Defines behavior of the index projections in relation to the rest of the
   * indexer.
   */
  projectionMode?: IndexProjectionMode;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function searchIndexerIndexProjectionsParametersSerializer(
  item: SearchIndexerIndexProjectionsParameters,
): any {
  return {
    ...serializeRecord(item.additionalProperties),
    projectionMode: item["projectionMode"],
  };
}

export function searchIndexerIndexProjectionsParametersDeserializer(
  item: any,
): SearchIndexerIndexProjectionsParameters {
  return {
    additionalProperties: serializeRecord(item, ["projectionMode"]),
    projectionMode: item["projectionMode"],
  };
}

/**
 * Defines behavior of the index projections in relation to the rest of the
 * indexer.
 */
export type IndexProjectionMode =
  | "skipIndexingParentDocuments"
  | "includeIndexingParentDocuments";

/** Abstract class to share properties between concrete selectors. */
export interface SearchIndexerKnowledgeStoreProjectionSelector {
  /** Name of reference key to different projection. */
  referenceKeyName?: string;
  /** Name of generated key to store projection under. */
  generatedKeyName?: string;
  /** Source data to project. */
  source?: string;
  /** Source context for complex projections. */
  sourceContext?: string;
  /** Nested inputs for complex projections. */
  inputs?: InputFieldMappingEntry[];
}

export function searchIndexerKnowledgeStoreProjectionSelectorSerializer(
  item: SearchIndexerKnowledgeStoreProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArraySerializer(item["inputs"]),
  };
}

export function searchIndexerKnowledgeStoreProjectionSelectorDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArrayDeserializer(item["inputs"]),
  };
}

/** Abstract class to share properties between concrete selectors. */
export interface SearchIndexerKnowledgeStoreBlobProjectionSelector
  extends SearchIndexerKnowledgeStoreProjectionSelector {
  /** Blob container to store projections in. */
  storageContainer: string;
}

export function searchIndexerKnowledgeStoreBlobProjectionSelectorSerializer(
  item: SearchIndexerKnowledgeStoreBlobProjectionSelector,
): any {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArraySerializer(item["inputs"]),
    storageContainer: item["storageContainer"],
  };
}

export function searchIndexerKnowledgeStoreBlobProjectionSelectorDeserializer(
  item: any,
): SearchIndexerKnowledgeStoreBlobProjectionSelector {
  return {
    referenceKeyName: item["referenceKeyName"],
    generatedKeyName: item["generatedKeyName"],
    source: item["source"],
    sourceContext: item["sourceContext"],
    inputs: !item["inputs"]
      ? item["inputs"]
      : inputFieldMappingEntryArrayDeserializer(item["inputs"]),
    storageContainer: item["storageContainer"],
  };
}

/**
 * Response from a list skillset request. If successful, it includes the full
 * definitions of all skillsets.
 */
export interface ListSkillsetsResult {
  /** The skillsets defined in the Search service. */
  skillsets: SearchIndexerSkillset[];
}

export function listSkillsetsResultDeserializer(
  item: any,
): ListSkillsetsResult {
  return {
    skillsets: searchIndexerSkillsetArrayDeserializer(item["value"]),
  };
}

export function searchIndexerSkillsetArraySerializer(
  result: Array<SearchIndexerSkillset>,
): any[] {
  return result.map((item) => {
    return searchIndexerSkillsetSerializer(item);
  });
}

export function searchIndexerSkillsetArrayDeserializer(
  result: Array<SearchIndexerSkillset>,
): any[] {
  return result.map((item) => {
    return searchIndexerSkillsetDeserializer(item);
  });
}

/** The type of the skill names. */
export interface SkillNames {
  /** the names of skills to be reset. */
  skillNames?: string[];
}

export function skillNamesSerializer(item: SkillNames): any {
  return {
    skillNames: !item["skillNames"]
      ? item["skillNames"]
      : item["skillNames"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents a synonym map definition. */
export interface SynonymMap {
  /** The name of the synonym map. */
  name: string;
  /** The format of the synonym map. Only the 'solr' format is currently supported. */
  format: "solr";
  /**
   * A series of synonym rules in the specified synonym map format. The rules must
   * be separated by newlines.
   */
  synonyms: string;
  /**
   * A description of an encryption key that you create in Azure Key Vault. This key
   * is used to provide an additional level of encryption-at-rest for your data when
   * you want full assurance that no one, not even Microsoft, can decrypt your data.
   * Once you have encrypted your data, it will always remain encrypted. The search
   * service will ignore attempts to set this property to null. You can change this
   * property as needed if you want to rotate your encryption key; Your data will be
   * unaffected. Encryption with customer-managed keys is not available for free
   * search services, and is only available for paid services created on or after
   * January 1, 2019.
   */
  encryptionKey?: SearchResourceEncryptionKey;
  /** The ETag of the synonym map. */
  eTag?: string;
}

export function synonymMapSerializer(item: SynonymMap): any {
  return {
    name: item["name"],
    format: item["format"],
    synonyms: item["synonyms"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeySerializer(item["encryptionKey"]),
    "@odata.etag": item["eTag"],
  };
}

export function synonymMapDeserializer(item: any): SynonymMap {
  return {
    name: item["name"],
    format: item["format"],
    synonyms: item["synonyms"],
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeyDeserializer(item["encryptionKey"]),
    eTag: item["@odata.etag"],
  };
}

/**
 * Response from a List SynonymMaps request. If successful, it includes the full
 * definitions of all synonym maps.
 */
export interface ListSynonymMapsResult {
  /** The synonym maps in the Search service. */
  synonymMaps: SynonymMap[];
}

export function listSynonymMapsResultDeserializer(
  item: any,
): ListSynonymMapsResult {
  return {
    synonymMaps: synonymMapArrayDeserializer(item["value"]),
  };
}

export function synonymMapArraySerializer(result: Array<SynonymMap>): any[] {
  return result.map((item) => {
    return synonymMapSerializer(item);
  });
}

export function synonymMapArrayDeserializer(result: Array<SynonymMap>): any[] {
  return result.map((item) => {
    return synonymMapDeserializer(item);
  });
}

/**
 * Represents a search index definition, which describes the fields and search
 * behavior of an index.
 */
export interface SearchIndex {
  /** The name of the index. */
  name: string;
  /** The fields of the index. */
  fields: SearchField[];
  /** The scoring profiles for the index. */
  scoringProfiles?: ScoringProfile[];
  /**
   * The name of the scoring profile to use if none is specified in the query. If
   * this property is not set and no scoring profile is specified in the query, then
   * default scoring (tf-idf) will be used.
   */
  defaultScoringProfile?: string;
  /** Options to control Cross-Origin Resource Sharing (CORS) for the index. */
  corsOptions?: CorsOptions;
  /** The suggesters for the index. */
  suggesters?: SearchSuggester[];
  /** The analyzers for the index. */
  analyzers?: LexicalAnalyzerUnion[];
  /** The tokenizers for the index. */
  tokenizers?: LexicalTokenizerUnion[];
  /** The token filters for the index. */
  tokenFilters?: TokenFilterUnion[];
  /** The character filters for the index. */
  charFilters?: CharFilterUnion[];
  /** The normalizers for the index. */
  normalizers?: LexicalNormalizerUnion[];
  /**
   * A description of an encryption key that you create in Azure Key Vault. This key
   * is used to provide an additional level of encryption-at-rest for your data when
   * you want full assurance that no one, not even Microsoft, can decrypt your data.
   * Once you have encrypted your data, it will always remain encrypted. The search
   * service will ignore attempts to set this property to null. You can change this
   * property as needed if you want to rotate your encryption key; Your data will be
   * unaffected. Encryption with customer-managed keys is not available for free
   * search services, and is only available for paid services created on or after
   * January 1, 2019.
   */
  encryptionKey?: SearchResourceEncryptionKey;
  /**
   * The type of similarity algorithm to be used when scoring and ranking the
   * documents matching a search query. The similarity algorithm can only be defined
   * at index creation time and cannot be modified on existing indexes. If null, the
   * ClassicSimilarity algorithm is used.
   */
  similarity?: SimilarityAlgorithmUnion;
  /** Defines parameters for a search index that influence semantic capabilities. */
  semanticSearch?: SemanticSearch;
  /** Contains configuration options related to vector search. */
  vectorSearch?: VectorSearch;
  /** The ETag of the index. */
  eTag?: string;
}

export function searchIndexSerializer(item: SearchIndex): any {
  return {
    name: item["name"],
    fields: searchFieldArraySerializer(item["fields"]),
    scoringProfiles: !item["scoringProfiles"]
      ? item["scoringProfiles"]
      : scoringProfileArraySerializer(item["scoringProfiles"]),
    defaultScoringProfile: item["defaultScoringProfile"],
    corsOptions: !item["corsOptions"]
      ? item["corsOptions"]
      : corsOptionsSerializer(item["corsOptions"]),
    suggesters: !item["suggesters"]
      ? item["suggesters"]
      : searchSuggesterArraySerializer(item["suggesters"]),
    analyzers: !item["analyzers"]
      ? item["analyzers"]
      : lexicalAnalyzerUnionArraySerializer(item["analyzers"]),
    tokenizers: !item["tokenizers"]
      ? item["tokenizers"]
      : lexicalTokenizerUnionArraySerializer(item["tokenizers"]),
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : tokenFilterUnionArraySerializer(item["tokenFilters"]),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : charFilterUnionArraySerializer(item["charFilters"]),
    normalizers: !item["normalizers"]
      ? item["normalizers"]
      : lexicalNormalizerUnionArraySerializer(item["normalizers"]),
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeySerializer(item["encryptionKey"]),
    similarity: !item["similarity"]
      ? item["similarity"]
      : similarityAlgorithmUnionSerializer(item["similarity"]),
    semantic: !item["semanticSearch"]
      ? item["semanticSearch"]
      : semanticSearchSerializer(item["semanticSearch"]),
    vectorSearch: !item["vectorSearch"]
      ? item["vectorSearch"]
      : vectorSearchSerializer(item["vectorSearch"]),
    "@odata.etag": item["eTag"],
  };
}

export function searchIndexDeserializer(item: any): SearchIndex {
  return {
    name: item["name"],
    fields: searchFieldArrayDeserializer(item["fields"]),
    scoringProfiles: !item["scoringProfiles"]
      ? item["scoringProfiles"]
      : scoringProfileArrayDeserializer(item["scoringProfiles"]),
    defaultScoringProfile: item["defaultScoringProfile"],
    corsOptions: !item["corsOptions"]
      ? item["corsOptions"]
      : corsOptionsDeserializer(item["corsOptions"]),
    suggesters: !item["suggesters"]
      ? item["suggesters"]
      : searchSuggesterArrayDeserializer(item["suggesters"]),
    analyzers: !item["analyzers"]
      ? item["analyzers"]
      : lexicalAnalyzerUnionArrayDeserializer(item["analyzers"]),
    tokenizers: !item["tokenizers"]
      ? item["tokenizers"]
      : lexicalTokenizerUnionArrayDeserializer(item["tokenizers"]),
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : tokenFilterUnionArrayDeserializer(item["tokenFilters"]),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : charFilterUnionArrayDeserializer(item["charFilters"]),
    normalizers: !item["normalizers"]
      ? item["normalizers"]
      : lexicalNormalizerUnionArrayDeserializer(item["normalizers"]),
    encryptionKey: !item["encryptionKey"]
      ? item["encryptionKey"]
      : searchResourceEncryptionKeyDeserializer(item["encryptionKey"]),
    similarity: !item["similarity"]
      ? item["similarity"]
      : similarityAlgorithmUnionDeserializer(item["similarity"]),
    semanticSearch: !item["semantic"]
      ? item["semantic"]
      : semanticSearchDeserializer(item["semantic"]),
    vectorSearch: !item["vectorSearch"]
      ? item["vectorSearch"]
      : vectorSearchDeserializer(item["vectorSearch"]),
    eTag: item["@odata.etag"],
  };
}

export function searchFieldArraySerializer(result: Array<SearchField>): any[] {
  return result.map((item) => {
    return searchFieldSerializer(item);
  });
}

export function searchFieldArrayDeserializer(
  result: Array<SearchField>,
): any[] {
  return result.map((item) => {
    return searchFieldDeserializer(item);
  });
}

/**
 * Represents a field in an index definition, which describes the name, data type,
 * and search behavior of a field.
 */
export interface SearchField {
  /**
   * The name of the field, which must be unique within the fields collection of the
   * index or parent field.
   */
  name: string;
  /** The data type of the field. */
  type: SearchFieldDataType;
  /**
   * A value indicating whether the field uniquely identifies documents in the
   * index. Exactly one top-level field in each index must be chosen as the key
   * field and it must be of type Edm.String. Key fields can be used to look up
   * documents directly and update or delete specific documents. Default is false
   * for simple fields and null for complex fields.
   */
  key?: boolean;
  /**
   * A value indicating whether the field can be returned in a search result. You
   * can disable this option if you want to use a field (for example, margin) as a
   * filter, sorting, or scoring mechanism but do not want the field to be visible
   * to the end user. This property must be true for key fields, and it must be null
   * for complex fields. This property can be changed on existing fields. Enabling
   * this property does not cause any increase in index storage requirements.
   * Default is true for simple fields, false for vector fields, and null for
   * complex fields.
   */
  retrievable?: boolean;
  /**
   * An immutable value indicating whether the field will be persisted separately on
   * disk to be returned in a search result. You can disable this option if you
   * don't plan to return the field contents in a search response to save on storage
   * overhead. This can only be set during index creation and only for vector
   * fields. This property cannot be changed for existing fields or set as false for
   * new fields. If this property is set as false, the property 'retrievable' must
   * also be set to false. This property must be true or unset for key fields, for
   * new fields, and for non-vector fields, and it must be null for complex fields.
   * Disabling this property will reduce index storage requirements. The default is
   * true for vector fields.
   */
  stored?: boolean;
  /**
   * A value indicating whether the field is full-text searchable. This means it
   * will undergo analysis such as word-breaking during indexing. If you set a
   * searchable field to a value like "sunny day", internally it will be split into
   * the individual tokens "sunny" and "day". This enables full-text searches for
   * these terms. Fields of type Edm.String or Collection(Edm.String) are searchable
   * by default. This property must be false for simple fields of other non-string
   * data types, and it must be null for complex fields. Note: searchable fields
   * consume extra space in your index to accommodate additional tokenized versions
   * of the field value for full-text searches. If you want to save space in your
   * index and you don't need a field to be included in searches, set searchable to
   * false.
   */
  searchable?: boolean;
  /**
   * A value indicating whether to enable the field to be referenced in $filter
   * queries. filterable differs from searchable in how strings are handled. Fields
   * of type Edm.String or Collection(Edm.String) that are filterable do not undergo
   * word-breaking, so comparisons are for exact matches only. For example, if you
   * set such a field f to "sunny day", $filter=f eq 'sunny' will find no matches,
   * but $filter=f eq 'sunny day' will. This property must be null for complex
   * fields. Default is true for simple fields and null for complex fields.
   */
  filterable?: boolean;
  /**
   * A value indicating whether to enable the field to be referenced in $orderby
   * expressions. By default, the search engine sorts results by score, but in many
   * experiences users will want to sort by fields in the documents. A simple field
   * can be sortable only if it is single-valued (it has a single value in the scope
   * of the parent document). Simple collection fields cannot be sortable, since
   * they are multi-valued. Simple sub-fields of complex collections are also
   * multi-valued, and therefore cannot be sortable. This is true whether it's an
   * immediate parent field, or an ancestor field, that's the complex collection.
   * Complex fields cannot be sortable and the sortable property must be null for
   * such fields. The default for sortable is true for single-valued simple fields,
   * false for multi-valued simple fields, and null for complex fields.
   */
  sortable?: boolean;
  /**
   * A value indicating whether to enable the field to be referenced in facet
   * queries. Typically used in a presentation of search results that includes hit
   * count by category (for example, search for digital cameras and see hits by
   * brand, by megapixels, by price, and so on). This property must be null for
   * complex fields. Fields of type Edm.GeographyPoint or
   * Collection(Edm.GeographyPoint) cannot be facetable. Default is true for all
   * other simple fields.
   */
  facetable?: boolean;
  /**
   * The name of the analyzer to use for the field. This option can be used only
   * with searchable fields and it can't be set together with either searchAnalyzer
   * or indexAnalyzer. Once the analyzer is chosen, it cannot be changed for the
   * field. Must be null for complex fields.
   */
  analyzer?: LexicalAnalyzerName;
  /**
   * The name of the analyzer used at search time for the field. This option can be
   * used only with searchable fields. It must be set together with indexAnalyzer
   * and it cannot be set together with the analyzer option. This property cannot be
   * set to the name of a language analyzer; use the analyzer property instead if
   * you need a language analyzer. This analyzer can be updated on an existing
   * field. Must be null for complex fields.
   */
  searchAnalyzer?: LexicalAnalyzerName;
  /**
   * The name of the analyzer used at indexing time for the field. This option can
   * be used only with searchable fields. It must be set together with
   * searchAnalyzer and it cannot be set together with the analyzer option.  This
   * property cannot be set to the name of a language analyzer; use the analyzer
   * property instead if you need a language analyzer. Once the analyzer is chosen,
   * it cannot be changed for the field. Must be null for complex fields.
   */
  indexAnalyzer?: LexicalAnalyzerName;
  /**
   * The name of the normalizer to use for the field. This option can be used only
   * with fields with filterable, sortable, or facetable enabled. Once the
   * normalizer is chosen, it cannot be changed for the field. Must be null for
   * complex fields.
   */
  normalizer?: LexicalNormalizerName;
  /** The dimensionality of the vector field. */
  vectorSearchDimensions?: number;
  /**
   * The name of the vector search profile that specifies the algorithm and
   * vectorizer to use when searching the vector field.
   */
  vectorSearchProfileName?: string;
  /** The encoding format to interpret the field contents. */
  vectorEncodingFormat?: VectorEncodingFormat;
  /**
   * A list of the names of synonym maps to associate with this field. This option
   * can be used only with searchable fields. Currently only one synonym map per
   * field is supported. Assigning a synonym map to a field ensures that query terms
   * targeting that field are expanded at query-time using the rules in the synonym
   * map. This attribute can be changed on existing fields. Must be null or an empty
   * collection for complex fields.
   */
  synonymMaps?: string[];
  /**
   * A list of sub-fields if this is a field of type Edm.ComplexType or
   * Collection(Edm.ComplexType). Must be null or empty for simple fields.
   */
  fields?: SearchField[];
}

export function searchFieldSerializer(item: SearchField): any {
  return {
    name: item["name"],
    type: item["type"],
    key: item["key"],
    retrievable: item["retrievable"],
    stored: item["stored"],
    searchable: item["searchable"],
    filterable: item["filterable"],
    sortable: item["sortable"],
    facetable: item["facetable"],
    analyzer: item["analyzer"],
    searchAnalyzer: item["searchAnalyzer"],
    indexAnalyzer: item["indexAnalyzer"],
    normalizer: item["normalizer"],
    dimensions: item["vectorSearchDimensions"],
    vectorSearchProfile: item["vectorSearchProfileName"],
    vectorEncoding: item["vectorEncodingFormat"],
    synonymMaps: !item["synonymMaps"]
      ? item["synonymMaps"]
      : item["synonymMaps"].map((p: any) => {
          return p;
        }),
    fields: !item["fields"]
      ? item["fields"]
      : __PLACEHOLDER_o267_sserializer__(item["fields"]),
  };
}

export function searchFieldDeserializer(item: any): SearchField {
  return {
    name: item["name"],
    type: item["type"],
    key: item["key"],
    retrievable: item["retrievable"],
    stored: item["stored"],
    searchable: item["searchable"],
    filterable: item["filterable"],
    sortable: item["sortable"],
    facetable: item["facetable"],
    analyzer: item["analyzer"],
    searchAnalyzer: item["searchAnalyzer"],
    indexAnalyzer: item["indexAnalyzer"],
    normalizer: item["normalizer"],
    vectorSearchDimensions: item["dimensions"],
    vectorSearchProfileName: item["vectorSearchProfile"],
    vectorEncodingFormat: item["vectorEncoding"],
    synonymMaps: !item["synonymMaps"]
      ? item["synonymMaps"]
      : item["synonymMaps"].map((p: any) => {
          return p;
        }),
    fields: !item["fields"]
      ? item["fields"]
      : __PLACEHOLDER_o267_sdeserializer__(item["fields"]),
  };
}

/** Defines the data type of a field in a search index. */
export type SearchFieldDataType =
  | "Edm.String"
  | "Edm.Int32"
  | "Edm.Int64"
  | "Edm.Double"
  | "Edm.Boolean"
  | "Edm.DateTimeOffset"
  | "Edm.GeographyPoint"
  | "Edm.ComplexType"
  | "Edm.Single"
  | "Edm.Half"
  | "Edm.Int16"
  | "Edm.SByte"
  | "Edm.Byte";
/** Defines the names of all text analyzers supported by the search engine. */
export type LexicalAnalyzerName =
  | "ar.microsoft"
  | "ar.lucene"
  | "hy.lucene"
  | "bn.microsoft"
  | "eu.lucene"
  | "bg.microsoft"
  | "bg.lucene"
  | "ca.microsoft"
  | "ca.lucene"
  | "zh-Hans.microsoft"
  | "zh-Hans.lucene"
  | "zh-Hant.microsoft"
  | "zh-Hant.lucene"
  | "hr.microsoft"
  | "cs.microsoft"
  | "cs.lucene"
  | "da.microsoft"
  | "da.lucene"
  | "nl.microsoft"
  | "nl.lucene"
  | "en.microsoft"
  | "en.lucene"
  | "et.microsoft"
  | "fi.microsoft"
  | "fi.lucene"
  | "fr.microsoft"
  | "fr.lucene"
  | "gl.lucene"
  | "de.microsoft"
  | "de.lucene"
  | "el.microsoft"
  | "el.lucene"
  | "gu.microsoft"
  | "he.microsoft"
  | "hi.microsoft"
  | "hi.lucene"
  | "hu.microsoft"
  | "hu.lucene"
  | "is.microsoft"
  | "id.microsoft"
  | "id.lucene"
  | "ga.lucene"
  | "it.microsoft"
  | "it.lucene"
  | "ja.microsoft"
  | "ja.lucene"
  | "kn.microsoft"
  | "ko.microsoft"
  | "ko.lucene"
  | "lv.microsoft"
  | "lv.lucene"
  | "lt.microsoft"
  | "ml.microsoft"
  | "ms.microsoft"
  | "mr.microsoft"
  | "nb.microsoft"
  | "no.lucene"
  | "fa.lucene"
  | "pl.microsoft"
  | "pl.lucene"
  | "pt-BR.microsoft"
  | "pt-BR.lucene"
  | "pt-PT.microsoft"
  | "pt-PT.lucene"
  | "pa.microsoft"
  | "ro.microsoft"
  | "ro.lucene"
  | "ru.microsoft"
  | "ru.lucene"
  | "sr-cyrillic.microsoft"
  | "sr-latin.microsoft"
  | "sk.microsoft"
  | "sl.microsoft"
  | "es.microsoft"
  | "es.lucene"
  | "sv.microsoft"
  | "sv.lucene"
  | "ta.microsoft"
  | "te.microsoft"
  | "th.microsoft"
  | "th.lucene"
  | "tr.microsoft"
  | "tr.lucene"
  | "uk.microsoft"
  | "ur.microsoft"
  | "vi.microsoft"
  | "standard.lucene"
  | "standardasciifolding.lucene"
  | "keyword"
  | "pattern"
  | "simple"
  | "stop"
  | "whitespace";
/** Defines the names of all text normalizers supported by the search engine. */
export type LexicalNormalizerName =
  | "asciifolding"
  | "elision"
  | "lowercase"
  | "standard"
  | "uppercase";
/** The encoding format for interpreting vector field contents. */
export type VectorEncodingFormat = "packedBit";

export function scoringProfileArraySerializer(
  result: Array<ScoringProfile>,
): any[] {
  return result.map((item) => {
    return scoringProfileSerializer(item);
  });
}

export function scoringProfileArrayDeserializer(
  result: Array<ScoringProfile>,
): any[] {
  return result.map((item) => {
    return scoringProfileDeserializer(item);
  });
}

/** Defines parameters for a search index that influence scoring in search queries. */
export interface ScoringProfile {
  /** The name of the scoring profile. */
  name: string;
  /** Parameters that boost scoring based on text matches in certain index fields. */
  textWeights?: TextWeights;
  /** The collection of functions that influence the scoring of documents. */
  functions?: ScoringFunctionUnion[];
  /**
   * A value indicating how the results of individual scoring functions should be
   * combined. Defaults to "Sum". Ignored if there are no scoring functions.
   */
  functionAggregation?: ScoringFunctionAggregation;
}

export function scoringProfileSerializer(item: ScoringProfile): any {
  return {
    name: item["name"],
    text: !item["textWeights"]
      ? item["textWeights"]
      : textWeightsSerializer(item["textWeights"]),
    functions: !item["functions"]
      ? item["functions"]
      : scoringFunctionUnionArraySerializer(item["functions"]),
    functionAggregation: item["functionAggregation"],
  };
}

export function scoringProfileDeserializer(item: any): ScoringProfile {
  return {
    name: item["name"],
    textWeights: !item["text"]
      ? item["text"]
      : textWeightsDeserializer(item["text"]),
    functions: !item["functions"]
      ? item["functions"]
      : scoringFunctionUnionArrayDeserializer(item["functions"]),
    functionAggregation: item["functionAggregation"],
  };
}

/**
 * Defines weights on index fields for which matches should boost scoring in
 * search queries.
 */
export interface TextWeights {
  /**
   * The dictionary of per-field weights to boost document scoring. The keys are
   * field names and the values are the weights for each field.
   */
  weights: Record<string, number>;
}

export function textWeightsSerializer(item: TextWeights): any {
  return { weights: item["weights"] };
}

export function textWeightsDeserializer(item: any): TextWeights {
  return {
    weights: item["weights"],
  };
}

export function scoringFunctionUnionArraySerializer(
  result: Array<ScoringFunctionUnion>,
): any[] {
  return result.map((item) => {
    return scoringFunctionUnionSerializer(item);
  });
}

export function scoringFunctionUnionArrayDeserializer(
  result: Array<ScoringFunctionUnion>,
): any[] {
  return result.map((item) => {
    return scoringFunctionUnionDeserializer(item);
  });
}

/** Base type for functions that can modify document scores during ranking. */
export interface ScoringFunction {
  /** The name of the field used as input to the scoring function. */
  fieldName: string;
  /** A multiplier for the raw score. Must be a positive number not equal to 1.0. */
  boost: number;
  /**
   * A value indicating how boosting will be interpolated across document scores;
   * defaults to "Linear".
   */
  interpolation?: ScoringFunctionInterpolation;
  /** Type of ScoringFunction. */
  /** The discriminator possible values: distance, freshness, magnitude, tag */
  type: string;
}

export function scoringFunctionSerializer(item: ScoringFunction): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
  };
}

export function scoringFunctionDeserializer(item: any): ScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
  };
}

/** Alias for ScoringFunctionUnion */
export type ScoringFunctionUnion =
  | DistanceScoringFunction
  | FreshnessScoringFunction
  | MagnitudeScoringFunction
  | TagScoringFunction
  | ScoringFunction;

export function scoringFunctionUnionSerializer(
  item: ScoringFunctionUnion,
): any {
  switch (item.type) {
    case "distance":
      return distanceScoringFunctionSerializer(item as DistanceScoringFunction);

    case "freshness":
      return freshnessScoringFunctionSerializer(
        item as FreshnessScoringFunction,
      );

    case "magnitude":
      return magnitudeScoringFunctionSerializer(
        item as MagnitudeScoringFunction,
      );

    case "tag":
      return tagScoringFunctionSerializer(item as TagScoringFunction);

    default:
      return scoringFunctionSerializer(item);
  }
}

export function scoringFunctionUnionDeserializer(
  item: any,
): ScoringFunctionUnion {
  switch (item.type) {
    case "distance":
      return distanceScoringFunctionDeserializer(
        item as DistanceScoringFunction,
      );

    case "freshness":
      return freshnessScoringFunctionDeserializer(
        item as FreshnessScoringFunction,
      );

    case "magnitude":
      return magnitudeScoringFunctionDeserializer(
        item as MagnitudeScoringFunction,
      );

    case "tag":
      return tagScoringFunctionDeserializer(item as TagScoringFunction);

    default:
      return scoringFunctionDeserializer(item);
  }
}

/**
 * Defines the function used to interpolate score boosting across a range of
 * documents.
 */
export type ScoringFunctionInterpolation =
  | "linear"
  | "constant"
  | "quadratic"
  | "logarithmic";

/**
 * Defines a function that boosts scores based on distance from a geographic
 * location.
 */
export interface DistanceScoringFunction extends ScoringFunction {
  /** Parameter values for the distance scoring function. */
  parameters: DistanceScoringParameters;
  /**
   * Indicates the type of function to use. Valid values include magnitude,
   * freshness, distance, and tag. The function type must be lower case.
   */
  type: "distance";
}

export function distanceScoringFunctionSerializer(
  item: DistanceScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    distance: distanceScoringParametersSerializer(item["parameters"]),
  };
}

export function distanceScoringFunctionDeserializer(
  item: any,
): DistanceScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters: distanceScoringParametersDeserializer(item["distance"]),
  };
}

/** Provides parameter values to a distance scoring function. */
export interface DistanceScoringParameters {
  /**
   * The name of the parameter passed in search queries to specify the reference
   * location.
   */
  referencePointParameter: string;
  /**
   * The distance in kilometers from the reference location where the boosting range
   * ends.
   */
  boostingDistance: number;
}

export function distanceScoringParametersSerializer(
  item: DistanceScoringParameters,
): any {
  return {
    referencePointParameter: item["referencePointParameter"],
    boostingDistance: item["boostingDistance"],
  };
}

export function distanceScoringParametersDeserializer(
  item: any,
): DistanceScoringParameters {
  return {
    referencePointParameter: item["referencePointParameter"],
    boostingDistance: item["boostingDistance"],
  };
}

/** Defines a function that boosts scores based on the value of a date-time field. */
export interface FreshnessScoringFunction extends ScoringFunction {
  /** Parameter values for the freshness scoring function. */
  parameters: FreshnessScoringParameters;
  /**
   * Indicates the type of function to use. Valid values include magnitude,
   * freshness, distance, and tag. The function type must be lower case.
   */
  type: "freshness";
}

export function freshnessScoringFunctionSerializer(
  item: FreshnessScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    freshness: freshnessScoringParametersSerializer(item["parameters"]),
  };
}

export function freshnessScoringFunctionDeserializer(
  item: any,
): FreshnessScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters: freshnessScoringParametersDeserializer(item["freshness"]),
  };
}

/** Provides parameter values to a freshness scoring function. */
export interface FreshnessScoringParameters {
  /** The expiration period after which boosting will stop for a particular document. */
  boostingDuration: string;
}

export function freshnessScoringParametersSerializer(
  item: FreshnessScoringParameters,
): any {
  return { boostingDuration: item["boostingDuration"] };
}

export function freshnessScoringParametersDeserializer(
  item: any,
): FreshnessScoringParameters {
  return {
    boostingDuration: item["boostingDuration"],
  };
}

/** Defines a function that boosts scores based on the magnitude of a numeric field. */
export interface MagnitudeScoringFunction extends ScoringFunction {
  /** Parameter values for the magnitude scoring function. */
  parameters: MagnitudeScoringParameters;
  /**
   * Indicates the type of function to use. Valid values include magnitude,
   * freshness, distance, and tag. The function type must be lower case.
   */
  type: "magnitude";
}

export function magnitudeScoringFunctionSerializer(
  item: MagnitudeScoringFunction,
): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    magnitude: magnitudeScoringParametersSerializer(item["parameters"]),
  };
}

export function magnitudeScoringFunctionDeserializer(
  item: any,
): MagnitudeScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters: magnitudeScoringParametersDeserializer(item["magnitude"]),
  };
}

/** Provides parameter values to a magnitude scoring function. */
export interface MagnitudeScoringParameters {
  /** The field value at which boosting starts. */
  boostingRangeStart: number;
  /** The field value at which boosting ends. */
  boostingRangeEnd: number;
  /**
   * A value indicating whether to apply a constant boost for field values beyond
   * the range end value; default is false.
   */
  shouldBoostBeyondRangeByConstant?: boolean;
}

export function magnitudeScoringParametersSerializer(
  item: MagnitudeScoringParameters,
): any {
  return {
    boostingRangeStart: item["boostingRangeStart"],
    boostingRangeEnd: item["boostingRangeEnd"],
    constantBoostBeyondRange: item["shouldBoostBeyondRangeByConstant"],
  };
}

export function magnitudeScoringParametersDeserializer(
  item: any,
): MagnitudeScoringParameters {
  return {
    boostingRangeStart: item["boostingRangeStart"],
    boostingRangeEnd: item["boostingRangeEnd"],
    shouldBoostBeyondRangeByConstant: item["constantBoostBeyondRange"],
  };
}

/**
 * Defines a function that boosts scores of documents with string values matching
 * a given list of tags.
 */
export interface TagScoringFunction extends ScoringFunction {
  /** Parameter values for the tag scoring function. */
  parameters: TagScoringParameters;
  /**
   * Indicates the type of function to use. Valid values include magnitude,
   * freshness, distance, and tag. The function type must be lower case.
   */
  type: "tag";
}

export function tagScoringFunctionSerializer(item: TagScoringFunction): any {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    tag: tagScoringParametersSerializer(item["parameters"]),
  };
}

export function tagScoringFunctionDeserializer(item: any): TagScoringFunction {
  return {
    fieldName: item["fieldName"],
    boost: item["boost"],
    interpolation: item["interpolation"],
    type: item["type"],
    parameters: tagScoringParametersDeserializer(item["tag"]),
  };
}

/** Provides parameter values to a tag scoring function. */
export interface TagScoringParameters {
  /**
   * The name of the parameter passed in search queries to specify the list of tags
   * to compare against the target field.
   */
  tagsParameter: string;
}

export function tagScoringParametersSerializer(
  item: TagScoringParameters,
): any {
  return { tagsParameter: item["tagsParameter"] };
}

export function tagScoringParametersDeserializer(
  item: any,
): TagScoringParameters {
  return {
    tagsParameter: item["tagsParameter"],
  };
}

/**
 * Defines the aggregation function used to combine the results of all the scoring
 * functions in a scoring profile.
 */
export type ScoringFunctionAggregation =
  | "sum"
  | "average"
  | "minimum"
  | "maximum"
  | "firstMatching";

/** Defines options to control Cross-Origin Resource Sharing (CORS) for an index. */
export interface CorsOptions {
  /**
   * The list of origins from which JavaScript code will be granted access to your
   * index. Can contain a list of hosts of the form
   * {protocol}://{fully-qualified-domain-name}[:{port#}], or a single '*' to allow
   * all origins (not recommended).
   */
  allowedOrigins: string[];
  /**
   * The duration for which browsers should cache CORS preflight responses. Defaults
   * to 5 minutes.
   */
  maxAgeInSeconds?: number;
}

export function corsOptionsSerializer(item: CorsOptions): any {
  return {
    allowedOrigins: item["allowedOrigins"].map((p: any) => {
      return p;
    }),
    maxAgeInSeconds: item["maxAgeInSeconds"],
  };
}

export function corsOptionsDeserializer(item: any): CorsOptions {
  return {
    allowedOrigins: item["allowedOrigins"].map((p: any) => {
      return p;
    }),
    maxAgeInSeconds: item["maxAgeInSeconds"],
  };
}

export function searchSuggesterArraySerializer(
  result: Array<SearchSuggester>,
): any[] {
  return result.map((item) => {
    return searchSuggesterSerializer(item);
  });
}

export function searchSuggesterArrayDeserializer(
  result: Array<SearchSuggester>,
): any[] {
  return result.map((item) => {
    return searchSuggesterDeserializer(item);
  });
}

/** Defines how the Suggest API should apply to a group of fields in the index. */
export interface SearchSuggester {
  /** The name of the suggester. */
  name: string;
  /** A value indicating the capabilities of the suggester. */
  searchMode: "analyzingInfixMatching";
  /**
   * The list of field names to which the suggester applies. Each field must be
   * searchable.
   */
  sourceFields: string[];
}

export function searchSuggesterSerializer(item: SearchSuggester): any {
  return {
    name: item["name"],
    searchMode: item["searchMode"],
    sourceFields: item["sourceFields"].map((p: any) => {
      return p;
    }),
  };
}

export function searchSuggesterDeserializer(item: any): SearchSuggester {
  return {
    name: item["name"],
    searchMode: item["searchMode"],
    sourceFields: item["sourceFields"].map((p: any) => {
      return p;
    }),
  };
}

export function lexicalAnalyzerUnionArraySerializer(
  result: Array<LexicalAnalyzerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalAnalyzerUnionSerializer(item);
  });
}

export function lexicalAnalyzerUnionArrayDeserializer(
  result: Array<LexicalAnalyzerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalAnalyzerUnionDeserializer(item);
  });
}

/** Base type for analyzers. */
export interface LexicalAnalyzer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.CustomAnalyzer, #Microsoft.Azure.Search.PatternAnalyzer, #Microsoft.Azure.Search.StandardAnalyzer, #Microsoft.Azure.Search.StopAnalyzer */
  odataType: string;
  /**
   * The name of the analyzer. It must only contain letters, digits, spaces, dashes
   * or underscores, can only start and end with alphanumeric characters, and is
   * limited to 128 characters.
   */
  name: string;
}

export function lexicalAnalyzerSerializer(item: LexicalAnalyzer): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function lexicalAnalyzerDeserializer(item: any): LexicalAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalAnalyzerUnion */
export type LexicalAnalyzerUnion =
  | CustomAnalyzer
  | PatternAnalyzer
  | LuceneStandardAnalyzer
  | StopAnalyzer
  | LexicalAnalyzer;

export function lexicalAnalyzerUnionSerializer(
  item: LexicalAnalyzerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomAnalyzer":
      return customAnalyzerSerializer(item as CustomAnalyzer);

    case "#Microsoft.Azure.Search.PatternAnalyzer":
      return patternAnalyzerSerializer(item as PatternAnalyzer);

    case "#Microsoft.Azure.Search.StandardAnalyzer":
      return luceneStandardAnalyzerSerializer(item as LuceneStandardAnalyzer);

    case "#Microsoft.Azure.Search.StopAnalyzer":
      return stopAnalyzerSerializer(item as StopAnalyzer);

    default:
      return lexicalAnalyzerSerializer(item);
  }
}

export function lexicalAnalyzerUnionDeserializer(
  item: any,
): LexicalAnalyzerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomAnalyzer":
      return customAnalyzerDeserializer(item as CustomAnalyzer);

    case "#Microsoft.Azure.Search.PatternAnalyzer":
      return patternAnalyzerDeserializer(item as PatternAnalyzer);

    case "#Microsoft.Azure.Search.StandardAnalyzer":
      return luceneStandardAnalyzerDeserializer(item as LuceneStandardAnalyzer);

    case "#Microsoft.Azure.Search.StopAnalyzer":
      return stopAnalyzerDeserializer(item as StopAnalyzer);

    default:
      return lexicalAnalyzerDeserializer(item);
  }
}

/**
 * Allows you to take control over the process of converting text into
 * indexable/searchable tokens. It's a user-defined configuration consisting of a
 * single predefined tokenizer and one or more filters. The tokenizer is
 * responsible for breaking text into tokens, and the filters for modifying tokens
 * emitted by the tokenizer.
 */
export interface CustomAnalyzer extends LexicalAnalyzer {
  /**
   * The name of the tokenizer to use to divide continuous text into a sequence of
   * tokens, such as breaking a sentence into words.
   */
  tokenizer: LexicalTokenizerName;
  /**
   * A list of token filters used to filter out or modify the tokens generated by a
   * tokenizer. For example, you can specify a lowercase filter that converts all
   * characters to lowercase. The filters are run in the order in which they are
   * listed.
   */
  tokenFilters?: TokenFilterName[];
  /**
   * A list of character filters used to prepare input text before it is processed
   * by the tokenizer. For instance, they can replace certain characters or symbols.
   * The filters are run in the order in which they are listed.
   */
  charFilters?: CharFilterName[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.CustomAnalyzer";
}

export function customAnalyzerSerializer(item: CustomAnalyzer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    tokenizer: item["tokenizer"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

export function customAnalyzerDeserializer(item: any): CustomAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    tokenizer: item["tokenizer"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/** Defines the names of all tokenizers supported by the search engine. */
export type LexicalTokenizerName =
  | "classic"
  | "edgeNGram"
  | "keyword_v2"
  | "letter"
  | "lowercase"
  | "microsoft_language_tokenizer"
  | "microsoft_language_stemming_tokenizer"
  | "nGram"
  | "path_hierarchy_v2"
  | "pattern"
  | "standard_v2"
  | "uax_url_email"
  | "whitespace";
/** Defines the names of all token filters supported by the search engine. */
export type TokenFilterName =
  | "arabic_normalization"
  | "apostrophe"
  | "asciifolding"
  | "cjk_bigram"
  | "cjk_width"
  | "classic"
  | "common_grams"
  | "edgeNGram_v2"
  | "elision"
  | "german_normalization"
  | "hindi_normalization"
  | "indic_normalization"
  | "keyword_repeat"
  | "kstem"
  | "length"
  | "limit"
  | "lowercase"
  | "nGram_v2"
  | "persian_normalization"
  | "phonetic"
  | "porter_stem"
  | "reverse"
  | "scandinavian_normalization"
  | "scandinavian_folding"
  | "shingle"
  | "snowball"
  | "sorani_normalization"
  | "stemmer"
  | "stopwords"
  | "trim"
  | "truncate"
  | "unique"
  | "uppercase"
  | "word_delimiter";
/** Defines the names of all character filters supported by the search engine. */
export type CharFilterName = "html_strip";

/**
 * Flexibly separates text into terms via a regular expression pattern. This
 * analyzer is implemented using Apache Lucene.
 */
export interface PatternAnalyzer extends LexicalAnalyzer {
  /** A value indicating whether terms should be lower-cased. Default is true. */
  lowerCaseTerms?: boolean;
  /**
   * A regular expression pattern to match token separators. Default is an
   * expression that matches one or more non-word characters.
   */
  pattern?: string;
  /** Regular expression flags. */
  flags?: RegexFlags;
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.PatternAnalyzer";
}

export function patternAnalyzerSerializer(item: PatternAnalyzer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    lowercase: item["lowerCaseTerms"],
    pattern: item["pattern"],
    flags: item["flags"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function patternAnalyzerDeserializer(item: any): PatternAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    lowerCaseTerms: item["lowercase"],
    pattern: item["pattern"],
    flags: item["flags"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Defines flags that can be combined to control how regular expressions are used
 * in the pattern analyzer and pattern tokenizer.
 */
export type RegexFlags =
  | "CANON_EQ"
  | "CASE_INSENSITIVE"
  | "COMMENTS"
  | "DOTALL"
  | "LITERAL"
  | "MULTILINE"
  | "UNICODE_CASE"
  | "UNIX_LINES";

/**
 * Standard Apache Lucene analyzer; Composed of the standard tokenizer, lowercase
 * filter and stop filter.
 */
export interface LuceneStandardAnalyzer extends LexicalAnalyzer {
  /**
   * The maximum token length. Default is 255. Tokens longer than the maximum length
   * are split. The maximum token length that can be used is 300 characters.
   */
  maxTokenLength?: number;
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.StandardAnalyzer";
}

export function luceneStandardAnalyzerSerializer(
  item: LuceneStandardAnalyzer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function luceneStandardAnalyzerDeserializer(
  item: any,
): LuceneStandardAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Divides text at non-letters; Applies the lowercase and stopword token filters.
 * This analyzer is implemented using Apache Lucene.
 */
export interface StopAnalyzer extends LexicalAnalyzer {
  /** A list of stopwords. */
  stopwords?: string[];
  /** A URI fragment specifying the type of analyzer. */
  odataType: "#Microsoft.Azure.Search.StopAnalyzer";
}

export function stopAnalyzerSerializer(item: StopAnalyzer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function stopAnalyzerDeserializer(item: any): StopAnalyzer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
  };
}

export function lexicalTokenizerUnionArraySerializer(
  result: Array<LexicalTokenizerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalTokenizerUnionSerializer(item);
  });
}

export function lexicalTokenizerUnionArrayDeserializer(
  result: Array<LexicalTokenizerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalTokenizerUnionDeserializer(item);
  });
}

/** Base type for tokenizers. */
export interface LexicalTokenizer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.ClassicTokenizer, #Microsoft.Azure.Search.EdgeNGramTokenizer, #Microsoft.Azure.Search.KeywordTokenizerV2, #Microsoft.Azure.Search.MicrosoftLanguageTokenizer, #Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer, #Microsoft.Azure.Search.NGramTokenizer, #Microsoft.Azure.Search.PathHierarchyTokenizerV2, #Microsoft.Azure.Search.PatternTokenizer, #Microsoft.Azure.Search.StandardTokenizerV2, #Microsoft.Azure.Search.UaxUrlEmailTokenizer */
  odataType: string;
  /**
   * The name of the tokenizer. It must only contain letters, digits, spaces, dashes
   * or underscores, can only start and end with alphanumeric characters, and is
   * limited to 128 characters.
   */
  name: string;
}

export function lexicalTokenizerSerializer(item: LexicalTokenizer): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function lexicalTokenizerDeserializer(item: any): LexicalTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalTokenizerUnion */
export type LexicalTokenizerUnion =
  | ClassicTokenizer
  | EdgeNGramTokenizer
  | KeywordTokenizerV2
  | MicrosoftLanguageTokenizer
  | MicrosoftLanguageStemmingTokenizer
  | NGramTokenizer
  | PathHierarchyTokenizerV2
  | PatternTokenizer
  | LuceneStandardTokenizerV2
  | UaxUrlEmailTokenizer
  | LexicalTokenizer;

export function lexicalTokenizerUnionSerializer(
  item: LexicalTokenizerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicTokenizer":
      return classicTokenizerSerializer(item as ClassicTokenizer);

    case "#Microsoft.Azure.Search.EdgeNGramTokenizer":
      return edgeNGramTokenizerSerializer(item as EdgeNGramTokenizer);

    case "#Microsoft.Azure.Search.KeywordTokenizerV2":
      return keywordTokenizerV2Serializer(item as KeywordTokenizerV2);

    case "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer":
      return microsoftLanguageTokenizerSerializer(
        item as MicrosoftLanguageTokenizer,
      );

    case "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer":
      return microsoftLanguageStemmingTokenizerSerializer(
        item as MicrosoftLanguageStemmingTokenizer,
      );

    case "#Microsoft.Azure.Search.NGramTokenizer":
      return nGramTokenizerSerializer(item as NGramTokenizer);

    case "#Microsoft.Azure.Search.PathHierarchyTokenizerV2":
      return pathHierarchyTokenizerV2Serializer(
        item as PathHierarchyTokenizerV2,
      );

    case "#Microsoft.Azure.Search.PatternTokenizer":
      return patternTokenizerSerializer(item as PatternTokenizer);

    case "#Microsoft.Azure.Search.StandardTokenizerV2":
      return luceneStandardTokenizerV2Serializer(
        item as LuceneStandardTokenizerV2,
      );

    case "#Microsoft.Azure.Search.UaxUrlEmailTokenizer":
      return uaxUrlEmailTokenizerSerializer(item as UaxUrlEmailTokenizer);

    default:
      return lexicalTokenizerSerializer(item);
  }
}

export function lexicalTokenizerUnionDeserializer(
  item: any,
): LexicalTokenizerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicTokenizer":
      return classicTokenizerDeserializer(item as ClassicTokenizer);

    case "#Microsoft.Azure.Search.EdgeNGramTokenizer":
      return edgeNGramTokenizerDeserializer(item as EdgeNGramTokenizer);

    case "#Microsoft.Azure.Search.KeywordTokenizerV2":
      return keywordTokenizerV2Deserializer(item as KeywordTokenizerV2);

    case "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer":
      return microsoftLanguageTokenizerDeserializer(
        item as MicrosoftLanguageTokenizer,
      );

    case "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer":
      return microsoftLanguageStemmingTokenizerDeserializer(
        item as MicrosoftLanguageStemmingTokenizer,
      );

    case "#Microsoft.Azure.Search.NGramTokenizer":
      return nGramTokenizerDeserializer(item as NGramTokenizer);

    case "#Microsoft.Azure.Search.PathHierarchyTokenizerV2":
      return pathHierarchyTokenizerV2Deserializer(
        item as PathHierarchyTokenizerV2,
      );

    case "#Microsoft.Azure.Search.PatternTokenizer":
      return patternTokenizerDeserializer(item as PatternTokenizer);

    case "#Microsoft.Azure.Search.StandardTokenizerV2":
      return luceneStandardTokenizerV2Deserializer(
        item as LuceneStandardTokenizerV2,
      );

    case "#Microsoft.Azure.Search.UaxUrlEmailTokenizer":
      return uaxUrlEmailTokenizerDeserializer(item as UaxUrlEmailTokenizer);

    default:
      return lexicalTokenizerDeserializer(item);
  }
}

/**
 * Grammar-based tokenizer that is suitable for processing most European-language
 * documents. This tokenizer is implemented using Apache Lucene.
 */
export interface ClassicTokenizer extends LexicalTokenizer {
  /**
   * The maximum token length. Default is 255. Tokens longer than the maximum length
   * are split. The maximum token length that can be used is 300 characters.
   */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.ClassicTokenizer";
}

export function classicTokenizerSerializer(item: ClassicTokenizer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function classicTokenizerDeserializer(item: any): ClassicTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/**
 * Tokenizes the input from an edge into n-grams of the given size(s). This
 * tokenizer is implemented using Apache Lucene.
 */
export interface EdgeNGramTokenizer extends LexicalTokenizer {
  /**
   * The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the
   * value of maxGram.
   */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** Character classes to keep in the tokens. */
  tokenChars?: TokenCharacterKind[];
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.EdgeNGramTokenizer";
}

export function edgeNGramTokenizerSerializer(item: EdgeNGramTokenizer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

export function edgeNGramTokenizerDeserializer(item: any): EdgeNGramTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

/** Represents classes of characters on which a token filter can operate. */
export type TokenCharacterKind =
  | "letter"
  | "digit"
  | "whitespace"
  | "punctuation"
  | "symbol";

/**
 * Emits the entire input as a single token. This tokenizer is implemented using
 * Apache Lucene.
 */
export interface KeywordTokenizerV2 extends LexicalTokenizer {
  /**
   * The maximum token length. Default is 256. Tokens longer than the maximum length
   * are split. The maximum token length that can be used is 300 characters.
   */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.KeywordTokenizerV2";
}

export function keywordTokenizerV2Serializer(item: KeywordTokenizerV2): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function keywordTokenizerV2Deserializer(item: any): KeywordTokenizerV2 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/** Divides text using language-specific rules. */
export interface MicrosoftLanguageTokenizer extends LexicalTokenizer {
  /**
   * The maximum token length. Tokens longer than the maximum length are split.
   * Maximum token length that can be used is 300 characters. Tokens longer than 300
   * characters are first split into tokens of length 300 and then each of those
   * tokens is split based on the max token length set. Default is 255.
   */
  maxTokenLength?: number;
  /**
   * A value indicating how the tokenizer is used. Set to true if used as the search
   * tokenizer, set to false if used as the indexing tokenizer. Default is false.
   */
  isSearchTokenizer?: boolean;
  /** The language to use. The default is English. */
  language?: MicrosoftTokenizerLanguage;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.MicrosoftLanguageTokenizer";
}

export function microsoftLanguageTokenizerSerializer(
  item: MicrosoftLanguageTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

export function microsoftLanguageTokenizerDeserializer(
  item: any,
): MicrosoftLanguageTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

/** Lists the languages supported by the Microsoft language tokenizer. */
export type MicrosoftTokenizerLanguage =
  | "bangla"
  | "bulgarian"
  | "catalan"
  | "chineseSimplified"
  | "chineseTraditional"
  | "croatian"
  | "czech"
  | "danish"
  | "dutch"
  | "english"
  | "french"
  | "german"
  | "greek"
  | "gujarati"
  | "hindi"
  | "icelandic"
  | "indonesian"
  | "italian"
  | "japanese"
  | "kannada"
  | "korean"
  | "malay"
  | "malayalam"
  | "marathi"
  | "norwegianBokmaal"
  | "polish"
  | "portuguese"
  | "portugueseBrazilian"
  | "punjabi"
  | "romanian"
  | "russian"
  | "serbianCyrillic"
  | "serbianLatin"
  | "slovenian"
  | "spanish"
  | "swedish"
  | "tamil"
  | "telugu"
  | "thai"
  | "ukrainian"
  | "urdu"
  | "vietnamese";

/**
 * Divides text using language-specific rules and reduces words to their base
 * forms.
 */
export interface MicrosoftLanguageStemmingTokenizer extends LexicalTokenizer {
  /**
   * The maximum token length. Tokens longer than the maximum length are split.
   * Maximum token length that can be used is 300 characters. Tokens longer than 300
   * characters are first split into tokens of length 300 and then each of those
   * tokens is split based on the max token length set. Default is 255.
   */
  maxTokenLength?: number;
  /**
   * A value indicating how the tokenizer is used. Set to true if used as the search
   * tokenizer, set to false if used as the indexing tokenizer. Default is false.
   */
  isSearchTokenizer?: boolean;
  /** The language to use. The default is English. */
  language?: MicrosoftStemmingTokenizerLanguage;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.MicrosoftLanguageStemmingTokenizer";
}

export function microsoftLanguageStemmingTokenizerSerializer(
  item: MicrosoftLanguageStemmingTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

export function microsoftLanguageStemmingTokenizerDeserializer(
  item: any,
): MicrosoftLanguageStemmingTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
    isSearchTokenizer: item["isSearchTokenizer"],
    language: item["language"],
  };
}

/** Lists the languages supported by the Microsoft language stemming tokenizer. */
export type MicrosoftStemmingTokenizerLanguage =
  | "arabic"
  | "bangla"
  | "bulgarian"
  | "catalan"
  | "croatian"
  | "czech"
  | "danish"
  | "dutch"
  | "english"
  | "estonian"
  | "finnish"
  | "french"
  | "german"
  | "greek"
  | "gujarati"
  | "hebrew"
  | "hindi"
  | "hungarian"
  | "icelandic"
  | "indonesian"
  | "italian"
  | "kannada"
  | "latvian"
  | "lithuanian"
  | "malay"
  | "malayalam"
  | "marathi"
  | "norwegianBokmaal"
  | "polish"
  | "portuguese"
  | "portugueseBrazilian"
  | "punjabi"
  | "romanian"
  | "russian"
  | "serbianCyrillic"
  | "serbianLatin"
  | "slovak"
  | "slovenian"
  | "spanish"
  | "swedish"
  | "tamil"
  | "telugu"
  | "turkish"
  | "ukrainian"
  | "urdu";

/**
 * Tokenizes the input into n-grams of the given size(s). This tokenizer is
 * implemented using Apache Lucene.
 */
export interface NGramTokenizer extends LexicalTokenizer {
  /**
   * The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the
   * value of maxGram.
   */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** Character classes to keep in the tokens. */
  tokenChars?: TokenCharacterKind[];
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.NGramTokenizer";
}

export function nGramTokenizerSerializer(item: NGramTokenizer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

export function nGramTokenizerDeserializer(item: any): NGramTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    tokenChars: !item["tokenChars"]
      ? item["tokenChars"]
      : item["tokenChars"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Tokenizer for path-like hierarchies. This tokenizer is implemented using Apache
 * Lucene.
 */
export interface PathHierarchyTokenizerV2 extends LexicalTokenizer {
  /** The delimiter character to use. Default is "/". */
  delimiter?: string;
  /** A value that, if set, replaces the delimiter character. Default is "/". */
  replacement?: string;
  /** The maximum token length. Default and maximum is 300. */
  maxTokenLength?: number;
  /**
   * A value indicating whether to generate tokens in reverse order. Default is
   * false.
   */
  reverseTokenOrder?: boolean;
  /** The number of initial tokens to skip. Default is 0. */
  numberOfTokensToSkip?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.PathHierarchyTokenizerV2";
}

export function pathHierarchyTokenizerV2Serializer(
  item: PathHierarchyTokenizerV2,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    delimiter: item["delimiter"],
    replacement: item["replacement"],
    maxTokenLength: item["maxTokenLength"],
    reverse: item["reverseTokenOrder"],
    skip: item["numberOfTokensToSkip"],
  };
}

export function pathHierarchyTokenizerV2Deserializer(
  item: any,
): PathHierarchyTokenizerV2 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    delimiter: item["delimiter"],
    replacement: item["replacement"],
    maxTokenLength: item["maxTokenLength"],
    reverseTokenOrder: item["reverse"],
    numberOfTokensToSkip: item["skip"],
  };
}

/**
 * Tokenizer that uses regex pattern matching to construct distinct tokens. This
 * tokenizer is implemented using Apache Lucene.
 */
export interface PatternTokenizer extends LexicalTokenizer {
  /**
   * A regular expression pattern to match token separators. Default is an
   * expression that matches one or more non-word characters.
   */
  pattern?: string;
  /** Regular expression flags. */
  flags?: RegexFlags;
  /**
   * The zero-based ordinal of the matching group in the regular expression pattern
   * to extract into tokens. Use -1 if you want to use the entire pattern to split
   * the input into tokens, irrespective of matching groups. Default is -1.
   */
  group?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.PatternTokenizer";
}

export function patternTokenizerSerializer(item: PatternTokenizer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    flags: item["flags"],
    group: item["group"],
  };
}

export function patternTokenizerDeserializer(item: any): PatternTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    flags: item["flags"],
    group: item["group"],
  };
}

/**
 * Breaks text following the Unicode Text Segmentation rules. This tokenizer is
 * implemented using Apache Lucene.
 */
export interface LuceneStandardTokenizerV2 extends LexicalTokenizer {
  /**
   * The maximum token length. Default is 255. Tokens longer than the maximum length
   * are split. The maximum token length that can be used is 300 characters.
   */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.StandardTokenizerV2";
}

export function luceneStandardTokenizerV2Serializer(
  item: LuceneStandardTokenizerV2,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function luceneStandardTokenizerV2Deserializer(
  item: any,
): LuceneStandardTokenizerV2 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

/**
 * Tokenizes urls and emails as one token. This tokenizer is implemented using
 * Apache Lucene.
 */
export interface UaxUrlEmailTokenizer extends LexicalTokenizer {
  /**
   * The maximum token length. Default is 255. Tokens longer than the maximum length
   * are split. The maximum token length that can be used is 300 characters.
   */
  maxTokenLength?: number;
  /** A URI fragment specifying the type of tokenizer. */
  odataType: "#Microsoft.Azure.Search.UaxUrlEmailTokenizer";
}

export function uaxUrlEmailTokenizerSerializer(
  item: UaxUrlEmailTokenizer,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function uaxUrlEmailTokenizerDeserializer(
  item: any,
): UaxUrlEmailTokenizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenLength: item["maxTokenLength"],
  };
}

export function tokenFilterUnionArraySerializer(
  result: Array<TokenFilterUnion>,
): any[] {
  return result.map((item) => {
    return tokenFilterUnionSerializer(item);
  });
}

export function tokenFilterUnionArrayDeserializer(
  result: Array<TokenFilterUnion>,
): any[] {
  return result.map((item) => {
    return tokenFilterUnionDeserializer(item);
  });
}

/** Base type for token filters. */
export interface TokenFilter {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.AsciiFoldingTokenFilter, #Microsoft.Azure.Search.CjkBigramTokenFilter, #Microsoft.Azure.Search.CommonGramTokenFilter, #Microsoft.Azure.Search.DictionaryDecompounderTokenFilter, #Microsoft.Azure.Search.EdgeNGramTokenFilterV2, #Microsoft.Azure.Search.ElisionTokenFilter, #Microsoft.Azure.Search.KeepTokenFilter, #Microsoft.Azure.Search.KeywordMarkerTokenFilter, #Microsoft.Azure.Search.LengthTokenFilter, #Microsoft.Azure.Search.LimitTokenFilter, #Microsoft.Azure.Search.NGramTokenFilterV2, #Microsoft.Azure.Search.PatternCaptureTokenFilter, #Microsoft.Azure.Search.PatternReplaceTokenFilter, #Microsoft.Azure.Search.PhoneticTokenFilter, #Microsoft.Azure.Search.ShingleTokenFilter, #Microsoft.Azure.Search.SnowballTokenFilter, #Microsoft.Azure.Search.StemmerTokenFilter, #Microsoft.Azure.Search.StemmerOverrideTokenFilter, #Microsoft.Azure.Search.StopwordsTokenFilter, #Microsoft.Azure.Search.SynonymTokenFilter, #Microsoft.Azure.Search.TruncateTokenFilter, #Microsoft.Azure.Search.UniqueTokenFilter, #Microsoft.Azure.Search.WordDelimiterTokenFilter */
  odataType: string;
  /**
   * The name of the token filter. It must only contain letters, digits, spaces,
   * dashes or underscores, can only start and end with alphanumeric characters, and
   * is limited to 128 characters.
   */
  name: string;
}

export function tokenFilterSerializer(item: TokenFilter): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function tokenFilterDeserializer(item: any): TokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for TokenFilterUnion */
export type TokenFilterUnion =
  | AsciiFoldingTokenFilter
  | CjkBigramTokenFilter
  | CommonGramTokenFilter
  | DictionaryDecompounderTokenFilter
  | EdgeNGramTokenFilterV2
  | ElisionTokenFilter
  | KeepTokenFilter
  | KeywordMarkerTokenFilter
  | LengthTokenFilter
  | LimitTokenFilter
  | NGramTokenFilterV2
  | PatternCaptureTokenFilter
  | PatternReplaceTokenFilter
  | PhoneticTokenFilter
  | ShingleTokenFilter
  | SnowballTokenFilter
  | StemmerTokenFilter
  | StemmerOverrideTokenFilter
  | StopwordsTokenFilter
  | SynonymTokenFilter
  | TruncateTokenFilter
  | UniqueTokenFilter
  | WordDelimiterTokenFilter
  | TokenFilter;

export function tokenFilterUnionSerializer(item: TokenFilterUnion): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.AsciiFoldingTokenFilter":
      return asciiFoldingTokenFilterSerializer(item as AsciiFoldingTokenFilter);

    case "#Microsoft.Azure.Search.CjkBigramTokenFilter":
      return cjkBigramTokenFilterSerializer(item as CjkBigramTokenFilter);

    case "#Microsoft.Azure.Search.CommonGramTokenFilter":
      return commonGramTokenFilterSerializer(item as CommonGramTokenFilter);

    case "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter":
      return dictionaryDecompounderTokenFilterSerializer(
        item as DictionaryDecompounderTokenFilter,
      );

    case "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2":
      return edgeNGramTokenFilterV2Serializer(item as EdgeNGramTokenFilterV2);

    case "#Microsoft.Azure.Search.ElisionTokenFilter":
      return elisionTokenFilterSerializer(item as ElisionTokenFilter);

    case "#Microsoft.Azure.Search.KeepTokenFilter":
      return keepTokenFilterSerializer(item as KeepTokenFilter);

    case "#Microsoft.Azure.Search.KeywordMarkerTokenFilter":
      return keywordMarkerTokenFilterSerializer(
        item as KeywordMarkerTokenFilter,
      );

    case "#Microsoft.Azure.Search.LengthTokenFilter":
      return lengthTokenFilterSerializer(item as LengthTokenFilter);

    case "#Microsoft.Azure.Search.LimitTokenFilter":
      return limitTokenFilterSerializer(item as LimitTokenFilter);

    case "#Microsoft.Azure.Search.NGramTokenFilterV2":
      return nGramTokenFilterV2Serializer(item as NGramTokenFilterV2);

    case "#Microsoft.Azure.Search.PatternCaptureTokenFilter":
      return patternCaptureTokenFilterSerializer(
        item as PatternCaptureTokenFilter,
      );

    case "#Microsoft.Azure.Search.PatternReplaceTokenFilter":
      return patternReplaceTokenFilterSerializer(
        item as PatternReplaceTokenFilter,
      );

    case "#Microsoft.Azure.Search.PhoneticTokenFilter":
      return phoneticTokenFilterSerializer(item as PhoneticTokenFilter);

    case "#Microsoft.Azure.Search.ShingleTokenFilter":
      return shingleTokenFilterSerializer(item as ShingleTokenFilter);

    case "#Microsoft.Azure.Search.SnowballTokenFilter":
      return snowballTokenFilterSerializer(item as SnowballTokenFilter);

    case "#Microsoft.Azure.Search.StemmerTokenFilter":
      return stemmerTokenFilterSerializer(item as StemmerTokenFilter);

    case "#Microsoft.Azure.Search.StemmerOverrideTokenFilter":
      return stemmerOverrideTokenFilterSerializer(
        item as StemmerOverrideTokenFilter,
      );

    case "#Microsoft.Azure.Search.StopwordsTokenFilter":
      return stopwordsTokenFilterSerializer(item as StopwordsTokenFilter);

    case "#Microsoft.Azure.Search.SynonymTokenFilter":
      return synonymTokenFilterSerializer(item as SynonymTokenFilter);

    case "#Microsoft.Azure.Search.TruncateTokenFilter":
      return truncateTokenFilterSerializer(item as TruncateTokenFilter);

    case "#Microsoft.Azure.Search.UniqueTokenFilter":
      return uniqueTokenFilterSerializer(item as UniqueTokenFilter);

    case "#Microsoft.Azure.Search.WordDelimiterTokenFilter":
      return wordDelimiterTokenFilterSerializer(
        item as WordDelimiterTokenFilter,
      );

    default:
      return tokenFilterSerializer(item);
  }
}

export function tokenFilterUnionDeserializer(item: any): TokenFilterUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.AsciiFoldingTokenFilter":
      return asciiFoldingTokenFilterDeserializer(
        item as AsciiFoldingTokenFilter,
      );

    case "#Microsoft.Azure.Search.CjkBigramTokenFilter":
      return cjkBigramTokenFilterDeserializer(item as CjkBigramTokenFilter);

    case "#Microsoft.Azure.Search.CommonGramTokenFilter":
      return commonGramTokenFilterDeserializer(item as CommonGramTokenFilter);

    case "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter":
      return dictionaryDecompounderTokenFilterDeserializer(
        item as DictionaryDecompounderTokenFilter,
      );

    case "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2":
      return edgeNGramTokenFilterV2Deserializer(item as EdgeNGramTokenFilterV2);

    case "#Microsoft.Azure.Search.ElisionTokenFilter":
      return elisionTokenFilterDeserializer(item as ElisionTokenFilter);

    case "#Microsoft.Azure.Search.KeepTokenFilter":
      return keepTokenFilterDeserializer(item as KeepTokenFilter);

    case "#Microsoft.Azure.Search.KeywordMarkerTokenFilter":
      return keywordMarkerTokenFilterDeserializer(
        item as KeywordMarkerTokenFilter,
      );

    case "#Microsoft.Azure.Search.LengthTokenFilter":
      return lengthTokenFilterDeserializer(item as LengthTokenFilter);

    case "#Microsoft.Azure.Search.LimitTokenFilter":
      return limitTokenFilterDeserializer(item as LimitTokenFilter);

    case "#Microsoft.Azure.Search.NGramTokenFilterV2":
      return nGramTokenFilterV2Deserializer(item as NGramTokenFilterV2);

    case "#Microsoft.Azure.Search.PatternCaptureTokenFilter":
      return patternCaptureTokenFilterDeserializer(
        item as PatternCaptureTokenFilter,
      );

    case "#Microsoft.Azure.Search.PatternReplaceTokenFilter":
      return patternReplaceTokenFilterDeserializer(
        item as PatternReplaceTokenFilter,
      );

    case "#Microsoft.Azure.Search.PhoneticTokenFilter":
      return phoneticTokenFilterDeserializer(item as PhoneticTokenFilter);

    case "#Microsoft.Azure.Search.ShingleTokenFilter":
      return shingleTokenFilterDeserializer(item as ShingleTokenFilter);

    case "#Microsoft.Azure.Search.SnowballTokenFilter":
      return snowballTokenFilterDeserializer(item as SnowballTokenFilter);

    case "#Microsoft.Azure.Search.StemmerTokenFilter":
      return stemmerTokenFilterDeserializer(item as StemmerTokenFilter);

    case "#Microsoft.Azure.Search.StemmerOverrideTokenFilter":
      return stemmerOverrideTokenFilterDeserializer(
        item as StemmerOverrideTokenFilter,
      );

    case "#Microsoft.Azure.Search.StopwordsTokenFilter":
      return stopwordsTokenFilterDeserializer(item as StopwordsTokenFilter);

    case "#Microsoft.Azure.Search.SynonymTokenFilter":
      return synonymTokenFilterDeserializer(item as SynonymTokenFilter);

    case "#Microsoft.Azure.Search.TruncateTokenFilter":
      return truncateTokenFilterDeserializer(item as TruncateTokenFilter);

    case "#Microsoft.Azure.Search.UniqueTokenFilter":
      return uniqueTokenFilterDeserializer(item as UniqueTokenFilter);

    case "#Microsoft.Azure.Search.WordDelimiterTokenFilter":
      return wordDelimiterTokenFilterDeserializer(
        item as WordDelimiterTokenFilter,
      );

    default:
      return tokenFilterDeserializer(item);
  }
}

/**
 * Converts alphabetic, numeric, and symbolic Unicode characters which are not in
 * the first 127 ASCII characters (the "Basic Latin" Unicode block) into their
 * ASCII equivalents, if such equivalents exist. This token filter is implemented
 * using Apache Lucene.
 */
export interface AsciiFoldingTokenFilter extends TokenFilter {
  /** A value indicating whether the original token will be kept. Default is false. */
  preserveOriginal?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.AsciiFoldingTokenFilter";
}

export function asciiFoldingTokenFilterSerializer(
  item: AsciiFoldingTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    preserveOriginal: item["preserveOriginal"],
  };
}

export function asciiFoldingTokenFilterDeserializer(
  item: any,
): AsciiFoldingTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    preserveOriginal: item["preserveOriginal"],
  };
}

/**
 * Forms bigrams of CJK terms that are generated from the standard tokenizer. This
 * token filter is implemented using Apache Lucene.
 */
export interface CjkBigramTokenFilter extends TokenFilter {
  /** The scripts to ignore. */
  ignoreScripts?: CjkBigramTokenFilterScripts[];
  /**
   * A value indicating whether to output both unigrams and bigrams (if true), or
   * just bigrams (if false). Default is false.
   */
  outputUnigrams?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.CjkBigramTokenFilter";
}

export function cjkBigramTokenFilterSerializer(
  item: CjkBigramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    ignoreScripts: !item["ignoreScripts"]
      ? item["ignoreScripts"]
      : item["ignoreScripts"].map((p: any) => {
          return p;
        }),
    outputUnigrams: item["outputUnigrams"],
  };
}

export function cjkBigramTokenFilterDeserializer(
  item: any,
): CjkBigramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    ignoreScripts: !item["ignoreScripts"]
      ? item["ignoreScripts"]
      : item["ignoreScripts"].map((p: any) => {
          return p;
        }),
    outputUnigrams: item["outputUnigrams"],
  };
}

/** Scripts that can be ignored by CjkBigramTokenFilter. */
export type CjkBigramTokenFilterScripts =
  | "han"
  | "hiragana"
  | "katakana"
  | "hangul";

/**
 * Construct bigrams for frequently occurring terms while indexing. Single terms
 * are still indexed too, with bigrams overlaid. This token filter is implemented
 * using Apache Lucene.
 */
export interface CommonGramTokenFilter extends TokenFilter {
  /** The set of common words. */
  commonWords: string[];
  /**
   * A value indicating whether common words matching will be case insensitive.
   * Default is false.
   */
  ignoreCase?: boolean;
  /**
   * A value that indicates whether the token filter is in query mode. When in query
   * mode, the token filter generates bigrams and then removes common words and
   * single terms followed by a common word. Default is false.
   */
  useQueryMode?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.CommonGramTokenFilter";
}

export function commonGramTokenFilterSerializer(
  item: CommonGramTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    commonWords: item["commonWords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    queryMode: item["useQueryMode"],
  };
}

export function commonGramTokenFilterDeserializer(
  item: any,
): CommonGramTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    commonWords: item["commonWords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    useQueryMode: item["queryMode"],
  };
}

/**
 * Decomposes compound words found in many Germanic languages. This token filter
 * is implemented using Apache Lucene.
 */
export interface DictionaryDecompounderTokenFilter extends TokenFilter {
  /** The list of words to match against. */
  wordList: string[];
  /**
   * The minimum word size. Only words longer than this get processed. Default is 5.
   * Maximum is 300.
   */
  minWordSize?: number;
  /**
   * The minimum subword size. Only subwords longer than this are outputted. Default
   * is 2. Maximum is 300.
   */
  minSubwordSize?: number;
  /**
   * The maximum subword size. Only subwords shorter than this are outputted.
   * Default is 15. Maximum is 300.
   */
  maxSubwordSize?: number;
  /**
   * A value indicating whether to add only the longest matching subword to the
   * output. Default is false.
   */
  onlyLongestMatch?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.DictionaryDecompounderTokenFilter";
}

export function dictionaryDecompounderTokenFilterSerializer(
  item: DictionaryDecompounderTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    wordList: item["wordList"].map((p: any) => {
      return p;
    }),
    minWordSize: item["minWordSize"],
    minSubwordSize: item["minSubwordSize"],
    maxSubwordSize: item["maxSubwordSize"],
    onlyLongestMatch: item["onlyLongestMatch"],
  };
}

export function dictionaryDecompounderTokenFilterDeserializer(
  item: any,
): DictionaryDecompounderTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    wordList: item["wordList"].map((p: any) => {
      return p;
    }),
    minWordSize: item["minWordSize"],
    minSubwordSize: item["minSubwordSize"],
    maxSubwordSize: item["maxSubwordSize"],
    onlyLongestMatch: item["onlyLongestMatch"],
  };
}

/**
 * Generates n-grams of the given size(s) starting from the front or the back of
 * an input token. This token filter is implemented using Apache Lucene.
 */
export interface EdgeNGramTokenFilterV2 extends TokenFilter {
  /**
   * The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the
   * value of maxGram.
   */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /**
   * Specifies which side of the input the n-gram should be generated from. Default
   * is "front".
   */
  side?: EdgeNGramTokenFilterSide;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.EdgeNGramTokenFilterV2";
}

export function edgeNGramTokenFilterV2Serializer(
  item: EdgeNGramTokenFilterV2,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    side: item["side"],
  };
}

export function edgeNGramTokenFilterV2Deserializer(
  item: any,
): EdgeNGramTokenFilterV2 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
    side: item["side"],
  };
}

/** Specifies which side of the input an n-gram should be generated from. */
export type EdgeNGramTokenFilterSide = "front" | "back";

/**
 * Removes elisions. For example, "l'avion" (the plane) will be converted to
 * "avion" (plane). This token filter is implemented using Apache Lucene.
 */
export interface ElisionTokenFilter extends TokenFilter {
  /** The set of articles to remove. */
  articles?: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.ElisionTokenFilter";
}

export function elisionTokenFilterSerializer(item: ElisionTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    articles: !item["articles"]
      ? item["articles"]
      : item["articles"].map((p: any) => {
          return p;
        }),
  };
}

export function elisionTokenFilterDeserializer(item: any): ElisionTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    articles: !item["articles"]
      ? item["articles"]
      : item["articles"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * A token filter that only keeps tokens with text contained in a specified list
 * of words. This token filter is implemented using Apache Lucene.
 */
export interface KeepTokenFilter extends TokenFilter {
  /** The list of words to keep. */
  keepWords: string[];
  /** A value indicating whether to lower case all words first. Default is false. */
  lowerCaseKeepWords?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.KeepTokenFilter";
}

export function keepTokenFilterSerializer(item: KeepTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    keepWords: item["keepWords"].map((p: any) => {
      return p;
    }),
    keepWordsCase: item["lowerCaseKeepWords"],
  };
}

export function keepTokenFilterDeserializer(item: any): KeepTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    keepWords: item["keepWords"].map((p: any) => {
      return p;
    }),
    lowerCaseKeepWords: item["keepWordsCase"],
  };
}

/** Marks terms as keywords. This token filter is implemented using Apache Lucene. */
export interface KeywordMarkerTokenFilter extends TokenFilter {
  /** A list of words to mark as keywords. */
  keywords: string[];
  /**
   * A value indicating whether to ignore case. If true, all words are converted to
   * lower case first. Default is false.
   */
  ignoreCase?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.KeywordMarkerTokenFilter";
}

export function keywordMarkerTokenFilterSerializer(
  item: KeywordMarkerTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    keywords: item["keywords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
  };
}

export function keywordMarkerTokenFilterDeserializer(
  item: any,
): KeywordMarkerTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    keywords: item["keywords"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
  };
}

/**
 * Removes words that are too long or too short. This token filter is implemented
 * using Apache Lucene.
 */
export interface LengthTokenFilter extends TokenFilter {
  /**
   * The minimum length in characters. Default is 0. Maximum is 300. Must be less
   * than the value of max.
   */
  minLength?: number;
  /** The maximum length in characters. Default and maximum is 300. */
  maxLength?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.LengthTokenFilter";
}

export function lengthTokenFilterSerializer(item: LengthTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    min: item["minLength"],
    max: item["maxLength"],
  };
}

export function lengthTokenFilterDeserializer(item: any): LengthTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minLength: item["min"],
    maxLength: item["max"],
  };
}

/**
 * Limits the number of tokens while indexing. This token filter is implemented
 * using Apache Lucene.
 */
export interface LimitTokenFilter extends TokenFilter {
  /** The maximum number of tokens to produce. Default is 1. */
  maxTokenCount?: number;
  /**
   * A value indicating whether all tokens from the input must be consumed even if
   * maxTokenCount is reached. Default is false.
   */
  consumeAllTokens?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.LimitTokenFilter";
}

export function limitTokenFilterSerializer(item: LimitTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxTokenCount: item["maxTokenCount"],
    consumeAllTokens: item["consumeAllTokens"],
  };
}

export function limitTokenFilterDeserializer(item: any): LimitTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxTokenCount: item["maxTokenCount"],
    consumeAllTokens: item["consumeAllTokens"],
  };
}

/**
 * Generates n-grams of the given size(s). This token filter is implemented using
 * Apache Lucene.
 */
export interface NGramTokenFilterV2 extends TokenFilter {
  /**
   * The minimum n-gram length. Default is 1. Maximum is 300. Must be less than the
   * value of maxGram.
   */
  minGram?: number;
  /** The maximum n-gram length. Default is 2. Maximum is 300. */
  maxGram?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.NGramTokenFilterV2";
}

export function nGramTokenFilterV2Serializer(item: NGramTokenFilterV2): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
  };
}

export function nGramTokenFilterV2Deserializer(item: any): NGramTokenFilterV2 {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    minGram: item["minGram"],
    maxGram: item["maxGram"],
  };
}

/**
 * Uses Java regexes to emit multiple tokens - one for each capture group in one
 * or more patterns. This token filter is implemented using Apache Lucene.
 */
export interface PatternCaptureTokenFilter extends TokenFilter {
  /** A list of patterns to match against each token. */
  patterns: string[];
  /**
   * A value indicating whether to return the original token even if one of the
   * patterns matches. Default is true.
   */
  preserveOriginal?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PatternCaptureTokenFilter";
}

export function patternCaptureTokenFilterSerializer(
  item: PatternCaptureTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    patterns: item["patterns"].map((p: any) => {
      return p;
    }),
    preserveOriginal: item["preserveOriginal"],
  };
}

export function patternCaptureTokenFilterDeserializer(
  item: any,
): PatternCaptureTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    patterns: item["patterns"].map((p: any) => {
      return p;
    }),
    preserveOriginal: item["preserveOriginal"],
  };
}

/**
 * A character filter that replaces characters in the input string. It uses a
 * regular expression to identify character sequences to preserve and a
 * replacement pattern to identify characters to replace. For example, given the
 * input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the
 * result would be "aa#bb aa#bb". This token filter is implemented using Apache
 * Lucene.
 */
export interface PatternReplaceTokenFilter extends TokenFilter {
  /** A regular expression pattern. */
  pattern: string;
  /** The replacement text. */
  replacement: string;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PatternReplaceTokenFilter";
}

export function patternReplaceTokenFilterSerializer(
  item: PatternReplaceTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function patternReplaceTokenFilterDeserializer(
  item: any,
): PatternReplaceTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

/**
 * Create tokens for phonetic matches. This token filter is implemented using
 * Apache Lucene.
 */
export interface PhoneticTokenFilter extends TokenFilter {
  /** The phonetic encoder to use. Default is "metaphone". */
  encoder?: PhoneticEncoder;
  /**
   * A value indicating whether encoded tokens should replace original tokens. If
   * false, encoded tokens are added as synonyms. Default is true.
   */
  replaceOriginalTokens?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.PhoneticTokenFilter";
}

export function phoneticTokenFilterSerializer(item: PhoneticTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    encoder: item["encoder"],
    replace: item["replaceOriginalTokens"],
  };
}

export function phoneticTokenFilterDeserializer(
  item: any,
): PhoneticTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    encoder: item["encoder"],
    replaceOriginalTokens: item["replace"],
  };
}

/** Identifies the type of phonetic encoder to use with a PhoneticTokenFilter. */
export type PhoneticEncoder =
  | "metaphone"
  | "doubleMetaphone"
  | "soundex"
  | "refinedSoundex"
  | "caverphone1"
  | "caverphone2"
  | "cologne"
  | "nysiis"
  | "koelnerPhonetik"
  | "haasePhonetik"
  | "beiderMorse";

/**
 * Creates combinations of tokens as a single token. This token filter is
 * implemented using Apache Lucene.
 */
export interface ShingleTokenFilter extends TokenFilter {
  /** The maximum shingle size. Default and minimum value is 2. */
  maxShingleSize?: number;
  /**
   * The minimum shingle size. Default and minimum value is 2. Must be less than the
   * value of maxShingleSize.
   */
  minShingleSize?: number;
  /**
   * A value indicating whether the output stream will contain the input tokens
   * (unigrams) as well as shingles. Default is true.
   */
  outputUnigrams?: boolean;
  /**
   * A value indicating whether to output unigrams for those times when no shingles
   * are available. This property takes precedence when outputUnigrams is set to
   * false. Default is false.
   */
  outputUnigramsIfNoShingles?: boolean;
  /**
   * The string to use when joining adjacent tokens to form a shingle. Default is a
   * single space (" ").
   */
  tokenSeparator?: string;
  /**
   * The string to insert for each position at which there is no token. Default is
   * an underscore ("_").
   */
  filterToken?: string;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.ShingleTokenFilter";
}

export function shingleTokenFilterSerializer(item: ShingleTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    maxShingleSize: item["maxShingleSize"],
    minShingleSize: item["minShingleSize"],
    outputUnigrams: item["outputUnigrams"],
    outputUnigramsIfNoShingles: item["outputUnigramsIfNoShingles"],
    tokenSeparator: item["tokenSeparator"],
    filterToken: item["filterToken"],
  };
}

export function shingleTokenFilterDeserializer(item: any): ShingleTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    maxShingleSize: item["maxShingleSize"],
    minShingleSize: item["minShingleSize"],
    outputUnigrams: item["outputUnigrams"],
    outputUnigramsIfNoShingles: item["outputUnigramsIfNoShingles"],
    tokenSeparator: item["tokenSeparator"],
    filterToken: item["filterToken"],
  };
}

/**
 * A filter that stems words using a Snowball-generated stemmer. This token filter
 * is implemented using Apache Lucene.
 */
export interface SnowballTokenFilter extends TokenFilter {
  /** The language to use. */
  language: SnowballTokenFilterLanguage;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.SnowballTokenFilter";
}

export function snowballTokenFilterSerializer(item: SnowballTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    language: item["language"],
  };
}

export function snowballTokenFilterDeserializer(
  item: any,
): SnowballTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    language: item["language"],
  };
}

/** The language to use for a Snowball token filter. */
export type SnowballTokenFilterLanguage =
  | "armenian"
  | "basque"
  | "catalan"
  | "danish"
  | "dutch"
  | "english"
  | "finnish"
  | "french"
  | "german"
  | "german2"
  | "hungarian"
  | "italian"
  | "kp"
  | "lovins"
  | "norwegian"
  | "porter"
  | "portuguese"
  | "romanian"
  | "russian"
  | "spanish"
  | "swedish"
  | "turkish";

/**
 * Language specific stemming filter. This token filter is implemented using
 * Apache Lucene.
 */
export interface StemmerTokenFilter extends TokenFilter {
  /** The language to use. */
  language: StemmerTokenFilterLanguage;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StemmerTokenFilter";
}

export function stemmerTokenFilterSerializer(item: StemmerTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    language: item["language"],
  };
}

export function stemmerTokenFilterDeserializer(item: any): StemmerTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    language: item["language"],
  };
}

/** The language to use for a stemmer token filter. */
export type StemmerTokenFilterLanguage =
  | "arabic"
  | "armenian"
  | "basque"
  | "brazilian"
  | "bulgarian"
  | "catalan"
  | "czech"
  | "danish"
  | "dutch"
  | "dutchKp"
  | "english"
  | "lightEnglish"
  | "minimalEnglish"
  | "possessiveEnglish"
  | "porter2"
  | "lovins"
  | "finnish"
  | "lightFinnish"
  | "french"
  | "lightFrench"
  | "minimalFrench"
  | "galician"
  | "minimalGalician"
  | "german"
  | "german2"
  | "lightGerman"
  | "minimalGerman"
  | "greek"
  | "hindi"
  | "hungarian"
  | "lightHungarian"
  | "indonesian"
  | "irish"
  | "italian"
  | "lightItalian"
  | "sorani"
  | "latvian"
  | "norwegian"
  | "lightNorwegian"
  | "minimalNorwegian"
  | "lightNynorsk"
  | "minimalNynorsk"
  | "portuguese"
  | "lightPortuguese"
  | "minimalPortuguese"
  | "portugueseRslp"
  | "romanian"
  | "russian"
  | "lightRussian"
  | "spanish"
  | "lightSpanish"
  | "swedish"
  | "lightSwedish"
  | "turkish";

/**
 * Provides the ability to override other stemming filters with custom
 * dictionary-based stemming. Any dictionary-stemmed terms will be marked as
 * keywords so that they will not be stemmed with stemmers down the chain. Must be
 * placed before any stemming filters. This token filter is implemented using
 * Apache Lucene.
 */
export interface StemmerOverrideTokenFilter extends TokenFilter {
  /**
   * A list of stemming rules in the following format: "word => stem", for example:
   * "ran => run".
   */
  rules: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StemmerOverrideTokenFilter";
}

export function stemmerOverrideTokenFilterSerializer(
  item: StemmerOverrideTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    rules: item["rules"].map((p: any) => {
      return p;
    }),
  };
}

export function stemmerOverrideTokenFilterDeserializer(
  item: any,
): StemmerOverrideTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    rules: item["rules"].map((p: any) => {
      return p;
    }),
  };
}

/**
 * Removes stop words from a token stream. This token filter is implemented using
 * Apache Lucene.
 */
export interface StopwordsTokenFilter extends TokenFilter {
  /**
   * The list of stopwords. This property and the stopwords list property cannot
   * both be set.
   */
  stopwords?: string[];
  /**
   * A predefined list of stopwords to use. This property and the stopwords property
   * cannot both be set. Default is English.
   */
  stopwordsList?: StopwordsList;
  /**
   * A value indicating whether to ignore case. If true, all words are converted to
   * lower case first. Default is false.
   */
  ignoreCase?: boolean;
  /**
   * A value indicating whether to ignore the last search term if it's a stop word.
   * Default is true.
   */
  removeTrailingStopWords?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.StopwordsTokenFilter";
}

export function stopwordsTokenFilterSerializer(
  item: StopwordsTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
    stopwordsList: item["stopwordsList"],
    ignoreCase: item["ignoreCase"],
    removeTrailing: item["removeTrailingStopWords"],
  };
}

export function stopwordsTokenFilterDeserializer(
  item: any,
): StopwordsTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    stopwords: !item["stopwords"]
      ? item["stopwords"]
      : item["stopwords"].map((p: any) => {
          return p;
        }),
    stopwordsList: item["stopwordsList"],
    ignoreCase: item["ignoreCase"],
    removeTrailingStopWords: item["removeTrailing"],
  };
}

/** Identifies a predefined list of language-specific stopwords. */
export type StopwordsList =
  | "arabic"
  | "armenian"
  | "basque"
  | "brazilian"
  | "bulgarian"
  | "catalan"
  | "czech"
  | "danish"
  | "dutch"
  | "english"
  | "finnish"
  | "french"
  | "galician"
  | "german"
  | "greek"
  | "hindi"
  | "hungarian"
  | "indonesian"
  | "irish"
  | "italian"
  | "latvian"
  | "norwegian"
  | "persian"
  | "portuguese"
  | "romanian"
  | "russian"
  | "sorani"
  | "spanish"
  | "swedish"
  | "thai"
  | "turkish";

/**
 * Matches single or multi-word synonyms in a token stream. This token filter is
 * implemented using Apache Lucene.
 */
export interface SynonymTokenFilter extends TokenFilter {
  /**
   * A list of synonyms in following one of two formats: 1. incredible,
   * unbelievable, fabulous => amazing - all terms on the left side of => symbol
   * will be replaced with all terms on its right side; 2. incredible, unbelievable,
   * fabulous, amazing - comma separated list of equivalent words. Set the expand
   * option to change how this list is interpreted.
   */
  synonyms: string[];
  /** A value indicating whether to case-fold input for matching. Default is false. */
  ignoreCase?: boolean;
  /**
   * A value indicating whether all words in the list of synonyms (if => notation is
   * not used) will map to one another. If true, all words in the list of synonyms
   * (if => notation is not used) will map to one another. The following list:
   * incredible, unbelievable, fabulous, amazing is equivalent to: incredible,
   * unbelievable, fabulous, amazing => incredible, unbelievable, fabulous, amazing.
   * If false, the following list: incredible, unbelievable, fabulous, amazing will
   * be equivalent to: incredible, unbelievable, fabulous, amazing => incredible.
   * Default is true.
   */
  expand?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.SynonymTokenFilter";
}

export function synonymTokenFilterSerializer(item: SynonymTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    synonyms: item["synonyms"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    expand: item["expand"],
  };
}

export function synonymTokenFilterDeserializer(item: any): SynonymTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    synonyms: item["synonyms"].map((p: any) => {
      return p;
    }),
    ignoreCase: item["ignoreCase"],
    expand: item["expand"],
  };
}

/**
 * Truncates the terms to a specific length. This token filter is implemented
 * using Apache Lucene.
 */
export interface TruncateTokenFilter extends TokenFilter {
  /** The length at which terms will be truncated. Default and maximum is 300. */
  length?: number;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.TruncateTokenFilter";
}

export function truncateTokenFilterSerializer(item: TruncateTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    length: item["length"],
  };
}

export function truncateTokenFilterDeserializer(
  item: any,
): TruncateTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    length: item["length"],
  };
}

/**
 * Filters out tokens with same text as the previous token. This token filter is
 * implemented using Apache Lucene.
 */
export interface UniqueTokenFilter extends TokenFilter {
  /**
   * A value indicating whether to remove duplicates only at the same position.
   * Default is false.
   */
  onlyOnSamePosition?: boolean;
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.UniqueTokenFilter";
}

export function uniqueTokenFilterSerializer(item: UniqueTokenFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    onlyOnSamePosition: item["onlyOnSamePosition"],
  };
}

export function uniqueTokenFilterDeserializer(item: any): UniqueTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    onlyOnSamePosition: item["onlyOnSamePosition"],
  };
}

/**
 * Splits words into subwords and performs optional transformations on subword
 * groups. This token filter is implemented using Apache Lucene.
 */
export interface WordDelimiterTokenFilter extends TokenFilter {
  /**
   * A value indicating whether to generate part words. If set, causes parts of
   * words to be generated; for example "AzureSearch" becomes "Azure" "Search".
   * Default is true.
   */
  generateWordParts?: boolean;
  /** A value indicating whether to generate number subwords. Default is true. */
  generateNumberParts?: boolean;
  /**
   * A value indicating whether maximum runs of word parts will be catenated. For
   * example, if this is set to true, "Azure-Search" becomes "AzureSearch". Default
   * is false.
   */
  catenateWords?: boolean;
  /**
   * A value indicating whether maximum runs of number parts will be catenated. For
   * example, if this is set to true, "1-2" becomes "12". Default is false.
   */
  catenateNumbers?: boolean;
  /**
   * A value indicating whether all subword parts will be catenated. For example, if
   * this is set to true, "Azure-Search-1" becomes "AzureSearch1". Default is false.
   */
  catenateAll?: boolean;
  /**
   * A value indicating whether to split words on caseChange. For example, if this
   * is set to true, "AzureSearch" becomes "Azure" "Search". Default is true.
   */
  splitOnCaseChange?: boolean;
  /**
   * A value indicating whether original words will be preserved and added to the
   * subword list. Default is false.
   */
  preserveOriginal?: boolean;
  /**
   * A value indicating whether to split on numbers. For example, if this is set to
   * true, "Azure1Search" becomes "Azure" "1" "Search". Default is true.
   */
  splitOnNumerics?: boolean;
  /**
   * A value indicating whether to remove trailing "'s" for each subword. Default is
   * true.
   */
  stemEnglishPossessive?: boolean;
  /** A list of tokens to protect from being delimited. */
  protectedWords?: string[];
  /** A URI fragment specifying the type of token filter. */
  odataType: "#Microsoft.Azure.Search.WordDelimiterTokenFilter";
}

export function wordDelimiterTokenFilterSerializer(
  item: WordDelimiterTokenFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    generateWordParts: item["generateWordParts"],
    generateNumberParts: item["generateNumberParts"],
    catenateWords: item["catenateWords"],
    catenateNumbers: item["catenateNumbers"],
    catenateAll: item["catenateAll"],
    splitOnCaseChange: item["splitOnCaseChange"],
    preserveOriginal: item["preserveOriginal"],
    splitOnNumerics: item["splitOnNumerics"],
    stemEnglishPossessive: item["stemEnglishPossessive"],
    protectedWords: !item["protectedWords"]
      ? item["protectedWords"]
      : item["protectedWords"].map((p: any) => {
          return p;
        }),
  };
}

export function wordDelimiterTokenFilterDeserializer(
  item: any,
): WordDelimiterTokenFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    generateWordParts: item["generateWordParts"],
    generateNumberParts: item["generateNumberParts"],
    catenateWords: item["catenateWords"],
    catenateNumbers: item["catenateNumbers"],
    catenateAll: item["catenateAll"],
    splitOnCaseChange: item["splitOnCaseChange"],
    preserveOriginal: item["preserveOriginal"],
    splitOnNumerics: item["splitOnNumerics"],
    stemEnglishPossessive: item["stemEnglishPossessive"],
    protectedWords: !item["protectedWords"]
      ? item["protectedWords"]
      : item["protectedWords"].map((p: any) => {
          return p;
        }),
  };
}

export function charFilterUnionArraySerializer(
  result: Array<CharFilterUnion>,
): any[] {
  return result.map((item) => {
    return charFilterUnionSerializer(item);
  });
}

export function charFilterUnionArrayDeserializer(
  result: Array<CharFilterUnion>,
): any[] {
  return result.map((item) => {
    return charFilterUnionDeserializer(item);
  });
}

/** Base type for character filters. */
export interface CharFilter {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.MappingCharFilter, #Microsoft.Azure.Search.PatternReplaceCharFilter */
  odataType: string;
  /**
   * The name of the char filter. It must only contain letters, digits, spaces,
   * dashes or underscores, can only start and end with alphanumeric characters, and
   * is limited to 128 characters.
   */
  name: string;
}

export function charFilterSerializer(item: CharFilter): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function charFilterDeserializer(item: any): CharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for CharFilterUnion */
export type CharFilterUnion =
  | MappingCharFilter
  | PatternReplaceCharFilter
  | CharFilter;

export function charFilterUnionSerializer(item: CharFilterUnion): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.MappingCharFilter":
      return mappingCharFilterSerializer(item as MappingCharFilter);

    case "#Microsoft.Azure.Search.PatternReplaceCharFilter":
      return patternReplaceCharFilterSerializer(
        item as PatternReplaceCharFilter,
      );

    default:
      return charFilterSerializer(item);
  }
}

export function charFilterUnionDeserializer(item: any): CharFilterUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.MappingCharFilter":
      return mappingCharFilterDeserializer(item as MappingCharFilter);

    case "#Microsoft.Azure.Search.PatternReplaceCharFilter":
      return patternReplaceCharFilterDeserializer(
        item as PatternReplaceCharFilter,
      );

    default:
      return charFilterDeserializer(item);
  }
}

/**
 * A character filter that applies mappings defined with the mappings option.
 * Matching is greedy (longest pattern matching at a given point wins).
 * Replacement is allowed to be the empty string. This character filter is
 * implemented using Apache Lucene.
 */
export interface MappingCharFilter extends CharFilter {
  /**
   * A list of mappings of the following format: "a=>b" (all occurrences of the
   * character "a" will be replaced with character "b").
   */
  mappings: string[];
  /** A URI fragment specifying the type of char filter. */
  odataType: "#Microsoft.Azure.Search.MappingCharFilter";
}

export function mappingCharFilterSerializer(item: MappingCharFilter): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    mappings: item["mappings"].map((p: any) => {
      return p;
    }),
  };
}

export function mappingCharFilterDeserializer(item: any): MappingCharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    mappings: item["mappings"].map((p: any) => {
      return p;
    }),
  };
}

/**
 * A character filter that replaces characters in the input string. It uses a
 * regular expression to identify character sequences to preserve and a
 * replacement pattern to identify characters to replace. For example, given the
 * input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement "$1#$2", the
 * result would be "aa#bb aa#bb". This character filter is implemented using
 * Apache Lucene.
 */
export interface PatternReplaceCharFilter extends CharFilter {
  /** A regular expression pattern. */
  pattern: string;
  /** The replacement text. */
  replacement: string;
  /** A URI fragment specifying the type of char filter. */
  odataType: "#Microsoft.Azure.Search.PatternReplaceCharFilter";
}

export function patternReplaceCharFilterSerializer(
  item: PatternReplaceCharFilter,
): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function patternReplaceCharFilterDeserializer(
  item: any,
): PatternReplaceCharFilter {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    pattern: item["pattern"],
    replacement: item["replacement"],
  };
}

export function lexicalNormalizerUnionArraySerializer(
  result: Array<LexicalNormalizerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalNormalizerUnionSerializer(item);
  });
}

export function lexicalNormalizerUnionArrayDeserializer(
  result: Array<LexicalNormalizerUnion>,
): any[] {
  return result.map((item) => {
    return lexicalNormalizerUnionDeserializer(item);
  });
}

/** Base type for normalizers. */
export interface LexicalNormalizer {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.CustomNormalizer */
  odataType: string;
  /**
   * The name of the char filter. It must only contain letters, digits, spaces,
   * dashes or underscores, can only start and end with alphanumeric characters, and
   * is limited to 128 characters.
   */
  name: string;
}

export function lexicalNormalizerSerializer(item: LexicalNormalizer): any {
  return { "@odata.type": item["odataType"], name: item["name"] };
}

export function lexicalNormalizerDeserializer(item: any): LexicalNormalizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
  };
}

/** Alias for LexicalNormalizerUnion */
export type LexicalNormalizerUnion = CustomNormalizer | LexicalNormalizer;

export function lexicalNormalizerUnionSerializer(
  item: LexicalNormalizerUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomNormalizer":
      return customNormalizerSerializer(item as CustomNormalizer);

    default:
      return lexicalNormalizerSerializer(item);
  }
}

export function lexicalNormalizerUnionDeserializer(
  item: any,
): LexicalNormalizerUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.CustomNormalizer":
      return customNormalizerDeserializer(item as CustomNormalizer);

    default:
      return lexicalNormalizerDeserializer(item);
  }
}

/**
 * Allows you to configure normalization for filterable, sortable, and facetable
 * fields, which by default operate with strict matching. This is a user-defined
 * configuration consisting of at least one or more filters, which modify the
 * token that is stored.
 */
export interface CustomNormalizer extends LexicalNormalizer {
  /**
   * A list of token filters used to filter out or modify the input token. For
   * example, you can specify a lowercase filter that converts all characters to
   * lowercase. The filters are run in the order in which they are listed.
   */
  tokenFilters?: TokenFilterName[];
  /**
   * A list of character filters used to prepare input text before it is processed.
   * For instance, they can replace certain characters or symbols. The filters are
   * run in the order in which they are listed.
   */
  charFilters?: CharFilterName[];
  /** A URI fragment specifying the type of normalizer. */
  odataType: "#Microsoft.Azure.Search.CustomNormalizer";
}

export function customNormalizerSerializer(item: CustomNormalizer): any {
  return {
    "@odata.type": item["odataType"],
    name: item["name"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

export function customNormalizerDeserializer(item: any): CustomNormalizer {
  return {
    odataType: item["@odata.type"],
    name: item["name"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/**
 * Base type for similarity algorithms. Similarity algorithms are used to
 * calculate scores that tie queries to documents. The higher the score, the more
 * relevant the document is to that specific query. Those scores are used to rank
 * the search results.
 */
export interface SimilarityAlgorithm {
  /** The discriminator for derived types. */
  /** The discriminator possible values: #Microsoft.Azure.Search.ClassicSimilarity, #Microsoft.Azure.Search.BM25Similarity */
  odataType: string;
}

export function similarityAlgorithmSerializer(item: SimilarityAlgorithm): any {
  return { "@odata.type": item["odataType"] };
}

export function similarityAlgorithmDeserializer(
  item: any,
): SimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
  };
}

/** Alias for SimilarityAlgorithmUnion */
export type SimilarityAlgorithmUnion =
  | ClassicSimilarityAlgorithm
  | BM25SimilarityAlgorithm
  | SimilarityAlgorithm;

export function similarityAlgorithmUnionSerializer(
  item: SimilarityAlgorithmUnion,
): any {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicSimilarity":
      return classicSimilarityAlgorithmSerializer(
        item as ClassicSimilarityAlgorithm,
      );

    case "#Microsoft.Azure.Search.BM25Similarity":
      return bm25SimilarityAlgorithmSerializer(item as BM25SimilarityAlgorithm);

    default:
      return similarityAlgorithmSerializer(item);
  }
}

export function similarityAlgorithmUnionDeserializer(
  item: any,
): SimilarityAlgorithmUnion {
  switch (item.odataType) {
    case "#Microsoft.Azure.Search.ClassicSimilarity":
      return classicSimilarityAlgorithmDeserializer(
        item as ClassicSimilarityAlgorithm,
      );

    case "#Microsoft.Azure.Search.BM25Similarity":
      return bm25SimilarityAlgorithmDeserializer(
        item as BM25SimilarityAlgorithm,
      );

    default:
      return similarityAlgorithmDeserializer(item);
  }
}

/**
 * Legacy similarity algorithm which uses the Lucene TFIDFSimilarity
 * implementation of TF-IDF. This variation of TF-IDF introduces static document
 * length normalization as well as coordinating factors that penalize documents
 * that only partially match the searched queries.
 */
export interface ClassicSimilarityAlgorithm extends SimilarityAlgorithm {
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.ClassicSimilarity";
}

export function classicSimilarityAlgorithmSerializer(
  item: ClassicSimilarityAlgorithm,
): any {
  return { "@odata.type": item["odataType"] };
}

export function classicSimilarityAlgorithmDeserializer(
  item: any,
): ClassicSimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
  };
}

/**
 * Ranking function based on the Okapi BM25 similarity algorithm. BM25 is a
 * TF-IDF-like algorithm that includes length normalization (controlled by the 'b'
 * parameter) as well as term frequency saturation (controlled by the 'k1'
 * parameter).
 */
export interface BM25SimilarityAlgorithm extends SimilarityAlgorithm {
  /**
   * This property controls the scaling function between the term frequency of each
   * matching terms and the final relevance score of a document-query pair. By
   * default, a value of 1.2 is used. A value of 0.0 means the score does not scale
   * with an increase in term frequency.
   */
  k1?: number;
  /**
   * This property controls how the length of a document affects the relevance
   * score. By default, a value of 0.75 is used. A value of 0.0 means no length
   * normalization is applied, while a value of 1.0 means the score is fully
   * normalized by the length of the document.
   */
  b?: number;
  /** The discriminator for derived types. */
  odataType: "#Microsoft.Azure.Search.BM25Similarity";
}

export function bm25SimilarityAlgorithmSerializer(
  item: BM25SimilarityAlgorithm,
): any {
  return { "@odata.type": item["odataType"], k1: item["k1"], b: item["b"] };
}

export function bm25SimilarityAlgorithmDeserializer(
  item: any,
): BM25SimilarityAlgorithm {
  return {
    odataType: item["@odata.type"],
    k1: item["k1"],
    b: item["b"],
  };
}

/** Defines parameters for a search index that influence semantic capabilities. */
export interface SemanticSearch {
  /**
   * Allows you to set the name of a default semantic configuration in your index,
   * making it optional to pass it on as a query parameter every time.
   */
  defaultConfigurationName?: string;
  /** The semantic configurations for the index. */
  configurations?: SemanticConfiguration[];
}

export function semanticSearchSerializer(item: SemanticSearch): any {
  return {
    defaultConfiguration: item["defaultConfigurationName"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : semanticConfigurationArraySerializer(item["configurations"]),
  };
}

export function semanticSearchDeserializer(item: any): SemanticSearch {
  return {
    defaultConfigurationName: item["defaultConfiguration"],
    configurations: !item["configurations"]
      ? item["configurations"]
      : semanticConfigurationArrayDeserializer(item["configurations"]),
  };
}

export function semanticConfigurationArraySerializer(
  result: Array<SemanticConfiguration>,
): any[] {
  return result.map((item) => {
    return semanticConfigurationSerializer(item);
  });
}

export function semanticConfigurationArrayDeserializer(
  result: Array<SemanticConfiguration>,
): any[] {
  return result.map((item) => {
    return semanticConfigurationDeserializer(item);
  });
}

/**
 * Defines a specific configuration to be used in the context of semantic
 * capabilities.
 */
export interface SemanticConfiguration {
  /** The name of the semantic configuration. */
  name: string;
  /**
   * Describes the title, content, and keyword fields to be used for semantic
   * ranking, captions, highlights, and answers. At least one of the three sub
   * properties (titleField, prioritizedKeywordsFields and prioritizedContentFields)
   * need to be set.
   */
  prioritizedFields: SemanticPrioritizedFields;
  /** Determines how which semantic or query rewrite models to use during model flighting/upgrades. */
  flightingOptIn?: boolean;
}

export function semanticConfigurationSerializer(
  item: SemanticConfiguration,
): any {
  return {
    name: item["name"],
    prioritizedFields: semanticPrioritizedFieldsSerializer(
      item["prioritizedFields"],
    ),
    flightingOptIn: item["flightingOptIn"],
  };
}

export function semanticConfigurationDeserializer(
  item: any,
): SemanticConfiguration {
  return {
    name: item["name"],
    prioritizedFields: semanticPrioritizedFieldsDeserializer(
      item["prioritizedFields"],
    ),
    flightingOptIn: item["flightingOptIn"],
  };
}

/**
 * Describes the title, content, and keywords fields to be used for semantic
 * ranking, captions, highlights, and answers.
 */
export interface SemanticPrioritizedFields {
  /**
   * Defines the title field to be used for semantic ranking, captions, highlights,
   * and answers. If you don't have a title field in your index, leave this blank.
   */
  titleField?: SemanticField;
  /**
   * Defines the content fields to be used for semantic ranking, captions,
   * highlights, and answers. For the best result, the selected fields should
   * contain text in natural language form. The order of the fields in the array
   * represents their priority. Fields with lower priority may get truncated if the
   * content is long.
   */
  contentFields?: SemanticField[];
  /**
   * Defines the keyword fields to be used for semantic ranking, captions,
   * highlights, and answers. For the best result, the selected fields should
   * contain a list of keywords. The order of the fields in the array represents
   * their priority. Fields with lower priority may get truncated if the content is
   * long.
   */
  keywordsFields?: SemanticField[];
}

export function semanticPrioritizedFieldsSerializer(
  item: SemanticPrioritizedFields,
): any {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : semanticFieldSerializer(item["titleField"]),
    prioritizedContentFields: !item["contentFields"]
      ? item["contentFields"]
      : semanticFieldArraySerializer(item["contentFields"]),
    prioritizedKeywordsFields: !item["keywordsFields"]
      ? item["keywordsFields"]
      : semanticFieldArraySerializer(item["keywordsFields"]),
  };
}

export function semanticPrioritizedFieldsDeserializer(
  item: any,
): SemanticPrioritizedFields {
  return {
    titleField: !item["titleField"]
      ? item["titleField"]
      : semanticFieldDeserializer(item["titleField"]),
    contentFields: !item["prioritizedContentFields"]
      ? item["prioritizedContentFields"]
      : semanticFieldArrayDeserializer(item["prioritizedContentFields"]),
    keywordsFields: !item["prioritizedKeywordsFields"]
      ? item["prioritizedKeywordsFields"]
      : semanticFieldArrayDeserializer(item["prioritizedKeywordsFields"]),
  };
}

/** A field that is used as part of the semantic configuration. */
export interface SemanticField {
  /** File name */
  fieldName: string;
}

export function semanticFieldSerializer(item: SemanticField): any {
  return { fieldName: item["fieldName"] };
}

export function semanticFieldDeserializer(item: any): SemanticField {
  return {
    fieldName: item["fieldName"],
  };
}

export function semanticFieldArraySerializer(
  result: Array<SemanticField>,
): any[] {
  return result.map((item) => {
    return semanticFieldSerializer(item);
  });
}

export function semanticFieldArrayDeserializer(
  result: Array<SemanticField>,
): any[] {
  return result.map((item) => {
    return semanticFieldDeserializer(item);
  });
}

/** Contains configuration options related to vector search. */
export interface VectorSearch {
  /** Defines combinations of configurations to use with vector search. */
  profiles?: VectorSearchProfile[];
  /**
   * Contains configuration options specific to the algorithm used during indexing
   * or querying.
   */
  algorithms?: VectorSearchAlgorithmConfigurationUnion[];
  /** Contains configuration options on how to vectorize text vector queries. */
  vectorizers?: VectorSearchVectorizerUnion[];
  /**
   * Contains configuration options specific to the compression method used during
   * indexing or querying.
   */
  compressions?: VectorSearchCompressionUnion[];
}

export function vectorSearchSerializer(item: VectorSearch): any {
  return {
    profiles: !item["profiles"]
      ? item["profiles"]
      : vectorSearchProfileArraySerializer(item["profiles"]),
    algorithms: !item["algorithms"]
      ? item["algorithms"]
      : vectorSearchAlgorithmConfigurationUnionArraySerializer(
          item["algorithms"],
        ),
    vectorizers: !item["vectorizers"]
      ? item["vectorizers"]
      : vectorSearchVectorizerUnionArraySerializer(item["vectorizers"]),
    compressions: !item["compressions"]
      ? item["compressions"]
      : vectorSearchCompressionUnionArraySerializer(item["compressions"]),
  };
}

export function vectorSearchDeserializer(item: any): VectorSearch {
  return {
    profiles: !item["profiles"]
      ? item["profiles"]
      : vectorSearchProfileArrayDeserializer(item["profiles"]),
    algorithms: !item["algorithms"]
      ? item["algorithms"]
      : vectorSearchAlgorithmConfigurationUnionArrayDeserializer(
          item["algorithms"],
        ),
    vectorizers: !item["vectorizers"]
      ? item["vectorizers"]
      : vectorSearchVectorizerUnionArrayDeserializer(item["vectorizers"]),
    compressions: !item["compressions"]
      ? item["compressions"]
      : vectorSearchCompressionUnionArrayDeserializer(item["compressions"]),
  };
}

export function vectorSearchProfileArraySerializer(
  result: Array<VectorSearchProfile>,
): any[] {
  return result.map((item) => {
    return vectorSearchProfileSerializer(item);
  });
}

export function vectorSearchProfileArrayDeserializer(
  result: Array<VectorSearchProfile>,
): any[] {
  return result.map((item) => {
    return vectorSearchProfileDeserializer(item);
  });
}

/** Defines a combination of configurations to use with vector search. */
export interface VectorSearchProfile {
  /** The name to associate with this particular vector search profile. */
  name: string;
  /**
   * The name of the vector search algorithm configuration that specifies the
   * algorithm and optional parameters.
   */
  algorithmConfigurationName: string;
  /** The name of the vectorization being configured for use with vector search. */
  vectorizerName?: string;
  /**
   * The name of the compression method configuration that specifies the compression
   * method and optional parameters.
   */
  compressionName?: string;
}

export function vectorSearchProfileSerializer(item: VectorSearchProfile): any {
  return {
    name: item["name"],
    algorithm: item["algorithmConfigurationName"],
    vectorizer: item["vectorizerName"],
    compression: item["compressionName"],
  };
}

export function vectorSearchProfileDeserializer(
  item: any,
): VectorSearchProfile {
  return {
    name: item["name"],
    algorithmConfigurationName: item["algorithm"],
    vectorizerName: item["vectorizer"],
    compressionName: item["compression"],
  };
}

export function vectorSearchAlgorithmConfigurationUnionArraySerializer(
  result: Array<VectorSearchAlgorithmConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchAlgorithmConfigurationUnionSerializer(item);
  });
}

export function vectorSearchAlgorithmConfigurationUnionArrayDeserializer(
  result: Array<VectorSearchAlgorithmConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchAlgorithmConfigurationUnionDeserializer(item);
  });
}

/**
 * Contains configuration options specific to the algorithm used during indexing
 * or querying.
 */
export interface VectorSearchAlgorithmConfiguration {
  /** The name to associate with this particular configuration. */
  name: string;
  /** Type of VectorSearchAlgorithmConfiguration. */
  /** The discriminator possible values: hnsw, exhaustiveKnn */
  kind: VectorSearchAlgorithmKind;
}

export function vectorSearchAlgorithmConfigurationSerializer(
  item: VectorSearchAlgorithmConfiguration,
): any {
  return { name: item["name"], kind: item["kind"] };
}

export function vectorSearchAlgorithmConfigurationDeserializer(
  item: any,
): VectorSearchAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchAlgorithmConfigurationUnion */
export type VectorSearchAlgorithmConfigurationUnion =
  | HnswAlgorithmConfiguration
  | ExhaustiveKnnAlgorithmConfiguration
  | VectorSearchAlgorithmConfiguration;

export function vectorSearchAlgorithmConfigurationUnionSerializer(
  item: VectorSearchAlgorithmConfigurationUnion,
): any {
  switch (item.kind) {
    case "hnsw":
      return hnswAlgorithmConfigurationSerializer(
        item as HnswAlgorithmConfiguration,
      );

    case "exhaustiveKnn":
      return exhaustiveKnnAlgorithmConfigurationSerializer(
        item as ExhaustiveKnnAlgorithmConfiguration,
      );

    default:
      return vectorSearchAlgorithmConfigurationSerializer(item);
  }
}

export function vectorSearchAlgorithmConfigurationUnionDeserializer(
  item: any,
): VectorSearchAlgorithmConfigurationUnion {
  switch (item.kind) {
    case "hnsw":
      return hnswAlgorithmConfigurationDeserializer(
        item as HnswAlgorithmConfiguration,
      );

    case "exhaustiveKnn":
      return exhaustiveKnnAlgorithmConfigurationDeserializer(
        item as ExhaustiveKnnAlgorithmConfiguration,
      );

    default:
      return vectorSearchAlgorithmConfigurationDeserializer(item);
  }
}

/** The algorithm used for indexing and querying. */
export type VectorSearchAlgorithmKind = "hnsw" | "exhaustiveKnn";

/**
 * Contains configuration options specific to the HNSW approximate nearest
 * neighbors algorithm used during indexing and querying. The HNSW algorithm
 * offers a tunable trade-off between search speed and accuracy.
 */
export interface HnswAlgorithmConfiguration
  extends VectorSearchAlgorithmConfiguration {
  /** Contains the parameters specific to HNSW algorithm. */
  parameters?: HnswParameters;
  /** The name of the kind of algorithm being configured for use with vector search. */
  kind: "hnsw";
}

export function hnswAlgorithmConfigurationSerializer(
  item: HnswAlgorithmConfiguration,
): any {
  return {
    name: item["name"],
    kind: item["kind"],
    hnswParameters: !item["parameters"]
      ? item["parameters"]
      : hnswParametersSerializer(item["parameters"]),
  };
}

export function hnswAlgorithmConfigurationDeserializer(
  item: any,
): HnswAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
    parameters: !item["hnswParameters"]
      ? item["hnswParameters"]
      : hnswParametersDeserializer(item["hnswParameters"]),
  };
}

/** Contains the parameters specific to the HNSW algorithm. */
export interface HnswParameters {
  /**
   * The number of bi-directional links created for every new element during
   * construction. Increasing this parameter value may improve recall and reduce
   * retrieval times for datasets with high intrinsic dimensionality at the expense
   * of increased memory consumption and longer indexing time.
   */
  m?: number;
  /**
   * The size of the dynamic list containing the nearest neighbors, which is used
   * during index time. Increasing this parameter may improve index quality, at the
   * expense of increased indexing time. At a certain point, increasing this
   * parameter leads to diminishing returns.
   */
  efConstruction?: number;
  /**
   * The size of the dynamic list containing the nearest neighbors, which is used
   * during search time. Increasing this parameter may improve search results, at
   * the expense of slower search. At a certain point, increasing this parameter
   * leads to diminishing returns.
   */
  efSearch?: number;
  /** The similarity metric to use for vector comparisons. */
  metric?: VectorSearchAlgorithmMetric;
}

export function hnswParametersSerializer(item: HnswParameters): any {
  return {
    m: item["m"],
    efConstruction: item["efConstruction"],
    efSearch: item["efSearch"],
    metric: item["metric"],
  };
}

export function hnswParametersDeserializer(item: any): HnswParameters {
  return {
    m: item["m"],
    efConstruction: item["efConstruction"],
    efSearch: item["efSearch"],
    metric: item["metric"],
  };
}

/**
 * The similarity metric to use for vector comparisons. It is recommended to
 * choose the same similarity metric as the embedding model was trained on.
 */
export type VectorSearchAlgorithmMetric =
  | "cosine"
  | "euclidean"
  | "dotProduct"
  | "hamming";

/**
 * Contains configuration options specific to the exhaustive KNN algorithm used
 * during querying, which will perform brute-force search across the entire vector
 * index.
 */
export interface ExhaustiveKnnAlgorithmConfiguration
  extends VectorSearchAlgorithmConfiguration {
  /** Contains the parameters specific to exhaustive KNN algorithm. */
  parameters?: ExhaustiveKnnParameters;
  /** The name of the kind of algorithm being configured for use with vector search. */
  kind: "exhaustiveKnn";
}

export function exhaustiveKnnAlgorithmConfigurationSerializer(
  item: ExhaustiveKnnAlgorithmConfiguration,
): any {
  return {
    name: item["name"],
    kind: item["kind"],
    exhaustiveKnnParameters: !item["parameters"]
      ? item["parameters"]
      : exhaustiveKnnParametersSerializer(item["parameters"]),
  };
}

export function exhaustiveKnnAlgorithmConfigurationDeserializer(
  item: any,
): ExhaustiveKnnAlgorithmConfiguration {
  return {
    name: item["name"],
    kind: item["kind"],
    parameters: !item["exhaustiveKnnParameters"]
      ? item["exhaustiveKnnParameters"]
      : exhaustiveKnnParametersDeserializer(item["exhaustiveKnnParameters"]),
  };
}

/** Contains the parameters specific to exhaustive KNN algorithm. */
export interface ExhaustiveKnnParameters {
  /** The similarity metric to use for vector comparisons. */
  metric?: VectorSearchAlgorithmMetric;
}

export function exhaustiveKnnParametersSerializer(
  item: ExhaustiveKnnParameters,
): any {
  return { metric: item["metric"] };
}

export function exhaustiveKnnParametersDeserializer(
  item: any,
): ExhaustiveKnnParameters {
  return {
    metric: item["metric"],
  };
}

export function vectorSearchVectorizerUnionArraySerializer(
  result: Array<VectorSearchVectorizerUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchVectorizerUnionSerializer(item);
  });
}

export function vectorSearchVectorizerUnionArrayDeserializer(
  result: Array<VectorSearchVectorizerUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchVectorizerUnionDeserializer(item);
  });
}

/** Specifies the vectorization method to be used during query time. */
export interface VectorSearchVectorizer {
  /** The name to associate with this particular vectorization method. */
  vectorizerName: string;
  /** Type of VectorSearchVectorizer. */
  /** The discriminator possible values: azureOpenAI, customWebApi, aiServicesVision, aml */
  kind: VectorSearchVectorizerKind;
}

export function vectorSearchVectorizerSerializer(
  item: VectorSearchVectorizer,
): any {
  return { name: item["vectorizerName"], kind: item["kind"] };
}

export function vectorSearchVectorizerDeserializer(
  item: any,
): VectorSearchVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchVectorizerUnion */
export type VectorSearchVectorizerUnion =
  | AzureOpenAIVectorizer
  | WebApiVectorizer
  | AIServicesVisionVectorizer
  | AzureMachineLearningVectorizer
  | VectorSearchVectorizer;

export function vectorSearchVectorizerUnionSerializer(
  item: VectorSearchVectorizerUnion,
): any {
  switch (item.kind) {
    case "azureOpenAI":
      return azureOpenAIVectorizerSerializer(item as AzureOpenAIVectorizer);

    case "customWebApi":
      return webApiVectorizerSerializer(item as WebApiVectorizer);

    case "aiServicesVision":
      return aiServicesVisionVectorizerSerializer(
        item as AIServicesVisionVectorizer,
      );

    case "aml":
      return azureMachineLearningVectorizerSerializer(
        item as AzureMachineLearningVectorizer,
      );

    default:
      return vectorSearchVectorizerSerializer(item);
  }
}

export function vectorSearchVectorizerUnionDeserializer(
  item: any,
): VectorSearchVectorizerUnion {
  switch (item.kind) {
    case "azureOpenAI":
      return azureOpenAIVectorizerDeserializer(item as AzureOpenAIVectorizer);

    case "customWebApi":
      return webApiVectorizerDeserializer(item as WebApiVectorizer);

    case "aiServicesVision":
      return aiServicesVisionVectorizerDeserializer(
        item as AIServicesVisionVectorizer,
      );

    case "aml":
      return azureMachineLearningVectorizerDeserializer(
        item as AzureMachineLearningVectorizer,
      );

    default:
      return vectorSearchVectorizerDeserializer(item);
  }
}

/** The vectorization method to be used during query time. */
export type VectorSearchVectorizerKind =
  | "azureOpenAI"
  | "customWebApi"
  | "aiServicesVision"
  | "aml";

/** Specifies the Azure OpenAI resource used to vectorize a query string. */
export interface AzureOpenAIVectorizer extends VectorSearchVectorizer {
  /** Contains the parameters specific to Azure OpenAI embedding vectorization. */
  parameters?: AzureOpenAIVectorizerParameters;
  /**
   * The name of the kind of vectorization method being configured for use with
   * vector search.
   */
  kind: "azureOpenAI";
}

export function azureOpenAIVectorizerSerializer(
  item: AzureOpenAIVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    azureOpenAIParameters: !item["parameters"]
      ? item["parameters"]
      : azureOpenAIVectorizerParametersSerializer(item["parameters"]),
  };
}

export function azureOpenAIVectorizerDeserializer(
  item: any,
): AzureOpenAIVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    parameters: !item["azureOpenAIParameters"]
      ? item["azureOpenAIParameters"]
      : azureOpenAIVectorizerParametersDeserializer(
          item["azureOpenAIParameters"],
        ),
  };
}

/** Specifies the parameters for connecting to the Azure OpenAI resource. */
export interface AzureOpenAIVectorizerParameters {
  /** The resource URI of the Azure OpenAI resource. */
  resourceUrl?: string;
  /** ID of the Azure OpenAI model deployment on the designated resource. */
  deploymentName?: string;
  /** API key of the designated Azure OpenAI resource. */
  apiKey?: string;
  /** The user-assigned managed identity used for outbound connections. */
  authIdentity?: SearchIndexerDataIdentityUnion;
  /**
   * The name of the embedding model that is deployed at the provided deploymentId
   * path.
   */
  modelName?: AzureOpenAIModelName;
}

export function azureOpenAIVectorizerParametersSerializer(
  item: AzureOpenAIVectorizerParameters,
): any {
  return {
    resourceUri: item["resourceUrl"],
    deploymentId: item["deploymentName"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionSerializer(item["authIdentity"]),
    modelName: item["modelName"],
  };
}

export function azureOpenAIVectorizerParametersDeserializer(
  item: any,
): AzureOpenAIVectorizerParameters {
  return {
    resourceUrl: item["resourceUri"],
    deploymentName: item["deploymentId"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionDeserializer(item["authIdentity"]),
    modelName: item["modelName"],
  };
}

/**
 * Specifies a user-defined vectorizer for generating the vector embedding of a
 * query string. Integration of an external vectorizer is achieved using the
 * custom Web API interface of a skillset.
 */
export interface WebApiVectorizer extends VectorSearchVectorizer {
  /** Specifies the properties of the user-defined vectorizer. */
  webApiParameters?: WebApiVectorizerParameters;
  /**
   * The name of the kind of vectorization method being configured for use with
   * vector search.
   */
  kind: "customWebApi";
}

export function webApiVectorizerSerializer(item: WebApiVectorizer): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    customWebApiParameters: !item["webApiParameters"]
      ? item["webApiParameters"]
      : webApiVectorizerParametersSerializer(item["webApiParameters"]),
  };
}

export function webApiVectorizerDeserializer(item: any): WebApiVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    webApiParameters: !item["customWebApiParameters"]
      ? item["customWebApiParameters"]
      : webApiVectorizerParametersDeserializer(item["customWebApiParameters"]),
  };
}

/** Specifies the properties for connecting to a user-defined vectorizer. */
export interface WebApiVectorizerParameters {
  /** The URI of the Web API providing the vectorizer. */
  url?: string;
  /** The headers required to make the HTTP request. */
  httpHeaders?: Record<string, string>;
  /** The method for the HTTP request. */
  httpMethod?: string;
  /** The desired timeout for the request. Default is 30 seconds. */
  timeout?: string;
  /**
   * Applies to custom endpoints that connect to external code in an Azure function
   * or some other application that provides the transformations. This value should
   * be the application ID created for the function or app when it was registered
   * with Azure Active Directory. When specified, the vectorization connects to the
   * function or app using a managed ID (either system or user-assigned) of the
   * search service and the access token of the function or app, using this value as
   * the resource id for creating the scope of the access token.
   */
  authResourceId?: string;
  /**
   * The user-assigned managed identity used for outbound connections. If an
   * authResourceId is provided and it's not specified, the system-assigned managed
   * identity is used. On updates to the indexer, if the identity is unspecified,
   * the value remains unchanged. If set to "none", the value of this property is
   * cleared.
   */
  authIdentity?: SearchIndexerDataIdentityUnion;
}

export function webApiVectorizerParametersSerializer(
  item: WebApiVectorizerParameters,
): any {
  return {
    uri: item["url"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionSerializer(item["authIdentity"]),
  };
}

export function webApiVectorizerParametersDeserializer(
  item: any,
): WebApiVectorizerParameters {
  return {
    url: item["uri"],
    httpHeaders: item["httpHeaders"],
    httpMethod: item["httpMethod"],
    timeout: item["timeout"],
    authResourceId: item["authResourceId"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionDeserializer(item["authIdentity"]),
  };
}

/** Clears the identity property of a datasource. */
export interface AIServicesVisionVectorizer extends VectorSearchVectorizer {
  /** Contains the parameters specific to AI Services Vision embedding vectorization. */
  aiServicesVisionParameters?: AIServicesVisionParameters;
  /**
   * The name of the kind of vectorization method being configured for use with
   * vector search.
   */
  kind: "aiServicesVision";
}

export function aiServicesVisionVectorizerSerializer(
  item: AIServicesVisionVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    AIServicesVisionParameters: !item["aiServicesVisionParameters"]
      ? item["aiServicesVisionParameters"]
      : aiServicesVisionParametersSerializer(
          item["aiServicesVisionParameters"],
        ),
  };
}

export function aiServicesVisionVectorizerDeserializer(
  item: any,
): AIServicesVisionVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    aiServicesVisionParameters: !item["AIServicesVisionParameters"]
      ? item["AIServicesVisionParameters"]
      : aiServicesVisionParametersDeserializer(
          item["AIServicesVisionParameters"],
        ),
  };
}

/**
 * Specifies the AI Services Vision parameters for vectorizing a query image or
 * text.
 */
export interface AIServicesVisionParameters {
  /**
   * The version of the model to use when calling the AI Services Vision service. It
   * will default to the latest available when not specified.
   */
  modelVersion: string;
  /** The resource URI of the AI Services resource. */
  resourceUri: string;
  /** API key of the designated AI Services resource. */
  apiKey?: string;
  /**
   * The user-assigned managed identity used for outbound connections. If an
   * authResourceId is provided and it's not specified, the system-assigned managed
   * identity is used. On updates to the index, if the identity is unspecified, the
   * value remains unchanged. If set to "none", the value of this property is
   * cleared.
   */
  authIdentity?: SearchIndexerDataIdentityUnion;
}

export function aiServicesVisionParametersSerializer(
  item: AIServicesVisionParameters,
): any {
  return {
    modelVersion: item["modelVersion"],
    resourceUri: item["resourceUri"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionSerializer(item["authIdentity"]),
  };
}

export function aiServicesVisionParametersDeserializer(
  item: any,
): AIServicesVisionParameters {
  return {
    modelVersion: item["modelVersion"],
    resourceUri: item["resourceUri"],
    apiKey: item["apiKey"],
    authIdentity: !item["authIdentity"]
      ? item["authIdentity"]
      : searchIndexerDataIdentityUnionDeserializer(item["authIdentity"]),
  };
}

/**
 * Specifies an Azure Machine Learning endpoint deployed via the Azure AI Foundry
 * Model Catalog for generating the vector embedding of a query string.
 */
export interface AzureMachineLearningVectorizer extends VectorSearchVectorizer {
  /** Specifies the properties of the AML vectorizer. */
  amlParameters?: AzureMachineLearningParameters;
  /**
   * The name of the kind of vectorization method being configured for use with
   * vector search.
   */
  kind: "aml";
}

export function azureMachineLearningVectorizerSerializer(
  item: AzureMachineLearningVectorizer,
): any {
  return {
    name: item["vectorizerName"],
    kind: item["kind"],
    amlParameters: !item["amlParameters"]
      ? item["amlParameters"]
      : azureMachineLearningParametersSerializer(item["amlParameters"]),
  };
}

export function azureMachineLearningVectorizerDeserializer(
  item: any,
): AzureMachineLearningVectorizer {
  return {
    vectorizerName: item["name"],
    kind: item["kind"],
    amlParameters: !item["amlParameters"]
      ? item["amlParameters"]
      : azureMachineLearningParametersDeserializer(item["amlParameters"]),
  };
}

/** Specifies the properties for connecting to an AML vectorizer. */
export interface AzureMachineLearningParameters {
  /**
   * (Required for no authentication or key authentication) The scoring URI of the
   * AML service to which the JSON payload will be sent. Only the https URI scheme
   * is allowed.
   */
  scoringUri: string;
  /** (Required for key authentication) The key for the AML service. */
  authenticationKey?: string;
  /**
   * (Required for token authentication). The Azure Resource Manager resource ID of
   * the AML service. It should be in the format
   * subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.MachineLearningServices/workspaces/{workspace-name}/services/{service_name}.
   */
  resourceId?: string;
  /**
   * (Optional) When specified, indicates the timeout for the http client making the
   * API call.
   */
  timeout?: string;
  /** (Optional for token authentication). The region the AML service is deployed in. */
  region?: string;
  /**
   * The name of the embedding model from the Azure AI Foundry Catalog that is
   * deployed at the provided endpoint.
   */
  modelName?: AIFoundryModelCatalogName;
}

export function azureMachineLearningParametersSerializer(
  item: AzureMachineLearningParameters,
): any {
  return {
    uri: item["scoringUri"],
    key: item["authenticationKey"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    modelName: item["modelName"],
  };
}

export function azureMachineLearningParametersDeserializer(
  item: any,
): AzureMachineLearningParameters {
  return {
    scoringUri: item["uri"],
    authenticationKey: item["key"],
    resourceId: item["resourceId"],
    timeout: item["timeout"],
    region: item["region"],
    modelName: item["modelName"],
  };
}

/**
 * The name of the embedding model from the Azure AI Foundry Catalog that will be
 * called.
 */
export type AIFoundryModelCatalogName =
  | "OpenAI-CLIP-Image-Text-Embeddings-vit-base-patch32"
  | "OpenAI-CLIP-Image-Text-Embeddings-ViT-Large-Patch14-336"
  | "Facebook-DinoV2-Image-Embeddings-ViT-Base"
  | "Facebook-DinoV2-Image-Embeddings-ViT-Giant"
  | "Cohere-embed-v3-english"
  | "Cohere-embed-v3-multilingual";

export function vectorSearchCompressionUnionArraySerializer(
  result: Array<VectorSearchCompressionUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchCompressionUnionSerializer(item);
  });
}

export function vectorSearchCompressionUnionArrayDeserializer(
  result: Array<VectorSearchCompressionUnion>,
): any[] {
  return result.map((item) => {
    return vectorSearchCompressionUnionDeserializer(item);
  });
}

/**
 * Contains configuration options specific to the compression method used during
 * indexing or querying.
 */
export interface VectorSearchCompression {
  /** The name to associate with this particular configuration. */
  compressionName: string;
  /**
   * If set to true, once the ordered set of results calculated using compressed
   * vectors are obtained, they will be reranked again by recalculating the
   * full-precision similarity scores. This will improve recall at the expense of
   * latency.
   */
  rerankWithOriginalVectors?: boolean;
  /**
   * Default oversampling factor. Oversampling will internally request more
   * documents (specified by this multiplier) in the initial search. This increases
   * the set of results that will be reranked using recomputed similarity scores
   * from full-precision vectors. Minimum value is 1, meaning no oversampling (1x).
   * This parameter can only be set when rerankWithOriginalVectors is true. Higher
   * values improve recall at the expense of latency.
   */
  defaultOversampling?: number;
  /** Contains the options for rescoring. */
  rescoringOptions?: RescoringOptions;
  /**
   * The number of dimensions to truncate the vectors to. Truncating the vectors
   * reduces the size of the vectors and the amount of data that needs to be
   * transferred during search. This can save storage cost and improve search
   * performance at the expense of recall. It should be only used for embeddings
   * trained with Matryoshka Representation Learning (MRL) such as OpenAI
   * text-embedding-3-large (small). The default value is null, which means no
   * truncation.
   */
  truncationDimension?: number;
  /** Type of VectorSearchCompression. */
  /** The discriminator possible values: scalarQuantization, binaryQuantization */
  kind: VectorSearchCompressionKind;
}

export function vectorSearchCompressionSerializer(
  item: VectorSearchCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsSerializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

export function vectorSearchCompressionDeserializer(
  item: any,
): VectorSearchCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsDeserializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

/** Alias for VectorSearchCompressionUnion */
export type VectorSearchCompressionUnion =
  | ScalarQuantizationCompression
  | BinaryQuantizationCompression
  | VectorSearchCompression;

export function vectorSearchCompressionUnionSerializer(
  item: VectorSearchCompressionUnion,
): any {
  switch (item.kind) {
    case "scalarQuantization":
      return scalarQuantizationCompressionSerializer(
        item as ScalarQuantizationCompression,
      );

    case "binaryQuantization":
      return binaryQuantizationCompressionSerializer(
        item as BinaryQuantizationCompression,
      );

    default:
      return vectorSearchCompressionSerializer(item);
  }
}

export function vectorSearchCompressionUnionDeserializer(
  item: any,
): VectorSearchCompressionUnion {
  switch (item.kind) {
    case "scalarQuantization":
      return scalarQuantizationCompressionDeserializer(
        item as ScalarQuantizationCompression,
      );

    case "binaryQuantization":
      return binaryQuantizationCompressionDeserializer(
        item as BinaryQuantizationCompression,
      );

    default:
      return vectorSearchCompressionDeserializer(item);
  }
}

/** Contains the options for rescoring. */
export interface RescoringOptions {
  /**
   * If set to true, after the initial search on the compressed vectors, the
   * similarity scores are recalculated using the full-precision vectors. This will
   * improve recall at the expense of latency.
   */
  enableRescoring?: boolean;
  /**
   * Default oversampling factor. Oversampling retrieves a greater set of potential
   * documents to offset the resolution loss due to quantization. This increases the
   * set of results that will be rescored on full-precision vectors. Minimum value
   * is 1, meaning no oversampling (1x). This parameter can only be set when 'enableRescoring'
   * is true. Higher values improve recall at the expense of latency.
   */
  defaultOversampling?: number;
  /** Controls the storage method for original vectors. This setting is immutable. */
  rescoreStorageMethod?: VectorSearchCompressionRescoreStorageMethod;
}

export function rescoringOptionsSerializer(item: RescoringOptions): any {
  return {
    enableRescoring: item["enableRescoring"],
    defaultOversampling: item["defaultOversampling"],
    rescoreStorageMethod: item["rescoreStorageMethod"],
  };
}

export function rescoringOptionsDeserializer(item: any): RescoringOptions {
  return {
    enableRescoring: item["enableRescoring"],
    defaultOversampling: item["defaultOversampling"],
    rescoreStorageMethod: item["rescoreStorageMethod"],
  };
}

/**
 * The storage method for the original full-precision vectors used for rescoring
 * and internal index operations.
 */
export type VectorSearchCompressionRescoreStorageMethod =
  | "preserveOriginals"
  | "discardOriginals";
/** The compression method used for indexing and querying. */
export type VectorSearchCompressionKind =
  | "scalarQuantization"
  | "binaryQuantization";

/**
 * Contains configuration options specific to the scalar quantization compression
 * method used during indexing and querying.
 */
export interface ScalarQuantizationCompression extends VectorSearchCompression {
  /** Contains the parameters specific to Scalar Quantization. */
  parameters?: ScalarQuantizationParameters;
  /**
   * The name of the kind of compression method being configured for use with vector
   * search.
   */
  kind: "scalarQuantization";
}

export function scalarQuantizationCompressionSerializer(
  item: ScalarQuantizationCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsSerializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
    scalarQuantizationParameters: !item["parameters"]
      ? item["parameters"]
      : scalarQuantizationParametersSerializer(item["parameters"]),
  };
}

export function scalarQuantizationCompressionDeserializer(
  item: any,
): ScalarQuantizationCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsDeserializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
    parameters: !item["scalarQuantizationParameters"]
      ? item["scalarQuantizationParameters"]
      : scalarQuantizationParametersDeserializer(
          item["scalarQuantizationParameters"],
        ),
  };
}

/** Contains the parameters specific to Scalar Quantization. */
export interface ScalarQuantizationParameters {
  /** The quantized data type of compressed vector values. */
  quantizedDataType?: VectorSearchCompressionTarget;
}

export function scalarQuantizationParametersSerializer(
  item: ScalarQuantizationParameters,
): any {
  return { quantizedDataType: item["quantizedDataType"] };
}

export function scalarQuantizationParametersDeserializer(
  item: any,
): ScalarQuantizationParameters {
  return {
    quantizedDataType: item["quantizedDataType"],
  };
}

/** The quantized data type of compressed vector values. */
export type VectorSearchCompressionTarget = "int8";

/**
 * Contains configuration options specific to the binary quantization compression
 * method used during indexing and querying.
 */
export interface BinaryQuantizationCompression extends VectorSearchCompression {
  /**
   * The name of the kind of compression method being configured for use with vector
   * search.
   */
  kind: "binaryQuantization";
}

export function binaryQuantizationCompressionSerializer(
  item: BinaryQuantizationCompression,
): any {
  return {
    name: item["compressionName"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsSerializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

export function binaryQuantizationCompressionDeserializer(
  item: any,
): BinaryQuantizationCompression {
  return {
    compressionName: item["name"],
    rerankWithOriginalVectors: item["rerankWithOriginalVectors"],
    defaultOversampling: item["defaultOversampling"],
    rescoringOptions: !item["rescoringOptions"]
      ? item["rescoringOptions"]
      : rescoringOptionsDeserializer(item["rescoringOptions"]),
    truncationDimension: item["truncationDimension"],
    kind: item["kind"],
  };
}

/**
 * Response from a List Indexes request. If successful, it includes the full
 * definitions of all indexes.
 */
export interface _ListIndexesResult {
  /** The indexes in the Search service. */
  indexes: SearchIndex[];
}

export function _listIndexesResultDeserializer(item: any): _ListIndexesResult {
  return {
    indexes: searchIndexArrayDeserializer(item["value"]),
  };
}

export function searchIndexArraySerializer(result: Array<SearchIndex>): any[] {
  return result.map((item) => {
    return searchIndexSerializer(item);
  });
}

export function searchIndexArrayDeserializer(
  result: Array<SearchIndex>,
): any[] {
  return result.map((item) => {
    return searchIndexDeserializer(item);
  });
}

/**
 * Statistics for a given index. Statistics are collected periodically and are not
 * guaranteed to always be up-to-date.
 */
export interface GetIndexStatisticsResult {
  /** The number of documents in the index. */
  documentCount: number;
  /** The amount of storage in bytes consumed by the index. */
  storageSize: number;
  /** The amount of memory in bytes consumed by vectors in the index. */
  vectorIndexSize: number;
}

export function getIndexStatisticsResultDeserializer(
  item: any,
): GetIndexStatisticsResult {
  return {
    documentCount: item["documentCount"],
    storageSize: item["storageSize"],
    vectorIndexSize: item["vectorIndexSize"],
  };
}

/** Specifies some text and analysis components used to break that text into tokens. */
export interface AnalyzeRequest {
  /** The text to break into tokens. */
  text: string;
  /**
   * The name of the analyzer to use to break the given text. If this parameter is
   * not specified, you must specify a tokenizer instead. The tokenizer and analyzer
   * parameters are mutually exclusive.
   */
  analyzer?: LexicalAnalyzerName;
  /**
   * The name of the tokenizer to use to break the given text. If this parameter is
   * not specified, you must specify an analyzer instead. The tokenizer and analyzer
   * parameters are mutually exclusive.
   */
  tokenizer?: LexicalTokenizerName;
  /** The name of the normalizer to use to normalize the given text. */
  normalizer?: LexicalNormalizerName;
  /**
   * An optional list of token filters to use when breaking the given text. This
   * parameter can only be set when using the tokenizer parameter.
   */
  tokenFilters?: TokenFilterName[];
  /**
   * An optional list of character filters to use when breaking the given text. This
   * parameter can only be set when using the tokenizer parameter.
   */
  charFilters?: CharFilterName[];
}

export function analyzeRequestSerializer(item: AnalyzeRequest): any {
  return {
    text: item["text"],
    analyzer: item["analyzer"],
    tokenizer: item["tokenizer"],
    normalizer: item["normalizer"],
    tokenFilters: !item["tokenFilters"]
      ? item["tokenFilters"]
      : item["tokenFilters"].map((p: any) => {
          return p;
        }),
    charFilters: !item["charFilters"]
      ? item["charFilters"]
      : item["charFilters"].map((p: any) => {
          return p;
        }),
  };
}

/** The result of testing an analyzer on text. */
export interface AnalyzeResult {
  /** The list of tokens returned by the analyzer specified in the request. */
  tokens: AnalyzedTokenInfo[];
}

export function analyzeResultDeserializer(item: any): AnalyzeResult {
  return {
    tokens: analyzedTokenInfoArrayDeserializer(item["tokens"]),
  };
}

export function analyzedTokenInfoArrayDeserializer(
  result: Array<AnalyzedTokenInfo>,
): any[] {
  return result.map((item) => {
    return analyzedTokenInfoDeserializer(item);
  });
}

/** Information about a token returned by an analyzer. */
export interface AnalyzedTokenInfo {
  /** The token returned by the analyzer. */
  token: string;
  /** The index of the first character of the token in the input text. */
  startOffset: number;
  /** The index of the last character of the token in the input text. */
  endOffset: number;
  /**
   * The position of the token in the input text relative to other tokens. The first
   * token in the input text has position 0, the next has position 1, and so on.
   * Depending on the analyzer used, some tokens might have the same position, for
   * example if they are synonyms of each other.
   */
  position: number;
}

export function analyzedTokenInfoDeserializer(item: any): AnalyzedTokenInfo {
  return {
    token: item["token"],
    startOffset: item["startOffset"],
    endOffset: item["endOffset"],
    position: item["position"],
  };
}

/**
 * Represents an index alias, which describes a mapping from the alias name to an
 * index. The alias name can be used in place of the index name for supported
 * operations.
 */
export interface SearchAlias {
  /** The name of the alias. */
  name: string;
  /** The name of the index this alias maps to. Only one index name may be specified. */
  indexes: string[];
  /** The ETag of the alias. */
  eTag?: string;
}

export function searchAliasSerializer(item: SearchAlias): any {
  return {
    name: item["name"],
    indexes: item["indexes"].map((p: any) => {
      return p;
    }),
    "@odata.etag": item["eTag"],
  };
}

export function searchAliasDeserializer(item: any): SearchAlias {
  return {
    name: item["name"],
    indexes: item["indexes"].map((p: any) => {
      return p;
    }),
    eTag: item["@odata.etag"],
  };
}

/**
 * Response from a List Aliases request. If successful, it includes the associated
 * index mappings for all aliases.
 */
export interface _ListAliasesResult {
  /** The aliases in the Search service. */
  readonly aliases: SearchAlias[];
}

export function _listAliasesResultDeserializer(item: any): _ListAliasesResult {
  return {
    aliases: searchAliasArrayDeserializer(item["value"]),
  };
}

export function searchAliasArraySerializer(result: Array<SearchAlias>): any[] {
  return result.map((item) => {
    return searchAliasSerializer(item);
  });
}

export function searchAliasArrayDeserializer(
  result: Array<SearchAlias>,
): any[] {
  return result.map((item) => {
    return searchAliasDeserializer(item);
  });
}
