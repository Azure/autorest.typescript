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
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   *
   * Possible values: "user", "system", "user,system"
   */
  readonly origin?: OriginOutput;
  /**
   * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   *
   * Possible values: "Internal"
   */
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

/** The resource model definition representing SKU */
export interface SkuOutput {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTierOutput;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Subscription trial availability */
export interface TrialOutput {
  /**
   * Trial status
   *
   * Possible values: "TrialAvailable", "TrialUsed", "TrialDisabled"
   */
  readonly status?: TrialStatusOutput;
  /** Number of trial hosts available */
  readonly availableHosts?: number;
}

/** Subscription quotas */
export interface QuotaOutput {
  /** Remaining hosts quota by sku type */
  readonly hostsRemaining?: Record<string, number>;
  /**
   * Host quota is active for current subscription
   *
   * Possible values: "Enabled", "Disabled"
   */
  readonly quotaEnabled?: QuotaEnabledOutput;
}

/** A private cloud resource */
export interface PrivateCloudOutput extends TrackedResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: PrivateCloudPropertiesOutput;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: SkuOutput;
  /** The managed service identities assigned to this resource. */
  identity?: SystemAssignedServiceIdentityOutput;
}

/** The properties of a private cloud resource */
export interface PrivateCloudPropertiesOutput {
  /** The default cluster used for management */
  managementCluster: ManagementClusterOutput;
  /**
   * Connectivity to internet is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  internet?: InternetEnumOutput;
  /** vCenter Single Sign On Identity Sources */
  identitySources?: Array<IdentitySourceOutput>;
  /** Properties describing how the cloud is distributed across availability zones */
  availability?: AvailabilityPropertiesOutput;
  /** Customer managed key encryption, can be enabled or disabled */
  encryption?: EncryptionOutput;
  /**
   * Array of additional networks noncontiguous with networkBlock. Networks must be
   * unique and non-overlapping across VNet in your subscription, on-premise, and
   * this privateCloud networkBlock attribute. Make sure the CIDR format conforms to
   * (A.B.C.D/X).
   */
  extendedNetworkBlocks?: string[];
  /**
   * The provisioning state
   *
   * Possible values: "Cancelled", "Pending", "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: PrivateCloudProvisioningStateOutput;
  /** An ExpressRoute Circuit */
  circuit?: CircuitOutput;
  /** The endpoints */
  readonly endpoints?: EndpointsOutput;
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
  secondaryCircuit?: CircuitOutput;
  /**
   * Flag to indicate whether the private cloud has the quota for provisioned NSX
   * Public IP count raised from 64 to 1024
   *
   * Possible values: "Enabled", "Disabled"
   */
  readonly nsxPublicIpQuotaRaised?: NsxPublicIpQuotaRaisedEnumOutput;
  /** Azure resource ID of the virtual network */
  virtualNetworkId?: string;
  /**
   * The type of DNS zone to use.
   *
   * Possible values: "Public", "Private"
   */
  dnsZoneType?: DnsZoneTypeOutput;
}

/** The properties of a management cluster */
export interface ManagementClusterOutput {
  /** The cluster size */
  clusterSize?: number;
  /**
   * The state of the cluster provisioning
   *
   * Possible values: "Cancelled", "Deleting", "Updating"
   */
  readonly provisioningState?: ClusterProvisioningStateOutput;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** vCenter Single Sign On Identity Source */
export interface IdentitySourceOutput {
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
  /**
   * Protect LDAP communication using SSL certificate (LDAPS)
   *
   * Possible values: "Enabled", "Disabled"
   */
  ssl?: SslEnumOutput;
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

/** The properties describing private cloud availability zone distribution */
export interface AvailabilityPropertiesOutput {
  /**
   * The availability strategy for the private cloud
   *
   * Possible values: "SingleZone", "DualZone"
   */
  strategy?: AvailabilityStrategyOutput;
  /** The primary availability zone for the private cloud */
  zone?: number;
  /** The secondary availability zone for the private cloud */
  secondaryZone?: number;
}

/** The properties of customer managed encryption key */
export interface EncryptionOutput {
  /**
   * Status of customer managed encryption key
   *
   * Possible values: "Enabled", "Disabled"
   */
  status?: EncryptionStateOutput;
  /** The key vault where the encryption key is stored */
  keyVaultProperties?: EncryptionKeyVaultPropertiesOutput;
}

/** An Encryption Key */
export interface EncryptionKeyVaultPropertiesOutput {
  /** The name of the key. */
  keyName?: string;
  /** The version of the key. */
  keyVersion?: string;
  /** The auto-detected version of the key if versionType is auto-detected. */
  readonly autoDetectedKeyVersion?: string;
  /** The URL of the vault. */
  keyVaultUrl?: string;
  /**
   * The state of key provided
   *
   * Possible values: "Connected", "AccessDenied"
   */
  readonly keyState?: EncryptionKeyStatusOutput;
  /**
   * Property of the key if user provided or auto detected
   *
   * Possible values: "Fixed", "AutoDetected"
   */
  readonly versionType?: EncryptionVersionTypeOutput;
}

/** An ExpressRoute Circuit */
export interface CircuitOutput {
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
export interface EndpointsOutput {
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

/** Managed service identity (either system assigned, or none) */
export interface SystemAssignedServiceIdentityOutput {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /**
   * The type of managed identity assigned to this resource.
   *
   * Possible values: "None", "SystemAssigned"
   */
  type: SystemAssignedServiceIdentityTypeOutput;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
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
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByTypeOutput;
  /** The timestamp of resource creation (UTC). */
  createdAt?: string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResourceOutput extends ResourceOutput {}

/** A location resource */
export interface LocationOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: LocationPropertiesOutput;
}

/** The properties of a location resource */
export interface LocationPropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
}

/** A cluster resource */
export interface ClusterOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ClusterPropertiesOutput;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku: SkuOutput;
}

/** The properties of a cluster */
export interface ClusterPropertiesOutput {
  /** The cluster size */
  clusterSize?: number;
  /**
   * The state of the cluster provisioning
   *
   * Possible values: "Cancelled", "Deleting", "Updating"
   */
  readonly provisioningState?: ClusterProvisioningStateOutput;
  /** The identity */
  readonly clusterId?: number;
  /** The hosts */
  hosts?: string[];
  /** Name of the vsan datastore associated with the cluster */
  vsanDatastoreName?: string;
}

/** A datastore resource */
export interface DatastoreOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: DatastorePropertiesOutput;
}

/** The properties of a datastore */
export interface DatastorePropertiesOutput {
  /**
   * The state of the datastore provisioning
   *
   * Possible values: "Cancelled", "Pending", "Creating", "Updating", "Deleting"
   */
  readonly provisioningState?: DatastoreProvisioningStateOutput;
  /** An Azure NetApp Files volume */
  netAppVolume?: NetAppVolumeOutput;
  /** An iSCSI volume */
  diskPoolVolume?: DiskPoolVolumeOutput;
  /** An Elastic SAN volume */
  elasticSanVolume?: ElasticSanVolumeOutput;
  /**
   * The operational status of the datastore
   *
   * Possible values: "Unknown", "Accessible", "Inaccessible", "Attached", "Detached", "LostCommunication", "DeadOrError"
   */
  readonly status?: DatastoreStatusOutput;
}

/** An Azure NetApp Files volume from Microsoft.NetApp provider */
export interface NetAppVolumeOutput {
  /** Azure resource ID of the NetApp volume */
  id: string;
}

/** An iSCSI volume from Microsoft.StoragePool provider */
export interface DiskPoolVolumeOutput {
  /** Azure resource ID of the iSCSI target */
  targetId: string;
  /** Name of the LUN to be used for datastore */
  lunName: string;
  /**
   * Mode that describes whether the LUN has to be mounted as a datastore or
   * attached as a LUN
   *
   * Possible values: "MOUNT", "ATTACH"
   */
  mountOption?: MountOptionEnumOutput;
  /** Device path */
  readonly path?: string;
}

/** An Elastic SAN volume from Microsoft.ElasticSan provider */
export interface ElasticSanVolumeOutput {
  /** Azure resource ID of the Elastic SAN Volume */
  targetId: string;
}

/** An HCX Enterprise Site resource */
export interface HcxEnterpriseSiteOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: HcxEnterpriseSitePropertiesOutput;
}

/** The properties of an HCX Enterprise Site */
export interface HcxEnterpriseSitePropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
  /** The activation key */
  readonly activationKey?: string;
  /**
   * The status of the HCX Enterprise Site
   *
   * Possible values: "Available", "Consumed", "Deactivated", "Deleted"
   */
  readonly status?: HcxEnterpriseSiteStatusOutput;
}

/** ExpressRoute Circuit Authorization */
export interface ExpressRouteAuthorizationOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ExpressRouteAuthorizationPropertiesOutput;
}

/** The properties of an ExpressRoute Circuit Authorization resource */
export interface ExpressRouteAuthorizationPropertiesOutput {
  /**
   * The state of the ExpressRoute Circuit Authorization provisioning
   *
   * Possible values: "Updating"
   */
  readonly provisioningState?: ExpressRouteAuthorizationProvisioningStateOutput;
  /** The ID of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationId?: string;
  /** The key of the ExpressRoute Circuit Authorization */
  readonly expressRouteAuthorizationKey?: string;
  /** The ID of the ExpressRoute Circuit */
  expressRouteId?: string;
}

/** A global reach connection resource */
export interface GlobalReachConnectionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: GlobalReachConnectionPropertiesOutput;
}

/** The properties of a global reach connection */
export interface GlobalReachConnectionPropertiesOutput {
  /**
   * The state of the  ExpressRoute Circuit Authorization provisioning
   *
   * Possible values: "Updating"
   */
  readonly provisioningState?: GlobalReachConnectionProvisioningStateOutput;
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
  /**
   * The connection status of the global reach connection
   *
   * Possible values: "Connected", "Connecting", "Disconnected"
   */
  readonly circuitConnectionStatus?: GlobalReachConnectionStatusOutput;
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

/** Workload Network */
export interface WorkloadNetworkOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPropertiesOutput;
}

/** The properties of a workload network */
export interface WorkloadNetworkPropertiesOutput {
  /**
   * The provisioning state of the resource.
   *
   * Possible values: "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: WorkloadNetworkProvisioningStateOutput;
}

/** NSX Segment */
export interface WorkloadNetworkSegmentOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkSegmentPropertiesOutput;
}

/** NSX Segment Properties */
export interface WorkloadNetworkSegmentPropertiesOutput {
  /** Display name of the segment. */
  displayName?: string;
  /** Gateway which to connect segment to. */
  connectedGateway?: string;
  /** Subnet which to connect segment to. */
  subnet?: WorkloadNetworkSegmentSubnetOutput;
  /** Port Vif which segment is associated with. */
  readonly portVif?: Array<WorkloadNetworkSegmentPortVifOutput>;
  /**
   * Segment status.
   *
   * Possible values: "SUCCESS", "FAILURE"
   */
  readonly status?: SegmentStatusEnumOutput;
  /** The provisioning state */
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
}

/** Subnet configuration for segment */
export interface WorkloadNetworkSegmentSubnetOutput {
  /** DHCP Range assigned for subnet. */
  dhcpRanges?: string[];
  /** Gateway address. */
  gatewayAddress?: string;
}

/** Ports and any VIF attached to segment. */
export interface WorkloadNetworkSegmentPortVifOutput {
  /** Name of port or VIF attached to segment. */
  portName?: string;
}

/** NSX DHCP */
export interface WorkloadNetworkDhcpOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDhcpEntityOutput;
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export interface WorkloadNetworkDhcpEntityOutputParent {
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Segments consuming DHCP. */
  readonly segments?: string[];
  /** The provisioning state */
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
  dhcpType: DhcpTypeEnumOutput;
}

/** NSX DHCP Server */
export interface WorkloadNetworkDhcpServerOutput
  extends WorkloadNetworkDhcpEntityOutputParent {
  /** DHCP Server Address. */
  serverAddress?: string;
  /** DHCP Server Lease Time. */
  leaseTime?: number;
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "SERVER";
}

/** NSX DHCP Relay */
export interface WorkloadNetworkDhcpRelayOutput
  extends WorkloadNetworkDhcpEntityOutputParent {
  /** DHCP Relay Addresses. Max 3. */
  serverAddresses?: string[];
  /** Type of DHCP: SERVER or RELAY. */
  dhcpType: "RELAY";
}

/** NSX Gateway. */
export interface WorkloadNetworkGatewayOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkGatewayPropertiesOutput;
}

/** Properties of a NSX Gateway. */
export interface WorkloadNetworkGatewayPropertiesOutput {
  /**
   * The provisioning state of the resource.
   *
   * Possible values: "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: WorkloadNetworkProvisioningStateOutput;
  /** Display name of the DHCP entity. */
  displayName?: string;
  /** NSX Gateway Path. */
  readonly path?: string;
}

/** NSX Port Mirroring */
export interface WorkloadNetworkPortMirroringOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPortMirroringPropertiesOutput;
}

/** NSX Port Mirroring Properties */
export interface WorkloadNetworkPortMirroringPropertiesOutput {
  /** Display name of the port mirroring profile. */
  displayName?: string;
  /**
   * Direction of port mirroring profile.
   *
   * Possible values: "INGRESS", "EGRESS", "BIDIRECTIONAL"
   */
  direction?: PortMirroringDirectionEnumOutput;
  /** Source VM Group. */
  source?: string;
  /** Destination VM Group. */
  destination?: string;
  /**
   * Port Mirroring Status.
   *
   * Possible values: "SUCCESS", "FAILURE"
   */
  readonly status?: PortMirroringStatusEnumOutput;
  /** The provisioning state */
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
}

/** NSX VM Group */
export interface WorkloadNetworkVMGroupOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVMGroupPropertiesOutput;
}

/** NSX VM Group Properties */
export interface WorkloadNetworkVMGroupPropertiesOutput {
  /** Display name of the VM group. */
  displayName?: string;
  /** Virtual machine members of this group. */
  members?: string[];
  /**
   * VM Group status.
   *
   * Possible values: "SUCCESS", "FAILURE"
   */
  readonly status?: VMGroupStatusEnumOutput;
  /** The provisioning state */
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
}

/** NSX Virtual Machine */
export interface WorkloadNetworkVirtualMachineOutput
  extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkVirtualMachinePropertiesOutput;
}

/** NSX Virtual Machine Properties */
export interface WorkloadNetworkVirtualMachinePropertiesOutput {
  /**
   * The provisioning state of the resource.
   *
   * Possible values: "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: WorkloadNetworkProvisioningStateOutput;
  /** Display name of the VM. */
  displayName?: string;
  /**
   * Virtual machine type.
   *
   * Possible values: "REGULAR", "EDGE", "SERVICE"
   */
  readonly vmType?: VMTypeEnumOutput;
}

/** NSX DNS Service */
export interface WorkloadNetworkDnsServiceOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsServicePropertiesOutput;
}

/** NSX DNS Service Properties */
export interface WorkloadNetworkDnsServicePropertiesOutput {
  /** Display name of the DNS Service. */
  displayName?: string;
  /** DNS service IP of the DNS Service. */
  dnsServiceIp?: string;
  /** Default DNS zone of the DNS Service. */
  defaultDnsZone?: string;
  /** FQDN zones of the DNS Service. */
  fqdnZones?: string[];
  /**
   * DNS Service log level.
   *
   * Possible values: "DEBUG", "INFO", "WARNING", "ERROR", "FATAL"
   */
  logLevel?: DnsServiceLogLevelEnumOutput;
  /**
   * DNS Service status.
   *
   * Possible values: "SUCCESS", "FAILURE"
   */
  readonly status?: DnsServiceStatusEnumOutput;
  /** The provisioning state */
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
}

/** NSX DNS Zone */
export interface WorkloadNetworkDnsZoneOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkDnsZonePropertiesOutput;
}

/** NSX DNS Zone Properties */
export interface WorkloadNetworkDnsZonePropertiesOutput {
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
  readonly provisioningState?;
  /** NSX revision number. */
  revision?: number;
}

/** NSX Public IP Block */
export interface WorkloadNetworkPublicIPOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: WorkloadNetworkPublicIPPropertiesOutput;
}

/** NSX Public IP Block Properties */
export interface WorkloadNetworkPublicIPPropertiesOutput {
  /** Display name of the Public IP Block. */
  displayName?: string;
  /** Number of Public IPs requested. */
  numberOfPublicIPs?: number;
  /** CIDR Block of the Public IP Block. */
  readonly publicIPBlock?: string;
  /** The provisioning state */
  readonly provisioningState?;
}

/** A cloud link resource */
export interface CloudLinkOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: CloudLinkPropertiesOutput;
}

/** The properties of a cloud link. */
export interface CloudLinkPropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
  /**
   * The state of the cloud link.
   *
   * Possible values: "Active", "Building", "Deleting", "Failed", "Disconnected"
   */
  readonly status?: CloudLinkStatusOutput;
  /** Identifier of the other private cloud participating in the link. */
  linkedCloud?: string;
}

/** An addon resource */
export interface AddonOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: AddonPropertiesOutput;
}

/** The properties of an addon */
export interface AddonPropertiesOutputParent {
  /**
   * The state of the addon provisioning
   *
   * Possible values: "Cancelled", "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: AddonProvisioningStateOutput;
  addonType: AddonTypeOutput;
}

/** The properties of a Site Recovery Manager (SRM) addon */
export interface AddonSrmPropertiesOutput extends AddonPropertiesOutputParent {
  /** The Site Recovery Manager (SRM) license */
  licenseKey?: string;
  /** The type of private cloud addon */
  addonType: "SRM";
}

/** The properties of a vSphere Replication (VR) addon */
export interface AddonVrPropertiesOutput extends AddonPropertiesOutputParent {
  /** The vSphere Replication Server (VRS) count */
  vrsCount: number;
  /** The type of private cloud addon */
  addonType: "VR";
}

/** The properties of an HCX addon */
export interface AddonHcxPropertiesOutput extends AddonPropertiesOutputParent {
  /** The HCX offer, example VMware MaaS Cloud Provider (Enterprise) */
  offer: string;
  /** The type of private cloud addon */
  addonType: "HCX";
}

/** The properties of an Arc addon */
export interface AddonArcPropertiesOutput extends AddonPropertiesOutputParent {
  /** The VMware vCenter resource ID */
  vCenter?: string;
  /** The type of private cloud addon */
  addonType: "Arc";
}

/** Virtual Machine */
export interface VirtualMachineOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: VirtualMachinePropertiesOutput;
}

/** Virtual Machine Properties */
export interface VirtualMachinePropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
  /** Display name of the VM. */
  readonly displayName?: string;
  /** Virtual machine managed object reference id */
  readonly moRefId?: string;
  /** Path to virtual machine's folder starting from datacenter virtual machine folder */
  readonly folderPath?: string;
  /**
   * Whether VM DRS-driven movement is restricted (enabled) or not (disabled)
   *
   * Possible values: "Enabled", "Disabled"
   */
  readonly restrictMovement?: VirtualMachineRestrictMovementStateOutput;
}

/** A vSphere Distributed Resource Scheduler (DRS) placement policy */
export interface PlacementPolicyOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: PlacementPolicyPropertiesOutput;
}

/** Abstract placement policy properties */
export interface PlacementPolicyPropertiesOutputParent {
  /**
   * Whether the placement policy is enabled or disabled
   *
   * Possible values: "Enabled", "Disabled"
   */
  state?: PlacementPolicyStateOutput;
  /** Display name of the placement policy */
  displayName?: string;
  /** The provisioning state */
  readonly provisioningState?;
  type: PlacementPolicyTypeOutput;
}

/** VM-VM placement policy properties */
export interface VmVmPlacementPolicyPropertiesOutput
  extends PlacementPolicyPropertiesOutputParent {
  /** Virtual machine members list */
  vmMembers: string[];
  /**
   * placement policy affinity type
   *
   * Possible values: "Affinity", "AntiAffinity"
   */
  affinityType: AffinityTypeOutput;
  /** placement policy type */
  type: "VmVm";
}

/** VM-Host placement policy properties */
export interface VmHostPlacementPolicyPropertiesOutput
  extends PlacementPolicyPropertiesOutputParent {
  /** Virtual machine members list */
  vmMembers: string[];
  /** Host members list */
  hostMembers: string[];
  /**
   * placement policy affinity type
   *
   * Possible values: "Affinity", "AntiAffinity"
   */
  affinityType: AffinityTypeOutput;
  /**
   * vm-host placement policy affinity strength (should/must)
   *
   * Possible values: "Should", "Must"
   */
  affinityStrength?: AffinityStrengthOutput;
  /**
   * placement policy azure hybrid benefit opt-in type
   *
   * Possible values: "SqlHost", "None"
   */
  azureHybridBenefitType?: AzureHybridBenefitTypeOutput;
  /** placement policy type */
  type: "VmHost";
}

/** Script Package resources available for execution */
export interface ScriptPackageOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ScriptPackagePropertiesOutput;
}

/** Properties of a Script Package subresource */
export interface ScriptPackagePropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
  /** User friendly description of the package */
  readonly description?: string;
  /** Module version */
  readonly version?: string;
  /** Company that created and supports the package */
  readonly company?: string;
  /** Link to support by the package vendor */
  readonly uri?: string;
}

/** A cmdlet available for script execution */
export interface ScriptCmdletOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ScriptCmdletPropertiesOutput;
}

/** Properties of a pre-canned script */
export interface ScriptCmdletPropertiesOutput {
  /** The provisioning state of the resource. */
  readonly provisioningState?;
  /** Description of the scripts functionality */
  readonly description?: string;
  /** Recommended time limit for execution */
  readonly timeout?: string;
  /**
   * Specifies whether a script cmdlet is intended to be invoked only through automation or visible to customers
   *
   * Possible values: "Automation", "Any"
   */
  readonly audience?: ScriptCmdletAudienceOutput;
  /** Parameters the script will accept */
  readonly parameters?: Array<ScriptParameterOutput>;
}

/** An parameter that the script will accept */
export interface ScriptParameterOutput {
  /**
   * The type of parameter the script is expecting. psCredential is a
   * PSCredentialObject
   *
   * Possible values: "String", "SecureString", "Credential", "Int", "Bool", "Float"
   */
  readonly type?: ScriptParameterTypesOutput;
  /** The parameter name that the script will expect a parameter value for */
  name?: string;
  /** User friendly description of the parameter */
  readonly description?: string;
  /**
   * Should this parameter be visible to arm and passed in the parameters argument
   * when executing
   *
   * Possible values: "Visible", "Hidden"
   */
  readonly visibility?: VisibilityParameterEnumOutput;
  /**
   * Is this parameter required or optional
   *
   * Possible values: "Optional", "Required"
   */
  readonly optional?: OptionalParamEnumOutput;
}

/** An instance of a script executed by a user - custom or AVS */
export interface ScriptExecutionOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ScriptExecutionPropertiesOutput;
}

/** Properties of a user-invoked script */
export interface ScriptExecutionPropertiesOutput {
  /** A reference to the script cmdlet resource if user is running a AVS script */
  scriptCmdletId?: string;
  /** Parameters the script will accept */
  parameters?: Array<ScriptExecutionParameterOutput>;
  /**
   * Parameters that will be hidden/not visible to ARM, such as passwords and
   * credentials
   */
  hiddenParameters?: Array<ScriptExecutionParameterOutput>;
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
  readonly submittedAt?: string;
  /** Time the script execution was started */
  readonly startedAt?: string;
  /** Time the script execution was finished */
  readonly finishedAt?: string;
  /**
   * The state of the script execution resource
   *
   * Possible values: "Pending", "Running", "Cancelling", "Cancelled", "Deleting"
   */
  readonly provisioningState?: ScriptExecutionProvisioningStateOutput;
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
export interface ScriptExecutionParameterOutputParent {
  /** The parameter name */
  name: string;
  type: ScriptExecutionParameterTypeOutput;
}

/** a plain text value execution parameter */
export interface ScriptSecureStringExecutionParameterOutput
  extends ScriptExecutionParameterOutputParent {
  /** A secure value for the passed parameter, not to be stored in logs */
  secureValue?: string;
  /** The type of execution parameter */
  type: "SecureValue";
}

/** a plain text value execution parameter */
export interface ScriptStringExecutionParameterOutput
  extends ScriptExecutionParameterOutputParent {
  /** The value for the passed parameter */
  value?: string;
  /** The type of execution parameter */
  type: "Value";
}

/** a powershell credential object */
export interface PSCredentialExecutionParameterOutput
  extends ScriptExecutionParameterOutputParent {
  /** username for login */
  username?: string;
  /** password for login */
  password?: string;
  /** The type of execution parameter */
  type: "Credential";
}

/** An iSCSI path resource */
export interface IscsiPathOutput extends ProxyResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: IscsiPathPropertiesOutput;
}

/** The properties of an iSCSI path resource */
export interface IscsiPathPropertiesOutput {
  /**
   * The state of the iSCSI path provisioning
   *
   * Possible values: "Pending", "Building", "Deleting", "Updating"
   */
  readonly provisioningState?: IscsiPathProvisioningStateOutput;
  /** CIDR Block for iSCSI path. */
  networkBlock: string;
}

/** The base extension resource. */
export interface ExtensionResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag?: string;
}

/** A private link resource. */
export interface PrivateLinkResourceOutput extends ResourceOutput {
  /** Resource properties. */
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

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Creating", "Deleting", "Failed"
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The Private Endpoint resource. */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatusOutput;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySetOutput
  extends TrackedResourceOutput {
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource.
   * If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.
   * If supported, the resource provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.
   * Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19),
   * If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
   */
  eTag?: string;
  identity?: IdentityOutput;
  sku?: SkuOutput;
  plan?: PlanOutput;
}

/** Identity for the resource. */
export interface IdentityOutput {
  /** The principal ID of resource identity. The value must be an UUID. */
  readonly principalId?: string;
  /** The tenant ID of resource. The value must be an UUID. */
  readonly tenantId?: string;
  /** The identity type. */
  type?: ResourceIdentityTypeOutput;
}

/** Plan for the resource. */
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

/** Administrative credentials for accessing vCenter and NSX-T */
export interface AdminCredentialsOutput {
  /** NSX-T Manager username */
  readonly nsxtUsername?: string;
  /** NSX-T Manager password */
  readonly nsxtPassword?: string;
  /** vCenter admin username */
  readonly vcenterUsername?: string;
  /** vCenter admin password */
  readonly vcenterPassword?: string;
}

/** List of all zones and associated hosts for a cluster */
export interface ClusterZoneListOutput {
  /** Zone and associated hosts info */
  zones?: Array<ClusterZoneOutput>;
}

/** Zone and associated hosts info */
export interface ClusterZoneOutput {
  /** List of hosts belonging to the availability zone in a cluster */
  readonly hosts?: string[];
  /** Availability zone identifier */
  readonly zone?: string;
}

/**
 * Base class for WorkloadNetworkDhcpServer and WorkloadNetworkDhcpRelay to
 * inherit from
 */
export type WorkloadNetworkDhcpEntityOutput =
  | WorkloadNetworkDhcpEntityOutputParent
  | WorkloadNetworkDhcpServerOutput
  | WorkloadNetworkDhcpRelayOutput;
/** The properties of an addon */
export type AddonPropertiesOutput =
  | AddonPropertiesOutputParent
  | AddonSrmPropertiesOutput
  | AddonVrPropertiesOutput
  | AddonHcxPropertiesOutput
  | AddonArcPropertiesOutput;
/** Abstract placement policy properties */
export type PlacementPolicyPropertiesOutput =
  | PlacementPolicyPropertiesOutputParent
  | VmVmPlacementPolicyPropertiesOutput
  | VmHostPlacementPolicyPropertiesOutput;
/** The arguments passed in to the execution */
export type ScriptExecutionParameterOutput =
  | ScriptExecutionParameterOutputParent
  | ScriptSecureStringExecutionParameterOutput
  | ScriptStringExecutionParameterOutput
  | PSCredentialExecutionParameterOutput;
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export type OperationListResultOutput = Paged<OperationOutput>;
/** Alias for OriginOutput */
export type OriginOutput = string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = string;
/** Alias for SkuTierOutput */
export type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for TrialStatusOutput */
export type TrialStatusOutput = string;
/** Alias for QuotaEnabledOutput */
export type QuotaEnabledOutput = string;
/** The response of a PrivateCloud list operation. */
export type PrivateCloudListOutput = Paged<PrivateCloudOutput>;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput = string;
/** Alias for ClusterProvisioningStateOutput */
export type ClusterProvisioningStateOutput = string;
/** Alias for InternetEnumOutput */
export type InternetEnumOutput = string;
/** Alias for SslEnumOutput */
export type SslEnumOutput = string;
/** Alias for AvailabilityStrategyOutput */
export type AvailabilityStrategyOutput = string;
/** Alias for EncryptionStateOutput */
export type EncryptionStateOutput = string;
/** Alias for EncryptionKeyStatusOutput */
export type EncryptionKeyStatusOutput = string;
/** Alias for EncryptionVersionTypeOutput */
export type EncryptionVersionTypeOutput = string;
/** Alias for PrivateCloudProvisioningStateOutput */
export type PrivateCloudProvisioningStateOutput = string;
/** Alias for NsxPublicIpQuotaRaisedEnumOutput */
export type NsxPublicIpQuotaRaisedEnumOutput = string;
/** Alias for DnsZoneTypeOutput */
export type DnsZoneTypeOutput = string;
/** Alias for SystemAssignedServiceIdentityTypeOutput */
export type SystemAssignedServiceIdentityTypeOutput = string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput = string;
/** Alias for DatastoreProvisioningStateOutput */
export type DatastoreProvisioningStateOutput = string;
/** Alias for MountOptionEnumOutput */
export type MountOptionEnumOutput = string;
/** Alias for DatastoreStatusOutput */
export type DatastoreStatusOutput = string;
/** Alias for HcxEnterpriseSiteStatusOutput */
export type HcxEnterpriseSiteStatusOutput = string;
/** Alias for ExpressRouteAuthorizationProvisioningStateOutput */
export type ExpressRouteAuthorizationProvisioningStateOutput = string;
/** Alias for GlobalReachConnectionProvisioningStateOutput */
export type GlobalReachConnectionProvisioningStateOutput = string;
/** Alias for GlobalReachConnectionStatusOutput */
export type GlobalReachConnectionStatusOutput = string;
/** Alias for WorkloadNetworkProvisioningStateOutput */
export type WorkloadNetworkProvisioningStateOutput = string;
/** Alias for SegmentStatusEnumOutput */
export type SegmentStatusEnumOutput = string;
/** Alias for DhcpTypeEnumOutput */
export type DhcpTypeEnumOutput = string;
/** Alias for PortMirroringDirectionEnumOutput */
export type PortMirroringDirectionEnumOutput = string;
/** Alias for PortMirroringStatusEnumOutput */
export type PortMirroringStatusEnumOutput = string;
/** Alias for VMGroupStatusEnumOutput */
export type VMGroupStatusEnumOutput = string;
/** Alias for VMTypeEnumOutput */
export type VMTypeEnumOutput = string;
/** Alias for DnsServiceLogLevelEnumOutput */
export type DnsServiceLogLevelEnumOutput = string;
/** Alias for DnsServiceStatusEnumOutput */
export type DnsServiceStatusEnumOutput = string;
/** Alias for CloudLinkStatusOutput */
export type CloudLinkStatusOutput = string;
/** Alias for AddonTypeOutput */
export type AddonTypeOutput = string;
/** Alias for AddonProvisioningStateOutput */
export type AddonProvisioningStateOutput = string;
/** Alias for VirtualMachineRestrictMovementStateOutput */
export type VirtualMachineRestrictMovementStateOutput = string;
/** Alias for PlacementPolicyTypeOutput */
export type PlacementPolicyTypeOutput = string;
/** Alias for PlacementPolicyStateOutput */
export type PlacementPolicyStateOutput = string;
/** Alias for AffinityTypeOutput */
export type AffinityTypeOutput = string;
/** Alias for AffinityStrengthOutput */
export type AffinityStrengthOutput = string;
/** Alias for AzureHybridBenefitTypeOutput */
export type AzureHybridBenefitTypeOutput = string;
/** Alias for ScriptCmdletAudienceOutput */
export type ScriptCmdletAudienceOutput = string;
/** Alias for ScriptParameterTypesOutput */
export type ScriptParameterTypesOutput = string;
/** Alias for VisibilityParameterEnumOutput */
export type VisibilityParameterEnumOutput = string;
/** Alias for OptionalParamEnumOutput */
export type OptionalParamEnumOutput = string;
/** Alias for ScriptExecutionParameterTypeOutput */
export type ScriptExecutionParameterTypeOutput = string;
/** Alias for ScriptExecutionProvisioningStateOutput */
export type ScriptExecutionProvisioningStateOutput = string;
/** Alias for IscsiPathProvisioningStateOutput */
export type IscsiPathProvisioningStateOutput = string;
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput = string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput = string;
/** Alias for ResourceIdentityTypeOutput */
export type ResourceIdentityTypeOutput = "SystemAssigned";
/** The response of a Cluster list operation. */
export type ClusterListOutput = Paged<ClusterOutput>;
/** The response of a Datastore list operation. */
export type DatastoreListOutput = Paged<DatastoreOutput>;
/** The response of a HcxEnterpriseSite list operation. */
export type HcxEnterpriseSiteListOutput = Paged<HcxEnterpriseSiteOutput>;
/** The response of a ExpressRouteAuthorization list operation. */
export type ExpressRouteAuthorizationListOutput =
  Paged<ExpressRouteAuthorizationOutput>;
/** The response of a GlobalReachConnection list operation. */
export type GlobalReachConnectionListOutput =
  Paged<GlobalReachConnectionOutput>;
/** The response of a WorkloadNetwork list operation. */
export type WorkloadNetworkListOutput = Paged<WorkloadNetworkOutput>;
/** The response of a WorkloadNetworkSegment list operation. */
export type WorkloadNetworkSegmentsListOutput =
  Paged<WorkloadNetworkSegmentOutput>;
/** The response of a WorkloadNetworkDhcp list operation. */
export type WorkloadNetworkDhcpListOutput = Paged<WorkloadNetworkDhcpOutput>;
/** The response of a WorkloadNetworkGateway list operation. */
export type WorkloadNetworkGatewayListOutput =
  Paged<WorkloadNetworkGatewayOutput>;
/** The response of a WorkloadNetworkPortMirroring list operation. */
export type WorkloadNetworkPortMirroringListOutput =
  Paged<WorkloadNetworkPortMirroringOutput>;
/** The response of a WorkloadNetworkVMGroup list operation. */
export type WorkloadNetworkVMGroupsListOutput =
  Paged<WorkloadNetworkVMGroupOutput>;
/** The response of a WorkloadNetworkVirtualMachine list operation. */
export type WorkloadNetworkVirtualMachinesListOutput =
  Paged<WorkloadNetworkVirtualMachineOutput>;
/** The response of a WorkloadNetworkDnsService list operation. */
export type WorkloadNetworkDnsServicesListOutput =
  Paged<WorkloadNetworkDnsServiceOutput>;
/** The response of a WorkloadNetworkDnsZone list operation. */
export type WorkloadNetworkDnsZonesListOutput =
  Paged<WorkloadNetworkDnsZoneOutput>;
/** The response of a WorkloadNetworkPublicIP list operation. */
export type WorkloadNetworkPublicIPsListOutput =
  Paged<WorkloadNetworkPublicIPOutput>;
/** The response of a CloudLink list operation. */
export type CloudLinkListOutput = Paged<CloudLinkOutput>;
/** The response of a Addon list operation. */
export type AddonListOutput = Paged<AddonOutput>;
/** The response of a VirtualMachine list operation. */
export type VirtualMachinesListOutput = Paged<VirtualMachineOutput>;
/** The response of a PlacementPolicy list operation. */
export type PlacementPoliciesListOutput = Paged<PlacementPolicyOutput>;
/** The response of a ScriptPackage list operation. */
export type ScriptPackagesListOutput = Paged<ScriptPackageOutput>;
/** The response of a ScriptCmdlet list operation. */
export type ScriptCmdletsListOutput = Paged<ScriptCmdletOutput>;
/** The response of a ScriptExecution list operation. */
export type ScriptExecutionsListOutput = Paged<ScriptExecutionOutput>;
/** The response of a IscsiPath list operation. */
export type IscsiPathListResultOutput = Paged<IscsiPathOutput>;
