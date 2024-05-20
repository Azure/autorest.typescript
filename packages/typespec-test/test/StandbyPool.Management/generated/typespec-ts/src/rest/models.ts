// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
}

/** Details of the elasticity profile. */
export interface StandbyVirtualMachinePoolElasticityProfile {
  /** Specifies the maximum number of virtual machines in the standby virtual machine pool. */
  maxReadyCapacity: number;
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

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface StandbyVirtualMachineResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: StandbyVirtualMachineResourceProperties;
}

/** Details of the StandbyVirtualMachine. */
export interface StandbyVirtualMachineResourceProperties {
  /** Resource id of the virtual machine. */
  virtualMachineResourceId: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

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
}

/** Specifies the elasticity profile of the standby container group pools. */
export interface StandbyContainerGroupPoolElasticityProfile {
  /** Specifies maximum number of standby container groups in the standby pool. */
  maxReadyCapacity: number;
  /** Specifies refill policy of the pool. */
  refillPolicy?: RefillPolicy;
}

/** Details of the ContainerGroupProperties. */
export interface ContainerGroupProperties {
  /** Specifies container group profile of standby container groups. */
  containerGroupProfile: ContainerGroupProfile;
  /** Specifies subnet Ids for container group. */
  subnetIds?: Array<Subnet>;
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

/** Alias for VirtualMachineState */
export type VirtualMachineState = string | "Running" | "Deallocated";
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | string;
/** Alias for ProvisioningState */
export type ProvisioningState = string | ResourceProvisioningState | "Deleting";
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
/** Alias for RefillPolicy */
export type RefillPolicy = string | "always";
