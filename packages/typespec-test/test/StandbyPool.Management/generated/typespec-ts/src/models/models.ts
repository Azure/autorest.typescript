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

/** A StandbyContainerGroupPoolResource. */
export interface StandbyContainerGroupPoolResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: StandbyContainerGroupPoolResourceProperties;
}

/** Details of the StandbyContainerGroupPool. */
export interface StandbyContainerGroupPoolResourceProperties {
  /** Specifies elasticity profile of standby container group pools. */
  elasticityProfile: StandbyContainerGroupPoolElasticityProfile;
  /** Specifies container group properties of standby container group pools. */
  containerGroupProperties: ContainerGroupProperties;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** Specifies the elasticity profile of the standby container group pools. */
export interface StandbyContainerGroupPoolElasticityProfile {
  /** Specifies maximum number of standby container groups in the standby pool. */
  maxReadyCapacity: number;
  /** Specifies refill policy of the pool. */
  refillPolicy?: RefillPolicy;
}

/** Refill policy of standby pool */
/** "always" */
export type RefillPolicy = string;

/** Details of the ContainerGroupProperties. */
export interface ContainerGroupProperties {
  /** Specifies container group profile of standby container groups. */
  containerGroupProfile: ContainerGroupProfile;
  /** Specifies subnet Ids for container group. */
  subnetIds?: Subnet[];
}

/** Details of the ContainerGroupProfile. */
export interface ContainerGroupProfile {
  /** Specifies container group profile id of standby container groups. */
  id: string;
  /** Specifies revision of container group profile. */
  revision?: number;
}

/** Subnet of container group */
export interface Subnet {
  /** Specifies ARM resource id of the subnet. */
  id: string;
}

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

/** The type used for update operations of the StandbyContainerGroupPoolResource. */
export interface StandbyContainerGroupPoolResourceUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: StandbyContainerGroupPoolResourceUpdateProperties;
}

/** The updatable properties of the StandbyContainerGroupPoolResource. */
export interface StandbyContainerGroupPoolResourceUpdateProperties {
  /** Specifies elasticity profile of standby container group pools. */
  elasticityProfile?: StandbyContainerGroupPoolElasticityProfile;
  /** Specifies container group properties of standby container group pools. */
  containerGroupProperties?: ContainerGroupProperties;
}

/** The response of a StandbyContainerGroupPoolResource list operation. */
export interface StandbyContainerGroupPoolResourceListResult {
  /** The StandbyContainerGroupPoolResource items on this page */
  value: StandbyContainerGroupPoolResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The base proxy resource. */
export interface ProxyResource extends Resource {}

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface StandbyVirtualMachineResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: StandbyVirtualMachineResourceProperties;
}

/** Details of the StandbyVirtualMachine. */
export interface StandbyVirtualMachineResourceProperties {
  /** Resource id of the virtual machine. */
  virtualMachineResourceId: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** The response of a StandbyVirtualMachineResource list operation. */
export interface StandbyVirtualMachineResourceListResult {
  /** The StandbyVirtualMachineResource items on this page */
  value: StandbyVirtualMachineResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A StandbyVirtualMachinePoolResource. */
export interface StandbyVirtualMachinePoolResource extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: StandbyVirtualMachinePoolResourceProperties;
}

/** Details of the StandbyVirtualMachinePool. */
export interface StandbyVirtualMachinePoolResourceProperties {
  /** Specifies the elasticity profile of the standby virtual machine pools. */
  elasticityProfile?: StandbyVirtualMachinePoolElasticityProfile;
  /** Specifies the desired state of virtual machines in the pool. */
  virtualMachineState: VirtualMachineState;
  /** Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to. */
  attachedVirtualMachineScaleSetId?: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

/** Details of the elasticity profile. */
export interface StandbyVirtualMachinePoolElasticityProfile {
  /** Specifies the maximum number of virtual machines in the standby virtual machine pool. */
  maxReadyCapacity: number;
}

/** State of standby virtual machines */
/** "Running", "Deallocated" */
export type VirtualMachineState = string;

/** The type used for update operations of the StandbyVirtualMachinePoolResource. */
export interface StandbyVirtualMachinePoolResourceUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  properties?: StandbyVirtualMachinePoolResourceUpdateProperties;
}

/** The updatable properties of the StandbyVirtualMachinePoolResource. */
export interface StandbyVirtualMachinePoolResourceUpdateProperties {
  /** Specifies the elasticity profile of the standby virtual machine pools. */
  elasticityProfile?: StandbyVirtualMachinePoolElasticityProfile;
  /** Specifies the desired state of virtual machines in the pool. */
  virtualMachineState?: VirtualMachineState;
  /** Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to. */
  attachedVirtualMachineScaleSetId?: string;
}

/** The response of a StandbyVirtualMachinePoolResource list operation. */
export interface StandbyVirtualMachinePoolResourceListResult {
  /** The StandbyVirtualMachinePoolResource items on this page */
  value: StandbyVirtualMachinePoolResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

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
/** Supported API Versions for Microsoft.StandbyPool */
/** */
export type Versions = "2023-12-01-preview";
/** Alias for ProvisioningState */
export type ProvisioningState = string | ResourceProvisioningState | "Deleting";
