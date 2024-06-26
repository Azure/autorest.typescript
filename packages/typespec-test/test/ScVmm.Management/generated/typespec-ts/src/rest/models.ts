// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
}

/** Credentials to connect to VmmServer. */
export interface VmmCredential {
  /** Username to use to connect to VmmServer. */
  username?: string;
  /** Password to use to connect to VmmServer. */
  password?: string;
}

/** The extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type?: string;
  /** The extended location name. */
  name?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date | string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date | string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Defines the inventory item. */
export interface InventoryItem extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: InventoryItemProperties;
  /** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
  kind?: string;
}

/** Defines the resource properties. */
export interface InventoryItemPropertiesParent {
  inventoryType: InventoryType;
}

/** The Cloud inventory item. */
export interface CloudInventoryItem extends InventoryItemPropertiesParent {
  /** They inventory type. */
  inventoryType: "Cloud";
}

/** The Virtual network inventory item. */
export interface VirtualNetworkInventoryItem
  extends InventoryItemPropertiesParent {
  /** They inventory type. */
  inventoryType: "VirtualNetwork";
}

/** The Virtual machine template inventory item. */
export interface VirtualMachineTemplateInventoryItem
  extends InventoryItemPropertiesParent {
  /** They inventory type. */
  inventoryType: "VirtualMachineTemplate";
}

/** The Virtual machine inventory item. */
export interface VirtualMachineInventoryItem
  extends InventoryItemPropertiesParent {
  /** Gets or sets the nic ip addresses. */
  ipAddresses?: string[];
  /** Cloud inventory resource details where the VM is present. */
  cloud?: InventoryItemDetails;
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
}

/** Defines the GuestAgent. */
export interface GuestAgent extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GuestAgentProperties;
}

/** Defines the resource properties. */
export interface GuestAgentProperties {
  /** Username / Password Credentials to provision guest agent. */
  credentials?: GuestCredential;
  /** HTTP Proxy configuration for the VM. */
  httpProxyConfig?: HttpProxyConfiguration;
  /** Gets or sets the guest agent provisioning action. */
  provisioningAction?: ProvisioningAction;
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
  availabilitySets?: Array<AvailabilitySetListItem>;
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
}

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
}

/** Defines the resource properties. */
export interface NetworkProfile {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: Array<NetworkInterface>;
}

/** Network Interface model */
export interface NetworkInterface {
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

/** Defines the resource properties. */
export interface StorageProfile {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: Array<VirtualDisk>;
}

/** Virtual disk model */
export interface VirtualDisk {
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
  /** Gets or sets the disk id in the template. */
  templateDiskId?: string;
  /** The QoS policy for the disk. */
  storageQoSPolicy?: StorageQosPolicyDetails;
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
  parentCheckpointID?: string;
  /** Gets ID of the checkpoint. */
  checkpointID?: string;
  /** Gets name of the checkpoint. */
  name?: string;
  /** Gets description of the checkpoint. */
  description?: string;
}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** A private link resource. */
export interface PrivateLinkResource extends Resource {
  /** Resource properties. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
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
}

/** Cloud Capacity model */
export interface CloudCapacity {}

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
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySet extends TrackedResource {
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource.
   * If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.
   * If supported, the resource provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.
   * Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19),
   * If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
   */
  eTag?: string;
  identity?: Identity;
  sku?: Sku;
  plan?: Plan;
}

/** Identity for the resource. */
export interface Identity {
  /** The identity type. */
  type?: ResourceIdentityType;
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
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

/** The type used for updating tags in VmmServer resources. */
export interface VmmServerTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The type used for updating tags in Cloud resources. */
export interface CloudTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The type used for updating tags in VirtualNetwork resources. */
export interface VirtualNetworkTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The type used for updating tags in VirtualMachineTemplate resources. */
export interface VirtualMachineTemplateTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The type used for updating tags in AvailabilitySet resources. */
export interface AvailabilitySetTagsUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The type used for update operations of the VirtualMachineInstance. */
export interface VirtualMachineInstanceUpdate {
  /** The update properties of the VirtualMachineInstance. */
  properties?: VirtualMachineInstanceUpdateProperties;
}

/** Virtual Machine Instance Properties Update model */
export interface VirtualMachineInstanceUpdateProperties {
  /** Availability Sets in vm. */
  availabilitySets?: Array<AvailabilitySetListItem>;
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
  networkInterfaces?: Array<NetworkInterfaceUpdate>;
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
  disks?: Array<VirtualDiskUpdate>;
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
  storageQoSPolicy?: StorageQosPolicyDetails;
}

/** Specifies the vmmServer infrastructure specific update settings for the virtual machine instance. */
export interface InfrastructureProfileUpdate {
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
}

/** Defines the stop action properties. */
export interface StopVirtualMachineOptions {
  /** Gets or sets a value indicating whether to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Defaults to false. */
  skipShutdown?: SkipShutdown;
}

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

/** Defines the resource properties. */
export type InventoryItemProperties =
  | InventoryItemPropertiesParent
  | CloudInventoryItem
  | VirtualNetworkInventoryItem
  | VirtualMachineTemplateInventoryItem
  | VirtualMachineInventoryItem;
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState = string;
/** Alias for ProvisioningState */
export type ProvisioningState = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for InventoryType */
export type InventoryType = string;
/** Alias for OsType */
export type OsType = string;
/** Alias for ProvisioningAction */
export type ProvisioningAction = string;
/** Alias for LimitCpuForMigration */
export type LimitCpuForMigration = string;
/** Alias for DynamicMemoryEnabled */
export type DynamicMemoryEnabled = string;
/** Alias for IsHighlyAvailable */
export type IsHighlyAvailable = string;
/** Alias for AllocationMethod */
export type AllocationMethod = string;
/** Alias for CreateDiffDisk */
export type CreateDiffDisk = string;
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for IsCustomizable */
export type IsCustomizable = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for ForceDelete */
export type ForceDelete = string;
/** Alias for DeleteFromHost */
export type DeleteFromHost = string;
/** Alias for SkipShutdown */
export type SkipShutdown = string;
