// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Base class used for type definitions */
export interface ArmResourceBase {}

/** Common properties for all Azure Resource Manager resources. */
export interface ArmResource extends ArmResourceBase {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type: string;
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
/** */
export type CreatedByType = "User" | "Application" | "ManagedIdentity" | "Key";

/** The base proxy resource. */
export interface ProxyResourceBase extends ArmResource {}

/** Defines a multi-stage process to perform update operations across members of a Fleet. */
export interface FleetUpdateStrategy extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetUpdateStrategyProperties;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** The properties of the UpdateStrategy. */
export interface FleetUpdateStrategyProperties {
  /** The provisioning state of the UpdateStrategy resource. */
  readonly provisioningState?: FleetUpdateStrategyProvisioningState;
  /** Defines the update sequence of the clusters. */
  strategy: UpdateRunStrategy;
}

/** The provisioning state of a resource type. */
/** */
export type ResourceProvisioningState = "Succeeded" | "Failed" | "Canceled";

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
  stages: UpdateStage[];
}

/** Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage. */
export interface UpdateStage {
  /** The name of the stage. Must be unique within the UpdateRun. */
  name: string;
  /** Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1. */
  groups?: UpdateGroup[];
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
export interface ArmOperationStatusResourceProvisioningState {
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

/** The response of a FleetUpdateStrategy list operation. */
export interface FleetUpdateStrategyListResult {
  /** The FleetUpdateStrategy items on this page */
  value: FleetUpdateStrategy[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A multi-stage process to perform update operations across members of a Fleet. */
export interface UpdateRun extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: UpdateRunProperties;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** The properties of the UpdateRun. */
export interface UpdateRunProperties {
  /** The provisioning state of the UpdateRun resource. */
  readonly provisioningState?: UpdateRunProvisioningState;
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
  /** The status of the UpdateRun. */
  readonly status?: UpdateRunStatus;
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

/** The type of upgrade to perform when targeting ManagedClusters. */
/** "Full", "NodeImageOnly", "ControlPlaneOnly" */
export type ManagedClusterUpgradeType = string;

/** The node image upgrade to be applied to the target nodes in update run. */
export interface NodeImageSelection {
  /** The node image upgrade type. */
  type: NodeImageSelectionType;
}

/** The node image upgrade type. */
/** "Latest", "Consistent" */
export type NodeImageSelectionType = string;

/** The status of a UpdateRun. */
export interface UpdateRunStatus {
  /** The status of the UpdateRun. */
  readonly status?: UpdateStatus;
  /** The stages composing an update run. Stages are run sequentially withing an UpdateRun. */
  readonly stages?: UpdateStageStatus[];
  /** The node image upgrade specs for the update run. It is only set in update run when `NodeImageSelection.type` is `Consistent`. */
  readonly nodeImageSelection?: NodeImageSelectionStatus;
}

/** The status for an operation or group of operations. */
export interface UpdateStatus {
  /** The time the operation or group was started. */
  readonly startTime?: Date;
  /** The time the operation or group was completed. */
  readonly completedTime?: Date;
  /** The State of the operation or group. */
  readonly state?: UpdateState;
  /** The error details when a failure is encountered. */
  readonly error?: ErrorDetail;
}

/** The state of the UpdateRun, UpdateStage, UpdateGroup, or MemberUpdate. */
/** "NotStarted", "Running", "Stopping", "Stopped", "Skipped", "Failed", "Completed" */
export type UpdateState = string;

/** The status of a UpdateStage. */
export interface UpdateStageStatus {
  /** The status of the UpdateStage. */
  readonly status?: UpdateStatus;
  /** The name of the UpdateStage. */
  readonly name?: string;
  /** The list of groups to be updated as part of this UpdateStage. */
  readonly groups?: UpdateGroupStatus[];
  /** The status of the wait period configured on the UpdateStage. */
  readonly afterStageWaitStatus?: WaitStatus;
}

/** The status of a UpdateGroup. */
export interface UpdateGroupStatus {
  /** The status of the UpdateGroup. */
  readonly status?: UpdateStatus;
  /** The name of the UpdateGroup. */
  readonly name?: string;
  /** The list of member this UpdateGroup updates. */
  readonly members?: MemberUpdateStatus[];
}

/** The status of a member update operation. */
export interface MemberUpdateStatus {
  /** The status of the MemberUpdate operation. */
  readonly status?: UpdateStatus;
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
export interface WaitStatus {
  /** The status of the wait duration. */
  readonly status?: UpdateStatus;
  /** The wait duration configured in seconds. */
  readonly waitDurationInSeconds?: number;
}

/** The node image upgrade specs for the update run. */
export interface NodeImageSelectionStatus {
  /** The image versions to upgrade the nodes to. */
  readonly selectedNodeImageVersions?: NodeImageVersion[];
}

/** The node upgrade image version. */
export interface NodeImageVersion {
  /** The image version to upgrade the nodes to (e.g., 'AKSUbuntu-1804gen2containerd-2022.12.13'). */
  readonly version?: string;
}

/** The response of a UpdateRun list operation. */
export interface UpdateRunListResult {
  /** The UpdateRun items on this page */
  value: UpdateRun[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The properties of a skip operation containing multiple skip requests. */
export interface SkipProperties {
  /** The targets to skip. */
  targets: SkipTarget[];
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

/** The target type of a skip request. */
/** "Member", "Group", "Stage", "AfterStageWait" */
export type TargetType = string;

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMember extends ProxyResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetMemberProperties;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
}

/** A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure. */
export interface FleetMemberProperties {
  /** The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'. */
  clusterResourceId: string;
  /** The group this member belongs to for multi-cluster update management. */
  group?: string;
  /** The status of the last operation. */
  readonly provisioningState?: FleetMemberProvisioningState;
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

/** The response of a FleetMember list operation. */
export interface FleetMemberListResult {
  /** The FleetMember items on this page */
  value: FleetMember[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource */
export interface TrackedResourceBase extends ArmResource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** The Fleet resource. */
export interface Fleet extends TrackedResourceBase {
  /** The resource-specific properties for this resource. */
  properties?: FleetProperties;
  /** If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
  readonly eTag?: string;
  /** Managed identity. */
  identity?: ManagedIdentityProperties;
}

/** Fleet properties. */
export interface FleetProperties {
  /** The status of the last operation. */
  readonly provisioningState?: FleetProvisioningState;
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
  /** The FQDN of the Fleet hub. */
  readonly fqdn?: string;
  /** The Kubernetes version of the Fleet hub. */
  readonly kubernetesVersion?: string;
  /** The Azure Portal FQDN of the Fleet hub. */
  readonly portalFqdn?: string;
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
  /** The Active Directory tenant id of the principal. */
  readonly tenantId?: string;
  /** The active directory identifier of this principal. */
  readonly principalId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

/** The kind of managed identity assigned to this resource. */
/** */
export type ManagedIdentityType =
  | "None"
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned";

/** A managed identity assigned by the user. */
export interface UserAssignedIdentity {
  /** The active directory client identifier for this principal. */
  clientId?: string;
  /** The active directory identifier for this principal. */
  principalId?: string;
}

/** Properties of a Fleet that can be patched. */
export interface FleetPatch {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** Managed identity. */
  identity?: ManagedIdentityProperties;
}

/** The response of a Fleet list operation. */
export interface FleetListResult {
  /** The Fleet items on this page */
  value: Fleet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The Credential results response. */
export interface FleetCredentialResults {
  /** Array of base64-encoded Kubernetes configuration files. */
  readonly kubeconfigs?: FleetCredentialResult[];
}

/** One credential result item. */
export interface FleetCredentialResult {
  /** The name of the credential. */
  readonly name?: string;
  /** Base64-encoded Kubernetes configuration file. */
  readonly value?: Uint8Array;
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
  /** Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
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
/** */
export type Origin = "user" | "system" | "user,system";
/** Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
/** */
export type ActionType = "Internal";
/** Azure Kubernetes Fleet Manager api versions. */
/** */
export type Versions =
  | "2022-09-02-preview"
  | "2023-03-15-preview"
  | "2023-06-15-preview"
  | "2023-08-15-preview"
  | "2023-10-15"
  | "2024-02-02-preview"
  | "2024-04-01";
/** Alias for FleetUpdateStrategyProvisioningState */
export type FleetUpdateStrategyProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for UpdateRunProvisioningState */
export type UpdateRunProvisioningState = string | ResourceProvisioningState;
/** Alias for FleetMemberProvisioningState */
export type FleetMemberProvisioningState =
  | string
  | ResourceProvisioningState
  | "Joining"
  | "Leaving"
  | "Updating";
/** Alias for FleetProvisioningState */
export type FleetProvisioningState =
  | string
  | ResourceProvisioningState
  | "Creating"
  | "Updating"
  | "Deleting";
