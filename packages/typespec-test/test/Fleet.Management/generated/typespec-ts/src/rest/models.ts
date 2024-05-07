// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The error detail. */
export interface ErrorDetail {}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {}

/** The Fleet resource. */
export interface Fleet extends TrackedResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetProperties;
  /** Managed identity. */
  identity?: ManagedIdentityProperties;
}

/** Fleet properties. */
export interface FleetProperties {
  /** The FleetHubProfile configures the Fleet's hub. */
  hubProfile?: FleetHubProfile;
}

/** The FleetHubProfile configures the fleet hub. */
export interface FleetHubProfile {
  /** DNS prefix used to create the FQDN for the Fleet hub. */
  dnsPrefix?: string;
  /** The access profile for the Fleet hub API server. */
  apiServerAccessProfile?: APIServerAccessProfile;
  /** The agent profile for the Fleet hub. */
  agentProfile?: AgentProfile;
}

/** Access profile for the Fleet hub API server. */
export interface APIServerAccessProfile {
  /** Whether to create the Fleet hub as a private cluster or not. */
  enablePrivateCluster?: boolean;
}

/** Agent profile for the Fleet hub. */
export interface AgentProfile {
  /** The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used. */
  subnetId?: string;
  /** The virtual machine size of the Fleet hub. */
  vmSize?: string;
}

/** The properties of the managed service identities assigned to this resource. */
export interface ManagedIdentityProperties {
  /** The type of managed identity assigned to this resource. */
  type: ManagedIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

/** A managed identity assigned by the user. */
export interface UserAssignedIdentity {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
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

export interface PrivateLinkResource extends ProxyResourceBase {
  /** Properties of the private link resource. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMember extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetMemberProperties;
}

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMemberProperties {
  /** The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'. */
  clusterResourceId: string;
  /** The group this member belongs to for multi-cluster update management. */
  group?: string;
}

/** A multi-stage process to perform update operations across members of a Fleet. */
export interface UpdateRun extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: UpdateRunProperties;
}

/** The properties of the UpdateRun. */
export interface UpdateRunProperties {
  /**
   * The resource id of the FleetUpdateStrategy resource to reference.
   *
   * When creating a new run, there are three ways to define a strategy for the run:
   * 1. Define a new strategy in place: Set the "strategy" field.
   * 2. Use an existing strategy: Set the "updateStrategyId" field. (since 2023-08-15-preview)
   * 3. Use the default strategy to update all the members one by one: Leave both "updateStrategyId" and "strategy" unset. (since 2023-08-15-preview)
   *
   * Setting both "updateStrategyId" and "strategy" is invalid.
   *
   * UpdateRuns created by "updateStrategyId" snapshot the referenced UpdateStrategy at the time of creation and store it in the "strategy" field.
   * Subsequent changes to the referenced FleetUpdateStrategy resource do not propagate.
   * UpdateRunStrategy changes can be made directly on the "strategy" field before launching the UpdateRun.
   */
  updateStrategyId?: string;
  /**
   * The strategy defines the order in which the clusters will be updated.
   * If not set, all members will be updated sequentially. The UpdateRun status will show a single UpdateStage and a single UpdateGroup targeting all members.
   * The strategy of the UpdateRun can be modified until the run is started.
   */
  strategy?: UpdateRunStrategy;
  /** The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started. */
  managedClusterUpdate: ManagedClusterUpdate;
}

/**
 * Defines the update sequence of the clusters via stages and groups.
 *
 * Stages within a run are executed sequentially one after another.
 * Groups within a stage are executed in parallel.
 * Member clusters within a group are updated sequentially one after another.
 *
 * A valid strategy contains no duplicate groups within or across stages.
 */
export interface UpdateRunStrategy {
  /** The list of stages that compose this update run. Min size: 1. */
  stages: Array<UpdateStage>;
}

/** Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage. */
export interface UpdateStage {
  /** The name of the stage. Must be unique within the UpdateRun. */
  name: string;
  /** Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1. */
  groups?: Array<UpdateGroup>;
  /** The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified. */
  afterStageWaitInSeconds?: number;
}

/** A group to be updated. */
export interface UpdateGroup {
  /**
   * Name of the group.
   * It must match a group name of an existing fleet member.
   */
  name: string;
}

/** The update to be applied to the ManagedClusters. */
export interface ManagedClusterUpdate {
  /** The upgrade to apply to the ManagedClusters. */
  upgrade: ManagedClusterUpgradeSpec;
  /** The node image upgrade to be applied to the target nodes in update run. */
  nodeImageSelection?: NodeImageSelection;
}

/** The upgrade to apply to a ManagedCluster. */
export interface ManagedClusterUpgradeSpec {
  /** ManagedClusterUpgradeType is the type of upgrade to be applied. */
  type: ManagedClusterUpgradeType;
  /** The Kubernetes version to upgrade the member clusters to. */
  kubernetesVersion?: string;
}

/** The node image upgrade to be applied to the target nodes in update run. */
export interface NodeImageSelection {
  /** The node image upgrade type. */
  type: NodeImageSelectionType;
}

/** The status of a UpdateRun. */
export interface UpdateRunStatus {}

/** The status for an operation or group of operations. */
export interface UpdateStatus {}

/** The status of a UpdateStage. */
export interface UpdateStageStatus {}

/** The status of a UpdateGroup. */
export interface UpdateGroupStatus {}

/** The status of a member update operation. */
export interface MemberUpdateStatus {}

/** The status of the wait duration. */
export interface WaitStatus {}

/** The node image upgrade specs for the update run. */
export interface NodeImageSelectionStatus {}

/** The node upgrade image version. */
export interface NodeImageVersion {}

/** Defines a multi-stage process to perform update operations across members of a Fleet. */
export interface FleetUpdateStrategy extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetUpdateStrategyProperties;
}

/** The properties of the UpdateStrategy. */
export interface FleetUpdateStrategyProperties {
  /** Defines the update sequence of the clusters. */
  strategy: UpdateRunStrategy;
}

/** The base extension resource. */
export interface ExtensionResourceBase extends ArmResource {}

/** Properties of a Fleet that can be patched. */
export interface FleetPatch {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** Managed identity. */
  identity?: ManagedIdentityProperties;
}

/** The type used for update operations of the FleetMember. */
export interface FleetMemberUpdate {
  properties?: FleetMemberUpdateProperties;
}

/** The updatable properties of the FleetMember. */
export interface FleetMemberUpdateProperties {
  /** The group this member belongs to for multi-cluster update management. */
  group?: string;
}

/** The properties of a skip operation containing multiple skip requests. */
export interface SkipProperties {
  /** The targets to skip. */
  targets: Array<SkipTarget>;
}

/** The definition of a single skip request. */
export interface SkipTarget {
  /** The skip target type. */
  type: TargetType;
  /**
   * The skip target's name.
   * To skip a member/group/stage, use the member/group/stage's name;
   * Tp skip an after stage wait, use the parent stage's name.
   */
  name: string;
}

/** The provisioning state of a resource type. */
export type ResourceProvisioningState = "Succeeded" | "Failed" | "Canceled";
/** Alias for FleetProvisioningState */
export type FleetProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Updating"
  | "Deleting";
/** The kind of managed identity assigned to this resource. */
export type ManagedIdentityType =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned";
/** The kind of entity that created the resource. */
export type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";
/** The private endpoint connection status */
export type PrivateEndpointServiceConnectionStatus =
  | "Pending"
  | "Approved"
  | "Rejected";
/** The provisioning state of the connection */
export type PrivateEndpointConnectionProvisioningState =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "Creating"
  | "Deleting";
/** Alias for FleetMemberProvisioningState */
export type FleetMemberProvisioningState =
  | string
  | ResourceProvisioningState
  | "Joining"
  | "Leaving"
  | "Updating";
/** Alias for UpdateRunProvisioningState */
export type UpdateRunProvisioningState = string | ResourceProvisioningState;
/** Alias for ManagedClusterUpgradeType */
export type ManagedClusterUpgradeType =
  | string
  | "Full"
  | "NodeImageOnly"
  | "ControlPlaneOnly";
/** Alias for NodeImageSelectionType */
export type NodeImageSelectionType = string | "Latest" | "Consistent";
/** Alias for UpdateState */
export type UpdateState =
  | string
  | "NotStarted"
  | "Running"
  | "Stopping"
  | "Stopped"
  | "Skipped"
  | "Failed"
  | "Completed";
/** Alias for FleetUpdateStrategyProvisioningState */
export type FleetUpdateStrategyProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for TargetType */
export type TargetType =
  | string
  | "Member"
  | "Group"
  | "Stage"
  | "AfterStageWait";
