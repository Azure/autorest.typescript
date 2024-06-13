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

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

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
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Configuration Options for Spot instances in Compute Fleet. */
  spotPriorityProfile?: SpotPriorityProfile;
  /** Configuration Options for Regular instances in Compute Fleet. */
  regularPriorityProfile?: RegularPriorityProfile;
  /** List of VM sizes supported for Compute Fleet */
  vmSizesProfile: VmSizeProfile[];
  /** Compute Profile to use for running user's workloads. */
  computeProfile: ComputeProfile;
}

/** The provisioning state of a resource type. */
/** "Succeeded", "Failed", "Canceled" */
export type ResourceProvisioningState = string;

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

/** Different kind of eviction policies */
/** "Delete", "Deallocate" */
export type EvictionPolicy = string;
/** Spot allocation strategy types for Compute Fleet */
/** "PriceCapacityOptimized", "LowestPrice", "CapacityOptimized" */
export type SpotAllocationStrategy = string;

/** Configuration Options for Regular instances in Compute Fleet. */
export interface RegularPriorityProfile {
  /** Total capacity to achieve. It is currently in terms of number of VMs. */
  capacity?: number;
  /** Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself. */
  minCapacity?: number;
  /** Allocation strategy to follow when determining the VM sizes distribution for Regular VMs. */
  allocationStrategy?: RegularPriorityAllocationStrategy;
}

/** Regular VM Allocation strategy types for Compute Fleet */
/** "LowestPrice", "Prioritized" */
export type RegularPriorityAllocationStrategy = string;

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
  /** The Active Directory tenant id of the principal. */
  readonly tenantId?: string;
  /** The active directory identifier of this principal. */
  readonly principalId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: UserAssignedIdentities;
}

/** The kind of managed identity assigned to this resource. */
/** "None", "SystemAssigned", "UserAssigned", "SystemAssigned, UserAssigned" */
export type ManagedServiceIdentityType = string;

/** A managed identity assigned by the user. */
export interface UserAssignedIdentity {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
}

/** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.", */
export interface UserAssignedIdentities
  extends Record<string, UserAssignedIdentity> {}

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

/** The response of a Fleet list operation. */
export interface FleetListResult {
  /** The Fleet items on this page */
  value: Fleet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a VirtualMachineScaleSet list operation. */
export interface VirtualMachineScaleSetListResult {
  /** The VirtualMachineScaleSet items on this page */
  value: VirtualMachineScaleSet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An AzureFleet's virtualMachineScaleSet */
export interface VirtualMachineScaleSet {
  /**
   * The compute RP resource id of the virtualMachineScaleSet
   * "subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}"
   */
  readonly id: string;
  /** Type of the virtualMachineScaleSet */
  readonly type?: string;
  /** This represents the operationStatus of the VMSS in response to the last operation that was performed on it by Azure Fleet resource. */
  readonly operationStatus: ProvisioningState;
  /** Error Information when `operationStatus` is `Failed` */
  readonly error?: ApiError;
}

/** ApiError for Fleet */
export interface ApiError {}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface PagedOperation {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
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
/** Api versions */
/** */
export type Versions = "2023-11-01-preview" | "2024-05-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Updating"
  | "Deleting"
  | "Migrating";
