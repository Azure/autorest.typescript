// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The response of a IscsiPath list operation. */
export interface IscsiPathListResult {
  /** The IscsiPath items on this page */
  value: IscsiPath[];
  /** The link to the next page of items */
  nextLink?: string;
}

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

/** The base proxy resource. */
export interface ProxyResource extends Resource {}

/** An iSCSI path resource */
export interface IscsiPath extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: IscsiPathProperties;
}

/** The properties of an iSCSI path resource */
export interface IscsiPathProperties {
  /** The state of the iSCSI path provisioning */
  readonly provisioningState?: IscsiPathProvisioningState;
  /** CIDR Block for iSCSI path. */
  networkBlock: string;
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

/** The response of a ScriptExecution list operation. */
export interface ScriptExecutionListResult {
  /** The ScriptExecution items on this page */
  value: ScriptExecution[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An instance of a script executed by a user - custom or AVS */
export interface ScriptExecution extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptExecutionProperties;
}

/** Properties of a user-invoked script */
export interface ScriptExecutionProperties {
  /** A reference to the script cmdlet resource if user is running a AVS script */
  scriptCmdletId?: string;
  /** Parameters the script will accept */
  parameters?: ScriptExecutionParameterUnion[];
  /**
   * Parameters that will be hidden/not visible to ARM, such as passwords and
   * credentials
   */
  hiddenParameters?: ScriptExecutionParameterUnion[];
  /**
   * Error message if the script was able to run, but if the script itself had
   * errors or powershell threw an exception
   */
  failureReason?: string;
  /** Time limit for execution */
  timeout: string;
  /** Time to live for the resource. If not provided, will be available for 60 days */
  retention?: string;
  /** Time the script execution was submitted */
  readonly submittedAt?: Date;
  /** Time the script execution was started */
  readonly startedAt?: Date;
  /** Time the script execution was finished */
  readonly finishedAt?: Date;
  /** The state of the script execution resource */
  readonly provisioningState?: ScriptExecutionProvisioningState;
  /** Standard output stream from the powershell execution */
  output?: string[];
  /** User-defined dictionary. */
  namedOutputs?: Record<string, Record<string, any>>;
  /** Standard information out stream from the powershell execution */
  readonly information?: string[];
  /** Standard warning out stream from the powershell execution */
  readonly warnings?: string[];
  /** Standard error output stream from the powershell execution */
  readonly errors?: string[];
}

/** The arguments passed in to the execution */
export interface ScriptExecutionParameter {
  /** the discriminator possible values: SecureValue, Value, Credential */
  type: ScriptExecutionParameterType;
  /** The parameter name */
  name: string;
}

/** a plain text value execution parameter */
export interface ScriptSecureStringExecutionParameter
  extends ScriptExecutionParameter {
  /** A secure value for the passed parameter, not to be stored in logs */
  secureValue?: string;
  /** The type of execution parameter */
  type: "SecureValue";
}

/** a plain text value execution parameter */
export interface ScriptStringExecutionParameter
  extends ScriptExecutionParameter {
  /** The value for the passed parameter */
  value?: string;
  /** The type of execution parameter */
  type: "Value";
}

/** a powershell credential object */
export interface PSCredentialExecutionParameter
  extends ScriptExecutionParameter {
  /** username for login */
  username?: string;
  /** password for login */
  password?: string;
  /** The type of execution parameter */
  type: "Credential";
}

/** script execution parameter type */
/** "Value", "SecureValue", "Credential" */
export type ScriptExecutionParameterType = string;
/** Script Output Stream type */
/** "Information", "Warning", "Output", "Error" */
export type ScriptOutputStreamType = string;

/** The response of a ScriptCmdlet list operation. */
export interface ScriptCmdletListResult {
  /** The ScriptCmdlet items on this page */
  value: ScriptCmdlet[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cmdlet available for script execution */
export interface ScriptCmdlet extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptCmdletProperties;
}

/** Properties of a pre-canned script */
export interface ScriptCmdletProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: ScriptCmdletProvisioningState;
  /** Description of the scripts functionality */
  readonly description?: string;
  /** Recommended time limit for execution */
  readonly timeout?: string;
  /** Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers */
  readonly audience?: ScriptCmdletAudience;
  /** Parameters the script will accept */
  readonly parameters?: ScriptParameter[];
}

/** Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers */
/** "Automation", "Any" */
export type ScriptCmdletAudience = string;

/** An parameter that the script will accept */
export interface ScriptParameter {
  /**
   * The type of parameter the script is expecting. psCredential is a
   * PSCredentialObject
   */
  readonly type?: ScriptParameterTypes;
  /** The parameter name that the script will expect a parameter value for */
  name?: string;
  /** User friendly description of the parameter */
  readonly description?: string;
  /**
   * Should this parameter be visible to arm and passed in the parameters argument
   * when executing
   */
  readonly visibility?: VisibilityParameterEnum;
  /** Is this parameter required or optional */
  readonly optional?: OptionalParamEnum;
}

/** Script Parameter types */
/** "String", "SecureString", "Credential", "Int", "Bool", "Float" */
export type ScriptParameterTypes = string;
/** Visibility Parameter */
/** "Visible", "Hidden" */
export type VisibilityParameterEnum = string;
/** Optional Param */
/** "Optional", "Required" */
export type OptionalParamEnum = string;

/** The response of a ScriptPackage list operation. */
export interface ScriptPackageListResult {
  /** The ScriptPackage items on this page */
  value: ScriptPackage[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Script Package resources available for execution */
export interface ScriptPackage extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ScriptPackageProperties;
}

/** Properties of a Script Package subresource */
export interface ScriptPackageProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: ScriptPackageProvisioningState;
  /** User friendly description of the package */
  readonly description?: string;
  /** Module version */
  readonly version?: string;
  /** Company that created and supports the package */
  readonly company?: string;
  /** Link to support by the package vendor */
  readonly uri?: string;
}

/** The response of a PlacementPolicy list operation. */
export interface PlacementPolicyListResult {
  /** The PlacementPolicy items on this page */
  value: PlacementPolicy[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A vSphere Distributed Resource Scheduler (DRS) placement policy */
export interface PlacementPolicy extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: PlacementPolicyPropertiesUnion;
}

/** Abstract placement policy properties */
export interface PlacementPolicyProperties {
  /** the discriminator possible values: VmVm, VmHost */
  type: PlacementPolicyType;
  /** Whether the placement policy is enabled or disabled */
  state?: PlacementPolicyState;
  /** Display name of the placement policy */
  displayName?: string;
  /** The provisioning state */
  readonly provisioningState?: PlacementPolicyProvisioningState;
}

/** VM-VM placement policy properties */
export interface VmVmPlacementPolicyProperties
  extends PlacementPolicyProperties {
  /** Virtual machine members list */
  vmMembers: string[];
  /** placement policy affinity type */
  affinityType: AffinityType;
  /** placement policy type */
  type: "VmVm";
}

/** Affinity type */
/** "Affinity", "AntiAffinity" */
export type AffinityType = string;

/** VM-Host placement policy properties */
export interface VmHostPlacementPolicyProperties
  extends PlacementPolicyProperties {
  /** Virtual machine members list */
  vmMembers: string[];
  /** Host members list */
  hostMembers: string[];
  /** placement policy affinity type */
  affinityType: AffinityType;
  /** vm-host placement policy affinity strength (should/must) */
  affinityStrength?: AffinityStrength;
  /** placement policy azure hybrid benefit opt-in type */
  azureHybridBenefitType?: AzureHybridBenefitType;
  /** placement policy type */
  type: "VmHost";
}

/** Affinity Strength */
/** "Should", "Must" */
export type AffinityStrength = string;
/** Azure Hybrid Benefit type */
/** "SqlHost", "None" */
export type AzureHybridBenefitType = string;
/** Placement Policy type */
/** "VmVm", "VmHost" */
export type PlacementPolicyType = string;
/** Placement Policy state */
/** "Enabled", "Disabled" */
export type PlacementPolicyState = string;

/** An update of a DRS placement policy resource */
export interface PlacementPolicyUpdate {
  /** The properties of a placement policy resource that may be updated */
  properties?: PlacementPolicyUpdateProperties;
}

/** The properties of a placement policy resource that may be updated */
export interface PlacementPolicyUpdateProperties {
  /** Whether the placement policy is enabled or disabled */
  state?: PlacementPolicyState;
  /** Virtual machine members list */
  vmMembers?: string[];
  /** Host members list */
  hostMembers?: string[];
  /** vm-host placement policy affinity strength (should/must) */
  affinityStrength?: AffinityStrength;
  /** placement policy azure hybrid benefit opt-in type */
  azureHybridBenefitType?: AzureHybridBenefitType;
}

/** The response of a VirtualMachine list operation. */
export interface VirtualMachineListResult {
  /** The VirtualMachine items on this page */
  value: VirtualMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Virtual Machine */
export interface VirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachineProperties;
}

/** Virtual Machine Properties */
export interface VirtualMachineProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: VirtualMachineProvisioningState;
  /** Display name of the VM. */
  readonly displayName?: string;
  /** Virtual machine managed object reference id */
  readonly moRefId?: string;
  /** Path to virtual machine's folder starting from datacenter virtual machine folder */
  readonly folderPath?: string;
  /** Whether VM DRS-driven movement is restricted (enabled) or not (disabled) */
  readonly restrictMovement?: VirtualMachineRestrictMovementState;
}

/** Virtual Machine Restrict Movement state */
/** "Enabled", "Disabled" */
export type VirtualMachineRestrictMovementState = string;

/** Set VM DRS-driven movement to restricted (enabled) or not (disabled) */
export interface VirtualMachineRestrictMovement {
  /** Whether VM DRS-driven movement is restricted (enabled) or not (disabled) */
  restrictMovement?: VirtualMachineRestrictMovementState;
}

/** The response of a Addon list operation. */
export interface AddonListResult {
  /** The Addon items on this page */
  value: Addon[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An addon resource */
export interface Addon extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AddonPropertiesUnion;
}

/** The properties of an addon */
export interface AddonProperties {
  /** the discriminator possible values: SRM, VR, HCX, Arc */
  addonType: AddonType;
  /** The state of the addon provisioning */
  readonly provisioningState?: AddonProvisioningState;
}

/** The properties of a Site Recovery Manager (SRM) addon */
export interface AddonSrmProperties extends AddonProperties {
  /** The Site Recovery Manager (SRM) license */
  licenseKey?: string;
  /** The type of private cloud addon */
  addonType: "SRM";
}

/** The properties of a vSphere Replication (VR) addon */
export interface AddonVrProperties extends AddonProperties {
  /** The vSphere Replication Server (VRS) count */
  vrsCount: number;
  /** The type of private cloud addon */
  addonType: "VR";
}

/** The properties of an HCX addon */
export interface AddonHcxProperties extends AddonProperties {
  /** The HCX offer, example VMware MaaS Cloud Provider (Enterprise) */
  offer: string;
  /** The type of private cloud addon */
  addonType: "HCX";
}

/** The properties of an Arc addon */
export interface AddonArcProperties extends AddonProperties {
  /** The VMware vCenter resource ID */
  vCenter?: string;
  /** The type of private cloud addon */
  addonType: "Arc";
}

/** Addon type */
/** "SRM", "VR", "HCX", "Arc" */
export type AddonType = string;

/** The response of a CloudLink list operation. */
export interface CloudLinkListResult {
  /** The CloudLink items on this page */
  value: CloudLink[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cloud link resource */
export interface CloudLink extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: CloudLinkProperties;
}

/** The properties of a cloud link. */
export interface CloudLinkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: CloudLinkProvisioningState;
  /** The state of the cloud link. */
  readonly status?: CloudLinkStatus;
  /** Identifier of the other private cloud participating in the link. */
  linkedCloud?: string;
}

/** Cloud Link status */
/** "Active", "Building", "Deleting", "Failed", "Disconnected" */
export type CloudLinkStatus = string;

/** The response of a WorkloadNetworkPublicIP list operation. */
export interface WorkloadNetworkPublicIPListResult {
  /** The WorkloadNetworkPublicIP items on this page */
  value: WorkloadNetworkPublicIP[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Public IP Block */
export interface WorkloadNetworkPublicIP extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPublicIPProperties;
}

/** NSX Public IP Block Properties */
export interface WorkloadNetworkPublicIPProperties {
  /** Display name of the Public IP Block. */
  displayName?: string;
  /** Number of Public IPs requested. */
  numberOfPublicIPs?: number;
  /** CIDR Block of the Public IP Block. */
  readonly publicIPBlock?: string;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkPublicIPProvisioningState;
}

/** The response of a WorkloadNetworkDnsZone list operation. */
export interface WorkloadNetworkDnsZoneListResult {
  /** The WorkloadNetworkDnsZone items on this page */
  value: WorkloadNetworkDnsZone[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZone extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZoneProperties;
}

/** NSX DNS Zone Properties */
export interface WorkloadNetworkDnsZoneProperties {
  /** Display name of the DNS Zone. */
  displayName?: string;
  /** Domain names of the DNS Zone. */
  domain?: string[];
  /** DNS Server IP array of the DNS Zone. */
  dnsServerIps?: string[];
  /** Source IP of the DNS Zone. */
  sourceIp?: string;
  /** Number of DNS Services using the DNS zone. */
  dnsServices?: number;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDnsZoneProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** NSX DNS Zone update */
export interface WorkloadNetworkDnsZoneUpdate {
  /** The updatable properties of a DNS Zone update */
  properties?: WorkloadNetworkDnsZoneProperties;
}

/** The response of a WorkloadNetworkDnsService list operation. */
export interface WorkloadNetworkDnsServiceListResult {
  /** The WorkloadNetworkDnsService items on this page */
  value: WorkloadNetworkDnsService[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DNS Service */
export interface WorkloadNetworkDnsService extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsServiceProperties;
}

/** NSX DNS Service Properties */
export interface WorkloadNetworkDnsServiceProperties {
  /** Display name of the DNS Service. */
  displayName?: string;
  /** DNS service IP of the DNS Service. */
  dnsServiceIp?: string;
  /** Default DNS zone of the DNS Service. */
  defaultDnsZone?: string;
  /** FQDN zones of the DNS Service. */
  fqdnZones?: string[];
  /** DNS Service log level. */
  logLevel?: DnsServiceLogLevelEnum;
  /** DNS Service status. */
  readonly status?: DnsServiceStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDnsServiceProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** DNS service log level */
/** "DEBUG", "INFO", "WARNING", "ERROR", "FATAL" */
export type DnsServiceLogLevelEnum = string;
/** DNS service status */
/** "SUCCESS", "FAILURE" */
export type DnsServiceStatusEnum = string;

/** NSX DNS Service update */
export interface WorkloadNetworkDnsServiceUpdate {
  /** The updatable properties of a DNS Service update */
  properties?: WorkloadNetworkDnsServiceProperties;
}

/** The response of a WorkloadNetworkVirtualMachine list operation. */
export interface WorkloadNetworkVirtualMachineListResult {
  /** The WorkloadNetworkVirtualMachine items on this page */
  value: WorkloadNetworkVirtualMachine[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Virtual Machine */
export interface WorkloadNetworkVirtualMachine extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVirtualMachineProperties;
}

/** NSX Virtual Machine Properties */
export interface WorkloadNetworkVirtualMachineProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
  /** Display name of the VM. */
  displayName?: string;
  /** Virtual machine type. */
  readonly vmType?: VMTypeEnum;
}

/** VM type */
/** "REGULAR", "EDGE", "SERVICE" */
export type VMTypeEnum = string;

/** The response of a WorkloadNetworkVMGroup list operation. */
export interface WorkloadNetworkVMGroupListResult {
  /** The WorkloadNetworkVMGroup items on this page */
  value: WorkloadNetworkVMGroup[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX VM Group */
export interface WorkloadNetworkVMGroup extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVMGroupProperties;
}

/** NSX VM Group Properties */
export interface WorkloadNetworkVMGroupProperties {
  /** Display name of the VM group. */
  displayName?: string;
  /** Virtual machine members of this group. */
  members?: string[];
  /** VM Group status. */
  readonly status?: VMGroupStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkVMGroupProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** VM group status */
/** "SUCCESS", "FAILURE" */
export type VMGroupStatusEnum = string;

/** NSX VM Group update */
export interface WorkloadNetworkVMGroupUpdate {
  /** The updatable properties of a VM Group update */
  properties?: WorkloadNetworkVMGroupProperties;
}

/** The response of a WorkloadNetworkPortMirroring list operation. */
export interface WorkloadNetworkPortMirroringListResult {
  /** The WorkloadNetworkPortMirroring items on this page */
  value: WorkloadNetworkPortMirroring[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Port Mirroring */
export interface WorkloadNetworkPortMirroring extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPortMirroringProperties;
}

/** NSX Port Mirroring Properties */
export interface WorkloadNetworkPortMirroringProperties {
  /** Display name of the port mirroring profile. */
  displayName?: string;
  /** Direction of port mirroring profile. */
  direction?: PortMirroringDirectionEnum;
  /** Source VM Group. */
  source?: string;
  /** Destination VM Group. */
  destination?: string;
  /** Port Mirroring Status. */
  readonly status?: PortMirroringStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkPortMirroringProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** Port Mirroring Direction */
/** "INGRESS", "EGRESS", "BIDIRECTIONAL" */
export type PortMirroringDirectionEnum = string;
/** Port Mirroring status */
/** "SUCCESS", "FAILURE" */
export type PortMirroringStatusEnum = string;

/** NSX Port Mirroring update */
export interface WorkloadNetworkPortMirroringUpdate {
  /** The updatable properties of a Port Mirroring update */
  properties?: WorkloadNetworkPortMirroringProperties;
}

/** The response of a WorkloadNetworkGateway list operation. */
export interface WorkloadNetworkGatewayListResult {
  /** The WorkloadNetworkGateway items on this page */
  value: WorkloadNetworkGateway[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Gateway. */
export interface WorkloadNetworkGateway extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkGatewayProperties;
}

/** Properties of a NSX Gateway. */
export interface WorkloadNetworkGatewayProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Gateway Path. */
  readonly path?: string;
}

/** The response of a WorkloadNetworkDhcp list operation. */
export interface WorkloadNetworkDhcpListResult {
  /** The WorkloadNetworkDhcp items on this page */
  value: WorkloadNetworkDhcp[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX DHCP */
export interface WorkloadNetworkDhcp extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDhcpEntityUnion;
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export interface WorkloadNetworkDhcpEntity {
  /** the discriminator possible values: SERVER, RELAY */
  dhcpType: DhcpTypeEnum;
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Segments consuming DHCP. */
  readonly segments?: string[];
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkDhcpProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** NSX DHCP Server */
export interface WorkloadNetworkDhcpServer extends WorkloadNetworkDhcpEntity {
  /** DHCP Server Address. */
  serverAddress?: string;
  /** DHCP Server Lease Time. */
  leaseTime?: number;
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "SERVER";
}

/** NSX DHCP Relay */
export interface WorkloadNetworkDhcpRelay extends WorkloadNetworkDhcpEntity {
  /** DHCP Relay Addresses. Max 3. */
  serverAddresses?: string[];
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "RELAY";
}

/** Type of DHCP: SERVER or RELAY. */
/** "SERVER", "RELAY" */
export type DhcpTypeEnum = string;

/** NSX DHCP update */
export interface WorkloadNetworkDhcpUpdate {
  /** The updatable properties of a DHCP update */
  properties?: WorkloadNetworkDhcpEntityUnion;
}

/** The response of a WorkloadNetworkSegment list operation. */
export interface WorkloadNetworkSegmentListResult {
  /** The WorkloadNetworkSegment items on this page */
  value: WorkloadNetworkSegment[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** NSX Segment */
export interface WorkloadNetworkSegment extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkSegmentProperties;
}

/** NSX Segment Properties */
export interface WorkloadNetworkSegmentProperties {
  /** Display name of the segment. */
  displayName?: string;
  /** Gateway which to connect segment to. */
  connectedGateway?: string;
  /** Subnet which to connect segment to. */
  subnet?: WorkloadNetworkSegmentSubnet;
  /** Port Vif which segment is associated with. */
  readonly portVif?: WorkloadNetworkSegmentPortVif[];
  /** Segment status. */
  readonly status?: SegmentStatusEnum;
  /** The provisioning state */
  readonly provisioningState?: WorkloadNetworkSegmentProvisioningState;
  /** NSX revision number. */
  revision?: number;
}

/** Subnet configuration for segment */
export interface WorkloadNetworkSegmentSubnet {
  /** DHCP Range assigned for subnet. */
  dhcpRanges?: string[];
  /** Gateway address. */
  gatewayAddress?: string;
}

/** Ports and any VIF attached to segment. */
export interface WorkloadNetworkSegmentPortVif {
  /** Name of port or VIF attached to segment. */
  portName?: string;
}

/** Segment status */
/** "SUCCESS", "FAILURE" */
export type SegmentStatusEnum = string;

/** NSX Segment update */
export interface WorkloadNetworkSegmentUpdate {
  /** The updatable properties of a Segment update */
  properties?: WorkloadNetworkSegmentProperties;
}

/** Workload Network */
export interface WorkloadNetwork extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkProperties;
}

/** The properties of a workload network */
export interface WorkloadNetworkProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: WorkloadNetworkProvisioningState;
}

/** The response of a WorkloadNetwork list operation. */
export interface WorkloadNetworkListResult {
  /** The WorkloadNetwork items on this page */
  value: WorkloadNetwork[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a GlobalReachConnection list operation. */
export interface GlobalReachConnectionListResult {
  /** The GlobalReachConnection items on this page */
  value: GlobalReachConnection[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A global reach connection resource */
export interface GlobalReachConnection extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: GlobalReachConnectionProperties;
}

/** The properties of a global reach connection */
export interface GlobalReachConnectionProperties {
  /** The state of the  ExpressRoute Circuit Authorization provisioning */
  readonly provisioningState?: GlobalReachConnectionProvisioningState;
  /**
   * The network used for global reach carved out from the original network block
   * provided for the private cloud
   */
  readonly addressPrefix?: string;
  /**
   * Authorization key from the peer express route used for the global reach
   * connection
   */
  authorizationKey?: string;
  /** The connection status of the global reach connection */
  readonly circuitConnectionStatus?: GlobalReachConnectionStatus;
  /**
   * Identifier of the ExpressRoute Circuit to peer with in the global reach
   * connection
   */
  peerExpressRouteCircuit?: string;
  /**
   * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the
   * global reach connection
   */
  expressRouteId?: string;
}

/** Global Reach Connection status */
/** "Connected", "Connecting", "Disconnected" */
export type GlobalReachConnectionStatus = string;

/** The response of a ExpressRouteAuthorization list operation. */
export interface ExpressRouteAuthorizationListResult {
  /** The ExpressRouteAuthorization items on this page */
  value: ExpressRouteAuthorization[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** ExpressRoute Circuit Authorization */
export interface ExpressRouteAuthorization extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ExpressRouteAuthorizationProperties;
}

/** The properties of an ExpressRoute Circuit Authorization resource */
export interface ExpressRouteAuthorizationProperties {
  /** The state of the ExpressRoute Circuit Authorization provisioning */
  readonly provisioningState?: ExpressRouteAuthorizationProvisioningState;
  /** The ID of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationId?: string;
  /** The key of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationKey?: string;
  /** The ID of the ExpressRoute Circuit */
  expressRouteId?: string;
}

/** The response of a HcxEnterpriseSite list operation. */
export interface HcxEnterpriseSiteListResult {
  /** The HcxEnterpriseSite items on this page */
  value: HcxEnterpriseSite[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** An HCX Enterprise Site resource */
export interface HcxEnterpriseSite extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: HcxEnterpriseSiteProperties;
}

/** The properties of an HCX Enterprise Site */
export interface HcxEnterpriseSiteProperties {
  /** The provisioning state of the resource. */
  readonly provisioningState?: HcxEnterpriseSiteProvisioningState;
  /** The activation key */
  readonly activationKey?: string;
  /** The status of the HCX Enterprise Site */
  readonly status?: HcxEnterpriseSiteStatus;
}

/** HCX Enterprise Site status */
/** "Available", "Consumed", "Deactivated", "Deleted" */
export type HcxEnterpriseSiteStatus = string;

/** The response of a Datastore list operation. */
export interface DatastoreListResult {
  /** The Datastore items on this page */
  value: Datastore[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A datastore resource */
export interface Datastore extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: DatastoreProperties;
}

/** The properties of a datastore */
export interface DatastoreProperties {
  /** The state of the datastore provisioning */
  readonly provisioningState?: DatastoreProvisioningState;
  /** An Azure NetApp Files volume */
  netAppVolume?: NetAppVolume;
  /** An iSCSI volume */
  diskPoolVolume?: DiskPoolVolume;
  /** An Elastic SAN volume */
  elasticSanVolume?: ElasticSanVolume;
  /** The operational status of the datastore */
  readonly status?: DatastoreStatus;
}

/** An Azure NetApp Files volume from Microsoft.NetApp provider */
export interface NetAppVolume {
  /** Azure resource ID of the NetApp volume */
  id: string;
}

/** An iSCSI volume from Microsoft.StoragePool provider */
export interface DiskPoolVolume {
  /** Azure resource ID of the iSCSI target */
  targetId: string;
  /** Name of the LUN to be used for datastore */
  lunName: string;
  /**
   * Mode that describes whether the LUN has to be mounted as a datastore or
   * attached as a LUN
   */
  mountOption?: MountOptionEnum;
  /** Device path */
  readonly path?: string;
}

/** mount option */
/** "MOUNT", "ATTACH" */
export type MountOptionEnum = string;

/** An Elastic SAN volume from Microsoft.ElasticSan provider */
export interface ElasticSanVolume {
  /** Azure resource ID of the Elastic SAN Volume */
  targetId: string;
}

/** datastore status */
/** "Unknown", "Accessible", "Inaccessible", "Attached", "Detached", "LostCommunication", "DeadOrError" */
export type DatastoreStatus = string;

/** The response of a Cluster list operation. */
export interface ClusterListResult {
  /** The Cluster items on this page */
  value: Cluster[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A cluster resource */
export interface Cluster extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ClusterProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
}

/** The properties of a cluster */
export interface ClusterProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** The SKU (Stock Keeping Unit) assigned to this resource. */
export interface Sku {
  /** The name of the SKU, usually a combination of letters and numbers, for example, 'P3' */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Available service tiers for the SKU. */
/** */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

/** An update of a cluster resource */
export interface ClusterUpdate {
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The properties of a cluster resource that may be updated */
  properties?: ClusterUpdateProperties;
}

/** The properties of a cluster that may be updated */
export interface ClusterUpdateProperties {
  /** The cluster size */
  clusterSize?: number;
  /** The hosts */
  hosts?: string[];
}

/** List of all zones and associated hosts for a cluster */
export interface ClusterZoneList {
  /** Zone and associated hosts info */
  zones?: ClusterZone[];
}

/** Zone and associated hosts info */
export interface ClusterZone {
  /** List of hosts belonging to the availability zone in a cluster */
  readonly hosts?: string[];
  /** Availability zone identifier */
  readonly zone?: string;
}

/** The response of a PrivateCloud list operation. */
export interface PrivateCloudListResult {
  /** The PrivateCloud items on this page */
  value: PrivateCloud[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** The geo-location where the resource lives */
  location: string;
  /** Resource tags. */
  tags?: Record<string, string>;
}

/** A private cloud resource */
export interface PrivateCloud extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: PrivateCloudProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
}

/** The properties of a private cloud resource */
export interface PrivateCloudProperties {
  /** The default cluster used for management */
  managementCluster: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The provisioning state */
  readonly provisioningState?: PrivateCloudProvisioningState;
  /** An ExpressRoute Circuit */
  circuit?: Circuit;
  /** The endpoints */
  readonly endpoints?: Endpoints;
  /**
   * The block of addresses should be unique across VNet in your subscription as
   * well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where
   * A,B,C,D are between 0 and 255, and X is between 0 and 22
   */
  networkBlock: string;
  /** Network used to access vCenter Server and NSX-T Manager */
  readonly managementNetwork?: string;
  /** Used for virtual machine cold migration, cloning, and snapshot migration */
  readonly provisioningNetwork?: string;
  /** Used for live migration of virtual machines */
  readonly vmotionNetwork?: string;
  /** Optionally, set the vCenter admin password when the private cloud is created */
  vcenterPassword?: string;
  /** Optionally, set the NSX-T Manager password when the private cloud is created */
  nsxtPassword?: string;
  /** Thumbprint of the vCenter Server SSL certificate */
  readonly vcenterCertificateThumbprint?: string;
  /** Thumbprint of the NSX-T Manager SSL certificate */
  readonly nsxtCertificateThumbprint?: string;
  /** Array of cloud link IDs from other clouds that connect to this one */
  readonly externalCloudLinks?: string[];
  /**
   * A secondary expressRoute circuit from a separate AZ. Only present in a
   * stretched private cloud
   */
  secondaryCircuit?: Circuit;
  /**
   * Flag to indicate whether the private cloud has the quota for provisioned NSX
   * Public IP count raised from 64 to 1024
   */
  readonly nsxPublicIpQuotaRaised?: NsxPublicIpQuotaRaisedEnum;
  /** Azure resource ID of the virtual network */
  virtualNetworkId?: string;
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

/** The properties of a management cluster */
export interface ManagementCluster {
  /** The cluster size */
  clusterSize?: number;
  /** The state of the cluster provisioning */
  readonly provisioningState?: ClusterProvisioningState;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** Whether internet is enabled or disabled */
/** "Enabled", "Disabled" */
export type InternetEnum = string;

/** vCenter Single Sign On Identity Source */
export interface IdentitySource {
  /** The name of the identity source */
  name?: string;
  /** The domain's NetBIOS name */
  alias?: string;
  /** The domain's dns name */
  domain?: string;
  /** The base distinguished name for users */
  baseUserDN?: string;
  /** The base distinguished name for groups */
  baseGroupDN?: string;
  /** Primary server URL */
  primaryServer?: string;
  /** Secondary server URL */
  secondaryServer?: string;
  /** Protect LDAP communication using SSL certificate (LDAPS) */
  ssl?: SslEnum;
  /**
   * The ID of an Active Directory user with a minimum of read-only access to Base
   * DN for users and group
   */
  username?: string;
  /**
   * The password of the Active Directory user with a minimum of read-only access to
   * Base DN for users and groups.
   */
  password?: string;
}

/** Whether SSL is enabled or disabled */
/** "Enabled", "Disabled" */
export type SslEnum = string;

/** The properties describing private cloud availability zone distribution */
export interface AvailabilityProperties {
  /** The availability strategy for the private cloud */
  strategy?: AvailabilityStrategy;
  /** The primary availability zone for the private cloud */
  zone?: number;
  /** The secondary availability zone for the private cloud */
  secondaryZone?: number;
}

/** Whether the private clouds is available in a single zone or two zones */
/** "SingleZone", "DualZone" */
export type AvailabilityStrategy = string;

/** The properties of customer managed encryption key */
export interface Encryption {
  /** Status of customer managed encryption key */
  status?: EncryptionState;
  /** The key vault where the encryption key is stored */
  keyVaultProperties?: EncryptionKeyVaultProperties;
}

/** Whether encryption is enabled or disabled */
/** "Enabled", "Disabled" */
export type EncryptionState = string;

/** An Encryption Key */
export interface EncryptionKeyVaultProperties {
  /** The name of the key. */
  keyName?: string;
  /** The version of the key. */
  keyVersion?: string;
  /** The auto-detected version of the key if versionType is auto-detected. */
  readonly autoDetectedKeyVersion?: string;
  /** The URL of the vault. */
  keyVaultUrl?: string;
  /** The state of key provided */
  readonly keyState?: EncryptionKeyStatus;
  /** Property of the key if user provided or auto detected */
  readonly versionType?: EncryptionVersionType;
}

/** Whether the the encryption key is connected or access denied */
/** "Connected", "AccessDenied" */
export type EncryptionKeyStatus = string;
/** Whether the encryption version is fixed or auto-detected */
/** "Fixed", "AutoDetected" */
export type EncryptionVersionType = string;

/** An ExpressRoute Circuit */
export interface Circuit {
  /** CIDR of primary subnet */
  readonly primarySubnet?: string;
  /** CIDR of secondary subnet */
  readonly secondarySubnet?: string;
  /** Identifier of the ExpressRoute Circuit (Microsoft Colo only) */
  readonly expressRouteID?: string;
  /** ExpressRoute Circuit private peering identifier */
  readonly expressRoutePrivatePeeringID?: string;
}

/** Endpoint addresses */
export interface Endpoints {
  /** Endpoint FQDN for the NSX-T Data Center manager */
  readonly nsxtManager?: string;
  /** Endpoint FQDN for Virtual Center Server Appliance */
  readonly vcsa?: string;
  /** Endpoint FQDN for the HCX Cloud Manager */
  readonly hcxCloudManager?: string;
  /** Endpoint IP for the NSX-T Data Center manager */
  readonly nsxtManagerIp?: string;
  /** Endpoint IP for Virtual Center Server Appliance */
  readonly vcenterIp?: string;
  /** Endpoint IP for the HCX Cloud Manager */
  readonly hcxCloudManagerIp?: string;
}

/** NSX public IP quota raised */
/** "Enabled", "Disabled" */
export type NsxPublicIpQuotaRaisedEnum = string;
/** The type of DNS zone. */
/** "Public", "Private" */
export type DnsZoneType = string;

/** The properties of the service-assigned identity associated with this resource. */
export interface SystemAssignedServiceIdentity {
  /** The Active Directory tenant id of the principal. */
  readonly tenantId?: string;
  /** The active directory identifier of this principal. */
  readonly principalId?: string;
  /** The type of managed identity assigned to this resource. */
  type: SystemAssignedServiceIdentityType;
}

/** The kind of managemed identity assigned to this resource. */
/** "None", "SystemAssigned" */
export type SystemAssignedServiceIdentityType = string;

/** An update to a private cloud resource */
export interface PrivateCloudUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentity;
  /** The updatable properties of a private cloud resource */
  properties?: PrivateCloudUpdateProperties;
}

/** The properties of a private cloud resource that may be updated */
export interface PrivateCloudUpdateProperties {
  /** The default cluster used for management */
  managementCluster?: ManagementCluster;
  /** Connectivity to internet is enabled or disabled */
  internet?: InternetEnum;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: IdentitySource[];
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityProperties;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: Encryption;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /** The type of DNS zone to use. */
  dnsZoneType?: DnsZoneType;
}

/** Administrative credentials for accessing vCenter and NSX-T */
export interface AdminCredentials {
  /** NSX-T Manager username */
  readonly nsxtUsername?: string;
  /** NSX-T Manager password */
  readonly nsxtPassword?: string;
  /** vCenter admin username */
  readonly vcenterUsername?: string;
  /** vCenter admin password */
  readonly vcenterPassword?: string;
}

/** Subscription trial availability */
export interface Trial {
  /** Trial status */
  readonly status?: TrialStatus;
  /** Number of trial hosts available */
  readonly availableHosts?: number;
}

/** trial status */
/** "TrialAvailable", "TrialUsed", "TrialDisabled" */
export type TrialStatus = string;

/** Subscription quotas */
export interface Quota {
  /** Remaining hosts quota by sku type */
  readonly hostsRemaining?: Record<string, number>;
  /** Host quota is active for current subscription */
  readonly quotaEnabled?: QuotaEnabled;
}

/** quota enabled */
/** "Enabled", "Disabled" */
export type QuotaEnabled = string;

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
/** Azure VMware Solution API versions. */
/** */
export type Versions = "2023-09-01";
/** Alias for IscsiPathProvisioningState */
export type IscsiPathProvisioningState =
  | string
  | ResourceProvisioningState
  | "Pending"
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for ScriptExecutionParameterUnion */
export type ScriptExecutionParameterUnion =
  | ScriptSecureStringExecutionParameter
  | ScriptStringExecutionParameter
  | PSCredentialExecutionParameter
  | ScriptExecutionParameter;
/** Alias for ScriptExecutionProvisioningState */
export type ScriptExecutionProvisioningState =
  | string
  | ResourceProvisioningState
  | "Pending"
  | "Running"
  | "Cancelling"
  | "Cancelled"
  | "Deleting";
/** Alias for ScriptCmdletProvisioningState */
export type ScriptCmdletProvisioningState = string | ResourceProvisioningState;
/** Alias for ScriptPackageProvisioningState */
export type ScriptPackageProvisioningState = string | ResourceProvisioningState;
/** Alias for PlacementPolicyPropertiesUnion */
export type PlacementPolicyPropertiesUnion =
  | VmVmPlacementPolicyProperties
  | VmHostPlacementPolicyProperties
  | PlacementPolicyProperties;
/** Alias for WorkloadNetworkProvisioningState */
export type WorkloadNetworkProvisioningState =
  | string
  | ResourceProvisioningState
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for PlacementPolicyProvisioningState */
export type PlacementPolicyProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for VirtualMachineProvisioningState */
export type VirtualMachineProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for AddonPropertiesUnion */
export type AddonPropertiesUnion =
  | AddonSrmProperties
  | AddonVrProperties
  | AddonHcxProperties
  | AddonArcProperties
  | AddonProperties;
/** Alias for AddonProvisioningState */
export type AddonProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Building"
  | "Deleting"
  | "Updating";
/** Alias for CloudLinkProvisioningState */
export type CloudLinkProvisioningState = string | ResourceProvisioningState;
/** Alias for WorkloadNetworkPublicIPProvisioningState */
export type WorkloadNetworkPublicIPProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDnsZoneProvisioningState */
export type WorkloadNetworkDnsZoneProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDnsServiceProvisioningState */
export type WorkloadNetworkDnsServiceProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkVMGroupProvisioningState */
export type WorkloadNetworkVMGroupProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkPortMirroringProvisioningState */
export type WorkloadNetworkPortMirroringProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkDhcpEntityUnion */
export type WorkloadNetworkDhcpEntityUnion =
  | WorkloadNetworkDhcpServer
  | WorkloadNetworkDhcpRelay
  | WorkloadNetworkDhcpEntity;
/** Alias for WorkloadNetworkDhcpProvisioningState */
export type WorkloadNetworkDhcpProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for WorkloadNetworkSegmentProvisioningState */
export type WorkloadNetworkSegmentProvisioningState =
  | string
  | WorkloadNetworkProvisioningState;
/** Alias for GlobalReachConnectionProvisioningState */
export type GlobalReachConnectionProvisioningState =
  | string
  | ResourceProvisioningState
  | "Updating";
/** Alias for ExpressRouteAuthorizationProvisioningState */
export type ExpressRouteAuthorizationProvisioningState =
  | string
  | ResourceProvisioningState
  | "Updating";
/** Alias for HcxEnterpriseSiteProvisioningState */
export type HcxEnterpriseSiteProvisioningState =
  | string
  | ResourceProvisioningState;
/** Alias for DatastoreProvisioningState */
export type DatastoreProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Pending"
  | "Creating"
  | "Updating"
  | "Deleting";
/** Alias for ClusterProvisioningState */
export type ClusterProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Deleting"
  | "Updating";
/** Alias for PrivateCloudProvisioningState */
export type PrivateCloudProvisioningState =
  | string
  | ResourceProvisioningState
  | "Cancelled"
  | "Pending"
  | "Building"
  | "Deleting"
  | "Updating";
