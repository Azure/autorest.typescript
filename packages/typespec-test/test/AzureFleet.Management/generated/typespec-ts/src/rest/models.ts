// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** An Compute Fleet resource */
export interface Fleet extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: FleetProperties;
  /** Zones in which the Compute Fleet is available */
  zones?: string[];
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Details of the resource plan. */
  plan?: Plan;
}

/** Details of the Compute Fleet. */
export interface FleetProperties {
  /** Configuration Options for Spot instances in Compute Fleet. */
  spotPriorityProfile?: SpotPriorityProfile;
  /** Configuration Options for Regular instances in Compute Fleet. */
  regularPriorityProfile?: RegularPriorityProfile;
  /** List of VM sizes supported for Compute Fleet */
  vmSizesProfile: Array<VmSizeProfile>;
  /** Compute Profile to use for running user's workloads. */
  computeProfile: ComputeProfile;
}

/** Configuration Options for Spot instances in Compute Fleet. */
export interface SpotPriorityProfile {
  /** Total capacity to achieve. It is currently in terms of number of VMs. */
  capacity?: number;
  /** Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself. */
  minCapacity?: number;
  /** Price per hour of each Spot VM will never exceed this. */
  maxPricePerVM?: number;
  /** Eviction Policy to follow when evicting Spot VMs. */
  evictionPolicy?: EvictionPolicy;
  /** Allocation strategy to follow when determining the VM sizes distribution for Spot VMs. */
  allocationStrategy?: SpotAllocationStrategy;
  /**
   * Flag to enable/disable continuous goal seeking for the desired capacity and restoration of evicted Spot VMs.
   * If maintain is enabled, AzureFleetRP will use all VM sizes in vmSizesProfile to create new VMs (if VMs are evicted deleted)
   * or update existing VMs with new VM sizes (if VMs are evicted deallocated or failed to allocate due to capacity constraint) in order to achieve the desired capacity.
   * Maintain is enabled by default.
   */
  maintain?: boolean;
}

/** Configuration Options for Regular instances in Compute Fleet. */
export interface RegularPriorityProfile {
  /** Total capacity to achieve. It is currently in terms of number of VMs. */
  capacity?: number;
  /** Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself. */
  minCapacity?: number;
  /** Allocation strategy to follow when determining the VM sizes distribution for Regular VMs. */
  allocationStrategy?: RegularPriorityAllocationStrategy;
}

/** Specifications about a VM Size. This will also contain the corresponding rank and weight in future. */
export interface VmSizeProfile {
  /** The Sku name (e.g. 'Standard_DS1_v2') */
  name: string;
  /**
   * The rank of the VM size. This is used with 'RegularPriorityAllocationStrategy.Prioritized'
   * The lower the number, the higher the priority. Starting with 0.
   */
  rank?: number;
}

/** Compute Profile to use for running user's workloads. */
export interface ComputeProfile {
  /** Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachineScaleSet.json#/definitions/VirtualMachineScaleSetVMProfile" */
  baseVirtualMachineProfile: BaseVirtualMachineProfile;
  /**
   * Specifies the Microsoft.Compute API version to use when creating underlying Virtual Machine scale sets and Virtual Machines.
   * The default value will be the latest supported computeApiVersion by Compute Fleet.
   */
  computeApiVersion?: string;
  /**
   * Specifies the number of fault domains to use when creating the underlying VMSS.
   * A fault domain is a logical group of hardware within an Azure datacenter.
   * VMs in the same fault domain share a common power source and network switch.
   * If not specified, defaults to 1, which represents "Max Spreading" (using as many fault domains as possible).
   * This property cannot be updated.
   */
  platformFaultDomainCount?: number;
}

/** BaseVirtualMachineProfile */
export interface BaseVirtualMachineProfile {}

/** The properties of the managed service identities assigned to this resource. */
export interface ManagedServiceIdentity {
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: UserAssignedIdentities;
}

/** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.", */
export interface UserAssignedIdentities
  extends Record<string, UserAssignedIdentity> {}

/** A managed identity assigned by the user. */
export interface UserAssignedIdentity {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
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

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** Fleet Update Model */
export interface FleetUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** Updatable managed service identity */
  identity?: ManagedServiceIdentityUpdate;
  /** Updatable resource plan */
  plan?: ResourcePlanUpdate;
  /** RP-specific updatable properties */
  properties?: FleetProperties;
}

/** The template for adding optional properties. */
export interface ManagedServiceIdentityUpdate {
  /** The type of managed identity assigned to this resource. */
  type?: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: UserAssignedIdentities;
}

/** The template for adding optional properties. */
export interface ResourcePlanUpdate {
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

/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Updating"
  | "Deleting"
  | "Migrating";
/** Alias for EvictionPolicy */
export type EvictionPolicy = string | "Delete" | "Deallocate";
/** Alias for SpotAllocationStrategy */
export type SpotAllocationStrategy =
  | string
  | "PriceCapacityOptimized"
  | "LowestPrice"
  | "CapacityOptimized";
/** Alias for RegularPriorityAllocationStrategy */
export type RegularPriorityAllocationStrategy =
  | string
  | "LowestPrice"
  | "Prioritized";
/** Alias for ManagedServiceIdentityType */
export type ManagedServiceIdentityType =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
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
