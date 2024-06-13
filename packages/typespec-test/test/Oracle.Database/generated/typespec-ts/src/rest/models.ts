// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** CloudExadataInfrastructure resource definition */
export interface CloudExadataInfrastructure extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudExadataInfrastructureProperties;
  /** CloudExadataInfrastructure zones */
  zones: string[];
}

/** CloudExadataInfrastructure resource model */
export interface CloudExadataInfrastructureProperties {
  /** The number of compute servers for the cloud Exadata infrastructure. */
  computeCount?: number;
  /** The number of storage servers for the cloud Exadata infrastructure. */
  storageCount?: number;
  /** maintenanceWindow property */
  maintenanceWindow?: MaintenanceWindow;
  /** The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. */
  customerContacts?: Array<CustomerContact>;
  /** The model name of the cloud Exadata infrastructure resource. */
  shape: string;
  /** The name for the Exadata infrastructure. */
  displayName: string;
}

/** MaintenanceWindow resource properties */
export interface MaintenanceWindow {
  /** The maintenance window scheduling preference. */
  preference?: Preference;
  /** Months during the year when maintenance should be performed. */
  months?: Array<Month>;
  /** Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. For example, to allow maintenance during the 2nd week of the month (from the 8th day to the 14th day of the month), use the value 2. Maintenance cannot be scheduled for the fifth week of months that contain more than 28 days. Note that this parameter works in conjunction with the  daysOfWeek and hoursOfDay parameters to allow you to specify specific days of the week and hours that maintenance will be performed. */
  weeksOfMonth?: number[];
  /** Days during the week when maintenance should be performed. */
  daysOfWeek?: Array<DayOfWeek>;
  /** The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are - 0 - represents time slot 0:00 - 3:59 UTC - 4 - represents time slot 4:00 - 7:59 UTC - 8 - represents time slot 8:00 - 11:59 UTC - 12 - represents time slot 12:00 - 15:59 UTC - 16 - represents time slot 16:00 - 19:59 UTC - 20 - represents time slot 20:00 - 23:59 UTC */
  hoursOfDay?: number[];
  /** Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4. */
  leadTimeInWeeks?: number;
  /** Cloud Exadata infrastructure node patching method. */
  patchingMode?: PatchingMode;
  /** Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive). */
  customActionTimeoutInMins?: number;
  /** If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. */
  isCustomActionTimeoutEnabled?: boolean;
  /** is Monthly Patching Enabled */
  isMonthlyPatchingEnabled?: boolean;
}

/** Month resource properties */
export interface Month {
  /** Name of the month of the year. */
  name: MonthName;
}

/** DayOfWeek resource properties */
export interface DayOfWeek {
  /** Name of the day of the week. */
  name: DayOfWeekName;
}

/** The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). */
export interface EstimatedPatchingTime {}

/** CustomerContact resource properties */
export interface CustomerContact {
  /** The email address used by Oracle to send notifications regarding databases and infrastructure. */
  email: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** The base proxy resource. */
export interface ProxyResource extends Resource {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends ProxyResource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** The provisioning state of the private endpoint connection resource. */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/** The private endpoint resource */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export interface PrivateLinkResource extends ProxyResource {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** DbServer resource model */
export interface DbServer extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbServerProperties;
}

/** DbServer resource properties */
export interface DbServerProperties {}

/** DbServer Patching Properties */
export interface DbServerPatchingDetails {}

/** Virtual IP resource belonging to a vm cluster resource. */
export interface VirtualNetworkAddress extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkAddressProperties;
}

/** virtualNetworkAddress resource properties */
export interface VirtualNetworkAddressProperties {
  /** Virtual network Address address. */
  ipAddress?: string;
  /** Virtual Machine OCID. */
  vmOcid?: string;
}

/** SystemVersion resource Definition */
export interface SystemVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SystemVersionProperties;
}

/** System Version Resource model */
export interface SystemVersionProperties {}

/** The DbNode resource belonging to vmCluster */
export interface DbNode extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbNodeProperties;
}

/** The properties of DbNodeResource */
export interface DbNodeProperties {}

/** GiVersion resource definition */
export interface GiVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GiVersionProperties;
}

/** GiVersion resource model */
export interface GiVersionProperties {}

/** DbSystemShape resource definition */
export interface DbSystemShape extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DbSystemShapeProperties;
}

/** DbSystemShape resource model */
export interface DbSystemShapeProperties {}

/** DnsPrivateView resource definition */
export interface DnsPrivateView extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateViewProperties;
}

/** Views resource model */
export interface DnsPrivateViewProperties {}

/** DnsPrivateZone resource definition */
export interface DnsPrivateZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateZoneProperties;
}

/** Zones resource model */
export interface DnsPrivateZoneProperties {}

/** AutonomousDatabaseBackup resource definition */
export interface AutonomousDatabaseBackup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBackupProperties;
}

/** AutonomousDatabaseBackup resource model */
export interface AutonomousDatabaseBackupProperties {
  /** The user-friendly name for the backup. The name does not have to be unique. */
  displayName?: string;
  /** Retention period, in days, for long-term backups. */
  retentionPeriodInDays?: number;
}

/** AutonomousDatabaseCharacterSets resource definition */
export interface AutonomousDatabaseCharacterSet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseCharacterSetProperties;
}

/** AutonomousDatabaseCharacterSet resource model */
export interface AutonomousDatabaseCharacterSetProperties {}

/** AutonomousDatabaseNationalCharacterSets resource definition */
export interface AutonomousDatabaseNationalCharacterSet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseNationalCharacterSetProperties;
}

/** AutonomousDatabaseNationalCharacterSet resource model */
export interface AutonomousDatabaseNationalCharacterSetProperties {}

/** AutonomousDbVersion resource definition */
export interface AutonomousDbVersion extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDbVersionProperties;
}

/** AutonomousDbVersion resource model */
export interface AutonomousDbVersionProperties {}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** CloudVmCluster resource definition */
export interface CloudVmCluster extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudVmClusterProperties;
}

/** CloudVmCluster resource model */
export interface CloudVmClusterProperties {
  /** The data disk group size to be allocated in GBs per VM. */
  storageSizeInGbs?: number;
  /** The data disk group size to be allocated in TBs. */
  dataStorageSizeInTbs?: number;
  /** The local node storage to be allocated in GBs. */
  dbNodeStorageSizeInGbs?: number;
  /** The memory to be allocated in GBs. */
  memorySizeInGbs?: number;
  /** The time zone of the cloud VM cluster. For details, see [Exadata Infrastructure Time Zones](/Content/Database/References/timezones.htm). */
  timeZone?: string;
  /** The OCID of the zone the cloud VM cluster is associated with. */
  zoneId?: string;
  /** The hostname for the cloud VM cluster. */
  hostname: string;
  /** The domain name for the cloud VM cluster. */
  domain?: string;
  /** The number of CPU cores enabled on the cloud VM cluster. */
  cpuCoreCount: number;
  /** The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part. */
  ocpuCount?: number;
  /** The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. */
  clusterName?: string;
  /** The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 35, 40, 60 and 80. The default is 80 percent assigned to DATA storage. See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. */
  dataStoragePercentage?: number;
  /** If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster. */
  isLocalBackupEnabled?: boolean;
  /** Cloud Exadata Infrastructure ID */
  cloudExadataInfrastructureId: string;
  /** If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created. */
  isSparseDiskgroupEnabled?: boolean;
  /** Operating system version of the image. */
  systemVersion?: string;
  /** The public key portion of one or more key pairs used for SSH access to the cloud VM cluster. */
  sshPublicKeys: string[];
  /** The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The TCP Single Client Access Name (SCAN) port. The default port is 1521. */
  scanListenerPortTcp?: number;
  /** The TCPS Single Client Access Name (SCAN) port. The default port is 2484. */
  scanListenerPortTcpSsl?: number;
  /** VNET for network connectivity */
  vnetId: string;
  /** Oracle Grid Infrastructure (GI) software version */
  giVersion: string;
  /** Client subnet */
  subnetId: string;
  /** Client OCI backup subnet CIDR, default is 192.168.252.0/22 */
  backupSubnetCidr?: string;
  /** CIDR blocks for additional NSG ingress rules. The VNET CIDRs used to provision the VM Cluster will be added by default. */
  nsgCidrs?: Array<NsgCidr>;
  /** Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  dataCollectionOptions?: DataCollectionOptions;
  /** Display Name */
  displayName: string;
  /** The list of compute servers to be added to the cloud VM cluster. */
  computeNodes?: string[];
  /** The list of DB servers. */
  dbServers?: string[];
}

/** A rule for allowing inbound (INGRESS) IP packets */
export interface NsgCidr {
  /** Conceptually, this is the range of IP addresses that a packet coming into the instance can come from. */
  source: string;
  /** Destination port range to specify particular destination ports for TCP rules. */
  destinationPortRange?: PortRange;
}

/** Port Range to specify particular destination ports for TCP rules. */
export interface PortRange {
  /** The minimum port number, which must not be greater than the maximum port number. */
  min: number;
  /** The maximum port number, which must not be less than the minimum port number. To specify a single port number, set both the min and max to the same value. */
  max: number;
}

/** DataCollectionOptions resource properties */
export interface DataCollectionOptions {
  /** Indicates whether diagnostic collection is enabled for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  isDiagnosticsEventsEnabled?: boolean;
  /** Indicates whether health monitoring is enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isHealthMonitoringEnabled?: boolean;
  /** Indicates whether incident logs and trace collection are enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isIncidentLogsEnabled?: boolean;
}

/** ExadataIormConfig for cloud vm cluster */
export interface ExadataIormConfig {
  /** An array of IORM settings for all the database in the Exadata DB system. */
  dbPlans?: Array<DbIormConfig>;
  /** Additional information about the current lifecycleState. */
  lifecycleDetails?: string;
  /** The current state of IORM configuration for the Exadata DB system. */
  lifecycleState?: IormLifecycleState;
  /** The current value for the IORM objective. The default is AUTO. */
  objective?: Objective;
}

/** DbIormConfig for cloud vm cluster */
export interface DbIormConfig {
  /** The database name. For the default DbPlan, the dbName is default. */
  dbName?: string;
  /** The flash cache limit for this database. This value is internally configured based on the share value assigned to the database. */
  flashCacheLimit?: string;
  /** The relative priority of this database. */
  share?: number;
}

/** Autonomous Database  resource model. */
export interface AutonomousDatabase extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBaseProperties;
}

/** Autonomous Database base resource model. */
export interface AutonomousDatabaseBasePropertiesParent {
  /** Admin password. */
  adminPassword?: string;
  /** The maintenance schedule type of the Autonomous Database Serverless. */
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  /** The character set for the autonomous database. */
  characterSet?: string;
  /** The compute amount (CPUs) available to the database. */
  computeCount?: number;
  /** The compute model of the Autonomous Database. */
  computeModel?: ComputeModel;
  /** The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Customer Contacts. */
  customerContacts?: Array<CustomerContact>;
  /** The quantity of data in the database, in terabytes. */
  dataStorageSizeInTbs?: number;
  /** The size, in gigabytes, of the data volume that will be created and attached to the database. */
  dataStorageSizeInGbs?: number;
  /** A valid Oracle Database version for Autonomous Database. */
  dbVersion?: string;
  /** The Autonomous Database workload type */
  dbWorkload?: WorkloadType;
  /** The user-friendly name for the Autonomous Database. */
  displayName?: string;
  /** Indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Indicates if auto scaling is enabled for the Autonomous Database storage. */
  isAutoScalingForStorageEnabled?: boolean;
  /** The database OCID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Indicates whether the Autonomous Database has local or called in-region Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Specifies if the Autonomous Database requires mTLS connections. */
  isMtlsConnectionRequired?: boolean;
  /** Specifies if the Autonomous Database preview version is being provisioned. */
  isPreviewVersionWithServiceTermsAccepted?: boolean;
  /** The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The character set for the Autonomous Database. */
  ncharacterSet?: string;
  /** The list of scheduled operations. */
  scheduledOperations?: ScheduledOperationsType;
  /** The private endpoint Ip address for the resource. */
  privateEndpointIp?: string;
  /** The resource's private endpoint label. */
  privateEndpointLabel?: string;
  /** Client subnet */
  subnetId?: string;
  /** VNET for network connectivity */
  vnetId?: string;
  /** The Oracle Database Edition that applies to the Autonomous databases. */
  databaseEdition?: DatabaseEditionType;
  /** Autonomous Database ID */
  autonomousDatabaseId?: string;
  /** Details for the long-term backup schedule. */
  longTermBackupSchedule?: LongTermBackUpScheduleDetails;
  /** Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** Indicates the Autonomous Database mode. */
  openMode?: OpenModeType;
  /** The Autonomous Database permission level. */
  permissionLevel?: PermissionLevelType;
  /** The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled. */
  role?: RoleType;
  /** Retention period, in days, for long-term backups */
  backupRetentionPeriodInDays?: number;
  /** The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25'] */
  whitelistedIps?: string[];
  dataBaseType: DataBaseType;
}

/** Autonomous Disaster Recovery standby database details. */
export interface AutonomousDatabaseStandbySummary {
  /** The amount of time, in seconds, that the data of the standby database lags the data of the primary database. Can be used to determine the potential data loss in the event of a failover. */
  lagTimeInSeconds?: number;
  /** The current state of the Autonomous Database. */
  lifecycleState?: AutonomousDatabaseLifecycleState;
  /** Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database. */
  timeDataGuardRoleChanged?: string;
  /** The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  timeDisasterRecoveryRoleChanged?: string;
}

/** The list of scheduled operations. */
export interface ScheduledOperationsType {
  /** Day of week */
  dayOfWeek: DayOfWeek;
  /** auto start time. value must be of ISO-8601 format HH:mm */
  scheduledStartTime?: string;
  /** auto stop time. value must be of ISO-8601 format HH:mm */
  scheduledStopTime?: string;
}

/** Information about Oracle APEX Application Development. */
export interface ApexDetailsType {
  /** The Oracle APEX Application Development version. */
  apexVersion?: string;
  /** The Oracle REST Data Services (ORDS) version. */
  ordsVersion?: string;
}

/** Connection strings to connect to an Oracle Autonomous Database. */
export interface ConnectionStringType {
  /** Returns all connection strings that can be used to connect to the Autonomous Database. */
  allConnectionStrings?: AllConnectionStringType;
  /** The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  dedicated?: string;
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
  /** A list of connection string profiles to allow clients to group, filter and select connection string values based on structured metadata. */
  profiles?: Array<ProfileType>;
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface AllConnectionStringType {
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface ProfileType {
  /** Consumer group used by the connection. */
  consumerGroup?: ConsumerGroup;
  /** A user-friendly name for the connection. */
  displayName: string;
  /** Host format used in connection string. */
  hostFormat: HostFormatType;
  /** True for a regional connection string, applicable to cross-region DG only. */
  isRegional?: boolean;
  /** Protocol used by the connection. */
  protocol: ProtocolType;
  /** Specifies whether the listener performs a direct hand-off of the session, or redirects the session. */
  sessionMode: SessionModeType;
  /** Specifies whether the connection string is using the long (LONG), Easy Connect (EZCONNECT), or Easy Connect Plus (EZCONNECTPLUS) format. */
  syntaxFormat: SyntaxFormatType;
  /** Specifies whether the TLS handshake is using one-way (SERVER) or mutual (MUTUAL) authentication. */
  tlsAuthentication?: TlsAuthenticationType;
  /** Connection string value. */
  value: string;
}

/** The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. */
export interface ConnectionUrlType {
  /** Oracle Application Express (APEX) URL. */
  apexUrl?: string;
  /** The URL of the Database Transforms for the Autonomous Database. */
  databaseTransformsUrl?: string;
  /** The URL of the Graph Studio for the Autonomous Database. */
  graphStudioUrl?: string;
  /** The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database. */
  machineLearningNotebookUrl?: string;
  /** The URL of the MongoDB API for the Autonomous Database. */
  mongoDbUrl?: string;
  /** The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database. */
  ordsUrl?: string;
  /** Oracle SQL Developer Web URL. */
  sqlDevWebUrl?: string;
}

/** Details for the long-term backup schedule. */
export interface LongTermBackUpScheduleDetails {
  /** The frequency of the long-term backup schedule */
  repeatCadence?: RepeatCadenceType;
  /** The timestamp for the long-term backup schedule. For a MONTHLY cadence, months having fewer days than the provided date will have the backup taken on the last day of that month. */
  timeOfBackup?: Date | string;
  /** Retention period, in days, for backups. */
  retentionPeriodInDays?: number;
  /** Indicates if the long-term backup schedule should be deleted. The default value is `FALSE`. */
  isDisabled?: boolean;
}

/** Autonomous Database resource model. */
export interface AutonomousDatabaseProperties
  extends AutonomousDatabaseBasePropertiesParent {
  /** Database type to be created. */
  dataBaseType: "Regular";
}

/** Autonomous Database clone resource model. */
export interface AutonomousDatabaseCloneProperties
  extends AutonomousDatabaseBasePropertiesParent {
  /** Database type to be created. */
  dataBaseType: "Clone";
  /** The source of the database. */
  source?: SourceType;
  /** The Azure ID of the Autonomous Database that was cloned to create the current Autonomous Database. */
  sourceId: string;
  /** The Autonomous Database clone type. */
  cloneType: CloneType;
  /** The refresh mode of the clone. */
  refreshableModel?: RefreshableModelType;
  /** The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database. */
  timeUntilReconnectCloneEnabled?: string;
}

/** The type used for update operations of the CloudExadataInfrastructure. */
export interface CloudExadataInfrastructureUpdate {
  /** CloudExadataInfrastructure zones */
  zones?: string[];
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: CloudExadataInfrastructureUpdateProperties;
}

/** The updatable properties of the CloudExadataInfrastructure. */
export interface CloudExadataInfrastructureUpdateProperties {
  /** The number of compute servers for the cloud Exadata infrastructure. */
  computeCount?: number;
  /** The number of storage servers for the cloud Exadata infrastructure. */
  storageCount?: number;
  /** maintenanceWindow property */
  maintenanceWindow?: MaintenanceWindow;
  /** The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. */
  customerContacts?: Array<CustomerContact>;
  /** The name for the Exadata infrastructure. */
  displayName?: string;
}

/** The type used for update operations of the CloudVmCluster. */
export interface CloudVmClusterUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: CloudVmClusterUpdateProperties;
}

/** The updatable properties of the CloudVmCluster. */
export interface CloudVmClusterUpdateProperties {
  /** The data disk group size to be allocated in GBs per VM. */
  storageSizeInGbs?: number;
  /** The data disk group size to be allocated in TBs. */
  dataStorageSizeInTbs?: number;
  /** The local node storage to be allocated in GBs. */
  dbNodeStorageSizeInGbs?: number;
  /** The memory to be allocated in GBs. */
  memorySizeInGbs?: number;
  /** The number of CPU cores enabled on the cloud VM cluster. */
  cpuCoreCount?: number;
  /** The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part. */
  ocpuCount?: number;
  /** The public key portion of one or more key pairs used for SSH access to the cloud VM cluster. */
  sshPublicKeys?: string[];
  /** The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  dataCollectionOptions?: DataCollectionOptions;
  /** Display Name */
  displayName?: string;
  /** The list of compute servers to be added to the cloud VM cluster. */
  computeNodes?: string[];
}

/** Add/Remove (Virtual Machine) DbNode model */
export interface AddRemoveDbNode {
  /** Db servers ocids */
  dbServers: string[];
}

/** Private Ip Addresses filter */
export interface PrivateIpAddressesFilter {
  /** Subnet OCID */
  subnetId: string;
  /** VCN OCID */
  vnicId: string;
}

/** OracleSubscription resource definition */
export interface OracleSubscription extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: OracleSubscriptionProperties;
  /** Details of the resource plan. */
  plan?: Plan;
}

/** Oracle Subscription resource model */
export interface OracleSubscriptionProperties {
  /** Term Unit. P1Y, P3Y, etc, see Durations https://en.wikipedia.org/wiki/ISO_8601 */
  termUnit?: string;
  /** Product code for the term unit */
  productCode?: string;
  /** Intent for the update operation */
  intent?: Intent;
}

/** Details of the resource plan. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

/** The type used for update operations of the OracleSubscription. */
export interface OracleSubscriptionUpdate {
  /** Details of the resource plan. */
  plan?: PlanUpdate;
  properties?: OracleSubscriptionUpdateProperties;
}

/** ResourcePlanTypeUpdate model definition */
export interface PlanUpdate {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name?: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher?: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product?: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

/** The updatable properties of the OracleSubscription. */
export interface OracleSubscriptionUpdateProperties {
  /** Product code for the term unit */
  productCode?: string;
  /** Intent for the update operation */
  intent?: Intent;
}

/** DbNode action object */
export interface DbNodeAction {
  /** Db action */
  action: DbNodeActionEnum;
}

/** The type used for update operations of the AutonomousDatabase. */
export interface AutonomousDatabaseUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: AutonomousDatabaseUpdateProperties;
}

/** The updatable properties of the AutonomousDatabase. */
export interface AutonomousDatabaseUpdateProperties {
  /** Admin password. */
  adminPassword?: string;
  /** The maintenance schedule type of the Autonomous Database Serverless. */
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleType;
  /** The compute amount (CPUs) available to the database. */
  computeCount?: number;
  /** The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Customer Contacts. */
  customerContacts?: Array<CustomerContact>;
  /** The quantity of data in the database, in terabytes. */
  dataStorageSizeInTbs?: number;
  /** The size, in gigabytes, of the data volume that will be created and attached to the database. */
  dataStorageSizeInGbs?: number;
  /** The user-friendly name for the Autonomous Database. */
  displayName?: string;
  /** Indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Indicates if auto scaling is enabled for the Autonomous Database storage. */
  isAutoScalingForStorageEnabled?: boolean;
  /** The database OCID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Indicates whether the Autonomous Database has local or called in-region Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Specifies if the Autonomous Database requires mTLS connections. */
  isMtlsConnectionRequired?: boolean;
  /** The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModel;
  /** The list of scheduled operations. */
  scheduledOperations?: ScheduledOperationsType;
  /** The Oracle Database Edition that applies to the Autonomous databases. */
  databaseEdition?: DatabaseEditionType;
  /** Details for the long-term backup schedule. */
  longTermBackupSchedule?: LongTermBackUpScheduleDetails;
  /** Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** Indicates the Autonomous Database mode. */
  openMode?: OpenModeType;
  /** The Autonomous Database permission level. */
  permissionLevel?: PermissionLevelType;
  /** The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled. */
  role?: RoleType;
  /** Retention period, in days, for long-term backups */
  backupRetentionPeriodInDays?: number;
  /** The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25'] */
  whitelistedIps?: string[];
}

/** PeerDb Details */
export interface PeerDbDetails {
  /** The database OCID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
}

/** Autonomous Database Generate Wallet resource model. */
export interface GenerateAutonomousDatabaseWalletDetails {
  /** The type of wallet to generate. */
  generateType?: GenerateType;
  /** True when requesting regional connection strings in PDB connect info, applicable to cross-region DG only. */
  isRegional?: boolean;
  /** The password to encrypt the keys inside the wallet */
  password: string;
}

/** Details to restore an Oracle Autonomous Database. */
export interface RestoreAutonomousDatabaseDetails {
  /** The time to restore the database to. */
  timestamp: Date | string;
}

/** The type used for update operations of the AutonomousDatabaseBackup. */
export interface AutonomousDatabaseBackupUpdate {
  properties?: AutonomousDatabaseBackupUpdateProperties;
}

/** The updatable properties of the AutonomousDatabaseBackup. */
export interface AutonomousDatabaseBackupUpdateProperties {
  /** Retention period, in days, for long-term backups. */
  retentionPeriodInDays?: number;
}

/** Autonomous Database base resource model. */
export type AutonomousDatabaseBaseProperties =
  | AutonomousDatabaseBasePropertiesParent
  | AutonomousDatabaseProperties
  | AutonomousDatabaseCloneProperties;
/** Alias for Preference */
export type Preference = "NoPreference" | "CustomPreference" | string;
/** Alias for MonthName */
export type MonthName =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December"
  | string;
/** Alias for DayOfWeekName */
export type DayOfWeekName =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | string;
/** Alias for PatchingMode */
export type PatchingMode = "Rolling" | "NonRolling" | string;
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for AzureResourceProvisioningState */
export type AzureResourceProvisioningState =
  | ResourceProvisioningState
  | "Provisioning"
  | string;
/** Alias for CloudExadataInfrastructureLifecycleState */
export type CloudExadataInfrastructureLifecycleState =
  | "Provisioning"
  | "Available"
  | "Updating"
  | "Terminating"
  | "Terminated"
  | "MaintenanceInProgress"
  | "Failed"
  | string;
/** Alias for CreatedByType */
export type CreatedByType =
  | "User"
  | "Application"
  | "ManagedIdentity"
  | "Key"
  | string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState =
  | ResourceProvisioningState
  | "Creating"
  | "Deleting";
/** Alias for DbServerPatchingStatus */
export type DbServerPatchingStatus =
  | "Scheduled"
  | "MaintenanceInProgress"
  | "Failed"
  | "Complete"
  | string;
/** Alias for DbServerProvisioningState */
export type DbServerProvisioningState =
  | "Creating"
  | "Available"
  | "Unavailable"
  | "Deleting"
  | "Deleted"
  | "MaintenanceInProgress"
  | string;
/** Alias for VirtualNetworkAddressLifecycleState */
export type VirtualNetworkAddressLifecycleState =
  | "Provisioning"
  | "Available"
  | "Terminating"
  | "Terminated"
  | "Failed"
  | string;
/** Alias for DbNodeProvisioningState */
export type DbNodeProvisioningState =
  | "Provisioning"
  | "Available"
  | "Updating"
  | "Stopping"
  | "Stopped"
  | "Starting"
  | "Terminating"
  | "Terminated"
  | "Failed"
  | string;
/** Alias for DbNodeMaintenanceType */
export type DbNodeMaintenanceType = "VmdbRebootMigration" | string;
/** Alias for DnsPrivateViewsLifecycleState */
export type DnsPrivateViewsLifecycleState =
  | "Active"
  | "Deleted"
  | "Deleting"
  | "Updating"
  | string;
/** Alias for DnsPrivateZonesLifecycleState */
export type DnsPrivateZonesLifecycleState =
  | "Active"
  | "Creating"
  | "Deleted"
  | "Deleting"
  | "Updating"
  | string;
/** Alias for ZoneType */
export type ZoneType = "Primary" | "Secondary" | string;
/** Alias for AutonomousDatabaseBackupLifecycleState */
export type AutonomousDatabaseBackupLifecycleState =
  | "Creating"
  | "Active"
  | "Deleting"
  | "Failed"
  | "Updating"
  | string;
/** Alias for AutonomousDatabaseBackupType */
export type AutonomousDatabaseBackupType =
  | "Incremental"
  | "Full"
  | "LongTerm"
  | string;
/** Alias for WorkloadType */
export type WorkloadType = "OLTP" | "DW" | "AJD" | "APEX" | string;
/** Alias for LicenseModel */
export type LicenseModel = "LicenseIncluded" | "BringYourOwnLicense" | string;
/** Alias for DiskRedundancy */
export type DiskRedundancy = "High" | "Normal" | string;
/** Alias for CloudVmClusterLifecycleState */
export type CloudVmClusterLifecycleState =
  | "Provisioning"
  | "Available"
  | "Updating"
  | "Terminating"
  | "Terminated"
  | "MaintenanceInProgress"
  | "Failed"
  | string;
/** Alias for IormLifecycleState */
export type IormLifecycleState =
  | "BootStrapping"
  | "Enabled"
  | "Disabled"
  | "Updating"
  | "Failed"
  | string;
/** Alias for Objective */
export type Objective =
  | "LowLatency"
  | "HighThroughput"
  | "Balanced"
  | "Auto"
  | "Basic"
  | string;
/** Alias for DataBaseType */
export type DataBaseType = "Regular" | "Clone" | string;
/** Alias for AutonomousMaintenanceScheduleType */
export type AutonomousMaintenanceScheduleType = "Early" | "Regular" | string;
/** Alias for ComputeModel */
export type ComputeModel = "ECPU" | "OCPU" | string;
/** Alias for DisasterRecoveryType */
export type DisasterRecoveryType = "Adg" | "BackupBased" | string;
/** Alias for AutonomousDatabaseLifecycleState */
export type AutonomousDatabaseLifecycleState =
  | "Provisioning"
  | "Available"
  | "Stopping"
  | "Stopped"
  | "Starting"
  | "Terminating"
  | "Terminated"
  | "Unavailable"
  | "RestoreInProgress"
  | "RestoreFailed"
  | "BackupInProgress"
  | "ScaleInProgress"
  | "AvailableNeedsAttention"
  | "Updating"
  | "MaintenanceInProgress"
  | "Restarting"
  | "Recreating"
  | "RoleChangeInProgress"
  | "Upgrading"
  | "Inaccessible"
  | "Standby"
  | string;
/** Alias for ConsumerGroup */
export type ConsumerGroup =
  | "High"
  | "Medium"
  | "Low"
  | "Tp"
  | "Tpurgent"
  | string;
/** Alias for HostFormatType */
export type HostFormatType = "Fqdn" | "Ip" | string;
/** Alias for ProtocolType */
export type ProtocolType = "TCP" | "TCPS" | string;
/** Alias for SessionModeType */
export type SessionModeType = "Direct" | "Redirect" | string;
/** Alias for SyntaxFormatType */
export type SyntaxFormatType = "Long" | "Ezconnect" | "Ezconnectplus" | string;
/** Alias for TlsAuthenticationType */
export type TlsAuthenticationType = "Server" | "Mutual" | string;
/** Alias for DataSafeStatusType */
export type DataSafeStatusType =
  | "Registering"
  | "Registered"
  | "Deregistering"
  | "NotRegistered"
  | "Failed"
  | string;
/** Alias for DatabaseEditionType */
export type DatabaseEditionType =
  | "StandardEdition"
  | "EnterpriseEdition"
  | string;
/** Alias for RepeatCadenceType */
export type RepeatCadenceType =
  | "OneTime"
  | "Weekly"
  | "Monthly"
  | "Yearly"
  | string;
/** Alias for OpenModeType */
export type OpenModeType = "ReadOnly" | "ReadWrite" | string;
/** Alias for OperationsInsightsStatusType */
export type OperationsInsightsStatusType =
  | "Enabling"
  | "Enabled"
  | "Disabling"
  | "NotEnabled"
  | "FailedEnabling"
  | "FailedDisabling"
  | string;
/** Alias for PermissionLevelType */
export type PermissionLevelType = "Restricted" | "Unrestricted" | string;
/** Alias for RoleType */
export type RoleType =
  | "Primary"
  | "Standby"
  | "DisabledStandby"
  | "BackupCopy"
  | "SnapshotStandby"
  | string;
/** Alias for SourceType */
export type SourceType =
  | "None"
  | "Database"
  | "BackupFromId"
  | "BackupFromTimestamp"
  | "CloneToRefreshable"
  | "CrossRegionDataguard"
  | "CrossRegionDisasterRecovery"
  | string;
/** Alias for CloneType */
export type CloneType = "Full" | "Metadata" | string;
/** Alias for RefreshableModelType */
export type RefreshableModelType = "Automatic" | "Manual" | string;
/** Alias for RefreshableStatusType */
export type RefreshableStatusType = "Refreshing" | "NotRefreshing" | string;
/** Alias for OracleSubscriptionProvisioningState */
export type OracleSubscriptionProvisioningState =
  | ResourceProvisioningState
  | string;
/** Alias for CloudAccountProvisioningState */
export type CloudAccountProvisioningState =
  | "Pending"
  | "Provisioning"
  | "Available"
  | string;
/** Alias for Intent */
export type Intent = "Retain" | "Reset" | string;
/** Alias for DbNodeActionEnum */
export type DbNodeActionEnum =
  | "Start"
  | "Stop"
  | "SoftReset"
  | "Reset"
  | string;
/** Alias for GenerateType */
export type GenerateType = "Single" | "All" | string;
