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
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   *
   * Possible values: "user", "system", "user,system"
   */
  readonly origin?: string;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   *
   * Possible values: "Internal"
   */
  actionType?: string;
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

/**
 * Azure Large Instance info on Azure (ARM properties and AzureLargeInstance
 * properties)
 */
export interface AzureLargeInstanceOutput extends TrackedResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: AzureLargeInstancePropertiesOutput;
}

/** Describes the properties of an Azure Large Instance. */
export interface AzureLargeInstancePropertiesOutput {
  /** Specifies the hardware settings for the Azure Large Instance. */
  hardwareProfile?: HardwareProfileOutput;
  /** Specifies the storage settings for the Azure Large Instance disks. */
  storageProfile?: StorageProfileOutput;
  /** Specifies the operating system settings for the Azure Large Instance. */
  osProfile?: OsProfileOutput;
  /** Specifies the network settings for the Azure Large Instance. */
  networkProfile?: NetworkProfileOutput;
  /** Specifies the Azure Large Instance unique ID. */
  readonly azureLargeInstanceId?: string;
  /** Resource power state */
  readonly powerState?: AzureLargeInstancePowerStateEnumOutput;
  /** Resource proximity placement group */
  readonly proximityPlacementGroup?: string;
  /** Hardware revision of an Azure Large Instance */
  readonly hwRevision?: string;
  /**
   * ARM ID of another AzureLargeInstance that will share a network with this
   * AzureLargeInstance
   */
  partnerNodeId?: string;
  /** State of provisioning of the AzureLargeInstance */
  readonly provisioningState?: AzureLargeInstanceProvisioningStatesEnumOutput;
}

/** Specifies the hardware settings for the Azure Large Instance. */
export interface HardwareProfileOutput {
  /** Name of the hardware type (vendor and/or their product name) */
  readonly hardwareType?: AzureLargeInstanceHardwareTypeNamesEnumOutput;
  /** Specifies the Azure Large Instance SKU. */
  readonly azureLargeInstanceSize?: AzureLargeInstanceSizeNamesEnumOutput;
}

/** Specifies the storage settings for the Azure Large Instance disks. */
export interface StorageProfileOutput {
  /** IP Address to connect to storage. */
  readonly nfsIpAddress?: string;
  /**
   * Specifies information about the operating system disk used by Azure Large
   * Instance.
   */
  osDisks?: Array<DiskOutput>;
}

/** Specifies the disk information fo the Azure Large Instance */
export interface DiskOutput {
  /** The disk name. */
  name?: string;
  /** Specifies the size of an empty data disk in gigabytes. */
  diskSizeGB?: number;
  /**
   * Specifies the logical unit number of the data disk. This value is used to
   * identify data disks within the VM and therefore must be unique for each data
   * disk attached to a VM.
   */
  readonly lun?: number;
}

/** Specifies the operating system settings for the Azure Large Instance. */
export interface OsProfileOutput {
  /** Specifies the host OS name of the Azure Large Instance. */
  computerName?: string;
  /** This property allows you to specify the type of the OS. */
  readonly osType?: string;
  /** Specifies version of operating system. */
  readonly version?: string;
  /** Specifies the SSH public key used to access the operating system. */
  sshPublicKey?: string;
}

/** Specifies the network settings for the Azure Large Instance disks. */
export interface NetworkProfileOutput {
  /** Specifies the network interfaces for the Azure Large Instance. */
  networkInterfaces?: Array<IpAddressOutput>;
  /** Specifies the circuit id for connecting to express route. */
  readonly circuitId?: string;
}

/** Specifies the IP address of the network interface. */
export interface IpAddressOutput {
  /** Specifies the IP address of the network interface. */
  ipAddress?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBaseOutput extends ArmResourceOutput {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResourceOutput extends ArmResourceBaseOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  readonly createdByType?: string;
  /** The type of identity that created the resource. */
  readonly createdAt?: string;
  /** The identity that last modified the resource. */
  readonly lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  readonly lastModifiedByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** Base class used for type definitions */
export interface ArmResourceBaseOutput {}

/** The base proxy resource. */
export interface ProxyResourceBaseOutput extends ArmResourceOutput {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput
  extends ProxyResourceBaseOutput {
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
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Creating", "Deleting"
   */
  provisioningState?: string;
}

/** The private endpoint resource */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: string;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

export interface PrivateLinkResourceOutput extends ProxyResourceBaseOutput {
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

/** The base extension resource. */
export interface ExtensionResourceBaseOutput extends ArmResourceOutput {}

/**
 * AzureLargeStorageInstance info on Azure (ARM properties and
 * AzureLargeStorageInstance properties)
 */
export interface AzureLargeStorageInstanceOutput
  extends TrackedResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: AzureLargeStorageInstancePropertiesOutput;
}

/** Describes the properties of an AzureLargeStorageInstance. */
export interface AzureLargeStorageInstancePropertiesOutput {
  /** Specifies the AzureLargeStorageInstance unique ID. */
  azureLargeStorageInstanceUniqueIdentifier?: string;
  /** Specifies the storage properties for the AzureLargeStorage instance. */
  storageProperties?: StoragePropertiesOutput;
}

/** described the storage properties of the azure large storage instance */
export interface StoragePropertiesOutput {
  /** State of provisioning of the AzureLargeStorageInstance */
  provisioningState?: ProvisioningStateOutput;
  /** the offering type for which the resource is getting provisioned */
  offeringType?: string;
  /** the storage protocol for which the resource is getting provisioned */
  storageType?: string;
  /** the kind of storage instance */
  generation?: string;
  /** the hardware type of the storage instance */
  hardwareType?: AzureLargeInstanceHardwareTypeNamesEnumOutput;
  /** the workload for which the resource is getting provisioned */
  workloadType?: string;
  /** the billing related information for the resource */
  storageBillingProperties?: StorageBillingPropertiesOutput;
}

/** Describes the billing related details of the AzureLargeStorageInstance. */
export interface StorageBillingPropertiesOutput {
  /** the billing mode for the storage instance */
  billingMode?: string;
  /** the SKU type that is provisioned */
  sku?: string;
}

/** The current status of an async operation. */
export interface OperationStatusResultOutput {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: string;
  /** The end time of the operation. */
  endTime?: string;
  /** The operations list. */
  operations: Array<OperationStatusResultOutput>;
  /** If present, details of the operation error. */
  error?: ErrorDetailOutput;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** Alias for AzureLargeInstanceHardwareTypeNamesEnumOutput */
export type AzureLargeInstanceHardwareTypeNamesEnumOutput =
  | string
  | "Cisco_UCS"
  | "HPE"
  | "SDFLEX";
/** Alias for AzureLargeInstanceSizeNamesEnumOutput */
export type AzureLargeInstanceSizeNamesEnumOutput =
  | string
  | "S72m"
  | "S144m"
  | "S72"
  | "S144"
  | "S192"
  | "S192m"
  | "S192xm"
  | "S96"
  | "S112"
  | "S224"
  | "S224m"
  | "S224om"
  | "S224oo"
  | "S224oom"
  | "S224ooo"
  | "S224se"
  | "S384"
  | "S384m"
  | "S384xm"
  | "S384xxm"
  | "S448"
  | "S448m"
  | "S448om"
  | "S448oo"
  | "S448oom"
  | "S448ooo"
  | "S448se"
  | "S576m"
  | "S576xm"
  | "S672"
  | "S672m"
  | "S672om"
  | "S672oo"
  | "S672oom"
  | "S672ooo"
  | "S768"
  | "S768m"
  | "S768xm"
  | "S896"
  | "S896m"
  | "S896om"
  | "S896oo"
  | "S896oom"
  | "S896ooo"
  | "S960m";
/** Alias for AzureLargeInstancePowerStateEnumOutput */
export type AzureLargeInstancePowerStateEnumOutput =
  | string
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | "restarting"
  | "unknown";
/** Alias for AzureLargeInstanceProvisioningStatesEnumOutput */
export type AzureLargeInstanceProvisioningStatesEnumOutput =
  | string
  | "Accepted"
  | "Creating"
  | "Updating"
  | "Failed"
  | "Succeeded"
  | "Deleting"
  | "Migrating"
  | "Canceled";
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput =
  | string
  | "Accepted"
  | "Creating"
  | "Updating"
  | "Failed"
  | "Succeeded"
  | "Deleting"
  | "Canceled"
  | "Migrating";
/** The response of a AzureLargeInstance list operation. */
export type AzureLargeInstanceListResultOutput =
  Paged<AzureLargeInstanceOutput>;
/** The response of a AzureLargeStorageInstance list operation. */
export type AzureLargeStorageInstanceListResultOutput =
  Paged<AzureLargeStorageInstanceOutput>;
