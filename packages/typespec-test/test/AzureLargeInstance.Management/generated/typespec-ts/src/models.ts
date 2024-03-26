// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Azure Large Instance info on Azure (ARM properties and AzureLargeInstance
 * properties)
 */
export interface AzureLargeInstance extends TrackedResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: AzureLargeInstanceProperties;
}

/** Describes the properties of an Azure Large Instance. */
export interface AzureLargeInstanceProperties {
  /** Specifies the hardware settings for the Azure Large Instance. */
  hardwareProfile?: HardwareProfile;
  /** Specifies the storage settings for the Azure Large Instance disks. */
  storageProfile?: StorageProfile;
  /** Specifies the operating system settings for the Azure Large Instance. */
  osProfile?: OsProfile;
  /** Specifies the network settings for the Azure Large Instance. */
  networkProfile?: NetworkProfile;
  /**
   * ARM ID of another AzureLargeInstance that will share a network with this
   * AzureLargeInstance
   */
  partnerNodeId?: string;
}

/** Specifies the hardware settings for the Azure Large Instance. */
export interface HardwareProfile {}

/** Specifies the storage settings for the Azure Large Instance disks. */
export interface StorageProfile {
  /**
   * Specifies information about the operating system disk used by Azure Large
   * Instance.
   */
  osDisks?: Array<Disk>;
}

/** Specifies the disk information fo the Azure Large Instance */
export interface Disk {
  /** The disk name. */
  name?: string;
  /** Specifies the size of an empty data disk in gigabytes. */
  diskSizeGB?: number;
}

/** Specifies the operating system settings for the Azure Large Instance. */
export interface OsProfile {
  /** Specifies the host OS name of the Azure Large Instance. */
  computerName?: string;
  /** Specifies the SSH public key used to access the operating system. */
  sshPublicKey?: string;
}

/** Specifies the network settings for the Azure Large Instance disks. */
export interface NetworkProfile {
  /** Specifies the network interfaces for the Azure Large Instance. */
  networkInterfaces?: Array<IpAddress>;
}

/** Specifies the IP address of the network interface. */
export interface IpAddress {
  /** Specifies the IP address of the network interface. */
  ipAddress?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBase extends ArmResource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResource extends ArmResourceBase {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Base class used for type definitions */
export interface ArmResourceBase {}

/** The base proxy resource. */
export interface ProxyResourceBase extends ArmResource {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends ProxyResourceBase {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of he private endpoint connection resource */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Failed", "Canceled", "Creating", "Deleting"
   */
  provisioningState?: string;
}

/** The private endpoint resource */
export interface PrivateEndpoint {
  /** The resource identifier for private endpoint */
  id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
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

export interface PrivateLinkResource extends ProxyResourceBase {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The base extension resource. */
export interface ExtensionResourceBase extends ArmResource {}

/**
 * AzureLargeStorageInstance info on Azure (ARM properties and
 * AzureLargeStorageInstance properties)
 */
export interface AzureLargeStorageInstance extends TrackedResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: AzureLargeStorageInstanceProperties;
}

/** Describes the properties of an AzureLargeStorageInstance. */
export interface AzureLargeStorageInstanceProperties {
  /** Specifies the AzureLargeStorageInstance unique ID. */
  azureLargeStorageInstanceUniqueIdentifier?: string;
  /** Specifies the storage properties for the AzureLargeStorage instance. */
  storageProperties?: StorageProperties;
}

/** described the storage properties of the azure large storage instance */
export interface StorageProperties {
  /** State of provisioning of the AzureLargeStorageInstance */
  provisioningState?: ProvisioningState;
  /** the offering type for which the resource is getting provisioned */
  offeringType?: string;
  /** the storage protocol for which the resource is getting provisioned */
  storageType?: string;
  /** the kind of storage instance */
  generation?: string;
  /** the hardware type of the storage instance */
  hardwareType?: AzureLargeInstanceHardwareTypeNamesEnum;
  /** the workload for which the resource is getting provisioned */
  workloadType?: string;
  /** the billing related information for the resource */
  storageBillingProperties?: StorageBillingProperties;
}

/** Describes the billing related details of the AzureLargeStorageInstance. */
export interface StorageBillingProperties {
  /** the billing mode for the storage instance */
  billingMode?: string;
  /** the SKU type that is provisioned */
  sku?: string;
}

/** The type used for updating tags in AzureLargeInstance resources. */
export interface AzureLargeInstanceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/**
 * The active state empowers the server with the ability to forcefully terminate
 * and halt any existing processes that may be running on the server
 */
export interface ForceState {
  /** Whether to force restart by shutting all processes. */
  forceState?: AzureLargeInstanceForcePowerState;
}

/** The type used for updating tags in AzureLargeStorageInstance resources. */
export interface AzureLargeStorageInstanceTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Alias for AzureLargeInstanceHardwareTypeNamesEnum */
export type AzureLargeInstanceHardwareTypeNamesEnum =
  | string
  | "Cisco_UCS"
  | "HPE"
  | "SDFLEX";
/** Alias for AzureLargeInstanceSizeNamesEnum */
export type AzureLargeInstanceSizeNamesEnum =
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
/** Alias for AzureLargeInstancePowerStateEnum */
export type AzureLargeInstancePowerStateEnum =
  | string
  | "starting"
  | "started"
  | "stopping"
  | "stopped"
  | "restarting"
  | "unknown";
/** Alias for AzureLargeInstanceProvisioningStatesEnum */
export type AzureLargeInstanceProvisioningStatesEnum =
  | string
  | "Accepted"
  | "Creating"
  | "Updating"
  | "Failed"
  | "Succeeded"
  | "Deleting"
  | "Migrating"
  | "Canceled";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | "Accepted"
  | "Creating"
  | "Updating"
  | "Failed"
  | "Succeeded"
  | "Deleting"
  | "Canceled"
  | "Migrating";
/** Alias for AzureLargeInstanceForcePowerState */
export type AzureLargeInstanceForcePowerState = string | "active" | "inactive";
