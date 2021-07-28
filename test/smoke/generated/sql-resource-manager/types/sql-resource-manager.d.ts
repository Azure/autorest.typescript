import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** A list of active directory administrators. */
export declare interface AdministratorListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerAzureADAdministrator[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for AdministratorName. \
 * {@link KnownAdministratorName} can be used interchangeably with AdministratorName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ActiveDirectory**
 */
export declare type AdministratorName = string;

/**
 * Defines values for AdministratorType. \
 * {@link KnownAdministratorType} can be used interchangeably with AdministratorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ActiveDirectory**
 */
export declare type AdministratorType = string;

/** Defines values for AuthenticationType. */
export declare type AuthenticationType = "SQL" | "ADPassword";

/** Defines values for AutomaticTuningDisabledReason. */
export declare type AutomaticTuningDisabledReason = "Default" | "Disabled" | "AutoConfigured" | "InheritedFromServer" | "QueryStoreOff" | "QueryStoreReadOnly" | "NotSupported";

/** Defines values for AutomaticTuningMode. */
export declare type AutomaticTuningMode = "Inherit" | "Custom" | "Auto" | "Unspecified";

/** Defines values for AutomaticTuningOptionModeActual. */
export declare type AutomaticTuningOptionModeActual = "Off" | "On";

/** Defines values for AutomaticTuningOptionModeDesired. */
export declare type AutomaticTuningOptionModeDesired = "Off" | "On" | "Default";

/** Automatic tuning properties for individual advisors. */
export declare interface AutomaticTuningOptions {
    /** Automatic tuning option desired state. */
    desiredState?: AutomaticTuningOptionModeDesired;
    /**
     * Automatic tuning option actual state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actualState?: AutomaticTuningOptionModeActual;
    /**
     * Reason code if desired and actual state are different.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reasonCode?: number;
    /**
     * Reason description if desired and actual state are different.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reasonDesc?: AutomaticTuningDisabledReason;
}

/** Defines values for AutomaticTuningServerMode. */
export declare type AutomaticTuningServerMode = "Custom" | "Auto" | "Unspecified";

/** Automatic tuning properties for individual advisors. */
export declare interface AutomaticTuningServerOptions {
    /** Automatic tuning option desired state. */
    desiredState?: AutomaticTuningOptionModeDesired;
    /**
     * Automatic tuning option actual state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actualState?: AutomaticTuningOptionModeActual;
    /**
     * Reason code if desired and actual state are different.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reasonCode?: number;
    /**
     * Reason description if desired and actual state are different.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reasonDesc?: AutomaticTuningServerReason;
}

/** Defines values for AutomaticTuningServerReason. */
export declare type AutomaticTuningServerReason = "Default" | "Disabled" | "AutoConfigured";

/** Supported auto pause delay time range */
export declare interface AutoPauseDelayTimeRange {
    /**
     * Minimum value
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minValue?: number;
    /**
     * Maximum value
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxValue?: number;
    /**
     * Step value for discrete values between the minimum value and the maximum value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly stepSize?: number;
    /**
     * Default value is no value is provided
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly default?: number;
    /**
     * Unit of time that delay is expressed in
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: PauseDelayTimeUnit;
    /**
     * Value that is used to not pause (infinite delay before pause)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly doNotPauseValue?: number;
}

/** Interface representing a BackupLongTermRetentionPolicies. */
export declare interface BackupLongTermRetentionPolicies {
    /**
     * Gets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, policyName: LongTermRetentionPolicyName, options?: BackupLongTermRetentionPoliciesGetOptionalParams): Promise<BackupLongTermRetentionPoliciesGetResponse>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, policyName: LongTermRetentionPolicyName, parameters: BackupLongTermRetentionPolicy, options?: BackupLongTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<BackupLongTermRetentionPoliciesCreateOrUpdateResponse>, BackupLongTermRetentionPoliciesCreateOrUpdateResponse>>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, policyName: LongTermRetentionPolicyName, parameters: BackupLongTermRetentionPolicy, options?: BackupLongTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<BackupLongTermRetentionPoliciesCreateOrUpdateResponse>;
    /**
     * Gets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: BackupLongTermRetentionPoliciesListByDatabaseOptionalParams): Promise<BackupLongTermRetentionPoliciesListByDatabaseResponse>;
}

/** Optional parameters. */
export declare interface BackupLongTermRetentionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type BackupLongTermRetentionPoliciesCreateOrUpdateResponse = BackupLongTermRetentionPolicy;

/** Optional parameters. */
export declare interface BackupLongTermRetentionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type BackupLongTermRetentionPoliciesGetResponse = BackupLongTermRetentionPolicy;

/** Optional parameters. */
export declare interface BackupLongTermRetentionPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type BackupLongTermRetentionPoliciesListByDatabaseResponse = BackupLongTermRetentionPolicy;

/** A long term retention policy. */
export declare type BackupLongTermRetentionPolicy = ProxyResource & {
    /** The weekly retention policy for an LTR backup in an ISO 8601 format. */
    weeklyRetention?: string;
    /** The monthly retention policy for an LTR backup in an ISO 8601 format. */
    monthlyRetention?: string;
    /** The yearly retention policy for an LTR backup in an ISO 8601 format. */
    yearlyRetention?: string;
    /** The week of year to take the yearly backup in an ISO 8601 format. */
    weekOfYear?: number;
};

/** Interface representing a BackupShortTermRetentionPolicies. */
export declare interface BackupShortTermRetentionPolicies {
    /**
     * Gets a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: BackupShortTermRetentionPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<BackupShortTermRetentionPolicy>;
    /**
     * Gets a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, policyName: ShortTermRetentionPolicyName, options?: BackupShortTermRetentionPoliciesGetOptionalParams): Promise<BackupShortTermRetentionPoliciesGetResponse>;
    /**
     * Updates a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, policyName: ShortTermRetentionPolicyName, parameters: BackupShortTermRetentionPolicy, options?: BackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<BackupShortTermRetentionPoliciesCreateOrUpdateResponse>, BackupShortTermRetentionPoliciesCreateOrUpdateResponse>>;
    /**
     * Updates a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, policyName: ShortTermRetentionPolicyName, parameters: BackupShortTermRetentionPolicy, options?: BackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<BackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
    /**
     * Updates a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, policyName: ShortTermRetentionPolicyName, parameters: BackupShortTermRetentionPolicy, options?: BackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<PollerLike<PollOperationState<BackupShortTermRetentionPoliciesUpdateResponse>, BackupShortTermRetentionPoliciesUpdateResponse>>;
    /**
     * Updates a database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, policyName: ShortTermRetentionPolicyName, parameters: BackupShortTermRetentionPolicy, options?: BackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<BackupShortTermRetentionPoliciesUpdateResponse>;
}

/** Optional parameters. */
export declare interface BackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type BackupShortTermRetentionPoliciesCreateOrUpdateResponse = BackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface BackupShortTermRetentionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type BackupShortTermRetentionPoliciesGetResponse = BackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface BackupShortTermRetentionPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type BackupShortTermRetentionPoliciesListByDatabaseNextResponse = BackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface BackupShortTermRetentionPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type BackupShortTermRetentionPoliciesListByDatabaseResponse = BackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface BackupShortTermRetentionPoliciesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type BackupShortTermRetentionPoliciesUpdateResponse = BackupShortTermRetentionPolicy;

/** A short term retention policy. */
export declare type BackupShortTermRetentionPolicy = ProxyResource & {
    /** The backup retention period in days. This is how many days Point-in-Time Restore will be supported. */
    retentionDays?: number;
};

/** A list of short term retention policies. */
export declare interface BackupShortTermRetentionPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: BackupShortTermRetentionPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for BlobAuditingPolicyState. */
export declare type BlobAuditingPolicyState = "Enabled" | "Disabled";

/** Interface representing a Capabilities. */
export declare interface Capabilities {
    /**
     * Gets the subscription capabilities available for the specified location.
     * @param locationName The location name whose capabilities are retrieved.
     * @param options The options parameters.
     */
    listByLocation(locationName: string, options?: CapabilitiesListByLocationOptionalParams): Promise<CapabilitiesListByLocationResponse>;
}

/** Optional parameters. */
export declare interface CapabilitiesListByLocationOptionalParams extends coreClient.OperationOptions {
    /** If specified, restricts the response to only include the selected item. */
    include?: CapabilityGroup;
}

/** Contains response data for the listByLocation operation. */
export declare type CapabilitiesListByLocationResponse = LocationCapabilities;

/**
 * Defines values for CapabilityGroup. \
 * {@link KnownCapabilityGroup} can be used interchangeably with CapabilityGroup,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **supportedEditions** \
 * **supportedElasticPoolEditions** \
 * **supportedManagedInstanceVersions** \
 * **supportedInstancePoolEditions** \
 * **supportedManagedInstanceEditions**
 */
export declare type CapabilityGroup = string;

/** Defines values for CapabilityStatus. */
export declare type CapabilityStatus = "Visible" | "Available" | "Default" | "Disabled";

/**
 * Defines values for CatalogCollationType. \
 * {@link KnownCatalogCollationType} can be used interchangeably with CatalogCollationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DATABASE_DEFAULT** \
 * **SQL_Latin1_General_CP1_CI_AS**
 */
export declare type CatalogCollationType = string;

/** Defines values for CheckNameAvailabilityReason. */
export declare type CheckNameAvailabilityReason = "Invalid" | "AlreadyExists";

/** A request to check whether the specified name for a resource is available. */
export declare interface CheckNameAvailabilityRequest {
    name: string;
    type: "Microsoft.Sql/servers";
}

/** The result of a name availability check. */
export declare interface CheckNameAvailabilityResponse {
    /**
     * The name whose availability was checked.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * True if the name is available, otherwise false.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly available?: boolean;
    /**
     * The reason code explaining why the name is unavailable. Will be undefined if the name is available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reason?: CheckNameAvailabilityReason;
    /**
     * A message explaining why the name is unavailable. Will be undefined if the name is available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** Contains the information necessary to perform a complete database restore operation. */
export declare interface CompleteDatabaseRestoreDefinition {
    /** The last backup name to apply */
    lastBackupName: string;
}

/**
 * Defines values for ConnectionPolicyName. \
 * {@link KnownConnectionPolicyName} can be used interchangeably with ConnectionPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type ConnectionPolicyName = string;

/** Contains the information necessary to perform a create database restore point operation. */
export declare interface CreateDatabaseRestorePointDefinition {
    /** The restore point label to apply */
    restorePointLabel: string;
}

/**
 * Defines values for CreateMode. \
 * {@link KnownCreateMode} can be used interchangeably with CreateMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **Copy** \
 * **Secondary** \
 * **PointInTimeRestore** \
 * **Restore** \
 * **Recovery** \
 * **RestoreExternalBackup** \
 * **RestoreExternalBackupSecondary** \
 * **RestoreLongTermRetentionBackup** \
 * **OnlineSecondary**
 */
export declare type CreateMode = string;

/** A database resource. */
export declare type Database = TrackedResource & {
    /**
     * The database SKU.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     *
     */
    sku?: Sku;
    /**
     * Kind of database. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Resource that manages the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedBy?: string;
    /**
     * Specifies the mode of database creation.
     *
     * Default: regular database creation.
     *
     * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
     *
     * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
     *
     * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
     *
     * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
     *
     * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
     *
     * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
     *
     * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
     */
    createMode?: CreateMode;
    /** The collation of the database. */
    collation?: string;
    /** The max size of the database expressed in bytes. */
    maxSizeBytes?: number;
    /** The name of the sample schema to apply when creating this database. */
    sampleName?: SampleName;
    /** The resource identifier of the elastic pool containing this database. */
    elasticPoolId?: string;
    /** The resource identifier of the source database associated with create operation of this database. */
    sourceDatabaseId?: string;
    /**
     * The status of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: DatabaseStatus;
    /**
     * The ID of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseId?: string;
    /**
     * The creation date of the database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * The current service level objective name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentServiceObjectiveName?: string;
    /**
     * The requested service level objective name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedServiceObjectiveName?: string;
    /**
     * The default secondary region for this database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultSecondaryLocation?: string;
    /**
     * Failover Group resource identifier that this database belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverGroupId?: string;
    /** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /** Specifies the time that the database was deleted. */
    sourceDatabaseDeletionDate?: Date;
    /** The resource identifier of the recovery point associated with create operation of this database. */
    recoveryServicesRecoveryPointId?: string;
    /** The resource identifier of the long term retention backup associated with create operation of this database. */
    longTermRetentionBackupResourceId?: string;
    /** The resource identifier of the recoverable database associated with create operation of this database. */
    recoverableDatabaseId?: string;
    /** The resource identifier of the restorable dropped database associated with create operation of this database. */
    restorableDroppedDatabaseId?: string;
    /** Collation of the metadata catalog. */
    catalogCollation?: CatalogCollationType;
    /** Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
    zoneRedundant?: boolean;
    /** The license type to apply for this database. */
    licenseType?: DatabaseLicenseType;
    /**
     * The max log size for this database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxLogSizeBytes?: number;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestoreDate?: Date;
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale?: DatabaseReadScale;
    /** The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases. */
    readReplicaCount?: number;
    /**
     * The name and tier of the SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentSku?: Sku;
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled */
    autoPauseDelay?: number;
    /** Minimal capacity that database will always have allocated, if not paused */
    minCapacity?: number;
    /**
     * The date when database was paused by user configuration or action (ISO8601 format). Null if the database is ready.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly pausedDate?: Date;
    /**
     * The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resumedDate?: Date;
};

/** Interface representing a DatabaseAutomaticTuning. */
export declare interface DatabaseAutomaticTuning {
    /**
     * Gets a database's automatic tuning.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseAutomaticTuningGetOptionalParams): Promise<DatabaseAutomaticTuningGetResponse>;
    /**
     * Update automatic tuning properties for target database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The requested automatic tuning resource state.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, serverName: string, databaseName: string, parameters: DatabaseAutomaticTuningDef, options?: DatabaseAutomaticTuningUpdateOptionalParams): Promise<DatabaseAutomaticTuningUpdateResponse>;
}

/** Database-level Automatic Tuning. */
export declare type DatabaseAutomaticTuningDef = ProxyResource & {
    /** Automatic tuning desired state. */
    desiredState?: AutomaticTuningMode;
    /**
     * Automatic tuning actual state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actualState?: AutomaticTuningMode;
    /** Automatic tuning options definition. */
    options?: {
        [propertyName: string]: AutomaticTuningOptions;
    };
};

/** Optional parameters. */
export declare interface DatabaseAutomaticTuningGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseAutomaticTuningGetResponse = DatabaseAutomaticTuningDef;

/** Optional parameters. */
export declare interface DatabaseAutomaticTuningUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type DatabaseAutomaticTuningUpdateResponse = DatabaseAutomaticTuningDef;

/** Interface representing a DatabaseBlobAuditingPolicies. */
export declare interface DatabaseBlobAuditingPolicies {
    /**
     * Lists auditing settings of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<DatabaseBlobAuditingPolicy>;
    /**
     * Gets a database's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseBlobAuditingPoliciesGetOptionalParams): Promise<DatabaseBlobAuditingPoliciesGetResponse>;
    /**
     * Creates or updates a database's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The database blob auditing policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: DatabaseBlobAuditingPolicy, options?: DatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<DatabaseBlobAuditingPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface DatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabaseBlobAuditingPoliciesCreateOrUpdateResponse = DatabaseBlobAuditingPolicy;

/** Optional parameters. */
export declare interface DatabaseBlobAuditingPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseBlobAuditingPoliciesGetResponse = DatabaseBlobAuditingPolicy;

/** Optional parameters. */
export declare interface DatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type DatabaseBlobAuditingPoliciesListByDatabaseNextResponse = DatabaseBlobAuditingPolicyListResult;

/** Optional parameters. */
export declare interface DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DatabaseBlobAuditingPoliciesListByDatabaseResponse = DatabaseBlobAuditingPolicyListResult;

/** A database blob auditing policy. */
export declare type DatabaseBlobAuditingPolicy = ProxyResource & {
    /**
     * Resource kind.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. */
    state?: BlobAuditingPolicyState;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
    storageEndpoint?: string;
    /**
     * Specifies the identifier key of the auditing storage account.
     * If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
     * Prerequisites for using managed identity authentication:
     * 1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
     * 2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
     * For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
     */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the audit logs in the storage account. */
    retentionDays?: number;
    /**
     * Specifies the Actions-Groups and Actions to audit.
     *
     * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
     *
     * BATCH_COMPLETED_GROUP,
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
     * FAILED_DATABASE_AUTHENTICATION_GROUP.
     *
     * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
     *
     * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
     *
     * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
     * BACKUP_RESTORE_GROUP
     * DATABASE_LOGOUT_GROUP
     * DATABASE_OBJECT_CHANGE_GROUP
     * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
     * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
     * DATABASE_OPERATION_GROUP
     * DATABASE_PERMISSION_CHANGE_GROUP
     * DATABASE_PRINCIPAL_CHANGE_GROUP
     * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
     * DATABASE_ROLE_MEMBER_CHANGE_GROUP
     * FAILED_DATABASE_AUTHENTICATION_GROUP
     * SCHEMA_OBJECT_ACCESS_GROUP
     * SCHEMA_OBJECT_CHANGE_GROUP
     * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
     * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
     * USER_CHANGE_PASSWORD_GROUP
     * BATCH_STARTED_GROUP
     * BATCH_COMPLETED_GROUP
     *
     * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
     *
     * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
     *
     * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
     * SELECT
     * UPDATE
     * INSERT
     * DELETE
     * EXECUTE
     * RECEIVE
     * REFERENCES
     *
     * The general form for defining an action to be audited is:
     * {action} ON {object} BY {principal}
     *
     * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
     *
     * For example:
     * SELECT on dbo.myTable by public
     * SELECT on DATABASE::myDatabase by public
     * SELECT on SCHEMA::mySchema by public
     *
     * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
     */
    auditActionsAndGroups?: string[];
    /** Specifies the blob storage subscription Id. */
    storageAccountSubscriptionId?: string;
    /** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
    isStorageSecondaryKeyInUse?: boolean;
    /**
     * Specifies whether audit events are sent to Azure Monitor.
     * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
     *
     * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
     * Note that for server level audit you should use the 'master' database as {databaseName}.
     *
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     *
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     *
     */
    isAzureMonitorTargetEnabled?: boolean;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    queueDelayMs?: number;
};

/** A list of database auditing settings. */
export declare interface DatabaseBlobAuditingPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: DatabaseBlobAuditingPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for DatabaseEdition. \
 * {@link KnownDatabaseEdition} can be used interchangeably with DatabaseEdition,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Web** \
 * **Business** \
 * **Basic** \
 * **Standard** \
 * **Premium** \
 * **PremiumRS** \
 * **Free** \
 * **Stretch** \
 * **DataWarehouse** \
 * **System** \
 * **System2** \
 * **GeneralPurpose** \
 * **BusinessCritical** \
 * **Hyperscale**
 */
export declare type DatabaseEdition = string;

/**
 * Defines values for DatabaseLicenseType. \
 * {@link KnownDatabaseLicenseType} can be used interchangeably with DatabaseLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LicenseIncluded** \
 * **BasePrice**
 */
export declare type DatabaseLicenseType = string;

/** A list of databases. */
export declare interface DatabaseListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Database[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A database operation. */
export declare type DatabaseOperation = ProxyResource & {
    /**
     * The name of the database the operation is being performed on.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The friendly name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationFriendlyName?: string;
    /**
     * The percentage of the operation completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The name of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The operation start time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The operation state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ManagementOperationState;
    /**
     * The operation error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorCode?: number;
    /**
     * The operation error description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorDescription?: string;
    /**
     * The operation error severity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorSeverity?: number;
    /**
     * Whether or not the error is a user error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isUserError?: boolean;
    /**
     * The estimated completion time of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly estimatedCompletionTime?: Date;
    /**
     * The operation description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Whether the operation can be cancelled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isCancellable?: boolean;
};

/** The response to a list database operations request */
export declare interface DatabaseOperationListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: DatabaseOperation[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a DatabaseOperations. */
export declare interface DatabaseOperations {
    /**
     * Gets a list of operations performed on the database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseOperationsListByDatabaseOptionalParams): PagedAsyncIterableIterator<DatabaseOperation>;
    /**
     * Cancels the asynchronous operation on the database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param operationId The operation identifier.
     * @param options The options parameters.
     */
    cancel(resourceGroupName: string, serverName: string, databaseName: string, operationId: string, options?: DatabaseOperationsCancelOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DatabaseOperationsCancelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseOperationsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type DatabaseOperationsListByDatabaseNextResponse = DatabaseOperationListResult;

/** Optional parameters. */
export declare interface DatabaseOperationsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DatabaseOperationsListByDatabaseResponse = DatabaseOperationListResult;

/**
 * Defines values for DatabaseReadScale. \
 * {@link KnownDatabaseReadScale} can be used interchangeably with DatabaseReadScale,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type DatabaseReadScale = string;

/** Interface representing a Databases. */
export declare interface Databases {
    /**
     * Returns database metrics.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param filter An OData filter expression that describes a subset of metrics to return.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, serverName: string, databaseName: string, filter: string, options?: DatabasesListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
    /**
     * Returns database metric definitions.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listMetricDefinitions(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesListMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<MetricDefinition>;
    /**
     * Gets a list of databases.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: DatabasesListByServerOptionalParams): PagedAsyncIterableIterator<Database>;
    /**
     * Gets a list of databases in an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: DatabasesListByElasticPoolOptionalParams): PagedAsyncIterableIterator<Database>;
    /**
     * Imports a bacpac into a new database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The required parameters for importing a Bacpac into a database.
     * @param options The options parameters.
     */
    beginImport(resourceGroupName: string, serverName: string, parameters: ImportRequest, options?: DatabasesImportOptionalParams): Promise<PollerLike<PollOperationState<DatabasesImportResponse>, DatabasesImportResponse>>;
    /**
     * Imports a bacpac into a new database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The required parameters for importing a Bacpac into a database.
     * @param options The options parameters.
     */
    beginImportAndWait(resourceGroupName: string, serverName: string, parameters: ImportRequest, options?: DatabasesImportOptionalParams): Promise<DatabasesImportResponse>;
    /**
     * Creates an import operation that imports a bacpac into an existing database. The existing database
     * must be empty.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to import into
     * @param extensionName The name of the operation to perform
     * @param parameters The required parameters for importing a Bacpac into a database.
     * @param options The options parameters.
     */
    beginCreateImportOperation(resourceGroupName: string, serverName: string, databaseName: string, extensionName: ExtensionName, parameters: ImportExtensionRequest, options?: DatabasesCreateImportOperationOptionalParams): Promise<PollerLike<PollOperationState<DatabasesCreateImportOperationResponse>, DatabasesCreateImportOperationResponse>>;
    /**
     * Creates an import operation that imports a bacpac into an existing database. The existing database
     * must be empty.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to import into
     * @param extensionName The name of the operation to perform
     * @param parameters The required parameters for importing a Bacpac into a database.
     * @param options The options parameters.
     */
    beginCreateImportOperationAndWait(resourceGroupName: string, serverName: string, databaseName: string, extensionName: ExtensionName, parameters: ImportExtensionRequest, options?: DatabasesCreateImportOperationOptionalParams): Promise<DatabasesCreateImportOperationResponse>;
    /**
     * Exports a database to a bacpac.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be exported.
     * @param parameters The required parameters for exporting a database.
     * @param options The options parameters.
     */
    beginExport(resourceGroupName: string, serverName: string, databaseName: string, parameters: ExportRequest, options?: DatabasesExportOptionalParams): Promise<PollerLike<PollOperationState<DatabasesExportResponse>, DatabasesExportResponse>>;
    /**
     * Exports a database to a bacpac.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be exported.
     * @param parameters The required parameters for exporting a database.
     * @param options The options parameters.
     */
    beginExportAndWait(resourceGroupName: string, serverName: string, databaseName: string, parameters: ExportRequest, options?: DatabasesExportOptionalParams): Promise<DatabasesExportResponse>;
    /**
     * Gets a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesGetOptionalParams): Promise<DatabasesGetResponse>;
    /**
     * Creates a new database or updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Database, options?: DatabasesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DatabasesCreateOrUpdateResponse>, DatabasesCreateOrUpdateResponse>>;
    /**
     * Creates a new database or updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, parameters: Database, options?: DatabasesCreateOrUpdateOptionalParams): Promise<DatabasesCreateOrUpdateResponse>;
    /**
     * Deletes the database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesDeleteOptionalParams): Promise<void>;
    /**
     * Updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: DatabaseUpdate, options?: DatabasesUpdateOptionalParams): Promise<PollerLike<PollOperationState<DatabasesUpdateResponse>, DatabasesUpdateResponse>>;
    /**
     * Updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, parameters: DatabaseUpdate, options?: DatabasesUpdateOptionalParams): Promise<DatabasesUpdateResponse>;
    /**
     * Pauses a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be paused.
     * @param options The options parameters.
     */
    beginPause(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesPauseOptionalParams): Promise<PollerLike<PollOperationState<DatabasesPauseResponse>, DatabasesPauseResponse>>;
    /**
     * Pauses a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be paused.
     * @param options The options parameters.
     */
    beginPauseAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesPauseOptionalParams): Promise<DatabasesPauseResponse>;
    /**
     * Resumes a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be resumed.
     * @param options The options parameters.
     */
    beginResume(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesResumeOptionalParams): Promise<PollerLike<PollOperationState<DatabasesResumeResponse>, DatabasesResumeResponse>>;
    /**
     * Resumes a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be resumed.
     * @param options The options parameters.
     */
    beginResumeAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesResumeOptionalParams): Promise<DatabasesResumeResponse>;
    /**
     * Upgrades a data warehouse.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be upgraded.
     * @param options The options parameters.
     */
    beginUpgradeDataWarehouse(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesUpgradeDataWarehouseOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Upgrades a data warehouse.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to be upgraded.
     * @param options The options parameters.
     */
    beginUpgradeDataWarehouseAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesUpgradeDataWarehouseOptionalParams): Promise<void>;
    /**
     * Renames a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to rename.
     * @param parameters The resource move definition for renaming this database.
     * @param options The options parameters.
     */
    rename(resourceGroupName: string, serverName: string, databaseName: string, parameters: ResourceMoveDefinition, options?: DatabasesRenameOptionalParams): Promise<void>;
    /**
     * Failovers a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to failover.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesFailoverOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Failovers a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to failover.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabasesFailoverOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DatabasesCreateImportOperationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createImportOperation operation. */
export declare type DatabasesCreateImportOperationResponse = ImportExportResponse;

/** Optional parameters. */
export declare interface DatabasesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabasesCreateOrUpdateResponse = Database;

/** Optional parameters. */
export declare interface DatabasesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains information about a database Threat Detection policy. */
export declare type DatabaseSecurityAlertPolicy = ProxyResource & {
    /** The geo-location where the resource lives */
    location?: string;
    /**
     * Resource kind.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required. */
    state?: SecurityAlertPolicyState;
    /** Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Data_Exfiltration; Unsafe_Action. */
    disabledAlerts?: string;
    /** Specifies the semicolon-separated list of e-mail addresses to which the alert is sent. */
    emailAddresses?: string;
    /** Specifies that the alert is sent to the account administrators. */
    emailAccountAdmins?: SecurityAlertPolicyEmailAccountAdmins;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required. */
    storageEndpoint?: string;
    /** Specifies the identifier key of the Threat Detection audit storage account. If state is Enabled, storageAccountAccessKey is required. */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the Threat Detection audit logs. */
    retentionDays?: number;
    /** Specifies whether to use the default server policy. */
    useServerDefault?: SecurityAlertPolicyUseServerDefault;
};

/** Optional parameters. */
export declare interface DatabasesExportOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the export operation. */
export declare type DatabasesExportResponse = ImportExportResponse;

/** Optional parameters. */
export declare interface DatabasesFailoverOptionalParams extends coreClient.OperationOptions {
    /** The type of replica to be failed over. */
    replicaType?: ReplicaType;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabasesGetResponse = Database;

/** Optional parameters. */
export declare interface DatabasesImportOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the import operation. */
export declare type DatabasesImportResponse = ImportExportResponse;

/** Optional parameters. */
export declare interface DatabasesListByElasticPoolNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPoolNext operation. */
export declare type DatabasesListByElasticPoolNextResponse = DatabaseListResult;

/** Optional parameters. */
export declare interface DatabasesListByElasticPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPool operation. */
export declare type DatabasesListByElasticPoolResponse = DatabaseListResult;

/** Optional parameters. */
export declare interface DatabasesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type DatabasesListByServerNextResponse = DatabaseListResult;

/** Optional parameters. */
export declare interface DatabasesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type DatabasesListByServerResponse = DatabaseListResult;

/** Optional parameters. */
export declare interface DatabasesListMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetricDefinitions operation. */
export declare type DatabasesListMetricDefinitionsResponse = MetricDefinitionListResult;

/** Optional parameters. */
export declare interface DatabasesListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type DatabasesListMetricsResponse = MetricListResult;

/** Optional parameters. */
export declare interface DatabasesPauseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the pause operation. */
export declare type DatabasesPauseResponse = Database;

/** Optional parameters. */
export declare interface DatabasesRenameOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabasesResumeOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the resume operation. */
export declare type DatabasesResumeResponse = Database;

/**
 * Defines values for DatabaseState. \
 * {@link KnownDatabaseState} can be used interchangeably with DatabaseState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **All** \
 * **Live** \
 * **Deleted**
 */
export declare type DatabaseState = string;

/**
 * Defines values for DatabaseStatus. \
 * {@link KnownDatabaseStatus} can be used interchangeably with DatabaseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Online** \
 * **Restoring** \
 * **RecoveryPending** \
 * **Recovering** \
 * **Suspect** \
 * **Offline** \
 * **Standby** \
 * **Shutdown** \
 * **EmergencyMode** \
 * **AutoClosed** \
 * **Copying** \
 * **Creating** \
 * **Inaccessible** \
 * **OfflineSecondary** \
 * **Pausing** \
 * **Paused** \
 * **Resuming** \
 * **Scaling** \
 * **OfflineChangingDwPerformanceTiers** \
 * **OnlineChangingDwPerformanceTiers** \
 * **Disabled**
 */
export declare type DatabaseStatus = string;

/** Optional parameters. */
export declare interface DatabasesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type DatabasesUpdateResponse = Database;

/** Optional parameters. */
export declare interface DatabasesUpgradeDataWarehouseOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Interface representing a DatabaseThreatDetectionPolicies. */
export declare interface DatabaseThreatDetectionPolicies {
    /**
     * Gets a database's threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which database Threat Detection policy is defined.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, securityAlertPolicyName: SecurityAlertPolicyName, options?: DatabaseThreatDetectionPoliciesGetOptionalParams): Promise<DatabaseThreatDetectionPoliciesGetResponse>;
    /**
     * Creates or updates a database's threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which database Threat Detection policy is defined.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param parameters The database Threat Detection policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, securityAlertPolicyName: SecurityAlertPolicyName, parameters: DatabaseSecurityAlertPolicy, options?: DatabaseThreatDetectionPoliciesCreateOrUpdateOptionalParams): Promise<DatabaseThreatDetectionPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface DatabaseThreatDetectionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabaseThreatDetectionPoliciesCreateOrUpdateResponse = DatabaseSecurityAlertPolicy;

/** Optional parameters. */
export declare interface DatabaseThreatDetectionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseThreatDetectionPoliciesGetResponse = DatabaseSecurityAlertPolicy;

/** A database resource. */
export declare interface DatabaseUpdate {
    /** The name and tier of the SKU. */
    sku?: Sku;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * Specifies the mode of database creation.
     *
     * Default: regular database creation.
     *
     * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
     *
     * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
     *
     * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
     *
     * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
     *
     * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
     *
     * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
     *
     * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
     */
    createMode?: CreateMode;
    /** The collation of the database. */
    collation?: string;
    /** The max size of the database expressed in bytes. */
    maxSizeBytes?: number;
    /** The name of the sample schema to apply when creating this database. */
    sampleName?: SampleName;
    /** The resource identifier of the elastic pool containing this database. */
    elasticPoolId?: string;
    /** The resource identifier of the source database associated with create operation of this database. */
    sourceDatabaseId?: string;
    /**
     * The status of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: DatabaseStatus;
    /**
     * The ID of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseId?: string;
    /**
     * The creation date of the database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * The current service level objective name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentServiceObjectiveName?: string;
    /**
     * The requested service level objective name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedServiceObjectiveName?: string;
    /**
     * The default secondary region for this database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultSecondaryLocation?: string;
    /**
     * Failover Group resource identifier that this database belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverGroupId?: string;
    /** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /** Specifies the time that the database was deleted. */
    sourceDatabaseDeletionDate?: Date;
    /** The resource identifier of the recovery point associated with create operation of this database. */
    recoveryServicesRecoveryPointId?: string;
    /** The resource identifier of the long term retention backup associated with create operation of this database. */
    longTermRetentionBackupResourceId?: string;
    /** The resource identifier of the recoverable database associated with create operation of this database. */
    recoverableDatabaseId?: string;
    /** The resource identifier of the restorable dropped database associated with create operation of this database. */
    restorableDroppedDatabaseId?: string;
    /** Collation of the metadata catalog. */
    catalogCollation?: CatalogCollationType;
    /** Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
    zoneRedundant?: boolean;
    /** The license type to apply for this database. */
    licenseType?: DatabaseLicenseType;
    /**
     * The max log size for this database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxLogSizeBytes?: number;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestoreDate?: Date;
    /** If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases. */
    readScale?: DatabaseReadScale;
    /** The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases. */
    readReplicaCount?: number;
    /**
     * The name and tier of the SKU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentSku?: Sku;
    /** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled */
    autoPauseDelay?: number;
    /** Minimal capacity that database will always have allocated, if not paused */
    minCapacity?: number;
    /**
     * The date when database was paused by user configuration or action (ISO8601 format). Null if the database is ready.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly pausedDate?: Date;
    /**
     * The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resumedDate?: Date;
}

/** The database usages. */
export declare interface DatabaseUsage {
    /**
     * The name of the usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The name of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceName?: string;
    /**
     * The usage metric display name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * The current value of the usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * The current limit of the usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * The units of the usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * The next reset time for the usage metric (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextResetTime?: Date;
}

/** The response to a list database metrics request. */
export declare interface DatabaseUsageListResult {
    /** The list of database usages for the database. */
    value: DatabaseUsage[];
}

/** Interface representing a DatabaseUsages. */
export declare interface DatabaseUsages {
    /**
     * Returns database usages.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseUsagesListByDatabaseOptionalParams): PagedAsyncIterableIterator<DatabaseUsage>;
}

/** Optional parameters. */
export declare interface DatabaseUsagesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DatabaseUsagesListByDatabaseResponse = DatabaseUsageListResult;

/** A database vulnerability assessment. */
export declare type DatabaseVulnerabilityAssessment = ProxyResource & {
    /** A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/).  It is required if server level vulnerability assessment policy doesn't set */
    storageContainerPath?: string;
    /** A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. */
    storageContainerSasKey?: string;
    /** Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. */
    storageAccountAccessKey?: string;
    /** The recurring scans settings */
    recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
};

/** A list of the database's vulnerability assessments. */
export declare interface DatabaseVulnerabilityAssessmentListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: DatabaseVulnerabilityAssessment[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A database vulnerability assessment rule baseline. */
export declare type DatabaseVulnerabilityAssessmentRuleBaseline = ProxyResource & {
    /** The rule baseline result */
    baselineResults?: DatabaseVulnerabilityAssessmentRuleBaselineItem[];
};

/** Properties for an Azure SQL Database Vulnerability Assessment rule baseline's result. */
export declare interface DatabaseVulnerabilityAssessmentRuleBaselineItem {
    /** The rule baseline result */
    result: string[];
}

/** Interface representing a DatabaseVulnerabilityAssessmentRuleBaselines. */
export declare interface DatabaseVulnerabilityAssessmentRuleBaselines {
    /**
     * Gets a database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, options?: DatabaseVulnerabilityAssessmentRuleBaselinesGetOptionalParams): Promise<DatabaseVulnerabilityAssessmentRuleBaselinesGetResponse>;
    /**
     * Creates or updates a database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param parameters The requested rule baseline resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, parameters: DatabaseVulnerabilityAssessmentRuleBaseline, options?: DatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOptionalParams): Promise<DatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateResponse>;
    /**
     * Removes the database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, options?: DatabaseVulnerabilityAssessmentRuleBaselinesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateResponse = DatabaseVulnerabilityAssessmentRuleBaseline;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentRuleBaselinesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentRuleBaselinesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseVulnerabilityAssessmentRuleBaselinesGetResponse = DatabaseVulnerabilityAssessmentRuleBaseline;

/** Interface representing a DatabaseVulnerabilityAssessments. */
export declare interface DatabaseVulnerabilityAssessments {
    /**
     * Lists the vulnerability assessment policies associated with a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment policies are
     *                     defined.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: DatabaseVulnerabilityAssessmentsListByDatabaseOptionalParams): PagedAsyncIterableIterator<DatabaseVulnerabilityAssessment>;
    /**
     * Gets the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: DatabaseVulnerabilityAssessmentsGetOptionalParams): Promise<DatabaseVulnerabilityAssessmentsGetResponse>;
    /**
     * Creates or updates the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param parameters The requested resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, parameters: DatabaseVulnerabilityAssessment, options?: DatabaseVulnerabilityAssessmentsCreateOrUpdateOptionalParams): Promise<DatabaseVulnerabilityAssessmentsCreateOrUpdateResponse>;
    /**
     * Removes the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: DatabaseVulnerabilityAssessmentsDeleteOptionalParams): Promise<void>;
}

/** Interface representing a DatabaseVulnerabilityAssessmentScans. */
export declare interface DatabaseVulnerabilityAssessmentScans {
    /**
     * Lists the vulnerability assessment scans of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: DatabaseVulnerabilityAssessmentScansListByDatabaseOptionalParams): PagedAsyncIterableIterator<VulnerabilityAssessmentScanRecord>;
    /**
     * Gets a vulnerability assessment scan record of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: DatabaseVulnerabilityAssessmentScansGetOptionalParams): Promise<DatabaseVulnerabilityAssessmentScansGetResponse>;
    /**
     * Executes a Vulnerability Assessment database scan.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    beginInitiateScan(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: DatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Executes a Vulnerability Assessment database scan.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    beginInitiateScanAndWait(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: DatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams): Promise<void>;
    /**
     * Convert an existing scan result to a human readable format. If already exists nothing happens
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the scanned database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id.
     * @param options The options parameters.
     */
    export(resourceGroupName: string, serverName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: DatabaseVulnerabilityAssessmentScansExportOptionalParams): Promise<DatabaseVulnerabilityAssessmentScansExportResponse>;
}

/** A database Vulnerability Assessment scan export resource. */
export declare type DatabaseVulnerabilityAssessmentScansExport = ProxyResource & {
    /**
     * Location of the exported report (e.g. https://myStorage.blob.core.windows.net/VaScans/scans/serverName/databaseName/scan_scanId.xlsx).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly exportedReportLocation?: string;
};

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentScansExportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the export operation. */
export declare type DatabaseVulnerabilityAssessmentScansExportResponse = DatabaseVulnerabilityAssessmentScansExport;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentScansGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseVulnerabilityAssessmentScansGetResponse = VulnerabilityAssessmentScanRecord;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentScansListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type DatabaseVulnerabilityAssessmentScansListByDatabaseNextResponse = VulnerabilityAssessmentScanRecordListResult;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentScansListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DatabaseVulnerabilityAssessmentScansListByDatabaseResponse = VulnerabilityAssessmentScanRecordListResult;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DatabaseVulnerabilityAssessmentsCreateOrUpdateResponse = DatabaseVulnerabilityAssessment;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DatabaseVulnerabilityAssessmentsGetResponse = DatabaseVulnerabilityAssessment;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type DatabaseVulnerabilityAssessmentsListByDatabaseNextResponse = DatabaseVulnerabilityAssessmentListResult;

/** Optional parameters. */
export declare interface DatabaseVulnerabilityAssessmentsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DatabaseVulnerabilityAssessmentsListByDatabaseResponse = DatabaseVulnerabilityAssessmentListResult;

/** Defines values for DataMaskingFunction. */
export declare type DataMaskingFunction = "Default" | "CCN" | "Email" | "Number" | "SSN" | "Text";

/** Interface representing a DataMaskingPolicies. */
export declare interface DataMaskingPolicies {
    /**
     * Creates or updates a database data masking policy
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters Parameters for creating or updating a data masking policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: DataMaskingPolicy, options?: DataMaskingPoliciesCreateOrUpdateOptionalParams): Promise<DataMaskingPoliciesCreateOrUpdateResponse>;
    /**
     * Gets a database data masking policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: DataMaskingPoliciesGetOptionalParams): Promise<DataMaskingPoliciesGetResponse>;
}

/** Optional parameters. */
export declare interface DataMaskingPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DataMaskingPoliciesCreateOrUpdateResponse = DataMaskingPolicy;

/** Optional parameters. */
export declare interface DataMaskingPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DataMaskingPoliciesGetResponse = DataMaskingPolicy;

/** Represents a database data masking policy. */
export declare type DataMaskingPolicy = ProxyResource & {
    /**
     * The location of the data masking policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The kind of data masking policy. Metadata, used for Azure portal.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** The state of the data masking policy. */
    dataMaskingState?: DataMaskingState;
    /** The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. */
    exemptPrincipals?: string;
    /**
     * The list of the application principals. This is a legacy parameter and is no longer used.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly applicationPrincipals?: string;
    /**
     * The masking level. This is a legacy parameter and is no longer used.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maskingLevel?: string;
};

/** Represents a database data masking rule. */
export declare type DataMaskingRule = ProxyResource & {
    /**
     * The location of the data masking rule.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The kind of Data Masking Rule. Metadata, used for Azure portal.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * The rule Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly idPropertiesId?: string;
    /** The alias name. This is a legacy parameter and is no longer used. */
    aliasName?: string;
    /** The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. */
    ruleState?: DataMaskingRuleState;
    /** The schema name on which the data masking rule is applied. */
    schemaName?: string;
    /** The table name on which the data masking rule is applied. */
    tableName?: string;
    /** The column name on which the data masking rule is applied. */
    columnName?: string;
    /** The masking function that is used for the data masking rule. */
    maskingFunction?: DataMaskingFunction;
    /** The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
    numberFrom?: string;
    /** The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. */
    numberTo?: string;
    /** If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. */
    prefixSize?: string;
    /** If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. */
    suffixSize?: string;
    /** If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. */
    replacementString?: string;
};

/** The response to a list data masking rules request. */
export declare interface DataMaskingRuleListResult {
    /** The list of database data masking rules. */
    value?: DataMaskingRule[];
}

/** Interface representing a DataMaskingRules. */
export declare interface DataMaskingRules {
    /**
     * Gets a list of database data masking rules.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: DataMaskingRulesListByDatabaseOptionalParams): PagedAsyncIterableIterator<DataMaskingRule>;
    /**
     * Creates or updates a database data masking rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param dataMaskingRuleName The name of the data masking rule.
     * @param parameters The required parameters for creating or updating a data masking rule.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, dataMaskingRuleName: string, parameters: DataMaskingRule, options?: DataMaskingRulesCreateOrUpdateOptionalParams): Promise<DataMaskingRulesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface DataMaskingRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type DataMaskingRulesCreateOrUpdateResponse = DataMaskingRule;

/** Optional parameters. */
export declare interface DataMaskingRulesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type DataMaskingRulesListByDatabaseResponse = DataMaskingRuleListResult;

/** Defines values for DataMaskingRuleState. */
export declare type DataMaskingRuleState = "Disabled" | "Enabled";

/** Defines values for DataMaskingState. */
export declare type DataMaskingState = "Disabled" | "Enabled";

/** The edition capability. */
export declare interface EditionCapability {
    /**
     * The database edition name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported service objectives for the edition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedServiceLevelObjectives?: ServiceObjectiveCapability[];
    /**
     * Whether or not zone redundancy is supported for the edition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zoneRedundant?: boolean;
    /**
     * The read scale capability for the edition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly readScale?: ReadScaleCapability;
    /**
     * The list of supported storage capabilities for this edition
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedStorageCapabilities?: StorageCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** An elastic pool. */
export declare type ElasticPool = TrackedResource & {
    /**
     * The elastic pool SKU.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
     *
     * ```azurecli
     * az sql elastic-pool list-editions -l <location> -o table
     * ````
     *
     */
    sku?: Sku;
    /**
     * Kind of elastic pool. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * The state of the elastic pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ElasticPoolState;
    /**
     * The creation date of the elastic pool (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /** The storage limit for the database elastic pool in bytes. */
    maxSizeBytes?: number;
    /** The per database settings for the elastic pool. */
    perDatabaseSettings?: ElasticPoolPerDatabaseSettings;
    /** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
    zoneRedundant?: boolean;
    /** The license type to apply for this elastic pool. */
    licenseType?: ElasticPoolLicenseType;
};

/** Interface representing a ElasticPoolActivities. */
export declare interface ElasticPoolActivities {
    /**
     * Returns elastic pool activities.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool for which to get the current activity.
     * @param options The options parameters.
     */
    listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolActivitiesListByElasticPoolOptionalParams): PagedAsyncIterableIterator<ElasticPoolActivity>;
}

/** Optional parameters. */
export declare interface ElasticPoolActivitiesListByElasticPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPool operation. */
export declare type ElasticPoolActivitiesListByElasticPoolResponse = ElasticPoolActivityListResult;

/** Represents the activity on an elastic pool. */
export declare type ElasticPoolActivity = ProxyResource & {
    /** The geo-location where the resource lives */
    location?: string;
    /**
     * The time the operation finished (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * The error code if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorCode?: number;
    /**
     * The error message if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorMessage?: string;
    /**
     * The error severity if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorSeverity?: number;
    /**
     * The operation name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The unique operation ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationId?: string;
    /**
     * The percentage complete if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The requested max DTU per database if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDatabaseDtuMax?: number;
    /**
     * The requested min DTU per database if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDatabaseDtuMin?: number;
    /**
     * The requested DTU for the pool if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDtu?: number;
    /**
     * The requested name for the elastic pool if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedElasticPoolName?: string;
    /**
     * The requested storage limit for the pool in GB if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedStorageLimitInGB?: number;
    /**
     * The name of the elastic pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly elasticPoolName?: string;
    /**
     * The name of the server the elastic pool is in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The time the operation started (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The current state of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * The requested storage limit in MB.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedStorageLimitInMB?: number;
    /**
     * The requested per database DTU guarantee.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDatabaseDtuGuarantee?: number;
    /**
     * The requested per database DTU cap.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDatabaseDtuCap?: number;
    /**
     * The requested DTU guarantee.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedDtuGuarantee?: number;
};

/** Represents the response to a list elastic pool activity request. */
export declare interface ElasticPoolActivityListResult {
    /** The list of elastic pool activities. */
    value: ElasticPoolActivity[];
}

/** Interface representing a ElasticPoolDatabaseActivities. */
export declare interface ElasticPoolDatabaseActivities {
    /**
     * Returns activity on databases inside of an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams): PagedAsyncIterableIterator<ElasticPoolDatabaseActivity>;
}

/** Optional parameters. */
export declare interface ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPool operation. */
export declare type ElasticPoolDatabaseActivitiesListByElasticPoolResponse = ElasticPoolDatabaseActivityListResult;

/** Represents the activity on an elastic pool. */
export declare type ElasticPoolDatabaseActivity = ProxyResource & {
    /** The geo-location where the resource lives */
    location?: string;
    /**
     * The database name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The time the operation finished (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * The error code if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorCode?: number;
    /**
     * The error message if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorMessage?: string;
    /**
     * The error severity if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorSeverity?: number;
    /**
     * The operation name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The unique operation ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationId?: string;
    /**
     * The percentage complete if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The name for the elastic pool the database is moving into if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedElasticPoolName?: string;
    /**
     * The name of the current elastic pool the database is in if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentElasticPoolName?: string;
    /**
     * The name of the current service objective if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentServiceObjective?: string;
    /**
     * The name of the requested service objective if available.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedServiceObjective?: string;
    /**
     * The name of the server the elastic pool is in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The time the operation started (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The current state of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
};

/** Represents the response to a list elastic pool database activity request. */
export declare interface ElasticPoolDatabaseActivityListResult {
    /** The list of elastic pool database activities. */
    value: ElasticPoolDatabaseActivity[];
}

/**
 * Defines values for ElasticPoolEdition. \
 * {@link KnownElasticPoolEdition} can be used interchangeably with ElasticPoolEdition,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard** \
 * **Premium** \
 * **GeneralPurpose** \
 * **BusinessCritical**
 */
export declare type ElasticPoolEdition = string;

/** The elastic pool edition capability. */
export declare interface ElasticPoolEditionCapability {
    /**
     * The elastic pool edition name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported elastic pool DTU levels for the edition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedElasticPoolPerformanceLevels?: ElasticPoolPerformanceLevelCapability[];
    /**
     * Whether or not zone redundancy is supported for the edition.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zoneRedundant?: boolean;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/**
 * Defines values for ElasticPoolLicenseType. \
 * {@link KnownElasticPoolLicenseType} can be used interchangeably with ElasticPoolLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LicenseIncluded** \
 * **BasePrice**
 */
export declare type ElasticPoolLicenseType = string;

/** The result of an elastic pool list request. */
export declare interface ElasticPoolListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ElasticPool[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A elastic pool operation. */
export declare type ElasticPoolOperation = ProxyResource & {
    /**
     * The name of the elastic pool the operation is being performed on.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly elasticPoolName?: string;
    /**
     * The name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The friendly name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationFriendlyName?: string;
    /**
     * The percentage of the operation completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The name of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The operation start time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The operation state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * The operation error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorCode?: number;
    /**
     * The operation error description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorDescription?: string;
    /**
     * The operation error severity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorSeverity?: number;
    /**
     * Whether or not the error is a user error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isUserError?: boolean;
    /**
     * The estimated completion time of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly estimatedCompletionTime?: Date;
    /**
     * The operation description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Whether the operation can be cancelled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isCancellable?: boolean;
};

/** The response to a list elastic pool operations request */
export declare interface ElasticPoolOperationListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ElasticPoolOperation[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ElasticPoolOperations. */
export declare interface ElasticPoolOperations {
    /**
     * Gets a list of operations performed on the elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName
     * @param options The options parameters.
     */
    listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolOperationsListByElasticPoolOptionalParams): PagedAsyncIterableIterator<ElasticPoolOperation>;
    /**
     * Cancels the asynchronous operation on the elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName
     * @param operationId The operation identifier.
     * @param options The options parameters.
     */
    cancel(resourceGroupName: string, serverName: string, elasticPoolName: string, operationId: string, options?: ElasticPoolOperationsCancelOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ElasticPoolOperationsCancelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ElasticPoolOperationsListByElasticPoolNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPoolNext operation. */
export declare type ElasticPoolOperationsListByElasticPoolNextResponse = ElasticPoolOperationListResult;

/** Optional parameters. */
export declare interface ElasticPoolOperationsListByElasticPoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByElasticPool operation. */
export declare type ElasticPoolOperationsListByElasticPoolResponse = ElasticPoolOperationListResult;

/** The max per-database performance level capability. */
export declare interface ElasticPoolPerDatabaseMaxPerformanceLevelCapability {
    /**
     * The maximum performance level per database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Unit type used to measure performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: PerformanceLevelUnit;
    /**
     * The list of supported min database performance levels.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedPerDatabaseMinPerformanceLevels?: ElasticPoolPerDatabaseMinPerformanceLevelCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** The minimum per-database performance level capability. */
export declare interface ElasticPoolPerDatabaseMinPerformanceLevelCapability {
    /**
     * The minimum performance level per database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Unit type used to measure performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: PerformanceLevelUnit;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** Per database settings of an elastic pool. */
export declare interface ElasticPoolPerDatabaseSettings {
    /** The minimum capacity all databases are guaranteed. */
    minCapacity?: number;
    /** The maximum capacity any one database can consume. */
    maxCapacity?: number;
}

/** The Elastic Pool performance level capability. */
export declare interface ElasticPoolPerformanceLevelCapability {
    /**
     * The performance level for the pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly performanceLevel?: PerformanceLevelCapability;
    /**
     * The sku.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /**
     * List of supported license types.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedLicenseTypes?: LicenseTypeCapability[];
    /**
     * The maximum number of databases supported.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxDatabaseCount?: number;
    /**
     * The included (free) max size for this performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly includedMaxSize?: MaxSizeCapability;
    /**
     * The list of supported max sizes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedMaxSizes?: MaxSizeRangeCapability[];
    /**
     * The list of supported per database max sizes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedPerDatabaseMaxSizes?: MaxSizeRangeCapability[];
    /**
     * The list of supported per database max performance levels.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedPerDatabaseMaxPerformanceLevels?: ElasticPoolPerDatabaseMaxPerformanceLevelCapability[];
    /**
     * Whether or not zone redundancy is supported for the performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zoneRedundant?: boolean;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** Interface representing a ElasticPools. */
export declare interface ElasticPools {
    /**
     * Returns elastic pool  metrics.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param filter An OData filter expression that describes a subset of metrics to return.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options?: ElasticPoolsListMetricsOptionalParams): PagedAsyncIterableIterator<Metric>;
    /**
     * Returns elastic pool metric definitions.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsListMetricDefinitionsOptionalParams): PagedAsyncIterableIterator<MetricDefinition>;
    /**
     * Gets all elastic pools in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ElasticPoolsListByServerOptionalParams): PagedAsyncIterableIterator<ElasticPool>;
    /**
     * Gets an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsGetOptionalParams): Promise<ElasticPoolsGetResponse>;
    /**
     * Creates or updates an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param parameters The elastic pool parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: ElasticPool, options?: ElasticPoolsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ElasticPoolsCreateOrUpdateResponse>, ElasticPoolsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param parameters The elastic pool parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: ElasticPool, options?: ElasticPoolsCreateOrUpdateOptionalParams): Promise<ElasticPoolsCreateOrUpdateResponse>;
    /**
     * Deletes an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsDeleteOptionalParams): Promise<void>;
    /**
     * Updates an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param parameters The elastic pool update parameters.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: ElasticPoolUpdate, options?: ElasticPoolsUpdateOptionalParams): Promise<PollerLike<PollOperationState<ElasticPoolsUpdateResponse>, ElasticPoolsUpdateResponse>>;
    /**
     * Updates an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool.
     * @param parameters The elastic pool update parameters.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: ElasticPoolUpdate, options?: ElasticPoolsUpdateOptionalParams): Promise<ElasticPoolsUpdateResponse>;
    /**
     * Failovers an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool to failover.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsFailoverOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Failovers an elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param elasticPoolName The name of the elastic pool to failover.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: ElasticPoolsFailoverOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ElasticPoolsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ElasticPoolsCreateOrUpdateResponse = ElasticPool;

/** Optional parameters. */
export declare interface ElasticPoolsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ElasticPoolsFailoverOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ElasticPoolsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ElasticPoolsGetResponse = ElasticPool;

/** Optional parameters. */
export declare interface ElasticPoolsListByServerNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
}

/** Contains response data for the listByServerNext operation. */
export declare type ElasticPoolsListByServerNextResponse = ElasticPoolListResult;

/** Optional parameters. */
export declare interface ElasticPoolsListByServerOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
}

/** Contains response data for the listByServer operation. */
export declare type ElasticPoolsListByServerResponse = ElasticPoolListResult;

/** Optional parameters. */
export declare interface ElasticPoolsListMetricDefinitionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetricDefinitions operation. */
export declare type ElasticPoolsListMetricDefinitionsResponse = MetricDefinitionListResult;

/** Optional parameters. */
export declare interface ElasticPoolsListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type ElasticPoolsListMetricsResponse = MetricListResult;

/**
 * Defines values for ElasticPoolState. \
 * {@link KnownElasticPoolState} can be used interchangeably with ElasticPoolState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Ready** \
 * **Disabled**
 */
export declare type ElasticPoolState = string;

/** Optional parameters. */
export declare interface ElasticPoolsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ElasticPoolsUpdateResponse = ElasticPool;

/** An elastic pool update. */
export declare interface ElasticPoolUpdate {
    /** An ARM Resource SKU. */
    sku?: Sku;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** The storage limit for the database elastic pool in bytes. */
    maxSizeBytes?: number;
    /** The per database settings for the elastic pool. */
    perDatabaseSettings?: ElasticPoolPerDatabaseSettings;
    /** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
    zoneRedundant?: boolean;
    /** The license type to apply for this elastic pool. */
    licenseType?: ElasticPoolLicenseType;
}

/** The server encryption protector. */
export declare type EncryptionProtector = ProxyResource & {
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Subregion of the encryption protector.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subregion?: string;
    /** The name of the server key. */
    serverKeyName?: string;
    /** The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. */
    serverKeyType?: ServerKeyType;
    /**
     * The URI of the server key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uri?: string;
    /**
     * Thumbprint of the server key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
};

/** A list of server encryption protectors. */
export declare interface EncryptionProtectorListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: EncryptionProtector[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for EncryptionProtectorName. \
 * {@link KnownEncryptionProtectorName} can be used interchangeably with EncryptionProtectorName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **current**
 */
export declare type EncryptionProtectorName = string;

/** Interface representing a EncryptionProtectors. */
export declare interface EncryptionProtectors {
    /**
     * Gets a list of server encryption protectors
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: EncryptionProtectorsListByServerOptionalParams): PagedAsyncIterableIterator<EncryptionProtector>;
    /**
     * Revalidates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param options The options parameters.
     */
    beginRevalidate(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectorName, options?: EncryptionProtectorsRevalidateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Revalidates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param options The options parameters.
     */
    beginRevalidateAndWait(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectorName, options?: EncryptionProtectorsRevalidateOptionalParams): Promise<void>;
    /**
     * Gets a server encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param encryptionProtectorName The name of the encryption protector to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectorName, options?: EncryptionProtectorsGetOptionalParams): Promise<EncryptionProtectorsGetResponse>;
    /**
     * Updates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param parameters The requested encryption protector resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectorName, parameters: EncryptionProtector, options?: EncryptionProtectorsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<EncryptionProtectorsCreateOrUpdateResponse>, EncryptionProtectorsCreateOrUpdateResponse>>;
    /**
     * Updates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param parameters The requested encryption protector resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectorName, parameters: EncryptionProtector, options?: EncryptionProtectorsCreateOrUpdateOptionalParams): Promise<EncryptionProtectorsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface EncryptionProtectorsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type EncryptionProtectorsCreateOrUpdateResponse = EncryptionProtector;

/** Optional parameters. */
export declare interface EncryptionProtectorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type EncryptionProtectorsGetResponse = EncryptionProtector;

/** Optional parameters. */
export declare interface EncryptionProtectorsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type EncryptionProtectorsListByServerNextResponse = EncryptionProtectorListResult;

/** Optional parameters. */
export declare interface EncryptionProtectorsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type EncryptionProtectorsListByServerResponse = EncryptionProtectorListResult;

/** Optional parameters. */
export declare interface EncryptionProtectorsRevalidateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for Enum21. \
 * {@link KnownEnum21} can be used interchangeably with Enum21,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **All** \
 * **Error** \
 * **Warning** \
 * **Success**
 */
export declare type Enum21 = string;

/** Export database parameters. */
export declare interface ExportRequest {
    /** The type of the storage key to use. */
    storageKeyType: StorageKeyType;
    /** The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?." */
    storageKey: string;
    /** The storage uri to use. */
    storageUri: string;
    /** The name of the SQL administrator. */
    administratorLogin: string;
    /** The password of the SQL administrator. */
    administratorLoginPassword: string;
    /** The authentication type. */
    authenticationType?: AuthenticationType;
}

/** Interface representing a ExtendedDatabaseBlobAuditingPolicies. */
export declare interface ExtendedDatabaseBlobAuditingPolicies {
    /**
     * Lists extended auditing settings of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<ExtendedDatabaseBlobAuditingPolicy>;
    /**
     * Gets an extended database's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: ExtendedDatabaseBlobAuditingPoliciesGetOptionalParams): Promise<ExtendedDatabaseBlobAuditingPoliciesGetResponse>;
    /**
     * Creates or updates an extended database's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The extended database blob auditing policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: ExtendedDatabaseBlobAuditingPolicy, options?: ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateResponse = ExtendedDatabaseBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ExtendedDatabaseBlobAuditingPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExtendedDatabaseBlobAuditingPoliciesGetResponse = ExtendedDatabaseBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextResponse = ExtendedDatabaseBlobAuditingPolicyListResult;

/** Optional parameters. */
export declare interface ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ExtendedDatabaseBlobAuditingPoliciesListByDatabaseResponse = ExtendedDatabaseBlobAuditingPolicyListResult;

/** An extended database blob auditing policy. */
export declare type ExtendedDatabaseBlobAuditingPolicy = ProxyResource & {
    /** Specifies condition of where clause when creating an audit. */
    predicateExpression?: string;
    /** Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. */
    state?: BlobAuditingPolicyState;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
    storageEndpoint?: string;
    /**
     * Specifies the identifier key of the auditing storage account.
     * If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
     * Prerequisites for using managed identity authentication:
     * 1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
     * 2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
     * For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
     */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the audit logs in the storage account. */
    retentionDays?: number;
    /**
     * Specifies the Actions-Groups and Actions to audit.
     *
     * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
     *
     * BATCH_COMPLETED_GROUP,
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
     * FAILED_DATABASE_AUTHENTICATION_GROUP.
     *
     * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
     *
     * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
     *
     * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
     * BACKUP_RESTORE_GROUP
     * DATABASE_LOGOUT_GROUP
     * DATABASE_OBJECT_CHANGE_GROUP
     * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
     * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
     * DATABASE_OPERATION_GROUP
     * DATABASE_PERMISSION_CHANGE_GROUP
     * DATABASE_PRINCIPAL_CHANGE_GROUP
     * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
     * DATABASE_ROLE_MEMBER_CHANGE_GROUP
     * FAILED_DATABASE_AUTHENTICATION_GROUP
     * SCHEMA_OBJECT_ACCESS_GROUP
     * SCHEMA_OBJECT_CHANGE_GROUP
     * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
     * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
     * USER_CHANGE_PASSWORD_GROUP
     * BATCH_STARTED_GROUP
     * BATCH_COMPLETED_GROUP
     *
     * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
     *
     * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
     *
     * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
     * SELECT
     * UPDATE
     * INSERT
     * DELETE
     * EXECUTE
     * RECEIVE
     * REFERENCES
     *
     * The general form for defining an action to be audited is:
     * {action} ON {object} BY {principal}
     *
     * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
     *
     * For example:
     * SELECT on dbo.myTable by public
     * SELECT on DATABASE::myDatabase by public
     * SELECT on SCHEMA::mySchema by public
     *
     * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
     */
    auditActionsAndGroups?: string[];
    /** Specifies the blob storage subscription Id. */
    storageAccountSubscriptionId?: string;
    /** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
    isStorageSecondaryKeyInUse?: boolean;
    /**
     * Specifies whether audit events are sent to Azure Monitor.
     * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
     *
     * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
     * Note that for server level audit you should use the 'master' database as {databaseName}.
     *
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     *
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     *
     */
    isAzureMonitorTargetEnabled?: boolean;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    queueDelayMs?: number;
};

/** A list of database extended auditing settings. */
export declare interface ExtendedDatabaseBlobAuditingPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ExtendedDatabaseBlobAuditingPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ExtendedServerBlobAuditingPolicies. */
export declare interface ExtendedServerBlobAuditingPolicies {
    /**
     * Lists extended auditing settings of a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ExtendedServerBlobAuditingPoliciesListByServerOptionalParams): PagedAsyncIterableIterator<ExtendedServerBlobAuditingPolicy>;
    /**
     * Gets an extended server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, options?: ExtendedServerBlobAuditingPoliciesGetOptionalParams): Promise<ExtendedServerBlobAuditingPoliciesGetResponse>;
    /**
     * Creates or updates an extended server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters Properties of extended blob auditing policy
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: ExtendedServerBlobAuditingPolicy, options?: ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>, ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates an extended server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters Properties of extended blob auditing policy
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, parameters: ExtendedServerBlobAuditingPolicy, options?: ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExtendedServerBlobAuditingPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse = ExtendedServerBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ExtendedServerBlobAuditingPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExtendedServerBlobAuditingPoliciesGetResponse = ExtendedServerBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ExtendedServerBlobAuditingPoliciesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ExtendedServerBlobAuditingPoliciesListByServerNextResponse = ExtendedServerBlobAuditingPolicyListResult;

/** Optional parameters. */
export declare interface ExtendedServerBlobAuditingPoliciesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ExtendedServerBlobAuditingPoliciesListByServerResponse = ExtendedServerBlobAuditingPolicyListResult;

/** An extended server blob auditing policy. */
export declare type ExtendedServerBlobAuditingPolicy = ProxyResource & {
    /** Specifies condition of where clause when creating an audit. */
    predicateExpression?: string;
    /** Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. */
    state?: BlobAuditingPolicyState;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
    storageEndpoint?: string;
    /**
     * Specifies the identifier key of the auditing storage account.
     * If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
     * Prerequisites for using managed identity authentication:
     * 1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
     * 2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
     * For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
     */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the audit logs in the storage account. */
    retentionDays?: number;
    /**
     * Specifies the Actions-Groups and Actions to audit.
     *
     * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
     *
     * BATCH_COMPLETED_GROUP,
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
     * FAILED_DATABASE_AUTHENTICATION_GROUP.
     *
     * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
     *
     * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
     *
     * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
     * BACKUP_RESTORE_GROUP
     * DATABASE_LOGOUT_GROUP
     * DATABASE_OBJECT_CHANGE_GROUP
     * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
     * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
     * DATABASE_OPERATION_GROUP
     * DATABASE_PERMISSION_CHANGE_GROUP
     * DATABASE_PRINCIPAL_CHANGE_GROUP
     * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
     * DATABASE_ROLE_MEMBER_CHANGE_GROUP
     * FAILED_DATABASE_AUTHENTICATION_GROUP
     * SCHEMA_OBJECT_ACCESS_GROUP
     * SCHEMA_OBJECT_CHANGE_GROUP
     * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
     * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
     * USER_CHANGE_PASSWORD_GROUP
     * BATCH_STARTED_GROUP
     * BATCH_COMPLETED_GROUP
     *
     * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
     *
     * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
     *
     * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
     * SELECT
     * UPDATE
     * INSERT
     * DELETE
     * EXECUTE
     * RECEIVE
     * REFERENCES
     *
     * The general form for defining an action to be audited is:
     * {action} ON {object} BY {principal}
     *
     * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
     *
     * For example:
     * SELECT on dbo.myTable by public
     * SELECT on DATABASE::myDatabase by public
     * SELECT on SCHEMA::mySchema by public
     *
     * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
     */
    auditActionsAndGroups?: string[];
    /** Specifies the blob storage subscription Id. */
    storageAccountSubscriptionId?: string;
    /** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
    isStorageSecondaryKeyInUse?: boolean;
    /**
     * Specifies whether audit events are sent to Azure Monitor.
     * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
     *
     * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
     * Note that for server level audit you should use the 'master' database as {databaseName}.
     *
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     *
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     *
     */
    isAzureMonitorTargetEnabled?: boolean;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    queueDelayMs?: number;
};

/** A list of server extended auditing settings. */
export declare interface ExtendedServerBlobAuditingPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ExtendedServerBlobAuditingPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for ExtensionName. \
 * {@link KnownExtensionName} can be used interchangeably with ExtensionName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **import**
 */
export declare type ExtensionName = string;

/** A failover group. */
export declare type FailoverGroup = ProxyResource & {
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Read-write endpoint of the failover group instance. */
    readWriteEndpoint?: FailoverGroupReadWriteEndpoint;
    /** Read-only endpoint of the failover group instance. */
    readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint;
    /**
     * Local replication role of the failover group instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationRole?: FailoverGroupReplicationRole;
    /**
     * Replication state of the failover group instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationState?: string;
    /** List of partner server information for the failover group. */
    partnerServers?: PartnerInfo[];
    /** List of databases in the failover group. */
    databases?: string[];
};

/** A list of failover groups. */
export declare interface FailoverGroupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: FailoverGroup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Read-only endpoint of the failover group instance. */
export declare interface FailoverGroupReadOnlyEndpoint {
    /** Failover policy of the read-only endpoint for the failover group. */
    failoverPolicy?: ReadOnlyEndpointFailoverPolicy;
}

/** Read-write endpoint of the failover group instance. */
export declare interface FailoverGroupReadWriteEndpoint {
    /** Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
    failoverPolicy: ReadWriteEndpointFailoverPolicy;
    /** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
    failoverWithDataLossGracePeriodMinutes?: number;
}

/**
 * Defines values for FailoverGroupReplicationRole. \
 * {@link KnownFailoverGroupReplicationRole} can be used interchangeably with FailoverGroupReplicationRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Secondary**
 */
export declare type FailoverGroupReplicationRole = string;

/** Interface representing a FailoverGroups. */
export declare interface FailoverGroups {
    /**
     * Lists the failover groups in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: FailoverGroupsListByServerOptionalParams): PagedAsyncIterableIterator<FailoverGroup>;
    /**
     * Gets a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsGetOptionalParams): Promise<FailoverGroupsGetResponse>;
    /**
     * Creates or updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, failoverGroupName: string, parameters: FailoverGroup, options?: FailoverGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FailoverGroupsCreateOrUpdateResponse>, FailoverGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, failoverGroupName: string, parameters: FailoverGroup, options?: FailoverGroupsCreateOrUpdateOptionalParams): Promise<FailoverGroupsCreateOrUpdateResponse>;
    /**
     * Deletes a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, failoverGroupName: string, parameters: FailoverGroupUpdate, options?: FailoverGroupsUpdateOptionalParams): Promise<PollerLike<PollOperationState<FailoverGroupsUpdateResponse>, FailoverGroupsUpdateResponse>>;
    /**
     * Updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, failoverGroupName: string, parameters: FailoverGroupUpdate, options?: FailoverGroupsUpdateOptionalParams): Promise<FailoverGroupsUpdateResponse>;
    /**
     * Fails over from the current primary server to this server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsFailoverOptionalParams): Promise<PollerLike<PollOperationState<FailoverGroupsFailoverResponse>, FailoverGroupsFailoverResponse>>;
    /**
     * Fails over from the current primary server to this server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsFailoverOptionalParams): Promise<FailoverGroupsFailoverResponse>;
    /**
     * Fails over from the current primary server to this server. This operation might result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginForceFailoverAllowDataLoss(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsForceFailoverAllowDataLossOptionalParams): Promise<PollerLike<PollOperationState<FailoverGroupsForceFailoverAllowDataLossResponse>, FailoverGroupsForceFailoverAllowDataLossResponse>>;
    /**
     * Fails over from the current primary server to this server. This operation might result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server containing the failover group.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginForceFailoverAllowDataLossAndWait(resourceGroupName: string, serverName: string, failoverGroupName: string, options?: FailoverGroupsForceFailoverAllowDataLossOptionalParams): Promise<FailoverGroupsForceFailoverAllowDataLossResponse>;
}

/** Optional parameters. */
export declare interface FailoverGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type FailoverGroupsCreateOrUpdateResponse = FailoverGroup;

/** Optional parameters. */
export declare interface FailoverGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface FailoverGroupsFailoverOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the failover operation. */
export declare type FailoverGroupsFailoverResponse = FailoverGroup;

/** Optional parameters. */
export declare interface FailoverGroupsForceFailoverAllowDataLossOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the forceFailoverAllowDataLoss operation. */
export declare type FailoverGroupsForceFailoverAllowDataLossResponse = FailoverGroup;

/** Optional parameters. */
export declare interface FailoverGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type FailoverGroupsGetResponse = FailoverGroup;

/** Optional parameters. */
export declare interface FailoverGroupsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type FailoverGroupsListByServerNextResponse = FailoverGroupListResult;

/** Optional parameters. */
export declare interface FailoverGroupsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type FailoverGroupsListByServerResponse = FailoverGroupListResult;

/** Optional parameters. */
export declare interface FailoverGroupsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type FailoverGroupsUpdateResponse = FailoverGroup;

/** A failover group update request. */
export declare interface FailoverGroupUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Read-write endpoint of the failover group instance. */
    readWriteEndpoint?: FailoverGroupReadWriteEndpoint;
    /** Read-only endpoint of the failover group instance. */
    readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint;
    /** List of databases in the failover group. */
    databases?: string[];
}

/** Represents a server firewall rule. */
export declare type FirewallRule = ProxyResource & {
    /**
     * Kind of server that contains this firewall rule.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Location of the server that contains this firewall rule.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    startIpAddress?: string;
    /** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' to represent all Azure-internal IP addresses. */
    endIpAddress?: string;
};

/** Represents the response to a List Firewall Rules request. */
export declare interface FirewallRuleListResult {
    /** The list of server firewall rules. */
    value?: FirewallRule[];
}

/** Interface representing a FirewallRules. */
export declare interface FirewallRules {
    /**
     * Returns a list of firewall rules.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: FirewallRulesListByServerOptionalParams): PagedAsyncIterableIterator<FirewallRule>;
    /**
     * Creates or updates a firewall rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param firewallRuleName The name of the firewall rule.
     * @param parameters The required parameters for creating or updating a firewall rule.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: FirewallRule, options?: FirewallRulesCreateOrUpdateOptionalParams): Promise<FirewallRulesCreateOrUpdateResponse>;
    /**
     * Deletes a firewall rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param firewallRuleName The name of the firewall rule.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: FirewallRulesDeleteOptionalParams): Promise<void>;
    /**
     * Gets a firewall rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param firewallRuleName The name of the firewall rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: FirewallRulesGetOptionalParams): Promise<FirewallRulesGetResponse>;
}

/** Optional parameters. */
export declare interface FirewallRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type FirewallRulesCreateOrUpdateResponse = FirewallRule;

/** Optional parameters. */
export declare interface FirewallRulesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface FirewallRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type FirewallRulesGetResponse = FirewallRule;

/** Optional parameters. */
export declare interface FirewallRulesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type FirewallRulesListByServerResponse = FirewallRuleListResult;

/** Interface representing a GeoBackupPolicies. */
export declare interface GeoBackupPolicies {
    /**
     * Returns a list of geo backup policies.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: GeoBackupPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<GeoBackupPolicy>;
    /**
     * Updates a database geo backup policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param geoBackupPolicyName The name of the geo backup policy.
     * @param parameters The required parameters for creating or updating the geo backup policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, geoBackupPolicyName: GeoBackupPolicyName, parameters: GeoBackupPolicy, options?: GeoBackupPoliciesCreateOrUpdateOptionalParams): Promise<GeoBackupPoliciesCreateOrUpdateResponse>;
    /**
     * Gets a geo backup policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param geoBackupPolicyName The name of the geo backup policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, geoBackupPolicyName: GeoBackupPolicyName, options?: GeoBackupPoliciesGetOptionalParams): Promise<GeoBackupPoliciesGetResponse>;
}

/** Optional parameters. */
export declare interface GeoBackupPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type GeoBackupPoliciesCreateOrUpdateResponse = GeoBackupPolicy;

/** Optional parameters. */
export declare interface GeoBackupPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type GeoBackupPoliciesGetResponse = GeoBackupPolicy;

/** Optional parameters. */
export declare interface GeoBackupPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type GeoBackupPoliciesListByDatabaseResponse = GeoBackupPolicyListResult;

/** A database geo backup policy. */
export declare type GeoBackupPolicy = ProxyResource & {
    /**
     * Kind of geo backup policy.  This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Backup policy location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** The state of the geo backup policy. */
    state: GeoBackupPolicyState;
    /**
     * The storage type of the geo backup policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageType?: string;
};

/** The response to a list geo backup policies request. */
export declare interface GeoBackupPolicyListResult {
    /** The list of geo backup policies. */
    value?: GeoBackupPolicy[];
}

/**
 * Defines values for GeoBackupPolicyName. \
 * {@link KnownGeoBackupPolicyName} can be used interchangeably with GeoBackupPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**
 */
export declare type GeoBackupPolicyName = string;

/** Defines values for GeoBackupPolicyState. */
export declare type GeoBackupPolicyState = "Disabled" | "Enabled";

/**
 * Defines values for IdentityType. \
 * {@link KnownIdentityType} can be used interchangeably with IdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned**
 */
export declare type IdentityType = string;

/** Response for Import/Export Get operation. */
export declare type ImportExportResponse = ProxyResource & {
    /**
     * The request type of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestType?: string;
    /**
     * The request type of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestId?: string;
    /**
     * The name of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The status message returned from the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: string;
    /**
     * The operation status last modified time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedTime?: string;
    /**
     * The operation queued time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly queuedTime?: string;
    /**
     * The blob uri.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blobUri?: string;
    /**
     * The error message returned from the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorMessage?: string;
};

/** Represents the properties for an import operation */
export declare type ImportExtensionProperties = ExportRequest & {
    /** The type of import operation being performed. This is always Import. */
    operationMode: "Import";
};

/** Import database parameters. */
export declare interface ImportExtensionRequest {
    /** The name of the extension. */
    name?: string;
    /** The type of the extension. */
    type?: string;
    /** The type of the storage key to use. */
    storageKeyType?: StorageKeyType;
    /** The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a "?." */
    storageKey?: string;
    /** The storage uri to use. */
    storageUri?: string;
    /** The name of the SQL administrator. */
    administratorLogin?: string;
    /** The password of the SQL administrator. */
    administratorLoginPassword?: string;
    /** The authentication type. */
    authenticationType?: AuthenticationType;
    /** The type of import operation being performed. This is always Import. */
    operationMode?: "Import";
}

/** Import database parameters. */
export declare type ImportRequest = ExportRequest & {
    /** The name of the database to import. */
    databaseName: string;
    /**
     * The edition for the database being created.
     *
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
     *
     * ```azurecli
     * az sql db list-editions -l <location> -o table
     * ````
     *
     * ```powershell
     * Get-AzSqlServerServiceObjective -Location <location>
     * ````
     *
     */
    edition: DatabaseEdition;
    /** The name of the service objective to assign to the database. */
    serviceObjectiveName: ServiceObjectiveName;
    /** The maximum size for the newly imported database. */
    maxSizeBytes: string;
};

/** An instance failover group. */
export declare type InstanceFailoverGroup = ProxyResource & {
    /** Read-write endpoint of the failover group instance. */
    readWriteEndpoint?: InstanceFailoverGroupReadWriteEndpoint;
    /** Read-only endpoint of the failover group instance. */
    readOnlyEndpoint?: InstanceFailoverGroupReadOnlyEndpoint;
    /**
     * Local replication role of the failover group instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationRole?: InstanceFailoverGroupReplicationRole;
    /**
     * Replication state of the failover group instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationState?: string;
    /** Partner region information for the failover group. */
    partnerRegions?: PartnerRegionInfo[];
    /** List of managed instance pairs in the failover group. */
    managedInstancePairs?: ManagedInstancePairInfo[];
};

/** A list of instance failover groups. */
export declare interface InstanceFailoverGroupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: InstanceFailoverGroup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Read-only endpoint of the failover group instance. */
export declare interface InstanceFailoverGroupReadOnlyEndpoint {
    /** Failover policy of the read-only endpoint for the failover group. */
    failoverPolicy?: ReadOnlyEndpointFailoverPolicy;
}

/** Read-write endpoint of the failover group instance. */
export declare interface InstanceFailoverGroupReadWriteEndpoint {
    /** Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
    failoverPolicy: ReadWriteEndpointFailoverPolicy;
    /** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
    failoverWithDataLossGracePeriodMinutes?: number;
}

/**
 * Defines values for InstanceFailoverGroupReplicationRole. \
 * {@link KnownInstanceFailoverGroupReplicationRole} can be used interchangeably with InstanceFailoverGroupReplicationRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Secondary**
 */
export declare type InstanceFailoverGroupReplicationRole = string;

/** Interface representing a InstanceFailoverGroups. */
export declare interface InstanceFailoverGroups {
    /**
     * Lists the failover groups in a location.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param options The options parameters.
     */
    listByLocation(resourceGroupName: string, locationName: string, options?: InstanceFailoverGroupsListByLocationOptionalParams): PagedAsyncIterableIterator<InstanceFailoverGroup>;
    /**
     * Gets a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsGetOptionalParams): Promise<InstanceFailoverGroupsGetResponse>;
    /**
     * Creates or updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, locationName: string, failoverGroupName: string, parameters: InstanceFailoverGroup, options?: InstanceFailoverGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<InstanceFailoverGroupsCreateOrUpdateResponse>, InstanceFailoverGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param parameters The failover group parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, locationName: string, failoverGroupName: string, parameters: InstanceFailoverGroup, options?: InstanceFailoverGroupsCreateOrUpdateOptionalParams): Promise<InstanceFailoverGroupsCreateOrUpdateResponse>;
    /**
     * Deletes a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a failover group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Fails over from the current primary managed instance to this managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsFailoverOptionalParams): Promise<PollerLike<PollOperationState<InstanceFailoverGroupsFailoverResponse>, InstanceFailoverGroupsFailoverResponse>>;
    /**
     * Fails over from the current primary managed instance to this managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsFailoverOptionalParams): Promise<InstanceFailoverGroupsFailoverResponse>;
    /**
     * Fails over from the current primary managed instance to this managed instance. This operation might
     * result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginForceFailoverAllowDataLoss(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams): Promise<PollerLike<PollOperationState<InstanceFailoverGroupsForceFailoverAllowDataLossResponse>, InstanceFailoverGroupsForceFailoverAllowDataLossResponse>>;
    /**
     * Fails over from the current primary managed instance to this managed instance. This operation might
     * result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The name of the region where the resource is located.
     * @param failoverGroupName The name of the failover group.
     * @param options The options parameters.
     */
    beginForceFailoverAllowDataLossAndWait(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams): Promise<InstanceFailoverGroupsForceFailoverAllowDataLossResponse>;
}

/** Optional parameters. */
export declare interface InstanceFailoverGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type InstanceFailoverGroupsCreateOrUpdateResponse = InstanceFailoverGroup;

/** Optional parameters. */
export declare interface InstanceFailoverGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface InstanceFailoverGroupsFailoverOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the failover operation. */
export declare type InstanceFailoverGroupsFailoverResponse = InstanceFailoverGroup;

/** Optional parameters. */
export declare interface InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the forceFailoverAllowDataLoss operation. */
export declare type InstanceFailoverGroupsForceFailoverAllowDataLossResponse = InstanceFailoverGroup;

/** Optional parameters. */
export declare interface InstanceFailoverGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type InstanceFailoverGroupsGetResponse = InstanceFailoverGroup;

/** Optional parameters. */
export declare interface InstanceFailoverGroupsListByLocationNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocationNext operation. */
export declare type InstanceFailoverGroupsListByLocationNextResponse = InstanceFailoverGroupListResult;

/** Optional parameters. */
export declare interface InstanceFailoverGroupsListByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocation operation. */
export declare type InstanceFailoverGroupsListByLocationResponse = InstanceFailoverGroupListResult;

/** An Azure SQL instance pool. */
export declare type InstancePool = TrackedResource & {
    /** The name and tier of the SKU. */
    sku?: Sku;
    /** Resource ID of the subnet to place this instance pool in. */
    subnetId?: string;
    /** Count of vCores belonging to this instance pool. */
    vCores?: number;
    /** The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price). */
    licenseType?: InstancePoolLicenseType;
};

/** The instance pool capability */
export declare interface InstancePoolEditionCapability {
    /**
     * The instance pool version name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The supported families.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedFamilies?: InstancePoolFamilyCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** The instance pool family capability. */
export declare interface InstancePoolFamilyCapability {
    /**
     * Family name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * List of supported license types.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedLicenseTypes?: LicenseTypeCapability[];
    /**
     * List of supported virtual cores values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedVcoresValues?: InstancePoolVcoresCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/**
 * Defines values for InstancePoolLicenseType. \
 * {@link KnownInstancePoolLicenseType} can be used interchangeably with InstancePoolLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LicenseIncluded** \
 * **BasePrice**
 */
export declare type InstancePoolLicenseType = string;

/** A list of Azure SQL instance pools. */
export declare interface InstancePoolListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: InstancePool[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a InstancePools. */
export declare interface InstancePools {
    /**
     * Gets a list of instance pools in the resource group
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: InstancePoolsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<InstancePool>;
    /**
     * Gets a list of all instance pools in the subscription.
     * @param options The options parameters.
     */
    list(options?: InstancePoolsListOptionalParams): PagedAsyncIterableIterator<InstancePool>;
    /**
     * Gets an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, instancePoolName: string, options?: InstancePoolsGetOptionalParams): Promise<InstancePoolsGetResponse>;
    /**
     * Creates or updates an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be created or updated.
     * @param parameters The requested instance pool resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, instancePoolName: string, parameters: InstancePool, options?: InstancePoolsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<InstancePoolsCreateOrUpdateResponse>, InstancePoolsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be created or updated.
     * @param parameters The requested instance pool resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, instancePoolName: string, parameters: InstancePool, options?: InstancePoolsCreateOrUpdateOptionalParams): Promise<InstancePoolsCreateOrUpdateResponse>;
    /**
     * Deletes an instance pool
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be deleted
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, instancePoolName: string, options?: InstancePoolsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes an instance pool
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be deleted
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, instancePoolName: string, options?: InstancePoolsDeleteOptionalParams): Promise<void>;
    /**
     * Updates an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be updated.
     * @param parameters The requested instance pool resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, instancePoolName: string, parameters: InstancePoolUpdate, options?: InstancePoolsUpdateOptionalParams): Promise<PollerLike<PollOperationState<InstancePoolsUpdateResponse>, InstancePoolsUpdateResponse>>;
    /**
     * Updates an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be updated.
     * @param parameters The requested instance pool resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, instancePoolName: string, parameters: InstancePoolUpdate, options?: InstancePoolsUpdateOptionalParams): Promise<InstancePoolsUpdateResponse>;
}

/** Optional parameters. */
export declare interface InstancePoolsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type InstancePoolsCreateOrUpdateResponse = InstancePool;

/** Optional parameters. */
export declare interface InstancePoolsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface InstancePoolsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type InstancePoolsGetResponse = InstancePool;

/** Optional parameters. */
export declare interface InstancePoolsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type InstancePoolsListByResourceGroupNextResponse = InstancePoolListResult;

/** Optional parameters. */
export declare interface InstancePoolsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type InstancePoolsListByResourceGroupResponse = InstancePoolListResult;

/** Optional parameters. */
export declare interface InstancePoolsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type InstancePoolsListNextResponse = InstancePoolListResult;

/** Optional parameters. */
export declare interface InstancePoolsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type InstancePoolsListResponse = InstancePoolListResult;

/** Optional parameters. */
export declare interface InstancePoolsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type InstancePoolsUpdateResponse = InstancePool;

/** An update to an Instance pool. */
export declare interface InstancePoolUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** The managed instance virtual cores capability. */
export declare interface InstancePoolVcoresCapability {
    /**
     * The virtual cores identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The virtual cores value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: number;
    /**
     * Storage limit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageLimit?: MaxSizeCapability;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** A job. */
export declare type Job = ProxyResource & {
    /** User-defined description of the job. */
    description?: string;
    /**
     * The job version number.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: number;
    /** Schedule properties of the job. */
    schedule?: JobSchedule;
};

/** An Azure SQL job agent. */
export declare type JobAgent = TrackedResource & {
    /** The name and tier of the SKU. */
    sku?: Sku;
    /** Resource ID of the database to store job metadata in. */
    databaseId?: string;
    /**
     * The state of the job agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: JobAgentState;
};

/** A list of Azure SQL job agents. */
export declare interface JobAgentListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobAgent[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a JobAgents. */
export declare interface JobAgents {
    /**
     * Gets a list of job agents in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: JobAgentsListByServerOptionalParams): PagedAsyncIterableIterator<JobAgent>;
    /**
     * Gets a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobAgentsGetOptionalParams): Promise<JobAgentsGetResponse>;
    /**
     * Creates or updates a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be created or updated.
     * @param parameters The requested job agent resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: JobAgent, options?: JobAgentsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<JobAgentsCreateOrUpdateResponse>, JobAgentsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be created or updated.
     * @param parameters The requested job agent resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: JobAgent, options?: JobAgentsCreateOrUpdateOptionalParams): Promise<JobAgentsCreateOrUpdateResponse>;
    /**
     * Deletes a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobAgentsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobAgentsDeleteOptionalParams): Promise<void>;
    /**
     * Updates a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be updated.
     * @param parameters The update to the job agent.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: JobAgentUpdate, options?: JobAgentsUpdateOptionalParams): Promise<PollerLike<PollOperationState<JobAgentsUpdateResponse>, JobAgentsUpdateResponse>>;
    /**
     * Updates a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent to be updated.
     * @param parameters The update to the job agent.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: JobAgentUpdate, options?: JobAgentsUpdateOptionalParams): Promise<JobAgentsUpdateResponse>;
}

/** Optional parameters. */
export declare interface JobAgentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobAgentsCreateOrUpdateResponse = JobAgent;

/** Optional parameters. */
export declare interface JobAgentsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface JobAgentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobAgentsGetResponse = JobAgent;

/** Optional parameters. */
export declare interface JobAgentsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type JobAgentsListByServerNextResponse = JobAgentListResult;

/** Optional parameters. */
export declare interface JobAgentsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type JobAgentsListByServerResponse = JobAgentListResult;

/**
 * Defines values for JobAgentState. \
 * {@link KnownJobAgentState} can be used interchangeably with JobAgentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Ready** \
 * **Updating** \
 * **Deleting** \
 * **Disabled**
 */
export declare type JobAgentState = string;

/** Optional parameters. */
export declare interface JobAgentsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type JobAgentsUpdateResponse = JobAgent;

/** An update to an Azure SQL job agent. */
export declare interface JobAgentUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** A stored credential that can be used by a job to connect to target databases. */
export declare type JobCredential = ProxyResource & {
    /** The credential user name. */
    username?: string;
    /** The credential password. */
    password?: string;
};

/** A list of job credentials. */
export declare interface JobCredentialListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobCredential[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a JobCredentials. */
export declare interface JobCredentials {
    /**
     * Gets a list of jobs credentials.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param options The options parameters.
     */
    listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobCredentialsListByAgentOptionalParams): PagedAsyncIterableIterator<JobCredential>;
    /**
     * Gets a jobs credential.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param credentialName The name of the credential.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, options?: JobCredentialsGetOptionalParams): Promise<JobCredentialsGetResponse>;
    /**
     * Creates or updates a job credential.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param credentialName The name of the credential.
     * @param parameters The requested job credential state.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, parameters: JobCredential, options?: JobCredentialsCreateOrUpdateOptionalParams): Promise<JobCredentialsCreateOrUpdateResponse>;
    /**
     * Deletes a job credential.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param credentialName The name of the credential.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, jobAgentName: string, credentialName: string, options?: JobCredentialsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface JobCredentialsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobCredentialsCreateOrUpdateResponse = JobCredential;

/** Optional parameters. */
export declare interface JobCredentialsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface JobCredentialsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobCredentialsGetResponse = JobCredential;

/** Optional parameters. */
export declare interface JobCredentialsListByAgentNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgentNext operation. */
export declare type JobCredentialsListByAgentNextResponse = JobCredentialListResult;

/** Optional parameters. */
export declare interface JobCredentialsListByAgentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgent operation. */
export declare type JobCredentialsListByAgentResponse = JobCredentialListResult;

/** An execution of a job */
export declare type JobExecution = ProxyResource & {
    /**
     * The job version number.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly jobVersion?: number;
    /**
     * The job step name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly stepName?: string;
    /**
     * The job step id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly stepId?: number;
    /**
     * The unique identifier of the job execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly jobExecutionId?: string;
    /**
     * The detailed state of the job execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lifecycle?: JobExecutionLifecycle;
    /**
     * The ARM provisioning state of the job execution.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The time that the job execution was created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createTime?: Date;
    /**
     * The time that the job execution started.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The time that the job execution completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /** Number of times the job execution has been attempted. */
    currentAttempts?: number;
    /**
     * Start time of the current attempt.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentAttemptStartTime?: Date;
    /**
     * The last status or error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastMessage?: string;
    /**
     * The target that this execution is executed on.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly target?: JobExecutionTarget;
};

/**
 * Defines values for JobExecutionLifecycle. \
 * {@link KnownJobExecutionLifecycle} can be used interchangeably with JobExecutionLifecycle,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Created** \
 * **InProgress** \
 * **WaitingForChildJobExecutions** \
 * **WaitingForRetry** \
 * **Succeeded** \
 * **SucceededWithSkipped** \
 * **Failed** \
 * **TimedOut** \
 * **Canceled** \
 * **Skipped**
 */
export declare type JobExecutionLifecycle = string;

/** A list of job executions. */
export declare interface JobExecutionListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobExecution[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a JobExecutions. */
export declare interface JobExecutions {
    /**
     * Lists all executions in a job agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param options The options parameters.
     */
    listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobExecutionsListByAgentOptionalParams): PagedAsyncIterableIterator<JobExecution>;
    /**
     * Lists a job's executions.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobExecutionsListByJobOptionalParams): PagedAsyncIterableIterator<JobExecution>;
    /**
     * Requests cancellation of a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param jobExecutionId The id of the job execution to cancel.
     * @param options The options parameters.
     */
    cancel(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobExecutionsCancelOptionalParams): Promise<void>;
    /**
     * Starts an elastic job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobExecutionsCreateOptionalParams): Promise<PollerLike<PollOperationState<JobExecutionsCreateResponse>, JobExecutionsCreateResponse>>;
    /**
     * Starts an elastic job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobExecutionsCreateOptionalParams): Promise<JobExecutionsCreateResponse>;
    /**
     * Gets a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param jobExecutionId The id of the job execution
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobExecutionsGetOptionalParams): Promise<JobExecutionsGetResponse>;
    /**
     * Creates or updates a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The job execution id to create the job execution under.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobExecutionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<JobExecutionsCreateOrUpdateResponse>, JobExecutionsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The job execution id to create the job execution under.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobExecutionsCreateOrUpdateOptionalParams): Promise<JobExecutionsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface JobExecutionsCancelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface JobExecutionsCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface JobExecutionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobExecutionsCreateOrUpdateResponse = JobExecution;

/** Contains response data for the create operation. */
export declare type JobExecutionsCreateResponse = JobExecution;

/** Optional parameters. */
export declare interface JobExecutionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobExecutionsGetResponse = JobExecution;

/** Optional parameters. */
export declare interface JobExecutionsListByAgentNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByAgentNext operation. */
export declare type JobExecutionsListByAgentNextResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobExecutionsListByAgentOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByAgent operation. */
export declare type JobExecutionsListByAgentResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobExecutionsListByJobNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJobNext operation. */
export declare type JobExecutionsListByJobNextResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobExecutionsListByJobOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJob operation. */
export declare type JobExecutionsListByJobResponse = JobExecutionListResult;

/** The target that a job execution is executed on. */
export declare interface JobExecutionTarget {
    /**
     * The type of the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: JobTargetType;
    /**
     * The server name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The database name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
}

/** A list of jobs. */
export declare interface JobListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Job[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a Jobs. */
export declare interface Jobs {
    /**
     * Gets a list of jobs.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param options The options parameters.
     */
    listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobsListByAgentOptionalParams): PagedAsyncIterableIterator<Job>;
    /**
     * Gets a job.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobsGetOptionalParams): Promise<JobsGetResponse>;
    /**
     * Creates or updates a job.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param parameters The requested job state.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, parameters: Job, options?: JobsCreateOrUpdateOptionalParams): Promise<JobsCreateOrUpdateResponse>;
    /**
     * Deletes a job.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to delete.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobsDeleteOptionalParams): Promise<void>;
}

/** Scheduling properties of a job. */
export declare interface JobSchedule {
    /** Schedule start time. */
    startTime?: Date;
    /** Schedule end time. */
    endTime?: Date;
    /** Schedule interval type */
    type?: JobScheduleType;
    /** Whether or not the schedule is enabled. */
    enabled?: boolean;
    /** Value of the schedule's recurring interval, if the schedule type is recurring. ISO8601 duration format. */
    interval?: string;
}

/** Defines values for JobScheduleType. */
export declare type JobScheduleType = "Once" | "Recurring";

/** Optional parameters. */
export declare interface JobsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobsCreateOrUpdateResponse = Job;

/** Optional parameters. */
export declare interface JobsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface JobsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobsGetResponse = Job;

/** Optional parameters. */
export declare interface JobsListByAgentNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgentNext operation. */
export declare type JobsListByAgentNextResponse = JobListResult;

/** Optional parameters. */
export declare interface JobsListByAgentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgent operation. */
export declare type JobsListByAgentResponse = JobListResult;

/** A job step. */
export declare type JobStep = ProxyResource & {
    /** The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified. */
    stepId?: number;
    /** The resource ID of the target group that the job step will be executed on. */
    targetGroup?: string;
    /** The resource ID of the job credential that will be used to connect to the targets. */
    credential?: string;
    /** The action payload of the job step. */
    action?: JobStepAction;
    /** Output destination properties of the job step. */
    output?: JobStepOutput;
    /** Execution options for the job step. */
    executionOptions?: JobStepExecutionOptions;
};

/** The action to be executed by a job step. */
export declare interface JobStepAction {
    /** Type of action being executed by the job step. */
    type?: JobStepActionType;
    /** The source of the action to execute. */
    source?: JobStepActionSource;
    /** The action value, for example the text of the T-SQL script to execute. */
    value: string;
}

/**
 * Defines values for JobStepActionSource. \
 * {@link KnownJobStepActionSource} can be used interchangeably with JobStepActionSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inline**
 */
export declare type JobStepActionSource = string;

/**
 * Defines values for JobStepActionType. \
 * {@link KnownJobStepActionType} can be used interchangeably with JobStepActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TSql**
 */
export declare type JobStepActionType = string;

/** The execution options of a job step. */
export declare interface JobStepExecutionOptions {
    /** Execution timeout for the job step. */
    timeoutSeconds?: number;
    /** Maximum number of times the job step will be reattempted if the first attempt fails. */
    retryAttempts?: number;
    /** Initial delay between retries for job step execution. */
    initialRetryIntervalSeconds?: number;
    /** The maximum amount of time to wait between retries for job step execution. */
    maximumRetryIntervalSeconds?: number;
    /** The backoff multiplier for the time between retries. */
    retryIntervalBackoffMultiplier?: number;
}

/** Interface representing a JobStepExecutions. */
export declare interface JobStepExecutions {
    /**
     * Lists the step executions of a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The id of the job execution
     * @param options The options parameters.
     */
    listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobStepExecutionsListByJobExecutionOptionalParams): PagedAsyncIterableIterator<JobExecution>;
    /**
     * Gets a step execution of a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The unique id of the job execution
     * @param stepName The name of the step.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: JobStepExecutionsGetOptionalParams): Promise<JobStepExecutionsGetResponse>;
}

/** Optional parameters. */
export declare interface JobStepExecutionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobStepExecutionsGetResponse = JobExecution;

/** Optional parameters. */
export declare interface JobStepExecutionsListByJobExecutionNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJobExecutionNext operation. */
export declare type JobStepExecutionsListByJobExecutionNextResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobStepExecutionsListByJobExecutionOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJobExecution operation. */
export declare type JobStepExecutionsListByJobExecutionResponse = JobExecutionListResult;

/** A list of job steps. */
export declare interface JobStepListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobStep[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The output configuration of a job step. */
export declare interface JobStepOutput {
    /** The output destination type. */
    type?: JobStepOutputType;
    /** The output destination subscription id. */
    subscriptionId?: string;
    /** The output destination resource group. */
    resourceGroupName?: string;
    /** The output destination server name. */
    serverName: string;
    /** The output destination database. */
    databaseName: string;
    /** The output destination schema. */
    schemaName?: string;
    /** The output destination table. */
    tableName: string;
    /** The resource ID of the credential to use to connect to the output destination. */
    credential: string;
}

/**
 * Defines values for JobStepOutputType. \
 * {@link KnownJobStepOutputType} can be used interchangeably with JobStepOutputType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SqlDatabase**
 */
export declare type JobStepOutputType = string;

/** Interface representing a JobSteps. */
export declare interface JobSteps {
    /**
     * Gets all job steps in the specified job version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobVersion The version of the job to get.
     * @param options The options parameters.
     */
    listByVersion(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, options?: JobStepsListByVersionOptionalParams): PagedAsyncIterableIterator<JobStep>;
    /**
     * Gets all job steps for a job's current version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobStepsListByJobOptionalParams): PagedAsyncIterableIterator<JobStep>;
    /**
     * Gets the specified version of a job step.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param jobVersion The version of the job to get.
     * @param stepName The name of the job step.
     * @param options The options parameters.
     */
    getByVersion(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, stepName: string, options?: JobStepsGetByVersionOptionalParams): Promise<JobStepsGetByVersionResponse>;
    /**
     * Gets a job step in a job's current version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param stepName The name of the job step.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, options?: JobStepsGetOptionalParams): Promise<JobStepsGetResponse>;
    /**
     * Creates or updates a job step. This will implicitly create a new job version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param stepName The name of the job step.
     * @param parameters The requested state of the job step.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, parameters: JobStep, options?: JobStepsCreateOrUpdateOptionalParams): Promise<JobStepsCreateOrUpdateResponse>;
    /**
     * Deletes a job step. This will implicitly create a new job version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param stepName The name of the job step to delete.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, stepName: string, options?: JobStepsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface JobStepsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobStepsCreateOrUpdateResponse = JobStep;

/** Optional parameters. */
export declare interface JobStepsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface JobStepsGetByVersionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getByVersion operation. */
export declare type JobStepsGetByVersionResponse = JobStep;

/** Optional parameters. */
export declare interface JobStepsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobStepsGetResponse = JobStep;

/** Optional parameters. */
export declare interface JobStepsListByJobNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByJobNext operation. */
export declare type JobStepsListByJobNextResponse = JobStepListResult;

/** Optional parameters. */
export declare interface JobStepsListByJobOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByJob operation. */
export declare type JobStepsListByJobResponse = JobStepListResult;

/** Optional parameters. */
export declare interface JobStepsListByVersionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVersionNext operation. */
export declare type JobStepsListByVersionNextResponse = JobStepListResult;

/** Optional parameters. */
export declare interface JobStepsListByVersionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVersion operation. */
export declare type JobStepsListByVersionResponse = JobStepListResult;

/** A job target, for example a specific database or a container of databases that is evaluated during job execution. */
export declare interface JobTarget {
    /** Whether the target is included or excluded from the group. */
    membershipType?: JobTargetGroupMembershipType;
    /** The target type. */
    type: JobTargetType;
    /** The target server name. */
    serverName?: string;
    /** The target database name. */
    databaseName?: string;
    /** The target elastic pool name. */
    elasticPoolName?: string;
    /** The target shard map. */
    shardMapName?: string;
    /** The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. */
    refreshCredential?: string;
}

/** Interface representing a JobTargetExecutions. */
export declare interface JobTargetExecutions {
    /**
     * Lists target executions for all steps of a job execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The id of the job execution
     * @param options The options parameters.
     */
    listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: JobTargetExecutionsListByJobExecutionOptionalParams): PagedAsyncIterableIterator<JobExecution>;
    /**
     * Lists the target executions of a job step execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The id of the job execution
     * @param stepName The name of the step.
     * @param options The options parameters.
     */
    listByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: JobTargetExecutionsListByStepOptionalParams): PagedAsyncIterableIterator<JobExecution>;
    /**
     * Gets a target execution.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param jobExecutionId The unique id of the job execution
     * @param stepName The name of the step.
     * @param targetId The target id.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, options?: JobTargetExecutionsGetOptionalParams): Promise<JobTargetExecutionsGetResponse>;
}

/** Optional parameters. */
export declare interface JobTargetExecutionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobTargetExecutionsGetResponse = JobExecution;

/** Optional parameters. */
export declare interface JobTargetExecutionsListByJobExecutionNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJobExecutionNext operation. */
export declare type JobTargetExecutionsListByJobExecutionNextResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobTargetExecutionsListByJobExecutionOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByJobExecution operation. */
export declare type JobTargetExecutionsListByJobExecutionResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobTargetExecutionsListByStepNextOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByStepNext operation. */
export declare type JobTargetExecutionsListByStepNextResponse = JobExecutionListResult;

/** Optional parameters. */
export declare interface JobTargetExecutionsListByStepOptionalParams extends coreClient.OperationOptions {
    /** The number of elements in the collection to skip. */
    skip?: number;
    /** If specified, only job executions created at or after the specified time are included. */
    createTimeMin?: Date;
    /** If specified, only job executions created before the specified time are included. */
    createTimeMax?: Date;
    /** If specified, only job executions completed at or after the specified time are included. */
    endTimeMin?: Date;
    /** If specified, only job executions completed before the specified time are included. */
    endTimeMax?: Date;
    /** If specified, only active or only completed job executions are included. */
    isActive?: boolean;
    /** The number of elements to return from the collection. */
    top?: number;
}

/** Contains response data for the listByStep operation. */
export declare type JobTargetExecutionsListByStepResponse = JobExecutionListResult;

/** A group of job targets. */
export declare type JobTargetGroup = ProxyResource & {
    /** Members of the target group. */
    members?: JobTarget[];
};

/** A list of target groups. */
export declare interface JobTargetGroupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobTargetGroup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for JobTargetGroupMembershipType. */
export declare type JobTargetGroupMembershipType = "Include" | "Exclude";

/** Interface representing a JobTargetGroups. */
export declare interface JobTargetGroups {
    /**
     * Gets all target groups in an agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param options The options parameters.
     */
    listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: JobTargetGroupsListByAgentOptionalParams): PagedAsyncIterableIterator<JobTargetGroup>;
    /**
     * Gets a target group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param targetGroupName The name of the target group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: JobTargetGroupsGetOptionalParams): Promise<JobTargetGroupsGetResponse>;
    /**
     * Creates or updates a target group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param targetGroupName The name of the target group.
     * @param parameters The requested state of the target group.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, parameters: JobTargetGroup, options?: JobTargetGroupsCreateOrUpdateOptionalParams): Promise<JobTargetGroupsCreateOrUpdateResponse>;
    /**
     * Deletes a target group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param targetGroupName The name of the target group.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: JobTargetGroupsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface JobTargetGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type JobTargetGroupsCreateOrUpdateResponse = JobTargetGroup;

/** Optional parameters. */
export declare interface JobTargetGroupsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface JobTargetGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobTargetGroupsGetResponse = JobTargetGroup;

/** Optional parameters. */
export declare interface JobTargetGroupsListByAgentNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgentNext operation. */
export declare type JobTargetGroupsListByAgentNextResponse = JobTargetGroupListResult;

/** Optional parameters. */
export declare interface JobTargetGroupsListByAgentOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByAgent operation. */
export declare type JobTargetGroupsListByAgentResponse = JobTargetGroupListResult;

/**
 * Defines values for JobTargetType. \
 * {@link KnownJobTargetType} can be used interchangeably with JobTargetType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TargetGroup** \
 * **SqlDatabase** \
 * **SqlElasticPool** \
 * **SqlShardMap** \
 * **SqlServer**
 */
export declare type JobTargetType = string;

/** A job version. */
export declare type JobVersion = ProxyResource & {};

/** A list of job versions. */
export declare interface JobVersionListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: JobVersion[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a JobVersions. */
export declare interface JobVersions {
    /**
     * Gets all versions of a job.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job to get.
     * @param options The options parameters.
     */
    listByJob(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, options?: JobVersionsListByJobOptionalParams): PagedAsyncIterableIterator<JobVersion>;
    /**
     * Gets a job version.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param jobAgentName The name of the job agent.
     * @param jobName The name of the job.
     * @param jobVersion The version of the job to get.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobVersion: number, options?: JobVersionsGetOptionalParams): Promise<JobVersionsGetResponse>;
}

/** Optional parameters. */
export declare interface JobVersionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type JobVersionsGetResponse = JobVersion;

/** Optional parameters. */
export declare interface JobVersionsListByJobNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByJobNext operation. */
export declare type JobVersionsListByJobNextResponse = JobVersionListResult;

/** Optional parameters. */
export declare interface JobVersionsListByJobOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByJob operation. */
export declare type JobVersionsListByJobResponse = JobVersionListResult;

/** Known values of {@link AdministratorName} that the service accepts. */
export declare enum KnownAdministratorName {
    ActiveDirectory = "ActiveDirectory"
}

/** Known values of {@link AdministratorType} that the service accepts. */
export declare enum KnownAdministratorType {
    ActiveDirectory = "ActiveDirectory"
}

/** Known values of {@link CapabilityGroup} that the service accepts. */
export declare enum KnownCapabilityGroup {
    SupportedEditions = "supportedEditions",
    SupportedElasticPoolEditions = "supportedElasticPoolEditions",
    SupportedManagedInstanceVersions = "supportedManagedInstanceVersions",
    SupportedInstancePoolEditions = "supportedInstancePoolEditions",
    SupportedManagedInstanceEditions = "supportedManagedInstanceEditions"
}

/** Known values of {@link CatalogCollationType} that the service accepts. */
export declare enum KnownCatalogCollationType {
    DatabaseDefault = "DATABASE_DEFAULT",
    SQLLatin1GeneralCP1CIAS = "SQL_Latin1_General_CP1_CI_AS"
}

/** Known values of {@link ConnectionPolicyName} that the service accepts. */
export declare enum KnownConnectionPolicyName {
    Default = "default"
}

/** Known values of {@link CreateMode} that the service accepts. */
export declare enum KnownCreateMode {
    Default = "Default",
    Copy = "Copy",
    Secondary = "Secondary",
    PointInTimeRestore = "PointInTimeRestore",
    Restore = "Restore",
    Recovery = "Recovery",
    RestoreExternalBackup = "RestoreExternalBackup",
    RestoreExternalBackupSecondary = "RestoreExternalBackupSecondary",
    RestoreLongTermRetentionBackup = "RestoreLongTermRetentionBackup",
    OnlineSecondary = "OnlineSecondary"
}

/** Known values of {@link DatabaseEdition} that the service accepts. */
export declare enum KnownDatabaseEdition {
    Web = "Web",
    Business = "Business",
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium",
    PremiumRS = "PremiumRS",
    Free = "Free",
    Stretch = "Stretch",
    DataWarehouse = "DataWarehouse",
    System = "System",
    System2 = "System2",
    GeneralPurpose = "GeneralPurpose",
    BusinessCritical = "BusinessCritical",
    Hyperscale = "Hyperscale"
}

/** Known values of {@link DatabaseLicenseType} that the service accepts. */
export declare enum KnownDatabaseLicenseType {
    LicenseIncluded = "LicenseIncluded",
    BasePrice = "BasePrice"
}

/** Known values of {@link DatabaseReadScale} that the service accepts. */
export declare enum KnownDatabaseReadScale {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link DatabaseState} that the service accepts. */
export declare enum KnownDatabaseState {
    All = "All",
    Live = "Live",
    Deleted = "Deleted"
}

/** Known values of {@link DatabaseStatus} that the service accepts. */
export declare enum KnownDatabaseStatus {
    Online = "Online",
    Restoring = "Restoring",
    RecoveryPending = "RecoveryPending",
    Recovering = "Recovering",
    Suspect = "Suspect",
    Offline = "Offline",
    Standby = "Standby",
    Shutdown = "Shutdown",
    EmergencyMode = "EmergencyMode",
    AutoClosed = "AutoClosed",
    Copying = "Copying",
    Creating = "Creating",
    Inaccessible = "Inaccessible",
    OfflineSecondary = "OfflineSecondary",
    Pausing = "Pausing",
    Paused = "Paused",
    Resuming = "Resuming",
    Scaling = "Scaling",
    OfflineChangingDwPerformanceTiers = "OfflineChangingDwPerformanceTiers",
    OnlineChangingDwPerformanceTiers = "OnlineChangingDwPerformanceTiers",
    Disabled = "Disabled"
}

/** Known values of {@link ElasticPoolEdition} that the service accepts. */
export declare enum KnownElasticPoolEdition {
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium",
    GeneralPurpose = "GeneralPurpose",
    BusinessCritical = "BusinessCritical"
}

/** Known values of {@link ElasticPoolLicenseType} that the service accepts. */
export declare enum KnownElasticPoolLicenseType {
    LicenseIncluded = "LicenseIncluded",
    BasePrice = "BasePrice"
}

/** Known values of {@link ElasticPoolState} that the service accepts. */
export declare enum KnownElasticPoolState {
    Creating = "Creating",
    Ready = "Ready",
    Disabled = "Disabled"
}

/** Known values of {@link EncryptionProtectorName} that the service accepts. */
export declare enum KnownEncryptionProtectorName {
    Current = "current"
}

/** Known values of {@link Enum21} that the service accepts. */
export declare enum KnownEnum21 {
    All = "All",
    Error = "Error",
    Warning = "Warning",
    Success = "Success"
}

/** Known values of {@link ExtensionName} that the service accepts. */
export declare enum KnownExtensionName {
    Import = "import"
}

/** Known values of {@link FailoverGroupReplicationRole} that the service accepts. */
export declare enum KnownFailoverGroupReplicationRole {
    Primary = "Primary",
    Secondary = "Secondary"
}

/** Known values of {@link GeoBackupPolicyName} that the service accepts. */
export declare enum KnownGeoBackupPolicyName {
    Default = "Default"
}

/** Known values of {@link IdentityType} that the service accepts. */
export declare enum KnownIdentityType {
    SystemAssigned = "SystemAssigned"
}

/** Known values of {@link InstanceFailoverGroupReplicationRole} that the service accepts. */
export declare enum KnownInstanceFailoverGroupReplicationRole {
    Primary = "Primary",
    Secondary = "Secondary"
}

/** Known values of {@link InstancePoolLicenseType} that the service accepts. */
export declare enum KnownInstancePoolLicenseType {
    LicenseIncluded = "LicenseIncluded",
    BasePrice = "BasePrice"
}

/** Known values of {@link JobAgentState} that the service accepts. */
export declare enum KnownJobAgentState {
    Creating = "Creating",
    Ready = "Ready",
    Updating = "Updating",
    Deleting = "Deleting",
    Disabled = "Disabled"
}

/** Known values of {@link JobExecutionLifecycle} that the service accepts. */
export declare enum KnownJobExecutionLifecycle {
    Created = "Created",
    InProgress = "InProgress",
    WaitingForChildJobExecutions = "WaitingForChildJobExecutions",
    WaitingForRetry = "WaitingForRetry",
    Succeeded = "Succeeded",
    SucceededWithSkipped = "SucceededWithSkipped",
    Failed = "Failed",
    TimedOut = "TimedOut",
    Canceled = "Canceled",
    Skipped = "Skipped"
}

/** Known values of {@link JobStepActionSource} that the service accepts. */
export declare enum KnownJobStepActionSource {
    Inline = "Inline"
}

/** Known values of {@link JobStepActionType} that the service accepts. */
export declare enum KnownJobStepActionType {
    TSql = "TSql"
}

/** Known values of {@link JobStepOutputType} that the service accepts. */
export declare enum KnownJobStepOutputType {
    SqlDatabase = "SqlDatabase"
}

/** Known values of {@link JobTargetType} that the service accepts. */
export declare enum KnownJobTargetType {
    TargetGroup = "TargetGroup",
    SqlDatabase = "SqlDatabase",
    SqlElasticPool = "SqlElasticPool",
    SqlShardMap = "SqlShardMap",
    SqlServer = "SqlServer"
}

/** Known values of {@link LogSizeUnit} that the service accepts. */
export declare enum KnownLogSizeUnit {
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes",
    Terabytes = "Terabytes",
    Petabytes = "Petabytes",
    Percent = "Percent"
}

/** Known values of {@link LongTermRetentionDatabaseState} that the service accepts. */
export declare enum KnownLongTermRetentionDatabaseState {
    All = "All",
    Live = "Live",
    Deleted = "Deleted"
}

/** Known values of {@link LongTermRetentionPolicyName} that the service accepts. */
export declare enum KnownLongTermRetentionPolicyName {
    Default = "default"
}

/** Known values of {@link ManagedDatabaseCreateMode} that the service accepts. */
export declare enum KnownManagedDatabaseCreateMode {
    Default = "Default",
    RestoreExternalBackup = "RestoreExternalBackup",
    PointInTimeRestore = "PointInTimeRestore",
    Recovery = "Recovery",
    RestoreLongTermRetentionBackup = "RestoreLongTermRetentionBackup"
}

/** Known values of {@link ManagedDatabaseStatus} that the service accepts. */
export declare enum KnownManagedDatabaseStatus {
    Online = "Online",
    Offline = "Offline",
    Shutdown = "Shutdown",
    Creating = "Creating",
    Inaccessible = "Inaccessible",
    Restoring = "Restoring",
    Updating = "Updating"
}

/** Known values of {@link ManagedInstanceAdministratorType} that the service accepts. */
export declare enum KnownManagedInstanceAdministratorType {
    ActiveDirectory = "ActiveDirectory"
}

/** Known values of {@link ManagedInstanceLicenseType} that the service accepts. */
export declare enum KnownManagedInstanceLicenseType {
    LicenseIncluded = "LicenseIncluded",
    BasePrice = "BasePrice"
}

/** Known values of {@link ManagedInstanceLongTermRetentionPolicyName} that the service accepts. */
export declare enum KnownManagedInstanceLongTermRetentionPolicyName {
    Default = "default"
}

/** Known values of {@link ManagedInstanceProxyOverride} that the service accepts. */
export declare enum KnownManagedInstanceProxyOverride {
    Proxy = "Proxy",
    Redirect = "Redirect",
    Default = "Default"
}

/** Known values of {@link ManagedServerCreateMode} that the service accepts. */
export declare enum KnownManagedServerCreateMode {
    Default = "Default",
    PointInTimeRestore = "PointInTimeRestore"
}

/** Known values of {@link ManagedShortTermRetentionPolicyName} that the service accepts. */
export declare enum KnownManagedShortTermRetentionPolicyName {
    Default = "default"
}

/** Known values of {@link ManagementOperationState} that the service accepts. */
export declare enum KnownManagementOperationState {
    Pending = "Pending",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Failed = "Failed",
    CancelInProgress = "CancelInProgress",
    Cancelled = "Cancelled"
}

/** Known values of {@link MaxSizeUnit} that the service accepts. */
export declare enum KnownMaxSizeUnit {
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes",
    Terabytes = "Terabytes",
    Petabytes = "Petabytes"
}

/** Known values of {@link OperationOrigin} that the service accepts. */
export declare enum KnownOperationOrigin {
    User = "user",
    System = "system"
}

/** Known values of {@link PauseDelayTimeUnit} that the service accepts. */
export declare enum KnownPauseDelayTimeUnit {
    Minutes = "Minutes"
}

/** Known values of {@link PerformanceLevelUnit} that the service accepts. */
export declare enum KnownPerformanceLevelUnit {
    DTU = "DTU",
    VCores = "VCores"
}

/** Known values of {@link PrimaryAggregationType} that the service accepts. */
export declare enum KnownPrimaryAggregationType {
    None = "None",
    Average = "Average",
    Count = "Count",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Total = "Total"
}

/** Known values of {@link PrivateEndpointProvisioningState} that the service accepts. */
export declare enum KnownPrivateEndpointProvisioningState {
    Approving = "Approving",
    Ready = "Ready",
    Dropping = "Dropping",
    Failed = "Failed",
    Rejecting = "Rejecting"
}

/** Known values of {@link PrivateLinkServiceConnectionStateActionsRequire} that the service accepts. */
export declare enum KnownPrivateLinkServiceConnectionStateActionsRequire {
    None = "None"
}

/** Known values of {@link PrivateLinkServiceConnectionStateStatus} that the service accepts. */
export declare enum KnownPrivateLinkServiceConnectionStateStatus {
    Approved = "Approved",
    Pending = "Pending",
    Rejected = "Rejected",
    Disconnected = "Disconnected"
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export declare enum KnownProvisioningState {
    Created = "Created",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Failed = "Failed",
    Canceled = "Canceled"
}

/** Known values of {@link ReadOnlyEndpointFailoverPolicy} that the service accepts. */
export declare enum KnownReadOnlyEndpointFailoverPolicy {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

/** Known values of {@link ReadWriteEndpointFailoverPolicy} that the service accepts. */
export declare enum KnownReadWriteEndpointFailoverPolicy {
    Manual = "Manual",
    Automatic = "Automatic"
}

/** Known values of {@link ReplicationState} that the service accepts. */
export declare enum KnownReplicationState {
    Pending = "PENDING",
    Seeding = "SEEDING",
    CatchUP = "CATCH_UP",
    Suspended = "SUSPENDED"
}

/** Known values of {@link ReplicaType} that the service accepts. */
export declare enum KnownReplicaType {
    Primary = "Primary",
    ReadableSecondary = "ReadableSecondary"
}

/** Known values of {@link RestoreDetailsName} that the service accepts. */
export declare enum KnownRestoreDetailsName {
    Default = "Default"
}

/** Known values of {@link SampleName} that the service accepts. */
export declare enum KnownSampleName {
    AdventureWorksLT = "AdventureWorksLT",
    WideWorldImportersStd = "WideWorldImportersStd",
    WideWorldImportersFull = "WideWorldImportersFull"
}

/** Known values of {@link SecurityAlertPolicyName} that the service accepts. */
export declare enum KnownSecurityAlertPolicyName {
    Default = "default"
}

/** Known values of {@link SecurityAlertPolicyNameAutoGenerated} that the service accepts. */
export declare enum KnownSecurityAlertPolicyNameAutoGenerated {
    Default = "Default"
}

/** Known values of {@link ServerKeyType} that the service accepts. */
export declare enum KnownServerKeyType {
    ServiceManaged = "ServiceManaged",
    AzureKeyVault = "AzureKeyVault"
}

/** Known values of {@link ServerPublicNetworkAccess} that the service accepts. */
export declare enum KnownServerPublicNetworkAccess {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link ServiceObjectiveName} that the service accepts. */
export declare enum KnownServiceObjectiveName {
    System = "System",
    System0 = "System0",
    System1 = "System1",
    System2 = "System2",
    System3 = "System3",
    System4 = "System4",
    System2L = "System2L",
    System3L = "System3L",
    System4L = "System4L",
    Free = "Free",
    Basic = "Basic",
    S0 = "S0",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3",
    S4 = "S4",
    S6 = "S6",
    S7 = "S7",
    S9 = "S9",
    S12 = "S12",
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4",
    P6 = "P6",
    P11 = "P11",
    P15 = "P15",
    PRS1 = "PRS1",
    PRS2 = "PRS2",
    PRS4 = "PRS4",
    PRS6 = "PRS6",
    DW100 = "DW100",
    DW200 = "DW200",
    DW300 = "DW300",
    DW400 = "DW400",
    DW500 = "DW500",
    DW600 = "DW600",
    DW1000 = "DW1000",
    DW1200 = "DW1200",
    DW1000C = "DW1000c",
    DW1500 = "DW1500",
    DW1500C = "DW1500c",
    DW2000 = "DW2000",
    DW2000C = "DW2000c",
    DW3000 = "DW3000",
    DW2500C = "DW2500c",
    DW3000C = "DW3000c",
    DW6000 = "DW6000",
    DW5000C = "DW5000c",
    DW6000C = "DW6000c",
    DW7500C = "DW7500c",
    DW10000C = "DW10000c",
    DW15000C = "DW15000c",
    DW30000C = "DW30000c",
    DS100 = "DS100",
    DS200 = "DS200",
    DS300 = "DS300",
    DS400 = "DS400",
    DS500 = "DS500",
    DS600 = "DS600",
    DS1000 = "DS1000",
    DS1200 = "DS1200",
    DS1500 = "DS1500",
    DS2000 = "DS2000",
    ElasticPool = "ElasticPool"
}

/** Known values of {@link ShortTermRetentionPolicyName} that the service accepts. */
export declare enum KnownShortTermRetentionPolicyName {
    Default = "default"
}

/** Known values of {@link StorageCapabilityStorageAccountType} that the service accepts. */
export declare enum KnownStorageCapabilityStorageAccountType {
    GRS = "GRS",
    LRS = "LRS",
    ZRS = "ZRS"
}

/** Known values of {@link SyncAgentState} that the service accepts. */
export declare enum KnownSyncAgentState {
    Online = "Online",
    Offline = "Offline",
    NeverConnected = "NeverConnected"
}

/** Known values of {@link SyncConflictResolutionPolicy} that the service accepts. */
export declare enum KnownSyncConflictResolutionPolicy {
    HubWin = "HubWin",
    MemberWin = "MemberWin"
}

/** Known values of {@link SyncDirection} that the service accepts. */
export declare enum KnownSyncDirection {
    Bidirectional = "Bidirectional",
    OneWayMemberToHub = "OneWayMemberToHub",
    OneWayHubToMember = "OneWayHubToMember"
}

/** Known values of {@link SyncGroupLogType} that the service accepts. */
export declare enum KnownSyncGroupLogType {
    All = "All",
    Error = "Error",
    Warning = "Warning",
    Success = "Success"
}

/** Known values of {@link SyncGroupState} that the service accepts. */
export declare enum KnownSyncGroupState {
    NotReady = "NotReady",
    Error = "Error",
    Warning = "Warning",
    Progressing = "Progressing",
    Good = "Good"
}

/** Known values of {@link SyncMemberDbType} that the service accepts. */
export declare enum KnownSyncMemberDbType {
    AzureSqlDatabase = "AzureSqlDatabase",
    SqlServerDatabase = "SqlServerDatabase"
}

/** Known values of {@link SyncMemberState} that the service accepts. */
export declare enum KnownSyncMemberState {
    SyncInProgress = "SyncInProgress",
    SyncSucceeded = "SyncSucceeded",
    SyncFailed = "SyncFailed",
    DisabledTombstoneCleanup = "DisabledTombstoneCleanup",
    DisabledBackupRestore = "DisabledBackupRestore",
    SyncSucceededWithWarnings = "SyncSucceededWithWarnings",
    SyncCancelling = "SyncCancelling",
    SyncCancelled = "SyncCancelled",
    UnProvisioned = "UnProvisioned",
    Provisioning = "Provisioning",
    Provisioned = "Provisioned",
    ProvisionFailed = "ProvisionFailed",
    DeProvisioning = "DeProvisioning",
    DeProvisioned = "DeProvisioned",
    DeProvisionFailed = "DeProvisionFailed",
    Reprovisioning = "Reprovisioning",
    ReprovisionFailed = "ReprovisionFailed",
    UnReprovisioned = "UnReprovisioned"
}

/** Known values of {@link TransparentDataEncryptionActivityStatus} that the service accepts. */
export declare enum KnownTransparentDataEncryptionActivityStatus {
    Encrypting = "Encrypting",
    Decrypting = "Decrypting"
}

/** Known values of {@link TransparentDataEncryptionName} that the service accepts. */
export declare enum KnownTransparentDataEncryptionName {
    Current = "current"
}

/** Known values of {@link UnitDefinitionType} that the service accepts. */
export declare enum KnownUnitDefinitionType {
    Count = "Count",
    Bytes = "Bytes",
    Seconds = "Seconds",
    Percent = "Percent",
    CountPerSecond = "CountPerSecond",
    BytesPerSecond = "BytesPerSecond"
}

/** Known values of {@link UnitType} that the service accepts. */
export declare enum KnownUnitType {
    Count = "count",
    Bytes = "bytes",
    Seconds = "seconds",
    Percent = "percent",
    CountPerSecond = "countPerSecond",
    BytesPerSecond = "bytesPerSecond"
}

/** Known values of {@link VirtualNetworkRuleState} that the service accepts. */
export declare enum KnownVirtualNetworkRuleState {
    Initializing = "Initializing",
    InProgress = "InProgress",
    Ready = "Ready",
    Deleting = "Deleting",
    Unknown = "Unknown"
}

/** Known values of {@link VulnerabilityAssessmentName} that the service accepts. */
export declare enum KnownVulnerabilityAssessmentName {
    Default = "default"
}

/** Known values of {@link VulnerabilityAssessmentScanState} that the service accepts. */
export declare enum KnownVulnerabilityAssessmentScanState {
    Passed = "Passed",
    Failed = "Failed",
    FailedToRun = "FailedToRun",
    InProgress = "InProgress"
}

/** Known values of {@link VulnerabilityAssessmentScanTriggerType} that the service accepts. */
export declare enum KnownVulnerabilityAssessmentScanTriggerType {
    OnDemand = "OnDemand",
    Recurring = "Recurring"
}

/** The license type capability */
export declare interface LicenseTypeCapability {
    /**
     * License type identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** The location capability. */
export declare interface LocationCapabilities {
    /**
     * The location name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported server versions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedServerVersions?: ServerVersionCapability[];
    /**
     * The list of supported managed instance versions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedManagedInstanceVersions?: ManagedInstanceVersionCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** A list of the server's security alert policies. */
export declare interface LogicalServerSecurityAlertPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerSecurityAlertPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The log size capability. */
export declare interface LogSizeCapability {
    /**
     * The log size limit (see 'unit' for the units).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * The units that the limit is expressed in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: LogSizeUnit;
}

/**
 * Defines values for LogSizeUnit. \
 * {@link KnownLogSizeUnit} can be used interchangeably with LogSizeUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Megabytes** \
 * **Gigabytes** \
 * **Terabytes** \
 * **Petabytes** \
 * **Percent**
 */
export declare type LogSizeUnit = string;

/** A long term retention backup. */
export declare type LongTermRetentionBackup = ProxyResource & {
    /**
     * The server name that the backup database belong to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * The create time of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverCreateTime?: Date;
    /**
     * The name of the database the backup belong to
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The delete time of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseDeletionTime?: Date;
    /**
     * The time the backup was taken
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backupTime?: Date;
    /**
     * The time the long term retention backup will expire.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backupExpirationTime?: Date;
};

/** A list of long term retention backups. */
export declare interface LongTermRetentionBackupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: LongTermRetentionBackup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LongTermRetentionBackups. */
export declare interface LongTermRetentionBackups {
    /**
     * Lists all long term retention backups for a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param options The options parameters.
     */
    listByResourceGroupDatabase(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, options?: LongTermRetentionBackupsListByResourceGroupDatabaseOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given location.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param options The options parameters.
     */
    listByResourceGroupLocation(resourceGroupName: string, locationName: string, options?: LongTermRetentionBackupsListByResourceGroupLocationOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param options The options parameters.
     */
    listByResourceGroupServer(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, options?: LongTermRetentionBackupsListByResourceGroupServerOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Lists all long term retention backups for a database.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param options The options parameters.
     */
    listByDatabase(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, options?: LongTermRetentionBackupsListByDatabaseOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given location.
     * @param locationName The location of the database
     * @param options The options parameters.
     */
    listByLocation(locationName: string, options?: LongTermRetentionBackupsListByLocationOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given server.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param options The options parameters.
     */
    listByServer(locationName: string, longTermRetentionServerName: string, options?: LongTermRetentionBackupsListByServerOptionalParams): PagedAsyncIterableIterator<LongTermRetentionBackup>;
    /**
     * Gets a long term retention backup.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database.
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    getByResourceGroup(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsGetByResourceGroupOptionalParams): Promise<LongTermRetentionBackupsGetByResourceGroupResponse>;
    /**
     * Deletes a long term retention backup.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteByResourceGroup(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsDeleteByResourceGroupOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a long term retention backup.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteByResourceGroupAndWait(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsDeleteByResourceGroupOptionalParams): Promise<void>;
    /**
     * Gets a long term retention backup.
     * @param locationName The location of the database.
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    get(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsGetOptionalParams): Promise<LongTermRetentionBackupsGetResponse>;
    /**
     * Deletes a long term retention backup.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDelete(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a long term retention backup.
     * @param locationName The location of the database
     * @param longTermRetentionServerName The name of the server
     * @param longTermRetentionDatabaseName The name of the database
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteAndWait(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, options?: LongTermRetentionBackupsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface LongTermRetentionBackupsDeleteByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LongTermRetentionBackupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LongTermRetentionBackupsGetByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getByResourceGroup operation. */
export declare type LongTermRetentionBackupsGetByResourceGroupResponse = LongTermRetentionBackup;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LongTermRetentionBackupsGetResponse = LongTermRetentionBackup;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type LongTermRetentionBackupsListByDatabaseNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByDatabase operation. */
export declare type LongTermRetentionBackupsListByDatabaseResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByLocationNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByLocationNext operation. */
export declare type LongTermRetentionBackupsListByLocationNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByLocationOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByLocation operation. */
export declare type LongTermRetentionBackupsListByLocationResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupDatabaseNext operation. */
export declare type LongTermRetentionBackupsListByResourceGroupDatabaseNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupDatabase operation. */
export declare type LongTermRetentionBackupsListByResourceGroupDatabaseResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupLocationNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupLocationNext operation. */
export declare type LongTermRetentionBackupsListByResourceGroupLocationNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupLocationOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupLocation operation. */
export declare type LongTermRetentionBackupsListByResourceGroupLocationResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupServerNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupServerNext operation. */
export declare type LongTermRetentionBackupsListByResourceGroupServerNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByResourceGroupServerOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByResourceGroupServer operation. */
export declare type LongTermRetentionBackupsListByResourceGroupServerResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByServerNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByServerNext operation. */
export declare type LongTermRetentionBackupsListByServerNextResponse = LongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionBackupsListByServerOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: LongTermRetentionDatabaseState;
}

/** Contains response data for the listByServer operation. */
export declare type LongTermRetentionBackupsListByServerResponse = LongTermRetentionBackupListResult;

/**
 * Defines values for LongTermRetentionDatabaseState. \
 * {@link KnownLongTermRetentionDatabaseState} can be used interchangeably with LongTermRetentionDatabaseState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **All** \
 * **Live** \
 * **Deleted**
 */
export declare type LongTermRetentionDatabaseState = string;

/** Interface representing a LongTermRetentionManagedInstanceBackups. */
export declare interface LongTermRetentionManagedInstanceBackups {
    /**
     * Lists all long term retention backups for a managed database.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param options The options parameters.
     */
    listByDatabase(locationName: string, managedInstanceName: string, databaseName: string, options?: LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given managed instance.
     * @param locationName The location of the database
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(locationName: string, managedInstanceName: string, options?: LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for managed databases in a given location.
     * @param locationName The location of the database.
     * @param options The options parameters.
     */
    listByLocation(locationName: string, options?: LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Lists all long term retention backups for a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param options The options parameters.
     */
    listByResourceGroupDatabase(resourceGroupName: string, locationName: string, managedInstanceName: string, databaseName: string, options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for a given managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByResourceGroupInstance(resourceGroupName: string, locationName: string, managedInstanceName: string, options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Lists the long term retention backups for managed databases in a given location.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database.
     * @param options The options parameters.
     */
    listByResourceGroupLocation(resourceGroupName: string, locationName: string, options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
    /**
     * Gets a long term retention backup for a managed database.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    get(locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsGetOptionalParams): Promise<LongTermRetentionManagedInstanceBackupsGetResponse>;
    /**
     * Deletes a long term retention backup.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDelete(locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a long term retention backup.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteAndWait(locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets a long term retention backup for a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    getByResourceGroup(resourceGroupName: string, locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsGetByResourceGroupOptionalParams): Promise<LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse>;
    /**
     * Deletes a long term retention backup.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteByResourceGroup(resourceGroupName: string, locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a long term retention backup.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param locationName The location of the database
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database.
     * @param backupName The backup name.
     * @param options The options parameters.
     */
    beginDeleteByResourceGroupAndWait(resourceGroupName: string, locationName: string, managedInstanceName: string, databaseName: string, backupName: string, options?: LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsGetByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getByResourceGroup operation. */
export declare type LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse = ManagedInstanceLongTermRetentionBackup;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LongTermRetentionManagedInstanceBackupsGetResponse = ManagedInstanceLongTermRetentionBackup;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByDatabaseNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByDatabase operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByDatabaseResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByInstanceNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByInstanceNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByInstanceNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByInstance operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByInstanceResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByLocationNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByLocationNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByLocationNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByLocation operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByLocationResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupDatabaseNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupDatabase operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupInstanceNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupInstance operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupLocationNext operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationNextResponse = ManagedInstanceLongTermRetentionBackupListResult;

/** Optional parameters. */
export declare interface LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams extends coreClient.OperationOptions {
    /** Whether or not to only get the latest backup for each database. */
    onlyLatestPerDatabase?: boolean;
    /** Whether to query against just live databases, just deleted databases, or all databases. */
    databaseState?: DatabaseState;
}

/** Contains response data for the listByResourceGroupLocation operation. */
export declare type LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationResponse = ManagedInstanceLongTermRetentionBackupListResult;

/**
 * Defines values for LongTermRetentionPolicyName. \
 * {@link KnownLongTermRetentionPolicyName} can be used interchangeably with LongTermRetentionPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type LongTermRetentionPolicyName = string;

/** Interface representing a ManagedBackupShortTermRetentionPolicies. */
export declare interface ManagedBackupShortTermRetentionPolicies {
    /**
     * Gets a managed database's short term retention policy list.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedBackupShortTermRetentionPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedBackupShortTermRetentionPolicy>;
    /**
     * Gets a managed database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedShortTermRetentionPolicyName, options?: ManagedBackupShortTermRetentionPoliciesGetOptionalParams): Promise<ManagedBackupShortTermRetentionPoliciesGetResponse>;
    /**
     * Updates a managed database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>, ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>>;
    /**
     * Updates a managed database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
    /**
     * Updates a managed database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedBackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedBackupShortTermRetentionPoliciesUpdateResponse>, ManagedBackupShortTermRetentionPoliciesUpdateResponse>>;
    /**
     * Updates a managed database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be "default".
     * @param parameters The short term retention policy info.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedBackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<ManagedBackupShortTermRetentionPoliciesUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse = ManagedBackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedBackupShortTermRetentionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedBackupShortTermRetentionPoliciesGetResponse = ManagedBackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedBackupShortTermRetentionPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse = ManagedBackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface ManagedBackupShortTermRetentionPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse = ManagedBackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface ManagedBackupShortTermRetentionPoliciesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ManagedBackupShortTermRetentionPoliciesUpdateResponse = ManagedBackupShortTermRetentionPolicy;

/** A short term retention policy. */
export declare type ManagedBackupShortTermRetentionPolicy = ProxyResource & {
    /** The backup retention period in days. This is how many days Point-in-Time Restore will be supported. */
    retentionDays?: number;
};

/** A list of short term retention policies. */
export declare interface ManagedBackupShortTermRetentionPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedBackupShortTermRetentionPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A managed database resource. */
export declare type ManagedDatabase = TrackedResource & {
    /** Collation of the managed database. */
    collation?: string;
    /**
     * Status of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: ManagedDatabaseStatus;
    /**
     * Creation date of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * Earliest restore point in time for point in time restore.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestorePoint?: Date;
    /** Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /**
     * Geo paired region.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultSecondaryLocation?: string;
    /** Collation of the metadata catalog. */
    catalogCollation?: CatalogCollationType;
    /** Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. */
    createMode?: ManagedDatabaseCreateMode;
    /** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. */
    storageContainerUri?: string;
    /** The resource identifier of the source database associated with create operation of this database. */
    sourceDatabaseId?: string;
    /** The restorable dropped database resource id to restore when creating this database. */
    restorableDroppedDatabaseId?: string;
    /** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token. */
    storageContainerSasToken?: string;
    /**
     * Instance Failover Group resource identifier that this managed database belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverGroupId?: string;
    /** The resource identifier of the recoverable database associated with create operation of this database. */
    recoverableDatabaseId?: string;
    /** The name of the Long Term Retention backup to be used for restore of this managed database. */
    longTermRetentionBackupResourceId?: string;
};

/**
 * Defines values for ManagedDatabaseCreateMode. \
 * {@link KnownManagedDatabaseCreateMode} can be used interchangeably with ManagedDatabaseCreateMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **RestoreExternalBackup** \
 * **PointInTimeRestore** \
 * **Recovery** \
 * **RestoreLongTermRetentionBackup**
 */
export declare type ManagedDatabaseCreateMode = string;

/** A list of managed databases. */
export declare interface ManagedDatabaseListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedDatabase[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedDatabaseRestoreDetails. */
export declare interface ManagedDatabaseRestoreDetails {
    /**
     * Gets managed database restore details.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param restoreDetailsName The name of the restore details to retrieve.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, restoreDetailsName: RestoreDetailsName, options?: ManagedDatabaseRestoreDetailsGetOptionalParams): Promise<ManagedDatabaseRestoreDetailsGetResponse>;
}

/** Optional parameters. */
export declare interface ManagedDatabaseRestoreDetailsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseRestoreDetailsGetResponse = ManagedDatabaseRestoreDetailsResult;

/** A managed database restore details. */
export declare type ManagedDatabaseRestoreDetailsResult = ProxyResource & {
    /**
     * Restore status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: string;
    /**
     * Current restoring file name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentRestoringFileName?: string;
    /**
     * Last restored file name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastRestoredFileName?: string;
    /**
     * Last restored file time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastRestoredFileTime?: Date;
    /**
     * Percent completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentCompleted?: number;
    /**
     * List of unrestorable files.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unrestorableFiles?: string[];
    /**
     * Number of files detected.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly numberOfFilesDetected?: number;
    /**
     * Last uploaded file name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastUploadedFileName?: string;
    /**
     * Last uploaded file time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastUploadedFileTime?: Date;
    /**
     * The reason why restore is in Blocked state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly blockReason?: string;
};

/** Interface representing a ManagedDatabases. */
export declare interface ManagedDatabases {
    /**
     * Gets a list of managed databases.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedDatabasesListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedDatabase>;
    /**
     * Gets a list of inaccessible managed databases in a managed instance
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listInaccessibleByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedDatabasesListInaccessibleByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedDatabase>;
    /**
     * Gets a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabasesGetOptionalParams): Promise<ManagedDatabasesGetResponse>;
    /**
     * Creates a new database or updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: ManagedDatabase, options?: ManagedDatabasesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedDatabasesCreateOrUpdateResponse>, ManagedDatabasesCreateOrUpdateResponse>>;
    /**
     * Creates a new database or updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: ManagedDatabase, options?: ManagedDatabasesCreateOrUpdateOptionalParams): Promise<ManagedDatabasesCreateOrUpdateResponse>;
    /**
     * Deletes a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabasesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabasesDeleteOptionalParams): Promise<void>;
    /**
     * Updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: ManagedDatabaseUpdate, options?: ManagedDatabasesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedDatabasesUpdateResponse>, ManagedDatabasesUpdateResponse>>;
    /**
     * Updates an existing database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The requested database resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: ManagedDatabaseUpdate, options?: ManagedDatabasesUpdateOptionalParams): Promise<ManagedDatabasesUpdateResponse>;
    /**
     * Completes the restore operation on a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The definition for completing the restore of this managed database.
     * @param options The options parameters.
     */
    beginCompleteRestore(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: CompleteDatabaseRestoreDefinition, options?: ManagedDatabasesCompleteRestoreOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Completes the restore operation on a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param parameters The definition for completing the restore of this managed database.
     * @param options The options parameters.
     */
    beginCompleteRestoreAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: CompleteDatabaseRestoreDefinition, options?: ManagedDatabasesCompleteRestoreOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedDatabasesCompleteRestoreOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedDatabasesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedDatabasesCreateOrUpdateResponse = ManagedDatabase;

/** Optional parameters. */
export declare interface ManagedDatabasesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Interface representing a ManagedDatabaseSecurityAlertPolicies. */
export declare interface ManagedDatabaseSecurityAlertPolicies {
    /**
     * Gets a list of managed database's security alert policies.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database for which the security alert policies are
     *                     defined.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedDatabaseSecurityAlertPolicy>;
    /**
     * Gets a managed database's security alert policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database for which the security alert policy is defined.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, securityAlertPolicyName: SecurityAlertPolicyName, options?: ManagedDatabaseSecurityAlertPoliciesGetOptionalParams): Promise<ManagedDatabaseSecurityAlertPoliciesGetResponse>;
    /**
     * Creates or updates a database's security alert policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the managed database for which the security alert policy is defined.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param parameters The database security alert policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, securityAlertPolicyName: SecurityAlertPolicyName, parameters: ManagedDatabaseSecurityAlertPolicy, options?: ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams): Promise<ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse = ManagedDatabaseSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ManagedDatabaseSecurityAlertPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseSecurityAlertPoliciesGetResponse = ManagedDatabaseSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse = ManagedDatabaseSecurityAlertPolicyListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseSecurityAlertPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse = ManagedDatabaseSecurityAlertPolicyListResult;

/** A managed database security alert policy. */
export declare type ManagedDatabaseSecurityAlertPolicy = ProxyResource & {
    /** Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. */
    state?: SecurityAlertPolicyState;
    /** Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action */
    disabledAlerts?: string[];
    /** Specifies an array of e-mail addresses to which the alert is sent. */
    emailAddresses?: string[];
    /** Specifies that the alert is sent to the account administrators. */
    emailAccountAdmins?: boolean;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. */
    storageEndpoint?: string;
    /** Specifies the identifier key of the Threat Detection audit storage account. */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the Threat Detection audit logs. */
    retentionDays?: number;
    /**
     * Specifies the UTC creation time of the policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
};

/** A list of the managed database's security alert policies. */
export declare interface ManagedDatabaseSecurityAlertPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedDatabaseSecurityAlertPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedDatabaseSensitivityLabels. */
export declare interface ManagedDatabaseSensitivityLabels {
    /**
     * Gets the sensitivity labels of a given database
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams): PagedAsyncIterableIterator<SensitivityLabel>;
    /**
     * Gets the sensitivity labels of a given database
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams): PagedAsyncIterableIterator<SensitivityLabel>;
    /**
     * Gets the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param sensitivityLabelSource The source of the sensitivity label.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: SensitivityLabelSource, options?: ManagedDatabaseSensitivityLabelsGetOptionalParams): Promise<ManagedDatabaseSensitivityLabelsGetResponse>;
    /**
     * Creates or updates the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param parameters The column sensitivity label resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: SensitivityLabel, options?: ManagedDatabaseSensitivityLabelsCreateOrUpdateOptionalParams): Promise<ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>;
    /**
     * Deletes the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: ManagedDatabaseSensitivityLabelsDeleteOptionalParams): Promise<void>;
    /**
     * Disables sensitivity recommendations on a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    disableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: ManagedDatabaseSensitivityLabelsDisableRecommendationOptionalParams): Promise<void>;
    /**
     * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
     * columns)
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    enableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: ManagedDatabaseSensitivityLabelsEnableRecommendationOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse = SensitivityLabel;

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsDisableRecommendationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsEnableRecommendationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseSensitivityLabelsGetResponse = SensitivityLabel;

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listCurrentByDatabaseNext operation. */
export declare type ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listCurrentByDatabase operation. */
export declare type ManagedDatabaseSensitivityLabelsListCurrentByDatabaseResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
    /** Specifies whether to include disabled recommendations or not. */
    includeDisabledRecommendations?: boolean;
    skipToken?: string;
}

/** Contains response data for the listRecommendedByDatabaseNext operation. */
export declare type ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
    /** Specifies whether to include disabled recommendations or not. */
    includeDisabledRecommendations?: boolean;
    skipToken?: string;
}

/** Contains response data for the listRecommendedByDatabase operation. */
export declare type ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface ManagedDatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabasesGetResponse = ManagedDatabase;

/** Optional parameters. */
export declare interface ManagedDatabasesListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedDatabasesListByInstanceNextResponse = ManagedDatabaseListResult;

/** Optional parameters. */
export declare interface ManagedDatabasesListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedDatabasesListByInstanceResponse = ManagedDatabaseListResult;

/** Optional parameters. */
export declare interface ManagedDatabasesListInaccessibleByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInaccessibleByInstanceNext operation. */
export declare type ManagedDatabasesListInaccessibleByInstanceNextResponse = ManagedDatabaseListResult;

/** Optional parameters. */
export declare interface ManagedDatabasesListInaccessibleByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listInaccessibleByInstance operation. */
export declare type ManagedDatabasesListInaccessibleByInstanceResponse = ManagedDatabaseListResult;

/**
 * Defines values for ManagedDatabaseStatus. \
 * {@link KnownManagedDatabaseStatus} can be used interchangeably with ManagedDatabaseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Online** \
 * **Offline** \
 * **Shutdown** \
 * **Creating** \
 * **Inaccessible** \
 * **Restoring** \
 * **Updating**
 */
export declare type ManagedDatabaseStatus = string;

/** Optional parameters. */
export declare interface ManagedDatabasesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ManagedDatabasesUpdateResponse = ManagedDatabase;

/** An managed database update. */
export declare interface ManagedDatabaseUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Collation of the managed database. */
    collation?: string;
    /**
     * Status of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: ManagedDatabaseStatus;
    /**
     * Creation date of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * Earliest restore point in time for point in time restore.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestorePoint?: Date;
    /** Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /**
     * Geo paired region.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultSecondaryLocation?: string;
    /** Collation of the metadata catalog. */
    catalogCollation?: CatalogCollationType;
    /** Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. */
    createMode?: ManagedDatabaseCreateMode;
    /** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. */
    storageContainerUri?: string;
    /** The resource identifier of the source database associated with create operation of this database. */
    sourceDatabaseId?: string;
    /** The restorable dropped database resource id to restore when creating this database. */
    restorableDroppedDatabaseId?: string;
    /** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token. */
    storageContainerSasToken?: string;
    /**
     * Instance Failover Group resource identifier that this managed database belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly failoverGroupId?: string;
    /** The resource identifier of the recoverable database associated with create operation of this database. */
    recoverableDatabaseId?: string;
    /** The name of the Long Term Retention backup to be used for restore of this managed database. */
    longTermRetentionBackupResourceId?: string;
}

/** Interface representing a ManagedDatabaseVulnerabilityAssessmentRuleBaselines. */
export declare interface ManagedDatabaseVulnerabilityAssessmentRuleBaselines {
    /**
     * Gets a database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, options?: ManagedDatabaseVulnerabilityAssessmentRuleBaselinesGetOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentRuleBaselinesGetResponse>;
    /**
     * Creates or updates a database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param parameters The requested rule baseline resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, parameters: DatabaseVulnerabilityAssessmentRuleBaseline, options?: ManagedDatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateResponse>;
    /**
     * Removes the database's vulnerability assessment rule baseline.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment rule baseline is
     *                     defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param ruleId The vulnerability assessment rule ID.
     * @param baselineName The name of the vulnerability assessment rule baseline (default implies a
     *                     baseline on a database level rule and master for server level rule).
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, ruleId: string, baselineName: VulnerabilityAssessmentPolicyBaselineName, options?: ManagedDatabaseVulnerabilityAssessmentRuleBaselinesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentRuleBaselinesCreateOrUpdateResponse = DatabaseVulnerabilityAssessmentRuleBaseline;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentRuleBaselinesDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentRuleBaselinesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentRuleBaselinesGetResponse = DatabaseVulnerabilityAssessmentRuleBaseline;

/** Interface representing a ManagedDatabaseVulnerabilityAssessments. */
export declare interface ManagedDatabaseVulnerabilityAssessments {
    /**
     * Lists the vulnerability assessments of a managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedDatabaseVulnerabilityAssessmentsListByDatabaseOptionalParams): PagedAsyncIterableIterator<DatabaseVulnerabilityAssessment>;
    /**
     * Gets the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ManagedDatabaseVulnerabilityAssessmentsGetOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentsGetResponse>;
    /**
     * Creates or updates the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param parameters The requested resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, parameters: DatabaseVulnerabilityAssessment, options?: ManagedDatabaseVulnerabilityAssessmentsCreateOrUpdateOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentsCreateOrUpdateResponse>;
    /**
     * Removes the database's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ManagedDatabaseVulnerabilityAssessmentsDeleteOptionalParams): Promise<void>;
}

/** Interface representing a ManagedDatabaseVulnerabilityAssessmentScans. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScans {
    /**
     * Lists the vulnerability assessment scans of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ManagedDatabaseVulnerabilityAssessmentScansListByDatabaseOptionalParams): PagedAsyncIterableIterator<VulnerabilityAssessmentScanRecord>;
    /**
     * Gets a vulnerability assessment scan record of a database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: ManagedDatabaseVulnerabilityAssessmentScansGetOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentScansGetResponse>;
    /**
     * Executes a Vulnerability Assessment database scan.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    beginInitiateScan(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: ManagedDatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Executes a Vulnerability Assessment database scan.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id of the scan to retrieve.
     * @param options The options parameters.
     */
    beginInitiateScanAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: ManagedDatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams): Promise<void>;
    /**
     * Convert an existing scan result to a human readable format. If already exists nothing happens
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the scanned database.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param scanId The vulnerability assessment scan Id.
     * @param options The options parameters.
     */
    export(resourceGroupName: string, managedInstanceName: string, databaseName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, scanId: string, options?: ManagedDatabaseVulnerabilityAssessmentScansExportOptionalParams): Promise<ManagedDatabaseVulnerabilityAssessmentScansExportResponse>;
}

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScansExportOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the export operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentScansExportResponse = DatabaseVulnerabilityAssessmentScansExport;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScansGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentScansGetResponse = VulnerabilityAssessmentScanRecord;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScansInitiateScanOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScansListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentScansListByDatabaseNextResponse = VulnerabilityAssessmentScanRecordListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentScansListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentScansListByDatabaseResponse = VulnerabilityAssessmentScanRecordListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentsCreateOrUpdateResponse = DatabaseVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentsGetResponse = DatabaseVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentsListByDatabaseNextResponse = DatabaseVulnerabilityAssessmentListResult;

/** Optional parameters. */
export declare interface ManagedDatabaseVulnerabilityAssessmentsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ManagedDatabaseVulnerabilityAssessmentsListByDatabaseResponse = DatabaseVulnerabilityAssessmentListResult;

/** An Azure SQL managed instance. */
export declare type ManagedInstance = TrackedResource & {
    /** The Azure Active Directory identity of the managed instance. */
    identity?: ResourceIdentity;
    /** Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5 */
    sku?: Sku;
    /**
     * Specifies the mode of database creation.
     *
     * Default: Regular instance creation.
     *
     * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
     */
    managedInstanceCreateMode?: ManagedServerCreateMode;
    /**
     * The fully qualified domain name of the managed instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fullyQualifiedDomainName?: string;
    /** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
    administratorLogin?: string;
    /** The administrator login password (required for managed instance creation). */
    administratorLoginPassword?: string;
    /** Subnet resource ID for the managed instance. */
    subnetId?: string;
    /**
     * The state of the managed instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /** The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). */
    licenseType?: ManagedInstanceLicenseType;
    /** The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. */
    vCores?: number;
    /** Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only. */
    storageSizeInGB?: number;
    /** Collation of the managed instance. */
    collation?: string;
    /**
     * The Dns Zone that the managed instance is in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dnsZone?: string;
    /** The resource id of another managed instance whose DNS zone this managed instance will share after creation. */
    dnsZonePartner?: string;
    /** Whether or not the public data endpoint is enabled. */
    publicDataEndpointEnabled?: boolean;
    /** The resource identifier of the source managed instance associated with create operation of this instance. */
    sourceManagedInstanceId?: string;
    /** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /** Connection type used for connecting to the instance. */
    proxyOverride?: ManagedInstanceProxyOverride;
    /**
     * Id of the timezone. Allowed values are timezones supported by Windows.
     * Windows keeps details on supported timezones, including the id, in registry under
     * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
     * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
     * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
     */
    timezoneId?: string;
    /** The Id of the instance pool this managed server belongs to. */
    instancePoolId?: string;
    /** Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2' */
    minimalTlsVersion?: string;
};

/** An Azure SQL managed instance administrator. */
export declare type ManagedInstanceAdministrator = ProxyResource & {
    /** Type of the managed instance administrator. */
    administratorType?: ManagedInstanceAdministratorType;
    /** Login name of the managed instance administrator. */
    login?: string;
    /** SID (object ID) of the managed instance administrator. */
    sid?: string;
    /** Tenant ID of the managed instance administrator. */
    tenantId?: string;
};

/** A list of managed instance administrators. */
export declare interface ManagedInstanceAdministratorListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceAdministrator[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceAdministrators. */
export declare interface ManagedInstanceAdministrators {
    /**
     * Gets a list of managed instance administrators.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceAdministratorsListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceAdministrator>;
    /**
     * Gets a managed instance administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceAdministratorsGetOptionalParams): Promise<ManagedInstanceAdministratorsGetResponse>;
    /**
     * Creates or updates a managed instance administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested administrator parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstanceAdministrator, options?: ManagedInstanceAdministratorsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstanceAdministratorsCreateOrUpdateResponse>, ManagedInstanceAdministratorsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a managed instance administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested administrator parameters.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstanceAdministrator, options?: ManagedInstanceAdministratorsCreateOrUpdateOptionalParams): Promise<ManagedInstanceAdministratorsCreateOrUpdateResponse>;
    /**
     * Deletes a managed instance administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceAdministratorsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a managed instance administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceAdministratorsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedInstanceAdministratorsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstanceAdministratorsCreateOrUpdateResponse = ManagedInstanceAdministrator;

/** Optional parameters. */
export declare interface ManagedInstanceAdministratorsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedInstanceAdministratorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceAdministratorsGetResponse = ManagedInstanceAdministrator;

/** Optional parameters. */
export declare interface ManagedInstanceAdministratorsListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedInstanceAdministratorsListByInstanceNextResponse = ManagedInstanceAdministratorListResult;

/** Optional parameters. */
export declare interface ManagedInstanceAdministratorsListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedInstanceAdministratorsListByInstanceResponse = ManagedInstanceAdministratorListResult;

/**
 * Defines values for ManagedInstanceAdministratorType. \
 * {@link KnownManagedInstanceAdministratorType} can be used interchangeably with ManagedInstanceAdministratorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ActiveDirectory**
 */
export declare type ManagedInstanceAdministratorType = string;

/** The managed server capability */
export declare interface ManagedInstanceEditionCapability {
    /**
     * The managed server version name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The supported families.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedFamilies?: ManagedInstanceFamilyCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** The managed instance encryption protector. */
export declare type ManagedInstanceEncryptionProtector = ProxyResource & {
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** The name of the managed instance key. */
    serverKeyName?: string;
    /** The encryption protector type like 'ServiceManaged', 'AzureKeyVault'. */
    serverKeyType?: ServerKeyType;
    /**
     * The URI of the server key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly uri?: string;
    /**
     * Thumbprint of the server key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
};

/** A list of managed instance encryption protectors. */
export declare interface ManagedInstanceEncryptionProtectorListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceEncryptionProtector[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceEncryptionProtectors. */
export declare interface ManagedInstanceEncryptionProtectors {
    /**
     * Gets a list of managed instance encryption protectors
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceEncryptionProtector>;
    /**
     * Revalidates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param options The options parameters.
     */
    beginRevalidate(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: EncryptionProtectorName, options?: ManagedInstanceEncryptionProtectorsRevalidateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Revalidates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param options The options parameters.
     */
    beginRevalidateAndWait(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: EncryptionProtectorName, options?: ManagedInstanceEncryptionProtectorsRevalidateOptionalParams): Promise<void>;
    /**
     * Gets a managed instance encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param encryptionProtectorName The name of the encryption protector to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: EncryptionProtectorName, options?: ManagedInstanceEncryptionProtectorsGetOptionalParams): Promise<ManagedInstanceEncryptionProtectorsGetResponse>;
    /**
     * Updates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param parameters The requested encryption protector resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: EncryptionProtectorName, parameters: ManagedInstanceEncryptionProtector, options?: ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse>, ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse>>;
    /**
     * Updates an existing encryption protector.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param encryptionProtectorName The name of the encryption protector to be updated.
     * @param parameters The requested encryption protector resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: EncryptionProtectorName, parameters: ManagedInstanceEncryptionProtector, options?: ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams): Promise<ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse = ManagedInstanceEncryptionProtector;

/** Optional parameters. */
export declare interface ManagedInstanceEncryptionProtectorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceEncryptionProtectorsGetResponse = ManagedInstanceEncryptionProtector;

/** Optional parameters. */
export declare interface ManagedInstanceEncryptionProtectorsListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedInstanceEncryptionProtectorsListByInstanceNextResponse = ManagedInstanceEncryptionProtectorListResult;

/** Optional parameters. */
export declare interface ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedInstanceEncryptionProtectorsListByInstanceResponse = ManagedInstanceEncryptionProtectorListResult;

/** Optional parameters. */
export declare interface ManagedInstanceEncryptionProtectorsRevalidateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** The managed server family capability. */
export declare interface ManagedInstanceFamilyCapability {
    /**
     * Family name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * SKU name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: string;
    /**
     * List of supported license types.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedLicenseTypes?: LicenseTypeCapability[];
    /**
     * List of supported virtual cores values.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedVcoresValues?: ManagedInstanceVcoresCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** A managed instance key. */
export declare type ManagedInstanceKey = ProxyResource & {
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** The key type like 'ServiceManaged', 'AzureKeyVault'. */
    serverKeyType?: ServerKeyType;
    /** The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required. */
    uri?: string;
    /**
     * Thumbprint of the key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly thumbprint?: string;
    /**
     * The key creation date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
};

/** A list of managed instance keys. */
export declare interface ManagedInstanceKeyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceKey[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceKeys. */
export declare interface ManagedInstanceKeys {
    /**
     * Gets a list of managed instance keys.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceKeysListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceKey>;
    /**
     * Gets a managed instance key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param keyName The name of the managed instance key to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: ManagedInstanceKeysGetOptionalParams): Promise<ManagedInstanceKeysGetResponse>;
    /**
     * Creates or updates a managed instance key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param keyName The name of the managed instance key to be operated on (updated or created).
     * @param parameters The requested managed instance key resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, keyName: string, parameters: ManagedInstanceKey, options?: ManagedInstanceKeysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstanceKeysCreateOrUpdateResponse>, ManagedInstanceKeysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a managed instance key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param keyName The name of the managed instance key to be operated on (updated or created).
     * @param parameters The requested managed instance key resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, keyName: string, parameters: ManagedInstanceKey, options?: ManagedInstanceKeysCreateOrUpdateOptionalParams): Promise<ManagedInstanceKeysCreateOrUpdateResponse>;
    /**
     * Deletes the managed instance key with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param keyName The name of the managed instance key to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: ManagedInstanceKeysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the managed instance key with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param keyName The name of the managed instance key to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, managedInstanceName: string, keyName: string, options?: ManagedInstanceKeysDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedInstanceKeysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstanceKeysCreateOrUpdateResponse = ManagedInstanceKey;

/** Optional parameters. */
export declare interface ManagedInstanceKeysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedInstanceKeysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceKeysGetResponse = ManagedInstanceKey;

/** Optional parameters. */
export declare interface ManagedInstanceKeysListByInstanceNextOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedInstanceKeysListByInstanceNextResponse = ManagedInstanceKeyListResult;

/** Optional parameters. */
export declare interface ManagedInstanceKeysListByInstanceOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedInstanceKeysListByInstanceResponse = ManagedInstanceKeyListResult;

/**
 * Defines values for ManagedInstanceLicenseType. \
 * {@link KnownManagedInstanceLicenseType} can be used interchangeably with ManagedInstanceLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LicenseIncluded** \
 * **BasePrice**
 */
export declare type ManagedInstanceLicenseType = string;

/** A list of managed instances. */
export declare interface ManagedInstanceListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstance[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A long term retention backup for a managed database. */
export declare type ManagedInstanceLongTermRetentionBackup = ProxyResource & {
    /**
     * The managed instance that the backup database belongs to.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedInstanceName?: string;
    /**
     * The create time of the instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedInstanceCreateTime?: Date;
    /**
     * The name of the database the backup belong to
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The delete time of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseDeletionTime?: Date;
    /**
     * The time the backup was taken
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backupTime?: Date;
    /**
     * The time the long term retention backup will expire.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backupExpirationTime?: Date;
};

/** A list of long term retention backups for managed database(s). */
export declare interface ManagedInstanceLongTermRetentionBackupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceLongTermRetentionBackup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceLongTermRetentionPolicies. */
export declare interface ManagedInstanceLongTermRetentionPolicies {
    /**
     * Gets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: ManagedInstanceLongTermRetentionPoliciesListByDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionPolicy>;
    /**
     * Gets a managed database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedInstanceLongTermRetentionPolicyName, options?: ManagedInstanceLongTermRetentionPoliciesGetOptionalParams): Promise<ManagedInstanceLongTermRetentionPoliciesGetResponse>;
    /**
     * Sets a managed database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedInstanceLongTermRetentionPolicyName, parameters: ManagedInstanceLongTermRetentionPolicy, options?: ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>, ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>>;
    /**
     * Sets a managed database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param databaseName The name of the database.
     * @param policyName The policy name. Should always be Default.
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, databaseName: string, policyName: ManagedInstanceLongTermRetentionPolicyName, parameters: ManagedInstanceLongTermRetentionPolicy, options?: ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse = ManagedInstanceLongTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedInstanceLongTermRetentionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceLongTermRetentionPoliciesGetResponse = ManagedInstanceLongTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type ManagedInstanceLongTermRetentionPoliciesListByDatabaseNextResponse = ManagedInstanceLongTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface ManagedInstanceLongTermRetentionPoliciesListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ManagedInstanceLongTermRetentionPoliciesListByDatabaseResponse = ManagedInstanceLongTermRetentionPolicyListResult;

/** A long term retention policy. */
export declare type ManagedInstanceLongTermRetentionPolicy = ProxyResource & {
    /** The weekly retention policy for an LTR backup in an ISO 8601 format. */
    weeklyRetention?: string;
    /** The monthly retention policy for an LTR backup in an ISO 8601 format. */
    monthlyRetention?: string;
    /** The yearly retention policy for an LTR backup in an ISO 8601 format. */
    yearlyRetention?: string;
    /** The week of year to take the yearly backup in an ISO 8601 format. */
    weekOfYear?: number;
};

/** A list of long term retention policies. */
export declare interface ManagedInstanceLongTermRetentionPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceLongTermRetentionPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for ManagedInstanceLongTermRetentionPolicyName. \
 * {@link KnownManagedInstanceLongTermRetentionPolicyName} can be used interchangeably with ManagedInstanceLongTermRetentionPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type ManagedInstanceLongTermRetentionPolicyName = string;

/** A managed instance operation. */
export declare type ManagedInstanceOperation = ProxyResource & {
    /**
     * The name of the managed instance the operation is being performed on.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly managedInstanceName?: string;
    /**
     * The name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The friendly name of operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationFriendlyName?: string;
    /**
     * The percentage of the operation completed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The operation start time.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The operation state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: ManagementOperationState;
    /**
     * The operation error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorCode?: number;
    /**
     * The operation error description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorDescription?: string;
    /**
     * The operation error severity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorSeverity?: number;
    /**
     * Whether or not the error is a user error.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isUserError?: boolean;
    /**
     * The estimated completion time of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly estimatedCompletionTime?: Date;
    /**
     * The operation description.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Whether the operation can be cancelled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isCancellable?: boolean;
};

/** The response to a list managed instance operations request */
export declare interface ManagedInstanceOperationListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceOperation[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceOperations. */
export declare interface ManagedInstanceOperations {
    /**
     * Gets a list of operations performed on the managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByManagedInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceOperation>;
    /**
     * Cancels the asynchronous operation on the managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param operationId
     * @param options The options parameters.
     */
    cancel(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: ManagedInstanceOperationsCancelOptionalParams): Promise<void>;
    /**
     * Gets a management operation on a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param operationId
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: ManagedInstanceOperationsGetOptionalParams): Promise<ManagedInstanceOperationsGetResponse>;
}

/** Optional parameters. */
export declare interface ManagedInstanceOperationsCancelOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedInstanceOperationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceOperationsGetResponse = ManagedInstanceOperation;

/** Optional parameters. */
export declare interface ManagedInstanceOperationsListByManagedInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagedInstanceNext operation. */
export declare type ManagedInstanceOperationsListByManagedInstanceNextResponse = ManagedInstanceOperationListResult;

/** Optional parameters. */
export declare interface ManagedInstanceOperationsListByManagedInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByManagedInstance operation. */
export declare type ManagedInstanceOperationsListByManagedInstanceResponse = ManagedInstanceOperationListResult;

/** Pairs of Managed Instances in the failover group. */
export declare interface ManagedInstancePairInfo {
    /** Id of Primary Managed Instance in pair. */
    primaryManagedInstanceId?: string;
    /** Id of Partner Managed Instance in pair. */
    partnerManagedInstanceId?: string;
}

/**
 * Defines values for ManagedInstanceProxyOverride. \
 * {@link KnownManagedInstanceProxyOverride} can be used interchangeably with ManagedInstanceProxyOverride,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Proxy** \
 * **Redirect** \
 * **Default**
 */
export declare type ManagedInstanceProxyOverride = string;

/** Interface representing a ManagedInstances. */
export declare interface ManagedInstances {
    /**
     * Gets a list of all managed instances in an instance pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The instance pool name.
     * @param options The options parameters.
     */
    listByInstancePool(resourceGroupName: string, instancePoolName: string, options?: ManagedInstancesListByInstancePoolOptionalParams): PagedAsyncIterableIterator<ManagedInstance>;
    /**
     * Gets a list of managed instances in a resource group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ManagedInstancesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ManagedInstance>;
    /**
     * Gets a list of all managed instances in the subscription.
     * @param options The options parameters.
     */
    list(options?: ManagedInstancesListOptionalParams): PagedAsyncIterableIterator<ManagedInstance>;
    /**
     * Gets a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstancesGetOptionalParams): Promise<ManagedInstancesGetResponse>;
    /**
     * Creates or updates a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstance, options?: ManagedInstancesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstancesCreateOrUpdateResponse>, ManagedInstancesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstance, options?: ManagedInstancesCreateOrUpdateOptionalParams): Promise<ManagedInstancesCreateOrUpdateResponse>;
    /**
     * Deletes a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstancesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstancesDeleteOptionalParams): Promise<void>;
    /**
     * Updates a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstanceUpdate, options?: ManagedInstancesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedInstancesUpdateResponse>, ManagedInstancesUpdateResponse>>;
    /**
     * Updates a managed instance.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, managedInstanceName: string, parameters: ManagedInstanceUpdate, options?: ManagedInstancesUpdateOptionalParams): Promise<ManagedInstancesUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedInstancesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstancesCreateOrUpdateResponse = ManagedInstance;

/** Optional parameters. */
export declare interface ManagedInstancesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ManagedInstancesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstancesGetResponse = ManagedInstance;

/** Optional parameters. */
export declare interface ManagedInstancesListByInstancePoolNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstancePoolNext operation. */
export declare type ManagedInstancesListByInstancePoolNextResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesListByInstancePoolOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstancePool operation. */
export declare type ManagedInstancesListByInstancePoolResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ManagedInstancesListByResourceGroupNextResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ManagedInstancesListByResourceGroupResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ManagedInstancesListNextResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ManagedInstancesListResponse = ManagedInstanceListResult;

/** Optional parameters. */
export declare interface ManagedInstancesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ManagedInstancesUpdateResponse = ManagedInstance;

/** Interface representing a ManagedInstanceTdeCertificates. */
export declare interface ManagedInstanceTdeCertificates {
    /**
     * Creates a TDE certificate for a given server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested TDE certificate to be created or updated.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, managedInstanceName: string, parameters: TdeCertificate, options?: ManagedInstanceTdeCertificatesCreateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Creates a TDE certificate for a given server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param parameters The requested TDE certificate to be created or updated.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, managedInstanceName: string, parameters: TdeCertificate, options?: ManagedInstanceTdeCertificatesCreateOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedInstanceTdeCertificatesCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** An update request for an Azure SQL Database managed instance. */
export declare interface ManagedInstanceUpdate {
    /** Managed instance sku */
    sku?: Sku;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * Specifies the mode of database creation.
     *
     * Default: Regular instance creation.
     *
     * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
     */
    managedInstanceCreateMode?: ManagedServerCreateMode;
    /**
     * The fully qualified domain name of the managed instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fullyQualifiedDomainName?: string;
    /** Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation). */
    administratorLogin?: string;
    /** The administrator login password (required for managed instance creation). */
    administratorLoginPassword?: string;
    /** Subnet resource ID for the managed instance. */
    subnetId?: string;
    /**
     * The state of the managed instance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /** The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses). */
    licenseType?: ManagedInstanceLicenseType;
    /** The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80. */
    vCores?: number;
    /** Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only. */
    storageSizeInGB?: number;
    /** Collation of the managed instance. */
    collation?: string;
    /**
     * The Dns Zone that the managed instance is in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dnsZone?: string;
    /** The resource id of another managed instance whose DNS zone this managed instance will share after creation. */
    dnsZonePartner?: string;
    /** Whether or not the public data endpoint is enabled. */
    publicDataEndpointEnabled?: boolean;
    /** The resource identifier of the source managed instance associated with create operation of this instance. */
    sourceManagedInstanceId?: string;
    /** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
    restorePointInTime?: Date;
    /** Connection type used for connecting to the instance. */
    proxyOverride?: ManagedInstanceProxyOverride;
    /**
     * Id of the timezone. Allowed values are timezones supported by Windows.
     * Windows keeps details on supported timezones, including the id, in registry under
     * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
     * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
     * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
     */
    timezoneId?: string;
    /** The Id of the instance pool this managed server belongs to. */
    instancePoolId?: string;
    /** Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2' */
    minimalTlsVersion?: string;
}

/** The managed instance virtual cores capability. */
export declare interface ManagedInstanceVcoresCapability {
    /**
     * The virtual cores identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The virtual cores value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: number;
    /**
     * Included size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly includedMaxSize?: MaxSizeCapability;
    /**
     * Storage size ranges.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedStorageSizes?: MaxSizeRangeCapability[];
    /**
     * True if this service objective is supported for managed instances in an instance pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly instancePoolSupported?: boolean;
    /**
     * True if this service objective is supported for standalone managed instances.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly standaloneSupported?: boolean;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** The managed instance capability */
export declare interface ManagedInstanceVersionCapability {
    /**
     * The server version name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported managed instance editions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedEditions?: ManagedInstanceEditionCapability[];
    /**
     * The list of supported instance pool editions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedInstancePoolEditions?: InstancePoolEditionCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** A managed instance vulnerability assessment. */
export declare type ManagedInstanceVulnerabilityAssessment = ProxyResource & {
    /** A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/). */
    storageContainerPath?: string;
    /** A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. */
    storageContainerSasKey?: string;
    /** Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. */
    storageAccountAccessKey?: string;
    /** The recurring scans settings */
    recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
};

/** A list of the ManagedInstance's vulnerability assessments. */
export declare interface ManagedInstanceVulnerabilityAssessmentListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedInstanceVulnerabilityAssessment[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ManagedInstanceVulnerabilityAssessments. */
export declare interface ManagedInstanceVulnerabilityAssessments {
    /**
     * Gets the managed instance's vulnerability assessment policies.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance for which the vulnerability assessments
     *                            is defined.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedInstanceVulnerabilityAssessmentsListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedInstanceVulnerabilityAssessment>;
    /**
     * Gets the managed instance's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance for which the vulnerability assessment
     *                            is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ManagedInstanceVulnerabilityAssessmentsGetOptionalParams): Promise<ManagedInstanceVulnerabilityAssessmentsGetResponse>;
    /**
     * Creates or updates the managed instance's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance for which the vulnerability assessment
     *                            is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param parameters The requested resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, managedInstanceName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, parameters: ManagedInstanceVulnerabilityAssessment, options?: ManagedInstanceVulnerabilityAssessmentsCreateOrUpdateOptionalParams): Promise<ManagedInstanceVulnerabilityAssessmentsCreateOrUpdateResponse>;
    /**
     * Removes the managed instance's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance for which the vulnerability assessment
     *                            is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, managedInstanceName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ManagedInstanceVulnerabilityAssessmentsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ManagedInstanceVulnerabilityAssessmentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedInstanceVulnerabilityAssessmentsCreateOrUpdateResponse = ManagedInstanceVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ManagedInstanceVulnerabilityAssessmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ManagedInstanceVulnerabilityAssessmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedInstanceVulnerabilityAssessmentsGetResponse = ManagedInstanceVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ManagedInstanceVulnerabilityAssessmentsListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedInstanceVulnerabilityAssessmentsListByInstanceNextResponse = ManagedInstanceVulnerabilityAssessmentListResult;

/** Optional parameters. */
export declare interface ManagedInstanceVulnerabilityAssessmentsListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedInstanceVulnerabilityAssessmentsListByInstanceResponse = ManagedInstanceVulnerabilityAssessmentListResult;

/** Interface representing a ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies {
    /**
     * Gets a dropped database's short term retention policy list.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param options The options parameters.
     */
    listByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams): PagedAsyncIterableIterator<ManagedBackupShortTermRetentionPolicy>;
    /**
     * Gets a dropped database's short term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param policyName The policy name.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedShortTermRetentionPolicyName, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetOptionalParams): Promise<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param policyName The policy name. Should always be "default".
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse>, ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse>>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param policyName The policy name. Should always be "default".
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams): Promise<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param policyName The policy name. Should always be "default".
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse>, ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse>>;
    /**
     * Sets a database's long term retention policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param policyName The policy name. Should always be "default".
     * @param parameters The long term retention policy info.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedShortTermRetentionPolicyName, parameters: ManagedBackupShortTermRetentionPolicy, options?: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams): Promise<ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse = ManagedBackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse = ManagedBackupShortTermRetentionPolicy;

/** Optional parameters. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByRestorableDroppedDatabaseNext operation. */
export declare type ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse = ManagedBackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByRestorableDroppedDatabase operation. */
export declare type ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse = ManagedBackupShortTermRetentionPolicyListResult;

/** Optional parameters. */
export declare interface ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse = ManagedBackupShortTermRetentionPolicy;

/**
 * Defines values for ManagedServerCreateMode. \
 * {@link KnownManagedServerCreateMode} can be used interchangeably with ManagedServerCreateMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **PointInTimeRestore**
 */
export declare type ManagedServerCreateMode = string;

/** Interface representing a ManagedServerSecurityAlertPolicies. */
export declare interface ManagedServerSecurityAlertPolicies {
    /**
     * Get the managed server's threat detection policies.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: ManagedServerSecurityAlertPoliciesListByInstanceOptionalParams): PagedAsyncIterableIterator<ManagedServerSecurityAlertPolicy>;
    /**
     * Get a managed server's threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, options?: ManagedServerSecurityAlertPoliciesGetOptionalParams): Promise<ManagedServerSecurityAlertPoliciesGetResponse>;
    /**
     * Creates or updates a threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param parameters The managed server security alert policy.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, parameters: ManagedServerSecurityAlertPolicy, options?: ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse>, ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param parameters The managed server security alert policy.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, managedInstanceName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, parameters: ManagedServerSecurityAlertPolicy, options?: ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams): Promise<ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse = ManagedServerSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ManagedServerSecurityAlertPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ManagedServerSecurityAlertPoliciesGetResponse = ManagedServerSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ManagedServerSecurityAlertPoliciesListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type ManagedServerSecurityAlertPoliciesListByInstanceNextResponse = ManagedServerSecurityAlertPolicyListResult;

/** Optional parameters. */
export declare interface ManagedServerSecurityAlertPoliciesListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type ManagedServerSecurityAlertPoliciesListByInstanceResponse = ManagedServerSecurityAlertPolicyListResult;

/** A managed server security alert policy. */
export declare type ManagedServerSecurityAlertPolicy = ProxyResource & {
    /** Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. */
    state?: SecurityAlertPolicyState;
    /** Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action */
    disabledAlerts?: string[];
    /** Specifies an array of e-mail addresses to which the alert is sent. */
    emailAddresses?: string[];
    /** Specifies that the alert is sent to the account administrators. */
    emailAccountAdmins?: boolean;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. */
    storageEndpoint?: string;
    /** Specifies the identifier key of the Threat Detection audit storage account. */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the Threat Detection audit logs. */
    retentionDays?: number;
    /**
     * Specifies the UTC creation time of the policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
};

/** A list of the managed Server's security alert policies. */
export declare interface ManagedServerSecurityAlertPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ManagedServerSecurityAlertPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for ManagedShortTermRetentionPolicyName. \
 * {@link KnownManagedShortTermRetentionPolicyName} can be used interchangeably with ManagedShortTermRetentionPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type ManagedShortTermRetentionPolicyName = string;

/**
 * Defines values for ManagementOperationState. \
 * {@link KnownManagementOperationState} can be used interchangeably with ManagementOperationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **InProgress** \
 * **Succeeded** \
 * **Failed** \
 * **CancelInProgress** \
 * **Cancelled**
 */
export declare type ManagementOperationState = string;

/** The maximum size capability. */
export declare interface MaxSizeCapability {
    /**
     * The maximum size limit (see 'unit' for the units).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * The units that the limit is expressed in.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: MaxSizeUnit;
}

/** The maximum size range capability. */
export declare interface MaxSizeRangeCapability {
    /**
     * Minimum value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minValue?: MaxSizeCapability;
    /**
     * Maximum value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxValue?: MaxSizeCapability;
    /**
     * Scale/step size for discrete values between the minimum value and the maximum value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scaleSize?: MaxSizeCapability;
    /**
     * Size of transaction log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly logSize?: LogSizeCapability;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/**
 * Defines values for MaxSizeUnit. \
 * {@link KnownMaxSizeUnit} can be used interchangeably with MaxSizeUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Megabytes** \
 * **Gigabytes** \
 * **Terabytes** \
 * **Petabytes**
 */
export declare type MaxSizeUnit = string;

/** Database metrics. */
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
     * The time step to be used to summarize the metric values.
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

/** A metric availability value. */
export declare interface MetricAvailability {
    /**
     * The length of retention for the database metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly retention?: string;
    /**
     * The granularity of the database metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timeGrain?: string;
}

/** A database metric definition. */
export declare interface MetricDefinition {
    /**
     * The name information for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: MetricName;
    /**
     * The primary aggregation type defining how metric values are displayed.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryAggregationType?: PrimaryAggregationType;
    /**
     * The resource uri of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceUri?: string;
    /**
     * The unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: UnitDefinitionType;
    /**
     * The list of database metric availabilities for the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metricAvailabilities?: MetricAvailability[];
}

/** The response to a list database metric definitions request. */
export declare interface MetricDefinitionListResult {
    /** The list of metric definitions for the database. */
    value: MetricDefinition[];
}

/** The response to a list database metrics request. */
export declare interface MetricListResult {
    /** The list of metrics for the database. */
    value: Metric[];
}

/** A database metric name. */
export declare interface MetricName {
    /**
     * The name of the database metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
    /**
     * The friendly name of the database metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localizedValue?: string;
}

/** Represents database metrics. */
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

/** The min capacity capability */
export declare interface MinCapacityCapability {
    /**
     * Min capacity value
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: number;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** ARM Usage Name */
export declare interface Name {
    /** Usage name value */
    value?: string;
    /** Usage name localized value. */
    localizedValue?: string;
}

/** SQL REST API operation definition. */
export declare interface Operation {
    /**
     * The name of the operation being performed on this particular object.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The localized display information for this particular operation / action.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly display?: OperationDisplay;
    /**
     * The intended executor of the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly origin?: OperationOrigin;
    /**
     * Additional descriptions for the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: {
        [propertyName: string]: Record<string, unknown>;
    };
}

/** Display metadata associated with the operation. */
export declare interface OperationDisplay {
    /**
     * The localized friendly form of the resource provider name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provider?: string;
    /**
     * The localized friendly form of the resource type related to this action/operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resource?: string;
    /**
     * The localized friendly name for the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operation?: string;
    /**
     * The localized friendly description for the operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
}

/** The impact of an operation, both in absolute and relative terms. */
export declare interface OperationImpact {
    /**
     * The name of the impact dimension.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The unit in which estimated impact to dimension is measured.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * The absolute impact to dimension.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changeValueAbsolute?: number;
    /**
     * The relative impact to dimension (null if not applicable)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changeValueRelative?: number;
}

/** Result of the request to list SQL operations. */
export declare interface OperationListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Operation[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for OperationOrigin. \
 * {@link KnownOperationOrigin} can be used interchangeably with OperationOrigin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system**
 */
export declare type OperationOrigin = string;

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available SQL Rest API operations.
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

/** Partner server information for the failover group. */
export declare interface PartnerInfo {
    /** Resource identifier of the partner server. */
    id: string;
    /**
     * Geo location of the partner server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Replication role of the partner server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationRole?: FailoverGroupReplicationRole;
}

/** Partner region information for the failover group. */
export declare interface PartnerRegionInfo {
    /** Geo location of the partner managed instances. */
    location?: string;
    /**
     * Replication role of the partner managed instances.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationRole?: InstanceFailoverGroupReplicationRole;
}

/**
 * Defines values for PauseDelayTimeUnit. \
 * {@link KnownPauseDelayTimeUnit} can be used interchangeably with PauseDelayTimeUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Minutes**
 */
export declare type PauseDelayTimeUnit = string;

/** The performance level capability. */
export declare interface PerformanceLevelCapability {
    /**
     * Performance level value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: number;
    /**
     * Unit type used to measure performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: PerformanceLevelUnit;
}

/**
 * Defines values for PerformanceLevelUnit. \
 * {@link KnownPerformanceLevelUnit} can be used interchangeably with PerformanceLevelUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DTU** \
 * **VCores**
 */
export declare type PerformanceLevelUnit = string;

/**
 * Defines values for PrimaryAggregationType. \
 * {@link KnownPrimaryAggregationType} can be used interchangeably with PrimaryAggregationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Average** \
 * **Count** \
 * **Minimum** \
 * **Maximum** \
 * **Total**
 */
export declare type PrimaryAggregationType = string;

/** A private endpoint connection */
export declare type PrivateEndpointConnection = ProxyResource & {
    /** Private endpoint which the connection belongs to. */
    privateEndpoint?: PrivateEndpointProperty;
    /** Connection state of the private endpoint connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
    /**
     * State of the private endpoint connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
};

/** A list of private endpoint connections. */
export declare interface PrivateEndpointConnectionListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: PrivateEndpointConnection[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Properties of a private endpoint connection. */
export declare interface PrivateEndpointConnectionProperties {
    /** Private endpoint which the connection belongs to. */
    privateEndpoint?: PrivateEndpointProperty;
    /** Connection state of the private endpoint connection. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStatePropertyAutoGenerated;
    /**
     * State of the private endpoint connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: PrivateEndpointProvisioningState;
}

/** Interface representing a PrivateEndpointConnections. */
export declare interface PrivateEndpointConnections {
    /**
     * Gets all private endpoint connections on a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: PrivateEndpointConnectionsListByServerOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
    /**
     * Gets a private endpoint connection.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param privateEndpointConnectionName The name of the private endpoint connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Approve or reject a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param privateEndpointConnectionName
     * @param parameters A private endpoint connection
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>, PrivateEndpointConnectionsCreateOrUpdateResponse>>;
    /**
     * Approve or reject a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param privateEndpointConnectionName
     * @param parameters A private endpoint connection
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, parameters: PrivateEndpointConnection, options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse>;
    /**
     * Deletes a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param privateEndpointConnectionName
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a private endpoint connection with a given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param privateEndpointConnectionName
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection;

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
export declare type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type PrivateEndpointConnectionsListByServerNextResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export declare interface PrivateEndpointConnectionsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type PrivateEndpointConnectionsListByServerResponse = PrivateEndpointConnectionListResult;

export declare interface PrivateEndpointProperty {
    /** Resource id of the private endpoint. */
    id?: string;
}

/**
 * Defines values for PrivateEndpointProvisioningState. \
 * {@link KnownPrivateEndpointProvisioningState} can be used interchangeably with PrivateEndpointProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Approving** \
 * **Ready** \
 * **Dropping** \
 * **Failed** \
 * **Rejecting**
 */
export declare type PrivateEndpointProvisioningState = string;

/** A private link resource */
export declare type PrivateLinkResource = ProxyResource & {
    /**
     * The private link resource group id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: PrivateLinkResourceProperties;
};

/** A list of private link resources */
export declare interface PrivateLinkResourceListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: PrivateLinkResource[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Properties of a private link resource. */
export declare interface PrivateLinkResourceProperties {
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
}

/** Interface representing a PrivateLinkResources. */
export declare interface PrivateLinkResources {
    /**
     * Gets the private link resources for SQL server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: PrivateLinkResourcesListByServerOptionalParams): PagedAsyncIterableIterator<PrivateLinkResource>;
    /**
     * Gets a private link resource for SQL server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param groupName The name of the private link resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, groupName: string, options?: PrivateLinkResourcesGetOptionalParams): Promise<PrivateLinkResourcesGetResponse>;
}

/** Optional parameters. */
export declare interface PrivateLinkResourcesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateLinkResourcesGetResponse = PrivateLinkResource;

/** Optional parameters. */
export declare interface PrivateLinkResourcesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type PrivateLinkResourcesListByServerNextResponse = PrivateLinkResourceListResult;

/** Optional parameters. */
export declare interface PrivateLinkResourcesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type PrivateLinkResourcesListByServerResponse = PrivateLinkResourceListResult;

/**
 * Defines values for PrivateLinkServiceConnectionStateActionsRequire. \
 * {@link KnownPrivateLinkServiceConnectionStateActionsRequire} can be used interchangeably with PrivateLinkServiceConnectionStateActionsRequire,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**
 */
export declare type PrivateLinkServiceConnectionStateActionsRequire = string;

export declare interface PrivateLinkServiceConnectionStateProperty {
    /** The private link service connection status. */
    status: string;
    /** The private link service connection description. */
    description: string;
    /**
     * The actions required for private link service connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actionsRequired?: string;
}

export declare interface PrivateLinkServiceConnectionStatePropertyAutoGenerated {
    /** The private link service connection status. */
    status: PrivateLinkServiceConnectionStateStatus;
    /** The private link service connection description. */
    description: string;
    /**
     * The actions required for private link service connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actionsRequired?: PrivateLinkServiceConnectionStateActionsRequire;
}

/**
 * Defines values for PrivateLinkServiceConnectionStateStatus. \
 * {@link KnownPrivateLinkServiceConnectionStateStatus} can be used interchangeably with PrivateLinkServiceConnectionStateStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Approved** \
 * **Pending** \
 * **Rejected** \
 * **Disconnected**
 */
export declare type PrivateLinkServiceConnectionStateStatus = string;

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Created** \
 * **InProgress** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export declare type ProvisioningState = string;

/** ARM proxy resource. */
export declare type ProxyResource = Resource & {};

/**
 * Defines values for ReadOnlyEndpointFailoverPolicy. \
 * {@link KnownReadOnlyEndpointFailoverPolicy} can be used interchangeably with ReadOnlyEndpointFailoverPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export declare type ReadOnlyEndpointFailoverPolicy = string;

/** The read scale capability. */
export declare interface ReadScaleCapability {
    /**
     * The maximum number of read scale replicas.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxNumberOfReplicas?: number;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/**
 * Defines values for ReadWriteEndpointFailoverPolicy. \
 * {@link KnownReadWriteEndpointFailoverPolicy} can be used interchangeably with ReadWriteEndpointFailoverPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Manual** \
 * **Automatic**
 */
export declare type ReadWriteEndpointFailoverPolicy = string;

/** Represents a recommended elastic pool. */
export declare type RecommendedElasticPool = ProxyResource & {
    /**
     * The edition of the recommended elastic pool. The ElasticPoolEdition enumeration contains all the valid editions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseEdition?: ElasticPoolEdition;
    /** The DTU for the recommended elastic pool. */
    dtu?: number;
    /** The minimum DTU for the database. */
    databaseDtuMin?: number;
    /** The maximum DTU for the database. */
    databaseDtuMax?: number;
    /** Gets storage size in megabytes. */
    storageMB?: number;
    /**
     * The observation period start (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly observationPeriodStart?: Date;
    /**
     * The observation period start (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly observationPeriodEnd?: Date;
    /**
     * Gets maximum observed DTU.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxObservedDtu?: number;
    /**
     * Gets maximum observed storage in megabytes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxObservedStorageMB?: number;
    /**
     * The list of databases in this pool. Expanded property
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databases?: TrackedResource[];
    /**
     * The list of databases housed in the server. Expanded property
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly metrics?: RecommendedElasticPoolMetric[];
};

/** Represents the response to a list recommended elastic pool metrics request. */
export declare interface RecommendedElasticPoolListMetricsResult {
    /** The list of recommended elastic pools metrics. */
    value: RecommendedElasticPoolMetric[];
}

/** Represents the response to a list recommended elastic pool request. */
export declare interface RecommendedElasticPoolListResult {
    /** The list of recommended elastic pools hosted in the server. */
    value: RecommendedElasticPool[];
}

/** Represents recommended elastic pool metric. */
export declare interface RecommendedElasticPoolMetric {
    /** The time of metric (ISO8601 format). */
    dateTime?: Date;
    /** Gets or sets the DTUs (Database Transaction Units). See https://azure.microsoft.com/documentation/articles/sql-database-what-is-a-dtu/ */
    dtu?: number;
    /** Gets or sets size in gigabytes. */
    sizeGB?: number;
}

/** Interface representing a RecommendedElasticPools. */
export declare interface RecommendedElasticPools {
    /**
     * Returns recommended elastic pools.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: RecommendedElasticPoolsListByServerOptionalParams): PagedAsyncIterableIterator<RecommendedElasticPool>;
    /**
     * Returns recommended elastic pool metrics.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
     * @param options The options parameters.
     */
    listMetrics(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: RecommendedElasticPoolsListMetricsOptionalParams): PagedAsyncIterableIterator<RecommendedElasticPoolMetric>;
    /**
     * Gets a recommended elastic pool.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, recommendedElasticPoolName: string, options?: RecommendedElasticPoolsGetOptionalParams): Promise<RecommendedElasticPoolsGetResponse>;
}

/** Optional parameters. */
export declare interface RecommendedElasticPoolsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RecommendedElasticPoolsGetResponse = RecommendedElasticPool;

/** Optional parameters. */
export declare interface RecommendedElasticPoolsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type RecommendedElasticPoolsListByServerResponse = RecommendedElasticPoolListResult;

/** Optional parameters. */
export declare interface RecommendedElasticPoolsListMetricsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMetrics operation. */
export declare type RecommendedElasticPoolsListMetricsResponse = RecommendedElasticPoolListMetricsResult;

/** Represents a database recommended index. */
export declare type RecommendedIndex = ProxyResource & {
    /**
     * The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly action?: RecommendedIndexAction;
    /**
     * The current recommendation state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: RecommendedIndexState;
    /**
     * The UTC datetime showing when this resource was created (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly created?: Date;
    /**
     * The UTC datetime of when was this resource last changed (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModified?: Date;
    /**
     * The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly indexType?: RecommendedIndexType;
    /**
     * The schema where table to build index over resides
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly schema?: string;
    /**
     * The table on which to build index.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly table?: string;
    /**
     * Columns over which to build index
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly columns?: string[];
    /**
     * The list of column names to be included in the index
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly includedColumns?: string[];
    /**
     * The full build index script
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly indexScript?: string;
    /**
     * The estimated impact of doing recommended index action.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly estimatedImpact?: OperationImpact[];
    /**
     * The values reported after index action is complete.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly reportedImpact?: OperationImpact[];
};

/** Defines values for RecommendedIndexAction. */
export declare type RecommendedIndexAction = "Create" | "Drop" | "Rebuild";

/** Defines values for RecommendedIndexState. */
export declare type RecommendedIndexState = "Active" | "Pending" | "Executing" | "Verifying" | "Pending Revert" | "Reverting" | "Reverted" | "Ignored" | "Expired" | "Blocked" | "Success";

/** Defines values for RecommendedIndexType. */
export declare type RecommendedIndexType = "CLUSTERED" | "NONCLUSTERED" | "COLUMNSTORE" | "CLUSTERED COLUMNSTORE";

/** A recoverable database */
export declare type RecoverableDatabase = ProxyResource & {
    /**
     * The edition of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly edition?: string;
    /**
     * The service level objective name of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceLevelObjective?: string;
    /**
     * The elastic pool name of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly elasticPoolName?: string;
    /**
     * The last available backup date of the database (ISO8601 format)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAvailableBackupDate?: Date;
};

/** The response to a list recoverable databases request */
export declare interface RecoverableDatabaseListResult {
    /** A list of recoverable databases */
    value: RecoverableDatabase[];
}

/** Interface representing a RecoverableDatabases. */
export declare interface RecoverableDatabases {
    /**
     * Gets a list of recoverable databases
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: RecoverableDatabasesListByServerOptionalParams): PagedAsyncIterableIterator<RecoverableDatabase>;
    /**
     * Gets a recoverable database, which is a resource representing a database's geo backup
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options?: RecoverableDatabasesGetOptionalParams): Promise<RecoverableDatabasesGetResponse>;
}

/** Optional parameters. */
export declare interface RecoverableDatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RecoverableDatabasesGetResponse = RecoverableDatabase;

/** Optional parameters. */
export declare interface RecoverableDatabasesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type RecoverableDatabasesListByServerResponse = RecoverableDatabaseListResult;

/** A recoverable managed database resource. */
export declare type RecoverableManagedDatabase = ProxyResource & {
    /**
     * The last available backup date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAvailableBackupDate?: string;
};

/** A list of recoverable managed databases. */
export declare interface RecoverableManagedDatabaseListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: RecoverableManagedDatabase[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a RecoverableManagedDatabases. */
export declare interface RecoverableManagedDatabases {
    /**
     * Gets a list of recoverable managed databases.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: RecoverableManagedDatabasesListByInstanceOptionalParams): PagedAsyncIterableIterator<RecoverableManagedDatabase>;
    /**
     * Gets a recoverable managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param recoverableDatabaseName
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, options?: RecoverableManagedDatabasesGetOptionalParams): Promise<RecoverableManagedDatabasesGetResponse>;
}

/** Optional parameters. */
export declare interface RecoverableManagedDatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RecoverableManagedDatabasesGetResponse = RecoverableManagedDatabase;

/** Optional parameters. */
export declare interface RecoverableManagedDatabasesListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type RecoverableManagedDatabasesListByInstanceNextResponse = RecoverableManagedDatabaseListResult;

/** Optional parameters. */
export declare interface RecoverableManagedDatabasesListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type RecoverableManagedDatabasesListByInstanceResponse = RecoverableManagedDatabaseListResult;

/** Represents a database replication link. */
export declare type ReplicationLink = ProxyResource & {
    /**
     * Location of the server that contains this firewall rule.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Legacy value indicating whether termination is allowed.  Currently always returns true.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isTerminationAllowed?: boolean;
    /**
     * Replication mode of this replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationMode?: string;
    /**
     * The name of the server hosting the partner database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partnerServer?: string;
    /**
     * The name of the partner database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partnerDatabase?: string;
    /**
     * The Azure Region of the partner database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partnerLocation?: string;
    /**
     * The role of the database in the replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly role?: ReplicationRole;
    /**
     * The role of the partner database in the replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly partnerRole?: ReplicationRole;
    /**
     * The start time for the replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The percentage of seeding complete for the replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
    /**
     * The replication state for the replication link.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly replicationState?: ReplicationState;
};

/** Represents the response to a List database replication link request. */
export declare interface ReplicationLinkListResult {
    /** The list of database replication links housed in the database. */
    value?: ReplicationLink[];
}

/** Interface representing a ReplicationLinks. */
export declare interface ReplicationLinks {
    /**
     * Lists a database's replication links.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to retrieve links for.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: ReplicationLinksListByDatabaseOptionalParams): PagedAsyncIterableIterator<ReplicationLink>;
    /**
     * Deletes a database replication link. Cannot be done during failover.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be dropped.
     * @param linkId The ID of the replication link to be deleted.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksDeleteOptionalParams): Promise<void>;
    /**
     * Gets a database replication link.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database to get the link for.
     * @param linkId The replication link ID to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksGetOptionalParams): Promise<ReplicationLinksGetResponse>;
    /**
     * Sets which replica database is primary by failing over from the current primary replica database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param options The options parameters.
     */
    beginFailover(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksFailoverOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Sets which replica database is primary by failing over from the current primary replica database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param options The options parameters.
     */
    beginFailoverAndWait(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksFailoverOptionalParams): Promise<void>;
    /**
     * Sets which replica database is primary by failing over from the current primary replica database.
     * This operation might result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param options The options parameters.
     */
    beginFailoverAllowDataLoss(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksFailoverAllowDataLossOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Sets which replica database is primary by failing over from the current primary replica database.
     * This operation might result in data loss.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param options The options parameters.
     */
    beginFailoverAllowDataLossAndWait(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, options?: ReplicationLinksFailoverAllowDataLossOptionalParams): Promise<void>;
    /**
     * Deletes a database replication link in forced or friendly way.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param parameters The required parameters for unlinking replication link.
     * @param options The options parameters.
     */
    beginUnlink(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, parameters: UnlinkParameters, options?: ReplicationLinksUnlinkOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a database replication link in forced or friendly way.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database that has the replication link to be failed over.
     * @param linkId The ID of the replication link to be failed over.
     * @param parameters The required parameters for unlinking replication link.
     * @param options The options parameters.
     */
    beginUnlinkAndWait(resourceGroupName: string, serverName: string, databaseName: string, linkId: string, parameters: UnlinkParameters, options?: ReplicationLinksUnlinkOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ReplicationLinksDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ReplicationLinksFailoverAllowDataLossOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ReplicationLinksFailoverOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ReplicationLinksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ReplicationLinksGetResponse = ReplicationLink;

/** Optional parameters. */
export declare interface ReplicationLinksListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ReplicationLinksListByDatabaseResponse = ReplicationLinkListResult;

/** Optional parameters. */
export declare interface ReplicationLinksUnlinkOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Defines values for ReplicationRole. */
export declare type ReplicationRole = "Primary" | "Secondary" | "NonReadableSecondary" | "Source" | "Copy";

/**
 * Defines values for ReplicationState. \
 * {@link KnownReplicationState} can be used interchangeably with ReplicationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PENDING** \
 * **SEEDING** \
 * **CATCH_UP** \
 * **SUSPENDED**
 */
export declare type ReplicationState = string;

/**
 * Defines values for ReplicaType. \
 * {@link KnownReplicaType} can be used interchangeably with ReplicaType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **ReadableSecondary**
 */
export declare type ReplicaType = string;

/** ARM resource. */
export declare interface Resource {
    /**
     * Resource ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
}

/** Azure Active Directory identity configuration for a resource. */
export declare interface ResourceIdentity {
    /**
     * The Azure Active Directory principal id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
    type?: IdentityType;
    /**
     * The Azure Active Directory tenant id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
}

/** Contains the information necessary to perform a resource move (rename). */
export declare interface ResourceMoveDefinition {
    /** The target ID for the resource */
    id: string;
}

/** A restorable dropped database */
export declare type RestorableDroppedDatabase = ProxyResource & {
    /**
     * The geo-location where the resource lives
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The name of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The edition of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly edition?: string;
    /**
     * The max size in bytes of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxSizeBytes?: string;
    /**
     * The service level objective name of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceLevelObjective?: string;
    /**
     * The elastic pool name of the database
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly elasticPoolName?: string;
    /**
     * The creation date of the database (ISO8601 format)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * The deletion date of the database (ISO8601 format)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionDate?: Date;
    /**
     * The earliest restore date of the database (ISO8601 format)
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestoreDate?: Date;
};

/** The response to a list restorable dropped databases request */
export declare interface RestorableDroppedDatabaseListResult {
    /** A list of restorable dropped databases */
    value: RestorableDroppedDatabase[];
}

/** Interface representing a RestorableDroppedDatabases. */
export declare interface RestorableDroppedDatabases {
    /**
     * Gets a list of deleted databases that can be restored
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: RestorableDroppedDatabasesListByServerOptionalParams): PagedAsyncIterableIterator<RestorableDroppedDatabase>;
    /**
     * Gets a deleted database that can be restored
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param restorableDroppededDatabaseId The id of the deleted database in the form of
     *                                      databaseName,deletionTimeInFileTimeFormat
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string, options?: RestorableDroppedDatabasesGetOptionalParams): Promise<RestorableDroppedDatabasesGetResponse>;
}

/** Optional parameters. */
export declare interface RestorableDroppedDatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RestorableDroppedDatabasesGetResponse = RestorableDroppedDatabase;

/** Optional parameters. */
export declare interface RestorableDroppedDatabasesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type RestorableDroppedDatabasesListByServerResponse = RestorableDroppedDatabaseListResult;

/** A restorable dropped managed database resource. */
export declare type RestorableDroppedManagedDatabase = TrackedResource & {
    /**
     * The name of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * The creation date of the database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationDate?: Date;
    /**
     * The deletion date of the database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly deletionDate?: Date;
    /**
     * The earliest restore date of the database (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestoreDate?: Date;
};

/** A list of restorable dropped managed databases. */
export declare interface RestorableDroppedManagedDatabaseListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: RestorableDroppedManagedDatabase[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a RestorableDroppedManagedDatabases. */
export declare interface RestorableDroppedManagedDatabases {
    /**
     * Gets a list of restorable dropped managed databases.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param options The options parameters.
     */
    listByInstance(resourceGroupName: string, managedInstanceName: string, options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams): PagedAsyncIterableIterator<RestorableDroppedManagedDatabase>;
    /**
     * Gets a restorable dropped managed database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param managedInstanceName The name of the managed instance.
     * @param restorableDroppedDatabaseId
     * @param options The options parameters.
     */
    get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: RestorableDroppedManagedDatabasesGetOptionalParams): Promise<RestorableDroppedManagedDatabasesGetResponse>;
}

/** Optional parameters. */
export declare interface RestorableDroppedManagedDatabasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RestorableDroppedManagedDatabasesGetResponse = RestorableDroppedManagedDatabase;

/** Optional parameters. */
export declare interface RestorableDroppedManagedDatabasesListByInstanceNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstanceNext operation. */
export declare type RestorableDroppedManagedDatabasesListByInstanceNextResponse = RestorableDroppedManagedDatabaseListResult;

/** Optional parameters. */
export declare interface RestorableDroppedManagedDatabasesListByInstanceOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByInstance operation. */
export declare type RestorableDroppedManagedDatabasesListByInstanceResponse = RestorableDroppedManagedDatabaseListResult;

/**
 * Defines values for RestoreDetailsName. \
 * {@link KnownRestoreDetailsName} can be used interchangeably with RestoreDetailsName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**
 */
export declare type RestoreDetailsName = string;

/** Database restore points. */
export declare type RestorePoint = ProxyResource & {
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The type of restore point
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restorePointType?: RestorePointType;
    /**
     * The earliest time to which this database can be restored
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly earliestRestoreDate?: Date;
    /**
     * The time the backup was taken
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restorePointCreationDate?: Date;
    /**
     * The label of restore point for backup request by user
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly restorePointLabel?: string;
};

/** A list of long term retention backups. */
export declare interface RestorePointListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: RestorePoint[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a RestorePoints. */
export declare interface RestorePoints {
    /**
     * Gets a list of database restore points.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: RestorePointsListByDatabaseOptionalParams): PagedAsyncIterableIterator<RestorePoint>;
    /**
     * Creates a restore point for a data warehouse.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The definition for creating the restore point of this database.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, serverName: string, databaseName: string, parameters: CreateDatabaseRestorePointDefinition, options?: RestorePointsCreateOptionalParams): Promise<PollerLike<PollOperationState<RestorePointsCreateResponse>, RestorePointsCreateResponse>>;
    /**
     * Creates a restore point for a data warehouse.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param parameters The definition for creating the restore point of this database.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, serverName: string, databaseName: string, parameters: CreateDatabaseRestorePointDefinition, options?: RestorePointsCreateOptionalParams): Promise<RestorePointsCreateResponse>;
    /**
     * Gets a restore point.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param restorePointName The name of the restore point.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: RestorePointsGetOptionalParams): Promise<RestorePointsGetResponse>;
    /**
     * Deletes a restore point.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param restorePointName The name of the restore point.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: RestorePointsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface RestorePointsCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the create operation. */
export declare type RestorePointsCreateResponse = RestorePoint;

/** Optional parameters. */
export declare interface RestorePointsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface RestorePointsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RestorePointsGetResponse = RestorePoint;

/** Optional parameters. */
export declare interface RestorePointsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type RestorePointsListByDatabaseResponse = RestorePointListResult;

/** Defines values for RestorePointType. */
export declare type RestorePointType = "CONTINUOUS" | "DISCRETE";

/**
 * Defines values for SampleName. \
 * {@link KnownSampleName} can be used interchangeably with SampleName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AdventureWorksLT** \
 * **WideWorldImportersStd** \
 * **WideWorldImportersFull**
 */
export declare type SampleName = string;

/** Defines values for SecurityAlertPolicyEmailAccountAdmins. */
export declare type SecurityAlertPolicyEmailAccountAdmins = "Enabled" | "Disabled";

/**
 * Defines values for SecurityAlertPolicyName. \
 * {@link KnownSecurityAlertPolicyName} can be used interchangeably with SecurityAlertPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type SecurityAlertPolicyName = string;

/**
 * Defines values for SecurityAlertPolicyNameAutoGenerated. \
 * {@link KnownSecurityAlertPolicyNameAutoGenerated} can be used interchangeably with SecurityAlertPolicyNameAutoGenerated,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**
 */
export declare type SecurityAlertPolicyNameAutoGenerated = string;

/** Defines values for SecurityAlertPolicyState. */
export declare type SecurityAlertPolicyState = "New" | "Enabled" | "Disabled";

/** Defines values for SecurityAlertPolicyUseServerDefault. */
export declare type SecurityAlertPolicyUseServerDefault = "Enabled" | "Disabled";

/** A sensitivity label. */
export declare type SensitivityLabel = ProxyResource & {
    /** The label name. */
    labelName?: string;
    /** The label ID. */
    labelId?: string;
    /** The information type. */
    informationType?: string;
    /** The information type ID. */
    informationTypeId?: string;
    /**
     * Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isDisabled?: boolean;
    rank?: SensitivityLabelRank;
};

/** A list of sensitivity labels. */
export declare interface SensitivityLabelListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SensitivityLabel[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Defines values for SensitivityLabelRank. */
export declare type SensitivityLabelRank = "None" | "Low" | "Medium" | "High" | "Critical";

/** Interface representing a SensitivityLabels. */
export declare interface SensitivityLabels {
    /**
     * Gets the sensitivity labels of a given database
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listCurrentByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: SensitivityLabelsListCurrentByDatabaseOptionalParams): PagedAsyncIterableIterator<SensitivityLabel>;
    /**
     * Gets the sensitivity labels of a given database
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listRecommendedByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: SensitivityLabelsListRecommendedByDatabaseOptionalParams): PagedAsyncIterableIterator<SensitivityLabel>;
    /**
     * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
     * columns)
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    enableRecommendation(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: SensitivityLabelsEnableRecommendationOptionalParams): Promise<void>;
    /**
     * Disables sensitivity recommendations on a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    disableRecommendation(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: SensitivityLabelsDisableRecommendationOptionalParams): Promise<void>;
    /**
     * Gets the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param sensitivityLabelSource The source of the sensitivity label.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: SensitivityLabelSource, options?: SensitivityLabelsGetOptionalParams): Promise<SensitivityLabelsGetResponse>;
    /**
     * Creates or updates the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param parameters The column sensitivity label resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: SensitivityLabel, options?: SensitivityLabelsCreateOrUpdateOptionalParams): Promise<SensitivityLabelsCreateOrUpdateResponse>;
    /**
     * Deletes the sensitivity label of a given column
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param schemaName The name of the schema.
     * @param tableName The name of the table.
     * @param columnName The name of the column.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: SensitivityLabelsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface SensitivityLabelsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type SensitivityLabelsCreateOrUpdateResponse = SensitivityLabel;

/** Optional parameters. */
export declare interface SensitivityLabelsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface SensitivityLabelsDisableRecommendationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface SensitivityLabelsEnableRecommendationOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface SensitivityLabelsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SensitivityLabelsGetResponse = SensitivityLabel;

/** Optional parameters. */
export declare interface SensitivityLabelsListCurrentByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listCurrentByDatabaseNext operation. */
export declare type SensitivityLabelsListCurrentByDatabaseNextResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface SensitivityLabelsListCurrentByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
}

/** Contains response data for the listCurrentByDatabase operation. */
export declare type SensitivityLabelsListCurrentByDatabaseResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface SensitivityLabelsListRecommendedByDatabaseNextOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
    /** Specifies whether to include disabled recommendations or not. */
    includeDisabledRecommendations?: boolean;
    skipToken?: string;
}

/** Contains response data for the listRecommendedByDatabaseNext operation. */
export declare type SensitivityLabelsListRecommendedByDatabaseNextResponse = SensitivityLabelListResult;

/** Optional parameters. */
export declare interface SensitivityLabelsListRecommendedByDatabaseOptionalParams extends coreClient.OperationOptions {
    /** An OData filter expression that filters elements in the collection. */
    filter?: string;
    /** Specifies whether to include disabled recommendations or not. */
    includeDisabledRecommendations?: boolean;
    skipToken?: string;
}

/** Contains response data for the listRecommendedByDatabase operation. */
export declare type SensitivityLabelsListRecommendedByDatabaseResponse = SensitivityLabelListResult;

/** Defines values for SensitivityLabelSource. */
export declare type SensitivityLabelSource = "current" | "recommended";

/** An Azure SQL Database server. */
export declare type Server = TrackedResource & {
    /** The Azure Active Directory identity of the server. */
    identity?: ResourceIdentity;
    /**
     * Kind of sql server. This is metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /** Administrator username for the server. Once created it cannot be changed. */
    administratorLogin?: string;
    /** The administrator login password (required for server creation). */
    administratorLoginPassword?: string;
    /** The version of the server. */
    version?: string;
    /**
     * The state of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * The fully qualified domain name of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fullyQualifiedDomainName?: string;
    /**
     * List of private endpoint connections on a server
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: ServerPrivateEndpointConnection[];
    /** Minimal TLS version. Allowed values: '1.0', '1.1', '1.2' */
    minimalTlsVersion?: string;
    /** Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' */
    publicNetworkAccess?: ServerPublicNetworkAccess;
};

/** Interface representing a ServerAutomaticTuning. */
export declare interface ServerAutomaticTuning {
    /**
     * Retrieves server automatic tuning options.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, options?: ServerAutomaticTuningGetOptionalParams): Promise<ServerAutomaticTuningGetResponse>;
    /**
     * Update automatic tuning options on server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested automatic tuning resource state.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, serverName: string, parameters: ServerAutomaticTuningDef, options?: ServerAutomaticTuningUpdateOptionalParams): Promise<ServerAutomaticTuningUpdateResponse>;
}

/** Server-level Automatic Tuning. */
export declare type ServerAutomaticTuningDef = ProxyResource & {
    /** Automatic tuning desired state. */
    desiredState?: AutomaticTuningServerMode;
    /**
     * Automatic tuning actual state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actualState?: AutomaticTuningServerMode;
    /** Automatic tuning options definition. */
    options?: {
        [propertyName: string]: AutomaticTuningServerOptions;
    };
};

/** Optional parameters. */
export declare interface ServerAutomaticTuningGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerAutomaticTuningGetResponse = ServerAutomaticTuningDef;

/** Optional parameters. */
export declare interface ServerAutomaticTuningUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the update operation. */
export declare type ServerAutomaticTuningUpdateResponse = ServerAutomaticTuningDef;

/** Azure Active Directory administrator. */
export declare type ServerAzureADAdministrator = ProxyResource & {
    /** Type of the sever administrator. */
    administratorType?: AdministratorType;
    /** Login name of the server administrator. */
    login?: string;
    /** SID (object ID) of the server administrator. */
    sid?: string;
    /** Tenant ID of the administrator. */
    tenantId?: string;
    /** Azure Active Directory only Authentication enabled. */
    azureADOnlyAuthentication?: boolean;
};

/** Interface representing a ServerAzureADAdministrators. */
export declare interface ServerAzureADAdministrators {
    /**
     * Gets a list of Azure Active Directory administrators in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerAzureADAdministratorsListByServerOptionalParams): PagedAsyncIterableIterator<ServerAzureADAdministrator>;
    /**
     * Gets a Azure Active Directory administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param administratorName The name of server active directory administrator.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, administratorName: AdministratorName, options?: ServerAzureADAdministratorsGetOptionalParams): Promise<ServerAzureADAdministratorsGetResponse>;
    /**
     * Creates or updates an existing Azure Active Directory administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param administratorName
     * @param parameters The required parameters for creating or updating an Active Directory
     *                   Administrator.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, administratorName: AdministratorName, parameters: ServerAzureADAdministrator, options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerAzureADAdministratorsCreateOrUpdateResponse>, ServerAzureADAdministratorsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an existing Azure Active Directory administrator.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param administratorName
     * @param parameters The required parameters for creating or updating an Active Directory
     *                   Administrator.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, administratorName: AdministratorName, parameters: ServerAzureADAdministrator, options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams): Promise<ServerAzureADAdministratorsCreateOrUpdateResponse>;
    /**
     * Deletes the Azure Active Directory administrator with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param administratorName The name of server active directory administrator.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, administratorName: AdministratorName, options?: ServerAzureADAdministratorsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the Azure Active Directory administrator with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param administratorName The name of server active directory administrator.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, administratorName: AdministratorName, options?: ServerAzureADAdministratorsDeleteOptionalParams): Promise<void>;
    /**
     * Disables Azure Active Directory only authentication on logical Server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    beginDisableAzureADOnlyAuthentication(resourceGroupName: string, serverName: string, options?: ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams): Promise<PollerLike<PollOperationState<ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse>, ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse>>;
    /**
     * Disables Azure Active Directory only authentication on logical Server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    beginDisableAzureADOnlyAuthenticationAndWait(resourceGroupName: string, serverName: string, options?: ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams): Promise<ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse>;
}

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerAzureADAdministratorsCreateOrUpdateResponse = ServerAzureADAdministrator;

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the disableAzureADOnlyAuthentication operation. */
export declare type ServerAzureADAdministratorsDisableAzureADOnlyAuthenticationResponse = ServerAzureADAdministrator;

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerAzureADAdministratorsGetResponse = ServerAzureADAdministrator;

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerAzureADAdministratorsListByServerNextResponse = AdministratorListResult;

/** Optional parameters. */
export declare interface ServerAzureADAdministratorsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerAzureADAdministratorsListByServerResponse = AdministratorListResult;

/** Interface representing a ServerBlobAuditingPolicies. */
export declare interface ServerBlobAuditingPolicies {
    /**
     * Lists auditing settings of a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerBlobAuditingPoliciesListByServerOptionalParams): PagedAsyncIterableIterator<ServerBlobAuditingPolicy>;
    /**
     * Gets a server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, options?: ServerBlobAuditingPoliciesGetOptionalParams): Promise<ServerBlobAuditingPoliciesGetResponse>;
    /**
     * Creates or updates a server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters Properties of blob auditing policy
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: ServerBlobAuditingPolicy, options?: ServerBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerBlobAuditingPoliciesCreateOrUpdateResponse>, ServerBlobAuditingPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a server's blob auditing policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters Properties of blob auditing policy
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, parameters: ServerBlobAuditingPolicy, options?: ServerBlobAuditingPoliciesCreateOrUpdateOptionalParams): Promise<ServerBlobAuditingPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ServerBlobAuditingPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerBlobAuditingPoliciesCreateOrUpdateResponse = ServerBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ServerBlobAuditingPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerBlobAuditingPoliciesGetResponse = ServerBlobAuditingPolicy;

/** Optional parameters. */
export declare interface ServerBlobAuditingPoliciesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerBlobAuditingPoliciesListByServerNextResponse = ServerBlobAuditingPolicyListResult;

/** Optional parameters. */
export declare interface ServerBlobAuditingPoliciesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerBlobAuditingPoliciesListByServerResponse = ServerBlobAuditingPolicyListResult;

/** A server blob auditing policy. */
export declare type ServerBlobAuditingPolicy = ProxyResource & {
    /** Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. */
    state?: BlobAuditingPolicyState;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
    storageEndpoint?: string;
    /**
     * Specifies the identifier key of the auditing storage account.
     * If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
     * Prerequisites for using managed identity authentication:
     * 1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
     * 2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
     * For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
     */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the audit logs in the storage account. */
    retentionDays?: number;
    /**
     * Specifies the Actions-Groups and Actions to audit.
     *
     * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
     *
     * BATCH_COMPLETED_GROUP,
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
     * FAILED_DATABASE_AUTHENTICATION_GROUP.
     *
     * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
     *
     * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
     *
     * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
     * BACKUP_RESTORE_GROUP
     * DATABASE_LOGOUT_GROUP
     * DATABASE_OBJECT_CHANGE_GROUP
     * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
     * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
     * DATABASE_OPERATION_GROUP
     * DATABASE_PERMISSION_CHANGE_GROUP
     * DATABASE_PRINCIPAL_CHANGE_GROUP
     * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
     * DATABASE_ROLE_MEMBER_CHANGE_GROUP
     * FAILED_DATABASE_AUTHENTICATION_GROUP
     * SCHEMA_OBJECT_ACCESS_GROUP
     * SCHEMA_OBJECT_CHANGE_GROUP
     * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
     * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
     * USER_CHANGE_PASSWORD_GROUP
     * BATCH_STARTED_GROUP
     * BATCH_COMPLETED_GROUP
     *
     * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
     *
     * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
     *
     * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
     * SELECT
     * UPDATE
     * INSERT
     * DELETE
     * EXECUTE
     * RECEIVE
     * REFERENCES
     *
     * The general form for defining an action to be audited is:
     * {action} ON {object} BY {principal}
     *
     * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
     *
     * For example:
     * SELECT on dbo.myTable by public
     * SELECT on DATABASE::myDatabase by public
     * SELECT on SCHEMA::mySchema by public
     *
     * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
     */
    auditActionsAndGroups?: string[];
    /** Specifies the blob storage subscription Id. */
    storageAccountSubscriptionId?: string;
    /** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
    isStorageSecondaryKeyInUse?: boolean;
    /**
     * Specifies whether audit events are sent to Azure Monitor.
     * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
     *
     * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
     * Note that for server level audit you should use the 'master' database as {databaseName}.
     *
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     *
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     *
     */
    isAzureMonitorTargetEnabled?: boolean;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    queueDelayMs?: number;
};

/** A list of server auditing settings. */
export declare interface ServerBlobAuditingPolicyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerBlobAuditingPolicy[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Server communication link. */
export declare type ServerCommunicationLink = ProxyResource & {
    /**
     * Communication link location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Communication link kind.  This property is used for Azure Portal metadata.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * The state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /** The name of the partner server. */
    partnerServer?: string;
};

/** A list of server communication links. */
export declare interface ServerCommunicationLinkListResult {
    /** The list of server communication links. */
    value?: ServerCommunicationLink[];
}

/** Interface representing a ServerCommunicationLinks. */
export declare interface ServerCommunicationLinks {
    /**
     * Gets a list of server communication links.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerCommunicationLinksListByServerOptionalParams): PagedAsyncIterableIterator<ServerCommunicationLink>;
    /**
     * Deletes a server communication link.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param communicationLinkName The name of the server communication link.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, communicationLinkName: string, options?: ServerCommunicationLinksDeleteOptionalParams): Promise<void>;
    /**
     * Returns a server communication link.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param communicationLinkName The name of the server communication link.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, communicationLinkName: string, options?: ServerCommunicationLinksGetOptionalParams): Promise<ServerCommunicationLinksGetResponse>;
    /**
     * Creates a server communication link.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param communicationLinkName The name of the server communication link.
     * @param parameters The required parameters for creating a server communication link.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, communicationLinkName: string, parameters: ServerCommunicationLink, options?: ServerCommunicationLinksCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerCommunicationLinksCreateOrUpdateResponse>, ServerCommunicationLinksCreateOrUpdateResponse>>;
    /**
     * Creates a server communication link.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param communicationLinkName The name of the server communication link.
     * @param parameters The required parameters for creating a server communication link.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, communicationLinkName: string, parameters: ServerCommunicationLink, options?: ServerCommunicationLinksCreateOrUpdateOptionalParams): Promise<ServerCommunicationLinksCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ServerCommunicationLinksCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerCommunicationLinksCreateOrUpdateResponse = ServerCommunicationLink;

/** Optional parameters. */
export declare interface ServerCommunicationLinksDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ServerCommunicationLinksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerCommunicationLinksGetResponse = ServerCommunicationLink;

/** Optional parameters. */
export declare interface ServerCommunicationLinksListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerCommunicationLinksListByServerResponse = ServerCommunicationLinkListResult;

/** Interface representing a ServerConnectionPolicies. */
export declare interface ServerConnectionPolicies {
    /**
     * Creates or updates the server's connection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param connectionPolicyName The name of the connection policy.
     * @param parameters The required parameters for updating a secure connection policy.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, connectionPolicyName: ConnectionPolicyName, parameters: ServerConnectionPolicy, options?: ServerConnectionPoliciesCreateOrUpdateOptionalParams): Promise<ServerConnectionPoliciesCreateOrUpdateResponse>;
    /**
     * Gets the server's secure connection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param connectionPolicyName The name of the connection policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, connectionPolicyName: ConnectionPolicyName, options?: ServerConnectionPoliciesGetOptionalParams): Promise<ServerConnectionPoliciesGetResponse>;
}

/** Optional parameters. */
export declare interface ServerConnectionPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerConnectionPoliciesCreateOrUpdateResponse = ServerConnectionPolicy;

/** Optional parameters. */
export declare interface ServerConnectionPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerConnectionPoliciesGetResponse = ServerConnectionPolicy;

/** A server secure connection policy. */
export declare type ServerConnectionPolicy = ProxyResource & {
    /**
     * Metadata used for the Azure portal experience.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly kind?: string;
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** The server connection type. */
    connectionType?: ServerConnectionType;
};

/** Defines values for ServerConnectionType. */
export declare type ServerConnectionType = "Default" | "Proxy" | "Redirect";

/** A server DNS alias. */
export declare type ServerDnsAlias = ProxyResource & {
    /**
     * The fully qualified DNS record for alias
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly azureDnsRecord?: string;
};

/** A server DNS alias acquisition request. */
export declare interface ServerDnsAliasAcquisition {
    /** The id of the server alias that will be acquired to point to this server instead. */
    oldServerDnsAliasId?: string;
}

/** Interface representing a ServerDnsAliases. */
export declare interface ServerDnsAliases {
    /**
     * Gets a list of server DNS aliases for a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerDnsAliasesListByServerOptionalParams): PagedAsyncIterableIterator<ServerDnsAlias>;
    /**
     * Gets a server DNS alias.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server DNS alias.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, dnsAliasName: string, options?: ServerDnsAliasesGetOptionalParams): Promise<ServerDnsAliasesGetResponse>;
    /**
     * Creates a server dns alias.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server DNS alias.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, dnsAliasName: string, options?: ServerDnsAliasesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerDnsAliasesCreateOrUpdateResponse>, ServerDnsAliasesCreateOrUpdateResponse>>;
    /**
     * Creates a server dns alias.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server DNS alias.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, dnsAliasName: string, options?: ServerDnsAliasesCreateOrUpdateOptionalParams): Promise<ServerDnsAliasesCreateOrUpdateResponse>;
    /**
     * Deletes the server DNS alias with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server DNS alias.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, dnsAliasName: string, options?: ServerDnsAliasesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the server DNS alias with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server DNS alias.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, dnsAliasName: string, options?: ServerDnsAliasesDeleteOptionalParams): Promise<void>;
    /**
     * Acquires server DNS alias from another server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server dns alias.
     * @param parameters A server DNS alias acquisition request.
     * @param options The options parameters.
     */
    beginAcquire(resourceGroupName: string, serverName: string, dnsAliasName: string, parameters: ServerDnsAliasAcquisition, options?: ServerDnsAliasesAcquireOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Acquires server DNS alias from another server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server that the alias is pointing to.
     * @param dnsAliasName The name of the server dns alias.
     * @param parameters A server DNS alias acquisition request.
     * @param options The options parameters.
     */
    beginAcquireAndWait(resourceGroupName: string, serverName: string, dnsAliasName: string, parameters: ServerDnsAliasAcquisition, options?: ServerDnsAliasesAcquireOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ServerDnsAliasesAcquireOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServerDnsAliasesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerDnsAliasesCreateOrUpdateResponse = ServerDnsAlias;

/** Optional parameters. */
export declare interface ServerDnsAliasesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServerDnsAliasesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerDnsAliasesGetResponse = ServerDnsAlias;

/** Optional parameters. */
export declare interface ServerDnsAliasesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerDnsAliasesListByServerNextResponse = ServerDnsAliasListResult;

/** Optional parameters. */
export declare interface ServerDnsAliasesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerDnsAliasesListByServerResponse = ServerDnsAliasListResult;

/** A list of server DNS aliases. */
export declare interface ServerDnsAliasListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerDnsAlias[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A server key. */
export declare type ServerKey = ProxyResource & {
    /** Kind of encryption protector. This is metadata used for the Azure portal experience. */
    kind?: string;
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * Subregion of the server key.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subregion?: string;
    /** The server key type like 'ServiceManaged', 'AzureKeyVault'. */
    serverKeyType?: ServerKeyType;
    /** The URI of the server key. */
    uri?: string;
    /** Thumbprint of the server key. */
    thumbprint?: string;
    /** The server key creation date. */
    creationDate?: Date;
};

/** A list of server keys. */
export declare interface ServerKeyListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerKey[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ServerKeys. */
export declare interface ServerKeys {
    /**
     * Gets a list of server keys.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerKeysListByServerOptionalParams): PagedAsyncIterableIterator<ServerKey>;
    /**
     * Gets a server key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param keyName The name of the server key to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, keyName: string, options?: ServerKeysGetOptionalParams): Promise<ServerKeysGetResponse>;
    /**
     * Creates or updates a server key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param keyName The name of the server key to be operated on (updated or created). The key name is
     *                required to be in the format of 'vault_key_version'. For example, if the keyId is
     *                https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the
     *                server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
     * @param parameters The requested server key resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, keyName: string, parameters: ServerKey, options?: ServerKeysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerKeysCreateOrUpdateResponse>, ServerKeysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a server key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param keyName The name of the server key to be operated on (updated or created). The key name is
     *                required to be in the format of 'vault_key_version'. For example, if the keyId is
     *                https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the
     *                server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
     * @param parameters The requested server key resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, keyName: string, parameters: ServerKey, options?: ServerKeysCreateOrUpdateOptionalParams): Promise<ServerKeysCreateOrUpdateResponse>;
    /**
     * Deletes the server key with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param keyName The name of the server key to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, keyName: string, options?: ServerKeysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the server key with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param keyName The name of the server key to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, keyName: string, options?: ServerKeysDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ServerKeysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerKeysCreateOrUpdateResponse = ServerKey;

/** Optional parameters. */
export declare interface ServerKeysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServerKeysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerKeysGetResponse = ServerKey;

/** Optional parameters. */
export declare interface ServerKeysListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerKeysListByServerNextResponse = ServerKeyListResult;

/** Optional parameters. */
export declare interface ServerKeysListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerKeysListByServerResponse = ServerKeyListResult;

/**
 * Defines values for ServerKeyType. \
 * {@link KnownServerKeyType} can be used interchangeably with ServerKeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServiceManaged** \
 * **AzureKeyVault**
 */
export declare type ServerKeyType = string;

/** A list of servers. */
export declare interface ServerListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Server[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A private endpoint connection under a server */
export declare interface ServerPrivateEndpointConnection {
    /**
     * Resource ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Private endpoint connection properties
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: PrivateEndpointConnectionProperties;
}

/**
 * Defines values for ServerPublicNetworkAccess. \
 * {@link KnownServerPublicNetworkAccess} can be used interchangeably with ServerPublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type ServerPublicNetworkAccess = string;

/** Interface representing a Servers. */
export declare interface Servers {
    /**
     * Gets a list of servers in a resource groups.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ServersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Server>;
    /**
     * Gets a list of all servers in the subscription.
     * @param options The options parameters.
     */
    list(options?: ServersListOptionalParams): PagedAsyncIterableIterator<Server>;
    /**
     * Gets a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, options?: ServersGetOptionalParams): Promise<ServersGetResponse>;
    /**
     * Creates or updates a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested server resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Server, options?: ServersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServersCreateOrUpdateResponse>, ServersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested server resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, parameters: Server, options?: ServersCreateOrUpdateOptionalParams): Promise<ServersCreateOrUpdateResponse>;
    /**
     * Deletes a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, options?: ServersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, options?: ServersDeleteOptionalParams): Promise<void>;
    /**
     * Updates a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested server resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, parameters: ServerUpdate, options?: ServersUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServersUpdateResponse>, ServersUpdateResponse>>;
    /**
     * Updates a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested server resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, parameters: ServerUpdate, options?: ServersUpdateOptionalParams): Promise<ServersUpdateResponse>;
    /**
     * Determines whether a resource can be created with the specified name.
     * @param parameters The name availability request parameters.
     * @param options The options parameters.
     */
    checkNameAvailability(parameters: CheckNameAvailabilityRequest, options?: ServersCheckNameAvailabilityOptionalParams): Promise<ServersCheckNameAvailabilityResponse>;
}

/** Optional parameters. */
export declare interface ServersCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkNameAvailability operation. */
export declare type ServersCheckNameAvailabilityResponse = CheckNameAvailabilityResponse;

/** Optional parameters. */
export declare interface ServersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServersCreateOrUpdateResponse = Server;

/** Optional parameters. */
export declare interface ServersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Interface representing a ServerSecurityAlertPolicies. */
export declare interface ServerSecurityAlertPolicies {
    /**
     * Get the server's threat detection policies.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerSecurityAlertPoliciesListByServerOptionalParams): PagedAsyncIterableIterator<ServerSecurityAlertPolicy>;
    /**
     * Get a server's security alert policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param securityAlertPolicyName The name of the security alert policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, options?: ServerSecurityAlertPoliciesGetOptionalParams): Promise<ServerSecurityAlertPoliciesGetResponse>;
    /**
     * Creates or updates a threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param securityAlertPolicyName The name of the threat detection policy.
     * @param parameters The server security alert policy.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, parameters: ServerSecurityAlertPolicy, options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServerSecurityAlertPoliciesCreateOrUpdateResponse>, ServerSecurityAlertPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a threat detection policy.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param securityAlertPolicyName The name of the threat detection policy.
     * @param parameters The server security alert policy.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated, parameters: ServerSecurityAlertPolicy, options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams): Promise<ServerSecurityAlertPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerSecurityAlertPoliciesCreateOrUpdateResponse = ServerSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ServerSecurityAlertPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerSecurityAlertPoliciesGetResponse = ServerSecurityAlertPolicy;

/** Optional parameters. */
export declare interface ServerSecurityAlertPoliciesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerSecurityAlertPoliciesListByServerNextResponse = LogicalServerSecurityAlertPolicyListResult;

/** Optional parameters. */
export declare interface ServerSecurityAlertPoliciesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerSecurityAlertPoliciesListByServerResponse = LogicalServerSecurityAlertPolicyListResult;

/** A server security alert policy. */
export declare type ServerSecurityAlertPolicy = ProxyResource & {
    /** Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database. */
    state?: SecurityAlertPolicyState;
    /** Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action */
    disabledAlerts?: string[];
    /** Specifies an array of e-mail addresses to which the alert is sent. */
    emailAddresses?: string[];
    /** Specifies that the alert is sent to the account administrators. */
    emailAccountAdmins?: boolean;
    /** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. */
    storageEndpoint?: string;
    /** Specifies the identifier key of the Threat Detection audit storage account. */
    storageAccountAccessKey?: string;
    /** Specifies the number of days to keep in the Threat Detection audit logs. */
    retentionDays?: number;
    /**
     * Specifies the UTC creation time of the policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly creationTime?: Date;
};

/** Optional parameters. */
export declare interface ServersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServersGetResponse = Server;

/** Optional parameters. */
export declare interface ServersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ServersListByResourceGroupNextResponse = ServerListResult;

/** Optional parameters. */
export declare interface ServersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ServersListByResourceGroupResponse = ServerListResult;

/** Optional parameters. */
export declare interface ServersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ServersListNextResponse = ServerListResult;

/** Optional parameters. */
export declare interface ServersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ServersListResponse = ServerListResult;

/** Optional parameters. */
export declare interface ServersUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type ServersUpdateResponse = Server;

/** An update request for an Azure SQL Database server. */
export declare interface ServerUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Administrator username for the server. Once created it cannot be changed. */
    administratorLogin?: string;
    /** The administrator login password (required for server creation). */
    administratorLoginPassword?: string;
    /** The version of the server. */
    version?: string;
    /**
     * The state of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
    /**
     * The fully qualified domain name of the server.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fullyQualifiedDomainName?: string;
    /**
     * List of private endpoint connections on a server
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: ServerPrivateEndpointConnection[];
    /** Minimal TLS version. Allowed values: '1.0', '1.1', '1.2' */
    minimalTlsVersion?: string;
    /** Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' */
    publicNetworkAccess?: ServerPublicNetworkAccess;
}

/** Represents server metrics. */
export declare interface ServerUsage {
    /**
     * Name of the server usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The name of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceName?: string;
    /**
     * The metric display name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * The current value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * The current limit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * The units of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * The next reset time for the metric (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextResetTime?: Date;
}

/** Represents the response to a list server metrics request. */
export declare interface ServerUsageListResult {
    /** The list of server metrics for the server. */
    value: ServerUsage[];
}

/** Interface representing a ServerUsages. */
export declare interface ServerUsages {
    /**
     * Returns server usages.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerUsagesListByServerOptionalParams): PagedAsyncIterableIterator<ServerUsage>;
}

/** Optional parameters. */
export declare interface ServerUsagesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerUsagesListByServerResponse = ServerUsageListResult;

/** The server capability */
export declare interface ServerVersionCapability {
    /**
     * The server version name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported database editions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedEditions?: EditionCapability[];
    /**
     * The list of supported elastic pool editions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedElasticPoolEditions?: ElasticPoolEditionCapability[];
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** A server vulnerability assessment. */
export declare type ServerVulnerabilityAssessment = ProxyResource & {
    /** A blob storage container path to hold the scan results (e.g. https://myStorage.blob.core.windows.net/VaScans/). */
    storageContainerPath?: string;
    /** A shared access signature (SAS Key) that has read and write access to the blob container specified in 'storageContainerPath' parameter. If 'storageAccountAccessKey' isn't specified, StorageContainerSasKey is required. */
    storageContainerSasKey?: string;
    /** Specifies the identifier key of the storage account for vulnerability assessment scan results. If 'StorageContainerSasKey' isn't specified, storageAccountAccessKey is required. */
    storageAccountAccessKey?: string;
    /** The recurring scans settings */
    recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
};

/** A list of the server's vulnerability assessments. */
export declare interface ServerVulnerabilityAssessmentListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: ServerVulnerabilityAssessment[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ServerVulnerabilityAssessments. */
export declare interface ServerVulnerabilityAssessments {
    /**
     * Lists the vulnerability assessment policies associated with a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServerVulnerabilityAssessmentsListByServerOptionalParams): PagedAsyncIterableIterator<ServerVulnerabilityAssessment>;
    /**
     * Gets the server's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ServerVulnerabilityAssessmentsGetOptionalParams): Promise<ServerVulnerabilityAssessmentsGetResponse>;
    /**
     * Creates or updates the server's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param parameters The requested resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, parameters: ServerVulnerabilityAssessment, options?: ServerVulnerabilityAssessmentsCreateOrUpdateOptionalParams): Promise<ServerVulnerabilityAssessmentsCreateOrUpdateResponse>;
    /**
     * Removes the server's vulnerability assessment.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server for which the vulnerability assessment is defined.
     * @param vulnerabilityAssessmentName The name of the vulnerability assessment.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, serverName: string, vulnerabilityAssessmentName: VulnerabilityAssessmentName, options?: ServerVulnerabilityAssessmentsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ServerVulnerabilityAssessmentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServerVulnerabilityAssessmentsCreateOrUpdateResponse = ServerVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ServerVulnerabilityAssessmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ServerVulnerabilityAssessmentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServerVulnerabilityAssessmentsGetResponse = ServerVulnerabilityAssessment;

/** Optional parameters. */
export declare interface ServerVulnerabilityAssessmentsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type ServerVulnerabilityAssessmentsListByServerNextResponse = ServerVulnerabilityAssessmentListResult;

/** Optional parameters. */
export declare interface ServerVulnerabilityAssessmentsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServerVulnerabilityAssessmentsListByServerResponse = ServerVulnerabilityAssessmentListResult;

/** Represents a database service objective. */
export declare type ServiceObjective = ProxyResource & {
    /**
     * The name for the service objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceObjectiveName?: string;
    /**
     * Gets whether the service level objective is the default service objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isDefault?: boolean;
    /**
     * Gets whether the service level objective is a system service objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isSystem?: boolean;
    /**
     * The description for the service level objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Gets whether the service level objective is enabled.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly enabled?: boolean;
};

/** The service objectives capability. */
export declare interface ServiceObjectiveCapability {
    /**
     * The unique ID of the service objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The service objective name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The list of supported maximum database sizes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedMaxSizes?: MaxSizeRangeCapability[];
    /**
     * The performance level.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly performanceLevel?: PerformanceLevelCapability;
    /**
     * The sku.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sku?: Sku;
    /**
     * List of supported license types.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedLicenseTypes?: LicenseTypeCapability[];
    /**
     * The included (free) max size.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly includedMaxSize?: MaxSizeCapability;
    /**
     * Whether or not zone redundancy is supported for the service objective.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly zoneRedundant?: boolean;
    /**
     * Supported time range for auto pause delay
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedAutoPauseDelay?: AutoPauseDelayTimeRange;
    /**
     * List of supported min capacities
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly supportedMinCapacities?: MinCapacityCapability[];
    /**
     * The compute model
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly computeModel?: string;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/** Represents the response to a get database service objectives request. */
export declare interface ServiceObjectiveListResult {
    /** The list of database service objectives. */
    value: ServiceObjective[];
}

/**
 * Defines values for ServiceObjectiveName. \
 * {@link KnownServiceObjectiveName} can be used interchangeably with ServiceObjectiveName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **System** \
 * **System0** \
 * **System1** \
 * **System2** \
 * **System3** \
 * **System4** \
 * **System2L** \
 * **System3L** \
 * **System4L** \
 * **Free** \
 * **Basic** \
 * **S0** \
 * **S1** \
 * **S2** \
 * **S3** \
 * **S4** \
 * **S6** \
 * **S7** \
 * **S9** \
 * **S12** \
 * **P1** \
 * **P2** \
 * **P3** \
 * **P4** \
 * **P6** \
 * **P11** \
 * **P15** \
 * **PRS1** \
 * **PRS2** \
 * **PRS4** \
 * **PRS6** \
 * **DW100** \
 * **DW200** \
 * **DW300** \
 * **DW400** \
 * **DW500** \
 * **DW600** \
 * **DW1000** \
 * **DW1200** \
 * **DW1000c** \
 * **DW1500** \
 * **DW1500c** \
 * **DW2000** \
 * **DW2000c** \
 * **DW3000** \
 * **DW2500c** \
 * **DW3000c** \
 * **DW6000** \
 * **DW5000c** \
 * **DW6000c** \
 * **DW7500c** \
 * **DW10000c** \
 * **DW15000c** \
 * **DW30000c** \
 * **DS100** \
 * **DS200** \
 * **DS300** \
 * **DS400** \
 * **DS500** \
 * **DS600** \
 * **DS1000** \
 * **DS1200** \
 * **DS1500** \
 * **DS2000** \
 * **ElasticPool**
 */
export declare type ServiceObjectiveName = string;

/** Interface representing a ServiceObjectives. */
export declare interface ServiceObjectives {
    /**
     * Returns database service objectives.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: ServiceObjectivesListByServerOptionalParams): PagedAsyncIterableIterator<ServiceObjective>;
    /**
     * Gets a database service objective.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param serviceObjectiveName The name of the service objective to retrieve.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, serviceObjectiveName: string, options?: ServiceObjectivesGetOptionalParams): Promise<ServiceObjectivesGetResponse>;
}

/** Optional parameters. */
export declare interface ServiceObjectivesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServiceObjectivesGetResponse = ServiceObjective;

/** Optional parameters. */
export declare interface ServiceObjectivesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type ServiceObjectivesListByServerResponse = ServiceObjectiveListResult;

/** Represents a Service Tier Advisor. */
export declare type ServiceTierAdvisor = ProxyResource & {
    /**
     * The observation period start (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly observationPeriodStart?: Date;
    /**
     * The observation period start (ISO8601 format).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly observationPeriodEnd?: Date;
    /**
     * The activeTimeRatio for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly activeTimeRatio?: number;
    /**
     * Gets or sets minDtu for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minDtu?: number;
    /**
     * Gets or sets avgDtu for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly avgDtu?: number;
    /**
     * Gets or sets maxDtu for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxDtu?: number;
    /**
     * Gets or sets maxSizeInGB for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxSizeInGB?: number;
    /**
     * Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceLevelObjectiveUsageMetrics?: SloUsageMetric[];
    /**
     * Gets or sets currentServiceLevelObjective for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentServiceLevelObjective?: string;
    /**
     * Gets or sets currentServiceLevelObjectiveId for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentServiceLevelObjectiveId?: string;
    /**
     * Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly usageBasedRecommendationServiceLevelObjective?: string;
    /**
     * Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly usageBasedRecommendationServiceLevelObjectiveId?: string;
    /**
     * Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseSizeBasedRecommendationServiceLevelObjective?: string;
    /**
     * Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseSizeBasedRecommendationServiceLevelObjectiveId?: string;
    /**
     * Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly disasterPlanBasedRecommendationServiceLevelObjective?: string;
    /**
     * Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly disasterPlanBasedRecommendationServiceLevelObjectiveId?: string;
    /**
     * Gets or sets overallRecommendationServiceLevelObjective for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly overallRecommendationServiceLevelObjective?: string;
    /**
     * Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly overallRecommendationServiceLevelObjectiveId?: string;
    /**
     * Gets or sets confidence for service tier advisor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly confidence?: number;
};

/** Represents the response to a list service tier advisor request. */
export declare interface ServiceTierAdvisorListResult {
    /** The list of service tier advisors for specified database. */
    value: ServiceTierAdvisor[];
}

/** Interface representing a ServiceTierAdvisors. */
export declare interface ServiceTierAdvisors {
    /**
     * Returns service tier advisors for specified database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: ServiceTierAdvisorsListByDatabaseOptionalParams): PagedAsyncIterableIterator<ServiceTierAdvisor>;
    /**
     * Gets a service tier advisor.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of database.
     * @param serviceTierAdvisorName The name of service tier advisor.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string, options?: ServiceTierAdvisorsGetOptionalParams): Promise<ServiceTierAdvisorsGetResponse>;
}

/** Optional parameters. */
export declare interface ServiceTierAdvisorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServiceTierAdvisorsGetResponse = ServiceTierAdvisor;

/** Optional parameters. */
export declare interface ServiceTierAdvisorsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type ServiceTierAdvisorsListByDatabaseResponse = ServiceTierAdvisorListResult;

/**
 * Defines values for ShortTermRetentionPolicyName. \
 * {@link KnownShortTermRetentionPolicyName} can be used interchangeably with ShortTermRetentionPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type ShortTermRetentionPolicyName = string;

/** An ARM Resource SKU. */
export declare interface Sku {
    /** The name of the SKU, typically, a letter + Number code, e.g. P3. */
    name: string;
    /** The tier or edition of the particular SKU, e.g. Basic, Premium. */
    tier?: string;
    /** Size of the particular SKU */
    size?: string;
    /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
    family?: string;
    /** Capacity of the particular SKU. */
    capacity?: number;
}

/** A Slo Usage Metric. */
export declare interface SloUsageMetric {
    /**
     * The serviceLevelObjective for SLO usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceLevelObjective?: ServiceObjectiveName;
    /**
     * The serviceLevelObjectiveId for SLO usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceLevelObjectiveId?: string;
    /**
     * Gets or sets inRangeTimeRatio for SLO usage metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inRangeTimeRatio?: number;
}

export declare class SqlManagementClient extends SqlManagementClientContext {
    /**
     * Initializes a new instance of the SqlManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription ID that identifies an Azure subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: SqlManagementClientOptionalParams);
    recoverableDatabases: RecoverableDatabases;
    restorableDroppedDatabases: RestorableDroppedDatabases;
    serverConnectionPolicies: ServerConnectionPolicies;
    databaseThreatDetectionPolicies: DatabaseThreatDetectionPolicies;
    dataMaskingPolicies: DataMaskingPolicies;
    dataMaskingRules: DataMaskingRules;
    firewallRules: FirewallRules;
    geoBackupPolicies: GeoBackupPolicies;
    databases: Databases;
    elasticPools: ElasticPools;
    recommendedElasticPools: RecommendedElasticPools;
    replicationLinks: ReplicationLinks;
    serverCommunicationLinks: ServerCommunicationLinks;
    serviceObjectives: ServiceObjectives;
    elasticPoolActivities: ElasticPoolActivities;
    elasticPoolDatabaseActivities: ElasticPoolDatabaseActivities;
    serviceTierAdvisors: ServiceTierAdvisors;
    transparentDataEncryptions: TransparentDataEncryptions;
    transparentDataEncryptionActivities: TransparentDataEncryptionActivities;
    serverUsages: ServerUsages;
    databaseUsages: DatabaseUsages;
    databaseAutomaticTuning: DatabaseAutomaticTuning;
    encryptionProtectors: EncryptionProtectors;
    failoverGroups: FailoverGroups;
    operations: Operations;
    serverKeys: ServerKeys;
    syncAgents: SyncAgents;
    syncGroups: SyncGroups;
    syncMembers: SyncMembers;
    subscriptionUsages: SubscriptionUsages;
    virtualClusters: VirtualClusters;
    virtualNetworkRules: VirtualNetworkRules;
    extendedDatabaseBlobAuditingPolicies: ExtendedDatabaseBlobAuditingPolicies;
    extendedServerBlobAuditingPolicies: ExtendedServerBlobAuditingPolicies;
    serverBlobAuditingPolicies: ServerBlobAuditingPolicies;
    databaseBlobAuditingPolicies: DatabaseBlobAuditingPolicies;
    databaseVulnerabilityAssessmentRuleBaselines: DatabaseVulnerabilityAssessmentRuleBaselines;
    databaseVulnerabilityAssessments: DatabaseVulnerabilityAssessments;
    jobAgents: JobAgents;
    jobCredentials: JobCredentials;
    jobExecutions: JobExecutions;
    jobs: Jobs;
    jobStepExecutions: JobStepExecutions;
    jobSteps: JobSteps;
    jobTargetExecutions: JobTargetExecutions;
    jobTargetGroups: JobTargetGroups;
    jobVersions: JobVersions;
    longTermRetentionBackups: LongTermRetentionBackups;
    backupLongTermRetentionPolicies: BackupLongTermRetentionPolicies;
    managedBackupShortTermRetentionPolicies: ManagedBackupShortTermRetentionPolicies;
    managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies;
    serverAutomaticTuning: ServerAutomaticTuning;
    serverDnsAliases: ServerDnsAliases;
    serverSecurityAlertPolicies: ServerSecurityAlertPolicies;
    restorableDroppedManagedDatabases: RestorableDroppedManagedDatabases;
    restorePoints: RestorePoints;
    managedDatabaseSecurityAlertPolicies: ManagedDatabaseSecurityAlertPolicies;
    managedServerSecurityAlertPolicies: ManagedServerSecurityAlertPolicies;
    sensitivityLabels: SensitivityLabels;
    managedInstanceAdministrators: ManagedInstanceAdministrators;
    databaseOperations: DatabaseOperations;
    elasticPoolOperations: ElasticPoolOperations;
    databaseVulnerabilityAssessmentScans: DatabaseVulnerabilityAssessmentScans;
    managedDatabaseVulnerabilityAssessmentRuleBaselines: ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
    managedDatabaseVulnerabilityAssessmentScans: ManagedDatabaseVulnerabilityAssessmentScans;
    managedDatabaseVulnerabilityAssessments: ManagedDatabaseVulnerabilityAssessments;
    instanceFailoverGroups: InstanceFailoverGroups;
    backupShortTermRetentionPolicies: BackupShortTermRetentionPolicies;
    tdeCertificates: TdeCertificates;
    managedInstanceTdeCertificates: ManagedInstanceTdeCertificates;
    managedInstanceKeys: ManagedInstanceKeys;
    managedInstanceEncryptionProtectors: ManagedInstanceEncryptionProtectors;
    recoverableManagedDatabases: RecoverableManagedDatabases;
    managedInstanceVulnerabilityAssessments: ManagedInstanceVulnerabilityAssessments;
    serverVulnerabilityAssessments: ServerVulnerabilityAssessments;
    managedDatabaseSensitivityLabels: ManagedDatabaseSensitivityLabels;
    instancePools: InstancePools;
    usages: Usages;
    managedInstances: ManagedInstances;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    servers: Servers;
    capabilities: Capabilities;
    longTermRetentionManagedInstanceBackups: LongTermRetentionManagedInstanceBackups;
    managedInstanceLongTermRetentionPolicies: ManagedInstanceLongTermRetentionPolicies;
    workloadGroups: WorkloadGroups;
    workloadClassifiers: WorkloadClassifiers;
    managedDatabaseRestoreDetails: ManagedDatabaseRestoreDetails;
    managedDatabases: ManagedDatabases;
    serverAzureADAdministrators: ServerAzureADAdministrators;
    managedInstanceOperations: ManagedInstanceOperations;
}

export declare class SqlManagementClientContext extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
    /**
     * Initializes a new instance of the SqlManagementClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription ID that identifies an Azure subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: SqlManagementClientOptionalParams);
}

/** Optional parameters. */
export declare interface SqlManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** The storage account type capability. */
export declare interface StorageCapability {
    /**
     * The storage account type for the database's backups.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageAccountType?: StorageCapabilityStorageAccountType;
    /**
     * The status of the capability.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: CapabilityStatus;
    /** The reason for the capability not being available. */
    reason?: string;
}

/**
 * Defines values for StorageCapabilityStorageAccountType. \
 * {@link KnownStorageCapabilityStorageAccountType} can be used interchangeably with StorageCapabilityStorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GRS** \
 * **LRS** \
 * **ZRS**
 */
export declare type StorageCapabilityStorageAccountType = string;

/** Defines values for StorageKeyType. */
export declare type StorageKeyType = "StorageAccessKey" | "SharedAccessKey";

/** Usage Metric of a Subscription in a Location. */
export declare type SubscriptionUsage = ProxyResource & {
    /**
     * User-readable name of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * Current value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * Boundary value of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Unit of the metric.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
};

/** A list of subscription usage metrics in a location. */
export declare interface SubscriptionUsageListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SubscriptionUsage[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a SubscriptionUsages. */
export declare interface SubscriptionUsages {
    /**
     * Gets all subscription usage metrics in a given location.
     * @param locationName The name of the region where the resource is located.
     * @param options The options parameters.
     */
    listByLocation(locationName: string, options?: SubscriptionUsagesListByLocationOptionalParams): PagedAsyncIterableIterator<SubscriptionUsage>;
    /**
     * Gets a subscription usage metric.
     * @param locationName The name of the region where the resource is located.
     * @param usageName Name of usage metric to return.
     * @param options The options parameters.
     */
    get(locationName: string, usageName: string, options?: SubscriptionUsagesGetOptionalParams): Promise<SubscriptionUsagesGetResponse>;
}

/** Optional parameters. */
export declare interface SubscriptionUsagesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SubscriptionUsagesGetResponse = SubscriptionUsage;

/** Optional parameters. */
export declare interface SubscriptionUsagesListByLocationNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocationNext operation. */
export declare type SubscriptionUsagesListByLocationNextResponse = SubscriptionUsageListResult;

/** Optional parameters. */
export declare interface SubscriptionUsagesListByLocationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByLocation operation. */
export declare type SubscriptionUsagesListByLocationResponse = SubscriptionUsageListResult;

/** An Azure SQL Database sync agent. */
export declare type SyncAgent = ProxyResource & {
    /**
     * Name of the sync agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly namePropertiesName?: string;
    /** ARM resource id of the sync database in the sync agent. */
    syncDatabaseId?: string;
    /**
     * Last alive time of the sync agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastAliveTime?: Date;
    /**
     * State of the sync agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: SyncAgentState;
    /**
     * If the sync agent version is up to date.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isUpToDate?: boolean;
    /**
     * Expiration time of the sync agent version.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expiryTime?: Date;
    /**
     * Version of the sync agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly version?: string;
};

/** Properties of an Azure SQL Database sync agent key. */
export declare interface SyncAgentKeyProperties {
    /**
     * Key of sync agent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly syncAgentKey?: string;
}

/** An Azure SQL Database sync agent linked database. */
export declare type SyncAgentLinkedDatabase = ProxyResource & {
    /**
     * Type of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseType?: SyncMemberDbType;
    /**
     * Id of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseId?: string;
    /**
     * Description of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly description?: string;
    /**
     * Server name of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serverName?: string;
    /**
     * Database name of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly databaseName?: string;
    /**
     * User name of the sync agent linked database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly userName?: string;
};

/** A list of sync agent linked databases. */
export declare interface SyncAgentLinkedDatabaseListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncAgentLinkedDatabase[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A list of sync agents. */
export declare interface SyncAgentListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncAgent[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a SyncAgents. */
export declare interface SyncAgents {
    /**
     * Lists sync agents in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: SyncAgentsListByServerOptionalParams): PagedAsyncIterableIterator<SyncAgent>;
    /**
     * Lists databases linked to a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param options The options parameters.
     */
    listLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, options?: SyncAgentsListLinkedDatabasesOptionalParams): PagedAsyncIterableIterator<SyncAgentLinkedDatabase>;
    /**
     * Gets a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, syncAgentName: string, options?: SyncAgentsGetOptionalParams): Promise<SyncAgentsGetResponse>;
    /**
     * Creates or updates a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param parameters The requested sync agent resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, syncAgentName: string, parameters: SyncAgent, options?: SyncAgentsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SyncAgentsCreateOrUpdateResponse>, SyncAgentsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param parameters The requested sync agent resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, syncAgentName: string, parameters: SyncAgent, options?: SyncAgentsCreateOrUpdateOptionalParams): Promise<SyncAgentsCreateOrUpdateResponse>;
    /**
     * Deletes a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, syncAgentName: string, options?: SyncAgentsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a sync agent.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, syncAgentName: string, options?: SyncAgentsDeleteOptionalParams): Promise<void>;
    /**
     * Generates a sync agent key.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server on which the sync agent is hosted.
     * @param syncAgentName The name of the sync agent.
     * @param options The options parameters.
     */
    generateKey(resourceGroupName: string, serverName: string, syncAgentName: string, options?: SyncAgentsGenerateKeyOptionalParams): Promise<SyncAgentsGenerateKeyResponse>;
}

/** Optional parameters. */
export declare interface SyncAgentsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SyncAgentsCreateOrUpdateResponse = SyncAgent;

/** Optional parameters. */
export declare interface SyncAgentsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SyncAgentsGenerateKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the generateKey operation. */
export declare type SyncAgentsGenerateKeyResponse = SyncAgentKeyProperties;

/** Optional parameters. */
export declare interface SyncAgentsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SyncAgentsGetResponse = SyncAgent;

/** Optional parameters. */
export declare interface SyncAgentsListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type SyncAgentsListByServerNextResponse = SyncAgentListResult;

/** Optional parameters. */
export declare interface SyncAgentsListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type SyncAgentsListByServerResponse = SyncAgentListResult;

/** Optional parameters. */
export declare interface SyncAgentsListLinkedDatabasesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listLinkedDatabasesNext operation. */
export declare type SyncAgentsListLinkedDatabasesNextResponse = SyncAgentLinkedDatabaseListResult;

/** Optional parameters. */
export declare interface SyncAgentsListLinkedDatabasesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listLinkedDatabases operation. */
export declare type SyncAgentsListLinkedDatabasesResponse = SyncAgentLinkedDatabaseListResult;

/**
 * Defines values for SyncAgentState. \
 * {@link KnownSyncAgentState} can be used interchangeably with SyncAgentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Online** \
 * **Offline** \
 * **NeverConnected**
 */
export declare type SyncAgentState = string;

/**
 * Defines values for SyncConflictResolutionPolicy. \
 * {@link KnownSyncConflictResolutionPolicy} can be used interchangeably with SyncConflictResolutionPolicy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HubWin** \
 * **MemberWin**
 */
export declare type SyncConflictResolutionPolicy = string;

/** A list of sync database ID properties. */
export declare interface SyncDatabaseIdListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncDatabaseIdProperties[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Properties of the sync database id. */
export declare interface SyncDatabaseIdProperties {
    /**
     * ARM resource id of sync database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/**
 * Defines values for SyncDirection. \
 * {@link KnownSyncDirection} can be used interchangeably with SyncDirection,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Bidirectional** \
 * **OneWayMemberToHub** \
 * **OneWayHubToMember**
 */
export declare type SyncDirection = string;

/** Properties of the database full schema. */
export declare interface SyncFullSchemaProperties {
    /**
     * List of tables in the database full schema.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tables?: SyncFullSchemaTable[];
    /**
     * Last update time of the database schema.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastUpdateTime?: Date;
}

/** A list of sync schema properties. */
export declare interface SyncFullSchemaPropertiesListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncFullSchemaProperties[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Properties of the table in the database full schema. */
export declare interface SyncFullSchemaTable {
    /**
     * List of columns in the table of database full schema.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly columns?: SyncFullSchemaTableColumn[];
    /**
     * Error id of the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorId?: string;
    /**
     * If there is error in the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasError?: boolean;
    /**
     * Name of the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Quoted name of the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly quotedName?: string;
}

/** Properties of the column in the table of database full schema. */
export declare interface SyncFullSchemaTableColumn {
    /**
     * Data size of the column.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dataSize?: string;
    /**
     * Data type of the column.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly dataType?: string;
    /**
     * Error id of the column.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errorId?: string;
    /**
     * If there is error in the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hasError?: boolean;
    /**
     * If it is the primary key of the table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly isPrimaryKey?: boolean;
    /**
     * Name of the column.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Quoted name of the column.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly quotedName?: string;
}

/** An Azure SQL Database sync group. */
export declare type SyncGroup = ProxyResource & {
    /** Sync interval of the sync group. */
    interval?: number;
    /**
     * Last sync time of the sync group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastSyncTime?: Date;
    /** Conflict resolution policy of the sync group. */
    conflictResolutionPolicy?: SyncConflictResolutionPolicy;
    /** ARM resource id of the sync database in the sync group. */
    syncDatabaseId?: string;
    /** User name for the sync group hub database credential. */
    hubDatabaseUserName?: string;
    /** Password for the sync group hub database credential. */
    hubDatabasePassword?: string;
    /**
     * Sync state of the sync group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly syncState?: SyncGroupState;
    /** Sync schema of the sync group. */
    schema?: SyncGroupSchema;
};

/** A list of sync groups. */
export declare interface SyncGroupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncGroup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** A list of sync group log properties. */
export declare interface SyncGroupLogListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncGroupLogProperties[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Properties of an Azure SQL Database sync group log. */
export declare interface SyncGroupLogProperties {
    /**
     * Timestamp of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly timestamp?: Date;
    /**
     * Type of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: SyncGroupLogType;
    /**
     * Source of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly source?: string;
    /**
     * Details of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly details?: string;
    /**
     * TracingId of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tracingId?: string;
    /**
     * OperationStatus of the sync group log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationStatus?: string;
}

/**
 * Defines values for SyncGroupLogType. \
 * {@link KnownSyncGroupLogType} can be used interchangeably with SyncGroupLogType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **All** \
 * **Error** \
 * **Warning** \
 * **Success**
 */
export declare type SyncGroupLogType = string;

/** Interface representing a SyncGroups. */
export declare interface SyncGroups {
    /**
     * Gets a collection of sync database ids.
     * @param locationName The name of the region where the resource is located.
     * @param options The options parameters.
     */
    listSyncDatabaseIds(locationName: string, options?: SyncGroupsListSyncDatabaseIdsOptionalParams): PagedAsyncIterableIterator<SyncDatabaseIdProperties>;
    /**
     * Gets a collection of hub database schemas.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    listHubSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsListHubSchemasOptionalParams): PagedAsyncIterableIterator<SyncFullSchemaProperties>;
    /**
     * Gets a collection of sync group logs.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param startTime Get logs generated after this time.
     * @param endTime Get logs generated before this time.
     * @param typeParam The types of logs to retrieve.
     * @param options The options parameters.
     */
    listLogs(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, startTime: string, endTime: string, typeParam: Enum21, options?: SyncGroupsListLogsOptionalParams): PagedAsyncIterableIterator<SyncGroupLogProperties>;
    /**
     * Lists sync groups under a hub database.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: SyncGroupsListByDatabaseOptionalParams): PagedAsyncIterableIterator<SyncGroup>;
    /**
     * Refreshes a hub database schema.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    beginRefreshHubSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsRefreshHubSchemaOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Refreshes a hub database schema.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    beginRefreshHubSchemaAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsRefreshHubSchemaOptionalParams): Promise<void>;
    /**
     * Cancels a sync group synchronization.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    cancelSync(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsCancelSyncOptionalParams): Promise<void>;
    /**
     * Triggers a sync group synchronization.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    triggerSync(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsTriggerSyncOptionalParams): Promise<void>;
    /**
     * Gets a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsGetOptionalParams): Promise<SyncGroupsGetResponse>;
    /**
     * Creates or updates a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param parameters The requested sync group resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, parameters: SyncGroup, options?: SyncGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SyncGroupsCreateOrUpdateResponse>, SyncGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param parameters The requested sync group resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, parameters: SyncGroup, options?: SyncGroupsCreateOrUpdateOptionalParams): Promise<SyncGroupsCreateOrUpdateResponse>;
    /**
     * Deletes a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Updates a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param parameters The requested sync group resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, parameters: SyncGroup, options?: SyncGroupsUpdateOptionalParams): Promise<PollerLike<PollOperationState<SyncGroupsUpdateResponse>, SyncGroupsUpdateResponse>>;
    /**
     * Updates a sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param parameters The requested sync group resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, parameters: SyncGroup, options?: SyncGroupsUpdateOptionalParams): Promise<SyncGroupsUpdateResponse>;
}

/** Optional parameters. */
export declare interface SyncGroupsCancelSyncOptionalParams extends coreClient.OperationOptions {
}

/** Properties of sync group schema. */
export declare interface SyncGroupSchema {
    /** List of tables in sync group schema. */
    tables?: SyncGroupSchemaTable[];
    /** Name of master sync member where the schema is from. */
    masterSyncMemberName?: string;
}

/** Properties of table in sync group schema. */
export declare interface SyncGroupSchemaTable {
    /** List of columns in sync group schema. */
    columns?: SyncGroupSchemaTableColumn[];
    /** Quoted name of sync group schema table. */
    quotedName?: string;
}

/** Properties of column in sync group table. */
export declare interface SyncGroupSchemaTableColumn {
    /** Quoted name of sync group table column. */
    quotedName?: string;
    /** Data size of the column. */
    dataSize?: string;
    /** Data type of the column. */
    dataType?: string;
}

/** Optional parameters. */
export declare interface SyncGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SyncGroupsCreateOrUpdateResponse = SyncGroup;

/** Optional parameters. */
export declare interface SyncGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SyncGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SyncGroupsGetResponse = SyncGroup;

/** Optional parameters. */
export declare interface SyncGroupsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type SyncGroupsListByDatabaseNextResponse = SyncGroupListResult;

/** Optional parameters. */
export declare interface SyncGroupsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type SyncGroupsListByDatabaseResponse = SyncGroupListResult;

/** Optional parameters. */
export declare interface SyncGroupsListHubSchemasNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHubSchemasNext operation. */
export declare type SyncGroupsListHubSchemasNextResponse = SyncFullSchemaPropertiesListResult;

/** Optional parameters. */
export declare interface SyncGroupsListHubSchemasOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listHubSchemas operation. */
export declare type SyncGroupsListHubSchemasResponse = SyncFullSchemaPropertiesListResult;

/** Optional parameters. */
export declare interface SyncGroupsListLogsNextOptionalParams extends coreClient.OperationOptions {
    /** The continuation token for this operation. */
    continuationToken?: string;
}

/** Contains response data for the listLogsNext operation. */
export declare type SyncGroupsListLogsNextResponse = SyncGroupLogListResult;

/** Optional parameters. */
export declare interface SyncGroupsListLogsOptionalParams extends coreClient.OperationOptions {
    /** The continuation token for this operation. */
    continuationToken?: string;
}

/** Contains response data for the listLogs operation. */
export declare type SyncGroupsListLogsResponse = SyncGroupLogListResult;

/** Optional parameters. */
export declare interface SyncGroupsListSyncDatabaseIdsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSyncDatabaseIdsNext operation. */
export declare type SyncGroupsListSyncDatabaseIdsNextResponse = SyncDatabaseIdListResult;

/** Optional parameters. */
export declare interface SyncGroupsListSyncDatabaseIdsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listSyncDatabaseIds operation. */
export declare type SyncGroupsListSyncDatabaseIdsResponse = SyncDatabaseIdListResult;

/** Optional parameters. */
export declare interface SyncGroupsRefreshHubSchemaOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for SyncGroupState. \
 * {@link KnownSyncGroupState} can be used interchangeably with SyncGroupState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotReady** \
 * **Error** \
 * **Warning** \
 * **Progressing** \
 * **Good**
 */
export declare type SyncGroupState = string;

/** Optional parameters. */
export declare interface SyncGroupsTriggerSyncOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface SyncGroupsUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type SyncGroupsUpdateResponse = SyncGroup;

/** An Azure SQL Database sync member. */
export declare type SyncMember = ProxyResource & {
    /** Database type of the sync member. */
    databaseType?: SyncMemberDbType;
    /** ARM resource id of the sync agent in the sync member. */
    syncAgentId?: string;
    /** SQL Server database id of the sync member. */
    sqlServerDatabaseId?: string;
    /** Server name of the member database in the sync member */
    serverName?: string;
    /** Database name of the member database in the sync member. */
    databaseName?: string;
    /** User name of the member database in the sync member. */
    userName?: string;
    /** Password of the member database in the sync member. */
    password?: string;
    /** Sync direction of the sync member. */
    syncDirection?: SyncDirection;
    /**
     * Sync state of the sync member.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly syncState?: SyncMemberState;
};

/**
 * Defines values for SyncMemberDbType. \
 * {@link KnownSyncMemberDbType} can be used interchangeably with SyncMemberDbType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureSqlDatabase** \
 * **SqlServerDatabase**
 */
export declare type SyncMemberDbType = string;

/** A list of Azure SQL Database sync members. */
export declare interface SyncMemberListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: SyncMember[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a SyncMembers. */
export declare interface SyncMembers {
    /**
     * Lists sync members in the given sync group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group.
     * @param options The options parameters.
     */
    listBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, options?: SyncMembersListBySyncGroupOptionalParams): PagedAsyncIterableIterator<SyncMember>;
    /**
     * Gets a sync member database schema.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    listMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersListMemberSchemasOptionalParams): PagedAsyncIterableIterator<SyncFullSchemaProperties>;
    /**
     * Gets a sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersGetOptionalParams): Promise<SyncMembersGetResponse>;
    /**
     * Creates or updates a sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param parameters The requested sync member resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: SyncMember, options?: SyncMembersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SyncMembersCreateOrUpdateResponse>, SyncMembersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param parameters The requested sync member resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: SyncMember, options?: SyncMembersCreateOrUpdateOptionalParams): Promise<SyncMembersCreateOrUpdateResponse>;
    /**
     * Deletes a sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersDeleteOptionalParams): Promise<void>;
    /**
     * Updates an existing sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param parameters The requested sync member resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: SyncMember, options?: SyncMembersUpdateOptionalParams): Promise<PollerLike<PollOperationState<SyncMembersUpdateResponse>, SyncMembersUpdateResponse>>;
    /**
     * Updates an existing sync member.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param parameters The requested sync member resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, parameters: SyncMember, options?: SyncMembersUpdateOptionalParams): Promise<SyncMembersUpdateResponse>;
    /**
     * Refreshes a sync member database schema.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    beginRefreshMemberSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersRefreshMemberSchemaOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Refreshes a sync member database schema.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database on which the sync group is hosted.
     * @param syncGroupName The name of the sync group on which the sync member is hosted.
     * @param syncMemberName The name of the sync member.
     * @param options The options parameters.
     */
    beginRefreshMemberSchemaAndWait(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, options?: SyncMembersRefreshMemberSchemaOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface SyncMembersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SyncMembersCreateOrUpdateResponse = SyncMember;

/** Optional parameters. */
export declare interface SyncMembersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SyncMembersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SyncMembersGetResponse = SyncMember;

/** Optional parameters. */
export declare interface SyncMembersListBySyncGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySyncGroupNext operation. */
export declare type SyncMembersListBySyncGroupNextResponse = SyncMemberListResult;

/** Optional parameters. */
export declare interface SyncMembersListBySyncGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySyncGroup operation. */
export declare type SyncMembersListBySyncGroupResponse = SyncMemberListResult;

/** Optional parameters. */
export declare interface SyncMembersListMemberSchemasNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMemberSchemasNext operation. */
export declare type SyncMembersListMemberSchemasNextResponse = SyncFullSchemaPropertiesListResult;

/** Optional parameters. */
export declare interface SyncMembersListMemberSchemasOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listMemberSchemas operation. */
export declare type SyncMembersListMemberSchemasResponse = SyncFullSchemaPropertiesListResult;

/** Optional parameters. */
export declare interface SyncMembersRefreshMemberSchemaOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for SyncMemberState. \
 * {@link KnownSyncMemberState} can be used interchangeably with SyncMemberState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SyncInProgress** \
 * **SyncSucceeded** \
 * **SyncFailed** \
 * **DisabledTombstoneCleanup** \
 * **DisabledBackupRestore** \
 * **SyncSucceededWithWarnings** \
 * **SyncCancelling** \
 * **SyncCancelled** \
 * **UnProvisioned** \
 * **Provisioning** \
 * **Provisioned** \
 * **ProvisionFailed** \
 * **DeProvisioning** \
 * **DeProvisioned** \
 * **DeProvisionFailed** \
 * **Reprovisioning** \
 * **ReprovisionFailed** \
 * **UnReprovisioned**
 */
export declare type SyncMemberState = string;

/** Optional parameters. */
export declare interface SyncMembersUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type SyncMembersUpdateResponse = SyncMember;

/** A TDE certificate that can be uploaded into a server. */
export declare type TdeCertificate = ProxyResource & {
    /** The base64 encoded certificate private blob. */
    privateBlob?: string;
    /** The certificate password. */
    certPassword?: string;
};

/** Interface representing a TdeCertificates. */
export declare interface TdeCertificates {
    /**
     * Creates a TDE certificate for a given server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested TDE certificate to be created or updated.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, serverName: string, parameters: TdeCertificate, options?: TdeCertificatesCreateOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Creates a TDE certificate for a given server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param parameters The requested TDE certificate to be created or updated.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, serverName: string, parameters: TdeCertificate, options?: TdeCertificatesCreateOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface TdeCertificatesCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** ARM tracked top level resource. */
export declare type TrackedResource = Resource & {
    /** Resource location. */
    location: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
};

/** Represents a database transparent data encryption configuration. */
export declare type TransparentDataEncryption = ProxyResource & {
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /** The status of the database transparent data encryption. */
    status?: TransparentDataEncryptionStatus;
};

/** Interface representing a TransparentDataEncryptionActivities. */
export declare interface TransparentDataEncryptionActivities {
    /**
     * Returns a database's transparent data encryption operation result.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the transparent data encryption applies.
     * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
     * @param options The options parameters.
     */
    listByConfiguration(resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptionName, options?: TransparentDataEncryptionActivitiesListByConfigurationOptionalParams): PagedAsyncIterableIterator<TransparentDataEncryptionActivity>;
}

/** Optional parameters. */
export declare interface TransparentDataEncryptionActivitiesListByConfigurationOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByConfiguration operation. */
export declare type TransparentDataEncryptionActivitiesListByConfigurationResponse = TransparentDataEncryptionActivityListResult;

/** Represents a database transparent data encryption Scan. */
export declare type TransparentDataEncryptionActivity = ProxyResource & {
    /**
     * Resource location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly location?: string;
    /**
     * The status of the database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly status?: TransparentDataEncryptionActivityStatus;
    /**
     * The percent complete of the transparent data encryption scan for a database.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly percentComplete?: number;
};

/** Represents the response to a list database transparent data encryption activity request. */
export declare interface TransparentDataEncryptionActivityListResult {
    /** The list of database transparent data encryption activities. */
    value: TransparentDataEncryptionActivity[];
}

/**
 * Defines values for TransparentDataEncryptionActivityStatus. \
 * {@link KnownTransparentDataEncryptionActivityStatus} can be used interchangeably with TransparentDataEncryptionActivityStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Encrypting** \
 * **Decrypting**
 */
export declare type TransparentDataEncryptionActivityStatus = string;

/**
 * Defines values for TransparentDataEncryptionName. \
 * {@link KnownTransparentDataEncryptionName} can be used interchangeably with TransparentDataEncryptionName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **current**
 */
export declare type TransparentDataEncryptionName = string;

/** Interface representing a TransparentDataEncryptions. */
export declare interface TransparentDataEncryptions {
    /**
     * Creates or updates a database's transparent data encryption configuration.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which setting the transparent data encryption
     *                     applies.
     * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
     * @param parameters The required parameters for creating or updating transparent data encryption.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptionName, parameters: TransparentDataEncryption, options?: TransparentDataEncryptionsCreateOrUpdateOptionalParams): Promise<TransparentDataEncryptionsCreateOrUpdateResponse>;
    /**
     * Gets a database's transparent data encryption configuration.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database for which the transparent data encryption applies.
     * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptionName, options?: TransparentDataEncryptionsGetOptionalParams): Promise<TransparentDataEncryptionsGetResponse>;
}

/** Optional parameters. */
export declare interface TransparentDataEncryptionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type TransparentDataEncryptionsCreateOrUpdateResponse = TransparentDataEncryption;

/** Optional parameters. */
export declare interface TransparentDataEncryptionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type TransparentDataEncryptionsGetResponse = TransparentDataEncryption;

/** Defines values for TransparentDataEncryptionStatus. */
export declare type TransparentDataEncryptionStatus = "Enabled" | "Disabled";

/**
 * Defines values for UnitDefinitionType. \
 * {@link KnownUnitDefinitionType} can be used interchangeably with UnitDefinitionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Count** \
 * **Bytes** \
 * **Seconds** \
 * **Percent** \
 * **CountPerSecond** \
 * **BytesPerSecond**
 */
export declare type UnitDefinitionType = string;

/**
 * Defines values for UnitType. \
 * {@link KnownUnitType} can be used interchangeably with UnitType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **count** \
 * **bytes** \
 * **seconds** \
 * **percent** \
 * **countPerSecond** \
 * **bytesPerSecond**
 */
export declare type UnitType = string;

/** Represents the parameters for Unlink Replication Link request. */
export declare interface UnlinkParameters {
    /** Determines whether link will be terminated in a forced or a friendly way. */
    forcedTermination?: boolean;
}

/** ARM usage. */
export declare interface Usage {
    /**
     * Resource ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: Name;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * Usage unit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
    /**
     * Usage current value.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * Usage limit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * Usage requested limit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requestedLimit?: number;
}

/** A list of usages. */
export declare interface UsageListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: Usage[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a Usages. */
export declare interface Usages {
    /**
     * Gets all instance pool usage metrics
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param instancePoolName The name of the instance pool to be retrieved.
     * @param options The options parameters.
     */
    listByInstancePool(resourceGroupName: string, instancePoolName: string, options?: UsagesListByInstancePoolOptionalParams): PagedAsyncIterableIterator<Usage>;
}

/** Optional parameters. */
export declare interface UsagesListByInstancePoolNextOptionalParams extends coreClient.OperationOptions {
    /** Optional request parameter to include managed instance usages within the instance pool. */
    expandChildren?: boolean;
}

/** Contains response data for the listByInstancePoolNext operation. */
export declare type UsagesListByInstancePoolNextResponse = UsageListResult;

/** Optional parameters. */
export declare interface UsagesListByInstancePoolOptionalParams extends coreClient.OperationOptions {
    /** Optional request parameter to include managed instance usages within the instance pool. */
    expandChildren?: boolean;
}

/** Contains response data for the listByInstancePool operation. */
export declare type UsagesListByInstancePoolResponse = UsageListResult;

/** An Azure SQL virtual cluster. */
export declare type VirtualCluster = TrackedResource & {
    /**
     * Subnet resource ID for the virtual cluster.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnetId?: string;
    /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
    family?: string;
    /**
     * List of resources in this virtual cluster.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly childResources?: string[];
};

/** A list of virtual clusters. */
export declare interface VirtualClusterListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: VirtualCluster[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a VirtualClusters. */
export declare interface VirtualClusters {
    /**
     * Gets a list of all virtualClusters in the subscription.
     * @param options The options parameters.
     */
    list(options?: VirtualClustersListOptionalParams): PagedAsyncIterableIterator<VirtualCluster>;
    /**
     * Gets a list of virtual clusters in a resource group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualClustersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualCluster>;
    /**
     * Gets a virtual cluster.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param virtualClusterName The name of the virtual cluster.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualClusterName: string, options?: VirtualClustersGetOptionalParams): Promise<VirtualClustersGetResponse>;
    /**
     * Deletes a virtual cluster.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param virtualClusterName The name of the virtual cluster.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualClusterName: string, options?: VirtualClustersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a virtual cluster.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param virtualClusterName The name of the virtual cluster.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualClusterName: string, options?: VirtualClustersDeleteOptionalParams): Promise<void>;
    /**
     * Updates a virtual cluster.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param virtualClusterName The name of the virtual cluster.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, virtualClusterName: string, parameters: VirtualClusterUpdate, options?: VirtualClustersUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualClustersUpdateResponse>, VirtualClustersUpdateResponse>>;
    /**
     * Updates a virtual cluster.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param virtualClusterName The name of the virtual cluster.
     * @param parameters The requested managed instance resource state.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, virtualClusterName: string, parameters: VirtualClusterUpdate, options?: VirtualClustersUpdateOptionalParams): Promise<VirtualClustersUpdateResponse>;
}

/** Optional parameters. */
export declare interface VirtualClustersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualClustersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualClustersGetResponse = VirtualCluster;

/** Optional parameters. */
export declare interface VirtualClustersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VirtualClustersListByResourceGroupNextResponse = VirtualClusterListResult;

/** Optional parameters. */
export declare interface VirtualClustersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VirtualClustersListByResourceGroupResponse = VirtualClusterListResult;

/** Optional parameters. */
export declare interface VirtualClustersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualClustersListNextResponse = VirtualClusterListResult;

/** Optional parameters. */
export declare interface VirtualClustersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualClustersListResponse = VirtualClusterListResult;

/** Optional parameters. */
export declare interface VirtualClustersUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the update operation. */
export declare type VirtualClustersUpdateResponse = VirtualCluster;

/** An update request for an Azure SQL Database virtual cluster. */
export declare interface VirtualClusterUpdate {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * Subnet resource ID for the virtual cluster.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnetId?: string;
    /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
    family?: string;
    /**
     * List of resources in this virtual cluster.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly childResources?: string[];
}

/** A virtual network rule. */
export declare type VirtualNetworkRule = ProxyResource & {
    /** The ARM resource id of the virtual network subnet. */
    virtualNetworkSubnetId?: string;
    /** Create firewall rule before the virtual network has vnet service endpoint enabled. */
    ignoreMissingVnetServiceEndpoint?: boolean;
    /**
     * Virtual Network Rule State
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: VirtualNetworkRuleState;
};

/** A list of virtual network rules. */
export declare interface VirtualNetworkRuleListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: VirtualNetworkRule[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a VirtualNetworkRules. */
export declare interface VirtualNetworkRules {
    /**
     * Gets a list of virtual network rules in a server.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param options The options parameters.
     */
    listByServer(resourceGroupName: string, serverName: string, options?: VirtualNetworkRulesListByServerOptionalParams): PagedAsyncIterableIterator<VirtualNetworkRule>;
    /**
     * Gets a virtual network rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param virtualNetworkRuleName The name of the virtual network rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: VirtualNetworkRulesGetOptionalParams): Promise<VirtualNetworkRulesGetResponse>;
    /**
     * Creates or updates an existing virtual network rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param virtualNetworkRuleName The name of the virtual network rule.
     * @param parameters The requested virtual Network Rule Resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, parameters: VirtualNetworkRule, options?: VirtualNetworkRulesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkRulesCreateOrUpdateResponse>, VirtualNetworkRulesCreateOrUpdateResponse>>;
    /**
     * Creates or updates an existing virtual network rule.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param virtualNetworkRuleName The name of the virtual network rule.
     * @param parameters The requested virtual Network Rule Resource state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, parameters: VirtualNetworkRule, options?: VirtualNetworkRulesCreateOrUpdateOptionalParams): Promise<VirtualNetworkRulesCreateOrUpdateResponse>;
    /**
     * Deletes the virtual network rule with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param virtualNetworkRuleName The name of the virtual network rule.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: VirtualNetworkRulesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the virtual network rule with the given name.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param virtualNetworkRuleName The name of the virtual network rule.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, options?: VirtualNetworkRulesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VirtualNetworkRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworkRulesCreateOrUpdateResponse = VirtualNetworkRule;

/** Optional parameters. */
export declare interface VirtualNetworkRulesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualNetworkRulesGetResponse = VirtualNetworkRule;

/** Optional parameters. */
export declare interface VirtualNetworkRulesListByServerNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServerNext operation. */
export declare type VirtualNetworkRulesListByServerNextResponse = VirtualNetworkRuleListResult;

/** Optional parameters. */
export declare interface VirtualNetworkRulesListByServerOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByServer operation. */
export declare type VirtualNetworkRulesListByServerResponse = VirtualNetworkRuleListResult;

/**
 * Defines values for VirtualNetworkRuleState. \
 * {@link KnownVirtualNetworkRuleState} can be used interchangeably with VirtualNetworkRuleState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initializing** \
 * **InProgress** \
 * **Ready** \
 * **Deleting** \
 * **Unknown**
 */
export declare type VirtualNetworkRuleState = string;

/**
 * Defines values for VulnerabilityAssessmentName. \
 * {@link KnownVulnerabilityAssessmentName} can be used interchangeably with VulnerabilityAssessmentName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export declare type VulnerabilityAssessmentName = string;

/** Defines values for VulnerabilityAssessmentPolicyBaselineName. */
export declare type VulnerabilityAssessmentPolicyBaselineName = "master" | "default";

/** Properties of a Vulnerability Assessment recurring scans. */
export declare interface VulnerabilityAssessmentRecurringScansProperties {
    /** Recurring scans state. */
    isEnabled?: boolean;
    /** Specifies that the schedule scan notification will be is sent to the subscription administrators. */
    emailSubscriptionAdmins?: boolean;
    /** Specifies an array of e-mail addresses to which the scan notification is sent. */
    emails?: string[];
}

/** Properties of a vulnerability assessment scan error. */
export declare interface VulnerabilityAssessmentScanError {
    /**
     * The error code.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly code?: string;
    /**
     * The error message.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** A vulnerability assessment scan record. */
export declare type VulnerabilityAssessmentScanRecord = ProxyResource & {
    /**
     * The scan ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly scanId?: string;
    /**
     * The scan trigger type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly triggerType?: VulnerabilityAssessmentScanTriggerType;
    /**
     * The scan status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: VulnerabilityAssessmentScanState;
    /**
     * The scan start time (UTC).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The scan end time (UTC).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly endTime?: Date;
    /**
     * The scan errors.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly errors?: VulnerabilityAssessmentScanError[];
    /**
     * The scan results storage container path.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly storageContainerPath?: string;
    /**
     * The number of failed security checks.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly numberOfFailedSecurityChecks?: number;
};

/** A list of vulnerability assessment scan records. */
export declare interface VulnerabilityAssessmentScanRecordListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: VulnerabilityAssessmentScanRecord[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for VulnerabilityAssessmentScanState. \
 * {@link KnownVulnerabilityAssessmentScanState} can be used interchangeably with VulnerabilityAssessmentScanState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **FailedToRun** \
 * **InProgress**
 */
export declare type VulnerabilityAssessmentScanState = string;

/**
 * Defines values for VulnerabilityAssessmentScanTriggerType. \
 * {@link KnownVulnerabilityAssessmentScanTriggerType} can be used interchangeably with VulnerabilityAssessmentScanTriggerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **OnDemand** \
 * **Recurring**
 */
export declare type VulnerabilityAssessmentScanTriggerType = string;

/** Workload classifier operations for a data warehouse */
export declare type WorkloadClassifier = ProxyResource & {
    /** The workload classifier member name. */
    memberName?: string;
    /** The workload classifier label. */
    label?: string;
    /** The workload classifier context. */
    context?: string;
    /** The workload classifier start time for classification. */
    startTime?: string;
    /** The workload classifier end time for classification. */
    endTime?: string;
    /** The workload classifier importance. */
    importance?: string;
};

/** A list of workload classifiers for a workload group. */
export declare interface WorkloadClassifierListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: WorkloadClassifier[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a WorkloadClassifiers. */
export declare interface WorkloadClassifiers {
    /**
     * Gets the list of workload classifiers for a workload group
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifiers from.
     * @param options The options parameters.
     */
    listByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: WorkloadClassifiersListByWorkloadGroupOptionalParams): PagedAsyncIterableIterator<WorkloadClassifier>;
    /**
     * Gets a workload classifier
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifier from.
     * @param workloadClassifierName The name of the workload classifier.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: WorkloadClassifiersGetOptionalParams): Promise<WorkloadClassifiersGetResponse>;
    /**
     * Creates or updates a workload classifier.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifier from.
     * @param workloadClassifierName The name of the workload classifier to create/update.
     * @param parameters The properties of the workload classifier.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, parameters: WorkloadClassifier, options?: WorkloadClassifiersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<WorkloadClassifiersCreateOrUpdateResponse>, WorkloadClassifiersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a workload classifier.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifier from.
     * @param workloadClassifierName The name of the workload classifier to create/update.
     * @param parameters The properties of the workload classifier.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, parameters: WorkloadClassifier, options?: WorkloadClassifiersCreateOrUpdateOptionalParams): Promise<WorkloadClassifiersCreateOrUpdateResponse>;
    /**
     * Deletes a workload classifier.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifier from.
     * @param workloadClassifierName The name of the workload classifier to delete.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: WorkloadClassifiersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a workload classifier.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group from which to receive the classifier from.
     * @param workloadClassifierName The name of the workload classifier to delete.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: WorkloadClassifiersDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface WorkloadClassifiersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type WorkloadClassifiersCreateOrUpdateResponse = WorkloadClassifier;

/** Optional parameters. */
export declare interface WorkloadClassifiersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WorkloadClassifiersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type WorkloadClassifiersGetResponse = WorkloadClassifier;

/** Optional parameters. */
export declare interface WorkloadClassifiersListByWorkloadGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByWorkloadGroupNext operation. */
export declare type WorkloadClassifiersListByWorkloadGroupNextResponse = WorkloadClassifierListResult;

/** Optional parameters. */
export declare interface WorkloadClassifiersListByWorkloadGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByWorkloadGroup operation. */
export declare type WorkloadClassifiersListByWorkloadGroupResponse = WorkloadClassifierListResult;

/** Workload group operations for a data warehouse */
export declare type WorkloadGroup = ProxyResource & {
    /** The workload group minimum percentage resource. */
    minResourcePercent?: number;
    /** The workload group cap percentage resource. */
    maxResourcePercent?: number;
    /** The workload group request minimum grant percentage. */
    minResourcePercentPerRequest?: number;
    /** The workload group request maximum grant percentage. */
    maxResourcePercentPerRequest?: number;
    /** The workload group importance level. */
    importance?: string;
    /** The workload group query execution timeout. */
    queryExecutionTimeout?: number;
};

/** A list of workload groups. */
export declare interface WorkloadGroupListResult {
    /**
     * Array of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: WorkloadGroup[];
    /**
     * Link to retrieve next page of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a WorkloadGroups. */
export declare interface WorkloadGroups {
    /**
     * Gets the list of workload groups
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param options The options parameters.
     */
    listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: WorkloadGroupsListByDatabaseOptionalParams): PagedAsyncIterableIterator<WorkloadGroup>;
    /**
     * Gets a workload group
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: WorkloadGroupsGetOptionalParams): Promise<WorkloadGroupsGetResponse>;
    /**
     * Creates or updates a workload group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group.
     * @param parameters The requested workload group state.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, parameters: WorkloadGroup, options?: WorkloadGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<WorkloadGroupsCreateOrUpdateResponse>, WorkloadGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a workload group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group.
     * @param parameters The requested workload group state.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, parameters: WorkloadGroup, options?: WorkloadGroupsCreateOrUpdateOptionalParams): Promise<WorkloadGroupsCreateOrUpdateResponse>;
    /**
     * Deletes a workload group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group to delete.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: WorkloadGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a workload group.
     * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
     *                          this value from the Azure Resource Manager API or the portal.
     * @param serverName The name of the server.
     * @param databaseName The name of the database.
     * @param workloadGroupName The name of the workload group to delete.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: WorkloadGroupsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface WorkloadGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type WorkloadGroupsCreateOrUpdateResponse = WorkloadGroup;

/** Optional parameters. */
export declare interface WorkloadGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WorkloadGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type WorkloadGroupsGetResponse = WorkloadGroup;

/** Optional parameters. */
export declare interface WorkloadGroupsListByDatabaseNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabaseNext operation. */
export declare type WorkloadGroupsListByDatabaseNextResponse = WorkloadGroupListResult;

/** Optional parameters. */
export declare interface WorkloadGroupsListByDatabaseOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByDatabase operation. */
export declare type WorkloadGroupsListByDatabaseResponse = WorkloadGroupListResult;

export { }
