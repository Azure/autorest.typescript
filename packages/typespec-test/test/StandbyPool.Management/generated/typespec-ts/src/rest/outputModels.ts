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

/** A StandbyVirtualMachinePoolResource. */
export interface StandbyVirtualMachinePoolResourceOutput
  extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: StandbyVirtualMachinePoolResourcePropertiesOutput;
}

/** Details of the StandbyVirtualMachinePool. */
export interface StandbyVirtualMachinePoolResourcePropertiesOutput {
  /** Specifies the elasticity profile of the standby virtual machine pools. */
  elasticityProfile?: StandbyVirtualMachinePoolElasticityProfileOutput;
  /** Specifies the desired state of virtual machines in the pool. */
  virtualMachineState: VirtualMachineStateOutput;
  /** Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to. */
  attachedVirtualMachineScaleSetId?: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Details of the elasticity profile. */
export interface StandbyVirtualMachinePoolElasticityProfileOutput {
  /** Specifies the maximum number of virtual machines in the standby virtual machine pool. */
  maxReadyCapacity: number;
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

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface StandbyVirtualMachineResourceOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: StandbyVirtualMachineResourcePropertiesOutput;
}

/** Details of the StandbyVirtualMachine. */
export interface StandbyVirtualMachineResourcePropertiesOutput {
  /** Resource id of the virtual machine. */
  virtualMachineResourceId: string;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag: string;
}

/** A StandbyContainerGroupPoolResource. */
export interface StandbyContainerGroupPoolResourceOutput
  extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: StandbyContainerGroupPoolResourcePropertiesOutput;
}

/** Details of the StandbyContainerGroupPool. */
export interface StandbyContainerGroupPoolResourcePropertiesOutput {
  /** Specifies elasticity profile of standby container group pools. */
  elasticityProfile: StandbyContainerGroupPoolElasticityProfileOutput;
  /** Specifies container group properties of standby container group pools. */
  containerGroupProperties: ContainerGroupPropertiesOutput;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Specifies the elasticity profile of the standby container group pools. */
export interface StandbyContainerGroupPoolElasticityProfileOutput {
  /** Specifies maximum number of standby container groups in the standby pool. */
  maxReadyCapacity: number;
  /** Specifies refill policy of the pool. */
  refillPolicy?: RefillPolicyOutput;
}

/** Details of the ContainerGroupProperties. */
export interface ContainerGroupPropertiesOutput {
  /** Specifies container group profile of standby container groups. */
  containerGroupProfile: ContainerGroupProfileOutput;
  /** Specifies subnet Ids for container group. */
  subnetIds?: Array<SubnetOutput>;
}

/** Details of the ContainerGroupProfile. */
export interface ContainerGroupProfileOutput {
  /** Specifies container group profile id of standby container groups. */
  id: string;
  /** Specifies revision of container group profile. */
  revision?: number;
}

/** Subnet of container group */
export interface SubnetOutput {
  /** Specifies ARM resource id of the subnet. */
  id: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = "user" | "system" | "user,system" | string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = "Internal" | string;
/** Alias for VirtualMachineStateOutput */
export type VirtualMachineStateOutput = string | "Running" | "Deallocated";
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
  | "Deleting";
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
/** Alias for RefillPolicyOutput */
export type RefillPolicyOutput = string | "always";
/** The response of a StandbyVirtualMachinePoolResource list operation. */
export type StandbyVirtualMachinePoolResourceListResultOutput =
  Paged<StandbyVirtualMachinePoolResourceOutput>;
/** The response of a StandbyVirtualMachineResource list operation. */
export type StandbyVirtualMachineResourceListResultOutput =
  Paged<StandbyVirtualMachineResourceOutput>;
/** The response of a StandbyContainerGroupPoolResource list operation. */
export type StandbyContainerGroupPoolResourceListResultOutput =
  Paged<StandbyContainerGroupPoolResourceOutput>;
