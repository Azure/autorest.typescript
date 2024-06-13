// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface OperationOutput {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplayOutput;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: OriginOutput;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionTypeOutput;
}

/** Localized display information for and operation. */
export interface OperationDisplayOutput {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponseOutput {
  /** The error object. */
  error?: ErrorDetailOutput;
}

/** The error detail. */
export interface ErrorDetailOutput {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: Array<ErrorDetailOutput>;
  /** The error additional info. */
  readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfoOutput {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** CloudExadataInfrastructure resource definition */
export interface CloudExadataInfrastructureOutput
  extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: CloudExadataInfrastructurePropertiesOutput;
  /** CloudExadataInfrastructure zones */
  zones: string[];
}

/** CloudExadataInfrastructure resource model */
export interface CloudExadataInfrastructurePropertiesOutput {
  /** Exadata infra ocid */
  readonly ocid?: string;
  /** The number of compute servers for the cloud Exadata infrastructure. */
  computeCount?: number;
  /** The number of storage servers for the cloud Exadata infrastructure. */
  storageCount?: number;
  /** The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). */
  readonly totalStorageSizeInGbs?: number;
  /** The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). */
  readonly availableStorageSizeInGbs?: number;
  /** The date and time the cloud Exadata infrastructure resource was created. */
  readonly timeCreated?: string;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** maintenanceWindow property */
  maintenanceWindow?: MaintenanceWindowOutput;
  /** The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). */
  readonly estimatedPatchingTime?: EstimatedPatchingTimeOutput;
  /** The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. */
  customerContacts?: Array<CustomerContactOutput>;
  /** CloudExadataInfrastructure provisioning state */
  readonly provisioningState?: AzureResourceProvisioningStateOutput;
  /** CloudExadataInfrastructure lifecycle state */
  readonly lifecycleState?: CloudExadataInfrastructureLifecycleStateOutput;
  /** The model name of the cloud Exadata infrastructure resource. */
  shape: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** The total number of CPU cores allocated. */
  readonly cpuCount?: number;
  /** The total number of CPU cores available. */
  readonly maxCpuCount?: number;
  /** The memory allocated in GBs. */
  readonly memorySizeInGbs?: number;
  /** The total memory available in GBs. */
  readonly maxMemoryInGbs?: number;
  /** The local node storage to be allocated in GBs. */
  readonly dbNodeStorageSizeInGbs?: number;
  /** The total local node storage available in GBs. */
  readonly maxDbNodeStorageSizeInGbs?: number;
  /** The quantity of data in the database, in terabytes. */
  readonly dataStorageSizeInTbs?: number;
  /** The total available DATA disk group size. */
  readonly maxDataStorageInTbs?: number;
  /** The software version of the database servers (dom0) in the Exadata infrastructure. */
  readonly dbServerVersion?: string;
  /** The software version of the storage servers (cells) in the Exadata infrastructure. */
  readonly storageServerVersion?: string;
  /** The requested number of additional storage servers activated for the Exadata infrastructure. */
  readonly activatedStorageCount?: number;
  /** The requested number of additional storage servers for the Exadata infrastructure. */
  readonly additionalStorageCount?: number;
  /** The name for the Exadata infrastructure. */
  displayName: string;
  /** The OCID of the last maintenance run. */
  readonly lastMaintenanceRunId?: string;
  /** The OCID of the next maintenance run. */
  readonly nextMaintenanceRunId?: string;
  /** Monthly Db Server version */
  readonly monthlyDbServerVersion?: string;
  /** Monthly Storage Server version */
  readonly monthlyStorageServerVersion?: string;
}

/** MaintenanceWindow resource properties */
export interface MaintenanceWindowOutput {
  /** The maintenance window scheduling preference. */
  preference?: PreferenceOutput;
  /** Months during the year when maintenance should be performed. */
  months?: Array<MonthOutput>;
  /** Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. For example, to allow maintenance during the 2nd week of the month (from the 8th day to the 14th day of the month), use the value 2. Maintenance cannot be scheduled for the fifth week of months that contain more than 28 days. Note that this parameter works in conjunction with the  daysOfWeek and hoursOfDay parameters to allow you to specify specific days of the week and hours that maintenance will be performed. */
  weeksOfMonth?: number[];
  /** Days during the week when maintenance should be performed. */
  daysOfWeek?: Array<DayOfWeekOutput>;
  /** The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are - 0 - represents time slot 0:00 - 3:59 UTC - 4 - represents time slot 4:00 - 7:59 UTC - 8 - represents time slot 8:00 - 11:59 UTC - 12 - represents time slot 12:00 - 15:59 UTC - 16 - represents time slot 16:00 - 19:59 UTC - 20 - represents time slot 20:00 - 23:59 UTC */
  hoursOfDay?: number[];
  /** Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4. */
  leadTimeInWeeks?: number;
  /** Cloud Exadata infrastructure node patching method. */
  patchingMode?: PatchingModeOutput;
  /** Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive). */
  customActionTimeoutInMins?: number;
  /** If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. */
  isCustomActionTimeoutEnabled?: boolean;
  /** is Monthly Patching Enabled */
  isMonthlyPatchingEnabled?: boolean;
}

/** Month resource properties */
export interface MonthOutput {
  /** Name of the month of the year. */
  name: MonthNameOutput;
}

/** DayOfWeek resource properties */
export interface DayOfWeekOutput {
  /** Name of the day of the week. */
  name: DayOfWeekNameOutput;
}

/** The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). */
export interface EstimatedPatchingTimeOutput {
  /** The estimated time required in minutes for database server patching. */
  readonly estimatedDbServerPatchingTime?: number;
  /** The estimated time required in minutes for network switch patching. */
  readonly estimatedNetworkSwitchesPatchingTime?: number;
  /** The estimated time required in minutes for storage server patching. */
  readonly estimatedStorageServerPatchingTime?: number;
  /** The estimated total time required in minutes for all patching operations. */
  readonly totalEstimatedPatchingTime?: number;
}

/** CustomerContact resource properties */
export interface CustomerContactOutput {
  /** The email address used by Oracle to send notifications regarding databases and infrastructure. */
  email: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ResourceOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The type of identity that created the resource. */
  readonly createdByType?: CreatedByTypeOutput;
  /** The type of identity that created the resource. */
  readonly createdAt?: string;
  /** The identity that last modified the resource. */
  readonly lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  readonly lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** The base proxy resource. */
export interface ProxyResourceOutput extends ResourceOutput {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ProxyResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group identifiers for the private endpoint resource */
  readonly groupIds?: string[];
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /** The provisioning state of the private endpoint connection resource. */
  provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The private endpoint resource */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatusOutput;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export interface PrivateLinkResourceOutput extends ProxyResourceOutput {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourcePropertiesOutput;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourcePropertiesOutput {
  /** The private link resource group id. */
  readonly groupId?: string;
  /** The private link resource required member names. */
  readonly requiredMembers?: string[];
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** DbServer resource model */
export interface DbServerOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DbServerPropertiesOutput;
}

/** DbServer resource properties */
export interface DbServerPropertiesOutput {
  /** Db server name. */
  readonly ocid?: string;
  /** The name for the Db Server. */
  readonly displayName?: string;
  /** The OCID of the compartment. */
  readonly compartmentId?: string;
  /** The OCID of the Exadata infrastructure. */
  readonly exadataInfrastructureId?: string;
  /** The number of CPU cores enabled on the Db server. */
  readonly cpuCoreCount?: number;
  /** dbServerPatching details of the Db server. */
  readonly dbServerPatchingDetails?: DbServerPatchingDetailsOutput;
  /** The total memory available in GBs. */
  readonly maxMemoryInGbs?: number;
  /** The allocated local node storage in GBs on the Db server. */
  readonly dbNodeStorageSizeInGbs?: number;
  /** The OCID of the VM Clusters associated with the Db server. */
  readonly vmClusterIds?: string[];
  /** The OCID of the Db nodes associated with the Db server. */
  readonly dbNodeIds?: string[];
  /** Lifecycle details of dbServer. */
  readonly lifecycleDetails?: string;
  /** DbServer provisioning state. */
  readonly lifecycleState?: DbServerProvisioningStateOutput;
  /** The total number of CPU cores available. */
  readonly maxCpuCount?: number;
  /** The list of OCIDs of the Autonomous VM Clusters associated with the Db server. */
  readonly autonomousVmClusterIds?: string[];
  /** The list of OCIDs of the Autonomous Virtual Machines associated with the Db server. */
  readonly autonomousVirtualMachineIds?: string[];
  /** The total max dbNode storage in GBs. */
  readonly maxDbNodeStorageInGbs?: number;
  /** The total memory size in GBs. */
  readonly memorySizeInGbs?: number;
  /** The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available. */
  readonly shape?: string;
  /** The date and time that the Db Server was created. */
  readonly timeCreated?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningStateOutput;
}

/** DbServer Patching Properties */
export interface DbServerPatchingDetailsOutput {
  /** Estimated Patch Duration */
  readonly estimatedPatchDuration?: number;
  /** Patching Status */
  readonly patchingStatus?: DbServerPatchingStatusOutput;
  /** Time Patching Ended */
  readonly timePatchingEnded?: string;
  /** Time Patching Started */
  readonly timePatchingStarted?: string;
}

/** Virtual IP resource belonging to a vm cluster resource. */
export interface VirtualNetworkAddressOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkAddressPropertiesOutput;
}

/** virtualNetworkAddress resource properties */
export interface VirtualNetworkAddressPropertiesOutput {
  /** Virtual network Address address. */
  ipAddress?: string;
  /** Virtual Machine OCID. */
  vmOcid?: string;
  /** Application VIP OCID. */
  readonly ocid?: string;
  /** Virtual network address fully qualified domain name. */
  readonly domain?: string;
  /** Additional information about the current lifecycle state of the application virtual IP (VIP) address. */
  readonly lifecycleDetails?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningStateOutput;
  /** virtual network address lifecycle state. */
  readonly lifecycleState?: VirtualNetworkAddressLifecycleStateOutput;
  /** The date and time when the create operation for the application virtual IP (VIP) address completed. */
  readonly timeAssigned?: string;
}

/** SystemVersion resource Definition */
export interface SystemVersionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: SystemVersionPropertiesOutput;
}

/** System Version Resource model */
export interface SystemVersionPropertiesOutput {
  /** A valid Oracle System Version */
  readonly systemVersion: string;
}

/** The DbNode resource belonging to vmCluster */
export interface DbNodeOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DbNodePropertiesOutput;
}

/** The properties of DbNodeResource */
export interface DbNodePropertiesOutput {
  /** DbNode OCID */
  readonly ocid: string;
  /** Additional information about the planned maintenance. */
  readonly additionalDetails?: string;
  /** The OCID of the backup IP address associated with the database node. */
  readonly backupIpId?: string;
  /** The OCID of the second backup VNIC. */
  readonly backupVnic2Id?: string;
  /** The OCID of the backup VNIC. */
  readonly backupVnicId?: string;
  /** The number of CPU cores enabled on the Db node. */
  readonly cpuCoreCount?: number;
  /** The allocated local node storage in GBs on the Db node. */
  readonly dbNodeStorageSizeInGbs?: number;
  /** The OCID of the Exacc Db server associated with the database node. */
  readonly dbServerId?: string;
  /** The OCID of the DB system. */
  readonly dbSystemId: string;
  /** The name of the Fault Domain the instance is contained in. */
  readonly faultDomain?: string;
  /** The OCID of the host IP address associated with the database node. */
  readonly hostIpId?: string;
  /** The host name for the database node. */
  readonly hostname?: string;
  /** The current state of the database node. */
  readonly lifecycleState?: DbNodeProvisioningStateOutput;
  /** Lifecycle details of Db Node. */
  readonly lifecycleDetails?: string;
  /** The type of database node maintenance. */
  readonly maintenanceType?: DbNodeMaintenanceTypeOutput;
  /** The allocated memory in GBs on the Db node. */
  readonly memorySizeInGbs?: number;
  /** The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems. */
  readonly softwareStorageSizeInGb?: number;
  /** The date and time that the database node was created. */
  readonly timeCreated?: string;
  /** End date and time of maintenance window. */
  readonly timeMaintenanceWindowEnd?: string;
  /** Start date and time of maintenance window. */
  readonly timeMaintenanceWindowStart?: string;
  /** The OCID of the second VNIC. */
  readonly vnic2Id?: string;
  /** The OCID of the VNIC. */
  readonly vnicId?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningStateOutput;
}

/** GiVersion resource definition */
export interface GiVersionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: GiVersionPropertiesOutput;
}

/** GiVersion resource model */
export interface GiVersionPropertiesOutput {
  /** A valid Oracle Grid Infrastructure (GI) software version. */
  readonly version: string;
}

/** DbSystemShape resource definition */
export interface DbSystemShapeOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DbSystemShapePropertiesOutput;
}

/** DbSystemShape resource model */
export interface DbSystemShapePropertiesOutput {
  /** The family of the shape used for the DB system. */
  readonly shapeFamily?: string;
  /** The maximum number of CPU cores that can be enabled on the DB system for this shape. */
  readonly availableCoreCount: number;
  /** The minimum number of CPU cores that can be enabled on the DB system for this shape. */
  readonly minimumCoreCount?: number;
  /** The runtime minimum number of CPU cores that can be enabled on the DB system for this shape. */
  readonly runtimeMinimumCoreCount?: number;
  /** The discrete number by which the CPU core count for this shape can be increased or decreased. */
  readonly coreCountIncrement?: number;
  /** The minimum number of Exadata storage servers available for the Exadata infrastructure. */
  readonly minStorageCount?: number;
  /** The maximum number of Exadata storage servers available for the Exadata infrastructure. */
  readonly maxStorageCount?: number;
  /** The maximum data storage available per storage server for this shape. Only applicable to ExaCC Elastic shapes. */
  readonly availableDataStoragePerServerInTbs?: number;
  /** The maximum memory available per database node for this shape. Only applicable to ExaCC Elastic shapes. */
  readonly availableMemoryPerNodeInGbs?: number;
  /** The maximum Db Node storage available per database node for this shape. Only applicable to ExaCC Elastic shapes. */
  readonly availableDbNodePerNodeInGbs?: number;
  /** The minimum number of CPU cores that can be enabled per node for this shape. */
  readonly minCoreCountPerNode?: number;
  /** The maximum memory that can be enabled for this shape. */
  readonly availableMemoryInGbs?: number;
  /** The minimum memory that need be allocated per node for this shape. */
  readonly minMemoryPerNodeInGbs?: number;
  /** The maximum Db Node storage that can be enabled for this shape. */
  readonly availableDbNodeStorageInGbs?: number;
  /** The minimum Db Node storage that need be allocated per node for this shape. */
  readonly minDbNodeStoragePerNodeInGbs?: number;
  /** The maximum DATA storage that can be enabled for this shape. */
  readonly availableDataStorageInTbs?: number;
  /** The minimum data storage that need be allocated for this shape. */
  readonly minDataStorageInTbs?: number;
  /** The minimum number of database nodes available for this shape. */
  readonly minimumNodeCount?: number;
  /** The maximum number of database nodes available for this shape. */
  readonly maximumNodeCount?: number;
  /** The maximum number of CPU cores per database node that can be enabled for this shape. Only applicable to the flex Exadata shape and ExaCC Elastic shapes. */
  readonly availableCoreCountPerNode?: number;
}

/** DnsPrivateView resource definition */
export interface DnsPrivateViewOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateViewPropertiesOutput;
}

/** Views resource model */
export interface DnsPrivateViewPropertiesOutput {
  /** The OCID of the view */
  readonly ocid: string;
  /** The display name of the view resource */
  readonly displayName?: string;
  /** A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. */
  readonly isProtected: boolean;
  /** Views lifecycleState */
  readonly lifecycleState?: DnsPrivateViewsLifecycleStateOutput;
  /** The canonical absolute URL of the resource. */
  readonly self: string;
  /** views timeCreated */
  readonly timeCreated: string;
  /** views timeCreated */
  readonly timeUpdated: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningStateOutput;
}

/** DnsPrivateZone resource definition */
export interface DnsPrivateZoneOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DnsPrivateZonePropertiesOutput;
}

/** Zones resource model */
export interface DnsPrivateZonePropertiesOutput {
  /** The OCID of the Zone */
  readonly ocid: string;
  /** A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. */
  readonly isProtected: boolean;
  /** Zones lifecycleState */
  readonly lifecycleState?: DnsPrivateZonesLifecycleStateOutput;
  /** The canonical absolute URL of the resource. */
  readonly self: string;
  /** The current serial of the zone. As seen in the zone's SOA record. */
  readonly serial: number;
  /** Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived. */
  readonly version: string;
  /** The OCID of the private view containing the zone. This value will be null for zones in the global DNS, which are publicly resolvable and not part of a private view. */
  readonly viewId?: string;
  /** The type of the zone. Must be either PRIMARY or SECONDARY. SECONDARY is only supported for GLOBAL zones. */
  readonly zoneType: ZoneTypeOutput;
  /** Zones timeCreated */
  readonly timeCreated: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: ResourceProvisioningStateOutput;
}

/** AutonomousDatabaseBackup resource definition */
export interface AutonomousDatabaseBackupOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBackupPropertiesOutput;
}

/** AutonomousDatabaseBackup resource model */
export interface AutonomousDatabaseBackupPropertiesOutput {
  /** The OCID of the Autonomous Database. */
  readonly autonomousDatabaseOcid?: string;
  /** The size of the database in terabytes at the time the backup was taken. */
  readonly databaseSizeInTbs?: number;
  /** A valid Oracle Database version for Autonomous Database. */
  readonly dbVersion?: string;
  /** The user-friendly name for the backup. The name does not have to be unique. */
  displayName?: string;
  /** The OCID of the Autonomous Database backup. */
  readonly ocid?: string;
  /** Indicates whether the backup is user-initiated or automatic. */
  readonly isAutomatic?: boolean;
  /** Indicates whether the backup can be used to restore the associated Autonomous Database. */
  readonly isRestorable?: boolean;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** The current state of the backup. */
  readonly lifecycleState?: AutonomousDatabaseBackupLifecycleStateOutput;
  /** Retention period, in days, for long-term backups. */
  retentionPeriodInDays?: number;
  /** The backup size in terabytes (TB). */
  readonly sizeInTbs?: number;
  /** Timestamp until when the backup will be available. */
  readonly timeAvailableTil?: string;
  /** The date and time the backup started. */
  readonly timeStarted?: string;
  /** The date and time the backup completed. */
  readonly timeEnded?: string;
  /** The type of backup. */
  readonly backupType?: AutonomousDatabaseBackupTypeOutput;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningStateOutput;
}

/** AutonomousDatabaseCharacterSets resource definition */
export interface AutonomousDatabaseCharacterSetOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseCharacterSetPropertiesOutput;
}

/** AutonomousDatabaseCharacterSet resource model */
export interface AutonomousDatabaseCharacterSetPropertiesOutput {
  /** The Oracle Autonomous Database supported character sets. */
  readonly characterSet: string;
}

/** AutonomousDatabaseNationalCharacterSets resource definition */
export interface AutonomousDatabaseNationalCharacterSetOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseNationalCharacterSetPropertiesOutput;
}

/** AutonomousDatabaseNationalCharacterSet resource model */
export interface AutonomousDatabaseNationalCharacterSetPropertiesOutput {
  /** The Oracle Autonomous Database supported national character sets. */
  readonly characterSet: string;
}

/** AutonomousDbVersion resource definition */
export interface AutonomousDbVersionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDbVersionPropertiesOutput;
}

/** AutonomousDbVersion resource model */
export interface AutonomousDbVersionPropertiesOutput {
  /** Supported Autonomous Db versions. */
  readonly version: string;
  /** The Autonomous Database workload type */
  readonly dbWorkload?: WorkloadTypeOutput;
  /** True if this version of the Oracle Database software's default is free. */
  readonly isDefaultForFree?: boolean;
  /** True if this version of the Oracle Database software's default is paid. */
  readonly isDefaultForPaid?: boolean;
  /** True if this version of the Oracle Database software can be used for Always-Free Autonomous Databases. */
  readonly isFreeTierEnabled?: boolean;
  /** True if this version of the Oracle Database software has payments enabled. */
  readonly isPaidEnabled?: boolean;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag: string;
}

/** CloudVmCluster resource definition */
export interface CloudVmClusterOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: CloudVmClusterPropertiesOutput;
}

/** CloudVmCluster resource model */
export interface CloudVmClusterPropertiesOutput {
  /** Cloud VM Cluster ocid */
  readonly ocid?: string;
  /** The port number configured for the listener on the cloud VM cluster. */
  readonly listenerPort?: number;
  /** The number of nodes in the cloud VM cluster. */
  readonly nodeCount?: number;
  /** The data disk group size to be allocated in GBs per VM. */
  storageSizeInGbs?: number;
  /** The data disk group size to be allocated in TBs. */
  dataStorageSizeInTbs?: number;
  /** The local node storage to be allocated in GBs. */
  dbNodeStorageSizeInGbs?: number;
  /** The memory to be allocated in GBs. */
  memorySizeInGbs?: number;
  /** The date and time that the cloud VM cluster was created. */
  readonly timeCreated?: string;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
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
  licenseModel?: LicenseModelOutput;
  /** The type of redundancy configured for the cloud Vm cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy. */
  readonly diskRedundancy?: DiskRedundancyOutput;
  /** The Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster. **Note:** For a single-node DB system, this list is empty. */
  readonly scanIpIds?: string[];
  /** The virtual IP (VIP) addresses associated with the cloud VM cluster. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster. **Note:** For a single-node DB system, this list is empty. */
  readonly vipIds?: string[];
  /** The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. */
  readonly scanDnsName?: string;
  /** The TCP Single Client Access Name (SCAN) port. The default port is 1521. */
  scanListenerPortTcp?: number;
  /** The TCPS Single Client Access Name (SCAN) port. The default port is 2484. */
  scanListenerPortTcpSsl?: number;
  /** The OCID of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. */
  readonly scanDnsRecordId?: string;
  /** The model name of the Exadata hardware running the cloud VM cluster. */
  readonly shape?: string;
  /** CloudVmCluster provisioning state */
  readonly provisioningState?: AzureResourceProvisioningStateOutput;
  /** CloudVmCluster lifecycle state */
  readonly lifecycleState?: CloudVmClusterLifecycleStateOutput;
  /** VNET for network connectivity */
  vnetId: string;
  /** Oracle Grid Infrastructure (GI) software version */
  giVersion: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** HTTPS link to OCI Network Security Group exposed to Azure Customer via the Azure Interface. */
  readonly nsgUrl?: string;
  /** Client subnet */
  subnetId: string;
  /** Client OCI backup subnet CIDR, default is 192.168.252.0/22 */
  backupSubnetCidr?: string;
  /** CIDR blocks for additional NSG ingress rules. The VNET CIDRs used to provision the VM Cluster will be added by default. */
  nsgCidrs?: Array<NsgCidrOutput>;
  /** Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  dataCollectionOptions?: DataCollectionOptionsOutput;
  /** Display Name */
  displayName: string;
  /** The list of compute servers to be added to the cloud VM cluster. */
  computeNodes?: string[];
  /** iormConfigCache details for cloud VM cluster. */
  readonly iormConfigCache?: ExadataIormConfigOutput;
  /** The OCID of the last maintenance update history entry. */
  readonly lastUpdateHistoryEntryId?: string;
  /** The list of DB servers. */
  dbServers?: string[];
  /** Cluster compartmentId */
  readonly compartmentId?: string;
  /** Cluster subnet ocid */
  readonly subnetOcid?: string;
}

/** A rule for allowing inbound (INGRESS) IP packets */
export interface NsgCidrOutput {
  /** Conceptually, this is the range of IP addresses that a packet coming into the instance can come from. */
  source: string;
  /** Destination port range to specify particular destination ports for TCP rules. */
  destinationPortRange?: PortRangeOutput;
}

/** Port Range to specify particular destination ports for TCP rules. */
export interface PortRangeOutput {
  /** The minimum port number, which must not be greater than the maximum port number. */
  min: number;
  /** The maximum port number, which must not be less than the minimum port number. To specify a single port number, set both the min and max to the same value. */
  max: number;
}

/** DataCollectionOptions resource properties */
export interface DataCollectionOptionsOutput {
  /** Indicates whether diagnostic collection is enabled for the VM cluster/Cloud VM cluster/VMBM DBCS. */
  isDiagnosticsEventsEnabled?: boolean;
  /** Indicates whether health monitoring is enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isHealthMonitoringEnabled?: boolean;
  /** Indicates whether incident logs and trace collection are enabled for the VM cluster / Cloud VM cluster / VMBM DBCS. */
  isIncidentLogsEnabled?: boolean;
}

/** ExadataIormConfig for cloud vm cluster */
export interface ExadataIormConfigOutput {
  /** An array of IORM settings for all the database in the Exadata DB system. */
  dbPlans?: Array<DbIormConfigOutput>;
  /** Additional information about the current lifecycleState. */
  lifecycleDetails?: string;
  /** The current state of IORM configuration for the Exadata DB system. */
  lifecycleState?: IormLifecycleStateOutput;
  /** The current value for the IORM objective. The default is AUTO. */
  objective?: ObjectiveOutput;
}

/** DbIormConfig for cloud vm cluster */
export interface DbIormConfigOutput {
  /** The database name. For the default DbPlan, the dbName is default. */
  dbName?: string;
  /** The flash cache limit for this database. This value is internally configured based on the share value assigned to the database. */
  flashCacheLimit?: string;
  /** The relative priority of this database. */
  share?: number;
}

/** Autonomous Database  resource model. */
export interface AutonomousDatabaseOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AutonomousDatabaseBasePropertiesOutput;
}

/** Autonomous Database base resource model. */
export interface AutonomousDatabaseBasePropertiesOutputParent {
  /** Admin password. */
  adminPassword?: string;
  /** The maintenance schedule type of the Autonomous Database Serverless. */
  autonomousMaintenanceScheduleType?: AutonomousMaintenanceScheduleTypeOutput;
  /** The character set for the autonomous database. */
  characterSet?: string;
  /** The compute amount (CPUs) available to the database. */
  computeCount?: number;
  /** The compute model of the Autonomous Database. */
  computeModel?: ComputeModelOutput;
  /** The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Customer Contacts. */
  customerContacts?: Array<CustomerContactOutput>;
  /** The quantity of data in the database, in terabytes. */
  dataStorageSizeInTbs?: number;
  /** The size, in gigabytes, of the data volume that will be created and attached to the database. */
  dataStorageSizeInGbs?: number;
  /** A valid Oracle Database version for Autonomous Database. */
  dbVersion?: string;
  /** The Autonomous Database workload type */
  dbWorkload?: WorkloadTypeOutput;
  /** The user-friendly name for the Autonomous Database. */
  displayName?: string;
  /** Indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Indicates if auto scaling is enabled for the Autonomous Database storage. */
  isAutoScalingForStorageEnabled?: boolean;
  /** The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for Autonomous Database Serverless instances, standby databases located in the same region as the source primary database do not have OCIDs. */
  readonly peerDbIds?: string[];
  /** The database OCID of the Disaster Recovery peer database, which is located in a different region from the current peer database. */
  peerDbId?: string;
  /** Indicates whether the Autonomous Database has local or called in-region Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Indicates whether the Autonomous Database has Cross Region Data Guard enabled. */
  readonly isRemoteDataGuardEnabled?: boolean;
  /** Indicates the local disaster recovery (DR) type of the Autonomous Database Serverless instance.Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover.Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover. */
  readonly localDisasterRecoveryType?: DisasterRecoveryTypeOutput;
  /** Local Autonomous Disaster Recovery standby database details. */
  readonly localStandbyDb?: AutonomousDatabaseStandbySummaryOutput;
  /** Indicates the number of seconds of data loss for a Data Guard failover. */
  readonly failedDataRecoveryInSeconds?: number;
  /** Specifies if the Autonomous Database requires mTLS connections. */
  isMtlsConnectionRequired?: boolean;
  /** Specifies if the Autonomous Database preview version is being provisioned. */
  isPreviewVersionWithServiceTermsAccepted?: boolean;
  /** The Oracle license model that applies to the Oracle Autonomous Database. The default is LICENSE_INCLUDED. */
  licenseModel?: LicenseModelOutput;
  /** The character set for the Autonomous Database. */
  ncharacterSet?: string;
  /** Additional information about the current lifecycle state. */
  readonly lifecycleDetails?: string;
  /** Azure resource provisioning state. */
  readonly provisioningState?: AzureResourceProvisioningStateOutput;
  /** Views lifecycleState */
  readonly lifecycleState?: AutonomousDatabaseLifecycleStateOutput;
  /** The list of scheduled operations. */
  scheduledOperations?: ScheduledOperationsTypeOutput;
  /** The private endpoint Ip address for the resource. */
  privateEndpointIp?: string;
  /** The resource's private endpoint label. */
  privateEndpointLabel?: string;
  /** HTTPS link to OCI resources exposed to Azure Customer via Azure Interface. */
  readonly ociUrl?: string;
  /** Client subnet */
  subnetId?: string;
  /** VNET for network connectivity */
  vnetId?: string;
  /** The date and time that the database was created. */
  readonly timeCreated?: string;
  /** The date and time when maintenance will begin. */
  readonly timeMaintenanceBegin?: string;
  /** The date and time when maintenance will end. */
  readonly timeMaintenanceEnd?: string;
  /** The current amount of storage in use for user and system data, in terabytes (TB). */
  readonly actualUsedDataStorageSizeInTbs?: number;
  /** The amount of storage currently allocated for the database tables and billed for, rounded up. */
  readonly allocatedStorageSizeInTbs?: number;
  /** Information about Oracle APEX Application Development. */
  readonly apexDetails?: ApexDetailsTypeOutput;
  /** List of Oracle Database versions available for a database upgrade. If there are no version upgrades available, this list is empty. */
  readonly availableUpgradeVersions?: string[];
  /** The connection string used to connect to the Autonomous Database. */
  readonly connectionStrings?: ConnectionStringTypeOutput;
  /** The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. */
  readonly connectionUrls?: ConnectionUrlTypeOutput;
  /** Status of the Data Safe registration for this Autonomous Database. */
  readonly dataSafeStatus?: DataSafeStatusTypeOutput;
  /** The Oracle Database Edition that applies to the Autonomous databases. */
  databaseEdition?: DatabaseEditionTypeOutput;
  /** Autonomous Database ID */
  autonomousDatabaseId?: string;
  /** The area assigned to In-Memory tables in Autonomous Database. */
  readonly inMemoryAreaInGbs?: number;
  /** The date and time when the next long-term backup would be created. */
  readonly nextLongTermBackupTimeStamp?: string;
  /** Details for the long-term backup schedule. */
  longTermBackupSchedule?: LongTermBackUpScheduleDetailsOutput;
  /** Indicates if the Autonomous Database version is a preview version. */
  readonly isPreview?: boolean;
  /** Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** The amount of memory (in GBs) enabled per ECPU or OCPU. */
  readonly memoryPerOracleComputeUnitInGbs?: number;
  /** Indicates the Autonomous Database mode. */
  openMode?: OpenModeTypeOutput;
  /** Status of Operations Insights for this Autonomous Database. */
  readonly operationsInsightsStatus?: OperationsInsightsStatusTypeOutput;
  /** The Autonomous Database permission level. */
  permissionLevel?: PermissionLevelTypeOutput;
  /** The private endpoint for the resource. */
  readonly privateEndpoint?: string;
  /** An array of CPU values that an Autonomous Database can be scaled to. */
  readonly provisionableCpus?: number[];
  /** The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled. */
  role?: RoleTypeOutput;
  /** The URL of the Service Console for the Autonomous Database. */
  readonly serviceConsoleUrl?: string;
  /** The SQL Web Developer URL for the Oracle Autonomous Database. */
  readonly sqlWebDeveloperUrl?: string;
  /** The list of regions that support the creation of an Autonomous Database clone or an Autonomous Data Guard standby database. */
  readonly supportedRegionsToCloneTo?: string[];
  /** The date and time the Autonomous Data Guard role was switched for the Autonomous Database. */
  readonly timeDataGuardRoleChanged?: string;
  /** The date and time the Always Free database will be automatically deleted because of inactivity. */
  readonly timeDeletionOfFreeAutonomousDatabase?: string;
  /** The date and time that Autonomous Data Guard was enabled for an Autonomous Database where the standby was provisioned in the same region as the primary database. */
  readonly timeLocalDataGuardEnabled?: string;
  /** The timestamp of the last failover operation. */
  readonly timeOfLastFailover?: string;
  /** The date and time when last refresh happened. */
  readonly timeOfLastRefresh?: string;
  /** The refresh point timestamp (UTC). */
  readonly timeOfLastRefreshPoint?: string;
  /** The timestamp of the last switchover operation for the Autonomous Database. */
  readonly timeOfLastSwitchover?: string;
  /** The date and time the Always Free database will be stopped because of inactivity. */
  readonly timeReclamationOfFreeAutonomousDatabase?: string;
  /** The storage space consumed by Autonomous Database in GBs. */
  readonly usedDataStorageSizeInGbs?: number;
  /** The amount of storage that has been used, in terabytes. */
  readonly usedDataStorageSizeInTbs?: number;
  /** Database ocid */
  readonly ocid?: string;
  /** Retention period, in days, for long-term backups */
  backupRetentionPeriodInDays?: number;
  /** The client IP access control list (ACL). This is an array of CIDR notations and/or IP addresses. Values should be separate strings, separated by commas. Example: ['1.1.1.1','1.1.1.0/24','1.1.2.25'] */
  whitelistedIps?: string[];
  dataBaseType: DataBaseTypeOutput;
}

/** Autonomous Disaster Recovery standby database details. */
export interface AutonomousDatabaseStandbySummaryOutput {
  /** The amount of time, in seconds, that the data of the standby database lags the data of the primary database. Can be used to determine the potential data loss in the event of a failover. */
  lagTimeInSeconds?: number;
  /** The current state of the Autonomous Database. */
  lifecycleState?: AutonomousDatabaseLifecycleStateOutput;
  /** Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database. */
  timeDataGuardRoleChanged?: string;
  /** The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  timeDisasterRecoveryRoleChanged?: string;
}

/** The list of scheduled operations. */
export interface ScheduledOperationsTypeOutput {
  /** Day of week */
  dayOfWeek: DayOfWeekOutput;
  /** auto start time. value must be of ISO-8601 format HH:mm */
  scheduledStartTime?: string;
  /** auto stop time. value must be of ISO-8601 format HH:mm */
  scheduledStopTime?: string;
}

/** Information about Oracle APEX Application Development. */
export interface ApexDetailsTypeOutput {
  /** The Oracle APEX Application Development version. */
  apexVersion?: string;
  /** The Oracle REST Data Services (ORDS) version. */
  ordsVersion?: string;
}

/** Connection strings to connect to an Oracle Autonomous Database. */
export interface ConnectionStringTypeOutput {
  /** Returns all connection strings that can be used to connect to the Autonomous Database. */
  allConnectionStrings?: AllConnectionStringTypeOutput;
  /** The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  dedicated?: string;
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
  /** A list of connection string profiles to allow clients to group, filter and select connection string values based on structured metadata. */
  profiles?: Array<ProfileTypeOutput>;
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface AllConnectionStringTypeOutput {
  /** The High database service provides the highest level of resources to each SQL statement resulting in the highest performance, but supports the fewest number of concurrent SQL statements. */
  high?: string;
  /** The Low database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  low?: string;
  /** The Medium database service provides a lower level of resources to each SQL statement potentially resulting a lower level of performance, but supports more concurrent SQL statements. */
  medium?: string;
}

/** The connection string profile to allow clients to group, filter and select connection string values based on structured metadata. */
export interface ProfileTypeOutput {
  /** Consumer group used by the connection. */
  consumerGroup?: ConsumerGroupOutput;
  /** A user-friendly name for the connection. */
  displayName: string;
  /** Host format used in connection string. */
  hostFormat: HostFormatTypeOutput;
  /** True for a regional connection string, applicable to cross-region DG only. */
  isRegional?: boolean;
  /** Protocol used by the connection. */
  protocol: ProtocolTypeOutput;
  /** Specifies whether the listener performs a direct hand-off of the session, or redirects the session. */
  sessionMode: SessionModeTypeOutput;
  /** Specifies whether the connection string is using the long (LONG), Easy Connect (EZCONNECT), or Easy Connect Plus (EZCONNECTPLUS) format. */
  syntaxFormat: SyntaxFormatTypeOutput;
  /** Specifies whether the TLS handshake is using one-way (SERVER) or mutual (MUTUAL) authentication. */
  tlsAuthentication?: TlsAuthenticationTypeOutput;
  /** Connection string value. */
  value: string;
}

/** The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. */
export interface ConnectionUrlTypeOutput {
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
export interface LongTermBackUpScheduleDetailsOutput {
  /** The frequency of the long-term backup schedule */
  repeatCadence?: RepeatCadenceTypeOutput;
  /** The timestamp for the long-term backup schedule. For a MONTHLY cadence, months having fewer days than the provided date will have the backup taken on the last day of that month. */
  timeOfBackup?: string;
  /** Retention period, in days, for backups. */
  retentionPeriodInDays?: number;
  /** Indicates if the long-term backup schedule should be deleted. The default value is `FALSE`. */
  isDisabled?: boolean;
}

/** Autonomous Database resource model. */
export interface AutonomousDatabasePropertiesOutput
  extends AutonomousDatabaseBasePropertiesOutputParent {
  /** Database type to be created. */
  dataBaseType: "Regular";
}

/** Autonomous Database clone resource model. */
export interface AutonomousDatabaseClonePropertiesOutput
  extends AutonomousDatabaseBasePropertiesOutputParent {
  /** Database type to be created. */
  dataBaseType: "Clone";
  /** The source of the database. */
  source?: SourceTypeOutput;
  /** The Azure ID of the Autonomous Database that was cloned to create the current Autonomous Database. */
  sourceId: string;
  /** The Autonomous Database clone type. */
  cloneType: CloneTypeOutput;
  /** Indicates if the refreshable clone can be reconnected to its source database. */
  readonly isReconnectCloneEnabled?: boolean;
  /** Indicates if the Autonomous Database is a refreshable clone. */
  readonly isRefreshableClone?: boolean;
  /** The refresh mode of the clone. */
  refreshableModel?: RefreshableModelTypeOutput;
  /** The refresh status of the clone. */
  readonly refreshableStatus?: RefreshableStatusTypeOutput;
  /** The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database. */
  timeUntilReconnectCloneEnabled?: string;
}

/** PrivateIpAddress resource properties */
export interface PrivateIpAddressPropertiesOutput {
  /** PrivateIpAddresses displayName */
  displayName: string;
  /** PrivateIpAddresses hostnameLabel */
  hostnameLabel: string;
  /** PrivateIpAddresses Id */
  ocid: string;
  /** PrivateIpAddresses ipAddress */
  ipAddress: string;
  /** PrivateIpAddresses subnetId */
  subnetId: string;
}

/** OracleSubscription resource definition */
export interface OracleSubscriptionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: OracleSubscriptionPropertiesOutput;
  /** Details of the resource plan. */
  plan?: PlanOutput;
}

/** Oracle Subscription resource model */
export interface OracleSubscriptionPropertiesOutput {
  /** OracleSubscriptionProvisioningState provisioning state */
  readonly provisioningState?: OracleSubscriptionProvisioningStateOutput;
  /** SAAS subscription ID generated by Marketplace */
  readonly saasSubscriptionId?: string;
  /** Cloud Account Id */
  readonly cloudAccountId?: string;
  /** Cloud Account provisioning state. */
  readonly cloudAccountState?: CloudAccountProvisioningStateOutput;
  /** Term Unit. P1Y, P3Y, etc, see Durations https://en.wikipedia.org/wiki/ISO_8601 */
  termUnit?: string;
  /** Product code for the term unit */
  productCode?: string;
  /** Intent for the update operation */
  intent?: IntentOutput;
}

/** Details of the resource plan. */
export interface PlanOutput {
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

/** Cloud Account Details model */
export interface CloudAccountDetailsOutput {
  /** Cloud Account name */
  readonly cloudAccountName?: string;
  /** Cloud Account Home region */
  readonly cloudAccountHomeRegion?: string;
}

/** SaaS Subscription Details model */
export interface SaasSubscriptionDetailsOutput {
  /** Purchased SaaS subscription ID */
  readonly id?: string;
  /** SaaS subscription name */
  readonly subscriptionName?: string;
  /** Creation Date and Time */
  readonly timeCreated?: string;
  /** Purchased offer ID */
  readonly offerId?: string;
  /** Purchased offer's plan ID */
  readonly planId?: string;
  /** Indicates the status of the Subscription. */
  readonly saasSubscriptionStatus?: string;
  /** Publisher ID */
  readonly publisherId?: string;
  /** Purchaser Email ID */
  readonly purchaserEmailId?: string;
  /** Purchaser Tenant ID */
  readonly purchaserTenantId?: string;
  /** Purchase Term Unit */
  readonly termUnit?: string;
  /** AutoRenew flag */
  readonly isAutoRenew?: boolean;
  /** FreeTrial flag */
  readonly isFreeTrial?: boolean;
}

/** Activation Links model */
export interface ActivationLinksOutput {
  /** New Cloud Account Activation Link */
  readonly newCloudAccountActivationLink?: string;
  /** Existing Cloud Account Activation Link */
  readonly existingCloudAccountActivationLink?: string;
}

/** Autonomous Database Wallet File resource model. */
export interface AutonomousDatabaseWalletFileOutput {
  /** The base64 encoded wallet files */
  walletFiles: string;
}

/** Autonomous Database base resource model. */
export type AutonomousDatabaseBasePropertiesOutput =
  | AutonomousDatabaseBasePropertiesOutputParent
  | AutonomousDatabasePropertiesOutput
  | AutonomousDatabaseClonePropertiesOutput;
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = "user" | "system" | "user,system" | string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = "Internal" | string;
/** The response of a CloudExadataInfrastructure list operation. */
export type CloudExadataInfrastructureListResultOutput =
  Paged<CloudExadataInfrastructureOutput>;
/** Alias for PreferenceOutput */
export type PreferenceOutput = "NoPreference" | "CustomPreference" | string;
/** Alias for MonthNameOutput */
export type MonthNameOutput =
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
/** Alias for DayOfWeekNameOutput */
export type DayOfWeekNameOutput =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | string;
/** Alias for PatchingModeOutput */
export type PatchingModeOutput = "Rolling" | "NonRolling" | string;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for AzureResourceProvisioningStateOutput */
export type AzureResourceProvisioningStateOutput =
  | ResourceProvisioningStateOutput
  | "Provisioning"
  | string;
/** Alias for CloudExadataInfrastructureLifecycleStateOutput */
export type CloudExadataInfrastructureLifecycleStateOutput =
  | "Provisioning"
  | "Available"
  | "Updating"
  | "Terminating"
  | "Terminated"
  | "MaintenanceInProgress"
  | "Failed"
  | string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput =
  | "User"
  | "Application"
  | "ManagedIdentity"
  | "Key"
  | string;
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput =
  | "Pending"
  | "Approved"
  | "Rejected"
  | string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput =
  | ResourceProvisioningStateOutput
  | "Creating"
  | "Deleting";
/** Alias for DbServerPatchingStatusOutput */
export type DbServerPatchingStatusOutput =
  | "Scheduled"
  | "MaintenanceInProgress"
  | "Failed"
  | "Complete"
  | string;
/** Alias for DbServerProvisioningStateOutput */
export type DbServerProvisioningStateOutput =
  | "Creating"
  | "Available"
  | "Unavailable"
  | "Deleting"
  | "Deleted"
  | "MaintenanceInProgress"
  | string;
/** Alias for VirtualNetworkAddressLifecycleStateOutput */
export type VirtualNetworkAddressLifecycleStateOutput =
  | "Provisioning"
  | "Available"
  | "Terminating"
  | "Terminated"
  | "Failed"
  | string;
/** Alias for DbNodeProvisioningStateOutput */
export type DbNodeProvisioningStateOutput =
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
/** Alias for DbNodeMaintenanceTypeOutput */
export type DbNodeMaintenanceTypeOutput = "VmdbRebootMigration" | string;
/** Alias for DnsPrivateViewsLifecycleStateOutput */
export type DnsPrivateViewsLifecycleStateOutput =
  | "Active"
  | "Deleted"
  | "Deleting"
  | "Updating"
  | string;
/** Alias for DnsPrivateZonesLifecycleStateOutput */
export type DnsPrivateZonesLifecycleStateOutput =
  | "Active"
  | "Creating"
  | "Deleted"
  | "Deleting"
  | "Updating"
  | string;
/** Alias for ZoneTypeOutput */
export type ZoneTypeOutput = "Primary" | "Secondary" | string;
/** Alias for AutonomousDatabaseBackupLifecycleStateOutput */
export type AutonomousDatabaseBackupLifecycleStateOutput =
  | "Creating"
  | "Active"
  | "Deleting"
  | "Failed"
  | "Updating"
  | string;
/** Alias for AutonomousDatabaseBackupTypeOutput */
export type AutonomousDatabaseBackupTypeOutput =
  | "Incremental"
  | "Full"
  | "LongTerm"
  | string;
/** Alias for WorkloadTypeOutput */
export type WorkloadTypeOutput = "OLTP" | "DW" | "AJD" | "APEX" | string;
/** Alias for LicenseModelOutput */
export type LicenseModelOutput =
  | "LicenseIncluded"
  | "BringYourOwnLicense"
  | string;
/** Alias for DiskRedundancyOutput */
export type DiskRedundancyOutput = "High" | "Normal" | string;
/** Alias for CloudVmClusterLifecycleStateOutput */
export type CloudVmClusterLifecycleStateOutput =
  | "Provisioning"
  | "Available"
  | "Updating"
  | "Terminating"
  | "Terminated"
  | "MaintenanceInProgress"
  | "Failed"
  | string;
/** Alias for IormLifecycleStateOutput */
export type IormLifecycleStateOutput =
  | "BootStrapping"
  | "Enabled"
  | "Disabled"
  | "Updating"
  | "Failed"
  | string;
/** Alias for ObjectiveOutput */
export type ObjectiveOutput =
  | "LowLatency"
  | "HighThroughput"
  | "Balanced"
  | "Auto"
  | "Basic"
  | string;
/** Alias for DataBaseTypeOutput */
export type DataBaseTypeOutput = "Regular" | "Clone" | string;
/** Alias for AutonomousMaintenanceScheduleTypeOutput */
export type AutonomousMaintenanceScheduleTypeOutput =
  | "Early"
  | "Regular"
  | string;
/** Alias for ComputeModelOutput */
export type ComputeModelOutput = "ECPU" | "OCPU" | string;
/** Alias for DisasterRecoveryTypeOutput */
export type DisasterRecoveryTypeOutput = "Adg" | "BackupBased" | string;
/** Alias for AutonomousDatabaseLifecycleStateOutput */
export type AutonomousDatabaseLifecycleStateOutput =
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
/** Alias for ConsumerGroupOutput */
export type ConsumerGroupOutput =
  | "High"
  | "Medium"
  | "Low"
  | "Tp"
  | "Tpurgent"
  | string;
/** Alias for HostFormatTypeOutput */
export type HostFormatTypeOutput = "Fqdn" | "Ip" | string;
/** Alias for ProtocolTypeOutput */
export type ProtocolTypeOutput = "TCP" | "TCPS" | string;
/** Alias for SessionModeTypeOutput */
export type SessionModeTypeOutput = "Direct" | "Redirect" | string;
/** Alias for SyntaxFormatTypeOutput */
export type SyntaxFormatTypeOutput =
  | "Long"
  | "Ezconnect"
  | "Ezconnectplus"
  | string;
/** Alias for TlsAuthenticationTypeOutput */
export type TlsAuthenticationTypeOutput = "Server" | "Mutual" | string;
/** Alias for DataSafeStatusTypeOutput */
export type DataSafeStatusTypeOutput =
  | "Registering"
  | "Registered"
  | "Deregistering"
  | "NotRegistered"
  | "Failed"
  | string;
/** Alias for DatabaseEditionTypeOutput */
export type DatabaseEditionTypeOutput =
  | "StandardEdition"
  | "EnterpriseEdition"
  | string;
/** Alias for RepeatCadenceTypeOutput */
export type RepeatCadenceTypeOutput =
  | "OneTime"
  | "Weekly"
  | "Monthly"
  | "Yearly"
  | string;
/** Alias for OpenModeTypeOutput */
export type OpenModeTypeOutput = "ReadOnly" | "ReadWrite" | string;
/** Alias for OperationsInsightsStatusTypeOutput */
export type OperationsInsightsStatusTypeOutput =
  | "Enabling"
  | "Enabled"
  | "Disabling"
  | "NotEnabled"
  | "FailedEnabling"
  | "FailedDisabling"
  | string;
/** Alias for PermissionLevelTypeOutput */
export type PermissionLevelTypeOutput = "Restricted" | "Unrestricted" | string;
/** Alias for RoleTypeOutput */
export type RoleTypeOutput =
  | "Primary"
  | "Standby"
  | "DisabledStandby"
  | "BackupCopy"
  | "SnapshotStandby"
  | string;
/** Alias for SourceTypeOutput */
export type SourceTypeOutput =
  | "None"
  | "Database"
  | "BackupFromId"
  | "BackupFromTimestamp"
  | "CloneToRefreshable"
  | "CrossRegionDataguard"
  | "CrossRegionDisasterRecovery"
  | string;
/** Alias for CloneTypeOutput */
export type CloneTypeOutput = "Full" | "Metadata" | string;
/** Alias for RefreshableModelTypeOutput */
export type RefreshableModelTypeOutput = "Automatic" | "Manual" | string;
/** Alias for RefreshableStatusTypeOutput */
export type RefreshableStatusTypeOutput =
  | "Refreshing"
  | "NotRefreshing"
  | string;
/** The response of a DbServer list operation. */
export type DbServerListResultOutput = Paged<DbServerOutput>;
/** The response of a CloudVmCluster list operation. */
export type CloudVmClusterListResultOutput = Paged<CloudVmClusterOutput>;
/** The response of a VirtualNetworkAddress list operation. */
export type VirtualNetworkAddressListResultOutput =
  Paged<VirtualNetworkAddressOutput>;
/** The response of a SystemVersion list operation. */
export type SystemVersionListResultOutput = Paged<SystemVersionOutput>;
/** The response of a OracleSubscription list operation. */
export type OracleSubscriptionListResultOutput =
  Paged<OracleSubscriptionOutput>;
/** Alias for OracleSubscriptionProvisioningStateOutput */
export type OracleSubscriptionProvisioningStateOutput =
  | ResourceProvisioningStateOutput
  | string;
/** Alias for CloudAccountProvisioningStateOutput */
export type CloudAccountProvisioningStateOutput =
  | "Pending"
  | "Provisioning"
  | "Available"
  | string;
/** Alias for IntentOutput */
export type IntentOutput = "Retain" | "Reset" | string;
/** The response of a DbNode list operation. */
export type DbNodeListResultOutput = Paged<DbNodeOutput>;
/** The response of a GiVersion list operation. */
export type GiVersionListResultOutput = Paged<GiVersionOutput>;
/** The response of a DbSystemShape list operation. */
export type DbSystemShapeListResultOutput = Paged<DbSystemShapeOutput>;
/** The response of a DnsPrivateView list operation. */
export type DnsPrivateViewListResultOutput = Paged<DnsPrivateViewOutput>;
/** The response of a DnsPrivateZone list operation. */
export type DnsPrivateZoneListResultOutput = Paged<DnsPrivateZoneOutput>;
/** The response of a AutonomousDatabase list operation. */
export type AutonomousDatabaseListResultOutput =
  Paged<AutonomousDatabaseOutput>;
/** The response of a AutonomousDatabaseBackup list operation. */
export type AutonomousDatabaseBackupListResultOutput =
  Paged<AutonomousDatabaseBackupOutput>;
/** The response of a AutonomousDatabaseCharacterSet list operation. */
export type AutonomousDatabaseCharacterSetListResultOutput =
  Paged<AutonomousDatabaseCharacterSetOutput>;
/** The response of a AutonomousDatabaseNationalCharacterSet list operation. */
export type AutonomousDatabaseNationalCharacterSetListResultOutput =
  Paged<AutonomousDatabaseNationalCharacterSetOutput>;
/** The response of a AutonomousDbVersion list operation. */
export type AutonomousDbVersionListResultOutput =
  Paged<AutonomousDbVersionOutput>;
