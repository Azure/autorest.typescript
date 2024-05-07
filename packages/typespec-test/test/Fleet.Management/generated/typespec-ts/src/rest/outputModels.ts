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
  /** Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
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

/** The Fleet resource. */
export interface FleetOutput extends TrackedResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: FleetPropertiesOutput;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
  /** Managed identity. */
  identity?: ManagedIdentityPropertiesOutput;
}

/** Fleet properties. */
export interface FleetPropertiesOutput {
  /** The status of the last operation. */
  readonly provisioningState?: FleetProvisioningStateOutput;
  /** The FleetHubProfile configures the Fleet's hub. */
  hubProfile?: FleetHubProfileOutput;
}

/** The FleetHubProfile configures the fleet hub. */
export interface FleetHubProfileOutput {
  /** DNS prefix used to create the FQDN for the Fleet hub. */
  dnsPrefix?: string;
  /** The access profile for the Fleet hub API server. */
  apiServerAccessProfile?: APIServerAccessProfileOutput;
  /** The agent profile for the Fleet hub. */
  agentProfile?: AgentProfileOutput;
  /** The FQDN of the Fleet hub. */
  readonly fqdn?: string;
  /** The Kubernetes version of the Fleet hub. */
  readonly kubernetesVersion?: string;
  /** The Azure Portal FQDN of the Fleet hub. */
  readonly portalFqdn?: string;
}

/** Access profile for the Fleet hub API server. */
export interface APIServerAccessProfileOutput {
  /** Whether to create the Fleet hub as a private cluster or not. */
  enablePrivateCluster?: boolean;
}

/** Agent profile for the Fleet hub. */
export interface AgentProfileOutput {
  /** The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used. */
  subnetId?: string;
  /** The virtual machine size of the Fleet hub. */
  vmSize?: string;
}

/** The properties of the managed service identities assigned to this resource. */
export interface ManagedIdentityPropertiesOutput {
  /** The Active Directory tenant id of the principal. */
  readonly tenantId?: string;
  /** The active directory identifier of this principal. */
  readonly principalId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedIdentityTypeOutput;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentityOutput>;
}

/** A managed identity assigned by the user. */
export interface UserAssignedIdentityOutput {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBaseOutput extends ArmResourceOutput {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResourceOutput extends ArmResourceBaseOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type: string;
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

/** Base class used for type definitions */
export interface ArmResourceBaseOutput {}

/** The base proxy resource. */
export interface ProxyResourceBaseOutput extends ArmResourceOutput {}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput
  extends ProxyResourceBaseOutput {
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

export interface PrivateLinkResourceOutput extends ProxyResourceBaseOutput {
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

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMemberOutput extends ProxyResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: FleetMemberPropertiesOutput;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMemberPropertiesOutput {
  /** The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'. */
  clusterResourceId: string;
  /** The group this member belongs to for multi-cluster update management. */
  group?: string;
  /** The status of the last operation. */
  readonly provisioningState?: FleetMemberProvisioningStateOutput;
}

/** A multi-stage process to perform update operations across members of a Fleet. */
export interface UpdateRunOutput extends ProxyResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: UpdateRunPropertiesOutput;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** The properties of the UpdateRun. */
export interface UpdateRunPropertiesOutput {
  /** The provisioning state of the UpdateRun resource. */
  readonly provisioningState?: UpdateRunProvisioningStateOutput;
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
  strategy?: UpdateRunStrategyOutput;
  /** The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started. */
  managedClusterUpdate: ManagedClusterUpdateOutput;
  /** The status of the UpdateRun. */
  readonly status?: UpdateRunStatusOutput;
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
export interface UpdateRunStrategyOutput {
  /** The list of stages that compose this update run. Min size: 1. */
  stages: Array<UpdateStageOutput>;
}

/** Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage. */
export interface UpdateStageOutput {
  /** The name of the stage. Must be unique within the UpdateRun. */
  name: string;
  /** Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1. */
  groups?: Array<UpdateGroupOutput>;
  /** The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified. */
  afterStageWaitInSeconds?: number;
}

/** A group to be updated. */
export interface UpdateGroupOutput {
  /**
   * Name of the group.
   * It must match a group name of an existing fleet member.
   */
  name: string;
}

/** The update to be applied to the ManagedClusters. */
export interface ManagedClusterUpdateOutput {
  /** The upgrade to apply to the ManagedClusters. */
  upgrade: ManagedClusterUpgradeSpecOutput;
  /** The node image upgrade to be applied to the target nodes in update run. */
  nodeImageSelection?: NodeImageSelectionOutput;
}

/** The upgrade to apply to a ManagedCluster. */
export interface ManagedClusterUpgradeSpecOutput {
  /** ManagedClusterUpgradeType is the type of upgrade to be applied. */
  type: ManagedClusterUpgradeTypeOutput;
  /** The Kubernetes version to upgrade the member clusters to. */
  kubernetesVersion?: string;
}

/** The node image upgrade to be applied to the target nodes in update run. */
export interface NodeImageSelectionOutput {
  /** The node image upgrade type. */
  type: NodeImageSelectionTypeOutput;
}

/** The status of a UpdateRun. */
export interface UpdateRunStatusOutput {
  /** The status of the UpdateRun. */
  readonly status?: UpdateStatusOutput;
  /** The stages composing an update run. Stages are run sequentially withing an UpdateRun. */
  readonly stages?: Array<UpdateStageStatusOutput>;
  /** The node image upgrade specs for the update run. It is only set in update run when `NodeImageSelection.type` is `Consistent`. */
  readonly nodeImageSelection?: NodeImageSelectionStatusOutput;
}

/** The status for an operation or group of operations. */
export interface UpdateStatusOutput {
  /** The time the operation or group was started. */
  readonly startTime?: string;
  /** The time the operation or group was completed. */
  readonly completedTime?: string;
  /** The State of the operation or group. */
  readonly state?: UpdateStateOutput;
  /** The error details when a failure is encountered. */
  readonly error?: ErrorDetailOutput;
}

/** The status of a UpdateStage. */
export interface UpdateStageStatusOutput {
  /** The status of the UpdateStage. */
  readonly status?: UpdateStatusOutput;
  /** The name of the UpdateStage. */
  readonly name?: string;
  /** The list of groups to be updated as part of this UpdateStage. */
  readonly groups?: Array<UpdateGroupStatusOutput>;
  /** The status of the wait period configured on the UpdateStage. */
  readonly afterStageWaitStatus?: WaitStatusOutput;
}

/** The status of a UpdateGroup. */
export interface UpdateGroupStatusOutput {
  /** The status of the UpdateGroup. */
  readonly status?: UpdateStatusOutput;
  /** The name of the UpdateGroup. */
  readonly name?: string;
  /** The list of member this UpdateGroup updates. */
  readonly members?: Array<MemberUpdateStatusOutput>;
}

/** The status of a member update operation. */
export interface MemberUpdateStatusOutput {
  /** The status of the MemberUpdate operation. */
  readonly status?: UpdateStatusOutput;
  /** The name of the FleetMember. */
  readonly name?: string;
  /** The Azure resource id of the target Kubernetes cluster. */
  readonly clusterResourceId?: string;
  /** The operation resource id of the latest attempt to perform the operation. */
  readonly operationId?: string;
  /** The status message after processing the member update operation. */
  readonly message?: string;
}

/** The status of the wait duration. */
export interface WaitStatusOutput {
  /** The status of the wait duration. */
  readonly status?: UpdateStatusOutput;
  /** The wait duration configured in seconds. */
  readonly waitDurationInSeconds?: number;
}

/** The node image upgrade specs for the update run. */
export interface NodeImageSelectionStatusOutput {
  /** The image versions to upgrade the nodes to. */
  readonly selectedNodeImageVersions?: Array<NodeImageVersionOutput>;
}

/** The node upgrade image version. */
export interface NodeImageVersionOutput {
  /** The image version to upgrade the nodes to (e.g., 'AKSUbuntu-1804gen2containerd-2022.12.13'). */
  readonly version?: string;
}

/** Defines a multi-stage process to perform update operations across members of a Fleet. */
export interface FleetUpdateStrategyOutput extends ProxyResourceBaseOutput {
  /** The resource-specific properties for this resource. */
  properties?: FleetUpdateStrategyPropertiesOutput;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** The properties of the UpdateStrategy. */
export interface FleetUpdateStrategyPropertiesOutput {
  /** The provisioning state of the UpdateStrategy resource. */
  readonly provisioningState?: FleetUpdateStrategyProvisioningStateOutput;
  /** Defines the update sequence of the clusters. */
  strategy: UpdateRunStrategyOutput;
}

/** The base extension resource. */
export interface ExtensionResourceBaseOutput extends ArmResourceOutput {}

/** The Credential results response. */
export interface FleetCredentialResultsOutput {
  /** Array of base64-encoded Kubernetes configuration files. */
  readonly kubeconfigs?: Array<FleetCredentialResultOutput>;
}

/** One credential result item. */
export interface FleetCredentialResultOutput {
  /** The name of the credential. */
  readonly name?: string;
  /** Base64-encoded Kubernetes configuration file. */
  readonly value?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type PagedOperationOutput = Paged<OperationOutput>;
/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export type OriginOutput = "user" | "system" | "user,system";
/** Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export type ActionTypeOutput = "Internal";
/** The provisioning state of a resource type. */
export type ResourceProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled";
/** Alias for FleetProvisioningStateOutput */
export type FleetProvisioningStateOutput =
  | string
  | ResourceProvisioningStateOutput
  | "Creating"
  | "Updating"
  | "Deleting";
/** The kind of managed identity assigned to this resource. */
export type ManagedIdentityTypeOutput =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned";
/** The kind of entity that created the resource. */
export type CreatedByTypeOutput =
  | "User"
  | "Application"
  | "ManagedIdentity"
  | "Key";
/** The private endpoint connection status */
export type PrivateEndpointServiceConnectionStatusOutput =
  | "Pending"
  | "Approved"
  | "Rejected";
/** The provisioning state of the connection */
export type PrivateEndpointConnectionProvisioningStateOutput =
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "Creating"
  | "Deleting";
/** Alias for FleetMemberProvisioningStateOutput */
export type FleetMemberProvisioningStateOutput =
  | string
  | ResourceProvisioningStateOutput
  | "Joining"
  | "Leaving"
  | "Updating";
/** Alias for UpdateRunProvisioningStateOutput */
export type UpdateRunProvisioningStateOutput =
  | string
  | ResourceProvisioningStateOutput;
/** Alias for ManagedClusterUpgradeTypeOutput */
export type ManagedClusterUpgradeTypeOutput =
  | string
  | "Full"
  | "NodeImageOnly"
  | "ControlPlaneOnly";
/** Alias for NodeImageSelectionTypeOutput */
export type NodeImageSelectionTypeOutput = string | "Latest" | "Consistent";
/** Alias for UpdateStateOutput */
export type UpdateStateOutput =
  | string
  | "NotStarted"
  | "Running"
  | "Stopping"
  | "Stopped"
  | "Skipped"
  | "Failed"
  | "Completed";
/** Alias for FleetUpdateStrategyProvisioningStateOutput */
export type FleetUpdateStrategyProvisioningStateOutput =
  | string
  | ResourceProvisioningStateOutput;
/** The response of a Fleet list operation. */
export type FleetListResultOutput = Paged<FleetOutput>;
/** The response of a FleetMember list operation. */
export type FleetMemberListResultOutput = Paged<FleetMemberOutput>;
/** The response of a UpdateRun list operation. */
export type UpdateRunListResultOutput = Paged<UpdateRunOutput>;
/** The response of a FleetUpdateStrategy list operation. */
export type FleetUpdateStrategyListResultOutput =
  Paged<FleetUpdateStrategyOutput>;
