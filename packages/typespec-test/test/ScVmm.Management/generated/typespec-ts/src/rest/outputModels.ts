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

/** The VmmServers resource definition. */
export interface VmmServerOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VmmServerPropertiesOutput;
  /** The extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface VmmServerPropertiesOutput {
  /** Credentials to connect to VmmServer. */
  credentials?: VmmCredentialOutput;
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
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Credentials to connect to VmmServer. */
export interface VmmCredentialOutput {
  /** Username to use to connect to VmmServer. */
  username?: string;
  /** Password to use to connect to VmmServer. */
  password?: string;
}

/** The extended location. */
export interface ExtendedLocationOutput {
  /** The extended location type. */
  type?: string;
  /** The extended location name. */
  name?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
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
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByTypeOutput;
  /** The timestamp of resource creation (UTC). */
  createdAt?: string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResourceOutput extends ResourceOutput {}

/** Defines the inventory item. */
export interface InventoryItemOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: InventoryItemPropertiesOutput;
  /** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
  kind?: string;
}

/** Defines the resource properties. */
export interface InventoryItemPropertiesOutputParent {
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedResourceId?: string;
  /** Gets the UUID (which is assigned by Vmm) for the inventory item. */
  readonly uuid?: string;
  /** Gets the Managed Object name in Vmm for the inventory item. */
  readonly inventoryItemName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
  inventoryType: InventoryTypeOutput;
}

/** The Cloud inventory item. */
export interface CloudInventoryItemOutput
  extends InventoryItemPropertiesOutputParent {
  /** They inventory type. */
  inventoryType: "Cloud";
}

/** The Virtual network inventory item. */
export interface VirtualNetworkInventoryItemOutput
  extends InventoryItemPropertiesOutputParent {
  /** They inventory type. */
  inventoryType: "VirtualNetwork";
}

/** The Virtual machine template inventory item. */
export interface VirtualMachineTemplateInventoryItemOutput
  extends InventoryItemPropertiesOutputParent {
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the type of the os. */
  readonly osType?: OsTypeOutput;
  /** Gets os name. */
  readonly osName?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachineTemplate";
}

/** The Virtual machine inventory item. */
export interface VirtualMachineInventoryItemOutput
  extends InventoryItemPropertiesOutputParent {
  /** Gets the type of the os. */
  readonly osType?: OsTypeOutput;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets os version. */
  readonly osVersion?: string;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Gets or sets the nic ip addresses. */
  ipAddresses?: string[];
  /** Cloud inventory resource details where the VM is present. */
  cloud?: InventoryItemDetailsOutput;
  /** Gets the bios guid. */
  readonly biosGuid?: string;
  /** Gets the tracked resource id corresponding to the inventory resource. */
  readonly managedMachineResourceId?: string;
  /** They inventory type. */
  inventoryType: "VirtualMachine";
}

/** Defines the resource properties. */
export interface InventoryItemDetailsOutput {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Gets or sets the Managed Object name in Vmm for the resource. */
  inventoryItemName?: string;
}

/** Defines the HybridIdentityMetadata. */
export interface VmInstanceHybridIdentityMetadataOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VmInstanceHybridIdentityMetadataPropertiesOutput;
}

/** Describes the properties of Hybrid Identity Metadata for a Virtual Machine. */
export interface VmInstanceHybridIdentityMetadataPropertiesOutput {
  /** The unique identifier for the resource. */
  resourceUid?: string;
  /** Gets or sets the Public Key. */
  publicKey?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Defines the GuestAgent. */
export interface GuestAgentOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: GuestAgentPropertiesOutput;
}

/** Defines the resource properties. */
export interface GuestAgentPropertiesOutput {
  /** Gets a unique identifier for this resource. */
  readonly uuid?: string;
  /** Username / Password Credentials to provision guest agent. */
  credentials?: GuestCredentialOutput;
  /** HTTP Proxy configuration for the VM. */
  httpProxyConfig?: HttpProxyConfigurationOutput;
  /** Gets or sets the guest agent provisioning action. */
  provisioningAction?: ProvisioningActionOutput;
  /** Gets the guest agent status. */
  readonly status?: string;
  /** Gets the name of the corresponding resource in Kubernetes. */
  readonly customResourceName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Username / Password Credentials to connect to guest. */
export interface GuestCredentialOutput {
  /** Gets or sets username to connect with the guest. */
  username: string;
  /** Gets or sets the password to connect with the guest. */
  password: string;
}

/** HTTP Proxy configuration for the VM. */
export interface HttpProxyConfigurationOutput {
  /** Gets or sets httpsProxy url. */
  httpsProxy?: string;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** Define the virtualMachineInstance. */
export interface VirtualMachineInstanceOutput extends ExtensionResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineInstancePropertiesOutput;
  /** Gets or sets the extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface VirtualMachineInstancePropertiesOutput {
  /** Availability Sets in vm. */
  availabilitySets?: Array<AvailabilitySetListItemOutput>;
  /** OS properties. */
  osProfile?: OsProfileForVmInstanceOutput;
  /** Hardware properties. */
  hardwareProfile?: HardwareProfileOutput;
  /** Network properties. */
  networkProfile?: NetworkProfileOutput;
  /** Storage properties. */
  storageProfile?: StorageProfileOutput;
  /** Gets the infrastructure profile. */
  infrastructureProfile?: InfrastructureProfileOutput;
  /** Gets the power state of the virtual machine. */
  readonly powerState?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Availability Set model */
export interface AvailabilitySetListItemOutput {
  /** Gets the ARM Id of the microsoft.scvmm/availabilitySets resource. */
  id?: string;
  /** Gets or sets the name of the availability set. */
  name?: string;
}

/** Defines the resource properties. */
export interface OsProfileForVmInstanceOutput {
  /** Admin password of the virtual machine. */
  adminPassword?: string;
  /** Gets or sets computer name. */
  computerName?: string;
  /** Gets the type of the os. */
  readonly osType?: OsTypeOutput;
  /** Gets os sku. */
  readonly osSku?: string;
  /** Gets os version. */
  readonly osVersion?: string;
}

/** Defines the resource properties. */
export interface HardwareProfileOutput {
  /** MemoryMB is the size of a virtual machine's memory, in MB. */
  memoryMB?: number;
  /** Gets or sets the number of vCPUs for the vm. */
  cpuCount?: number;
  /** Gets or sets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  limitCpuForMigration?: LimitCpuForMigrationOutput;
  /** Gets or sets a value indicating whether to enable dynamic memory or not. */
  dynamicMemoryEnabled?: DynamicMemoryEnabledOutput;
  /** Gets or sets the max dynamic memory for the vm. */
  dynamicMemoryMaxMB?: number;
  /** Gets or sets the min dynamic memory for the vm. */
  dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailableOutput;
}

/** Defines the resource properties. */
export interface NetworkProfileOutput {
  /** Gets or sets the list of network interfaces associated with the virtual machine. */
  networkInterfaces?: Array<NetworkInterfaceOutput>;
}

/** Network Interface model */
export interface NetworkInterfaceOutput {
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
  ipv4AddressType?: AllocationMethodOutput;
  /** Gets or sets the ipv6 address type. */
  ipv6AddressType?: AllocationMethodOutput;
  /** Gets or sets the mac address type. */
  macAddressType?: AllocationMethodOutput;
  /** Gets or sets the nic id. */
  nicId?: string;
}

/** Defines the resource properties. */
export interface StorageProfileOutput {
  /** Gets or sets the list of virtual disks associated with the virtual machine. */
  disks?: Array<VirtualDiskOutput>;
}

/** Virtual disk model */
export interface VirtualDiskOutput {
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
  storageQoSPolicy?: StorageQosPolicyDetailsOutput;
  /** Gets or sets a value indicating diff disk. */
  createDiffDisk?: CreateDiffDiskOutput;
}

/** The StorageQoSPolicyDetails definition. */
export interface StorageQosPolicyDetailsOutput {
  /** The name of the policy. */
  name?: string;
  /** The ID of the QoS policy. */
  id?: string;
}

/** Specifies the vmmServer infrastructure specific settings for the virtual machine instance. */
export interface InfrastructureProfileOutput {
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
  readonly lastRestoredVMCheckpoint?: CheckpointOutput;
  /** Checkpoints in the vm. */
  readonly checkpoints?: Array<CheckpointOutput>;
  /** Type of checkpoint supported for the vm. */
  checkpointType?: string;
  /** Gets or sets the generation for the vm. */
  generation?: number;
  /** Gets or sets the bios guid for the vm. */
  biosGuid?: string;
}

/** Defines the resource properties. */
export interface CheckpointOutput {
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
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag?: string;
}

/** A private link resource. */
export interface PrivateLinkResourceOutput extends ResourceOutput {
  /** Resource properties. */
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

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /** The provisioning state of the private endpoint connection resource. */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The Private Endpoint resource. */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  readonly id?: string;
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

/** The Clouds resource definition. */
export interface CloudOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: CloudPropertiesOutput;
  /** The extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface CloudPropertiesOutput {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the cloud. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the cloud in VmmServer. */
  readonly cloudName?: string;
  /** Capacity of the cloud. */
  readonly cloudCapacity?: CloudCapacityOutput;
  /** List of QoS policies available for the cloud. */
  readonly storageQoSPolicies?: Array<StorageQosPolicyOutput>;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Cloud Capacity model */
export interface CloudCapacityOutput {
  /** CPUCount specifies the maximum number of CPUs that can be allocated in the cloud. */
  readonly cpuCount?: number;
  /** MemoryMB specifies a memory usage limit in megabytes. */
  readonly memoryMB?: number;
  /** VMCount gives the max number of VMs that can be deployed in the cloud. */
  readonly vmCount?: number;
}

/** The StorageQoSPolicy definition. */
export interface StorageQosPolicyOutput {
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
export interface VirtualNetworkOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VirtualNetworkPropertiesOutput;
  /** The extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface VirtualNetworkPropertiesOutput {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual network. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Name of the virtual network in vmmServer. */
  readonly networkName?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** The VirtualMachineTemplates resource definition. */
export interface VirtualMachineTemplateOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineTemplatePropertiesOutput;
  /** The extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface VirtualMachineTemplatePropertiesOutput {
  /** Gets or sets the inventory Item ID for the resource. */
  inventoryItemId?: string;
  /** Unique ID of the virtual machine template. */
  uuid?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Gets the type of the os. */
  readonly osType?: OsTypeOutput;
  /** Gets os name. */
  readonly osName?: string;
  /** Gets computer name. */
  readonly computerName?: string;
  /** MemoryMB is the desired size of a virtual machine's memory, in MB. */
  readonly memoryMB?: number;
  /** Gets the desired number of vCPUs for the vm. */
  readonly cpuCount?: number;
  /** Gets a value indicating whether to enable processor compatibility mode for live migration of VMs. */
  readonly limitCpuForMigration?: LimitCpuForMigrationOutput;
  /** Gets a value indicating whether to enable dynamic memory or not. */
  readonly dynamicMemoryEnabled?: DynamicMemoryEnabledOutput;
  /** Gets a value indicating whether the vm template is customizable or not. */
  readonly isCustomizable?: IsCustomizableOutput;
  /** Gets the max dynamic memory for the vm. */
  readonly dynamicMemoryMaxMB?: number;
  /** Gets the min dynamic memory for the vm. */
  readonly dynamicMemoryMinMB?: number;
  /** Gets highly available property. */
  readonly isHighlyAvailable?: IsHighlyAvailableOutput;
  /** Gets the generation for the vm. */
  readonly generation?: number;
  /** Gets the network interfaces of the template. */
  readonly networkInterfaces?: Array<NetworkInterfaceOutput>;
  /** Gets the disks of the template. */
  readonly disks?: Array<VirtualDiskOutput>;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** The AvailabilitySets resource definition. */
export interface AvailabilitySetOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AvailabilitySetPropertiesOutput;
  /** The extended location. */
  extendedLocation: ExtendedLocationOutput;
}

/** Defines the resource properties. */
export interface AvailabilitySetPropertiesOutput {
  /** Name of the availability set. */
  availabilitySetName?: string;
  /** ARM Id of the vmmServer resource in which this resource resides. */
  vmmServerId?: string;
  /** Provisioning state of the resource. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySetOutput
  extends TrackedResourceOutput {
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
  identity?: IdentityOutput;
  sku?: SkuOutput;
  plan?: PlanOutput;
}

/** Identity for the resource. */
export interface IdentityOutput {
  /** The principal ID of resource identity. The value must be an UUID. */
  readonly principalId?: string;
  /** The tenant ID of resource. The value must be an UUID. */
  readonly tenantId?: string;
  /** The identity type. */
  type?: ResourceIdentityTypeOutput;
}

/** The resource model definition representing SKU */
export interface SkuOutput {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTierOutput;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
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

/** Defines the resource properties. */
export type InventoryItemPropertiesOutput =
  | InventoryItemPropertiesOutputParent
  | CloudInventoryItemOutput
  | VirtualNetworkInventoryItemOutput
  | VirtualMachineTemplateInventoryItemOutput
  | VirtualMachineInventoryItemOutput;
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type OperationListResultOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = string;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput = string;
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput = string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput = string;
/** Alias for InventoryTypeOutput */
export type InventoryTypeOutput = string;
/** Alias for OsTypeOutput */
export type OsTypeOutput = string;
/** Alias for ProvisioningActionOutput */
export type ProvisioningActionOutput = string;
/** Alias for LimitCpuForMigrationOutput */
export type LimitCpuForMigrationOutput = string;
/** Alias for DynamicMemoryEnabledOutput */
export type DynamicMemoryEnabledOutput = string;
/** Alias for IsHighlyAvailableOutput */
export type IsHighlyAvailableOutput = string;
/** Alias for AllocationMethodOutput */
export type AllocationMethodOutput = string;
/** Alias for CreateDiffDiskOutput */
export type CreateDiffDiskOutput = string;
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput = string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput = string;
/** Alias for IsCustomizableOutput */
export type IsCustomizableOutput = string;
/** Alias for ResourceIdentityTypeOutput */
export type ResourceIdentityTypeOutput = "SystemAssigned";
/** Alias for SkuTierOutput */
export type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";
/** The response of a VmmServer list operation. */
export type VmmServerListResultOutput = Paged<VmmServerOutput>;
/** The response of a Cloud list operation. */
export type CloudListResultOutput = Paged<CloudOutput>;
/** The response of a VirtualNetwork list operation. */
export type VirtualNetworkListResultOutput = Paged<VirtualNetworkOutput>;
/** The response of a VirtualMachineTemplate list operation. */
export type VirtualMachineTemplateListResultOutput =
  Paged<VirtualMachineTemplateOutput>;
/** The response of a AvailabilitySet list operation. */
export type AvailabilitySetListResultOutput = Paged<AvailabilitySetOutput>;
/** The response of a InventoryItem list operation. */
export type InventoryItemListResultOutput = Paged<InventoryItemOutput>;
/** The response of a VirtualMachineInstance list operation. */
export type VirtualMachineInstanceListResultOutput =
  Paged<VirtualMachineInstanceOutput>;
/** The response of a VmInstanceHybridIdentityMetadata list operation. */
export type VmInstanceHybridIdentityMetadataListResultOutput =
  Paged<VmInstanceHybridIdentityMetadataOutput>;
/** The response of a GuestAgent list operation. */
export type GuestAgentListResultOutput = Paged<GuestAgentOutput>;
