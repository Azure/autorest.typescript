// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Common properties for all Azure Resource Manager resources. */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The type of identity that created the resource. */
  readonly createdByType?: CreatedByType;
  /** The type of identity that created the resource. */
  readonly createdAt?: Date;
  /** The identity that last modified the resource. */
  readonly lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  readonly lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: Date;
}

/** The kind of entity that created the resource. */
/** "User", "Application", "ManagedIdentity", "Key" */
export type CreatedByType = string;

/** The base proxy resource. */
export interface ProxyResource extends Resource {}

/** Defines the GuestAgent. */
export interface GuestAgent extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GuestAgentProperties;
}

/** Defines the resource properties. */
export interface GuestAgentProperties {
  /** Gets a unique identifier for this resource. */
  readonly uuid?: string;
  /** Username / Password Credentials to provision guest agent. */
  credentials?: GuestCredential;
  /** HTTP Proxy configuration for the VM. */
  httpProxyConfig?: HttpProxyConfiguration;
  /** Gets or sets the guest agent provisioning action. */
  provisioningAction?: ProvisioningAction;
  /** Gets the guest agent status. */
  readonly status?: string;
  /** Gets the name of the corresponding resource in Kubernetes. */
  readonly customResourceName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Username / Password Credentials to connect to guest. */
export interface GuestCredential {
  /** Gets or sets username to connect with the guest. */
  username: string;
  /** Gets or sets the password to connect with the guest. */
  password: string;
}

/** HTTP Proxy configuration for the VM. */
export interface HttpProxyConfiguration {
  /** Gets or sets httpsProxy url. */
  httpsProxy?: string;
}

/** Guest agent provisioning action. */
/** "install", "uninstall", "repair" */
export type ProvisioningAction = string;
/** The provisioning state of a resource type. */
/** "Succeeded", "Failed", "Canceled" */
export type ResourceProvisioningState = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** The response of a GuestAgent list operation. */
export interface GuestAgentListResult {
  /** The GuestAgent items on this page */
  value: GuestAgent[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Defines the HybridIdentityMetadata. */
export interface VmInstanceHybridIdentityMetadata extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VmInstanceHybridIdentityMetadataProperties;
}

/** Describes the properties of Hybrid Identity Metadata for a Virtual Machine. */
export interface VmInstanceHybridIdentityMetadataProperties {
  /** The unique identifier for the resource. */
  resourceUid?: string;
  /** Gets or sets the Public Key. */
  publicKey?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** The response of a VmInstanceHybridIdentityMetadata list operation. */
export interface VmInstanceHybridIdentityMetadataListResult {
  /** The VmInstanceHybridIdentityMetadata items on this page */
  value: VmInstanceHybridIdentityMetadata[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** Define the virtualMachineInstance. */
export interface VirtualMachineInstance extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineInstanceProperties;
  /** Gets or sets the extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface VirtualMachineInstanceProperties {
  /** Availability Sets in vm. */
  availabilitySets?: AvailabilitySetListItem[];
  /** OS properties. */
  osProfile?: OsProfileForVmInstance;
  /** Hardware properties. */
  hardwareProfile?: HardwareProfile;
  /** Network properties. */
  networkProfile?: NetworkProfile;
  /** Storage properties. */
  storageProfile?: StorageProfile;
  /** Gets the infrastructure profile. */
  infrastructureProfile?: InfrastructureProfile;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Availability Set model */
export interface AvailabilitySetListItem {
  /** Gets the ARM Id of the microsoft.scvmm/availabilitySets resource. */
  id?: string;
  /** Gets or sets the name of the availability set. */
  name?: string;
}

/** Defines the resource properties. */
export interface OsProfileForVmInstance {
  /** Admin password of the virtual machine. */
  adminPassword?: string;
  /** Gets or sets computer name. */
  computerName?: string;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os sku. */
  readonly osSku?: string;
  /** Gets os version. */
  readonly osVersion?: string;
}

/** Virtual machine operating system type. */
/** "Windows", "Linux", "Other" */
export type OsType = string;

/** Defines the resource properties. */
export interface HardwareProfile {
  /** MemoryMB is the size of a virtual machine's memory, in MB. */
  memoryMB?: number;
  /** Gets or sets the number of vCPUs for the vm. */
  cpuCount?: number;
  /** Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  limitCpuForMigration?: LimitCpuForMigration;
  /** Gets or sets a value indicating whether to enable dynamic memory or not. */
  dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets or sets the max dynamic memory for the vm. */
  dynamicMemoryMaxMB?: number;
  /** Gets or sets the min dynamic memory for the vm. */
  dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailable;
}

/** Limit CPU for migration. */
/** "true", "false" */
export type LimitCpuForMigration = string;
/** Dynamic memory enabled. */
/** "true", "false" */
export type DynamicMemoryEnabled = string;
/** Highly available. */
/** "true", "false" */
export type IsHighlyAvailable = string;

/** Defines the resource properties. */
export interface NetworkProfile {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: NetworkInterface[];
}

/** Network Interface model */
export interface NetworkInterface {
  /** Gets or sets the name of the network interface. */
  name?: string;
  /** Gets the display name of the network interface as shown in the vmmServer. This is the fallback label for a NIC when the name is not set. */
  readonly displayName?: string;
  /** Gets the nic ipv4 addresses. */
  readonly ipv4Addresses?: string[];
  /** Gets the nic ipv6 addresses. */
  readonly ipv6Addresses?: string[];
  /** Gets or sets the nic MAC address. */
  macAddress?: string;
  /** Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic. */
  virtualNetworkId?: string;
  /** Gets the name of the virtual network in vmmServer that the nic is connected to. */
  readonly networkName?: string;
  /** Gets or sets the ipv4 address type. */
  ipv4AddressType?: AllocationMethod;
  /** Gets or sets the ipv6 address type. */
  ipv6AddressType?: AllocationMethod;
  /** Gets or sets the mac address type. */
  macAddressType?: AllocationMethod;
  /** Gets or sets the nic id. */
  nicId?: string;
}

/** Network address allocation method. */
/** "Dynamic", "Static" */
export type AllocationMethod = string;

/** Defines the resource properties. */
export interface StorageProfile {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: VirtualDisk[];
}

/** Virtual disk model */
export interface VirtualDisk {
  /** Gets or sets the name of the disk. */
  name?: string;
  /** Gets the display name of the virtual disk as shown in the vmmServer. This is the fallback label for a disk when the name is not set. */
  readonly displayName?: string;
  /** Gets or sets the disk id. */
  diskId?: string;
  /** Gets or sets the disk total size. */
  diskSizeGB?: number;
  /** Gets the max disk size. */
  readonly maxDiskSizeGB?: number;
  /** Gets or sets the disk bus. */
  bus?: number;
  /** Gets or sets the disk lun. */
  lun?: number;
  /** Gets or sets the disk bus type. */
  busType?: string;
  /** Gets or sets the disk vhd type. */
  vhdType?: string;
  /** Gets the disk volume type. */
  readonly volumeType?: string;
  /** Gets the disk vhd format type. */
  readonly vhdFormatType?: string;
  /** Gets or sets the disk id in the template. */
  templateDiskId?: string;
  /** The QoS policy for the disk. */
  storageQosPolicy?: StorageQosPolicyDetails;
  /** Gets or sets a value indicating diff disk. */
  createDiffDisk?: CreateDiffDisk;
}

/** The StorageQoSPolicyDetails definition. */
export interface StorageQosPolicyDetails {
  /** The name of the policy. */
  name?: string;
  /** The ID of the QoS policy. */
  id?: string;
}

/** Create diff disk. */
/** "true", "false" */
export type CreateDiffDisk = string;

/** Specifies the vmmServer infrastructure specific settings for the virtual machine instance. */
export interface InfrastructureProfile {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** ARM Id of the cloud resource to use for deploying the vm. */
  cloudId?: string;
  /** ARM Id of the template resource to use for deploying the vm. */
  templateId?: string;
  /** VMName is the name of VM on the SCVmm server. */
  vmName?: string;
  /** Unique ID of the virtual machine. */
  uuid?: string;
  /** Last restored checkpoint in the vm. */
  readonly lastRestoredVmCheckpoint?: Checkpoint;
  /** Checkpoints in the vm. */
  readonly checkpoints?: Checkpoint[];
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
  /** Gets or sets the generation for the vm. */
  generation?: number;
  /** Gets or sets the bios guid for the vm. */
  biosGuid?: string;
}

/** Defines the resource properties. */
export interface Checkpoint {
  /** Gets ID of parent of the checkpoint. */
  parentCheckpointId?: string;
  /** Gets ID of the checkpoint. */
  checkpointId?: string;
  /** Gets name of the checkpoint. */
  name?: string;
  /** Gets description of the checkpoint. */
  description?: string;
}

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type?: string;
  /** The extended location name. */
  name?: string;
}

/** The type used for update operations of the VirtualMachineInstance. */
export interface VirtualMachineInstanceUpdate {
  /** The update properties of the VirtualMachineInstance. */
  properties?: VirtualMachineInstanceUpdateProperties;
}

/** Virtual Machine Instance Properties Update model */
export interface VirtualMachineInstanceUpdateProperties {
  /** Availability Sets in vm. */
  availabilitySets?: AvailabilitySetListItem[];
  /** Hardware properties. */
  hardwareProfile?: HardwareProfileUpdate;
  /** Network properties. */
  networkProfile?: NetworkProfileUpdate;
  /** Storage properties. */
  storageProfile?: StorageProfileUpdate;
  /** Gets the infrastructure profile. */
  infrastructureProfile?: InfrastructureProfileUpdate;
}

/** Defines the resource update properties. */
export interface HardwareProfileUpdate {
  /** MemoryMB is the size of a virtual machine's memory, in MB. */
  memoryMB?: number;
  /** Gets or sets the number of vCPUs for the vm. */
  cpuCount?: number;
  /** Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  limitCpuForMigration?: LimitCpuForMigration;
  /** Gets or sets a value indicating whether to enable dynamic memory or not. */
  dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets or sets the max dynamic memory for the vm. */
  dynamicMemoryMaxMB?: number;
  /** Gets or sets the min dynamic memory for the vm. */
  dynamicMemoryMinMB?: number;
}

/** Defines the resource update properties. */
export interface NetworkProfileUpdate {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: NetworkInterfaceUpdate[];
}

/** Network Interface Update model */
export interface NetworkInterfaceUpdate {
  /** Gets or sets the name of the network interface. */
  name?: string;
  /** Gets or sets the nic MAC address. */
  macAddress?: string;
  /** Gets or sets the ARM Id of the Microsoft.ScVmm/virtualNetwork resource to connect the nic. */
  virtualNetworkId?: string;
  /** Gets or sets the ipv4 address type. */
  ipv4AddressType?: AllocationMethod;
  /** Gets or sets the ipv6 address type. */
  ipv6AddressType?: AllocationMethod;
  /** Gets or sets the mac address type. */
  macAddressType?: AllocationMethod;
  /** Gets or sets the nic id. */
  nicId?: string;
}

/** Defines the resource update properties. */
export interface StorageProfileUpdate {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: VirtualDiskUpdate[];
}

/** Virtual Disk Update model */
export interface VirtualDiskUpdate {
  /** Gets or sets the name of the disk. */
  name?: string;
  /** Gets or sets the disk id. */
  diskId?: string;
  /** Gets or sets the disk total size. */
  diskSizeGB?: number;
  /** Gets or sets the disk bus. */
  bus?: number;
  /** Gets or sets the disk lun. */
  lun?: number;
  /** Gets or sets the disk bus type. */
  busType?: string;
  /** Gets or sets the disk vhd type. */
  vhdType?: string;
  /** The QoS policy for the disk. */
  storageQosPolicy?: StorageQosPolicyDetails;
}

/** Specifies the vmmServer infrastructure specific update settings for the virtual machine instance. */
export interface InfrastructureProfileUpdate {
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
}

/** Force Delete */
/** "true", "false" */
export type ForceDelete = string;
/** Delete From Host */
/** "true", "false" */
export type DeleteFromHost = string;

/** Standard Azure Resource Manager operation status response */
export interface ArmOperationStatus {
  /** The operation status */
  status: ResourceProvisioningState;
  /** The name of the  operationStatus resource */
  readonly name?: string;
  /** Operation start time */
  readonly startTime?: Date;
  /** Operation complete time */
  readonly endTime?: Date;
  /** The progress made toward completing the operation */
  readonly percentComplete?: number;
  /** Errors that occurred if the operation ended with Canceled or Failed status */
  readonly error?: ErrorDetail;
}

/** The response of a VirtualMachineInstance list operation. */
export interface VirtualMachineInstanceListResult {
  /** The VirtualMachineInstance items on this page */
  value: VirtualMachineInstance[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Defines the stop action properties. */
export interface StopVirtualMachineOptions {
  /** Gets or sets a value indicating whether to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Defaults to false. */
  skipShutdown?: SkipShutdown;
}

/** Skip shutdown. */
/** "true", "false" */
export type SkipShutdown = string;

/** Defines the create checkpoint action properties. */
export interface VirtualMachineCreateCheckpoint {
  /** Name of the checkpoint. */
  name?: string;
  /** Description of the checkpoint. */
  description?: string;
}

/** Defines the delete checkpoint action properties. */
export interface VirtualMachineDeleteCheckpoint {
  /** ID of the checkpoint to be deleted. */
  id?: string;
}

/** Defines the restore checkpoint action properties. */
export interface VirtualMachineRestoreCheckpoint {
  /** ID of the checkpoint to be restored to. */
  id?: string;
}

/** Defines the inventory item. */
export interface InventoryItem extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InventoryItemPropertiesUnion;
  /** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
  kind?: string;
}

/** Defines the resource properties. */
export interface InventoryItemProperties {
  /** the discriminator possible values: Cloud, VirtualNetwork, VirtualMachineTemplate, VirtualMachine */
  inventoryType: InventoryType;
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedResourceId?: string;
  /** Gets the UUID (which is assigned by Vmm) for the inventory item. */
  readonly uuid?: string;
  /** Gets the Managed Object name in Vmm for the inventory item. */
  readonly inventoryItemName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** The Cloud inventory item. */
export interface CloudInventoryItem extends InventoryItemProperties {
  /** They inventory type. */
  inventoryType: "Cloud";
}

/** The Virtual network inventory item. */
export interface VirtualNetworkInventoryItem extends InventoryItemProperties {
  /** They inventory type. */
  inventoryType: "VirtualNetwork";
}

/** The Virtual machine template inventory item. */
export interface VirtualMachineTemplateInventoryItem
  extends InventoryItemProperties {
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachineTemplate";
}

/** The Virtual machine inventory item. */
export interface VirtualMachineInventoryItem extends InventoryItemProperties {
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets os version. */
  readonly osVersion?: string;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Gets or sets the nic ip addresses. */
  ipAddresses?: string[];
  /** Cloud inventory resource details where the VM is present. */
  cloud?: InventoryItemDetails;
  /** Gets the bios guid. */
  readonly biosGuid?: string;
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedMachineResourceId?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachine";
}

/** Defines the resource properties. */
export interface InventoryItemDetails {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Gets or sets the Managed Object name in Vmm for the resource. */
  inventoryItemName?: string;
}

/** The inventory type */
/** "Cloud", "VirtualNetwork", "VirtualMachine", "VirtualMachineTemplate" */
export type InventoryType = string;

/** The response of a InventoryItem list operation. */
export interface InventoryItemListResult {
  /** The InventoryItem items on this page */
  value: InventoryItem[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The AvailabilitySets resource definition. */
export interface AvailabilitySet extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: AvailabilitySetProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface AvailabilitySetProperties {
  /** Name of the availability set. */
  availabilitySetName?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** The type used for updating tags in AvailabilitySet resources. */
export interface AvailabilitySetTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The response of a AvailabilitySet list operation. */
export interface AvailabilitySetListResult {
  /** The AvailabilitySet items on this page */
  value: AvailabilitySet[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The VirtualMachineTemplates resource definition. */
export interface VirtualMachineTemplate extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineTemplateProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface VirtualMachineTemplateProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual machine template. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Gets the type of the os. */
  readonly osType?: OsType;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets computer name. */
  readonly computerName?: string;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** Gets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  readonly limitCpuForMigration?: LimitCpuForMigration;
  /** Gets a value indicating whether to enable dynamic memory or not. */
  readonly dynamicMemoryEnabled?: DynamicMemoryEnabled;
  /** Gets a value indicating whether the vm template is customizable or not. */
  readonly isCustomizable?: IsCustomizable;
  /** Gets the max dynamic memory for the vm. */
  readonly dynamicMemoryMaxMB?: number;
  /** Gets the min dynamic memory for the vm. */
  readonly dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailable;
  /** Gets the generation for the vm. */
  readonly generation?: number;
  /** Gets the network interfaces of the template. */
  readonly networkInterfaces?: NetworkInterface[];
  /** Gets the disks of the template. */
  readonly disks?: VirtualDisk[];
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Customizable. */
/** "true", "false" */
export type IsCustomizable = string;

/** The type used for updating tags in VirtualMachineTemplate resources. */
export interface VirtualMachineTemplateTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The response of a VirtualMachineTemplate list operation. */
export interface VirtualMachineTemplateListResult {
  /** The VirtualMachineTemplate items on this page */
  value: VirtualMachineTemplate[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The VirtualNetworks resource definition. */
export interface VirtualNetwork extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface VirtualNetworkProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual network. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the virtual network in vmmServer. */
  readonly networkName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** The type used for updating tags in VirtualNetwork resources. */
export interface VirtualNetworkTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The response of a VirtualNetwork list operation. */
export interface VirtualNetworkListResult {
  /** The VirtualNetwork items on this page */
  value: VirtualNetwork[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The Clouds resource definition. */
export interface Cloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface CloudProperties {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the cloud. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the cloud in VmmServer. */
  readonly cloudName?: string;
  /** Capacity of the cloud. */
  readonly cloudCapacity?: CloudCapacity;
  /** List of QoS policies available for the cloud. */
  readonly storageQosPolicies?: StorageQosPolicy[];
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Cloud Capacity model */
export interface CloudCapacity {
  /** CPUCount specifies the maximum number of CPUs that can be allocated in the cloud. */
  readonly cpuCount?: number;
  /** MemoryMB specifies a memory usage limit in megabytes. */
  readonly memoryMB?: number;
  /** VMCount gives the max number of VMs that can be deployed in the cloud. */
  readonly vmCount?: number;
}

/** The StorageQoSPolicy definition. */
export interface StorageQosPolicy {
  /** The name of the policy. */
  name?: string;
  /** The ID of the QoS policy. */
  id?: string;
  /** The maximum IO operations per second. */
  iopsMaximum?: number;
  /** The minimum IO operations per second. */
  iopsMinimum?: number;
  /** The Bandwidth Limit for internet traffic. */
  bandwidthLimit?: number;
  /** The underlying policy. */
  policyId?: string;
}

/** The type used for updating tags in Cloud resources. */
export interface CloudTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The response of a Cloud list operation. */
export interface CloudListResult {
  /** The Cloud items on this page */
  value: Cloud[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** The VmmServers resource definition. */
export interface VmmServer extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: VmmServerProperties;
  /** The extended location. */
  extendedLocation: ExtendedLocation;
}

/** Defines the resource properties. */
export interface VmmServerProperties {
  /** Credentials to connect to VmmServer. */
  credentials?: VmmCredential;
  /** Fqdn is the hostname/ip of the vmmServer. */
  fqdn: string;
  /** Port is the port on which the vmmServer is listening. */
  port?: number;
  /** Gets the connection status to the vmmServer. */
  readonly connectionStatus?: string;
  /** Gets any error message if connection to vmmServer is having any issue. */
  readonly errorMessage?: string;
  /** Unique ID of vmmServer. */
  readonly uuid?: string;
  /** Version is the version of the vmmSever. */
  readonly version?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ResourceProvisioningState;
}

/** Credentials to connect to VmmServer. */
export interface VmmCredential {
  /** Username to use to connect to VmmServer. */
  username?: string;
  /** Password to use to connect to VmmServer. */
  password?: string;
}

/** The type used for updating tags in VmmServer resources. */
export interface VmmServerTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The response of a VmmServer list operation. */
export interface VmmServerListResult {
  /** The VmmServer items on this page */
  value: VmmServer[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface PagedOperation {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
/** "user", "system", "user,system" */
export type Origin = string;
/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
/** "Internal" */
export type ActionType = string;
/** The available API versions. */
/** */
export type Versions = "2023-10-07";
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState =
  | string
  | ResourceProvisioningState
  | "Provisioning"
  | "Updating"
  | "Deleting"
  | "Accepted"
  | "Created";
/** Alias for InventoryItemPropertiesUnion */
export type InventoryItemPropertiesUnion =
  | CloudInventoryItem
  | VirtualNetworkInventoryItem
  | VirtualMachineTemplateInventoryItem
  | VirtualMachineInventoryItem
  | InventoryItemProperties;
