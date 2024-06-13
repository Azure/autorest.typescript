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

/** An Compute Fleet resource */
export interface FleetOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: FleetPropertiesOutput;
  /** Zones in which the Compute Fleet is available */
  zones?: string[];
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentityOutput;
  /** Details of the resource plan. */
  plan?: PlanOutput;
}

/** Details of the Compute Fleet. */
export interface FleetPropertiesOutput {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningStateOutput;
  /** Configuration Options for Spot instances in Compute Fleet. */
  spotPriorityProfile?: SpotPriorityProfileOutput;
  /** Configuration Options for Regular instances in Compute Fleet. */
  regularPriorityProfile?: RegularPriorityProfileOutput;
  /** List of VM sizes supported for Compute Fleet */
  vmSizesProfile: Array<VmSizeProfileOutput>;
  /** Compute Profile to use for running user's workloads. */
  computeProfile: ComputeProfileOutput;
}

/** Configuration Options for Spot instances in Compute Fleet. */
export interface SpotPriorityProfileOutput {
  /** Total capacity to achieve. It is currently in terms of number of VMs. */
  capacity?: number;
  /** Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself. */
  minCapacity?: number;
  /** Price per hour of each Spot VM will never exceed this. */
  maxPricePerVM?: number;
  /** Eviction Policy to follow when evicting Spot VMs. */
  evictionPolicy?: EvictionPolicyOutput;
  /** Allocation strategy to follow when determining the VM sizes distribution for Spot VMs. */
  allocationStrategy?: SpotAllocationStrategyOutput;
  /**
   * Flag to enable/disable continuous goal seeking for the desired capacity and restoration of evicted Spot VMs.
   * If maintain is enabled, AzureFleetRP will use all VM sizes in vmSizesProfile to create new VMs (if VMs are evicted deleted)
   * or update existing VMs with new VM sizes (if VMs are evicted deallocated or failed to allocate due to capacity constraint) in order to achieve the desired capacity.
   * Maintain is enabled by default.
   */
  maintain?: boolean;
}

/** Configuration Options for Regular instances in Compute Fleet. */
export interface RegularPriorityProfileOutput {
  /** Total capacity to achieve. It is currently in terms of number of VMs. */
  capacity?: number;
  /** Minimum capacity to achieve which cannot be updated. If we will not be able to "guarantee" minimum capacity, we will reject the request in the sync path itself. */
  minCapacity?: number;
  /** Allocation strategy to follow when determining the VM sizes distribution for Regular VMs. */
  allocationStrategy?: RegularPriorityAllocationStrategyOutput;
}

/** Specifications about a VM Size. This will also contain the corresponding rank and weight in future. */
export interface VmSizeProfileOutput {
  /** The Sku name (e.g. 'Standard_DS1_v2') */
  name: string;
  /**
   * The rank of the VM size. This is used with 'RegularPriorityAllocationStrategy.Prioritized'
   * The lower the number, the higher the priority. Starting with 0.
   */
  rank?: number;
}

/** Compute Profile to use for running user's workloads. */
export interface ComputeProfileOutput {
  /** Base Virtual Machine Profile Properties to be specified according to "specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/{computeApiVersion}/virtualMachineScaleSet.json#/definitions/VirtualMachineScaleSetVMProfile" */
  baseVirtualMachineProfile: BaseVirtualMachineProfileOutput;
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
export interface BaseVirtualMachineProfileOutput {}

/** The properties of the managed service identities assigned to this resource. */
export interface ManagedServiceIdentityOutput {
  /** The Active Directory tenant id of the principal. */
  readonly tenantId?: string;
  /** The active directory identifier of this principal. */
  readonly principalId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityTypeOutput;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: UserAssignedIdentitiesOutput;
}

/** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.", */
export interface UserAssignedIdentitiesOutput
  extends Record<string, UserAssignedIdentityOutput> {}

/** A managed identity assigned by the user. */
export interface UserAssignedIdentityOutput {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
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

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag: string;
}

/** The response of a VirtualMachineScaleSet list operation. */
export interface VirtualMachineScaleSetListResultOutput {
  /** The VirtualMachineScaleSet items on this page */
  value: Array<VirtualMachineScaleSetOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** An AzureFleet's virtualMachineScaleSet */
export interface VirtualMachineScaleSetOutput {
  /**
   * The compute RP resource id of the virtualMachineScaleSet
   * "subscriptions/{subId}/resourceGroups/{rgName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmssName}"
   */
  readonly id: string;
  /** Type of the virtualMachineScaleSet */
  readonly type?: string;
  /** This represents the operationStatus of the VMSS in response to the last operation that was performed on it by Azure Fleet resource. */
  readonly operationStatus: ProvisioningStateOutput;
  /** Error Information when `operationStatus` is `Failed` */
  readonly error?: ApiErrorOutput;
}

/** ApiError for Fleet */
export interface ApiErrorOutput {}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = "user" | "system" | "user,system" | string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = "Internal" | string;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput =
  | string
  | ResourceProvisioningStateOutput
  | "Creating"
  | "Updating"
  | "Deleting"
  | "Migrating";
/** Alias for EvictionPolicyOutput */
export type EvictionPolicyOutput = string | "Delete" | "Deallocate";
/** Alias for SpotAllocationStrategyOutput */
export type SpotAllocationStrategyOutput =
  | string
  | "PriceCapacityOptimized"
  | "LowestPrice"
  | "CapacityOptimized";
/** Alias for RegularPriorityAllocationStrategyOutput */
export type RegularPriorityAllocationStrategyOutput =
  | string
  | "LowestPrice"
  | "Prioritized";
/** Alias for ManagedServiceIdentityTypeOutput */
export type ManagedServiceIdentityTypeOutput =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
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
/** The response of a Fleet list operation. */
export type FleetListResultOutput = Paged<FleetOutput>;
